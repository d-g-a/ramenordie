class Background {
    constructor(){
        this.x=0;
        this.y=0;
        this.width=$canvas.width;
        this.height=$canvas.height;
        this.img=new Image();
        this.img.src="https://i.pinimg.com/564x/47/1a/08/471a08fc76dc51e61d8cc160a70f3448.jpg"
        this.img.onload = () => {
            this.draw()
        }
    }

    draw(){ 
        this.x = this.x-1*generalSpeed 
        if(this.x <-$canvas.width){
            this.x=0;
        }
        $context.drawImage(this.img,this.x, this.y, this.width, this.height)
        $context.drawImage(this.img, this.x+$canvas.width, this.y, this.width, this.height)
    }
}

class Level2 extends Background {
    constructor(x,y,width,height){
    super(x,y,width,height)
    this.img=new Image()
    this.img.src= "https://pressstart.vip/images/uploads/assets/snowymountains.png"
    this.img.onload = () => {
        this.draw
    }
  }
}

class Level3 extends Background {
    constructor(x,y,width,height){
    super(x,y,width,height)
    this.img=new Image()
    this.img.src= "https://pressstart.vip/images/uploads/assets/graveyard.png"
    this.img.onload = () => {
        this.draw
    }
  }
}

class Character{
    constructor(x, y) {
      this.x=x
      this.y=y
      this.width=100
      this.height=150
      this.jumping=false
      this.jumpStrength = 300
      this.img=new Image()
      this.img.src="../images/skatercat.png"
      this.img.onload = () => {
        this.draw()
      }
    }
    draw(){
      $context.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    jump(){ 
      if(!this.jumping){    
        this.y  -= this.jumpStrength 
       }else if(this.jumping){
        this.y  += this.jumpStrength 
        this.jumping=false
       }
    }
    newPos(){
      if(this.y < 330){
        this.y +=gravity 
      }
    }
    touch(obstacle){
      return(
        this.x < obstacle.x + obstacle.width&&
        this.x+this.width > obstacle.x &&
        this.y < obstacle.y + obstacle.height &&
        this.y + this.height > obstacle.y
      )
    }
  }

  class Policia {
      constructor(x,y) {
          this.x = x
          this.y = y
          this.width = 135
          this.height = 160
          this.hp = 4;
          this.img= new Image()
          this.img.src = "../images/policecat.png"          
      }
      draw() {
          this.x = this.x-1*generalSpeed 
          $context.drawImage(this.img, this.x, this.y, this.width, this.height)
      }
      damage(){
        this.hp--
      }
  }

  class Covid{
    constructor(x,y) {
        this.x = x
        this.y = y
        this.width = 85
        this.height = 85
        this.hp = 2;
        this.img= new Image()
        this.img.src = "../images/covid.png"          
    }
    draw() {
        this.x = this.x-1*generalSpeed 
        $context.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    damage(){
      this.hp--
    }
}

class Monster{
    constructor(x,y) {
        this.x = x
        this.y = y
        this.width = 120
        this.height = 220
        this.hp = 8 ;
        this.img= new Image()
        this.img.src = "../images/gatomalo.png"          
    }
    draw() {
        this.x = this.x-1*generalSpeed 
        $context.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    damage(){
      this.hp--
    }
}
  
  class Ramen {
      constructor(x,y) {
        this.x = x 
        this.y = y
        this.width = 70
        this.height = 70
        this.img = new Image()
        this.img.src = "../images/ramen.png"
     }
     draw() {
         this.x--
         $context.drawImage(this.img, this.x, this.y, this.width, this.height)
     }
  }
      
class Arma{
  constructor(x,y){
    this.x=x
    this.y=y
    this.width=20
    this.height=20
    this.img=new Image();
    this.img.src="../images/naruto.png"
  }
  draw(){
    this.x += 4;
    $context.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  touch(obstacle){
    return  (this.x < obstacle.x + obstacle.width) && 
            (this.x + this.width > obstacle.x) && 
            (this.y < obstacle.y + obstacle.height) && 
            (this.y + this.height > obstacle.y)
  }
}

class Barras{
  constructor(x,y){
    this.x=x
    this.y=y
    this.width=47
    this.height=25
    this.img=new Image();
    this.img.src="../images/barraa.png"
  }
  draw(){
    this.x -=5  
    $context.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
}

class Cuchillo extends Barras{
  constructor(x,y){
    super(x,y)
    this.width = 90
    this.height = 20
    this.img=new Image()
    this.img.src= "../images/cuchillo.png"
    this.img.onload = () => {
        this.draw
    }
  }
}