const passwordInput = document.getElementById('password')
        const emailInput = document.getElementById('email')
        const confirmPassword = document.getElementById('confirm')
        const loginButton = document.getElementById('registerBtn')
        const errorMessage = document.getElementById("error")

        emailInput.addEventListener('input', function() {
            const email = emailInput.value

            const emailReg = /^([a-z A-Z 0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,6})$/
            if (email !== '') {
                if (emailReg.test(email)) {
                    // Enable the login button if the email is valid
                    loginButton.disabled = false
                    errorMessage.textContent = ''
                } else {
                    document.getElementById('email').style.border = 'red 1px solid'
                   errorMessage.textContent = 'Invalid Email Address.'
                    loginButton.disabled = true
                }
            } else {
                console.log('email value is empty')
                loginButton.disabled = true
            }
            
        })

        passwordInput.addEventListener('input', function() {
            const password = passwordInput.value

            const lengthRegex = /.{8,}/
            const upperCaseRegex = /[A-Z]/
            const lowerCaseRegex = /[a-z]/
            const numberRegex = /[0-9]/
            const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

            if (password !== '') {
                // Check if the password meets all the requirements
                if (
                    lengthRegex.test(password) &&
                    upperCaseRegex.test(password) &&
                    lowerCaseRegex.test(password) &&
                    numberRegex.test(password) &&
                    specialCharRegex.test(password)
                ) {
                    // Enable the login button if the password is valid
                    loginButton.disabled = false
                    errors = [] // Clear the errors array
                    errorMessage.textContent = ''
                } else {
                    loginButton.disabled = true
                }
            } else {
                // Disable the login button if the password is empty
                loginButton.disabled = true
                errors = [] // Clear the errors array
                errorMessage.textContent = ''
                document.getElementById('length').style.color = 'grey'
                document.getElementById('uppercase').style.color = 'grey'
                document.getElementById('lowercase').style.color = 'grey'
                document.getElementById('number').style.color = 'grey'
                document.getElementById('specialChar').style.color = 'grey'
            }

            // Update the color of each password requirement
            if (lengthRegex.test(password)) {
                document.getElementById('length').style.color = 'green'
            } else {
                document.getElementById('length').style.color = 'red'
            }
            if (upperCaseRegex.test(password)) {
                document.getElementById('uppercase').style.color = 'green'
            } else {
                document.getElementById('uppercase').style.color = 'red'
            }
            if (lowerCaseRegex.test(password)) {
                document.getElementById('lowercase').style.color = 'green'
            } else {
                document.getElementById('lowercase').style.color = 'red'
            }
            if (numberRegex.test(password)) {
                document.getElementById('number').style.color = 'green'
            } else {
                document.getElementById('number').style.color = 'red'
            }
            if (specialCharRegex.test(password)) {
                document.getElementById('specialChar').style.color = 'green'
            } else {
                document.getElementById('specialChar').style.color = 'red'
            }
        })

        confirmPassword.addEventListener('input', () => {
            const confirmPass = confirmPassword.value
            const password = passwordInput.value
            if (confirmPass == '') {
                console.log('confirm field is empty')
            } else {
                console.log('confirm password is not empty')
                // Check if the confirm password matches the password
                if (confirmPass !== password) {
                    // Display an error message if the confirm password does not match the password
                    errorMessage.textContent = 'The confirm password does not match the password!'
                    loginButton.disabled = true
                } else {
                    // Enable the login button if the confirm password matches the password
                    loginButton.disabled = false
                    errorMessage.textContent = ''
                }
            }
        })

        function isPasswordValid() {
            return (
                lengthRegex.test(password) &&
                upperCaseRegex.test(password) &&
                lowerCaseRegex.test(password) &&
                numberRegex.test(password) &&
                specialCharRegex.test(password)
            )
        }

        function login() {
            if (isPasswordValid() && confirmPassword.value === passwordInput.value) {
                console.log('password is valid')
                // Add your login logic here
            } else {
                console.log('password is not valid')
            }
        }