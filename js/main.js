const gameIds = ["0hh1", "0hn0", "1On1Soccer", "2048", "3dtanks", "achievementUnlocked", "achievementUnlocked2", "achievementUnlocked3", "alienhominid", "amidstthesky", "amongus", "animatorvsanimation", "asteroids", "astray", "awesomeCars", "awesomePirates", "awesomePlanes", "awesomeTanks", "awesomeTanks2", "ballisticChickens", "banjok", "basketAndBall", "/basketbros", "battlePanic", "/bigTowerTinySquare", "bloonsTowerDefense", "bloonsTowerDefense2", "bloonsTowerDefense3", "bloonsTowerDefense4", "blue", "bobTheRobber", "boxHead", "bubbleTanks", "/burnoutDrift3", "burritoBison", "catNinja", "championIsland", "/chess", "chessai", "chillRadio", "chromeDino", "chronoTrigger", "circloO", "circus", "clubhousegames", "classicMinecraft", "/clickerHeroes", "cookieclicker", "cubefield", "customTetris", "dkc1", "dck2", "dkc3", "dbzdevolution", "Diggy", "doodleJump", "duckLifeAdventure", "eaglercraft", "earthboundZero", "earthbound", "edgesurf", "eggyCar", "elasticMan", "fancyPantsAdventure", "fireboyAndWatergirl",  "flappybird", "fluidSimulation", "fnaf", "fnaw", "/fnf", "fzero", "gba", "goldMiner", "/grindcraft", "googleSnake", "hackerTyper", "happyWheels", "henryStickmanBreakingTheBank", "henryStickmanEscapingThePrison", "henryStickmanFleeingTheCompex", "henryStickmanInfiltratingTheAirship", "henryStickmanStealingTheDiamond", "hexgl", "hextris", "htmledit", "impossibleQuiz", "impossibleQuiz2", "/infinetemario", "/jackSmith", "learnToFly", "learnToFly2", "littleAlchemy", "madalinCars2", "madalinCars3", "mineBlocks", "/minekhan", "moonlander", "motox3m", "msFlight", "n-gon", "pacman", "pacman3d", "paperio2", "pico8", "picross", "picross3d", "poom", "powderGame", "punchout", "raftWars", "raftWars2", "raftWarsMultiplayer", "retroBowl", "riddleSchool", "riddleSchool2", "riddleSchool3", "riddleSchool4", "riddleSchool5", "riddleTransfer", "riddleTransfer2", "rocketSoccer", "ruffleDemo", "run2", "run3", "sandspiel", "shellShockers", "slope", "mk64", "sm64", "sm64ds", "mario1", "superMarioRPG", "superMarioWorld", "marioWorldYoshisIsland", "sonny", "sonny2", "spaceCadetPinball", "spelunky", "spinningRat", "ssf", "starfox1", "starfox2", "subwaySurfers", "superMetroid", "tableTanks", "tankTrouble2", "templeRun2", "tetris", "tetrisAttack", "tetrisds", "theOcarinaOfTime", "tinyFishing", "tossTheTurtle", "typewriter", "veryNormalShooter", "vex3", "vex4", "vex5", "vex6", "vmlinux", "wallSmash", "wariowaretouched", "wbwwb", "weaveSilk", "webRetro", "wordle", "zombsRoyale", "worldsHardestGame", "zelda1", "alttp"];
const gameNames = ["0hh1", "0hn0", "1 On 1 Soccer", "2048", "3d Tanks", "Achievement Unlocked", "Achievement Unlocked 2", "Achievement Unlocked 3", "Alien hominid", "Amidst the Sky", "Among Us Singleplayer", "Animator vs Animation", "Asteroids", "Astray", "Awesome Cars", "Awesome Pirates", "Awesome Planes", "Awesome Tanks", "Awesome Tanks2", "Ballistic Chickens", "Banjo-Kazooie", "Basket and Ball", "Basket Bros", "Battle Panic", "Big Tower Tiny Square", "Bloons Tower Defense", "Bloons Tower Defense 2", "Bloons Tower Defense 3", "Bloons Tower Defense 4", "Blue", "Bob The Robber", "boxHead", "Bubble Tanks", "Burnout Drift 3", "Burrito Bison", "Cat Ninja", "Google Champion Island", "Chess", "Chess with ai", "Chill Radio", "Google Chrome Dinosaur Game", "Chrono Trigger", "CircloO", "Circus", "Clubhouse Games", "Classic Minecraft", "Clicker Heroes", "Cookie Clicker", "Cubefield", "Custom Tetris", "Donkey Kong Country", "Donkey Kong Country 2", "Donkey Kong Country 3", "Dragon Ball Devolution", "Diggy", "Doodle Jump", "Duck Life Adventure", "Eaglercraft", "Earthbound 0 (Mother 1)", "Earthbound (Mother 2)", "Microsoft Edge Surf", "Eggy Car", "Elastic Man", "Fancy Pants Adventure", "Fireboy And Watergirl", "Flappy Bird", "Fluid Simulation", "Five Nights At Freddy's", "Five Nights at Winston's", "Friday Night Funkin", "F-Zero", "Gameboy Advance Emulator", "Gold Miner", "Grind Craft", "Google Snake", "Hacker Typer", "happy Wheels", "Breaking The Bank", "Escaping The Prison", "Fleeing The Compex", "Infiltrating The Airship", "Stealing The Diamond", "Hex GL", "Hextris", "HTML editor", "Impossible Quiz", "Impossible Quiz 2", "Infinite Mario", "Jacksmith", "Learn To Fly", "Learn To Fly 2", "Little Alchemy", "Madalin Stunt Cars 2", "Madalin Stunt Cars Multiplayer", "Mine Blocks", "Minekhan", "Moon Lander", "Motox3m", "Microsoft Flight Simulator 1-4", "n-gon", "Pac-Man", "Pac-Man 3d", "Paper.io 2", "Pico-8", "Picross (DS)", "Picross 3d", "Poom", "Powder Game2 ", "Punch Out!!! (NES)", "Raft Wars", "Raft Wars 2", "Raft Wars Multiplayer", "Retro Bowl", "Riddle Shool", "Riddle School 2", "Riddle School 3", "Riddle School 4", "Riddle School 5", "Riddle Transfer", "Riddle Transfer 2", "Rocket Soccer", "Ruffle (Flash Emulator)", "Run 2", "Run 3", "Sandspiel", "Shell Shockers", "Slope", "Mario Kart 64", "Super Mario 64", "Super Mario 64 DS", "Super Mario Bros. (NES)", "Super Mario RPG: Legend of the Seven Stars", "Super Mario World", "Super Mario World 2: Yoshis Island", "Sonny", "Sonny 2", "Space Cadet Pinball", "Spelunky", "Spinning Rat", "Super Smash Flash", "Star Fox", "Star Fox 2", "Subway Surfers", "Super Metroid", "Table Tanks", "Tank Trouble 2", "Temple Run 2", "Tetris", "Tetris Attack", "Tetris DS", "The Ocarina Of Time", "Tiny Fishing", "Toss The Turtle", "Typewriter", "Very Normal Shooter", "Vex 3", "Vex 4", "Vex 5", "Vex 6", "Linux Virtual Machine", "Wall Smash", "Warioware Touched!", "We Become What We Behold", "Weavesilk", "Web Retro", "Wordle", "Zombs Royale", "World's Hardest Game", "Zelda 1 (NES)", "Zelda a Link to The Past"];
const imgs = ["0hh1.png", "0hn0.png", "1On1Soccer.webp", "2048.png", "3dtanks.jpg", "achievementUnlocked.jpg", "achievementUnlocked2.png", "achievementUnlocked3.png", "alienhominid.jpg", "amidstthesky.jpg", "amongus.jpg", "animatorvsanimation.jpg", "asteroids.jpg", "astray.png", "awesomeCars.jpg", "awesomePirates.jpg", "awesomePlanes.jpg", "awesomeTanks.png", "awesomeTanks2.jpg", "ballistic-chickens.png", "banjok.png", "basketAndBall.webp", "basketbros.jpg", "battlePanic.jpg", "bigTowerTinySquare.png", "bloonsTowerDefense.jpg", "bloonsTowerDefense2.jpg", "bloonsTowerDefense3.jpg", "bloonsTowerDefense4.webp", "blue.png", "bobTheRobber.jpg", "boxHead.webp", "bubbleTanks.jpg", "burnout-drift-3.jpg", "burritoBison.webp", "catNinja.png", "championisland.jpg", "chess.jpg", "chess.jpg", "chillradio.jpg", "chromedino.jpg", "chronoTrigger.jpeg", "circloO.jpg", "circus.jpg", "clubhousegames.jpg", "classicminecraft.png", "clickerHeroes.jpg", "cookieclicker.png", "cubefield.jpg", "customtetris.jpg", "dkc1.png", "dkc2.jpeg", "dkc3.jpeg", "dbzdevolution.jpg", "diggy.jpg", "doodlejump.png", "duckLifeAdventure.jpg", "eaglercraft.png", "earthboundZero.png", "earthbound.jpg", "edgesurf.png", "eggyCar.jpg", "elasticman.jpg", "fancyPantsAdventure.jpg", "fireboyAndWatergirl.jpg", "flappybird.png", "fluidsimulation.png", "fnaf.jpeg", "fnaw.jpg", "fnf.jpg", "fzero.jpeg", "gba.jpg", "goldMiner.webp", "grindcraft.png", "gsnake.png", "hackertyper.png", "happyWheels.jpg", "henryStickmanBreakingTheBank.webp", "henryStickmanEscapingThePrison.jpg", "henryStickmanFleeingTheCompex.webp", "henryStickmanInfiltratingTheAirship.jpg", "henryStickmanStealingTheDiamond.jpg", "hexgl.png", "hextris.png", "htmledit.jpg", "impossiblequiz.jpg", "impossibleQuiz2.jpg", "infinitemario.jpg", "jackSmith.jpg", "learnToFly.jpg", "learnToFly2.webp", "littleAlchemy.png", "madalincars2.jpg", "madalincarsmulti.jpg", "mineblocks.png", "minekhan.png", "moonlander.png", "motox3m.jpg", "msflight.png", "n-gon.png", "pacman.jpg", "pacman3d.jpeg", "paperio2.png", "pico8.png", "picross.jpg", "picross3d.jpg", "poom.png", "powdergame.jpeg", "punchout.jpg", "raftWars.jpg", "raftWars2.jpg", "raftWarsMultiplayer.png", "retrobowl.jpg", "riddleschool.png", "riddleschool2.png", "riddleschool3.png", "riddleschool4.png", "riddleschool5.png", "riddletransfer.png", "riddletransfer2.png", "rocketSoccer.jpg", "ruffle.png", "run2.jpg", "run3.webp", "sandspiel.jpg","shellShockers.jpg", "slope.jpg", "mk64.jpeg", "sm64.jpg", "sm64ds.jpg", "mario1.png", "superMarioRPG.jpeg", "superMarioWorld.jpg", "marioWorldYoshisIsland.jpeg", "sonny.jpg", "sonny2.jpg", "spacecadetpinball.jpg", "spelunky.jpg", "spinningrat.png", "ssf.png", "starfox1.jpeg", "starfox2.jpeg", "subwaySurfers.png", "superMetroid.jpeg", "tableTanks.webp", "tanktrouble2.jpg", "templerun2.jpeg", "tetris.jpg", "tetrisAttack.png", "tetrisds.jpg", "theOcarinaOfTime.jpg", "tiny-fishing.png", "tossTheTurtle.jpg", "typewriter.jpeg", "veryNormalShooter.png", "vex-3.jpg", "vex4.jpg", "vex-5.jpg", "vex6.jpg", "vmlinux.png", "wallsmash.png", "wariowaretouched.jpg", "wbwwb.png", "weavesilk.jpg", "webretro.png", "wordle.jpg", "zombsRoyale.jpg", "hardestgame.jpg", "zelda1.jpg", "alttp.jpg"];
var popGames = ["eggyCar", "Diggy", "catNinja", "gba", "motox3m", "raftWars", "impossibleQuiz2", "henryStickmanBreakingTheBank"];
var popwGames = ["eggyCar", "Diggy", "catNinja", "gba", "motox3m", "raftWars", "impossibleQuiz2", "henryStickmanBreakingTheBank"];
var recGames = ["Diggy", "catNinja", "tableTanks", "raftWarsMultiplayer", "achievementUnlocked2", "motox3m", "raftWars", "impossibleQuiz2", "eaglercraft"];
var newGames = ["raftWarsMultiplayer", "picross", "picross3d", "mario1", "shellShockers", "zelda1", "punchout", "zombsRoyale", "basketAndBall", "fireboyAndWatergirl", "circloO", "happyWheels", "sandspiel"];
if (window.self == window.top) {
    var a = window.open("about:blank", "_blank");
    if (a != null) {
        a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>My Drive - Google Drive</title><link rel="icon" type="image/png" href="' + window.location.href + '/icon.png"><style>body {margin: 0;}</style><body><iframe id="frame" style="height:100%; width:100%; top:0px; left:0px; position:absolute;  z-index:1;" src="' + window.location.href + '" frameborder="0"></iframe></body></html>';
        window.open('https://drive.google.com', '_self');
    } else {
        start();
    }
} else {
    start();
}
function start() {
    if (window.location.pathname.includes("allgames")) {
        for (i = 0; i < gameIds.length; i++) {
            if (gameIds[i].startsWith("/") == false) {
                addgame("allgames", gameIds[i], gameNames[i], imgs[i]);
            }
        }
    } else {
        try {
            const socket = io('https://api.studymath.ml');
            socket.emit('get');
            socket.on('popgames', (games) => {
                popGames = games;
                console.log(games);
                console.log(popGames);
                cleargames("popgames");
                for (i = 0; i < popGames.length; i++) {
                    const current = gameIds.indexOf(popGames[i])
                    console.log(i + ", " + gameNames[current]);
                    addgame("popgames", gameIds[current], gameNames[current], imgs[current]);
                }
            });
            socket.on('popwgames', (games) => {
                popwGames = games;
                console.log(games);
                cleargames("popwgames");
                for (i = 0; i < popwGames.length; i++) {
                    const current = gameIds.indexOf(popwGames[i])
                    console.log(i + ", " + gameNames[current]);
                    addgame("popwgames", gameIds[current], gameNames[current], imgs[current]);
                }
            });
        } catch (err) {
            console.log("unable to connect");
        }
        for (i = 0; i < recGames.length; i++) {
            const current = gameIds.indexOf(recGames[i])
            console.log(i + ", " + gameNames[current]);
            addgame("recgames", gameIds[current], gameNames[current], imgs[current]);
        }
        for (i = 0; i < newGames.length; i++) {
            const current = gameIds.indexOf(newGames[i])
            console.log(i + ", " + gameNames[current]);
            addgame("newgames", gameIds[current], gameNames[current], imgs[current]);
        }
        for (i = 0; i < popwGames.length; i++) {
            const current = gameIds.indexOf(popwGames[i])
            console.log(i + ", " + gameNames[current]);
            addgame("popwgames", gameIds[current], gameNames[current], imgs[current]);
        }
        for (i = 0; i < popGames.length; i++) {
            const current = gameIds.indexOf(popGames[i])
            console.log(i + ", " + gameNames[current]);
            addgame("popgames", gameIds[current], gameNames[current], imgs[current]);
        }
    }
}
function aboutBlank(gameid) {
    try {
        const socket = io('https://api.studymath.ml');
        socket.emit('game', gameid);
    } catch (err) {
        console.log("unable to connect");
    }
    var a = window.open("about:blank", "_blank");
    a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body {margin: 0;}</style><body><iframe style="height:100%; width:100%; top:0px; left:0; position:absolute;  z-index:1;" src="https://' + window.location.hostname + '/games/' + gameid + '/index.html" frameborder="0"></iframe></body></html>';
}
function addgame(sectionid, gameid, gamename, img) {
    document.getElementById(sectionid).innerHTML += '<div class="game" onclick="aboutBlank(' + "'" + gameid + "'" + ')"><img class="gimg" src="/images/' + img + '"><div class="gradient"></div><h class="text">' + gamename + '</h></div>'
}
function cleargames(section){
    document.getElementById(section).innerHTML = '';
}
let searchbar = document.getElementById('searchbar');
searchbar.addEventListener("keypress", function (event) {
    let input = searchbar.value
    if (event.key === "Enter") {
        event.preventDefault();
        for (i = 0; i < gameNames.length; i++) {
            if (gameNames[i].toLowerCase().includes(input)) {
                aboutBlank(gameIds[i]);
            }
        }
    }
});
function liveSearch() {
    /*
    let input = searchbar.value
    input = input.toLowerCase();
    var games = []
    //clear sugjustions
    for (i = 0; i < games.length; i++) {
        if (games[i].toLowerCase().includes(input)) {
            //add sugjustion
        }
    }
    */
}
