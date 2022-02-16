const $ = document.querySelector.bind(document)

const content = $('.content')
const input = $('.content input')
const btnRemoveAll = $('.remove-all')

var tags = ['HTML', 'CSS']

function render() {
    content.innerHTML = ''
    for(let i = 0; i < tags.length; i++) {
        const tag = tags[i]
        content.innerHTML += `
        <li>
            ${tag}
            <i onclick="removeTag(${i})" class="fas fa-times"></i>
        </li>
        `
    }

    content.appendChild(input)
    input.focus()
}

function removeTag(index) {
    tags.splice(index, 1)
    render()
}

render()

input.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') {
        tags.push(input.value.trim())
        input.value = ''
        render()
    }
})

btnRemoveAll.addEventListener('click', function() {
    tags = []
    render()
})