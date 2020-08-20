const $canvas = document.querySelector('#my-canvas')
const $context = $canvas.getContext('2d')
const $button=document.querySelector("button")

const gravity = 3.50
let intervalId
let frames = 0
let keys=[]
let obstacles = []
let covid = []
let monsters = []
let ingredientes = []
let score = 0 
let shoots = []
let ataques = []
let cuchillos=[]
let generalSpeed = 1

