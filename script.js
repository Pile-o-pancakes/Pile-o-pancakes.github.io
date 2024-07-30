const body = document.getElementById("body");

const paletteButtonBackground = document.getElementById("paletteButtonBackground");
const paletteButtonFont = document.getElementById("paletteButtonFont");

const paletteBackgroundBox = document.getElementById("paletteBackgroundBox");
const paletteFontBox = document.getElementById("paletteFontBox");

function togglePaletteBGBox() {

    if(paletteBackgroundBox.style.visibility == "hidden") {

        paletteBackgroundBox.style.visibility = "visible";
    }
    else {

        paletteBackgroundBox.style.visibility = "hidden";
    }
}

function togglePaletteFontBox() {

    if(paletteFontBox.style.visibility == "hidden") {

        paletteFontBox.style.visibility = "visible";
    }
    else {
    
        paletteFontBox.style.visibility = "hidden";
    }
}

paletteButtonBackground.onclick = togglePaletteBGBox;
paletteButtonFont.onclick = togglePaletteFontBox;

/*TODO:
1. knappar för att öppna färgpalett, ändra färg på bakgrund och text
2. bilder av något, dunno
3. använd något roligt API
*/