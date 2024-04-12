document.getElementById("guessForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission

      var guessedCode = document.getElementById("codeInput").value;
      var secretCode = "V3V2neo12"; // Replace with your own secret code

      if (guessedCode === secretCode) {
        window.location.href = "islamabadneo.html"; // Replace with your desired website URL
      } else {
        alert("If your a mod and dont know the code please contact the owner.");
      }
    });
