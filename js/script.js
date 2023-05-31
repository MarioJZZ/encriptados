const textArea = document.getElementById("text-input");
const mensaje = document.getElementById("text-output");

function validarTexto(){
  let textoEscrito = document.getElementById("text-input").value;
  let validador = textoEscrito.match(/^[a-z]*$/);

  if(!validador || validador === 0) {
      alert("Solo son permitidas letras minúsculas y sin acentos")
      location.reload();
      return true;
  }
}

function encryptText() {
  if (!validarTexto()) {
    let text = document.getElementById("text-input").value;
    let encryptedText = text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    document.getElementById("result-output").value = encryptedText;
  }
}

function decryptText() {
  let text = document.getElementById("text-input").value;
  let decryptedText = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  document.getElementById("result-output").value = decryptedText;
}

function copyToClipboard() {
  let resultOutput = document.getElementById("result-output");
  resultOutput.select();
  navigator.clipboard.writeText(resultOutput.value);
  alert("Texto Copiado")
}


function deleteTextArea() {
   resultOutput = document.getElementById("text-input").value = '';
   resultOutput = document.getElementById("result-output").value = '';
}

function validateInput(event) {
  var inputStr = event.key;

  if (/[^a-z\s]/.test(inputStr)) {
    // alert("Solo se aceptan letras minúsculas.");
    event.preventDefault();
  }
}


 










