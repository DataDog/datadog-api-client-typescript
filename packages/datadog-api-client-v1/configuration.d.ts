import { HttpLibrary, HttpConfiguration } from "./http/http";
import { Middleware, PromiseMiddleware } from "./middleware";
import { BaseServerConfiguration } from "./servers";
import { AuthMethods, AuthMethodsConfiguration } from "./auth/auth";
export interface Configuration {
    readonly baseServer?: BaseServerConfiguration;
    readonly serverIndex: number;
    readonly operationServerIndices: {
        [name: string]: number;
    };
    readonly httpApi: HttpLibrary;
    readonly middleware: Middleware[];
    readonly authMethods: AuthMethods;
    readonly httpConfig: HttpConfiguration;
}
/**
 * Interface with which a configuration object can be configured.
 */
export interface ConfigurationParameters {
    /**
     * Default server to use (takes preference over serverIndex and operationServerIndices)
     */
    baseServer?: BaseServerConfiguration;
    /**
     * Default index of a server to use from the predefined server list
     */
    serverIndex?: number;
    /**
     * Default index of a server to use for an operation from the predefined server operation map
     */
    operationServerIndices?: {
        [name: string]: number;
    };
    /**
     * HTTP library to use e.g. IsomorphicFetch
     */
    httpApi?: HttpLibrary;
    /**
     * The middlewares which will be applied to requests and responses
     */
    middleware?: Middleware[];
    /**
     * Configures all middlewares using the promise api instead of observables (which Middleware uses)
     */
    promiseMiddleware?: PromiseMiddleware[];
    /**
     * Configuration for the available authentication methods
     */
    authMethods?: AuthMethodsConfiguration;
    /**
     * Configuration for HTTP transport
     */
    httpConfig?: HttpConfiguration;
}
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
export declare function createConfiguration(conf?: ConfigurationParameters): Configuration;
export declare function getServer(conf: Configuration, endpoint: string): BaseServerConfiguration;
