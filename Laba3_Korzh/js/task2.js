function swapText() {
    var text1 = document.getElementById('div1').childNodes[2];
    var text6 = document.getElementById('div6').childNodes[2];
    var temp = text1.nodeValue;
    text1.nodeValue = text6.nodeValue;
    text6.nodeValue = temp;
}