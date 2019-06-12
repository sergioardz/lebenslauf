// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".register-user").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newUser = {
      username: $("#username")
        .val()
        .trim(),
      email: $("#email")
        .val()
        .trim(),
      password: $("#password")
        .val()
        .trim(),
      passwordMatch: $("#passwordMatch")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/register", {
      type: "POST",
      data: newUser
    }).then(function() {
      //   alert("Registration Complete");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
