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
const formAdd = document.getElementById('formAdd');
const contactButton = document.getElementById('buttonContact');
const contactName = document.getElementById('contactName');
const contactEmail = document.getElementById('contactEmail');
const contactMessage = document.getElementById('contactMessage');
const addTerm = document.getElementById('term');
const addDefinition = document.getElementById('definition');
const addExample = document.getElementById('example');
const msgError = document.getElementById('msgError');

//Credit for submit event listener to detect form submission
$( "#formContact" ).submit(function( event ) { event.preventDefault(); sendMail(this); });
$( "#formAdd" ).submit(function( event ) { event.preventDefault(); submitTerm(this); });

//Function to validate text area fields against double spaces, symbols and empty fields.
function stringCheck(x) { if (RegExp(/^([a-zA-Z0-9_]+\s?){1,}\\*$/).test(x) === false) { return 'nomatch'; } else { return 'match'; } }

function submitTerm() {
    let termErrors = [];
    let noaddTerm = (addTerm.value === null || addTerm.value === "");
    let noaddDefinition = (addDefinition.value === null || addDefinition.value === "");
    let noaddExample = (addExample.value === null || addExample.value === "");

    // If no input detected display an error then check input on same field against stringCheck; to display an error and/or update valid class on the field
    if (noaddTerm) { termErrors.push("Term field required."); addTerm.classList.add('invalid'); } else if (stringCheck(addTerm.value) === 'nomatch')
        { termErrors.push('Term must be min 2 alphanumeric characters with no double spaces.'); addTerm.classList.add('invalid'); } else { addTerm.classList.add('valid'); }
    if (noaddDefinition) { termErrors.push("Definition field required."); addDefinition.classList.add('invalid'); } else if (stringCheck(addDefinition.value) === 'nomatch')
        { termErrors.push('Definition must be min 5 alphanumeric characters with no double spaces.'); addDefinition.classList.add('invalid'); } else { addDefinition.classList.add('valid'); }
    if (noaddExample) { termErrors.push("Example field required."); addExample.classList.add('invalid'); } else if (stringCheck(addExample.value) === 'nomatch')
        { termErrors.push('Example must be min 5 alphanumeric characters with no double spaces.'); addExample.classList.add('invalid'); } else { addExample.classList.add('valid'); }

    // Clears previous error messages
    $("#msgError").empty();
    if (termErrors.length === 0) { formAdd.submit(); return false; } else { for (let i = 0; i < termErrors.length; i++) { msgError.innerHTML = msgError.innerHTML + termErrors [i] + '<br>'; } return false; }
}

function sendMail() {
    let errors = [];
    let nocontactName = (contactName.value === null || contactName.value === "");
    let nocontactEmail = (contactEmail.value === null || contactEmail.value === "");
    let nocontactMessage = (contactMessage.value === null || contactMessage.value === "");

    // If no input detected display an error
    if (nocontactName) { errors.push("Name field required."); contactName.classList.add('invalid'); } else if (!RegExp(/^([a-zA-Z_]+\s?){2,}\\*$/).test(contactName.value))
        { errors.push('Name must be min 2 alpha characters and no double spaces/symbols.'); contactName.classList.add('invalid'); } else { contactName.classList.add('valid'); }
    if (nocontactEmail) { errors.push("Email field required."); contactEmail.classList.add('invalid'); }
    if (nocontactMessage) { errors.push("Message field required."); contactMessage.classList.add('invalid'); } else if (stringCheck(contactMessage.value) === 'nomatch')
        { errors.push('Message must be min 5 alphanumeric characters and no double spaces/symbols.'); contactMessage.classList.add('invalid'); } else { contactMessage.classList.add('valid'); }

    
    // Clears previous error messages
    $("#msgError").empty();
    if (errors.length === 0) { emailjs.send("service_qtd8qrn", "gamersaurusContact", {
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

    } else { for (let i = 0; i < errors.length; i++) { msgError.innerHTML = msgError.innerHTML + errors [i] + '<br>'; }
    return false;
    }
}