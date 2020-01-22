"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json([
        {
            id: 'b342a22b-e790-4fa6-b2b0-32bc91aea4b1',
            nickname: 'bannastre',
            email: 'bannastre@gmail.com',
        },
    ]);
});
exports.default = router;
//# sourceMappingURL=users.js.map