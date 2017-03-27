function Player(parent, id, top, left) {
    Person.call(this, parent, id, top, left);
    this.className = "player";
}

Player.prototype = Object.create(Person.prototype);

Player.prototype.constructItem = function () {
    Person.prototype.constructItem.call(this);
};

Player.prototype.move = function (direction, distance) {
    Person.prototype.move.call(this, direction, distance);
};
