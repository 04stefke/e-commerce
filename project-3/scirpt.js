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


let currentImageIndexSmall = 0;
const allImages = [
    "pictures/image-product-1.jpg",
    "pictures/image-product-2.jpg",
    "pictures/image-product-3.jpg",
    "pictures/image-product-4.jpg"
];

document.getElementById('prevButton').addEventListener('click', function() {
    if (currentImageIndexSmall > 0) {
        currentImageIndexSmall--;
        updateImage();
    }
});

document.getElementById('nextButton').addEventListener('click', function() {
    if (currentImageIndexSmall < allImages.length - 1) {
        currentImageIndexSmall++;
        updateImage();
    }
});

function updateImage() {
    const mainImage = document.getElementById('defaultPicture');
    mainImage.src = allImages[currentImageIndexSmall];
}

// Assuming you have a cart object to track items
let cart = {
    items: {},
    addItem: function(productId, quantity) {
      // If the item is already in the cart, update the quantity
        if (this.items[productId]) {
            this.items[productId].quantity += quantity;
        } else {
        // If it's a new item, set its quantity
            this.items[productId] = {
                quantity: quantity
          // Include other item details as necessary
            };
        }
    this.updateCartUI();
    },

    clearCart: function() {
        this.items = {};
        this.updateCartUI();
        this.totalQuantity = 0
        cartCount.innerText = this.totalQuantity
    },
    

    updateCartUI: function() {
        let totalQuantity = 0

        cartItemsDiv.innerHTML = ''
        
        for(let id in this.items){
            let item = this.items[id]
            totalQuantity += item.quantity
            
            let productInfo = getProductId(id)

            cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <img src="${productInfo.thumbnail}" alt="${productInfo.name}" class="cartImg">
                <div class="item-info">
                    <div class='innerItemInfo'>
                        <p>${productInfo.name}</p>
                        <p>$${productInfo.price}.00 x ${item.quantity} <b>$${productInfo.price * item.quantity}.00</b></p>
                    </div>
                </div>
            </div>
            <button class="checkoutBtn">Checkout</button>
            `
            cartCount.innerText = totalQuantity
        }

    if(totalQuantity > 0){
        cartItemsDiv.style.display = 'block'
        emptyTag.style.display= 'none'
        document.getElementById('bin').style.display = 'block'
    }else {
        cartItemsDiv.style.display = 'none'
        emptyTag.style.display= 'block'   
        document.getElementById('bin').style.display = 'none'
    }

    quantity.value = 1
    }
};

function getProductId(productId){
    return {
        name: 'Fall Limited Edition Sneakers',
        price: 125.00,
        thumbnail: '/pictures/image-product-1-thumbnail.jpg'
    }
}
document.getElementById('addToCart').addEventListener('click', function() {
    let quantity = parseInt(document.getElementById('quantity').value, 10);
    cart.addItem('product1', quantity); // 'product1' is a placeholder, use your actual product ID
    cartCount.style.display = 'block'
});

document.getElementById('bin').addEventListener('click', function() {
    cart.clearCart();
    cartCount.style.display = 'none'
  });