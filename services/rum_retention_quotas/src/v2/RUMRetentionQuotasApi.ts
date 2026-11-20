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
import { RUMRetentionQuotaConfigResponse } from "./models/RUMRetentionQuotaConfigResponse";
import { RUMRetentionQuotaConfigUpdateRequest } from "./models/RUMRetentionQuotaConfigUpdateRequest";
import { RUMRetentionQuotaScopeType } from "./models/RUMRetentionQuotaScopeType";
import { version } from "../version";

export class RUMRetentionQuotasApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("rum-retention-quotas", version);
    }
  }
  public async deleteRUMQuotaConfig(
    scopeType: RUMRetentionQuotaScopeType,
    scopeId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scopeType' is not null or undefined
    if (scopeType === null || scopeType === undefined) {
      throw new RequiredError("scopeType", "deleteRUMQuotaConfig");
    }

    // verify required parameter 'scopeId' is not null or undefined
    if (scopeId === null || scopeId === undefined) {
      throw new RequiredError("scopeId", "deleteRUMQuotaConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/config/retention-quota/{scope_type}/{scope_id}"
        .replace("{scope_type}", encodeURIComponent(String(scopeType)))
        .replace("{scope_id}", encodeURIComponent(String(scopeId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMRetentionQuotasApi.v2.deleteRUMQuotaConfig",
      RUMRetentionQuotasApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getRUMQuotaConfig(
    scopeType: RUMRetentionQuotaScopeType,
    scopeId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scopeType' is not null or undefined
    if (scopeType === null || scopeType === undefined) {
      throw new RequiredError("scopeType", "getRUMQuotaConfig");
    }

    // verify required parameter 'scopeId' is not null or undefined
    if (scopeId === null || scopeId === undefined) {
      throw new RequiredError("scopeId", "getRUMQuotaConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/config/retention-quota/{scope_type}/{scope_id}"
        .replace("{scope_type}", encodeURIComponent(String(scopeType)))
        .replace("{scope_id}", encodeURIComponent(String(scopeId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMRetentionQuotasApi.v2.getRUMQuotaConfig",
      RUMRetentionQuotasApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async upsertRUMQuotaConfig(
    scopeType: RUMRetentionQuotaScopeType,
    scopeId: string,
    body: RUMRetentionQuotaConfigUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scopeType' is not null or undefined
    if (scopeType === null || scopeType === undefined) {
      throw new RequiredError("scopeType", "upsertRUMQuotaConfig");
    }

    // verify required parameter 'scopeId' is not null or undefined
    if (scopeId === null || scopeId === undefined) {
      throw new RequiredError("scopeId", "upsertRUMQuotaConfig");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertRUMQuotaConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/config/retention-quota/{scope_type}/{scope_id}"
        .replace("{scope_type}", encodeURIComponent(String(scopeType)))
        .replace("{scope_id}", encodeURIComponent(String(scopeId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMRetentionQuotasApi.v2.upsertRUMQuotaConfig",
      RUMRetentionQuotasApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "RUMRetentionQuotaConfigUpdateRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class RUMRetentionQuotasApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteRUMQuotaConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRUMQuotaConfig(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
   * @params response Response returned by the server for a request to getRUMQuotaConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRUMQuotaConfig(
    response: ResponseContext,
  ): Promise<RUMRetentionQuotaConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMRetentionQuotaConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMRetentionQuotaConfigResponse",
      ) as RUMRetentionQuotaConfigResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
      const body: RUMRetentionQuotaConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMRetentionQuotaConfigResponse",
        "",
      ) as RUMRetentionQuotaConfigResponse;
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
   * @params response Response returned by the server for a request to upsertRUMQuotaConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertRUMQuotaConfig(
    response: ResponseContext,
  ): Promise<RUMRetentionQuotaConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMRetentionQuotaConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMRetentionQuotaConfigResponse",
      ) as RUMRetentionQuotaConfigResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
      const body: RUMRetentionQuotaConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMRetentionQuotaConfigResponse",
        "",
      ) as RUMRetentionQuotaConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface RUMRetentionQuotasApiDeleteRUMQuotaConfigRequest {
  /**
   * The type of scope the retention quota configuration applies to.
   * `application` is the only supported scope type.
   * @type RUMRetentionQuotaScopeType
   */
  scopeType: RUMRetentionQuotaScopeType;
  /**
   * The identifier of the scope the retention quota configuration applies to.
   * For the `application` scope, this is the RUM application ID.
   * @type string
   */
  scopeId: string;
}

export interface RUMRetentionQuotasApiGetRUMQuotaConfigRequest {
  /**
   * The type of scope the retention quota configuration applies to.
   * `application` is the only supported scope type.
   * @type RUMRetentionQuotaScopeType
   */
  scopeType: RUMRetentionQuotaScopeType;
  /**
   * The identifier of the scope the retention quota configuration applies to.
   * For the `application` scope, this is the RUM application ID.
   * @type string
   */
  scopeId: string;
}

export interface RUMRetentionQuotasApiUpsertRUMQuotaConfigRequest {
  /**
   * The type of scope the retention quota configuration applies to.
   * `application` is the only supported scope type.
   * @type RUMRetentionQuotaScopeType
   */
  scopeType: RUMRetentionQuotaScopeType;
  /**
   * The identifier of the scope the retention quota configuration applies to.
   * For the `application` scope, this is the RUM application ID.
   * @type string
   */
  scopeId: string;
  /**
   * The definition of the RUM retention quota configuration to create or update.
   * @type RUMRetentionQuotaConfigUpdateRequest
   */
  body: RUMRetentionQuotaConfigUpdateRequest;
}

export class RUMRetentionQuotasApi {
  private requestFactory: RUMRetentionQuotasApiRequestFactory;
  private responseProcessor: RUMRetentionQuotasApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: RUMRetentionQuotasApiRequestFactory,
    responseProcessor?: RUMRetentionQuotasApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new RUMRetentionQuotasApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new RUMRetentionQuotasApiResponseProcessor();
  }

  /**
   * Delete the RUM retention quota configuration for a given scope.
   * @param param The request object
   */
  public deleteRUMQuotaConfig(
    param: RUMRetentionQuotasApiDeleteRUMQuotaConfigRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRUMQuotaConfig(
      param.scopeType,
      param.scopeId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRUMQuotaConfig(responseContext);
        });
    });
  }

  /**
   * Get the RUM retention quota configuration for a given scope.
   * @param param The request object
   */
  public getRUMQuotaConfig(
    param: RUMRetentionQuotasApiGetRUMQuotaConfigRequest,
    options?: Configuration,
  ): Promise<RUMRetentionQuotaConfigResponse> {
    const requestContextPromise = this.requestFactory.getRUMQuotaConfig(
      param.scopeType,
      param.scopeId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRUMQuotaConfig(responseContext);
        });
    });
  }

  /**
   * Create or update the RUM retention quota configuration for a given scope.
   * Returns the retention quota configuration object when the request is successful.
   * @param param The request object
   */
  public upsertRUMQuotaConfig(
    param: RUMRetentionQuotasApiUpsertRUMQuotaConfigRequest,
    options?: Configuration,
  ): Promise<RUMRetentionQuotaConfigResponse> {
    const requestContextPromise = this.requestFactory.upsertRUMQuotaConfig(
      param.scopeType,
      param.scopeId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertRUMQuotaConfig(responseContext);
        });
    });
  }
}
