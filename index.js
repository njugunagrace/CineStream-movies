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
  ​
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
  ​
     // Get the moving text element
     var movingText = document.getElementById('movingText');
     // Animation parameters
     var animationSpeed = 10; // Speed of animation (lower value = faster)
     var gradientOffset = 0; // Initial gradient offset
     // Start the animation
     function startAnimation() {
       setInterval(updateAnimation, animationSpeed);
     }
     // Update the animation by adjusting gradient offset
     function updateAnimation() {
       gradientOffset++;
       movingText.style.backgroundPosition = gradientOffset + 'px 0';
     }
     // Start the animation when the page loads
     window.onload = function() {
       startAnimation();
     };