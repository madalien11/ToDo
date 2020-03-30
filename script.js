const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
uncheckedCountSpan_int = 0
itemCountSpan_int = 0
var todos = []

function newTodo() {
  //alert('New TODO button clicked!')

  var li = document.createElement("li")
  var text = prompt('Please, enter TODO title: ', 'Do shit')
  if (text != "" && text != null) {
  	li.appendChild(document.createTextNode(text))
  	checkbox = document.createElement("INPUT")
  	li.appendChild(checkbox)
  	todos.push(checkbox)
  	
  	checkbox.setAttribute('type', 'checkbox')
  	checkbox.setAttribute('class', classNames.TODO_CHECKBOX)
  	checkbox.setAttribute('onclick', 'check()')
	li.setAttribute('class', classNames.TODO_ITEM)

  	list.append(li)

	uncheckedCountSpan_int += 1
  	uncheckedCountSpan.innerHTML = uncheckedCountSpan_int
  	
  	itemCountSpan_int += 1
  	itemCountSpan.innerHTML = itemCountSpan_int
  }
}

function check() {
	uncheckedCountSpan_int = 0
	for (let i = 0; i < todos.length; i++) {
  		if (todos[i].checked == false) uncheckedCountSpan_int += 1
  	}
  	uncheckedCountSpan.innerHTML = uncheckedCountSpan_int
}
