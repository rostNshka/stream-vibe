import './Header.scss'
import Logo from "@/components/Logo/Logo";

const Header = () => {
    return (
        <header className="header">
            <div className="headder__inner container">
                <Logo
                    className="header__logo"
                    loading ="eager"
                />
            </div>
        </header>
    )
}

export default Header