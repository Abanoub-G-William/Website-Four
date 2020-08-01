const navBar = document.querySelector('.navbar');
const navBarA = document.querySelectorAll('.navbar a');
const aboutDivs = document.querySelectorAll('.about div');
const vidH = document.querySelectorAll('.video h1');

const about = document.querySelector('.about');
const video = document.querySelector('.video');
const testimonial = document.querySelector('.testimonial div');
const features = document.querySelector('.features');
const subscribe = document.querySelector('.subscribe');


const mainTestimonial = document.querySelector('.testimonial');


let testimonialState = 1;



let scrolling = false;


/***Change Navbar color ****/
function changeNavbarColors(color) {
    if (color == 'white') {
        navBar.style.backgroundColor = 'rgba(255, 255, 255, .9)';
        navBar.style.backdropFilter = 'blur(5px)'
        navBar.style.borderBottom = '1px solid rgba(0, 0, 0, .3)';

        navBar.style.color = 'black';

        navBarA.forEach((a) => {
            a.style.color = 'black'
        })
    } else if (color == 'black') {
        navBar.style.backgroundColor = 'rgba(0, 0, 0, .9)';
        navBar.style.backdropFilter = 'blur(5px)'
        navBar.style.color = 'white';
        navBar.style.borderBottom = '1px solid rgba(255, 255, 255, .3)';


        navBarA.forEach((a) => {
            a.style.color = 'white'
        })
    } else if (color == 'gray') {
        navBar.style.backgroundColor = 'rgba(151,151,151, .9)';
        navBar.style.backdropFilter = 'blur(5px)'
        navBar.style.color = 'white';
        navBar.style.borderBottom = '1px solid rgba(255, 255, 255, .3)';


        navBarA.forEach((a) => {
            a.style.color = 'white'
        })
    } else if (color == 'WhiteSmoke') {
        navBar.style.backgroundColor = 'rgba(246, 246, 246, .9)';
        navBar.style.backdropFilter = 'blur(5px)'
        navBar.style.borderBottom = '1px solid rgba(0, 0, 0, .3)';
        navBar.style.color = 'black';

        navBarA.forEach((a) => {
            a.style.color = 'black'
        })
    } else if (color == 'top') {
        navBar.style.backgroundColor = 'rgba(0, 0, 0, .2)';
        navBar.style.borderBottom = '1px solid rgba(255, 255, 255, .3)';
        navBar.style.color = 'white';

        navBarA.forEach((a) => {
            a.style.color = 'white'
        })
    }
}
/**************************/

/***Check Navbar position every .5Sec */
window.addEventListener('scroll', () => {
    scrolling = true
})

const mainTextAnim = (section) => {
    document.querySelector(`.${section} h4`).style.opacity = 1;
    document.querySelector(`.${section} h4`).style.transform = 'translateX(0px)';
    document.querySelector(`.${section} h1`).style.opacity = 1;
    document.querySelector(`.${section} h1`).style.transform = 'translateX(0px)';
    document.querySelector(`.${section} p`).style.opacity = 1;
    document.querySelector(`.${section} p`).style.transform = 'translateY(0px)';

}


