var gameInstance = UnityLoader.instantiate("gameContainer", "Build/RooftopSnipersGD.json");
var scaleToFit;
try {
    scaleToFit = !!JSON.parse("");
} catch (e) {
    scaleToFit = true;
}
window.onresize = function () {
    var canvas = gameInstance.Module.canvas;
    var container = gameInstance.container;
    var w;
    var h;

    if (scaleToFit) {
        w = window.innerWidth;
        h = window.innerHeight;

        var r = 600 / 960;

        if (w * r > window.innerHeight) {
            w = Math.min(w, Math.ceil(h / r));
        }
        h = Math.floor(w * r);
    } else {
        w = 960;
        h = 600;
    }

    container.style.width = canvas.style.width = w + "px";
    container.style.height = canvas.style.height = h + "px";
    container.style.top = Math.floor((window.innerHeight - h) / 2) + "px";
    container.style.left = Math.floor((window.innerWidth - w) / 2) + "px";
}