function Person(parent, id, top, left) {
    Items.call(this, parent, id, top, left);
}

Person.prototype = Object.create(Items.prototype);

Person.prototype.constructItem = function () {
    Items.prototype.constructItem.call(this);
};


Person.prototype.move = function(direction, distance) {
    var prepareGo = this.moveVerification(direction, distance);
    if (prepareGo.move){
        this.go(prepareGo.id, prepareGo.property, prepareGo.coordToApply, prepareGo.targetReach);
    }
}

Person.prototype.moveVerification = function(direction, distance) {
    var id = this.id;
    var distance = distance || elementSize;
    //set moveOk to true (useful for bot move)
    var moveOk = true;
    var targetReach = false;
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

    //get coords for collisions
    if (property === "top"){
        var verifTop = coordToApply;
        var verifLeft = parseInt(left.replace("px", ""));
    }
    if (property === "left"){
        var verifTop = parseInt(top.replace("px", ""));
        var verifLeft = coordToApply;
    }

    //prevent move if wall detected
    items.wall.forEach(function(wall){
        var wallTop = removePxParseInt(document.querySelector("#"+wall.id).style.top);
        var wallLeft = removePxParseInt(document.querySelector("#"+wall.id).style.left);
        if (verifTop === wallTop && verifLeft === wallLeft){
            moveOk = false;
        }
    });

    //prevent move for player if fakewall detected
    items.player.forEach(function(player){
        if(id === player.id){
            items.fakewall.forEach(function(fakewall){
                var fakewallTop = parseInt(fakewall.top);
                var fakewallLeft = parseInt(fakewall.left);
                if (verifTop === fakewallTop && verifLeft === fakewallLeft){
                    moveOk = false;
                }
            });
        }
    });


    //manage collision between dumbBots and players
    //prevent dumbBot move if player
    items.player.forEach(function(player){
        // if(id !== player.id){
        var playerTop = removePxParseInt(document.querySelector("#"+player.id).style.top);
        var playerLeft = removePxParseInt(document.querySelector("#"+player.id).style.left);

        if((verifTop === playerTop) && (verifLeft === playerLeft)) {
            moveOk = false;
        }
        // }
    });
    //prevent player move if dumbBot
    items.dumbBot.forEach(function(dumbBot){
        var dumbBotTop = removePxParseInt(document.querySelector("#"+dumbBot.id).style.top);
        var dumbBotLeft = removePxParseInt(document.querySelector("#"+dumbBot.id).style.left);

        if((verifTop === dumbBotTop) && (verifLeft === dumbBotLeft)) {
            moveOk = false;
        }
    });

    //manage target reach
    items.dumbBot.forEach(function(dumbBot){
        if(id === dumbBot.id){
            items.target.forEach(function(target){
                if((verifTop === target.top) && (verifLeft === target.left)) {
                    targetReach = true;
                    return;
                }
            });
        }
    });

    //if moveOK remains true, apply movement
    if (moveOk){
        coordToApply = coordToApply + "px";
        var prepareGo = {
            move : true,
            coordToApply : coordToApply,
            property : property,
            id : id,
            targetReach : targetReach
        };
    } else {
        var prepareGo = {move : false};
    }

    return prepareGo;
};

Person.prototype.go = function(id, property, coordToApply, targetReach) {
    document.querySelector('#' + id).style[property] = coordToApply;
    //if target is reached
    if(targetReach){
        //pause game
        togglePlay();
        if(editionMode){
            alert("target Reached !");
        }
        else {
            //if currentLevel is last level
            if (area.currentLevel === levelElements.length-1){
                //save win info to localStorage
                localStorage.setItem("win", JSON.stringify("win"));
                alert("Well done !\n You won this game !");
                window.location.reload();
            }
            //else
            else {
                //ask for loading next level
                var r = confirm("Well done !\n Try next level !");
                //if ok
                if (r === true) {
                    //increase currentLevel
                    area.currentLevel ++;
                    //save it to LocalStorage
                    saveLevelNumberToStorage(area.currentLevel);
                    //load level
                    area.loadLevel(area.currentLevel);
                } else {
                    togglePlay();
                }
            }
        }
    }
}
