function openContact() {
  document.getElementById("contactModal").style.display = "block";
}

function closeContact() {
  document.getElementById("contactModal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("contactModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
