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
            $("#usernamecheck").show();
            $("#usernamecheck").html("**Missing Username");
            $("#username").css("border-bottom", "0.5px solid");
            usernameError = true;
        } else if (usernameValue.length < 3 || usernameValue.length > 10) {
            $("#usernamecheck").show();
            $("#usernamecheck").html("**length of username must be between 3 and 10");
            $("#username").css("border-bottom", "0.5px solid");
            usernameError = true;
        } else {
            $("#usernamecheck").hide();
            $("#username").css("border-bottom", "none");
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
            $("#emailcheck").show();
            $("#emailcheck").html("**Please enter password");
            $("#email").css("border-bottom", "0.5px solid");
            emailError = true;
        } else if (!emailRegex.test(emailValue)) {
            $("#emailcheck").show();
            $("#emailcheck").html("Not a valid email address");
            $("#email").css("border-bottom", "0.5px solid");
            emailError = true;
        } else {
            $("#emailcheck").hide();
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
        if (passwordValue.length == "") {
            $("#passcheck").show();
            $("#passcheck").html("**Please enter password");
            $("#password").css("border-bottom", "0.5px solid");
            passError = true;
        } else if (passwordValue.length < 3 || passwordValue.length > 10) {
            $("#passcheck").show();
            $("#passcheck").html("**length of your password must be between 3 and 10");
            $("#password").css("border-bottom", "0.5px solid");
            passError = true;
        } else {
            $("#passcheck").hide();
            $("#password").css("border-bottom", "none");
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
            $("#conpasscheck").show();
            $("#conpasscheck").html("**Mis-match password");
            conpassError = true;
        } else {
            $("#conpasscheck").hide();
            conpassError = false;
        }
    }
    // submitbutton with ajax call api
    $("#submitbtn").click(function (event) {
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


