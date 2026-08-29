console.log('Welcome to JavaScript');
let cartQuantity=0;

//Add to bag button
document.querySelector('.add2bag').addEventListener('click', function(){
  console.log('Add to bag button got clicked');
  cartQuantity++;
  document.querySelector('#cartSummary').innerText=`Your bag has ${cartQuantity} Items`;
});
//Move to wishlish button
document.querySelector('.move2wish').addEventListener('click', function(){
  console.log('Move to wishlist button got clicked');
  cartQuantity--;
  document.querySelector("#cartSummary").innerText=`Your bag has ${cartQuantity} Items`;
});
//Add 1+1 button 
document.querySelector('.add22item').addEventListener('click', function(){
  console.log("Add 1+1 button got clicked");
  cartQuantity +=2;
  document.querySelector('#cartSummary').innerText=`Your bag has ${cartQuantity} Items`
});



document.querySelector('.add2bag').addEventListener('click', function(){
  alert('Item added to bag')
});
document.querySelector('.move2wish').addEventListener('click', function(){
  alert('Item added to Wishlist')
});
document.querySelector('.add22item').addEventListener('click', ()=>{
  alert('Added two pieces of the item')
});