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

let auto1 = new Automovil("Toyota","TXL",15000,2021,"pitalito - Huila",35420);
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
    imgAuto.setAttribute("src", "imagenes/carro2mercado.png");
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


