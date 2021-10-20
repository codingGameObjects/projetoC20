
function preload() {
    //carregue as imagens aqui
    cenario = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    Tom = createSprite(800, 720, 30, 30);
    Jerry = createSprite(200,720, 20, 20);
}


function draw() {
    background(cenario);
    fill(0);
    textSize(20);
    text("RATO", Jerry.x - 25, Jerry.y - 15)
    text("GATO", Tom.x - 25, Tom.y - 20)
    text("As imagens de gato e rato por augum motivo estavam bugando a colisão", 150, 40)
    if(Tom.x - Jerry.x < Tom.width/2 + Jerry.width/2 && Jerry.x - Tom.x < Jerry.width/2 + Tom.width/2){
        Tom.velocityX = 0;
        textSize(40);
        text("O GATO SE COLIDIU COM O RATO", 200, 400);
        Tom.shapeColor("red");
        Jerry.shapeColor("red");
    }
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
    if (keyCode === LEFT_ARROW){
        Tom.velocityX = -5
    }
}