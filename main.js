'use strict'

const main = ()=> {
  const buildDom = (html)=> {
    const main = document.querySelector('main');
    main.innerHTML = html;
    return main;
  };

  const buildSplashScreen = ()=> { //construye la pantalla de inicio
    const splashScreen = buildDom(`
      <h1>Hello</h1>
      <section class="splash-screen">
        <h1>Eternal Enemies</h1>
        <button>Start</button>
      </section>
    `);
    const startButton = document.querySelector('button');
    startButton.addEventListener('click', buildGameScreen); //para pasar a la pantalla de juego

  };

  const buildGameScreen = ()=> { //construye la pantalla del juego
    const gameEscreen = buildDom(`
      <section class="game-screen">
        <canvas></canvas>
      </section>
    `);
    const width = document.querySelector('.game-screen').offsetWidth;
    const height = document.querySelector('.game-screen').offsetHeight;

    const canvasElement = document.querySelector('canvas');

    //le asigna el height y el width del padre al canvas
    canvasElement.setAttribute('width', width); 
    canvasElement.setAttribute('height', height);

    

    //setTimeout(buildGameOver,3000); //para probar si pasa a la pantalla del game over. despues se quita
    const game = new Game(canvasElement);
    game.startLoop(); //esto empezara el juego

    const setPlayerDirection = (event) => {
      if (event.code === 'ArrowUp') {
        game.player.setDirection(-1);
      } else if (event.code === 'ArrowDown') {
        game.player.setDirection(1);
      }
    }
    document.addEventListener('keydown', setPlayerDirection);
  };

  const buildGameOver = () => { //construye la pantalla del game over
    const buildGameOverScreen = buildDom(`
      <section class="game-over"</section>
        <h1>Game Over Screen</h1>
        <button>Restart</button>
      </section>
    `);
    const restartButton = document.querySelector('button');
    restartButton.addEventListener('click', buildGameScreen); //para pasar a la pantalla de juego al dar restart
  };

  buildSplashScreen();

};

window.addEventListener('load', main);
console.log('hey');