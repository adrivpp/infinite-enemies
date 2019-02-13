'use strict'

const main = ()=> {
  const buildDom = (html)=> {
    const main = document.querySelector('main');
    main.innerHTML = html;
    return main;
  };

  const buildSplashScreen = ()=> {
    const splashScreen = buildDom(`
      <h1>Hello</h1>
      <section class="splash-screen">
        <h1>Eternal Enemies</h1>
        <button>Start</button>
      </section>
    `);

  };

  buildSplashScreen();

}

window.addEventListener('load', main);
console.log('hey');