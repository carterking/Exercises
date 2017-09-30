document.getElementById('submit').addEventListener('click', submit)
document.getElementById('reset').addEventListener('click', reset)
var inputs = ['firstName', 'lastName', 'email', 'referral', 'reason'];
var ERROR_CLASS = 'invalid';



function submit() {
    console.log('submit');
    var messages = [];
    var firstName = document.getElementById('firstName');
    var email = document.getElementById('email');


    if (firstName.value.length === 0) {
        messages.push('First Name is required');
        firstName.classList.add('invalid');
    } else {
        firstName.classList.remove('invalid');
    }
    if (lastName.value.length === 0) {
        messages.push('Last Name is required');
        lastName.classList.add('invalid');
    } else {
        lastName.classList.remove('invalid');
    }
    if (email.value.length === 0) {
        messages.push('Email is Required');
        email.classList.add('invalid');
    } else {
        email.classList.remove('invalid');
    }

    if (referral.value.length === 0) {
        messages.push('How did you find us? is required');
        referral.classList.add('invalid');
    } else {
        referral.classList.remove('invalid');
    }
    if (reason.value === '') {
        messages.push('Why do you need the blender? is Required');
        reason.classList.add('invalid');
    } else {
        reason.classList.remove('invalid');
    }
    if (terms.checked === false) {
        messages.push('You must accept the Terms and Conditions');
    }

    var errorList = '';
    for (var i = 0; i < messages.length; i++)
        errorList += messages[i] + '<br>';
    if (errorList.length > 0) {
        document.getElementById('message').innerHTML = errorList;
        message.classList.add('error');
    } else {
        document.getElementById('message').innerHTML = '<strong>Way to go, you filled out a form!</strong>';
    }

}


function reset() {
    for (var i = 0; i < inputs.length; i++) {
        var elm = getElm(inputs[i])
        elm.value = '';
        elm.classList.remove('invalid');
    }

    getElm('message').innerHTML = '';

    getElm('firstName').value = '';
    getElm('lastName').value = '';
    getElm('email').value = '';
    getElm('referral').value = '';
    getElm('reason').value = '';
    getElm('terms').checked = false;
}

function getElm(id) {
    return document.getElementById(id);
}
