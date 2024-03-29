import { CANVAS_HEIGHT, CANVAS_WIDTH, ENEMY_CANVAS_HEIGTH, ENEMY_CANVAS_WIDTH, ENEMY_HEIGHT, ENEMY_SPEED, ENEMY_WIDTH, NUM_ENEMIES, enemyImageHeight, enemyImagePath, enemyImageWidth } from "./config.js";

/** @type {HTMLCanvasElement} */
const enemiesCanvas = document.getElementById("enemiesCanvas");
const enemiesContext = enemiesCanvas.getContext("2d");

let gameFrame = 0;

class Enemy
{
    constructor()
    {
        this.spriteWidth = enemyImageWidth;
        this.spritHeight = enemyImageHeight;
        this.width = this.spriteWidth / 7;
        this.height = this.spritHeight / 7;

        this.x = Math.random() * (enemiesCanvas.width - this.width);
        this.y = Math.random() * (enemiesCanvas.height - this.height);

        this.speed = ENEMY_SPEED;

        this.image = new Image();
        this.image.src = enemyImagePath;
        
        this.frameIdx = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }

    update()
    {
        let speed = Math.random() * 4 - 2;
        this.x += speed;
        this.y += speed;

        if (gameFrame % this.flapSpeed == 0) // Update draw frame in alternate way
        {
            this.frameIdx = this.frameIdx > 4 ? 0 : this.frameIdx +1; // Cycle over the sprite images
        }
    }

    draw()
    {
        enemiesContext.drawImage
        ( this.image
        , this.frameIdx * this.spriteWidth
        , 0
        , this.spriteWidth
        , this.spritHeight
        , this.x
        , this.y
        , this.width
        , this.height );
    }
};

const enemies = [];
for(let i = 0; i < NUM_ENEMIES; i ++)
{
    enemies.push(new Enemy());
}

function animate()
{
    gameFrame ++;

    enemiesContext.clearRect(0, 0, ENEMY_CANVAS_WIDTH, ENEMY_CANVAS_HEIGTH);

    for (let i = 0; i < enemies.length; i ++)
    {   
        enemies[i].update();
        enemies[i].draw();
    };

    requestAnimationFrame(animate);
}

animate();