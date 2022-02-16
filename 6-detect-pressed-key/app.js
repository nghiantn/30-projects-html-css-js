const $ = document.querySelector.bind(document)

const eKey = $('.card.key p:last-child')
const eLocation = $('.card.location p:last-child')
const eWhich = $('.card.which p:last-child')
const eCode = $('.card.code p:last-child')
const alert = $('.alert')
const box = $('.box')
const result = $('.result')

document.addEventListener('keydown', function(e) {
    eKey.innerText = e.key
    eLocation.innerText = e.location
    eWhich.innerText = e.which
    eCode.innerText = e.code
    result.innerText = e.key

    alert.classList.add('hide')
    box.classList.remove('hide')
})