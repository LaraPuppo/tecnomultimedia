class Boton {
  constructor(b, x, y, ancho, alto, txt ) {
    this.bold = b;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = txt;
  }

  mostrar() {
    textFont(this.bold);
    if (this.estaSobre()) {
      fill(0, 100);
      stroke(1);
      strokeWeight(3);
    } else {
      fill(0, 50);
    }
    rect(this.x, this.y, this.ancho, this.alto);
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(25);
    text(this.texto, this.x, this.y, this.ancho, this.alto);
  }

  estaSobre() {
    return mouseX > this.x && mouseX < this.x + this.ancho && mouseY > this.y && mouseY < this.y + this.alto;
  }
}
