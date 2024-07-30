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

function changeBGColor(event) {

    body.style = event.style.cssText;
}

paletteButtonBackground.onclick = togglePaletteBGBox;
paletteWhiteBG.onclick = (e) => changeBGColor(e.target);
paletteRedBG.onclick = (e) => changeBGColor(e.target);
paletteYellowBG.onclick = (e) => changeBGColor(e.target);
paletteGreyBG.onclick = (e) => changeBGColor(e.target);

/*TODO:
1. knappar för att öppna färgpalett, ändra färg på bakgrund och text
2. bilder av något, dunno
3. använd något roligt API
*/