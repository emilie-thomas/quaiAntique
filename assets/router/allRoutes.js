
import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "../pages/home.html"),
    new Route("/galerie", "Galerie photo", "../pages/galerie.html"),
    new Route("/menu", "La carte", "../pages/menu.html" ),
    new Route("/signIn", "Connexion", "../pages/signIn.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";