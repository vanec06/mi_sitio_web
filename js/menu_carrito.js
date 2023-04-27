let imgBox = document.getElementById("imgBox");
let boxImgMini1 = document.getElementById("boxImgMini1");
let boxImgMini2 = document.getElementById("boxImgMini2");
let boxImgMini3 = document.getElementById("boxImgMini3");
let boxImgMini4 = document.getElementById("boxImgMini4");
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");

imgMini1.addEventListener("click", function () {
  imgBox.setAttribute("src", "img/image-product-1.jpg");
  boxImgMini1.classList.add("box-img-mini");
  boxImgMini2.classList.remove("box-img-mini");
  boxImgMini2.classList.remove("box-img-mini");
  boxImgMini4.classList.remove("box-img-mini");
  imgMini1.classList.add("img-mini-act");
  imgMini2.classList.remove("img-mini-act");
  imgMini3.classList.remove("img-mini-act");
  imgMini4.classList.remove("img-mini-act");
});

imgMini2.addEventListener("click", function () {
  imgBox.setAttribute("src", "img/image-product-2.jpg");
  boxImgMini1.classList.remove("box-img-mini");
  boxImgMini2.classList.add("box-img-mini");
  boxImgMini3.classList.remove("box-img-mini");
  boxImgMini4.classList.remove("box-img-mini");
  imgMini1.classList.remove("img-mini-act");
  imgMini2.classList.add("img-mini-act");
  imgMini3.classList.remove("img-mini-act");
  imgMini4.classList.remove("img-mini-act");

});
imgMini3.addEventListener("click", function () {
  imgBox.setAttribute("src", "img/image-product-3.jpg");
  boxImgMini1.classList.remove("box-img-mini");
  boxImgMini2.classList.remove("box-img-mini");
  boxImgMini3.classList.add("box-img-mini");
  boxImgMini4.classList.remove("box-img-mini");
  imgMini1.classList.remove("img-mini-act");
  imgMini2.classList.remove("img-mini-act");
  imgMini3.classList.add("img-mini-act");
  imgMini4.classList.remove("img-mini-act");
});
imgMini4.addEventListener("click", function () {
  imgBox.setAttribute("src", "img/image-product-4.jpg");
  boxImgMini1.classList.remove("box-img-mini");
  boxImgMini2.classList.remove("box-img-mini");
  boxImgMini3.classList.remove("box-img-mini");
  boxImgMini4.classList.add("box-img-mini");
  imgMini1.classList.remove("img-mini-act");
  imgMini2.classList.remove("img-mini-act");
  imgMini3.classList.remove("img-mini-act");
  imgMini4.classList.add("img-mini-act");
});


//  ------------------------------------ 
let imgBoxSecond = document.getElementById("imgBox1.0");
let Mini1 = document.getElementById("boxImgMini1.0");
let Mini2 = document.getElementById("boxImgMini2.0");
let Mini3 = document.getElementById("boxImgMini3.0");
let Mini4 = document.getElementById("boxImgMini4.0");
let img1 = document.getElementById("imgMini1.0");
let img2 = document.getElementById("imgMini2.0");
let img3 = document.getElementById("imgMini3.0");
let img4 = document.getElementById("imgMini4.0");

Mini1.addEventListener("click", function () {
  imgBoxSecond.setAttribute("src", "img/image-product-1.jpg");
  Mini1.classList.add("box-img-mini");
  Mini2.classList.remove("box-img-mini");
  Mini2.classList.remove("box-img-mini");
  Mini4.classList.remove("box-img-mini");
  img1.classList.add("img-mini-act");
  img2.classList.remove("img-mini-act");
  img3.classList.remove("img-mini-act");
  img4.classList.remove("img-mini-act");
  imgBox.setAttribute("src", "img/image-product-1.jpg");
  boxImgMini1.classList.add("box-img-mini");
  boxImgMini2.classList.remove("box-img-mini");
  boxImgMini2.classList.remove("box-img-mini");
  boxImgMini4.classList.remove("box-img-mini");
  imgMini1.classList.add("img-mini-act");
  imgMini2.classList.remove("img-mini-act");
  imgMini3.classList.remove("img-mini-act");
  imgMini4.classList.remove("img-mini-act");
});

