function Player(parent, id, top, left) {
    Person.call(this, parent);
    Person.call(this, id);
    Person.call(this, top);
    Person.call(this, left);
    this.className = "player";
}

Player.prototype = Object.create(Person.prototype);

Player.prototype.constructItem = function () {
    Person.prototype.constructItem.call(this);
};

Player.prototype.move = function () {
    Person.prototype.move.call(this);
};
