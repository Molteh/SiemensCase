const tile_size = 20;
let floor;

let sprites = [];
let count = 0;

let scoreLabel;
let checkLabel;

function setup() {
    var myCanvas = createCanvas(1000, 1000);
    myCanvas.parent("col1");
    frameRate(30);

    setupSprites();

    stroke(255, 100);


    floor = new DiamondFloor()
    //html_elems_setup();

}

function draw() {
    background('white'); // Set the background to black

    floor.show();

    //after about 8 sec fetch data from server
    if(count===300) {
        let url = 'http://localhost:3000/';
        httpGet(url, function(response) {

            console.log(response);
            if (response === 'Used') {
                console.log(floor);

                //set the fake workstation to use
                floor.sectors[0].workstations[16].setUsed(true);
                //open sector 1
                floor.sectors[1].open = true;

                floor.sectors[2].open = false;
                floor.sectors[3].open = false;
            }
            else if (response === "Unused") {
                //set the fake workstation to unused
                floor.sectors[0].workstations[16].setUsed(false);
            }
            //earthquakes = response;
        });
        count=0;
    }
    count++;

}

function setupSprites() {
    sprites.push(loadImage("images/workstation.png"));
    sprites.push(loadImage("images/cross.png"));
}

function mousePressed() {

    console.log(mouseX, mouseY);
}

function update_score() {
    scoreLabel.html("Score: " + game.score);
}

function html_elems_setup() {

    let depthLabel = createDiv("Thinking " + prediction_depth + " moves ahead");
    let plusButton = createButton('+');
    let minusButton = createButton('-');
    plusButton.mousePressed(() => {
        prediction_depth++;
        show_prediction_depth()
    });
    minusButton.mousePressed(() => {
        if (prediction_depth > 0)
            prediction_depth--;
        show_prediction_depth()
    });

    function show_prediction_depth() {
        depthLabel.html("Thinking " + prediction_depth + " moves ahead");
    }

    scoreLabel = createDiv("Score " + 0);
    checkLabel = createDiv("");

    let testGenMoveButton = createButton('Generate moves');
    testGenMoveButton.mousePressed(() => {
        console.log(game.white_turn);
        if(game.white_turn) {
            for (let i = 0; i < game.white_pieces.length; i++) {
                game.white_pieces[i].generate_moves(game);
            }
        }
        else {
            for (let i = 0; i < game.black_pieces.length; i++) {
                game.black_pieces[i].generate_moves(game);
            }
        }
    })
}


