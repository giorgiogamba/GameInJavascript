import { CANVAS_HEIGHT, CANVAS_WIDTH, ENEMY_CANVAS_HEIGTH, ENEMY_CANVAS_WIDTH, ENEMY_HEIGHT, ENEMY_SPEED, ENEMY_WIDTH, NUM_ENEMIES } from "./config.js";

const enemiesCanvas = document.getElementById("enemiesCanvas");
const enemiesContext = enemiesCanvas.getContext("2d");

class Enemy
{
    constructor()
    {
        this.x = Math.random() * CANVAS_WIDTH; // Position on the canvas
        this.y = Math.random() * CANVAS_HEIGHT;
        this.width = ENEMY_WIDTH;
        this.height = ENEMY_HEIGHT;
        this.speed = ENEMY_SPEED;
    }

    update()
    {
        this.x += ENEMY_SPEED;
        this.y += ENEMY_SPEED;
    }

    draw()
    {
        enemiesContext.fillRect(this.x, this.y, this.width, this.height);
    }
};

const enemies = [];
for(let i = 0; i < NUM_ENEMIES; i ++)
{
    enemies.push(new Enemy());
}

function animate()
{
    enemiesContext.clearRect(0, 0, ENEMY_CANVAS_WIDTH, ENEMY_CANVAS_HEIGTH);

    enemies.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });

    requestAnimationFrame(animate);
}

animate();