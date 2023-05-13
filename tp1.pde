// Trabajo Practico N1 Lara Puppo

int estado, segundos, movx1, movx2, color1, movy1, movy2, value;
float tamanotxt;
PImage foto1, foto2, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12, foto14, foto18, foto19, fotoa, fotob, fotoc ;
PFont Mifuentelinda ;

void setup(){
  size( 640, 480 );
  estado = 0;
  textAlign( CENTER, CENTER );
  textSize( 20 );
  Mifuentelinda = loadFont ("ArialRoundedMTBold-48.vlw");
  foto1 = loadImage ("foto1.jpg");
  foto2 = loadImage ("foto2.jpg");
  foto4 = loadImage ("foto4.jpg");
  foto5 = loadImage ("foto5.jpg");
  foto6 = loadImage ("foto6.jpg");
  foto7 = loadImage ("foto7.jpg");
  foto8 = loadImage ("foto8.jpg");
  foto9 = loadImage ("foto9.jpg");
  foto10 = loadImage ("foto10.jpg");
  foto11 = loadImage ("foto11.jpg");
  foto12 = loadImage ("foto12.jpg");
  foto14 = loadImage ("foto14.jpg");
  foto18 = loadImage ("foto18.jpg");
  foto19 = loadImage ("foto19.jpg");
  fotoa = loadImage ("fotoa.jpg");
  fotob = loadImage ("fotob.jpg");
  fotoc = loadImage ("fotoc.jpg");
  tamanotxt = 0 ; 
  movx1 = 0; 
  movx2 = 640;
  color1 = 0; 
  movy1 = 0;
  movy2 = 480;
  value=0;
}

