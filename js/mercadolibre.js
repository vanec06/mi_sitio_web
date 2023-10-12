class Automovil{
    constructor(marca,modelo,precio,anyo,ciudad,kilometros){
        this.marca =marca;
        this.modelo = modelo;
        this.precio = precio;
        this.anyo = anyo;
        this.kilometros = kilometros;
        this.ciudad = ciudad;
    }
}


let auto1 = new Automovil("Toyota","TXL",20000000,2021,"pitalito - Huila",35420);
let auto2 = new Automovil("Toyota","TXL",15000000,2021,"pitalito - Huila",140402);
// let marcaautomovil = auto1.marca;
let inputbusqueda = document.getElementById("inputBusqueda");

// inputbusqueda.addEventListener("load",function(event){
    window.addEventListener("load",function(){
        
            // if(event.key == "Enter"){
                let mainContent = document.getElementById("mainContent");
                // creando contenedor para el vehiculo
                
                let boxAuto = document.createElement("div");
                mainContent.appendChild(boxAuto);
                boxAuto.setAttribute("class","box-auto")
   

    //   creando contenedor para la imagen
    let  boxImg = document.createElement("div");
   
    // corazon imagen
let boxCorazon = document.createElement("div");
boxImg.appendChild(boxCorazon);
boxCorazon.setAttribute("class", "box-corazon");
let corazon = document.createElement("div");
boxCorazon.appendChild(corazon);
corazon.setAttribute("class", "corazon");

// cargando icono corazon
let iconHearth = document.createElement("i");
corazon.appendChild(iconHearth);
iconHearth.setAttribute("class","icon-style-hearth fa-regular fa-heart")

    boxAuto.appendChild(boxImg);
    let imgAuto = document.createElement("img");
    boxImg.appendChild(imgAuto);
    boxImg.setAttribute("class", "box-img");
    imgAuto.setAttribute("src", "imagenes/carro3.jpg");
    imgAuto.setAttribute("class","img-auto");


        // crear contenedor para la informacion

        let boxInfo = document.createElement("div");
        boxAuto.appendChild(boxInfo);
        let infoMarca = document.createElement("div");
        boxInfo.appendChild(infoMarca);
        boxInfo.setAttribute("class","box-info");
        infoMarca.setAttribute("class","info-marca");
        let txtMarca = document.createElement("label");
        infoMarca.appendChild(txtMarca);
        
        txtMarca.innerText = auto1.marca;
        txtMarca.setAttribute("class","txt-marca");

        let txtModelo = document.createElement("label");
        infoMarca.appendChild(txtModelo),
        txtModelo.innerText = " "+auto1.modelo;
        txtModelo.setAttribute("class", "txt-modelo");
   
        // precio
     let precioFormat = new Intl.NumberFormat("de-DE").format (auto1.precio);
    let txtPrecio = document.createElement("label");
    boxInfo.appendChild(txtPrecio);
    txtPrecio.innerText = "$"+ precioFormat;
    txtPrecio.setAttribute("class", "txt-precio");

//procedencia y kilometraje
let boxProcedencia = document.createElement("div");
boxInfo.appendChild(boxProcedencia);
boxProcedencia.setAttribute("class", "box-procedencia");


// let iconoPunto =  document.createElement.
// txtCiudad.innerHTML = auto1.ciudad + "&#9899";


let txtAnyo = document.createElement("label");
boxProcedencia.appendChild(txtAnyo);
txtAnyo.innerHTML = auto1.anyo + " · ";

let txtKilometros = document.createElement("label");
boxProcedencia.appendChild(txtKilometros);
let txtKilometrosFormat = new Intl.NumberFormat("de-DE").format(auto1.kilometros); 
txtKilometros.innerHTML = txtKilometrosFormat + " · ";

let txtCiudad = document.createElement("label");
boxProcedencia.appendChild(txtCiudad);
txtCiudad.innerHTML = auto1.ciudad

let boxlineaDiv = document.createElement("div");
mainContent.appendChild(boxlineaDiv);
boxlineaDiv.setAttribute("class", "box-linea-div");
boxlineaDiv.appendChild(lineaDiv);

});


// Crear un contenedor para el segundo vehículo
let boxAuto2 = document.createElement("div");
mainContent.appendChild(boxAuto2);
boxAuto2.setAttribute("class", "box-auto");

// Crear contenedor para la imagen
let boxImg2 = document.createElement("div");

// Corazón imagen
let boxCorazon2 = document.createElement("div");
boxImg2.appendChild(boxCorazon2);
boxCorazon2.setAttribute("class", "box-corazon");
let corazon2 = document.createElement("div");
boxCorazon2.appendChild(corazon2);
corazon2.setAttribute("class", "corazon");

// Cargando icono corazón
let iconHearth2 = document.createElement("i");
corazon2.appendChild(iconHearth2);
iconHearth2.setAttribute("class", "icon-style-hearth fa-regular fa-heart");

boxAuto2.appendChild(boxImg2);
let imgAuto2 = document.createElement("img");
boxImg2.appendChild(imgAuto2);
boxImg2.setAttribute("class", "box-img");
imgAuto2.setAttribute("src", "imagenes/carro1.jpg");
imgAuto2.setAttribute("class", "img-auto");

// Crear contenedor para la información
let boxInfo2 = document.createElement("div");
boxAuto2.appendChild(boxInfo2);
let infoMarca2 = document.createElement("div");
boxInfo2.appendChild(infoMarca2);
boxInfo2.setAttribute("class", "box-info");
infoMarca2.setAttribute("class", "info-marca");
let txtMarca2 = document.createElement("label");
infoMarca2.appendChild(txtMarca2);
txtMarca2.innerText = auto2.marca;
txtMarca2.setAttribute("class", "txt-marca");

let txtModelo2 = document.createElement("label");
infoMarca2.appendChild(txtModelo2);
txtModelo2.innerText = " " + auto2.modelo;
txtModelo2.setAttribute("class", "txt-modelo");

// Precio
let precioFormat2 = new Intl.NumberFormat("de-DE").format(auto2.precio);
let txtPrecio2 = document.createElement("label");
boxInfo2.appendChild(txtPrecio2);
txtPrecio2.innerText = "$" + precioFormat2;
txtPrecio2.setAttribute("class", "txt-precio");

// Procedencia y kilometraje
let boxProcedencia2 = document.createElement("div");
boxInfo2.appendChild(boxProcedencia2);
boxProcedencia2.setAttribute("class", "box-procedencia");

let txtAnyo2 = document.createElement("label");
boxProcedencia2.appendChild(txtAnyo2);
txtAnyo2.innerHTML = auto2.anyo + " · ";

let txtKilometros2 = document.createElement("label");
boxProcedencia2.appendChild(txtKilometros2);
let txtKilometrosFormat2 = new Intl.NumberFormat("de-DE").format(auto2.kilometros);
txtKilometros2.innerHTML = txtKilometrosFormat2 + " · ";

let txtCiudad2 = document.createElement("label");
boxProcedencia2.appendChild(txtCiudad2);
txtCiudad2.innerHTML = auto2.ciudad;

let boxlineaDiv2 = document.createElement("div");
mainContent.appendChild(boxlineaDiv2);
boxlineaDiv2.setAttribute("class", "box-linea-div");
boxlineaDiv2.appendChild(lineaDiv);


