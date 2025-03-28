// 1. declarancod alguamas variaveis para usar nos testes
let a = 10 // variavel a, com valor 10(let singnifica que pode mudar )
let b = 20 // variavel b, com valor 20
let c = 30 // variavel c, com valor 30

console.log(c)
console.log(b)
console.log(a)

// 2. testando operadores de comparação
console.log("operadores de comparção")
console.log("a é igual a b? " + (a == b)) // concatenação com comparação (==)
console.log("a é diferente de b? " + (a != b)) // operador teste diferença (!=)
console.log("a e maior que b? " + (a > b)) // Operador para testar se é maior (>)
console.log("a é menor que b? " + (a < b)) // operador para testar se e menor (<)
console.log("c e menor que a? " + (c < a)) // operador para testar se o menor (<)
console.log("b e menor que c? " + (b < c)) // operador para testar se o menor (<)

console.log("a é maior que 5 E b é menor que 30? " + (a > 5 && b < 30)) // operador logico "E" ou "AND" (&&)
console.log("b e menor que 10 E c é menor que 20? " + (b < 10 && c < 20)) // operador logico "E" ou "AND" (&&)
console.log("c e maior que 10 E b é menor que 30? " + (c > 10 && b < 30)) // operador logico "E" ou "AND" (&&)
console.log("c e menor que 20 E b é maior que 30? " + (c < 20 && b > 30)) // operador logico "E" ou "AND" (&&)
console.log("c e maior que 20 E b é maior que 10 " + (c > 20 && b > 10)) // operador logico "E" ou "AND" (&&)
console.log("a e igual a 10 ou é maior que 25 " + (a == 10 || b > 25)) // operador logico "ou" ou "or" (||)

//NOT

console.log("a não e maior que 5 " + !(a > 5)) // operador logico "NAO" ou "NOT" (!)


