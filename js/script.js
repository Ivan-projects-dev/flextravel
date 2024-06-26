
// Sign in form modal window
function openForm1() {
  document.getElementById("sign_in-modal").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closeForm1() {
  document.getElementById("sign_in-modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// Sign up form modal window
function openForm2() {
  document.getElementById("sign_up-modal").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closeForm2() {
  document.getElementById("sign_up-modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}


$('#main_form').submit(function() {
  e.preventDefault();

  if (!$(this).valid()) {
    return;
  }

  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");


    $('#main_form').trigger('reset');
  });
  return false;
});
