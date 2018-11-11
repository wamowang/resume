(function ($) {

    /**
     * the button to send the email to me
     */
    $('#sendemail').click(function (event) {
        event.preventDefault();
        var email = 'wamowang@hotmail.com';
        var subject = "HI! I'm " + $('#contactname').val() + " nice to meet you!";
        var emailBody = $('#contactmessage').val();
        window.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
    })
    /**
     * the button to clear the all email field
     */
    $('#clearmail').click(function (event) {
        event.preventDefault();
        $('#contactname').val("");
        $('#contactmessage').val("");
    })

    $('#powercloudandroid').click(function (event) {
        event.preventDefault();
        window.open('https://play.google.com/store/apps/details?id=tw.com.ite2.powercloud');
    })

    $('#powercloudios').click(function (event) {
        event.preventDefault();
        window.open('https://itunes.apple.com/tw/app/powercloud/id989675113?mt=8');
    })
    
    $('#travelandroid').click(function (event) {
        event.preventDefault();
        window.open('https://play.google.com/store/apps/details?id=com.weimowang.myapplication');
    })

    $('#gemandroid').click(function (event) {
        event.preventDefault();
        window.open('https://play.google.com/store/apps/details?id=com.ite2.CourseManage');
    })

    $('#gemios').click(function (event) {
        event.preventDefault();
        window.open('https://itunes.apple.com/tw/app/雲集體適能/id1274980641?mt=8');
    })

    $('#billandroid').click(function (event) {
        event.preventDefault();
        window.open('https://play.google.com/store/apps/details?id=com.ite2.billagent&hl=zh_TW');
    })

    $('#billios').click(function (event) {
        event.preventDefault();
        window.open('https://itunes.apple.com/tw/app/帳單小幫手/id1244607677?mt=8');
    })
    
})(jQuery);
