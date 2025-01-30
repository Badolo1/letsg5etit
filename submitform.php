<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $date = htmlspecialchars($_POST['date']);
    $time = htmlspecialchars($_POST['time']);
    $message = htmlspecialchars($_POST['message']);

    $to = "info@shanelconsultants.com"; // Replace with your email address
    $subject = "New Consultation Request from $name";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nPreferred Date: $date\nPreferred Time: $time\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for contacting us. We will get back to you shortly.";
    } else {
        echo "There was an error sending your message. Please try again later.";
    }
}
?>