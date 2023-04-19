function applyMask(input, mask) {
    let maskedValue = '';
    let inputIndex = 0;
    for (let i = 0; i < mask.length; i++) {
      if (mask[i] === '#') {
        maskedValue += input.value[inputIndex] || '';
        inputIndex++;
      } else {
        maskedValue += mask[i];
      }
    }
    input.value = maskedValue;
  }
  
  function addPhoneMask() {
    const phoneField = document.querySelector('[data-phone-number]');
    const phoneMask = '(###) ###-####';
    phoneField.addEventListener('input', (event) => {
      applyMask(event.target, phoneMask);
    });
  }  