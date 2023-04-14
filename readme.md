# ValidityJS

ValidityJS is a JavaScript class that can be used to validate form input fields in a web page. It provides a customizable validation process for input fields such as credit card numbers and phone numbers, and supports asynchronous validation functions.

## Installation

You can use ValidityJS in your project by including the following script tag in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/thedhanawada/ValidityJS@main/validity.js"></script>
```

Alternatively, you can download the latest release of ValidityJS from the GitHub repository and include it in your project manually. To do this, follow these steps:

- Go to the ValidityJS GitHub repository.
- Click on the "Releases" tab to see a list of available releases.
- Download the latest release of ValidityJS, which will be a .js file.
- Move the .js file into your project's dist or lib directory.
- In your HTML file, include the following script tag:

```html
<script src="dist/validity.js"></script>
```

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

## License

ValidityJS is released under the [MIT license](https://raw.githubusercontent.com/thedhanawada/ValidityJS/main/LICENSE "MIT license"). This is a permissive open-source software license that allows for free use, modification, and distribution of the software without requiring payment or attribution.

Using an open-source license like the MIT license is important because it ensures that the software can be used and improved upon by as many people as possible. By releasing ValidityJS under the MIT license, we hope to encourage others to use and contribute to the project, and to promote the wider adoption of open-source software in general.

We take the licensing of ValidityJS seriously, and believe that it is a key part of the project's success. We encourage you to read the license in full before using or contributing to the project, and to abide by its terms in your use and distribution of the software.