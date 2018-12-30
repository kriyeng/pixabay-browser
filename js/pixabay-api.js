
( function(window) {

    'use strict';

    var api_connector = {
        searchPhotos : searchPhotos
    };

    function searchPhotos(search_terms, page, callback) {
        var data = {
            key : pixabay_key,
            q : search_terms,
            image_type : 'photo',
            lang : 'en',
            page : page ? page : null
        };
        ajax.get('https://pixabay.com/api/', data, function (err, result) {

            if(!err && result && result.hits){
                var items = [];
                result.hits.forEach(function (item) {
                    items.push({
                            type : 'cloud',
                            preview : item.previewURL,
                            url : item.fullHDURL,
                            user : item.user,
                            user_img : item.userImageURL,
                            views : item.views,
                            likes : item.likes
                        });
                });
                callback({ totalHits : result.totalHits, items : items });
            } else {
                callback();
            }
        });
    }

    window.px_api = api_connector;

})(window);

