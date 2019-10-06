$(document).ready(function() {
    $(".portfolio").each(index, portfolio => {
        const menu = $(portfolio).find(".menu");
        const menuAnchors = $(menu).find("a");
        const content = $(portfolio).find(".content");

        menuAnchors.each((i, anchor) => {
            $(anchor).on("click", e => {
                e.preventDefault();
                $(menuAnchors).removeClass("active");
                $(anchor).addClass("active");
                let targetElement = $(anchor).attr("href");
                $(content).removeClass("active");
                $(".content" + targetElement).addClass("active");
            });
        });
    });

    $(window).on("load resize", function() {
        if (window.matchesMedia("min-width:768px").matches) {
            $(".content-inner")
        }
    });
});