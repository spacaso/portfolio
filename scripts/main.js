function openContactModal() {
  document.getElementById("contact-modal").style.display = "flex";
}

function closeContactModal() {
  document.getElementById("contact-modal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("contact-modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
