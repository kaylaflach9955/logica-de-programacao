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