function Level(number){
    this.number = number;
    this.elements = elementsLvl[number];
    this.walls = wallsLvl[number];
}

// //génération automatique des Objets Level
var levels = [];
elementsLvl.forEach(function(val,i){
    levels[i] = new Level(i);

    //génération du html
    var a = document.createElement('a');
    a.innerText = "Load level " + i;
    a.id = "lvl" + i;
    var p = document.createElement('p');
    p.appendChild(a);
    document.querySelector("#gotolvl").appendChild(p);
    //application du eventlistener
    document.querySelector("#lvl" + i).addEventListener("click", function(){
        // console.log(i);
        loadLevel(i);
    });
});


// alternate version to load levels only if they have been reach DONT FUCKING WORK !!!
// var levels = [];
// if(typeof level == "undefined"){
//     console.log(typeof level);
//     var lvlnum = 1;
// } else {
//     var lvlnum = level[0].levelNumber;
// }
// // var lvlnum = level[0] ? level[0].levelNumber : 0;
// for (var i = 0; i < lvlnum; i++){
//     levels[i] = new Level(i);
//
//     //génération du html
//     var a = document.createElement('a');
//     a.innerText = "Load level " + i;
//     a.id = "lvl" + i;
//     var p = document.createElement('p');
//     p.appendChild(a);
//     document.querySelector("#gotolvl").appendChild(p);
//     //application du eventlistener
//     document.querySelector("#lvl" + i).addEventListener("click", function(){
//         // console.log(i);
//         loadLevel(i);
//     });
// };
