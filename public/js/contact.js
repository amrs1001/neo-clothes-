function validate4() {
    var Name = document.getElementById('Name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    var form = document.getElementById('form');
    var fullNameError = document.getElementById('fullNameError');
    var emailError = document.getElementById('emailError');
    var messageError = document.getElementById('messageError');
  
  
  
    
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
  
       
        if (message.value.trim() == '') {
            messages.push('Please enter a message');
            messageError.innerText = 'Please enter a message';
          } else {
            messageError.innerText = '';
          }
  
  
  
  
  
        // if (messages.length > 0) {
        //     return false; // Prevent form submission
        // }
  
  
  
  
        
        // window.location.href = "contact.html";
    });
  }
  
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  // Call the validate function to initiate the validation process
  validate4();
  function mySideNavopenNav() {
    document.getElementById("mySideNavContent").style.width = "250px";
  }
  
  function mySideNavClosebtn() {
    document.getElementById("mySideNavContent").style.width = "0";
  }
  // go to shop function
  function goToShop() {
    window.location.href = "shop.html"; // Replace "shop.html" with the actual URL of your shop page
  }
  function openCart() {
  document.getElementById("myCart").style.width = "30rem";
  }
  function goToCheckout() {
  window.location.href = "checkout.html"; 
  }
  
  function closeCart() {
  document.getElementById("myCart").style.width = "0";
  }