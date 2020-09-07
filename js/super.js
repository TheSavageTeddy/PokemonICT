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

var rickplaying = false

function rickroll(){
    if (!rickplaying){
        getHTML("statsimg").src = "../img/rickroll gif.gif"
        rickplaying = true
        getHTML("rickroll").play()

    }else{
        getHTML("statsimg").src = "../img/Diancie Image.png"
        rickplaying = false;
        getHTML("rickroll").pause();
        getHTML("rickroll").currentTime = 0;

    }
}


function getHTML(id){
    return document.getElementById(id)
}


document.addEventListener('DOMContentLoaded', function () {
    getHTML("statsimg").addEventListener('click', rickroll);

    getHTML("nav-home").addEventListener('click', homepage);
    getHTML("nav-stats").addEventListener('click', statspage);
    getHTML("nav-cute").addEventListener('click', cutepage);
    getHTML("nav-super").addEventListener('click', superpage);
    getHTML("nav-strong").addEventListener('click', strongpage);
    getHTML("nav-about").addEventListener('click', aboutpage);


});