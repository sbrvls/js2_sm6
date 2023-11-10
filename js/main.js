const phoneBlock = document.querySelector('.phone-block')
const block = document.querySelectorAll('.block')

window.addEventListener('scroll',() =>{
    const windowHeight = window.innerHeight
    const scrollPosition = window.scrollY
    const hightBlock = block[3].clientHeight
    const blockMiddle = block[3].offsetTop + hightBlock / 2
    if (scrollPosition + windowHeight >= blockMiddle){
        phoneBlock.style.display = 'block'
    }else{
        phoneBlock.style.display = 'none'
    }
})