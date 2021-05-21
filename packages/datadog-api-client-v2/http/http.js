"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapHttpLibrary = exports.ResponseContext = exports.SelfDecodingBody = exports.RequestContext = exports.HttpException = exports.HttpMethod = void 0;
var version_1 = require("../../../version");
// typings of url-parse are incorrect...
// @ts-ignore
var url_parse_1 = __importDefault(require("url-parse"));
var rxjsStub_1 = require("../rxjsStub");
__exportStar(require("./isomorphic-fetch"), exports);
/**
 * Represents an HTTP method.
 */
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["HEAD"] = "HEAD";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["CONNECT"] = "CONNECT";
    HttpMethod["OPTIONS"] = "OPTIONS";
    HttpMethod["TRACE"] = "TRACE";
    HttpMethod["PATCH"] = "PATCH";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
var HttpException = /** @class */ (function (_super) {
    __extends(HttpException, _super);
    function HttpException(msg) {
        return _super.call(this, msg) || this;
    }
    return HttpException;
}(Error));
exports.HttpException = HttpException;
/**
 * Represents an HTTP request context
 */
var RequestContext = /** @class */ (function () {
    /**
     * Creates the request context using a http method and request resource url
     *
     * @param url url of the requested resource
     * @param httpMethod http method
     */
    function RequestContext(url, httpMethod) {
        this.httpMethod = httpMethod;
        this.headers = { 'user-agent': version_1.userAgent };
        this.body = undefined;
        this.httpConfig = {};
        this.url = new url_parse_1.default(url, true);
    }
    /*
     * Returns the url set in the constructor including the query string
     *
     */
    RequestContext.prototype.getUrl = function () {
        return this.url.toString();
    };
    /**
     * Replaces the url set in the constructor with this url.
     *
     */
    RequestContext.prototype.setUrl = function (url) {
        this.url = new url_parse_1.default(url, true);
    };
    /**
     * Sets the body of the http request either as a string or FormData
     *
     * Note that setting a body on a HTTP GET, HEAD, DELETE, CONNECT or TRACE
     * request is discouraged.
     * https://httpwg.org/http-core/draft-ietf-httpbis-semantics-latest.html#rfc.section.7.3.1
     *
     * @param body the body of the request
     */
    RequestContext.prototype.setBody = function (body) {
        this.body = body;
    };
    RequestContext.prototype.getHttpMethod = function () {
        return this.httpMethod;
    };
    RequestContext.prototype.getHeaders = function () {
        return this.headers;
    };
    RequestContext.prototype.getBody = function () {
        return this.body;
    };
    RequestContext.prototype.setQueryParam = function (name, value) {
        var queryObj = this.url.query;
        queryObj[name] = value;
        this.url.set("query", queryObj);
    };
    /**
     * Sets a cookie with the name and value. NO check  for duplicate cookies is performed
     *
     */
    RequestContext.prototype.addCookie = function (name, value) {
        if (!this.headers["Cookie"]) {
            this.headers["Cookie"] = "";
        }
        this.headers["Cookie"] += name + "=" + value + "; ";
    };
    RequestContext.prototype.setHeaderParam = function (key, value) {
        this.headers[key] = value;
    };
    RequestContext.prototype.setHttpConfig = function (conf) {
        this.httpConfig = conf;
    };
    RequestContext.prototype.getHttpConfig = function () {
        return this.httpConfig;
    };
    return RequestContext;
}());
exports.RequestContext = RequestContext;
/**
 * Helper class to generate a `ResponseBody` from binary data
 */
var SelfDecodingBody = /** @class */ (function () {
    function SelfDecodingBody(dataSource) {
        this.dataSource = dataSource;
    }
    SelfDecodingBody.prototype.binary = function () {
        return this.dataSource;
    };
    SelfDecodingBody.prototype.text = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataSource];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.toString()];
                }
            });
        });
    };
    return SelfDecodingBody;
}());
exports.SelfDecodingBody = SelfDecodingBody;
var ResponseContext = /** @class */ (function () {
    function ResponseContext(httpStatusCode, headers, body) {
        this.httpStatusCode = httpStatusCode;
        this.headers = headers;
        this.body = body;
    }
    /**
     * Parse header value in the form `value; param1="value1"`
     *
     * E.g. for Content-Type or Content-Disposition
     * Parameter names are converted to lower case
     * The first parameter is returned with the key `""`
     */
    ResponseContext.prototype.getParsedHeader = function (headerName) {
        var result = {};
        if (!this.headers[headerName]) {
            return result;
        }
        var parameters = this.headers[headerName].split(";");
        for (var _i = 0, parameters_1 = parameters; _i < parameters_1.length; _i++) {
            var parameter = parameters_1[_i];
            var _a = parameter.split("=", 2), key = _a[0], value = _a[1];
            key = key.toLowerCase().trim();
            if (value === undefined) {
                result[""] = key;
            }
            else {
                value = value.trim();
                if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.substring(1, value.length - 1);
                }
                result[key] = value;
            }
        }
        return result;
    };
    ResponseContext.prototype.getBodyAsFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, fileName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.body.binary()];
                    case 1:
                        data = _a.sent();
                        fileName = this.getParsedHeader("content-disposition")["filename"] || "";
                        return [2 /*return*/, { data: data, name: fileName }];
                }
            });
        });
    };
    return ResponseContext;
}());
exports.ResponseContext = ResponseContext;
function wrapHttpLibrary(promiseHttpLibrary) {
    return {
        send: function (request) {
            return rxjsStub_1.from(promiseHttpLibrary.send(request));
        }
    };
}
exports.wrapHttpLibrary = wrapHttpLibrary;
//# sourceMappingURL=http.js.map