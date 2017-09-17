var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item = {[itemName] : itemPrice}
  var itemPrice = function randomPrice(min,max){
    min = Math.ceil(1)
    max - Math.floor(100)
    return Math.floor(Math.random() * max - min)) + min)
  }
  cart.push(item)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  // write your code here
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
