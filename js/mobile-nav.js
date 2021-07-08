
  // burger animation
function burgerActive(){
  const burger = document.querySelector('.ahti-nav-burger');
  burger.classList.toggle('toggle'); 

}

  //  nav slider
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

  
  
