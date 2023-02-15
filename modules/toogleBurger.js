function toogleBurger() {
    document.querySelector('.header__burger-btn').addEventListener('click', (e) => {
        document.querySelector('.header__wrapper').classList.toggle('open');
        document.body.style.overflow = e.target.checked === true ? 'hidden' : '';
    })
}

export default toogleBurger;