
let stringArray = [
'создать проект дома своей мечты?',
'начать карьеру дизайнера интерьеров?'
];
let CharTimeout = 150;
let StoryTimeout = 2000;
let sliderHeader = document.querySelectorAll('.header-slide');
let currentslide = 0;
let slideTime = setInterval(slideVideoLeft,7000);
let slideReviews = document.querySelectorAll('.video-slide');
let currentWidthSlide = 0;
let leftBtnSlide = document.querySelector('.video-control__left');
let rightBtnSlide = document.querySelector('.video-control__right');
let divVideoSlide = document.querySelector('.slider-video');
divVideoSlide.style.transition = '500ms'


setInterval(nextSlide,4000);
startTicker();

leftBtnSlide.addEventListener('click', function(){
  slideVideoRight();
  clearInterval(slideTime);
});
rightBtnSlide.addEventListener('click', function(){
  slideVideoLeft();
  clearInterval(slideTime);
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

function startTicker(){
   massiveItemCount =  stringArray.length;
   currentStory     = -1;
   currentLength    = 0;
   spanPrint     = document.querySelector('.main-header__print');
  runTheTicker();
}
function runTheTicker() {
  let myTimeout;
  if (currentLength === 0) {
    currentStory++;
    currentStory = currentStory % massiveItemCount;
    storySummary = stringArray[currentStory].replace(/"/g,'-');
  }
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
  }
  if(currentWidthSlide < -100){
    divVideoSlide.style.height = '350px'
  } else {
    divVideoSlide.style.height = '100%'
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
  }
  if(currentWidthSlide < -100){
    divVideoSlide.style.height = '350px';
  } else {
    divVideoSlide.style.height = '100%'
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

