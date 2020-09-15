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
    return document.getElementById(id);
}

var playing = false;


function music(){
    if (!playing){
        playing = true
        getHTML("music").play()
        getHTML("music-text").innerHTML = "▸ Now playing - Champion Alder"
    }else{
        playing = false
        getHTML("music").pause()
        getHTML("music-text").innerHTML = "| | Paused - Champion Alder"
    }
}


document.addEventListener('DOMContentLoaded', function () {
    getHTML("title-text").addEventListener('click', music)

    getHTML("nav-home").addEventListener('click', homepage);
    getHTML("nav-stats").addEventListener('click', statspage);
    getHTML("nav-cute").addEventListener('click', cutepage);
    getHTML("nav-super").addEventListener('click', superpage);
    getHTML("nav-strong").addEventListener('click', strongpage);
    getHTML("nav-about").addEventListener('click', aboutpage);


});