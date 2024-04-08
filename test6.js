function myFunction() {
  "use strict";
 var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            if (username === "IhavePremium" && password === "passwordID") {
                return true;
            } else {
                alert("Incorrect username or password.");
                return false;
            }
        }
}
