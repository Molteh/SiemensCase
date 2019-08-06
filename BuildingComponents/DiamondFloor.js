class DiamondFloor extends Floor {

    constructor() {
        super();
        this.width = 250;
        this.length = 250;
        this.setupSectors();

    }

    setupSectors() {
        this.sectors.push(new SquaredSector(500-this.width/2, 500-this.width/2-this.width, this.width, this.length));
        this.sectors.push(new SquaredSector(500-this.width/2, 500+this.width/2, this.width, this.length));
        this.sectors.push(new SquaredSector(500-this.width/2-this.width, 500-this.width/2, this.width, this.length));
        this.sectors.push(new SquaredSector(500+this.width/2, 500-this.width/2, this.width, this.length));
    }
}
