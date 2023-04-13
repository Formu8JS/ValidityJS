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

## API

The options object can include the following properties:

- `errorClass`: The CSS class to apply to invalid form fields (default: 'error').
- `errorMessage`: The error message to display for invalid form fields (default: 'Please fill out this field').
- `onSubmit`: A callback function to be executed when the form is submitted and valid.

The Validity class provides the following methods:

### `constructor(form, options)`

Creates a new instance of the Validity class for the specified form element.

- `form` (required): The form element to be validated.
- `options` (optional): An object containing custom options for the validation behavior.

### `validateField(field)`

Validates a single form field and returns true if the field is valid, false otherwise.

- `field` (required): The form field to be validated.

### `showError(field, message)`

Displays an error message for a given form field.

- `field` (required): The form field to display the error message for.
- `message` (required): The error message to display.

### `hideError(field)`

Removes the error message for a given form field.

- `field` (required): The form field to remove the error message for.

## Contributing

Contributions to ValidityJS are welcome! If you find a bug or have a feature request, please open an issue on the ValidityJS GitHub repository. If you would like to contribute code, please fork the repository and submit a pull request.
