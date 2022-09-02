const editor = require("./editor");
const tokens = require("./tokens");
const fs = require("fs");

const result = {
    name: "Modern Code - Dark",
    colors: editor,
    tokenColors: tokens.tokenColors,
    semanticHighlighting: tokens.semanticHighlighting,
    semanticTokenColors: tokens.semanticTokenColors,

}

fs.writeFileSync("./themes/modern-code-dark-color-theme.json", JSON.stringify(result, null, 4));