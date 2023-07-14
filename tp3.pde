//Trabajo Practico N3 Lara Puppo Mugetti
//Link del video de youtube: https://youtu.be/7ppv0FHodXc

int c = 19;
float y = 0;
PImage[] pantallas =  new PImage[c];
String [][] textos = new String [2][c];
int estado;

void setup() {
  size (600, 600);
  estado = 0;
  for ( int i = 0; i < c; i++ ) {
    pantallas[i] = loadImage( "pantalla" + i + ".png" );
  }
  textos [0][0] = "";
  textos [1][0] = "";
  textos [0][1] = "La guerra de troya estaba en curso y ya había transcurrido una década desde que los griegos habian sitiado la ciudad de Troya";
  textos [1][1] = "Los griegos mantenian cierta ventaja, pero no habian logrado tomar la ciudad. La situación era tensa y la lucha se prolongaba";
  textos [0][2] = "Aquiles tiene un desacuerdo con Agamenón debido al reparto de tesoros de guerra.";
  textos [1][2] = "Agamenón le quita a Aquiles su premio de guerra, una joven llamada Briseida";
  textos [0][3] = "Enojado por la injusticia, Aquiles decide retirarse de la batalla y se encierra en su tienda";
  textos [1][3] = "Esta retirada debilita enormemente el poderio de los griegos";
  textos [0][4] = "Con Aquiles plenamente comprometido con la guerra, los griegos logran una mayor coordinación y estrategia";
  textos [1][4] = "Su presencia y habilidades marciales inspiran a los demás guerreros griegos, aumentando su moral y deeterminación para enfrentar a los troyanos";
  textos [0][5] = "Después de muchos años de guerra, finalmente se llega a una tregua entre griegos y troyanos. Ambos bandos reconocen la devastación que la guerra ha causado y deciden buscar una solución pacifica";
  textos [1][5] = "Se realizan negociaciones y acuerdos que establecen la paz, poniendo fin a la guerra de Troya";
  textos [0][6] = "Patroclo se dirige a la tienda de Aquiles con la intención de persuadirlo para que regrese a la batalla";
  textos [1][6] = "Él busca convencer a Aquiles de volver a luchar";
  textos [0][7] = "Patroclo intenta disipar la ira y la tristeza que consume a Aquiles. Le habla de la importancia de su presencia en el campo de batalla, de cómo su liderazgo y habilidades marciales inspiran a los soldados griegos";
  textos [1][7] = "Le insta a reconsiderar su decisión de retirarse y a unirse nuevamente a la lucha contra los troyanos";
  textos [0][8] = "Sin que se de cuenta Aquiles, Patroclo roba sus armaduras";
  textos [1][8] = "Al hacerse pasar por Aquiles, Patroclo es asesinado en batalla por Hector";
  textos [0][9] = "Al enterarse de la muerte de su mejor amigo, Aquiles no duda en volver a la batalla a asesinar a Hector";
  textos [1][9] =  "Pero es detenido por Odiseo que pide que escuchen su idea";
  textos [0][10] = "Patroclo siente que el momento es propicio para expresar sus propios sentimientos";
  textos [1][10] = "Lleno de coraje, le confiesa a Aquiles que su amor por él va más allá de la amistad y que ha anhelado estar a su lado de una manera más íntima";
  textos [0][11] = "Odiseo propone la elaboración de un gigantesco caballo de madera, concebido como un símbolo de rendición";
  textos [1][11] = "Al mismo tiempo que planean ocultarse en su interior para infiltrarse en la ciudad";
  textos [0][12] = "Los intentos directos de asalto se encuentran con una feroz resistencia troyana";
  textos [1][12] = "Los griegos sufren bajas significativas y se enfrentan Aquiles y Hector";
  textos [0][13] = "Aquiles toma las manos de Patroclo entre las suyas y le confiesa que también ha sentido algo más por él";
  textos [1][13] = "Pero que nunca se atrevió a expresarlo por temor a arruinar su amistad";
  textos [0][14] = "Aquiles le expresa a Patroclo que su amor no puede ser correspondido de la forma que él desea";
  textos [1][14] = "La respuesta a su confesión lo lleva a Patroclo a tomar una arriesgada decisión: robar las armaduras de Aquiles y asumir su identidad en la batalla";
  textos [0][15] = "Durante uno de los últimos enfrentamientos de la guerra, Aquiles y Héctor se encuentran en un duelo final. A pesar de la ira y la determinación de Aquiles, Héctor  muestra una gran valentía y habilidad en el combate";
  textos [1][15] = "En un choque épico, Héctor logra superar a Aquiles y lo liquida en combate";
  textos [0][16] = "En batalla, Aquiles y Patroclo luchan lado a lado. La presencia del otro les da fuerza y valentía para enfrentar cualquier desafío";
  textos [1][16] = "A lo largo de la guerra, lideran a las tropas griegas con una nueva ferocidad y estrategia. Ganan la guerra de Troya y vuelven victoriosos a su nuevo hogar";
  textos [0][17] = "Contentos, los troyanos aceptan el obsequio y lo introducen dentro de las murallas de la ciudad. Durante la noche, los guerreros griegos ocultos en el caballo emergen y abren las puertas de Troya para que el ejército griego ingrese a la ciudad";
  textos [1][17] = " En medio del caos, los griegos saquean y destruyen Troya";
  textos [0][18] = "Aquiles se enfrenta a Héctor en un combate singular y lo mata en venganza por la muerte de Patroclo";
  textos [1][18] = "Luego, arrastra el cuerpo de Héctor por el suelo como un acto de desprecio hacia los troyanos";
}

