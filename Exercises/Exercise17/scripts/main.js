$(document).ready(function(){
$('.error').hide();
var evenItems = $('.input-group').filter(':even');
evenItems.addClass('even');
 $('#firstName').on('blur', function() {
    var input = $(this);
    if (input.val() === '') {
        input.closest('.input-group').find('.requiredMsg').fadeIn();
    } else {
        input.closest('.input-group').find('.requiredMsg').fadeOut();
    }
});

$('#lastName').on('blur', function() {
    var input = $(this);
    if (input.val() === '') {
        input.closest('.input-group').find('.requiredMsg').fadeIn();
    } else {
        input.closest('.input-group').find('.requiredMsg').fadeOut();
    }
});

$('#emailAddress').on('blur', function() {
    var input = $(this);
    if (input.val() === '') {
        input.closest('.input-group').find('.requiredMsg').fadeIn();
    } else {
        input.closest('.input-group').find('.requiredMsg').fadeOut();
    }
    var emailEntry = $('#emailAddress').val();
    var emailCheck = emailEntry.includes('@') || emailEntry.includes('.com');
    if (emailCheck === false) {
        $('.emailMsg').fadeIn();
    } else {
        $('.emailMsg').fadeOut();
    }
});

});