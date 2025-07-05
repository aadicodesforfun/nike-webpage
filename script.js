const introVideo = document.querySelector('.intro');
const main = document.querySelector('#main');


// document.addEventListener('mousemove', function(dets) {
//     gsap.to('#cursor', {
//         x: dets.x - 5,
//         y: dets.y - 5,
//         duration: 0.6,
//     })
// })

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

main.style.display = 'block' // remove this to play the intro video

let tl = gsap.timeline();

// tl.to(introVideo, {
//     delay: 1.5,
//     duration: 6,
//     onStart: () => {
//         introVideo.play();
//     }
// })

// tl.to(introVideo, {
//     opacity: 0,
//     duration: 1,
//     onComplete: mainPageAppears,
// })

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

tl.from('.middle li', {
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
    delay: 2, // make it 10 when the intro video is present or else 2
},)

gsap.from('.slogan-top', {
    opacity: 0,
    x: -400,
    duration: 1,
    delay: 2, //make it 10 when the intro video is present
})