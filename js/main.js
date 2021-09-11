const todoInp = document.getElementById('todoInp')
const todoAdd = document.getElementById('todoAdd')
const todoBody = document.getElementById('todoBody')
const warning = document.getElementById('warning')
const todoRem = document.getElementById('todoRem')



todoAdd.addEventListener('click', () => {
    if (todoInp.value !== '') {
        warning.innerText = ''
        let p = document.createElement('p')
        p.classList = 'todo'
        p.innerText = `${todoBody.children.length + 1}. ${todoInp.value}`
        todoBody.appendChild(p)
        todoInp.value = ''

        p.addEventListener('click', () => {
            p.style.textDecoration = 'line-through'
        })
        p.addEventListener('dblclick', () => {
            todoBody.removeChild(p)
        })
        todoInp.focus()
    } else {
        warning.innerText = 'Please type your note'
        todoInp.focus()
    }

})

todoRem.addEventListener('click', () => {
    todoBody.innerHTML = ''
})


