document.getElementById("cash").addEventListener("change", function() {
    var cashMessage = document.getElementById("cashMessage");
    var visaDetails = document.getElementById("visaDetails");
    if (this.checked) {
      cashMessage.style.display = "block";
      visaDetails.style.display = "none";
    }
  });

  document.getElementById("card").addEventListener("change", function() {
    var cashMessage = document.getElementById("cashMessage");
    var visaDetails = document.getElementById("visaDetails");
    if (this.checked) {
      cashMessage.style.display = "none";
      visaDetails.style.display = "block";
    }
  });