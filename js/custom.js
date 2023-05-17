new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    scrollHorizontally: true,
    onLeave: function(origin, destination, direction, trigger){
        var loading2 = new TimelineMax();
        loading2.fromTo('h2',2.5,{
            autoAlpha:0
        },{
            autoAlpha:1
        })
        .fromTo('p',2.5,{
            autoAlpha:0
        },{
            autoAlpha:1
        },'-=2.5')
        .fromTo('img',2.5,{
            autoAlpha:0
        },{
            autoAlpha:1
        },'-=2.5')
    }
});



document.addEventListener("DOMContentLoaded",function(){
    var loading = new TimelineMax();
    loading.fromTo('h2',2.5,{
        autoAlpha:0
    },{
        autoAlpha:1
    })
    .fromTo('p',2.5,{
        autoAlpha:0
    },{
        autoAlpha:1
    },'-=1.5')

})