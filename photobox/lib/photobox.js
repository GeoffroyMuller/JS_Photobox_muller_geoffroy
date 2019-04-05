import gallery from './gallery.js';

let config =
    {
        url: 'https://webetu.iutnc.univ-lorraine.fr',
        id: 12,
        page: 10
    }
gallery.init(config);
$(document).ready(function(){
    $('#load_gallery').click(gallery.chargement);
});
