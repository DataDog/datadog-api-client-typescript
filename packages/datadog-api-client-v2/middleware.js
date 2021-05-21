"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseMiddlewareWrapper = void 0;
var rxjsStub_1 = require("./rxjsStub");
var PromiseMiddlewareWrapper = /** @class */ (function () {
    function PromiseMiddlewareWrapper(middleware) {
        this.middleware = middleware;
    }
    PromiseMiddlewareWrapper.prototype.pre = function (context) {
        return rxjsStub_1.from(this.middleware.pre(context));
    };
    PromiseMiddlewareWrapper.prototype.post = function (context) {
        return rxjsStub_1.from(this.middleware.post(context));
    };
    return PromiseMiddlewareWrapper;
}());
exports.PromiseMiddlewareWrapper = PromiseMiddlewareWrapper;
//# sourceMappingURL=middleware.js.map