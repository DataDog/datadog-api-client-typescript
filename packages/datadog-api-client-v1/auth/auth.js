"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureAuthMethods = exports.AppKeyAuthQueryAuthentication = exports.AppKeyAuthAuthentication = exports.ApiKeyAuthQueryAuthentication = exports.ApiKeyAuthAuthentication = void 0;
/**
 * Applies apiKey authentication to the request context.
 */
var ApiKeyAuthAuthentication = /** @class */ (function () {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    function ApiKeyAuthAuthentication(apiKey) {
        this.apiKey = apiKey;
    }
    ApiKeyAuthAuthentication.prototype.getName = function () {
        return "apiKeyAuth";
    };
    ApiKeyAuthAuthentication.prototype.applySecurityAuthentication = function (context) {
        context.setHeaderParam("DD-API-KEY", this.apiKey);
    };
    return ApiKeyAuthAuthentication;
}());
exports.ApiKeyAuthAuthentication = ApiKeyAuthAuthentication;
/**
 * Applies apiKey authentication to the request context.
 */
var ApiKeyAuthQueryAuthentication = /** @class */ (function () {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    function ApiKeyAuthQueryAuthentication(apiKey) {
        this.apiKey = apiKey;
    }
    ApiKeyAuthQueryAuthentication.prototype.getName = function () {
        return "apiKeyAuthQuery";
    };
    ApiKeyAuthQueryAuthentication.prototype.applySecurityAuthentication = function (context) {
        context.addCookie("api_key", this.apiKey);
    };
    return ApiKeyAuthQueryAuthentication;
}());
exports.ApiKeyAuthQueryAuthentication = ApiKeyAuthQueryAuthentication;
/**
 * Applies apiKey authentication to the request context.
 */
var AppKeyAuthAuthentication = /** @class */ (function () {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    function AppKeyAuthAuthentication(apiKey) {
        this.apiKey = apiKey;
    }
    AppKeyAuthAuthentication.prototype.getName = function () {
        return "appKeyAuth";
    };
    AppKeyAuthAuthentication.prototype.applySecurityAuthentication = function (context) {
        context.setHeaderParam("DD-APPLICATION-KEY", this.apiKey);
    };
    return AppKeyAuthAuthentication;
}());
exports.AppKeyAuthAuthentication = AppKeyAuthAuthentication;
/**
 * Applies apiKey authentication to the request context.
 */
var AppKeyAuthQueryAuthentication = /** @class */ (function () {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    function AppKeyAuthQueryAuthentication(apiKey) {
        this.apiKey = apiKey;
    }
    AppKeyAuthQueryAuthentication.prototype.getName = function () {
        return "appKeyAuthQuery";
    };
    AppKeyAuthQueryAuthentication.prototype.applySecurityAuthentication = function (context) {
        context.addCookie("application_key", this.apiKey);
    };
    return AppKeyAuthQueryAuthentication;
}());
exports.AppKeyAuthQueryAuthentication = AppKeyAuthQueryAuthentication;
/**
 * Creates the authentication methods from a swagger description.
 *
 */
function configureAuthMethods(config) {
    var authMethods = {};
    if (!config) {
        return authMethods;
    }
    if (config["apiKeyAuth"]) {
        authMethods["apiKeyAuth"] = new ApiKeyAuthAuthentication(config["apiKeyAuth"]);
    }
    if (config["apiKeyAuthQuery"]) {
        authMethods["apiKeyAuthQuery"] = new ApiKeyAuthQueryAuthentication(config["apiKeyAuthQuery"]);
    }
    if (config["appKeyAuth"]) {
        authMethods["appKeyAuth"] = new AppKeyAuthAuthentication(config["appKeyAuth"]);
    }
    if (config["appKeyAuthQuery"]) {
        authMethods["appKeyAuthQuery"] = new AppKeyAuthQueryAuthentication(config["appKeyAuthQuery"]);
    }
    return authMethods;
}
exports.configureAuthMethods = configureAuthMethods;
//# sourceMappingURL=auth.js.map