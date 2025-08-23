const name = document.querySelector("#user"); // get name id
const email = document.querySelector("#email"); // get email id
const password = document.querySelector("#pass"); // get password id
const btn = document.getElementById("btn"); // get button id
const form = document.querySelector(".form"); // get form class
const name_error = document.getElementById("nameerror"); // get name error id
const email_error = document.querySelector("#emailerror"); // get email error id
let password_error = document.querySelector("#passworderror"); // get password error id

// lower 1 and 2 expressions also known as regex pattern

// 1 -
var strong_password_checker =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // strong password format

// 2 -
var email_checher =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; // valid email format

form.addEventListener("submit", (evt) => {
  //event call when click on submit button

  if (name.value.trim() === "") {
    // if name is empty or null
    evt.preventDefault(); // stop reloaded the page after clicking the submit button
    name_error.innerText = "Name is required"; // change the text of span tag in html
    name_error.style.color = "red"; // change the color of span text in css
  } else {
    name_error.innerText = ""; // Clear error message if valid
  }

  if (!email.value.match(email_checher)) {
    // if email is not valid match function match the user email with valid format mail
    evt.preventDefault(); // stop reloaded the page after clicking the submit button
    email_error.innerText = "Valid Email is required"; // change the text of span tag in html
    email_error.style.color = "red"; // change the color of span text in css
  } else {
    email_error.innerText = ""; // Clear error message if valid
  }

  if (!password.value.match(strong_password_checker)) {
    // if the length is less then 8 and not strong password, by defauld regex strong pattern check length (8)
    evt.preventDefault(); // stop reloaded the page after clicking the submit button
    password_error.innerText = "Password must be strong & 8 character"; // change the text of span tag in html
    password_error.style.color = "red"; // change the color of span text in css
  } else {
    password_error.innerText = ""; // Clear error message if valid
  }
});
