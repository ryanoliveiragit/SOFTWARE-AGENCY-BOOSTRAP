jquery(document).ready(function($){
    //fixed header
    window.onscroll = function() {
        if(window.pageYOffset > 120) {
            $('#header').addClass('active');
        } else {
            $('#header').removeClass('active');
        }
    }
});