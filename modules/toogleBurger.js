function toogleBurger() {
    document.querySelector('.header__burger-btn').addEventListener('click', () => {
        document.querySelector('.header__wrapper').classList.toggle('open');
    })
}

export default toogleBurger;