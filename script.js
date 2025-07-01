const perguntas = [
{
texto: "Qual dessas frases mais combina com você?",
opcoes: [
"Prefiro segurança mesmo que o retorno seja menor",
"Quero equilíbrio entre risco e retorno",
"Busco alta rentabilidade mesmo com mais risco"
],
pontuacoes: [1, 2, 3]
},
{
texto: "Por quanto tempo você pretende manter o investimento?",
opcoes: [
"Menos de 1 ano",
"Entre 1 e 5 anos",
"Mais de 5 anos"
],
pontuacoes: [1, 2, 3]
},
{
texto: "Como você reagiria se seu investimento caísse 10% em um mês?",
opcoes: [
"Venderia tudo imediatamente",
"Esperaria um pouco para decidir",
"Aproveitaria para investir mais"
],
pontuacoes: [1, 2, 3]
}
];

let perguntaAtual = 0;
let pontuacaoTotal = 0;

function mostrarPergunta() {
const p = perguntas[perguntaAtual];
document.getElementById("question").innerText = p.texto;

const answersDiv = document.getElementById("answers");
answersDiv.innerHTML = "";

p.opcoes.forEach((opcao, index) => {
const btn = document.createElement("button");
btn.className = "answer-btn";
btn.innerText = opcao;
btn.onclick = () => {
pontuacaoTotal += p.pontuacoes[index];
perguntaAtual++;
if (perguntaAtual < perguntas.length) {
mostrarPergunta();
} else {
mostrarResultado();
}
};
answersDiv.appendChild(btn);
});
}

function mostrarResultado() {
let perfil, recomendacoes;

if (pontuacaoTotal <= 3) {
perfil = "Conservador";
recomendacoes = `
<ul>
<li><strong>Tesouro Selic</strong>: Título público com rentabilidade atrelada à taxa Selic, considerado de baixo risco.</li>
<li><strong>CDBs</strong>: Com garantia do FGC.</li>
<li><strong>LCI/LCA</strong>: Isentas de IR, com garantia do FGC.</li>
<li><strong>Fundos de Renda Fixa</strong>: Diversificados em renda fixa.</li>
</ul>
`;
} else if (pontuacaoTotal <= 6) {
perfil = "Moderado";
recomendacoes = `
<ul>
<li><strong>Fundos Multimercado</strong>: Renda fixa, variável, câmbio, etc.</li>
<li><strong>Fundos de Ações</strong>: Potencial maior retorno.</li>
<li><strong>FIIs</strong>: Renda passiva com imóveis.</li>
<li><strong>Tesouro IPCA+</strong>: Proteção contra inflação.</li>
</ul>
`;
} else {
perfil = "Arrojado";
recomendacoes = `
<ul>
<li><strong>Ações</strong>: Risco e potencial maiores.</li>
<li><strong>Fundos de Ações</strong>: Carteiras diversificadas.</li>
<li><strong>Multimercado agressivo</strong>: Alta exposição a risco.</li>
<li><strong>Investimentos no exterior</strong>: Diversificação internacional.</li>
<li><strong>Derivativos</strong>: Alta complexidade e risco.</li>
</ul>
`;
}

document.getElementById("question-area").innerHTML = `
<h2>Seu perfil de investidor é: <strong>${perfil}</strong></h2>
<p>Pontuação total: ${pontuacaoTotal}</p>
<h3>Investimentos recomendados:</h3>
${recomendacoes}
<button class="answer-btn" onclick="location.reload()">Refazer o quiz</button>
`;
}

mostrarPergunta();