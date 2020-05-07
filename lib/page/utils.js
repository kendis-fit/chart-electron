const firstColors = ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"]

function* getColor(size) {

    for (let i = 0; i < size; ++i) {
        if (i < firstColors.length) {
            yield firstColors[i];
        } else {
            yield getRandomColor();
        }
    }
}

function getRandomColor() {

    const letters = "0123456789ABCDEF";
    const color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

module.exports = { getColor, getRandomColor };