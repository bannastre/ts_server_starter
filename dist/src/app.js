"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = __importDefault(require("./config"));
const index_1 = __importDefault(require("./routes/index"));
const users_1 = __importDefault(require("./routes/users"));
const initialise_1 = __importDefault(require("./db/initialise"));
const app = express_1.default();
const port = config_1.default.port;
const env = config_1.default.env;
function startApp() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield initialise_1.default().catch(error => {
                throw error;
            });
            console.log(`[db] Connected with ${connection.name}: ${connection.options.type}`);
            app.use(morgan_1.default('dev'));
            app.use(express_1.default.json());
            app.use(express_1.default.urlencoded({ extended: false }));
            app.use(cookie_parser_1.default());
            app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
            app.use('/', index_1.default);
            app.use('/users', users_1.default);
            const server = app.listen(port);
            console.log(`Express server listening on port: ${port}, using environment: ${env}.`);
            return server;
        }
        catch (err) {
            console.log(`:startApp: ${err}`);
            throw err;
        }
    });
}
exports.startApp = startApp;
//# sourceMappingURL=app.js.map