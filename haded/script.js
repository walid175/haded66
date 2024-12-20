const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
document.getElementById('toggle-btn').addEventListener('click', function() {
  const description = document.getElementById('description');
  if (description.classList.contains('full')) {
    description.classList.remove('full');
    this.textContent = 'أقرأ المزيد';
  } else {
    description.classList.add('full');
    this.textContent = 'إخفاء';
  }
});



//معرض
// script.js
const carousel = document.querySelector('.carousel');
let isDragging = false;
let startX, scrollLeft, animation;

carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    cancelAnimation();
});

carousel.addEventListener('mouseleave', () => {
    isDragging = false;
    startAnimation();
});

carousel.addEventListener('mouseup', () => {
    isDragging = false;
    startAnimation();
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // السرعة
    carousel.scrollLeft = scrollLeft - walk;
});

function startAnimation() {
    animation = requestAnimationFrame(animate);
}

function cancelAnimation() {
    cancelAnimationFrame(animation);
}

function animate() {
    carousel.scrollLeft += 1; // التحكم في سرعة التحرك
    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
        carousel.scrollLeft = 0;
    }
    animation = requestAnimationFrame(animate);
}

// بدء الحركة تلقائيًا
startAnimation();


