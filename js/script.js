// WOOOOOOOHHHH!!!!! You guessed the secret word
$(document).ready(function() {
    $("button").click(function() {
        var input = $("#pass").val()
        if ((input == "ScriptEd") || (input == "scripted") || (input == "Scripted") || (input == "scriptEd")) {
            $("#result").text("WOOOOOOOHHHH!!!!! You guessed the secret word!");
        }
        else {
            $("#result").text("Aww. You guessed the wrong word.");
        };
    });
});