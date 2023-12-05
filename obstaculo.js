class Obstaculo {
  constructor(speed) {
    this.width = 120;
    this.height = 100;
    this.x = width;
    this.y = height-this.height; 
    this.speed = speed;
  }

  mostrar(foto) {
    fill(255,0);
    rect(this.x, this.y+30, this.width, this.height-50);
    image(foto, this.x, this.y, this.width, this.height);
  }

  actualizar() {
    this.x -= this.speed;
  }

  actualizarVelocidad(nuevaVelocidad) {
    this.speed = nuevaVelocidad;
  }

  fueraDePantalla() {
    return this.x + this.width < 0;
  }
}
