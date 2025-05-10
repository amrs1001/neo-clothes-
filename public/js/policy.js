
document.addEventListener('DOMContentLoaded', () => {
    let intro = document.querySelector('.intro');
    let policySpan = document.querySelectorAll('.policy');
  
    setTimeout(() => {
      policySpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add('active');
        }, (idx + 1) * 400);
      });
  
      setTimeout(() => {
        policySpan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx + 1) * 50);
        });
      }, 2000);
  
      setTimeout(() => {
        intro.style.top = '-100vh'; 
      }, 2300);
    });
  });
  function openCart() {
      document.getElementById("myCart").style.width = "30rem";
      }
      function goToCheckout() {
        window.location.href = "checkout.html"; 
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