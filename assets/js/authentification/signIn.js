
// On va stocker la connexion sous forme de cookie => on va stocker un token (jeton d'identification) 

const email = document.getElementById('email');
const password = document.getElementById('password');
const btnSignIn = document.getElementById('btnSignIn');

btnSignIn.addEventListener('click', checkCredentials); 
// credentials = infos de connexion

function checkCredentials() {
  // IMPORTANT !!! il faudra appeler l'API ici pour vérifier les credentials en BDD :
  
  if(email.value == "test@mail.com" && password.value == "123") {
    // ATTENTION : il faudra placer le vrai token :
    const token = "jknfjnjkvgfn";
    setToken(token);
    // placer ce token en cookie

    window.location.replace("/");
  } else {
    email.classList.add('is-invalid');
    password.classList.add('is-invalid');
  }
}

// => La méthode checkCredentials() permet de vérifier si on a le bon mail et le bon password. Si la vérification réussit, alors on ajoute un token en cookie (token factice tant que l'on a pas de BDD)


/* 
La connexion = 
  1- Vérifier les données utilisateurs (identifiant, mdp)
  2- Stocker un token en cookie pour valider que l'utilisateur est connecté
*/