//create area
var area = new Grid("area", areaCols, areaRows);
area.init();

//load fisrt level
var currentLevel = area.loadLevel(1);

//play
document.querySelector('#play').addEventListener("click", togglePlay);
//pause
document.querySelector('#pause').addEventListener("click", togglePlay);

//define players & dubBots
// var player0 = items[itemIndex("player0")];
var player = [];
var dumbBot = [];
levelElements[currentLevel].forEach(function(element){
    if (element.class === "player"){
        player.push(items[itemIndex(element.id)]);
    } else if (element.class === "dumbbot") {
        dumbBot.push(items[itemIndex(element.id)]);
    }
})

//PLAY
var play = false;
var interval = false
document.querySelector('#pause').style.visibility = "hidden";
document.querySelector('.infos').style.visibility = "visible";
function togglePlay(){
    if (!play){
        play = true;
        interval = setInterval(moveDumbBot,100);
        document.querySelector('#play').style.visibility = "hidden";
        document.querySelector('#pause').style.visibility = "visible";
        document.querySelector('.infos').style.visibility = "hidden";
    } else {
        clearInterval(interval);
        document.querySelector('#play').style.visibility = "visible";
        document.querySelector('#pause').style.visibility = "hidden";
        document.querySelector('.infos').style.visibility = "visible";
        play = false;
    }

}
