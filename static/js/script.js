$(document).ready(function () {
    // Credit for Materialize sidenav, collapsible, and form validation
    $(".sidenav").sidenav({edge: "right"});
    $(".collapsible").collapsible();
    $('.modal').modal();
    // Credit for making textarea validate with Regex patterns
    var errorMessage = "Please match the requested format.";

    $( this ).find( "textarea" ).on( "input change propertychange", function() {

        var pattern = $( this ).attr( "pattern" );

        if(typeof pattern !== typeof undefined && pattern !== false)
        {
            var patternRegex = new RegExp( "^" + pattern.replace(/^\^|\$$/g, '') + "$", "g" );

            hasError = !$( this ).val().match( patternRegex );

            if ( typeof this.setCustomValidity === "function") 
            {
                this.setCustomValidity( hasError ? errorMessage : "" );
            } 
            else 
            {
                $( this ).toggleClass( "error", !!hasError );
                $( this ).toggleClass( "ok", !hasError );

                if ( hasError ) 
                {
                    $( this ).attr( "title", errorMessage );
                } 
                else
                {
                    $( this ).removeAttr( "title" );
                }
            }
        }

    });
});

// Constants
const form = document.getElementById('contactForm');
const contactButton = document.getElementById('buttonContact');

//Credit for submit event listener to detect form submission
$( "#contactForm" ).submit(function( event ) { event.preventDefault(); contactUs(this); });

function contactUs(contactForm) {
    // Credit for emailJS send function
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
    //End credit for emailJS send function
}