function demofunction(){
    alert('thanks for rating this page')
};

// gsap.from('.gallary', {opacity: 1, ease: 'bounce', duration: 1, delay: 1, stagger: .6,});
gsap.from('.lop h1', {ease: 'bounce.out', duration: 1.3, opacity: 0, y: '-100%', });
gsap.from('.lip a i', {duration: 1.3,  ease: 'bounce', y: '-100%', });
let looptl = gsap.timeline({repeat: -1, yoyo: true, ease: 'power1.inout' });
looptl.to(".kim", {y: "-1rem", duration: 1});
gsap.to('.kai video', {repeat: 2, duration: 1});


var boy="cry"
var girol="boy"
console.log(boy + girol);


//animate in


  
const gap = document.querySelector(".gap");
const sol = document.querySelector("#sol");
//moving animation event
gap.addEventListener('mousemove', (e) => {
console.log(e.pageX, e.pageY);
var xAxis = (window.innerWidth / 250 - e.pageX / 135); 
var yAxis = (window.innerHeight / 200 - e.pageY / 135);
gap.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
gap.style.filter = 'blur(2)';
});

// //animate out
gap.addEventListener('mouseenter', e => {
    gap.style.transition = 'none';  
     
    });
    
    
    
    
    
    //animate out 
    gap.addEventListener("mouseleave", (e) => {
        gap.style.transition = "all 0.5s ease";
    gap.style.transform = `rotateY(360deg) rotatey(0deg)`;
    
    });
    const pap = document.querySelector(".pap");
const rol = document.querySelector("#rol");


//moving animation event
pap.addEventListener('mousemove', (e) => {
console.log(e.pageX, e.pageY);
var xAxis = (window.innerWidth / 200 - e.pageX / 135); 
var yAxis = (window.innerHeight / 700 - e.pageY / 135);
pap.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// //animate out
pap.addEventListener('mouseenter', e => {
    pap.style.transition = 'none';  
    
    
    
    });
    
    
    
    
    
    //animate out 
    pap.addEventListener("mouseleave", (e) => {
        pap.style.transition = "all 0.5s ease";
    pap.style.transform = `rotateY(360deg) rotatey(0deg)`;
    
    }); 




    const kip = document.querySelector(".kip");
const pol = document.querySelector("#pol");


//moving animation event
kip.addEventListener('mousemove', (e) => {
console.log(e.pageX, e.pageY);
var xAxis = (window.innerWidth / 1000 - e.pageX / 135); 
var yAxis = (window.innerHeight / 700 - e.pageY / 135);
kip.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// //animate out
kip.addEventListener('mouseenter', e => {
    kip.style.transition = 'none';  
    
    
    
    });
    
    
    
    
    
    //animate out 
    kip.addEventListener("mouseleave", (e) => {
        kip.style.transition = "all 0.5s ease";
    kip.style.transform = `rotateY(360deg) rotatey(0deg)`;
    
    });


const lops = document.querySelector(".lops")
const bars = document.querySelector('.bars')
bars.addEventListener('click', (e) =>{
    lops.classList.toggle('hide');
});








 








