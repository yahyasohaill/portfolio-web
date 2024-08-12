const hamMenu = document.querySelector('.ham__menu');
const offscreen__menu = document.querySelector('.off-screen__menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offscreen__menu.classList.toggle('active');
    console.log(hamMenu);
    console.log(offscreen__menu);
});

const slides = document.querySelectorAll(".slides img");
let slidesindex = 0;
let intervalid= null;
let heading = document.getElementById("web__name");
document.addEventListener("DOMContentLoaded",initalizeSlider)

function initalizeSlider(){
if(slides.length > 0){
    slides[slidesindex].classList.add('displaySlides');

}
}
function showslide(index){
    if(index >= slides.length){
        slidesindex = 0;
    }
    else if(index < 0 ){
        slidesindex = slides.length -1;
    }
    else if(index == 0  ){
        heading.textContent = "Netflix Clone:"
        p.textContent = "Here I cloned the UI of Netflix website.";
    }
    else if(index == 1){
        heading.textContent = "Food website:"
    p.textContent = "Here I built a UI of a Fo0d odering website.";
    
}
else if(index == 2){
    heading.textContent = "JS Dice Game:"
    p.textContent = "Just a simple JS dice game with minimal styles.";
    
}
else if(index == 3){
    heading.textContent = "Gym website:";
    p.textContent = "It was my first project.";
    
}
        slides.forEach(slide => {
            slide.classList.remove("displaySlides");
        });
        slides[slidesindex].classList.add("displaySlides");
    }
    // console.log(intervalid);
    function previousSlide(){
        clearInterval(intervalid);
        slidesindex--;
        showslide(slidesindex);
        
    }
    function nextSlide(){
        // clearInterval(intervalid);
        slidesindex++;
        showslide(slidesindex);
    }
    

