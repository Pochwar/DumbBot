//find id of an item into items[]
function itemIndex(id) {
    for(var i = 0, len = items.length; i < len; i++) {
        if (items[i].id === id) return i;
    }
    return -1;
}


//remove "px" from a property
function removePxParseInt(variable){
    variable = variable.replace("px", "");
    variable =  parseInt(variable);
    return variable;
}

//get data from localStorage
function getFromStorage(item) {
    var itemToGet = [];
    var itemStorage = localStorage.getItem(item);
    if (itemStorage !== null) {
        itemToGet = JSON.parse(itemStorage);
    }
    return itemToGet;
}

//save current level to localStorage
function saveLevelToStorage(number){
        var item = [{levelNumber : number}];

        localStorage.setItem("level", JSON.stringify(item));
}

//Clear localStorage item
function clearStorage(item) {
    localStorage.removeItem(item);
}


//Display level list
function listLevels() {
    //load level data
    levelElements.forEach(function(level, i){
        //generate html links
        var a = document.createElement('a');
        a.innerText = "Level " + i;
        a.id = "lvl" + i;
        var p = document.createElement('p');
        p.appendChild(a);
        document.querySelector("#levels").appendChild(p);
        //application du eventlistener
        document.querySelector("#lvl" + i).addEventListener("click", function(){
            area.loadLevel(i)
        });
    });
};

//Récupérer les coordonnées de la souris
function getMouseCoord(event){
    var parentX = document.querySelector(".content").offsetLeft;
    var parentY = document.querySelector(".content").offsetTop;
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var x = mouseX - parentX;
    var y = mouseY - parentY;
    x = (Math.floor(x/elementSize));
    y = (Math.floor(y/elementSize));
    var mouse = [x,y];
    return mouse;
}


//clear level
function clearLevel(){
    var childs = document.querySelectorAll("[type='element']");
    childs.forEach(function(child){
        area.grid.removeChild(child);
    });
    wall = [];
    player = [];
    dumbBot = [];
    target = [];
    area.verifElements();
}
