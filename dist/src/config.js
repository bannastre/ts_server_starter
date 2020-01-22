"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
dotenv_1.default.config();
const config = {
    baseUrl: process.env.BASE_URL || 'http://localhost',
    env: process.env.ENV || 'dev',
    port: process.env.PORT || 3000,
};
exports.default = config;
//# sourceMappingURL=config.js.map