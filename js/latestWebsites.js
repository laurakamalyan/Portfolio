import {websites} from './websites.js';

// Show portfolio
$(function(){
    let data = '';
    for (let i = websites.length - 1; i >= websites.length - 6; i--) { 
        data += `<div class="col-md-6 mb-4">
                    <div class="site">
                        <a href="${websites[i].href}" target="_blank">
                            <img src="${websites[i].src}" alt="${websites[i].alt}" class="img-fluid">
                        </a>
                        <h5 class="website_name">${websites[i].alt}</h5>
                    </div>
                </div>`;
    }
    $('#websites').append(data);
});

