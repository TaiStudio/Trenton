$(document).ready(() => {


    //CAROUSSEL
    carrousel();
    setInterval(() => {
        carrousel();
    }, 5000);

});


function carrousel(){
    $('.carrousel').each((index, element) => {
        let current = 0;
        console.log(element);
        $(`${element} img`).each((i, el) => {
            if($(el).hasClass('hide') == false){
                $(el).addClass('hide');
            }
            if($(el).hasClass('hide') == true){
                $(el).removeClass('hide');
            }
        });
    });
}