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

function convertHexToRgbA(hex, opacity = 1){
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        let c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+`,${opacity})`;
    }
    throw new Error('Bad Hex');
}

module.exports = { getColor, getRandomColor, convertHexToRgbA };