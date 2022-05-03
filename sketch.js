var trex, trex_running, edges;
var groundImage;
var chao;
var chao2;
var nuvem_mg
var c1,c2,c3,c4,c5,c6
var score = 0 
var estado = "jogar"
var gpnuvem
var gpcacto
var trexcollided
var gameover, gameoverimage
var restart, restartimage
var jumpsound
var diesound
var checksound
var Vcacto = 5
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
nuvem_mg = loadImage ("cloud.png")
c1 = loadImage ("obstacle1.png")
c2 = loadImage ("obstacle2.png")
c3 = loadImage ("obstacle3.png")
c4 = loadImage ("obstacle4.png")
c5 = loadImage ("obstacle5.png")
c6 = loadImage ("obstacle6.png")
trexcollided = loadAnimation ("trex_collided.png")
gameoverimage = loadImage ("gameOver.png")
restartimage = loadImage ("restart.png")
jumpsound = loadSound ("jump.mp3")
diesound = loadSound ("die.mp3")
checksound = loadSound ("checkPoint.mp3")
}

function setup(){
  createCanvas(600,200);
  //test
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  trex.addAnimation("collided",trexcollided)
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
chao = createSprite (200,180,400,20)
chao.addImage ("chao",groundImage)
chao2=createSprite (200,200,400,20)
chao2.visible=false
gpnuvem = new Group ()
gpcacto = new Group ()
trex.setCollider ("circle", 0,0,40)
gameover = createSprite (300, 100,20,20 )
restart = createSprite (300, 150, 20,20)
gameover.addImage ("gameover", gameoverimage)
restart.addImage ("restart", restartimage)
gameover.scale = 0.5
restart.scale = 0.8
gameover.visible = false
restart.visible = false 

}


function draw(){
 if (estado === "jogar") {
  chao.velocityX= -Vcacto
if (trex.isTouching (gpcacto)){
estado="final"
diesound.play ()
}
  if (chao.x<0) {
    chao.x = chao.width/2;
  }
     
  score++
  
if (score%200===0){
checksound.play  ()
Vcacto ++ 
}


  //pular quando tecla de espaço for pressionada
  if(keyDown("space") && trex.y >= 160    ){
    trex.velocityY = -13; 
  jumpsound.play ()
  }  
trex.velocityY = trex.velocityY + 0.9;

geranuvem ()
geracacto()

 } else if (estado === "final") {
  chao.velocityX= 0
  gpcacto.setVelocityXEach (0)
  gpnuvem.setVelocityXEach (0)
 gpcacto.setLifetimeEach (-10)
 gpnuvem.setLifetimeEach (-10) 
 trex.changeAnimation("collided",trexcollided)
trex.velocityY = 0
gameover.visible = true
restart.visible = true
if (mousePressedOver (restart)){
estado="jogar"
gpcacto.destroyEach()
gpnuvem.destroyEach()
restart.visible = false
gameover.visible= false
trex.changeAnimation("running", trex_running)
score=0
}
}
 
  //definir a cor do plano de fundo 
  background("white");

  //registrando a posição y do trex
 

 textSize (20)
 text (score,550,30 )
 
 //impedir que o trex caia
  trex.collide(chao2 )  
  drawSprites();

}

function geranuvem (){
if (frameCount%50===0){

  var nuvem 
  nuvem=createSprite (600,50,40,10)
  nuvem.velocityX=  -4
  nuvem.addImage (nuvem_mg)
  nuvem.y = Math.round(random(10,100))
nuvem.lifetime=160
gpnuvem.add(nuvem)
trex.depth = nuvem.depth +1

}
}

function geracacto (){
if (frameCount%80===0){

  var cacto
  cacto=createSprite (600, 170, 20,40)
  cacto.velocityX = -Vcacto 
  cacto.scale = 0.4
  cacto.lifetime = 315
var hand= Math.round (random(1,6))
switch (hand){
case 1: cacto.addImage (c1)
break
case 2: cacto.addImage (c2)
break
case 3: cacto.addImage (c3)
break
case 4: cacto.addImage (c4)
break
case 5: cacto.addImage (c5)
break
case 6: cacto.addImage (c6)
break
}

gpcacto.add (cacto)


}
}



