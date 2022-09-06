
function enumerarLetras(letra) {
    letra = letra.toLowerCase();
    var numeros = [];
    letra.split('').map(function (item) {
        numeros.push((item.charCodeAt(0) - 97) + 1);
    });
    return numeros;
}

// let no = enumerarLetras(lista[i][0])
// let pai = enumerarLetras(paiFilho.pai);
// let filho = enumerarLetras(paiFilho.filho);

var paiFilho = new Object();
paiFilho.pai = null;
paiFilho.filho = null;


//const listaMatriz = [['A', 'B'], ['A', 'C'], ['C', 'D']];
//const listaMatriz = [['B', 'D'], ['D', 'E'], ['A', 'B'], ['C', 'F'], ['E', 'G'], ['A', 'C']];
const listaMatriz = [['A', 'B'], ['B', 'D'], ['C', 'F'], ['D', 'E'], ['A', 'C'],  ['D', 'G']];// ['Q', 'Z'],

let lista = listaMatriz.sort();

const listaPai = [];
const listaFilho = [];
const novaLista = [];

const arvore = new Object();
arvore.pai = "";
arvore.filho = [];

for (var i = 0; i < lista.length; i++) {


    let varivavelPai = lista[i][0];
    let variavelFilho = lista[i][1];
    let li2 = [];

    if (listaPai.includes(varivavelPai)) {
        if (listaPai.find(element => element = varivavelPai)) {
            let li = [];
            // li2.push(listaPai);
            li.push(arvore.filho[0]);
            li.push(variavelFilho);
            if (li.length = 2) {
                listaPai.pop();
                arvore.pai = [];
                arvore.filho = [];
                arvore.pai = varivavelPai;
                arvore.filho = li;
                li2.push(arvore.pai, arvore.filho);
                novaLista.push(li2);
            } else {
                break;
            }
        }

    } else {
        if (arvore.pai == "") {
            if(novaLista == ""){
            arvore.pai = lista[i][0];
            arvore.filho = [lista[i][1]];
                        
            listaPai.push(arvore.pai, arvore.filho);
            
            }else{
                
                listaPai.pop();
                arvore.pai = [];
                arvore.filho = [];
                arvore.pai = lista[i][0];
                arvore.filho = [lista[i][1]];          
                listaPai.push(arvore.pai, arvore.filho);
                novaLista.push(listaPai)
            }

        } else {
            if (listaPai.find(element => element = varivavelPai) == true) {
                let li = [];
                // li2.push(listaPai);
                li.push(varivavelPai);
                li.push(variavelFilho);
                if (li.length = 2) {
                    listaPai.pop();
                    arvore.pai = [];
                    arvore.filho = [];
                    arvore.pai = varivavelPai;
                    arvore.filho = li;
                    li2.push(arvore.pai, arvore.filho);
                    novaLista.push(li2);
                   
                    
                } 
            }else {
                let li3 = [];
                let pai = lista[i][0];
                let filho = [lista[i][1]];
                
                arvore.pai = [];
                arvore.filho = [];
                li3.push(pai, filho);
                novaLista.push(li3);
                
            }
        }
    }
    console.log(novaLista);
}