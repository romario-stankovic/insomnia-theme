const editor = require("./editor");
const tokens = require("./tokens");
const name = "Insomnia Dark"

const theme = {
    name: name,
    colors: editor,
    tokenColors: tokens.tokenColors,
    semanticHighlighting: tokens.semanticHighlighting,
    semanticTokenColors: tokens.semanticTokenColors
}

module.exports = {
    theme
}