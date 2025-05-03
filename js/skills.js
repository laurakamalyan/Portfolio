// Show skills
$(function(){
    const skills = ['html5', 'css3', 'less', 'bootstrap5', 'tailwindcss', 'javascript', 'jquery', 
        'vue3', 'php', 'mysql', 'laravel', 'python', 'git', 'github'];

    let data = '';
    for (let i = 0; i < skills.length; i++) {
        data += `<div class="col-6 col-sm-3 col-md-2 mb-3 text-uppercase skill">
                    <img src="./img/skills/${skills[i]}-icon.svg" alt="${skills[i]}" class="mt-3 mb-4">
                    <p class="text-uppercase">${skills[i]}</p>
                </div>`;
    }
    $('#skills').append(data);
});

