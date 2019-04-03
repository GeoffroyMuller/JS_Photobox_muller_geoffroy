import loader from "./photoloader.js";

let id;

let init = function (idp) {
    id = idp;
}
let chargement = function () {
    loader.init("https://webetu.iutnc.univ-lorraine.fr");
    let l = loader.chargement("/www/canals5/photobox/photos/?offset=23&size=12");
    l.then(traite);
}

let traite = function (e) {
    let save = $("#photobox-gallery");
    save.empty();
    console.log(save);
    let photos = e.data.photos;

    //console.log(photo[0].photo.original.href);
    photos.forEach(function (photo) {
        console.log(photo);
        let link = $("<div class=\"vignette\" ><img" +
            "                  data-img=\"https://webetu.iutnc.univ-lorraine.fr" + photo.photo.original.href + "\""+
            "                  data-uri=\"https://webetu.iutnc.univ-lorraine.fr" + photo.links.self.href + "\""+
            "                  src=\"https://webetu.iutnc.univ-lorraine.fr" + photo.photo.thumbnail.href + "\""+ ">" +
            "                  <div>"+photo.photo.titre+"</div>" +
            "              </div>");
        save.append(link);
    });

}


export default {
    init: init,
    chargement: chargement
};
