class Background {
    constructor(){
        this.x=0;
        this.y=0;
        this.width=$canvas.width;
        this.height=$canvas.height;
        this.img=new Image();
        this.img.src="https://i.pinimg.com/564x/ce/76/d6/ce76d624606c4c6ba701350d3d4742cf.jpg"
        this.img.onload = () => {
            this.draw()
        }
    }

    draw(){
        this.x--
        if(this.x <-$canvas.width){
            this.x=0;
        }
        $context.drawImage(this.img,this.x, this.y, this.width, this.height)
        $context.drawImage(this.img, this.x+$canvas.width, this.y, this.width, this.height)
    }
}

class Character{
    constructor(x, y) {
      this.x=x
      this.y=y
      this.width=100
      this.height=150
      this.velY=0
      this.jumping=false
      this.jumpStrength = 200
      this.img=new Image()
      this.img.src="../images/catskating.png"
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
         this.jumping=true
       }else if(this.jumping){
        this.y  -= this.jumpStrength 
        this.jumping=false
       }
    }
    newPos(){
      if(this.y < 330){
        // this.x +=0.6
        this.y +=gravity + 3
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
          this.width = 115
          this.height = 140
          this.img= new Image()
          this.img.src = "../images/policia.png"          
      }
      draw() {
          this.x--
          $context.drawImage(this.img, this.x, this.y, this.width, this.height)
      }
  }
 
  class Ramen {
      constructor(x,y) {
        this.x = x 
        this.y = y
        this.width = 50
        this.height = 50
        this.img = new Image()
        this.img.src = "../images/Ramen.png"
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
    $context.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  newPos(){
    this.x +=10
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
