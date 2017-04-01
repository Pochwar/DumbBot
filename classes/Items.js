function Items(parent, id, top, left) {
    this.parent = parent;
    this.id = id;
    this.top = top;
    this.left = left;
    this.className = "item";
}

Items.prototype.constructItem = function () {
    this.top *= elementSize;
    this.left *= elementSize;
    var div = document.createElement('div');
    div.setAttribute('type', 'element');
    div.className = this.className;
    div.id = this.id;
    div.style.top = this.top + "px";
    div.style.left = this.left + "px";
    div.style.width = elementSize + "px";
    div.style.height = elementSize + "px";
    this.parent.appendChild(div);
};
