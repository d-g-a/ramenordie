const board = new Background()
const board2 = new Level2()
const board3= new Level3()
const taro = new Character(50,330)
const policia = new Policia()
const virus = new Covid()
const monster = new Monster()
const ramen = new Ramen()
const naruto = new Arma()
const themeSong = new Music()


    
//btn start principal  page
const btnCredit=document.querySelector(".credit-btn")
const btnBack=document.querySelector(".back");
const btnStart=document.querySelector(".start");
const btnStartGame=document.querySelector(".start-game-btn")
const canvasClass=document.querySelector(".canvas")
const btnTop=document.querySelector(".top");


const main=document.querySelector("main")
const credit=document.querySelector(".credit")
const instruction=document.querySelector(".instruction")

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
  instruction.classList.remove("invisible")
  instruction.classList.add("visible")
})

btnStartGame.addEventListener("click",()=>{
  instruction.classList.remove("visible")
  instruction.classList.add("invisible")
  canvasClass.classList.remove("invisible")
  canvasClass.classList.add("visible")
})

btnTop.addEventListener("click",()=>{
  location.reload();
})