const turnOn = document.querySelector('#turnOn');
const turnOff = document.querySelector('#turnOff');
const lamp = document.querySelector('#lamp');
//indexOf vai procurar a palavra quebrada na descricao da imagem.
const isLampBroken= () => {
     return lamp.src.indexOf( 'quebrada') > -1
     //funcao faz retorno de verdadeiro ou falso.
}

// ! significa uma negação, 'nao'
// so vai acontecer uma acao de ligar e desligar apenas se a lampada nao estiver quebrada.
const lampOn = ()=>{
    if (!isLampBroken ())
    lamp.src ='img/ligada.jpg'
}

const lampOff =() => {
    if (!isLampBroken ())
    lamp.src = 'img/desligada.jpg'
}

const lampBroken = () =>{
    lamp.src ='img/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('dblclick', lampBroken)
lamp.addEventListener('mouseout',lampOff);
