function DumbBot(parent, id, top, left) {
    Person.call(this, parent, id, top, left);
    this.className = "dumbbot";
}

DumbBot.prototype = Object.create(Person.prototype);

DumbBot.prototype.constructItem = function () {
    Person.prototype.constructItem.call(this);
};

DumbBot.prototype.move = function (direction, distance) {
    return Person.prototype.move.call(this, direction, distance);
};
