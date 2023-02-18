var opened = false

function nav () {
    document.getElementById('nav-icon').src = !opened ? "/static/images/x-circle.svg" : "/static/images/ham.svg";
    opened = !opened;
}