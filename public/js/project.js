
// USER PROFILE JS-------------------------------------------------------
function openPage(pageName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
  
    document.getElementById(pageName).style.display = "block";
  }
  
  // Get the element with id="defaultOpen" and click on it
 // document.getElementById("defaultOpen").click();


//   SIGN IN JS--------------------------------------------------------------------

  function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email !== "amr123@gmail.com" || password !== "1234") {
        alert("Invalid email or password. Please try again.");
        return false;
    } else {
        // Redirect to the home page
        window.location.href = "home.html";
        return false; // Prevent form submission
    }
}

function editName(){
  var changeNameFrom=document.getElementById("changeName");
  if(changeNameFrom.style.display=="none"){
    changeNameFrom.style.display = "block";
  } else {
    changeNameFrom.style.display = "none";
  }
}

function editEmail(){
  var changeEmailFrom=document.getElementById("changeEmail");
  if(changeEmailFrom.style.display=="none"){
    changeEmailFrom.style.display = "block";
  } else {
    changeEmailFrom.style.display = "none";
  }
}

function editPassword(){
  document.getElementById("changePass").style.display="block";
  document.getElementById("changePass").style.display="block";
  document.getElementById("changePass").style.display="block";

}

function editAddress(){
  var changeAddressFrom=document.getElementById("changeAddress");
  if(changeAddressFrom.style.display=="none"){
    changeAddressFrom.style.display = "block";
  } else {
    changeAddressFrom.style.display = "none";
  }
  
}

function editAppartment(){
  var changeAppartmentFrom=document.getElementById("changeAppartment");
  if(changeAppartmentFrom.style.display=="none"){
    changeAppartmentFrom.style.display = "block";
  } else {
    changeAppartmentFrom.style.display = "none";
  }
}
function editPhone(){
  var changePhoneFrom=document.getElementById("changePhone");
  if(changePhoneFrom.style.display=="none"){
    changePhoneFrom.style.display = "block";
  } else {
    changePhoneFrom.style.display = "none";
  }
  


}
function showPassword(){
  var ShowPassFomr=document.getElementById("showPass");
  if(ShowPassFomr.innerHTML=="<span>************</span>"){
    ShowPassFomr.innerHTML="<span>worldcup_2022</span>"
  }
  else{
    ShowPassFomr.innerHTML="<span>************</span>"
  }
}
function logout(){
  alert("Logout Successful");
  window.location.href="register.html"
}
function openAddress(){
  window.location.href="user_profile"
}
function changeImage(){
  alert("Logout Successful");
}
function openChangePassword() {
  var passwordForm = document.getElementById("password-form");
  if (passwordForm.style.display === "none") {
      passwordForm.style.display = "block";
  } else {
      passwordForm.style.display = "none";
  }
}

function changePassword() {
  var oldPassword = document.getElementById("oldPassword").value;
  var newPassword = document.getElementById("newPassword").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
  } else {
      
      alert("Password changed successfully!");
  }
}



// Sign Up---------------------------------------------------------------------------------
function validate() {
    var Name = document.getElementById('Name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('password2');
    var form = document.getElementById('form');
    var fullNameError = document.getElementById('fullNameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');
    var phone = document.getElementById('phone');
    var phoneError = document.getElementById('phoneError');
    var checkbox = document.getElementById('check');
    var termsError = document.getElementById('termsError');
  
  
  
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        let messages = [];
  
        if (!/^[A-Za-z]+$/.test(Name.value)) {
          messages.push('Name must contain only letters');
          fullNameError.innerText = 'Name must contain only letters';
        } else {
          fullNameError.innerText = '';
        }
  
        if (!validateEmail(email.value)) {
            messages.push('Invalid email format');
            emailError.innerText = 'Invalid email format';
        } else {
            emailError.innerText = '';
        }
  
        if (!/^\d{11}$/.test(phone.value)) {
          messages.push('Phone number must be 11 digits');
          phoneError.innerText = 'Phone number must be 11 digits';
        } else {
          phoneError.innerText = '';
        }
  
  
  
        if (!checkbox.checked) {
          messages.push('Please agree to the terms and conditions');
          termsError.innerText = 'Please agree to the terms and conditions';
      } else {
          termsError.innerText = '';
      }
  
  
  
  
  
  
  
  
        if (password.value.length <= 6) {
            messages.push('Password must be longer than 6 characters');
            passwordError.innerText = 'Password must be longer than 6 characters';
        } else if (password.value.length >= 12) {
            messages.push('Password must be less than 12 characters');
            passwordError.innerText = 'Password must be less than 12 characters';
        } else {
            passwordError.innerText = '';
        }
  
        if (confirmPassword.value !== password.value) {
            messages.push('Passwords do not match');
            confirmPasswordError.innerText = 'Passwords do not match';
        } else {
            confirmPasswordError.innerText = '';
        }
  
        if (messages.length > 0) {
            return false; // Prevent form submission
        }
  
  
  
  
        
        window.location.href = "home.html";
        alert("Your new Account has been successfully updated!");

    });
  }
  
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  // Call the validate function to initiate the validation process
  validate();
  
// Home page js-----------------------------------------------------------------------
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
    window.location.href = ".//shop"; // Replace "shop.html" with the actual URL of your shop page
  }
  function openCart() {
document.getElementById("myCart").style.width = "30rem";
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
function goToCheckout() {
  window.location.href = "checkout.html"; 
}
