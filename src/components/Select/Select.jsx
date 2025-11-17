import './Select.scss'
import getIdFromTitle from "@/utils/getIdFromTitle.js"
import classNames from "classnames"

const Select = (props) => {
  const  {
    id = getIdFromTitle(props.label),
    label,
    isLabelHidden = true,
    options = [],
    buttonClassName,
  } = props

  const IDs = {
    originalControl: id,
    label: `${id}-label`,
    dropdown: `${id}-dropdown`,
  }

  const selectedOptions = options.find(({ isSelected })=> isSelected) ?? options[0]

  return (
    <div className='select' data-js-select=''>
      <label
        className={classNames('select__label', {
          'visually-hidden': isLabelHidden,
        })}
        id={IDs.label}
        htmlFor={IDs.originalControl}
      >
        {label}
      </label>
      <select
        className={classNames(buttonClassName, 'select__original-control')}
        id={IDs.originalControl}
        tabIndex={-1}
        data-js-select-original-control=""
        defaultValue={selectedOptions.value}
      >
        {options.map(({ value }, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
      <div className="select__body">
        <div
          className={classNames(buttonClassName,'select__button')}
          tabIndex={0}
          role="combobox"
          aria-expanded={false}
          aria-haspopup="listbox"
          aria-controls={IDs.dropdown}
          aria-labelledby={IDs.label}
          data-js-select-button=""
        >
          {selectedOptions.value}
        </div>
        <div
          className="select__dropdown"
          id={IDs.dropdown}
          role="listbox"
          aria-labelledby={IDs.label}
          data-js-select-dropdown=""
        >
          {options.map((option, index) => {
            const {
              value,
              isSelected= false,
            } = option

            return (
              <div
                className={classNames('select__option', {
                  'is-selected': isSelected,
                  'is-current': isSelected,
                })}
                id={`${id}-option-${index}`}
                role="option"
                aria-selected={isSelected}
                data-js-select-option=""
                key={index}
              >
                {value}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Select