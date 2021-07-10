"use strict";
exports.__esModule = true;
var path = require("path");
function escapeFileName(str) {
    return ("svg-" + path.basename(str, ".svg"))
        .split(/\W+/)
        .map(function (x) { return "" + x.charAt(0).toUpperCase() + x.slice(1); })
        .join("");
}
var transform = function (src, filePath) {
    if (path.extname(filePath) !== ".svg") {
        return src;
    }
    var name = escapeFileName(filePath);
    return "\nconst React = require('react');\nfunction " + name + "(props) {\n  return React.createElement(\n    'svg', \n    Object.assign({}, props, {'data-file-name': " + name + ".name})\n  );\n}\nmodule.exports = " + name + ";\n";
};
exports["default"] = {
    process: transform
};
