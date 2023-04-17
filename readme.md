# ValidityJS

ValidityJS is a lightweight, easy-to-use form validation library for modern web applications. It provides real-time validation for input fields, including built-in support for common validation types such as required, credit card number, phone number, and password confirmation. ValidityJS also supports custom and asynchronous validation functions for more advanced use cases.

## Features

- Real-time validation
- Built-in validation types
- Custom validation functions
- Asynchronous validation support
- Conditional validation
- Accessibility improvements with `aria-describedby`
- Easy integration with existing projects

## Installation

Download the `validity.js` file and include it in your project:

```html
<script src="path/to/validity.js"></script>
```

## Usage

Initialize the library by passing a reference to the form element and an optional configuration object:
```html
const form = document.querySelector('#my-form');
const validator = new ValidityJS(form, options);
```
The options object can include the following properties:

- errorClass (String): The CSS class to be added to invalid fields.
- messages (Object): Custom error messages for specific fields or a default message.
- onSubmit (Function): The function to be called when the form is submitted and all fields are valid.
- conditionalValidation (Object): An object containing functions that determine whether a field should be validated.
- errorPosition (String): A selector for the element where error messages will be displayed.
- creditCardType (Function): A custom credit card type validation function.

```html
<form id="my-form">
  <input type="text" name="username" required />
  <input type="password" name="password" required />
  <input type="password" name="password_confirm" data-confirm-password="password" required />
  <input type="text" name="phone" data-phone-number required />
  <input type="text" name="credit_card" data-cc-number required />
  <button type="submit">Submit</button>
</form>

<script>
  const form = document.querySelector('#my-form');
  const options = {
    errorClass: 'error',
    messages: {
      default: 'Please fill out this field',
      phone: 'Invalid phone number',
      credit_card: 'Invalid credit card number'
    },
    onSubmit: () => {
      console.log('Form submitted!');
    }
  };
  const validator = new ValidityJS(form, options);
</script>
```
## License

ValidityJS is released under the [MIT license](https://raw.githubusercontent.com/thedhanawada/ValidityJS/main/LICENSE "MIT license"). This is a permissive open-source software license that allows for free use, modification, and distribution of the software without requiring payment or attribution.

Using an open-source license like the MIT license is important because it ensures that the software can be used and improved upon by as many people as possible. By releasing ValidityJS under the MIT license, we hope to encourage others to use and contribute to the project, and to promote the wider adoption of open-source software in general.

We take the licensing of ValidityJS seriously, and believe that it is a key part of the project's success. We encourage you to read the license in full before using or contributing to the project, and to abide by its terms in your use and distribution of the software.
