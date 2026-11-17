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
import { ProductAnalyticsAnalyticsListRequest } from "./models/ProductAnalyticsAnalyticsListRequest";
import { ProductAnalyticsAnalyticsListResponse } from "./models/ProductAnalyticsAnalyticsListResponse";
import { ProductAnalyticsAnalyticsRequest } from "./models/ProductAnalyticsAnalyticsRequest";
import { ProductAnalyticsFormulaJourneyRequest } from "./models/ProductAnalyticsFormulaJourneyRequest";
import { ProductAnalyticsFormulaRetentionRequest } from "./models/ProductAnalyticsFormulaRetentionRequest";
import { ProductAnalyticsJourneyFunnelRequest } from "./models/ProductAnalyticsJourneyFunnelRequest";
import { ProductAnalyticsJourneyFunnelResponse } from "./models/ProductAnalyticsJourneyFunnelResponse";
import { ProductAnalyticsJourneyListRequest } from "./models/ProductAnalyticsJourneyListRequest";
import { ProductAnalyticsJourneyListResponse } from "./models/ProductAnalyticsJourneyListResponse";
import { ProductAnalyticsJourneyScalarRequest } from "./models/ProductAnalyticsJourneyScalarRequest";
import { ProductAnalyticsJourneyScalarResponse } from "./models/ProductAnalyticsJourneyScalarResponse";
import { ProductAnalyticsJourneyTimeseriesResponse } from "./models/ProductAnalyticsJourneyTimeseriesResponse";
import { ProductAnalyticsLaunchCreateRequest } from "./models/ProductAnalyticsLaunchCreateRequest";
import { ProductAnalyticsLaunchesResponse } from "./models/ProductAnalyticsLaunchesResponse";
import { ProductAnalyticsLaunchListScope } from "./models/ProductAnalyticsLaunchListScope";
import { ProductAnalyticsLaunchPatchRequest } from "./models/ProductAnalyticsLaunchPatchRequest";
import { ProductAnalyticsLaunchPhase } from "./models/ProductAnalyticsLaunchPhase";
import { ProductAnalyticsLaunchResponse } from "./models/ProductAnalyticsLaunchResponse";
import { ProductAnalyticsMonitorCreateRequest } from "./models/ProductAnalyticsMonitorCreateRequest";
import { ProductAnalyticsMonitorListResponse } from "./models/ProductAnalyticsMonitorListResponse";
import { ProductAnalyticsMonitorResponse } from "./models/ProductAnalyticsMonitorResponse";
import { ProductAnalyticsMonitorUnlinkRequest } from "./models/ProductAnalyticsMonitorUnlinkRequest";
import { ProductAnalyticsMonitorUpdateRequest } from "./models/ProductAnalyticsMonitorUpdateRequest";
import { ProductAnalyticsRetentionGridRequest } from "./models/ProductAnalyticsRetentionGridRequest";
import { ProductAnalyticsRetentionGridResponse } from "./models/ProductAnalyticsRetentionGridResponse";
import { ProductAnalyticsRetentionListRequest } from "./models/ProductAnalyticsRetentionListRequest";
import { ProductAnalyticsRetentionListResponse } from "./models/ProductAnalyticsRetentionListResponse";
import { ProductAnalyticsSankeyRequest } from "./models/ProductAnalyticsSankeyRequest";
import { ProductAnalyticsSankeyResponse } from "./models/ProductAnalyticsSankeyResponse";
import { ProductAnalyticsScalarResponse } from "./models/ProductAnalyticsScalarResponse";
import { ProductAnalyticsServerSideEventErrors } from "./models/ProductAnalyticsServerSideEventErrors";
import { ProductAnalyticsServerSideEventItem } from "./models/ProductAnalyticsServerSideEventItem";
import { ProductAnalyticsTimeseriesResponse } from "./models/ProductAnalyticsTimeseriesResponse";
import { version } from "../version";

