// Link al video de youtube:

let rectX = [], rectY = [], rectmovX = [], rectmovY = [], rectgravedad = [];
let rect2X = [], rect2Y = [], rect2movX = [], rect2movY = [], rect2gravedad = [];
let frutas = [], frutasAleatorias = [];
let estado, boton, cantF, cantB, fondo, bomba, miFuente, Inicio, Jugar, Creditos;
let frutasCortadas, lastIncrementTime, estado3StartTime, tiempoTranscurridoDesdeEstado3, yPos;
const incrementInterval = 7000;

function preload () {
  for (let i = 0; i < 9; i++) {
    frutas[i] = loadImage ('assets/fruta'+ i + '.png');
  }
  fondo = loadImage ('assets/fondo.jpg');
  bomba = loadImage ('assets/bomba.png');
  miFuente = loadFont ('assets/go3v2.ttf');
}

function setup() {
  textFont(miFuente);
  createCanvas(900, 600);
  iniciarFrutas();
  iniciarBombas();
  estado = 0;
  cantF = 2;
  cantB = 0;
  boton = true;
  frutasCortadas = 0;
  lastIncrementTime = 0;
  estado3StartTime = 0;
  tiempoTranscurridoDesdeEstado3 = 0;
  yPos = -150;
}

function draw() {
  console.log (estado);
  image (fondo, 0, 0);
  fondo.resize (900, 600);
  if (estado === 0) {
    boton = ( mouseX > 350 ) && ( mouseX < 350+200 ) && ( mouseY > 510) && ( mouseY < 510+50);
    push();
    textAlign (CENTER, CENTER);
    textStyle (BOLD);
    fill(230, 200, 50);
    textSize (65);
    text ("Fruit Ninja", width/2, 80);
    fill (230);
    textSize(40);
    text ("REGLAS:", width/2, 150);
    textStyle (NORMAL);
    textSize (20);
    fill (80, 225, 80);
    text ("1- Frutas:", width/2, 200);
    text ("2- Limite de tiempo:", width/2, 290);
    text ("3- Evita las Bombas:", width/2, 390);
    fill (230);
    text ("Tu objetivo principal es cliquear al menos 30", width/2, 230);
    text ("frutas o más durante el tiempo de juego", width/2, 250);
    text ("Tienes un límite de 30 segundos para completar el juego", width/2, 320);
    text ("Debes cortar las frutas dentro de este plazo para alcanzar tu objetivo", width/2, 340);
    text ("Si tocas una bomba, perderás el juego instantáneamente ", width/2, 420);
    text ("y no podrás alcanzar tu objetivo de frutas cortadas", width/2, 440);
    fill(0, 100);
    textSize(30);
    noStroke();
    hoverRect();
    pop();
  } else if (estado === 1) {
    perderOganar(255,0,0,"PERDISTE");
  } else if (estado === 2) {
    perderOganar(0,255,0,"GANASTE");
  } else if (estado === 3) {
    tiempoTranscurridoDesdeEstado3 = millis() - estado3StartTime;
    timer();
    contador(710, 50);
    moverFrutas(cantF);
    dibujarFrutas(cantF);
    moverBombas(cantB);
    dibujarBombas(cantB);
    if ( tiempoTranscurridoDesdeEstado3 >= lastIncrementTime + incrementInterval) {
      cantF++;
      cantB++;
      lastIncrementTime = tiempoTranscurridoDesdeEstado3;
    }
    if (tiempoTranscurridoDesdeEstado3 >= 30000 && frutasCortadas >= 30) {
      estado = 2;
    }
    if (tiempoTranscurridoDesdeEstado3 >= 30000 && frutasCortadas <= 30) {
      estado = 1;
    }
  }
  if (estado === 4) {
    push();
    text("x:"+ mouseX + ",y:"+ mouseY, mouseX, mouseY);
    if (yPos < 80) {
      yPos += 1;
    }
    textAlign(CENTER, CENTER);
    textSize(35);
    Inicio = estaSobreBoton(300, 400);
    Jugar = estaSobreBoton(600, 400);
    fill(255);
    push();
    translate(width / 2, yPos);
    text("Trabajo Práctico N4 P5js", 0, 80);
    text("Materia: Tecnología Multimedial 1", 0, 120);
    text("Profes: Mati y Fer", 0, 160);
    text("Alumna: Lara Puppo Mugetti", 0, 200);
    pop();
    hoverBoton(-150, "Inicio", Inicio);
    hoverBoton(150, "Jugar", Jugar);
    pop();
  }
}

function mousePressed() {
  if (boton && estado === 0 ) {
    estado = 3;
    estado3StartTime = millis();
  } else if (Inicio && (estado === 1 || estado === 2)) {
    reiniciarJuego(0);
  } else if (Jugar && (estado === 1 || estado === 2)) {
    reiniciarJuego(3);
  } else if (Creditos && (estado === 1 || estado === 2)) {
    estado = 4;
  } else if (Inicio && estado === 4) {
    reiniciarJuego(0);
  } else if (Jugar && estado === 4) {
    reiniciarJuego(3);
  }

  for (let i = 0; i < cantF; i++) {
    if ( estado === 3 && mouseX > rectX[i] && mouseX < rectX[i] + 100 && mouseY > rectY[i] && mouseY < rectY[i] + 100) {
      rectX[i] = -1000;
      rectY[i] = -1000;
      rectmovX[i] = 0;
      rectmovY[i] = 0;
      frutasCortadas++;
    }
  }

  for (let j = 0; j < cantB; j++) {
    if (estado === 3 && mouseX > rect2X[j] && mouseX < rect2X[j] + 100 && mouseY > rect2Y[j] && mouseY < rect2Y[j] + 100) {
      estado = 1;
    }
  }
}
