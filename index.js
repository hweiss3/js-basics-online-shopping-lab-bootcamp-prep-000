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
if (cart = []) {
  return "Your shopping cart is empty"  
} else {
  var base = "In your cart, you have"
  for (var i = 0; i < cart.length; i++) {
    base += `cart[i] at itemName[itemPrice]`
  }
} return 
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
