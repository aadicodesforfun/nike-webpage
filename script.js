const introVideo = document.querySelector('.intro');
const main = document.querySelector('#main');

// document.addEventListener('mousemove', function(dets) {
//     gsap.to('#cursor', {
//         x: dets.x - 5,
//         y: dets.y - 5,
//         duration: 0.6,
//     })
// })

gsap.to('.elem .moving',{
    translate: "-100%",
    duration: 6, 
    repeat: -1,
    ease: "linear",
})

document.querySelector('.view-more').addEventListener('mouseenter', () => {
    gsap.from('.arrow',{
        x: -40,
        opacity: 0,
        duration: 0.8,
    })
})

function mainPageAppears(){
    introVideo.style.display = "none";
    main.style.display = "block";
    nav.style.display = "flex";
}

// main.style.display = 'block' // comment this to play the intro video

let tl = gsap.timeline();

tl.to(introVideo, {
    delay: 1.5,
    duration: 6,
    onStart: () => {
        introVideo.play();
    }
})

tl.to(introVideo, {
    opacity: 0,
    duration: 1,
    onComplete: mainPageAppears,
})

tl.from('#main', {
    filter: "blur(10px)",
    duration: 1.5, 
    opacity: 0,
})

tl.from('nav', {
    opacity: 0,
    y: -40,
    duration: 1,
})

tl.from('.left',{
    y: 40,
    duration: 1, 
    opacity: 0,
},"-=0.5")

tl.from('.middle div', {
    y: 40, 
    duration: 1, 
    opacity: 0,
    stagger: 0.2,
},"-=1")

tl.from('.right .search', {
    duration: 1,
    opacity: 0,
}, "-=1")

tl.from('.right i',{
    y:40, 
    duration: 1,
    opacity: 0,
    stagger: 0.2,
},"-=1")

tl.from('.slogan-bottom h1', {
    x: 200,
    opacity: 0,
    duration: 1.5,
    ease: 'bounce.out'
},"-=1")

gsap.from('.page1 .view-more', {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    delay: 10, // make it 10 when the intro video is present or else 2
},)

gsap.from('.slogan-top', {
    opacity: 0,
    y: 60,
    duration: 1,
    delay: 10, //make it 10 when the intro video is present
})

// add event listerners for the menu 
document.querySelector('.new-btn').addEventListener('mouseenter', () => {
    document.querySelector('.new').style.display = "flex";
    gsap.fromTo('.new',
        {scaleY: 0, scaleX: 0.5 },
        {
        scaleY: 1,
        scaleX: 1,
        duration: 0.9,
        ease: "elastic.out(1, 0.5)"
    })
})

document.querySelector('.new-btn').addEventListener('mouseleave', () => {
    document.querySelector('.new').style.display = "none";
})

document.querySelector('.men-btn').addEventListener('mouseenter', () => {
    document.querySelector('.men').style.display = "flex";
    gsap.fromTo('.men',
        {scaleY: 0, scaleX: 0.5 },
        {
        scaleY: 1,
        scaleX: 1,
        duration: 0.9,
        ease: "elastic.out(1, 0.5)"
    })
})

document.querySelector('.men-btn').addEventListener('mouseleave', () => {
    document.querySelector('.men').style.display = "none";
})

document.querySelector('.women-btn').addEventListener('mouseenter', () => {
    document.querySelector('.women').style.display = "flex";
    gsap.fromTo('.women',
        {scaleY: 0, scaleX: 0.5 },
        {
        scaleY: 1,
        scaleX: 1,
        duration: 0.9,
        ease: "elastic.out(1, 0.5)"
    })
})

document.querySelector('.women-btn').addEventListener('mouseleave', () => {
    document.querySelector('.women').style.display = "none";
})

document.querySelector('.kids-btn').addEventListener('mouseenter', () => {
    document.querySelector('.kids').style.display = "flex";
    gsap.fromTo('.kids',
        {scaleY: 0, scaleX: 0.5 },
        {
        scaleY: 1,
        scaleX: 1,
        duration: 0.9,
        ease: "elastic.out(1, 0.5)"
    })
})

document.querySelector('.kids-btn').addEventListener('mouseleave', () => {
    document.querySelector('.kids').style.display = "none";
})

document.querySelector('.sale-btn').addEventListener('mouseenter', () => {
    document.querySelector('.sale').style.display = "flex";
    gsap.fromTo('.sale',
        {scaleY: 0, scaleX: 0.5 },
        {
        scaleY: 1,
        scaleX: 1,
        duration: 0.9,
        ease: "elastic.out(1, 0.5)"
    })
})

document.querySelector('.sale-btn').addEventListener('mouseleave', () => {
    document.querySelector('.sale').style.display = "none";
})

gsap.from('.page2', {
    y: 100,
    scale: 0.6,
    scrollTrigger:{
        trigger: ".page2",
        scrub: true,
        stagger: 0.3,
        start: "top 90%",
        end: "top 50%"
    }
})

let elems = document.querySelectorAll('.elem');
let page2 = document.querySelector('.page2');
elems.forEach(function(el){
    el.addEventListener('mouseenter', ()=>{
        let bgImage = el.getAttribute('data-img');
        page2.style.backgroundImage = `url(${bgImage})`;
    })
})