function generateFields() {
  document.getElementById('specialFields').innerHTML = '';

  var inputA = document.createElement('input');
  inputA.setAttribute('type', 'text');
  inputA.setAttribute('id', 'sideA');
  inputA.setAttribute('placeholder', 'Введіть сторону A');
  inputA.style.marginRight = '10px'; 
  document.getElementById('specialFields').appendChild(inputA);

  var inputB = document.createElement('input');
  inputB.setAttribute('type', 'text');
  inputB.setAttribute('id', 'sideB');
  inputB.setAttribute('placeholder', 'Введіть сторону B');
  document.getElementById('specialFields').appendChild(inputB);

  var calculateButton = document.createElement('button');
  calculateButton.innerText = 'Обчислити площу ромба';
  calculateButton.onclick = calculateArea;
  document.getElementById('specialFields').appendChild(calculateButton);

  document.getElementById('div3').appendChild(document.getElementById('result'));
}

function calculateArea() {
  var sideA = parseFloat(document.getElementById('sideA').value);
  var sideB = parseFloat(document.getElementById('sideB').value);
  if (!isNaN(sideA) && !isNaN(sideB)) {
    var area = (sideA * sideB) / 2;
    document.getElementById('result').innerText = "Площа ромба: " + area;
  } else {
    document.getElementById('result').innerText = "Введіть,будь ласка,числа";
  }
}