var trex, trex_running, edges;
var groundImage;
var chao;
var chao2;
var nuvem_mg
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
nuvem_mg = loadImage ("cloud.png")

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
 
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space") && trex.collide (chao)){
    trex.velocityY = -10; 
}  
  
  trex.velocityY = trex.velocityY + 0.5;
  
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
}
}

function geracacto (){
if (frameCount%80===0){

  var cacto
  cacto=createSprite (500, 170, 20,40)
  cacto.velocityX = -2


}






}



