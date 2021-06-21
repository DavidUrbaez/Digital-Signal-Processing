// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>

class Draggable {
    constructor(x, y, r, Figtype, complex) {
        this.dragging = false; // Is the object being dragged?

        this.x = x;
        this.y = y;
        this.r = r;


        this.Figtype = Figtype;
        this.complex = complex;

        this.re = this.x - width / 2;
        this.im = height / 2 - this.y;
    }

    update() {
        // Adjust location if being dragged

        if (this.dragging) {
            this.x = pmouseX;

            if (this.complex) {
                this.y = pmouseY;
            }

            this.re = this.x - width / 2;
            this.im = height / 2 - this.y;
        }
    }

    show() {
        stroke(0);
        // Different fill based on state
        if (this.dragging) {
            fill(0, 100, 255, 20);
        } else {
            fill(0, 100, 255, 60);
        }
        //ellipse(this.x, this.y, this.r);
        if (this.Figtype == 'x') {

            imageMode(CENTER);
            image(img, this.x, this.y, 30, 20);
            if (this.complex) {
                image(img, this.x, height - this.y, 30, 20);
            }

        } else if (this.Figtype == 'o') {

            stroke(0, 100, 255);
            ellipse(this.x, this.y, 20);
            if (this.complex) {
                // fill(255, 100, 255, 60);
                ellipse(this.x, height - this.y, 20);
            }


        }
        // console.log(this.offsetX);
        // console.log(this.x-width/2)
    }

    pressed() {
        // Did I click on the rectangle?
        if (dist(pmouseX, pmouseY, this.x, this.y) < this.r) {
            this.dragging = true;
            // If so, keep track of relative location of click to corner of rectangle (maybe this could create a problem- be careful)
            // this.offsetX = this.x - pmouseX;
            // this.offsetY = this.y - pmouseY;
        }
        if (this.complex && (dist(pmouseX, pmouseY, this.x, height - this.y) < this.r)) {
            this.dragging = true;
        }
    }

    released() {
        // Quit dragging
        this.dragging = false;
    }
}