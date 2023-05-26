const inputDay = document.querySelector('#dia');
const inputMonth= document.querySelector('#mes');
const inputYear= document.querySelector('#ano');
const btnResult =document.querySelector('#btnResult')


btnResult.addEventListener('click', valorDia);

function valorDia (){
    let resultYear=document.querySelector('.resultYears');
    let resultMonth=document.querySelector('.resultMonth');
    let resultDays=document.querySelector('.resultDays');
    let dias = inputDay.value;
    let meses = inputMonth.value;
    let anos = inputYear.value;

    if(dias < 1 ||meses < 1 ||anos < 1){
        alert('Informe uma Data correta')
    }else if(anos.length !== 4){
        alert('O ano deve conter 4 numeros')
        
    }else{
        let date = new Date();
        let currentyears=date.getFullYear();
        let currentmonths=date.getMonth() + 1;
        let currentdays=date.getDay();

        let years = date.getFullYear() - anos;
        let months=(meses - currentmonths ) ;
        let days=365 - (dias - currentdays) ;

        resultYear.innerHTML= years;
        resultMonth.innerHTML=months;
        resultDays.innerHTML=days;
    }
}