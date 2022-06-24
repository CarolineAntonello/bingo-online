function gerarCartela(){
    var tableSpace = document.getElementById("cartela");
    tableSpace.innerHTML = "";
    var table = document.createElement('table');
    var tr;
    var td;
    var num; 
    var numArr = [];
    tr = document.createElement('tr');
    tr.innerHTML= '<th> B </th><th> I </th><th> N </th><th> G </th><th> O</th>';
    table.appendChild(tr);
    for ( let i = 0; i < 5; i++){
        tr = document.createElement('tr');
        for ( let j = 0; j < 5; j++){
            num = gerarNumeroAleatorio(81);
            posicao = verificaPosicao(numArr.length)
            min = ((posicao-1)*16)+1;
            max = posicao*16;
            if(numArr.indexOf(num) > -1 || num == 0 || num < min || num > max ){
                j--;
            }      
            else{
                numArr.push(num);
                td = document.createElement('td');
                if(numArr.length != 13){
                    td.addEventListener("click",function(){
                        this.classList.toggle("marked");
                    });
                }
                if(numArr.length == 13){
                    td.classList.add("central");
                    td.classList.add("logo");
                }
                else{
                    
                    td.innerHTML += "<h1> "+ num + "</h1>";
                }
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    }  
    tableSpace.appendChild(table);  
    document.getElementById("gerar").setAttribute("disabled","disabled");
}