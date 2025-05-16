"use strict";

const qr = new QRious({
  element: document.getElementById('qrcode'),
  size: 250,
  value: ''
});

const urlInput = document.getElementById('url');
const corFrenteInput = document.getElementById('corFrente');
const corFundoInput = document.getElementById('corFundo');

function urlFoiEspecificada() {
  if (!urlInput.value){
    alert('Nenhuma URL foi especificada!');
    return false;
  }

  return true;
}

function urlValida() {
  try {
    new URL( urlInput.value.trim() );

  } catch(ex) {
    alert('URL inválida!');
    return false;
  }

  return true;
}

function atualizarQRCode() {
  qr.set({
    value: urlInput.value.trim(),
    foreground: corFrenteInput.value,
    background: corFundoInput.value
  });
}

function gerarQRCode() {
  if (!urlFoiEspecificada() || !urlValida())
    return;

  atualizarQRCode();
}

function baixarQRCode() {
  if (!urlFoiEspecificada() || !urlValida())
    return;

  const link = document.createElement('a');
  link.download = 'qr_code_' + new Date().getTime() + '.png';
  link.href = document.getElementById('qrcode').toDataURL('image/png');
  link.click();
}

corFrenteInput.addEventListener('input', atualizarQRCode);
corFundoInput.addEventListener('input', atualizarQRCode);
