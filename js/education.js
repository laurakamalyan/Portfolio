// Show education
$(function(){
    const data = [
        {
            university: 'SourceCode Development Company',
            year: '2024',
            degree: 'Full Stack Web Developer Training',
            faculty: '',
        },
        {
            university: 'National Polytechnic University of Armenia',
            year: '2017-2019',
            degree: 'Master\'s Degree',
            faculty: 'Faculty of Computer Systems and Informatics, departament of Information Security and Software Development',
        },
        {
            university: 'National Polytechnic University of Armenia',
            year: '2013-2017',
            degree: 'Bachelor\'s Degree',
            faculty: 'Faculty of Computer Systems and Informatics, departament of Information Security and Software Development',
        },
    ];

    let education = '';
    for (let i = 0; i < data.length; i++) {
        education += `<div>
                    <h5 class="fw-bold mb-0">${data[i].university}</h5>
                    <p class="fw-bold mb-0">${data[i].degree}</p>
                    <p class="mb-0">${data[i].year}</p>
                    <p class="text-muted">${data[i].faculty}</p>
                </div>`;
    }
    $('#education').append(education);
});

