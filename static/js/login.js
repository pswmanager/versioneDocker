function accesso(e){
    e.preventDefault();

    username = document.getElementById('logname').value;

    password = document.getElementById('logpass').value;

    request('GET', 'http://pswmanager:5000/users?username=' + username + '&password=' + password, (json) => {
        var data = JSON.parse(json);
        console.log(data)
        if(data.id == undefined){
            alert("Something went wrong check your credential or sign up if you haven't already!");
            return;
        }
        sessionStorage.setItem("id", data.id);
        window.location.replace("/passwords.html");
    })

}