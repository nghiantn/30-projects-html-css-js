var listCounter = document.querySelectorAll('.counter h2')

function count(element) {
    var count = 0
    var to = element.innerText
    var step = to / 250
    setInterval(() => {
        if (count > to) {
            element.innerText = to
        } else {
            count += step
            element.innerText = Math.round(count)
        }
    }, 1)
}

listCounter.forEach(item => {
    count(item)
})
