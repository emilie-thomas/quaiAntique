const lastName = document.getElementById('lastName');
const firstName = document.getElementById('firstName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordRepeat = document.getElementById('passwordRepeat');
const btnSignUp = document.getElementById('btnSignUp');


lastName.addEventListener('keyup', validateForm);
firstName.addEventListener('keyup', validateForm);
phone.addEventListener('keyup', validateForm);
email.addEventListener('keyup', validateForm);
password.addEventListener('keyup', validateForm);
passwordRepeat.addEventListener('keyup', validateForm);


// Fonction permettant de valider tout le formulaire :
btnSignUp.disabled = true;
function validateForm() {
  const lastNameOK = validateRequired(lastName);
  const firstNameOK = validateRequired(firstName);
  const phoneOK = validateRequired(phone);
  const emailOK = validateEmail(email);
  const passwordOK = validatePassword(password);
  const passwordRepeatOK = validateConfirmPassword(password, passwordRepeat);

  if(lastNameOK && firstNameOK && phoneOK && emailOK && passwordOK && passwordRepeatOK) {
    btnSignUp.disabled = false;
  } else {
    btnSignUp.disabled = true;
  }
}



function validateRequired(input) {
  if(input.value != ''){
    input.classList.add('is-valid');
    input.classList.remove('is-invalid');
    return true;
  } else {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    return false;
  }
}

function validateEmail(input){
  //Définir le regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const userEmail = input.value;
  if (userEmail.match(emailRegex)) {
    input.classList.add('is-valid');
    input.classList.remove('is-invalid');
    return true;
  } else {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    return false;
  }
}

function validatePassword(input) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  const userPassword = input.value;
  if(userPassword.match(passwordRegex)) {
    input.classList.add('is-valid');
    input.classList.remove('is-invalid');
    return true;
  } else {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    return false;
  }
}

function validateConfirmPassword(inputPassword, inputConfirmPassword) {
  if(inputPassword.value === inputConfirmPassword.value) {
    inputConfirmPassword.classList.add('is-valid');
    inputConfirmPassword.classList.remove('is-invalid');
    return true;
  } else {
    inputConfirmPassword.classList.remove('is-valid');
    inputConfirmPassword.classList.add('is-invalid');
    return false;
  }
}

//regex pour le téléphone à trouver
function validatePhone(input) {
  const phoneRegex = / /;
  const userPhone = input.value;
  if(userPhone.match(phoneRegex)) {
    input.classList.add('is-valid');
    input.classList.remove('is-invalid');
    return true;
  } else {
    input.classList.remove('is-valid');
    input.add('is-invalid');
    return false;
  }
}


