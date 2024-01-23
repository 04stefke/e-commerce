const mainImg = document.getElementById('mainImage')
const increment = document.getElementById('incrementBtn')
const decrement = document.getElementById('decrementBtn')
const thumbnail = document.querySelectorAll('.thumbImg')
const cartIcon = document.getElementById('cartIcon')
const dropdown = document.querySelector('.cartDropDown')
const addToCart = document.getElementById('addToCart')
const cartItemsDiv= document.querySelector('.cartItems')
const totalSpan = document.querySelector('.total')
const emptyTag = document.getElementById('empty')
let cartCount = document.getElementById('cartCount')
let quantity = document.getElementById('quantity')

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

let count = 1


    cartIcon.addEventListener('click',() => {
        if(dropdown.style.display === 'block'){
            dropdown.style.display = 'none'
        } else {
            dropdown.style.display = 'block'
            emptyTag.classList.remove('hide')
        }
    })

    increment.addEventListener('click', () => {
        count++
        quantity.value = count
    })

    decrement.addEventListener('click', () => {
        if(count > 1){
            count--
            quantity.value = count
        }
    })

    thumbnail.forEach(thumb => thumb.addEventListener('click', makeActive))

    function makeActive(event){
        thumbnail.forEach(thumb => {
            thumb.classList.remove('active')
            event.currentTarget.classList.add('active')
        })
    }

    function changeImage(imagePath) {
        mainImg.firstElementChild.src = imagePath
        
    }

function closeLightbox(){
    document.getElementById('lightboxModal').style.display = 'none'
}

var slideIndex = 1

function changeImg(imgSrc){
    document.querySelector('#mainImage img').src = imgSrc
}

function setCurrentSlide(n) {
    showSlides(slideIndex = n)
}

function moveSlide(n){
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i
    var slides = document.getElementsByClassName('lightbox-slide')
    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}
    for(i = 0; i < slides.length; i++){
        slides[1].style.display = 'none'
    }
    slides[slideIndex - 1].style.display = 'block'
}

const images = document.querySelector('.defPic')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

function openLightbox(selectedImageSrc){
    var lightbox = document.getElementById('lightboxModal')
    var lightboxMainImage = document.querySelector('.lightbox .main-image img')
    var thumbnails = document.querySelectorAll('.lightbox .thumbnail-container img')
    
    lightboxMainImage.src = selectedImageSrc

    thumbnails.forEach(function(thumbnail) {
        if(thumbnail.src === selectedImageSrc) {
            thumbnail.classList.add('active')
        } else {
            thumbnail.classList.remove('active')
        }
    })

    lightbox.style.display = 'block'
}

function changeLightboxImage(imgSrc){
    document.querySelector('.lightbox .main-image img').src = imgSrc

    var thumbnails = document.querySelectorAll('.lightbox .thumbnail-container img')
    thumbnails.forEach(function(thumb) {
        thumb.classList.remove('active')
        if(thumb.src === imgSrc) {
            thumb.classList.add('active')
        }
    })
}