# ValidityJS

ValidityJS is a lightweight JavaScript library for client-side form validation. It provides an easy way to validate form inputs such as required fields, credit card numbers, and phone numbers.

## Features

- Required field validation
- Credit card number validation (Luhn algorithm)
- US phone number validation
- Custom error messages
- Conditional validation
- Async validation support

## Installation

Download the `validity.js` file and include it in your HTML file using a script tag:

```html
<script src="validity.js"></script>

## Usage

To use ValidityJS, simply create a new instance by passing a reference to the form element you want to validate:

```javascript
const form = document.getElementById('your-form-id');
const validity = new ValidityJS(form);

You can also pass an optional configuration object to customize the validation behavior:

```javascript
const validity = new ValidityJS(form, {
  errorClass: 'custom-error-class',
  messages: {
    default: 'Custom default error message',
    'field-name': 'Custom error message for a specific field'
  },
  onSubmit: () => {
    // Callback function when the form is submitted successfully
  },
  conditionalValidation: {
    'field-name': () => {
      // Return true if the field should be validated, false otherwise
    }
  },
  errorPosition: '.custom-error