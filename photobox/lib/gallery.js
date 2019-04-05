import loader from './photoloader.js';
import lightbox from './lightbox.js';

let configuration;

function init(configp){
    loader.init(configp.url);
    configuration=configp
    $("#lightbox_close").click(function(){
        $(".lightboc_container").toggle('slow');
    })
}

function charge(link){
    let prl;
    if(typeof link == 'string'){
        prl = loader.chargement(link);
    }
    else{
        prl = loader.chargement("/www/canals5/photobox/photos/?offset="+configuration.id+"&size="+configuration.page);
    }
    prl.then(trait);
}

function trait(e){
    let save = $('#photobox-gallery');
    let photos = e.data.photos;

    save.empty();
    photos.forEach(function(photo){
        let link = $('<div class="vignette"> <img src="'+configuration.url+photo.photo.thumbnail.href+'" data-uri="'+configuration.url+photo.links.self.href+'"><div>'+photo.photo.titre+"</div></div>");
        link.click(function(){
            lightbox.init(link);
        });
        save.append(link);
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
