const vetor = [1,2,3,4,5]

const binSearch = (vetor, left, right, valor) => {
    if(right >= left){
        const indice = parseInt(left + (right-left)/2)
        if(vetor[indice] === valor){
            return valor 
        }
        if(vetor[indice] > valor){
            return binSearch(vetor, left, indice-1, valor)
        }
        return binSearch(vetor, indice+1, right, valor)
    }
    return -1
}
console.log(binSearch(vetor, 0, vetor.length-1, 20))