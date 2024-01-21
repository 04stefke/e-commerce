const mainImg = document.getElementById('mainImage')
const increment = document.getElementById('incrementBtn')
const decrement = document.getElementById('decrementBtn')
const thumbnail = document.querySelectorAll('.thumbImg')
let quantity = document.getElementById('quantity')

let count = 0

increment.addEventListener('click', () => {
    count++
    quantity.value = count
})

decrement.addEventListener('click', () => {
    if(count > 0){
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