// function calculateSquares(myArray){
//     let newArray = []
//     myArray.forEach((value) => {
//         console.log(value ** 2)
//     })

// return newArray

// }

// let x = [1,2,3,4]

// const calculatedResults = 
// calculateSquares(x)

// console.log(calculatedResults)

// const list =
// document.querySelectorAll('li')

// list.forEach((listItem) => {
//     listIteminnerText = "hi"
//     listItem.style.background = "pink"
//     listItem.style.color = "white"
// })
// const images = [
//     'https://www.drawinghowtodraw.com/stepbystepdrawinglessons/wp-content/uploads/2011/08/finished-blossom-from-powerpuff-girls.png.webp',
// 'https://pm1.aminoapps.com/6464/0476e5b8bec46183d474a0a08b560df2bd0525f1_00.jpg',
// 'https://www.drawinghowtodraw.com/stepbystepdrawinglessons/wp-content/uploads/2011/08/400x400-buttercup-from-powerpuff-girls.png'
// ]
// const container = 
// document.querySelector('#container')

// images.forEach((images) => {
//     const imgTag =
//     document.createElement('img')
//     container.append(imgTag)
//     imgTag.src = images
// })

// images.forEach((image) => {
//     img.style.width = "300px"
//     img.style
// })
// const images = [
// 'https://www.hindustantimes.com/ht-img/img/2023/09/20/1600x900/gege_akutami_1695225795670_1695225816461.jpg',
// 'https://qph.cf2.quoracdn.net/main-qimg-1d26cf5ef7b1b82c2a5495b930c88201'

// const slider = document.getElementById('slider');
// const slides = document.querySelectorAll('.slide');
// let currentSlide = 0;

// function updateSlider() {
//     slider.style.transform = `translateX(-${currentSlide * 800}px)`;
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     updateSlider();
// }

// function previousSlide() {
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     updateSlider();
// }

// updateSlider();