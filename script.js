const showContent = document.querySelector('.es-container__Btn')
const hiddenContent = document.querySelector('.es-container__hidden')
const toggleImg = document.querySelector('.es-toggleImg')

showContent.addEventListener('click', ()=>{
    hiddenContent.classList.toggle('es-btnVisible');
    hiddenContent.classList.toggle('es-contentVisible');
});

showContent.addEventListener('click', ()=>{
    toggleImg.classList.toggle('es-rotateBtn')
});

const ingrShowContent = document.querySelector('.es-ingrContainer__Btn')
const ingrHiddenContent = document.querySelector('.es-ingrContainer__hidden')
const ingrToggleImg = document.querySelector('.es-ingToggleImg')

ingrShowContent.addEventListener('click', ()=>{
    ingrHiddenContent.classList.toggle('es-btnVisible');
    ingrHiddenContent.classList.toggle('es-contentVisible');
});

ingrShowContent.addEventListener('click', ()=>{
    ingrToggleImg.classList.toggle('es-rotateBtn')
});