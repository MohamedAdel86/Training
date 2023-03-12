const phonenum = document.getElementById("phone");

phonenum.addEventListener("submit", function () {
  const inputValue = phonenum.value;
  const regex = /^0\d{10}$/; // regular expression to match "0" followed by 10 digits
  if (!regex.test(inputValue)) {
    phonenum.setCustomValidity(
      "Please enter a valid phone number starting with '0' and with length of 11 digits."
    );
  } else {
    phonenum.setCustomValidity("");
  }
});

function choosePosition() {
  let head = document.getElementById("head-position"),
    deputy = document.getElementById("deputy-position");
  if (head.checked) {
    deputy.style.display = "none";
  } else if (deputy.checked) {
    head.style.display = "none";
  }
}
