function llenarBarras() {
    let estrella5 = parseFloat(document.getElementById("estrella5").value) || 0;
    let estrella4 = parseFloat(document.getElementById("estrella4").value) || 0;
    let estrella3 = parseFloat(document.getElementById("estrella3").value) || 0;
    let estrella2 = parseFloat(document.getElementById("estrella2").value) || 0;
    let estrella1 = parseFloat(document.getElementById("estrella1").value) || 0;

    let sumaTotal = estrella5 + estrella4 + estrella3 + estrella2 + estrella1;

    if (sumaTotal > 0) {
      let barras = document.querySelectorAll("#starBars progress");
      let labels = document.querySelectorAll("#starBars .progreso");

      barras.forEach((bar, index) => {
        let porcentaje = (eval(`estrella${5 - index}`) / sumaTotal) * 100; 
        bar.value = porcentaje;
        labels[index].textContent = `${porcentaje.toFixed()}%`;
      });
    }
  }


