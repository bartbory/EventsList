function readPosition(element, slideType) {
    element.forEach(el => {
        let artistOffset = el.offsetTop
        let viewportHeight = window.innerHeight

        if (window.scrollY + viewportHeight / 2 >= artistOffset) {
            el.classList.add(slideType)
        } else {
            el.classList.remove(slideType)
        }
    })
}

window.addEventListener('scroll', () => {
    readPosition(artistBoxes, 'slideIn')
    readPosition(productBoxes, 'slideIn')
    readPosition(albumBoxes, 'slideIn')
})

const clearActiveMark = () => {
    for (let i = 0; i <= 5; i++) {
        navItems[i].classList.remove('nav__item--active')
    }
}

const activeTabDependencies = scroll => {
    clearActiveMark()
    if (scroll < shop.offsetTop) {
        navItems[0].classList.add('nav__item--active')
    } else if (scroll >= shop.offsetTop && scroll < calendar.offsetTop) {
        navItems[1].classList.add('nav__item--active')
    } else if (scroll >= calendar.offsetTop && scroll < bio.offsetTop) {
        navItems[2].classList.add('nav__item--active')
    } else if (scroll >= bio.offsetTop && scroll < albums.offsetTop) {
        navItems[3].classList.add('nav__item--active')
    } else if (scroll >= albums.offsetTop && scroll < contact.offsetTop) {
        navItems[4].classList.add('nav__item--active')
    } else {
        navItems[5].classList.add('nav__item--active')
    }
}

function checkScrollPosition() {
    let scroll = window.scrollY
    activeTabDependencies(scroll)
}
window.addEventListener('scroll', checkScrollPosition)