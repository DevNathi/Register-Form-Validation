# Registration Page - Form Validation Project Using Javascript

A single-page application for client-side form validation using HTML, CSS, and JavaScript.

## Overview

This project provides a simple yet effective solution for validating form input on the client side within a single-page application. It aims to enhance user experience by ensuring that user-submitted data meets specified criteria before being processed further.

## Features

- **Interactive Form Validation**: Real-time validation feedback to users as they fill out the form.
- **Customizable Validation Rules**: Easily define and customize validation rules to suit your form requirements.
- **Responsive Design**: Mobile-friendly and adaptable to different screen sizes.
- **No Backend Dependencies**: Entirely client-side, eliminating the need for server-side validation.
- **Easy to Use and Integrate**: Simple setup and integration into existing single-page applications.

## Breakdown

- We use javascript Regular Expressions i.e ```/[a-z][A-Z][0-9][@!#$%^&*()?/\']/```
- We use javascripts Events to listen to an Input event on the input feilds of the form `````` button.AddEventListener('input', function () {
  //logic here
  });``````
- We change the colors of the List of criteria as each one is met while the user is typing.
- We have a few validation mechaisms to make sure the form is completed correctly, such as disabling the register button until all the conditions of the form are met


## Installation

1. Clone the repository:

