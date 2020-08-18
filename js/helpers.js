// $button.addEventListener("click",()=>{
//   intervalId=setInterval(update, 1000/60)
// })

function update(){
    frames++
    generateRamen()
    generatePolice()
    clearCanvas()
    board.draw()
    checkCollition()
    ramenScore()
    printScore()
    taro.newPos()
    taro.draw()
    drawRamen()
    drawPolice()
}

// Función para borrar el canvas

function clearCanvas(){
    $context.clearRect(0,0,$canvas.width,$canvas.height)
}

// Función para generar obstáculos 
function generatePolice() {
    if (frames % 500 === 0) {
      const setY = 340
      const setX = 800
      obstacles.push(new Policia(setX,setY))
    }
  }

  // dibujar obstaculos
  function drawPolice() {
    obstacles.forEach((obstacle, i) => {
      obstacle.draw()
    })
  }

  // Función para generar ingredientes de ramen
  function generateRamen(){
      if (frames % 400 === 0) {
        const setX = 800
        const minY = 130
        const maxY = 200
        const randomY = Math.floor(Math.random()*(maxY-minY)+minY)
        ingredientes.push(new Ramen(setX,randomY))
      }
  }
      
// Dibuar ingredientes
  function drawRamen() {
      ingredientes.forEach((ramen, i) => {
          ramen.draw()
      })
  }

// Game-Over
function gameOver(){
    clearInterval(intervalId)
    $context.font="62px Arial"
    $context.fillStyle="red"
    $context.fillText("GAME OVER", 225,180)
}

function checkCollition(){
    obstacles.forEach(ob=>{
        if(taro.touch(ob)){
            gameOver()
        }
    })
}

//check touch function of naruto
function checkNarutoCollition(){
  obstacles.forEach(ob=>{
    if(naruto.touch(ob)){
      // ob.style.visibility="hidden";
    }
  })
}

//print score ()
function ramenScore(){
  ingredientes.forEach(ramen=>{
   if(taro.touch(ramen)){
     score ++;
   }else{
     score +=0;
   }
  }
)}

function printScore(){
  $context.font="32px Arial"
  $context.fillStyle="black"
  $context.fillText(`Score : ${score}`, 20,30)
}

