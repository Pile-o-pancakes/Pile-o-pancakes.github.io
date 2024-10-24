const body = document.getElementById("body");

const paletteButtonBackground = document.getElementById("paletteButtonBackground");
const paletteBackgroundBox = document.getElementById("paletteBackgroundBox");

const paletteWhiteBG = document.getElementById("paletteWhiteBG");
const paletteRedBG = document.getElementById("paletteRedBG");
const paletteYellowBG = document.getElementById("paletteYellowBG");
const paletteGreyBG = document.getElementById("paletteGreyBG");


function togglePaletteBGBox() {

    if(paletteBackgroundBox.style.visibility == "hidden") {

        paletteBackgroundBox.style.visibility = "visible";
    }
    else {

        paletteBackgroundBox.style.visibility = "hidden";
    }
}

paletteButtonBackground.onclick = togglePaletteBGBox;

paletteWhiteBG.onclick = (e) => body.style = e.target.style.cssText;
paletteRedBG.onclick = (e) => body.style = e.target.style.cssText;
paletteYellowBG.onclick = (e) => body.style = e.target.style.cssText;
paletteGreyBG.onclick = (e) => body.style = e.target.style.cssText;