const content = document.querySelector('.content');

const p = document.createElement('p');
p.textContent = 'Hey, I\' m red.';
p.style.color = 'red';



const h3 = document.createElement('h3');
h3.textContent = 'I\'m a blue h3!'
h3.style.cssText = 'color: blue; background: white';



const myDiv = document.createElement('div'); 
myDiv.setAttribute('style', 'background: pink; border: black 1px solid;'); 

const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div.';

const otherp = document.createElement('p');
otherp.textContent = "ME TOO!";


container.appendChild(p);
container.appendChild(h3);
myDiv.appendChild(h1);
myDiv.appendChild(otherp)


content.appendChild(myDiv);