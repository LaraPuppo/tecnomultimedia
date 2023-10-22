class Juego {
  constructor(f) {
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
    this.estado = 1;
    this.boton = new Boton (width / 2, 500, 200, 50, "Jugar");
    this.breiniciar = new Boton (width / 2, height / 2 + 100, 200, 50, "Reiniciar");
  }

  mostrar(fondo, fondoGanaste, fondoPerdiste) {
    this.background = fondo;
    text("x:" + mouseX + ",y:" + mouseY, mouseX, mouseY);
    textFont(this.fuente);

    if (this.estado === 1) {
      background(fondo);
      textAlign(CENTER, CENTER);
      rectMode(RADIUS);
      textSize(40);
      fill(0);
      text("Instrucciones:", width / 2, 70);
      text("- Presiona ESPACIO para saltar", width / 2, 200);
      text("- Evita los obstáculos rojos", width / 2, 270);
      text("- Gana al llegar a 30 segundos", width / 2, 340);
      this.boton.mostrar();
    } else if (this.estado === 3) {
      background (fondoGanaste);
      textAlign(CENTER, CENTER);
      textSize(40);
      fill(0);
      text("Patroclo logra hablar con Aquiles e intenta que vuelva a la guerra", width / 2, 250);
      text("pero ademas le confiesa sus sentimientos hacia el...seran correspondidos?...", width / 2, 300);
      this.breiniciar.mostrar();
    } else if (this.estado === 4) {
      background (fondoPerdiste);
      textAlign(CENTER, CENTER);
      textSize(40);
      fill(0);
      text("Patroclo muere en el campo de batalla y", width / 2, 250);
      text("Aquiles inmediatamente vuelve a la guerra a vengarlo",width/2, 300);
      this.breiniciar.mostrar();
    } else if (this.estado === 2) {
      background(fondo);
      textAlign(LEFT, CENTER);
      let currentTime = (millis() - this.startTime) / 1000;
      let timeLeft = this.gameDuration - currentTime;
      textSize(32);
      fill(0);
      text(`Time: ${timeLeft.toFixed(1)}`, 10, 30);
      text(`Lives: ${this.lives}`, 10, 70);
      this.player.mostrar(patroclo);
      this.player.actualizar();

      if (timeLeft <= 0) {
        this.estado = 3;
      } else if (this.lives <= 0) {
        this.estado = 4;
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
        this.obstaculos[i].mostrar(flecha);
        this.obstaculos[i].actualizar();

        if (this.player.colision(this.obstaculos[i])) {
          this.lives--;
          this.obstaculos.splice(i, 1);
        }

        if (this.obstaculos[i].fueraDePantalla()) {
          this.obstaculos.splice(i, 1);
        }
      }
    }
  }

  actualizar() {
    if (this.estado === 1 && this.gameStarted) {
      this.gameStarted = false;
    }
  }

  reiniciarJuego() {
    this.gameEnded = false;
    this.lives = 3;
    this.speed = 6;
    this.obstacleSpeed = 6;
    this.startTime = 0;
    this.nextObstacleTime = 0;
    this.speedIncreased = false;
    this.obstaculos = [];
    this.estado = 1;
    this.gameStarted = false;
    this.player.velocity = 0;
    this.player.x = 100;
    this.player.y = height - this.player.height;
  }

  teclado() {
    if (key === ' ' && this.estado === 2) {
      this.player.saltar();
    }
  }

  mouse() {
    if (this.estado === 3 || this.estado === 4) {
      if (this.breiniciar.clicEnBoton()) {
        this.reiniciarJuego();
      }
    } else if (this.estado === 1) {
      if (this.boton.clicEnBoton()) {
        this.estado = 2;
        this.startTime = millis();
      }
    }
  }
}
