const body = document.querySelector('body')
const logo = document.querySelector('.logo')
const cart = document.querySelector('.cart')
const subtitle = Array.from(document.querySelectorAll('.subtitle'))
const previousEl = Array.from(document.querySelectorAll('.previous'))
const nextEl = Array.from(document.querySelectorAll('.next'))
const sliderEl = document.getElementById('slider')
const sliderWidth = sliderEl.offsetWidth
let interval = undefined
let timeout = undefined



console.log(subtitle)

nextEl.forEach(item => item.addEventListener('click', handleNext))

previousEl.forEach(item => item.addEventListener('click', handlePrevious));

autoScroll()

function handlePrevious() {
    sliderEl.scrollLeft -=  sliderWidth
    bgDark()
    handleSliderClick()
}
function bgDark() {
    body.style.background = '#232323'
    body.style.color = '#FFF'
    logo.setAttribute('src', 'img/Vector (1).svg')
    cart.setAttribute('src', 'img/cart-light.svg')
    subtitle[0].innerHTML = 'O CONSOLE DA PRÓXIMA<br> GERAÇÃO MAIS PODEROSO'
    previousEl.forEach(item => item.style.background = '#363636')
    console.log('Previous Clicado')
}


function handleNext() {
    sliderEl.scrollLeft +=  sliderWidth
    bgLight()
    handleSliderClick()
}
function bgLight() {
    body.style.background = "#fff"
    body.style.color = '#232323'
    subtitle[1].innerHTML = 'O MENOR CONSOLE <br>DA PRÓXIMA GERAÇÃO'
    logo.setAttribute('src', 'img/Vector (2).svg')
    cart.setAttribute('src', 'img/cart-dark.svg')
    previousEl.forEach(item => item.style.color = '#fff')
}

function handleSliderClick() {
    clearTimeout(timeout)
    clearInterval(interval)
    timeout = setTimeout(() => {
        autoScroll()
    }, 8000);
}

function autoScroll() {
    interval = setInterval(() => {
        const numberSections = sliderEl.childElementCount
        const indexSection = (sliderEl.scrollLeft/sliderWidth) + 1
        if(numberSections === indexSection) {
            sliderEl.scrollLeft = 0
            bgDark()
            return
        }
        sliderEl.scrollLeft += sliderWidth
        bgLight()
    }, 4000);
}
