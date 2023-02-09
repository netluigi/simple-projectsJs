const button = document.querySelector('#botoes')
const semaforo = document.querySelector('#semaforoChange');

// variavel global que vai se alterar
let colorIndex = 0;
let intervalId = null;

// teste logico para ficar se alternando as cores, sempre que o contador for mair que 2 ele vai zerar
const nextIndex = () => {
    //Teste logico com ternarios

    // colorIndex= colorIndex <2 ? ++colorIndex : 0;

    if ( colorIndex < 2 ){
        colorIndex++
    }else{
        colorIndex = 0;
    }
}

// 
const changeColor = () => {
  const colors =['red','yellow','green'];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
}

// Event seria o retorno da funcao addEventListener
// o event seria o click, o target pra dizer onde foi o click e o id para referenciar o elemento clicado.
const trafficLight = (event) => {
    stopAutomatic()
    turnOn[event.target.id]();    
} 
 
const stopAutomatic = () => {
    clearInterval (intervalId)
}

// Criando um objeto com as cores dos botoes.
const turnOn ={
    'red':       () => semaforo.src= 'img/vermelho.png',
    'yellow':    () => semaforo.src= 'img/amarelo.png',
    'green':     () => semaforo.src= 'img/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}

const semaforoAutomatic = () => setInterval(changeColor, 1000 )


button.addEventListener('click', trafficLight)
