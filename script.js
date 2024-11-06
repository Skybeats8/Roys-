// Add any additional JavaScript animations or interactions here
document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded Successfully");
});
alert("Welcome to Roy's The Royal Interior")

--// let age=prompt("enter your age")

--// (while(age<=9){
--//  alert ("under age")
--// }




let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector('.slides');
  const slideCount = document.querySelectorAll('.slide').length;

  document.querySelector('.next').addEventListener('click', () => moveSlide(1));
  document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));

  function moveSlide(direction) {
    currentIndex = (currentIndex + direction + slideCount) % slideCount;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});
