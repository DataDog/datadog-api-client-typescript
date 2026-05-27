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
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { OAuthClientRegistrationError } from "./models/OAuthClientRegistrationError";
import { OAuthClientRegistrationRequest } from "./models/OAuthClientRegistrationRequest";
import { OAuthClientRegistrationResponse } from "./models/OAuthClientRegistrationResponse";
import { OAuthScopesRestrictionResponse } from "./models/OAuthScopesRestrictionResponse";
import { UpsertOAuthScopesRestrictionRequest } from "./models/UpsertOAuthScopesRestrictionRequest";
import { version } from "../version";

export class OAuth2ClientPublicApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("o-auth2-client-public", version);
    }
  }
  public async deleteScopesRestriction(
    clientUuid: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OAuth2ClientPublicApi.v2.deleteScopesRestriction"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteScopesRestriction' is disabled. Enable it by setting `configuration.unstableOperations['OAuth2ClientPublicApi.v2.deleteScopesRestriction'] = true`",
      );
    }

    // verify required parameter 'clientUuid' is not null or undefined
    if (clientUuid === null || clientUuid === undefined) {
      throw new RequiredError("clientUuid", "deleteScopesRestriction");
    }

    // Path Params
    const localVarPath =
      "/api/v2/oauth2/clients/{client_uuid}/scopes_restriction".replace(
        "{client_uuid}",
        encodeURIComponent(String(clientUuid)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OAuth2ClientPublicApi.v2.deleteScopesRestriction",
      OAuth2ClientPublicApi.operationServers,
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

  public async getScopesRestriction(
    clientUuid: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OAuth2ClientPublicApi.v2.getScopesRestriction"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getScopesRestriction' is disabled. Enable it by setting `configuration.unstableOperations['OAuth2ClientPublicApi.v2.getScopesRestriction'] = true`",
      );
    }

    // verify required parameter 'clientUuid' is not null or undefined
    if (clientUuid === null || clientUuid === undefined) {
      throw new RequiredError("clientUuid", "getScopesRestriction");
    }

    // Path Params
    const localVarPath =
      "/api/v2/oauth2/clients/{client_uuid}/scopes_restriction".replace(
        "{client_uuid}",
        encodeURIComponent(String(clientUuid)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OAuth2ClientPublicApi.v2.getScopesRestriction",
      OAuth2ClientPublicApi.operationServers,
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

  public async registerOAuthClient(
    body: OAuthClientRegistrationRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OAuth2ClientPublicApi.v2.registerOAuthClient"
      ]
    ) {
      throw new Error(
        "Unstable operation 'registerOAuthClient' is disabled. Enable it by setting `configuration.unstableOperations['OAuth2ClientPublicApi.v2.registerOAuthClient'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "registerOAuthClient");
    }

    // Path Params
    const localVarPath = "/api/v2/oauth2/register";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OAuth2ClientPublicApi.v2.registerOAuthClient",
      OAuth2ClientPublicApi.operationServers,
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
      serialize(body, TypingInfo, "OAuthClientRegistrationRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    return requestContext;
  }

  public async upsertScopesRestriction(
    clientUuid: string,
    body: UpsertOAuthScopesRestrictionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OAuth2ClientPublicApi.v2.upsertScopesRestriction"
      ]
    ) {
      throw new Error(
        "Unstable operation 'upsertScopesRestriction' is disabled. Enable it by setting `configuration.unstableOperations['OAuth2ClientPublicApi.v2.upsertScopesRestriction'] = true`",
      );
    }

    // verify required parameter 'clientUuid' is not null or undefined
    if (clientUuid === null || clientUuid === undefined) {
      throw new RequiredError("clientUuid", "upsertScopesRestriction");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertScopesRestriction");
    }

    // Path Params
    const localVarPath =
      "/api/v2/oauth2/clients/{client_uuid}/scopes_restriction".replace(
        "{client_uuid}",
        encodeURIComponent(String(clientUuid)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OAuth2ClientPublicApi.v2.upsertScopesRestriction",
      OAuth2ClientPublicApi.operationServers,
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
      serialize(body, TypingInfo, "UpsertOAuthScopesRestrictionRequest", ""),
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

export class OAuth2ClientPublicApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteScopesRestriction
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteScopesRestriction(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to getScopesRestriction
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getScopesRestriction(
    response: ResponseContext,
  ): Promise<OAuthScopesRestrictionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OAuthScopesRestrictionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OAuthScopesRestrictionResponse",
      ) as OAuthScopesRestrictionResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: OAuthScopesRestrictionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OAuthScopesRestrictionResponse",
        "",
      ) as OAuthScopesRestrictionResponse;
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
   * @params response Response returned by the server for a request to registerOAuthClient
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async registerOAuthClient(
    response: ResponseContext,
  ): Promise<OAuthClientRegistrationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: OAuthClientRegistrationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OAuthClientRegistrationResponse",
      ) as OAuthClientRegistrationResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: OAuthClientRegistrationError;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "OAuthClientRegistrationError",
        ) as OAuthClientRegistrationError;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<OAuthClientRegistrationError>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<OAuthClientRegistrationError>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: OAuthClientRegistrationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OAuthClientRegistrationResponse",
        "",
      ) as OAuthClientRegistrationResponse;
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
   * @params response Response returned by the server for a request to upsertScopesRestriction
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertScopesRestriction(
    response: ResponseContext,
  ): Promise<OAuthScopesRestrictionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OAuthScopesRestrictionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OAuthScopesRestrictionResponse",
      ) as OAuthScopesRestrictionResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: OAuthScopesRestrictionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OAuthScopesRestrictionResponse",
        "",
      ) as OAuthScopesRestrictionResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface OAuth2ClientPublicApiDeleteScopesRestrictionRequest {
  /**
   * UUID of the OAuth2 client.
   * @type string
   */
  clientUuid: string;
}

