$(document).ready(function () {
    // username validation
    $("#usernamecheck").hide();
    let usernameError = true;
    $("#username").keyup(function () {
        validateUsername();
    });
    function validateUsername() {
        let usernameValue = $("#username").val();
        if (usernameValue.length == "") {
            $("#usernamecheck").show();
            usernameError = false;
            return false;
        } else if (usernameValue.length < 3 || usernameValue.length > 10) {
            $("#usernamecheck").show();
            $("#usernamecheck").html("**length of username must be between 3 and 10");
            usernameError = false;
            return false;
        } else {
            $("#usernamecheck").hide();
        }
    };
    // password validaion
    $("#passcheck").hide();
    let passError = "true";




});