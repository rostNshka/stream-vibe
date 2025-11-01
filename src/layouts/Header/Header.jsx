import './Header.scss'
import Logo from "@/components/Logo/Logo";
import classNames from "classnames";
import Button from "@/components/Button";
import BurgerButton from "@/components/BurgerButton";

const Header = (props) => {
    const {
        url,
    } = props

    const menuItems = [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Movies & Shows',
            href: '/movies',
        },
        {
            label: 'Support',
            href: '/support',
        },
        {
            label: 'Subscriptions',
            href: '/subscriptions',
        },
    ]

    return (
        <header className="header">
            <div className="header__inner container">
                <Logo
                    className="header__logo"
                    loading="eager"
                />
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        {menuItems.map(({ label, href }, index) => (
                            <li className="header__menu-item" key={index}>
                                <a
                                    className={classNames('header__menu-link', {
                                        'is-active': href === url
                                    })}
                                    href={href}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header__actions">
                    <Button
                        className="header__button"
                        label="Search"
                        isLabelHidden
                        mode="transparent"
                        iconName="search"
                    />
                    <Button
                        href="/"
                        label="Notificattions"
                        isLabelHidden
                        iconName="notification"
                        mode="transparent"
                    />
                </div>
                <BurgerButton
                    className="header__burrger-button"
                />
            </div>
        </header>
    )
}

export default Header
