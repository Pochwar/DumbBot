function Grid(id, cols, rows){
    this.id = id;
    this.cols = cols;
    this.rows = rows;
    this.elementSize = elementSize;
    this.grid = document.querySelector("#"+this.id);
    this.elementToMove = [];
    this.init();
}

//Init Grid
Grid.prototype.init = function () {
    //set heigth & width
    this.width = this.cols * this.elementSize + "px";
    this.height = this.rows * this.elementSize + "px";
    this.grid.style.width = this.width;
    this.grid.style.height = this.height;

    //LOAD LEVEL
    //Edition mode
    if(editionMode){
        //check is a level is save in localStorage
        levelData = getFromStorage("levelData")
        //if not, load level 0
        if (levelData.length === 0){
            this.loadLevel(0);
            this.saveLevelDataToStorage();
        }
        //if yes, load storage level
        else {
            levelElements.push(levelData);
            this.loadLevel(levelElements.length-1);
        }
        this.verifElements();
    }
    //Play mode
    else {
        //Set localStorage level to level[]
        var level = getFromStorage("level");
        //if level[] is empty
        if (level.length === 0){
            //load level 0 and affect 0 to currentLevel
            this.currentLevel = this.loadLevel(0);
            //save currentLevel to localStorage
            saveLevelNumberToStorage(this.currentLevel);
            level = getFromStorage("level")
        }
        //else
        else {
            //load last played level and affect it to currentLevel
            this.currentLevel = this.loadLevel(level[0].levelNumber);
        }
    }

};



//Construct level into Grid
Grid.prototype.loadLevel = function (levelId) {
    //clear previous level previous level
    this.clearLevel();
    //load new level data into items[]
    this.levelLoaded = new Level(levelId, this.grid);


    //display current level
    document.querySelector('#levelNumber').innerText = "= Level " + levelId + " =";
    return levelId;
};

//Clear level
Grid.prototype.clearLevel = function () {
    // unload previous level
    var childs = document.querySelectorAll("[type='element']");
    childs.forEach(function(child){
        this.grid.removeChild(child);
    }.bind(this));
    wall = [];
    player = [];
    dumbBot = [];
    target = [];
};


//get level data
Grid.prototype.getLevelData = function () {
    var elements = document.querySelectorAll("[type='element']");
    var textElements = '[\n';
    for(var i = 0; i < elements.length; i++){
        var top = removePxParseInt(elements[i].style.top)/elementSize;
        var left = removePxParseInt(elements[i].style.left)/elementSize;
        var coma = i === elements.length-1 ? '' : ',';
        textElements += '{class:"'+elements[i].className+'",id:"'+elements[i].id+'",top:'+top+',left:'+left+'}' + coma;
    }
    textElements += '\n];';
    //trick pour copier le texte dans le presse papier
    //créer un textarea rendu invisible en css dans lequel n met le texte que l'on copie
    var tricks = document.createElement('textarea');
    tricks.value = "levelElements[X] = \n" + textElements;
    document.querySelector("#copyTricks").appendChild(tricks);
    tricks.select();
    document.execCommand('copy');
    alert("Level data copied to clipboard !\n If you're proud of your level, send it to contact@pochworld.com :)")
}

//route edit action
Grid.prototype.actionRouter = function(event){
    var mouse = getMouseCoord(event);
    var x = mouse[0];
    var y = mouse[1];

    //LEFT CLICK
    if (event.which===1) {
        //delete element
        if (event.shiftKey){
            this.deleteElement(event, x, y)
        }
        //construct element
        else{
            if (event.ctrlKey){
                if (event.altKey){
                    this.construct(event, "target", x, y);
                } else {
                    this.construct(event, "player", x, y);
                }
            } else {
                if (event.altKey){
                    this.construct(event, "dumbBot", x, y);
                } else {
                    this.construct(event, "wall", x, y);
                }
            }
        }
    }

    //RIGHT CLICK
    if (event.which===3) {
        //move element
        this.move(event, x, y);
    }

    this.verifElements();
    this.saveLevelDataToStorage();
}

//verif elements presence
Grid.prototype.verifElements = function(){
    var errorMsg = "";
    if(player.length === 0){
        errorMsg += "<p class='error'>Set at least 1 player !!</p>";
    }
    if(dumbBot.length === 0){
        errorMsg += "<p class='error'>Set at least 1 dumbBot !!</p>";
    }
    if(target.length === 0){
        errorMsg += "<p class='error'>Set at least 1 target !!</p>";
    }
    if (errorMsg !== ""){
        document.querySelector("#errors").innerHTML = errorMsg;
        document.querySelector('#pause').style.background = "#888888"
        document.querySelector('#pause').removeEventListener("click", togglePlay);
    } else {
        document.querySelector("#errors").innerHTML = "";
        document.querySelector('#pause').style.background = "#F0F0F0"
        document.querySelector('#pause').addEventListener("click", togglePlay);
    }
}

