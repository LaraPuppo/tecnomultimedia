function iniciarFrutas() {
  for (let i = 0; i < 10; i++) {
    ellipseX[i] = random(200, 700);
    ellipseY[i] = 800;
    ellipsemovX[i] = random(-3, 3);
    ellipsemovY[i] = random(-20, -15);
    ellipsegravedad[i] = 0.4;
  }
}

function moverFrutas () {
  for (let i = 0; i < 10; i++) {
    ellipseX[i] += ellipsemovX[i];
    ellipseY[i] += ellipsemovY[i];
    ellipsemovY[i] += ellipsegravedad[i];
    if (ellipseY[i] > height) {
      ellipseX[i] = random(300, 600);
      ellipseY[i] = height;
      ellipsemovX[i] = random(-4, 4);
      ellipsemovY[i] = random(-20, -15);
    }
  }
}

function dibujarFrutas (numero) {
  for (let i = 0; i < cantF; i++) {
    push ();
    fill (255);
    ellipse(ellipseX[i], ellipseY[i], 70, 70);
    pop();
  }
}

function iniciarBombas() {
  for (let i = 0; i < 5; i++) {
    ellipse2X[i] = random(200, 700); 
    ellipse2Y[i] = 800;
    ellipse2movX[i] = random(-3, 3); 
    ellipse2movY[i] = random(-20, -15);
    ellipse2gravedad[i] = 0.4;
  }
}

function moverBombas () {
  for (let i = 0; i < 5; i++) {
    ellipse2X[i] += ellipse2movX[i];
    ellipse2Y[i] += ellipse2movY[i];
    ellipse2movY[i] += ellipse2gravedad[i];
    if (ellipse2Y[i] > height) {
      ellipse2X[i] = random(300, 600);
      ellipse2Y[i] = height;
      ellipse2movX[i] = random(-4, 4);
      ellipse2movY[i] = random(-20, -15);
    }
  }
}

function dibujarBombas (numero) {
  for (let i = 0; i < cantB; i++) {
    push();
  //rectMode (CENTER);
    fill(0);
  //rect (rectX[i], rectY [i], 80,80);
    ellipse(ellipse2X[i], ellipse2Y[i], 80,80); 
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
