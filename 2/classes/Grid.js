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
        var currentLevel = this.loadLevel(0);
        //save currentLevel to localStorage
        saveLevelToStorage(currentLevel);
        level = getFromStorage("level")
    }
    //else
    else {
        //load last played level and affect it to currentLevel
        var currentLevel = this.loadLevel(level[0].levelNumber);
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
    new Level(levelId, this.grid);



    return levelId;
};



//Display level list
Grid.prototype.listLevels = function () {
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
        document.querySelector("#lvl" + i).addEventListener("click", this.loadLevel.bind(this, i));
    }.bind(this));
};


//Save Level to localStorage
Grid.prototype.saveLevel = function () {

};
