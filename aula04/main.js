var listaFilmes = ["Yesterday", "A chegada", "Escola de Rock"];
// elemento        1             2            3
// indice          0             1            2

//  adiciona novo elemento - indice 3
listaFilmes.push("Harry Potter 3");
// indice 4
listaFilmes.push("Harry Potter 4");
listaFilmes.push("Harry Potter 5");

console.log(listaFilmes.length);

//  valor inical,    condição,  expressão final
for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<p>" + listaFilmes[indice] + "</p>");
}
