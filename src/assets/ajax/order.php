<?php
$recepient = "info@moskrovservice.ru";
$sitename = "MosKrovService";

$name = trim($_POST['name']);
$phone = trim($_POST['phone']);
$square = trim($_POST["square"]);
$corner = trim($_POST["corner"]);
$height = trim($_POST["height"]);
$message = "Имя: $name \nТелефон: $phone \nПлощадь м2 $square \nУгол наклона: $corner \nКол-во этажей: $height";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");