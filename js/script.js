let operators = ['÷','×','+','-']
let display = document.querySelector('.display');

function changeTheme(e){
    const parent = e.target.closest('.container');
    if(parent.classList.contains('theme-two')) {
        parent.classList.replace('theme-two','theme-one')
    } else {
        parent.classList.replace('theme-one','theme-two')
    }
}

function getKeyValue(e){
    if(e.target.className === "key" || e.target.className === "key decimal"){
        if(display.innerHTML === "0"){
            display.innerHTML = e.target.innerHTML;
        }
        else{
            display.innerHTML+=e.target.innerHTML;
        }
    }
    else if(operators.includes(e.target.innerHTML)){
        if(display.innerHTML === "0"){
            display.innerHTML = e.target.innerHTML;
        }
        else{
            display.innerHTML+=" "+e.target.innerHTML+" ";
        }
    }
    else if(e.target.className === "reset"){
        display.innerHTML = "0";
    }

    // Delete function
    else if(e.target.className === "del"){
        let expr = display.innerHTML ;
        if(expr.length !== 0){
            if(expr.charAt(expr.length-1) === " "){
                expr = expr.slice(0, expr.length-2);
                display.innerHTML = expr;
            }
            else if(expr.length === 1 || expr === "NaN"){
                display.innerHTML = 0;
            }
            else{
                expr = expr.slice(0, expr.length-1);
                display.innerHTML = expr;
            }
        }
    }
    else if(e.target.className === "key equals"){
        try {
            let expression = display.innerHTML;
            display.innerHTML = eval(expression.replace(/\s+/g,'').replace(/\÷/g,'/').replace(/\×/g,'*'));
            index = 0;
        } catch (error) {
            display.innerHTML = 'Error';
        }
       
    }
}

document.addEventListener('click',function(e){
    if(e.target.classList.contains('key')||e.target.classList.contains('reset')||e.target.classList.contains('del')){
        getKeyValue(e)
    }
    else if(e.target.type === 'checkbox'){
        changeTheme(e);
    }
})
