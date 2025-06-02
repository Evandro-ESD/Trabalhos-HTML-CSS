const usuario = {
    nome: "Maria", idade: "32"
}
usuario.idade = 26
console.log(usuario)

//Array
const numeros = [1, 2, 3]
numeros.push(4)
console.log(numeros[0])
console.log(numeros[2])
console.log(numeros[10])
console.log(numeros)

// Concatenar - string ``
let menssagem = "Olá mundo!!!"
let nome = "Paulo"

console.log(nome + ", "+ menssagem)
console.log(`${nome}, ${menssagem}`)
console.log(`Sr ${nome} ${menssagem}`)
console.log("Sr " + nome + "\nMenssagem: " + menssagem)
