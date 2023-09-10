if (mobile) {
    var canvasElement = $("<canvas oncontextmenu='return false;' id='twhgCanvas'></canvas>").get(0);
    var canvas = canvasElement.getContext("2d");
} else {
    var canvasElement = $("<canvas id='twhgCanvas' width='" + CANVAS_WIDTH + "' height='" + CANVAS_HEIGHT + "' style='width: calc((100vh*4)/3); height: 100vh;'></canvas>").get(0);
    var canvas = canvasElement.getContext("2d");
}
