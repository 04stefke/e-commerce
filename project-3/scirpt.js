const mainImg = document.getElementById('mainImage')
const increment = document.getElementById('incrementBtn')
const decrement = document.getElementById('decrementBtn')
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


function changeImage(imagePath) {
    mainImg.firstElementChild.src = imagePath
    
}