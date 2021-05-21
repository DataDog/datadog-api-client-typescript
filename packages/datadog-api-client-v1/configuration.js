"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServer = exports.createConfiguration = void 0;
var middleware_1 = require("./middleware");
var isomorphic_fetch_1 = require("./http/isomorphic-fetch");
var servers_1 = require("./servers");
var auth_1 = require("./auth/auth");
/**
 * Configuration factory function
 *
 * If a property is not included in conf, a default is used:
 *    - baseServer: null
 *    - serverIndex: 0
 *    - operationServerIndices: {}
 *    - httpApi: IsomorphicFetchHttpLibrary
 *    - middleware: []
 *    - promiseMiddleware: []
 *    - authMethods: {}
 *    - httpConfig: {}
 *
 * @param conf partial configuration
 */
function createConfiguration(conf) {
    if (conf === void 0) { conf = {}; }
    if (process.env.DD_SITE) {
        var serverConf = servers_1.server1.getConfiguration();
        servers_1.server1.setVariables({ "site": process.env.DD_SITE });
    }
    var authMethods = conf.authMethods || {};
    if (!("apiKeyAuth" in authMethods) && process.env.DD_API_KEY) {
        authMethods["apiKeyAuth"] = process.env.DD_API_KEY;
    }
    if (!("appKeyAuth" in authMethods) && process.env.DD_APP_KEY) {
        authMethods["appKeyAuth"] = process.env.DD_APP_KEY;
    }
    var configuration = {
        baseServer: conf.baseServer,
        serverIndex: conf.serverIndex || 0,
        operationServerIndices: conf.operationServerIndices || {},
        httpApi: conf.httpApi || new isomorphic_fetch_1.IsomorphicFetchHttpLibrary(),
        middleware: conf.middleware || [],
        authMethods: auth_1.configureAuthMethods(authMethods),
        httpConfig: conf.httpConfig || {}
    };
    if (conf.promiseMiddleware) {
        conf.promiseMiddleware.forEach(function (m) { return configuration.middleware.push(new middleware_1.PromiseMiddlewareWrapper(m)); });
    }
    return configuration;
}
exports.createConfiguration = createConfiguration;
function getServer(conf, endpoint) {
    if (conf.baseServer !== undefined) {
        return conf.baseServer;
    }
    var index = (endpoint in conf.operationServerIndices) ? conf.operationServerIndices[endpoint] : conf.serverIndex;
    return (endpoint in servers_1.operationServers) ? servers_1.operationServers[endpoint][index] : servers_1.servers[index];
}
exports.getServer = getServer;
//# sourceMappingURL=configuration.js.map