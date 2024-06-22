document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = this;
    const formData = new FormData(form);

    emailjs.sendForm('service_vo1qw4q', 'template_ydk4tk8', form)
        .then(function() {
            alert('Your message has been sent!');
            form.reset();
        }, function(error) {
            console.error('Failed to send email:', error);
        });
});
