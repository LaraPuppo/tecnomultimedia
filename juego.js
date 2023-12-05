class Juego {
  constructor(f, p) {
    this.player = new Player();
    this.obstaculos = [];
    this.lives = 3;
    this.startTime = 0;
    this.gameDuration = 30; 
    this.gameStarted = false;
    this.speed = 6;
    this.obstacleSpeed = this.speed;
    this.minObstacleSpacing = 900;
    this.maxObstacleSpacing = 1300;
    this.nextObstacleTime = 0;
    this.speedIncreased = false;
    this.gameEnded = false;
    this.instrucciones = true;
    this.speedIncreaseTime = 0;
    this.fuente = f;
    this.p = p;
  }

  mostrar(aventura) {
    console.log(this.startTime);
    if (this.gameStarted) {
      text("x:" + mouseX + ",y:" + mouseY, mouseX, mouseY);
      textFont(this.fuente);
      image (this.p[20], 0, 0, width, height);
      textAlign(LEFT, CENTER);
      let currentTime = (millis() - this.startTime) / 1000;
      let timeLeft = this.gameDuration - currentTime;
      textSize(32);
      fill(0);
      text(`Tiempo: ${timeLeft.toFixed(1)}`, 10, 30);
      text(`Vidas: ${this.lives}`, 10, 70);
      this.player.mostrar(patroclo);
      this.player.actualizar();

      if (timeLeft <= 0) {
        aventura.estado = 7; 
      } else if (this.lives <= 0) {
        aventura.estado = 8;  
      }

      if (this.gameEnded) {
        return;
      }

      if (currentTime >= 5 && currentTime < 10) {
        this.speed = 7;
      } else if (currentTime >= 10 && currentTime < 15) {
        this.speed = 8;
      } else if (currentTime >= 15 && currentTime < 20) {
        this.speed = 9;
      } else if (currentTime >= 20 && currentTime < 25) {
        this.speed = 10;
      } else if (currentTime >= 25) {
        this.speed = 11;
      }

      if (this.obstacleSpeed !== this.speed) {
        this.obstacleSpeed = this.speed;
        this.speedIncreased = true;
        for (let obstaculo of this.obstaculos) {
          obstaculo.actualizarVelocidad(this.obstacleSpeed);
        }
      }

      if (millis() >= this.nextObstacleTime) {
        this.obstaculos.push(new Obstaculo(this.obstacleSpeed));
        this.nextObstacleTime = millis() + Math.floor(random(this.minObstacleSpacing, this.maxObstacleSpacing));
      }

      for (let i = this.obstaculos.length - 1; i >= 0; i--) {
        if (this.obstaculos[i]) {
          this.obstaculos[i].mostrar(flecha);
          this.obstaculos[i].actualizar();

          if (this.player.colision(this.obstaculos[i])) {
            this.lives--;
            this.obstaculos.splice(i, 1);
          }

          if (this.obstaculos[i] && this.obstaculos[i].fueraDePantalla()) {
            this.obstaculos.splice(i, 1);
          }
        }
      }
    }
  }

  actualizar() {
    if (this.estado === 21 && !this.gameStarted) {
      this.gameStarted = true;
    }
  }

  teclado() {
    if (keyCode === 32) {
      this.player.saltar();
    }
  }

  reiniciar() {
    this.gameEnded = false;
    this.lives = 3;
    this.speed = 6;
    this.obstacleSpeed = 6;
    this.startTime = millis();
    this.nextObstacleTime = 0;
    this.speedIncreased = false;
    this.obstaculos = [];
    this.gameStarted = true; 
    this.player.velocity = 0;
    this.player.x = 100;
    this.player.y = height - this.player.height;
  }
}
