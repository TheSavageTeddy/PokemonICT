function homepage(){
    window.location.replace("./menu.html");
}

function aboutpage(){
    window.location.replace("./about.html");
}

function statspage(){
    window.location.replace("./stats.html");
}

function cutepage(){
    window.location.replace("./cute.html");
}

function strongpage(){
    window.location.replace("./strong.html");
}

function superpage(){
    window.location.replace("./super.html");
}
var playing = false;
var rickplaying = false

function rickroll(){
    
    if (!rickplaying){
        rickplaying = true
        getHTML("statsimg").style.top = "1150px"
        getHTML("statsimg").style.left = "650px"
        getHTML("statsimg").src = "./img/rickroll gif.gif"
        getHTML("hmm").innerHTML = "We're no strangers to love<br> You know the rules and so do I<br> A full commitment's what I'm thinking of<br> You wouldn't get this from any other guy<br> I just wanna tell you how I'm feeling<br> Gotta make you understand<br><br> Never gonna give you up<br> Never gonna let you down<br> Never gonna run around and desert you<br> Never gonna make you cry<br> Never gonna say goodbye<br> Never gonna tell a lie and hurt you<br><br> We've known each other for so long<br> Your heart's been aching but you're too shy to say it<br> Inside we both know what's been going on<br> We know the game and we're gonna play it<br> And if you ask me how I'm feeling<br> Don't tell me you're too blind to see<br><br> Never gonna give you up<br> Never gonna let you down<br> Never gonna run around and desert you<br> Never gonna make you cry<br> Never gonna say goodbye<br> Never gonna tell a lie and hurt you<br> Never gonna give you up<br> Never gonna let you down<br> Never gonna run around and desert you<br> Never gonna make you cry<br> Never gonna say goodbye<br> Never gonna tell a lie and hurt you<br><br> Never gonna give, never gonna give<br> (Give you up)<br> (Ooh) Never gonna give, never gonna give<br> (Give you up)<br><br> We've known each other for so long<br> Your heart's been aching but you're too shy to say it<br> Inside we both know what's been going on<br> We know the game and we're gonna play it<br> I just wanna tell you how I'm feeling<br> Gotta make you understand<br><br> Never gonna give you up<br> Never gonna let you down<br> Never gonna run around and desert you<br> Never gonna make you cry<br> Never gonna say goodbye<br> Never gonna tell a lie and hurt you<br> Never gonna give you up<br> Never gonna let you down<br> Never gonna run around and desert you<br> Never gonna make you cry<br> Never gonna say goodbye<br> Never gonna tell a lie and hurt you<br> Never gonna give you up<br> Never gonna let you down<br> Never gonna run around and desert you<br> Never gonna make you cry<br>"
        getHTML("about1").hidden = true
        getHTML("about-title").innerHTML = "rickrolled lol"
        
        getHTML("rickroll").play()
        playing = false
        getHTML("music").pause()
        getHTML("music-text").innerHTML = "| | Paused - Super Contest"

    }else{
        rickplaying = false;
        getHTML("statsimg").style.top = "950px"
        getHTML("statsimg").style.left = "450px"
        getHTML("statsimg").src = "./img/Diancie Image.png"
        getHTML("hmm").innerHTML = "In the Pokemon game series, there is a competition from Generation III named the Pokemon named the Pokemon Super Contest. In here, players compete in one of five different categories in the competition: Cool Contests, Beauty Contests, Cute Contests, Smart Contests and Tough Contests. In this website, we will mainly focus on Cute Contests and Tough contests. In all these contests, there are three parts: the Visual Competition, the Dancing Competition and the Acting Competition. We will be mainly focusing on the acting competition mostly, as the other's results depend on player input. <br><br> The Acting competition is about Pokemon displaying moves to a judge of the player's choice (out of the 3 judges who are named Keira, Jordan and Dexter [the head judge]) that earns them a certain amount of attention from the judges which is measured in Appeal Points (AP), being portrayed as hearts per 10 AP in the game. However, some moves do not have any AP, but can be compensated for. <br><br> Certain moves also belong to a certain category, which is the category contest it would be best to use in (for example, the move Minimise belongs to the Cute Contest category with an AP of 2), and performing a move in the category contest it belongs to will boost a meter called the Voltage meter by 1. However, performing a non-matching move will cause the player's Voltage meter to go down by 1. When the Voltage Meter has been filled, the pokemon earns bonus AP depending on which judge they performed to. If they performed to Keira or Jordan, they will earn a bonus +5 AP. If they performed to Dexter, they will earn a bonus of +8 AP. Furthermore, a pokemon can earn extra points from judges depending on the conditions they performed in: if only 1 pokemon performed a move, there is a bonus of +3 AP, if two pokemon performed moves, there is a bonus of +2 AP, if three pokemon performed, there is a bonus of +1 AP apiece and if all pokemon performed, no bonus points will be awarded. <br><br> From Generation III, there were only 4 rounds, but it was changed to 5 from Generation IV onwards. Also, another change made from Generation III to Generation IV was that instead of the leader board displaying the best performer first then the worst performer last, it appears inversely (worst performer first, best performer last). <br><br> Below are some excellent moves to use in the Cute and Tough competitions due to their high AP. The ones that have a risk are marked with a ∆ sign and ones that come with the cost of 1 or more move in the next round are marked with a ¢ sign: <br><br> Key: <br> ∆ = low risk <br> ∆∆ = medium risk <br> ∆∆∆ = high risk <br> ¢ = 1 - 2 moves lost <br> ¢¢ = 2+ moves lost <br> <br> Cute: <br> Belly Drum ∆∆ <br> Teeter Dance ¢ <br> Captivate ∆ <br> Fake Tears ∆ <br> Slack Off ∆ <br> Snore ∆ <br> Splash ∆ <br> U-Turn ∆ <br> <br> Tough: <br> Memento ¢¢ <br> Final Gambit ¢¢<br> Double-Edge ∆∆ <br> Take Down ∆∆ <br> Superpower ∆∆ <br> Thrash ¢ <br> Bone Rush <br> Bonemerang <br> Egg Bomb <br> Mega Punch <br> Pound <br> Scratch <br> Spit Up <br> Tackle <br> Vice Grip <br>"
        getHTML("about1").hidden = false
        getHTML("about-title").innerHTML = "Pokemon Super Contest"
        
        getHTML("rickroll").pause();
        getHTML("rickroll").currentTime = 0;

    }
}


function music(){
    if (!playing){
        playing = true
        getHTML("music").play()
        getHTML("music-text").innerHTML = "▸ Now playing - Super Contest"
    }else{
        playing = false
        getHTML("music").pause()
        getHTML("music-text").innerHTML = "| | Paused - Super Contest"
    }

}

function getHTML(id){
    return document.getElementById(id)
}


document.addEventListener('DOMContentLoaded', function () {
    getHTML("title-text").addEventListener('click', music)
    getHTML("statsimg").addEventListener('click', rickroll);

    getHTML("nav-home").addEventListener('click', homepage);
    getHTML("nav-stats").addEventListener('click', statspage);
    getHTML("nav-cute").addEventListener('click', cutepage);
    getHTML("nav-super").addEventListener('click', superpage);
    getHTML("nav-strong").addEventListener('click', strongpage);
    getHTML("nav-about").addEventListener('click', aboutpage);


});