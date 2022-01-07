// display mobileMenu
const menuDisplay = () => {
    if (hamburger.classList.includes = '.opened') {
        menuMobile.classList.toggle('nav--show')
        hamburger.classList.toggle('opened')
    }
}

// close mobileMenu
const closeMenu = () => {
    menuMobile.classList.toggle('nav--show')
    hamburger.classList.toggle('opened')
}

hamburger.addEventListener('click', menuDisplay)
navMobileItems.forEach(item => item.addEventListener('click', closeMenu))

// check scroll position
// function sectionActiveTab(element, isActive) {

// }
// let section = [intro, shop, calendar, bio, albums]

// window.addEventListener('scroll', () => {
//     section.forEach(element => {
//         let sectionOffset = element.offsetTop
//         let viewportHeight = window.innerHeight

//         if (window.scrollY + viewportHeight / 2 >= sectionOffset) {
//             element.classList.add(isActive)
//         } else {
//             element.classList.remove(isActive)
//         }
//         // sectionActiveTab(element, 'nav__item--active')
//     })
// })

