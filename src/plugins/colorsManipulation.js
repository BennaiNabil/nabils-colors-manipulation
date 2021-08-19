export const generateShade = (col, val) => {
    let hasHashtag = false;
    if (col[0] === "#") {
        col = col.slice(1);
        hasHashtag = true;
    }
    let num = parseInt(col, 16);
    let r = (num >> 16) + val;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    let b = ((num >> 8) & 0x00FF) + val;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;
    let g = (num & 0x0000FF) + val;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (hasHashtag ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

export const hexToRGB = (hex) => {
    let validHEXInput = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!validHEXInput) {
        return false;
    }
    return {
        r: parseInt(validHEXInput[1], 16),
        g: parseInt(validHEXInput[2], 16),
        b: parseInt(validHEXInput[3], 16),
    };
}

export const hexToCMYK = (hex) => {

    let [computedC, computedM, computedY, computedK] = [0, 0, 0, 0];

    hex = (hex.charAt(0) === "#") ? hex.substring(1, 7) : hex;
    if (hex.length !== 6 || /[0-9a-f]{6}/i.test(hex) !== true) {
        return [-1, -1, -1, -1];
    }

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    if (r === 0 && g === 0 && b === 0) {
        computedK = 1;
        return [0, 0, 0, 1];
    }

    computedC = 1 - (r / 255);
    computedM = 1 - (g / 255);
    computedY = 1 - (b / 255);

    let minCMY = Math.min(computedC, Math.min(computedM, computedY));
    computedC = Math.round(100 * (computedC - minCMY) / (1 - minCMY));
    computedM = Math.round(100 * (computedM - minCMY) / (1 - minCMY));
    computedY = Math.round(100 * (computedY - minCMY) / (1 - minCMY));
    computedK = Math.round(100 * minCMY);

    return [computedC, computedM, computedY, computedK];
}

export const hexToHSL = (hex) => {

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);

    r /= 255;
    g /= 255;
    b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    h = Math.round(360 * h);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
    return [h, s, l];
}

export const rgbToHSV = (r, g, b) => {
    r = r / 255.0;
    g = g / 255.0;
    b = b / 255.0;
    let c_hi = Math.max(r, Math.max(g, b));
    let c_lo = Math.min(r, Math.min(g, b));
    let delta = c_hi - c_lo;
    let h = -1, s = -1;
    if (c_hi === c_lo)
        h = 0;
    else if (c_hi === r)
        h = (60 * ((g - b) / delta) + 360) % 360;
    else if (c_hi === g)
        h = (60 * ((b - r) / delta) + 120) % 360;
    else if (c_hi === b)
        h = (60 * ((r - g) / delta) + 240) % 360;
    if (c_hi === 0)
        s = 0;
    else
        s = (delta / c_hi) * 100;
    let v = c_hi * 100;
    return [h, s, v].map(Math.round);
}

export const prettifyRGB = (rgb) => {
    return `${rgb.r}, ${rgb.g}, ${rgb.b}`;
}

export const prettifyCMYK = (cmyk)=>{
    return cmyk[0] + '%, ' + cmyk[1] + '%, ' + cmyk[2] + '%, ' + cmyk[3] +'%'
}

export const prettifyHSL = (hsl) =>{
    return hsl[0] + '°, ' + hsl[1] + '%, ' + hsl[2] + '%'
}
