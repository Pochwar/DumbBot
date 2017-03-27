function Person(parent, id, top, left) {
    Items.call(this, parent, id, top, left);
}

Person.prototype = Object.create(Items.prototype);

Person.prototype.constructItem = function () {
    Items.prototype.constructItem.call(this);
};


Person.prototype.move = function(direction, distance) {
    var id = this.id;
    var distance = distance || elementSize;
    //set moveOk to true (useful for bot move)
    var moveOk = true;
    //switch direction
    switch (direction){
        case "top" :
        var property = "top"
        var negative = true
        break;

        case "bottom" :
        var property = "top"
        var negative = false
        break;

        case "left" :
        var property = "left"
        var negative = true
        break;

        case "right" :
        var property = "left"
        var negative = false
        break;
    }
    //get coord to change
    var top = document.querySelector('#' + id).style.top;
    var left = document.querySelector('#' + id).style.left;
    if (property === "top"){var coordToChange = top;}
    if (property === "left"){var coordToChange = left;}
    coordToChange = removePxParseInt(coordToChange);
    //prevent moving out of parent
    //top & left
    if (negative){
        if (coordToChange > 0){
            coordToApply = coordToChange-distance;
        } else {
            moveOk = false;
        }
    }
    //bottom & right
    if(!negative){
        areaWidth = removePxParseInt(area.grid.style.width);
        areaHeight = removePxParseInt(area.grid.style.height);
        if ((property === "top" && coordToChange+elementSize < areaHeight) || (property === "left" && coordToChange+elementSize < areaWidth)){
            coordToApply = coordToChange+distance;
        } else {
            moveOk = false;
        }
    }
    //prevent move if wall detected
    if (property === "top"){
        var verifTop = coordToApply;
        var verifLeft = parseInt(left.replace("px", ""));
    }
    if (property === "left"){
        var verifTop = parseInt(top.replace("px", ""));
        var verifLeft = coordToApply;
    }
    // if (!checkWall4Move(id, verifTop, verifLeft)){
    var walls = document.querySelectorAll(".wall");

    walls.forEach(function(wall){
        var wallTop = removePxParseInt(wall.style.top);
        var wallLeft = removePxParseInt(wall.style.left);
        if (verifTop === wallTop && verifLeft === wallLeft){
            moveOk = false;
            return;
        }
    });
    if (moveOk){
        coordToApply = coordToApply + "px";
        document.querySelector('#' + id).style[property] = coordToApply;
    }
    // console.log(moveOk)
    return moveOk;
};
