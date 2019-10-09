<?php

/* https://api.telegram.org/bot945676740:AAGBORWbahy3gDdJVf7olR_bnoT7SPPqsXE/getUpdates,
где, 945676740:AAGBORWbahy3gDdJVf7olR_bnoT7SPPqsXE - токен нашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
$token = "945676740:AAGBORWbahy3gDdJVf7olR_bnoT7SPPqsXE";
$chat_id = "-310743673";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email: ' => $email,
  'Сообщение: ' => $message,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>