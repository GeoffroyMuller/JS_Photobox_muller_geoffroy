import photoloader from './photoloader.js';
import lightbox from './lightbox.js';

let config;

function init(conf){
    photoloader.init(conf.url);
    config=conf
    $("#lightbox_close").click(function(){
        $(".lightboc_container").toggle('slow');
    })
}

function charge(link){
    let pr;
    if(typeof link !== 'string'){
        pr = photoloader.chargement("/www/canals5/photobox/photos/?offset="+config.id+"&size="+config.page);
    }
    else{
        pr = photoloader.chargement(link);
    }
    pr.then(trait);
}

function trait(e){
    let photos = e.data.photos;
    let gal = $('#photobox-gallery');
    gal.empty();
    photos.forEach(function(photo){
        let vignette = $('<div class="vignette"> <img src="'+config.url+photo.photo.thumbnail.href+'" data-uri="'+config.url+photo.links.self.href+'"><div>'+photo.photo.titre+"</div></div>");
        vignette.click(function(){
            lightbox.init(vignette);
        });
        gal.append(vignette);
    });
    $(document).ready(function(){
        $('#next').unbind('click').click(function(){
            charge(e.data.links.next.href);
        });
        $('#previous').unbind('click').click(function(){
            charge(e.data.links.prev.href);
        });
    });
}

export default {
    init: init,
    chargement: charge,
};
