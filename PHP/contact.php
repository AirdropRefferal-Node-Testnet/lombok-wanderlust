<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);
  
  $to = "info@lombokwanderlust.com";
  $subject = "Pesan Baru dari $name";
  $body = "Nama: $name\nEmail: $email\n\nPesan:\n$message";
  $headers = "From: $email";
  
  if (mail($to, $subject, $body, $headers)) {
    echo "<script>alert('Terima kasih! Pesan Anda telah terkirim.'); window.location.href='index.html';</script>";
  } else {
    echo "<script>alert('Maaf, terjadi kesalahan. Silakan coba lagi.'); window.history.back();</script>";
  }
}
?>
