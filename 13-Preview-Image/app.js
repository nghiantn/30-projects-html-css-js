const inputImg = document.querySelector('#input-img')
const error = document.querySelector('.error')

inputImg.addEventListener('change', e => {
    let file = e.target.files[0]

    if (!file) return

    if (!file.name.endsWith('.jpg')) {
        error.innerHTML = 'Hình ảnh không phải jpg'
        return
    } else {
        error.innerHTML = ''
    }

    if (file.size / (1024 * 1024) > 5) {
        error.innerHTML = 'Kích thước ảnh > 5M'
        return
    } else {
        error.innerHTML = ''
    }

    let img = document.createElement('img')
    // Cách 1: Blob
    // img.src = URL.createObjectURL(file)

    // Cách 2: Base64
    let fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onloadend = e =>
        img.src = e.target.result

    document.querySelector('.preview').appendChild(img)
})