void draw () {
  println (estado);
  switch(estado) {
  case 0:
    image( pantallas[0], 0, 0 );
    hover (205, 515, 190, 40, "");
    break;
  case 1:
    infoPantallas (1, 10, 15, 290, 75, 365, 420, 225, 100);
    botonContinuar();
    break;
  case 2:
    infoPantallas (2, 25, 5, 200, 75, 25, 80, 200, 71);
    hover (250, 10, 300, 50, "Enojarse con Agamenón");
    hover (250, 80, 300, 50, "No enojarse con Agamenón");
    break;
  case 3:
    infoPantallas (3, 0, 10, 300, 55, 0, 65, 300, 50);
    botonContinuar();
    break;
  case 4:
    infoPantallas (4, 25, 5, 200, 100, 360, 5, 200, 125);
    botonContinuar();
    break;
  case 5:
    infoPantallas (5, 25, 5, 300, 125, 360, 5, 200, 105);
    botonFinal (525, "CREDITOS");
    break;
  case 6:
    infoPantallas (6, 20, 10, 250, 80, 330, 25, 250, 50);
    hover (20, 95, 320, 50, "Acceder a hablar con Patroclo");
    hover (20, 160, 320, 50, "Negarse a hablar con Patroclo");
    break;
  case 7:
    infoPantallas (7, 10, 10, 400, 100, 320, 90, 280, 80);
    botonContinuar();
    break;
  case 8:
    infoPantallas (8, 25, 5, 200, 80, 360, 5, 200, 80);
    botonContinuar();
    break;
  case 9:
    infoPantallas (9, 25, 15, 200, 100, 360, 40, 200, 50);
    hover (25, 130, 200, 100, "Ordenar a todos vengar a Patroclo");
    hover (360, 130, 200, 100, "Ordenar a todos escuchar a Odiseo");
    break;
  case 10:
    infoPantallas (10, 25, 480, 200, 100, 360, 450, 200, 150);
    hover (25, 15, 200, 100, "No corresponder sus sentimientos");
    hover (360, 15, 200, 100, "Corresponder sus sentimientos");
    break;
  case 11:
    infoPantallas (11, 100, 50, 200, 100, 400, 20, 200, 100);
    botonContinuar();
    break;
  case 12:
    infoPantallas (12, 25, 5, 200, 100, 360, 5, 200, 100);
    botonContinuar();
    break;
  case 13:
    infoPantallas (13, 25, 5, 200, 100, 360, 5, 200, 100);
    botonContinuar();
    break;
  case 14:
    infoPantallas (14, 25, 10, 200, 100, 25, 120, 200, 150);
    botonContinuar();
    break;
  case 15:
    infoPantallas (15, 25, 5, 300, 150, 375, 50, 200, 80);
    botonFinal (525, "CREDITOS");
    break;
  case 16:
    infoPantallas (16, 25, 5, 200, 200, 360, 5, 200, 200);
    botonFinal (525, "CREDITOS");
    break;
  case 17:
    infoPantallas (17, 15, 70, 300, 150, 15, 240, 300, 50);
    botonContinuar();
    break;
  case 18:
    infoPantallas (18, 25, 5, 200, 100, 360, 5, 200, 100);
    botonFinal (525, "CREDITOS");
    break;
  case 19:
    background (0);
    fill(255);
    y = y + 1.3;
    text ("La Iliada de Homero", 300, y);
    if (y > 50) {
      text ("Trabajo Práctico N3", 300, y-50);
    }
    if (y > 100) {
      text ("Profes: Mati y Fer", 300, y-100);
    }
    if (y > 150) {
      text ("Alumna: Lara Puppo Mugetti", 300, y-150);
    }
    if (y > 750) {
      y = 0;
    }
    botonFinal (300, "REINICIAR");
    break;
  }
}

