// typings for btoa are incorrect
//@ts-ignore
import * as btoa from "btoa";
import { RequestContext } from "../http/http";

/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    /*
     * @return returns the name of the security authentication as specified in OAI
     */
    getName(): string;

    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}

export interface TokenProvider {
  getToken(): Promise<string> | string;
}

/**
 * Applies apiKey authentication to the request context.
 */
export class ApiKeyAuthAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "apiKeyAuth";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("DD-API-KEY", this.apiKey);
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class ApiKeyAuthQueryAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "apiKeyAuthQuery";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.addCookie("api_key", this.apiKey);
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class AppKeyAuthAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "appKeyAuth";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("DD-APPLICATION-KEY", this.apiKey);
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class AppKeyAuthQueryAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "appKeyAuthQuery";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.addCookie("application_key", this.apiKey);
    }
}


export type AuthMethods = {
    "apiKeyAuth"?: SecurityAuthentication,
    "apiKeyAuthQuery"?: SecurityAuthentication,
    "appKeyAuth"?: SecurityAuthentication,
    "appKeyAuthQuery"?: SecurityAuthentication
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = string;

export type AuthMethodsConfiguration = {
    "apiKeyAuth"?: ApiKeyConfiguration,
    "apiKeyAuthQuery"?: ApiKeyConfiguration,
    "appKeyAuth"?: ApiKeyConfiguration,
    "appKeyAuthQuery"?: ApiKeyConfiguration
}

/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods {
    let authMethods: AuthMethods = {}

    if (!config) {
        return authMethods;
    }

    if (config["apiKeyAuth"]) {
        authMethods["apiKeyAuth"] = new ApiKeyAuthAuthentication(
            config["apiKeyAuth"]
        );
    }

    if (config["apiKeyAuthQuery"]) {
        authMethods["apiKeyAuthQuery"] = new ApiKeyAuthQueryAuthentication(
            config["apiKeyAuthQuery"]
        );
    }

    if (config["appKeyAuth"]) {
        authMethods["appKeyAuth"] = new AppKeyAuthAuthentication(
            config["appKeyAuth"]
        );
    }

    if (config["appKeyAuthQuery"]) {
        authMethods["appKeyAuthQuery"] = new AppKeyAuthQueryAuthentication(
            config["appKeyAuthQuery"]
        );
    }

    return authMethods;
}