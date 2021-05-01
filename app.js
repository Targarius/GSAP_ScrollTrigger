gsap.fromTo(".baseline", {y: "100%"}, {y:"0%", duration: 1});

let tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".section3",
        start:"top center",
        markers: true,
        toggleActions: "play none none none"
    }
})

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".section4",
        start:"top top",
        pin: true,
        markers: true,
        toggleActions: "play reverse none none"
    }
})

gsap.to(".left", 
    {scrollTrigger:{
        trigger: ".section2",
        start:"top center",
        markers: true,
        toggleActions: "play none none none"
    },
        opacity: 1,
        duration: 1.5    
    }
    );



    
tl.fromTo(".right", 
    {
        opacity: 0,
        y: "100%",
    },
    {
        opacity:1,
        y: "0%",
        duration: 1
    }
    );

let isMenuOpen = false;

const moveMenu = gsap.to(
    ".fixedMenu", 
    {
        x: "100%",
        paused:true,
        reversed: true
    }
)

const toggleMenu = (e) => {
    e.preventDefault();
    if (!moveMenu.isActive()) {
        if (isMenuOpen) {
            isMenuOpen = false;
            moveMenu.reverse();
        } else {
            isMenuOpen = true;
            moveMenu.play();
        } 
    }
    
}
  