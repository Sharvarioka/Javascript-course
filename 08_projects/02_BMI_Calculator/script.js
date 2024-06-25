const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const h = parseInt(document.getElementById("height").value);
  const w = parseInt(document.getElementById("weight").value);
  const results = document.getElementById("results");
  const weightGuide = document.getElementById("weight-guide");

  if (h == '' || h < 0 || isNaN(h)) {
    results.innerHTML = "Please enter correct value of height";
  } else if (w == '' || w < 0 || isNaN(w)) {
    results.innerHTML = "Please enter correct value of weight";
  } else {
    const p = document.createElement('p');
    const bmi = (w / ((h * h) / 10000)).toFixed(2);
    results.innerHTML = bmi;
    if (bmi < 18.6) {
      p.appendChild(document.createTextNode('You are under weight'));
    } else if (bmi >= 18.6 && bmi < 24.9) {
      p.appendChild(document.createTextNode('You are in normal range'));
    } else if (bmi > 24.9) {
      p.appendChild(document.createTextNode('You are over weight'));
    }
    results.appendChild(p)
  }
})