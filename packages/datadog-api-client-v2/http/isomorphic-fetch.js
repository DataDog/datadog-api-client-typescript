"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsomorphicFetchHttpLibrary = void 0;
var http_1 = require("./http");
var rxjsStub_1 = require("../rxjsStub");
var node_fetch_1 = __importDefault(require("node-fetch"));
var IsomorphicFetchHttpLibrary = /** @class */ (function () {
    function IsomorphicFetchHttpLibrary() {
    }
    IsomorphicFetchHttpLibrary.prototype.send = function (request) {
        var method = request.getHttpMethod().toString();
        var body = request.getBody();
        var compress = request.getHttpConfig().compress;
        if (compress === undefined) {
            compress = true;
        }
        var resultPromise = node_fetch_1.default(request.getUrl(), {
            method: method,
            body: body,
            headers: request.getHeaders(),
            compress: compress,
        }).then(function (resp) {
            var headers = {};
            resp.headers.forEach(function (value, name) {
                headers[name] = value;
            });
            var body = {
                text: function () { return resp.text(); },
                binary: function () { return resp.buffer(); }
            };
            return new http_1.ResponseContext(resp.status, headers, body);
        });
        return rxjsStub_1.from(resultPromise);
    };
    return IsomorphicFetchHttpLibrary;
}());
exports.IsomorphicFetchHttpLibrary = IsomorphicFetchHttpLibrary;
//# sourceMappingURL=isomorphic-fetch.js.map