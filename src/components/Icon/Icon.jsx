import './Icon.scss'
import classNames from 'classnames'
import { Icon as MinistaIcon } from 'minista'

const Icon = (props) => {
    const {
        className,
        name,
        hasFill = false,
        FallbackSVG,
    } = props

    const params = {
        fill: hasFill ? 'currentColor' : 'none',
        stroke: hasFill ? 'none' : 'currentColor',
    }

    return (
        <span
            className={classNames(className, 'icon')}
        >
            <MinistaIcon
                iconId={name}
                fill={hasFill ? 'currentColor' : 'none'}
                stroke={hasFill ? 'none' : 'currentColor'}
            />
        </span>
    )
}

export default Icon