export class ProductAnalyticsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("product-analytics", version);
    }
  }
  public async createProductAnalyticsLaunch(
    body: ProductAnalyticsLaunchCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.createProductAnalyticsLaunch"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createProductAnalyticsLaunch' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.createProductAnalyticsLaunch'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createProductAnalyticsLaunch");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/launches";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.createProductAnalyticsLaunch",
      ProductAnalyticsApi.operationServers,
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
      serialize(body, TypingInfo, "ProductAnalyticsLaunchCreateRequest", ""),
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

  public async createProductAnalyticsMonitor(
    body: ProductAnalyticsMonitorCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.createProductAnalyticsMonitor"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createProductAnalyticsMonitor' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.createProductAnalyticsMonitor'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createProductAnalyticsMonitor");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/monitors";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.createProductAnalyticsMonitor",
      ProductAnalyticsApi.operationServers,
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
      serialize(body, TypingInfo, "ProductAnalyticsMonitorCreateRequest", ""),
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

  public async deleteProductAnalyticsLaunch(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.deleteProductAnalyticsLaunch"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteProductAnalyticsLaunch' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.deleteProductAnalyticsLaunch'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteProductAnalyticsLaunch");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/launches/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.deleteProductAnalyticsLaunch",
      ProductAnalyticsApi.operationServers,
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

  public async deleteProductAnalyticsMonitor(
    monitorId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.deleteProductAnalyticsMonitor"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteProductAnalyticsMonitor' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.deleteProductAnalyticsMonitor'] = true`",
      );
    }

    // verify required parameter 'monitorId' is not null or undefined
    if (monitorId === null || monitorId === undefined) {
      throw new RequiredError("monitorId", "deleteProductAnalyticsMonitor");
    }

    // Path Params
    const localVarPath =
      "/api/v2/product-analytics/monitors/{monitor_id}".replace(
        "{monitor_id}",
        encodeURIComponent(String(monitorId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.deleteProductAnalyticsMonitor",
      ProductAnalyticsApi.operationServers,
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

  public async getProductAnalyticsLaunch(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.getProductAnalyticsLaunch"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getProductAnalyticsLaunch' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.getProductAnalyticsLaunch'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getProductAnalyticsLaunch");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/launches/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.getProductAnalyticsLaunch",
      ProductAnalyticsApi.operationServers,
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

  public async getProductAnalyticsMonitor(
    monitorId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.getProductAnalyticsMonitor"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getProductAnalyticsMonitor' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.getProductAnalyticsMonitor'] = true`",
      );
    }

    // verify required parameter 'monitorId' is not null or undefined
    if (monitorId === null || monitorId === undefined) {
      throw new RequiredError("monitorId", "getProductAnalyticsMonitor");
    }

    // Path Params
    const localVarPath =
      "/api/v2/product-analytics/monitors/{monitor_id}".replace(
        "{monitor_id}",
        encodeURIComponent(String(monitorId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.getProductAnalyticsMonitor",
      ProductAnalyticsApi.operationServers,
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

  public async listProductAnalyticsLaunches(
    sort?: string,
    scope?: ProductAnalyticsLaunchListScope,
    phase?: Array<ProductAnalyticsLaunchPhase>,
    applicationId?: string,
    name?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.listProductAnalyticsLaunches"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listProductAnalyticsLaunches' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.listProductAnalyticsLaunches'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/launches";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.listProductAnalyticsLaunches",
      ProductAnalyticsApi.operationServers,
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
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "string", ""),
        "",
      );
    }
    if (scope !== undefined) {
      requestContext.setQueryParam(
        "scope",
        serialize(scope, TypingInfo, "ProductAnalyticsLaunchListScope", ""),
        "",
      );
    }
    if (phase !== undefined) {
      requestContext.setQueryParam(
        "phase",
        serialize(phase, TypingInfo, "Array<ProductAnalyticsLaunchPhase>", ""),
        "multi",
      );
    }
    if (applicationId !== undefined) {
      requestContext.setQueryParam(
        "application_id",
        serialize(applicationId, TypingInfo, "string", ""),
        "",
      );
    }
    if (name !== undefined) {
      requestContext.setQueryParam(
        "name",
        serialize(name, TypingInfo, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listProductAnalyticsMonitors(
    pageSize?: number,
    pageNumber?: number,
    chartId?: string,
    dashboardId?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.listProductAnalyticsMonitors"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listProductAnalyticsMonitors' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.listProductAnalyticsMonitors'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/monitors";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.listProductAnalyticsMonitors",
      ProductAnalyticsApi.operationServers,
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
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (chartId !== undefined) {
      requestContext.setQueryParam(
        "chart_id",
        serialize(chartId, TypingInfo, "string", ""),
        "",
      );
    }
    if (dashboardId !== undefined) {
      requestContext.setQueryParam(
        "dashboard_id",
        serialize(dashboardId, TypingInfo, "string", ""),
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

  public async queryProductAnalyticsJourneyFunnel(
    body: ProductAnalyticsJourneyFunnelRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.queryProductAnalyticsJourneyFunnel"
      ]
    ) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsJourneyFunnel' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.queryProductAnalyticsJourneyFunnel'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsJourneyFunnel");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/journey/funnel";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.queryProductAnalyticsJourneyFunnel",
      ProductAnalyticsApi.operationServers,
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
      serialize(body, TypingInfo, "ProductAnalyticsJourneyFunnelRequest", ""),
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

  public async queryProductAnalyticsJourneyList(
    body: ProductAnalyticsJourneyListRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.queryProductAnalyticsJourneyList"
      ]
    ) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsJourneyList' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.queryProductAnalyticsJourneyList'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsJourneyList");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/journey/list";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.queryProductAnalyticsJourneyList",
      ProductAnalyticsApi.operationServers,
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
      serialize(body, TypingInfo, "ProductAnalyticsJourneyListRequest", ""),
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

  public async queryProductAnalyticsJourneyScalar(
    body: ProductAnalyticsJourneyScalarRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.queryProductAnalyticsJourneyScalar"
      ]
    ) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsJourneyScalar' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.queryProductAnalyticsJourneyScalar'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsJourneyScalar");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/journey/scalar";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.queryProductAnalyticsJourneyScalar",
      ProductAnalyticsApi.operationServers,
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
      serialize(body, TypingInfo, "ProductAnalyticsJourneyScalarRequest", ""),
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

  public async queryProductAnalyticsJourneyTimeseries(
    body: ProductAnalyticsFormulaJourneyRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.queryProductAnalyticsJourneyTimeseries"
      ]
    ) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsJourneyTimeseries' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.queryProductAnalyticsJourneyTimeseries'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsJourneyTimeseries");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/journey/timeseries";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.queryProductAnalyticsJourneyTimeseries",
      ProductAnalyticsApi.operationServers,
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
      serialize(body, TypingInfo, "ProductAnalyticsFormulaJourneyRequest", ""),
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

  public async queryProductAnalyticsList(
    body: ProductAnalyticsAnalyticsListRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.queryProductAnalyticsList"
      ]
    ) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsList' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.queryProductAnalyticsList'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsList");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/analytics/list";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.queryProductAnalyticsList",
      ProductAnalyticsApi.operationServers,
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
      serialize(body, TypingInfo, "ProductAnalyticsAnalyticsListRequest", ""),
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

  public async queryProductAnalyticsRetentionGrid(
    body: ProductAnalyticsRetentionGridRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.queryProductAnalyticsRetentionGrid"
      ]
    ) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsRetentionGrid' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.queryProductAnalyticsRetentionGrid'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsRetentionGrid");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/retention/grid";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.queryProductAnalyticsRetentionGrid",
      ProductAnalyticsApi.operationServers,
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
      serialize(body, TypingInfo, "ProductAnalyticsRetentionGridRequest", ""),
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

  public async queryProductAnalyticsRetentionList(
    body: ProductAnalyticsRetentionListRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.queryProductAnalyticsRetentionList"
      ]
    ) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsRetentionList' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.queryProductAnalyticsRetentionList'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsRetentionList");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/retention/list";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.queryProductAnalyticsRetentionList",
      ProductAnalyticsApi.operationServers,
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
      serialize(body, TypingInfo, "ProductAnalyticsRetentionListRequest", ""),
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

  public async queryProductAnalyticsRetentionScalar(
    body: ProductAnalyticsFormulaRetentionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.queryProductAnalyticsRetentionScalar"
      ]
    ) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsRetentionScalar' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.queryProductAnalyticsRetentionScalar'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsRetentionScalar");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/retention/scalar";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.queryProductAnalyticsRetentionScalar",
      ProductAnalyticsApi.operationServers,
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
      serialize(
        body,
        TypingInfo,
        "ProductAnalyticsFormulaRetentionRequest",
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

  public async queryProductAnalyticsRetentionTimeseries(
    body: ProductAnalyticsFormulaRetentionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.queryProductAnalyticsRetentionTimeseries"
      ]
    ) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsRetentionTimeseries' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.queryProductAnalyticsRetentionTimeseries'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "queryProductAnalyticsRetentionTimeseries",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/retention/timeseries";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.queryProductAnalyticsRetentionTimeseries",
      ProductAnalyticsApi.operationServers,
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
      serialize(
        body,
        TypingInfo,
        "ProductAnalyticsFormulaRetentionRequest",
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

  public async queryProductAnalyticsSankey(
    body: ProductAnalyticsSankeyRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.queryProductAnalyticsSankey"
      ]
    ) {
      throw new Error(
        "Unstable operation 'queryProductAnalyticsSankey' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.queryProductAnalyticsSankey'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsSankey");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/sankey";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.queryProductAnalyticsSankey",
      ProductAnalyticsApi.operationServers,
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
      serialize(body, TypingInfo, "ProductAnalyticsSankeyRequest", ""),
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

  public async queryProductAnalyticsScalar(
    body: ProductAnalyticsAnalyticsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsScalar");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/analytics/scalar";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.queryProductAnalyticsScalar",
      ProductAnalyticsApi.operationServers,
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
      serialize(body, TypingInfo, "ProductAnalyticsAnalyticsRequest", ""),
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

  public async queryProductAnalyticsTimeseries(
    body: ProductAnalyticsAnalyticsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryProductAnalyticsTimeseries");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/analytics/timeseries";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.queryProductAnalyticsTimeseries",
      ProductAnalyticsApi.operationServers,
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
      serialize(body, TypingInfo, "ProductAnalyticsAnalyticsRequest", ""),
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

  public async removeChartFromProductAnalyticsMonitor(
    monitorId: string,
    body: ProductAnalyticsMonitorUnlinkRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.removeChartFromProductAnalyticsMonitor"
      ]
    ) {
      throw new Error(
        "Unstable operation 'removeChartFromProductAnalyticsMonitor' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.removeChartFromProductAnalyticsMonitor'] = true`",
      );
    }

    // verify required parameter 'monitorId' is not null or undefined
    if (monitorId === null || monitorId === undefined) {
      throw new RequiredError(
        "monitorId",
        "removeChartFromProductAnalyticsMonitor",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "removeChartFromProductAnalyticsMonitor");
    }

    // Path Params
    const localVarPath =
      "/api/v2/product-analytics/monitors/{monitor_id}/unlink".replace(
        "{monitor_id}",
        encodeURIComponent(String(monitorId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.removeChartFromProductAnalyticsMonitor",
      ProductAnalyticsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
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

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "ProductAnalyticsMonitorUnlinkRequest", ""),
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

  public async submitProductAnalyticsEvent(
    body: ProductAnalyticsServerSideEventItem,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "submitProductAnalyticsEvent");
    }

    // Path Params
    const localVarPath = "/api/v2/prodlytics";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.submitProductAnalyticsEvent",
      ProductAnalyticsApi.operationServers,
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
      serialize(body, TypingInfo, "ProductAnalyticsServerSideEventItem", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }

  public async updateProductAnalyticsLaunch(
    id: string,
    body: ProductAnalyticsLaunchPatchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.updateProductAnalyticsLaunch"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateProductAnalyticsLaunch' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.updateProductAnalyticsLaunch'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateProductAnalyticsLaunch");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateProductAnalyticsLaunch");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/launches/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.updateProductAnalyticsLaunch",
      ProductAnalyticsApi.operationServers,
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
      serialize(body, TypingInfo, "ProductAnalyticsLaunchPatchRequest", ""),
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

  public async updateProductAnalyticsMonitor(
    monitorId: string,
    body: ProductAnalyticsMonitorUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ProductAnalyticsApi.v2.updateProductAnalyticsMonitor"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateProductAnalyticsMonitor' is disabled. Enable it by setting `configuration.unstableOperations['ProductAnalyticsApi.v2.updateProductAnalyticsMonitor'] = true`",
      );
    }

    // verify required parameter 'monitorId' is not null or undefined
    if (monitorId === null || monitorId === undefined) {
      throw new RequiredError("monitorId", "updateProductAnalyticsMonitor");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateProductAnalyticsMonitor");
    }

    // Path Params
    const localVarPath =
      "/api/v2/product-analytics/monitors/{monitor_id}".replace(
        "{monitor_id}",
        encodeURIComponent(String(monitorId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ProductAnalyticsApi.v2.updateProductAnalyticsMonitor",
      ProductAnalyticsApi.operationServers,
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
      serialize(body, TypingInfo, "ProductAnalyticsMonitorUpdateRequest", ""),
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

export class ProductAnalyticsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createProductAnalyticsLaunch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createProductAnalyticsLaunch(
    response: ResponseContext,
  ): Promise<ProductAnalyticsLaunchResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: ProductAnalyticsLaunchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsLaunchResponse",
      ) as ProductAnalyticsLaunchResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: ProductAnalyticsLaunchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsLaunchResponse",
        "",
      ) as ProductAnalyticsLaunchResponse;
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
   * @params response Response returned by the server for a request to createProductAnalyticsMonitor
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createProductAnalyticsMonitor(
    response: ResponseContext,
  ): Promise<ProductAnalyticsMonitorResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: ProductAnalyticsMonitorResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsMonitorResponse",
      ) as ProductAnalyticsMonitorResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: ProductAnalyticsMonitorResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsMonitorResponse",
        "",
      ) as ProductAnalyticsMonitorResponse;
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
   * @params response Response returned by the server for a request to deleteProductAnalyticsLaunch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteProductAnalyticsLaunch(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
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
   * @params response Response returned by the server for a request to deleteProductAnalyticsMonitor
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteProductAnalyticsMonitor(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
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
   * @params response Response returned by the server for a request to getProductAnalyticsLaunch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getProductAnalyticsLaunch(
    response: ResponseContext,
  ): Promise<ProductAnalyticsLaunchResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsLaunchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsLaunchResponse",
      ) as ProductAnalyticsLaunchResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: ProductAnalyticsLaunchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsLaunchResponse",
        "",
      ) as ProductAnalyticsLaunchResponse;
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
   * @params response Response returned by the server for a request to getProductAnalyticsMonitor
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getProductAnalyticsMonitor(
    response: ResponseContext,
  ): Promise<ProductAnalyticsMonitorResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsMonitorResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsMonitorResponse",
      ) as ProductAnalyticsMonitorResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: ProductAnalyticsMonitorResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsMonitorResponse",
        "",
      ) as ProductAnalyticsMonitorResponse;
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
   * @params response Response returned by the server for a request to listProductAnalyticsLaunches
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listProductAnalyticsLaunches(
    response: ResponseContext,
  ): Promise<ProductAnalyticsLaunchesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsLaunchesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsLaunchesResponse",
      ) as ProductAnalyticsLaunchesResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: ProductAnalyticsLaunchesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsLaunchesResponse",
        "",
      ) as ProductAnalyticsLaunchesResponse;
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
   * @params response Response returned by the server for a request to listProductAnalyticsMonitors
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listProductAnalyticsMonitors(
    response: ResponseContext,
  ): Promise<ProductAnalyticsMonitorListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsMonitorListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsMonitorListResponse",
      ) as ProductAnalyticsMonitorListResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: ProductAnalyticsMonitorListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsMonitorListResponse",
        "",
      ) as ProductAnalyticsMonitorListResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsJourneyFunnel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsJourneyFunnel(
    response: ResponseContext,
  ): Promise<ProductAnalyticsJourneyFunnelResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsJourneyFunnelResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsJourneyFunnelResponse",
      ) as ProductAnalyticsJourneyFunnelResponse;
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
      const body: ProductAnalyticsJourneyFunnelResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsJourneyFunnelResponse",
        "",
      ) as ProductAnalyticsJourneyFunnelResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsJourneyList
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsJourneyList(
    response: ResponseContext,
  ): Promise<ProductAnalyticsJourneyListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsJourneyListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsJourneyListResponse",
      ) as ProductAnalyticsJourneyListResponse;
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
      const body: ProductAnalyticsJourneyListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsJourneyListResponse",
        "",
      ) as ProductAnalyticsJourneyListResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsJourneyScalar
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsJourneyScalar(
    response: ResponseContext,
  ): Promise<ProductAnalyticsJourneyScalarResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsJourneyScalarResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsJourneyScalarResponse",
      ) as ProductAnalyticsJourneyScalarResponse;
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
      const body: ProductAnalyticsJourneyScalarResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsJourneyScalarResponse",
        "",
      ) as ProductAnalyticsJourneyScalarResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsJourneyTimeseries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsJourneyTimeseries(
    response: ResponseContext,
  ): Promise<ProductAnalyticsJourneyTimeseriesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsJourneyTimeseriesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsJourneyTimeseriesResponse",
      ) as ProductAnalyticsJourneyTimeseriesResponse;
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
      const body: ProductAnalyticsJourneyTimeseriesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsJourneyTimeseriesResponse",
        "",
      ) as ProductAnalyticsJourneyTimeseriesResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsList
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsList(
    response: ResponseContext,
  ): Promise<ProductAnalyticsAnalyticsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsAnalyticsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsAnalyticsListResponse",
      ) as ProductAnalyticsAnalyticsListResponse;
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
      const body: ProductAnalyticsAnalyticsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsAnalyticsListResponse",
        "",
      ) as ProductAnalyticsAnalyticsListResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsRetentionGrid
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsRetentionGrid(
    response: ResponseContext,
  ): Promise<ProductAnalyticsRetentionGridResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsRetentionGridResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsRetentionGridResponse",
      ) as ProductAnalyticsRetentionGridResponse;
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
      const body: ProductAnalyticsRetentionGridResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsRetentionGridResponse",
        "",
      ) as ProductAnalyticsRetentionGridResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsRetentionList
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsRetentionList(
    response: ResponseContext,
  ): Promise<ProductAnalyticsRetentionListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsRetentionListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsRetentionListResponse",
      ) as ProductAnalyticsRetentionListResponse;
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
      const body: ProductAnalyticsRetentionListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsRetentionListResponse",
        "",
      ) as ProductAnalyticsRetentionListResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsRetentionScalar
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsRetentionScalar(
    response: ResponseContext,
  ): Promise<ProductAnalyticsScalarResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsScalarResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsScalarResponse",
      ) as ProductAnalyticsScalarResponse;
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
      const body: ProductAnalyticsScalarResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsScalarResponse",
        "",
      ) as ProductAnalyticsScalarResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsRetentionTimeseries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsRetentionTimeseries(
    response: ResponseContext,
  ): Promise<ProductAnalyticsTimeseriesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsTimeseriesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsTimeseriesResponse",
      ) as ProductAnalyticsTimeseriesResponse;
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
      const body: ProductAnalyticsTimeseriesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsTimeseriesResponse",
        "",
      ) as ProductAnalyticsTimeseriesResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsSankey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsSankey(
    response: ResponseContext,
  ): Promise<ProductAnalyticsSankeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsSankeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsSankeyResponse",
      ) as ProductAnalyticsSankeyResponse;
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
      const body: ProductAnalyticsSankeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsSankeyResponse",
        "",
      ) as ProductAnalyticsSankeyResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsScalar
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsScalar(
    response: ResponseContext,
  ): Promise<ProductAnalyticsScalarResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsScalarResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsScalarResponse",
      ) as ProductAnalyticsScalarResponse;
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
      const body: ProductAnalyticsScalarResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsScalarResponse",
        "",
      ) as ProductAnalyticsScalarResponse;
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
   * @params response Response returned by the server for a request to queryProductAnalyticsTimeseries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryProductAnalyticsTimeseries(
    response: ResponseContext,
  ): Promise<ProductAnalyticsTimeseriesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsTimeseriesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsTimeseriesResponse",
      ) as ProductAnalyticsTimeseriesResponse;
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
      const body: ProductAnalyticsTimeseriesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsTimeseriesResponse",
        "",
      ) as ProductAnalyticsTimeseriesResponse;
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
   * @params response Response returned by the server for a request to removeChartFromProductAnalyticsMonitor
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async removeChartFromProductAnalyticsMonitor(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
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
   * @params response Response returned by the server for a request to submitProductAnalyticsEvent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async submitProductAnalyticsEvent(
    response: ResponseContext,
  ): Promise<any> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      const body: any = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "any",
      ) as any;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 408 ||
      response.httpStatusCode === 413 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 500 ||
      response.httpStatusCode === 503
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: ProductAnalyticsServerSideEventErrors;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "ProductAnalyticsServerSideEventErrors",
        ) as ProductAnalyticsServerSideEventErrors;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<ProductAnalyticsServerSideEventErrors>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<ProductAnalyticsServerSideEventErrors>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "any",
        "",
      ) as any;
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
   * @params response Response returned by the server for a request to updateProductAnalyticsLaunch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateProductAnalyticsLaunch(
    response: ResponseContext,
  ): Promise<ProductAnalyticsLaunchResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsLaunchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsLaunchResponse",
      ) as ProductAnalyticsLaunchResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
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
      const body: ProductAnalyticsLaunchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsLaunchResponse",
        "",
      ) as ProductAnalyticsLaunchResponse;
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
   * @params response Response returned by the server for a request to updateProductAnalyticsMonitor
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateProductAnalyticsMonitor(
    response: ResponseContext,
  ): Promise<ProductAnalyticsMonitorResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProductAnalyticsMonitorResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsMonitorResponse",
      ) as ProductAnalyticsMonitorResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: ProductAnalyticsMonitorResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProductAnalyticsMonitorResponse",
        "",
      ) as ProductAnalyticsMonitorResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ProductAnalyticsApiCreateProductAnalyticsLaunchRequest {
  /**
   * @type ProductAnalyticsLaunchCreateRequest
   */
  body: ProductAnalyticsLaunchCreateRequest;
}

