! function ($) {
    "use strict";
   
    // WhatsApp Button
    let url = 'https://api.whatsapp.com/send?phone=551138575322&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20JJ%20Consulting.';

    let btn = document.getElementById("btnFlutuante");
    if (btn) {
        btn.addEventListener("click", function () {
            window.open(url, '_blank');
        });
    }

    // Hero Words Rotate
    $("#js-rotating").Morphext({
        animation: "flipInX",
        separator: "|",
        speed: 3000,
    });

    window.addEventListener("scroll", function() {
        const navbar = document.querySelector(".navbar-custom");
        if (window.scrollY > 50) { // Quando a rolagem ultrapassar 50px
            navbar?.classList.add("scrolled");
        } else {
            navbar?.classList.remove("scrolled");
        }
    });
}(jQuery);