let aurora = document.querySelector('#aurora1')
let stars = document.querySelector('#stars')
let moon = document.querySelector('#moon')
let moto = document.querySelector('#moto')
let project = document.querySelector('#project')
let scrollImg = document.querySelector('#scroll')
let cloud = document.querySelector('#cloud')
let building1 = document.getElementById('building1')
let building2 = document.getElementById('building2')
let building3 = document.getElementById('building3')
let building4 = document.getElementById('building4')
let building5 = document.getElementById('building5')
let building6 = document.getElementById('building6')
let building7 = document.getElementById('building7')
let building8 = document.getElementById('building8')
let building9 = document.getElementById('building9')

let text1 = document.getElementById('text1')
let text2 = document.getElementById('text2')
let subway = document.getElementById('subway')
let paperPlane = document.querySelector('#paper_plane')

let logo = document.querySelector('#logo_img')
let sec2H1 = document.querySelector('#sec2 h1')
let sec2P = document.querySelector('#sec2 p')
let name1 = document.querySelector('#name1')
let name2 = document.querySelector('#name2')
let name3 = document.querySelector('#name3')

let Q = document.querySelector('#Q')
let doorLeft = document.querySelector('#door_left')
let doorRight = document.querySelector('#door_right')

let person1H2 = document.querySelector('#sec4 h2.person1')
let person1P = document.querySelector('#sec4 p.person1')

let person2H2 = document.querySelector('#sec4 h2.person2')
let person2P = document.querySelector('#sec4 p.person2')

let person3H2 = document.querySelector('#sec4 h2.person3')
let person3P = document.querySelector('#sec4 p.person3')

let sec5H1 = document.querySelector('#sec5 h1')
let sec5H5 = document.querySelector('#sec5 h5')

let topBtn = document.querySelector('#top_btn')
topBtn.addEventListener("click", (e) => {
    document.querySelector("#sec1").scrollIntoView({ behavior: "smooth" });
  });

setTimeout(() => {
    moto.style.opacity = 1;
}, 100)
setTimeout(() => {
    project.style.opacity = 1;
}, 1400)

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    console.log("scrollY", value);

    stars.style.left = value * 0.25 + 'px';
    

    if(value < 200 && value > 0) {
        
        topBtn.style.opacity = '0'
    }
    if(value > 200) {
        cloud.style.transition = 'left 4s ease'
        cloud.style.left = 1 + 'vw';
        topBtn.style.opacity = '0.7'
    }
    if(value > 400){
        building1.style.top = '13vw'
        building4.style.top = '13vw'
    }
    if(value > 500){
        building9.style.top = '13vw'
    }
    if(value > 600){
        building6.style.top = '13vw'
    }
    if(value > 800){
        building2.style.top = '13vw'
    }
    if(value > 700){
        building8.style.top = '13vw'
    }
    if(value > 1390) {
        building3.style.top = '13vw'
        building7.style.top = '13vw'
    }
    if(value > 1300) {
        building5.style.top = '13vw'
    }

    if(value > 300) {
        paperPlane.style.left = '-15vw'
        paperPlane.style.top = '30vw'
    }

    if(value > 400) {
        this.setTimeout(() => {
            logo.style.opacity = 1;
            sec2H1.style.opacity = 1;
        }, 100)
    }
    if(value > 500) {
        this.setTimeout(() => {
            sec2P.style.opacity = .9;
        }, 300)
        
    }
    if(value > 600) {
        name1.style.opacity = .6;
        name1.style.top = '29vw';
        setTimeout(() => {
            name2.style.opacity = .6;
            name2.style.top = '31vw';
        }, 500)

        setTimeout(() => {
            name3.style.opacity = .6;
            name3.style.top = '33vw';
        }, 1000)
    }

    if(value > 2000) {
        this.setTimeout(() => {
            text1.style.left = '9vw'
            text1.style.opacity = 1;
            text2.style.left = '9vw'
            text2.style.opacity = 1;
        }, 100)
        
    }

    if(value > 2500) {
        subway.style.animation = 'subway 7s ease'
    }

    if(value > 4400) {
        Q.style.left = '5vw'
    }

    if(value > 6300) {
        person1H2.style.opacity = 1;
        setTimeout(() => {
            person1P.style.opacity = 1;
        }, 500)
    }
    if(value > 7500) {
        person2H2.style.opacity = 1;
        setTimeout(() => {
            person2P.style.opacity = 1;
        }, 500)
    }
    if(value > 8200) {
        person3H2.style.opacity = 1;
        setTimeout(() => {
            person3P.style.opacity = 1;
        }, 500)
    }


    if(value > 9000) {
        doorLeft.style.left = 24.5 + 'vw'
        doorRight.style.left = 61.5 + 'vw'

        this.setTimeout(() => {
            sec5H1.style.opacity = 1;
            sec5H5.style.opacity = 1;
        }, 500)
    }



})



