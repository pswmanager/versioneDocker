function creaUtente(e) {
    e.preventDefault();

    var username = document.getElementById('signame').value;

    var password = document.getElementById('sigpass').value;

    var email = document.getElementById("sigemail").value;

    request('POST', "http://api:5000/users", (json) => {
        var data = JSON.parse(json);
        console.log(data);
        if(data.username === undefined) {
            alert('Qualcosa non ha funzionato')
        } else {
            window.location.replace('/forms.html?type=login');
        }
        
    }, JSON.stringify({
        username: username,
        password: password,
        email: email
    }));

}