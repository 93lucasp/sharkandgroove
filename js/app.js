var App = function() {
    return {
        hamburger: function(e) {
            ($(e).hasClass('active') === true) ? $(e).removeClass('active'): $(e).addClass('active');
            $('.navBar__menu').slideToggle('slow');

        },
        init: function() {
            new WOW().init();
        }
    };
}();
App.init();
