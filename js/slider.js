let lefArrow = document.getElementById('leftAroow');
let leftAdelante = document.getElementById('leftAdelante');
let imgToyotaCamry = document.getElementById('imgToyotaCamry');
let imgToyotaTundra = document.getElementById('imgToyotaTundra');
let imgToyotaRav4 = document.getElementById('imgToyotaRav4');



lefArrow.addEventListener("click", function () {
    if (imgToyotaCamry.classList.contains("img-toyota-camry")) {
        imgToyotaCamry.classList.remove("img-toyota-camry");
        imgToyotaCamry.classList.add("img-toyota-camry-hidden");
        imgToyotaTundra.classList.add("img-toyota-tundra");
        imgToyotaTundra.classList.remove("img-toyota-tundra-hidden-right");
    }
    else if (imgToyotaTundra.classList.contains("img-toyota-tundra")) {
        imgToyotaTundra.classList.remove("img-toyota-tundra");
        imgToyotaTundra.classList.add("img-toyota-tundra-hidden-left");
        imgToyotaRav4.classList.add("img-toyota-rav4");
        imgToyotaRav4.classList.remove("img-toyota-rav4-hidden-right");
    }

});

leftAdelante.addEventListener("click", function () {
    alert ("ghgffhjg");

});























// contador = 3;
// function sumar() {
//     contador++
//     if (contador == 4) {
//         contador =1;
//     }
//     imagen();
// }
// function restar() {
//     contador--
//     if (contador == 0) {
//         contador = 3;
//     }
//     imagen();
// }

// function imagen() {
//     if (ho.classList.contains('animation')) {
//         ho.classList.add('animation2');
//         ho.classList.remove('animation');
//     }else{
//         ho.classList.remove('animation2');
//         ho.classList.add('animation');
//     }
//     setTimeout(() => {
//         proyectar();
//     }, 500);
// }
// function proyectar() {
//     if (contador == 3) {
//         img1();
//     }
//     if (contador == 1) {
//         img2();
//     }
//     if (contador == 2) {
//         ima3();
//     }
// }
// function img1() {
//     ho.setAttribute('src', ('imagenes/carro1'));
// }
// function img2() {
//     ho.setAttribute('src', ('imagenes/carro2'));
// }
// function ima3() {
//     ho.setAttribute('src', ('imagenes/carros3'));
// }


// btnAtras.addEventListener('click', restar);
// bntAdelante.addEventListener('click', sumar);