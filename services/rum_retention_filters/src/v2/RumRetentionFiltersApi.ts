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
import { RumExclusionFilterCreateRequest } from "./models/RumExclusionFilterCreateRequest";
import { RumExclusionFilterResponse } from "./models/RumExclusionFilterResponse";
import { RumExclusionFiltersResponse } from "./models/RumExclusionFiltersResponse";
import { RumExclusionFilterUpdateRequest } from "./models/RumExclusionFilterUpdateRequest";
import { RumPermanentRetentionFilterID } from "./models/RumPermanentRetentionFilterID";
import { RumPermanentRetentionFilterResponse } from "./models/RumPermanentRetentionFilterResponse";
import { RumPermanentRetentionFiltersResponse } from "./models/RumPermanentRetentionFiltersResponse";
import { RumPermanentRetentionFilterUpdateRequest } from "./models/RumPermanentRetentionFilterUpdateRequest";
import { RumRetentionFilterCreateRequest } from "./models/RumRetentionFilterCreateRequest";
import { RumRetentionFilterResponse } from "./models/RumRetentionFilterResponse";
import { RumRetentionFiltersOrderRequest } from "./models/RumRetentionFiltersOrderRequest";
import { RumRetentionFiltersOrderResponse } from "./models/RumRetentionFiltersOrderResponse";
import { RumRetentionFiltersResponse } from "./models/RumRetentionFiltersResponse";
import { RumRetentionFilterUpdateRequest } from "./models/RumRetentionFilterUpdateRequest";
import { version } from "../version";

