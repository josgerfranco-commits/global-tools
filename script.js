document.addEventListener('DOMContentLoaded', () => {

  // Control de Navegación por Pestañas
  const navButtons = document.querySelectorAll('.nav-btn');
  const toolCards = document.querySelectorAll('.tool-card');

  navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTool = button.getAttribute('data-tool');

      navButtons.forEach(btn => btn.classList.remove('active'));
      toolCards.forEach(card => card.classList.remove('active'));

      button.classList.add('active');
      const activeCard = document.getElementById(targetTool);
      if (activeCard) {
        activeCard.classList.add('active');
      }
    });
  });

  // Calculadora Interés Compuesto
  const btnInterest = document.getElementById('btn-calc-interest');
  if (btnInterest) {
    btnInterest.addEventListener('click', () => {
      const p = parseFloat(document.getElementById('ci-principal').value) || 0;
      const r = (parseFloat(document.getElementById('ci-rate').value) || 0) / 100;
      const t = parseFloat(document.getElementById('ci-years').value) || 0;
      const total = p * Math.pow((1 + r), t);
      const interest = total - p;
      document.getElementById('ci-result').innerHTML = 
        `Monto Total Final: <strong>$${total.toFixed(2)}</strong><br>Interés Generado: <strong>$${interest.toFixed(2)}</strong>`;
    });
  }

  // Conversor Divisas
  const btnCur = document.getElementById('btn-convert-cur');
  if (btnCur) {
    btnCur.addEventListener('click', () => {
      const amount = parseFloat(document.getElementById('cur-amount').value) || 0;
      const from = document.getElementById('cur-from').value;
      const to = document.getElementById('cur-to').value;
      const rates = { USD: 1.0, EUR: 0.92, GBP: 0.79, MXN: 17.10, GTQ: 7.80 };
      const inUSD = amount / rates[from];
      const result = inUSD * rates[to];
      document.getElementById('cur-result').innerHTML = `${amount} ${from} = <strong>${result.toFixed(2)} ${to}</strong>`;
    });
  }

  // Generador de Contraseñas
  const pwdLength = document.getElementById('pwd-length');
  const pwdVal = document.getElementById('pwd-length-val');
  if (pwdLength && pwdVal) {
    pwdLength.addEventListener('input', () => pwdVal.textContent = pwdLength.value);
  }

  const btnPwd = document.getElementById('btn-gen-pwd');
  if (btnPwd) {
    btnPwd.addEventListener('click', () => {
      const length = parseInt(document.getElementById('pwd-length').value);
      const nums = document.getElementById('pwd-nums').checked;
      const syms = document.getElementById('pwd-syms').checked;
      let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (nums) chars += '0123456789';
      if (syms) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
      let password = '';
      for (let i = 0; i < length; i++) password += chars.charAt(Math.floor(Math.random() * chars.length));
      document.getElementById('pwd-result').innerHTML = `Contraseña: <strong>${password}</strong>`;
    });
  }

  // Contador de Palabras
  const wordInput = document.getElementById('word-input');
  if (wordInput) {
    wordInput.addEventListener('input', () => {
      const text = wordInput.value.trim();
      document.getElementById('stat-words').textContent = text ? text.split(/\s+/).length : 0;
      document.getElementById('stat-chars').textContent = text.length;
    });
  }

  // Base64
  const btnEnc = document.getElementById('btn-b64-encode');
  const btnDec = document.getElementById('btn-b64-decode');
  if (btnEnc) {
    btnEnc.addEventListener('click', () => {
      try {
        document.getElementById('b64-result').innerHTML = `Resultado: <strong>${btoa(document.getElementById('b64-input').value)}</strong>`;
      } catch (e) {
        document.getElementById('b64-result').innerHTML = `<span style="color:red">Error al codificar.</span>`;
      }
    });
  }
  if (btnDec) {
    btnDec.addEventListener('click', () => {
      try {
        document.getElementById('b64-result').innerHTML = `Resultado: <strong>${atob(document.getElementById('b64-input').value)}</strong>`;
      } catch (e) {
        document.getElementById('b64-result').innerHTML = `<span style="color:red">Base64 no válido.</span>`;
      }
    });
  }

  // Generador QR
  const btnQr = document.getElementById('btn-gen-qr');
  if (btnQr) {
    btnQr.addEventListener('click', () => {
      const qrInput = document.getElementById('qr-input').value.trim();
      const qrResult = document.getElementById('qr-result');
      qrResult.innerHTML = '';
      if (qrInput && typeof QRCode !== 'undefined') {
        new QRCode(qrResult, { text: qrInput, width: 160, height: 160 });
      } else {
        qrResult.innerHTML = '<span style="color:red">Ingresa un enlace o texto válido.</span>';
      }
    });
  }

});