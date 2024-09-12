function calculo(conta)
let a = parseFloat(document.getElementById('zeroum').value);
let b = parseFloat(document.getElementById('zerodois').value);
let resultado = 0

if (isNaN(a) || isNaN(b)) {
    alert('otario');
}
else{

    if(conta == '+'){
    resultado = a + b;
    }
    else if(conta == '-'){
    resultado = a - b;
    }
    else if(conta == '*'){
    resultado = a * b;
    }
    else if(conta == '/'){
    resultado = a / b;
    }
}

document.getElementById('resultado').textContent = resultado