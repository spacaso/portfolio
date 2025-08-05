function openContactModal() {
  document.getElementById("contact-modal").style.display = "flex";
}

function closeContactModal() {
  document.getElementById("contact-modal").style.display = "none";
}

// Optional: close modal when clicking outside the box
window.onclick = function (event) {
  const modal = document.getElementById("contact-modal");
  if (event.target === modal) {
    closeContactModal();
  }
};

