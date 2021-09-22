const firstname = document.querySelector(".form--firstname");
const lastname = document.querySelector(".form--lastname");
const email = document.querySelector(".form--email");
const number = document.querySelector(".form--number");
const question = document.querySelector(".form--question");
const formContainer = document.querySelector(".entry-box");

formContainer.addEventListener("submit", (e) => {
  e.preventDefault();

  var url = `https://wa.me/923333957015?text=*Name*: ${firstname.value} ${lastname.value}%0a*Email*: ${email.value}%0a*Mobile number*: ${number.value}%0a*Question*: ${question.value}`;

  window.open(url, "_blank").focus();
});

// https://wa.me/923333957015/?text=urlencodedtext
