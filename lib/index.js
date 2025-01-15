"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
function escapeFileName(str) {
    return "svg-".concat(path.basename(str, '.svg'))
        .split(/\W+/)
        .map(function (x) { return "".concat(x.charAt(0).toUpperCase()).concat(x.slice(1)); })
        .join('');
}
var transform = function (src, filePath) {
    if (path.extname(filePath) !== '.svg') {
        return src;
    }
    var name = escapeFileName(filePath);
    return {
        code: "\nconst React = require('react');\nfunction ".concat(name, "(props) {\n  return React.createElement(\n    'svg', \n    Object.assign({}, props, {'data-file-name': ").concat(name, ".name})\n  );\n}\nmodule.exports = ").concat(name, ";\n"),
    };
};
exports.default = {
    process: transform,
};
