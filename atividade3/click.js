let incremento = 0;

window.onload = function () {
  // Carrega o valor inicial assim que a página terminar de carregar
  const input = document.getElementById("incremento");
  if (input) {
    incremento = Number(input.value) || 0;
  }
};

function incrementar() {
  incremento++;
  const input = document.getElementById("incremento");
  if (input) {
    input.value = incremento;
  }
}
