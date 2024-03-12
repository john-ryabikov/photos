<?php

$recepient = "venom0us2015@yandex.ru";
$siteName = "Just-Sites.ru";

$name = trim($_POST["user_name"]);
$phone = trim($_POST["user_phone"]);
$mail = trim($_POST["user_email"]);
$text = trim($_POST["user_text"]);

$message = "Имя: $name \nПочта: $mail \nТелефон: $phone \nСообщение: $text";

$pagetitle = "Заявка с сайта \"$siteName\" для перезвона";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>