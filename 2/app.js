//create area
var area = new Grid("area", areaCols, areaRows);
area.init();

//load level
var level = getFromStorage("level");
console.log(level)
//if first time, load level 0
if (level.length === 0){
    var currentLevel = area.loadLevel(0);
}
//else load last played level
else {
    var currentLevel = area.loadLevel(level[0].levelNumber);
}
//save current level to localStorage
clearStorage("level");
level = getFromStorage("level");
saveLevelToStorage(currentLevel);

//play
document.querySelector('#play').addEventListener("click", togglePlay);
//pause
document.querySelector('#pause').addEventListener("click", togglePlay);

//define players, dubBots & targets
// var player0 = items[itemIndex("player0")];
var player = [];
var dumbBot = [];
var target = [];
levelElements[currentLevel].forEach(function(element){
    if (element.class === "player"){
        player.push(items[itemIndex(element.id)]);
    } else if (element.class === "dumbbot") {
        dumbBot.push(items[itemIndex(element.id)]);
    }
    else if (element.class === "target") {
        target.push(items[itemIndex(element.id)]);
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
