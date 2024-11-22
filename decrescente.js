let numCrescente = [0, 0, 0, 0, 0, 0, 0];
let valor_atual = 0;

function gerarAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function gerarArrayDECrescente() {
    for(let i = 0; i < numCrescente.length; i++) {
        numCrescente[i] = gerarAleatorio(15, 1);
    }
    document.getElementById('resultadoDECrescente').textContent = numCrescente.join(', ');
}

function ordenarDECrescente() {
    for(let j = numCrescente.length-1; j > 0; j--) {
        for(let i = 0; i < numCrescente.length-1; i++) {
            if(numCrescente[i] < numCrescente[i+1]) {
                valor_atual = numCrescente[i];
                numCrescente[i] = numCrescente[i+1];
                numCrescente[i+1] = valor_atual;
            }
        }
    }
    document.getElementById('resultadoDECrescente').textContent = numCrescente.join(', ');
}