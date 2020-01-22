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
const chai_1 = __importDefault(require("chai"));
const request_promise_1 = __importDefault(require("request-promise"));
const uuid_1 = require("uuid");
const cucumber_1 = require("cucumber");
const app_1 = require("../../../src/app");
const config_1 = __importDefault(require("../../../src/config"));
chai_1.default.should();
cucumber_1.BeforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield app_1.startApp();
    }
    catch (err) {
        throw err;
    }
}));
cucumber_1.Before(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        const corrId = uuid_1.v4();
        console.log('\nScenario: ', scenario.pickle.name);
        console.log('Correlation ID: ', corrId);
        this.headers = { ['x-correlation-id']: corrId };
    });
});
cucumber_1.When('I call {string} {string}', function (method, path) {
    return __awaiter(this, void 0, void 0, function* () {
        this.response = yield requestGenerator(this, method, path);
    });
});
cucumber_1.Then('I should get the expected status code {int}', function (statusCode) {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.response.statusCode.should.equal(statusCode);
    });
});
function requestGenerator(thys, method, path) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield request_promise_1.default({
            body: thys.body,
            form: thys.form,
            headers: Object.assign({}, thys.headers),
            json: true,
            method,
            qs: thys.qs,
            resolveWithFullResponse: true,
            simple: false,
            url: `${config_1.default.baseUrl}:${config_1.default.port}${path}`,
        });
        return response;
    });
}
exports.requestGenerator = requestGenerator;
//# sourceMappingURL=healthcheck.steps.js.map