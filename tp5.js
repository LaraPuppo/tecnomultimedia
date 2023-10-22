//Link al video explicativo:
let bg;
let juego;
let fuente;
let patroclo = [];
let flecha;
let fGanas;
let fPerdes;

function preload() {
  fuente = loadFont ('assets/greek-freak.ttf');
  bg = loadImage('assets/city-of-troy.JPG');
  flecha = loadImage('assets/flecha.png');
  fGanas = loadImage ('assets/pantalla7.png');
  fPerdes = loadImage ('assets/pantalla8.png');
  for ( let i = 0; i < 3; i++ ) {
    patroclo[i] = loadImage('assets/patroclo'+i+'.png');
  }
}

function setup() {
  createCanvas(1300, 600);
  juego = new Juego(fuente);
}

function draw() {
  background(200);
  juego.mostrar(bg, fGanas, fPerdes);
  juego.actualizar();
}

function keyPressed() {
  juego.teclado();
}

function mousePressed() {
  juego.mouse();
}
