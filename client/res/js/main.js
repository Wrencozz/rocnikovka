const header = document.querySelector("header");
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderImages = document.querySelectorAll('.slider-image');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const popupContainer = document.querySelector('.popup-container');
const popupContent = document.querySelector('.popup-content');
const popupImage = document.querySelector('.popup-image');
const popupClose = document.querySelector('.popup-close');
let slideIndex = 0;
let startX = null;






sliderImages[slideIndex].classList.add('active');


function nextSlide() {
  if (slideIndex === sliderImages.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  moveSlider();
}


function prevSlide() {
  if (slideIndex === 0) {
    slideIndex = sliderImages.length - 1;
  } else {
    slideIndex--;
  }
  moveSlider();
}


function moveSlider() {
    sliderWrapper.style.transform = `translateX(-${(100 / sliderImages.length) * slideIndex}%)`;
    document.querySelector('.slider-image.active').classList.remove('active');
    sliderImages[slideIndex].classList.add('active');
  
}


function showPopup(imageSrc) {
    popupImage.src = imageSrc;
    popupContainer.style.display = 'flex';
    }
    
   
    function hidePopup() {
    popupContainer.style.display = 'none';
    }
    
    
    sliderImages.forEach(image => {
    image.addEventListener('click', () => {
    showPopup(image.src);
    });
    });
    
    
    popupContainer.addEventListener('click', hidePopup);
    popupContent.addEventListener('click', event => {
    event.stopPropagation();
    });
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);


popupClose.addEventListener('click', hidePopup);
popupContainer.style.display = 'none';

sliderWrapper.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });
  
  sliderWrapper.addEventListener('touchmove', e => {
    if (startX === null) {
      return;
    }
    const moveX = e.touches[0].clientX;
    const diffX = startX - moveX;
    if (diffX > 0) {
      
      nextSlide();
    } else {
     
      prevSlide();
    }
    startX = null;
  });




window.addEventListener("scroll",function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};













