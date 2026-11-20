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
import { RUMExclusionFilterCreateRequest } from "./models/RUMExclusionFilterCreateRequest";
import { RUMExclusionFilterResponse } from "./models/RUMExclusionFilterResponse";
import { RUMExclusionFiltersResponse } from "./models/RUMExclusionFiltersResponse";
import { RUMExclusionFilterUpdateRequest } from "./models/RUMExclusionFilterUpdateRequest";
import { RUMPermanentRetentionFilterID } from "./models/RUMPermanentRetentionFilterID";
import { RUMPermanentRetentionFilterResponse } from "./models/RUMPermanentRetentionFilterResponse";
import { RUMPermanentRetentionFiltersResponse } from "./models/RUMPermanentRetentionFiltersResponse";
import { RUMPermanentRetentionFilterUpdateRequest } from "./models/RUMPermanentRetentionFilterUpdateRequest";
import { RUMRetentionFilterCreateRequest } from "./models/RUMRetentionFilterCreateRequest";
import { RUMRetentionFilterResponse } from "./models/RUMRetentionFilterResponse";
import { RUMRetentionFiltersOrderRequest } from "./models/RUMRetentionFiltersOrderRequest";
import { RUMRetentionFiltersOrderResponse } from "./models/RUMRetentionFiltersOrderResponse";
import { RUMRetentionFiltersResponse } from "./models/RUMRetentionFiltersResponse";
import { RUMRetentionFilterUpdateRequest } from "./models/RUMRetentionFilterUpdateRequest";
import { version } from "../version";

