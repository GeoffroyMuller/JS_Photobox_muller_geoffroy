let api_url;


let init = function(url){
    api_url = url;
}

let chargement = function(ressource){
    console.log(api_url + ressource);
    return axios.get(
        api_url + ressource,
        {
            responseType: 'json',
            withCredentials: true
        }
    ).catch(function (e){alert('echec reseau')});
}

export default {
    init: init,
    chargement: chargement
};
