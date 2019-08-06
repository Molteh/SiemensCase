class SquaredSector extends Sector {

    constructor(x, y, length, width) {
        super(x, y, length, width);
        this.setupWorkstations();
    }

    setupWorkstations() {

        let nrow = Math.floor(this.length / 40);
        let ncol = Math.floor(this.width / 40);

        for(let i = 0; i<ncol*nrow; i++) {

            let x = i % ncol;
            let y = Math.floor(i / ncol);
            console.log('workstation ' + i + "in pos: "+ x, y);
            this.workstations.push(new Workstation(this.x + x*40 + 20, this.y + y*40 + 20))
        }

    }
}
