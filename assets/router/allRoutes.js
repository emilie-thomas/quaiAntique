
import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "../pages/home.html"),
    new Route("/galerie", "Galerie photo", "../pages/galerie.html"),
    new Route("/menu", "La carte", "../pages/menu.html" ),
    new Route("/signIn", "Connexion", "../pages/authentification/signIn.html"),
    new Route('/signUp', "Créer un compte", "../pages/authentification/signUp.html"),
    new Route("/myAccount", "Mon compte", "../pages/authentification/myAccount.html"),
    new Route("/editPassword", "Modifier mon mot de passe", "../pages/authentification/editPassword.html"),
    new Route("/manageResa", "Vos Réservations", "../pages/reservations/manageResa.html"),
    new Route("/newResa", "Nouvelle Réservation", "../pages/reservations/newResa.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";