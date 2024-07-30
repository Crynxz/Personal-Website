window.addEventListener('scroll', () => {
  const scrollPosition1 = window.scrollY;
  const triggerPosition1 = 901;  // First transition trigger point
  const triggerPosition2 = 1800; // Second transition trigger point

  // Define background colors for each transition
  const color1 = 'linear-gradient(to bottom, #00008b, #000033)';
  const color2 = '#00008b'; // Color after first transition
  const color3 = '#000000'; // Color for the third transition

  if (scrollPosition1 <= triggerPosition1) {
    document.body.classList.remove('active', 'third-active'); // Reset classes
    document.body.style.backgroundColor = color1; // Set background color directly for first part
  } else if (scrollPosition1 <= triggerPosition2) {
    document.body.classList.add('active'); // First transition
    document.body.classList.remove('third-active'); // Reset third transition
    document.body.style.backgroundColor = ''; // Allow transition to take effect
  } else {
    document.body.classList.add('active', 'third-active'); // Apply both transitions
    document.body.style.backgroundColor = color3; // Set background color directly for third part
  }
});



function goToPortfolio() {
  const targetElement = document.getElementById("portfolio-section");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}