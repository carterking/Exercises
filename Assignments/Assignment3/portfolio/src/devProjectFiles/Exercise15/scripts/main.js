$(document).ready(function(){

     ///// Code goes here

/*  $('#btnOne').on('click', showAlert);

function showAlert() {
    alert('Hi, this is an alert!');
}
*/
$('#btnOne').on('click', function(){
    alert('Hi, this is an alert!');
});

$('#btnTwo').on('click', function(){
    $('.update-html').html('<h3>Hello World</h3>')
});

$('#btnThree').on('click', function(){
    $('#text-update').val('Hello World')
});

$('#btnCopyHtml').on('click', function(){
    var copiedHtml = $('.copy-html').html()
    $('.paste-html').html(copiedHtml)
});

$('#btnCopyValues').on('click', function(){
    var copiedValue = $('#copy-text').val()
    $('#paste-text').val(copiedValue)
});

});
