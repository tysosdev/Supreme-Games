var popGames = ["eggyCar", "Diggy", "catNinja", "gba", "motox3m", "raftWars", "impossibleQuiz2", "henryStickmanBreakingTheBank"];
var popwGames = ["eggyCar", "Diggy", "catNinja", "gba", "motox3m", "raftWars", "impossibleQuiz2", "henryStickmanBreakingTheBank"];
var recGames = ["Diggy", "catNinja", "tableTanks", "raftWarsMultiplayer", "achievementUnlocked2", "motox3m", "raftWars", "impossibleQuiz2", "eaglercraft"];
var newGames = ["territorialIo", "KDL", "eaglercraft", "jackSmith", "LinksAwakening", "rooftopSnipers", "proxy", "learnToFly3", "vex7", "motox3m2", "motox3m3", "motox3mPoolParty", "motox3mSpookyLand", "motox3mWinter", "raftWarsMultiplayer", "picross", "picross3d", "mario1"];
var games;
var api = "https://api." + location.hostname.split('.').reverse().splice(0, 2).reverse().join('.');
checks();
async function checks() {
    if (window.self == window.top) {
        var a = window.open("about:blank", "_blank");
        if (a != null) {
            a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>My Drive - Google Drive</title><link rel="icon" type="image/png" href="' + window.location.href + '/icon.png"><style>body {margin: 0;}</style><body><iframe id="frame" style="height:100%; width:100%; top:0px; left:0px; position:absolute;  z-index:1;" src="' + window.location.href + '" frameborder="0"></iframe></body></html>';
            window.open('https://drive.google.com', '_self');
        } else {
            await getGameList();
            start();

        }
    } else {
        await getGameList();
        start();
    }
}
async function getGameList() {
    const response = await fetch('/js/games.json');
    games = await response.json();
}
function start() {
    //check if you are on all games
    if (window.location.pathname.includes("allgames")) {
        addGamesFromJson(games, "allgames");
    } else {
        //show discord popup
        if (localStorage.getItem("discord") != "stop") {
            document.getElementById("discord").style.display = "block";
        }
        //add all the games from the stored lists
        addGamesFromList(recGames, "recgames");
        addGamesFromList(newGames, "newgames");
        addGamesFromList(popwGames, "popwgames");
        addGamesFromList(popGames, "popgames");
        //attempt to connect to the server
        const socket = io(api);
        socket.emit('get');
        //when we hear back write the new data
        socket.on('popgames', (games) => {
            popGames = games;
            console.log(games);
            console.log(popGames);
            cleargames("popgames");
            addGamesFromList(popGames, "popgames");
        });
        socket.on('popwgames', (games) => {
            popwGames = games;
            console.log(games);
            cleargames("popwgames");
            addGamesFromList(popwGames, "popwgames");
        });
        socket.on('emergency', (links) => {
            console.log(links);
            if (links.includes(location.hostname.split('.').reverse().splice(0, 2).reverse().join('.'))) {
                console.log("this link will be blocked");
                document.getElementById("emergency").style.display = "block";
                let emalert = "This link, " + location.hostname.split('.').reverse().splice(0, 2).reverse().join('.') + " has been recorded in the lightspeed database, please use one of the other links below instead.";
                emalert += "<br>https://createengineering.ga/: the old disguise, scroll down do check understanding and put in gmes <br> https://teaching.ga/: new disguise, you need to click in a secret spot to the right of the calculator(click around and find it) <br> https://epicmatheducation.ml/: new disguise, you need to click in a secret spot to the right of the calculator(click around and find it)";
                document.getElementById("emergencytext").innerHTML = emalert;
            }
        });
    }
}
function addGamesFromList(list, gameType) {
    //repeats for each item on the list with gameid being the item
    for (const gameId of list) {
        //set gameinfo to gameid of the data
        let gameInfo = games[gameId];
        //add the game with all the info
        addgame(gameType, gameInfo.id, gameInfo.name, gameInfo.image);
    }
}
function addGamesFromJson(Json, gameType) {
    //repeats for each item on the list with gameid being the item
    for (const [gameId] of Object.entries(Json)) {
        //set gameinfo to gameid of the data
        let gameInfo = games[gameId];
        //add the game with all the info
        addgame(gameType, gameInfo.id, gameInfo.name, gameInfo.image);
    }
}
function closediscrod(save) {
    document.getElementById("discord").style.display = "none";
    if (save == "yes") {
        localStorage.setItem("discord", "stop");
    }
}
function opendiscrod() {
    window.location.replace("https://discord.gg/xYSgcdDXrJ")
}
function aboutBlank(gameid) {
    try {
        const socket = io(api);
        socket.emit('game', gameid);
    } catch (err) {
        console.log("unable to connect");
    }
    var a = window.open("about:blank", "_blank");
    a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body {margin: 0;}</style><body onload=' + "'" + 'document.getElementsByTagName("iframe")[0].focus();' + "'" + '><iframe style="height:100%; width:100%; top:0px; left:0; position:absolute;  z-index:1;" src="https://' + window.location.hostname + '/games/' + gameid + '/index.html" frameborder="0"></iframe></body></html>';
}
function addgame(sectionid, gameid, gamename, img) {
    document.getElementById(sectionid).innerHTML += '<div class="game" onclick="aboutBlank(' + "'" + gameid + "'" + ')"><img class="gimg" src="/images/' + img + '"><div class="gradient"></div><h class="text">' + gamename + '</h></div>'
}
function cleargames(section) {
    document.getElementById(section).innerHTML = '';
}
let searchbar = document.getElementById('searchbar');
searchbar.addEventListener("keypress", function (event) {
    let input = searchbar.value
    if (event.key === "Enter") {
        event.preventDefault();
        for (const game of games) {
            if (game.name.toLowerCase().includes(input)) {
                aboutBlank(game.id);
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
