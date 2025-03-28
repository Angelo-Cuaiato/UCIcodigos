// 1 checar se pode acessar area restrita (>= 18 anos, assinatura)

// Declarando as variaveis

let idade = 18 // A pessoa tem 18 anos
let temAssinatura = true // A pessoa tem uma assinatura (true)

// verificar se a pessoa pode acessar a area
console.log("A pessoa pode acessar a area exclusiva? " + (idade >= 18 && temAssinatura))

/*
A pessoa pode acessar a area exclusiva se for maior ou igual a 18 anos E se tiver uma assinatura paga.
O operadador "&&" (AND) vai retornar true se as duas condições forem verdadeira.
1.declarara  as variaveis necessarias a atribuir os valores.
2. testar
------------------------------------------------------------------------------------------------------*/

let temIdentidade = true // pode botar dois "let" desde de que nao seja a "let idade"

console.log("A pessoa pode comprar bebida alcoolica tendo 18 e identidade? " + (idade >= 18 && temIdentidade))


/*
--------------------------------------------------------------------------------------------------------*/
 
let temCupom = true
let cupom = 100
let vip = true

console.log("o cliente pode comprar com cupom caso for acima de 100 ou seja vip? " + (vip >= 200 || temCupom))

/*
-----------------------------------------------------------------------------------------------------------*/

let pessoa = 45
let PCD = true

console.log("pessoa idosas ou PCD podem acessar a vaga especial? " + (pessoa >= 45 || PCD))

/*
-----------------------------------------------------------------------------------------------------------*/

let controle = true
let PS5 = true
let tv = true

console.log("para a pessoa jogar video game precisa de um controle ou console conectado na tv? " + (PS5 && tv || controle))

/*
&& com || usando os dois
-----------------------------------------------------------------------------------------------------------*/

