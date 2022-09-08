const fs = require("fs");
const darkTheme = require("./dark");

const themes = [darkTheme];

for(let t of themes) {
    let file = t.theme.name.toLowerCase().replace(/ /g, "-") + "-color-theme.json";
    fs.writeFile("./themes/" + file, JSON.stringify(t.theme, null, 4), () => {
        console.log("Wrote: " + t.theme.name);
    });
}
