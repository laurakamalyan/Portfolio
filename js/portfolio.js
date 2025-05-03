import {websites} from './websites.js';

$(function(){
    $('#allSites, #basicSites, #bootstrap3Sites, #bootstrap5Sites').empty();

    websites.reverse().forEach(site => {
        let card = `<div class="col-md-4 mb-4">
                        <div class="site">
                            <a href="${site.href}" target="_blank">
                                <img src="${site.src}" alt="${site.alt}" class="img-fluid">
                            </a>
                            <h6 class="fw-bold mt-2">${site.alt}</h6>
                            <p>🛠️ ${site.tech}</p>
                        </div>
                    </div>`;

        $('#allSites').append(card);

        if (site.category === 'basic') $('#basicSites').append(card);
        else if (site.category === 'bootstrap3') $('#bootstrap3Sites').append(card);
        else if (site.category === 'bootstrap5') $('#bootstrap5Sites').append(card);
        else if (site.category === 'php') $('#phpSites').append(card);
    });

    // Add footer
    $('#footer').load('footer.html');
});

