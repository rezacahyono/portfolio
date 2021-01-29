// toogle
window.addEventListener("scroll", function(){
    var header = document.querySelector("header")
    header.classList.toggle("sticky",window.scrollY > 0);
})

function toggle(){
    var header = document.querySelector("header")
    header.classList.toggle("active");
}
// bar progress
const kotlin = document.querySelector('.bar-kotlin')
const java = document.querySelector('.bar-java')
const android = document.querySelector('.bar-android')

var t1 = new TimelineLite()

t1.fromTo(kotlin, .65, {width: `calc(0% - 6px)`}, {width: `calc(75% - 6px)`, ease: Power4.easeOut})
    .fromTo(java, .65, {width: `calc(0% - 6px)`}, {width: `calc(80% - 6px)`, ease: Power4.easeOut})
    .fromTo(android, .65, {width: `calc(0% - 6px)`}, {width: `calc(80% - 6px)`, ease: Power4.easeOut})

const controll = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.about',
    triggerHook: 0
})
.setTween(t1)
.addTo(controll)



// click category
const showRequiredCategory = event => {
    const getId = event.id
    const links = document.querySelectorAll('.sertifikat-category button')
    for(i=0; i<links.length; i++){
        if(links[i].hasAttribute('class')){
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory =  document.querySelector(`.category-${getId}`)
    const categoris = document.querySelectorAll('div[class^="category-"]')
    for(i=0; i<categoris.length; i++){
        if(categoris[i].hasAttribute('class')){
            categoris[i].classList.remove('showCategory')
            categoris[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')
}
