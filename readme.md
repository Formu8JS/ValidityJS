# ValidityJS

ValidityJS is a JavaScript class that can be used to validate form input fields in a web page. It provides a customizable validation process for input fields such as credit card numbers and phone numbers, and supports asynchronous validation functions.

## Installation

To use ValidityJS, simply include the JavaScript file `validity.js` in your HTML file:

## Usage

To use ValidityJS, create a new instance of the ValidityJS class and pass in the HTML form element to be validated, and any options you want to customize the validation process:

```javascript
const form = document.querySelector('form');
const validator = new ValidityJS(form, {
  errorClass: 'error',
  messages: {
    username: 'Please enter a valid username'
  },
  onSubmit: () => {
    alert('Form submitted successfully!');
  },
  conditionalValidation: {
    password: () => {
      return form.querySelector('input[name="username"]').value !== '';
    }
  }
});
```

**The options object can contain the following properties:**

- errorClass (string): Specifies the CSS class name to apply to input fields with validation errors. Default value is 'error'.
- messages (object): An object that maps input field names to error messages. Default value is {}.
- onSubmit (function): A function to be executed when the form is submitted and all input fields have passed validation. Default value is an empty arrow function () => {}.
- conditionalValidation (object): An object that maps input field names to functions that return a boolean value indicating whether the field should be validated or not. Default value is {}.
- errorPosition (string): Specifies the selector for the element where error messages should be displayed. Default value is '.error-summary'.

**The ValidityJS class provides the following methods:**

- validateField(field): Validates a single input field. It returns a boolean value indicating whether the field is valid or not.
- validateCreditCardNumber(number): Validates a credit card number. It returns a boolean value indicating whether the number is valid or not.
- validatePhoneNumber(number): Validates a phone number. Not implemented in this code snippet.
- showError(field, message): Adds the error class specified in the options object to the input field and appends an error message to the element specified by the errorPosition property.
- hideError(field): Removes the error class from the input field and removes any error message element that was appended to the errorPosition element.