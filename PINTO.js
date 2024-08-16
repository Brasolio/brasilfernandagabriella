const caixaPrincipal = document.querySelector ('caixa-Principal');
const caixaPrincipal = document.querySelector ('caixa-Principal');
const caixaPrincipal = document.querySelector ('caixa-Principal');
const caixaPrincipal = document.querySelector ('caixa-Principal');
const caixaPrincipal = document.querySelector ('caixa-Principal');

const perguntas = [
    {
        enunciado: "social",
        alternativas: [
            {
                texto: "no ambito social, voce prefere:",
                afirmação: "afirmacao",
            },
            { 
                texto: "alternativa 2222",
                afirmação: "afirmation",

            },
        ]       
    },
    {
        enunciado: "social",
        alternativas: [
            {
                texto: "no ambito ambiental, voce prefere:",
                afirmação: "afirmacao",
            },
            { 
                texto: "alternativa 2222",
                afirmação: "afirmation",

            },
        ]       
    },    {
        enunciado: "social",
        alternativas: [
            {
                texto: "no ambito tecnologico, voce prefere:",
                afirmação: "afirmacao",
            },
            { 
                texto: "alternativa 2222",
                afirmação: "afirmation",

            },
        ]       
    },
]
let atual = 0;
let perguntaAtual;

function mostraPergunta (){
    perguntaAtual[atual];
    caixaPerguntas.textContext = perguntaAtual.enunciado;
    caixaAlternativas.textContext = ""
}