// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>

class Draggable {
    constructor(x, y, r, Figtype, complex) {
        this.dragging = false; // Is the object being dragged?
        this.rollover = false; // Is the mouse over the ellipse?
        this.x = x;
        this.y = y;
        this.r = r;
        this.offsetX = 0;
        this.offsetY = 0;

        this.Figtype = Figtype;
        this.complex = complex;

        this.re = this.x - width / 2;
        this.im = height / 2 - this.y;
    }

    over() {
        // Is mouse over object
        if (dist(pmouseX, pmouseY, this.x, this.y) < this.r) {
            this.rollover = true;
        } else {
            this.rollover = false;
        }
    }

    update() {
        // Adjust location if being dragged
        if (this.dragging) {
            this.x = pmouseX + this.offsetX;
            if (this.complex) {
                this.y = pmouseY + this.offsetY;
            }

            this.re = this.x - width / 2;
            this.im = height / 2 - this.y;
        }
    }

    show() {
        stroke(0);
        // Different fill based on state
        if (this.dragging) {
            fill(50);
        } else if (this.rollover) {
            fill(100);
        } else {
            fill(175, 200);
        }
        //ellipse(this.x, this.y, this.r);
        if (this.Figtype == 'x') {

            imageMode(CENTER);
            image(img, this.x, this.y, 30, 20);
            if (this.complex) {
                image(img, this.x, height - this.y, 30, 20);
            }

        } else if (this.Figtype == 'o') {
            fill(0, 100, 255, 60);
            stroke(0, 100, 255);
            ellipse(this.x, this.y, 20, 20);
            if (this.complex) {
                ellipse(this.x, height - this.y, 20, 20);
            }


        }

        // console.log(this.x-width/2)
    }

    pressed() {
        // Did I click on the rectangle?
        if (dist(pmouseX, pmouseY, this.x, this.y) < this.r) {
            this.dragging = true;
            // If so, keep track of relative location of click to corner of rectangle
            this.offsetX = this.x - pmouseX;
            this.offsetY = this.y - pmouseY;
        }
    }

    released() {
        // Quit dragging
        this.dragging = false;
    }
}