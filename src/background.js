import { BACKGROUND_CANVAS_HEIGHT, BACKGROUND_CANVAS_WIDTH, BACKGROUND_IMAGE_HEIGHT, BACKGROUND_IMAGE_WIDTH} from "./config.js";
import { backgroundLayerPath1, backgroundLayerPath2, backgroundLayerPath3, backgroundLayerPath4, backgroundLayerPath5 } from "./config.js";

const background = document.getElementById("background");
const backgroundContext = background.getContext("2d");

let gameSpeed = 15;
let gameFrame = 0;

class BGLayer
{
    constructor(image, speedModifier)
    {
        this.image = image;
        this.speedModifier = speedModifier;

        // Size of the image
        this.width = BACKGROUND_IMAGE_WIDTH;
        this.height = BACKGROUND_IMAGE_HEIGHT;

        // Position of the first instance of the image
        this.x = 0;
        this.y = 0;

        this.speed = gameSpeed * speedModifier;
    }

    update()
    {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x < - this.width)
        {
            this.x = 0;
        }

        this.x = gameFrame * gameSpeed % this.width;
    }

    draw()
    {
        backgroundContext.drawImage(this.image, this.x, this.y, this.width, this.height);
        backgroundContext.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }

}

function createLayer(imagePath, speedModifier)
{
    const backgroundLayerImage = new Image();
    backgroundLayerImage.src = imagePath;
    return new BGLayer(backgroundLayerImage, speedModifier);
}

// Background debug

const gameSpeedLabel = document.getElementById("gameSpeedLabel");
gameSpeedLabel.innerHTML = gameSpeed;

const gameSpeedSlider = document.getElementById("gameSpeedSlider");
gameSpeedSlider.value = gameSpeed;
gameSpeedSlider.addEventListener("change", function(e)
{
    gameSpeed = e.target.value;             // Updates game speed value
    gameSpeedLabel.innerHTML = gameSpeed;   // Updates game speed label content
});

const layer1 = createLayer(backgroundLayerPath1, 0.2);
const layer2 = createLayer(backgroundLayerPath2, 0.4);
const layer3 = createLayer(backgroundLayerPath3, 0.6);
const layer4 = createLayer(backgroundLayerPath4, 0.8);
const layer5 = createLayer(backgroundLayerPath5, 1.0);

const layers = [layer1, layer2, layer3, layer4, layer5];

function animateBackground()
{
    backgroundContext.clearRect(0, 0, BACKGROUND_CANVAS_WIDTH, BACKGROUND_CANVAS_HEIGHT);

    gameFrame --;

    layers.forEach(obj =>
    {
        obj.update();
        obj.draw();
    });

    requestAnimationFrame(animateBackground);
}

animateBackground();