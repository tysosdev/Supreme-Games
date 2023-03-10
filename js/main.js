const gameIds = ["0hh1", "0hn0", "1On1Soccer", "2048", "3dtanks", "achievementUnlocked", "achievementUnlocked2", "achievementUnlocked3", "alienhominid", "amidstthesky", "amongus", "animatorvsanimation", "asteroids", "astray", "awesomeCars", "awesomePirates", "awesomePlanes", "ballisticChickens", "/basketbros", "battlePanic", "bloonsTowerDefense", "bloonsTowerDefense2", "bloonsTowerDefense3", "bloonsTowerDefense4", "blue", "bobTheRobber", "boxHead", "bubbleTanks", "/burnoutDrift3", "burritoBison", "catNinja", "championIsland", "/chess", "chessai", "chillRadio", "chromeDino", "chronoTrigger", "circus", "classicMinecraft", "/clickerHeroes", "cookieclicker", "cubefield", "customTetris", "dkc1", "dbzdevolution", "Diggy", "doodleJump", "/driftHunters", "duckLifeAdventure", "eaglercraft", "earthboundZero", "earthbound", "edgesurf", "eggyCar", "elasticMan", "fancyPantsAdventure", "flappybird", "fluidSimulation", "fnaf", "fnaw", "/fnf", "fzero", "gba", "goldMiner", "/grindcraft", "googleSnake", "hackerTyper", "hexgl", "hextris", "htmledit", "impossibleQuiz", "impossibleQuiz2", "/infinetemario", "/jackSmith", "learnToFly", "learnToFly2", "littleAlchemy", "/madalinCars2", "/madalinCars3", "mineBlocks", "/minekhan", "moonlander", "motox3m", "msFlight", "n-gon", "pacman", "pacman3d", "paperio2", "pico8", "poom", "powderGame", "raftWars", "raftWars2", "retroBowl", "riddleSchool", "riddleSchool2", "riddleSchool3", "riddleSchool4", "riddleSchool5", "riddleTransfer", "riddleTransfer2", "/rocketSoccer", "ruffleDemo", "run2", "/run3", "slope", "sm64", "superMarioRPG", "superMarioWorld", "marioWorldYoshisIsland", "sonny", "sonny2", "spaceCadetPinball", "spelunky", "spinningRat", "ssf", "starfox1", "starfox2", "subwaySurfers", "superMetroid", "tableTanks", "tankTrouble2", "templeRun2", "tetris", "theOcarinaOfTime", "tinyFishing", "tossTheTurtle", "typewriter", "veryNormalShooter", "vex3", "vex4", "vex5", "vex6", "vmlinux", "wallSmash", "wbwwb", "weaveSilk", "webRetro", "wordle", "worldsHardestGame", "alttp"];
const gameNames = ["0hh1", "0hn0", "1 On 1 Soccer", "2048", "3d Tanks", "Achievement Unlocked", "Achievement Unlocked 2", "Achievement Unlocked 3", "Alien hominid", "Amidst the Sky", "Among Us Singleplayer", "Animator vs Animation", "Asteroids", "Astray", "Awesome Cars", "Awesome Pirates", "Awesome Planes", "Ballistic Chickens", "Basket Bros", "Battle Panic", "Bloons Tower Defense", "Bloons Tower Defense 2", "Bloons Tower Defense 3", "Bloons Tower Defense 4", "Blue", "Bob The Robber", "boxHead", "Bubble Tanks", "Burnout Drift 3", "Burrito Bison", "Cat Ninja", "Google Champion Island", "Chess", "Chess with ai", "Chill Radio", "Google Chrome Dinosaur Game", "Chrono Trigger", "Circus", "Classic Minecraft", "Clicker Heroes", "Cookie Clicker", "Cubefield", "Custom Tetris", "Donkey Kong Country", "Dragon Ball Devolution", "Diggy", "Doodle Jump", "Drift Hunters", "Duck Life Adventure", "Eaglercraft", "Earthbound 0 (Mother 1)", "Earthbound (Mother 2)", "Microsoft Edge Surf", "Eggy Car", "Elastic Man", "Fancy Pants Adventure", "Flappy Bird", "Fluid Simulation", "Five Nights At Freddy's", "Five Nights at Winston's", "Friday Night Funkin", "F-Zero", "Gameboy Advance Emulator", "Gold Miner", "Grind Craft", "Google Snake", "Hacker Typer", "Hex GL", "Hextris", "HTML editor", "Impossible Quiz", "Impossible Quiz 2", "Infinite Mario", "Jacksmith", "Learn To Fly", "Learn To Fly 2", "Little Alchemy", "Madalin Stunt Cars 2", "Madalin Stunt Cars Multiplayer", "Mine Blocks", "Minekhan", "Moon Lander", "Motox3m", "Microsoft Flight Simulator 1-4", "n-gon", "Pac-Man", "Pac-Man 3d", "Paper.io 2", "Pico-8", "Poom", "Powder Game2 ", "Raft Wars", "Raft Wars 2", "Retro Bowl", "Riddle Shool", "Riddle School 2", "Riddle School 3", "Riddle School 4", "Riddle School 5", "Riddle Transfer", "Riddle Transfer 2", "Rocket Soccer", "Ruffle (Flash Emulator)", "Run 2", "Run 3", "Slope", "Super Mario 64", "Super Mario RPG: Legend of the Seven Stars", "Super Mario World", "Super Mario World 2: Yoshi's Island", "Sonny", "Sonny 2", "Space Cadet Pinball", "Spelunky", "Spinning Rat", "Super Smash Flash", "Star Fox", "Star Fox 2", "Subway Surfers", "Super Metroid", "Table Tanks", "Tank Trouble 2", "Temple Run 2", "Tetris", "The Ocarina Of Time", "Tiny Fishing", "Toss The Turtle", "Typewriter", "Very Normal Shooter", "Vex 3", "Vex 4", "Vex 5", "Vex 6", "Linux Virtual Machine", "Wall Smash", "We Become What We Behold", "Weavesilk", "Web Retro", "Wordle", "World's Hardest Game", "Zelda a Link to The Past"];
const imgs = ["0hh1.png", "0hn0.png", "1On1Soccer.webp", "2048.png", "3dtanks.jpg", "achievementUnlocked.jpg", "achievementUnlocked2.png", "achievementUnlocked3.png", "alienhominid.jpg", "amidstthesky.jpg", "amongus.jpg", "animatorvsanimation.jpg", "asteroids.jpg", "astray.png", "awesomeCars.jpg", "awesomePirates.jpg", "awesomePlanes.jpg", "ballistic-chickens.png", "basketbros.jpg", "battlePanic.jpg", "bloonsTowerDefense.jpg", "bloonsTowerDefense2.jpg", "bloonsTowerDefense3.jpg", "bloonsTowerDefense4.webp", "blue.png", "bobTheRobber.jpg", "boxHead.webp", "bubbleTanks.jpg", "burnout-drift-3.jpg", "burritoBison.webp", "catNinja.png", "championisland.jpg", "chess.jpg", "chess.jpg","chillradio.jpg", "chromedino.jpg", "chronoTrigger.jpeg", "circus.jpg", "classicminecraft.png", "clickerHeroes.jpg", "cookieclicker.png", "cubefield.jpg", "customtetris.jpg", "dkc1.png", "dbzdevolution.jpg", "diggy.jpg", "doodlejump.png", "drifthunters.png", "duckLifeAdventure.jpg", "eaglercraft.png", "earthboundZero.png", "earthbound.jpg", "edgesurf.png", "eggyCar.jpg", "elasticman.jpg", "fancyPantsAdventure.jpg", "flappybird.png", "fluidsimulation.png", "fnaf.jpeg", "fnaw.jpg", "fnf.jpg", "fzero.jpeg", "gba.jpg", "goldMiner.webp", "grindcraft.png", "gsnake.png", "hackertyper.png", "hexgl.png", "hextris.png", "htmledit.jpg", "impossiblequiz.jpg", "impossibleQuiz2.jpg", "infinitemario.jpg", "jackSmith.jpg", "learnToFly.jpg", "learnToFly2.webp", "littleAlchemy.png", "madalincars2.jpg", "madalincarsmulti.jpg", "mineblocks.png", "minekhan.png", "moonlander.png", "motox3m.jpg", "msflight.png", "n-gon.png", "pacman.jpg", "pacman3d.jpeg", "paperio2.png", "pico8.png", "poom.png", "powdergame.jpeg", "raftWars.jpg", "raftWars2.jpg", "retrobowl.jpg", "riddleschool.png", "riddleschool2.png", "riddleschool3.png", "riddleschool4.png", "riddleschool5.png", "riddletransfer.png", "riddletransfer2.png", "rocketSoccer.jpg", "ruffle.png", "run2.jpg", "run3.webp", "slope.jpg", "sm64.jpg", "superMarioRPG.jpeg", "superMarioWorld.jpg", "marioWorldYoshisIsland.jpeg", "sonny.jpg", "sonny2.jpg", "spacecadetpinball.jpg", "spelunky.jpg", "spinningrat.png", "ssf.png", "starfox1.jpeg", "starfox2.jpeg", "subwaySurfers.png", "superMetroid.jpeg", "tableTanks.webp", "tanktrouble2.jpg", "templerun2.jpeg", "tetris.jpg", "theOcarinaOfTime.jpg", "tiny-fishing.png", "tossTheTurtle.jpg", "typewriter.jpeg", "veryNormalShooter.png", "vex-3.jpg", "vex4.jpg", "vex-5.jpg", "vex6.jpg", "vmlinux.png", "wallsmash.png", "wbwwb.png", "weavesilk.jpg", "webretro.png", "wordle.jpg", "hardestgame.jpg", "alttp.jpg"];
var popGames = [];
var popwGames = [];
var recGames = ["Diggy", "catNinja", "tableTanks", "awesomePlanes", "achievementUnlocked2", "motox3m", "raftWars", "impossibleQuiz2", "eaglercraft"];
var newGames = ["motox3m", "chronoTrigger", "alttp", "superMarioWorld", "earthboundZero", "earthbound", "theOcarinaOfTime", "superMetroid", "goldMiner", "burritoBison", "boxHead", "sonny", "sonny2", "bubbleTanks", "battlePanic", "fancyPantsAdventure", "bobTheRobber"];
const socket = io('https://api.studymath.ml');
if (window.self == window.top) {
    var a = window.open("about:blank", "_blank");
    if (a != null) {
        a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>My Drive - Google Drive</title><link rel="icon" type="image/png" href="https://studymath.ml/icon.png"><style>body {margin: 0;}</style><body><iframe id="frame" style="height:100%; width:100%; top:0px; left:0px; position:absolute;  z-index:1;" src="' + window.location.href + '" frameborder="0"></iframe></body></html>';
        window.open('https://drive.google.com', '_self');
    } else {
        start();
    }
} else {
    start();
}
function start() {
    if(window.location.pathname.includes("allgames")){
    for (i = 0; i < gameIds.length; i++) {
        if(gameIds[i].startsWith("/") == false){
        addgame("allgames", gameIds[i], gameNames[i], imgs[i]);
        }
    }
    }else{
    socket.emit('get');
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
    socket.on('popgames', (games) => {
        popGames = games;
        console.log(games);
        console.log(popGames);
        for (i = 0; i < popGames.length; i++) {
            const current = gameIds.indexOf(popGames[i])
            console.log(i + ", " + gameNames[current]);
            addgame("popgames", gameIds[current], gameNames[current], imgs[current]);
        }
    });
    socket.on('popwgames', (games) => {
        popwGames = games;
        console.log(games);
        for (i = 0; i < popwGames.length; i++) {
            const current = gameIds.indexOf(popwGames[i])
            console.log(i + ", " + gameNames[current]);
            addgame("popwgames", gameIds[current], gameNames[current], imgs[current]);
        }
    });
    }
}
function aboutBlank(gameid) {
    socket.emit('game', gameid);
    var a = window.open("about:blank", "_blank");
    a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body {margin: 0;}</style><body><iframe style="height:100%; width:100%; top:0px; left:0; position:absolute;  z-index:1;" src="https://studymath.ml/games/' + gameid + '/index.html" frameborder="0"></iframe></body></html>';
}
function addgame(sectionid, gameid, gamename, img) {
    document.getElementById(sectionid).innerHTML += '<div class="game" onclick="aboutBlank(' + "'" + gameid + "'" + ')"><img class="gimg" src="/images/' + img + '"><div class="gradient"></div><h class="text">' + gamename + '</h></div>'
}
let searchbar = document.getElementById('searchbar');
searchbar.addEventListener("keypress", function(event) {
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
