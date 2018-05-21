'use strict';
let stringArray = [
  'Хотите жить в доме по проекту, который вы создали самостоятельно?',
  'Вы готовы создать проект дома своей мечты?',
  'Хотите начать карьеру дизайнера и не знаете с чего начать?'
];
let CharTimeout = 150;
let StoryTimeout = 2000;
let sliderHeader = document.querySelectorAll('.header-slide');
let currentslide = 0;
let slideTime = setInterval(slideVideoLeft,7000);
let slideReviews = document.querySelectorAll('.video-slide');
let slideImg = document.querySelectorAll('.img-slide');
let slideTimeImg = setInterval(slideImgLeft,7000);
let currentWidthSlideImg =0;
let currentWidthSlide = 0;
let leftBtnSlide = document.querySelector('.video-control__left');
let rightBtnSlide = document.querySelector('.video-control__right');
let leftBtnSlideImg = document.querySelector('.slider-control__left');
let rightBtnSlideImg = document.querySelector('.slider-control__right');
let divVideoSlide = document.querySelector('.slider-video');
let pictureSlider = document.querySelector('.picture-slider');

pictureSlider.addEventListener('touchstart',swpaplider);

  function swpaplider (startevt) {
    pictureSlider.addEventListener('touchend', touchend);
    let startCord = startevt.changedTouches[0].clientX;
    function touchend (evt){
      let endCord =  evt.changedTouches[0].clientX;
      let shift = startCord - endCord;
      if (shift > 0){
        slideImgLeft();
      } else {
        slideImgRight();
      }
      pictureSlider.removeEventListener('touchend', touchend);
    }
  }

setInterval(nextSlide,4000);


leftBtnSlide.addEventListener('click', function(){
  slideVideoRight();
  clearInterval(slideTime);
});
rightBtnSlide.addEventListener('click', function(){
  slideVideoLeft();
  clearInterval(slideTime);
});
leftBtnSlideImg.addEventListener('click', function(){
  slideImgRight();
  clearInterval(slideTimeImg);
});
rightBtnSlideImg.addEventListener('click', function(){
  slideImgLeft();
  clearInterval(slideTimeImg);
});

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
var massiveItemCount =  stringArray.length;
var currentStory     = -1;
var currentLength    = 0;
var spanPrint     = document.querySelector('.main-header__print');



  runTheTicker();

function runTheTicker() {
  let myTimeout;
  if (currentLength === 0) {
    currentStory++;
    currentStory = currentStory % massiveItemCount;

  }
  var storySummary = stringArray[currentStory].replace(/"/g,'-');
  spanPrint.innerHTML = storySummary.substring(0,currentLength);
  if (currentLength !== storySummary.length) {
    currentLength++;
    myTimeout = CharTimeout;
  } else {
    currentLength = 0;
    myTimeout = StoryTimeout;
  }
  setTimeout("runTheTicker()", myTimeout);
}
function slideVideoLeft() {
  if(currentWidthSlide <= -900){
    currentWidthSlide = 100
  }
  currentWidthSlide -= 100;
  for (let i = 0; i < slideReviews.length; i++) {
    slideReviews[i].style.transform = 'translateX(' + currentWidthSlide + '%)';
    slideReviews[i].style.transition = '2000ms';
    if(currentWidthSlide <= -200){
      divVideoSlide.style.height = slideReviews[2].offsetHeight + 'px';
    } else if (currentWidthSlide === -100){
      divVideoSlide.style.height = slideReviews[1].offsetHeight + 'px';
    } else{
      divVideoSlide.style.height = slideReviews[0].offsetHeight + 'px';
    }
  }
}
function slideImgLeft() {

  if(currentWidthSlideImg <= -800){
    currentWidthSlideImg = 100
  }
  currentWidthSlideImg -= 100;
  for (let i = 0; i < slideImg.length; i++) {
    slideImg[i].style.transform = 'translateX(' + currentWidthSlideImg + '%)';
    slideImg[i].style.transition = '2000ms';
  }
}
function slideImgRight() {

  if(currentWidthSlideImg >= 0){
    currentWidthSlideImg = -100
  }
  currentWidthSlideImg += 100;
  for (let i = 0; i < slideImg.length; i++) {
    slideImg[i].style.transform = 'translateX(' + currentWidthSlideImg + '%)';
    slideImg[i].style.transition = '2000ms';
  }
}
function slideVideoRight() {
  if(currentWidthSlide >= 0){
    currentWidthSlide = -100
  }
  currentWidthSlide += 100;
  for (let i = 0; i < slideReviews.length; i++) {
    slideReviews[i].style.transform = 'translateX(' + currentWidthSlide + '%)';
    slideReviews[i].style.transition = '2000ms';
    if(currentWidthSlide <= -200){
      divVideoSlide.style.height = slideReviews[2].offsetHeight + 'px';
    } else if (currentWidthSlide === -100){
      divVideoSlide.style.height = slideReviews[1].offsetHeight + 'px';
    } else{
      divVideoSlide.style.height = slideReviews[0].offsetHeight + 'px';
    }
  }
}
let tarifiLink = document.querySelectorAll('.head-top__menu a');
let gridId = document.querySelector('#grad');
let tarifiId = document.querySelector('#tarifiId');
let otziviId = document.querySelector('#otzivi');
let heightLink = 0;
let btnStart = document.querySelector('.btn--start');
let btnOffer = document.querySelector('.btn--offer');

tarifiLink.forEach(function(item) {
item.addEventListener('click',function(evt) {
 let heightTop = 0;
  if(item.hash === '#tarifiId'){
    evt.preventDefault();
   heightLink = tarifiId.offsetTop;
} else if (item.hash === '#otzivi'){
      evt.preventDefault();
   heightLink = otziviId.offsetTop;
} else if (item.hash === '#grad'){
        evt.preventDefault();
   heightLink = gridId.offsetTop;
}
  function topset(){
    if(heightTop > heightLink -50){
      clearInterval(intervalOff)
    }
    heightTop+=50;
    window.scrollTo(0,heightTop);
  }
  let intervalOff = setInterval(topset, 13);
  })
});

btnStart.addEventListener('click', function(evt) {
  let heightTop = window.pageYOffset;
  evt.preventDefault();
  heightLink = gridId.offsetTop;
  function topset(){
    if(heightTop > heightLink -50){
      clearInterval(intervalOff)
    }
    heightTop+=40;
    window.scrollTo(0,heightTop);
  }
  let intervalOff = setInterval(topset, 23);
});
btnOffer.addEventListener('click', function(evt){
  let heightTop = window.pageYOffset;
  evt.preventDefault();
  heightLink = tarifiId.offsetTop;
  function topset() {
    if(heightTop > heightLink -50){
      clearInterval(intervalOff)
    }
    heightTop+=40;
    window.scrollTo(0,heightTop);
  }
  let intervalOff = setInterval(topset, 23);
});

