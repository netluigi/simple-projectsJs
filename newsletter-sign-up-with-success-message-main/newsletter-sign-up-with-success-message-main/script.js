
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
        emailConfirmation.style.display='block';
        card.classList.add('card_submit');
        card.classList.toggle('card');
    }else if (btnEmailValue.length < 1 || emailValidation(btnEmailValue)==false) {
        const textErro=document.querySelector('.fomr_p_Error');
        const styleSheet= new CSSStyleSheet();
        btnEmail.style.background='rgb(244, 196, 196)';
        btnEmail.style.border='1px solid rgb(206, 61, 42)';
        styleSheet.insertRule('::placeholder{color:red;}');
        document.adoptedStyleSheets=[styleSheet];   
        textErro.style.display='block';
        textErro.style.fontFamily='Roboto, sans-serif';
        textErro.style.color='rgb(206, 61, 42)';
        textErro.style.fontSize='10px';
        textErro.style.fontWeight='700';
    }  
}
confirmBtn.addEventListener('click',confirmBtnDesk)