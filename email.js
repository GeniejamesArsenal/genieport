emailjs.init("YVeShsfL2X11z2KYX");

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var to_name = "Recipient Name";

    emailjs.send("service_g1s863l", "template_jtdb98f", {
        to_name: to_name,
        from_name: name,
        from_email: email,
        message: message
    }).then(function(response) {
        console.log("Success", response);
        alert("Message sent successfully!");
    }, function(error) {
        console.log("Error", error);
        alert("Failed to send message. Please try again. Error: " + error.text);
    });
});
