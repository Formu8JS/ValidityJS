# ValidityJS

ValidityJS is a powerful and customizable library for validating form data in JavaScript. It simplifies the process of form validation on a web page and provides a customizable way to handle errors and form submission.

## Usage

To use ValidityJS, create a new instance of the `Validity` class for each form that you want to validate. Pass in the form element and an options object to customize the validation behavior:

```javascript
import Validity from 'validityjs';

const form = document.querySelector('#my-form');
const validator = new Validity(form, {
  errorClass: 'error',
  errorMessage: 'Please fill out this field',
  onSubmit: () => {
    // Do something when the form is submitted and valid
  },
});
