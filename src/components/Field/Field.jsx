import './Field.scss'
import getIdFromTitle from "@/utils/getIdFromTitle.js";
import classNames from "classnames";

const Field = (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    /**
     * undefined (default) | email | textarea
     */
    type,
    placeholder,
    isRequired,
    inputMode,
    mask,
  } = props

  const Component = type === 'textarea'
    ? 'textarea'
    : 'input'

  const extraAttrs = {}

  if (mask) {
    extraAttrs['data-js-input-mask'] = mask
  }

  return (
    <div
    className={classNames(className, 'field')}
    >
      <label
        htmlFor="id"
        className="field__label"
      >
        {label} {isRequired && (
          <span
            className="field__required-star"
            aria-hidden="true"
          >*</span>
      )}
      </label>
      <div className="field__body">
        <Component
          className="field__control"
          id={id}
          type={type}
          placeholder={placeholder}
          required={isRequired}
          inputMode={inputMode}
          {...extraAttrs}
        />
      </div>
    </div>
  )
}

export default Field