
function FakeWall(parent, id, top, left) {
    Items.call(this, parent, id, top, left);
    this.className = "fakewall";
}

FakeWall.prototype = Object.create(Items);
//optionnel
FakeWall.prototype.constructor = Items;

FakeWall.prototype.constructItem = function () {
    Items.prototype.constructItem.call(this);
};
