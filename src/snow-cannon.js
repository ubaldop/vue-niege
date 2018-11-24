export function snow(props) {

    let {
        speed,
        color,
        zIndex,
        wind,
        swing
    } = props;

    let canvas = getCanvas(zIndex);
    window.onresize = function () {
        canvas = canvasResize(canvas);
    };
    //let it snow, let it snow, ...
    let itSnow = snowflakes(color, wind, swing);
    setInterval(() => itSnow(canvas), speed);
}

function getCanvas(zIndex) {
    let canvas = document.getElementById('vue-niege-canvas');
    canvas.style.pointerEvents = "none";
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.zIndex = zIndex;
    canvas.style.userSelect = "none";
    return canvasResize(canvas);
}

function canvasResize(currentCanvas) {
    currentCanvas.height = currentCanvas.offsetHeight;
    currentCanvas.width = currentCanvas.offsetWidth;
    return currentCanvas;
}

//KUDOS to Pimp Trizkit, https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function shadeBlend(p, c0, c1) {
    let n = p < 0 ? p * -1 : p,
        u = Math.round,
        w = parseInt;
    let f = w(c0.slice(1), 16),
        t = w((c1 ? c1 : p < 0 ? "#000000" : "#FFFFFF").slice(1), 16),
        R1 = f >> 16,
        G1 = f >> 8 & 0x00FF,
        B1 = f & 0x0000FF;

    if (R1 > 255 || G1 > 255 || B1 > 255)
        return '#FFFFFF';

    return "#" + (0x1000000 + (u(((t >> 16) - R1) * n) + R1) * 0x10000 + (u(((t >> 8 & 0x00FF) - G1) * n) + G1) * 0x100 + (u(((t & 0x0000FF) - B1) * n) + B1)).toString(16).slice(1)
}

function getColorsArray(selectedColor) {
    if (selectedColor === "#FFFFFF") {
        return [selectedColor, '#F2FFFF', '#D8FFFF', '#BEFFFF']
    } else {
        let shadedcolor1 = shadeBlend(.7, selectedColor);
        let shadedcolor2 = shadeBlend(.6, selectedColor);
        let shadedcolor3 = shadeBlend(.5, selectedColor);
        return [selectedColor, shadedcolor1, shadedcolor2, shadedcolor3];
    }
}

function snowflakeColor(snowflakeColors) {
    return snowflakeColors[Math.floor(Math.random() * snowflakeColors.length) - 1]
}


function snowflakes(color, wind, swing) {

    let flakes = []
    let selectedColors = getColorsArray(color);

    let swingFlake = (flakeSwing, velX) => {
        if (swing === 0)
            return velX
        else
            return (0.4 * Math.cos(flakeSwing += 0.03) * swing) + velX
    }

    return (canvas) => {
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        let random = Math.random();
        var distance = .05 + .95 * random;
        let flake = {};
        flake.x = 1.5 * canvas.width * Math.random() - .5 * canvas.width;
        flake.y = -5 + Math.random();
        let flakeFallingSpeed = 2 * distance * (Math.random() / 2);
        flake.velX = Math.abs(flakeFallingSpeed) < Math.abs(wind) ? flakeFallingSpeed + wind / 20 : wind;
        flake.velY = (4 + 2 * Math.random()) * distance;
        flake.radius = Math.pow(3 * random, 2) / 3;
        flake.color = `${snowflakeColor(selectedColors)}`;
        flake.swing = Math.random() * 2 * Math.PI
        flake.update = function () {
            var t = this;
            t.x += swingFlake(t.swing, t.velX);
            t.y += t.velY;
            ctx.beginPath();
            ctx.arc(t.x, t.y, t.radius, 0, 2 * Math.PI, !1);
            ctx.fillStyle = t.color;
            ctx.fill()
        };

        flakes.push(flake);
        flakes.forEach((elem, i) => {
            elem.y > canvas.height ? flakes.splice(i, 1) : elem.update()
        });
    }

}