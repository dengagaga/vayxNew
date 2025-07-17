const animationMobil = lottie.loadAnimation({
    container: document.getElementById('lottie-animation-mobil'), // контейнер для анимации
    renderer: 'svg', // тип рендерера (может быть 'svg', 'canvas' или 'html')
    loop: false, // зацикливание анимации
    autoplay: false, // автоматический запуск анимации
    path: './js/data.json',
    
  });
 
  function start() {
    animationMobil.play();
    
  }

  function stop() {
    animationMobil.stop(); 
    
  }
  setTimeout(() => {
    start();
  }, 1000); 
  setTimeout(() => {
    stop()
  }, 2000); 
 
  // const animationContainerMobil = document.getElementById('lottie-animation-mobil');

// animationContainerMobil.addEventListener('mouseover', start);
// animationContainer.addEventListener('mouseout', stop);
