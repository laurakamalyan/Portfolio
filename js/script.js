$(function(){
    // Add navbar
    $('#menu').load('navbar.html');
    // Add footer
    $('#footer').load('footer.html');

    // Typed text
    var options = {
        strings: ["Full Stack Developer", "Front End Developer", "Back End Developer"],
        typeSpeed: 50,
        backSpeed: 50, 
        startDelay: 500,  
        loop: true,
    };

    var typed = new Typed("#typed-output", options);
});

