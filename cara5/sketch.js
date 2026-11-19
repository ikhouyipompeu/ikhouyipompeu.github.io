function setup() {
  describe("A 400 by 400 pixel gray canvas.");
  createCanvas(600, 600);//Crea un área de dibuix dee 600 pixels quadrats,600 pixels d'ample i 600 pixels d'alçada, Canvas és àrea de dibuix. Setup ès la configuració o carcteristíques del nostre codi.
}
//farem canvis aleatoris amb random i canvis suaus amb noise
function draw() {//draw significa dibuixar 
frameRate(5)
 let canvigran= random(0,25);
  letcanvisuau=noise(0.001*frameCount)*25;
  letcanvisuau2=noise(0.001*frameCount+10000)*127;
  background(220);//fons de color gris, és de color gris perquè hi ha un número entre 0 i 255 i el 0 és negre i el 255 es blanc. 
  let tremolor=random(0,20)  
  fill(255,245,54);//Fill és omplir de color el que hi ha a continuació en aquest cas el·lipses. El primer número es el nivell de vermellor(R:red),el segon número es el nivell de verdor (G:green) i el tercer número es el nivell de blavor (B:blue). Podem fer 255·255·255:16.700.000 de colors diferents. He de posar el color que vulgui als ulls i a la cara canviant els 3 números,buscant a google coors RGB.
  ellipse(300+tremolor,300,250+tremolor,250);//La cara sencera. El primer número significa la psició X(horizontal) del centre de la el·lipse. El segon número significa la posició Y (vertical )del centre de la el·lipse. El tercer número significa l'ampalada de la el·lipse en pixels i el quart l'alçada de la el·lipse. Sempre els números son pixels contats des de la cantonada superior esquerra,és a dir el punt 0,0 es troba diferent que a matemàtiques(cantonada inefrior esquerra).
  fill(300,232,78+canvigran); 
  ellipse(250+tremolor,285+tremolor,35,25);
  ellipse(350+tremolor,250+tremolor,40,30);
  fill(34+canvigran,217+canvigran,238+canvigran)
  fill(250+tremolor,0,0);//és el color de la boca i és vermellós perquè te molta quantitat de vermell.
  arc(300+tremolor,350,100,70+tremolor,0,PI);//cella esquerra.
  noFill();//no omplis.
  arc(250,255,50,25,PI,0);
  strokeWeight(4);
  line(325+tremolor,215,375,225);
}
