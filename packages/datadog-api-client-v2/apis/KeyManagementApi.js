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
exports.KeyManagementApiResponseProcessor = exports.KeyManagementApiRequestFactory = void 0;
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
var KeyManagementApiRequestFactory = /** @class */ (function (_super) {
    __extends(KeyManagementApiRequestFactory, _super);
    function KeyManagementApiRequestFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create an API key.
     * Create an API key
     * @param body
     */
    KeyManagementApiRequestFactory.prototype.createAPIKey = function (body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'body' is not null or undefined
                        if (body === null || body === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling createAPIKey.');
                        }
                        localVarPath = '/api/v2/api_keys';
                        requestContext = configuration_1.getServer(config, 'KeyManagementApi.createAPIKey').makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "APIKeyCreateRequest", ""), contentType);
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
     * Create an application key for current user
     * Create an application key for current user
     * @param body
     */
    KeyManagementApiRequestFactory.prototype.createCurrentUserApplicationKey = function (body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'body' is not null or undefined
                        if (body === null || body === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling createCurrentUserApplicationKey.');
                        }
                        localVarPath = '/api/v2/current_user/application_keys';
                        requestContext = configuration_1.getServer(config, 'KeyManagementApi.createCurrentUserApplicationKey').makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "ApplicationKeyCreateRequest", ""), contentType);
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
     * Delete an API key.
     * Delete an API key
     * @param apiKeyId The ID of the API key.
     */
    KeyManagementApiRequestFactory.prototype.deleteAPIKey = function (apiKeyId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'apiKeyId' is not null or undefined
                        if (apiKeyId === null || apiKeyId === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter apiKeyId was null or undefined when calling deleteAPIKey.');
                        }
                        localVarPath = '/api/v2/api_keys/{api_key_id}'
                            .replace('{' + 'api_key_id' + '}', encodeURIComponent(String(apiKeyId)));
                        requestContext = configuration_1.getServer(config, 'KeyManagementApi.deleteAPIKey').makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
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
     * Delete an application key
     * Delete an application key
     * @param appKeyId The ID of the application key.
     */
    KeyManagementApiRequestFactory.prototype.deleteApplicationKey = function (appKeyId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'appKeyId' is not null or undefined
                        if (appKeyId === null || appKeyId === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter appKeyId was null or undefined when calling deleteApplicationKey.');
                        }
                        localVarPath = '/api/v2/application_keys/{app_key_id}'
                            .replace('{' + 'app_key_id' + '}', encodeURIComponent(String(appKeyId)));
                        requestContext = configuration_1.getServer(config, 'KeyManagementApi.deleteApplicationKey').makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
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
     * Delete an application key owned by current user
     * Delete an application key owned by current user
     * @param appKeyId The ID of the application key.
     */
    KeyManagementApiRequestFactory.prototype.deleteCurrentUserApplicationKey = function (appKeyId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'appKeyId' is not null or undefined
                        if (appKeyId === null || appKeyId === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter appKeyId was null or undefined when calling deleteCurrentUserApplicationKey.');
                        }
                        localVarPath = '/api/v2/current_user/application_keys/{app_key_id}'
                            .replace('{' + 'app_key_id' + '}', encodeURIComponent(String(appKeyId)));
                        requestContext = configuration_1.getServer(config, 'KeyManagementApi.deleteCurrentUserApplicationKey').makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
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
     * Get an API key.
     * Get API key
     * @param apiKeyId The ID of the API key.
     * @param include Comma separated list of resource paths for related resources to include in the response. Supported resource paths are &#x60;created_by&#x60; and &#x60;modified_by&#x60;.
     */
    KeyManagementApiRequestFactory.prototype.getAPIKey = function (apiKeyId, include, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'apiKeyId' is not null or undefined
                        if (apiKeyId === null || apiKeyId === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter apiKeyId was null or undefined when calling getAPIKey.');
                        }
                        localVarPath = '/api/v2/api_keys/{api_key_id}'
                            .replace('{' + 'api_key_id' + '}', encodeURIComponent(String(apiKeyId)));
                        requestContext = configuration_1.getServer(config, 'KeyManagementApi.getAPIKey').makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        // Query Params
                        if (include !== undefined) {
                            requestContext.setQueryParam("include", ObjectSerializer_1.ObjectSerializer.serialize(include, "string", ""));
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
     * Get an application key owned by current user
     * Get one application key owned by current user
     * @param appKeyId The ID of the application key.
     */
    KeyManagementApiRequestFactory.prototype.getCurrentUserApplicationKey = function (appKeyId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'appKeyId' is not null or undefined
                        if (appKeyId === null || appKeyId === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter appKeyId was null or undefined when calling getCurrentUserApplicationKey.');
                        }
                        localVarPath = '/api/v2/current_user/application_keys/{app_key_id}'
                            .replace('{' + 'app_key_id' + '}', encodeURIComponent(String(appKeyId)));
                        requestContext = configuration_1.getServer(config, 'KeyManagementApi.getCurrentUserApplicationKey').makeRequestContext(localVarPath, http_1.HttpMethod.GET);
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
     * List all API keys available for your account.
     * Get all API keys
     * @param pageSize Size for a given page.
     * @param pageNumber Specific page number to return.
     * @param sort API key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign.
     * @param filter Filter API keys by the specified string.
     * @param filterCreatedAtStart Only include API keys created on or after the specified date.
     * @param filterCreatedAtEnd Only include API keys created on or before the specified date.
     * @param filterModifiedAtStart Only include API keys modified on or after the specified date.
     * @param filterModifiedAtEnd Only include API keys modified on or before the specified date.
     * @param include Comma separated list of resource paths for related resources to include in the response. Supported resource paths are &#x60;created_by&#x60; and &#x60;modified_by&#x60;.
     */
    KeyManagementApiRequestFactory.prototype.listAPIKeys = function (pageSize, pageNumber, sort, filter, filterCreatedAtStart, filterCreatedAtEnd, filterModifiedAtStart, filterModifiedAtEnd, include, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        localVarPath = '/api/v2/api_keys';
                        requestContext = configuration_1.getServer(config, 'KeyManagementApi.listAPIKeys').makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        // Query Params
                        if (pageSize !== undefined) {
                            requestContext.setQueryParam("page[size]", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", "int64"));
                        }
                        if (pageNumber !== undefined) {
                            requestContext.setQueryParam("page[number]", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", "int64"));
                        }
                        if (sort !== undefined) {
                            requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "APIKeysSort", ""));
                        }
                        if (filter !== undefined) {
                            requestContext.setQueryParam("filter", ObjectSerializer_1.ObjectSerializer.serialize(filter, "string", ""));
                        }
                        if (filterCreatedAtStart !== undefined) {
                            requestContext.setQueryParam("filter[created_at][start]", ObjectSerializer_1.ObjectSerializer.serialize(filterCreatedAtStart, "string", ""));
                        }
                        if (filterCreatedAtEnd !== undefined) {
                            requestContext.setQueryParam("filter[created_at][end]", ObjectSerializer_1.ObjectSerializer.serialize(filterCreatedAtEnd, "string", ""));
                        }
                        if (filterModifiedAtStart !== undefined) {
                            requestContext.setQueryParam("filter[modified_at][start]", ObjectSerializer_1.ObjectSerializer.serialize(filterModifiedAtStart, "string", ""));
                        }
                        if (filterModifiedAtEnd !== undefined) {
                            requestContext.setQueryParam("filter[modified_at][end]", ObjectSerializer_1.ObjectSerializer.serialize(filterModifiedAtEnd, "string", ""));
                        }
                        if (include !== undefined) {
                            requestContext.setQueryParam("include", ObjectSerializer_1.ObjectSerializer.serialize(include, "string", ""));
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
     * List all application keys available for your org
     * Get all application keys
     * @param pageSize Size for a given page.
     * @param pageNumber Specific page number to return.
     * @param sort Application key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign.
     * @param filter Filter application keys by the specified string.
     * @param filterCreatedAtStart Only include application keys created on or after the specified date.
     * @param filterCreatedAtEnd Only include application keys created on or before the specified date.
     */
    KeyManagementApiRequestFactory.prototype.listApplicationKeys = function (pageSize, pageNumber, sort, filter, filterCreatedAtStart, filterCreatedAtEnd, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        localVarPath = '/api/v2/application_keys';
                        requestContext = configuration_1.getServer(config, 'KeyManagementApi.listApplicationKeys').makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        // Query Params
                        if (pageSize !== undefined) {
                            requestContext.setQueryParam("page[size]", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", "int64"));
                        }
                        if (pageNumber !== undefined) {
                            requestContext.setQueryParam("page[number]", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", "int64"));
                        }
                        if (sort !== undefined) {
                            requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "ApplicationKeysSort", ""));
                        }
                        if (filter !== undefined) {
                            requestContext.setQueryParam("filter", ObjectSerializer_1.ObjectSerializer.serialize(filter, "string", ""));
                        }
                        if (filterCreatedAtStart !== undefined) {
                            requestContext.setQueryParam("filter[created_at][start]", ObjectSerializer_1.ObjectSerializer.serialize(filterCreatedAtStart, "string", ""));
                        }
                        if (filterCreatedAtEnd !== undefined) {
                            requestContext.setQueryParam("filter[created_at][end]", ObjectSerializer_1.ObjectSerializer.serialize(filterCreatedAtEnd, "string", ""));
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
     * List all application keys available for current user
     * Get all application keys owned by current user
     * @param pageSize Size for a given page.
     * @param pageNumber Specific page number to return.
     * @param sort Application key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign.
     * @param filter Filter application keys by the specified string.
     * @param filterCreatedAtStart Only include application keys created on or after the specified date.
     * @param filterCreatedAtEnd Only include application keys created on or before the specified date.
     */
    KeyManagementApiRequestFactory.prototype.listCurrentUserApplicationKeys = function (pageSize, pageNumber, sort, filter, filterCreatedAtStart, filterCreatedAtEnd, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        localVarPath = '/api/v2/current_user/application_keys';
                        requestContext = configuration_1.getServer(config, 'KeyManagementApi.listCurrentUserApplicationKeys').makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        // Query Params
                        if (pageSize !== undefined) {
                            requestContext.setQueryParam("page[size]", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", "int64"));
                        }
                        if (pageNumber !== undefined) {
                            requestContext.setQueryParam("page[number]", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", "int64"));
                        }
                        if (sort !== undefined) {
                            requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "ApplicationKeysSort", ""));
                        }
                        if (filter !== undefined) {
                            requestContext.setQueryParam("filter", ObjectSerializer_1.ObjectSerializer.serialize(filter, "string", ""));
                        }
                        if (filterCreatedAtStart !== undefined) {
                            requestContext.setQueryParam("filter[created_at][start]", ObjectSerializer_1.ObjectSerializer.serialize(filterCreatedAtStart, "string", ""));
                        }
                        if (filterCreatedAtEnd !== undefined) {
                            requestContext.setQueryParam("filter[created_at][end]", ObjectSerializer_1.ObjectSerializer.serialize(filterCreatedAtEnd, "string", ""));
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
     * Update an API key.
     * Edit an API key
     * @param apiKeyId The ID of the API key.
     * @param body
     */
    KeyManagementApiRequestFactory.prototype.updateAPIKey = function (apiKeyId, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'apiKeyId' is not null or undefined
                        if (apiKeyId === null || apiKeyId === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter apiKeyId was null or undefined when calling updateAPIKey.');
                        }
                        // verify required parameter 'body' is not null or undefined
                        if (body === null || body === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling updateAPIKey.');
                        }
                        localVarPath = '/api/v2/api_keys/{api_key_id}'
                            .replace('{' + 'api_key_id' + '}', encodeURIComponent(String(apiKeyId)));
                        requestContext = configuration_1.getServer(config, 'KeyManagementApi.updateAPIKey').makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "APIKeyUpdateRequest", ""), contentType);
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
     * Edit an application key
     * Edit an application key
     * @param appKeyId The ID of the application key.
     * @param body
     */
    KeyManagementApiRequestFactory.prototype.updateApplicationKey = function (appKeyId, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'appKeyId' is not null or undefined
                        if (appKeyId === null || appKeyId === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter appKeyId was null or undefined when calling updateApplicationKey.');
                        }
                        // verify required parameter 'body' is not null or undefined
                        if (body === null || body === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling updateApplicationKey.');
                        }
                        localVarPath = '/api/v2/application_keys/{app_key_id}'
                            .replace('{' + 'app_key_id' + '}', encodeURIComponent(String(appKeyId)));
                        requestContext = configuration_1.getServer(config, 'KeyManagementApi.updateApplicationKey').makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "ApplicationKeyUpdateRequest", ""), contentType);
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
     * Edit an application key owned by current user
     * Edit an application key owned by current user
     * @param appKeyId The ID of the application key.
     * @param body
     */
    KeyManagementApiRequestFactory.prototype.updateCurrentUserApplicationKey = function (appKeyId, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'appKeyId' is not null or undefined
                        if (appKeyId === null || appKeyId === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter appKeyId was null or undefined when calling updateCurrentUserApplicationKey.');
                        }
                        // verify required parameter 'body' is not null or undefined
                        if (body === null || body === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling updateCurrentUserApplicationKey.');
                        }
                        localVarPath = '/api/v2/current_user/application_keys/{app_key_id}'
                            .replace('{' + 'app_key_id' + '}', encodeURIComponent(String(appKeyId)));
                        requestContext = configuration_1.getServer(config, 'KeyManagementApi.updateCurrentUserApplicationKey').makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "ApplicationKeyUpdateRequest", ""), contentType);
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
    return KeyManagementApiRequestFactory;
}(baseapi_1.BaseAPIRequestFactory));
exports.KeyManagementApiRequestFactory = KeyManagementApiRequestFactory;
var KeyManagementApiResponseProcessor = /** @class */ (function () {
    function KeyManagementApiResponseProcessor() {
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    KeyManagementApiResponseProcessor.prototype.createAPIKey = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_1, _a, _b, _c, _d, body_2, _e, _f, _g, _h, body_3, _j, _k, _l, _m, body_4, _o, _p, _q, _r, body;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("201", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_1 = _b.apply(_a, [_d.apply(_c, [_s.sent(), contentType]), "APIKeyResponse", ""]);
                        return [2 /*return*/, body_1];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_2 = _f.apply(_e, [_h.apply(_g, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_2);
                    case 4:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_3 = _k.apply(_j, [_m.apply(_l, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_3);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_4 = _p.apply(_o, [_r.apply(_q, [_s.sent(), contentType]), "APIKeyResponse", ""]);
                        return [2 /*return*/, body_4];
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
     * @params response Response returned by the server for a request to createCurrentUserApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    KeyManagementApiResponseProcessor.prototype.createCurrentUserApplicationKey = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_5, _a, _b, _c, _d, body_6, _e, _f, _g, _h, body_7, _j, _k, _l, _m, body_8, _o, _p, _q, _r, body;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("201", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_5 = _b.apply(_a, [_d.apply(_c, [_s.sent(), contentType]), "ApplicationKeyResponse", ""]);
                        return [2 /*return*/, body_5];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_6 = _f.apply(_e, [_h.apply(_g, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_6);
                    case 4:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_7 = _k.apply(_j, [_m.apply(_l, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_7);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_8 = _p.apply(_o, [_r.apply(_q, [_s.sent(), contentType]), "ApplicationKeyResponse", ""]);
                        return [2 /*return*/, body_8];
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
     * @params response Response returned by the server for a request to deleteAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    KeyManagementApiResponseProcessor.prototype.deleteAPIKey = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_9, _a, _b, _c, _d, body_10, _e, _f, _g, _h, body_11, _j, _k, _l, _m, body;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (util_1.isCodeInRange("204", response.httpStatusCode)) {
                            return [2 /*return*/];
                        }
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_9 = _b.apply(_a, [_d.apply(_c, [_o.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_9);
                    case 2:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_10 = _f.apply(_e, [_h.apply(_g, [_o.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_10);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_11 = _k.apply(_j, [_m.apply(_l, [_o.sent(), contentType]), "void", ""]);
                        return [2 /*return*/, body_11];
                    case 6:
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
     * @params response Response returned by the server for a request to deleteApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    KeyManagementApiResponseProcessor.prototype.deleteApplicationKey = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_12, _a, _b, _c, _d, body_13, _e, _f, _g, _h, body_14, _j, _k, _l, _m, body;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (util_1.isCodeInRange("204", response.httpStatusCode)) {
                            return [2 /*return*/];
                        }
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_12 = _b.apply(_a, [_d.apply(_c, [_o.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_12);
                    case 2:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_13 = _f.apply(_e, [_h.apply(_g, [_o.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_13);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_14 = _k.apply(_j, [_m.apply(_l, [_o.sent(), contentType]), "void", ""]);
                        return [2 /*return*/, body_14];
                    case 6:
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
     * @params response Response returned by the server for a request to deleteCurrentUserApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    KeyManagementApiResponseProcessor.prototype.deleteCurrentUserApplicationKey = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_15, _a, _b, _c, _d, body_16, _e, _f, _g, _h, body_17, _j, _k, _l, _m, body;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (util_1.isCodeInRange("204", response.httpStatusCode)) {
                            return [2 /*return*/];
                        }
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_15 = _b.apply(_a, [_d.apply(_c, [_o.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_15);
                    case 2:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_16 = _f.apply(_e, [_h.apply(_g, [_o.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_16);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_17 = _k.apply(_j, [_m.apply(_l, [_o.sent(), contentType]), "void", ""]);
                        return [2 /*return*/, body_17];
                    case 6:
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
     * @params response Response returned by the server for a request to getAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    KeyManagementApiResponseProcessor.prototype.getAPIKey = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_18, _a, _b, _c, _d, body_19, _e, _f, _g, _h, body_20, _j, _k, _l, _m, body_21, _o, _p, _q, _r, body;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_18 = _b.apply(_a, [_d.apply(_c, [_s.sent(), contentType]), "APIKeyResponse", ""]);
                        return [2 /*return*/, body_18];
                    case 2:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_19 = _f.apply(_e, [_h.apply(_g, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_19);
                    case 4:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_20 = _k.apply(_j, [_m.apply(_l, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_20);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_21 = _p.apply(_o, [_r.apply(_q, [_s.sent(), contentType]), "APIKeyResponse", ""]);
                        return [2 /*return*/, body_21];
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
     * @params response Response returned by the server for a request to getCurrentUserApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    KeyManagementApiResponseProcessor.prototype.getCurrentUserApplicationKey = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_22, _a, _b, _c, _d, body_23, _e, _f, _g, _h, body_24, _j, _k, _l, _m, body_25, _o, _p, _q, _r, body;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_22 = _b.apply(_a, [_d.apply(_c, [_s.sent(), contentType]), "ApplicationKeyResponse", ""]);
                        return [2 /*return*/, body_22];
                    case 2:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_23 = _f.apply(_e, [_h.apply(_g, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_23);
                    case 4:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_24 = _k.apply(_j, [_m.apply(_l, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_24);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_25 = _p.apply(_o, [_r.apply(_q, [_s.sent(), contentType]), "ApplicationKeyResponse", ""]);
                        return [2 /*return*/, body_25];
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
     * @params response Response returned by the server for a request to listAPIKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    KeyManagementApiResponseProcessor.prototype.listAPIKeys = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_26, _a, _b, _c, _d, body_27, _e, _f, _g, _h, body_28, _j, _k, _l, _m, body_29, _o, _p, _q, _r, body;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_26 = _b.apply(_a, [_d.apply(_c, [_s.sent(), contentType]), "APIKeysResponse", ""]);
                        return [2 /*return*/, body_26];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_27 = _f.apply(_e, [_h.apply(_g, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_27);
                    case 4:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_28 = _k.apply(_j, [_m.apply(_l, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_28);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_29 = _p.apply(_o, [_r.apply(_q, [_s.sent(), contentType]), "APIKeysResponse", ""]);
                        return [2 /*return*/, body_29];
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
     * @params response Response returned by the server for a request to listApplicationKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    KeyManagementApiResponseProcessor.prototype.listApplicationKeys = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_30, _a, _b, _c, _d, body_31, _e, _f, _g, _h, body_32, _j, _k, _l, _m, body_33, _o, _p, _q, _r, body_34, _s, _t, _u, _v, body;
            return __generator(this, function (_w) {
                switch (_w.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_30 = _b.apply(_a, [_d.apply(_c, [_w.sent(), contentType]), "ListApplicationKeysResponse", ""]);
                        return [2 /*return*/, body_30];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_31 = _f.apply(_e, [_h.apply(_g, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_31);
                    case 4:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_32 = _k.apply(_j, [_m.apply(_l, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_32);
                    case 6:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_33 = _p.apply(_o, [_r.apply(_q, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_33);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body_34 = _t.apply(_s, [_v.apply(_u, [_w.sent(), contentType]), "ListApplicationKeysResponse", ""]);
                        return [2 /*return*/, body_34];
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
     * @params response Response returned by the server for a request to listCurrentUserApplicationKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    KeyManagementApiResponseProcessor.prototype.listCurrentUserApplicationKeys = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_35, _a, _b, _c, _d, body_36, _e, _f, _g, _h, body_37, _j, _k, _l, _m, body_38, _o, _p, _q, _r, body_39, _s, _t, _u, _v, body;
            return __generator(this, function (_w) {
                switch (_w.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_35 = _b.apply(_a, [_d.apply(_c, [_w.sent(), contentType]), "ListApplicationKeysResponse", ""]);
                        return [2 /*return*/, body_35];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_36 = _f.apply(_e, [_h.apply(_g, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_36);
                    case 4:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_37 = _k.apply(_j, [_m.apply(_l, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_37);
                    case 6:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_38 = _p.apply(_o, [_r.apply(_q, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_38);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body_39 = _t.apply(_s, [_v.apply(_u, [_w.sent(), contentType]), "ListApplicationKeysResponse", ""]);
                        return [2 /*return*/, body_39];
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
     * @params response Response returned by the server for a request to updateAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    KeyManagementApiResponseProcessor.prototype.updateAPIKey = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_40, _a, _b, _c, _d, body_41, _e, _f, _g, _h, body_42, _j, _k, _l, _m, body_43, _o, _p, _q, _r, body_44, _s, _t, _u, _v, body;
            return __generator(this, function (_w) {
                switch (_w.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_40 = _b.apply(_a, [_d.apply(_c, [_w.sent(), contentType]), "APIKeyResponse", ""]);
                        return [2 /*return*/, body_40];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_41 = _f.apply(_e, [_h.apply(_g, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_41);
                    case 4:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_42 = _k.apply(_j, [_m.apply(_l, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_42);
                    case 6:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_43 = _p.apply(_o, [_r.apply(_q, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_43);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body_44 = _t.apply(_s, [_v.apply(_u, [_w.sent(), contentType]), "APIKeyResponse", ""]);
                        return [2 /*return*/, body_44];
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
     * @params response Response returned by the server for a request to updateApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    KeyManagementApiResponseProcessor.prototype.updateApplicationKey = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_45, _a, _b, _c, _d, body_46, _e, _f, _g, _h, body_47, _j, _k, _l, _m, body_48, _o, _p, _q, _r, body_49, _s, _t, _u, _v, body;
            return __generator(this, function (_w) {
                switch (_w.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_45 = _b.apply(_a, [_d.apply(_c, [_w.sent(), contentType]), "ApplicationKeyResponse", ""]);
                        return [2 /*return*/, body_45];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_46 = _f.apply(_e, [_h.apply(_g, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_46);
                    case 4:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_47 = _k.apply(_j, [_m.apply(_l, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_47);
                    case 6:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_48 = _p.apply(_o, [_r.apply(_q, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_48);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body_49 = _t.apply(_s, [_v.apply(_u, [_w.sent(), contentType]), "ApplicationKeyResponse", ""]);
                        return [2 /*return*/, body_49];
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
     * @params response Response returned by the server for a request to updateCurrentUserApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    KeyManagementApiResponseProcessor.prototype.updateCurrentUserApplicationKey = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_50, _a, _b, _c, _d, body_51, _e, _f, _g, _h, body_52, _j, _k, _l, _m, body_53, _o, _p, _q, _r, body_54, _s, _t, _u, _v, body;
            return __generator(this, function (_w) {
                switch (_w.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_50 = _b.apply(_a, [_d.apply(_c, [_w.sent(), contentType]), "ApplicationKeyResponse", ""]);
                        return [2 /*return*/, body_50];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_51 = _f.apply(_e, [_h.apply(_g, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_51);
                    case 4:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_52 = _k.apply(_j, [_m.apply(_l, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_52);
                    case 6:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_53 = _p.apply(_o, [_r.apply(_q, [_w.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_53);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body_54 = _t.apply(_s, [_v.apply(_u, [_w.sent(), contentType]), "ApplicationKeyResponse", ""]);
                        return [2 /*return*/, body_54];
                    case 10:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    return KeyManagementApiResponseProcessor;
}());
exports.KeyManagementApiResponseProcessor = KeyManagementApiResponseProcessor;
//# sourceMappingURL=KeyManagementApi.js.map