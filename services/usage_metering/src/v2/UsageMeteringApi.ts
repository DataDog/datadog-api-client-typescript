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
import { ActiveBillingDimensionsResponse } from "./models/ActiveBillingDimensionsResponse";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { BillingDimensionsMappingResponse } from "./models/BillingDimensionsMappingResponse";
import { CostAggregationType } from "./models/CostAggregationType";
import { CostByOrgResponse } from "./models/CostByOrgResponse";
import { HourlyUsageResponse } from "./models/HourlyUsageResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { MonthlyCostAttributionResponse } from "./models/MonthlyCostAttributionResponse";
import { ProjectedCostResponse } from "./models/ProjectedCostResponse";
import { SortDirection } from "./models/SortDirection";
import { UsageApplicationSecurityMonitoringResponse } from "./models/UsageApplicationSecurityMonitoringResponse";
import { UsageAttributionTypesResponse } from "./models/UsageAttributionTypesResponse";
import { UsageLambdaTracedInvocationsResponse } from "./models/UsageLambdaTracedInvocationsResponse";
import { UsageObservabilityPipelinesResponse } from "./models/UsageObservabilityPipelinesResponse";
import { UsageQuotaResponse } from "./models/UsageQuotaResponse";
import { UsageQuotaResponseData } from "./models/UsageQuotaResponseData";
import { UsageQuotasBulkResponse } from "./models/UsageQuotasBulkResponse";
import { UsageQuotasCreateRequest } from "./models/UsageQuotasCreateRequest";
import { UsageQuotasListResponse } from "./models/UsageQuotasListResponse";
import { UsageQuotaUpdateRequest } from "./models/UsageQuotaUpdateRequest";
import { UsageSummaryAvailableFieldsResponse } from "./models/UsageSummaryAvailableFieldsResponse";
import { version } from "../version";

