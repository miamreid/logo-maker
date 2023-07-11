class text {
    constructor(text) {
        this.data = text;
    }

    string() {
    let textString = this.text.substring(0,3);
    return textString;
    }
};

module.exports = text;