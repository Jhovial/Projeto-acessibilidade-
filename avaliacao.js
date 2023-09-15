function exibirTexto() {     
    var input = document.getElementById("caixa_de_texto").value;     
    var resposta = document.getElementById("resposta");     
    resposta.innerHTML = "Texto Digitado: " + input;
}