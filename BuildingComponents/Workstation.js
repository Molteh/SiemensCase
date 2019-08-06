class Workstation {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.used = Math.random() < 0.7;
        this.sprite = this.used ? sprites[1] : sprites[0];
        this.pixel_position = createVector(x + tile_size / 2, y + tile_size / 2);
        console.log(this.pixel_position);
    }

    setUsed(used) {
        this.used = used;
        this.sprite = used ? sprites[1] : sprites[0];
    }

    show() {
        imageMode(CENTER);
        image(this.sprite, this.pixel_position.x, this.pixel_position.y, tile_size,
            tile_size);
    }
}
