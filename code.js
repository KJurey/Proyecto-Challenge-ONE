//Alert user if textarea is empty
function checkIfTextareaIsEmpty(){
  const texto = document.getElementById('textarea').value;
  if(texto === ""){
    alert("Prueba nuevamente e ingresa el texto por favor.");
  }
}

//Test if text has Uppercase or special chars
function Uppercasetest(){
  const texto = document.getElementById('textarea').value;
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const accent = /[áéíóú]/;
  const numbers = /[1234567890]/;
  let testnumbers = numbers.test(texto);
  let testaccent = accent.test(texto);
  let testUppercase = /[A-Z]/.test(texto);
  let testspecialchars = specialChars.test(texto);
  return (testUppercase || testspecialchars || testaccent || testnumbers);
}

//Text encryption
function Encriptar(){
    const texto = document.getElementById('textarea').value;
    const chars = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat',
    }
    let newtext = texto.replace(/[aeiou]/g, m => chars[m]);
    if(!Uppercasetest()){
      document.getElementById("p-encription-box").innerHTML = newtext;
    }
    else{
      alert("Prueba nuevamente, recuerda que no está permitido el uso de mayúsculas o uso de caracteres especiales.");
      }
    
    if((texto !== "") && !Uppercasetest()){
      divchange();
    }
    checkIfTextareaIsEmpty();
    Uppercasetest();
}

//Text Decryption
function Desencriptar(){
    const texto = document.getElementById('textarea').value;
    const strings = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u',
    }
    let newtext = texto.replace(/ai|enter|imes|ober|ufat/g, m => strings[m]);
    if(!Uppercasetest()){
      document.getElementById("p-encription-box").innerHTML = newtext;
    }
    else{
      alert("Prueba nuevamente, recuerda que no está permitido el uso de mayúsculas");
      }
    
    if((texto !== "") && !Uppercasetest()){
      divchange();
    }
    checkIfTextareaIsEmpty();
    Uppercasetest();
}

//Initial state for DivBox
function hideInitialDivBox() {
  document.getElementById("initial-div-box").style.display = "block";
  document.getElementById("initial-div-box-button").style.display = "none";
}

//Update state for DivBox; DivBox hidden; button hidden
function divchange(){
  document.getElementById("initial-div-box").style.display = "none";
  document.getElementById("initial-div-box-button").style.display = "block";
}

//Copy button for text inside DivBox
function CopyText() {
    const copyText = document.getElementById("p-encription-box");
    let text = copyText.innerText;
    navigator.clipboard.writeText(text);
  }

//Update state for DivBox when textarea is empty; divbox visible, button hidden
  function textareachange(){
    const texto = document.getElementById('textarea').value;
    if(texto === ""){
      document.getElementById("initial-div-box").style.display = "block";
      document.getElementById("initial-div-box-button").style.display = "none";
      Clear();
    }
  }

//Clear text within DivBox when textarea is empty
  function Clear(){
    let pencriptionbox = document.getElementById('p-encription-box');
    let newtext = pencriptionbox.innerHTML.replace(/\w/g, "");
    pencriptionbox.innerHTML = newtext;
  }

  window.addEventListener('load', hideInitialDivBox);