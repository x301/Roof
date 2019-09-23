<?php

/* https://api.telegram.org/bot694963765:AAFtfpM5-OYma8GPEULsKnN6apIsIosIYjY/getUpdates,
где, 694963765:AAFtfpM5-OYma8GPEULsKnN6apIsIosIYjY - токен нашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$square = $_POST['square'];
$corner = $_POST['corner'];
$height = $_POST['height'];
$serviceName = $_POST['serviceName'];
$token = "694963765:AAFtfpM5-OYma8GPEULsKnN6apIsIosIYjY";
$chat_id = "-310743673";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Тип услуги: ' => $serviceName,
  'Площадь м2: ' => $square,
  'Угол наклона: ' => $corner,
  'Кол-во этажей: ' => $height,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


?>