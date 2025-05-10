var myIndex = 0;
function slider() {
  var images = document.getElementsByClassName("mySlides");
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  if (myIndex > images.length - 1) {
    myIndex = 0;
  }
  images[myIndex].style.display = "flex";
  myIndex++;
  setTimeout(slider, 5000); // Change image every 5 seconds
}
// go to shop function
function goToShop() {
    window.location.href = "shop.html"; // Replace "shop.html" with the actual URL of your shop page
  }
  function openCart() {
document.getElementById("myCart").style.width = "30rem";
}
function goToCheckout() {
  window.location.href = "checkout"; 
}

function closeCart() {
document.getElementById("myCart").style.width = "0";
}

//java script bta3 el side nav bta3et el account
function openAcc() {
document.getElementById("myAccount").style.width = "30rem";
}

/* Set the width of the side navigation to 0 */
function closeAcc() {
document.getElementById("myAccount").style.width = "0";
}


