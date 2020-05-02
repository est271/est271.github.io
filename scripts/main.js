/* jshint node: true */
/* jshint esversion: 6 */
/* jshint browser: true */

"use strict";

$(".top-nav-bar").load("../templates/top.html");
$(".bot-nav-bar-1").load("../templates/bot.html nav");

$(document).ready( () => {
    $(".fade1").fadeTo(700, 1.0);
});

$(document).on("click", ".nav-link, .btn", (event) => {
    let href = event.target.href;
    event.preventDefault();
    $(".fade1").fadeOut(700, () => {
        window.location = href;
    });
});