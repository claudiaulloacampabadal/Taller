// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function Add() {
    var student = {
        name: $('#name').val(),
        email: $('#email').val(),
        password: $('#password').val()
    };

    //To do: COMPLETE THE CONTROLLER CALL
    $.ajax({ //ASYNCHRONOUS JAVASCRIPT AND XML
        url: "/Home/Insert",
        data: JSON.stringify(student), //converte la variable estudiante en tipo json
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) { //result proviene del controller

            // alert("resultado: "+result);
            $('#name').val('');
            $('#email').val('');
            $('#password').val('');
        },
        error: function (errorMessage) {
            $('#password').val('');
        }
    });
}
