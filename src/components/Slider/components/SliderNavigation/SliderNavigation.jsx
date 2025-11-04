import './SliderNavigation.scss'
import classNames from "classnames";
import Button from "@/components/Button";

const SliderNavigation = (props) => {
    const {
        className,
        id,
        hasPagination = true,
        mode = ''
    } = props

    return (
        <div
            className={classNames(className, 'slider-navigation')}
            id={id}
        >
            <Button
                className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
                mode="black-10"
                iconName="arrow-left"
                label="Previos slide"
                isLabelHidden
            />
            {hasPagination && (
                <div
                    className={classNames(className, "slider-navigation__pagination", {
                        [`slider-navigation__pagination--${mode}`]: mode,
                    })}
                />
            )}
            <Button
                className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
                mode="black-10"
                iconName="arrow-right"
                label="Next slide"
                isLabelHidden
            />
        </div>
    )
}

export default SliderNavigation