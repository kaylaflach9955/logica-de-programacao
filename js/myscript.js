alert("Olá galera!");

function mudarFrase(){
    var elemento = document.getElementById("frase");
    elemento.innerHTML = "Qualquer frase";
    elemento.style.color = "red";
    elemento.style.fontSize = "25px";
    elemento.style.backgroundColor = "yellow";
    document.body.style.backgroundColor = "blue"
    elemento.innerHTML = "<img src=\'img/a.jpeg\' />"
}

function mudarClasse() {
    var fraseAtual = document.getElementsById("frase");
    fraseAtual.className = "h1_1";
}

function trocarTexto() {
    var elemento = document.getElementById("frase");
    var elementoNovo = documento.getElementById('novaFrase').value;
    elemento.innerHTML = ElementoNovo;
}

function somar() {
    let camp1 = document.getElementById("n1");
    let n1 = parseInt(camp1.value);

    let camp2 = document.getElementById("n2");
    let n2 = parseInt(camp2.value);

    let resultado = n1 + n2;

    let campoResultado = document.getElementById("resultado");
    campoResultado.value = resultado;
}

function subtrair() {
    let camp1 = document.getElementById("n1");
    let n1 = parseInt(camp1.value);

    let camp2 = document.getElementById("n2");
    let n2 = parseInt(camp2.value);

    let resultado = n1 - n2;

    let campoResultado = document.getElementById("resultado");
    campoResultado.value = resultado;
}

function dividir() {
    let camp1 = document.getElementById("n1");
    let n1 = parseInt(camp1.value);

    let camp2 = document.getElementById("n2");
    let n2 = parseInt(camp2.value);

    let resultado = n1 / n2;

    let campoResultado = document.getElementById("resultado");
    campoResultado.value = resultado;
}

function multiplicar() {
    let camp1 = document.getElementById("n1");
    let n1 = parseInt(camp1.value);

    let camp2 = document.getElementById("n2");
    let n2 = parseInt(camp2.value);

    let resultado = n1 * n2;

    let campoResultado = document.getElementById("resultado");
    campoResultado.value = resultado;
}