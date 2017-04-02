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
        <div id="editor">
            <p class="bold">Construct Elements</p>
            <p>Click : walls</p>
            <p>Ctrl+Click : Players <span id="maxPlayer" class="max"></span></p>
            <p>Alt+Click : DumbBots <span id="maxdumbBot" class="max"></span></p>
            <p>Ctrl+Alt+Click : Targets <span id="maxTarget" class="max"></span></p>
            <br/>
            <p class="bold">Move Elements</p>
            <p>Right-Click to select, Right-Click again to move</p>
            <br/>
            <p class="bold">Delete Elements</p>
            <p>Shift+Click</p>
            <br/>
            <p><a id="clear">Clear level</a></p>
            <p><a id="save">Get level data</a></p>
            <div id="copyTricks"></div>
            <br>
            <p>Load a level to edit</p>
            <div id="levels"></div>
            <br>
            <button onclick="window.location.href='index.php'">Back to game</button>
            <div id="errors"></div>

        </div>

    </div>
    <section>
        <h1>DumbBot</h1>
        <p class="info">Level Editor</p>
        <p id="levelNumber"></p>
        <div class="content">
            <button id="play">PLAY !</button>
            <button id="pause">Pause</button>
            <div class="area" id="area">
                <div type="element" class="player" id="player1" style="top: 50px; left: 410px; width: 10px; height: 10px;"></div>
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
        <script src="appEdit.js"></script>
        <script src="ai.js"></script>
    </div>
</body>
</html>
