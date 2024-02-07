$(document).ready(() => {
  $("button").click(() => {
    if ($("#pword").val().length < 6) {
      $("#msg").html("Password must be atleast 6 characters.");
      $("#pword").css("border", "2px solid red");
    } else {
      $("#msg").html("Success!");
      $("#pword").css("border", "2px solid black");
    }
  });
});
