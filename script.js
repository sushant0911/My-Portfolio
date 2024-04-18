let slider = document.getElementById("slider");
let sliderContainer = document.getElementById("slider-container");
let body = document.body;

let preloader = document.getElementById("preloader");

// Dark Theme Toggler

sliderContainer.addEventListener("click", () => {
    body.classList.toggle('dark');
    sliderContainer.classList.toggle('justifyContentEnd');
    if(sliderContainer.classList.contains('justifyContentEnd')){
        sliderContainer.style.backgroundColor = 'rgb(193, 193, 193)';
        slider.style.backgroundColor = 'rgb(37, 37, 37)';
        slider.style.color = "rgb(255,255,255)";
        slider.innerHTML = '<i class="far fa-moon"></i>';
    }
    else{
        sliderContainer.style.backgroundColor = 'rgb(244, 244, 244)';
        slider.style.backgroundColor = 'rgb(255, 196, 0)';
        slider.style.color = "rgb(255,255,255)";
        slider.innerHTML = '<i class="far fa-sun"></i>';
    }
})

// To set the preloader page

window.addEventListener('load', function() {
  setTimeout(function() {
    preloader.style.display = 'none';
    preloader.style.transition = '3s ease-in-out';
  }, 2000); 
})
