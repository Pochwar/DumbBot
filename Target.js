function Target(parent, id, top, left) {
    Items.call(this, parent);
    Items.call(this, id);
    Items.call(this, top);
    Items.call(this, left);
    this.className = "target";
}

Target.prototype = Object.create(Items.prototype);

Target.prototype.constructItem = function () {
    Items.prototype.constructItem.call(this);
};
