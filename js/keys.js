document.addEventListener("keydown", event => {
  switch(event.keyCode){
    case 32:
      if(!intervalId){
        intervalId = setInterval(update, 1000/150)
        playAudio()
      }
    break;  
    case 38:
      taro.jump();
    break; 
    case 39:
        shoots.push(new Arma(taro.x+50, taro.y+50));
    break;
    case 13:
        // reset();
        if(!intervalId){
         reset();
        }
    break;
    default:
    break;
  }
})

document.addEventListener("keyup",event=>{
 keys[event.keyCode] = false
})

