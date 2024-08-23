const caixaPrincipal = document.querySelector ('caixa-Principal');
const caixaPerguntas = document.querySelector ('caixa-Perguntas');
const caixaAlternativas = document.querySelector ('caixa-Alternativa');
const caixaResultado = document.querySelector ('caixa-Resultado');
const textoresultado = document.querySelector ('texto-resultado');

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
let historiaFinal = "";

function mostraPergunta (){
    if (atual>= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual[atual];
    caixaPerguntas.textContext = perguntaAtual.enunciado;
    caixaAlternativas.textContext = ""
}

function mostraAlternativa(){
    for(const pergunta of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = pergunta.texto;
        botaoAlternativa.addEventListener ("click",()=> respostaSelecionada(pergunta));
    }

}

function respostaSelecionada (pergunta){
    const afirmacoes = pergunta.afirmação;
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em resumo, voce escolheu...";
        caixaResultado.textContent = historiaFinal;
        caixaAlternativas.textContent ="";
}