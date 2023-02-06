const calcular = document.querySelector("#calcular");

function imc() {
    //Ao colocar .value no final das variaveis, eu digo o que eu quero receber desse campo, neste caso vou querer que minhas variaveis recebam os valores que elas irao receber.
  const nome = document.querySelector("#nome").value;
  const altura = document.querySelector("#altura").value;
  const peso = document.querySelector("#peso").value;
  const resultado = document.querySelector(".resultado");

// !== significa diferente
// && é apenas o e, e alguma coisa 

//Teste logico para que todos os inputs sejam preenchidos
  if (nome !== '' && altura !== '' && peso !== ''){
    const valorImc = (peso / (altura*altura)).toFixed(2); // toFixed vai servir para arrendondar um valor.

    let classificacao = '';

    if ( valorImc < 18.5){
      classificacao = 'abaixo do peso.';

    }else if (valorImc < 25){
      classificacao = 'com peso ideal. Parabens';
    }else if (valorImc < 30){
      classificacao = 'levemente acima do peso.';
    }else if (valorImc <35){
      classificacao = 'com obesidade grau I.';
    }else if (valorImc <40){
      classificacao = 'obesidade grau II';
    }else{'obesidade grau III. Cuidado';}
    
    resultado.textContent = `${nome} seu IMC é ${valorImc}, e voce esta ${classificacao}`;
  }else{
    resultado.textContent = 'Preencha todos os campos!!!';
  }

  const nomeA = document.querySelector("#nome").value='';
  const alturaA = document.querySelector("#altura").value='';
  const pesoA = document.querySelector("#peso").value='';
}

//addEventLister,  o java escript vai ficar atento o evento que ele vai estar a espera é o click, ao clicar no botao calcular ele vai chamar uma funcao que no caso seria a img.
calcular.addEventListener("click", imc);
