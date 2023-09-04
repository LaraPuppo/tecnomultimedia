function iniciarFrutas() {
  for (let i = 0; i < 10; i++) {
    rectX[i] = random(200, 700);
    rectY[i] = 800;
    rectmovX[i] = random(-3, 3);
    rectmovY[i] = random(-20, -15);
    rectgravedad[i] = 0.4;
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
    push ();
    fill (255);
    rect(rectX[i], rectY[i], 100, 100);
    pop();
  }
}

function iniciarBombas() {
  for (let i = 0; i < 5; i++) {
    rect2X[i] = random(200, 700); 
    rect2Y[i] = 800;
    rect2movX[i] = random(-3, 3); 
    rect2movY[i] = random(-20, -15);
    rect2gravedad[i] = 0.4;
  }
}

function moverBombas () {
  for (let i = 0; i < 5; i++) {
    rect2X[i] += rect2movX[i];
    rect2Y[i] += rect2movY[i];
    rect2movY[i] += rect2gravedad[i];
    if (rect2Y[i] > height) {
      rect2X[i] = random(300, 600);
      rect2Y[i] = height;
      rect2movX[i] = random(-4, 4);
      rect2movY[i] = random(-20, -15);
    }
  }
}

function dibujarBombas (numero) {
  for (let i = 0; i < cantB; i++) {
    push();
    fill(0);
    rect(rect2X[i], rect2Y[i], 100,100); 
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
