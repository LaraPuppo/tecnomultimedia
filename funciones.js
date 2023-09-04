let rectX = [], rectY = [], rectmovX = [], rectmovY = [], rectgravedad = [];
let rect2X = [], rect2Y = [], rect2movX = [], rect2movY = [], rect2gravedad = [];
let estado, boton, cantF, cantB, seconds, segundos, difsegundos, tiempoInicio;
let distancia1, distancia2;

function setup() {
  createCanvas(900, 600);
  iniciarFrutas();
  iniciarBombas();
  estado = 0;
  cantF = 1;
  cantB = 1;
  boton = true;
  tiempoInicio = millis();
}

function draw() {
  console.log (estado);
  background(220);
  text("x:"+ mouseX + ",y:"+ mouseY, mouseX, mouseY);
  if (estado === 0) {
    boton = ( mouseX > 300 ) && ( mouseX < 300+300 ) && ( mouseY > 500) && ( mouseY < 500+50);
    push();
    textSize (40);
    textAlign (CENTER, CENTER);
    textStyle (BOLD);
    text ("Fruit Ninja", width/2, 100);
    textSize(20);
    text ("REGLAS:", width/2, 150);
    textStyle (NORMAL);
    text ("1- Corta Frutas:", width/2, 200);
    text ("Tu objetivo principal es cortar la mayor cantidad de frutas posible en el tiempo asignado", width/2, 230);
    text ("2- Tres Vidas:", width/2, 280);
    text ("Comienzas con tres vidas", width/2, 310);
    text ("Pierdes una vida si dejas caer una fruta sin cortarla antes de que desaparezca de la pantalla", width/2, 330);
    text ("3- Evita las Bombas:", width/2, 380);
    text ("Debes evitar a toda costa cortar las bombas que aparecen junto a las frutas", width/2, 410);
    text ("Si cortas una bomba, el juego terminará inmediatamente", width/2, 430);
    rect (300, 500, 300, 50);
    pop();
  }
  if (estado === 1) {
    background (200, 100, 255);
    text ("PERDISTE", width/2, height/2);
  }
  if (estado ===2) {
    background (100, 255, 255);
    text ("GANASTE", width/2, height/2);
  }
  if (estado === 3) {
    timer();
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
    cantF = 2;
    moverFrutas();
    dibujarFrutas(cantF);
    moverBombas();
    dibujarBombas(cantB);
  }
}
function mousePressed () {
  if (boton) {
    estado = 3;
  }

  //if (estado === 4) {
    for (let i = 0; i < cantB; i++) {
     // distancia2 = dist (mouseX, mouseY, rect2X[i], rect2Y[i]);
   //   if (distancia2 <= 40) {
      if (mouseX + 100 > rect2x[i] && mouseX < rect2x[i] + 100 && mouseY + 100 > rect2y[i] && mouseY < rect2y[i] + 100){
        estado = 1;
      }
    //}
  }
  
  for (let i = 0; i < cantF; i++) {
   // distancia1 = dist (mouseX, mouseY, rectX[i], rectY[i]);
   // if (distancia1 <= 35) {
     if (mouseX + 100 > rectx[i] && mouseX < rectx[i] + 100 && mouseY + 100 > recty[i] && mouseY < recty[i] + 100){
      rectX[i] = -100;
      rectY[i] = -100;
      rectmovX[i] = 0;
      rectmovY[i] = 0;
    }
  }
}
