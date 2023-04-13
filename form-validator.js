class FormValidator {
  constructor(form, options = {}) {
    this.form = form;
    this.options = Object.assign({
      errorClass: 'error',
      errorMessage: 'Please fill out this field',
      onSubmit: () => {},
    }, options);
    this.onSubmit = this.onSubmit.bind(this);
    this.form.addEventListener('submit', this.onSubmit);
  }
  
  onSubmit(event) {
    event.preventDefault();
    const fields = this.form.querySelectorAll('input, select, textarea');
    let isValid = true;
    
    fields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });
    
    if (isValid) {
      this.options.onSubmit();
    }
  }
  
  validateField(field) {
    if (field.hasAttribute('required') && !field.value) {
      this.showError(field, this.options.errorMessage);
      return false;
    }
    
    this.hideError(field);
    return true;
  }
  
  showError(field, message) {
    field.classList.add(this.options.errorClass);
    const error = field.parentNode.querySelector('.error-message');
    if (error) {
      error.textContent = message;
    } else {
      const errorElement = document.createElement('div');
      errorElement.classList.add('error-message');
      errorElement.textContent = message;
      field.parentNode.appendChild(errorElement);
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
