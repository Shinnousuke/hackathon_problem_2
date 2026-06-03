// LOGIN BUTTON

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {

    window.location.href = "home.html";

});


// SIGNUP POPUP

const openSignup = document.getElementById("openSignup");
const signupPopup = document.getElementById("signupPopup");
const closePopup = document.getElementById("closePopup");

openSignup.addEventListener("click", () => {

    signupPopup.style.display = "flex";

});

closePopup.addEventListener("click", () => {

    signupPopup.style.display = "none";

});


// OTP BUTTON

const otpBtn = document.getElementById("otpBtn");

otpBtn.addEventListener("click", () => {

    alert("OTP Sent Successfully!");

});


// CREATE ACCOUNT BUTTON

const signupBtn = document.querySelector(".signup-btn");

signupBtn.addEventListener("click", () => {

    alert("Account Created Successfully!");

    // Close popup
    signupPopup.style.display = "none";

});