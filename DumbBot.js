function DumbBot(parent, id, top, left) {
    Person.call(this, parent);
    Person.call(this, id);
    Person.call(this, top);
    Person.call(this, left);
    this.className = "dumbbot";
}

DumbBot.prototype = Object.create(Person.prototype);

DumbBot.prototype.constructItem = function () {
    Person.prototype.constructItem.call(this);
};

DumbBot.prototype.move = function () {
    Person.prototype.move.call(this);
};
