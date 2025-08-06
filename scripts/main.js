// LIGHTBOX FUNCTIONALITY
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// MODAL FUNCTIONALITY
const modal = document.getElementById('contactModal');
const contactBtn = document.querySelector('.contact-btn');
const closeModal = document.querySelector('.close');

if (contactBtn && modal && closeModal) {
  contactBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}




