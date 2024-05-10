"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function getEnvironmentVariable(name) {
    const value = process.env[name];
    if (!value) {
        throw Error(`${name} must be set.`);
    }
    return value;
}
exports.PORT = getEnvironmentVariable("PORT");
//# sourceMappingURL=ValidEnvironment.js.map