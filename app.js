var itemlist=document.querySelector('#items');
//parentNode
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor='yellow';
// //parentElement

// //childNode
// console.log(itemlist.childNodes);

// console.log(itemlist.children);
// itemlist.children[1].style.backgroundColor='yellow';

// //firstElementChild
// console.log(itemlist.firstElementChild);

// itemlist.firstElementChild.textContent='hello 1';


//lastElementChild

//nextElementSibling

var newDiv=document.createElement('div');
console.log(newDiv);
//add id
// newDiv.id='hello1';
// newDiv.className='hello';
//set attribute
// newDiv.setAttribute('title','hello world')
var newDivText=document.createTextNode('hello world');
console.log(newDivText);
newDiv.appendChild(newDivText);

let container=document.querySelector('header .container');
let h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);
newDiv.style.fontSize='30px';
console.log(container);

let newDiv1=document.createElement('div');
let newDivText1=document.createTextNode('hello world');
newDiv1.appendChild(newDivText1);
let items=document.querySelectorAll('.title');
let h2=document.querySelectorAll('items .list-group-item');
items[1].insertBefore(newDiv1,h2[0]);
newDiv.style.fontSize='15px';



