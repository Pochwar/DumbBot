function Level(id){
    this.id = id;
}

//init level
Level.prototype.init = function () {
    //load level data
    var levelData = levelElements[this.id];
    return levelData;
};
