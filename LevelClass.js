function Level(number){
    this.number = number;
    this.elements = elementsLvl[number];
    this.walls = wallsLvl[number];
}

//génération automatique des Objets Level
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
