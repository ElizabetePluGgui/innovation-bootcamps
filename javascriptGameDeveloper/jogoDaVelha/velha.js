var jogador = null;
var jogadorSelecionado = document.getElementById({
  elementId: 'jogador-selecionado',
});

mudarJogador({ valor: 'X' });

function escolherQuadrado(id) {
  var quadrado = document.getElementById(id);

  quadrado.innerHTML = jogador;
  quadrado.style.color = '#000';

  if (jogador === 'X') {
    jogador = 'O';
  } else {
    jogador = 'X';
  }
  mudarJogador(jogaor);
}
function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}
