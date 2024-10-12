let img = [];
let pantallaActual = 0;
let textodelatajodelSi = "En el camino del Sí, Natan y Elena encuentran tsoros inesperados.";
let textodelatajodelNo = "En el camino del No, se enfrentan a peligros y desafíos inesperados.";

function preload() {
 
  img[0] = loadImage('data/imagen1.JPEG'); 
  img[1] = loadImage('data/imagen2.JPEG'); 
  img[2] = loadImage('data/boton.png'); 
  img[3] = loadImage('data/flecha.derecha.png'); 
  img[4] = loadImage('data/flecha.izquierda.png'); 
  img[5] = loadImage('data/camino.del.no.JPEG'); 
  img[6] = loadImage('data/camino.del.si.JPEG'); 
  img[7] = loadImage('data/continuar.png'); 
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(255);
  image(img[pantallaActual], 0, 0, width, 400); 


  if (pantallaActual === 0) {
    textSize(32);
    textAlign(CENTER);
    fill(255);
    text("Unchesterd", width / 2, 50); 

    let botonX = width / 2 - 100; 
    let botonY = height - 220; 
    image(img[2], botonX, botonY, 200, 200); 
  }

  
  else if (pantallaActual === 1) {
    fill(0); 
    textSize(20);
    textAlign(CENTER);
    text("Natan y Elena encuentran un diario antiguo\ny descubren un mapa hacia el tesoro del Dorado.", width / 2, 20); 
    text("¿Deciden ir a Perú a buscarlo?", width / 2, 300); 

    
    let flechaIzquierdaX = 200; 
    let flechaDerechaX = 340; 
    let flechaY = height - 200; 

    image(img[4], flechaIzquierdaX, flechaY, 100, 100); 
    image(img[3], flechaDerechaX, flechaY, 100, 100); 

    fill(0);
    textSize(16);
    textAlign(CENTER);
    text("Sí", flechaDerechaX + 50, flechaY + 65); 
    text("No", flechaIzquierdaX + 50, flechaY + 65); 
  }



  else if (pantallaActual === 5 || pantallaActual === 6) {
    fill(0); 
    textSize(20);
    textAlign(CENTER);
    text(textoAventura, width / 2, 100); 
    
    if (pantallaActual === 5) {
      text(textodelatajodelNo, width / 2, 240);
    } else {
      text(textodelatajodelSi, width / 2, 240); 
    }

    let continuarX = width / 2 - imagenes[7].width / 2; 
    let continuarY = height - 100; 
    image(img[7], continuarX, continuarY); 
  }
}

function mousePressed() {
  let botonX = width / 2 - 100; 
  let botonY = height - 220; 

  
  if (pantallaActual === 0 && mouseX > botonX && mouseX < botonX + 200 &&
      mouseY > botonY && mouseY < botonY + 200) {
    pantallaActual = 1; 
  }

  
  if (pantallaActual === 1) {
    let flechaIzquierdaX = 200; 
    let flechaDerechaX = 340; 
    let flechaY = height - 200; 

    if (mouseX > flechaDerechaX && mouseX < flechaDerechaX + 100 &&
        mouseY > flechaY && mouseY < flechaY + 100) {
      pantallaActual = 6; 
    }
    if (mouseX > flechaIzquierdaX && mouseX < flechaIzquierdaX + 100 &&
        mouseY > flechaY && mouseY < flechaY + 100) {
      pantallaActual = 5; 
    }
  }
}
