import {
  ApiException,
  BaseAPIRequestFactory,
  BaseServerConfiguration,
  buildUserAgent,
  Configuration,
  createConfiguration,
  deserialize,
  getPreferredMediaType,
  HttpMethod,
  isBrowser,
  logger,
  normalizeMediaType,
  parse,
  RequiredError,
  RequestContext,
  ResponseContext,
  serialize,
  ServerConfiguration,
  stringify,
  applySecurityAuthentication,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { WebhooksAuthMethodProtocol } from "./models/WebhooksAuthMethodProtocol";
import { WebhooksAuthMethodsResponse } from "./models/WebhooksAuthMethodsResponse";
import { WebhooksOAuth2ClientCredentialsCreateRequest } from "./models/WebhooksOAuth2ClientCredentialsCreateRequest";
import { WebhooksOAuth2ClientCredentialsResponse } from "./models/WebhooksOAuth2ClientCredentialsResponse";
import { WebhooksOAuth2ClientCredentialsUpdateRequest } from "./models/WebhooksOAuth2ClientCredentialsUpdateRequest";
import { version } from "../version";

export class WebhooksIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("webhooks-integration", version);
    }
  }
  public async createOAuth2ClientCredentials(
    body: WebhooksOAuth2ClientCredentialsCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOAuth2ClientCredentials");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/webhooks/configuration/auth-method/oauth2-client-credentials";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "WebhooksIntegrationApi.v2.createOAuth2ClientCredentials",
      WebhooksIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "WebhooksOAuth2ClientCredentialsCreateRequest",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteOAuth2ClientCredentials(
    authMethodId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'authMethodId' is not null or undefined
    if (authMethodId === null || authMethodId === undefined) {
      throw new RequiredError("authMethodId", "deleteOAuth2ClientCredentials");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/webhooks/configuration/auth-method/oauth2-client-credentials/{auth_method_id}".replace(
        "{auth_method_id}",
        encodeURIComponent(String(authMethodId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "WebhooksIntegrationApi.v2.deleteOAuth2ClientCredentials",
      WebhooksIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getAllAuthMethods(
    include?: WebhooksAuthMethodProtocol,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/integration/webhooks/configuration/auth-method";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "WebhooksIntegrationApi.v2.getAllAuthMethods",
      WebhooksIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "WebhooksAuthMethodProtocol", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getOAuth2ClientCredentials(
    authMethodId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'authMethodId' is not null or undefined
    if (authMethodId === null || authMethodId === undefined) {
      throw new RequiredError("authMethodId", "getOAuth2ClientCredentials");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/webhooks/configuration/auth-method/oauth2-client-credentials/{auth_method_id}".replace(
        "{auth_method_id}",
        encodeURIComponent(String(authMethodId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "WebhooksIntegrationApi.v2.getOAuth2ClientCredentials",
      WebhooksIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateOAuth2ClientCredentials(
    authMethodId: string,
    body: WebhooksOAuth2ClientCredentialsUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'authMethodId' is not null or undefined
    if (authMethodId === null || authMethodId === undefined) {
      throw new RequiredError("authMethodId", "updateOAuth2ClientCredentials");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateOAuth2ClientCredentials");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/webhooks/configuration/auth-method/oauth2-client-credentials/{auth_method_id}".replace(
        "{auth_method_id}",
        encodeURIComponent(String(authMethodId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "WebhooksIntegrationApi.v2.updateOAuth2ClientCredentials",
      WebhooksIntegrationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "WebhooksOAuth2ClientCredentialsUpdateRequest",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class WebhooksIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createOAuth2ClientCredentials
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOAuth2ClientCredentials(
    response: ResponseContext,
  ): Promise<WebhooksOAuth2ClientCredentialsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: WebhooksOAuth2ClientCredentialsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksOAuth2ClientCredentialsResponse",
      ) as WebhooksOAuth2ClientCredentialsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: WebhooksOAuth2ClientCredentialsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksOAuth2ClientCredentialsResponse",
        "",
      ) as WebhooksOAuth2ClientCredentialsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteOAuth2ClientCredentials
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOAuth2ClientCredentials(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getAllAuthMethods
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAllAuthMethods(
    response: ResponseContext,
  ): Promise<WebhooksAuthMethodsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: WebhooksAuthMethodsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksAuthMethodsResponse",
      ) as WebhooksAuthMethodsResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: WebhooksAuthMethodsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksAuthMethodsResponse",
        "",
      ) as WebhooksAuthMethodsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getOAuth2ClientCredentials
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOAuth2ClientCredentials(
    response: ResponseContext,
  ): Promise<WebhooksOAuth2ClientCredentialsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: WebhooksOAuth2ClientCredentialsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksOAuth2ClientCredentialsResponse",
      ) as WebhooksOAuth2ClientCredentialsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: WebhooksOAuth2ClientCredentialsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksOAuth2ClientCredentialsResponse",
        "",
      ) as WebhooksOAuth2ClientCredentialsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateOAuth2ClientCredentials
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOAuth2ClientCredentials(
    response: ResponseContext,
  ): Promise<WebhooksOAuth2ClientCredentialsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: WebhooksOAuth2ClientCredentialsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksOAuth2ClientCredentialsResponse",
      ) as WebhooksOAuth2ClientCredentialsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: WebhooksOAuth2ClientCredentialsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "WebhooksOAuth2ClientCredentialsResponse",
        "",
      ) as WebhooksOAuth2ClientCredentialsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface WebhooksIntegrationApiCreateOAuth2ClientCredentialsRequest {
  /**
   * OAuth2 client credentials payload.
   * @type WebhooksOAuth2ClientCredentialsCreateRequest
   */
  body: WebhooksOAuth2ClientCredentialsCreateRequest;
}

export interface WebhooksIntegrationApiDeleteOAuth2ClientCredentialsRequest {
  /**
   * The UUID of the auth method.
   * @type string
   */
  authMethodId: string;
}

export interface WebhooksIntegrationApiGetAllAuthMethodsRequest {
  /**
   * Comma-separated list of relationships to include in the response.
   * @type WebhooksAuthMethodProtocol
   */
  include?: WebhooksAuthMethodProtocol;
}

export interface WebhooksIntegrationApiGetOAuth2ClientCredentialsRequest {
  /**
   * The UUID of the auth method.
   * @type string
   */
  authMethodId: string;
}

export interface WebhooksIntegrationApiUpdateOAuth2ClientCredentialsRequest {
  /**
   * The UUID of the auth method.
   * @type string
   */
  authMethodId: string;
  /**
   * OAuth2 client credentials payload.
   * @type WebhooksOAuth2ClientCredentialsUpdateRequest
   */
  body: WebhooksOAuth2ClientCredentialsUpdateRequest;
}

export class WebhooksIntegrationApi {
  private requestFactory: WebhooksIntegrationApiRequestFactory;
  private responseProcessor: WebhooksIntegrationApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: WebhooksIntegrationApiRequestFactory,
    responseProcessor?: WebhooksIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new WebhooksIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new WebhooksIntegrationApiResponseProcessor();
  }

  /**
   * Create a new OAuth2 client credentials auth method for the Webhooks
   * integration. The `client_secret` is stored securely and never returned.
   * @param param The request object
   */
  public createOAuth2ClientCredentials(
    param: WebhooksIntegrationApiCreateOAuth2ClientCredentialsRequest,
    options?: Configuration,
  ): Promise<WebhooksOAuth2ClientCredentialsResponse> {
    const requestContextPromise =
      this.requestFactory.createOAuth2ClientCredentials(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOAuth2ClientCredentials(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete an OAuth2 client credentials auth method by ID.
   * @param param The request object
   */
  public deleteOAuth2ClientCredentials(
    param: WebhooksIntegrationApiDeleteOAuth2ClientCredentialsRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteOAuth2ClientCredentials(
        param.authMethodId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOAuth2ClientCredentials(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a list of all auth methods configured for the Webhooks integration in
   * your organization.
   * @param param The request object
   */
  public getAllAuthMethods(
    param: WebhooksIntegrationApiGetAllAuthMethodsRequest = {},
    options?: Configuration,
  ): Promise<WebhooksAuthMethodsResponse> {
    const requestContextPromise = this.requestFactory.getAllAuthMethods(
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAllAuthMethods(responseContext);
        });
    });
  }

  /**
   * Get a single OAuth2 client credentials auth method by ID.
   * @param param The request object
   */
  public getOAuth2ClientCredentials(
    param: WebhooksIntegrationApiGetOAuth2ClientCredentialsRequest,
    options?: Configuration,
  ): Promise<WebhooksOAuth2ClientCredentialsResponse> {
    const requestContextPromise =
      this.requestFactory.getOAuth2ClientCredentials(
        param.authMethodId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOAuth2ClientCredentials(
            responseContext,
          );
        });
    });
  }

  /**
   * Update an existing OAuth2 client credentials auth method.
   * @param param The request object
   */
  public updateOAuth2ClientCredentials(
    param: WebhooksIntegrationApiUpdateOAuth2ClientCredentialsRequest,
    options?: Configuration,
  ): Promise<WebhooksOAuth2ClientCredentialsResponse> {
    const requestContextPromise =
      this.requestFactory.updateOAuth2ClientCredentials(
        param.authMethodId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOAuth2ClientCredentials(
            responseContext,
          );
        });
    });
  }
}