void draw(){

   int difsegundos = millis() - segundos;
    println( millis() + " - " + segundos + " = " + difsegundos );

  //maquina de estados
  
if( estado == 0 ){  
    background (0);
    image (foto1, 74,0);
    fill(0);
    noStroke();
    rect (360, 30, 180,20);
    rect (340,65,220,20);
    rect (390,98,120,20);
    color1 = color1+1 ;
    fill(255, color1);
    text( "Holis, soy Lara y para \n mi tp1 voy a presentarles \n a mis gatos: ", 450, 70 );
    
    
  if( difsegundos >= 4000 ){ // 4 segundos
    estado = 1;
    segundos = millis();
    color1 = 0;
   }
  }
 else if (estado == 1 ){
    background( 0 );  
    image (foto2, 70,0);
    textSize (40);
    fill(0);
    movx1 = movx1 + 3;
    text ("La Negra", movx1,70);
    movx2 = movx2 - 3;
    text ("Y Tito", movx2,400);
    
    if (movx1 >= 310){
    movx1= 310;
  }
  
    if (movx2 <= 370){
    movx2= 370;
  }
    if( difsegundos >= 3000 ){  //3 segundos
      estado = 2;
      segundos = millis(); 
      movx1 = 0;
      movx2 = 640;
  }  
 }
 else if (estado == 2 ){
    background (255);
    image (foto5,32,0);
    textSize (17);
    fill(255);
    movy2 = movy2 - 3;
    text( "Voy a empezar hablando sobre \n La Negra, es la mas joven de los dos. \n Con mi mama no nos acordamos \n bien cuando vino porque un \n dia llego por el patio \n maullando por comida", 160, movy2 );
    if (movy2 <= 100){
      movy2 = 100;
    }
    
    if( difsegundos >= 5000 ){  //5 segundos
      estado = 3;
      segundos = millis(); 
      movy2 = 480;
  }   
 }
 else if (estado == 3 ){
    image (foto8,0,0);
    movx1 = movx1 + 3 ;
    movx2 = movx2 - 4 ;
    textSize (20);
    fill (255);
    text ("Y de repente la teniamos \n instalada en nuestras camas", movx2,50);
    text ("Es muy cariñosa y habladora, \n maulla hasta por las patas", movx1, 130);
    if (movx1 >= 300){
      movx1 = 300; 
   }
    if (movx2 <= 160){
      movx2 = 160; 
   }
    
    if( difsegundos >= 4000 ){  //4 segundos
      estado = 4;
      segundos = millis();
      movx1 = 0;
      movx2 = 640;
  }   
 }
 else if (estado == 4 ){
      background (255);
      image (foto6,32,0);
      movy2 = movy2 -3;
      text ("Le gusta mucho meterse en \n bolsas, cajas o acostarse a \n dormir sobre ropa negra",190,movy2);
      
      if (movy2 <= 100){
        movy2=100;
    }
      if( difsegundos >= 4000 ){  //4 segundos
      estado = 5;
      segundos = millis();
      movy2 = 480;
  }
 }  
 else if (estado == 5){
      background (93,64,34);
      image (foto7,0,0);
      movy1 = movy1+4;
      textSize (22);
      text ("A veces la atrapamos \n con la lengua afuera", 500,movy1);
      
      if (movy1 >= 360){
      movy1=360;
    }
      if( difsegundos >= 3000 ){  //3 segundos
      estado = 6;
      segundos = millis();
      movy1 = 0;
  }
 } 
 else if (estado==6){
      background (255);
      image (foto9,0,0);
      movx1=movx1+4;
      text("O durmiendo y con \n la lengua afuera",movx1,80);
      
      if (movx1 >=480){
      movx1=480;
    }
      if( difsegundos >= 3000 ){  //3 segundos
      estado = 7;
      segundos = millis();
      movx1 = 0;
  }
 }
 else if (estado == 7 ){
      image (foto10,0,0);
      movx2 = movx2 - 4;
      text ("Pero la mayoria del \n tiempo, solo durmiendo",movx2,80);
      
      if (movx2 <=220){
      movx2=220;
    }
      if( difsegundos >= 3000 ){  //3 segundos
      estado = 8;
      segundos = millis();
      movx2 = 500;      
  }
 }  
 else if (estado == 8){
     background (0);
     image (foto11,30,0);
     tamanotxt = tamanotxt + 0.4 ;
     
     if (tamanotxt >= 20){
     tamanotxt=20;
   }
     textSize (tamanotxt);
     text ("La Negra es de las mejores \n compañias que tenemos con mi mama, \n siempre esta a nuestro lado en \n cualquier momento del dia",400,380);
 
     if( difsegundos >= 4000 ){  //4 segundos
      estado = 9;
      segundos = millis();
      tamanotxt = 0;  
  }
 }
 else if (estado==9){
     image(foto12,30,0);
     textSize (22);
     fill(0);
     movy2=movy2-3;
     text("Yyy pasando al otro gatito \n de la casa, este es Tito! Ya \nt iene 11 años con nosotras",400,movy2);
     
     if (movy2 <= 100){
     movy2=100;
 }
     if( difsegundos >= 4000 ){  //4 segundos
      estado = 10;
      segundos = millis();
      movy2 = 480; 
 }
}
else if (estado == 10){
      image (fotob,0,0);
      movx2=movx2-3;
      movy2=movy2-3;
      text ("Lo encontramos en Cardales, \n estabamos ahi por un \n casamiento y se nos acerca \n Tito maullando,", movx2, movy2);
      if (movx2 <= 140){
      movx2 = 140;
      }
      if (movy2 <= 120){
      movy2 = 120;
      }
      if( difsegundos >= 4000 ){  //4 segundos
      estado = 11;
      segundos = millis();
      movy2 = 480;
      movx2= 640;
  }
}
else if (estado == 11){
      background (0);
      image (foto14,45,0);
      movx1 = movx1 + 3;
      fill(255);
      textSize (20);
      text("Le dimos comida, paso el \n resto del dia con nosotros y \n a la hora de irnos, que ya nos \n subiamos al auto para emprender \n viaje a La Plata,",movx1,120);
      if (movx1 >= 320){
      movx1=320;
    }
      if( difsegundos >= 5000 ){  //5 segundos
      estado = 12;
      segundos = millis();
      movx1= 0;
  }
}
else if (estado == 12){
      background (255);
      image (fotoc,42,0);
      movx2=movx2-3;
      text("Como si fuera parte de \n la familia, Tito se subio al \n auto como si nada",movx2,50);
      if (movx2 <= 320){
      movx2=320;
      }
      if( difsegundos >= 4000 ){  //4 segundos
      estado = 13;
      segundos = millis();
      movx2= 480;
  }
}
else if (estado == 13){
      image(foto19,0,0);
      movy1=movy1+3;
      text("Desde entonces que vive en \n nuestra casa y se mueve de \n la cama a la cocina en busca \n de comida", 160,movy1);
      if (movy1 >= 360){
      movy1 = 360;
      }
      if( difsegundos >= 4000 ){  //4 segundos
      estado = 14;
      segundos = millis();
      movy1= 0;
  }   
}
else if (estado == 14){
     background (0);
     image (foto18,60,0);
     tamanotxt = tamanotxt + 0.4 ;
     
     if (tamanotxt >= 20){
     tamanotxt=20;
   }
     textSize (tamanotxt);
     fill(0);
     text ("Es lo mas bueno que hay, \n jamas te va a rasguñar ni \n arañar por nada", 320,400);

     if( difsegundos >= 4000 ){  //4 segundos
     estado = 15;
     segundos = millis();
     tamanotxt = 0;
      }
}
else if (estado == 15){
      background (0);
      image (fotoa,39,0);
      strokeWeight(3);
      fill(255);
      rect (325,17,270,22);
      fill(0);
      textSize(20);
      text ("Espero que les haya gustado <3",460,25); 
      fill(255);
      text ("Click aqui para \n reiniciar la presentacion",180,330);
      fill(value);
      circle(180, 420, 50);
      if( dist(180, 420, mouseX, mouseY) < 50/2 ) {
      stroke(255);
      strokeWeight(3);
      value = color(200,0,0) ;
   }  else {
      noStroke();
      value = 255;
  }
}
   //
  }
  //

  

void mousePressed(){

   if( estado == 15 ){
      if( dist(180, 420, mouseX, mouseY) < 70/2 ){
      estado = 0;
      segundos = millis(); 
  }
 }
}
  
