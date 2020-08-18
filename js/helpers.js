// $button.addEventListener("click",()=>{
//   intervalId=setInterval(update, 1000/60)
// })

function update(){
    frames++
    ramenSpeed()
    generateEvil()
    gameSpeed()
    clearCanvas()
    backgroundChange()
    levelChange()
    checkCollitionVirus()
    checkCollitionNaruto()
    checkCollitionMonster()
    checkCollition()
    printScore()
    taro.newPos()
    taro.draw()
    drawShoots()
    drawRamen()
    drawVirus()
    drawMonsters()
    drawPolice()
    drawBarras()
    drawCuchillo()
    ramenScore()
}

// Función para borrar el canvas
function clearCanvas(){
    $context.clearRect(0,0,$canvas.width,$canvas.height)
}

// Función para generar obstáculos 
function generatePolice() {
    if (frames % 450 === 0) {
      const setY = 320
      const setX = 800
      obstacles.push(new Policia(setX,setY))
    }
  }
 
  //funcion de barras
  function generateBarras(){
    if (frames % 450 === 0){
      const y = 320 
      const x = 800
      ataques.push(new Barras(x, y+70))
    }
  } 

  function drawBarras(){
    ataques.forEach((barra, i)=>{
      barra.draw();
    })
  }
  //hasta aqui

  //funcion de cuchillos
  function generateCuchillo(){
    if (frames % 400 === 0) {
        const setX = 800
        const minY = 250
        const maxY = 400
        const randomY = Math.floor(Math.random()*(maxY-minY)+minY)
        cuchillos.push(new Cuchillo(setX,randomY))
    }
  }

  function generateCuchillo2(){
    if (frames % 700 === 0) {
      const setX = 800
      const minY = 100
      const maxY = 250
      const randomY = Math.floor(Math.random()*(maxY-minY)+minY)
      cuchillos.push(new Cuchillo(setX,randomY))
    }
  }

  function drawCuchillo(){
    cuchillos.forEach((c, i)=>{
      c.draw();
    })
  }

  // dibujar obstaculos
  function drawPolice() { 
    obstacles.forEach((obstacle, i) => {
      obstacle.draw()
    })
  }
  
  // Función para generar covid
function generateVirus() {
    if (frames % 400 === 0) {
      const setY = 350
      const setX = 800
      covid.push(new Covid(setX,setY))
    }
  }

  // dibujar covid
  function drawVirus() {
    covid.forEach((virus, i) => {
      virus.draw()
    })
  }

  // Función para generar monsters
function generateMonsters() {
    if (frames % 600 === 0) {
      const setY = 260
      const setX = 800
      monsters.push(new Monster(setX,setY))
    }
  }

  // dibujar monsters
  function drawMonsters() {
    monsters.forEach((monster, i) => {
      monster.draw()
    })
  }

  function generateEvil(){
    if(score < 5 ){
      generateVirus()
     }else if (score < 15){
      generatePolice()
      generateBarras()
     }else if(score >= 15){
       generateMonsters()
       generateCuchillo()
       generateCuchillo2()
     }
  }

  // Función para generar ingredientes de ramen por niveles
  function generateRamen(){
      if (frames % 400 === 0) {
        const setX = 800
        const minY = 130
        const maxY = 200
        const randomY = Math.floor(Math.random()*(maxY-minY)+minY)
        ingredientes.push(new Ramen(setX,randomY))
      }
  }

  function generateRamenLevel2(){
    if (frames % 800 === 0) {
      const setX = 800
      const minY = 100
      const maxY = 200
      const randomY = Math.floor(Math.random()*(maxY-minY)+minY)
      ingredientes.push(new Ramen(setX,randomY))
    }
}

function generateRamenLevel3(){
    if (frames % 1200 === 0) {
      const setX = 800
      const minY = 100
      const maxY = 200
      const randomY = Math.floor(Math.random()*(maxY-minY)+minY)
      ingredientes.push(new Ramen(setX,randomY))
    }
}

