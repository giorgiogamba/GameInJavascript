
// Setup canvas
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const animationsComboBox = document.getElementById("animations");
animationsComboBox.addEventListener("change", function(e)
{
    currStateName = e.target.value;
    spriteIdx = 0;
    gameFrame = 0;
});

// Global constants declaration
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const SPRITE_WIDTH = 575;
const SPRITE_HEIGHT = 523;
const SPRITE_LENGTH = 7;

const SAME_SPRITE_FRAMES = 5; // Number of frames where to render the same sprite as before

// Sprites animations intialization

// Define a json map that defines the possible animations with the number of frames required
// to display them and their position inside the assete
const animations =
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
        frames: 7,
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

const animationsSprites = [];

animations.forEach((state, stateIdx) =>
{
    // Contains the coordinates inside the sprite asset of the animations states
    let animationStates = { loc: [] };

    for (let j = 0; j < state.frames; j ++)     // For each animation state
    {
        let posX = j * SPRITE_WIDTH;            // Get the col position
        let posY = stateIdx * SPRITE_HEIGHT;    // Get the row position
        animationStates.loc.push({posX, posY});
    }

    // Associates the state name with its frames coordinates
    animationsSprites[state.name] = animationStates;

});

console.log(animationsSprites);


let gameFrame = 0; // Iterates from 0 to 5
let spriteIdx = 0; // Keeps track of the row of the sprite table to draw
let currStateName = "IDLE";

// Sprite asset
const playerImage = new Image();
playerImage.src = '../assets/shadow_dog.png';

function animate()
{
    // Completely clears the canvas
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draws on the canvas
    context.drawImage( playerImage                                              // From this source
                     , animationsSprites[currStateName].loc[spriteIdx].posX     // Crops starting from the upper left
                     , animationsSprites[currStateName].loc[spriteIdx].posY
                     , SPRITE_WIDTH                                             // Crops with this dimension
                     , SPRITE_HEIGHT
                     , 0                                                        // Starts drawing from upper left of the canvas
                     , 0
                     , CANVAS_WIDTH                                             // Stretches the cropped sprite in this size
                     , CANVAS_HEIGHT );

    // Handles the sprite to draw at the next frame
    gameFrame ++;
    gameFrame = gameFrame % SAME_SPRITE_FRAMES;

    if (gameFrame == 0) // If passed SAME_SPRITE_FRAMES frames
    {
        // Change sprite to draw
        spriteIdx ++;
        spriteIdx = spriteIdx % SPRITE_LENGTH;
    }

    // Requesrt animation, it invokes this method at every frame
    requestAnimationFrame(animate);
};

animate(); // Start animating
