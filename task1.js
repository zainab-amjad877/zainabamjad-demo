$(document).ready(function () {
    // username validation
    $("#usernamecheck").hide();
    let usernameError = false;
    $("#username").keyup(function () {
        validateUsername();
    });
    function validateUsername() {
        let usernameValue = $("#username").val();
        if (usernameValue.length == "") {
            $("#usernamecheck").show().html("**Missing Username");
            $("#username").css("border-bottom", "0.5px solid");
            usernameError = true;
        } else if (usernameValue.length < 3 || usernameValue.length > 10) {
            $("#usernamecheck").show().html("**length of username must be between 3 and 10");
            $("#username").css("border-bottom", "0.5px solid");
            if (emailError == true) {
                $("#username").css("margin-bottom", "0");
                $("#email").css("margin-top", "0");
            }
            usernameError = true;
        } else {
            $("#usernamecheck").hide();
            $("#username").css("border-bottom", "none");
            if (emailError == true) {
                $("#username").css({ "margin-bottom": "20px", "border-bottom": "0.5px solid" });
            }
            usernameError = false;
        }
    }

    // email validation
    $("#emailcheck").hide();
    let emailError = false;
    $("#email").keyup(function () {
        validateEmail();
    });
    function validateEmail() {
        let emailValue = $("#email").val();
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailValue.length == "") {
            $("#emailcheck").show().html("**Please enter password");
            $("#email").css("border-bottom", "0.5px solid");
            if (usernameError == false) {
                $("#username").css("border-bottom", "0.5px solid");
                $("#email").css("margin-top", "20px");
            }
            if (passError == true) {
                $("#password").css("margin-top", "0px");
            }
            emailError = true;
        } else if (!emailRegex.test(emailValue)) {
            $("#emailcheck").show().html("Not a valid email address");
            $("#email").css("border-bottom", "0.5px solid");
            if (usernameError == false) {
                $("#username").css("border-bottom", "0.5px solid");
                $("#email").css("margin-top", "20px");
            }
            if (passError == true) {
                $("#password").css("margin-top", "0px");
            }
            emailError = true;
        } else {
            $("#emailcheck").hide();
            $("#email").css({ "border-bottom": "none", "margin-top": "0" });
            emailError = false;
        }
    }

    // password validation
    $("#passcheck").hide();
    let passError = false;
    $("#password").keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let passwordValue = $("#password").val();
        let hasUpperCase = /[A-Z]/.test(passwordValue);
        let hasLowerCase = /[a-z]/.test(passwordValue);
        let hasNumberCase = /\d/.test(passwordValue);
        let hasSpecialChars = /[!@#$%^&*(),.?_-~`';|":{}|<>]/.test(passwordValue);
        if (passwordValue.length == "") {
            $("#passcheck").show().html("**Please enter password");
            $("#password").css("border-bottom", "0.5px solid");
            if (emailError == false) {
                $("#email").css("border-bottom", "0.5px solid");
                $("#password").css("margin-top", "20px");
            }
            if (conpassError == true) {
                $("#confirmpassword").css("margin-top", "0");
                $("#conpasscheck").hide();
                validateConfirmPassword();
            }
            passError = true;
        } else if (passwordValue.length < 8 || !hasUpperCase || !hasLowerCase || !hasNumberCase || !hasSpecialChars) {
            $("#passcheck").show().html("**Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters");
            $("#password").css("border-bottom", "0.5px solid");
            if (emailError == false) {
                $("#email").css("border-bottom", "0.5px solid");
                $("#password").css("margin-top", "20px");
                validateConfirmPassword();
            }
            if (conpassError == true) {
                $("#conpasscheck").hide();
                validateConfirmPassword();
                $("#confirmpassword").css("margin-top", "0");
            }
            passError = true;
        } else {
            $("#passcheck").hide();
            $("#password").css({ "border-bottom": "none", "margin-top": "0" });
            if (conpassError == true) {
                $("#confirmpassword").css("margin-top", "0");
                $("#conpasscheck").hide();
                validateConfirmPassword();
            }
            passError = false;
        }
    }

    // confirm password validation
    $("#conpasscheck").hide();
    let conpassError = false;
    $("#confirmpassword").keyup(function () {
        validateConfirmPassword();
    });
    function validateConfirmPassword() {
        let confirmPasswordValue = $("#confirmpassword").val();
        let passwordValue = $("#password").val();
        if (passwordValue != confirmPasswordValue) {
            $("#conpasscheck").show().html("**Mis-match password");
            if (passError == false) {
                $("#password").css("border-bottom", "0.5px solid");
                $("#confirmpassword").css("margin-top", "20px");
            }
            conpassError = true;
        } else {
            $("#conpasscheck").hide();
            $("#confirmpassword").css("margin-top", "0");
            conpassError = false;
        }
    }

    // submitbutton with ajax call api
    $("#submitbtn").click(function (event) {
        // event need for escape error in this
        event.preventDefault();
        validateUsername();
        validatePassword();
        validateConfirmPassword();
        validateEmail();
        if (
            usernameError == false &&
            emailError == false &&
            passError == false &&
            conpassError == false
        ) {
            $.ajax({
                type: 'GET',
                url: 'https://jsonplaceholder.typicode.com/users/1',
                dataType: 'json',
                success: function (data) {
                    console.log('success', data);
                    alert(JSON.stringify(data));
                    // Here you can do something with the data
                },
                error: function (xhr, status, error) {
                    console.error(status + ':' + error);
                    alert('Error retrieving data from the server. Please try again later.');
                    // Handle error
                }
            });
        } else {
            var errorMessage = 'Invalid information:';
            if (usernameError) {
                errorMessage += '\n- Invalid username';
            }
            if (emailError) {
                errorMessage += '\n- Invalid email';
            }
            if (passError) {
                errorMessage += '\n- Invalid password';
            }
            if (conpassError) {
                errorMessage += '\n- Passwords do not match';
            }
            alert(errorMessage);
            return false;
        }
    });
})



