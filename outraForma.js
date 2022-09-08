

const arvore = new Object();
arvore.pai = "";
arvore.filho = [];

const listaMatriz = [['B', 'D'], ['D', 'E'], ['A', 'B'], ['C', 'F'], ['E', 'G'], ['A', 'C'], ['D','Z'], ['A','X']];
let lista = listaMatriz.sort();
const listaPai = [];
const novaLista = [];
let cont = 0;
for (var i = 0; i < lista.length; i++) {

    let varivavelPai = lista[i][0];
    let variavelFilho = lista[i][1];
   
    if (arvore.pai != '') {
        if (lista[i][0] == arvore.pai[0]) {
            cont += 1;
            let li = [];
            let li1 = [];
            li.push(arvore.filho[0]);
            li.push(variavelFilho);
            if (cont <= 2) {
                listaPai.pop();
                arvore.pai = [];
                arvore.filho = [];
                arvore.pai = varivavelPai;
                arvore.filho = li;
                li1.push(arvore.pai, arvore.filho);
                novaLista.push(li1);
            } else {
                cont = 0;
                console.log("Filho " + variavelFilho + "é o terceiro");                
            }
        }else{
            let li = [];
            arvore.pai = lista[i][0];
            arvore.filho = [lista[i][1]];            
            li.push(arvore.pai, arvore.filho);
            novaLista.push(li);

        }

    } else {
        cont += 1;
        let li = [];
        arvore.pai = lista[i][0];
        arvore.filho = [lista[i][1]];
        listaPai.push(arvore);
    }
    console.log(novaLista);
}