var btnAnimate = document.querySelector('.home__animate');
var skillArea = document.querySelector('.item__header--skill');
var skillItemLine = document.querySelectorAll('.skill__itemline');
setInterval(function(){
    btnAnimate.classList.toggle('active');
}, 2000)

window.addEventListener('scroll', function(){
    var y = skillArea.offsetTop - 600;
    if(this.scrollY > y){
        for(key in skillItemLine){
            skillItemLine[key].classList.add('active');
        }
    }
    else{
        for(key in skillItemLine){
            skillItemLine[key].classList.remove('active');
        }
    }
}, false)




// init Isotope
var $grid = $('.portfolio__filter').isotope({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.artwork__img',
    layoutMode: 'masonry'
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });


    
