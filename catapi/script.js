const API_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = 'live_V0uWPBHVTplKZG1nsBpUozddHUBhwoEFDx4UrV1K2UoVphWgv1yRD6fcR7ZCR2Na';

const imageContainer = document.getElementById('image-container');
const generateBtn = document.getElementById('generate-btn');

async function fetchCatImage() {
    try {
        generateBtn.disabled = true;
        generateBtn.textContent = 'loading...';

        const response = await fetch(`${API_URL}?limit=1`, {
            headers: {
                'x-api-key': API_KEY
            }
        });

        if(!response.ok) throw new Error('Failed to fetch image');

        const data = await response.json();
        const imageUrl = data[0].url;

        imageContainer.innerHTML = `<img src="${imageUrl}" alt="Random Cat" />`;
    } catch (error) {
        imageContainer.innerHTML = `<p>Error loading image: ${error.message}</p>`;
    } finally {
        generateBtn.disabled = false;
        generateBtn.textContent = 'Generate New Cat';
    }
}

generateBtn.addEventListener('click', fetchCatImage);

window.addEventListener('load', fetchCatImage);
