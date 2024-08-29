function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  }
}

window.addEventListener('scroll', throttle(() => {
  const scrollPosition1 = window.scrollY;
  const triggerPosition1 = 901;
  const triggerPosition2 = 1800;

  const color1 = 'linear-gradient(to bottom, #00008b, #000033)';
  const color2 = '#00008b';
  const color3 = '#000000';

  if (scrollPosition1 <= triggerPosition1) {
    document.body.classList.remove('active', 'third-active');
    document.body.style.backgroundColor = color1;
  } else if (scrollPosition1 <= triggerPosition2) {
    document.body.classList.add('active');
    document.body.classList.remove('third-active');
    document.body.style.backgroundColor = '';
  } else {
    document.body.classList.add('active', 'third-active');
    document.body.style.backgroundColor = color3;
  }
}, 100)); // Limit to running every 100ms


function goToPortfolio() {
  const targetElement = document.getElementById("portfolio-section");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
