import { RequestContext } from "./http/http";

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
  applySecurityAuthentication(context: RequestContext): void;
}

export interface TokenProvider {
  getToken(): Promise<string> | string;
}

/**
 * Applies oauth2 authentication to the request context.
 */
export class AuthZAuthentication implements SecurityAuthentication {
  /**
   * Configures OAuth2 with the necessary properties
   *
   * @param accessToken: The access token to be used for every request
   */
  public constructor(private accessToken: string) {}

  public getName(): string {
    return "AuthZ";
  }

  public applySecurityAuthentication(context: RequestContext): void {
    context.setHeaderParam("Authorization", "Bearer " + this.accessToken);
  }
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

  public applySecurityAuthentication(context: RequestContext): void {
    context.setHeaderParam("DD-API-KEY", this.apiKey);
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

  public applySecurityAuthentication(context: RequestContext): void {
    context.setHeaderParam("DD-APPLICATION-KEY", this.apiKey);
  }
}

export type AuthMethods = {
  "AuthZ"?: SecurityAuthentication,
  "apiKeyAuth"?: SecurityAuthentication,
  "appKeyAuth"?: SecurityAuthentication
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = { accessToken: string };

export type AuthMethodsConfiguration = {
  "AuthZ"?: OAuth2Configuration,
  "apiKeyAuth"?: ApiKeyConfiguration,
  "appKeyAuth"?: ApiKeyConfiguration
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

  if (config["AuthZ"]) {
    authMethods["AuthZ"] = new AuthZAuthentication(
      config["AuthZ"]["accessToken"]
    );
  }

  if (config["apiKeyAuth"]) {
    authMethods["apiKeyAuth"] = new ApiKeyAuthAuthentication(
      config["apiKeyAuth"]
    );
  }

  if (config["appKeyAuth"]) {
    authMethods["appKeyAuth"] = new AppKeyAuthAuthentication(
      config["appKeyAuth"]
    );
  }

  return authMethods;
}