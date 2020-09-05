function aboutpage(){
    window.location.replace("../about.html");
}

function getHTML(id){
    return document.getElementById(id)
}


document.addEventListener('DOMContentLoaded', function () {
    getHTML("nav-about").addEventListener('click', aboutpage);


});