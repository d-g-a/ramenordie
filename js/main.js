const board = new Background()
const board2 = new Level2()
const board3= new Level3()
const taro = new Character(50,330)
const policia = new Policia()
const virus = new Covid()
const monster = new Monster()
const ramen = new Ramen()
const naruto = new Arma()


    
//btn start principal  page
const btnCredit=document.querySelector(".creditbtn")
const btnBack=document.querySelector(".back");
const btnStart=document.querySelector(".start");
const canvasClass=document.querySelector(".canvas")

const main=document.querySelector("main")
const credit=document.querySelector(".credit")

btnCredit.addEventListener("click",()=>{
  main.classList.add("invisible")
  credit.classList.remove("invisible")
  credit.classList.add("visible")
})

btnBack.addEventListener("click",()=>{
  main.classList.remove("invisible")
  main.classList.add("visible")
  credit.classList.remove("visible")
  credit.classList.add("invisible")
})

btnStart.addEventListener("click",()=>{
  main.classList.add("invisible")
  canvasClass.classList.remove("invisible")
  canvasClass.classList.add("visible")
})