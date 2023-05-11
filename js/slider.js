let bntAdelante = document.querySelector('btnAdelante');
let btnAtras = document.querySelector('btnAtras');
let ho = document.querySelector('imgg');
contador = 3;
function sumar() {
    contador++
    if (contador == 4) {
        contador =1;
    }
    imagen();
}
function restar() {
    contador--
    if (contador == 0) {
        contador = 3;
    }
    imagen();
}

function imagen() {
    if (ho.classList.contains('animation')) {
        ho.classList.add('animation2');
        ho.classList.remove('animation');
    }else{
        ho.classList.remove('animation2');
        ho.classList.add('animation');
    }
    setTimeout(() => {
        proyectar();
    }, 500);
}
function proyectar() {
    if (contador == 3) {
        img1();
    }
    if (contador == 1) {
        img2();
    }
    if (contador == 2) {
        ima3();
    }
}
function img1() {
    ho.setAttribute('src', ('imagenes/carro1'));
}
function img2() {
    ho.setAttribute('src', ('imagenes/carro2'));
}
function ima3() {
    ho.setAttribute('src', ('imagenes/carros3'));
}


btnAtras.addEventListener('click', restar);
bntAdelante.addEventListener('click', sumar);