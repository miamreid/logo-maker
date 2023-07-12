class Shape {
    constructor(fill) {
        this.fill = fill;
    }
    fillColor(fill) {
        this.fill = fill;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="${this.fill}"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="68" y="50" width="160" height="160" fill="${this.fill}"/>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="135" r="60" fill="${this.fill}"/>`
    }
};

module.exports = {Triangle, Square, Circle}