void mousePressed () {
  //Botones

  if ( estado == 0 && botonCuadrado(205, 515, 190, 40) ) {
    estado = 1;
  } else if ( estado == 1 && botonCuadrado(380, 530, 200, 50) ) {
    estado = 2;
  }

  if ( estado == 2 && botonCuadrado (250, 10, 300, 50) ) {
    estado = 3;
  } else if (estado == 3 && botonCuadrado (380, 530, 200, 50)) {
    estado = 6;
  }

  if (estado == 6 && botonCuadrado (20, 95, 320, 50)) {
    estado = 7;
  } else if (estado == 7 && botonCuadrado (380, 530, 200, 50)) {
    estado = 10;
  }

  if (estado == 10 && botonCuadrado (360, 15, 200, 100)) {
    estado = 13;
  } else if (estado == 13 && botonCuadrado(380, 530, 200, 50)) {
    estado = 16;
  } else if (estado == 16 && botonCircular (525, 530, 100)) {
    estado = 19;
  }

  if (estado == 10 && botonCuadrado (25, 15, 200, 100)) {
    estado = 14;
  } else if (estado == 14 && botonCuadrado(380, 530, 200, 50)) {
    estado = 9;
  }

  if (estado == 6 && botonCuadrado (20, 160, 320, 50)) {
    estado = 8;
  } else if (estado == 8 && botonCuadrado (380, 530, 200, 50)) {
    estado = 9;
  }

  if (estado == 9 && botonCuadrado (25, 130, 200, 100)) {
    estado = 12;
  } else if (estado == 12 && botonCuadrado (380, 530, 200, 50)) {
    estado = 15;
  } else if (estado == 15 && botonCircular (525, 530, 100)) {
    estado  = 19;
  }

  if (estado == 9 && botonCuadrado (360, 130, 200, 100)) {
    estado = 11;
  } else if (estado == 11 && botonCuadrado (380, 530, 200, 50)) {
    estado = 17;
  } else if (estado == 17 && botonCuadrado (380, 530, 200, 50)) {
    estado = 18;
  } else if (estado == 18 && botonCircular (525, 530, 100)) {
    estado = 19;
  }

  if ( estado == 2 && botonCuadrado (250, 80, 300, 50)) {
    estado = 4;
  } else if (estado == 4 && botonCuadrado (380, 530, 200, 50)) {
    estado = 5;
  } else if (estado == 5 && botonCircular (525, 530, 100)) {
    estado = 19;
  } else if (estado == 19 && botonCircular (300, 530, 100)) {
    reset ();
  }
}
