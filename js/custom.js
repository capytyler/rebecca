const mediaQuery = window.matchMedia('(min-width: 768px)')
// Check if the media query is true
if (mediaQuery.matches) {
 

    let elements = document.getElementsByClassName('slideheight');
    
    
    for (const element of elements) {
    
        element.classList.add('vh-100');
    
      }

      console.log(elements)


      new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        onLeave: function(origin, destination, direction, trigger){
            var loading2 = new TimelineMax();
            loading2.fromTo('h2',3.5,{
                autoAlpha:0
            },{
                autoAlpha:1
            })
            .fromTo('p',2.5,{
                autoAlpha:0
            },{
                autoAlpha:1
            },'-=3.5')
            .fromTo('img',2.5,{
                autoAlpha:0
            },{
                autoAlpha:1
            },'-=3.5')
        }
    });


}


