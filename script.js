let button = document.getElementById('add')
let todolist = document.getElementById('todolist')
let input =document.getElementById('input') //get input from html we declare the add button,todolist,input text
//local storage - information to be stored on our own computer...
let todos = [];//for purpose of all creted in arrays (curd) mainly for the purpose of local storage
window.onload=()=>{ //each time the page was loaded the content remains same
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
}
button.addEventListener('click',()=>{// functionalities of buttons to work
    todos.push(input.value)//add the value
    
    localStorage.setItem('todos',JSON.stringify(todos))  //  all arrays in a todos to store  in a local storage in a string format so using (stringfy)..
    addtodo(input.value) // call function
    input.value='' // its clear the previously tyoed one
})
function addtodo(todo){  // its display the input value in todolist box
    let para =document.createElement('p')//instead of <p>wakeup 6.30</p>
    para.innerText = todo 
    todolist.appendChild(para) // display the text in todo list 
    
    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(todo) //remove todos but its not remove by arrays so create aremove function
    }
    )
    para.addEventListener('dblclick',()=>{
        todolist.removeChild(para)
        remove (todo)
})
}
function remove(todo){
    let index= todos. indexOf(todo)
    if(index > -1) {
        todos.splice(index,1);
    }
   localStorage.setItem('todos',JSON.stringify(todos))
}

