const accessibleColour = background => {
    let textColour = "#000";

    if (!background) return textColour;

    const colour = background.charAt(0) === "#" ? background.substring(1, 7) : background;

    const r = parseInt(colour.substring(0, 2), 16); // hexToR
    const g = parseInt(colour.substring(2, 4), 16); // hexToG
    const b = parseInt(colour.substring(4, 6), 16); // hexToB
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#131313" : "#fff";
};

export default accessibleColour;