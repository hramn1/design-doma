'use strict'

let stringArray = [
'создать проект дома своей мечты?',
'начать карьеру дизайнера интерьеров?'
]

let sliderHeader = document.querySelectorAll('.header-slide');

setInterval(nextSlide,4000);

let currentslide = 0;

function nextSlide(){
  if(currentslide > 7){
    currentslide = 0;
    sliderHeader[7].classList.remove('showing');
  }
  sliderHeader[currentslide].classList.add('showing');
  if(currentslide>0){
    sliderHeader[currentslide-1].classList.remove('showing');
  }
  currentslide++
}