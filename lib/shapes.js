class Shape {
    constructor(color) {
        this.color = color;
    }
    fillColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="250" height="250" fill="${this.color}"/>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="135" r="60" fill="${this.color}"/>`
    }
};

module.exports = {Triangle, Square, Circle}