export class RumRetentionFiltersApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("rum-retention-filters", version);
    }
  }
  public async createExclusionFilter(
    appId: string,
    body: RumExclusionFilterCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumRetentionFiltersApi.v2.createExclusionFilter"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createExclusionFilter' is disabled. Enable it by setting `configuration.unstableOperations['RumRetentionFiltersApi.v2.createExclusionFilter'] = true`",
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "createExclusionFilter");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createExclusionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters/exclusion".replace(
        "{app_id}",
        encodeURIComponent(String(appId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumRetentionFiltersApi.v2.createExclusionFilter",
      RumRetentionFiltersApi.operationServers,
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
      serialize(body, TypingInfo, "RumExclusionFilterCreateRequest", ""),
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

  public async createRetentionFilter(
    appId: string,
    body: RumRetentionFilterCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "createRetentionFilter");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRetentionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters".replace(
        "{app_id}",
        encodeURIComponent(String(appId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumRetentionFiltersApi.v2.createRetentionFilter",
      RumRetentionFiltersApi.operationServers,
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
      serialize(body, TypingInfo, "RumRetentionFilterCreateRequest", ""),
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

  public async deleteExclusionFilter(
    appId: string,
    efId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumRetentionFiltersApi.v2.deleteExclusionFilter"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteExclusionFilter' is disabled. Enable it by setting `configuration.unstableOperations['RumRetentionFiltersApi.v2.deleteExclusionFilter'] = true`",
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "deleteExclusionFilter");
    }

    // verify required parameter 'efId' is not null or undefined
    if (efId === null || efId === undefined) {
      throw new RequiredError("efId", "deleteExclusionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters/exclusion/{ef_id}"
        .replace("{app_id}", encodeURIComponent(String(appId)))
        .replace("{ef_id}", encodeURIComponent(String(efId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumRetentionFiltersApi.v2.deleteExclusionFilter",
      RumRetentionFiltersApi.operationServers,
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

  public async deleteRetentionFilter(
    appId: string,
    rfId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "deleteRetentionFilter");
    }

    // verify required parameter 'rfId' is not null or undefined
    if (rfId === null || rfId === undefined) {
      throw new RequiredError("rfId", "deleteRetentionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters/{rf_id}"
        .replace("{app_id}", encodeURIComponent(String(appId)))
        .replace("{rf_id}", encodeURIComponent(String(rfId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumRetentionFiltersApi.v2.deleteRetentionFilter",
      RumRetentionFiltersApi.operationServers,
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

  public async getExclusionFilter(
    appId: string,
    efId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumRetentionFiltersApi.v2.getExclusionFilter"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getExclusionFilter' is disabled. Enable it by setting `configuration.unstableOperations['RumRetentionFiltersApi.v2.getExclusionFilter'] = true`",
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "getExclusionFilter");
    }

    // verify required parameter 'efId' is not null or undefined
    if (efId === null || efId === undefined) {
      throw new RequiredError("efId", "getExclusionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters/exclusion/{ef_id}"
        .replace("{app_id}", encodeURIComponent(String(appId)))
        .replace("{ef_id}", encodeURIComponent(String(efId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumRetentionFiltersApi.v2.getExclusionFilter",
      RumRetentionFiltersApi.operationServers,
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

  public async getPermanentRetentionFilter(
    appId: string,
    permanentRfId: RumPermanentRetentionFilterID,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "getPermanentRetentionFilter");
    }

    // verify required parameter 'permanentRfId' is not null or undefined
    if (permanentRfId === null || permanentRfId === undefined) {
      throw new RequiredError("permanentRfId", "getPermanentRetentionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters/permanent/{permanent_rf_id}"
        .replace("{app_id}", encodeURIComponent(String(appId)))
        .replace(
          "{permanent_rf_id}",
          encodeURIComponent(String(permanentRfId)),
        );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumRetentionFiltersApi.v2.getPermanentRetentionFilter",
      RumRetentionFiltersApi.operationServers,
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

  public async getRetentionFilter(
    appId: string,
    rfId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "getRetentionFilter");
    }

    // verify required parameter 'rfId' is not null or undefined
    if (rfId === null || rfId === undefined) {
      throw new RequiredError("rfId", "getRetentionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters/{rf_id}"
        .replace("{app_id}", encodeURIComponent(String(appId)))
        .replace("{rf_id}", encodeURIComponent(String(rfId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumRetentionFiltersApi.v2.getRetentionFilter",
      RumRetentionFiltersApi.operationServers,
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

  public async listExclusionFilters(
    appId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumRetentionFiltersApi.v2.listExclusionFilters"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listExclusionFilters' is disabled. Enable it by setting `configuration.unstableOperations['RumRetentionFiltersApi.v2.listExclusionFilters'] = true`",
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "listExclusionFilters");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters/exclusion".replace(
        "{app_id}",
        encodeURIComponent(String(appId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumRetentionFiltersApi.v2.listExclusionFilters",
      RumRetentionFiltersApi.operationServers,
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

  public async listPermanentRetentionFilters(
    appId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "listPermanentRetentionFilters");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters/permanent".replace(
        "{app_id}",
        encodeURIComponent(String(appId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumRetentionFiltersApi.v2.listPermanentRetentionFilters",
      RumRetentionFiltersApi.operationServers,
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

  public async listRetentionFilters(
    appId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "listRetentionFilters");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters".replace(
        "{app_id}",
        encodeURIComponent(String(appId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumRetentionFiltersApi.v2.listRetentionFilters",
      RumRetentionFiltersApi.operationServers,
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

  public async orderRetentionFilters(
    appId: string,
    body: RumRetentionFiltersOrderRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "orderRetentionFilters");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "orderRetentionFilters");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/relationships/retention_filters".replace(
        "{app_id}",
        encodeURIComponent(String(appId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumRetentionFiltersApi.v2.orderRetentionFilters",
      RumRetentionFiltersApi.operationServers,
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
      serialize(body, TypingInfo, "RumRetentionFiltersOrderRequest", ""),
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

  public async updateExclusionFilter(
    appId: string,
    efId: string,
    body: RumExclusionFilterUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumRetentionFiltersApi.v2.updateExclusionFilter"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateExclusionFilter' is disabled. Enable it by setting `configuration.unstableOperations['RumRetentionFiltersApi.v2.updateExclusionFilter'] = true`",
      );
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "updateExclusionFilter");
    }

    // verify required parameter 'efId' is not null or undefined
    if (efId === null || efId === undefined) {
      throw new RequiredError("efId", "updateExclusionFilter");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateExclusionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters/exclusion/{ef_id}"
        .replace("{app_id}", encodeURIComponent(String(appId)))
        .replace("{ef_id}", encodeURIComponent(String(efId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumRetentionFiltersApi.v2.updateExclusionFilter",
      RumRetentionFiltersApi.operationServers,
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
      serialize(body, TypingInfo, "RumExclusionFilterUpdateRequest", ""),
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

  public async updatePermanentRetentionFilter(
    appId: string,
    permanentRfId: RumPermanentRetentionFilterID,
    body: RumPermanentRetentionFilterUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "updatePermanentRetentionFilter");
    }

    // verify required parameter 'permanentRfId' is not null or undefined
    if (permanentRfId === null || permanentRfId === undefined) {
      throw new RequiredError(
        "permanentRfId",
        "updatePermanentRetentionFilter",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updatePermanentRetentionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters/permanent/{permanent_rf_id}"
        .replace("{app_id}", encodeURIComponent(String(appId)))
        .replace(
          "{permanent_rf_id}",
          encodeURIComponent(String(permanentRfId)),
        );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumRetentionFiltersApi.v2.updatePermanentRetentionFilter",
      RumRetentionFiltersApi.operationServers,
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
        "RumPermanentRetentionFilterUpdateRequest",
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

  public async updateRetentionFilter(
    appId: string,
    rfId: string,
    body: RumRetentionFilterUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "updateRetentionFilter");
    }

    // verify required parameter 'rfId' is not null or undefined
    if (rfId === null || rfId === undefined) {
      throw new RequiredError("rfId", "updateRetentionFilter");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateRetentionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/retention_filters/{rf_id}"
        .replace("{app_id}", encodeURIComponent(String(appId)))
        .replace("{rf_id}", encodeURIComponent(String(rfId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumRetentionFiltersApi.v2.updateRetentionFilter",
      RumRetentionFiltersApi.operationServers,
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
      serialize(body, TypingInfo, "RumRetentionFilterUpdateRequest", ""),
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

export class RumRetentionFiltersApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createExclusionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createExclusionFilter(
    response: ResponseContext,
  ): Promise<RumExclusionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: RumExclusionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumExclusionFilterResponse",
      ) as RumExclusionFilterResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: RumExclusionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumExclusionFilterResponse",
        "",
      ) as RumExclusionFilterResponse;
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
   * @params response Response returned by the server for a request to createRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRetentionFilter(
    response: ResponseContext,
  ): Promise<RumRetentionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: RumRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFilterResponse",
      ) as RumRetentionFilterResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: RumRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFilterResponse",
        "",
      ) as RumRetentionFilterResponse;
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
   * @params response Response returned by the server for a request to deleteExclusionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteExclusionFilter(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 405 ||
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
   * @params response Response returned by the server for a request to deleteRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRetentionFilter(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to getExclusionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getExclusionFilter(
    response: ResponseContext,
  ): Promise<RumExclusionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumExclusionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumExclusionFilterResponse",
      ) as RumExclusionFilterResponse;
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
      const body: RumExclusionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumExclusionFilterResponse",
        "",
      ) as RumExclusionFilterResponse;
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
   * @params response Response returned by the server for a request to getPermanentRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPermanentRetentionFilter(
    response: ResponseContext,
  ): Promise<RumPermanentRetentionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumPermanentRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumPermanentRetentionFilterResponse",
      ) as RumPermanentRetentionFilterResponse;
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
      const body: RumPermanentRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumPermanentRetentionFilterResponse",
        "",
      ) as RumPermanentRetentionFilterResponse;
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
   * @params response Response returned by the server for a request to getRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRetentionFilter(
    response: ResponseContext,
  ): Promise<RumRetentionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFilterResponse",
      ) as RumRetentionFilterResponse;
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
      const body: RumRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFilterResponse",
        "",
      ) as RumRetentionFilterResponse;
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
   * @params response Response returned by the server for a request to listExclusionFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listExclusionFilters(
    response: ResponseContext,
  ): Promise<RumExclusionFiltersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumExclusionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumExclusionFiltersResponse",
      ) as RumExclusionFiltersResponse;
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
      const body: RumExclusionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumExclusionFiltersResponse",
        "",
      ) as RumExclusionFiltersResponse;
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
   * @params response Response returned by the server for a request to listPermanentRetentionFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listPermanentRetentionFilters(
    response: ResponseContext,
  ): Promise<RumPermanentRetentionFiltersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumPermanentRetentionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumPermanentRetentionFiltersResponse",
      ) as RumPermanentRetentionFiltersResponse;
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
      const body: RumPermanentRetentionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumPermanentRetentionFiltersResponse",
        "",
      ) as RumPermanentRetentionFiltersResponse;
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
   * @params response Response returned by the server for a request to listRetentionFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRetentionFilters(
    response: ResponseContext,
  ): Promise<RumRetentionFiltersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumRetentionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFiltersResponse",
      ) as RumRetentionFiltersResponse;
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
      const body: RumRetentionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFiltersResponse",
        "",
      ) as RumRetentionFiltersResponse;
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
   * @params response Response returned by the server for a request to orderRetentionFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async orderRetentionFilters(
    response: ResponseContext,
  ): Promise<RumRetentionFiltersOrderResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumRetentionFiltersOrderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFiltersOrderResponse",
      ) as RumRetentionFiltersOrderResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: RumRetentionFiltersOrderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFiltersOrderResponse",
        "",
      ) as RumRetentionFiltersOrderResponse;
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
   * @params response Response returned by the server for a request to updateExclusionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateExclusionFilter(
    response: ResponseContext,
  ): Promise<RumExclusionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumExclusionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumExclusionFilterResponse",
      ) as RumExclusionFilterResponse;
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
      const body: RumExclusionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumExclusionFilterResponse",
        "",
      ) as RumExclusionFilterResponse;
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
   * @params response Response returned by the server for a request to updatePermanentRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updatePermanentRetentionFilter(
    response: ResponseContext,
  ): Promise<RumPermanentRetentionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumPermanentRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumPermanentRetentionFilterResponse",
      ) as RumPermanentRetentionFilterResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: RumPermanentRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumPermanentRetentionFilterResponse",
        "",
      ) as RumPermanentRetentionFilterResponse;
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
   * @params response Response returned by the server for a request to updateRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRetentionFilter(
    response: ResponseContext,
  ): Promise<RumRetentionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFilterResponse",
      ) as RumRetentionFilterResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: RumRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumRetentionFilterResponse",
        "",
      ) as RumRetentionFilterResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface RumRetentionFiltersApiCreateExclusionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * The definition of the new RUM exclusion filter.
   * @type RumExclusionFilterCreateRequest
   */
  body: RumExclusionFilterCreateRequest;
}

export interface RumRetentionFiltersApiCreateRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * The definition of the new RUM retention filter.
   * @type RumRetentionFilterCreateRequest
   */
  body: RumRetentionFilterCreateRequest;
}

export interface RumRetentionFiltersApiDeleteExclusionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * Exclusion filter ID.
   * @type string
   */
  efId: string;
}

export interface RumRetentionFiltersApiDeleteRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * Retention filter ID.
   * @type string
   */
  rfId: string;
}

export interface RumRetentionFiltersApiGetExclusionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * Exclusion filter ID.
   * @type string
   */
  efId: string;
}

export interface RumRetentionFiltersApiGetPermanentRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * The identifier of the permanent RUM retention filter.
   * @type RumPermanentRetentionFilterID
   */
  permanentRfId: RumPermanentRetentionFilterID;
}

export interface RumRetentionFiltersApiGetRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * Retention filter ID.
   * @type string
   */
  rfId: string;
}

export interface RumRetentionFiltersApiListExclusionFiltersRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
}

export interface RumRetentionFiltersApiListPermanentRetentionFiltersRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
}

export interface RumRetentionFiltersApiListRetentionFiltersRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
}

export interface RumRetentionFiltersApiOrderRetentionFiltersRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * New definition of the RUM retention filter.
   * @type RumRetentionFiltersOrderRequest
   */
  body: RumRetentionFiltersOrderRequest;
}

export interface RumRetentionFiltersApiUpdateExclusionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * Exclusion filter ID.
   * @type string
   */
  efId: string;
  /**
   * New definition of the RUM exclusion filter.
   * @type RumExclusionFilterUpdateRequest
   */
  body: RumExclusionFilterUpdateRequest;
}

