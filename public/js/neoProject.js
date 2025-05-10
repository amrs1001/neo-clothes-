var myIndex = 0;
function slider() {
  var images = document.getElementsByClassName("mySlidesShow");
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
function mySideNavopenNav() {
  document.getElementById("mySideNavContent").style.width = "250px";
}

function mySideNavClosebtn() {
  document.getElementById("mySideNavContent").style.width = "0";
}
// go to shop function
function goToShop() {
  window.location.href = "shop"; // Replace "shop.html" with the actual URL of your shop page
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
function confirmLogout() {
  return confirm("Are you sure you want to logout?");
}

