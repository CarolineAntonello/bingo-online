var numArr = [];
var table = document.createElement('table');
var tr = document.createElement('tr');
tr.innerHTML= '<th> B </th><th> I </th><th> N </th><th> G </th><th> O</th>';
table.appendChild(tr);
function gerarTabelaSorteio(){
    if(numArr.length == 0 || numArr.length%5 == 0){
        tr = document.createElement('tr');
    }
    if(numArr.length == 80){
        document.getElementById("sortear").setAttribute("disable","disable");
        return;
    }
    var tableSpace = document.getElementById("cartela");
    var td;
    var num; 
    
    num = gerarNumeroAleatorio(81);
    posicao = verificaPosicao(numArr.length)
    min = posicao == 1 ? 1 : ((posicao-1)*16)+1;
    max = posicao == 1 ? 16: posicao*16;
    if(numArr.length != 80 && numArr.indexOf(num) > -1 || num == 0 || num < min || num > max ){
        gerarTabelaSorteio();
    }
    else{
        numArr.push(num);
        td = document.createElement('td');
        td.innerHTML += "<h1> "+ num + "</h1>";
        td.classList.add("sorteado");
        tr.appendChild(td);
    }
    
    table.appendChild(tr);
    
    tableSpace.appendChild(table);
    if(numArr.length == 80){
        document.getElementById("sortear").setAttribute("disabled","disabled");
    }
}
