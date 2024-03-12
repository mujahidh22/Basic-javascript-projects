let input=document.getElementById('inputBox') ; //select the input box

let buttons=document.querySelectorAll('button') ;  //select all buttons

let string=""; //empty string to store the result

let arr= Array.from(buttons); //array of buttons

arr.forEach(button => {
    button.addEventListener('click',(e) => {   //If anyone click on the button then this logic will implement
        
        if(e.target.innerHTML == '='){
            string = eval(string); // 'eval' is a inbuild function
            input.value = string;
        }

        //if we press AC button
        else if(e.target.innerHTML == 'AC'){
            string="";  // string get emptied
            input.value = string;
        }

        //if we press DEL button
        else if(e.target.innerHTML == 'DEL'){
            string=string.substring(0,string.length-1); //last entered input gets deleted
            input.value = string;
        }

        else{
            string += e.target.innerHTML;
            input.value = string; 
        }

    })
})
