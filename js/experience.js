// Show experience
$(function(){
    const data = [
        {
            company: 'CodeIdea',
            year: '2024-2025 (3 months)',
            experience: 'Internship of web programming (Vue 3 / Laravel)',
        },
        {
            company: 'Due-X',
            year: '2017 (3 months)',
            experience: 'Internship of web programming (front-end)',
        },
        {
            company: 'D-Link',
            year: '2015 (2 months)',
            experience: 'Internship of network programming in C',
        },
    ];

    let experience = '';
    for (let i = 0; i < data.length; i++) {
        experience += `<div>
                    <h5 class="fw-bold mb-0">${data[i].company}</h5>
                    <p class="mb-0">${data[i].year}</p>
                    <p class="text-muted">${data[i].experience}</p>
                </div>`;
    }
    $('#experience').append(experience);
});

