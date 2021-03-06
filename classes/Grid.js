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
        this.levelData = getFromStorage("levelData")
        //if not, load level 0
        if (this.levelData.length === 0){
            this.loadLevel(0);
            this.saveLevelDataToStorage();
        }
        //if yes, load storage level
        else {
            levelElements.push(this.levelData);
            this.loadLevel(levelElements.length-1);
        }
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


//Display level list
Grid.prototype.listLevels = function (parent) {
    //load level data
    var select = document.createElement('select');
    levelElements.forEach(function(level, i){
        if(editionMode && this.levelData.length !== 0){
            var levelMax = levelElements.length-1
        } else {
            var levelMax = levelElements.length
        }
        if (i !== levelMax){
            //generate html links
            var option = document.createElement('option');
            option.innerText = "Level " + i;
            option.value = "lvl" + i;
            //eventlistener
            option.addEventListener("click", function(){
                area.loadLevel(i)
            });
            select.appendChild(option);
        }
    }.bind(this));
    document.querySelector("#"+parent).appendChild(select);
};


//Construct level into Grid
Grid.prototype.loadLevel = function (levelId) {
    //clear previous level previous level
    this.clearLevel();
    //load new level data into items[]
    this.levelLoaded = new Level(levelId, this.grid);

    //verif element in edition mode
    if(editionMode){
        this.verifElements();
    }

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
    //clear every items array
    Object.keys(items).map(function(itemArray, index) {
        items[itemArray] = []
    });
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
    textElements += '\n],';
    //trick pour copier le texte dans le presse papier
    //créer un textarea rendu invisible en css dans lequel n met le texte que l'on copie
    var tricks = document.createElement('textarea');
    tricks.value = textElements;
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

        if (event.shiftKey){
            if (!event.altKey && !event.ctrlKey){
                //delete element
                this.deleteElement(event, x, y);
            }
            if (!event.altKey && event.ctrlKey){
                //construct fakewall
                this.construct(event, "fakewall", x, y);
            }
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
                    this.construct(event, "dumbbot", x, y);
                } else {
                    this.construct(event, "wall", x, y);
                }
            }
        }
    }

    //RIGHT CLICK
    if (event.which===3) {
        //move element
        this.moveItem(event, x, y);
    }

    this.verifElements();
    this.saveLevelDataToStorage();
}

//verif elements presence
Grid.prototype.verifElements = function(){
    var errorMsg = "";
    if(items.player.length === 0){
        errorMsg += "<p class='error'>Set at least 1 player !!</p>";
    }
    if(items.dumbBot.length === 0){
        errorMsg += "<p class='error'>Set at least 1 dumbBot !!</p>";
    }
    if(items.target.length === 0){
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
Grid.prototype.moveItem = function(event, x, y){
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
        var switchReturn = switchItem(element);
        var i = switchReturn.array.length;
        if(i === 0){
            index = 0;
        } else {
            var lastIndex = i-1;
            var index = parseInt(switchReturn.array[lastIndex].id.replace(element, ""))+1;
        }
        if(!this.checkB4Construct(y, x) && i < switchReturn.maxItem){
            switchReturn.array.push(new switchReturn.object(this.grid, element+index, y, x));
            switchReturn.array[i].constructItem();
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
        //delete item form its array
        var switchReturn = switchItem(type)
        var indexToDelete
        switchReturn.array.forEach(function(item, i){
            if(item.id === elementToDelete.id){
                indexToDelete = i;
            }
        })
        switchReturn.array.splice(indexToDelete, 1)
        //remove item from grid
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
    })
    localStorage.setItem('levelData', JSON.stringify(levelData))
};
