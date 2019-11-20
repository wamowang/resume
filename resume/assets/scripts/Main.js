window.onload = function () {


    $(window).scroll(function () {
        var currentscrollTop = $(window).scrollTop();
        var remove_active = function () {
            $('#menu').find('li.active').toggleClass('active');
        }
        if (currentscrollTop == $("#wrapperone").offset().top && currentscrollTop < $("#wrappertwo").offset().top) {
            remove_active()
            $('#menu').find('li').eq(0).toggleClass('active');
        } else if (($("#wrappertwo").offset().top - 10) <= currentscrollTop && currentscrollTop < $("#wrapperthree").offset().top) {
            remove_active()
            $('#menu').find('li').eq(1).toggleClass('active');
        } else if (($("#wrapperthree").offset().top - 10) <= currentscrollTop && currentscrollTop < $("#wrapperfour").offset().top) {
            remove_active()
            $('#menu').find('li').eq(2).toggleClass('active');
        } else if (($("#wrapperfour").offset().top - 20) <= currentscrollTop) {
            remove_active()
            $('#menu').find('li').eq(3).toggleClass('active');
        }

    });

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

        // $(this).parent().find('li').each(function () {
        //     if ($(this).hasClass('active')) {
        //         $(this).toggleClass('active');
        //     }
        // })
        // $(this).toggleClass('active');

    })


}