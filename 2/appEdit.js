//CREATE ARENA
var area = new Grid("area", areaCols, areaRows);


//PLAY
//init play button
document.querySelector('#play').addEventListener("click", togglePlay);
//init pause button
document.querySelector('#pause').addEventListener("click", togglePlay);
var play = false;
var edit = true;
var interval = false
document.querySelector('#play').style.visibility = "hidden";
document.querySelector('#levelNumber').style.visibility = "hidden";
document.querySelector('#pause').innerText = "Play";
function togglePlay(){
    if (!play){
        play = true;
        edit = false;
        interval = setInterval(moveDumbBot,100);

        document.querySelector('#pause').innerText = "Pause";
    } else {
        clearInterval(interval);
        document.querySelector('#pause').innerText = "Play";
        play = false;
        edit = true;
    }

}

//list levels to load
// listLevels();

//get level data
document.querySelector('#save').addEventListener("click", area.getLevelData);


//edit
// document.querySelector('#clear').addEventListener("click", listLevels);
document.querySelector('.content').addEventListener("click", function(event){
    if (!event){
           event = window.event;
       }
    area.constructWall(event);

});
