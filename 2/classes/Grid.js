function Grid(id, cols, rows){
    this.id = id;
    this.cols = cols;
    this.rows = rows;
    this.elementSize = elementSize;
    this.grid = document.querySelector("#"+this.id);
}

//Init Grid
Grid.prototype.init = function () {
    this.width = this.cols * this.elementSize + "px";
    this.height = this.rows * this.elementSize + "px";
    this.grid.style.width = this.width;
    this.grid.style.height = this.height;
};

//Construct level into Grid
Grid.prototype.loadLevel = function (levelId) {
    // unload previous level
    var childs = this.grid.querySelectorAll("[type='element']");
    childs.forEach(function(child){
        this.grid.removeChild(child);
    }.bind(this));
    //load new level data into items[]
    var level = new Level(levelId);
    var levelData = level.init();
    levelData.forEach(function(object){
        this.pushItem(this.grid, object.class, object.id, object.top, object.left);
    }.bind(this));
    //Display items objects
    items.forEach(function(object){
        object.constructItem();
    }.bind(this));
    //display current level
    document.querySelector('#levelNumber').innerText = "= Level " + levelId + " =";
    return levelId;
};

//Push Items into items[]
Grid.prototype.pushItem = function(parent, className, id, top, left){
    switch (className) {
        case "player":
            items.push(new Player(parent, id, top, left));
            break;

        case "dumbbot":
            items.push(new DumbBot(parent, id, top, left));
            break;

        case "target":
            items.push(new Target(parent, id, top, left));
            break;

        case "wall":
            items.push(new Wall(parent, id, top, left));
            break;

        default:
            console.log("ERROR");
    }
}

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
