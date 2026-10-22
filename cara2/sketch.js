function setup() {
  createCanvas(600, 600);//Crea un área de dibuix dee 600 pixels quadrats,600 pixels d'ample i 600 pixels d'alçada, Canvas és àrea de dibuix. Setup ès la configuració o carcteristíques del nostre codi.
  }
  function draw() {
frameRate(60);
// background(220);//fons de color gris, és de color gris perquè hi ha un número entre 0 i 255 i el 0 és negre i el 255 es blanc 
 let canvigran = sin(frameCount*0.05)*20;//genera números de 20 a -20 sense parar
  let canvipetit= sin(frameCount*0.05)*200 
  text("sinus:+s",20,20);
  let canvimitja= cos(frameCount*0.05)*15;//genera números de 15 a -15 sense parar i ordenats
  let c=cos(frameCount*0.05)*8;//genera números de 8 a -8 sense parar i ordenats.
  
letcanvimoltgran=cos(frameCount*0.0,5)*127;//genera números de 127 a -127 sense parar i ordenats
  fill(255-canvimitja*2,255-canvimitja*2,0);//Fill és omplir de color el que hi ha a continuació en aquest cas el·lipses. El primer número es el nivell de vermellor(R:red),el segon número es el nivell de verdor (G:green) i el tercer número es el nivell de blavor (B:blue). Podem fer 255·255·255:16.700.000 de colors diferents. He de posar /de color el que hi ha a continuació en aquest cas el·lipses. El primer número es el nivell de vermellor(R:red),el segon número es el nivell de verdor (G:green) i el tercer número es el nivell de blavor (B:blue). Podem fer 255·255·255:16.700.000 de colors diferents. He de posar el color que vulgui als ulls i a la cara canviant els 3 números,buscant a google coors RGB.
  ellipse(300,300,235,250);//La cara sencera. El primer número significa la psició X(horizontal) del centre de la el·lipse. El segon número significa la posició Y (vertical )del centre de la el·lipse. El tercer número significa l'ampalada de la el·lipse en pixels i el quart l'alçada de la el·lipse. Sempre els números son pixels contats des de la cantonada superior esquerra,és a dir el punt 0,0 es troba diferent que a matemàtiques(cantonada inefrior esquerra)
  fill(245,66,39); 
  ellipse(250-canvigran,285,35,25);
  ellipse(350,250,40,30);//posició de les celles 
  fill(0,0,0);//és el color de la boca i és vermellós perquè te molta quantitat de vermell
  fill(205,0, 0);
  noFill();//no omplis 
  strokeWeight(4);
  arc(250,255,50,25-canvigran,PI,0);//cella esquerra
  strokeWeight(4);
  line(325,215,375,225);//cella dreta:els dos primers números són la X
  arc(300,350,100,70-canvigran,0,PI)//boca

}
