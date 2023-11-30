function actualizarBarras() {
    // Obtener la puntuación de cada barra desde los input
    var puntuaciones = [];
    var inputs = document.getElementsByClassName('cuadro');
    
    for (var i = 0; i < inputs.length; i++) {
        puntuaciones.push(inputs[i].value);
    }
  
    // Actualizar el estilo de cada barra y el número según la puntuación
    for (var i = 0; i < puntuaciones.length; i++) {
        var barra = document.getElementsByClassName('barra')[i];
        var numero = barra.querySelector('.numero');
  
        barra.style.height = puntuaciones[i] + 'px';
        barra.classList.add('lleno');
        numero.textContent = puntuaciones[i];
    }

    // Vaciar los inputs y establecerlos en cero
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '' ;
    }
}

  

  