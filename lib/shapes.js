class shape {
    constructor(shape, color) {
        this.shape = shape;
        this.color = color;
    }

    generateShape() {
        let style = ``;

        if(this.shape === 'Circle'){
            style = `<circle cx="150" cy="135" r="60" fill="${this.color}"/>`;
        } else if(this.shape === 'Square') {
            style = `<rect x="68" y="50" width="160" height="160" fill="${this.color}"/>`;
        } else if(this.shape === 'Triangle') {
            style = `<polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
        };

        return style;
    }
}

module.exports = shape;