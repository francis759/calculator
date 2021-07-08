function getKeyValue(e){
    let displayValue = document.getElementsByClassName('display')[0];

    if(e.target.className === "key" || e.target.className === "key decimal"){
        if(displayValue.innerHTML === "0"){
            displayValue.innerHTML = e.target.innerHTML;
        }
        else{
            displayValue.innerHTML+=e.target.innerHTML;
        }
    }
    else if(e.target.className === "key add" || e.target.className === "key minus" ||
    e.target.className === "key multiply" || e.target.className === "key divide"){
        if(displayValue.innerHTML === "0"){
            displayValue.innerHTML = e.target.innerHTML;
        }
        else{
            displayValue.innerHTML+=" "+e.target.innerHTML+" ";
        }
    }
    else if(e.target.className === "reset"){
        displayValue.innerHTML = "0";
    }

    // Delete function
    else if(e.target.className === "del"){
        let expr = displayValue.innerHTML ;
        if(expr.length !== 0){
            if(expr.charAt(expr.length-1) === " "){
                expr = expr.slice(0, expr.length-2);
                displayValue.innerHTML = expr;
            }
            else if(expr.length === 1 || expr === "NaN"){
                displayValue.innerHTML = 0;
            }
            else{
                expr = expr.slice(0, expr.length-1);
                displayValue.innerHTML = expr;
            }
        }
    }
    else if(e.target.className === "key equals"){
        try {
            let answer = solveExpression(displayValue.innerHTML);
            displayValue.innerHTML = answer;
            index = 0;
        } catch (error) {
            window.alert(error);
        }
       
    }
}

document.addEventListener('click',getKeyValue);