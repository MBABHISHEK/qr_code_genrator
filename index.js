document.addEventListener("DOMContentLoaded", () => {
  const qrForm = document.getElementById("qrForm");
  const qrCodeContainer = document.getElementById("qrCodeContainer");

  qrForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const urlInput = document.getElementById("urlInput");
    const url = urlInput.value;

    if (!url.trim()) {
      alert("Please enter a valid URL");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/generate-qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate QR code");
      }

      // Clear previous QR code
      qrCodeContainer.innerHTML = "";

      // Create QR code image element
      const qrImage = document.createElement("img");
      qrImage.src = `http://localhost:3000/qr_img.png?${Date.now()}`; // Add a timestamp to prevent caching
      qrImage.alt = "QR Code";

      // Append the QR code image to the specified div
      qrCodeContainer.appendChild(qrImage);
    } catch (error) {
      console.error(error);
      alert("Failed to generate QR code. Please try again.");
    }
  });
});
