    // ============= SUBSCRIBE FORM VALIDATION SETTINGS ========================  

    $('#subscribe_form').validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.closest("form"));
        },
        messages: {
            email: {
                required: "We need your email address to contact you",
                email: "Please, enter a valid email"
            }
        },

        highlight: function (element) {
            $(element)
        },

        success: function (element) {
            element
                .text('').addClass('valid')
        }
    });



    // ============= SUBSCRIBE FORM MAILCHIMP INTEGRATION SCRIPT ========================  

    $('#subscribe_form').submit(function () {
        $('.error').hide();
        $('.error').fadeIn();
        // submit the form
        if ($(this).valid()) {
            $('#subscribe_submit').button('loading');
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    newsletter_email: $('#subscribe_email').val()
                },
                success: function (data) {
                    $('#subscribe_submit').button('reset');
                    $('.error').html(data);
                },
                error: function () {
                    $('#subscribe_submit').button('reset');
                    // Change subscribe form error message text here
                    $('.error').html('Oops! Something went wrong!');
                }
            });
            // return false to prevent normal browser submit and page navigation 
        }
        return false;
    });