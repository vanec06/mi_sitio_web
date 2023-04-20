let imgBox = document.getElementById("imgBox"); 
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");
let boxImgMini1 = document.getElementById("BoxImgMini1")
let boxImgMini2 = document.getElementById("BoxImgMini2")
let boxImgMini3 = document.getElementById("BoxImgMini3")
let boxImgMini4 = document.getElementById("BoxImgMini4")

imgMini1.addEventListener("click", function(){
    imgBox.setAttribute("src" ,"imagenes/image-product-1.jpg" );
    boxImgMini1.classList.add("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    boxImgMini1.classList.add("img-mini-act")
    boxImgMini2.classList.remove("img-mini-act")
    boxImgMini3.classList.remove("img-mini-act")
    boxImgMini4.classList.remove("img-mini-act")
});

imgMini2.addEventListener("click", function(){
    imgBox.setAttribute("src" ,"imagenes/image-product-2.jpg" )
    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.add("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    boxImgMini1.classList.remove("img-mini-act")
    boxImgMini2.classList.add("img-mini-act")
    boxImgMini3.classList.remove("img-mini-act")
    boxImgMini4.classList.remove("img-mini-act")
});

imgMini3.addEventListener("click", function(){
    imgBox.setAttribute("src" ,"imagenes/image-product-3.jpg" )
    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.add("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    boxImgMini1.classList.remove("img-mini-act")
    boxImgMini2.classList.remove("img-mini-act")
    boxImgMini3.classList.add("img-mini-act")
    boxImgMini4.classList.remove("img-mini-act")
    
});

imgMini4.addEventListener("click", function(){
    imgBox.setAttribute("src" ,"imagenes/image-product-4.jpg"  )
    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.add("box-img-mini")
    boxImgMini1.classList.remove("img-mini-act")
    boxImgMini2.classList.remove("img-mini-act")
    boxImgMini3.classList.remove("img-mini-act")
    boxImgMini4.classList.add("img-mini-act")
});
let btnRestar = document.getElementById("btnRestar");
let btnSumar = document.getElementById("btnSumar");
let btnCantidad = document.getElementById ("btnCantidad");
let cantBox = document.getElementById ("cantBox");
let numeroElementos = document.getElementById("numeroElementos");


   let valorUnitario = 199000;
   let valorUnitarioTxt = valorUnitario.toString();
   let valorUnitarioPeso = new  Intl.NumberFormat().format(valorUnitario);
   let valorTotal=document.getElementById("valorTotal");
   let valorTotalInt= 0;

btnSumar.addEventListener("click" , function(){
   let numeroElementosTxt = document.getElementById("numeroElementos").innerHTML;
   let numeroElementosInt = parseInt(numeroElementosTxt);
   if(numeroElementosInt < 10){
    let totalElementosInt = numeroElementosInt + 1;
    let totalElementostxt = totalElementosInt.toString();
    numeroElementos.innerHTML = totalElementostxt;
    valorTotalInt = valorUnitario * totalElementosInt;
    valorTotal.innerHTML = "$" + Intl.NumberFormat().format(valorTotalInt);
   }
});

btnRestar.addEventListener("click" , function(){
    let numeroElementosTxt = document.getElementById("numeroElementos").innerHTML;
    let numeroElementosInt = parseInt(numeroElementosTxt);
    if(numeroElementosInt > 0){
     let totalElementosInt = numeroElementosInt - 1;
     let totalElementostxt = totalElementosInt.toString();
     numeroElementos.innerHTML = totalElementostxt;
     valorTotalInt = valorUnitario * totalElementosInt;
     valorTotal.innerHTML = "$" + Intl.NumberFormat().format(valorTotalInt);
    }
 });

  let lightBox = document.getElementById("lightBox");
  
  imgBox.addEventListener("click", function(){
    lightBox.classList.remove("light-hidden");
  });
 






