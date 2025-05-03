// Change navbar color on scroll
$(function(){
    let sections = document.querySelectorAll('section'); 
    let scroll_pos = 0;
    $(document).scroll(function(){
        // Change navbar style on scroll
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) $('nav').addClass('scrolled');
        else if (scroll_pos == 0 && $('body').width() > 575) $('nav').removeClass('scrolled');

        // Add active class on navbar link on scroll
        sections.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop - 70;
            let height = section.offsetHeight;
            let id = section.getAttribute('id'); 

            if (top >= offset && top < offset + height) {
                $(".nav-link").removeClass("active");
                $(`.nav-item > a[href*= ${id}]`).addClass("active");
            }  
        });
    });
});