export interface ProductAnalyticsApiCreateProductAnalyticsMonitorRequest {
  /**
   * @type ProductAnalyticsMonitorCreateRequest
   */
  body: ProductAnalyticsMonitorCreateRequest;
}

export interface ProductAnalyticsApiDeleteProductAnalyticsLaunchRequest {
  /**
   * UUID of the launch.
   * @type string
   */
  id: string;
}

export interface ProductAnalyticsApiDeleteProductAnalyticsMonitorRequest {
  /**
   * Numeric ID of the monitor.
   * @type string
   */
  monitorId: string;
}

export interface ProductAnalyticsApiGetProductAnalyticsLaunchRequest {
  /**
   * UUID of the launch.
   * @type string
   */
  id: string;
}

export interface ProductAnalyticsApiGetProductAnalyticsMonitorRequest {
  /**
   * Numeric ID of the monitor.
   * @type string
   */
  monitorId: string;
}

export interface ProductAnalyticsApiListProductAnalyticsLaunchesRequest {
  /**
   * Comma-separated fields to sort by: `id`, `phase`, `feature_flag_id`, `name`, `application_id`,
   * `description`, `created_by`, `created_at`, `updated_by`, or `updated_at`. Prefix a field with `-` to sort
   * in descending order.
   * @type string
   */
  sort?: string;
  /**
   * Set to `liftoffs` to leave out launches in the `plan` phase.
   * @type ProductAnalyticsLaunchListScope
   */
  scope?: ProductAnalyticsLaunchListScope;
  /**
   * Return only launches in these phases. Repeat the parameter to pass several phases.
   * @type Array<ProductAnalyticsLaunchPhase>
   */
  phase?: Array<ProductAnalyticsLaunchPhase>;
  /**
   * Return only launches of this RUM application UUID.
   * @type string
   */
  applicationId?: string;
  /**
   * Return only launches whose name contains this value, ignoring case.
   * @type string
   */
  name?: string;
}

