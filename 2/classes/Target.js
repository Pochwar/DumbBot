function Target(parent, id, top, left) {
    Items.call(this, parent, id, top, left);
    this.className = "target";
}

Target.prototype = Object.create(Items.prototype);

Target.prototype.constructItem = function () {
    Items.prototype.constructItem.call(this);
};
