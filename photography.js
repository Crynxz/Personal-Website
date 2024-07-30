document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');
  
  const overlay = document.getElementById('overlay');
  const closeOverlayButton = document.getElementById('close-overlay');
  const clickableImages = document.querySelectorAll('.click-to-view img');

  console.log('Overlay:', overlay);
  console.log('Close button:', closeOverlayButton);
  console.log('Clickable images:', clickableImages);

  if (clickableImages.length === 0) {
    console.error('No clickable images found');
  } else {
    clickableImages.forEach(img => {
      img.addEventListener('click', function () {
        overlay.classList.remove('hidden');
      });
    });
  }

  closeOverlayButton.addEventListener('click', function () {
    overlay.classList.add('hidden');
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
      overlay.classList.add('hidden');
    }
  });
});


function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}