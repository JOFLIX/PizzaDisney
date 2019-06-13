// gallery javascript
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
// end of gallery javascript





if(document.readyState == 'loading'){
  documet.addEventListener('DOMComponentLoaded',ready)}
  else{
    ready()
  }
function ready(){

  var removeCartItemButtons=document.getElementsByClassName('btn-danger')
  console.log(removeCartItemButtons);
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button=removeCartItemButtons[i]
    button.addEventListener('click',removeCartItem)
  }// function(event){
      // var buttonClicked= event.target
      // buttonClicked.parentElement.parentElement.remove()
      // updateCartTotal()

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i=0; i < quantityInputs.length; i++){
      var input=quantityInputs[i]
      input.addEventListener('change', quantityChanged)
    }
  }
 function removeCartItem(event){
   var buttonClicked = event.target
   buttonClicked.parentElement.parentElement.remove()
   updateCartTotal()

 }

 function quantityChanged(event){
   var input = event.target
   if(isNaN(input.value)|| input.value<= 0){
     input.value = 1
   }

   updateCartTotal()
 }

function updateCartTotal(){
  var cartItemContainer= document.getElementsByClassName('cart-item')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  // cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++){
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    var price= parseFloat(priceElement.innerText.replace('Kshs',''))
    console.log(price)
    var quantity = quantityElement.value
    console.log(price*quantity)
    total = total + (price*quantity)
  }
  total=Math.round(total*100)/100
 document.getElementsByClassName('cart-total-price')[0].innerText='Kshs' + total
}
