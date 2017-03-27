
function Wall(parent, id, top, left) {
    Items.call(this, parent, id, top, left);
    this.className = "wall";
}

Wall.prototype = Object.create(Items);
//optionnel
Wall.prototype.constructor = Items;

Wall.prototype.constructItem = function () {
    Items.prototype.constructItem.call(this);
};
