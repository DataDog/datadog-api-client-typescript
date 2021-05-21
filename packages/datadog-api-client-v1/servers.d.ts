import { RequestContext, HttpMethod } from "./http/http";
export interface BaseServerConfiguration {
    makeRequestContext(endpoint: string, httpMethod: HttpMethod): RequestContext;
}
/**
 *
 * Represents the configuration of a server including its
 * url template and variable configuration based on the url.
 *
 */
export declare class ServerConfiguration<T extends {
    [key: string]: string;
}> implements BaseServerConfiguration {
    private url;
    private variableConfiguration;
    constructor(url: string, variableConfiguration: T);
    /**
     * Sets the value of the variables of this server.
     *
     * @param variableConfiguration a partial variable configuration for the variables contained in the url
     */
    setVariables(variableConfiguration: Partial<T>): void;
    getConfiguration(): T;
    private getUrl;
    /**
     * Creates a new request context for this server using the url with variables
     * replaced with their respective values and the endpoint of the request appended.
     *
     * @param endpoint the endpoint to be queried on the server
     * @param httpMethod httpMethod to be used
     *
     */
    makeRequestContext(endpoint: string, httpMethod: HttpMethod): RequestContext;
}
export declare const server1: ServerConfiguration<{
    site: "datadoghq.com" | "us3.datadoghq.com" | "datadoghq.eu" | "ddog-gov.com";
    subdomain: string;
}>;
export declare const server2: ServerConfiguration<{
    name: string;
    protocol: string;
}>;
export declare const server3: ServerConfiguration<{
    site: string;
    subdomain: string;
}>;
export declare const servers: (ServerConfiguration<{
    name: string;
    protocol: string;
}> | ServerConfiguration<{
    site: string;
    subdomain: string;
}>)[];
export declare const operationServers: {
    [endpoint: string]: BaseServerConfiguration[];
};
