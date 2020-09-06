function aboutpage(){
    window.location.replace("../about.html");
}

function statspage(){
    window.location.replace("../stats.html");
}

function cutepage(){
    window.location.replace("../cute.html");
}

function getHTML(id){
    return document.getElementById(id)
}


document.addEventListener('DOMContentLoaded', function () {
    getHTML("nav-about").addEventListener('click', aboutpage);
    getHTML("nav-stats").addEventListener('click', statspage);
    getHTML("nav-cute").addEventListener('click', cutepage);


});