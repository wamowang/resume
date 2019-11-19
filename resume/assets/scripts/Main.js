window.onload = function () {

    $('#menu li').click(function () {
        var _index = $(this).index();
        var _item = "";
        switch (_index) {
            case 0:
                _item = "#wrapperone"
                break;
            case 1:
                _item = "#wrappertwo"
                break;
            case 2:
                _item = "#wrapperthree"
                break;
            case 3:
                _item = "#wrapperfour"
                break;
        }
        $('html, body').animate({
            scrollTop: $(_item).offset().top
        }, 600);

        $(this).parent().find('li').each(function () {
            if ($(this).hasClass('active')) {
                $(this).toggleClass('active');
            }
        })
        $(this).toggleClass('active');

    })


}