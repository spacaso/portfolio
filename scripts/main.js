// Contact Modal Logic
function openContactModal() {
  document.getElementById('contact-modal').style.display = 'flex';
}

function closeContactModal() {
  document.getElementById('contact-modal').style.display = 'none';
}

// Close modal if clicked outside
window.onclick = function(event) {
  const modal = document.getElementById('contact-modal');
  if (event.target === modal) {
    closeContactModal();
  }
};
