
// Setup canvas
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Global constants declaration
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const SPRITE_WIDTH = 575;
const SPRITE_HEIGHT = 523;

const playerImage = new Image();
playerImage.src = '../assets/shadow_dog.png';

function animate()
{
    // Completely clear the canvas
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draws on the canvas
    context.drawImage( playerImage      // From this source
                     , 0                // Crops starting from the upper left
                     , 0
                     , SPRITE_WIDTH     // Crops with this dimension
                     , SPRITE_HEIGHT
                     , 0                // Starts drawing from upper left of the canvas
                     , 0
                     , CANVAS_WIDTH     // Stretches the cropped sprite in this size
                     , CANVAS_HEIGHT );

    // Requesrt animation, it invokes this method at every frame
    requestAnimationFrame(animate);
};

animate(); // Start animating
