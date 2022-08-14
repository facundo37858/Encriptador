function getMensaje() {
    console.log('oooooo')
  const mensaje = document.querySelector("#mensaje").value;
  console.log(mensaje)
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
  let mensaje = document.querySelector("#mensaje").value;
  let showMensajeEncrip = document.getElementsByClassName("mensajeEncrip")[0];

  let buttonCopy=document.getElementById('copy')
 
  console.log('value',mensaje)
  if(mensaje){
    console.log(buttonCopy)
    document.getElementsByClassName('container-msjEncrip')[0].style.display="flex"
    document.getElementsByClassName('container-sinMsjEncrip')[0].style.display="none"
    buttonCopy.disabled = false;
    showMensajeEncrip.value = encriparMensaje();
  }
  // showMensajeEncrip.value = encriparMensaje();
}

function showMensajeDesEncrip() {
    let mensaje = document.querySelector("#mensaje").value;
    let showMensajeEncrip = document.getElementsByClassName("mensajeEncrip")[0];
    let buttonCopy=document.getElementById('copy')
    if(mensaje){
      console.log(buttonCopy)
      document.getElementsByClassName('container-msjEncrip')[0].style.display="flex"
    document.getElementsByClassName('container-sinMsjEncrip')[0].style.display="none"
      buttonCopy.disabled = false;
      showMensajeEncrip.value = desEncriparMensaje();
    }
    // showMensajeEncrip.value = desEncriparMensaje();
  }
function limpiarText() {
  let inputClear=document.getElementById('mensaje')
  let inputClear2=document.getElementsByClassName("mensajeEncrip")[0]
  let buttonCopy=document.getElementById('copy')
  
  inputClear.value=''
  inputClear2.value=''
  document.getElementsByClassName('container-msjEncrip')[0].style.display="none"
  document.getElementsByClassName('container-sinMsjEncrip')[0].style.display="flex"
  buttonCopy.disabled = true;
  return
}
function copyToClickBoard(){
  var content = document.getElementsByClassName('mensajeEncrip')[0].value;
  var modal = document.querySelector('.modal');
  console.log(content)

  navigator.clipboard.writeText(content)
      .then(() => {
        modal.classList.add('modal--show');
        setTimeout(()=>{modal.classList.remove('modal--show')},1000)
      console.log("Text copied to clipboard...")
  })
      .catch(err => {
      console.log('Something went wrong', err);
  })

}



