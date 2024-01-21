const mainImg = document.getElementById('mainImage')
const increment = document.getElementById('incrementBtn')
const decrement = document.getElementById('decrementBtn')
const thumbnail = document.querySelectorAll('.thumbImg')
const cartIcon = document.getElementById('cartIcon')
const dropdown = document.querySelector('.cartDropDown')

const addToCart = document.getElementById('addToCart')
const cartItemsDiv= document.querySelector('.cartItems')
const totalSpan = document.querySelector('.total')

let quantity = document.getElementById('quantity')

let count = 1

// cartIcon.addEventListener('click',() => {
//     if(dropdown.style.display === 'block'){
//         dropdown.style.display = 'none'
//     } else {
//         dropdown.style.display = 'block'
//     }
// })


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




