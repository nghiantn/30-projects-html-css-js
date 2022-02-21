let listDivImg = document.querySelectorAll('.list-image div')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let mainImg = document.querySelector('.main img')

let currentIndex = 0

function setCurrent(index) {
    currentIndex = index
    mainImg.src = listDivImg[currentIndex].querySelector('img').src

    listDivImg.forEach(item => {
        item.classList.remove('active')
    })

    listDivImg[currentIndex].classList.add('active')
}

setCurrent(currentIndex)

listDivImg.forEach((img, index) => {
    img.addEventListener('click', () => {
        setCurrent(index)
    })
})

next.addEventListener('click', () => {
    if (currentIndex == listDivImg.length - 1)
        currentIndex = 0
    else currentIndex++

    setCurrent(currentIndex)
})

prev.addEventListener('click', () => {
    if (currentIndex == 0)
        currentIndex = listDivImg.length - 1
    else currentIndex--

    setCurrent(currentIndex)
})
