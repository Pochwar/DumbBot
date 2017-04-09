//size of elements
var elementSize = 15;

//area size
var areaCols = 50;
var areaRows = 30;

//speed
var speed = 100;

//play button width & height
var btnPlayWidth = document.querySelector('#play').style.width = "152px";
var btnPlayHeight = document.querySelector('#play').style.height = "62px";

//items arrays
var items ={
    wall : [],
    fakewall : [],
    player : [],
    dumbBot : [],
    target : []
}

//max item
var nbPlayerMax = 2;
var nbDumbBotMax = 4;
var nbTargetMax = 4;
var nbWallMax = Infinity;
var nbFakeWalltMax = Infinity;

//switch function
function switchItem(item){
    switch (item) {
        case "player":
        var array = items.player;
        var object = Player;
        var maxItem = nbPlayerMax;
        break;

        case "dumbbot":
        var array = items.dumbBot;
        var object = DumbBot;
        var maxItem = nbDumbBotMax;
        break;

        case "target":
        var array = items.target;
        var object = Target;
        var maxItem = nbTargetMax;
        break;

        case "wall":
        var array = items.wall;
        var object = Wall;
        var maxItem = nbWallMax;
        break;

        case "fakewall":
        var array = items.fakewall;
        var object = FakeWall;
        var maxItem = nbFakeWalltMax;
        break;

        default:
    }
    var switchReturn = {
        array : array,
        object : object,
        maxItem : maxItem
    };
    return switchReturn;
}





//players controls
var map = {}; // You could also use an array
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    //controls available if play is true
    if(play){
        // player 0
        if(map[38]) {items.player[0].move("top");}
        if(map[37]) {items.player[0].move("left");}
        if(map[40]) {items.player[0].move("bottom");}
        if(map[39]) {items.player[0].move("right");}
        // player 1
        if(map[90]) {items.player[1].move("top");}
        if(map[83]) {items.player[1].move("bottom");}
        if(map[81]) {items.player[1].move("left");}
        if(map[68]) {items.player[1].move("right");}
    }
}
