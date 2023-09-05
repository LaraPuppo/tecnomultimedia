let rectX = [], rectY = [], rectmovX = [], rectmovY = [], rectgravedad = [];
let rect2X = [], rect2Y = [], rect2movX = [], rect2movY = [], rect2gravedad = [];
let estado, boton, cantF, cantB, seconds, segundos, difsegundos, tiempoInicio, frutas = [], fondo, bomba, X, miFuente;
let distancia1, distancia2;
let frutasCortadas = 0;

function preload () {
  cargaArchivos();
}

function setup() {
  createCanvas(900, 600);
  iniciarFrutas();
  iniciarBombas();
  estado = 0;
  cantF = 1;
  cantB = 1;
  boton = true;
  tiempoInicio = millis();
  textFont(miFuente);
}

function draw() {
  console.log (estado);
  image (fondo, 0, 0);
  fondo.resize (900, 600);
  text("x:"+ mouseX + ",y:"+ mouseY, mouseX, mouseY);
  if (estado === 0) {
    boton = ( mouseX > 350 ) && ( mouseX < 350+200 ) && ( mouseY > 510) && ( mouseY < 510+50);
    push();
    fill(230, 200, 50);
    textSize (60);
    textAlign (CENTER, CENTER);
    textStyle (BOLD);
    text ("Fruit Ninja", width/2, 80);
    fill (230);
    textSize(20);
    text ("REGLAS:", width/2, 150);
    textStyle (NORMAL);
    textWrap(WORD);
    text ("1- Corta Frutas:", width/2, 200);
    text ("Tu objetivo principal es cortar la mayor cantidad", width/2, 230);
    text ("de frutas posible en un minuto", width/2, 250);
    text ("2- Tres Vidas:", width/2, 290);
    text ("Comienzas con tres vidas", width/2, 320);
    text ("Pierdes una vida si dejas caer una fruta sin cortarla", width/2, 340);
    text ("3- Evita las Bombas:", width/2, 390);
    text ("Debes evitar a toda costa cortar las bombas que aparecen junto a las frutas", width/2, 420);
    text ("Si cortas una bomba, el juego terminará inmediatamente", width/2, 440);
    fill(0, 100);
    textSize(30);
    noStroke();
    hover();
    text("¡A jugar!", width/2, 530);
    pop();
  }
  if (estado === 1) {
    image (fondo, 0, 0);
    fondo.resize (900, 600);
    textSize (60);
    text ("PERDISTE", width/2, height/2);
  }
  if (estado ===2) {
    image (fondo, 0, 0);
    fondo.resize (900, 600);
    textSize (60);
    text ("GANASTE", width/2, height/2);
  }
  if (estado === 3) {
    timer();
    contador();
    moverFrutas();
    dibujarFrutas(cantF);
    let tiempoActual = millis();
    let tiempoTranscurrido = tiempoActual - tiempoInicio;
    if ( tiempoTranscurrido >= 4000 ) {
      estado = 4;
      tiempoInicio = millis();
    }
  }
  if (estado === 4) {
    timer();
    contador();
    cantF = 2;
    moverFrutas();
    dibujarFrutas(cantF);
    moverBombas();
    dibujarBombas(cantB);
  }
}


function mousePressed() {
  if (boton && estado === 0) {
    estado = 3;
  }

  for (let i = 0; i < cantF; i++) {
    if (
      mouseX > rectX[i] &&
      mouseX < rectX[i] + 100 &&
      mouseY > rectY[i] &&
      mouseY < rectY[i] + 100
      ) {
      // Si se hizo clic en un rectángulo blanco, lo hacemos desaparecer
      rectX[i] = -1000;
      rectY[i] = -1000;
      rectmovX[i] = 0;
      rectmovY[i] = 0;
      frutasCortadas++; // Incrementa el contador de frutas cortadas
    }
  }

  for (let j = 0; j < cantB; j++) {
    if (
      mouseX > rect2X[j] &&
      mouseX < rect2X[j] + 100 &&
      mouseY > rect2Y[j] &&
      mouseY < rect2Y[j] + 100
      ) {
      // Si se hizo clic en un rectángulo rojo, cambiamos el estado a 1
      estado = 1;
    }
  }
}


