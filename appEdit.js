//CREATE ARENA
var area = new Grid("area", areaCols, areaRows);

//edition mode
var editionMode = true;

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
listLevels();

//clear level
document.querySelector('#clear').addEventListener("click", clearLevel);

//get level data
document.querySelector('#save').addEventListener("click", area.getLevelData);

//disable contextmenu on area right click
area.grid.oncontextmenu = function() {return false;};


//edit
area.grid.onmousedown = function(event){
    if (!event){
        event = window.event;
    }
    area.actionRouter(event);
};


//détecte si la souris clique ou pas
var mouseIsDown = false;
area.grid.addEventListener("mousedown", function(){
    mouseIsDown = true;
});
area.grid.addEventListener("mouseup", function(){
    mouseIsDown = false;
});

//detect mouse move
area.grid.addEventListener("mousemove", function(event){
    if (!event){
        event = window.event;
    }
    if (mouseIsDown){
        area.actionRouter(event);
    }
});
