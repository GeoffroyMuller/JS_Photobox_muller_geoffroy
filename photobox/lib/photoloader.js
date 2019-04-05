let api_url;

let init = function (url){
    api_url = url;
}

function charg(ressource){
    return axios.get(
        api_url + ressource,
        {
            responseType: 'json',
            withCredentials: true
        }
    ).catch(function(e){alert('error')});
}

function chargByUrl(url){
    return axios.get(
        url,
        {
            responseType: 'json',
            withCredentials: true
        }
    ).catch(function(e){alert('error')});
}

function getApi(){
    return api_url;
}
export default {
    init : init,
    chargement: charg,
    chargByUrl: chargByUrl,
    getApi: getApi,
};
