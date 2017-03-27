var levelElements = [];

levelElements[0] =
[
    //player
    {class:"player",id:"player0",top:4,left:41},
    //bot
    {class:"dumbbot",id:"dumbbot0",top:12,left:2},
    //target
    {class:"target",id:"target0",top:3,left:41},
    //walls
    {class:"wall",id:"wall0",top:0,left:7},{class:"wall",id:"wall1",top:8,left:15}
];


levelElements[1] =
[
    //player
    {class:"player",id:"player0",top:8,left:30},
    //player
    {class:"player",id:"player1",top:18,left:15},
    //bot
    {class:"dumbbot",id:"dumbbot0",top:8,left:15},
    //target
    {class:"target",id:"target0",top:29,left:41},
    //walls
    {class:"wall",id:"wall0",top:0,left:7},{class:"wall",id:"wall1",top:8,left:15}
];

levelElements[2] = [];
var i = 0;
for (var x = 0; x < areaCols; x++) {
    for (var y = 0; y < areaRows; y++) {
        levelElements[2].push({class:"dumbbot",id:"dumbbot"+i,top:y,left:x});
        i++;
        y++;
    }
    x++;
}