Mini2.addEventListener("click", function () {
  imgBoxSecond.setAttribute("src", "img/image-product-2.jpg");
  Mini1.classList.remove("box-img-mini");
  Mini2.classList.add("box-img-mini");
  Mini3.classList.remove("box-img-mini");
  Mini4.classList.remove("box-img-mini");
  img1.classList.remove("img-mini-act");
  img2.classList.add("img-mini-act");
  img3.classList.remove("img-mini-act");
  img4.classList.remove("img-mini-act");
  imgBox.setAttribute("src", "img/image-product-2.jpg");
  boxImgMini1.classList.remove("box-img-mini");
  boxImgMini2.classList.add("box-img-mini");
  boxImgMini3.classList.remove("box-img-mini");
  boxImgMini4.classList.remove("box-img-mini");
  imgMini1.classList.remove("img-mini-act");
  imgMini2.classList.add("img-mini-act");
  imgMini3.classList.remove("img-mini-act");
  imgMini4.classList.remove("img-mini-act");

});
Mini3.addEventListener("click", function () {
  imgBoxSecond.setAttribute("src", "img/image-product-3.jpg");
  Mini1.classList.remove("box-img-mini");
  Mini2.classList.remove("box-img-mini");
  Mini3.classList.add("box-img-mini");
  Mini4.classList.remove("box-img-mini");
  img1.classList.remove("img-mini-act");
  img2.classList.remove("img-mini-act");
  img3.classList.add("img-mini-act");
  img4.classList.remove("img-mini-act");
  imgBox.setAttribute("src", "img/image-product-3.jpg");
  boxImgMini1.classList.remove("box-img-mini");
  boxImgMini2.classList.remove("box-img-mini");
  boxImgMini3.classList.add("box-img-mini");
  boxImgMini4.classList.remove("box-img-mini");
  imgMini1.classList.remove("img-mini-act");
  imgMini2.classList.remove("img-mini-act");
  imgMini3.classList.add("img-mini-act");
  imgMini4.classList.remove("img-mini-act");
});
Mini4.addEventListener("click", function () {
  imgBoxSecond.setAttribute("src", "img/image-product-4.jpg");
  Mini1.classList.remove("box-img-mini");
  Mini2.classList.remove("box-img-mini");
  Mini3.classList.remove("box-img-mini");
  Mini4.classList.add("box-img-mini");
  img1.classList.remove("img-mini-act");
  img2.classList.remove("img-mini-act");
  img3.classList.remove("img-mini-act");
  img4.classList.add("img-mini-act");
  imgBox.setAttribute("src", "img/image-product-4.jpg");
  boxImgMini1.classList.remove("box-img-mini");
  boxImgMini2.classList.remove("box-img-mini");
  boxImgMini3.classList.remove("box-img-mini");
  boxImgMini4.classList.add("box-img-mini");
  imgMini1.classList.remove("img-mini-act");
  imgMini2.classList.remove("img-mini-act");
  imgMini3.classList.remove("img-mini-act");
  imgMini4.classList.add("img-mini-act");
});


/*inicializacion de varibles*/
let btnRestar = document.getElementById("btnRestar");
let cantBox = document.getElementById("cantBox");
let btnSumar = document.getElementById("btnSumar");
let btnCantidad = document.getElementById("btnCantidad");
let numeroElementos = document.getElementById("numeroElementos");

/*valor unitario y total*/
let valorUnitario = 199000;
let valorUnitarioTxt = valorUnitario.toString();
/* P.O.O (programacion orientada a objetos)*/
let valorUnitariopeso = new Intl.NumberFormat().format(valorUnitario);
let valorTotal = document.getElementById("valorTotal");
/*inicializacion de varibles*/
let valorTotalInt = 0;

btnSumar.addEventListener("click", function () {
  let numeroElementosTxt = document.getElementById("numeroElementos").innerHTML;
  let numeroElementosInt = parseInt(numeroElementosTxt);
  if (numeroElementosInt < 10) {
    let totalElementosInt = numeroElementosInt + 1;
    let totalElementostxt = totalElementosInt.toString();
    numeroElementos.innerHTML = totalElementostxt;
    valorTotalInt = valorUnitario * totalElementosInt;
    valorTotal.innerHTML = "$" + Intl.NumberFormat().format(valorTotalInt);

  }
});

btnRestar.addEventListener("click", function () {
  let numeroElementosTxt = document.getElementById("numeroElementos").innerHTML;
  let numeroElementosInt = parseInt(numeroElementosTxt);
  if (numeroElementosInt > 0) {
    let totalElementosInt = numeroElementosInt - 1;
    let totalElementostxt = totalElementosInt.toString();
    numeroElementos.innerHTML = totalElementostxt;
    valorTotalInt = valorUnitario * totalElementosInt;
    valorTotal.innerHTML = "$" + Intl.NumberFormat().format(valorTotalInt);
  }
});
/*lightbox*/
let lightBox = document.getElementById("lightBox");
let salir = document.getElementById("salir")

imgBox.addEventListener("click", function () {
  lightBox.classList.remove("light-hidden");
});
salir.addEventListener("click", function(){
  lightBox.classList.add("light-hidden")
})



