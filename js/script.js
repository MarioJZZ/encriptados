function encryptText() {
  var text = document.getElementById("text-input").value;
  var encryptedText = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  document.getElementById("result-output").value = encryptedText;
}

function decryptText() {
  var text = document.getElementById("text-input").value;
  var decryptedText = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  document.getElementById("result-output").value = decryptedText;
}

function copyToClipboard() {
  var resultOutput = document.getElementById("result-output");
  resultOutput.select();
  document.execCommand("copy");
}


function deleteTextArea() {
  var resultOutput = document.getElementById("text-input").value = '';
  var resultOutput = document.getElementById("result-output").value = '';
}


function validateInput(event) {
  var inputStr = event.key;

  if (/[^a-z\s]/.test(inputStr)) {
    // alert("Solo se aceptan letras minúsculas.");
    event.preventDefault();
  }
}




