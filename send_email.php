<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Your email address
    $to = "joaopdsx2015@gmail.com";

    // Email subject
    $email_subject = "New message from your website: " . $subject;

    // Email body
    $email_body = "You have received a new message from your website contact form.\n\n".
                  "Here are the details:\n\nName: $name\n\n".
                  "Email: $email\n\n".
                  "Subject: $subject\n\n".
                  "Message:\n$message";

    // Email headers
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email";

    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        // Redirect to a thank you page or display a success message
        echo "Your message was sent successfully.";
    } else {
        // Display an error message
        echo "There was an error sending your message.";
    }
} else {
    // Display an error message if the form was not submitted correctly
    echo "There was an error submitting the form. Please try again.";
}
?>
