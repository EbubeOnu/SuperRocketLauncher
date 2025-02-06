const btn = document.getElementById('btn');

// ✅ Change button text on click
btn.addEventListener('click', function handleClick() {
  btn.textContent = 'ROCKET LAUNCHED';
  btn.style.backgroundColor = 'red'; 
});