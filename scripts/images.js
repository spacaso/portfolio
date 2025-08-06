window.onload = () => {
  const gallery = document.getElementById('image-gallery');
  const totalImages = 20; // You can change this upper limit if you have more

  for (let i = 1; i <= totalImages; i++) {
    const img = new Image();
    img.src = `images-gallery/image${i}.png`;
    img.onerror = () => {}; // ignore if image doesn't exist
    img.onload = () => {
      gallery.appendChild(img);
    };
  }
};
