let aventura;
let pantallas = [];
let fuente;
let patroclo = [];
let flecha;

function preload() {
  fuente = loadFont ('assets/greek-freak.ttf');
  flecha = loadImage('assets/flecha.png');
  for ( let i = 0; i < 3; i++ ) {
    patroclo[i] = loadImage('assets/patroclo'+i+'.png');
  }
  for ( let i = 0; i < 21; i++ ) {
    pantallas[i] = loadImage("assets/pantalla"+ i +".png");
  }
}

function setup() {
  createCanvas(600, 600);
  aventura = new Aventura();
}

function draw() {
  aventura.mostrar();
  //text("x:"+ mouseX + ",y:"+ mouseY, mouseX, mouseY);
}

function mousePressed() {
  aventura.interactuar();
}

function keyPressed() {
  aventura.teclado(); 
}