//move elements
Grid.prototype.move = function(event, x, y){
    if(this.elementToMove.length === 0){
        var elements = document.querySelectorAll("[type='element']");
        elements.forEach(function(element){
            var elementTop = removePxParseInt(element.style.top)/elementSize;
            var elementLeft = removePxParseInt(element.style.left)/elementSize;
            if (elementTop === y && elementLeft === x){
                element.style.opacity = "0.5";
                this.elementToMove.push(element);
                return
            }
        }.bind(this))
    } else {
        if(!this.checkB4Construct(y, x)){
            this.elementToMove[0].style.top = y*elementSize + "px"
            this.elementToMove[0].style.left = x*elementSize + "px"
            this.elementToMove[0].style.opacity = "1";
            this.elementToMove = [];
        }
    }

}

//coonstruct elements
Grid.prototype.construct = function(event, element, x, y){
    if(edit){
        switch (element) {
            case "wall" :
            var i = wall.length;
            if(i === 0){
                index = 0;
            } else {
                var lastIndex = i-1;
                var index = parseInt(wall[lastIndex].id.replace("wall", ""))+1;
            }
            if(!this.checkB4Construct(y, x)){
                wall.push(new Wall(this.grid, "wall"+index, y, x));
                wall[i].constructItem();
            }
            break;

            case "player" :
            var i =  player.length;
            if(i === 0){
                index = 0;
            } else {
                var lastIndex = i-1;
                var index = parseInt(player[lastIndex].id.replace("player", ""))+1;
            }
            if(!this.checkB4Construct(y, x) && i < nbPlayerMax){
                player.push(new Player(this.grid, "player"+index, y, x));
                player[i].constructItem();
            }
            break;

            case "dumbBot" :
            var i =  dumbBot.length;
            if(i === 0){
                index = 0;
            } else {
                var lastIndex = i-1;
                var index = parseInt(dumbBot[lastIndex].id.replace("dumbbot", ""))+1;
            }
            if(!this.checkB4Construct(y, x) && i < nbDumbBotMax){
                dumbBot.push(new DumbBot(this.grid, "dumbbot"+index, y, x));
                dumbBot[i].constructItem();
            }
            break;

            case "target" :
            var i =  target.length;
            if(i === 0){
                index = 0;
            } else {
                var lastIndex = i-1;
                var index = parseInt(target[lastIndex].id.replace("dumbbot", ""))+1;
            }
            if(!this.checkB4Construct(y, x) && i < nbTargetMax){
                target.push(new Target(this.grid, "target"+index, y, x));
                target[i].constructItem();
            }
            break;

            default:

        }

    }
}

//check if element exists before construct
Grid.prototype.checkB4Construct = function(y, x){
    var count = 0;
    var elements = document.querySelectorAll("[type='element']");
    elements.forEach(function(element){
        var top = removePxParseInt(element.style.top)/elementSize;
        var left = removePxParseInt(element.style.left)/elementSize;
        if(y === top && x === left){
            count++;
            return;
        }
    })
    if (count > 0){
        return true;
    }
}

//get element by top left
Grid.prototype.elementByTopLeft = function(y, x){
    var selectedElement;
    var elements = document.querySelectorAll("[type='element']");
    elements.forEach(function(element){
        var top = removePxParseInt(element.style.top)/elementSize;
        var left = removePxParseInt(element.style.left)/elementSize;
        if(y === top && x === left){
            selectedElement = element
            return;
        }
    })
    return selectedElement;
}

//delete element
Grid.prototype.deleteElement = function(event, x, y){
    if(edit){
        // var parent = document.querySelector('.area');
        var elementToDelete = this.elementByTopLeft(y, x);
        var type = elementToDelete.className;
        switch (type) {
            case "player":
            var indexToDelete
            player.forEach(function(player, i){
                if(player.id === elementToDelete.id){
                    indexToDelete = i;
                }
            })
            player.splice(indexToDelete, 1)
            break;

            case "wall":
            var indexToDelete
            wall.forEach(function(wall, i){
                if(wall.id === elementToDelete.id){
                    indexToDelete = i;
                }
            })
            wall.splice(indexToDelete, 1)
            break;

            case "dumbbot":
            var indexToDelete
            dumbBot.forEach(function(dumbBot, i){
                if(dumbBot.id === elementToDelete.id){
                    indexToDelete = i;
                }
            })
            dumbBot.splice(indexToDelete, 1)
            break;

            case "target":
            var indexToDelete
            target.forEach(function(target, i){
                if(target.id === elementToDelete.id){
                    indexToDelete = i;
                }
            })
            target.splice(indexToDelete, 1)
            break;

            default:

        }
        this.grid.removeChild(elementToDelete);
    }
}


//Save Level data to localStorage
Grid.prototype.saveLevelDataToStorage = function () {
    var levelData = [];
    var elements = document.querySelectorAll("[type='element']");
    elements.forEach(function(element){
        var top = removePxParseInt(element.style.top)/elementSize;
        var left = removePxParseInt(element.style.left)/elementSize;
        // levelData.push({class:+element.className+,id:+element.id+,top:+top+,left:+left+})
        var item = {class:element.className,id:element.id,top:top,left:left}
        levelData.push(item)
        localStorage.setItem('levelData', JSON.stringify(levelData))
    })
};
