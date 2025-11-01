class OverlayMenu {
    selectors = {
        root: '[data-js-overlay-menu]',
        dialog: '[data-js-overlay-menu-dialog]',
        burger: '[data-js-overlay-menu-burger-button]',
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    constructor () {
        this.rootElement = document.querySelector(this.selectors.root);
        this.dialogElement = document.querySelector(this.selectors.dialog);
        this.burgerButtonElement = document.querySelector(this.selectors.burger);
        this.bindEvents()
    }

    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
        this.dialogElement.open = !this.dialogElement.open;
        document.documentElement.classList.toggle(this.stateClasses.isLock);
    }

    bindEvents () {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
    }
}

export default OverlayMenu;