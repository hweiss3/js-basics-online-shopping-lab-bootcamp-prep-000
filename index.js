var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item
  var itemPrice = Math.floor(Math.random() * 100)+1
  var item = {[itemName]: itemPrice}
  cart.push(item)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  var base = "In your cart, you have"
if (cart.length === 0 ) {
  console.log("Your shopping cart is empty.")
} elseif (cart.length === 1){
  
  for (var i = 0; i < cart.length; i++) {
    base += ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`
  } console.log(base)
} else if (cart.length === 2) {
  
}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
