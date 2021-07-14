  const searchLink =  document.querySelector('.col3 a')
  const search =  document.querySelector('.col3 .searchbar')
  const searchBox =  document.querySelector('.col3')
  
  var linksMedia =window.matchMedia("(max-width:1000px)")


  
    searchBox.addEventListener('mouseover' ,a=>{
        search.style.width='200px'
    })
    
    searchBox.addEventListener('mouseleave' ,a=>{
        search.style.width='0px'
    })
  
    

