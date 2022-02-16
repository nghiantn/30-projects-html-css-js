const input = document.querySelector('input')
const button = document.querySelector('button')
const form = document.querySelector('form')
const todos = document.querySelector('.todos')

form.addEventListener('submit', e => {
    e.preventDefault()
    let value = input.value.trim()
    if (value) {
        addTodoElement({
            text: value,
            status: ''
        })
        input.value = ''
        saveTodoList()
    }
})

const addTodoElement = todo => {
    const li = document.createElement('li')
    li.innerHTML = `
        <span>${todo.text}</span>
        <i class="fas fa-trash"></i>
    `

    if (todo.status === 'completed') {
        li.setAttribute('class', 'completed')
    }

    li.addEventListener('click', () => {
        li.classList.toggle('completed')
        saveTodoList()
    })

    const i = li.querySelector('i')
    i.addEventListener('click', () => {
        i.parentElement.remove()
        saveTodoList()
    })

    todos.appendChild(li)
}

const saveTodoList = () => {
    let todoList = document.querySelectorAll('li')
    let todoStorage = []
    todoList.forEach(item => {
        let text = item.querySelector('span').innerText
        let status = item.getAttribute('class')

        todoStorage.push({ text, status })
    })
    localStorage.setItem('todoList', JSON.stringify(todoStorage))
}

    ; (() => {
        let data = JSON.parse(localStorage.getItem('todoList'))
        data.forEach(item => {
            addTodoElement(item)
        })
    })()
