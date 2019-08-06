class Sector {

    constructor(x, y, length, width) {
        this.x = x;
        this.y = y;

        this.open = Math.random() <= 0.6;
        this.length = length;
        this.width = width;
        this.workstations = [];
    }

    setOpen(open) {
        this.open = open;
    }

    show() {
        strokeWeight(4);
        stroke(51);

        if(this.open) {
            fill(147, 217, 126);
        } else {
            fill(245, 99, 88);
        }

        //draw typical sector shape
        rect(this.x, this.y, this.width, this.length);

        //draw workstations
        for (let x = 0; x < this.workstations.length; x++) {
            this.workstations[x].show();
        }
    }

}
