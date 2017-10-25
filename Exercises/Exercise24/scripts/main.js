$(document).ready(function () {
            $("#btnSubmit").click(function () {
                $("#form").fadeOut(200, function () {
                    $("#thankyou").fadeIn();
                });
            });
        });