
document.addEventListener('DOMContentLoaded', () => {
    const catGallery = document.getElementById('cat-gallery');

    fetch('http://localhost:3000/cats')
        .then(response => response.json())
        .then(data => {
            data.forEach(cat => {
                // Create a new div for each cat
                const catCard = document.createElement('div');
                catCard.className = 'cat-card';

                // Set the HTML content of the cat card
                catCard.innerHTML = `
                    <img src="${cat.ImageURL}" alt="${cat.Name}">
                    <h2>${cat.Name}</h2>
                    <p>Breed: ${cat.Breed}</p>
                    <p>Color: ${cat.Color}</p>
                    <p>Date of Birth: ${new Date(cat.DateOfBirth).toLocaleDateString()}</p>
                    <p>Adopted: ${cat.Adopted ? 'Yes' : 'No'}</p>
                `;

                // Append the cat card to the gallery
                catGallery.appendChild(catCard);
            });
        })
        .catch(error => {
            console.error('Error fetching cat data:', error);
        });
});
