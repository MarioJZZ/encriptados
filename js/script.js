function validateInput(event) {
  let inputStr = event.key;

  if (/[^a-z\s]/.test(inputStr)) {
    event.preventDefault();
  }
}

function validateText(event) {
  let textinput = document.getElementById("text-input").value;
  let check = textinput.match(/^[a-z\s]*$/);

  if (!check || check === 0) {
    alert("Only lowercase letters and no accents are allowed.");
    location.reload();
    return true;
  }
}

function encryptText() {
  if (!validateText()) {
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
  alert("Copied text");
}

function deleteTextArea() {
  resultOutput = document.getElementById("text-input").value = "";
  resultOutput = document.getElementById("result-output").value = "";
}
