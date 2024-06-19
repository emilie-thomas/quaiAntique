// On va stocker la connexion sous forme de cookie => on va stocker un token (jeton d'identification) 

const email = document.getElementById('email');
const password = document.getElementById('password');
const btnSignIn = document.getElementById('btnSignIn');

btnSignIn.addEventListener('click', checkCredentials); 
// credentials = infos de connexion

function checkCredentials() {
  // IMPORTANT !!! il faudra appeler l'API ici pour vérifier les credentials en BDD :
  
  if(email.value == "test@mail.com" && password.value == "123") {
    alert('Vous êtes connecté');

    // ATTENTION : il faudra placer le vrai token :
    const token = "jknfjnjkvgfn";
    // placer ce token en cookie

    window.location.replace("/");
  } else {
    email.classList.add('is-invalid');
    password.classList.add('is-invalid');
  }
}
