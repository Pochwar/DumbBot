//find id of an item into items[]
function itemIndex(id) {
    for(var i = 0, len = items.length; i < len; i++) {
        if (items[i].id === id) return i;
    }
    return -1;
}


//remove "px" from a property
function removePxParseInt(variable){
    variable = variable.replace("px", "");
    variable =  parseInt(variable);
    return variable;
}