export class RUMRetentionFiltersApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("rum-retention-filters", version);
    }
  }
  public async createExclusionFilter(
    appId: string,
    body: RUMExclusionFilterCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

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
      "RUMRetentionFiltersApi.v2.createExclusionFilter",
      RUMRetentionFiltersApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "RUMExclusionFilterCreateRequest", ""),
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

  public async createRetentionFilter(
    appId: string,
    body: RUMRetentionFilterCreateRequest,
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
      "RUMRetentionFiltersApi.v2.createRetentionFilter",
      RUMRetentionFiltersApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "RUMRetentionFilterCreateRequest", ""),
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

  public async deleteExclusionFilter(
    appId: string,
    efId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

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
      "RUMRetentionFiltersApi.v2.deleteExclusionFilter",
      RUMRetentionFiltersApi.operationServers,
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
      "RUMRetentionFiltersApi.v2.deleteRetentionFilter",
      RUMRetentionFiltersApi.operationServers,
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

  public async getExclusionFilter(
    appId: string,
    efId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

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
      "RUMRetentionFiltersApi.v2.getExclusionFilter",
      RUMRetentionFiltersApi.operationServers,
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

  public async getPermanentRetentionFilter(
    appId: string,
    permanentRfId: RUMPermanentRetentionFilterID,
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
      "RUMRetentionFiltersApi.v2.getPermanentRetentionFilter",
      RUMRetentionFiltersApi.operationServers,
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
      "RUMRetentionFiltersApi.v2.getRetentionFilter",
      RUMRetentionFiltersApi.operationServers,
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

  public async listExclusionFilters(
    appId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

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
      "RUMRetentionFiltersApi.v2.listExclusionFilters",
      RUMRetentionFiltersApi.operationServers,
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
      "RUMRetentionFiltersApi.v2.listPermanentRetentionFilters",
      RUMRetentionFiltersApi.operationServers,
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
      "RUMRetentionFiltersApi.v2.listRetentionFilters",
      RUMRetentionFiltersApi.operationServers,
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

  public async orderRetentionFilters(
    appId: string,
    body: RUMRetentionFiltersOrderRequest,
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
      "RUMRetentionFiltersApi.v2.orderRetentionFilters",
      RUMRetentionFiltersApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "RUMRetentionFiltersOrderRequest", ""),
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

  public async updateExclusionFilter(
    appId: string,
    efId: string,
    body: RUMExclusionFilterUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

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
      "RUMRetentionFiltersApi.v2.updateExclusionFilter",
      RUMRetentionFiltersApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "RUMExclusionFilterUpdateRequest", ""),
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

  public async updatePermanentRetentionFilter(
    appId: string,
    permanentRfId: RUMPermanentRetentionFilterID,
    body: RUMPermanentRetentionFilterUpdateRequest,
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
      "RUMRetentionFiltersApi.v2.updatePermanentRetentionFilter",
      RUMRetentionFiltersApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "RUMPermanentRetentionFilterUpdateRequest",
        "",
      ),
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

  public async updateRetentionFilter(
    appId: string,
    rfId: string,
    body: RUMRetentionFilterUpdateRequest,
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
      "RUMRetentionFiltersApi.v2.updateRetentionFilter",
      RUMRetentionFiltersApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "RUMRetentionFilterUpdateRequest", ""),
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

export class RUMRetentionFiltersApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createExclusionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createExclusionFilter(
    response: ResponseContext,
  ): Promise<RUMExclusionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: RUMExclusionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMExclusionFilterResponse",
      ) as RUMExclusionFilterResponse;
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
      const body: RUMExclusionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMExclusionFilterResponse",
        "",
      ) as RUMExclusionFilterResponse;
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
  ): Promise<RUMRetentionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: RUMRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMRetentionFilterResponse",
      ) as RUMRetentionFilterResponse;
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
      const body: RUMRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMRetentionFilterResponse",
        "",
      ) as RUMRetentionFilterResponse;
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
  ): Promise<RUMExclusionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMExclusionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMExclusionFilterResponse",
      ) as RUMExclusionFilterResponse;
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
      const body: RUMExclusionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMExclusionFilterResponse",
        "",
      ) as RUMExclusionFilterResponse;
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
  ): Promise<RUMPermanentRetentionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMPermanentRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMPermanentRetentionFilterResponse",
      ) as RUMPermanentRetentionFilterResponse;
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
      const body: RUMPermanentRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMPermanentRetentionFilterResponse",
        "",
      ) as RUMPermanentRetentionFilterResponse;
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
  ): Promise<RUMRetentionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMRetentionFilterResponse",
      ) as RUMRetentionFilterResponse;
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
      const body: RUMRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMRetentionFilterResponse",
        "",
      ) as RUMRetentionFilterResponse;
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
  ): Promise<RUMExclusionFiltersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMExclusionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMExclusionFiltersResponse",
      ) as RUMExclusionFiltersResponse;
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
      const body: RUMExclusionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMExclusionFiltersResponse",
        "",
      ) as RUMExclusionFiltersResponse;
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
  ): Promise<RUMPermanentRetentionFiltersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMPermanentRetentionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMPermanentRetentionFiltersResponse",
      ) as RUMPermanentRetentionFiltersResponse;
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
      const body: RUMPermanentRetentionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMPermanentRetentionFiltersResponse",
        "",
      ) as RUMPermanentRetentionFiltersResponse;
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
  ): Promise<RUMRetentionFiltersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMRetentionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMRetentionFiltersResponse",
      ) as RUMRetentionFiltersResponse;
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
      const body: RUMRetentionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMRetentionFiltersResponse",
        "",
      ) as RUMRetentionFiltersResponse;
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
  ): Promise<RUMRetentionFiltersOrderResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMRetentionFiltersOrderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMRetentionFiltersOrderResponse",
      ) as RUMRetentionFiltersOrderResponse;
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
      const body: RUMRetentionFiltersOrderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMRetentionFiltersOrderResponse",
        "",
      ) as RUMRetentionFiltersOrderResponse;
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
  ): Promise<RUMExclusionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMExclusionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMExclusionFilterResponse",
      ) as RUMExclusionFilterResponse;
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
      const body: RUMExclusionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMExclusionFilterResponse",
        "",
      ) as RUMExclusionFilterResponse;
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
  ): Promise<RUMPermanentRetentionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMPermanentRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMPermanentRetentionFilterResponse",
      ) as RUMPermanentRetentionFilterResponse;
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
      const body: RUMPermanentRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMPermanentRetentionFilterResponse",
        "",
      ) as RUMPermanentRetentionFilterResponse;
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
  ): Promise<RUMRetentionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMRetentionFilterResponse",
      ) as RUMRetentionFilterResponse;
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
      const body: RUMRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMRetentionFilterResponse",
        "",
      ) as RUMRetentionFilterResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface RUMRetentionFiltersApiCreateExclusionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * The definition of the new RUM exclusion filter.
   * @type RUMExclusionFilterCreateRequest
   */
  body: RUMExclusionFilterCreateRequest;
}

export interface RUMRetentionFiltersApiCreateRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * The definition of the new RUM retention filter.
   * @type RUMRetentionFilterCreateRequest
   */
  body: RUMRetentionFilterCreateRequest;
}

