// Generate flying images
const numImages = 40; // Number of flying images
const container = document.querySelector('.background-images');

for (let i = 0; i < numImages; i++) {
  const img = document.createElement('img');
  img.src = 'white-heart.png'; // Replace 'heart.png' with your flying image
  img.style.left = `${Math.random() * 100}%`; // Random horizontal position
  img.style.animationDelay = `${Math.random() * 20}s`; // Random animation delay
  container.appendChild(img);
}
