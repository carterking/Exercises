function update() {
    /* ===================
        Your code starts here
    =====================*/

    //Create new array.
    var messages = [];
    //If first name is empty. Add it to the array
    var firstName = document.getElementById('firstName').value;
    if (firstName.length < 1) {
        messages.push("First Name is required");
    }
    //If last name is empty. Add it to the array
    var lastName = document.getElementById('lastName').value;
    if (lastName.length < 1) {
        messages.push("Last Name is required");
    }

    //Email is empty. Add it to the array
    var emailAddress = document.getElementById('emailAddress').value;
    if (emailAddress.length < 1) {
        messages.push("Email is required");
    }
    console.log(messages);
    //Loop through array
    var errorList = '';
    for (var i = 0; i < messages.length; i++) {
        errorList += messages[i] + '<br>';
        document.getElementById('error-list').innerHTML = errorList;
    }



    //Create javascript object for the user
    var user = {
        firstname: firstName,
        lastname: lastName,
        email: emailAddress,
        fullname: function () {
            return this.firstname + ' ' + this.lastname;
        }
    };

    //log the user object to the console
    console.log(user.fullname());

    //Check to see if everything is valid
    if (messages.length < 1) {
        var d = new Date();
    }
    console.log(d);
    //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.
    /*var weekday = new Array(7);
    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    var monthName = new Array(12);
    monthName[0] = 'Jan';
    monthName[1] = 'Feb';
    monthName[2] = 'March';
    monthName[3] = 'Apr';
    monthName[4] = 'May';
    monthName[5] = 'June';
    monthName[6] = 'July';
    monthName[7] = 'Aug';
    monthName[8] = 'Sept';
    monthName[9] = 'Oct';
    monthName[10] = 'Nov';
    monthName[11] = 'Dec';
    */
    var submittedDate = (d.toDateString());

    //Make the alert box.
    alert('Submitted on ' + submittedDate + '.');

    /* ===================
        Your code ends here
    =====================*/


}



var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}