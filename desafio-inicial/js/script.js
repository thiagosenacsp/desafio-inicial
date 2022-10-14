const pokeComputador = document.getElementById("poke-pc");
const pokeJogador = document.getElementById("poke-jogador");
const resultado = document.getElementById("resultado");
const escolhas = document.getElementsByName("escolha")

let jogada;

escolhas.forEach((escolhas) =>
  escolhas.addEventListener("click", (evento) => {
    escolhas = evento.target.id;
    pokeJogador.innerHTML = escolhas;
    gerarPokeComputador();
    console.log(escolhas);
  })
);

function gerarPokeComputador() {
  const numero = Math.floor(Math.random() * 3);
}
