const countVal= document.querySelector('#counter');

function increament(){
    let value= countVal.innerText  //countVal k andr ka saara text nikal liya
    value=parseInt(value);         //we will get value in string format so we convert it into integer
    value=value+1;                 //increament the value
    countVal.innerText=value;      //now put back the value into the innerText of the countVal
};

function decreament(){
    let value= countVal.innerText  //Get the value from UI
    value=parseInt(value);         //we will get value in string format so we convert it into integer
    value=value-1;                 //decreament the value
    countVal.innerText=value;      //set the value onto UI
};