/* jshint node: true */
/* jshint esversion: 6 */
/* jshint browser: true */

"use strict";

// nav-bar templates
$(".top-nav-bar").load("../templates/top.html");
$(".bot-nav-bar-1").load("../templates/bot.html");
$(".bot-nav-bar-2").load("../templates/bot.html").addClass("fixed-bottom");

// skill button templates
$("#project-1-html").load("../templates/skill_btn.html #project-1-btn");
$("#project-2-html").load("../templates/skill_btn.html #project-2-btn");
$("#project-3-html").load("../templates/skill_btn.html #project-3-btn");
$("#project-4-html").load("../templates/skill_btn.html #project-4-btn");
$("#project-5-html").load("../templates/skill_btn.html #project-5-btn");
$("#project-6-html").load("../templates/skill_btn.html #project-6-btn");

//form message templates
$("#formSubmit").load("../templates/skill_btn.html #form-message");

$(document).ready( () => {
    $(".fade1").fadeTo(700, 1.0);
});

$(document).on("click", ".nav-link, .btn-primary, .home-btn", (event) => {
    let href = event.target.href;
    event.preventDefault();
    $(".fade1").fadeOut(700, () => {
        window.location = href;
    });
});

$(document).on("click", "#unmerged", (event) => {
    $("#unmerged-body").toggle(700);
});

$(document).ready( () => {
    $("#name1").animate({ "bottom": "0em" }, 1000);
    $("#name2").animate({ "right": "0em" }, 1000, () => {
        $("#name3").fadeTo(700, 1.0, () => {
            $(".home-btn").fadeTo(700, 1.0);
        });
    });
});

const errorSequence = () => {
  $('#formHeader').css("background-color", "red");
  $('#formText').html("Make sure no special characters are used such as < or {");
  $('#messBody').append($('<p>Also make sure that JavaScript is enabled in your browser</p>'));
  $('#form-title').html("Uh-oh!!! The message could not be sent");
  $('#form-message').modal('show').on('hidden.bs.modal',() => window.location.reload());
};

const onSubmitHandler = () => {
    // regex to remove newline
    let reg = /\n/g;

    const formName = $("#nameInput")[0].value;
    const formEmail = $("#emailInput")[0].value;
    let formText= $("#textArea")[0].value.replace(reg, ' ');

    const data = {
      name: formName,
      email: formEmail,
      text: formText
    };

    fetch('https://port-messages-be0d5.firebaseio.com/messages.json', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      if (response.ok) {
        $('#form-message').modal('show').on('hidden.bs.modal',() => window.location.reload());
      } else {
        errorSequence();
      }
    }).catch( error => {
      console.log(error) 
      errorSequence();
    });
};
