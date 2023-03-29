
const menu = document.querySelector('.menulinks');
const closeBtn = document.querySelector('.closebtn');
const openBtn = document.querySelector('.openbtn');

closeBtn.addEventListener('click', ()=>{
    menu.style.right='-300px';

   
});

openBtn.addEventListener('click', ()=>{
    menu.style.right='0';
});