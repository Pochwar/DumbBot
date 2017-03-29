//size of elements
var elementSize = 15;

//area size
var areaCols = 50;
var areaRows = 30;

//play button width & height
var btnPlayWidth = document.querySelector('#play').style.width = "152px";
var btnPlayHeight = document.querySelector('#play').style.height = "62px";

//array of items
var wall = [];
var player = [];
var dumbBot = [];
var target = [];

//players controls
var map = {}; // You could also use an array
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    //controls available if play is true
    if(play){
        // player 0
        if(map[38]) {player[0].move("top");}
        if(map[40]) {player[0].move("bottom");}
        if(map[37]) {player[0].move("left");}
        if(map[39]) {player[0].move("right");}
        // player 1
        if(map[90]) {player[1].move("top");}
        if(map[83]) {player[1].move("bottom");}
        if(map[81]) {player[1].move("left");}
        if(map[68]) {player[1].move("right");}
    }
}

//OLD VERSION
//define player0 controls
// function movePlayer(e, i, dir) {
//     //top
//     if (e.keyCode == up) {player[i].move("top");}
//     //bottom
//     if (e.keyCode == down) {player[i].move("bottom");}
//     //left
//     if (e.keyCode == left) {player[i].move("left");}
//     //right
//     if (e.keyCode == right) {player[i].move("right");}
// }
// init movePlayer0()
// document.querySelector('body').addEventListener("keydown", function(event){
//     if (!event){
//         event = window.event;
//     }
//     movePlayer(event, 0, 38, 40, 37, 39);
//     movePlayer(event, 1, 90, 83, 81, 68);
// });
