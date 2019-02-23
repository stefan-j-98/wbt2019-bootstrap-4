window.onload=function(){
    $(".navbar").css("background-color", "#363334");
    var $win = $(window);
    $win.scroll(function () {
        if ($win.scrollTop() == 0) {
            $(".navbar").css("background-color", "#363334");
        }
    });
    window.onscroll = function () {
        ScrollEffect()
        $(".navbar").css("background-color", "#212529");
    };
};