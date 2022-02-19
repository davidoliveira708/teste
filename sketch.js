var nome = ['Pedro','João','Marcos','Lucas','Mario','Paulo','Felipe','Maria','Márcia','Eduarda']
var matricula = []
var cpf = []
var img = []
var mediaF = []


    function preload() {
    
    for( c = 0 ; c < 10 ; c++ ) {
      
      img[c] = loadImage('img'+c+'.png')
      img1 = loadImage('Teste1.jpg')
      img2 = loadImage('Teste2.jpg')
      
      }
    
    }



function setup() {
  createCanvas(500,600);
  
  for( var i = 0 ; i < 10 ; i++ ) {
    
    matricula[i] = parseInt( '0838'+random(1000000,10000000))
    cpf[i] = parseInt(random(0,100000000000))
    mediaF[i] = parseInt(random(0,11))
    
    
    }
  
}

function draw() {
  background(img2);
  
  textSize(15)
  
  for( var i = 0 , y = 80 ; i < 10 ; i++ , y += 53) {
    
    text(i + 1+'.', 27 ,y)
    text( nome[i] , 60 , y )
    text( matricula[i] , 125 , y )
    text( cpf[i] , 225 , y )
    text( mediaF[i] , 360 , y )
    image( img[i] , 420 , y - 20 , 40 , 35 )
    
    }
  
  text('N°' , 25 , 50 )
  text('Nome' , 60 , 50 )
  text('Matrícula' , 133 , 50 )
  text('CPF' , 252 , 50 )
  text('M.Final' , 345 , 50 )
  text('Foto' , 420 , 50 )
  
}