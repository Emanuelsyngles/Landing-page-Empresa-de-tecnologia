//Seleção

let menuItem = document.querySelectorAll('.menu-lateral')

function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

//Expandir menu

let btnExp = document.querySelector('#expandir')
let menu = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function() {
    menu.classList.toggle('expandir')
})