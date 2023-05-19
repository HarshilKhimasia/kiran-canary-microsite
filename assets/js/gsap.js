gsap.registerPlugin(ScrollTrigger)
let mm = gsap.matchMedia();
mm.add("(max-width: 1450px)", () => {
    // desktop setup code here...
  });

let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: ".lifespace",
        pin: false,   // pin the trigger element while active
        start: "50% bottom", // when the top of the trigger hits the top of the viewport
        end: "30%", // end after scrolling 500px beyond the start
        markers: false,
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar

    }
});

tl.to(".leaf", { x: 157, y: 0, rotate: -18, duration: 10, });

let tlleaf = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: ".about-us",
        pin: false,   // pin the trigger element while active
        start: "0% 50%", // when the top of the trigger hits the top of the viewport
        end: "100%", // end after scrolling 500px beyond the start
        markers: false,
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar

    }
});

tlleaf.to(".leaf-about", { x: -139, y: -241, rotate: 18, duration: 10, });
// 
let tlaccesLeaf = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: ".accessibility",
        pin: false,   // pin the trigger element while active
        start: "top 80%", // when the top of the trigger hits the top of the viewport
        end: "5%", // end after scrolling 500px beyond the start
        markers: false,
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar

    }
});

tlaccesLeaf.to(".accessibility-leaf", { x: -42, duration: 10, });

let tlbottomaccesLeaf = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: ".accessibility",
        pin: false,   // pin the trigger element while active
        start: "bottom 95%", // when the top of the trigger hits the top of the viewport
        end: "5%", // end after scrolling 500px beyond the start
        markers: false,
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar

    }
});

tlbottomaccesLeaf.to(".bottom-access-leaf", { y: 46, duration: 10, });

let tloverlookingLeaf = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: ".overlooking",
        pin: false,   // pin the trigger element while active
        start: "top 80%", // when the top of the trigger hits the top of the viewport
        end: "10%", // end after scrolling 500px beyond the start
        markers: false,
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar

    }
});

tloverlookingLeaf.to(".overlooking-leaf", { x: -30, duration: 10, });

mm.add("(max-width: 1450px)", () => {
    let tlecoLeaf = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: ".ecoluxe",
            pin: false,   // pin the trigger element while active
            start: "top 80%", // when the top of the trigger hits the top of the viewport
            end: "10%", // end after scrolling 500px beyond the start
            markers: false,
            scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    
        }
    });
    
    tlecoLeaf.to(".eco-leaf", { x: 150, duration: 10, });
  });
  mm.add("(max-width: 6000px) and (min-width: 1450px)", () => {
let tlecoLeaf = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: ".ecoluxe",
        pin: false,   // pin the trigger element while active
        start: "top 80%", // when the top of the trigger hits the top of the viewport
        end: "10%", // end after scrolling 500px beyond the start
        markers: false,
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar

    }
});

tlecoLeaf.to(".eco-leaf", { x: 34, duration: 10, });
});

let tlecobottomLeaf = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: ".ecoluxe",
        pin: false,   // pin the trigger element while active
        start: "20% top", // when the top of the trigger hits the top of the viewport
        end: "80%", // end after scrolling 500px beyond the start
        markers: false,
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar

    }
});

tlecobottomLeaf.to(".eco-bottom-leaf", { x: -30, duration: 10, });

mm.add("(max-width: 1450px)", () => {
    let tlworldLeaf = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: ".the-world",
            pin: false,   // pin the trigger element while active
            start: "top 80%", // when the top of the trigger hits the top of the viewport
            end: "30%", // end after scrolling 500px beyond the start
            markers: false,
            scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    
        }
    });
    
    tlworldLeaf.to(".world-leaf", { x: 72, duration: 10, });
  });
  mm.add("(max-width: 6000px) and (min-width: 1450px)", () => {
    let tlworldLeaf = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: ".the-world",
            pin: false,   // pin the trigger element while active
            start: "top 80%", // when the top of the trigger hits the top of the viewport
            end: "30%", // end after scrolling 500px beyond the start
            markers: false,
            scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    
        }
    });
    
    tlworldLeaf.to(".world-leaf", { x: 26, duration: 10, });
});

mm.add("(max-width: 1450px)", () => {
    let tlfooterLeaf = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: ".footer",
            pin: false,   // pin the trigger element while active
            start: "top bottom", // when the top of the trigger hits the top of the viewport
            end: "10%", // end after scrolling 500px beyond the start
            markers: false,
            scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    
        }
    });
    
    tlfooterLeaf.to(".footer-leaf", { x: 93, duration: 10, });
  });

  mm.add("(max-width: 6000px) and (min-width: 1450px)", () => {
    let tlfooterLeaf = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: ".footer",
            pin: false,   // pin the trigger element while active
            start: "top bottom", // when the top of the trigger hits the top of the viewport
            end: "10%", // end after scrolling 500px beyond the start
            markers: false,
            scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    
        }
    });
    
    tlfooterLeaf.to(".footer-leaf", { x: 13, duration: 10, });
});
