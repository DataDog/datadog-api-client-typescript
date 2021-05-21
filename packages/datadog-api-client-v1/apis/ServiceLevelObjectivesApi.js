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
exports.ServiceLevelObjectivesApiResponseProcessor = exports.ServiceLevelObjectivesApiRequestFactory = void 0;
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
var ServiceLevelObjectivesApiRequestFactory = /** @class */ (function (_super) {
    __extends(ServiceLevelObjectivesApiRequestFactory, _super);
    function ServiceLevelObjectivesApiRequestFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check if an SLO can be safely deleted. For example, assure an SLO can be deleted without disrupting a dashboard.
     * Check if SLOs can be safely deleted
     * @param ids A comma separated list of the IDs of the service level objectives objects.
     */
    ServiceLevelObjectivesApiRequestFactory.prototype.checkCanDeleteSLO = function (ids, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'ids' is not null or undefined
                        if (ids === null || ids === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter ids was null or undefined when calling checkCanDeleteSLO.');
                        }
                        localVarPath = '/api/v1/slo/can_delete';
                        requestContext = configuration_1.getServer(config, 'ServiceLevelObjectivesApi.checkCanDeleteSLO').makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        // Query Params
                        if (ids !== undefined) {
                            requestContext.setQueryParam("ids", ObjectSerializer_1.ObjectSerializer.serialize(ids, "string", ""));
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
     * Create a service level objective object.
     * Create an SLO object
     * @param body Service level objective request object.
     */
    ServiceLevelObjectivesApiRequestFactory.prototype.createSLO = function (body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'body' is not null or undefined
                        if (body === null || body === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling createSLO.');
                        }
                        localVarPath = '/api/v1/slo';
                        requestContext = configuration_1.getServer(config, 'ServiceLevelObjectivesApi.createSLO').makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "ServiceLevelObjectiveRequest", ""), contentType);
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
     * Permanently delete the specified service level objective object.  If an SLO is used in a dashboard, the `DELETE /v1/slo/` endpoint returns a 409 conflict error because the SLO is referenced in a dashboard.
     * Delete an SLO
     * @param sloId The ID of the service level objective.
     * @param force Delete the monitor even if it&#39;s referenced by other resources (e.g. SLO, composite monitor).
     */
    ServiceLevelObjectivesApiRequestFactory.prototype.deleteSLO = function (sloId, force, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'sloId' is not null or undefined
                        if (sloId === null || sloId === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter sloId was null or undefined when calling deleteSLO.');
                        }
                        localVarPath = '/api/v1/slo/{slo_id}'
                            .replace('{' + 'slo_id' + '}', encodeURIComponent(String(sloId)));
                        requestContext = configuration_1.getServer(config, 'ServiceLevelObjectivesApi.deleteSLO').makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        // Query Params
                        if (force !== undefined) {
                            requestContext.setQueryParam("force", ObjectSerializer_1.ObjectSerializer.serialize(force, "string", ""));
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
     * Delete (or partially delete) multiple service level objective objects.  This endpoint facilitates deletion of one or more thresholds for one or more service level objective objects. If all thresholds are deleted, the service level objective object is deleted as well.
     * Bulk Delete SLO Timeframes
     * @param body Delete multiple service level objective objects request body.
     */
    ServiceLevelObjectivesApiRequestFactory.prototype.deleteSLOTimeframeInBulk = function (body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'body' is not null or undefined
                        if (body === null || body === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling deleteSLOTimeframeInBulk.');
                        }
                        localVarPath = '/api/v1/slo/bulk_delete';
                        requestContext = configuration_1.getServer(config, 'ServiceLevelObjectivesApi.deleteSLOTimeframeInBulk').makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "{ [key: string]: Array<SLOTimeframe>; }", ""), contentType);
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
     * Get a service level objective object.
     * Get an SLO's details
     * @param sloId The ID of the service level objective object.
     * @param withConfiguredAlertIds Get the IDs of SLO monitors that reference this SLO.
     */
    ServiceLevelObjectivesApiRequestFactory.prototype.getSLO = function (sloId, withConfiguredAlertIds, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'sloId' is not null or undefined
                        if (sloId === null || sloId === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter sloId was null or undefined when calling getSLO.');
                        }
                        localVarPath = '/api/v1/slo/{slo_id}'
                            .replace('{' + 'slo_id' + '}', encodeURIComponent(String(sloId)));
                        requestContext = configuration_1.getServer(config, 'ServiceLevelObjectivesApi.getSLO').makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        // Query Params
                        if (withConfiguredAlertIds !== undefined) {
                            requestContext.setQueryParam("with_configured_alert_ids", ObjectSerializer_1.ObjectSerializer.serialize(withConfiguredAlertIds, "boolean", ""));
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
     * Get a specific SLO’s history, regardless of its SLO type.  The detailed history data is structured according to the source data type. For example, metric data is included for event SLOs that use the metric source, and monitor SLO types include the monitor transition history.  **Note:** There are different response formats for event based and time based SLOs. Examples of both are shown.
     * Get an SLO's history
     * @param sloId The ID of the service level objective object.
     * @param fromTs The &#x60;from&#x60; timestamp for the query window in epoch seconds.
     * @param toTs The &#x60;to&#x60; timestamp for the query window in epoch seconds.
     * @param target The SLO target. If &#x60;target&#x60; is passed in, the response will include the error budget that remains.
     */
    ServiceLevelObjectivesApiRequestFactory.prototype.getSLOHistory = function (sloId, fromTs, toTs, target, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'sloId' is not null or undefined
                        if (sloId === null || sloId === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter sloId was null or undefined when calling getSLOHistory.');
                        }
                        // verify required parameter 'fromTs' is not null or undefined
                        if (fromTs === null || fromTs === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter fromTs was null or undefined when calling getSLOHistory.');
                        }
                        // verify required parameter 'toTs' is not null or undefined
                        if (toTs === null || toTs === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter toTs was null or undefined when calling getSLOHistory.');
                        }
                        localVarPath = '/api/v1/slo/{slo_id}/history'
                            .replace('{' + 'slo_id' + '}', encodeURIComponent(String(sloId)));
                        requestContext = configuration_1.getServer(config, 'ServiceLevelObjectivesApi.getSLOHistory').makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        // Query Params
                        if (fromTs !== undefined) {
                            requestContext.setQueryParam("from_ts", ObjectSerializer_1.ObjectSerializer.serialize(fromTs, "number", "int64"));
                        }
                        if (toTs !== undefined) {
                            requestContext.setQueryParam("to_ts", ObjectSerializer_1.ObjectSerializer.serialize(toTs, "number", "int64"));
                        }
                        if (target !== undefined) {
                            requestContext.setQueryParam("target", ObjectSerializer_1.ObjectSerializer.serialize(target, "number", "double"));
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
     * Get a list of service level objective objects for your organization.
     * Get all SLOs
     * @param ids A comma separated list of the IDs of the service level objectives objects.
     * @param query The query string to filter results based on SLO names.
     * @param tagsQuery The query string to filter results based on a single SLO tag.
     * @param metricsQuery The query string to filter results based on SLO numerator and denominator.
     */
    ServiceLevelObjectivesApiRequestFactory.prototype.listSLOs = function (ids, query, tagsQuery, metricsQuery, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        localVarPath = '/api/v1/slo';
                        requestContext = configuration_1.getServer(config, 'ServiceLevelObjectivesApi.listSLOs').makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        // Query Params
                        if (ids !== undefined) {
                            requestContext.setQueryParam("ids", ObjectSerializer_1.ObjectSerializer.serialize(ids, "string", ""));
                        }
                        if (query !== undefined) {
                            requestContext.setQueryParam("query", ObjectSerializer_1.ObjectSerializer.serialize(query, "string", ""));
                        }
                        if (tagsQuery !== undefined) {
                            requestContext.setQueryParam("tags_query", ObjectSerializer_1.ObjectSerializer.serialize(tagsQuery, "string", ""));
                        }
                        if (metricsQuery !== undefined) {
                            requestContext.setQueryParam("metrics_query", ObjectSerializer_1.ObjectSerializer.serialize(metricsQuery, "string", ""));
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
     * Update the specified service level objective object.
     * Update an SLO
     * @param sloId The ID of the service level objective object.
     * @param body The edited service level objective request object.
     */
    ServiceLevelObjectivesApiRequestFactory.prototype.updateSLO = function (sloId, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'sloId' is not null or undefined
                        if (sloId === null || sloId === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter sloId was null or undefined when calling updateSLO.');
                        }
                        // verify required parameter 'body' is not null or undefined
                        if (body === null || body === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling updateSLO.');
                        }
                        localVarPath = '/api/v1/slo/{slo_id}'
                            .replace('{' + 'slo_id' + '}', encodeURIComponent(String(sloId)));
                        requestContext = configuration_1.getServer(config, 'ServiceLevelObjectivesApi.updateSLO').makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "ServiceLevelObjective", ""), contentType);
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
    return ServiceLevelObjectivesApiRequestFactory;
}(baseapi_1.BaseAPIRequestFactory));
exports.ServiceLevelObjectivesApiRequestFactory = ServiceLevelObjectivesApiRequestFactory;
var ServiceLevelObjectivesApiResponseProcessor = /** @class */ (function () {
    function ServiceLevelObjectivesApiResponseProcessor() {
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkCanDeleteSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
    ServiceLevelObjectivesApiResponseProcessor.prototype.checkCanDeleteSLO = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_1, _a, _b, _c, _d, body_2, _e, _f, _g, _h, body_3, _j, _k, _l, _m, body_4, _o, _p, _q, _r, body_5, _s, _t, _u, _v, body;
            return __generator(this, function (_w) {
                switch (_w.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_1 = _b.apply(_a, [_d.apply(_c, [_w.sent(), contentType]), "CheckCanDeleteSLOResponse", ""]);
                        return [2 /*return*/, body_1];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_2 = _f.apply(_e, [_h.apply(_g, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_2);
                    case 4:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_3 = _k.apply(_j, [_m.apply(_l, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_3);
                    case 6:
                        if (!util_1.isCodeInRange("409", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_4 = _p.apply(_o, [_r.apply(_q, [_w.sent(), contentType]), "CheckCanDeleteSLOResponse", ""]);
                        throw new exception_1.ApiException(409, body_4);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body_5 = _t.apply(_s, [_v.apply(_u, [_w.sent(), contentType]), "CheckCanDeleteSLOResponse", ""]);
                        return [2 /*return*/, body_5];
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
     * @params response Response returned by the server for a request to createSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
    ServiceLevelObjectivesApiResponseProcessor.prototype.createSLO = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_6, _a, _b, _c, _d, body_7, _e, _f, _g, _h, body_8, _j, _k, _l, _m, body_9, _o, _p, _q, _r, body;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_6 = _b.apply(_a, [_d.apply(_c, [_s.sent(), contentType]), "SLOListResponse", ""]);
                        return [2 /*return*/, body_6];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_7 = _f.apply(_e, [_h.apply(_g, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_7);
                    case 4:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_8 = _k.apply(_j, [_m.apply(_l, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_8);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_9 = _p.apply(_o, [_r.apply(_q, [_s.sent(), contentType]), "SLOListResponse", ""]);
                        return [2 /*return*/, body_9];
                    case 8:
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
     * @params response Response returned by the server for a request to deleteSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
    ServiceLevelObjectivesApiResponseProcessor.prototype.deleteSLO = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_10, _a, _b, _c, _d, body_11, _e, _f, _g, _h, body_12, _j, _k, _l, _m, body_13, _o, _p, _q, _r, body_14, _s, _t, _u, _v, body;
            return __generator(this, function (_w) {
                switch (_w.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_10 = _b.apply(_a, [_d.apply(_c, [_w.sent(), contentType]), "SLODeleteResponse", ""]);
                        return [2 /*return*/, body_10];
                    case 2:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_11 = _f.apply(_e, [_h.apply(_g, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_11);
                    case 4:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_12 = _k.apply(_j, [_m.apply(_l, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_12);
                    case 6:
                        if (!util_1.isCodeInRange("409", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_13 = _p.apply(_o, [_r.apply(_q, [_w.sent(), contentType]), "SLODeleteResponse", ""]);
                        throw new exception_1.ApiException(409, body_13);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body_14 = _t.apply(_s, [_v.apply(_u, [_w.sent(), contentType]), "SLODeleteResponse", ""]);
                        return [2 /*return*/, body_14];
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
     * @params response Response returned by the server for a request to deleteSLOTimeframeInBulk
     * @throws ApiException if the response code was not in [200, 299]
     */
    ServiceLevelObjectivesApiResponseProcessor.prototype.deleteSLOTimeframeInBulk = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_15, _a, _b, _c, _d, body_16, _e, _f, _g, _h, body_17, _j, _k, _l, _m, body_18, _o, _p, _q, _r, body;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_15 = _b.apply(_a, [_d.apply(_c, [_s.sent(), contentType]), "SLOBulkDeleteResponse", ""]);
                        return [2 /*return*/, body_15];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_16 = _f.apply(_e, [_h.apply(_g, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_16);
                    case 4:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_17 = _k.apply(_j, [_m.apply(_l, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_17);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_18 = _p.apply(_o, [_r.apply(_q, [_s.sent(), contentType]), "SLOBulkDeleteResponse", ""]);
                        return [2 /*return*/, body_18];
                    case 8:
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
     * @params response Response returned by the server for a request to getSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
    ServiceLevelObjectivesApiResponseProcessor.prototype.getSLO = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_19, _a, _b, _c, _d, body_20, _e, _f, _g, _h, body_21, _j, _k, _l, _m, body_22, _o, _p, _q, _r, body;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_19 = _b.apply(_a, [_d.apply(_c, [_s.sent(), contentType]), "SLOResponse", ""]);
                        return [2 /*return*/, body_19];
                    case 2:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_20 = _f.apply(_e, [_h.apply(_g, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_20);
                    case 4:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_21 = _k.apply(_j, [_m.apply(_l, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_21);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_22 = _p.apply(_o, [_r.apply(_q, [_s.sent(), contentType]), "SLOResponse", ""]);
                        return [2 /*return*/, body_22];
                    case 8:
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
     * @params response Response returned by the server for a request to getSLOHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
    ServiceLevelObjectivesApiResponseProcessor.prototype.getSLOHistory = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_23, _a, _b, _c, _d, body_24, _e, _f, _g, _h, body_25, _j, _k, _l, _m, body_26, _o, _p, _q, _r, body_27, _s, _t, _u, _v, body;
            return __generator(this, function (_w) {
                switch (_w.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_23 = _b.apply(_a, [_d.apply(_c, [_w.sent(), contentType]), "SLOHistoryResponse", ""]);
                        return [2 /*return*/, body_23];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_24 = _f.apply(_e, [_h.apply(_g, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_24);
                    case 4:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_25 = _k.apply(_j, [_m.apply(_l, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_25);
                    case 6:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_26 = _p.apply(_o, [_r.apply(_q, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_26);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body_27 = _t.apply(_s, [_v.apply(_u, [_w.sent(), contentType]), "SLOHistoryResponse", ""]);
                        return [2 /*return*/, body_27];
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
     * @params response Response returned by the server for a request to listSLOs
     * @throws ApiException if the response code was not in [200, 299]
     */
    ServiceLevelObjectivesApiResponseProcessor.prototype.listSLOs = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_28, _a, _b, _c, _d, body_29, _e, _f, _g, _h, body_30, _j, _k, _l, _m, body_31, _o, _p, _q, _r, body_32, _s, _t, _u, _v, body;
            return __generator(this, function (_w) {
                switch (_w.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_28 = _b.apply(_a, [_d.apply(_c, [_w.sent(), contentType]), "SLOListResponse", ""]);
                        return [2 /*return*/, body_28];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_29 = _f.apply(_e, [_h.apply(_g, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_29);
                    case 4:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_30 = _k.apply(_j, [_m.apply(_l, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_30);
                    case 6:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_31 = _p.apply(_o, [_r.apply(_q, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_31);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body_32 = _t.apply(_s, [_v.apply(_u, [_w.sent(), contentType]), "SLOListResponse", ""]);
                        return [2 /*return*/, body_32];
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
     * @params response Response returned by the server for a request to updateSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
    ServiceLevelObjectivesApiResponseProcessor.prototype.updateSLO = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_33, _a, _b, _c, _d, body_34, _e, _f, _g, _h, body_35, _j, _k, _l, _m, body_36, _o, _p, _q, _r, body_37, _s, _t, _u, _v, body;
            return __generator(this, function (_w) {
                switch (_w.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_33 = _b.apply(_a, [_d.apply(_c, [_w.sent(), contentType]), "SLOListResponse", ""]);
                        return [2 /*return*/, body_33];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_34 = _f.apply(_e, [_h.apply(_g, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_34);
                    case 4:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_35 = _k.apply(_j, [_m.apply(_l, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_35);
                    case 6:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_36 = _p.apply(_o, [_r.apply(_q, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_36);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body_37 = _t.apply(_s, [_v.apply(_u, [_w.sent(), contentType]), "SLOListResponse", ""]);
                        return [2 /*return*/, body_37];
                    case 10:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    return ServiceLevelObjectivesApiResponseProcessor;
}());
exports.ServiceLevelObjectivesApiResponseProcessor = ServiceLevelObjectivesApiResponseProcessor;
//# sourceMappingURL=ServiceLevelObjectivesApi.js.map