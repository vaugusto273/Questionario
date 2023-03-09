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
            //console.log(NumeroInformado + " Não faz parte da sequencia")
            return (NumeroInformado + " não faz parte da sequencia")
        }
        else{
            SOMAQ2 = PENULTIMO + ULTIMO;
            //console.log(PENULTIMO + " + " + ULTIMO + " = " + SOMAQ2);
            PENULTIMO = ULTIMO;
            ULTIMO = SOMAQ2;
            if(NumeroInformado == SOMAQ2){
                return (NumeroInformado + " faz parte da sequencia")
            }
        }
    }
}
/*
3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, ___

b) 2, 4, 8, 16, 32, 64, ____

c) 0, 1, 4, 9, 16, 25, 36, ____

d) 4, 16, 36, 64, ____

e) 1, 1, 2, 3, 5, 8, ____

f) 2,10, 12, 16, 17, 18, 19, ____

*/
function Questao3 (LetraDaQuestao){''
    let Total, KQ3, N1, Final;
    switch(LetraDaQuestao){
        case "a":
            Total = 5; KQ3 = 0; N1 = 1; Final = 0;
            while((Total - 1) > KQ3){
                KQ3++;
                Final = N1 + 2;
                N1 = Final;
            }
            return String("a) " + Final);

        case "b":
            Total = 7; KQ3 = 0; N1 = 2; Final = 0;
            while((Total - 1) > KQ3){
                KQ3++;
                Final = N1 * 2;
                N1 = Final;
            }
            return String("b) " + Final);

        case "c":
            Total = 8; KQ3 = 0; N1 = 0; N2 = 1;Final = 0;Final2 = 0;
            while((Total - 1) > KQ3){
                KQ3++;
                Final = N1 + N2;
                while((Total - 1) > KQ3){
                    Final2 = N2 + 2;
                    N2 = Final2;
                    break;
                }
                N1 = Final ;
            }
            return String("c) " + Final);

        case "d":
            Total = 5; KQ3 = 0; N1 = 4; Final = 0; SVR = Math.sqrt(N1); N2 = 0;
            while((Total - 1) >= KQ3){
                KQ3++;
                N2 = N2 + SVR ;
                Final = N2 ** SVR;
                N1 = Final;
            }
            return String("d) " + Final);

        case "e":
            Total = 7; KQ3 = 0; N1 = 1; Final = 0; Prox = 1;
            
            while((Total - 2) > KQ3){
                KQ3++;
                Final = N1 + Prox;
                N1 = Prox;
                Prox = Final
            }
            return String("e) " + Final);

        case "f":
            Total = 5; KQ3 = 0; N1 = 1; Final = 0;
            while((Total - 1) > KQ3){
                KQ3++;
                Final = N1 + 2;
                N1 = Final;
            }
            return String("a) " + Final);
    }
}

/*
4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, 
a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem 
na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

IMPORTANTE:

a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

c) Explique como chegou no resultado.

*/ 

function Questao4(){
    let velocidadeCarro = 110; velocidadeCaminhao= 80; distancia = 100; pedagioCaminhao = 10;
    velocidadeCarro = velocidadeCarro / 60;
    velocidadeCaminhao = (velocidadeCaminhao / 60);
    pedagioCaminhao = pedagioCaminhao;
    let t = distancia / (velocidadeCarro + velocidadeCaminhao);
    let distanciaCarro = velocidadeCarro * t;
    let distanciaCaminhao = velocidadeCaminhao * (t + pedagioCaminhao);
    if (distanciaCarro < distanciaCaminhao) {
        return "O carro está mais próximo a cidade de Ribeirão Preto. " + t + " minutos";
    } 
    else if (distanciaCarro > distanciaCaminhao) {
        return "O caminhão está mais próximo a cidade de Ribeirão Preto. " + t + " minutos";
    } 
    else {
        return "Os veículos estão à mesma distância da cidade de Ribeirão Preto. " + t + " minutos";
    }
    
}

function Questao5(str){
    let invertendo = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        invertendo = invertendo + str[i];
    }
    return invertendo;
}
console.log("A Resposta da questão 1 é: " + Questao1());
console.log("A Resposta da questão 2 é: " + Questao2(34) + ", " + Questao2(47) + ", " + Questao2(13));
console.log("A Resposta da questão 3 é: " + Questao3("a") + ", " + Questao3("b") + ", " + Questao3("c") + ", " + Questao3("d") + ", " + Questao3("e") + ", f) 200");
//A F é 200 pois a sequencia de numeros se dá com a primeira letra Dois, Dez, Doze... etc
console.log("A Resposta da questão 4 é: " + Questao4())
console.log("A Resposta da questão 5 é: " + Questao5("resposta"))

