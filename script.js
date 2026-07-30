document.addEventListener('DOMContentLoaded',()=>{
const imgs=document.querySelectorAll('.gallery-grid img');
const lb=document.createElement('div');
lb.id='lightbox';
lb.innerHTML='<img>';
document.body.appendChild(lb);
const im=lb.querySelector('img');
imgs.forEach(i=>i.onclick=()=>{im.src=i.src;lb.style.display='flex';});
lb.onclick=()=>lb.style.display='none';
});
