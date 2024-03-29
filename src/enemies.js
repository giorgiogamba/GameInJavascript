import { CANVAS_HEIGHT, CANVAS_WIDTH, ENEMY_CANVAS_HEIGTH, ENEMY_CANVAS_WIDTH, ENEMY_HEIGHT, ENEMY_SPEED, ENEMY_WIDTH, NUM_ENEMIES, enemyImageHeight, enemyImagePath, enemyImageWidth, birdEnemyImageWidth, birdEnemyImageHeight, birdEnemyImagePath, squiddyEnemyImagePath, squiddyEnemyImageWidth, squiddyEnemyImageHeight } from "./config.js";

/** @type {HTMLCanvasElement} */
const enemiesCanvas = document.getElementById("enemiesCanvas");
const enemiesContext = enemiesCanvas.getContext("2d");

enemiesContext.imageSmoothingEnabled = false;


enemiesCanvas.width = ENEMY_CANVAS_WIDTH;
enemiesCanvas.height = ENEMY_CANVAS_HEIGTH;
let gameFrame = 0;

class Enemy
{
    constructor()
    {
        this.spriteWidth = enemyImageWidth;
        this.spritHeight = enemyImageHeight;
        this.width = this.spriteWidth / 2;
        this.height = this.spritHeight / 2;

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

class SecondEnemy
{
    constructor()
    {
        this.spriteWidth = birdEnemyImageWidth;
        this.spritHeight = birdEnemyImageHeight;
        this.width = this.spriteWidth / 2;
        this.height = this.spritHeight / 2;

        this.x = Math.random() * (enemiesCanvas.width - this.width);
        this.y = Math.random() * (enemiesCanvas.height - this.height);

        this.speed = ENEMY_SPEED;

        this.image = new Image();
        this.image.src = birdEnemyImagePath;
        
        this.frameIdx = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);

        this.angle = 0;
        this.angleSpeed = Math.random() * 0.2;
    }

    update()
    {
        this.x -= this.speed;
        this.y += Math.sin(this.angle);
        this.angle += this.angleSpeed;

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

class ThirdEnemy
{
    constructor()
    {
        this.spriteWidth = squiddyEnemyImageWidth;
        this.spritHeight = squiddyEnemyImageHeight;
        this.width = this.spriteWidth / 2;
        this.height = this.spritHeight / 2;

        this.x = Math.random() * (enemiesCanvas.width - this.width);
        this.y = Math.random() * (enemiesCanvas.height - this.height);

        this.speed = ENEMY_SPEED;

        this.image = new Image();
        this.image.src = squiddyEnemyImagePath;
        
        this.frameIdx = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);

        this.angle = 0;
        this.angleSpeed = Math.random() * 1.5 + 0.5;
    }

    update()
    {
        this.x = enemiesCanvas.width/2 + Math.cos(this.angle * Math.PI/90) + (enemiesCanvas.width/2 - this.width/2);
        this.y = enemiesCanvas.height/2 + Math.sin(this.angle * Math.PI/270) + (enemiesCanvas.height/2 - this.height/2);
        this.angle += this.angleSpeed;

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

const birdEnemies = [];
for(let i = 0; i < NUM_ENEMIES; i ++)
{
    birdEnemies.push(new SecondEnemy());
}

const squiddyEnemies = [];
for(let i = 0; i < NUM_ENEMIES; i ++)
{
    squiddyEnemies.push(new ThirdEnemy());
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

    for (let i = 0; i < birdEnemies.length; i ++)
    {   
        birdEnemies[i].update();
        birdEnemies[i].draw();
    };

    for (let i = 0; i < squiddyEnemies.length; i ++)
    {   
        squiddyEnemies[i].update();
        squiddyEnemies[i].draw();
    };

    requestAnimationFrame(animate);
}

animate();