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
  showMensajeEncrip.value = encriparMensaje();
}

function showMensajeDesEncrip() {
    let showMensajeEncrip = document.getElementById("mensajeEncrip");
    showMensajeEncrip.value = desEncriparMensaje();
  }
function limpiarText() {
  let inputClear=document.getElementById('mensaje')
  let inputClear2=document.getElementById("mensajeEncrip")
  
  inputClear.value=''
  inputClear2.value=''
  return
}
