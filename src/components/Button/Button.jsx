import './Button.scss'
import classNames from "classnames"
import Icon from "@/components/Icon"

const Button = (props) => {
    const {
        className,
        type = 'button',
        href,
        target,
        mode = '',
        label,
        isLabelHidden = false,
        iconName,
        iconPositions = 'before',
        hasFillIcon,
        extraAttrs,
    } = props

    const isLink = href !== undefined
    const Component = isLink ? 'a' : 'button'
    const linkProps = { href, target }
    const buttonProps = { type }
    const specificProps = isLink ? linkProps : buttonProps
    const title = isLabelHidden ? label : undefined
    const iconComponent = iconName && (
        <Icon
            className="button_icon"
            name={iconName}
            hasFill={hasFillIcon}
        />
    )

    return (
        <Component
            className={classNames(className, 'button', {
                [`button--${mode}`]: mode,
            })}
            title={title}
            area-label={title}
            {...specificProps}
            {...extraAttrs}
        >
            {iconPositions === 'before' && iconComponent}
            {!isLabelHidden && (
                <span className="button__label">{label}</span>
            )}
            {iconPositions === 'after' && iconComponent}
        </Component>
    )
}

export default Button