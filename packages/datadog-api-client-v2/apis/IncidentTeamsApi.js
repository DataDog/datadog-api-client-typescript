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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTeamsApiResponseProcessor = exports.IncidentTeamsApiRequestFactory = void 0;
// TODO: better import syntax?
var baseapi_1 = require("./baseapi");
var configuration_1 = require("../configuration");
var http_1 = require("../http/http");
var ObjectSerializer_1 = require("../models/ObjectSerializer");
var exception_1 = require("./exception");
var util_1 = require("../util");
/**
 * no description
 */
var IncidentTeamsApiRequestFactory = /** @class */ (function (_super) {
    __extends(IncidentTeamsApiRequestFactory, _super);
    function IncidentTeamsApiRequestFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a new incident team.
     * Create a new incident team
     * @param body Incident Team Payload.
     */
    IncidentTeamsApiRequestFactory.prototype.createIncidentTeam = function (body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'body' is not null or undefined
                        if (body === null || body === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling createIncidentTeam.');
                        }
                        localVarPath = '/api/v2/teams';
                        requestContext = configuration_1.getServer(config, 'IncidentTeamsApi.createIncidentTeam').makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "IncidentTeamCreateRequest", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = null;
                        // Apply auth methods
                        authMethod = config.authMethods["apiKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 2];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        authMethod = config.authMethods["appKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 4];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Deletes an existing incident team.
     * Delete an existing incident team
     * @param teamId The ID of the incident team.
     */
    IncidentTeamsApiRequestFactory.prototype.deleteIncidentTeam = function (teamId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'teamId' is not null or undefined
                        if (teamId === null || teamId === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter teamId was null or undefined when calling deleteIncidentTeam.');
                        }
                        localVarPath = '/api/v2/teams/{team_id}'
                            .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)));
                        requestContext = configuration_1.getServer(config, 'IncidentTeamsApi.deleteIncidentTeam').makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        authMethod = null;
                        // Apply auth methods
                        authMethod = config.authMethods["apiKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 2];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        authMethod = config.authMethods["appKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 4];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Get details of an incident team. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
     * Get details of an incident team
     * @param teamId The ID of the incident team.
     * @param include Specifies which types of related objects should be included in the response.
     */
    IncidentTeamsApiRequestFactory.prototype.getIncidentTeam = function (teamId, include, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'teamId' is not null or undefined
                        if (teamId === null || teamId === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter teamId was null or undefined when calling getIncidentTeam.');
                        }
                        localVarPath = '/api/v2/teams/{team_id}'
                            .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)));
                        requestContext = configuration_1.getServer(config, 'IncidentTeamsApi.getIncidentTeam').makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        // Query Params
                        if (include !== undefined) {
                            requestContext.setQueryParam("include", ObjectSerializer_1.ObjectSerializer.serialize(include, "IncidentRelatedObject", ""));
                        }
                        authMethod = null;
                        // Apply auth methods
                        authMethod = config.authMethods["apiKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 2];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        authMethod = config.authMethods["appKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 4];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Get all incident teams for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
     * Get a list of all incident teams
     * @param include Specifies which types of related objects should be included in the response.
     * @param pageSize Size for a given page.
     * @param pageOffset Specific offset to use as the beginning of the returned page.
     * @param filter A search query that filters teams by name.
     */
    IncidentTeamsApiRequestFactory.prototype.listIncidentTeams = function (include, pageSize, pageOffset, filter, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        localVarPath = '/api/v2/teams';
                        requestContext = configuration_1.getServer(config, 'IncidentTeamsApi.listIncidentTeams').makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        // Query Params
                        if (include !== undefined) {
                            requestContext.setQueryParam("include", ObjectSerializer_1.ObjectSerializer.serialize(include, "IncidentRelatedObject", ""));
                        }
                        if (pageSize !== undefined) {
                            requestContext.setQueryParam("page[size]", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", "int64"));
                        }
                        if (pageOffset !== undefined) {
                            requestContext.setQueryParam("page[offset]", ObjectSerializer_1.ObjectSerializer.serialize(pageOffset, "number", "int64"));
                        }
                        if (filter !== undefined) {
                            requestContext.setQueryParam("filter", ObjectSerializer_1.ObjectSerializer.serialize(filter, "string", ""));
                        }
                        authMethod = null;
                        // Apply auth methods
                        authMethod = config.authMethods["apiKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 2];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        authMethod = config.authMethods["appKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 4];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Updates an existing incident team. Only provide the attributes which should be updated as this request is a partial update.
     * Update an existing incident team
     * @param teamId The ID of the incident team.
     * @param body Incident Team Payload.
     */
    IncidentTeamsApiRequestFactory.prototype.updateIncidentTeam = function (teamId, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'teamId' is not null or undefined
                        if (teamId === null || teamId === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter teamId was null or undefined when calling updateIncidentTeam.');
                        }
                        // verify required parameter 'body' is not null or undefined
                        if (body === null || body === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling updateIncidentTeam.');
                        }
                        localVarPath = '/api/v2/teams/{team_id}'
                            .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)));
                        requestContext = configuration_1.getServer(config, 'IncidentTeamsApi.updateIncidentTeam').makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "IncidentTeamUpdateRequest", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = null;
                        // Apply auth methods
                        authMethod = config.authMethods["apiKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 2];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        authMethod = config.authMethods["appKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 4];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    return IncidentTeamsApiRequestFactory;
}(baseapi_1.BaseAPIRequestFactory));
exports.IncidentTeamsApiRequestFactory = IncidentTeamsApiRequestFactory;
var IncidentTeamsApiResponseProcessor = /** @class */ (function () {
    function IncidentTeamsApiResponseProcessor() {
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createIncidentTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
    IncidentTeamsApiResponseProcessor.prototype.createIncidentTeam = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_1, _a, _b, _c, _d, body_2, _e, _f, _g, _h, body_3, _j, _k, _l, _m, body_4, _o, _p, _q, _r, body_5, _s, _t, _u, _v, body_6, _w, _x, _y, _z, body;
            return __generator(this, function (_0) {
                switch (_0.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("201", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_1 = _b.apply(_a, [_d.apply(_c, [_0.sent(), contentType]), "IncidentTeamResponse", ""]);
                        return [2 /*return*/, body_1];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_2 = _f.apply(_e, [_h.apply(_g, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_2);
                    case 4:
                        if (!util_1.isCodeInRange("401", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_3 = _k.apply(_j, [_m.apply(_l, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(401, body_3);
                    case 6:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_4 = _p.apply(_o, [_r.apply(_q, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_4);
                    case 8:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body_5 = _t.apply(_s, [_v.apply(_u, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_5);
                    case 10:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 12];
                        _x = (_w = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _z = (_y = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 11:
                        body_6 = _x.apply(_w, [_z.apply(_y, [_0.sent(), contentType]), "IncidentTeamResponse", ""]);
                        return [2 /*return*/, body_6];
                    case 12:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIncidentTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
    IncidentTeamsApiResponseProcessor.prototype.deleteIncidentTeam = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_7, _a, _b, _c, _d, body_8, _e, _f, _g, _h, body_9, _j, _k, _l, _m, body_10, _o, _p, _q, _r, body_11, _s, _t, _u, _v, body;
            return __generator(this, function (_w) {
                switch (_w.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (util_1.isCodeInRange("204", response.httpStatusCode)) {
                            return [2 /*return*/];
                        }
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_7 = _b.apply(_a, [_d.apply(_c, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_7);
                    case 2:
                        if (!util_1.isCodeInRange("401", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_8 = _f.apply(_e, [_h.apply(_g, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(401, body_8);
                    case 4:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_9 = _k.apply(_j, [_m.apply(_l, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_9);
                    case 6:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_10 = _p.apply(_o, [_r.apply(_q, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_10);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body_11 = _t.apply(_s, [_v.apply(_u, [_w.sent(), contentType]), "void", ""]);
                        return [2 /*return*/, body_11];
                    case 10:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIncidentTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
    IncidentTeamsApiResponseProcessor.prototype.getIncidentTeam = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_12, _a, _b, _c, _d, body_13, _e, _f, _g, _h, body_14, _j, _k, _l, _m, body_15, _o, _p, _q, _r, body_16, _s, _t, _u, _v, body_17, _w, _x, _y, _z, body;
            return __generator(this, function (_0) {
                switch (_0.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_12 = _b.apply(_a, [_d.apply(_c, [_0.sent(), contentType]), "IncidentTeamResponse", ""]);
                        return [2 /*return*/, body_12];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_13 = _f.apply(_e, [_h.apply(_g, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_13);
                    case 4:
                        if (!util_1.isCodeInRange("401", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_14 = _k.apply(_j, [_m.apply(_l, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(401, body_14);
                    case 6:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_15 = _p.apply(_o, [_r.apply(_q, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_15);
                    case 8:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body_16 = _t.apply(_s, [_v.apply(_u, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_16);
                    case 10:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 12];
                        _x = (_w = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _z = (_y = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 11:
                        body_17 = _x.apply(_w, [_z.apply(_y, [_0.sent(), contentType]), "IncidentTeamResponse", ""]);
                        return [2 /*return*/, body_17];
                    case 12:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIncidentTeams
     * @throws ApiException if the response code was not in [200, 299]
     */
    IncidentTeamsApiResponseProcessor.prototype.listIncidentTeams = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_18, _a, _b, _c, _d, body_19, _e, _f, _g, _h, body_20, _j, _k, _l, _m, body_21, _o, _p, _q, _r, body_22, _s, _t, _u, _v, body_23, _w, _x, _y, _z, body;
            return __generator(this, function (_0) {
                switch (_0.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_18 = _b.apply(_a, [_d.apply(_c, [_0.sent(), contentType]), "IncidentTeamsResponse", ""]);
                        return [2 /*return*/, body_18];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_19 = _f.apply(_e, [_h.apply(_g, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_19);
                    case 4:
                        if (!util_1.isCodeInRange("401", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_20 = _k.apply(_j, [_m.apply(_l, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(401, body_20);
                    case 6:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_21 = _p.apply(_o, [_r.apply(_q, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_21);
                    case 8:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body_22 = _t.apply(_s, [_v.apply(_u, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_22);
                    case 10:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 12];
                        _x = (_w = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _z = (_y = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 11:
                        body_23 = _x.apply(_w, [_z.apply(_y, [_0.sent(), contentType]), "IncidentTeamsResponse", ""]);
                        return [2 /*return*/, body_23];
                    case 12:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateIncidentTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
    IncidentTeamsApiResponseProcessor.prototype.updateIncidentTeam = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_24, _a, _b, _c, _d, body_25, _e, _f, _g, _h, body_26, _j, _k, _l, _m, body_27, _o, _p, _q, _r, body_28, _s, _t, _u, _v, body_29, _w, _x, _y, _z, body;
            return __generator(this, function (_0) {
                switch (_0.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_24 = _b.apply(_a, [_d.apply(_c, [_0.sent(), contentType]), "IncidentTeamResponse", ""]);
                        return [2 /*return*/, body_24];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_25 = _f.apply(_e, [_h.apply(_g, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_25);
                    case 4:
                        if (!util_1.isCodeInRange("401", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_26 = _k.apply(_j, [_m.apply(_l, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(401, body_26);
                    case 6:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_27 = _p.apply(_o, [_r.apply(_q, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_27);
                    case 8:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body_28 = _t.apply(_s, [_v.apply(_u, [_0.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_28);
                    case 10:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 12];
                        _x = (_w = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _z = (_y = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 11:
                        body_29 = _x.apply(_w, [_z.apply(_y, [_0.sent(), contentType]), "IncidentTeamResponse", ""]);
                        return [2 /*return*/, body_29];
                    case 12:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    return IncidentTeamsApiResponseProcessor;
}());
exports.IncidentTeamsApiResponseProcessor = IncidentTeamsApiResponseProcessor;
//# sourceMappingURL=IncidentTeamsApi.js.map