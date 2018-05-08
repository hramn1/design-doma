let videoStudent = document.querySelector('.graduates-inner__video video');
let stringArray = [
'создать проект дома своей мечты?',
'начать карьеру дизайнера интерьеров?'
]
let CharTimeout = 150;
let StoryTimeout = 2000;
let sliderHeader = document.querySelectorAll('.header-slide');
let currentslide = 0;
let slideTime = setInterval(slideVideoLeft,7000);
let slideReviews = document.querySelectorAll('.video-slide');
let currentWidthSlide = 0;
let leftBtnSlide = document.querySelector('.video-control__left');
let rightBtnSlide = document.querySelector('.video-control__right');

videoStudent.volume = 0.02;
videoStudent.setAttribute('autoplay',"");

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
function runTheTicker(){
  let myTimeout;  
  if(currentLength == 0){
    currentStory++;
    currentStory      = currentStory % massiveItemCount;
     storySummary      = stringArray[currentStory].replace(/"/g,'-');      
  }
  spanPrint.innerHTML = storySummary.substring(0,currentLength);

  if(currentLength != storySummary.length){
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
  for (var i = 0; i < slideReviews.length; i++) {
    slideReviews[i].style.transform = 'translateX(' + currentWidthSlide + '%)';
    slideReviews[i].style.transition = '2000ms';
  }

}
function slideVideoRight() {
  if(currentWidthSlide >= 0){
    currentWidthSlide = -100
  }
  currentWidthSlide += 100;
  for (var i = 0; i < slideReviews.length; i++) {
    slideReviews[i].style.transform = 'translateX(' + currentWidthSlide + '%)';
    slideReviews[i].style.transition = '2000ms';
  }
}
// let vvg = document.querySelector('.btn--offer')

// vvg.addEventListener('click', function (evt){
// 	evt.preventDefault();
	
// 	var y = 500;
// 	var g = function(){ 
// 				if(y===0){
// 					clearInterval(b)
// 				}

// 		y-=50;

// 		window.scrollTo(0,y)


		
// 	}
// 	var b =	setInterval(g, 50);
// })
let tarifiLink = document.querySelectorAll('.head-top__menu a');
tarifiLink.forEach(function(item){
item.addEventListener('click',function(){
	var id = item.href
		console.log(id)
})
})

function topset(evt){
	evt.preventDefault();

}