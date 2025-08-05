// Open the modal
function openContactModal() {
  document.getElementById("contactModal").style.display = "flex";
}

// Close the modal
function closeContactModal() {
  document.getElementById("contactModal").style.display = "none";
}

// Close modal on outside click
window.onclick = function (event) {
  const modal = document.getElementById("contactModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
