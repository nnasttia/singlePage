
function sendEmail() {
    let inputName = document.getElementById('name').value;
    let inputEmail = document.getElementById('email').value;
    let inputSubject = document.getElementById('subject').value;
    let inputMessage = document.getElementById('message').value;
    let formMessage = document.getElementById('form-message').value;

    Email.send({
        /*Host: "smtp.gmail.com",
        Username: "sender@email_address.com",
        Password: "Enter your password",
        To: 'receiver@email_address.com',
        From: "sender@email_address.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",*/

        Host: "smtp.gmail.com",
        Username: "khaya.oxana@gmail.com",
        Password: "Enter your password",
        To: 'khaya.oxana@gmail.com',
        From: inputEmail,
        Subject: inputSubject,
        Body: inputMessage,
    })
    .then(function (message) {
        //form-message = 'Mail sent successfully!';
    });
}
