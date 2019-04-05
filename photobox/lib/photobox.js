//import loader from "./lib/photoloader.js";
import gallery from './gallery.js';

let config =
    {
        url: 'https://webetu.iutnc.univ-lorraine.fr',
        id: 12,
        page: 10
    }

gallery.init(config);

$(document).ready(function(){
    //document.querySelector("#load_gallery").addEventListener('click',l);
    $('#load_gallery').click(gallery.chargement);
});

