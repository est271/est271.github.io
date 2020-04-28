/* jshint node: true */
/* jshint esversion: 6 */
/* jshint browser: true */

"use strict";

$(".top-nav-bar").load("../templates/top.html");
$(".bot-nav-bar-1").load("../templates/bot.html nav");
$(".bot-nav-bar-2").load("../templates/bot.html nav").addClass("fixed-bottom");