export interface RumRetentionFiltersApiUpdatePermanentRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * The identifier of the permanent RUM retention filter.
   * @type RumPermanentRetentionFilterID
   */
  permanentRfId: RumPermanentRetentionFilterID;
  /**
   * New configuration of the permanent RUM retention filter.
   * @type RumPermanentRetentionFilterUpdateRequest
   */
  body: RumPermanentRetentionFilterUpdateRequest;
}

export interface RumRetentionFiltersApiUpdateRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * Retention filter ID.
   * @type string
   */
  rfId: string;
  /**
   * New definition of the RUM retention filter.
   * @type RumRetentionFilterUpdateRequest
   */
  body: RumRetentionFilterUpdateRequest;
}

export class RumRetentionFiltersApi {
  private requestFactory: RumRetentionFiltersApiRequestFactory;
  private responseProcessor: RumRetentionFiltersApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: RumRetentionFiltersApiRequestFactory,
    responseProcessor?: RumRetentionFiltersApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new RumRetentionFiltersApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new RumRetentionFiltersApiResponseProcessor();
  }

  /**
   * Create an exclusion filter for a RUM application.
   * Returns the created exclusion filter when the request is successful.
   * @param param The request object
   */
  public createExclusionFilter(
    param: RumRetentionFiltersApiCreateExclusionFilterRequest,
    options?: Configuration,
  ): Promise<RumExclusionFilterResponse> {
    const requestContextPromise = this.requestFactory.createExclusionFilter(
      param.appId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createExclusionFilter(responseContext);
        });
    });
  }

  /**
   * Create a RUM retention filter for a RUM application.
   * Returns RUM retention filter objects from the request body when the request is successful.
   * @param param The request object
   */
  public createRetentionFilter(
    param: RumRetentionFiltersApiCreateRetentionFilterRequest,
    options?: Configuration,
  ): Promise<RumRetentionFilterResponse> {
    const requestContextPromise = this.requestFactory.createRetentionFilter(
      param.appId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRetentionFilter(responseContext);
        });
    });
  }

  /**
   * Delete an exclusion filter for a RUM application.
   * The built-in Error Tracking exclusion filter (`error_tracking_exclusion_filter`) cannot be deleted;
   * attempting to do so returns a `405 Method Not Allowed` response.
   * @param param The request object
   */
  public deleteExclusionFilter(
    param: RumRetentionFiltersApiDeleteExclusionFilterRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteExclusionFilter(
      param.appId,
      param.efId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteExclusionFilter(responseContext);
        });
    });
  }

  /**
   * Delete a RUM retention filter for a RUM application.
   * @param param The request object
   */
  public deleteRetentionFilter(
    param: RumRetentionFiltersApiDeleteRetentionFilterRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRetentionFilter(
      param.appId,
      param.rfId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRetentionFilter(responseContext);
        });
    });
  }

  /**
   * Get a single exclusion filter for a RUM application.
   * @param param The request object
   */
  public getExclusionFilter(
    param: RumRetentionFiltersApiGetExclusionFilterRequest,
    options?: Configuration,
  ): Promise<RumExclusionFilterResponse> {
    const requestContextPromise = this.requestFactory.getExclusionFilter(
      param.appId,
      param.efId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getExclusionFilter(responseContext);
        });
    });
  }

  /**
   * Get a permanent RUM retention filter for a RUM application by its identifier.
   * @param param The request object
   */
  public getPermanentRetentionFilter(
    param: RumRetentionFiltersApiGetPermanentRetentionFilterRequest,
    options?: Configuration,
  ): Promise<RumPermanentRetentionFilterResponse> {
    const requestContextPromise =
      this.requestFactory.getPermanentRetentionFilter(
        param.appId,
        param.permanentRfId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getPermanentRetentionFilter(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a RUM retention filter for a RUM application.
   * @param param The request object
   */
  public getRetentionFilter(
    param: RumRetentionFiltersApiGetRetentionFilterRequest,
    options?: Configuration,
  ): Promise<RumRetentionFilterResponse> {
    const requestContextPromise = this.requestFactory.getRetentionFilter(
      param.appId,
      param.rfId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRetentionFilter(responseContext);
        });
    });
  }

  /**
   * Get the list of exclusion filters for a RUM application.
   * The built-in Error Tracking exclusion filter (`error_tracking_exclusion_filter`) is always returned first.
   * @param param The request object
   */
  public listExclusionFilters(
    param: RumRetentionFiltersApiListExclusionFiltersRequest,
    options?: Configuration,
  ): Promise<RumExclusionFiltersResponse> {
    const requestContextPromise = this.requestFactory.listExclusionFilters(
      param.appId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listExclusionFilters(responseContext);
        });
    });
  }

  /**
   * Get the list of permanent RUM retention filters for a RUM application.
   * Permanent retention filters are predefined filters that cannot be created or deleted.
   * For each filter, the `editability` block indicates which cross-product fields can be updated.
   * @param param The request object
   */
  public listPermanentRetentionFilters(
    param: RumRetentionFiltersApiListPermanentRetentionFiltersRequest,
    options?: Configuration,
  ): Promise<RumPermanentRetentionFiltersResponse> {
    const requestContextPromise =
      this.requestFactory.listPermanentRetentionFilters(param.appId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listPermanentRetentionFilters(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the list of RUM retention filters for a RUM application.
   * @param param The request object
   */
  public listRetentionFilters(
    param: RumRetentionFiltersApiListRetentionFiltersRequest,
    options?: Configuration,
  ): Promise<RumRetentionFiltersResponse> {
    const requestContextPromise = this.requestFactory.listRetentionFilters(
      param.appId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRetentionFilters(responseContext);
        });
    });
  }

  /**
   * Order RUM retention filters for a RUM application.
   * Returns RUM retention filter objects without attributes from the request body when the request is successful.
   * @param param The request object
   */
  public orderRetentionFilters(
    param: RumRetentionFiltersApiOrderRetentionFiltersRequest,
    options?: Configuration,
  ): Promise<RumRetentionFiltersOrderResponse> {
    const requestContextPromise = this.requestFactory.orderRetentionFilters(
      param.appId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.orderRetentionFilters(responseContext);
        });
    });
  }

  /**
   * Update an exclusion filter for a RUM application.
   * For the built-in Error Tracking exclusion filter (`error_tracking_exclusion_filter`), only `enabled` can be
   * updated; `name`, `event_type`, and `query` must be omitted.
   * Returns the updated exclusion filter when the request is successful.
   * @param param The request object
   */
  public updateExclusionFilter(
    param: RumRetentionFiltersApiUpdateExclusionFilterRequest,
    options?: Configuration,
  ): Promise<RumExclusionFilterResponse> {
    const requestContextPromise = this.requestFactory.updateExclusionFilter(
      param.appId,
      param.efId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateExclusionFilter(responseContext);
        });
    });
  }

  /**
   * Update the cross-product sampling configuration of a permanent RUM retention filter for a RUM application.
   * Only fields marked as editable in the `editability` block of the filter can be updated.
   * Updating a non-editable field returns a `400` response.
   * @param param The request object
   */
  public updatePermanentRetentionFilter(
    param: RumRetentionFiltersApiUpdatePermanentRetentionFilterRequest,
    options?: Configuration,
  ): Promise<RumPermanentRetentionFilterResponse> {
    const requestContextPromise =
      this.requestFactory.updatePermanentRetentionFilter(
        param.appId,
        param.permanentRfId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updatePermanentRetentionFilter(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a RUM retention filter for a RUM application.
   * Returns RUM retention filter objects from the request body when the request is successful.
   * @param param The request object
   */
  public updateRetentionFilter(
    param: RumRetentionFiltersApiUpdateRetentionFilterRequest,
    options?: Configuration,
  ): Promise<RumRetentionFilterResponse> {
    const requestContextPromise = this.requestFactory.updateRetentionFilter(
      param.appId,
      param.rfId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRetentionFilter(responseContext);
        });
    });
  }
}
