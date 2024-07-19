async function searchVideos() {
    const query = document.getElementById('searchQuery').value;
    // Simulujemy wyszukiwanie bez backendu
    const videos = [
        {
            id: 'dQw4w9WgXcQ',
            title: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
            thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/default.jpg'
        }
        // Dodaj więcej przykładowych filmów, jeśli chcesz
    ];

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video');
        videoElement.innerHTML = `
            <a href="#" onclick="playVideo('${video.id}', '${video.title}')">
                <img src="${video.thumbnail}" alt="${video.title}">
                <span>${video.title}</span>
            </a>
        `;
        resultsContainer.appendChild(videoElement);
    });
}

function playVideo(videoId, title) {
    const playerContainer = document.getElementById('player');
    playerContainer.innerHTML = `
        <h2>Odtwarzacz dla: ${title}</h2>
        <video controls width="640" height="360">
            <source src="https://www.y2mate.com/youtube/${videoId}" type="video/mp4">
            Twoja przeglądarka nie obsługuje tego formatu wideo.
        </video>
        <br>
        <a href="https://www.y2mate.com/youtube/${videoId}" target="_blank">Pobierz filmik</a>
    `;
}
