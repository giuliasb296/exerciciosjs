/*
    Atividade checkpoint: "Loops"
    Senai Nadir Dias de Figueiredo
    @author Giulia Santiago Barreto
    Data: 23/08/2023
*/


const lugaresQueVisitei = ['Curitiba', 'Rio de Janeiro', 'Guarujá', 'Itú', 'Serra Negra,', 'Bragança Paulista','Aparecida do Norte'];
for(let i = 0; i < lugaresQueVisitei.length; i++) {
    console.log(`Eu já visitei ${lugaresQueVisitei[i]}.`);
};
const lugaresAmigo = ['Salvador', 'Ubatuba', 'Praia Grande', 'Jaraguá', 'Natal', 'Itú', 'Curitiba'];
const lugaresEmComum = []
for (let i = 0; i < lugaresQueVisitei.length; i++) {
    for (let j = 0; j < lugaresAmigo.length; j++) {
        if (lugaresQueVisitei[i] === lugaresAmigo[j]){
            lugaresEmComum.push(lugaresQueVisitei[i])
        }
    }
};
console.log(`Eu e a João visitamos esses lugares em comum: ${lugaresEmComum}`)

const amigosFace = ['João', 'Giullia', 'Letícia', 'Vitória'];
const amigoKaian = ['Luiz', 'Andre', 'Letícia', 'João'];
const amigosEmComum = [];
for (let i = 0; i < amigosFace.length; i++) {
    for (let j = 0; j < amigoKaian.length; j++) {
        if (amigosFace[i] === amigoKaian[j]){
            amigosEmComum.push(amigosFace[i])
        }
    }
};
console.log(`Os dois tem ${amigosEmComum}, como amigos em comum!`);

const numeroSecreto = 4;
let tentativas = 0;
for(let i = 0; i < 10; i++) {
    let palpiteAtual = parseInt(window.prompt('Digite o valor: '));
   
    //Laço de repetição 
    
    if (palpiteAtual === numeroSecreto) {
        document.write(`Você adivinhou! ${numeroSecreto}`)
        break
    } else {
        if (tentativas <= 5) {
            tentativas++;
            if(tentativas == 5){
                document.write(`Você passou das tentativas!`);
                break;
            }
            
        }
    }
}