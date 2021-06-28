const headerLinks = document.querySelectorAll('.header__link a')
const tabLinks = document.querySelectorAll('.tab__link a')
const language = document.querySelector('#language')
const currentLanguage = document.querySelector('#currentLanguage')
const burgerOpen = document.querySelector('.burger-open')
const burgerClose = document.querySelector('.burger-close')
const mobileLang = document.querySelectorAll('.mobile__lang')
const mobileMenuItems = document.querySelectorAll('.mobile__menu-item-link')
console.log(mobileMenuItems)


// bottom line
const setActiveLink = function (item, arrayToCheck) {
    const elToCheck = item.target.querySelector('.active__link')
    arrayToCheck.forEach(function (item) {
        const linkItem = item.querySelector('.active__link');
        if (linkItem) {
            linkItem.parentNode.removeChild(linkItem)
        }
    })
    if (!elToCheck) {
        const elToAdd = document.createElement('div')
        elToAdd.classList.add('active__link')
        item.target.append(elToAdd)
    }
}
headerLinks.forEach(function (item) {
    item.addEventListener('click', function (e) {
        setActiveLink(e, headerLinks)
    })
})
tabLinks.forEach(function (item) {
    item.addEventListener('click', function (e) {
        setActiveLink(e, tabLinks)
    })
})

// change language

language.addEventListener('click', function (e) {
    language.querySelector('.hidden__language').classList.toggle('visible')
    currentLanguage.textContent = e.target.textContent
})

const showMobileMenu = function (params) {
    document.body.classList.toggle('no-scroll')
    const elToShow = document.querySelector('.mobile-menu')
    elToShow.classList.toggle('visible-flex')
    burgerClose.classList.toggle('visible')
    burgerClose.classList.remove('hidden')
    burgerOpen.classList.add('hidden')
}

const hideMobileMenu = function (params) {
    document.body.classList.toggle('no-scroll')
    const elToShow = document.querySelector('.mobile-menu')
    elToShow.classList.toggle('visible-flex')
    burgerClose.classList.toggle('visible')
    burgerClose.classList.toggle('hidden')
    burgerOpen.classList.toggle('hidden')
}

burgerOpen.addEventListener('click', showMobileMenu)

burgerClose.addEventListener('click', hideMobileMenu)


const changeMobileLang = function (item) {
    const elToChange = item.target;
    mobileLang.forEach(function (item) {
        item.classList.remove('mobile-active__language')
        elToChange.classList.add('mobile-active__language')
    })
}

mobileLang.forEach(function (item) {
    item.addEventListener('click', changeMobileLang)
})

//mobile change state

function changeMobileLinks(e) {
    if(!this.classList.contains('circle__img-container')){
        return
    }
    const activeEl = this.querySelector('.rounded__circle')
    const elToChange = this.querySelector('.circle__rounded-default')
    const allElements = document.querySelectorAll('.circle__img')
    allElements.forEach(function (item) {
        item.src = 'assets/img/circle__round.png'
    })
    if (!activeEl) {
        elToChange.src = 'assets/img/circle__round-active.png'
    }
    console.log('change', this, activeEl, elToChange)

}

mobileMenuItems.forEach(function (item) {
    item.addEventListener('click', changeMobileLinks)
})