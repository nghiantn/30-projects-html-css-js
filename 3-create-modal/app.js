const $ = document.querySelector.bind(document)

const btnOpen = $('.open-modal-btn')
const modal = $('.modal')
const iconClose = $('.modal__header i')
const btnClose  = $('.modal__footer button')

function toggle() {
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggle)
modal.addEventListener('click', function(e) {
    if(e.target === e.currentTarget) toggle()
})
iconClose.addEventListener('click', toggle)
btnClose.addEventListener('click', toggle)