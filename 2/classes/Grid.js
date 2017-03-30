function Grid(id, cols, rows){
    this.id = id;
    this.cols = cols;
    this.rows = rows;
    this.elementSize = elementSize;
    this.grid = document.querySelector("#"+this.id);
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
    //Set localStorage level to level[]
    var level = getFromStorage("level");
    //if level[] is empty
    if (level.length === 0){
        //load level 0 and affect 0 to currentLevel
        this.currentLevel = this.loadLevel(0);
        //save currentLevel to localStorage
        saveLevelToStorage(currentLevel);
        level = getFromStorage("level")
    }
    //else
    else {
        //load last played level and affect it to currentLevel
        this.currentLevel = this.loadLevel(level[0].levelNumber);
    }

};



//Construct level into Grid
Grid.prototype.loadLevel = function (levelId) {
    // unload previous level
    var childs = document.querySelectorAll("[type='element']");
    childs.forEach(function(child){
        this.grid.removeChild(child);
    }.bind(this));
    //load new level data into items[]
    this.levelLoaded = new Level(levelId, this.grid);


    //display current level
    document.querySelector('#levelNumber').innerText = "= Level " + levelId + " =";
    return levelId;
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

//coonstruct walls
Grid.prototype.constructWall = function(event){
    if(edit){
        var mouse = getMouseCoord(event);
        var x = mouse[0];
        var y = mouse[1];
        if (!event.shiftKey) {
            var i = wall.length;
            // if(!checkWall4Construct(y, x)){
                // var wallItem = {type : "wall", id : i, top : y, left : x};
                // //Enregistrement dans le localStorage
                // walls.push(wallItem);
                // localStorage.setItem('walls', JSON.stringify(walls));
                //Création dans l'area
                wall.push(new Wall(this.grid, "wall"+i, y, x));
                wall[i].constructItem();
                // Object { parent: <div#area.area>, id: "wall0", top: 180, left: 345, className: "wall" }
                // createElement ("wall", i, y, x);
            // }
        } else {//delete walls !
            var parent = document.querySelector('.area');
            var id = wallObjectByTopLeft(y, x, "id");
            var wallToDelete = document.getElementById(id);
            parent.removeChild(wallToDelete);
            walls.splice(wallObjectByTopLeft(y, x),1);
            localStorage.setItem('walls', JSON.stringify(walls));

        }
    }
}


//Save Level to localStorage
Grid.prototype.saveLevel = function () {

};
