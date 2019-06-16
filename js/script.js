// gallery javascript
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}
// end of gallery javascript

// topping and crust Select Initialization
// Material Select Initialization

// Shoppingcart remove button logic

if (document.readyState == 'loading') {
    document.addEventListener('DOMComponentLoaded', ready)
} else {
    ready()
}

function ready() {

    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemButtons);
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()

}


function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(title, price, imageSrc)

    addItemToCart(title, price, imageSrc)
}

function addItemToCart(title, price, imageSrc) {
    var carRow = document.createElement('div')
    cartRow.innerText = title
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartRowContents = ''
    cartItems.append(cartRow)
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    carRow.classList.add('cart-row')
    var cartItems = getElementsByClassName('car-item')[0]
   var cartRowContents = `  <div class="row cart-row cart-item cart-column">
       <div class="col-4 ">
          <img src="$(imageSrc)" alt="Large-sized-pizza" class="img-fluid img-thumbnail shop-item-image">
         <br>
       <ol>
         <li>Large pizza</li>
       </ol>
       </div>
       <div class="col-4">
         <br><br>

         <span class="cart-price cart-column">$('price')</span><br><br>
         <button type="button" name="button" class="btn btn-primary shop-item-button">ADD TO CART</button>
       </div>
       <div class="col-4">
         <br><br><br><br>
         <input type="number" size="4"class="cart-quantity-input" name="cart-quantity-input" value="">
       <!-- <button class="btn btn-outline-danger my-2 my-sm-0 btn-danger" type="submit">REMOVE</button> -->
       </div>
     </div>`
    cartItems.append(cartRow)
    cartRow.innerHTML = cartRowContents
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }

    updateCartTotal()
}


function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-item')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
        // cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('Kshs', ''))
        console.log(price)
        var quantity = quantityElement.value
        console.log(price * quantity)
        total = total + (price * quantity)
    }
    total = Math.round(100+ total * 100)
    document.getElementsByClassName('cart-total-price')[0].innerText = 'Kshs' + total
}

$(document).ready(function(){
  $('button').click(function({
    document.getElementById('#three')
  $('#three').show()
  }))
})
