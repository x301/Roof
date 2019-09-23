<?php
$recepient = "ishellyp@gmail.com";
$sitename = "MosKrovService";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["message"]);
$email = trim($_POST["email"]);

$message = "Имя: $name \nТелефон: $phone \nEmail: $email \nСообщение $smessage ";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");