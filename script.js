// MENU HAMBURGER
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('abrir-menu')
})
menu.addEventListener('click', function(){
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', function(){
    menu.classList.remove('abrir-menu')
})

// SLIDER
let radio = document.querySelector('.manual-btn')
let cont = 1

document.getElementById('radio1').checked = true

setInterval(()=> {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}


let imagens=['img/screenshot_cameraclosupcockpit1.jpg','img/screenshot_cameraclosupcockpit2.jpg','img/screenshot_cameraclosupfront.jpg','img/screenshot_cameraclosuprear.jpg','img/screenshot_camerafront.jpg','img/screenshot_camerarear.jpg','img/screenshot_cameraside.jpg','img/screenshot_cameraside2.jpg','img/screenshot_cameratop.jpg','img/screenshot_camerawheelfront.jpg','img/screenshot_camerawheelrear.jpg'];
//POSIÇÃO QUE VAI INICIAR 
let index =0;
//TEMPO DAS IMAGENS TROCAR
let time=3000;

//FUNÇÃO SLIDWSHOW
function slideShow(){
    //DOM - PEGANDO O ID E PASSSANDO CAMINHO DAS IMAGENS
    document.getElementById('img-car-view').src=imagens[index];
    //INCREMENTANDO
    index++;
//CONDICONAL if
    if(index == imagens.length){
        index=0;
    }
    //metodo setTimout para executar a função e chamar o tempo
    setTimeout('slideShow()',time);
    
}

//executando a função
slideShow();