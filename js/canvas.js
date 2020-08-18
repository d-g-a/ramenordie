const $canvas = document.querySelector('canvas')
const $context = $canvas.getContext('2d')
const $button=document.querySelector("button")

const gravity = 4
let intervalId, frames = 0
const obstacles = []
const covid = []
const monsters = []
const ingredientes = []
let score = 0 
let platforms = []
const shoots = []
const ataques = []
let generalSpeed = 1

