import './style.css'

const add = document.getElementById('add');
const list = document.getElementById('list');

var buttons = document.getElementsByClassName('close');
var i;

add.addEventListener('click', () => {
  newElement();
  for(i = 0; i < buttons.length; i++){
    buttons[i].onclick = function() {
      this.parentElement.remove();
    }
  }
})


function newElement() {

  // get input value
  var val = document.getElementById('input').value.trim();

  //create the node
  const li = document.createElement('li');
  const node = document.createTextNode(val);

  // create delete button
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'close');
  const X = document.createTextNode('X');

  // add nodes
  li.appendChild(node);
  li.appendChild(deleteButton);
  list.appendChild(li);
  deleteButton.appendChild(X);
  
}


