
const confirmBtn=document.querySelector('.confirmBtn');
const btnEmail= document.querySelector('#email');


function emailValidation(event){
    const checkEmail= /\w+@\w+\.\w+/;
    const result = checkEmail.test(event)
    return result;

}


function confirmBtnDesk(event){
    event.preventDefault();
    let btnEmailValue= btnEmail.value;
    if(emailValidation(btnEmailValue)==true){
        const card=document.querySelector('.card');
        const emailConfirmation=document.querySelector('.emailConfirmation_styles');
        emailConfirmation.style.display='block'
        card.classList.add('card_submit');
        card.classList.toggle('card');
    }else if (btnEmailValue.length < 1) {
        alert('Erro: O campo de e-mail está vazio.');
    }else if(emailValidation(btnEmailValue)==false){
        console.log('cliquei')
    }
   
}

function confirmBtnMobile(){

}

confirmBtn.addEventListener('click',confirmBtnDesk)