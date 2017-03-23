//détecte si la souris clique ou pas
document.querySelector('.area').addEventListener("mousedown", function(e){
    mouseIsDown = true;
});
document.querySelector('.area').addEventListener("mouseup", function(e){
    mouseIsDown = false;
});

//passe en mode édition
document.querySelector('#play').addEventListener("click", togglePlay);
//passe en mode édition
document.querySelector('#pause').addEventListener("click", togglePlay);
//passe en mode édition
document.querySelector('#edit').addEventListener("click", toggleEdit);

//efface tous les murs
document.querySelector('#clear').addEventListener("click", function () {clear("walls");location.reload();});

//efface tous les murs
document.querySelector('#save').addEventListener("click", saveLevel);

//initie les fonctions de création de murs
document.querySelector('.area').addEventListener("mousemove", drawWalls);
document.querySelector('.area').addEventListener("click", getAction);

//initie la fonction de déplacement du joueur
document.querySelector('body').addEventListener("keydown", movePlayer);

//creation des éléments en position de base
if (elements.length === 0){
    saveToStorage(baseElements, elements, "elements");
    location.reload();
}

//affiche le numéro du level en cours
var lvlnum = level[0] === undefined ? 'hit "Play" button to begin' : "= Level " + level[0].levelNumber + " =";
document.querySelector("#levelNumber").innerText = lvlnum;

console.log(levels.length);
buildFromStorage(walls);
buildFromStorage(elements);
