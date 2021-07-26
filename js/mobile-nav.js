
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



  //Animation

var content = "If life is so blue, then select another colour from the rainbow";

var ele = "<span>" + content.split("").join("</span><span>") + "</span>";

$(ele)
  .hide()
  .appendTo("p")
  .each(function (i) {
    $(this)
      .delay(100 * i)
      .css({
        display: "inline",
        opacity: 0,
      })
      .animate(
        {
          opacity: 1,
        },
        100
      );
  });

 
