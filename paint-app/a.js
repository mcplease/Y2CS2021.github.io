var canvasWidth = screen.width;
var canvasHeight = screen.height;
var happy = "DIE";
var optionsMenuShown = false;
var thickness;
var alpha;
var colour;


function updateThicknessValue(value) {
    thickness = value;
}

function updateColoursValue(value) {
    colour = value;
}

function updateAlphaValue(value) {
    alpha = value;
}

function showOptionsMenu(value) {
    var optionsMenu = document.getElementById('options');
    var showOptionsMenuButton = document.getElementById('showOptionsMenuButton');
    value ? optionsMenu.style.display = 'none' : value == null ? optionsMenu.style.display = optionsMenuShown ? 'none' : 'block' : optionsMenu.style.display = 'block';
    showOptionsMenuButton.style.display = 'none';
    optionsMenuShown = !optionsMenuShown;
}