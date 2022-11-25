<?php

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = "$name оставил заявку на сайте, его номер $phone";

    $subject = '=?utf-8?B?'.base64_encode('Сообщение с сайта').'?=';
    $headers = "From: i.i.gumerov116@mail.ru\r\nReply-to: i.i.gumerov116@mail.ru\r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail('ilnur_gumerov_1996@mail.ru', $subject, $message, $headers);

    echo $success;
?>