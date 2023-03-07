import { navbarMobile } from "./nodes";
import {gsap} from 'gsap'
function toggleNavbar() {
    const menuMobile = navbarMobile.querySelector('.navbar--mobile__menu')
    menuMobile.classList.toggle('active-menu')
    menuMobile.style = ""
    if(menuMobile.classList.contains('active-menu')){

        gsap.from(menuMobile,{
            x:-400
        })
    } else {

        gsap.to(menuMobile,{
            x:-400
        })
    }
}
function closeNavbar() {
    navbarMobile.classList.add('inactive')
}
function openNavbar() {
    navbarMobile.classList.remove('inactive')
}


const toggleButton = navbarMobile.querySelector('.toggle-button')
toggleButton.addEventListener('click',toggleNavbar)


export {
    toggleNavbar
}