function generateFields1() {
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

  var inputC = document.createElement('input');
  inputC.setAttribute('type', 'text');
  inputC.setAttribute('id', 'sideC');
  inputC.setAttribute('placeholder', 'Введіть сторону C');
  inputC.style.marginRight = '20px';
  document.getElementById('specialFields').appendChild(inputC);

  var checkButton = document.createElement('button');
  checkButton.innerText = 'Перевірити';
  checkButton.style.marginRight = '20px';
  checkButton.onclick = checkTriangleAndSaveResult; 
  document.getElementById('specialFields').appendChild(checkButton);
}

function checkTriangleAndSaveResult() {
  var sideA = parseFloat(document.getElementById('sideA').value);
  var sideB = parseFloat(document.getElementById('sideB').value);
  var sideC = parseFloat(document.getElementById('sideC').value);
  if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC)) {
    if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
      var result = "Можливо побудувати трикутник";
    } else {
      var result = "Не можливо побудувати трикутник";
    }
  } else {
    var result = "Будь ласка, введіть числа у всі поля";
  }
  alert(result);
  document.cookie = "triangleResult=" + result;
  alert(document.cookie = "triangleResult=" + result);
}

window.onbeforeunload = function() {
  var cookieData = document.cookie;
  console.log(cookieData);
  alert(cookieData);
  if (cookieData !== "") {
      return confirm("На сторінці є збережені дані. Перезавантажити сторінку?");
  }
};