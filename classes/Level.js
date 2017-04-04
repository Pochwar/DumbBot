function Level(id, parent){
    init(id, parent);


    //init level
    function init(id, parent) {
        //get level data and push them to items array of objects
        levelElements[id].forEach(function(object){
            pushItem(parent, object.class, object.id, object.top, object.left);
        }.bind(this));

        //Display items objects
        // items.player.forEach(function(object){
        //     object.constructItem();
        // }.bind(this));
        // items.wall.forEach(function(object){
        //     object.constructItem();
        // }.bind(this));
        // items.dumbBot.forEach(function(object){
        //     object.constructItem();
        // }.bind(this));
        // items.target.forEach(function(object){
        //     object.constructItem();
        // }.bind(this));

        //new version
        Object.keys(items).map(function(itemArray, index) {
            items[itemArray].forEach(function(object){
                object.constructItem();
            })
        });

    };

    //Push Items into items[]
    function pushItem(parent, className, id, top, left){
        var switchReturn = switchItem(className);
        switchReturn.array.push(new switchReturn.object(parent, id, top, left));
    }

}
