let qr = new QRious({
      element: document.getElementById('qrcode'),
      size: 250,
      value: ''
    });

    const urlInput = document.getElementById('url');
    const corFrenteInput = document.getElementById('corFrente');
    const corFundoInput = document.getElementById('corFundo');

    function validarURL(url) {
      const regex = /^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/\S*)?$/;
      return regex.test(url);
    }

    function atualizarQRCode() {
      const url = urlInput.value.trim();
      if (!validarURL(url)) return;

      qr.set({
        value: url,
        foreground: corFrenteInput.value,
        background: corFundoInput.value
      });
    }

    function gerarQRCode() {
      atualizarQRCode();
    }

    function baixarQRCode() {
      if (!qr.value) {
        alert("Gere um QR Code antes de baixar.");
        return;
      }
      const link = document.createElement('a');
      link.download = 'qr_code_' + new Date().getTime() + '.png';
      link.href = document.getElementById('qrcode').toDataURL("image/png");
      link.click();
    }

    urlInput.addEventListener('input', atualizarQRCode);
    corFrenteInput.addEventListener('input', atualizarQRCode);
    corFundoInput.addEventListener('input', atualizarQRCode);
 