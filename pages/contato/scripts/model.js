function sendMail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var link = "mailto:bruno.nunes72@hotmail.com"
             + "?cc"
             + "&subject=Contato do site"
             + "&body=" + `Nome: ${name}%0D%0AE-mail: ${email}%0D%0A${message}`
    ;

    window.location.href = link;
}