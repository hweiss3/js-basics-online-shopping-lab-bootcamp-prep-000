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
} else if (cart.length === 1){
    base += ` ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[i])]}.`
} else if (cart.length === 2) {
    base += ` ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
} else {
  for (var i = 0; i < cart.length; i++) {
    if (i === cart.length-1) {
      base += `and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`
    } else {
      base += ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]},`
    } console.log(base)
  }
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
