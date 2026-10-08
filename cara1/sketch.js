function setup() {
  createCanvas(600, 600);//Crea un área de dibuix dee 600 pixels quadrats,600 pixels d'ample i 600 pixels d'alçada, Canvas és àrea de dibuix. Setup ès la configuració o carcteristíques del nostre codi.
}

function draw() {{//draw significa dibuixar
  background(220);//fons de color gris, és de color gris perquè hi ha un número entre 0 i 255 i el 0 és negre i el 255 es blanc 
  
  fill(255,245,54);//Fill és omplir de color el que hi ha a continuació en aquest cas el·lipses. El primer número es el nivell de vermellor(R:red),el segon número es el nivell de verdor (G:green) i el tercer número es el nivell de blavor (B:blue). Podem fer 255·255·255:16.700.000 de colors diferents. He de posar el color que vulgui als ulls i a la cara canviant els 3 números,buscant a google coors RGB.
  ellipse(300,300,235,250);//La cara sencera. El primer número significa la psició X(horizontal) del centre de la el·lipse. El segon número significa la posició Y (vertical )del centre de la el·lipse. El tercer número significa l'ampalada de la el·lipse en pixels i el quart l'alçada de la el·lipse. Sempre els números son pixels contats des de la cantonada superior esquerra,és a dir el punt 0,0 es troba diferent que a matemàtiques(cantonada inefrior esquerra)
  fill(35,152,255); 
  ellipse(250,285,35,25);
  ellipse(350,250,40,30);
  fill(255,0,0);//és el color de la boca i és vermellós perquè te molta quantitat de vermell
  arc(300,350,100,70,0,PI);//cella esquerra
  noFill();//no omplis 
  strokeWeight(4);
  arc(250,255,50,25,PI,0);
  strokeWeight(4);
  
  line(325,215,375,225);
  }
  
}
