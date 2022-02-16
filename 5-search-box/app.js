const btn = document.querySelector('.search-box__button')

btn.addEventListener('click', function() {
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus()
})