// Configuration file

// GLOBAL CONSTANT VARIABLES
export const CANVAS_WIDTH = canvas.width = 600;
export const CANVAS_HEIGHT = canvas.height = 600;

export const SPRITE_WIDTH = 575;
export const SPRITE_HEIGHT = 523;

export const SAME_SPRITE_FRAMES = 5; // Number of frames where to render the same sprite as before

// BACKGROUND
export const BACKGROUND_CANVAS_WIDTH = background.width = 800;
export const BACKGROUND_CANVAS_HEIGHT = background.height = 700;

export const BACKGROUND_IMAGE_WIDTH = 2400;
export const BACKGROUND_IMAGE_HEIGHT = 700;

export const backgroundLayerPath1 = "../assets/background/layer-1.png";
export const backgroundLayerPath2 = "../assets/background/layer-2.png";
export const backgroundLayerPath3 = "../assets/background/layer-3.png";
export const backgroundLayerPath4 = "../assets/background/layer-4.png";
export const backgroundLayerPath5 = "../assets/background/layer-5.png";

// PLAYER
export const playerAssetPath = '../assets/shadow_dog.png';

// ANIMATIONS
// Define a json map that defines the possible animations with the number of frames required
// to display them and their position inside the assete
export const animations =
[
    {
        name: "IDLE",
        frames: 7,
    },
    {
        name: "JUMP",
        frames: 7,
    },
    {
        name: "FALL",
        frames: 7,
    },
    {
        name: "RUN",
        frames: 9,
    },
    {
        name: "DIZZY",
        frames: 11,
    },
    {
        name: "SIT",
        frames: 5,
    },
    {
        name: "ROLL",
        frames: 7,
    },
    {
        name: "BITE",
        frames: 7,
    },
    {
        name: "KO",
        frames: 12,
    },
    {
        name: "HIT",
        frames: 4,
    },
];