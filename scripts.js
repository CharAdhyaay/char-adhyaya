// Handle donation form submission
document.getElementById('donation-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your donation! We will contact you soon.');
});

// Placeholder for uploading events (would require a backend)
const eventGallery = document.getElementById('event-gallery');
function uploadEvent(title, imageSrc) {
    const eventDiv = document.createElement('div');
    eventDiv.innerHTML = `<h3>${title}</h3><img src="${imageSrc}" alt="${title}">`;
    eventGallery.appendChild(eventDiv);
}
