function Level(id, parent){
    init(id, parent);


    //Construct level into Grid
    this.test = function() {
        // unload previous level
        console.log("coucouille")
    };

    //init level
    function init(id, parent) {
        //clear previous items arrays
        wall = [];
        player = [];
        dumbBot = [];
        target = [];

        //get level data and push them to items array of objects
        levelElements[id].forEach(function(object){
            pushItem(parent, object.class, object.id, object.top, object.left);
        }.bind(this));

        //Display items objects
        player.forEach(function(object){
            object.constructItem();
        }.bind(this));
        wall.forEach(function(object){
            object.constructItem();
        }.bind(this));
        dumbBot.forEach(function(object){
            object.constructItem();
        }.bind(this));
        target.forEach(function(object){
            object.constructItem();
        }.bind(this));

    };

    //Push Items into items[]
    function pushItem(parent, className, id, top, left){
        switch (className) {
            case "player":
            player.push(new Player(parent, id, top, left));
            break;

            case "dumbbot":
            dumbBot.push(new DumbBot(parent, id, top, left));
            break;

            case "target":
            target.push(new Target(parent, id, top, left));
            break;

            case "wall":
            wall.push(new Wall(parent, id, top, left));
            break;

            default:
            console.log("ERROR");
        }
    }

}
