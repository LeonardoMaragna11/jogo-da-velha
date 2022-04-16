var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado')
var vencedorSelecionado = document.getElementById('vencedor-selecionado')
// var quadrados = document.getElementsByClassName('quadrado')
mudarJogador('x')

function escolherQuadrado(id){
    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = 'aliceblue';

    if(jogador == 'x'){
        jogador = 'o'
    }else{
        jogador = 'x'
    }
    mudarJogador(jogador);
    verVitoria();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}
function verVitoria(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);
    
    if(verSequencia(quadrado1, quadrado2, quadrado3)){
        mudarCor(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }
    if(verSequencia(quadrado4, quadrado5, quadrado6)){
        mudarCor(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }    
    if(verSequencia(quadrado7, quadrado8, quadrado9)){
        mudarCor(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    if(verSequencia(quadrado1, quadrado4, quadrado7)){
        mudarCor(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    if(verSequencia(quadrado2, quadrado5, quadrado8)){
        mudarCor(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }
    if(verSequencia(quadrado3, quadrado6, quadrado9)){
        mudarCor(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }
    if(verSequencia(quadrado1, quadrado5, quadrado9)){
        mudarCor(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if(verSequencia(quadrado3, quadrado4, quadrado7)){
        mudarCor(quadrado1, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        return;
    }
}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML
    vencedorSelecionado.innerHTML = vencedor;
}

function mudarCor(quadrado1, quadrado2, quadrado3){
    quadrado1.style.backgroundColor = '#0F0';
    quadrado2.style.backgroundColor = '#0F0';
    quadrado3.style.backgroundColor = '#0F0';
}

function verSequencia(quadrado1, quadrado2, quadrado3){
    var igual = false;
    if(quadrado1.innerHTML != '-' && 
        quadrado1.innerHTML == quadrado2.innerHTML  && 
        quadrado2.innerHTML == quadrado3.innerHTML)
    {
        igual = true
    } 
    return igual;
}

function reiniciar(){
    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#555'
        quadrado.style.color = 'aliceblue';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}