export interface ProductAnalyticsApiListProductAnalyticsMonitorsRequest {
  /**
   * Maximum number of monitors per page, from 1 to 1000. Ignored when `chart_id` is set.
   * @type number
   */
  pageSize?: number;
  /**
   * Page number, starting at 1. Ignored when `chart_id` is set.
   * @type number
   */
  pageNumber?: number;
  /**
   * Return only the monitors linked to this chart. Turns off pagination.
   * @type string
   */
  chartId?: string;
  /**
   * Return only the monitors linked to this dashboard. Requires `chart_id`.
   * @type string
   */
  dashboardId?: string;
}

export interface ProductAnalyticsApiQueryProductAnalyticsJourneyFunnelRequest {
  /**
   * @type ProductAnalyticsJourneyFunnelRequest
   */
  body: ProductAnalyticsJourneyFunnelRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsJourneyListRequest {
  /**
   * @type ProductAnalyticsJourneyListRequest
   */
  body: ProductAnalyticsJourneyListRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsJourneyScalarRequest {
  /**
   * @type ProductAnalyticsJourneyScalarRequest
   */
  body: ProductAnalyticsJourneyScalarRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsJourneyTimeseriesRequest {
  /**
   * @type ProductAnalyticsFormulaJourneyRequest
   */
  body: ProductAnalyticsFormulaJourneyRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsListRequest {
  /**
   * @type ProductAnalyticsAnalyticsListRequest
   */
  body: ProductAnalyticsAnalyticsListRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsRetentionGridRequest {
  /**
   * The retention grid query.
   * @type ProductAnalyticsRetentionGridRequest
   */
  body: ProductAnalyticsRetentionGridRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsRetentionListRequest {
  /**
   * The retention list query.
   * @type ProductAnalyticsRetentionListRequest
   */
  body: ProductAnalyticsRetentionListRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsRetentionScalarRequest {
  /**
   * The retention scalar query.
   * @type ProductAnalyticsFormulaRetentionRequest
   */
  body: ProductAnalyticsFormulaRetentionRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsRetentionTimeseriesRequest {
  /**
   * The retention timeseries query.
   * @type ProductAnalyticsFormulaRetentionRequest
   */
  body: ProductAnalyticsFormulaRetentionRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsSankeyRequest {
  /**
   * The Sankey diagram query.
   * @type ProductAnalyticsSankeyRequest
   */
  body: ProductAnalyticsSankeyRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsScalarRequest {
  /**
   * @type ProductAnalyticsAnalyticsRequest
   */
  body: ProductAnalyticsAnalyticsRequest;
}

export interface ProductAnalyticsApiQueryProductAnalyticsTimeseriesRequest {
  /**
   * @type ProductAnalyticsAnalyticsRequest
   */
  body: ProductAnalyticsAnalyticsRequest;
}

export interface ProductAnalyticsApiRemoveChartFromProductAnalyticsMonitorRequest {
  /**
   * Numeric ID of the monitor.
   * @type string
   */
  monitorId: string;
  /**
   * @type ProductAnalyticsMonitorUnlinkRequest
   */
  body: ProductAnalyticsMonitorUnlinkRequest;
}

export interface ProductAnalyticsApiSubmitProductAnalyticsEventRequest {
  /**
   * Server-side event to send (JSON format).
   * @type ProductAnalyticsServerSideEventItem
   */
  body: ProductAnalyticsServerSideEventItem;
}

export interface ProductAnalyticsApiUpdateProductAnalyticsLaunchRequest {
  /**
   * UUID of the launch.
   * @type string
   */
  id: string;
  /**
   * @type ProductAnalyticsLaunchPatchRequest
   */
  body: ProductAnalyticsLaunchPatchRequest;
}

export interface ProductAnalyticsApiUpdateProductAnalyticsMonitorRequest {
  /**
   * Numeric ID of the monitor.
   * @type string
   */
  monitorId: string;
  /**
   * @type ProductAnalyticsMonitorUpdateRequest
   */
  body: ProductAnalyticsMonitorUpdateRequest;
}

export class ProductAnalyticsApi {
  private requestFactory: ProductAnalyticsApiRequestFactory;
  private responseProcessor: ProductAnalyticsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {
    "ProductAnalyticsApi.v2.submitProductAnalyticsEvent": [
      new ServerConfiguration<{
        site:
          | "browser-intake-datadoghq.com"
          | "browser-intake-us3-datadoghq.com"
          | "browser-intake-us5-datadoghq.com"
          | "browser-intake-ap1-datadoghq.com"
          | "browser-intake-ap2-datadoghq.com"
          | "browser-intake-uk1-datadoghq.com"
          | "browser-intake-datadoghq.eu";
      }>("https://{site}", {
        site: "browser-intake-datadoghq.com",
      }),
      new ServerConfiguration<{
        name: string;
        protocol: string;
      }>("{protocol}://{name}", {
        name: "browser-intake-datadoghq.com",
        protocol: "https",
      }),
      new ServerConfiguration<{
        site: string;
        subdomain: string;
      }>("https://{subdomain}.{site}", {
        site: "datadoghq.com",
        subdomain: "api",
      }),
    ],
  };

  public constructor(
    configuration?: Configuration,
    requestFactory?: ProductAnalyticsApiRequestFactory,
    responseProcessor?: ProductAnalyticsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new ProductAnalyticsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ProductAnalyticsApiResponseProcessor();
  }

  /**
   * Create a Product Analytics launch and its tracking plan.
   * The tracking plan lists the events and event properties to instrument. Events can only reference properties
   * and KPIs defined in the launch.
   * @param param The request object
   */
  public createProductAnalyticsLaunch(
    param: ProductAnalyticsApiCreateProductAnalyticsLaunchRequest,
    options?: Configuration,
  ): Promise<ProductAnalyticsLaunchResponse> {
    const requestContextPromise =
      this.requestFactory.createProductAnalyticsLaunch(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createProductAnalyticsLaunch(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a Product Analytics monitor that alerts on a Product Analytics query, such as a funnel conversion rate.
   * Link it to the chart it was created from with the `chart_id` and `dashboard_id` tags.
   * @param param The request object
   */
  public createProductAnalyticsMonitor(
    param: ProductAnalyticsApiCreateProductAnalyticsMonitorRequest,
    options?: Configuration,
  ): Promise<ProductAnalyticsMonitorResponse> {
    const requestContextPromise =
      this.requestFactory.createProductAnalyticsMonitor(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createProductAnalyticsMonitor(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a Product Analytics launch and its tracking plan.
   * @param param The request object
   */
  public deleteProductAnalyticsLaunch(
    param: ProductAnalyticsApiDeleteProductAnalyticsLaunchRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteProductAnalyticsLaunch(param.id, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteProductAnalyticsLaunch(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a Product Analytics monitor.
   * @param param The request object
   */
  public deleteProductAnalyticsMonitor(
    param: ProductAnalyticsApiDeleteProductAnalyticsMonitorRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteProductAnalyticsMonitor(
        param.monitorId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteProductAnalyticsMonitor(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a Product Analytics launch and its tracking plan by UUID.
   * @param param The request object
   */
  public getProductAnalyticsLaunch(
    param: ProductAnalyticsApiGetProductAnalyticsLaunchRequest,
    options?: Configuration,
  ): Promise<ProductAnalyticsLaunchResponse> {
    const requestContextPromise = this.requestFactory.getProductAnalyticsLaunch(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getProductAnalyticsLaunch(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a Product Analytics monitor by its ID.
   * @param param The request object
   */
  public getProductAnalyticsMonitor(
    param: ProductAnalyticsApiGetProductAnalyticsMonitorRequest,
    options?: Configuration,
  ): Promise<ProductAnalyticsMonitorResponse> {
    const requestContextPromise =
      this.requestFactory.getProductAnalyticsMonitor(param.monitorId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getProductAnalyticsMonitor(
            responseContext,
          );
        });
    });
  }

  /**
   * List the Product Analytics launches of your organization. A launch tracks a feature release with its phase,
   * KPIs, and tracking plan.
   * Results are sorted by `-created_at` by default.
   * @param param The request object
   */
  public listProductAnalyticsLaunches(
    param: ProductAnalyticsApiListProductAnalyticsLaunchesRequest = {},
    options?: Configuration,
  ): Promise<ProductAnalyticsLaunchesResponse> {
    const requestContextPromise =
      this.requestFactory.listProductAnalyticsLaunches(
        param.sort,
        param.scope,
        param.phase,
        param.applicationId,
        param.name,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listProductAnalyticsLaunches(
            responseContext,
          );
        });
    });
  }

  /**
   * List the Product Analytics monitors of your organization, one page at a time.
   * When `chart_id` is set, optionally with `dashboard_id`, the response includes every monitor linked to that
   * chart, without pagination.
   * With `chart_id` alone, monitors created from a dashboard widget are not returned.
   * Monitors created in the last few seconds may be missing.
   * @param param The request object
   */
  public listProductAnalyticsMonitors(
    param: ProductAnalyticsApiListProductAnalyticsMonitorsRequest = {},
    options?: Configuration,
  ): Promise<ProductAnalyticsMonitorListResponse> {
    const requestContextPromise =
      this.requestFactory.listProductAnalyticsMonitors(
        param.pageSize,
        param.pageNumber,
        param.chartId,
        param.dashboardId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listProductAnalyticsMonitors(
            responseContext,
          );
        });
    });
  }

  /**
   * Compute a funnel over an ordered sequence of Product Analytics events.
   * Returns the per-step conversion counts, conversion rates, and elapsed times,
   * optionally segmented by group-by facets.
   * @param param The request object
   */
  public queryProductAnalyticsJourneyFunnel(
    param: ProductAnalyticsApiQueryProductAnalyticsJourneyFunnelRequest,
    options?: Configuration,
  ): Promise<ProductAnalyticsJourneyFunnelResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsJourneyFunnel(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsJourneyFunnel(
            responseContext,
          );
        });
    });
  }

  /**
   * Return the individual sessions that reached, or dropped off at, a given step of the journey.
   * Each row contains the identity join key, the event timestamp, and the columns requested
   * in `entity_columns`.
   * @param param The request object
   */
  public queryProductAnalyticsJourneyList(
    param: ProductAnalyticsApiQueryProductAnalyticsJourneyListRequest,
    options?: Configuration,
  ): Promise<ProductAnalyticsJourneyListResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsJourneyList(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsJourneyList(
            responseContext,
          );
        });
    });
  }

  /**
   * Compute scalar results for a journey query, such as the conversion count,
   * the conversion rate, or the time to convert, optionally segmented by group-by facets.
   * @param param The request object
   */
  public queryProductAnalyticsJourneyScalar(
    param: ProductAnalyticsApiQueryProductAnalyticsJourneyScalarRequest,
    options?: Configuration,
  ): Promise<ProductAnalyticsJourneyScalarResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsJourneyScalar(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsJourneyScalar(
            responseContext,
          );
        });
    });
  }

  /**
   * Compute timeseries results for a journey query.
   * Returns one series per group-by combination, bucketed by the requested interval.
   * @param param The request object
   */
  public queryProductAnalyticsJourneyTimeseries(
    param: ProductAnalyticsApiQueryProductAnalyticsJourneyTimeseriesRequest,
    options?: Configuration,
  ): Promise<ProductAnalyticsJourneyTimeseriesResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsJourneyTimeseries(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsJourneyTimeseries(
            responseContext,
          );
        });
    });
  }

