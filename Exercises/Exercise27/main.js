/*
    Exercise 27 
*/
$(document).ready(function () {

    /*=======================
        Regular Expressions 
     =======================*/
     
    $('#btnvalidate').click(validateEmail);
    $('#btnvalidate').click(validateNumeric);

    function validateEmail() {
        var str = $('#email').val();
        var patt = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i)
        var res = patt.test(str);
        if (res === false) {
            $('#email').addClass('is-invalid');
        } else {
            $('#email').removeClass('is-invalid');
        }
    }

    function validateNumeric() {
        var string = $('#numeric').val();
        var pattern = (/[0-9]/g);
        var string = string.replace(pattern, '');
        console.log(string);
    }


    /*=======================
      Array Methods 
    =======================*/

    var myArray = [1, 2, 3, 4, 5, 10, 100];
    var newArray = myArray.map(function (val) {
        return Math.pow(val, 2);
    });
    console.log(newArray);

});