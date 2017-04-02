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
function saveLevelNumberToStorage(number){
    var item = [{levelNumber : number}];

    localStorage.setItem("level", JSON.stringify(item));
}

//Clear localStorage item
function clearStorage(item) {
    localStorage.removeItem(item);
}


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
