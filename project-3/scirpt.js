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

let count = 1


addToCart.addEventListener('click', () => {
    
    const itemName = 'Fall Limited Edition Sneakers'
    const itemPrice = 125.00
    const quantityInput = parseInt(quantity.value)
    const itemTotal = itemPrice * quantityInput

    const cartItem = document.createElement('div')
    cartItem.classList.add('imgTitle')
    cartItem.innerHTML = `
        <div class="allInnerItems">
            <img src="pictures/image-product-1-thumbnail.jpg" width="60px" alt="">
            <div class="itemName">
                <div class="itemCont">
                    <p>${itemName}</p>
                    $${itemPrice} x ${quantityInput} <span class="total"> $${itemTotal}</span>
                </div>
            <img src="pictures/icon-delete.svg" width="15px" alt="" class="delPic">
            </div>
        </div>
        <button class="checkoutBtn">Checkout</button>
    `
    cartItemsDiv.appendChild(cartItem)

    const currentCartCount = parseInt(cartCount.textContent) || 0
    cartCount.textContent = currentCartCount + quantityInput;

    quantity.value = '1'

    emptyTag.classList.add('hide')

    updateTotalPrice()

})

function updateTotalPrice() {
    const cartItemDetails = document.querySelectorAll('.itemCont')
    let priceTotal = 0

    cartItemDetails.forEach(itemDetail => {
        const itemTotalTextElement = itemDetail.querySelector('p:last-child')
        if(itemTotalTextElement){
            const itemTotalText = itemTotalTextElement.textContent
            const regexMatch = itemTotalText.match(/\$([\d.]+)/)
            if(regexMatch){
                const totalItem = parseFloat(regexMatch[1])
                priceTotal+=totalItem
            }
        } 
    })

}

cartItemsDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("delPic")) {
      e.target.parentElement.parentElement.parentElement.remove();
      cartCount.textContent = 0
      emptyTag.classList.remove('hide')
      updateTotalPrice();
    }
  })

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



