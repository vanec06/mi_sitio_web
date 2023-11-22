    function rellenarEstrella(valor) {
      for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(`star${i}`);
        if (i <= valor) {
          star.classList.remove('fa-regular');
          star.classList.add('fa-solid');
        } else {
          star.classList.remove('fa-solid');
          star.classList.add('fa-regular');
        }
      }
    }