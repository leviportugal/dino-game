var trex, trex_running, edges;
var groundImage;
var chao;
var chao2;
var nuvem_mg
var c1,c2,c3,c4,c5,c6
var score = 0 




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

}

function setup(){
  createCanvas(600,200);
  //test
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
chao = createSprite (200,180,400,20)
chao.addImage ("chao",groundImage)
chao2=createSprite (200,200,400,20)
chao2.visible=false
}


function draw(){
  //definir a cor do plano de fundo 
  background("white");
  chao.velocityX= -2
  //registrando a posição y do trex
 if (chao.x<0) {
chao.x = chao.width/2;
 }
 score++
 textSize (20)
 text (score,550,30 )
 
  //pular quando tecla de espaço for pressionada
  if(keyDown("space") && trex.y >= 160    ){
    trex.velocityY = -13; 
}  
  
  trex.velocityY = trex.velocityY + 0.9;
  
 //impedir que o trex caia
  trex.collide(chao2 )  
  drawSprites();
geranuvem ()
geracacto()
}

function geranuvem (){
if (frameCount%50===0){

  var nuvem 
  nuvem=createSprite (600,50,40,10)
  nuvem.velocityX=  -4
  nuvem.addImage (nuvem_mg)
  nuvem.y = Math.round(random(10,100))
nuvem.lifetime=160
}
}

function geracacto (){
if (frameCount%80===0){

  var cacto
  cacto=createSprite (600, 170, 20,40)
  cacto.velocityX = -5
  cacto.scale = 0.5
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




}
}



