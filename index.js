
const form = document.getElementsByTagName("form")[0];
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");
const errorIcon = document.querySelector(".error-icon");

function errorIconShow() {
  errorIcon.classList.add("error-icon-visible");
  email.classList.add("invalid-box");
}

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address";
    errorIconShow();
  }
  else if (email.validity.typeMismatch) {
    emailError.textContent = "Please provide a valid email";
    errorIconShow();
  }
}


email.addEventListener("input", function(event) {
  if (email.validity.valid) {
    emailError.innerHTML = "";
    emailError.className = "error";
    errorIcon.classList.remove("error-icon-visible");
    email.classList.remove("invalid-box")
  }
  else {
    showError();
  }
});

form.addEventListener("submit", function(event) {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
})
