/*1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);



Ao final do processamento, qual será o valor da variável SOMA?
*/

let INDICE = 13; SOMA = 0; K = 0;

while(K < INDICE){
    K++; //Mesma coisa que K = K + 1
    SOMA = SOMA + K;
    //console.log(K, SOMA);
}
console.log(SOMA);
