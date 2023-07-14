
//Función con parametros que retorna valor
boolean botonCuadrado (int x, int y, int ancho, int alto) {
  return ( mouseX > x ) && ( mouseX < x+ancho ) && ( mouseY > y) && ( mouseY < y+alto);
}

//Función con parametros que retorna valor
boolean botonCircular (int x, int y, int r) {
  return dist (mouseX, mouseY, x, y) <= r;
}

//Función con parametros que no retorna valor
void infoPantallas (int indexP, int x1, int y1, int ancho1, int alto1, int x2, int y2, int ancho2, int alto2 ) {
  noStroke();
  image( pantallas[indexP], 0, 0 );
  fill (255, 100);
  rect (x1, y1-5, ancho1, alto1);
  rect (x2, y2-5, ancho2, alto2);
  textAlign (CENTER, CENTER);
  fill(0);
  textSize (15);
  text (textos[0][indexP], x1, y1-5, ancho1, alto1);
  text (textos[1][indexP], x2, y2-5, ancho2, alto2);
}

//Función con parametros que no retorna valor
void hover (int x, int y, int ancho, int alto, String opcion) {
  if ( botonCuadrado(x, y, ancho, alto) ) {
    fill(50, 100);
    strokeWeight (3);
    stroke(0);
    rect( x, y, ancho, alto );
  } else {
    fill(100, 100);
    noStroke();
    rect( x, y, ancho, alto );
  }
  fill (255);
  textAlign (CENTER, CENTER);
  textSize (25);
  text (opcion, x, y-5, ancho, alto);
}

//Función con parametros que no retorna valor
void botonFinal ( int x,  String txt) {
  if ( dist (mouseX, mouseY, x, 530) <= 100/2) {
    fill (200);
  } else {
    fill (255);
  }
  circle (x, 530, 100);
  fill(0);
  textSize (20);
  textAlign (CENTER, CENTER);
  text (txt, x, 530-5);
}

//FUnción sin parametros que no retorna valor
void botonContinuar (){
  hover (380, 530, 200, 50, "Continuar");
}

//FUnción sin parametros que no retorna valor
void reset () {
  estado = 0;
  y = 0;
}
