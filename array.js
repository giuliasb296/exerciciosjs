/* 
    Atividade checkpoint: "Array"
    Senai Nadir Dias de Figueiredo
    @author Giulia Santiago Barreto
    Data: 23/08/2023
*/

const hobbies = ['jogar vôlei', 'ver filme', 'escutar música', 'andar de bicicleta']
console.log(hobbies)
console.log(hobbies[0])
console.log(hobbies[1])
console.log(hobbies[2])

//Trocar itens da array.
hobbies[0] = 'ler livros'

//Ver quantos itens a array possui.
console.log(hobbies.length)

//Adicionar itens no fim da array.
hobbies.push('cozinhar');
console.log(hobbies)

//Remover o último item da array.
hobbies.pop()
console.log(hobbies);

//Remover itens específicos da array.
let posicao = hobbies.indexOf('ler livros'); //Pode-se fazer desse jeito para descobrir a posição do item na array.
hobbies.splice(posicao, 1); 
hobbies.splice(0,1) //E dessa forma, caso você já saiba a posição do item.
console.log(hobbies)

//Abaixo, juntaremos duas arrays.
const hobbiesDoAmigo = ['jogar', 'cantar', 'dançar']
const todosOsHobbies = hobbies.concat(hobbiesDoAmigo)
console.log(todosOsHobbies)

//Agora, separaremos por categorias:
const hobbiesMusicais = ['escutar música','cantar', 'dançar'];
const hobbiesEsportivos = ['andar de bicicleta']
const hobbiesCriativos = ['jogar']

const categoriasDeHobbies = [hobbiesMusicais, hobbiesEsportivos, hobbiesCriativos]

//Aqui, o console mostrará  apenas a array da categoria que eu escolhi.
console.log(categoriasDeHobbies[0]);

//Em sequência, o console mostrará, desta vez, o primeiro item dentro da categoria que eu escolhi.
console.log(categoriasDeHobbies[0][0])

//Em seguida, será impresso o terceiro item da categoria escolhida anteriormente.
console.log(categoriasDeHobbies[0][2])