setInterval(() => {
    if (scrolling) {
        if (window.scrollY < 15) {
            navBar.style.padding = '20px 0';
            changeNavbarColors('top')

        }

        if (window.scrollY > 15) {
            navBar.style.padding = '10px 0';
            changeNavbarColors('black');

        }

        if (window.scrollY >= about.offsetTop - navBar.clientHeight && window.scrollY < (about.offsetTop + about.clientHeight - navBar.clientHeight)) {
            changeNavbarColors('white');

        }
        if (window.scrollY >= about.offsetTop - (window.innerHeight - (window.innerHeight / 3)) && window.scrollY < about.offsetTop + window.innerHeight) {
           mainTextAnim('about')
           aboutDivs.forEach((div)=>{
               div.style.opacity = 1;
               div.style.transform = 'translateX(0px)';
           })
        }
        if (window.scrollY >= features.offsetTop - navBar.clientHeight && window.scrollY < (features.offsetTop + features.clientHeight - navBar.clientHeight)) {
            changeNavbarColors('WhiteSmoke');

        }
        if (window.scrollY >= features.offsetTop - (window.innerHeight - (window.innerHeight / 3))  && window.scrollY < features.offsetTop + window.innerHeight) {
            document.querySelector('.features div:nth-of-type(2)').style.opacity =1;
            document.querySelector('.features div:nth-of-type(4)').style.opacity =1;
            let fh4 =document.querySelectorAll('.features h4');
            fh4.forEach((h4)=>{
                h4.style.opacity=1;
                h4.style.transform ='translateY(0)';
            })
            let fhp =document.querySelectorAll('.features p');
            fhp.forEach((p)=>{
                p.style.opacity=1;
                p.style.transform ='translateY(0)';
            })
            let fh2 =document.querySelectorAll('.features h2');
            fh2.forEach((h2)=>{
                h2.style.opacity=1;
                h2.style.transform ='translateX(0)';
            })
        }
        if (window.scrollY >= subscribe.offsetTop - navBar.clientHeight && window.scrollY < (subscribe.offsetTop + subscribe.clientHeight - navBar.clientHeight)) {
            changeNavbarColors('WhiteSmoke');

        }
        if (window.scrollY >= subscribe.offsetTop - (window.innerHeight - (window.innerHeight / 3))  && window.scrollY < subscribe.offsetTop + window.innerHeight) {
            mainTextAnim('subscribe')
            document.querySelector('.subscribe button').style.opacity = 1;

         }

        if (window.scrollY >= video.offsetTop - navBar.clientHeight && window.scrollY < (video.offsetTop + video.clientHeight - navBar.clientHeight)) {
            changeNavbarColors('gray');

        }
        if (window.scrollY >= video.offsetTop - (window.innerHeight - (window.innerHeight / 3))  && window.scrollY < video.offsetTop + window.innerHeight) {
            vidH.forEach((h)=>{
                h.style.opacity = 1;
            })
            document.querySelector('.video h4').style.opacity = 1;
            document.querySelector('.video i').style.opacity = 1;

         }

        if (window.scrollY >= mainTestimonial.offsetTop - navBar.clientHeight && window.scrollY < (mainTestimonial.offsetTop + mainTestimonial.clientHeight - navBar.clientHeight)) {
            changeNavbarColors('white');

        }
        if (window.scrollY >= mainTestimonial.offsetTop - (window.innerHeight - (window.innerHeight / 3)) && window.scrollY < mainTestimonial.offsetTop + window.innerHeight) {
            mainTextAnim('testimonial');
            document.querySelector('.testimonial main').style.opacity =1;
         }


        scrolling = false;
    }
}, 250)
/********************************/
selectToggle = () => {
    document.querySelector('.testimonial .selectors .sel-one').classList.toggle = 'timelineAnim';
    document.querySelector('.testimonial .selectors .sel-two').classList.toggle = 'timelineAnim';
    document.querySelector('.testimonial .selectors .sel-three').classList.toggle = 'timelineAnim';
}

setInterval(() => {
    testimonial.style.opacity = 0;
    setTimeout(() => {
        if (testimonialState == 1) {
            document.querySelector('.testimonial div img').src = 'images/t2.jpg';
            document.querySelector('.testimonial div p').innerHTML = '<i class="fas fa-quote-left"></i> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat repudiandae quibusdam accusantium minus alias cumque quia saepe similique non veniam ducimus suscipit optio omnis officiis illum aliquam, fugit.';
            document.querySelector('.testimonial .selectors .sel-one .timeline').classList.remove('timelineAnim');
            document.querySelector('.testimonial .selectors .sel-two .timeline').classList.add('timelineAnim');


            testimonialState = 2;
        } else if (testimonialState == 2) {
            document.querySelector('.testimonial div img').src = 'images/t3.jpg';
            document.querySelector('.testimonial div p').innerHTML = '<i class="fas fa-quote-left"></i> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat repudiandae quibusdam accusantium minus alias cumque quia saepe similique non veniam ducimus suscipit optio omnis officiis illum aliquam, fugit con silets.';
            document.querySelector('.testimonial .selectors .sel-two .timeline').classList.remove('timelineAnim');
            document.querySelector('.testimonial .selectors .sel-three .timeline').classList.add('timelineAnim');
            testimonialState = 3;
        } else if (testimonialState == 3) {
            document.querySelector('.testimonial div img').src = 'images/t1.jpg';
            document.querySelector('.testimonial div p').innerHTML = '<i class="fas fa-quote-left"></i> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat repudiandae quibusdam accusantium minus alias cumque quia saepe similique non veniam ducimus suscipit optio omnis officiis illum aliquam, fugit con silets valhala.';
            document.querySelector('.testimonial .selectors .sel-three .timeline').classList.remove('timelineAnim');
            document.querySelector('.testimonial .selectors .sel-one .timeline').classList.add('timelineAnim');
            testimonialState = 1;
        }
    }, 410)
    setTimeout(() => {
        testimonial.style.opacity = 1;

    }, 420)
}, 5000)