export interface RUMRetentionFiltersApiDeleteExclusionFilterRequest {
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

export interface RUMRetentionFiltersApiDeleteRetentionFilterRequest {
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

export interface RUMRetentionFiltersApiGetExclusionFilterRequest {
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

export interface RUMRetentionFiltersApiGetPermanentRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * The identifier of the permanent RUM retention filter.
   * @type RUMPermanentRetentionFilterID
   */
  permanentRfId: RUMPermanentRetentionFilterID;
}

export interface RUMRetentionFiltersApiGetRetentionFilterRequest {
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

export interface RUMRetentionFiltersApiListExclusionFiltersRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
}

export interface RUMRetentionFiltersApiListPermanentRetentionFiltersRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
}

export interface RUMRetentionFiltersApiListRetentionFiltersRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
}

export interface RUMRetentionFiltersApiOrderRetentionFiltersRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * New definition of the RUM retention filter.
   * @type RUMRetentionFiltersOrderRequest
   */
  body: RUMRetentionFiltersOrderRequest;
}

export interface RUMRetentionFiltersApiUpdateExclusionFilterRequest {
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
   * @type RUMExclusionFilterUpdateRequest
   */
  body: RUMExclusionFilterUpdateRequest;
}

export interface RUMRetentionFiltersApiUpdatePermanentRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * The identifier of the permanent RUM retention filter.
   * @type RUMPermanentRetentionFilterID
   */
  permanentRfId: RUMPermanentRetentionFilterID;
  /**
   * New configuration of the permanent RUM retention filter.
   * @type RUMPermanentRetentionFilterUpdateRequest
   */
  body: RUMPermanentRetentionFilterUpdateRequest;
}

export interface RUMRetentionFiltersApiUpdateRetentionFilterRequest {
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
   * @type RUMRetentionFilterUpdateRequest
   */
  body: RUMRetentionFilterUpdateRequest;
}

export class RUMRetentionFiltersApi {
  private requestFactory: RUMRetentionFiltersApiRequestFactory;
  private responseProcessor: RUMRetentionFiltersApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: RUMRetentionFiltersApiRequestFactory,
    responseProcessor?: RUMRetentionFiltersApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new RUMRetentionFiltersApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new RUMRetentionFiltersApiResponseProcessor();
  }

  /**
   * Create an exclusion filter for a RUM application.
   * Returns the created exclusion filter when the request is successful.
   * @param param The request object
   */
  public createExclusionFilter(
    param: RUMRetentionFiltersApiCreateExclusionFilterRequest,
    options?: Configuration,
  ): Promise<RUMExclusionFilterResponse> {
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
    param: RUMRetentionFiltersApiCreateRetentionFilterRequest,
    options?: Configuration,
  ): Promise<RUMRetentionFilterResponse> {
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
    param: RUMRetentionFiltersApiDeleteExclusionFilterRequest,
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
    param: RUMRetentionFiltersApiDeleteRetentionFilterRequest,
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
    param: RUMRetentionFiltersApiGetExclusionFilterRequest,
    options?: Configuration,
  ): Promise<RUMExclusionFilterResponse> {
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
    param: RUMRetentionFiltersApiGetPermanentRetentionFilterRequest,
    options?: Configuration,
  ): Promise<RUMPermanentRetentionFilterResponse> {
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
    param: RUMRetentionFiltersApiGetRetentionFilterRequest,
    options?: Configuration,
  ): Promise<RUMRetentionFilterResponse> {
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
    param: RUMRetentionFiltersApiListExclusionFiltersRequest,
    options?: Configuration,
  ): Promise<RUMExclusionFiltersResponse> {
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
    param: RUMRetentionFiltersApiListPermanentRetentionFiltersRequest,
    options?: Configuration,
  ): Promise<RUMPermanentRetentionFiltersResponse> {
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
    param: RUMRetentionFiltersApiListRetentionFiltersRequest,
    options?: Configuration,
  ): Promise<RUMRetentionFiltersResponse> {
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
    param: RUMRetentionFiltersApiOrderRetentionFiltersRequest,
    options?: Configuration,
  ): Promise<RUMRetentionFiltersOrderResponse> {
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
    param: RUMRetentionFiltersApiUpdateExclusionFilterRequest,
    options?: Configuration,
  ): Promise<RUMExclusionFilterResponse> {
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
    param: RUMRetentionFiltersApiUpdatePermanentRetentionFilterRequest,
    options?: Configuration,
  ): Promise<RUMPermanentRetentionFilterResponse> {
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
    param: RUMRetentionFiltersApiUpdateRetentionFilterRequest,
    options?: Configuration,
  ): Promise<RUMRetentionFilterResponse> {
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
