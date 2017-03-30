//CREATE ARENA
var area = new Grid("area", areaCols, areaRows);
area.init();


//LOAD LEVEL
//Set localStorage level to level[]
var level = getFromStorage("level");
//if level[] is empty
if (level.length === 0){
    //load level 0 and affect 0 to currentLevel
    var currentLevel = area.loadLevel(0);
    //save currentLevel to localStorage
    saveLevelToStorage(currentLevel);
    level = getFromStorage("level")
}
//else
else {
    //load last played level and affect it to currentLevel
    var currentLevel = area.loadLevel(level[0].levelNumber);
}


//PLAY
//init play button
document.querySelector('#play').addEventListener("click", togglePlay);
//init pause button
document.querySelector('#pause').addEventListener("click", togglePlay);
var play = false;
var interval = false
document.querySelector('#pause').style.visibility = "hidden";
function togglePlay(){
    if (!play){
        play = true;
        interval = setInterval(moveDumbBot,100);
        document.querySelector('#play').style.visibility = "hidden";
        document.querySelector('#pause').style.visibility = "visible";
    } else {
        clearInterval(interval);
        document.querySelector('#play').style.visibility = "visible";
        document.querySelector('#pause').style.visibility = "hidden";
        play = false;
    }

}


//position play button in center of arena
var btnPlayLeft = (removePxParseInt(area.width)/2 - removePxParseInt(btnPlayWidth)/2) + "px";
var btnPlayTop = (removePxParseInt(area.height)/2 - removePxParseInt(btnPlayHeight)/2) + "px";
document.querySelector('#play').style.top = btnPlayTop;
document.querySelector('#play').style.left = btnPlayLeft;

//win game
document.querySelector('#wingame').style.visibility = "hidden";
if (getFromStorage("win") === "win"){
    document.querySelector('#wingame').style.visibility = "visible";
    area.listLevels();
}
