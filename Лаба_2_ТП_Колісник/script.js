// створюю різні змінні для роботи
const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const result = document.querySelector("#result")
const all_tasks = document.querySelector("#all_tasks")
const unfinished_tasks = document.querySelector("#unfinished_tasks")

let n = 0; // лічильник для all_tasks
let k = 0; // лічильник для unfinished_tasks



// створюю завдання через кнопку
btn.addEventListener("click", (e) => {
    if (input.value === '') return
    createDeleteElements(input.value)
    input.value = ''
})

// створюю і видаляю todo
function createDeleteElements(value) {
    n++
    k++
    unfinished_tasks.textContent = k
    console.log(value)

    // створюю додаткові змінні
    const li = document.createElement('li')
    const btn = document.createElement('button')
    const btn_2 = document.createElement('button')


    li.className = 'li'
    li.textContent = value

    btn.className = 'btn'
    btn_2.className = 'btn_2'
    btn_2.textContent = '-' // кнопка вичеркнути
    li.appendChild(btn_2)
    btn.textContent = 'X' // кнопка видалити
    li.appendChild(btn)




    // видалення завдання
    btn.addEventListener('click', (e) => {
        n--

        if (!li.classList.contains("li-active"))
            k--


            all_tasks.textContent = n // показує к-сть завдань враховуючи видалення
        unfinished_tasks.textContent = k
        result.removeChild(li)

    })

    // вичеркування завдання

    btn_2.addEventListener('click', (e) => {

        if (li.classList.contains("li-active")) {
            k++ // лічильники для рахування не виконаних завдань
        } else {
            k--
        }

        li.classList.toggle("li-active")
        unfinished_tasks.textContent = k
    })


    all_tasks.textContent = n // показує к-сть завдань


    result.appendChild(li)
}