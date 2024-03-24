import { BACKGROUND_CANVAS_HEIGHT, BACKGROUND_CANVAS_WIDTH, BACKGROUND_IMAGE_HEIGHT, BACKGROUND_IMAGE_WIDTH} from "./config.js";
import { backgroundLayerPath1, backgroundLayerPath2, backgroundLayerPath3, backgroundLayerPath4, backgroundLayerPath5 } from "./config.js";

const background = document.getElementById("background");
const backgroundContext = background.getContext("2d");

let gameSpeed = 15;

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
        this.x1 = 0;
        this.y1 = 0;

        // Position of the second instance of the image
        this.x2 = this.width;

        this.speed = gameSpeed * speedModifier;
    }

    update()
    {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x1 < - this.width)
        {
            this.x1 = this.width + this.x2 - this.speed;
        }
        if (this.x2 < - this.width)
        {
            this.x2 = this.width + this.x1 - this.speed;
        }

        this.x1 = Math.floor(this.x1 - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }

    draw()
    {
        backgroundContext.drawImage(this.image, this.x1, this.y1, this.width, this.height);
        backgroundContext.drawImage(this.image, this.x2, this.y1, this.width, this.height);
    }

}

function createLayer(imagePath, speedModifier)
{
    const backgroundLayerImage = new Image();
    backgroundLayerImage.src = imagePath;
    return new BGLayer(backgroundLayerImage, speedModifier);
}

const layer1 = createLayer(backgroundLayerPath1, 0.2);
const layer2 = createLayer(backgroundLayerPath2, 0.4);
const layer3 = createLayer(backgroundLayerPath3, 0.6);
const layer4 = createLayer(backgroundLayerPath4, 0.8);
const layer5 = createLayer(backgroundLayerPath5, 1.0);

const layers = [layer1, layer2, layer3, layer4, layer5];

function animateBackground()
{
    backgroundContext.clearRect(0, 0, BACKGROUND_CANVAS_WIDTH, BACKGROUND_CANVAS_HEIGHT);

    layers.forEach(obj =>
    {
        obj.update();
        obj.draw();
    });

    requestAnimationFrame(animateBackground);
}

animateBackground();