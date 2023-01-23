const result = fetch("https://web-series-quotes-api.deta.dev/quote/?count=5")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    return data;
  });

const bindData = async (position) => {
  const a = await result;   

  q.innerHTML = a[position].quote;
  author.innerHTML = a[position].author
  series.innerHTML = a[position].series

};

let slidePosition = 0;
const sliders = document.querySelectorAll('.slider-item');
const totalSliders  = sliders.length;
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
const q = document.querySelector('.quotes');
const author = document.querySelector('#authorname');
const series = document.querySelector('#seriesname');
bindData(slidePosition);



btnPrev.addEventListener('click', function previous(){
    prevSlide();
});

btnNext.addEventListener('click', function next(){    
    nextSlide();
});

function updatePosition(){
    sliders.forEach((slide) => {
        slide.classList.remove('active');
        slide.classList.add('hidden');
    })
    sliders[slidePosition].classList.add('active');
}

function prevSlide(){       
    if(slidePosition==0){
        slidePosition = totalSliders-1
    }else{
        slidePosition--;
    }  
    bindData(slidePosition);
    updatePosition();
}

function nextSlide(){
    console.log(slidePosition);
    if(slidePosition==totalSliders-1){
        slidePosition = 0
    }else{
        slidePosition++
    }    
    bindData(slidePosition);
    updatePosition();
}

setInterval(() =>{
    nextSlide();


}, 2000)

clearInterval(1)




