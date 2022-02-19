const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}


showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav_link');
const navMenu = document.getElementById('nav-menu');

function linkAction(){
    navMenu.classList.remove('show');
}

navLink.forEach(idx => idx.addEventListener('click',linkAction));



const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll',scrollActive());

function scrollActive(){
    const scrollY = window.pageYOffset;
    sections.forEach(cur => {
        const sectionHeight = cur.offsetHeight
        const sectionTop = cur.offsetTop - 50;
        sectionId = cur.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active');
        }else{
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active');
        }
    })
}


window.onscroll = ()=>{
    const nav = document.getElementById('header')
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}


