function iniciarFrutas() {
  for (let i = 0; i < 10; i++) {
    rectX[i] = random(200, 700);
    rectY[i] = 800;
    rectmovX[i] = random(-3, 3);
    rectmovY[i] = random(-20, -15);
    rectgravedad[i] = 0.3;
  }
}

function moverFrutas () {
  for (let i = 0; i < 10; i++) {
    rectX[i] += rectmovX[i];
    rectY[i] += rectmovY[i];
    rectmovY[i] += rectgravedad[i];
    if (rectY[i] > height) {
      rectX[i] = random(300, 600);
      rectY[i] = height;
      rectmovX[i] = random(-4, 4);
      rectmovY[i] = random(-20, -15);
    }
  }
}

function dibujarFrutas (numero) {
  for (let i = 0; i < cantF; i++) {
    push();
    noFill();
    noStroke();
    rect(rectX[i], rectY[i], 150, 150);
    image(frutas[i], rectX[i], rectY[i], 150, 150);
    pop();
  }
}

function iniciarBombas() {
  for (let j = 0; j < 5; j++) {
    rect2X[j] = random(200, 700);
    rect2Y[j] = 800;
    rect2movX[j] = random(-3, 3);
    rect2movY[j] = random(-20, -15);
    rect2gravedad[j] = 0.4;
  }
}

function moverBombas () {
  for (let j = 0; j < 5; j++) {
    rect2X[j] += rect2movX[j];
    rect2Y[j] += rect2movY[j];
    rect2movY[j] += rect2gravedad[j];
    if (rect2Y[j] > height) {
      rect2X[j] = random(300, 600);
      rect2Y[j] = height;
      rect2movX[j] = random(-4, 4);
      rect2movY[j] = random(-20, -15);
    }
  }
}

function dibujarBombas (numero) {
  for (let j = 0; j < cantB; j++) {
    push();
    noFill();
    noStroke();
    rect(rect2X[j], rect2Y[j], 150, 150);
    image(bomba, rect2X[j], rect2Y[j], 150, 150);
    pop();
  }
}

function timer() {
  push();
  textSize(40);
  fill(0);
  let seconds = millis() / 1000;
  let sec = floor(seconds) % 60;
  let min = floor(seconds / 60);
  let formattedMin = nf(min, 2);
  let formattedSec = nf(sec, 2);
  text(formattedMin + ":" + formattedSec, 10, 50);
  pop();
}

function cargaArchivos () {
  for (let i = 0; i < 9; i++) {
    frutas[i] = loadImage ('assets/fruta'+ i + '.png');
  }
  fondo = loadImage ('assets/fondo.jpg');
  bomba = loadImage ('assets/bomba.png');
  X = loadImage ('assets/X.png');
  miFuente = loadFont ('assets/go3v2.ttf');
}
