const $canvas = document.querySelector('canvas')
const $context = $canvas.getContext('2d')
const $button=document.querySelector("button")

const gravity = 4
let intervalId, frames = 0
const obstacles = []
const ingredientes = []
let score = 0 
let platforms = []

