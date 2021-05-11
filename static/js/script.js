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
const formContact = document.getElementById('formContact');
const contactButton = document.getElementById('buttonContact');
const contactName = document.getElementById('contactName');
const contactEmail = document.getElementById('contactEmail');
const contactMessage = document.getElementById('contactMessage');
const msgError = document.getElementById('msgError');

//Credit for submit event listener to detect form submission
$( "#formContact" ).submit(function( event ) { event.preventDefault(); sendMail(this); });

//Function to validate text area fields against double spaces, symbols and empty fields.
function stringCheck(x) { if (RegExp(/^([a-zA-Z0-9_]+\s?){1,}\\*$/).test(x) === false) { return 'nomatch'; } else { return 'match'; } }

//Function to valid contactMessage value as it is a text area field before sending the email
function sendMail() {
    let errorsContact = [];
    let nocontactMessage = (contactMessage.value === null || contactMessage.value === "");

    // If no input detected display an error
    if (nocontactMessage) { errorsContact.push("Message field required."); } else if (stringCheck(contactMessage.value) === 'nomatch')
        { errorsContact.push('Message must contain letters, numbers and no double spaces/symbols.'); contactMessage.classList.add('invalid'); } else { contactMessage.classList.add('valid'); }

    // Clears previous error messages
    $("#msgError").empty();
    if (errorsContact.length === 0) {
        emailjs.send("service_qtd8qrn", "gamersaurusContact", {
            contactName: contactName.value,
            contactEmail: contactEmail.value,
            contactMessage: contactMessage.value,
        })
        .then(
            //Changes the submitButton text to convey to the user if their submission was successful or not
            function (response) { contactButton.innerHTML = `Thank you for your query! <i class="fas fa-smile-beam"></i>`; formContact.reset(); },
            function (error) { contactButton.innerHTML = `Oops! Please try again. <i class="fas fa-frown"></i>`; }
        );

    return false;  
    // Loop for showing all current errorsContact
    } else { for (let i = 0; i < errorsContact.length; i++) { msgError.innerHTML = msgError.innerHTML + errorsContact [i] + '<br>'; }
    return false;
    }
}