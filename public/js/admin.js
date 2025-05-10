function openPage(pageName) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    
    
}
// -------------------------------------------------------------------------
  function showAddUser() {
    var addWindow = document.getElementById('AddUser');
    addWindow.style.display = 'block';
  }
function hideAddWindow() {
    var addWindow = document.getElementById('AddUser');
    addWindow.style.display = 'none';
}


function showEditUser() {
  var addWindow = document.getElementById('EditUser');
  addWindow.style.display = 'block';
}
function hideEditWindow() {
  var addWindow = document.getElementById('EditUser');
  addWindow.style.display = 'none';
}
//--------------------------------------------------------------------------
function logout() {
  alert("Logout successful!");
  window.location.href = "register.html"; 
}
//--------------------------------------------------------------------------
function showAddProduct() {
  var addWindow = document.getElementById('AddProduct');
  addWindow.style.display = 'block';
}
function hidePAddWindow() {
  var addWindow = document.getElementById('AddProduct');
  addWindow.style.display = 'none';
}


function showEditProduct() {
var addWindow = document.getElementById('EditProduct');
addWindow.style.display = 'block';
}
function hidePEditWindow() {
var addWindow = document.getElementById('EditProduct');
addWindow.style.display = 'none';
}

//--------------------------------------------------------------------------


  function showAlert(){
     confirm('ARE YOU SURE YOU WANT TO DELETE THE ITEM');
     }
     
  
  
  //


  function addInput() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;

    var firstNameError = document.getElementById('firstNameError');
    var lastNameError = document.getElementById('lastNameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var usernameError = document.getElementById('usernameError');
    var phoneError = document.getElementById('phoneError');
    var addressError = document.getElementById('addressError');

    var err = true;

    if(firstName == "") {
        firstNameError.innerHTML = " first name is Required";
        err = false;
    } else if(!/^[a-zA-Z\s]+$/.test(firstName)) {
        firstNameError.innerHTML = "Please enter a valid first name";
        err = false;
    } else {
        firstNameError.innerHTML = "";
    }

    if(lastName == "") {
        lastNameError.innerHTML = "last name is required";
        err = false;
    } else if(!/^[a-zA-Z\s]+$/.test(lastName)) {
        lastNameError.innerHTML = "Please enter a valid last name";
        err = false;
    } else {
        lastNameError.innerHTML = "";
    }

    if(email == "") {
        emailError.innerHTML = " email is required";
        err = false;
    } else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
        emailError.innerHTML = "Please enter a valid email";
        err = false;
    } else {
        emailError.innerHTML = "";
    }

    if(password == "" ){
        passwordError.innerHTML = "Password Is Required";
        err = false;
    } else {
        passwordError.innerHTML = "";
    }

    if(username == "" ){
        usernameError.innerHTML = "username Is Required";
        err = false;
    } else {
        usernameError.innerHTML = "";
    }

    if(phone == ""){
        phoneError.innerHTML = " phone number Is Required";
        err = false;
    } else {
        phoneError.innerHTML = "";
    }

    if(address == ""){
        addressError.innerHTML = " address is required";
        err = false;
    } else {
        addressError.innerHTML = "";
    }
    if (err) {
        alert("user added successfully");
    }
  
    return err;
}







/* add product*/
function showAddProduct() {
  document.getElementById('AddProduct').style.display = 'block';
}

function hideAddProduct() {
  document.getElementById('AddProduct').style.display = 'none';
}

function validateForm() {
  let isValid = true;

  // Clear previous error messages
  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  // Product Name validation
  const name = document.getElementById('name').value;
  if (!name) {
    document.getElementById('productnameError').textContent = 'Product name is required';
    isValid = false;
  }

  // Category validation
  const category = document.getElementById('category').value;
  if (!category) {
    document.getElementById('productcategoryError').textContent = 'Category is required';
    isValid = false;
  }

  // Quantity validation
  const quantity = document.getElementById('quantity').value;
  if (!quantity || isNaN(quantity) || quantity <= 0) {
    document.getElementById('quantityError').textContent = 'Please enter a valid quantity';
    isValid = false;
  }

  // Price validation
  const price = document.getElementById('price').value;
  if (!price || isNaN(price) || price <= 0) {
    document.getElementById('priceError').textContent = 'Please enter a valid price';
    isValid = false;
  }

  // Image validation
  const image = document.getElementById('image').files[0];
  if (!image) {
    document.getElementById('imageError').textContent = 'Product image is required';
    isValid = false;
  }

  return isValid;
}

document.getElementById('form').onsubmit = function (e) {
  e.preventDefault();
  if (validateForm()) {
    const formData = new FormData(this);

    fetch('/admin/AddProduct', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        Toastify({
          text: "Product added successfully",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "green",
        }).showToast();
        setTimeout(() => location.reload(), 3000); // Reload after 3 seconds
      } else {
        Toastify({
          text: "Error adding product: " + data.message,
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "red",
        }).showToast();
      }
    })
    .catch(error => {
      console.error('Error:', error);
      Toastify({
        text: "Error adding product",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "red",
      }).showToast();
    });
  }
};

function confirmDeleteProduct(id) {
  if (confirm("Are you sure you want to delete this product?")) {
    deleteProduct(id);
  }
}

function deleteProduct(id) {
  fetch('/admin/deleteProduct', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: id })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      Toastify({
        text: "Product deleted successfully",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "green",
      }).showToast();
      setTimeout(() => location.reload(), 3000); // Reload after 3 seconds
    } else {
      Toastify({
        text: "Error deleting product: " + data.message,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "red",
      }).showToast();
    }
  })
  .catch(error => {
    console.error('Error:', error);
    Toastify({
      text: "Error deleting product",
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "red",
    }).showToast();
  });
}









/** edit product  */

function EditInput() {
    var productid = document.getElementById('firstName').value;
    var productName = document.getElementById('productName').value;
    var productcategory = document.getElementById('productcategory').value;
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;

    var firstNameError = document.getElementById('firstNameError');
    var productnameError = document.getElementById('productnameError');
    var productcategoryError = document.getElementById('productcategoryError');
    var quantityError = document.getElementById('quantityError');
    var priceError = document.getElementById('priceError');

    var err = true;

    if(productid == "") {
        firstNameError.innerHTML = "Product ID is Required";
        err = false;
    } else {
        firstNameError.innerHTML = "";
    }

    if(productName == "") {
        productnameError.innerHTML = "Product Name is required";
        err = false;
    } else if(!/^[a-zA-Z\s]+$/.test(productName)) {
        productnameError.innerHTML = "Please enter a valid product Name";
        err = false;
    } else {
        productnameError.innerHTML = "";
    }

    if(productcategory == "") {
        productcategoryError.innerHTML = "Product category is required";
        err = false;
    } else if(!/^[a-zA-Z\s]+$/.test(productcategory)) {
        productcategoryError.innerHTML = "Please enter a valid product category";
        err = false;
    } else {
        productcategoryError.innerHTML = "";
    }

    if(quantity == "") {
        quantityError.innerHTML = "Quantity Is Required";
        err = false;
    } else {
        quantityError.innerHTML = "";
    }

    if(price == "") {
        priceError.innerHTML = "Price Is Required";
        err = false;
    } else {
        priceError.innerHTML = "";
    }

    if (err) {
        alert("Product edit successfully");
    }

    return err;
}