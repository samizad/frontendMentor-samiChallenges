const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

//show error message
const showErrorMessage = (input, message) => {
  const span = document.querySelector("." + input.id);
  console.log((span.innerText = message));
};
// Show input success message
const showSuccessMessage = (input) => {
  const span = document.querySelector("." + input.id);
  span.innerText = "";
};
//get field name
const getFieldName = (input) => {
  return input.name;
};
// check required fields
const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    console.log(inputArr);
    if (input.value.trim() === "") {
      showErrorMessage(input, getFieldName(input) + "  " + "cannot be empty");
      //icon error
      var errorIcon = document.querySelectorAll(".iconError");
      for (let i = 0; i < errorIcon.length; i++) {
        errorIcon[i].style.visibility = "visible";
      }
      // place holder email color
      const inputElement = getFieldName(input);
      if (inputElement === "email") {
        const emailElement = document.getElementById("email");
        emailElement.classList.add("emailInvalidInput");
        emailElement.placeholder = "email@example.com";
      } else {
        document.getElementById("firstName").placeholder = "";
        document.getElementById("lastName").placeholder = "";
        document.getElementById("password").placeholder = "";
      }
      // border color
      var inputEl = document.getElementsByTagName("input");
      for (var i = 0; i < inputEl.length; i++) {
        inputEl[i].classList.add("invalidInput");
      }
    } else {
      showSuccessMessage(input);
      //hide icon
      var errorIcon = document.querySelectorAll(".iconError");
      for (let i = 0; i < errorIcon.length; i++) {
        errorIcon[i].style.display = "none";
      }
      //change border color
      if (input.value !== "") {
        input.classList.add("validInput");
      }
    }
  });
};
//event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([firstName, lastName, email, password]);
});
