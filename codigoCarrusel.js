let imagenes = [
    "imagenes/bombon.jpeg", "imagenes/cono.jpeg", "imagenes/paleta.jpeg", "imagenes/pote.jpeg"
];
  let cont = 0;
  
  function imgAnt() {
    if (cont > 0) {
      cont--;
    } else {
      cont = imagenes.length - 1;
    }
    fotoactual();
  }
  function imgSig() {
    if (cont < imagenes.length - 1) {
      cont++;
    } else {
      cont = 0;
    }
    fotoactual();
  }
  function fotoactual() {
    let contimg = document.getElementById("foto-carrusel");
    contimg.src = imagenes[cont];
  }
  