  /**
   * List the individual event records matching an analytics query.
   * Use `columns` to choose the attributes returned on each row, `sort` to order the rows,
   * and `limit` to cap how many are returned.
   * @param param The request object
   */
  public queryProductAnalyticsList(
    param: ProductAnalyticsApiQueryProductAnalyticsListRequest,
    options?: Configuration,
  ): Promise<ProductAnalyticsAnalyticsListResponse> {
    const requestContextPromise = this.requestFactory.queryProductAnalyticsList(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsList(
            responseContext,
          );
        });
    });
  }

  /**
   * Compute a retention grid, showing how much of each cohort came back over each subsequent period.
   * Rows are cohorts, columns are return periods, and each cell holds the count and rate of entities that returned.
   * @param param The request object
   */
  public queryProductAnalyticsRetentionGrid(
    param: ProductAnalyticsApiQueryProductAnalyticsRetentionGridRequest,
    options?: Configuration,
  ): Promise<ProductAnalyticsRetentionGridResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsRetentionGrid(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsRetentionGrid(
            responseContext,
          );
        });
    });
  }

  /**
   * List the individual users or accounts counted in one cell of the retention grid.
   * Set `computation_scope` to the cohort and return period you want to examine.
   * @param param The request object
   */
  public queryProductAnalyticsRetentionList(
    param: ProductAnalyticsApiQueryProductAnalyticsRetentionListRequest,
    options?: Configuration,
  ): Promise<ProductAnalyticsRetentionListResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsRetentionList(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsRetentionList(
            responseContext,
          );
        });
    });
  }

  /**
   * Compute retention as a single value per group, suitable for a query value or top list widget.
   * @param param The request object
   */
  public queryProductAnalyticsRetentionScalar(
    param: ProductAnalyticsApiQueryProductAnalyticsRetentionScalarRequest,
    options?: Configuration,
  ): Promise<ProductAnalyticsScalarResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsRetentionScalar(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsRetentionScalar(
            responseContext,
          );
        });
    });
  }

  /**
   * Compute retention as a series of values over time, using the same query definition as the
   * retention grid.
   * @param param The request object
   */
  public queryProductAnalyticsRetentionTimeseries(
    param: ProductAnalyticsApiQueryProductAnalyticsRetentionTimeseriesRequest,
    options?: Configuration,
  ): Promise<ProductAnalyticsTimeseriesResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsRetentionTimeseries(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsRetentionTimeseries(
            responseContext,
          );
        });
    });
  }

  /**
   * Compute a Sankey diagram of how sessions flow between the values of two facets,
   * showing where users continue and where they drop off at each step.
   * @param param The request object
   */
  public queryProductAnalyticsSankey(
    param: ProductAnalyticsApiQueryProductAnalyticsSankeyRequest,
    options?: Configuration,
  ): Promise<ProductAnalyticsSankeyResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsSankey(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsSankey(
            responseContext,
          );
        });
    });
  }

  /**
   * Compute scalar analytics results for Product Analytics data.
   * Returns aggregated values (counts, averages, percentiles) optionally grouped by facets.
   * @param param The request object
   */
  public queryProductAnalyticsScalar(
    param: ProductAnalyticsApiQueryProductAnalyticsScalarRequest,
    options?: Configuration,
  ): Promise<ProductAnalyticsScalarResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsScalar(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsScalar(
            responseContext,
          );
        });
    });
  }

  /**
   * Compute timeseries analytics results for Product Analytics data.
   * Returns time-bucketed values for charts and trend analysis.
   * The `compute.interval` field (milliseconds) is required for time bucketing.
   * @param param The request object
   */
  public queryProductAnalyticsTimeseries(
    param: ProductAnalyticsApiQueryProductAnalyticsTimeseriesRequest,
    options?: Configuration,
  ): Promise<ProductAnalyticsTimeseriesResponse> {
    const requestContextPromise =
      this.requestFactory.queryProductAnalyticsTimeseries(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryProductAnalyticsTimeseries(
            responseContext,
          );
        });
    });
  }

  /**
   * Remove the `chart_id` and `dashboard_id` tags from a Product Analytics monitor. The monitor and the rest of
   * its configuration are kept.
   * The request must name the stored link exactly. A monitor with no link is left unchanged.
   * @param param The request object
   */
  public removeChartFromProductAnalyticsMonitor(
    param: ProductAnalyticsApiRemoveChartFromProductAnalyticsMonitorRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.removeChartFromProductAnalyticsMonitor(
        param.monitorId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.removeChartFromProductAnalyticsMonitor(
            responseContext,
          );
        });
    });
  }

  /**
   * Send server-side events to Product Analytics. Server-side events are retained for 15 months.
   *
   * Server-Side events in Product Analytics are helpful for tracking events that occur on the server,
   * as opposed to client-side events, which are captured by Real User Monitoring (RUM) SDKs.
   * This allows for a more comprehensive view of the user journey by including actions that happen on the server.
   * Typical examples could be `checkout.completed` or `payment.processed`.
   *
   * Ingested server-side events are integrated into Product Analytics to allow users to select and filter
   * these events in the event picker, similar to how views or actions are handled.
   *
   * **Requirements:**
   * - At least one of `usr`, `account`, or `session` must be provided with a valid ID.
   * - The `application.id` must reference a Product Analytics-enabled application.
   *
   * **Custom Attributes:**
   * Any additional fields in the payload are flattened and searchable as facets.
   * For example, a payload with `{"customer": {"tier": "premium"}}` is searchable with
   * the syntax `@customer.tier:premium` in Datadog.
   *
   * The status codes answered by the HTTP API are:
   * - 202: Accepted: The request has been accepted for processing
   * - 400: Bad request (likely an issue in the payload formatting)
   * - 401: Unauthorized (likely a missing API Key)
   * - 403: Permission issue (likely using an invalid API Key)
   * - 408: Request Timeout, request should be retried after some time
   * - 413: Payload too large (batch is above 5MB uncompressed)
   * - 429: Too Many Requests, request should be retried after some time
   * - 500: Internal Server Error, the server encountered an unexpected condition that prevented it from fulfilling the request, request should be retried after some time
   * - 503: Service Unavailable, the server is not ready to handle the request probably because it is overloaded, request should be retried after some time
   * @param param The request object
   */
  public submitProductAnalyticsEvent(
    param: ProductAnalyticsApiSubmitProductAnalyticsEventRequest,
    options?: Configuration,
  ): Promise<any> {
    const requestContextPromise =
      this.requestFactory.submitProductAnalyticsEvent(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.submitProductAnalyticsEvent(
            responseContext,
          );
        });
    });
  }

  /**
   * Update some fields of a Product Analytics launch. Fields that are not set are left unchanged. The `id` in
   * the body must match the one in the path.
   * Setting `steps.tracking_plan` replaces the whole stored tracking plan, not only the fields you send.
   * Returns `409` when the launch changed during the update; fetch it again and retry.
   * @param param The request object
   */
  public updateProductAnalyticsLaunch(
    param: ProductAnalyticsApiUpdateProductAnalyticsLaunchRequest,
    options?: Configuration,
  ): Promise<ProductAnalyticsLaunchResponse> {
    const requestContextPromise =
      this.requestFactory.updateProductAnalyticsLaunch(
        param.id,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateProductAnalyticsLaunch(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a Product Analytics monitor. Fields that are not set are left unchanged, and at least one field
   * must be set. When set, `tags` replaces the monitor tags except `chart_id` and `dashboard_id`, which this
   * endpoint ignores. To remove them, use the unlink endpoint.
   * @param param The request object
   */
  public updateProductAnalyticsMonitor(
    param: ProductAnalyticsApiUpdateProductAnalyticsMonitorRequest,
    options?: Configuration,
  ): Promise<ProductAnalyticsMonitorResponse> {
    const requestContextPromise =
      this.requestFactory.updateProductAnalyticsMonitor(
        param.monitorId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateProductAnalyticsMonitor(
            responseContext,
          );
        });
    });
  }
}
