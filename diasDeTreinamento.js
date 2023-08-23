/* 
    Atividade challenge: "Dias de Treinamento"
    Senai Nadir Dias de Figueiredo
    @author Giulia Santiago Barreto
    Data: 23/08/2023
*/

const nome = "Giulia";

function getEventoAleatorio() {
    let numero = Math.floor(Math.random(0) * 3)

    if(numero === 0) {
       return "Maratona"
    }
    else if(numero === 1) {
        return "Triathlon"
    }
    else if(numero === 2) {
        return "Pentathlon"
    }
};

let modalidade = getEventoAleatorio();

function getDiasTreino(modalidade) {
    if (modalidade === "Maratona") {
        return "50 dias"
    }
    else if (modalidade === "Triathlon") {
        return "100 dias"
    }
    else if (modalidade === "Pentathlon") {
        return "200 dias"
    }
         
}; 
console.log(getDiasTreino(modalidade))

let tempo = getDiasTreino(modalidade);

function logEvento(nome, modalidade) {
    return`${nome} partipará da ${modalidade}`
}
console.log(logEvento(nome, modalidade))

function logTempo(nome, tempo) {
    return `${nome} treinará por ${tempo}`
}
console.log(logTempo(nome,tempo))