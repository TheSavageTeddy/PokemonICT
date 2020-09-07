function homepage(){
    window.location.replace("../menu.html");
}

function aboutpage(){
    window.location.replace("../about.html");
}

function statspage(){
    window.location.replace("../stats.html");
}

function cutepage(){
    window.location.replace("../cute.html");
}

function strongpage(){
    window.location.replace("../strong.html");
}

function superpage(){
    window.location.replace("../super.html");
}


function getHTML(id){
    return document.getElementById(id)
}


document.addEventListener('DOMContentLoaded', function () {
    getHTML("nav-home").addEventListener('click', homepage);
    getHTML("nav-stats").addEventListener('click', statspage);
    getHTML("nav-cute").addEventListener('click', cutepage);
    getHTML("nav-super").addEventListener('click', superpage);
    getHTML("nav-strong").addEventListener('click', strongpage);
    getHTML("nav-about").addEventListener('click', aboutpage);


});