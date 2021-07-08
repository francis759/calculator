let index = 0;

function solveExpression(expression){
    let expr = expression.replace(/\s/g, '');

    return evaluateAdditions(expr,0);
}

function evaluateAdditions(exp){
    let num1 = evaluateDivisors(exp);
    while(true){
        var op = exp[index];
        if(op !=='+' && op !=='-'){
            return num1;
        }
        index++;
        let num2 = evaluateDivisors(exp);
        if(op === '+'){
            num1+=num2;
        }
        else{
            num1-=num2;
        }
    }
}
function evaluateDivisors(exp){
    let num1 = getNumber(exp);
    while(true){
        var op = exp[index];
        if(op !=='÷' && op !=='×'){
            return num1;
        }
        index++;
        let num2 = getNumber(exp);
        if(op === '÷'){
            num1/=num2;
        }
        else{
            num1*=num2;
        }
    }
}

function getNumber(exp){
    let result = "";
    while( (Number.parseInt(exp[index])>=0 && Number.parseInt(exp[index])<=9)  || exp[index] === '.'){
        result+= exp[index];
        index+=1;
        if(index === exp.length){
            index = 0;
            break;
        }
    }
    return parseFloat(result);
}

