var jogador = null;
var jogadorSelecionado = document.getElementById({
  elementId: 'jogador-selecionado',
});

mudarJogador({ valor: 'X' });

function escolherQuadrado(id) {
  var quadrado = document.getElementById(id);

  quadrado.innerHTML = jogador;
  quadrado.style.color = '#000';
}
function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}
