function toggleContact() {
  const panel = document.getElementById("contactPanel");
  panel.classList.toggle("open");
}

function openImage(img) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}







