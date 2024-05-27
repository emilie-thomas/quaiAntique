/*
export default class Route {
  constructor(url, title, pathHtml, pathJS = "") {
    this.url = url; // url de la page
    this.title = title; // titre de la page
    this.pathHtml = pathHtml; // lien vers le fichier HTML
    this.pathJS = pathJS; // lien vers le fichier JS
  }
}
*/
export default class Route {
  constructor(url, title, pathHtml, pathJS = "") {
    this.url = url;
    this.title = title;
    this.pathHtml = pathHtml;
    this.pathJS = pathJS;
  }
}