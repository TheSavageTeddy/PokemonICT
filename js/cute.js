function homepage(){
    window.location.replace("../menu.html");
}

function aboutpage(){
    window.location.replace("../about.html");
}

function statspage(){
    window.location.replace("../stats.html");
}

function getHTML(id){
    return document.getElementById(id)
}


document.addEventListener('DOMContentLoaded', function () {
    getHTML("nav-home").addEventListener('click', homepage);
    getHTML("nav-about").addEventListener('click', aboutpage);
    getHTML("nav-stats").addEventListener('click', statspage);


});