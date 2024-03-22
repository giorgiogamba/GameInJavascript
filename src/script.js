
// Setup canvas
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Global constants declaration
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const SPRITE_WIDTH = 575;
const SPRITE_HEIGHT = 523;
const SPRITE_LENGTH = 7;

const SAME_SPRITE_FRAMES = 5; // Number of frames where to render the same sprite as before

let gameFrame = 0; // Iterates from 0 to 5
let spriteIdx = 0; // Keeps track of the row of the sprite table to draw

// Sprite asset
const playerImage = new Image();
playerImage.src = '../assets/shadow_dog.png';

function animate()
{
    // Completely clears the canvas
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draws on the canvas
    context.drawImage( playerImage                  // From this source
                     , spriteIdx * SPRITE_WIDTH     // Crops starting from the upper left
                     , 0
                     , SPRITE_WIDTH                 // Crops with this dimension
                     , SPRITE_HEIGHT
                     , 0                            // Starts drawing from upper left of the canvas
                     , 0
                     , CANVAS_WIDTH                 // Stretches the cropped sprite in this size
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
