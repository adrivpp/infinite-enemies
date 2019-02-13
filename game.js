'use strict'

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.player;
    this.enemies = [];
  };

  startLoop() {
    this.player = new Player(this.canvas, 3);
    console.log('out of loop')//prueba
    const loop = ()=> {

      if(Math.random() > 0.97) {
        const y = Math.random()*this.canvas.height; //genera de manera random una y para los enemigos
        this.enemies.push(new Enemy(this.canvas, y)) //genera nuevos enemigos cada tanto
      }

      this.checkAllCollisions();
      //update
      this.updateCanvas();      
      //clear
      this.clearCanvas();
      //draw
      this.drawCanvas();

      window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop);
  };

  updateCanvas() {
    this.player.upDate();
    this.enemies.forEach((enemy) => {
      enemy.upDate();
    })
  };

  clearCanvas() {
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height); //limpia toda la pantalla del canvas
  };

  drawCanvas() {
    this.player.draw();
    this.enemies.forEach((enemy) => { //para cada enemigo lo pintamos
      enemy.draw();
    })

  }
  checkAllCollisions() {
    this.player.checkScreen();
  }

}