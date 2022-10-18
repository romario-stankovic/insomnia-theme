import * as fs from 'fs';
import * as darkTheme from './themes/dark';

const themes = [darkTheme];

for(let t of themes) {
    let file = t.theme.name.toLowerCase().replace(/ /g, "-") + "-color-theme.json";
    fs.writeFile("./themes/" + file, JSON.stringify(t.theme, null, 4), () => {
        console.log("Wrote: " + t.theme.name);
    });
}
