const canvas = document.getElementById('canvas')
const colorEl = document.getElementById('color')
const eraserEl = document.getElementById('eraser')
const decreaseBtn = document.getElementById('decrease')
const increaseBtn = document.getElementById('increase')
const sizeEL = document.getElementById('size')
const saveEl = document.getElementById('save')
const clearEl = document.getElementById('clear')

const context = canvas.getContext('2d')

let first = {
    x: 0,
    y: 0
}

let last = {
    x: 0,
    y: 0
}

let isDrawing = false
let colorPaint = '#000000'
let size = 10
sizeEL.innerText = size

canvas.addEventListener('mousedown', function (e) {
    first = {
        x: e.offsetX,
        y: e.offsetY
    }
    isDrawing = true
})

canvas.addEventListener('mousemove', function (e) {
    if (isDrawing) {
        last = {
            x: e.offsetX,
            y: e.offsetY
        }

        context.beginPath()
        // tạo đường tròn
        context.arc(first.x, first.y, size, 0, 2 * Math.PI)
        // sét màu cho đường tròn
        context.fillStyle = colorPaint
        // vẽ nét tròn
        context.fill()

        // bắt đầu vẽ
        context.beginPath()
        // địa điểm đầu của con trỏ
        context.moveTo(first.x, first.y)
        // địa điểm cuối của con trỏ
        context.lineTo(last.x, last.y)
        // sét màu cho viền
        context.strokeStyle = colorPaint
        // sét độ rộng cho viền
        context.lineWidth = size * 2
        // vẽ nét viền
        context.stroke()

        first.x = last.x
        first.y = last.y
    }
})

document.addEventListener('mouseup', function (e) {
    isDrawing = false
})

colorEl.addEventListener('change', function (e) {
    colorPaint = e.target.value
})

eraserEl.addEventListener('click', function (e) {
    colorPaint = '#ffffff'
})

decreaseBtn.addEventListener('click', function (e) {
    size -= 5
    size = size > 5 ? size : 5
    sizeEL.innerText = size
})

increaseBtn.addEventListener('click', function (e) {
    size += 5
    size = size < 30 ? size : 30
    sizeEL.innerText = size
})

clearEl.addEventListener('click', function (e) {
    let canvasStats = canvas.getClientRects()[0]
    context.clearRect(0, 0, canvasStats.width, canvasStats.height)
})

saveEl.addEventListener('click', function (e) {
    const imageURI = canvas.toDataURL('image/png')
    saveEl.href = imageURI
})