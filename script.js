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
    scrolltrigger:{
        trigger:".restp",
        markers:true,
    },
    
    duration: 4,
    text: "Restore Your Memories BY the help of ai",
    delimiter:"",
    ease: "none",
  });