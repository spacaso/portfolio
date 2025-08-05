document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.querySelector("#contact-btn");

  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      alert("📨 Contact Spacaso via Discord: spacaso");
    });
  }
});