//función para llamar los niveles
  function ramenSpeed(){
      if(score < 5){
         generateRamen()
      }else if (score >= 5){
        generateRamenLevel2()
      }else if(score>=15){
        generateRamenLevel3()
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

//Función de colición
function checkCollition(){
    obstacles.forEach(ob=>{
        if(taro.touch(ob)){
            gameOver()
        }
    })
    covid .forEach(co=>{
      if(taro.touch(co)){
        gameOver();
      }
    })
    monsters.forEach(mou=>{
      if(taro.touch(mou)){
        gameOver();
      }
    })
    ataques.forEach(barra=>{
      if(taro.touch(barra)){
        gameOver();
      }
    })
    cuchillos.forEach(c=>{
      if(taro.touch(c)){
        gameOver();
      }
    })
}

//Función collition Naruto
function checkCollitionNaruto(){
    shoots.forEach((ob,i)=>{
         obstacles.forEach((police, index)=>{
             if(ob.touch(police)&& police.hp>0){
                 shoots.splice(i,1)
                 police.damage()   
             }
             else if (ob.touch(police)&& police.hp===0){
                obstacles.splice(index,1)
                shoots.splice(i,1)
             }
         })  
    })
}


//Funcion collition Covid
function checkCollitionVirus(){
    shoots.forEach((ob,i)=>{
         covid.forEach((virus, index)=>{
             if(ob.touch(virus)&& virus.hp>0){
                 shoots.splice(i,1)
                 virus.damage()   
             }
             else if (ob.touch(virus)&& virus.hp===0){
                covid.splice(index,1)
                shoots.splice(i,1)
             }
         })  
    })
}

//Funcion collition Monster
function checkCollitionMonster(){
    shoots.forEach((ob,i)=>{
         monsters.forEach((monster, index)=>{
             if(ob.touch(monster)&& monster.hp>0){
                 shoots.splice(i,1)
                 monster.damage()   
             }
             else if (ob.touch(monster)&& monster.hp===0){
                monsters.splice(index,1)
                shoots.splice(i,1)
             }
         })  
    })
}

//print score ()
function ramenScore(){
  ingredientes.forEach((ramen,index)=>{
   if(taro.touch(ramen)){
     ingredientes.splice(index,1)
     score ++;
   }
  }
)}

//print score ()
function printScore(){
  $context.font="32px Arial"
  $context.fillStyle="black"
  $context.fillText(`Score : ${score}`, 20, 40)
}

// Disparos
function drawShoots() {
    shoots.forEach(shoot => shoot.draw());
  }

// cambio de velocidad por nivel
  function gameSpeed(){
      if(score < 5) {
        generalSpeed = 1.2
      }else if(score < 15){
        generalSpeed = 1.5
      }else if(score >= 15){
        generalSpeed = 2
      }
  }

  // Cambio de texto x Nivel
  function levelChange(){
    if(score < 5 ){
        $context.font="32px Arial"
        $context.fillStyle="white"
        $context.fillText("Level 1", 660,45)
      }else if(score < 15){
        $context.font="32px Arial"
        $context.fillStyle="white"
        $context.fillText("Level 2", 660,45)
      }else if(score < 30){
        $context.font="32px Arial"
        $context.fillStyle="white"
        $context.fillText("Level 3", 660,45)
      }else if(score === 30){
        clearInterval(intervalId)
        $context.font="32px Arial"
        $context.fillStyle="white"
        $context.fillText("You Won", 660,45)
      }
  }

  //Cambio de Fondo x Nivel
    function drawLevel1(){
        board.draw()
    }

    function drawLevel2(){
        board2.draw()
    }

    function drawLevel3(){
        board3.draw()
    }

  function backgroundChange(){
      if(score < 5) {
          drawLevel1()
        }else if(score < 15){
          drawLevel2()
        }else if(score >= 15){
          drawLevel3()
        }
  }

