$(document).ready(function() {
    $(".btn").click(function() {
        var attr = $(this).attr("data-li");

        $(".btn").removeClass("active");
        $(this).addClass("active");

        $(".item").hide();

        if (attr == "hermetismo") {
            $("." + attr).show();
        } else if (attr == "thelema") {
            $("." + attr).show();
        } else if (attr == "psicologia") {
            $("." + attr).show();
        } else if (attr == "bruxaria") {
            $("." + attr).show();
        } else if (attr == "magia-geral") {
            $("." + attr).show();
        } else if (attr == "demonologia") {
            $("." + attr).show();
        } else if (attr == "satanismo") {
            $("." + attr).show();
        } else if (attr == "goetia") {
            $("." + attr).show();
        } else if (attr == "sobrenatural") {
            $("." + attr).show();
        } else if (attr == "kabbalah") {
            $("." + attr).show();
        } else if (attr == "caos") {
            $("." + attr).show();
        } else {
            $(".item").show();
        }
    });
});