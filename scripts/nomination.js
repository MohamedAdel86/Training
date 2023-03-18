const myForm = document.getElementById("myForm");
const phoneInput = document.getElementById("phone");
const idNumberInput = document.getElementById("idnum");

myForm.addEventListener("submit", function (event) {
  if (!/^01[0125]\d{8}$/.test(phoneInput.value)) {
    phoneInput.setCustomValidity("Invalid phone number");
    event.preventDefault();
  } else {
    phoneInput.setCustomValidity("");
  }

  if (!/^\d{14}$/.test(idNumberInput.value)) {
    idNumberInput.setCustomValidity("Invalid ID number");
    event.preventDefault();
  } else {
    idNumberInput.setCustomValidity("");
  }
});
