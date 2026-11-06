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
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { RumArchiveConfigListResponse } from "./models/RumArchiveConfigListResponse";
import { RumArchiveConfigResponse } from "./models/RumArchiveConfigResponse";
import { RumArchiveConfigUpsertRequest } from "./models/RumArchiveConfigUpsertRequest";
import { RumManagedArchiveErrorResponse } from "./models/RumManagedArchiveErrorResponse";
import { version } from "../version";

export class RUMManagedArchivesApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("rum-managed-archives", version);
    }
  }
  public async deleteRUMArchiveConfig(
    appId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "deleteRUMArchiveConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/config/archive/{app_id}".replace(
      "{app_id}",
      encodeURIComponent(String(appId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMManagedArchivesApi.v2.deleteRUMArchiveConfig",
      RUMManagedArchivesApi.operationServers,
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
    ]);

    return requestContext;
  }

  public async getRUMArchiveConfig(
    appId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "getRUMArchiveConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/config/archive/{app_id}".replace(
      "{app_id}",
      encodeURIComponent(String(appId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMManagedArchivesApi.v2.getRUMArchiveConfig",
      RUMManagedArchivesApi.operationServers,
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
    ]);

    return requestContext;
  }

  public async listRUMArchiveConfigs(
    pageNumber?: number,
    pageSize?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/rum/config/archive";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMManagedArchivesApi.v2.listRUMArchiveConfigs",
      RUMManagedArchivesApi.operationServers,
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

    // Query Params
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int32"),
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

  public async updateRUMArchiveConfig(
    appId: string,
    body: RumArchiveConfigUpsertRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "updateRUMArchiveConfig");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateRUMArchiveConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/config/archive/{app_id}".replace(
      "{app_id}",
      encodeURIComponent(String(appId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMManagedArchivesApi.v2.updateRUMArchiveConfig",
      RUMManagedArchivesApi.operationServers,
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
      serialize(body, TypingInfo, "RumArchiveConfigUpsertRequest", ""),
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

export class RUMManagedArchivesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteRUMArchiveConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRUMArchiveConfig(
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
    if (
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: RumManagedArchiveErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "RumManagedArchiveErrorResponse",
        ) as RumManagedArchiveErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<RumManagedArchiveErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<RumManagedArchiveErrorResponse>(
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
   * @params response Response returned by the server for a request to getRUMArchiveConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRUMArchiveConfig(
    response: ResponseContext,
  ): Promise<RumArchiveConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumArchiveConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumArchiveConfigResponse",
      ) as RumArchiveConfigResponse;
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
    if (
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: RumManagedArchiveErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "RumManagedArchiveErrorResponse",
        ) as RumManagedArchiveErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<RumManagedArchiveErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<RumManagedArchiveErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RumArchiveConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumArchiveConfigResponse",
        "",
      ) as RumArchiveConfigResponse;
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
   * @params response Response returned by the server for a request to listRUMArchiveConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRUMArchiveConfigs(
    response: ResponseContext,
  ): Promise<RumArchiveConfigListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumArchiveConfigListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumArchiveConfigListResponse",
      ) as RumArchiveConfigListResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
    if (
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: RumManagedArchiveErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "RumManagedArchiveErrorResponse",
        ) as RumManagedArchiveErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<RumManagedArchiveErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<RumManagedArchiveErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RumArchiveConfigListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumArchiveConfigListResponse",
        "",
      ) as RumArchiveConfigListResponse;
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
   * @params response Response returned by the server for a request to updateRUMArchiveConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRUMArchiveConfig(
    response: ResponseContext,
  ): Promise<RumArchiveConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumArchiveConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumArchiveConfigResponse",
      ) as RumArchiveConfigResponse;
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
    if (
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: RumManagedArchiveErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "RumManagedArchiveErrorResponse",
        ) as RumManagedArchiveErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<RumManagedArchiveErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<RumManagedArchiveErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RumArchiveConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumArchiveConfigResponse",
        "",
      ) as RumArchiveConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface RUMManagedArchivesApiDeleteRUMArchiveConfigRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
}

export interface RUMManagedArchivesApiGetRUMArchiveConfigRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
}

export interface RUMManagedArchivesApiListRUMArchiveConfigsRequest {
  /**
   * Page number.
   * @type number
   */
  pageNumber?: number;
  /**
   * Configurations per page.
   * @type number
   */
  pageSize?: number;
}

export interface RUMManagedArchivesApiUpdateRUMArchiveConfigRequest {
  /**
   * RUM application ID. Must match data.id for PUT.
   * @type string
   */
  appId: string;
  /**
   * JSON:API request body.
   * @type RumArchiveConfigUpsertRequest
   */
  body: RumArchiveConfigUpsertRequest;
}

export class RUMManagedArchivesApi {
  private requestFactory: RUMManagedArchivesApiRequestFactory;
  private responseProcessor: RUMManagedArchivesApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: RUMManagedArchivesApiRequestFactory,
    responseProcessor?: RUMManagedArchivesApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new RUMManagedArchivesApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new RUMManagedArchivesApiResponseProcessor();
  }

  /**
   * Delete the archive configuration for a RUM application. Archived and recovered session data is not deleted.
   * @param param The request object
   */
  public deleteRUMArchiveConfig(
    param: RUMManagedArchivesApiDeleteRUMArchiveConfigRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRUMArchiveConfig(
      param.appId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRUMArchiveConfig(responseContext);
        });
    });
  }

  /**
   * Get the archive configuration for a RUM application.
   * @param param The request object
   */
  public getRUMArchiveConfig(
    param: RUMManagedArchivesApiGetRUMArchiveConfigRequest,
    options?: Configuration,
  ): Promise<RumArchiveConfigResponse> {
    const requestContextPromise = this.requestFactory.getRUMArchiveConfig(
      param.appId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRUMArchiveConfig(responseContext);
        });
    });
  }

  /**
   * Get the list of archive configurations for your organization.
   * @param param The request object
   */
  public listRUMArchiveConfigs(
    param: RUMManagedArchivesApiListRUMArchiveConfigsRequest = {},
    options?: Configuration,
  ): Promise<RumArchiveConfigListResponse> {
    const requestContextPromise = this.requestFactory.listRUMArchiveConfigs(
      param.pageNumber,
      param.pageSize,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRUMArchiveConfigs(responseContext);
        });
    });
  }

  /**
   * Create or update the archive configuration for a RUM application. The application ID in the path must match `data.id`. Disabling archiving does not delete archived sessions.
   * @param param The request object
   */
  public updateRUMArchiveConfig(
    param: RUMManagedArchivesApiUpdateRUMArchiveConfigRequest,
    options?: Configuration,
  ): Promise<RumArchiveConfigResponse> {
    const requestContextPromise = this.requestFactory.updateRUMArchiveConfig(
      param.appId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRUMArchiveConfig(responseContext);
        });
    });
  }
}
