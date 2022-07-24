var resposta;
var valoresAdicionados;
var numeros = document.querySelector(".resposta1");

function addNumero(valor){
    var num = valor;
    switch(num){
        case 0:
            numeros.innerHTML += 0;
            break;
        case 1:
            numeros.innerHTML += 1;
            break;
        case 2:
            numeros.innerHTML += 2;
            break;
        case 3:
            numeros.innerHTML += 3;
            break;
        case 4:
            numeros.innerHTML += 4;
            break;
        case 5:
            numeros.innerHTML += 5;
            break;
        case 6:
            numeros.innerHTML += 6;
            break;
        case 7:
            numeros.innerHTML += 7;
            break;
        case 8:
            numeros.innerHTML += 8;
            break;
        case 9:
            numeros.innerHTML += 9;
            break;
        case '+':
            numeros.innerHTML += '+';
            break;
        case '-':
            numeros.innerHTML += '-';
            break;
        case '/':
            numeros.innerHTML += '/';
            break;
        case 'X':
            numeros.innerHTML += '*';
            break;
        case 'p1':
            numeros.innerHTML += '*(';
            break;
        case 'p2':
            numeros.innerHTML += ')';
            break;
        case '.':
            numeros.innerHTML += '.';
            break;  
        default:
            console.log('Não Funcionou');
            break;
    }

        var estadoTexto = $('.resposta1').text();
        valoresAdicionados = estadoTexto;
}

function calculando(){
    numeros.innerHTML = eval(valoresAdicionados);
}
function limpar(){
    numeros.innerHTML = '';
}