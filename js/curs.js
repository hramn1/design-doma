

let stringArray = [
'создать проект дома своей мечты?',
'начать карьеру дизайнера интерьеров?'
]
let CharTimeout = 150;
let StoryTimeout = 2000;

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

function startTicker(){
	 massiveItemCount =  stringArray.length;
	 currentStory     = -1;
	 currentLength    = 0;
	 spanPrint     = document.querySelector('.main-header__print');
	runTheTicker();     
}
function runTheTicker(){
	let myTimeout;  
	// Переход к следующему элементу
	if(currentLength == 0){
		currentStory++;
		currentStory      = currentStory % massiveItemCount;
		 storySummary      = stringArray[currentStory].replace(/"/g,'-');      
	}
	// Располагаем текущий текст в анкор с печатанием
	spanPrint.innerHTML = storySummary.substring(0,currentLength);
	// Преобразуем длину для подстроки и определяем таймер
	if(currentLength != storySummary.length){

		currentLength++;
		myTimeout = CharTimeout;
		
	} else {
		currentLength = 0;
		myTimeout = StoryTimeout;
	}
	// Повторяем цикл с учетом задержки
	setTimeout("runTheTicker()", myTimeout);
}


startTicker();