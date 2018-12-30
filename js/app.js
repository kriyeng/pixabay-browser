/*
* @date: December 30th, 2018
* @author: David Ibañez
 */

document.addEventListener("DOMContentLoaded", function() {

});

function serachKeyUp(e){
    if(e.keyCode == 13){
        if(e.target.value.trim()){
            px_api.searchPhotos(e.target.value.trim(), function(result){

            });
        }
    }
}