function dateAndTime() {
    document.getElementById('data-si-ora').innerHTML = Date();
}

function locationClick() {
    document.getElementById('locatie').innerHTML = window.location.href;
}

function browserInfo() {
    document.getElementById('browser').innerHTML = navigator.appCodeName;
}