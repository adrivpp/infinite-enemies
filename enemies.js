'use strict'

class Enemy {
  constructor(canvas, y) {    
    this.size = 20;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = this.canvas.width;
    this.y = y; //sera random
    this.speed = 5;
    this.direction = -1;    
  }; 

  upDate() {
    this.x = this.x + this.direction*this.speed;
  };

  draw() { //pintar enemigos
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y - this.size/2, this.size, this.size); 
  };


}