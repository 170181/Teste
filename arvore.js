const listaMatriz = [['B', 'D'], ['D', 'E'], ['A', 'B'], ['C', 'F'], ['E', 'G'], ['A', 'C']];

let lista = listaMatriz.sort();

const listaPai = [];
const listaFilho = [];
const novaLista = [];

for (var i = 0; i < lista.length; i++) {

      if (paiFilho.pai == lista[i][0]) {        
            let lista2 = []
        if (novaLista.find(element => element = paiFilho.pai)) {

            let elemento = paiFilho.pai;

            if (listaPai.find(element => element = lista[i][0])) {

                paiFilho.filho = lista[i][1];
                lista2 = paiFilho.filho;
                listaFilho.push(paiFilho.filho);
                novaLista.indexOf(elemento, listaFilho);
            }
        }
    } else {

        if (novaLista == "") {

            paiFilho.pai = lista[i][0];
            paiFilho.filho = lista[i][1];

            listaPai.push(paiFilho.pai);

            listaFilho.push(paiFilho.filho);
            listaPai.push(listaFilho);
            novaLista.push(listaPai);

        } else {
            paiFilho.pai = lista[i][0];
            paiFilho.filho = lista[i][1];

            let elementos = paiFilho.pai;

            if (paiFilho.pai == lista[i][0]) {

                if (listaPai.find(element => element = lista[i][0])) {

                    let lista1 = [];

                    lista1.push(paiFilho.filho);

                    novaLista.indexOf(elementos, lista1);

                    novaLista.push(elementos, lista1);
                    console.log(novaLista);
                }
            } else {
                paiFilho.pai = lista[i][0];
            }
        }
    }
}

console.log(novaLista);

