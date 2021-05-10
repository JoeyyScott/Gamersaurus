$(document).ready(function () {
    // Credit for Materialize sidenav, collapsible, and form validation
    $(".sidenav").sidenav({edge: "right"});
    $(".collapsible").collapsible();
    $('.modal').modal();
    // Checking for input in the 2 password fields on register with credit for keyup and .val() - see README.md
    $('#password, #passwordconfirm').on('keyup', function () {
        if ($('#password').val() == $('#passwordconfirm').val()) {
            $('#msgPw').html('Match').css("color", '#f3ca40');
        } else
            $('#msgPw').html('No Match').css("color", '#c0960c');
    });
});

// Constants
const form = document.getElementById('contactForm');
const contactButton = document.getElementById('buttonContact');
const formMessage = document.getElementById('formMessage');
const msgError = document.getElementById('msgError');

//Credit for submit event listener to detect form submission
$( "#contactForm" ).submit(function( event ) { event.preventDefault(); sendMail(this); });

function stringCheck(x) {
    if (RegExp(/^([a-zA-Z0-9_]+\s?){1,}\\*$/).test(x) === false) { return 'nomatch' }
    else { return 'match' }
}

function sendMail() {
    let errors = [];
    let noFormMessage = (formMessage.value === null || formMessage.value === "");

    // If no input detected display an error
    if (noFormMessage) { errors.push("Message field required."); }

    // If double spaces or symbols are detected display an error
    if (!noFormMessage) {
        if (stringCheck(formMessage.value) === 'nomatch') { errors.push('Message must contain letters, numbers and no double spaces/symbols.') }
    }

    // Clears previous error messages
    $("#msgError").empty();
    if (errors.length === 0) {
        emailjs.send("service_qtd8qrn", "gamersaurusContact", {
            formName: formName.value,
            formEmail: formEmail.value,
            formMessage: formMessage.value,
        })
        .then(
            //Changes the submitButton text to convey to the user if their submission was successful or not
            function (response) { contactButton.innerHTML = `Thank you for your query! <i class="fas fa-smile-beam"></i>`; form.reset(); },
            function (error) { contactButton.innerHTML = `Oops! Please try again. <i class="fas fa-frown"></i>`; }
        );

    return false;  

    } else { for (i = 0; i < errors.length; i++) { msgError.innerHTML = msgError.innerHTML + errors [i] + '<br>'; }
    return false;
    }
}