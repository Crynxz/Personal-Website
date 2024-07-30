function openOverlay(pdfSrc) {
  document.getElementById('pdfFrame').src = pdfSrc;
  document.getElementById('pdfOverlay').style.display = 'flex';
}

function closeOverlay() {
  document.getElementById('pdfOverlay').style.display = 'none';
  document.getElementById('pdfFrame').src = ''; // Clear the src to stop the PDF from loading when overlay is closed
}