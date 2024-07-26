//get the canvas element and its 2d drawing context
const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

//game settings
const paddlewidth = 10;
const paddleheight = 100;
const ballradius = 10;
const ballAcceleration = 0.1;//it determines the speed of the ball//
const paddleSpeed = 5;
const winningScore = 5;

//player paddle 
const player={
    
}