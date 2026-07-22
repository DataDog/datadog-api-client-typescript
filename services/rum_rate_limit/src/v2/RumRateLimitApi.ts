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
import { RumRateLimitConfigResponse } from "./models/RumRateLimitConfigResponse";
import { RumRateLimitConfigUpdateRequest } from "./models/RumRateLimitConfigUpdateRequest";
import { RumRateLimitScopeType } from "./models/RumRateLimitScopeType";
import { version } from "../version";

export class RumRateLimitApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("rum-rate-limit", version);
    }
  }
  public async deleteRumRateLimitConfig(
    scopeType: RumRateLimitScopeType,
    scopeId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RumRateLimitApi.v2.deleteRumRateLimitConfig"]) {
      throw new Error("Unstable operation 'deleteRumRateLimitConfig' is disabled. Enable it by setting `configuration.unstableOperations['RumRateLimitApi.v2.deleteRumRateLimitConfig'] = true`");
    }

    // verify required parameter 'scopeType' is not null or undefined
    if (scopeType === null || scopeType === undefined) {
      throw new RequiredError("scopeType", "deleteRumRateLimitConfig");
    }

    // verify required parameter 'scopeId' is not null or undefined
    if (scopeId === null || scopeId === undefined) {
      throw new RequiredError("scopeId", "deleteRumRateLimitConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/config/rate-limit/{scope_type}/{scope_id}".replace(
      "{scope_type}",
      encodeURIComponent(String(scopeType)),
    ).replace(
      "{scope_id}",
      encodeURIComponent(String(scopeId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides("RumRateLimitApi.v2.deleteRumRateLimitConfig", RumRateLimitApi.operationServers);
    const requestContext = server.makeRequestContext(localVarPath, HttpMethod.DELETE, overrides);
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

  public async getRumRateLimitConfig(
    scopeType: RumRateLimitScopeType,
    scopeId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RumRateLimitApi.v2.getRumRateLimitConfig"]) {
      throw new Error("Unstable operation 'getRumRateLimitConfig' is disabled. Enable it by setting `configuration.unstableOperations['RumRateLimitApi.v2.getRumRateLimitConfig'] = true`");
    }

    // verify required parameter 'scopeType' is not null or undefined
    if (scopeType === null || scopeType === undefined) {
      throw new RequiredError("scopeType", "getRumRateLimitConfig");
    }

    // verify required parameter 'scopeId' is not null or undefined
    if (scopeId === null || scopeId === undefined) {
      throw new RequiredError("scopeId", "getRumRateLimitConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/config/rate-limit/{scope_type}/{scope_id}".replace(
      "{scope_type}",
      encodeURIComponent(String(scopeType)),
    ).replace(
      "{scope_id}",
      encodeURIComponent(String(scopeId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides("RumRateLimitApi.v2.getRumRateLimitConfig", RumRateLimitApi.operationServers);
    const requestContext = server.makeRequestContext(localVarPath, HttpMethod.GET, overrides);
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

  public async updateRumRateLimitConfig(
    scopeType: RumRateLimitScopeType,
    scopeId: string,
    body: RumRateLimitConfigUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RumRateLimitApi.v2.updateRumRateLimitConfig"]) {
      throw new Error("Unstable operation 'updateRumRateLimitConfig' is disabled. Enable it by setting `configuration.unstableOperations['RumRateLimitApi.v2.updateRumRateLimitConfig'] = true`");
    }

    // verify required parameter 'scopeType' is not null or undefined
    if (scopeType === null || scopeType === undefined) {
      throw new RequiredError("scopeType", "updateRumRateLimitConfig");
    }

    // verify required parameter 'scopeId' is not null or undefined
    if (scopeId === null || scopeId === undefined) {
      throw new RequiredError("scopeId", "updateRumRateLimitConfig");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateRumRateLimitConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/config/rate-limit/{scope_type}/{scope_id}".replace(
      "{scope_type}",
      encodeURIComponent(String(scopeType)),
    ).replace(
      "{scope_id}",
      encodeURIComponent(String(scopeId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides("RumRateLimitApi.v2.updateRumRateLimitConfig", RumRateLimitApi.operationServers);
    const requestContext = server.makeRequestContext(localVarPath, HttpMethod.PUT, overrides);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "RumRateLimitConfigUpdateRequest", ""),
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

export class RumRateLimitApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteRumRateLimitConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRumRateLimitConfig(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
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
   * @params response Response returned by the server for a request to getRumRateLimitConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRumRateLimitConfig(
    response: ResponseContext,
  ): Promise<RumRateLimitConfigResponse> {
    const contentType = normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: RumRateLimitConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRateLimitConfigResponse",
      ) as RumRateLimitConfigResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RumRateLimitConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRateLimitConfigResponse",
        "",
      ) as RumRateLimitConfigResponse;
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
   * @params response Response returned by the server for a request to updateRumRateLimitConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRumRateLimitConfig(
    response: ResponseContext,
  ): Promise<RumRateLimitConfigResponse> {
    const contentType = normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: RumRateLimitConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRateLimitConfigResponse",
      ) as RumRateLimitConfigResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RumRateLimitConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRateLimitConfigResponse",
        "",
      ) as RumRateLimitConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface RumRateLimitApiDeleteRumRateLimitConfigRequest {
  /**
   * The type of scope the rate limit configuration applies to.
   * @type RumRateLimitScopeType
   */
  scopeType: RumRateLimitScopeType;
  /**
   * The identifier of the scope the rate limit configuration applies to.
   * For the `application` scope, this is the RUM application ID.
   * @type string
   */
  scopeId: string;
}

export interface RumRateLimitApiGetRumRateLimitConfigRequest {
  /**
   * The type of scope the rate limit configuration applies to.
   * @type RumRateLimitScopeType
   */
  scopeType: RumRateLimitScopeType;
  /**
   * The identifier of the scope the rate limit configuration applies to.
   * For the `application` scope, this is the RUM application ID.
   * @type string
   */
  scopeId: string;
}

export interface RumRateLimitApiUpdateRumRateLimitConfigRequest {
  /**
   * The type of scope the rate limit configuration applies to.
   * @type RumRateLimitScopeType
   */
  scopeType: RumRateLimitScopeType;
  /**
   * The identifier of the scope the rate limit configuration applies to.
   * For the `application` scope, this is the RUM application ID.
   * @type string
   */
  scopeId: string;
  /**
   * The definition of the RUM rate limit configuration to create or update.
   * @type RumRateLimitConfigUpdateRequest
   */
  body: RumRateLimitConfigUpdateRequest;
}

export class RumRateLimitApi {
  private requestFactory: RumRateLimitApiRequestFactory;
  private responseProcessor: RumRateLimitApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {
  };

  public constructor(
    configuration?: Configuration,
    requestFactory?: RumRateLimitApiRequestFactory,
    responseProcessor?: RumRateLimitApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new RumRateLimitApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new RumRateLimitApiResponseProcessor();
  }

  /**
   * Delete the RUM rate limit configuration for a given scope.
   * @param param The request object
   */
  public deleteRumRateLimitConfig(
    param: RumRateLimitApiDeleteRumRateLimitConfigRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRumRateLimitConfig(
      param.scopeType,
      param.scopeId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRumRateLimitConfig(responseContext);
        });
    });
  }

  /**
   * Get the RUM rate limit configuration for a given scope.
   * @param param The request object
   */
  public getRumRateLimitConfig(
    param: RumRateLimitApiGetRumRateLimitConfigRequest,
    options?: Configuration,
  ): Promise<RumRateLimitConfigResponse> {
    const requestContextPromise = this.requestFactory.getRumRateLimitConfig(
      param.scopeType,
      param.scopeId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRumRateLimitConfig(responseContext);
        });
    });
  }

  /**
   * Create or update the RUM rate limit configuration for a given scope.
   * Returns the rate limit configuration object when the request is successful.
   * @param param The request object
   */
  public updateRumRateLimitConfig(
    param: RumRateLimitApiUpdateRumRateLimitConfigRequest,
    options?: Configuration,
  ): Promise<RumRateLimitConfigResponse> {
    const requestContextPromise = this.requestFactory.updateRumRateLimitConfig(
      param.scopeType,
      param.scopeId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRumRateLimitConfig(responseContext);
        });
    });
  }
}
