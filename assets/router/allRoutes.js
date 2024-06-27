
import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "../pages/home.html", []),
    new Route("/galerie", "Galerie photo", "../pages/galerie.html", [], "../assets/js/authentification/showAndHide.js"),
    new Route("/menu", "La carte", "../pages/menu.html", [], "../assets/js/authentification/showAndHide.js"),
    new Route("/signIn", "Connexion", "../pages/authentification/signIn.html", ["disconnected"], "../assets/js/authentification/signIn.js"),
    new Route('/signUp', "Créer un compte", "../pages/authentification/signUp.html", ["disconnected"], "../assets/js/authentification/signUp.js"),
    new Route("/myAccount", "Mon compte", "../pages/authentification/myAccount.html", ["client", "admin"]),
    new Route("/editPassword", "Modifier mon mot de passe", "../pages/authentification/editPassword.html", ["client", "admin"]),
    new Route("/manageResa", "Vos Réservations", "../pages/reservations/manageResa.html", ["clients"]),
    new Route("/newResa", "Nouvelle Réservation", "../pages/reservations/newResa.html", ["clients"]),
    new Route("/manageMenu", "Gérer la carte", "../pages/gestionCarte/manageMenu.html", ["admin"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";