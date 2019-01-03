/*
* @date: December 30th, 2018
* @author: David Ibañez
 */

document.addEventListener("DOMContentLoaded", function() {

});

var pixabay_page;

function serachKeyUp(e){
    if(e.keyCode == 13){
        if(e.target.value.trim()){
            pixabay_page = 1;
            px_api.searchPhotos(e.target.value.trim(), pixabay_page, function(results){
                if(results){
                    renderPictures(results);
                }
            });
        }
    }
}

function renderPictures(pictures) {
    var photo_list = document.querySelector('#photo-list');
    photo_list.innerHTML = '';
    if(pictures && pictures.items) {
        pictures.items.map(function(item) {
            var newDiv = document.createElement("div");
            newDiv.classList.add('item');
            newDiv.classList.add('panel');

            newDiv.innerHTML = '    <div class="image" style="background-image: url(\'' + item.preview+ '\')"></div>' +
                '    <div class="details">' +
                '        <div class="user">' +
                '            <div class="thumb" style="background-image: url(\'' + item.user_img + '\')"></div>' +
                '            <div>' + item.user + '</div>' +
                '        </div>' +
                '        <div class="views"><span class="fa fa-eye"></span> ' + formatTotals(item.views) + '</div>' +
                '        <div class="likes"><span class="fa fa-heart"></span> ' + formatTotals(item.likes) + '</div>' +
                '    </div>';

            photo_list.append(newDiv);
        })
    }
}

function formatTotals(views){
    if(views > 1000000){
        return Math.floor(views / 10000) + 'M'
    }
    if(views > 1000){
        return Math.floor(views / 1000) + 'K'
    }
    return views
}