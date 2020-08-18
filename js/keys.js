document.addEventListener("keydown", event => {
  switch(event.keyCode){
    case 32:
      if(!intervalId){
        intervalId = setInterval(update, 1000/100)
      }
    break;
    case 38:
      taro.jump();
    break;
    case 39:
      naruto.draw();
      naruto.newPos()
    break;
    default:
      break;
  }
})

// document.addEventListener("keyup",event=>{
//   switch(event.keyCode){
//     case 39:
//       naruto.draw();
//       naruto.newPos();
//     break;
//   }
// })