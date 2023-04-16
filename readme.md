# ValidityJS Library

ValidityJS is a simple and flexible JavaScript form validation library. It provides built-in validation methods for required fields, credit card numbers, phone numbers, and confirm password fields. It also supports conditional and async validation.

## Usage

To use ValidityJS, instantiate the library with the form element and optional configuration:

```javascript
const form = document.querySelector('#my-form');
const validation = new ValidityJS(form, {
  errorClass: 'error', // CSS class to apply on error
  messages: {}, // Custom error messages
  onSubmit: () => {}, // Callback function on successful form submission
  conditionalValidation: {}, // Conditional validation rules
  errorPosition: '.error-summary' // Default error message position
});
```
## Example
This example demonstrates how to use ValidityJS with a simple form containing various input types and validation rules.
```javascript
<form id="example-form">
  <label>
    Name (required):
    <input type="text" name="name" required />
  </label>
  <br />
  <label>
    Email (required):
    <input type="email" name="email" required />
  </label>
  <br />
  <label>
    Phone Number (optional):
    <input type="tel" name="phone" data-phone-number />
  </label>
  <br />
  <label>
    Credit Card Number (optional):
    <input type="text" name="credit-card" data-cc-number />
  </label>
  <br />
  <label>
    Password (required):
    <input type="password" name="password" required />
  </label>
  <br />
  <label>
    Confirm Password (required):
    <input type="password" name="confirm-password" data-confirm-password="password" required />
  </label>
  <br />
  <button type="submit">Submit</button>
</form>

<div class="error-summary"></div>

<script src="https://cdn.skypack.dev/credit-card-type@11.1.0/dist/index.min.js"></script>
<script>
  const form = document.querySelector('#example-form');
  const validation = new ValidityJS(form);
</script>
```
## Features
- Built-in validation methods for required fields, credit card numbers, phone numbers, and confirm password fields
- Supports conditional and async validation
- Custom error messages
- Callback function on successful form submission
- Default error message position can be customized
- Exposes ValidityJS class globally for use in other scripts

## License

ValidityJS is released under the [MIT license](https://raw.githubusercontent.com/thedhanawada/ValidityJS/main/LICENSE "MIT license"). This is a permissive open-source software license that allows for free use, modification, and distribution of the software without requiring payment or attribution.

Using an open-source license like the MIT license is important because it ensures that the software can be used and improved upon by as many people as possible. By releasing ValidityJS under the MIT license, we hope to encourage others to use and contribute to the project, and to promote the wider adoption of open-source software in general.

We take the licensing of ValidityJS seriously, and believe that it is a key part of the project's success. We encourage you to read the license in full before using or contributing to the project, and to abide by its terms in your use and distribution of the software.
