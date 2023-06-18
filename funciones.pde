
void triangulo(float p1, float p2, float rotacion) {
pushMatrix();
  translate(p1, p2);
  rotate(radians(rotacion));  
  for (int i = 0; i < 22; i++) {
  if (i % 2 == 0) {
  fill(b);
  } else {
  fill(n); } 
  scale(0.91);    
  noStroke();
  triangle(-110, -80, 0, 135, 110, -80);
  rotate(radians(r));
  }
popMatrix();
}

float mapValue( float mouseX, float minRange, float maxRange, float minValue, float maxValue) {
  float resultado = map(mouseX, minRange, maxRange, minValue, maxValue);
  return resultado;
}
