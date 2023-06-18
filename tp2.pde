// Trabajo Practico n2 
// Tecno 1 Lara Puppo
// Link del video de youtube: https://www.youtube.com/watch?v=Y_ZmS4p4VNI
// Si se mantiene apretada la tecla 'r', con el movimiento del mouse en x se van a girar los triangulos
// Apretando la tecla 'b' se cambia el blanco a un color random mas claro
// Con la tecla 'n' se cambia el negro a un color random mas oscuro
// Haciendo click con el mouse vuelven las variables a su estado original

PImage arteoptico; 
float r = -1.5 ;
color b = (255);
color n = (0);

void setup (){
  
  size (800,400);
  arteoptico = loadImage ("triangulostecno.jpg");
}
void draw (){
  
  background (n);
    for (int i = 0; i < 5; i++) {
    float p1 = 400 + i * 100;    
    for (int j = 0; j < 2; j++) {
    float p2;
    float rotacion; 
      if (j == 0) {
      p2 = i % 2 == 0 ? 275 : 325;
      rotacion = i % 2 == 0 ? 0 : 180;
      } else {
      p2 = i % 2 == 0 ? 125 : 75;
      rotacion = i % 2 == 0 ? 180 : 0; }
    triangulo(p1, p2, rotacion);
    }
  }
  image (arteoptico,0,0,400,400);
  println (r);
} 
  
void keyPressed (){
  
if (key == 'r'){
  r = mapValue(mouseX,0, 800, -5, 5);
  }
  colorMode (HSB);
  if (key == 'n'){
  n = color (random (0,360),250,150);
  }
  if (key == 'b'){
  b = color (random (0,360),90,300);
  }
}

void mousePressed(){
  
  if (mousePressed) {
  r = -1.5 ;
  b = color(255);
  n = color(0);
 }
}
