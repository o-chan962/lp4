$(".qa__accordion-title").on("click", function () {
    $(this).parent().toggleClass("open");
    $(this).next().slideToggle();
});