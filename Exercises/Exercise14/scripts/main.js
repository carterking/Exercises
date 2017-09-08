document.getElementById('submit').addEventListener('click', submit)
document.getElementById('reset').addEventListener('click', reset)



function submit() {
    console.log('submit');
    var messages = [];
    var userName = document.getElementById('userName');


    if (userName.value.length === 0) {
        messages.push('User Name is required');
        userName.classList.add('invalid');
    } else {
        userName.classList.remove('invalid');
    }
    if (emailAddress.value.length === 0) {
        messages.push('Email is Required');
        emailAddress.classList.add('invalid');
    } else {
        emailAddress.classList.remove('invalid');
    }
    if (password.value.length === 0) {
        messages.push('Password is required');
        password.classList.add('invalid');
    } else {
        password.classList.remove('invalid');
    }
    if (timeZone.value === '') {
        messages.push('Time Zone is Required');
        timeZone.classList.add('invalid');
    } else {
        timeZone.classList.remove('invalid');
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
    



    console.log(errorList);
}


function reset() {
    console.log('reset'); 
}

var elm = document.getElementById(input-group);
elm.classList.add(invalid);