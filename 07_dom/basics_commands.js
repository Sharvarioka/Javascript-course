/*
document.getElementById('id_name');

eg. const title = document.getElementById('title');

title.innerText //return only text in that element
title.textContent // returns text in all tags inside that element
title.innerHTML //return all html inside that element

document.querySelector('tag')
document.querySelector('#id_name')
document.querySelector('.class_name')

document.querySelector('input[type="password"]') //return first element matching that tag
const liList = document.querySelectorAll('ul') // returns nodeList of all ul tags
Array.from(HTML_collection_name) // to convert htmlCollection to array
parent_name.children // returns all children of that element
parent_name.lastElementChild
parent_name.firstElementChild
child_name.parentElement
child_name.nextElementSibling
parent_name.childNodes //returns all chilren(even new line is considered as a child). There is diff between parent_name.children and parent.childNodes
*/