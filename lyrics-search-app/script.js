const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiURL = 'https://api.lyrics.ovh';
// THIS APU IS CURRENTLY DOWN

// Search by song or artist
async function searchSongs(term) {

    const response = await fetch(`${apiURL}/suggest/${term}`);
    const data = await response.json();

    showData(data);
}

// Show song and artist in Dom
function showData(data) {
    let output = '';

    data.data.forEach(song => {
        output += `<li>
        <span>${song.artist.name} - ${song.title}</span>
        <button class ="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}"></button>
        </li>
        `;
    });

    result.innerHTML = `
    <ul class="songs">
    ${output}
    </ul>
    `;
}

// Event listeners
form.addEventListener('submit', event => {
    event.preventDefault();

    const searchTerm = search.value.trim();

    if (!searchTerm) {
        alert('Please type in a search term');
    } else {
        searchSongs(searchTerm);
    }
})