var arrow = document.querySelector(".arro")
var restored1 = document.getElementById("#fir")
var arr = document.querySelector(".arr")




arrow.addEventListener("click",function(){




    var tl = gsap.timeline()
    tl.to("#fir"  ,{
   
        x:90,
        duration:0.3,
        ease:"power1"
        

    } ,"a")
    tl.to(arrow  ,{
   
        x:-700,
       ease:"bounce.out",
        // opacity:"0"
        display:"none"

    } ,"a")
    
    tl.to(".arr",{
        x:-50,
        ease:"power1",
        opacity:"1"
    })
  

})

arr.addEventListener("click", function(events){
   
   

    
    gsap.to("#fir",{
        x:0,
    })
    gsap.to(".arr",{
        x:50,
        ease:"bounce.out",
        opacity:"0"
    })
    gsap.to(arrow  ,{
   
        x:0,
       ease:"power1",
    //    opacity:"1"
    display:"block",
    duration:"2"


    } )
    
})





gsap.from(".we",{
   x:"200",
   duration:2,
   
})
gsap.from(".ur",{
    opacity:0,
    y:20,
    duration:1.5
})

gsap.from(".ph",{
    x:-200,
    duration:2
})

// gsap.to(".restp", {
//     scrollTrigger: {
//     trigger:".restp" ,// start animation when ".box" enters the viewport
//     markers: true,
//     start:"top 600px",
//     end:"bottom 300px",
//     toggleActions: "play play reverse play" ,},
//     duration :10,

//     x: 500,

//   });
//replaces yourElement's text with "This is the new text" over the course of 2 seconds
gsap.to(".restp", {
    duration: 3,
    text: "Restore Your Memories BY the help of ai",
    delimiter:"g",
    ease: "bounce.out",

    scrollTrigger:{
        trigger:".restp",
        // markers:true,
    },
    
  
  });