

// les fonctions utilisées ici pour gérer les cookies sont des méthodes pré-faites

// Méthode pour placer un cookie :
function setCookie(name, value, days) {
  var expires = "";
  if(days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Méthode pour récupérer un cookie :
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

// Méthode pour effacer un cookie :
function eraseCookie(name) {   
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


// Méthode pour stocker le token en cookie (et c'est la présence de ce token qui définit si on est connecté ou non)

const tokenCookieName = "accesstoken";

function setToken(token){
    setCookie(tokenCookieName, token, 7); //(nom du cookie, valeur du cookie, temps de validité du cookie (jours))
}

function getToken(){
    return getCookie(tokenCookieName);
}


// Savoir si on est connecté (essaie de récupérer le token en cookie) :

function isConnected(){
  if(getToken() == null || getToken == undefined) {
    return false;
  } else {
    return true;
  }
}

if(isConnected()) {
  alert('Vous êtes connectés');
} else {
  alert('Vous n\'êtes pas connecté');
}