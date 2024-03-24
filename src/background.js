import { BACKGROUND_CANVAS_HEIGHT, BACKGROUND_CANVAS_WIDTH} from "./config.js";
import { backgroundLayerPath1, backgroundLayerPath2, backgroundLayerPath3, backgroundLayerPath4, backgroundLayerPath5 } from "./config.js";

const background = document.getElementById("background");
const backgroundContext = background.getContext("2d");

let gameSpeed = 15;

function animateBackground()
{
    backgroundContext.clearRect(0, 0, BACKGROUND_CANVAS_WIDTH, BACKGROUND_CANVAS_HEIGHT);

    // Draws on the canvas
    backgroundContext.drawImage(backgroundLayer1, 0, 0);
    requestAnimationFrame(animateBackground);
}

animateBackground();