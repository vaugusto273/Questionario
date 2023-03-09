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

function Questao1(){
    let INDICE = 13; SOMA = 0; K = 0;
    while(K < INDICE){
        K++; //Mesma coisa que K = K + 1
        SOMA = SOMA + K;
        //console.log(K, SOMA);
    }
    return SOMA; //Substitui o console.log para poder fazer uma função e deixar todas as respostas como funções para não atrapalhar
}

/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence
ou não a sequência.
IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/



function Questao2 (NumeroInformado){
    let SOMAQ2 = 0; ULTIMO = 1; PENULTIMO = 0;
    while(NumeroInformado != SOMAQ2){
        if(NumeroInformado < SOMAQ2){
            console.log(NumeroInformado + " Não faz parte da sequencia")
            return (NumeroInformado + " não faz parte da sequencia")
        }
        else{
            SOMAQ2 = PENULTIMO + ULTIMO;
            console.log(PENULTIMO + " + " + ULTIMO + " = " + SOMAQ2);
            PENULTIMO = ULTIMO;
            ULTIMO = SOMAQ2;
            if(NumeroInformado == SOMAQ2){
                return (NumeroInformado + " faz parte da sequencia")
            }
        }
    }
}

console.log("A Resposta da questão 1 é: " + Questao1());
console.log("A Resposta da questão 2 é: " + Questao2(34) + ", " + Questao2(47) + ", " + Questao2(13));