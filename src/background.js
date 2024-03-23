import { BACKGROUND_CANVAS_HEIGHT, BACKGROUND_CANVAS_WIDTH} from "./config.js";
import { backgroundLayerPath1, backgroundLayerPath2, backgroundLayerPath3, backgroundLayerPath4, backgroundLayerPath5 } from "./config.js";

const background = document.getElementById("background");
const backgroundContext = background.getContext("2d");

let gameSpeed = 5;

const backgroundLayer1 = new Image();
backgroundLayer1.src = backgroundLayerPath1;
const backgroundLayer2 = new Image();
backgroundLayer2.src = backgroundLayerPath2;
const backgroundLayer3 = new Image();
backgroundLayer3.src = backgroundLayerPath3;
const backgroundLayer4 = new Image();
backgroundLayer4.src = backgroundLayerPath4;
const backgroundLayer5 = new Image();
backgroundLayer5.src = backgroundLayerPath5;

function animateBackground()
{
    backgroundContext.clearRect(0, 0, BACKGROUND_CANVAS_WIDTH, BACKGROUND_CANVAS_HEIGHT);

    // Draws on the canvas
    backgroundContext.drawImage(backgroundLayer1, 0, 0);
    requestAnimationFrame(animateBackground);
}

animateBackground();