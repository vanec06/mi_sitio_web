class Automovil {
    constructor(marca, modelo, precio, anyo, ciudad, kilometros, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.anyo = anyo;
        this.ciudad = ciudad;
        this.kilometros = kilometros;
        this.imagen = imagen; 
    }
}

let autos = [
    new Automovil("Toyota", "TXL", 190000000, 2021, "Pitalito - Huila", 35420, "imagenes/carro1.jpg"),
    new Automovil("Chevrolet", "Cruze", 170000000, 2020, "Medellín - Antioquia", 45000, "imagenes/carro3.jpg"),

];

let inputbusqueda = document.getElementById("inputBusqueda");

inputbusqueda.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        let mainContent = document.getElementById("mainContent");

       
        while (mainContent.firstChild) {
            mainContent.removeChild(mainContent.firstChild);
        }

        // Itera sobre la lista de vehículos y crea un contenedor para cada uno
        autos.forEach(auto => {
            // Creando contenedor para el vehículo
            let boxAuto = document.createElement("div");
            mainContent.appendChild(boxAuto);
            boxAuto.setAttribute("class", "box-auto");

            // Creando contenedor para la imagen
            let boxImg = document.createElement("div");

            // Corazón imagen
            let boxCorazon = document.createElement("div");
            boxImg.appendChild(boxCorazon);
            boxCorazon.setAttribute("class", "box-corazon");
            let corazon = document.createElement("div");
            boxCorazon.appendChild(corazon);
            corazon.setAttribute("class", "corazon");

            // Cargando icono corazón
            let iconHearth = document.createElement("i");
            corazon.appendChild(iconHearth);
            iconHearth.setAttribute("class", "icon-style-hearth fa-regular fa-heart");

            boxAuto.appendChild(boxImg);
            let imgAuto = document.createElement("img");
            boxImg.appendChild(imgAuto);
            boxImg.setAttribute("class", "box-img");
            imgAuto.setAttribute("src", auto.imagen); // Asignar la imagen correspondiente
            imgAuto.setAttribute("class", "img-auto");

            // Crear contenedor para la información
            let boxInfo = document.createElement("div");
            boxAuto.appendChild(boxInfo);
            let infoMarca = document.createElement("div");
            boxInfo.appendChild(infoMarca);
            infoMarca.setAttribute("class", "info-marca");
            let txtMarca = document.createElement("label");
            infoMarca.appendChild(txtMarca);
            boxInfo.setAttribute("class", "box-info");
            txtMarca.innerText = auto.marca;
            txtMarca.setAttribute("class", "txt-marca");

            let txtModelo = document.createElement("label");
            infoMarca.appendChild(txtModelo);
            txtModelo.innerText = " " + auto.modelo;
            txtModelo.setAttribute("class", "txt-modelo");

            // Precio
            let precioFormat = new Intl.NumberFormat("de-DE").format(auto.precio);
            let txtPrecio = document.createElement("label");
            boxInfo.appendChild(txtPrecio);
            txtPrecio.innerText = "$" + precioFormat;
            txtPrecio.setAttribute("class", "txt-precio");

            // Procedencia y kilometraje
            let boxProcedencia = document.createElement("div");
            boxInfo.appendChild(boxProcedencia);
            boxProcedencia.setAttribute("class", "box-procedencia");

            let txtAnyo = document.createElement("label");
            boxProcedencia.appendChild(txtAnyo);
            txtAnyo.innerHTML = auto.anyo + " · ";

            let txtKilometros = document.createElement("label");
            boxProcedencia.appendChild(txtKilometros);
            let txtKilometrosFormat = new Intl.NumberFormat("de-DE").format(auto.kilometros);
            txtKilometros.innerHTML = txtKilometrosFormat + " · ";

            let txtCiudad = document.createElement("label");
            boxProcedencia.appendChild(txtCiudad);
            txtCiudad.innerHTML = auto.ciudad;

            let boxlineaDiv = document.createElement("div");
            mainContent.appendChild(boxlineaDiv);
            boxlineaDiv.setAttribute("class", "box-linea-div");
        });
    }
});