export class UsageMeteringApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("usage-metering", version);
    }
  }
  public async createQuotas(
    quotaNamespace: string,
    body: UsageQuotasCreateRequest,
    includeDescendants?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["UsageMeteringApi.v2.createQuotas"]) {
      throw new Error(
        "Unstable operation 'createQuotas' is disabled. Enable it by setting `configuration.unstableOperations['UsageMeteringApi.v2.createQuotas'] = true`",
      );
    }

    // verify required parameter 'quotaNamespace' is not null or undefined
    if (quotaNamespace === null || quotaNamespace === undefined) {
      throw new RequiredError("quotaNamespace", "createQuotas");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createQuotas");
    }

    // Path Params
    const localVarPath = "/api/v2/usage/quotas/{quota_namespace}".replace(
      "{quota_namespace}",
      encodeURIComponent(String(quotaNamespace)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "UsageMeteringApi.v2.createQuotas",
      UsageMeteringApi.operationServers,
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

    // Query Params
    if (includeDescendants !== undefined) {
      requestContext.setQueryParam(
        "include_descendants",
        serialize(includeDescendants, TypingInfo, "boolean", ""),
        "",
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "UsageQuotasCreateRequest", ""),
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

  public async deleteQuota(
    quotaNamespace: string,
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["UsageMeteringApi.v2.deleteQuota"]) {
      throw new Error(
        "Unstable operation 'deleteQuota' is disabled. Enable it by setting `configuration.unstableOperations['UsageMeteringApi.v2.deleteQuota'] = true`",
      );
    }

    // verify required parameter 'quotaNamespace' is not null or undefined
    if (quotaNamespace === null || quotaNamespace === undefined) {
      throw new RequiredError("quotaNamespace", "deleteQuota");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteQuota");
    }

    // Path Params
    const localVarPath = "/api/v2/usage/quotas/{quota_namespace}/{id}"
      .replace("{quota_namespace}", encodeURIComponent(String(quotaNamespace)))
      .replace("{id}", encodeURIComponent(String(id)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "UsageMeteringApi.v2.deleteQuota",
      UsageMeteringApi.operationServers,
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

  public async getActiveBillingDimensions(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost_by_tag/active_billing_dimensions";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "UsageMeteringApi.v2.getActiveBillingDimensions",
      UsageMeteringApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
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

  public async getBillingDimensionMapping(
    filterMonth?: Date,
    filterView?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/usage/billing_dimension_mapping";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "UsageMeteringApi.v2.getBillingDimensionMapping",
      UsageMeteringApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
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
    if (filterMonth !== undefined) {
      requestContext.setQueryParam(
        "filter[month]",
        serialize(filterMonth, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (filterView !== undefined) {
      requestContext.setQueryParam(
        "filter[view]",
        serialize(filterView, TypingInfo, "string", ""),
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

  public async getCostByOrg(
    startMonth: Date,
    endMonth?: Date,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startMonth' is not null or undefined
    if (startMonth === null || startMonth === undefined) {
      throw new RequiredError("startMonth", "getCostByOrg");
    }

    // Path Params
    const localVarPath = "/api/v2/usage/cost_by_org";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "UsageMeteringApi.v2.getCostByOrg",
      UsageMeteringApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
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
    if (startMonth !== undefined) {
      requestContext.setQueryParam(
        "start_month",
        serialize(startMonth, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (endMonth !== undefined) {
      requestContext.setQueryParam(
        "end_month",
        serialize(endMonth, TypingInfo, "Date", "date-time"),
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

  public async getEstimatedCostByOrg(
    view?: string,
    startMonth?: Date,
    endMonth?: Date,
    startDate?: Date,
    endDate?: Date,
    costAggregation?: CostAggregationType,
    includeConnectedAccounts?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/usage/estimated_cost";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "UsageMeteringApi.v2.getEstimatedCostByOrg",
      UsageMeteringApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
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
    if (view !== undefined) {
      requestContext.setQueryParam(
        "view",
        serialize(view, TypingInfo, "string", ""),
        "",
      );
    }
    if (startMonth !== undefined) {
      requestContext.setQueryParam(
        "start_month",
        serialize(startMonth, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (endMonth !== undefined) {
      requestContext.setQueryParam(
        "end_month",
        serialize(endMonth, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (startDate !== undefined) {
      requestContext.setQueryParam(
        "start_date",
        serialize(startDate, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (endDate !== undefined) {
      requestContext.setQueryParam(
        "end_date",
        serialize(endDate, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (costAggregation !== undefined) {
      requestContext.setQueryParam(
        "cost_aggregation",
        serialize(costAggregation, TypingInfo, "CostAggregationType", ""),
        "",
      );
    }
    if (includeConnectedAccounts !== undefined) {
      requestContext.setQueryParam(
        "include_connected_accounts",
        serialize(includeConnectedAccounts, TypingInfo, "boolean", ""),
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

  public async getHistoricalCostByOrg(
    startMonth: Date,
    view?: string,
    endMonth?: Date,
    includeConnectedAccounts?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startMonth' is not null or undefined
    if (startMonth === null || startMonth === undefined) {
      throw new RequiredError("startMonth", "getHistoricalCostByOrg");
    }

    // Path Params
    const localVarPath = "/api/v2/usage/historical_cost";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "UsageMeteringApi.v2.getHistoricalCostByOrg",
      UsageMeteringApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
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
    if (startMonth !== undefined) {
      requestContext.setQueryParam(
        "start_month",
        serialize(startMonth, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (view !== undefined) {
      requestContext.setQueryParam(
        "view",
        serialize(view, TypingInfo, "string", ""),
        "",
      );
    }
    if (endMonth !== undefined) {
      requestContext.setQueryParam(
        "end_month",
        serialize(endMonth, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (includeConnectedAccounts !== undefined) {
      requestContext.setQueryParam(
        "include_connected_accounts",
        serialize(includeConnectedAccounts, TypingInfo, "boolean", ""),
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

  public async getHourlyUsage(
    filterTimestampStart: Date,
    filterProductFamilies: string,
    filterTimestampEnd?: Date,
    filterIncludeDescendants?: boolean,
    filterIncludeConnectedAccounts?: boolean,
    filterIncludeBreakdown?: boolean,
    filterVersions?: string,
    pageLimit?: number,
    pageNextRecordId?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'filterTimestampStart' is not null or undefined
    if (filterTimestampStart === null || filterTimestampStart === undefined) {
      throw new RequiredError("filterTimestampStart", "getHourlyUsage");
    }

    // verify required parameter 'filterProductFamilies' is not null or undefined
    if (filterProductFamilies === null || filterProductFamilies === undefined) {
      throw new RequiredError("filterProductFamilies", "getHourlyUsage");
    }

    // Path Params
    const localVarPath = "/api/v2/usage/hourly_usage";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "UsageMeteringApi.v2.getHourlyUsage",
      UsageMeteringApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
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
    if (filterTimestampStart !== undefined) {
      requestContext.setQueryParam(
        "filter[timestamp][start]",
        serialize(filterTimestampStart, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (filterTimestampEnd !== undefined) {
      requestContext.setQueryParam(
        "filter[timestamp][end]",
        serialize(filterTimestampEnd, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (filterProductFamilies !== undefined) {
      requestContext.setQueryParam(
        "filter[product_families]",
        serialize(filterProductFamilies, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterIncludeDescendants !== undefined) {
      requestContext.setQueryParam(
        "filter[include_descendants]",
        serialize(filterIncludeDescendants, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterIncludeConnectedAccounts !== undefined) {
      requestContext.setQueryParam(
        "filter[include_connected_accounts]",
        serialize(filterIncludeConnectedAccounts, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterIncludeBreakdown !== undefined) {
      requestContext.setQueryParam(
        "filter[include_breakdown]",
        serialize(filterIncludeBreakdown, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterVersions !== undefined) {
      requestContext.setQueryParam(
        "filter[versions]",
        serialize(filterVersions, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (pageNextRecordId !== undefined) {
      requestContext.setQueryParam(
        "page[next_record_id]",
        serialize(pageNextRecordId, TypingInfo, "string", ""),
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

  public async getMonthlyCostAttribution(
    startMonth: Date,
    fields: string,
    endMonth?: Date,
    sortDirection?: SortDirection,
    sortName?: string,
    tagBreakdownKeys?: string,
    nextRecordId?: string,
    includeDescendants?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startMonth' is not null or undefined
    if (startMonth === null || startMonth === undefined) {
      throw new RequiredError("startMonth", "getMonthlyCostAttribution");
    }

    // verify required parameter 'fields' is not null or undefined
    if (fields === null || fields === undefined) {
      throw new RequiredError("fields", "getMonthlyCostAttribution");
    }

    // Path Params
    const localVarPath = "/api/v2/cost_by_tag/monthly_cost_attribution";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "UsageMeteringApi.v2.getMonthlyCostAttribution",
      UsageMeteringApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
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
    if (startMonth !== undefined) {
      requestContext.setQueryParam(
        "start_month",
        serialize(startMonth, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (endMonth !== undefined) {
      requestContext.setQueryParam(
        "end_month",
        serialize(endMonth, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (fields !== undefined) {
      requestContext.setQueryParam(
        "fields",
        serialize(fields, TypingInfo, "string", ""),
        "",
      );
    }
    if (sortDirection !== undefined) {
      requestContext.setQueryParam(
        "sort_direction",
        serialize(sortDirection, TypingInfo, "SortDirection", ""),
        "",
      );
    }
    if (sortName !== undefined) {
      requestContext.setQueryParam(
        "sort_name",
        serialize(sortName, TypingInfo, "string", ""),
        "",
      );
    }
    if (tagBreakdownKeys !== undefined) {
      requestContext.setQueryParam(
        "tag_breakdown_keys",
        serialize(tagBreakdownKeys, TypingInfo, "string", ""),
        "",
      );
    }
    if (nextRecordId !== undefined) {
      requestContext.setQueryParam(
        "next_record_id",
        serialize(nextRecordId, TypingInfo, "string", ""),
        "",
      );
    }
    if (includeDescendants !== undefined) {
      requestContext.setQueryParam(
        "include_descendants",
        serialize(includeDescendants, TypingInfo, "boolean", ""),
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

  public async getProjectedCost(
    view?: string,
    includeConnectedAccounts?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/usage/projected_cost";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "UsageMeteringApi.v2.getProjectedCost",
      UsageMeteringApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
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
    if (view !== undefined) {
      requestContext.setQueryParam(
        "view",
        serialize(view, TypingInfo, "string", ""),
        "",
      );
    }
    if (includeConnectedAccounts !== undefined) {
      requestContext.setQueryParam(
        "include_connected_accounts",
        serialize(includeConnectedAccounts, TypingInfo, "boolean", ""),
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

  public async getUsageApplicationSecurityMonitoring(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "startHr",
        "getUsageApplicationSecurityMonitoring",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/usage/application_security";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "UsageMeteringApi.v2.getUsageApplicationSecurityMonitoring",
      UsageMeteringApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
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
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        serialize(startHr, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        serialize(endHr, TypingInfo, "Date", "date-time"),
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

  public async getUsageAttributionTypes(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/usage/usage-attribution-types";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "UsageMeteringApi.v2.getUsageAttributionTypes",
      UsageMeteringApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
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

  public async getUsageLambdaTracedInvocations(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError("startHr", "getUsageLambdaTracedInvocations");
    }

    // Path Params
    const localVarPath = "/api/v2/usage/lambda_traced_invocations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "UsageMeteringApi.v2.getUsageLambdaTracedInvocations",
      UsageMeteringApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
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
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        serialize(startHr, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        serialize(endHr, TypingInfo, "Date", "date-time"),
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

  public async getUsageObservabilityPipelines(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError("startHr", "getUsageObservabilityPipelines");
    }

    // Path Params
    const localVarPath = "/api/v2/usage/observability_pipelines";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "UsageMeteringApi.v2.getUsageObservabilityPipelines",
      UsageMeteringApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
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
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        serialize(startHr, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        serialize(endHr, TypingInfo, "Date", "date-time"),
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

  public async getUsageSummaryAvailableFields(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/usage/summary/available_fields";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "UsageMeteringApi.v2.getUsageSummaryAvailableFields",
      UsageMeteringApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
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

  public async listQuotas(
    quotaNamespace: string,
    includeDescendants?: boolean,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["UsageMeteringApi.v2.listQuotas"]) {
      throw new Error(
        "Unstable operation 'listQuotas' is disabled. Enable it by setting `configuration.unstableOperations['UsageMeteringApi.v2.listQuotas'] = true`",
      );
    }

    // verify required parameter 'quotaNamespace' is not null or undefined
    if (quotaNamespace === null || quotaNamespace === undefined) {
      throw new RequiredError("quotaNamespace", "listQuotas");
    }

    // Path Params
    const localVarPath = "/api/v2/usage/quotas/{quota_namespace}".replace(
      "{quota_namespace}",
      encodeURIComponent(String(quotaNamespace)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "UsageMeteringApi.v2.listQuotas",
      UsageMeteringApi.operationServers,
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
    if (includeDescendants !== undefined) {
      requestContext.setQueryParam(
        "include_descendants",
        serialize(includeDescendants, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        serialize(pageCursor, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", "int64"),
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

  public async updateQuota(
    quotaNamespace: string,
    id: string,
    body: UsageQuotaUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["UsageMeteringApi.v2.updateQuota"]) {
      throw new Error(
        "Unstable operation 'updateQuota' is disabled. Enable it by setting `configuration.unstableOperations['UsageMeteringApi.v2.updateQuota'] = true`",
      );
    }

    // verify required parameter 'quotaNamespace' is not null or undefined
    if (quotaNamespace === null || quotaNamespace === undefined) {
      throw new RequiredError("quotaNamespace", "updateQuota");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateQuota");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateQuota");
    }

    // Path Params
    const localVarPath = "/api/v2/usage/quotas/{quota_namespace}/{id}"
      .replace("{quota_namespace}", encodeURIComponent(String(quotaNamespace)))
      .replace("{id}", encodeURIComponent(String(id)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "UsageMeteringApi.v2.updateQuota",
      UsageMeteringApi.operationServers,
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
      serialize(body, TypingInfo, "UsageQuotaUpdateRequest", ""),
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

export class UsageMeteringApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createQuotas
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createQuotas(
    response: ResponseContext,
  ): Promise<UsageQuotasBulkResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UsageQuotasBulkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UsageQuotasBulkResponse",
      ) as UsageQuotasBulkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
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
      const body: UsageQuotasBulkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UsageQuotasBulkResponse",
        "",
      ) as UsageQuotasBulkResponse;
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
   * @params response Response returned by the server for a request to deleteQuota
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteQuota(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
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
   * @params response Response returned by the server for a request to getActiveBillingDimensions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getActiveBillingDimensions(
    response: ResponseContext,
  ): Promise<ActiveBillingDimensionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ActiveBillingDimensionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ActiveBillingDimensionsResponse",
      ) as ActiveBillingDimensionsResponse;
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
      const body: ActiveBillingDimensionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ActiveBillingDimensionsResponse",
        "",
      ) as ActiveBillingDimensionsResponse;
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
   * @params response Response returned by the server for a request to getBillingDimensionMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getBillingDimensionMapping(
    response: ResponseContext,
  ): Promise<BillingDimensionsMappingResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: BillingDimensionsMappingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "BillingDimensionsMappingResponse",
      ) as BillingDimensionsMappingResponse;
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
      const body: BillingDimensionsMappingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "BillingDimensionsMappingResponse",
        "",
      ) as BillingDimensionsMappingResponse;
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
   * @params response Response returned by the server for a request to getCostByOrg
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCostByOrg(
    response: ResponseContext,
  ): Promise<CostByOrgResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CostByOrgResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CostByOrgResponse",
      ) as CostByOrgResponse;
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
      const body: CostByOrgResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CostByOrgResponse",
        "",
      ) as CostByOrgResponse;
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
   * @params response Response returned by the server for a request to getEstimatedCostByOrg
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEstimatedCostByOrg(
    response: ResponseContext,
  ): Promise<CostByOrgResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CostByOrgResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CostByOrgResponse",
      ) as CostByOrgResponse;
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
      const body: CostByOrgResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CostByOrgResponse",
        "",
      ) as CostByOrgResponse;
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
   * @params response Response returned by the server for a request to getHistoricalCostByOrg
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getHistoricalCostByOrg(
    response: ResponseContext,
  ): Promise<CostByOrgResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CostByOrgResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CostByOrgResponse",
      ) as CostByOrgResponse;
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
      const body: CostByOrgResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CostByOrgResponse",
        "",
      ) as CostByOrgResponse;
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
   * @params response Response returned by the server for a request to getHourlyUsage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getHourlyUsage(
    response: ResponseContext,
  ): Promise<HourlyUsageResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: HourlyUsageResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "HourlyUsageResponse",
      ) as HourlyUsageResponse;
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
      const body: HourlyUsageResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "HourlyUsageResponse",
        "",
      ) as HourlyUsageResponse;
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
   * @params response Response returned by the server for a request to getMonthlyCostAttribution
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMonthlyCostAttribution(
    response: ResponseContext,
  ): Promise<MonthlyCostAttributionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MonthlyCostAttributionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MonthlyCostAttributionResponse",
      ) as MonthlyCostAttributionResponse;
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
      const body: MonthlyCostAttributionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MonthlyCostAttributionResponse",
        "",
      ) as MonthlyCostAttributionResponse;
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
   * @params response Response returned by the server for a request to getProjectedCost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getProjectedCost(
    response: ResponseContext,
  ): Promise<ProjectedCostResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProjectedCostResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProjectedCostResponse",
      ) as ProjectedCostResponse;
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
      const body: ProjectedCostResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProjectedCostResponse",
        "",
      ) as ProjectedCostResponse;
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
   * @params response Response returned by the server for a request to getUsageApplicationSecurityMonitoring
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageApplicationSecurityMonitoring(
    response: ResponseContext,
  ): Promise<UsageApplicationSecurityMonitoringResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UsageApplicationSecurityMonitoringResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UsageApplicationSecurityMonitoringResponse",
      ) as UsageApplicationSecurityMonitoringResponse;
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
      const body: UsageApplicationSecurityMonitoringResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UsageApplicationSecurityMonitoringResponse",
        "",
      ) as UsageApplicationSecurityMonitoringResponse;
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
   * @params response Response returned by the server for a request to getUsageAttributionTypes
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageAttributionTypes(
    response: ResponseContext,
  ): Promise<UsageAttributionTypesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UsageAttributionTypesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UsageAttributionTypesResponse",
      ) as UsageAttributionTypesResponse;
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
      const body: UsageAttributionTypesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UsageAttributionTypesResponse",
        "",
      ) as UsageAttributionTypesResponse;
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
   * @params response Response returned by the server for a request to getUsageLambdaTracedInvocations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageLambdaTracedInvocations(
    response: ResponseContext,
  ): Promise<UsageLambdaTracedInvocationsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UsageLambdaTracedInvocationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UsageLambdaTracedInvocationsResponse",
      ) as UsageLambdaTracedInvocationsResponse;
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
      const body: UsageLambdaTracedInvocationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UsageLambdaTracedInvocationsResponse",
        "",
      ) as UsageLambdaTracedInvocationsResponse;
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
   * @params response Response returned by the server for a request to getUsageObservabilityPipelines
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageObservabilityPipelines(
    response: ResponseContext,
  ): Promise<UsageObservabilityPipelinesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UsageObservabilityPipelinesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UsageObservabilityPipelinesResponse",
      ) as UsageObservabilityPipelinesResponse;
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
      const body: UsageObservabilityPipelinesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UsageObservabilityPipelinesResponse",
        "",
      ) as UsageObservabilityPipelinesResponse;
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
   * @params response Response returned by the server for a request to getUsageSummaryAvailableFields
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageSummaryAvailableFields(
    response: ResponseContext,
  ): Promise<UsageSummaryAvailableFieldsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UsageSummaryAvailableFieldsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UsageSummaryAvailableFieldsResponse",
      ) as UsageSummaryAvailableFieldsResponse;
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
      const body: UsageSummaryAvailableFieldsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UsageSummaryAvailableFieldsResponse",
        "",
      ) as UsageSummaryAvailableFieldsResponse;
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
   * @params response Response returned by the server for a request to listQuotas
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listQuotas(
    response: ResponseContext,
  ): Promise<UsageQuotasListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UsageQuotasListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UsageQuotasListResponse",
      ) as UsageQuotasListResponse;
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
      const body: UsageQuotasListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UsageQuotasListResponse",
        "",
      ) as UsageQuotasListResponse;
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
   * @params response Response returned by the server for a request to updateQuota
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateQuota(
    response: ResponseContext,
  ): Promise<UsageQuotaResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UsageQuotaResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UsageQuotaResponse",
      ) as UsageQuotaResponse;
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
      const body: UsageQuotaResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UsageQuotaResponse",
        "",
      ) as UsageQuotaResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface UsageMeteringApiCreateQuotasRequest {
  /**
   * The product-specific namespace whose usage quotas are being managed.
   * @type string
   */
  quotaNamespace: string;
  /**
   * The usage quotas to create or update.
   * @type UsageQuotasCreateRequest
   */
  body: UsageQuotasCreateRequest;
  /**
   * Whether to write every item in the request to the caller's organization and all of its descendant organizations, instead of only the caller's organization. Only descendants in the same datacenter are supported. For a user-handle scope, the quota is applied only to the caller's organization and to descendant organizations where that user handle exists; the item fails only if the handle exists in none of them.
   * @type boolean
   */
  includeDescendants?: boolean;
}

export interface UsageMeteringApiDeleteQuotaRequest {
  /**
   * The product-specific namespace whose usage quotas are being managed.
   * @type string
   */
  quotaNamespace: string;
  /**
   * The opaque quota identifier returned by a previous list or create request. Clients must pass this value verbatim.
   * @type string
   */
  id: string;
}

export interface UsageMeteringApiGetBillingDimensionMappingRequest {
  /**
   * Datetime in ISO-8601 format, UTC, and for mappings beginning this month. Defaults to the current month.
   * @type Date
   */
  filterMonth?: Date;
  /**
   * String to specify whether to retrieve active billing dimension mappings for the contract or for all available mappings. Allowed views have the string `active` or `all`. Defaults to `active`.
   * @type string
   */
  filterView?: string;
}

export interface UsageMeteringApiGetCostByOrgRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning this month.
   * @type Date
   */
  startMonth: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month.
   * @type Date
   */
  endMonth?: Date;
}

export interface UsageMeteringApiGetEstimatedCostByOrgRequest {
  /**
   * String to specify whether cost is broken down at a parent-org level or at the sub-org level. Available views are `summary` and `sub-org`. Defaults to `summary`.
   * @type string
   */
  view?: string;
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning this month. **Either start_month or start_date should be specified, but not both.** (start_month cannot go beyond two months in the past). Provide an `end_month` to view month-over-month cost.
   * @type Date
   */
  startMonth?: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month.
   * @type Date
   */
  endMonth?: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to day: `[YYYY-MM-DD]` for cost beginning this day. **Either start_month or start_date should be specified, but not both.** (start_date cannot go beyond two months in the past). Provide an `end_date` to view day-over-day cumulative cost.
   * @type Date
   */
  startDate?: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to day: `[YYYY-MM-DD]` for cost ending this day.
   * @type Date
   */
  endDate?: Date;
  /**
   * Controls how costs are aggregated when using `start_date`. The `cumulative` option returns month-to-date running totals.
   * @type CostAggregationType
   */
  costAggregation?: CostAggregationType;
  /**
   * Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`.
   * @type boolean
   */
  includeConnectedAccounts?: boolean;
}

export interface UsageMeteringApiGetHistoricalCostByOrgRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning this month.
   * @type Date
   */
  startMonth: Date;
  /**
   * String to specify whether cost is broken down at a parent-org level or at the sub-org level. Available views are `summary` and `sub-org`.  Defaults to `summary`.
   * @type string
   */
  view?: string;
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month.
   * @type Date
   */
  endMonth?: Date;
  /**
   * Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`.
   * @type boolean
   */
  includeConnectedAccounts?: boolean;
}

export interface UsageMeteringApiGetHourlyUsageRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  filterTimestampStart: Date;
  /**
   * Comma separated list of product families to retrieve. Available families are `all`, `ai`, `analyzed_logs`,
   * `application_performance_monitoring`, `application_security`, `audit_trail`, `bits_ai`, `serverless`, `ci_app`,
   * `cloud_cost_management`, `cloud_siem`, `csm_container_enterprise`, `csm_host_enterprise`, `csm_host_pro`, `cspm`,
   * `custom_events`, `cws`, `data_observability`, `dbm`, `digital_experience_management`, `error_tracking`,
   * `fargate`, `infra_hosts`, `incident_management`, `indexed_logs`, `indexed_spans`, `infrastructure_monitoring`,
   * `ingested_spans`, `iot`, `lambda_traced_invocations`, `llm_observability`, `log_management`, `logs`,
   * `network_flows`, `network_hosts`, `network_monitoring`, `observability_pipelines`, `online_archive`,
   * `platform_capabilities`, `product_analytics`, `profiling`, `rum`, `rum_browser_sessions`, `rum_mobile_sessions`,
   * `sds`, `security`, `snmp`, `software_delivery`, `synthetics_api`, `synthetics_browser`,
   * `synthetics_mobile`, `synthetics_parallel_testing`, `timeseries`, `vuln_management` and `workflow_executions`.
   * The following product family has been **deprecated**: `audit_logs`.
   * @type string
   */
  filterProductFamilies: string;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  filterTimestampEnd?: Date;
  /**
   * Include child org usage in the response. Defaults to false.
   * @type boolean
   */
  filterIncludeDescendants?: boolean;
  /**
   * Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to false.
   * @type boolean
   */
  filterIncludeConnectedAccounts?: boolean;
  /**
   * Include breakdown of usage by subcategories where applicable (for product family logs only). Defaults to false.
   * @type boolean
   */
  filterIncludeBreakdown?: boolean;
  /**
   * Comma separated list of product family versions to use in the format `product_family:version`. For example,
   * `infra_hosts:1.0.0`. If this parameter is not used, the API will use the latest version of each requested
   * product family. Currently all families have one version `1.0.0`.
   * @type string
   */
  filterVersions?: string;
  /**
   * Maximum number of results to return (between 1 and 500) - defaults to 500 if limit not specified.
   * @type number
   */
  pageLimit?: number;
  /**
   * List following results with a next_record_id provided in the previous query.
   * @type string
   */
  pageNextRecordId?: string;
}

export interface UsageMeteringApiGetMonthlyCostAttributionRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning in this month.
   * @type Date
   */
  startMonth: Date;
  /**
   * Comma-separated list specifying cost types (e.g., `<billing_dimension>_on_demand_cost`, `<billing_dimension>_committed_cost`, `<billing_dimension>_total_cost`) and the
   * proportions (`<billing_dimension>_percentage_in_org`, `<billing_dimension>_percentage_in_account`). Use `*` to retrieve all fields.
   * Example: `infra_host_on_demand_cost,infra_host_percentage_in_account`
   * To obtain the complete list of active billing dimensions that can be used to replace
   * `<billing_dimension>` in the field names, make a request to the [Get active billing dimensions API](https://docs.datadoghq.com/api/latest/usage-metering/#get-active-billing-dimensions-for-cost-attribution).
   * @type string
   */
  fields: string;
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month.
   * @type Date
   */
  endMonth?: Date;
  /**
   * The direction to sort by: `[desc, asc]`.
   * @type SortDirection
   */
  sortDirection?: SortDirection;
  /**
   * The billing dimension to sort by. Always sorted by total cost. Example: `infra_host`.
   * @type string
   */
  sortName?: string;
  /**
   * Comma separated list of tag keys used to group cost. If no value is provided the cost will not be broken down by tags.
   * To see which tags are available, look for the value of `tag_config_source` in the API response.
   * @type string
   */
  tagBreakdownKeys?: string;
  /**
   * List following results with a next_record_id provided in the previous query.
   * @type string
   */
  nextRecordId?: string;
  /**
   * Include child org cost in the response. Defaults to `true`.
   * @type boolean
   */
  includeDescendants?: boolean;
}

export interface UsageMeteringApiGetProjectedCostRequest {
  /**
   * String to specify whether cost is broken down at a parent-org level or at the sub-org level. Available views are `summary` and `sub-org`. Defaults to `summary`.
   * @type string
   */
  view?: string;
  /**
   * Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`.
   * @type boolean
   */
  includeConnectedAccounts?: boolean;
}

export interface UsageMeteringApiGetUsageApplicationSecurityMonitoringRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
   * **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageLambdaTracedInvocationsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
   * **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageObservabilityPipelinesRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
   * **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiListQuotasRequest {
  /**
   * The product-specific namespace whose usage quotas are being managed.
   * @type string
   */
  quotaNamespace: string;
  /**
   * Whether to include quotas configured on descendant organizations in the caller's organization hierarchy. Only descendants in the same datacenter are supported.
   * @type boolean
   */
  includeDescendants?: boolean;
  /**
   * An opaque cursor from a previous response's `meta.page.next_cursor` used to retrieve the next page.
   * @type string
   */
  pageCursor?: string;
  /**
   * The number of usage quotas to return per page.
   * @type number
   */
  pageLimit?: number;
}

export interface UsageMeteringApiUpdateQuotaRequest {
  /**
   * The product-specific namespace whose usage quotas are being managed.
   * @type string
   */
  quotaNamespace: string;
  /**
   * The opaque quota identifier returned by a previous list or create request. Clients must pass this value verbatim.
   * @type string
   */
  id: string;
  /**
   * The usage quota fields to update. Omitting an attribute leaves its current value unchanged.
   * @type UsageQuotaUpdateRequest
   */
  body: UsageQuotaUpdateRequest;
}

export class UsageMeteringApi {
  private requestFactory: UsageMeteringApiRequestFactory;
  private responseProcessor: UsageMeteringApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: UsageMeteringApiRequestFactory,
    responseProcessor?: UsageMeteringApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new UsageMeteringApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new UsageMeteringApiResponseProcessor();
  }

  /**
   * Creates or updates one or more usage quotas by scope. If a quota already exists for a supplied scope, it is updated; otherwise, a new quota is created. Requires the `user_access_manage`, `billing_edit`, and `org_management` permissions.
   * @param param The request object
   */
  public createQuotas(
    param: UsageMeteringApiCreateQuotasRequest,
    options?: Configuration,
  ): Promise<UsageQuotasBulkResponse> {
    const requestContextPromise = this.requestFactory.createQuotas(
      param.quotaNamespace,
      param.body,
      param.includeDescendants,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createQuotas(responseContext);
        });
    });
  }

  /**
   * Deletes a usage quota by its opaque identifier. The quota must belong to the caller's organization or one of its descendants, and its opaque identifier must belong to the requested quota namespace. Requires the `user_access_manage`, `billing_edit`, and `org_management` permissions.
   * @param param The request object
   */
  public deleteQuota(
    param: UsageMeteringApiDeleteQuotaRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteQuota(
      param.quotaNamespace,
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteQuota(responseContext);
        });
    });
  }

  /**
   * Get active billing dimensions for cost attribution. Cost data for a given month becomes available no later than the 19th of the following month.
   * @param param The request object
   */
  public getActiveBillingDimensions(
    options?: Configuration,
  ): Promise<ActiveBillingDimensionsResponse> {
    const requestContextPromise =
      this.requestFactory.getActiveBillingDimensions(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getActiveBillingDimensions(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a mapping of billing dimensions to the corresponding keys for the supported usage metering public API endpoints.
   * Mapping data is updated on a monthly cadence.
   *
   * This endpoint is only accessible to [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
   * @param param The request object
   */
  public getBillingDimensionMapping(
    param: UsageMeteringApiGetBillingDimensionMappingRequest = {},
    options?: Configuration,
  ): Promise<BillingDimensionsMappingResponse> {
    const requestContextPromise =
      this.requestFactory.getBillingDimensionMapping(
        param.filterMonth,
        param.filterView,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getBillingDimensionMapping(
            responseContext,
          );
        });
    });
  }

  /**
   * Get cost across multi-org account.
   * Cost by org data for a given month becomes available no later than the 16th of the following month.
   * **Note:** This endpoint has been deprecated. Please use the new endpoint
   * [`/historical_cost`](https://docs.datadoghq.com/api/latest/usage-metering/#get-historical-cost-across-your-account)
   * instead.
   *
   * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
   * @param param The request object
   */
  public getCostByOrg(
    param: UsageMeteringApiGetCostByOrgRequest,
    options?: Configuration,
  ): Promise<CostByOrgResponse> {
    const requestContextPromise = this.requestFactory.getCostByOrg(
      param.startMonth,
      param.endMonth,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCostByOrg(responseContext);
        });
    });
  }

  /**
   * Get estimated cost across multi-org and single root-org accounts.
   * Estimated cost data is only available for the current month and previous month
   * and is delayed by up to 72 hours from when it was incurred.
   * To access historical costs prior to this, use the `/historical_cost` endpoint.
   *
   * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
   * @param param The request object
   */
  public getEstimatedCostByOrg(
    param: UsageMeteringApiGetEstimatedCostByOrgRequest = {},
    options?: Configuration,
  ): Promise<CostByOrgResponse> {
    const requestContextPromise = this.requestFactory.getEstimatedCostByOrg(
      param.view,
      param.startMonth,
      param.endMonth,
      param.startDate,
      param.endDate,
      param.costAggregation,
      param.includeConnectedAccounts,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getEstimatedCostByOrg(responseContext);
        });
    });
  }

  /**
   * Get historical cost across multi-org and single root-org accounts.
   * Cost data for a given month becomes available no later than the 16th of the following month.
   *
   * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
   * @param param The request object
   */
  public getHistoricalCostByOrg(
    param: UsageMeteringApiGetHistoricalCostByOrgRequest,
    options?: Configuration,
  ): Promise<CostByOrgResponse> {
    const requestContextPromise = this.requestFactory.getHistoricalCostByOrg(
      param.startMonth,
      param.view,
      param.endMonth,
      param.includeConnectedAccounts,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getHistoricalCostByOrg(responseContext);
        });
    });
  }

  /**
   * Get hourly usage by product family.
   * @param param The request object
   */
  public getHourlyUsage(
    param: UsageMeteringApiGetHourlyUsageRequest,
    options?: Configuration,
  ): Promise<HourlyUsageResponse> {
    const requestContextPromise = this.requestFactory.getHourlyUsage(
      param.filterTimestampStart,
      param.filterProductFamilies,
      param.filterTimestampEnd,
      param.filterIncludeDescendants,
      param.filterIncludeConnectedAccounts,
      param.filterIncludeBreakdown,
      param.filterVersions,
      param.pageLimit,
      param.pageNextRecordId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getHourlyUsage(responseContext);
        });
    });
  }

  /**
   * Get monthly cost attribution by tag across multi-org and single root-org accounts.
   * Cost Attribution data for a given month becomes available no later than the 19th of the following month.
   * This API endpoint is paginated. To make sure you receive all records, check if the value of `next_record_id` is
   * set in the response. If it is, make another request and pass `next_record_id` as a parameter.
   * Pseudo code example:
   * ```
   * response := GetMonthlyCostAttribution(start_month, end_month)
   * cursor := response.metadata.pagination.next_record_id
   * WHILE cursor != null BEGIN
   *   sleep(5 seconds)  # Avoid running into rate limit
   *   response := GetMonthlyCostAttribution(start_month, end_month, next_record_id=cursor)
   *   cursor := response.metadata.pagination.next_record_id
   * END
   * ```
   *
   * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/). This endpoint is not available in the Government (US1-FED) site.
   * @param param The request object
   */
  public getMonthlyCostAttribution(
    param: UsageMeteringApiGetMonthlyCostAttributionRequest,
    options?: Configuration,
  ): Promise<MonthlyCostAttributionResponse> {
    const requestContextPromise = this.requestFactory.getMonthlyCostAttribution(
      param.startMonth,
      param.fields,
      param.endMonth,
      param.sortDirection,
      param.sortName,
      param.tagBreakdownKeys,
      param.nextRecordId,
      param.includeDescendants,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMonthlyCostAttribution(
            responseContext,
          );
        });
    });
  }

  /**
   * Get projected cost across multi-org and single root-org accounts.
   * Projected cost data is only available for the current month and becomes available around the 12th of the month.
   *
   * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
   * @param param The request object
   */
  public getProjectedCost(
    param: UsageMeteringApiGetProjectedCostRequest = {},
    options?: Configuration,
  ): Promise<ProjectedCostResponse> {
    const requestContextPromise = this.requestFactory.getProjectedCost(
      param.view,
      param.includeConnectedAccounts,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getProjectedCost(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for application security .
   * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family)
   * @param param The request object
   */
  public getUsageApplicationSecurityMonitoring(
    param: UsageMeteringApiGetUsageApplicationSecurityMonitoringRequest,
    options?: Configuration,
  ): Promise<UsageApplicationSecurityMonitoringResponse> {
    const requestContextPromise =
      this.requestFactory.getUsageApplicationSecurityMonitoring(
        param.startHr,
        param.endHr,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageApplicationSecurityMonitoring(
            responseContext,
          );
        });
    });
  }

  /**
   * Get usage attribution types.
   * @param param The request object
   */
  public getUsageAttributionTypes(
    options?: Configuration,
  ): Promise<UsageAttributionTypesResponse> {
    const requestContextPromise =
      this.requestFactory.getUsageAttributionTypes(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageAttributionTypes(
            responseContext,
          );
        });
    });
  }

  /**
   * Get hourly usage for Lambda traced invocations.
   * **Note:** This endpoint has been deprecated.. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family)
   * @param param The request object
   */
  public getUsageLambdaTracedInvocations(
    param: UsageMeteringApiGetUsageLambdaTracedInvocationsRequest,
    options?: Configuration,
  ): Promise<UsageLambdaTracedInvocationsResponse> {
    const requestContextPromise =
      this.requestFactory.getUsageLambdaTracedInvocations(
        param.startHr,
        param.endHr,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageLambdaTracedInvocations(
            responseContext,
          );
        });
    });
  }

  /**
   * Get hourly usage for observability pipelines.
   * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family)
   * @param param The request object
   */
  public getUsageObservabilityPipelines(
    param: UsageMeteringApiGetUsageObservabilityPipelinesRequest,
    options?: Configuration,
  ): Promise<UsageObservabilityPipelinesResponse> {
    const requestContextPromise =
      this.requestFactory.getUsageObservabilityPipelines(
        param.startHr,
        param.endHr,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageObservabilityPipelines(
            responseContext,
          );
        });
    });
  }

  /**
   * List the field names returned by `GET /api/v1/usage/summary` at each of its
   * three response levels. Each list contains every key the data endpoint
   * emits—both typed fields declared in the OpenAPI spec and untyped keys
   * exposed through `additionalProperties` (the latter used for billing
   * dimensions and usage types added after the v1 schema freeze).
   *
   * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
   *
   * Go example:
   *
   * ```go
   * fields, _, err := api.GetUsageSummaryAvailableFields(ctx)
   * attr := fields.Data.GetAttributes()
   *
   * // resp is the *UsageSummaryResponse returned by api.GetUsageSummary(ctx, ...)
   * // Layer 1: UsageSummaryResponse
   * for _, key := range attr.GetResponseFields() {
   *     if val, ok := resp.AdditionalProperties[key]; ok {
   *         fmt.Println(key, val.(json.Number))
   *     }
   * }
   * // Layer 2: UsageSummaryDate (per month)
   * for _, date := range resp.GetUsage() {
   *     for _, key := range attr.GetDateFields() {
   *         if val, ok := date.AdditionalProperties[key]; ok {
   *             fmt.Println(key, val.(json.Number))
   *         }
   *     }
   *     // Layer 3: UsageSummaryDateOrg (per org per month)
   *     for _, org := range date.GetOrgs() {
   *         for _, key := range attr.GetDateOrgFields() {
   *             if val, ok := org.AdditionalProperties[key]; ok {
   *                 fmt.Println(key, val.(json.Number))
   *             }
   *         }
   *     }
   * }
   * ```
   * @param param The request object
   */
  public getUsageSummaryAvailableFields(
    options?: Configuration,
  ): Promise<UsageSummaryAvailableFieldsResponse> {
    const requestContextPromise =
      this.requestFactory.getUsageSummaryAvailableFields(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageSummaryAvailableFields(
            responseContext,
          );
        });
    });
  }

  /**
   * Lists usage quotas for the caller's organization in a quota namespace. You can optionally include descendant organizations in the same datacenter as the caller. Requires the `user_access_manage`, `billing_edit`, and `org_management` permissions.
   * @param param The request object
   */
  public listQuotas(
    param: UsageMeteringApiListQuotasRequest,
    options?: Configuration,
  ): Promise<UsageQuotasListResponse> {
    const requestContextPromise = this.requestFactory.listQuotas(
      param.quotaNamespace,
      param.includeDescendants,
      param.pageCursor,
      param.pageLimit,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listQuotas(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listQuotas returning a generator with all the items.
   */
  public async *listQuotasWithPagination(
    param: UsageMeteringApiListQuotasRequest,
    options?: Configuration,
  ): AsyncGenerator<UsageQuotaResponseData> {
    let pageSize = 100;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listQuotas(
        param.quotaNamespace,
        param.includeDescendants,
        param.pageCursor,
        param.pageLimit,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response = await this.responseProcessor.listQuotas(responseContext);
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length === 0) {
        break;
      }
      const cursorMeta = response.meta;
      if (cursorMeta === undefined) {
        break;
      }
      const cursorMetaPage = cursorMeta.page;
      if (cursorMetaPage === undefined) {
        break;
      }
      const cursorMetaPageNextCursor = cursorMetaPage.nextCursor;
      if (cursorMetaPageNextCursor === undefined) {
        break;
      }

      param.pageCursor = cursorMetaPageNextCursor;
    }
  }

  /**
   * Updates the supplied fields on a usage quota and leaves omitted fields unchanged. The quota must belong to the caller's organization or one of its descendants, and its opaque identifier must belong to the requested quota namespace. Requires the `user_access_manage`, `billing_edit`, and `org_management` permissions.
   * @param param The request object
   */
  public updateQuota(
    param: UsageMeteringApiUpdateQuotaRequest,
    options?: Configuration,
  ): Promise<UsageQuotaResponse> {
    const requestContextPromise = this.requestFactory.updateQuota(
      param.quotaNamespace,
      param.id,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateQuota(responseContext);
        });
    });
  }
}
