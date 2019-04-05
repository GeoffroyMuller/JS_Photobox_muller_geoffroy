import photoloader from './photoloader.js';

function traitement(vignette){
    let pr = photoloader.chargByUrl(vignette.children[0].dataset['uri']);
    pr.then(info);
    $("#lightbox_title").text($(vignette.children[1]).html());
    $("#lightbox_full_img")[0].src=vignette.children[0].src;
    next(vignette);
    prev(vignette);
}
function init(v){
    let vignette = v[0];
    traitement(vignette)
    $(".lightboc_container").toggle('slow');
    $("li").click(function(e){
        $(e.target).addClass("select");
        $(e.target).siblings().removeClass("select");
        $("."+$(e.target)[0].id).css("display","block");
        $("."+$(e.target)[0].id).siblings("div").css("display","none");
    });
}

function info(e){
    $("#lightbox-info .descr").text(e.data.photo.descr);
    $("form")[0].action=photoloader.getApi()+e.data.links.comments.href;
    let pr = photoloader.chargement(e.data.links.comments.href);
    pr.then(commentaire);
}

function commentaire(e){
    let commentaires = $(".Commentaires").text("");
    e.data.comments.forEach(function(com){
        let comment = $('<li style="margin:10px;"><div id="head" style="text-align:left;"><h1 style=" color: #ad461f;display:inline-block;">'+com.pseudo+' :</h1><h1 style="display:inline-block;">'+com.titre+'</h1><p>'+com.content+'</p></li>');
        commentaires.append(comment);
    });
}

function next(vignette){
    $("#lightbox_next").unbind('click').click(function(){
        try {
            traitement($(vignette).next()[0]);
        } catch (e) {

        }
    })
}

function prev(vignette){
    $("#lightbox_prev").unbind('click').click(function(){
        try {
            traitement($(vignette).prev()[0]);
        } catch (e) {

        }
    })
}


export default {
    init:init,
};
