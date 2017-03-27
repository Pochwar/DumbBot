function Wall(parent, id, top, left) {
    Items.call(this, parent);
    Items.call(this, id);
    Items.call(this, top);
    Items.call(this, left);
    this.className = "wall";
}

Wall.prototype = Object.create(Items);
//optionnel
Wall.prototype.constructor = Items;

Wall.prototype.constructItem = function () {
    Items.prototype.constructItem.call(this);
};
