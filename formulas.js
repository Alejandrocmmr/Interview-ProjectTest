// 1) Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;

// enquanto K < INDICE faça

// {

// K = K + 1;

// SOMA = SOMA + K;

// }

// imprimir(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?


// tentarei utilizar de meus basicos conhecimentos com as tecnologias conhecidas para fazer em codigo todas as questoes

let Indice = 13

let SOMA = 0    

let K = 0

while (K < Indice) {
    K += 1
    SOMA = SOMA + K
}   

console.log(SOMA) //=91




//-----------------------------------------------------



// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



let calcule = 0;
let result = 0 ;
let number_1,number_2 ;
let numbertotest = 15



function Fibonacci(numero_1,numero_2) {
  
    while (result <= 50)
    {                       
        calcule= numero_1 + numero_2;
        numero_1= numero_2;
        numero_2= calcule; 
        result++;

    }
    
    if(numbertotest != result){
        console.log("O número informado não faz parte da sequencia fibonacci")} 

        else {console.log("O número informadofaz parte da sequencia fibonacci")}
}

//console.log(Fibonacci(numbertotest))


//esta foi minha tentativa, por eu estar em um nivel iniciante nao consegui avancar mais que isso porem como ja passei muito tempo nesta questao , irei deixar o que eu consegui realizar e meu raciocinio e partir para as outras questoes. com certeza sera de muito estudo esta questao para mais aprendizado sobre logica e js.




//-----------------------------------------------------





// 3) Descubra a lógica e complete o próximo elemento:



// a) 1, 3, 5, 7, 9
//+2
// b) 2, 4, 8, 16, 32, 64, 128
//*2
// c) 0, 1, 4, 9, 16, 25, 36, 49, 74
// <++ 1, 2, 3, 4,  5,  6,  7,  8,

// d) 4, 16, 36, 64, 100, 144
//(4+8)+x  4+8=12+8=20+8=28+8=36+8=44 
// e) 1, 1, 2, 3, 5, 8, 13 , 21 , 34

// f) 2,10, 12, 16, 17, 18, 19,  _ 
//   2↑3,2↑1,2↑2,2↑1,2↑1,2↑0,2↑1 
//esse realmente nao consegui pensar em nada simplesmente nao tem uma logica matematica que eu consiga imaginar com esse padrao de aumento repentino, pois nao tem um padrao fixo por somas suficiente para eu imaginar nada

  
//-----------------------------------------------------



// 4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

// IMPORTANTE:

// a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

// R:o caminhao


// b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)
//R: conforme a resposta da C independente da velocidade o caminhao ao se cruzar na rodovia com o carro em direcoes opostas, sempre ira estar mais perto de ribeirao preto, mesmo que esteja praticamente saindo da cidade o carro estaria entrando na cidade se afastando de ribeirao preto



// c) Explique como chegou no resultado.

//  R:Esta resposta nao tem contas nem nada possivel para ter se uma resolução que nao esta, devido ao cruzamento dos 2 veiculos sempre se dar em um mesmo ponto porem estao em diferentes direçoes,sempre que se cruzarem um vai estar mais perto da sua respectiva rota. ou seja sempre que o caminhao ultrapassar nem que seja 1cm o carro ele estara mais perto da cidade de ribeirão perto devido a ele estar indo para ribeirao perto e o carro a direcao contraria ou seja se afastando, e como estao numa mesma rodovia, eles estao alinhandos sendo impossivel o carro ultrapassar o caminhao ao se cruzar com ele em uma linha alinhada de rodovia se afastando da cidade de ribeirao preto para franca que seria seu destino, ambos os veiculos indo em direcoes opostas causa o efeito de que sempre que um cruzar o outro, o veiculo direcionado para tal cidade ira ficar mais perto e o outro mais longe, devido a estarem em direcoes opostas

//para ficar mais claro é so pensar que o carro sempre ira estar se afastando de ribeirao preto e o caminhao sempre ira se aproximar e qnd se cruzarem se "medir com uma fita metrica" poderemos ver que entre o caminhao em sua respectiva posicao em direcao a cidade de Ribeirao preto e o carro em sua respectiva posicao em direcao a Franca sempre o caminha estara com vantagem milimetra de distancia do carro no ponto de cruzamento, a nao ser em 1 posicao que seria em paralelo perfeito ou levando em consideração o tamanho dos veiculos( no qual a questao nao citou nada entao nao teria tal resposta)





//-----------------------------------------------------






// 5) Escreva um programa que inverta os caracteres de um string.
// irei usar um exemplo com a variavel A

let A = "salamemingue"

function Inversao(X){
    let Array_ =  Array.from(X)
    let Result = [];
    let Indice = 10;
   


    // while(Indice!=0){

    // Result.concat(Array_.splice(-1 [Indice]))
    // --Indice
    // }
    //tentativa falha

    while(Array_[0]!=undefined){

        Result.push(Array_.splice(-1, 1))
        }
    

//     while(Array[0] !== undefined){ 
//        C.push(B.pop())
// }
//tentativa falha


Result = Result.join("")
Result = Result.toString()
return Result
}


console.log(Inversao(A))

//FINAL 