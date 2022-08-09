function getMensaje() {
    console.log('oooooo')
  const mensaje = document.querySelector("#mensaje").value;
  return mensaje;
}

function encriparMensaje() {
  let mensajeEncrip = getMensaje()
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  return mensajeEncrip;
}
function desEncriparMensaje() {
    let mensajeDesEncrip = getMensaje()
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  
    return mensajeDesEncrip;
}


function showMensajeEncrip() {
  let showMensajeEncrip = document.getElementById("mensajeEncrip");
  let buttonCopy=document.getElementById('copy')
  if(showMensajeDesEncrip.value !=''){
    console.log(buttonCopy)
    buttonCopy.disabled = false;
    showMensajeEncrip.value = encriparMensaje();
  }
  // showMensajeEncrip.value = encriparMensaje();
}

function showMensajeDesEncrip() {
    let showMensajeEncrip = document.getElementById("mensajeEncrip");
    let buttonCopy=document.getElementById('copy')
    if(showMensajeDesEncrip.value !=''){
      console.log(buttonCopy)
      buttonCopy.disabled = false;
      showMensajeEncrip.value = desEncriparMensaje();
    }
    // showMensajeEncrip.value = desEncriparMensaje();
  }
function limpiarText() {
  let inputClear=document.getElementById('mensaje')
  let inputClear2=document.getElementById("mensajeEncrip")
  let buttonCopy=document.getElementById('copy')
  
  inputClear.value=''
  inputClear2.value=''
  buttonCopy.disabled = true;
  return
}
function copyToClickBoard(){
  var content = document.getElementById('mensajeEncrip').value;
  console.log(content)

  navigator.clipboard.writeText(content)
      .then(() => {
      console.log("Text copied to clipboard...")
  })
      .catch(err => {
      console.log('Something went wrong', err);
  })

}


