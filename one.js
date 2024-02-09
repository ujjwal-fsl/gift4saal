document.getElementById("heartButton").addEventListener("click", function() {
    // Add bounce effect to the button
    this.style.animation = "bounce 0.5s ease";
    setTimeout(() => {
      this.style.animation = "";
    }, 500);
  
    // Navigate to another page after a delay
    setTimeout(function() {
      window.location.href = "another-page.html"; // Replace "another-page.html" with the URL of your desired page
    }, 1000); // Change the delay as needed
  });

