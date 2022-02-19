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