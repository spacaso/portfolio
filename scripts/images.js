const imageFolder = 'images-gallery/';
const supportedExtensions = ['png', 'jpg', 'jpeg', 'webp'];
const totalImagesToTry = 50; // change if needed
const gallery = document.getElementById('image-gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

for (let i = 1; i <= totalImagesToTry; i++) {
  for (let ext of supportedExtensions) {
    const img = new Image();
    img.src = `${imageFolder}image${i}.${ext}`;
    img.alt = `Image ${i}`;
    img.className = 'gallery-img';

    img.onload = () => {
      img.onclick = () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
      };
      gallery.appendChild(img);
    };

    img.onerror = () => {
      // silently fail if the image doesn't exist
    };

    break;
  }
}

// Lightbox close
lightbox.onclick = () => {
  lightbox.style.display = 'none';
};
