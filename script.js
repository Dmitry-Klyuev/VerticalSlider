const upBtn = document.querySelector('.up-button')  //получаем кнопку up
const downBtn = document.querySelector('.down-button') //получаем кнопек down
const sidebar = document.querySelector('.sidebar') //получаем sidebar
const mainSlide = document.querySelector('.main-slide') //получаем main Slide
const container = document.querySelector('.container') //получаем весь контейнер (main Slide и sidebar)
const slidersCount = mainSlide.querySelectorAll('div').length  // получаем кол-во  div у .main-slide'

const height = container.clientHeight  //получаем высоту монитора
let activeSlideIndex = 0

sidebar.style.top = `-${(slidersCount-1) * 100}vh`; //синхронизируем sideBar и slide

upBtn.addEventListener('click', ()=> {
    activeSlideIndex++
    if (activeSlideIndex === slidersCount){
            activeSlideIndex = 0
        }
    console.log(activeSlideIndex)
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
})

downBtn.addEventListener('click', ()=> {
    activeSlideIndex--
    if (activeSlideIndex < 0){
        activeSlideIndex = slidersCount -1
    }
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
})