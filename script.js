const btn = document.querySelector('button');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const firstMesagge = document.querySelector('.first-mesagge');
const lastMesagge = document.querySelector('.last-mesagge');
const emailMesagge = document.querySelector('.email-mesagge');
const passMesagge = document.querySelector('.pass-mesagge');
const errorFirstName = document.querySelector('.error-firstN');
const errorLastName = document.querySelector('.error-lastN');
const errorEmail = document.querySelector('.error-email');
const errorPass = document.querySelector('.error-pass');

function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

btn.addEventListener('click', function() {
    if (firstName.value == '') {
        firstMesagge.textContent = "First Name cannot be empty";
        firstName.style.border = "1px solid var(--red)";
        firstName.placeholder="";
        errorFirstName.classList.add("active");
    } else {
        firstName.style.border = "1px solid lightgray";
        firstMesagge.textContent = "";
        errorFirstName.classList.remove("active");
    }
    if (lastName.value == '') {
        lastMesagge.textContent = "Last Name cannot be empty";
        lastName.style.border = "1px solid var(--red)";
        lastName.placeholder="";
        errorLastName.classList.add("active");
    } else {
        lastName.style.border = "1px solid lightgray";
        lastMesagge.textContent = "";
        errorLastName.classList.remove("active");
    }
    if (!validateEmail(email.value)) {
        emailMesagge.textContent = "Looks like this is not an email";
        email.style.border = "1px solid var(--red)";
        email.placeholder ='email@example/com';
        errorEmail.classList.add("active");
        email.classList.add("placeholder-red");
    } else if (validateEmail(email.value)) {
        email.style.border = "1px solid lightgray";
        emailMesagge.textContent = "";
        errorEmail.classList.remove("active");
        email.placeholder ='';
    }
    if (pass.value == '') {
        passMesagge.textContent = "Password cannot be empty";
        pass.style.border = "1px solid var(--red)";
        pass.placeholder="";
        errorPass.classList.add("active");
    } else {
        pass.style.border = "1px solid lightgray";
        passMesagge.textContent = "";
        errorPass.classList.remove("active");
    }
})