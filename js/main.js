var popGames = ["miniMetro", "Diggy", "catNinja", "gba", "motox3m", "raftWars2", "impossibleQuiz2", "henryStickmanBreakingTheBank"];
var popwGames = ["eggyCar", "bigTowerTinySquare", "bigIceTowerTinySquare", "gba", "motox3mSpookyLand", "raftWars", "impossibleQuiz", "henryStickmanBreakingTheBank"];
var recGames = ["Diggy", "catNinja", "tableTanks", "learnToFly3", "achievementUnlocked2", "motox3m", "raftWars", "impossibleQuiz2", "eaglercraft"];
var newGames = ["miniMetro", "bigIceTowerTinySquare", "bigTowerTinySquare", "redBall4", "redBall4Vol2", "redBall4Vol3", "shapez", "deflyIo", "oneChance", "run3", "rooftopSnipers2", "territorialIo", "KDL", "eaglercraft", "jackSmith", "LinksAwakening", "rooftopSnipers", "proxy", "learnToFly3", "vex7", "motox3m2", "motox3m3", "motox3mPoolParty", "motox3mSpookyLand", "motox3mWinter", "raftWarsMultiplayer", "picross", "picross3d", "mario1"];
var games;
var api = "https://api." + location.hostname + ":3000";
var socket;
var searchSuggestionFocus = false;
var a = window.open("about:blank", "_blank");
a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body {margin: 0;}</style><body onload=' + "'" + 'document.getElementsByTagName("iframe")[0].focus();' + "'" + '><iframe style="height:100%; width:100%; top:0px; left:0; position:absolute;  z-index:1;" src="https://' + window.location.hostname + '" frameborder="0"></iframe></body></html>';
if(a != null){
    window.close();
}
async function run(loadedgames) {
    games = loadedgames;
    //loadPopGames();
    start();
}
function start() {
    //show discord popup
    if (localStorage.getItem("discord") != "stop") {
        document.getElementById("discord").style.display = "block";
    }
    //check if you are on all games
    if (window.location.pathname.includes("allgames")) {
        addGamesFromJson(games, "allgames");
    } else {
        //add all the games from the stored lists(these wil be overwrited when the data from the server is reseved)
        addGamesFromList(recGames, "recgames");
        addGamesFromList(newGames, "newgames");
        addGamesFromList(popwGames, "popwgames");
        addGamesFromList(popGames, "popgames");
    }
}
async function loadPopGames() {
    if (window.location.pathname.includes("allgames") != true) {
        //attempt to connect to the server
        socket = io(api);
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
    list.forEach(function (gameId, index) {
        //set gameinfo to gameid of the data
        let gameInfo = games[gameId];
        //if it is on sccreen
        if (index < 6) {
            //add the game with all the info and no extra properties
            addgame(gameType, gameInfo.id, gameInfo.name, gameInfo.image, "");
        } else {
            //add the game with all the info and lazy loading
            addgame(gameType, gameInfo.id, gameInfo.name, gameInfo.image, 'loading="lazy"');
        }
    });
    /* old method(no index)
    //repeats for each item on the list with gameid being the item
    for (const gameId of list) {
        //set gameinfo to gameid of the data
        let gameInfo = games[gameId];
        //add the game with all the info
        addgame(gameType, gameInfo.id, gameInfo.name, gameInfo.image);
    }
    */
}
function addGamesFromJson(Json, gameType) {
    //repeats for each item on the list with gameid being the item
    for (const [gameId] of Object.entries(Json)) {
        //set gameinfo to gameid of the data
        let gameInfo = games[gameId];
        //add the game with all the info
        if (gameInfo.id.startsWith("/") == false) {
            addgame(gameType, gameInfo.id, gameInfo.name, gameInfo.image, "");
        }
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
async function aboutBlank(gameid) {
        var a = window.open("about:blank", "_blank");
        a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body {margin: 0;}</style><body onload=' + "'" + 'document.getElementsByTagName("iframe")[0].focus();' + "'" + '><iframe style="height:100%; width:100%; top:0px; left:0; position:absolute;  z-index:1;" src="https://' + window.location.hostname + '/games/' + gameid + '/index.html" frameborder="0"></iframe></body></html>';
        socket.emit('game', gameid);
}
function addgame(sectionid, gameid, gamename, img, properties) {
    document.getElementById(sectionid).innerHTML += '<div class="game" onclick="aboutBlank(' + "'" + gameid + "'" + ')"><img class="gimg"' + properties + 'src="/images/' + img + '"><div class="gradient"></div><h class="text">' + gamename + '</h></div>'
}
function cleargames(section) {
    document.getElementById(section).innerHTML = '';
}
let searchbar = document.getElementById('searchbar');
let searchSuggestions = document.getElementById('searchSuggestions');
searchbar.addEventListener("keypress", function (event) {
    let input = searchbar.value.toLowerCase();
    if (event.key === "Enter") {
        event.preventDefault();
        let done = 0;
        for (const [useless, game] of Object.entries(games)) {
            if (game.name.toLowerCase().includes(input) && done == 0 && game.id.startsWith("/") == false) {
                aboutBlank(game.id);
                done = 1;
            }
        }
    }
});
function liveSearch() {
    const input = document.getElementById('searchbar').value.toLowerCase();
    if (input != "") {
        //clear sugjustions
        searchSuggestions.innerHTML = "";
        for (const [useless, game] of Object.entries(games)) {
            if (game.name.toLowerCase().includes(input) && game.id.startsWith("/") == false) {
                //add sugjestions
                if (searchSuggestions.innerHTML == "") {
                    searchSuggestions.innerHTML += '<div onclick="aboutBlank(' + "'" + game.id + "'" + ')" style="    background-color: rgba(255, 255, 255, 0.05);background-image:url(' + "'/images/" + game.image + "'" + ');" id="searchSuggestion">' + game.name + '</div>'
                } else {
                    searchSuggestions.innerHTML += '<div onclick="aboutBlank(' + "'" + game.id + "'" + ')" style="background-image:url(' + "'/images/" + game.image + "'" + ');" id="searchSuggestion">' + game.name + '</div>'
                }
            }
        }
        if (searchSuggestions.innerHTML == "") {
            searchSuggestions.style.display = "none";
        } else {
            searchSuggestions.style.display = "block";
        }
    } else {
        searchSuggestions.style.display = "none";
    }

}
searchbar.addEventListener("blur", function (event) {
    setTimeout(() => {
        if (searchSuggestionFocus != true) {
            searchSuggestions.style.display = "none";
        }
    }, 100)
});
searchSuggestions.addEventListener("focus", function (event) {
    searchSuggestionFocus = true;
});
searchSuggestions.addEventListener("blur", function (event) {
    searchSuggestionFocus = false;
});