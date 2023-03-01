const tl = gsap.timeline({defaults: {ease: "power1.out"}})

tl.to(".text", { y: "0%", durations: 1, stagger: 0.25 })
tl.to(".slider", { y: "-100%", durations: 1.5, delay: 0.5 })
tl.to(".intro", { y:"-100%", durations: 1 }, "-=0.48")

tl.fromTo("nav", { opacity: 0 }, { opacity: 1, durations: 1 })
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, durations: 1 }, "-=0.45")