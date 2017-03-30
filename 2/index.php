<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>DumbBot</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <div class="infos">
            <div id="infogame">
                <p>DumbBot is a little game I made while learning JavaScript. It's full of <span>bugs</span> funny features like random teleportation and more !</p>
                <p>The code is available on <a href="https://github.com/Pochwar/DumbBot">GitHub</a>. Feel free  to make any comment or suggestion : contact@pochworld.com</p>
            </div>
            <div id="wingame">
                <p id="congrat">Well done, you finnish this game !</p>
                <p>replay levels :</p>
                <div id="levels"></div>
            </div>




    </div>
    <section>
        <h1>DumbBot</h1>
        <p class="info">Move Player to make DumbBot reach Target.</p>
        <p id="levelNumber"></p>
        <p id="infoMove">Use arrows <span>&#8592;</span><span>&nbsp;&#8593;&nbsp;</span><span>&nbsp;&#8595;&nbsp;</span><span>&#8594;</span> to move.</p>
        <div class="content">
            <button id="play">PLAY !</button>
            <button id="pause">Pause</button>
            <div class="area" id="area">
                <div type="element" class="player" id="player1" style="top: 50px; left: 410px; width: 10px; height: 10px;"></div>
            </div>
            <div class="elementsInfo">
                <p class="info"><span class="playercircle"></span>&nbsp;Player</p>
                <p class="info"><span class="dumbbotcircle"></span>&nbsp;DumbBot</p>
                <p class="info"><span class="targetcircle"></span>&nbsp;Target</p>
            </div>
        </div>
    </section>
    <noscript>Please enable JavaScript</noscript>
    <div id="scripts">
        <script src="functions.js"></script>
        <script src="config.js"></script>
        <script src="levels.js"></script>
        <script src="classes/Items.js"></script>
        <script src="classes/Person.js"></script>
        <script src="classes/Player.js"></script>
        <script src="classes/DumbBot.js"></script>
        <script src="classes/Target.js"></script>
        <script src="classes/Wall.js"></script>
        <script src="classes/Level.js"></script>
        <script src="classes/Grid.js"></script>
        <script src="appPlay.js"></script>
        <script src="ai.js"></script>
    </div>
</body>
</html>
