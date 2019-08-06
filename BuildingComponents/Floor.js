class Floor {

    constructor() {
        this.sectors = [];
    }

    show() {
        //draw sectors
        for (let x = 0; x < this.sectors.length; x++) {
            this.sectors[x].show();
        }
    }
}
