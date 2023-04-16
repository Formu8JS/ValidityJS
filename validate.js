function luhnCheck(num) {
  // Implementation of the Luhn algorithm
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
    // Initialize the form, options, and event listeners
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
    // Form submission handler
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
    // Validate each field depending on its attributes and validation rules
    // Includes: required, credit card number, phone number, confirm password, and async validations
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

      // Confirm password validation
      if (field.hasAttribute('data-confirm-password')) {
        const passwordField = this.form.querySelector(`input[name="${field.dataset.confirmPassword}"]`);
        if (passwordField && passwordField.value !== field.value) {
          const errorMessage = this.options.messages[field.name] || this.options.messages.default || 'Passwords do not match';
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
  }

  validateCreditCardNumber(number) {
    // Validate credit card number using the creditCardType library and Luhn algorithm
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
    // Validate phone number using a regular expression

    // Adjust the regular expression to match the desired phone number format
    const phoneNumberRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return phoneNumberRegex.test(number);
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
    // Show an error message for the given field
  }

  hideError(field) {

    field.classList.remove(this.options.errorClass);
    const error = field.parentNode.querySelector('.error-message');
    if (error) {
      error.parentNode.removeChild(error);
    }
    // Hide the error message for the given field
  }
}
// Expose the ValidityJS class globally
window.ValidityJS = ValidityJS;
