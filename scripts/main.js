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

$(document).ready( () => {
    $(".fade1").fadeTo(700, 1.0);
});

$(document).on("click", ".nav-link, .btn-primary", (event) => {
    let href = event.target.href;
    event.preventDefault();
    $(".fade1").fadeOut(700, () => {
        window.location = href;
    });
});

$(document).on("click", "#unmerged", (event) => {
    $("#unmerged-body").toggle(700);
});