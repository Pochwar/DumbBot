function Level(number){
    this.number = number;
    this.elements = elementsLvl[number];
    this.walls = wallsLvl[number];
}

var levels = [];
levels[0] = new Level(0);
levels[1] = new Level(1);
