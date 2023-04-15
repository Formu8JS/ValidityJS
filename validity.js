// Set the MIME type for credit-card-type.min.js
const creditCardType = require('credit-card-type');
function luhnCheck(num) {
  let sum = 0;
  let shouldDouble = false;
  for (let i = num.length - 1; i >= 0; i--) {
    let digit = parseInt(num.charAt(i));
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return (sum % 10) === 0;
}


class ValidityJS {
  constructor(form, options = {}) {
    this.form = form;
    this.options = Object.assign({
      errorClass: 'error',
      messages: {},
      onSubmit: () => {},
      conditionalValidation: {},
      errorPosition: '.error-summary' // default error message position
    }, options);
    this.onSubmit = this.onSubmit.bind(this);
    this.form.addEventListener('submit', this.onSubmit);
  }

  onSubmit(event) {
    event.preventDefault();
    const fields = this.form.querySelectorAll('input, select, textarea');
    let isValid = true;

    fields.forEach(field => {
      const shouldValidate = this.options.conditionalValidation[field.name] ? this.options.conditionalValidation[field.name]() : true;

      if (shouldValidate && !this.validateField(field)) {
        isValid = false;
      }
    });

    if (isValid) {
      this.options.onSubmit();
    }
  }

  async validateField(field) {
    const shouldValidate = this.options.conditionalValidation[field.name] ? this.options.conditionalValidation[field.name]() : true;

    if (shouldValidate) {
      // Required validation
      if (field.hasAttribute('required') && !field.value) {
        const errorMessage = this.options.messages[field.name] || this.options.messages.default || 'Please fill out this field';
        this.showError(field, errorMessage);
        return false;
      }

      // Credit card number validation
      if (field.hasAttribute('data-cc-number')) {
        const isValid = this.validateCreditCardNumber(field.value);
        if (!isValid) {
          const errorMessage = this.options.messages[field.name] || this.options.messages.default || 'Invalid credit card number';
          this.showError(field, errorMessage);
          return false;
        }
      }

      // Phone number validation
      if (field.hasAttribute('data-phone-number')) {
        const isValid = this.validatePhoneNumber(field.value);
        if (!isValid) {
          const errorMessage = this.options.messages[field.name] || this.options.messages.default || 'Invalid phone number';
          this.showError(field, errorMessage);
          return false;
        }
      }
      // Async validation
      if (field.dataset.asyncValidation) {
        const validationFunction = window[field.dataset.asyncValidation];
        if (validationFunction) {
          const isValid = await validationFunction(field.value);
          if (!isValid) {
            const errorMessage = this.options.messages[field.name] || this.options.messages.default || 'Invalid input';
            this.showError(field, errorMessage);
            return false;
          }
        }
      }

      this.hideError(field);
      return true;
    }

    this.hideError(field);
    return true;
  }

  validateCreditCardNumber(number) {
    const cardTypes = creditCardType(number);
    if (cardTypes.length === 0) {
      return false;
    }
  
    const cardType = cardTypes[0];
    if (cardType.type === 'visa' || cardType.type === 'mastercard' || cardType.type === 'amex' || cardType.type === 'discover') {
      return luhnCheck(number);
    }
  
    return false;
  }    

  validatePhoneNumber(number) {
    // ...
  }

  showError(field, message) {
    field.classList.add(this.options.errorClass);
    const errorPosition = document.querySelector(this.options.errorPosition);
    if (errorPosition) {
      const errorElement = document.createElement('div');
      errorElement.classList.add('error-message');
      errorElement.textContent = message;
      errorPosition.appendChild(errorElement);
    }
  }

  hideError(field) {
    field.classList.remove(this.options.errorClass);
    const error = field.parentNode.querySelector('.error-message');
    if (error) {
      error.parentNode.removeChild(error);
    }
  }
}
