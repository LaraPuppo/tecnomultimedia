class Boton {
  constructor(x, y, ancho, alto, texto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;

  }

  mostrar() {
    rectMode(CENTER);
    fill(0, 255, 0);
    noStroke();
    rect(this.x, this.y, this.ancho, this.alto);

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(this.texto, this.x, this.y);
  }

  clicEnBoton() {
    return mouseX >= this.x - this.ancho / 2 &&
      mouseX <= this.x + this.ancho / 2 &&
      mouseY >= this.y - this.alto / 2 &&
      mouseY <= this.y + this.alto / 2;
  }
}
