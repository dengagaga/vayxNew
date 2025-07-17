const animation = lottie.loadAnimation({

    container: document.getElementById('lottie-animation'), // контейнер для анимации

    renderer: 'svg', // тип рендерера (может быть 'svg', 'canvas' или 'html')

    loop: false, // зацикливание анимации

    autoplay: false, // автоматический запуск анимации

    path: './js/data.json',

    

  });

 
  let lastExecution = 0;
  const delay = 800;
  function start() {
    const now = Date.now();
    if (now - lastExecution < delay) {
      return;
    }
    lastExecution = now;

    animation.goToAndStop(0, true);
    animation.play();

    

  }



  function stop() {

    animation.stop(); 

    

  }

  // setTimeout(() => {

  //   start();

  // }, 1000); 

  setTimeout(() => {

    stop()

  }, 1000); 

 

  const animationContainer = document.getElementById('lottie-animation');



animationContainer.addEventListener('mouseover', start);

// animationContainer.addEventListener('mouseout', stop);

