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

var currentImageIndex = 0;

function closeLightbox(){
    document.getElementById('lightboxModal').style.display = 'none'
}

function changeImg(imgSrc){
    document.querySelector('#mainImage img').src = imgSrc
}

function openLightbox(selectedImageSrc){
    var lightbox = document.getElementById('lightboxModal')
    var lightboxMainImage = document.querySelector('.main-image img')
    var thumbnails = document.querySelectorAll('.thumbnail-container img')
    
    lightboxMainImage.src = selectedImageSrc

    thumbnails.forEach(function(thumbnail, index) {
        thumbnail.classList.remove('active');
        if (thumbnail.src.includes(selectedImageSrc)) {
            thumbnail.classList.add('active');
            currentImageIndex = index
        }
    })

    lightbox.style.display = 'block'
}

function showPrevImage(){
    var thumbnails = document.querySelectorAll('.thumbnail-container img')
    if(currentImageIndex > 0){
        currentImageIndex -= 1
    } else {
        currentImageIndex = thumbnails.length - 1
    }
    changeLightboxImage(thumbnails[currentImageIndex].src)
}

function showNextImage(){
    var thumbnails = document.querySelectorAll('.thumbnail-container img')
    if(currentImageIndex < thumbnails.length -1 ){
        currentImageIndex += 1
    } else {
        currentImageIndex = 0
    }
    changeLightboxImage(thumbnails[currentImageIndex].src)
}

function changeLightboxImage(imgSrc){
    var lightboxMainImage = document.querySelector('.lightbox .main-image img');
    lightboxMainImage.src = imgSrc;

    var thumbnails = document.querySelectorAll('.thumbnail-container img');
    thumbnails.forEach(function(thumb) {
        thumb.classList.remove('active');
        if (thumb.src.includes(imgSrc)) {
        thumb.classList.add('active');
        }
    });
}

const images = document.querySelector('.defPic')
if (images) {
    images.addEventListener('click', function() {
        var width = window.innerWidth
        if(width > 1220){
            openLightbox(images.src);
        }
        
    });
}