export interface OAuth2ClientPublicApiGetScopesRestrictionRequest {
  /**
   * UUID of the OAuth2 client.
   * @type string
   */
  clientUuid: string;
}

export interface OAuth2ClientPublicApiRegisterOAuthClientRequest {
  /**
   * @type OAuthClientRegistrationRequest
   */
  body: OAuthClientRegistrationRequest;
}

export interface OAuth2ClientPublicApiUpsertScopesRestrictionRequest {
  /**
   * UUID of the OAuth2 client.
   * @type string
   */
  clientUuid: string;
  /**
   * @type UpsertOAuthScopesRestrictionRequest
   */
  body: UpsertOAuthScopesRestrictionRequest;
}

export class OAuth2ClientPublicApi {
  private requestFactory: OAuth2ClientPublicApiRequestFactory;
  private responseProcessor: OAuth2ClientPublicApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: OAuth2ClientPublicApiRequestFactory,
    responseProcessor?: OAuth2ClientPublicApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new OAuth2ClientPublicApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new OAuth2ClientPublicApiResponseProcessor();
  }

  /**
   * Delete the scopes restriction configured for the OAuth2 client.
   * @param param The request object
   */
  public deleteScopesRestriction(
    param: OAuth2ClientPublicApiDeleteScopesRestrictionRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteScopesRestriction(
      param.clientUuid,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteScopesRestriction(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the scopes restriction configured for the OAuth2 client.
   * @param param The request object
   */
  public getScopesRestriction(
    param: OAuth2ClientPublicApiGetScopesRestrictionRequest,
    options?: Configuration,
  ): Promise<OAuthScopesRestrictionResponse> {
    const requestContextPromise = this.requestFactory.getScopesRestriction(
      param.clientUuid,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getScopesRestriction(responseContext);
        });
    });
  }

  /**
   * Register an OAuth2 client using the Dynamic Client Registration protocol defined in RFC 7591.
   * @param param The request object
   */
  public registerOAuthClient(
    param: OAuth2ClientPublicApiRegisterOAuthClientRequest,
    options?: Configuration,
  ): Promise<OAuthClientRegistrationResponse> {
    const requestContextPromise = this.requestFactory.registerOAuthClient(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.registerOAuthClient(responseContext);
        });
    });
  }

  /**
   * Create or update the scopes restriction configured for the OAuth2 client.
   * @param param The request object
   */
  public upsertScopesRestriction(
    param: OAuth2ClientPublicApiUpsertScopesRestrictionRequest,
    options?: Configuration,
  ): Promise<OAuthScopesRestrictionResponse> {
    const requestContextPromise = this.requestFactory.upsertScopesRestriction(
      param.clientUuid,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertScopesRestriction(
            responseContext,
          );
        });
    });
  }
}
