document.addEventListener('DOMContentLoaded', () => {
    const genreSelect = document.getElementById('genre-select');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const resultsSection = document.getElementById('results');

    function fetchShows(query, genre) {
        const url = `http://api.tvmaze.com/search/shows?q=${query}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const shows = data.map(item => item.show);
                displayResults(shows, genre);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function displayResults(shows, genre) {
        resultsSection.innerHTML = '';
        shows
            .filter(show => !genre || show.genres.includes(genre))
            .forEach(show => {
                const showElement = document.createElement('div');
                showElement.classList.add('result-item');
                showElement.innerHTML = `
                    <img src="${show.image ? show.image.medium : 'https://via.placeholder.com/200'}" alt="${show.name}">
                    <h3>${show.name}</h3>
                    <p>${show.summary ? show.summary.replace(/<[^>]+>/g, '').substring(0, 100) + '...' : 'Brak opisu'}</p>
                `;
                resultsSection.appendChild(showElement);
            });
    }

    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        const genre = genreSelect.value;
        fetchShows(query, genre);
    });
});
