
setTimeout(function(){
    document.addEventListener('DOMContentLoaded', function() {
      if(document.getElementById("firstname").value == "undefined"){
        localStorage.firstName = "";
        localStorage.lastName = "";
        localStorage.email = "";
        location.reload()
      }
    }, false);
}, 1);

function getData() {

      localStorage.firstName = document.getElementById("firstname").value;
      localStorage.lastName = document.getElementById("lastname").value;
      localStorage.email = document.getElementById("email").value;

  }
  document.getElementById("firstname").value = localStorage.firstName;
  document.getElementById("lastname").value = localStorage.lastName;
  document.getElementById("email").value = localStorage.email;