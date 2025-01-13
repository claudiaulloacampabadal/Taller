// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {

    GetNationalities();

});

function Add() {
    var student = {
        name: $('#name').val(),
        email: $('#email').val(),
        password: $('#password').val(),
        nationality_id: parseInt($('#nationality').val())
    };

    var nationality = {

        id: parseInt($('#nationality').val()),
        name: $('#nationality').find('option:selected').text()
        //TBD code: 
    };

    student.nationality = nationality;

    if (student.name == '' || student.email == '' || student.password == '' || nationality.name == 'Select your nationality') {
        $('#validation').text("Please complete the form");
        $('#validation').css('color', 'red');
    } else { 
 
        $.ajax({ //ASYNCHRONOUS JAVASCRIPT AND XML
            url: "/Home/Insert",
            data: JSON.stringify(student), //converte la variable estudiante en tipo json
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) { //result proviene del controller

                $('#name').val('');
                $('#email').val('');
                $('#password').val('');
                $('#nationality').val(0);

                $('#validation').text("Registered successfully");
                $('#validation').css('color', 'green');
            },
            error: function (errorMessage) {
                $('#password').val('');
                $('#validation').text("An error occurred");
                $('#validation').css('color', 'red');
            }
        });
    }
}

function GetNationalities() {
    $.ajax({ //ASYNCHRONOUS JAVASCRIPT AND XML
        url: "/Home/GetNationalities",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) { //result proviene del controller

            var htmlSelect = '';

            $.each(result, function (key, item) {
                htmlSelect += '<option value="' + item.id + '">' + item.name + '</option>';
            });
            $('#nationality').append(htmlSelect);
            
        },
        error: function (errorMessage) {
            //TO DO
        }
    });
}

