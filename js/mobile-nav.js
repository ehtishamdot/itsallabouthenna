// const navSlide = () => {
//     const burger = document.querySelector('.ahti-nav-burger');
//     const nav = document.querySelector('.ahti-hero-links');
//     const btn = document.querySelector('.ahti-hero-btn');
//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');
//         btn.classList.toggle('nav-active-right');
//     });
// }

// let burger = document.getElementById('nav-links');
// if(burger.style.display == "block"){
//     burger.style.display="none";
// }
// else{
//     burger.style.display="block";
// }


function navSlider() {
    var linksMedia =window.matchMedia("(max-width:768px)")
    var x = document.getElementById("nav-links");
    if(linksMedia.matches)
    {
      if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
      }
      else{
        x.style.visibility = "visible";
      }
      if (x.style.opacity === "1") {
        x.style.opacity = "0";
      } else {
        x.style.opacity = "1";
      }
    } 
  }


