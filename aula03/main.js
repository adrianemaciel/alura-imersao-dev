var numeroSecreto = parseInt(Math.random() * 11);

// número secreto fora da função

function Chutar() {
  var elementoResultado = document.getElementById("Resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.inner.HTML("Você acertou!");
  } else if (chute > 10 || chute < 0) {
    elementoResultado.inner.HTML("Você deve digitar um número de 0 a 10");
  } else {
    elementoResultado.inner.HTML(
      "Errou, o número secreto era " + numeroSecreto
    );
  }
}
