function Person(parent, id, top, left) {
    Items.call(this, parent);
    Items.call(this, id);
    Items.call(this, top);
    Items.call(this, left);
}

Person.prototype = Object.create(Items.prototype);

Person.prototype.constructItem = function () {
    Items.prototype.constructItem.call(this);
};

Person.prototype.move = function () {
   console.log(this.id + " move !!");
};
