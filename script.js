// Compress Image
function compressImage() {
  const file = document.getElementById('fileInput').files[0];
  const percentage = document.getElementById('resizePercentage').value;

  if (file && percentage) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.src = e.target.result;

      img.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width * (percentage / 100);
        canvas.height = img.height * (percentage / 100);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(function (blob) {
          const url = URL.createObjectURL(blob);
          document.getElementById('compressedOutput').innerHTML = `<a href="${url}" download="compressed.jpg">Download Compressed Image</a>`;
        }, 'image/jpeg', 0.7);
      };
    };
    reader.readAsDataURL(file);
  } else {
    alert('Please upload an image and enter a percentage!');
  }
}

// Convert Images to PDF
function convertToPDF() {
  // Placeholder: Add PDF generation logic
}

// Generate Image Link
function generateImageLink() {
  // Placeholder: Add image upload and link generation logic
}

// Remove Background
function removeBackground() {
  // Placeholder: Add API logic for background removal
}

// Convert Image Format
function convertFormat() {
  // Placeholder: Add format conversion logic
}
