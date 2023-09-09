function timer() {
  push();
  textSize(40);
  fill(255, 100, 3);
  let tiempoRestante = 30000 - tiempoTranscurridoDesdeEstado3;
  let segundos = floor(tiempoRestante / 1000) % 60;
  let minutos = floor(tiempoRestante / 1000 / 60);
  let formattedMin = nf(minutos, 2);
  let formattedSec = nf(segundos, 2);
  text(formattedMin + ":" + formattedSec, 10, 50);
  pop();
}

function contador(posx, posy) {
  push();
  fill (255, 100, 3);
  textSize(35);
  text ("Puntos:" + frutasCortadas, posx, posy);
  pop();
}

function estaSobreBoton(x, y) {
  return dist(x, 400, mouseX, mouseY) < 100/2;
}

function hoverRect() {
  push();
  if (boton) {
    fill(0, 200);
    rect (350, 510, 200, 50);
    fill(255, 0, 0);
    text("¡A jugar!", width/2, 530);
  } else {
    fill(0, 100);
    rect (350, 510, 200, 50);
    fill(100, 0, 0);
    text("¡A jugar!", width/2, 530);
  }
  pop();
}

function hoverBoton(posicionx, texto, variable) {
  push();
  if (variable) {
    textSize(20);
    noStroke();
    fill(255, 200);
    ellipse(width / 2 + posicionx, 400, 100);
    fill(0);
    text(texto, width / 2 + posicionx, 400);
  } else {
    textSize(20);
    noStroke();
    fill(255, 100);
    ellipse(width / 2 + posicionx, 400, 100);
    fill(50);
    text(texto, width / 2 + posicionx, 400);
  }
  pop();
}

function perderOganar (val1,val2,val3,texto) {
  push();
  textSize(60);
  textAlign(CENTER, CENTER);
  contador(width / 2, height / 2 - 50);
  Inicio = estaSobreBoton(300, 400);
  Jugar = estaSobreBoton(450, 400);
  Creditos = estaSobreBoton(600, 400);
  hoverBoton(-150, "Inicio", Inicio);
  hoverBoton(0, "Jugar", Jugar);
  hoverBoton(150, "Creditos", Creditos);
  fill(val1, val2, val3);
  text(texto, width / 2, height / 2);
  pop();
}

function iniciarFrutas() {
  push();
  for (let i = 0; i < 10; i++) {
    rectX[i] = random(200, 700);
    rectY[i] = height;
    rectmovX[i] = random(-3, 3);
    rectmovY[i] = random(-20, -15);
    rectgravedad[i] = 0.3;
    indiceFruta = frutasAleatorias[i];
    frutasAleatorias[i] = floor(random(frutas.length));
  }
  pop();
}

function moverFrutas (numero) {
  push();
  for (let i = 0; i < cantF; i++) {
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
  pop();
}

function dibujarFrutas (numero) {
  push();
  for (let i = 0; i < cantF; i++) {
    noFill();
    noStroke();
    rect(rectX[i], rectY[i], 100, 100);
    let indiceFruta = frutasAleatorias[i];
    image(frutas[indiceFruta], rectX[i] - 25, rectY[i] - 25, 150, 150);
    pop();
  }
}

function iniciarBombas() {
  push();
  for (let j = 0; j < 5; j++) {
    rect2X[j] = random(200, 700);
    rect2Y[j] = height;
    rect2movX[j] = random(-3, 3);
    rect2movY[j] = random(-20, -15);
    rect2gravedad[j] = 0.4;
  }
  pop();
}

function moverBombas (numero) {
  push();
  for (let j = 0; j < cantB; j++) {
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
  pop();
}

function dibujarBombas (numero) {
  push();
  for (let j = 0; j < cantB; j++) {
    noFill();
    noStroke();
    rect(rect2X[j], rect2Y[j], 100, 100);
    image(bomba, rect2X[j]-25, rect2Y[j]-25, 150, 150);
    pop();
  }
}

function reiniciarJuego(num) {
  push();
  estado = num;
  frutasCortadas = 0;
  lastIncrementTime = 0;
  estado3StartTime = millis();
  tiempoTranscurridoDesdeEstado3 = 0;
  cantF = 2;
  cantB = 0;
  iniciarFrutas();
  iniciarBombas();
  yPos = -150;
  pop();
}
