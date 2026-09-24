export class Snake {

    constructor() {
        this.body = [
            { x: 10, y: 10 },
            { x: 9, y: 10 },
            { x: 8, y: 10 },
        ];
    }
     getHead() {
        return this.body[0];
    }

    // Move the snake by adding a new head
    // and keeping the body length the same
    move(newHead) {
        return this.body.unshift(newHead);
    }

    // Remove the tail segment
    removeTail() {
        return this.body.pop();
    }

    // Grow the snake by adding a new head
    // without removing the tail
    grow(newHead) {
        this.body.unshift(newHead);
    }

    // Get the complete snake body
    getBody() {
        return this.body;
    }


}