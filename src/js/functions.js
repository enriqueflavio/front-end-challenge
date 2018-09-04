$(document).ready(function($) {

    //background header quando usando rolagem.
    $(window).on("scroll", () => {
        if($(window).scrollTop() > 100) {
            $(".wrap-header").addClass("-fixed-color");
        } else {
            $(".wrap-header").removeClass("-fixed-color");
        }
    });
    
    //Dropdown menu da nav.
    $(".dropdown-menu").on('click', (event ) => {

        var dropdown = $(event.target).parent().children(".nav-dropdown-menu");

        if (dropdown.hasClass("-dropdown-open")) {
            dropdown.removeClass("-dropdown-open");
        }
        else {
            $(".dropdown-menu").parent().children(".nav-dropdown-menu").removeClass("-dropdown-open");
            dropdown.addClass("-dropdown-open");
        }
    });
});
