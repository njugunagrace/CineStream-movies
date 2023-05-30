


document.addEventListener('DOMContentLoaded', () => {
    //------ Slider Begin
      const slider = document.querySelector('.movie-slider');
      const CaroSlider = new MicroSlider(slider, { indicators: true, indicatorText: '' });
      const hammer = new Hammer(slider);
      const CaroSTimer = 1000;
      let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
    //------- Mouseenter Event
      slider.onmouseenter = function(e) {
          clearInterval(CaroAutoplay);
          console.log(e.type + ' mouse detected');
      }
    //----- Mouseleave Event
      slider.onmouseleave = function(e) {
          clearInterval(CaroAutoplay);
          CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
          console.log(e.type + ' mouse detected');
      }
    //----- Mouseclick Event
      slider.onclick = function(e) {
          clearInterval(CaroAutoplay);
          console.log(e.type + ' mouse detected');
      }
  
    //------ Gesture Tap Event
      hammer.on('tap', function(e) {
          clearInterval(CaroAutoplay);
          console.log(e.type + ' gesture detected');
      });
    //----- Gesture Swipe Event
      hammer.on('swipe', function(e) {
          clearInterval(CaroAutoplay);
          CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
          console.log(e.type + ' gesture detected');
      });
    let slideLink = document.querySelectorAll('.slider-item');
    if (slideLink && slideLink !== null && slideLink.length > 0){
      slideLink.forEach( el => el.addEventListener('click', e => {
        e.preventDefault();
        let href = el.dataset.href;
        let target = el.dataset.target;
        if (href !== '#') window.open(href, target);
      }));
    }
    //---- Slider End
  });