import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import {
  Configuration,
  getServer,
  applySecurityAuthentication,
} from "../configuration";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";
import { logger } from "../../../index";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { HourlyUsageAttributionResponse } from "../models/HourlyUsageAttributionResponse";
import { HourlyUsageAttributionUsageType } from "../models/HourlyUsageAttributionUsageType";
import { MonthlyUsageAttributionResponse } from "../models/MonthlyUsageAttributionResponse";
import { MonthlyUsageAttributionSupportedMetrics } from "../models/MonthlyUsageAttributionSupportedMetrics";
import { UsageAnalyzedLogsResponse } from "../models/UsageAnalyzedLogsResponse";
import { UsageAttributionResponse } from "../models/UsageAttributionResponse";
import { UsageAttributionSort } from "../models/UsageAttributionSort";
import { UsageAttributionSupportedMetrics } from "../models/UsageAttributionSupportedMetrics";
import { UsageAuditLogsResponse } from "../models/UsageAuditLogsResponse";
import { UsageBillableSummaryResponse } from "../models/UsageBillableSummaryResponse";
import { UsageCIVisibilityResponse } from "../models/UsageCIVisibilityResponse";
import { UsageCWSResponse } from "../models/UsageCWSResponse";
import { UsageCloudSecurityPostureManagementResponse } from "../models/UsageCloudSecurityPostureManagementResponse";
import { UsageCustomReportsResponse } from "../models/UsageCustomReportsResponse";
import { UsageDBMResponse } from "../models/UsageDBMResponse";
import { UsageFargateResponse } from "../models/UsageFargateResponse";
import { UsageHostsResponse } from "../models/UsageHostsResponse";
import { UsageIncidentManagementResponse } from "../models/UsageIncidentManagementResponse";
import { UsageIndexedSpansResponse } from "../models/UsageIndexedSpansResponse";
import { UsageIngestedSpansResponse } from "../models/UsageIngestedSpansResponse";
import { UsageIoTResponse } from "../models/UsageIoTResponse";
import { UsageLambdaResponse } from "../models/UsageLambdaResponse";
import { UsageLogsByIndexResponse } from "../models/UsageLogsByIndexResponse";
import { UsageLogsByRetentionResponse } from "../models/UsageLogsByRetentionResponse";
import { UsageLogsResponse } from "../models/UsageLogsResponse";
import { UsageNetworkFlowsResponse } from "../models/UsageNetworkFlowsResponse";
import { UsageNetworkHostsResponse } from "../models/UsageNetworkHostsResponse";
import { UsageOnlineArchiveResponse } from "../models/UsageOnlineArchiveResponse";
import { UsageProfilingResponse } from "../models/UsageProfilingResponse";
import { UsageRumSessionsResponse } from "../models/UsageRumSessionsResponse";
import { UsageRumUnitsResponse } from "../models/UsageRumUnitsResponse";
import { UsageSDSResponse } from "../models/UsageSDSResponse";
import { UsageSNMPResponse } from "../models/UsageSNMPResponse";
import { UsageSort } from "../models/UsageSort";
import { UsageSortDirection } from "../models/UsageSortDirection";
import { UsageSpecifiedCustomReportsResponse } from "../models/UsageSpecifiedCustomReportsResponse";
import { UsageSummaryResponse } from "../models/UsageSummaryResponse";
import { UsageSyntheticsAPIResponse } from "../models/UsageSyntheticsAPIResponse";
import { UsageSyntheticsBrowserResponse } from "../models/UsageSyntheticsBrowserResponse";
import { UsageSyntheticsResponse } from "../models/UsageSyntheticsResponse";
import { UsageTimeseriesResponse } from "../models/UsageTimeseriesResponse";
import { UsageTopAvgMetricsResponse } from "../models/UsageTopAvgMetricsResponse";

export class UsageMeteringApiRequestFactory extends BaseAPIRequestFactory {
  public async getDailyCustomReports(
    pageSize?: number,
    pageNumber?: number,
    sortDir?: UsageSortDirection,
    sort?: UsageSort,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getDailyCustomReports'");
    if (!_config.unstableOperations["getDailyCustomReports"]) {
      throw new Error("Unstable operation 'getDailyCustomReports' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v1/daily_custom_reports";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getDailyCustomReports"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64")
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64")
      );
    }
    if (sortDir !== undefined) {
      requestContext.setQueryParam(
        "sort_dir",
        ObjectSerializer.serialize(sortDir, "UsageSortDirection", "")
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "UsageSort", "")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getHourlyUsageAttribution(
    startHr: Date,
    usageType: HourlyUsageAttributionUsageType,
    endHr?: Date,
    nextRecordId?: string,
    tagBreakdownKeys?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getHourlyUsageAttribution'");
    if (!_config.unstableOperations["getHourlyUsageAttribution"]) {
      throw new Error(
        "Unstable operation 'getHourlyUsageAttribution' is disabled"
      );
    }

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getHourlyUsageAttribution."
      );
    }

    // verify required parameter 'usageType' is not null or undefined
    if (usageType === null || usageType === undefined) {
      throw new RequiredError(
        "Required parameter usageType was null or undefined when calling getHourlyUsageAttribution."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/hourly-attribution";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getHourlyUsageAttribution"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }
    if (usageType !== undefined) {
      requestContext.setQueryParam(
        "usage_type",
        ObjectSerializer.serialize(
          usageType,
          "HourlyUsageAttributionUsageType",
          ""
        )
      );
    }
    if (nextRecordId !== undefined) {
      requestContext.setQueryParam(
        "next_record_id",
        ObjectSerializer.serialize(nextRecordId, "string", "")
      );
    }
    if (tagBreakdownKeys !== undefined) {
      requestContext.setQueryParam(
        "tag_breakdown_keys",
        ObjectSerializer.serialize(tagBreakdownKeys, "string", "")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getIncidentManagement(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getIncidentManagement."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/incident-management";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getIncidentManagement"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getIngestedSpans(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getIngestedSpans."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/ingested-spans";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getIngestedSpans"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getMonthlyCustomReports(
    pageSize?: number,
    pageNumber?: number,
    sortDir?: UsageSortDirection,
    sort?: UsageSort,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getMonthlyCustomReports'");
    if (!_config.unstableOperations["getMonthlyCustomReports"]) {
      throw new Error(
        "Unstable operation 'getMonthlyCustomReports' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v1/monthly_custom_reports";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getMonthlyCustomReports"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64")
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64")
      );
    }
    if (sortDir !== undefined) {
      requestContext.setQueryParam(
        "sort_dir",
        ObjectSerializer.serialize(sortDir, "UsageSortDirection", "")
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "UsageSort", "")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getMonthlyUsageAttribution(
    startMonth: Date,
    fields: MonthlyUsageAttributionSupportedMetrics,
    endMonth?: Date,
    sortDirection?: UsageSortDirection,
    sortName?: MonthlyUsageAttributionSupportedMetrics,
    tagBreakdownKeys?: string,
    nextRecordId?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getMonthlyUsageAttribution'");
    if (!_config.unstableOperations["getMonthlyUsageAttribution"]) {
      throw new Error(
        "Unstable operation 'getMonthlyUsageAttribution' is disabled"
      );
    }

    // verify required parameter 'startMonth' is not null or undefined
    if (startMonth === null || startMonth === undefined) {
      throw new RequiredError(
        "Required parameter startMonth was null or undefined when calling getMonthlyUsageAttribution."
      );
    }

    // verify required parameter 'fields' is not null or undefined
    if (fields === null || fields === undefined) {
      throw new RequiredError(
        "Required parameter fields was null or undefined when calling getMonthlyUsageAttribution."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/monthly-attribution";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getMonthlyUsageAttribution"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startMonth !== undefined) {
      requestContext.setQueryParam(
        "start_month",
        ObjectSerializer.serialize(startMonth, "Date", "date-time")
      );
    }
    if (endMonth !== undefined) {
      requestContext.setQueryParam(
        "end_month",
        ObjectSerializer.serialize(endMonth, "Date", "date-time")
      );
    }
    if (fields !== undefined) {
      requestContext.setQueryParam(
        "fields",
        ObjectSerializer.serialize(
          fields,
          "MonthlyUsageAttributionSupportedMetrics",
          ""
        )
      );
    }
    if (sortDirection !== undefined) {
      requestContext.setQueryParam(
        "sort_direction",
        ObjectSerializer.serialize(sortDirection, "UsageSortDirection", "")
      );
    }
    if (sortName !== undefined) {
      requestContext.setQueryParam(
        "sort_name",
        ObjectSerializer.serialize(
          sortName,
          "MonthlyUsageAttributionSupportedMetrics",
          ""
        )
      );
    }
    if (tagBreakdownKeys !== undefined) {
      requestContext.setQueryParam(
        "tag_breakdown_keys",
        ObjectSerializer.serialize(tagBreakdownKeys, "string", "")
      );
    }
    if (nextRecordId !== undefined) {
      requestContext.setQueryParam(
        "next_record_id",
        ObjectSerializer.serialize(nextRecordId, "string", "")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getSpecifiedDailyCustomReports(
    reportId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getSpecifiedDailyCustomReports'");
    if (!_config.unstableOperations["getSpecifiedDailyCustomReports"]) {
      throw new Error(
        "Unstable operation 'getSpecifiedDailyCustomReports' is disabled"
      );
    }

    // verify required parameter 'reportId' is not null or undefined
    if (reportId === null || reportId === undefined) {
      throw new RequiredError(
        "Required parameter reportId was null or undefined when calling getSpecifiedDailyCustomReports."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/daily_custom_reports/{report_id}".replace(
      "{" + "report_id" + "}",
      encodeURIComponent(String(reportId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getSpecifiedDailyCustomReports"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getSpecifiedMonthlyCustomReports(
    reportId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getSpecifiedMonthlyCustomReports'");
    if (!_config.unstableOperations["getSpecifiedMonthlyCustomReports"]) {
      throw new Error(
        "Unstable operation 'getSpecifiedMonthlyCustomReports' is disabled"
      );
    }

    // verify required parameter 'reportId' is not null or undefined
    if (reportId === null || reportId === undefined) {
      throw new RequiredError(
        "Required parameter reportId was null or undefined when calling getSpecifiedMonthlyCustomReports."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/monthly_custom_reports/{report_id}".replace(
      "{" + "report_id" + "}",
      encodeURIComponent(String(reportId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getSpecifiedMonthlyCustomReports"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageAnalyzedLogs(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageAnalyzedLogs."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/analyzed_logs";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageAnalyzedLogs"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageAttribution(
    startMonth: Date,
    fields: UsageAttributionSupportedMetrics,
    endMonth?: Date,
    sortDirection?: UsageSortDirection,
    sortName?: UsageAttributionSort,
    includeDescendants?: boolean,
    offset?: number,
    limit?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getUsageAttribution'");
    if (!_config.unstableOperations["getUsageAttribution"]) {
      throw new Error("Unstable operation 'getUsageAttribution' is disabled");
    }

    // verify required parameter 'startMonth' is not null or undefined
    if (startMonth === null || startMonth === undefined) {
      throw new RequiredError(
        "Required parameter startMonth was null or undefined when calling getUsageAttribution."
      );
    }

    // verify required parameter 'fields' is not null or undefined
    if (fields === null || fields === undefined) {
      throw new RequiredError(
        "Required parameter fields was null or undefined when calling getUsageAttribution."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/attribution";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageAttribution"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startMonth !== undefined) {
      requestContext.setQueryParam(
        "start_month",
        ObjectSerializer.serialize(startMonth, "Date", "date-time")
      );
    }
    if (fields !== undefined) {
      requestContext.setQueryParam(
        "fields",
        ObjectSerializer.serialize(
          fields,
          "UsageAttributionSupportedMetrics",
          ""
        )
      );
    }
    if (endMonth !== undefined) {
      requestContext.setQueryParam(
        "end_month",
        ObjectSerializer.serialize(endMonth, "Date", "date-time")
      );
    }
    if (sortDirection !== undefined) {
      requestContext.setQueryParam(
        "sort_direction",
        ObjectSerializer.serialize(sortDirection, "UsageSortDirection", "")
      );
    }
    if (sortName !== undefined) {
      requestContext.setQueryParam(
        "sort_name",
        ObjectSerializer.serialize(sortName, "UsageAttributionSort", "")
      );
    }
    if (includeDescendants !== undefined) {
      requestContext.setQueryParam(
        "include_descendants",
        ObjectSerializer.serialize(includeDescendants, "boolean", "")
      );
    }
    if (offset !== undefined) {
      requestContext.setQueryParam(
        "offset",
        ObjectSerializer.serialize(offset, "number", "int64")
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", "int64")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageAuditLogs(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageAuditLogs."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/audit_logs";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageAuditLogs"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageBillableSummary(
    month?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/usage/billable-summary";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageBillableSummary"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (month !== undefined) {
      requestContext.setQueryParam(
        "month",
        ObjectSerializer.serialize(month, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageCIApp(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageCIApp."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/ci-app";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageCIApp"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageCWS(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageCWS."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/cws";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageCWS"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageCloudSecurityPostureManagement(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageCloudSecurityPostureManagement."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/cspm";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageCloudSecurityPostureManagement"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageDBM(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageDBM."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/dbm";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageDBM"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageFargate(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageFargate."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/fargate";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageFargate"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageHosts(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageHosts."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/hosts";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageHosts"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageIndexedSpans(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageIndexedSpans."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/indexed-spans";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageIndexedSpans"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageInternetOfThings(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageInternetOfThings."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/iot";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageInternetOfThings"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageLambda(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageLambda."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/aws_lambda";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageLambda"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageLogs(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageLogs."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/logs";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageLogs"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageLogsByIndex(
    startHr: Date,
    endHr?: Date,
    indexName?: Array<string>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageLogsByIndex."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/logs_by_index";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageLogsByIndex"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }
    if (indexName !== undefined) {
      requestContext.setQueryParam(
        "index_name",
        ObjectSerializer.serialize(indexName, "Array<string>", "")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageLogsByRetention(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageLogsByRetention."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/logs-by-retention";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageLogsByRetention"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageNetworkFlows(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageNetworkFlows."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/network_flows";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageNetworkFlows"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageNetworkHosts(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageNetworkHosts."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/network_hosts";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageNetworkHosts"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageOnlineArchive(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageOnlineArchive."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/online-archive";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageOnlineArchive"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageProfiling(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageProfiling."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/profiling";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageProfiling"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageRumSessions(
    startHr: Date,
    endHr?: Date,
    type?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageRumSessions."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/rum_sessions";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageRumSessions"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }
    if (type !== undefined) {
      requestContext.setQueryParam(
        "type",
        ObjectSerializer.serialize(type, "string", "")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageRumUnits(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageRumUnits."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/rum";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageRumUnits"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageSDS(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageSDS."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/sds";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageSDS"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageSNMP(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageSNMP."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/snmp";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageSNMP"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageSummary(
    startMonth: Date,
    endMonth?: Date,
    includeOrgDetails?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startMonth' is not null or undefined
    if (startMonth === null || startMonth === undefined) {
      throw new RequiredError(
        "Required parameter startMonth was null or undefined when calling getUsageSummary."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/summary";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageSummary"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startMonth !== undefined) {
      requestContext.setQueryParam(
        "start_month",
        ObjectSerializer.serialize(startMonth, "Date", "date-time")
      );
    }
    if (endMonth !== undefined) {
      requestContext.setQueryParam(
        "end_month",
        ObjectSerializer.serialize(endMonth, "Date", "date-time")
      );
    }
    if (includeOrgDetails !== undefined) {
      requestContext.setQueryParam(
        "include_org_details",
        ObjectSerializer.serialize(includeOrgDetails, "boolean", "")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageSynthetics(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageSynthetics."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/synthetics";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageSynthetics"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageSyntheticsAPI(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageSyntheticsAPI."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/synthetics_api";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageSyntheticsAPI"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageSyntheticsBrowser(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageSyntheticsBrowser."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/synthetics_browser";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageSyntheticsBrowser"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageTimeseries(
    startHr: Date,
    endHr?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'startHr' is not null or undefined
    if (startHr === null || startHr === undefined) {
      throw new RequiredError(
        "Required parameter startHr was null or undefined when calling getUsageTimeseries."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/usage/timeseries";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageTimeseries"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (startHr !== undefined) {
      requestContext.setQueryParam(
        "start_hr",
        ObjectSerializer.serialize(startHr, "Date", "date-time")
      );
    }
    if (endHr !== undefined) {
      requestContext.setQueryParam(
        "end_hr",
        ObjectSerializer.serialize(endHr, "Date", "date-time")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getUsageTopAvgMetrics(
    month?: Date,
    day?: Date,
    names?: Array<string>,
    limit?: number,
    nextRecordId?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/usage/top_avg_metrics";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "UsageMeteringApi.getUsageTopAvgMetrics"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (month !== undefined) {
      requestContext.setQueryParam(
        "month",
        ObjectSerializer.serialize(month, "Date", "date-time")
      );
    }
    if (day !== undefined) {
      requestContext.setQueryParam(
        "day",
        ObjectSerializer.serialize(day, "Date", "date-time")
      );
    }
    if (names !== undefined) {
      requestContext.setQueryParam(
        "names",
        ObjectSerializer.serialize(names, "Array<string>", "")
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", "int32")
      );
    }
    if (nextRecordId !== undefined) {
      requestContext.setQueryParam(
        "next_record_id",
        ObjectSerializer.serialize(nextRecordId, "string", "")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class UsageMeteringApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getDailyCustomReports
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDailyCustomReports(
    response: ResponseContext
  ): Promise<UsageCustomReportsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageCustomReportsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageCustomReportsResponse",
        ""
      ) as UsageCustomReportsResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageCustomReportsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageCustomReportsResponse",
        ""
      ) as UsageCustomReportsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getHourlyUsageAttribution
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getHourlyUsageAttribution(
    response: ResponseContext
  ): Promise<HourlyUsageAttributionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: HourlyUsageAttributionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HourlyUsageAttributionResponse",
        ""
      ) as HourlyUsageAttributionResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: HourlyUsageAttributionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HourlyUsageAttributionResponse",
        ""
      ) as HourlyUsageAttributionResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getIncidentManagement
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentManagement(
    response: ResponseContext
  ): Promise<UsageIncidentManagementResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageIncidentManagementResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "UsageIncidentManagementResponse",
          ""
        ) as UsageIncidentManagementResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageIncidentManagementResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "UsageIncidentManagementResponse",
          ""
        ) as UsageIncidentManagementResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getIngestedSpans
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIngestedSpans(
    response: ResponseContext
  ): Promise<UsageIngestedSpansResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageIngestedSpansResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageIngestedSpansResponse",
        ""
      ) as UsageIngestedSpansResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageIngestedSpansResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageIngestedSpansResponse",
        ""
      ) as UsageIngestedSpansResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getMonthlyCustomReports
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMonthlyCustomReports(
    response: ResponseContext
  ): Promise<UsageCustomReportsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageCustomReportsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageCustomReportsResponse",
        ""
      ) as UsageCustomReportsResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageCustomReportsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageCustomReportsResponse",
        ""
      ) as UsageCustomReportsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getMonthlyUsageAttribution
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMonthlyUsageAttribution(
    response: ResponseContext
  ): Promise<MonthlyUsageAttributionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: MonthlyUsageAttributionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MonthlyUsageAttributionResponse",
          ""
        ) as MonthlyUsageAttributionResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MonthlyUsageAttributionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MonthlyUsageAttributionResponse",
          ""
        ) as MonthlyUsageAttributionResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getSpecifiedDailyCustomReports
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSpecifiedDailyCustomReports(
    response: ResponseContext
  ): Promise<UsageSpecifiedCustomReportsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageSpecifiedCustomReportsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "UsageSpecifiedCustomReportsResponse",
          ""
        ) as UsageSpecifiedCustomReportsResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageSpecifiedCustomReportsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "UsageSpecifiedCustomReportsResponse",
          ""
        ) as UsageSpecifiedCustomReportsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getSpecifiedMonthlyCustomReports
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSpecifiedMonthlyCustomReports(
    response: ResponseContext
  ): Promise<UsageSpecifiedCustomReportsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageSpecifiedCustomReportsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "UsageSpecifiedCustomReportsResponse",
          ""
        ) as UsageSpecifiedCustomReportsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageSpecifiedCustomReportsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "UsageSpecifiedCustomReportsResponse",
          ""
        ) as UsageSpecifiedCustomReportsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageAnalyzedLogs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageAnalyzedLogs(
    response: ResponseContext
  ): Promise<UsageAnalyzedLogsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageAnalyzedLogsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageAnalyzedLogsResponse",
        ""
      ) as UsageAnalyzedLogsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageAnalyzedLogsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageAnalyzedLogsResponse",
        ""
      ) as UsageAnalyzedLogsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageAttribution
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageAttribution(
    response: ResponseContext
  ): Promise<UsageAttributionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageAttributionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageAttributionResponse",
        ""
      ) as UsageAttributionResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageAttributionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageAttributionResponse",
        ""
      ) as UsageAttributionResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageAuditLogs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageAuditLogs(
    response: ResponseContext
  ): Promise<UsageAuditLogsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageAuditLogsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageAuditLogsResponse",
        ""
      ) as UsageAuditLogsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageAuditLogsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageAuditLogsResponse",
        ""
      ) as UsageAuditLogsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageBillableSummary
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageBillableSummary(
    response: ResponseContext
  ): Promise<UsageBillableSummaryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageBillableSummaryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageBillableSummaryResponse",
        ""
      ) as UsageBillableSummaryResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageBillableSummaryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageBillableSummaryResponse",
        ""
      ) as UsageBillableSummaryResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageCIApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageCIApp(
    response: ResponseContext
  ): Promise<UsageCIVisibilityResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageCIVisibilityResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageCIVisibilityResponse",
        ""
      ) as UsageCIVisibilityResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageCIVisibilityResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageCIVisibilityResponse",
        ""
      ) as UsageCIVisibilityResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageCWS
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageCWS(
    response: ResponseContext
  ): Promise<UsageCWSResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageCWSResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageCWSResponse",
        ""
      ) as UsageCWSResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageCWSResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageCWSResponse",
        ""
      ) as UsageCWSResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageCloudSecurityPostureManagement
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageCloudSecurityPostureManagement(
    response: ResponseContext
  ): Promise<UsageCloudSecurityPostureManagementResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageCloudSecurityPostureManagementResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "UsageCloudSecurityPostureManagementResponse",
          ""
        ) as UsageCloudSecurityPostureManagementResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageCloudSecurityPostureManagementResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "UsageCloudSecurityPostureManagementResponse",
          ""
        ) as UsageCloudSecurityPostureManagementResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageDBM
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageDBM(
    response: ResponseContext
  ): Promise<UsageDBMResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageDBMResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageDBMResponse",
        ""
      ) as UsageDBMResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageDBMResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageDBMResponse",
        ""
      ) as UsageDBMResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageFargate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageFargate(
    response: ResponseContext
  ): Promise<UsageFargateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageFargateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageFargateResponse",
        ""
      ) as UsageFargateResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageFargateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageFargateResponse",
        ""
      ) as UsageFargateResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageHosts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageHosts(
    response: ResponseContext
  ): Promise<UsageHostsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageHostsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageHostsResponse",
        ""
      ) as UsageHostsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageHostsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageHostsResponse",
        ""
      ) as UsageHostsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageIndexedSpans
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageIndexedSpans(
    response: ResponseContext
  ): Promise<UsageIndexedSpansResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageIndexedSpansResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageIndexedSpansResponse",
        ""
      ) as UsageIndexedSpansResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageIndexedSpansResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageIndexedSpansResponse",
        ""
      ) as UsageIndexedSpansResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageInternetOfThings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageInternetOfThings(
    response: ResponseContext
  ): Promise<UsageIoTResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageIoTResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageIoTResponse",
        ""
      ) as UsageIoTResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageIoTResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageIoTResponse",
        ""
      ) as UsageIoTResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageLambda
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageLambda(
    response: ResponseContext
  ): Promise<UsageLambdaResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageLambdaResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageLambdaResponse",
        ""
      ) as UsageLambdaResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageLambdaResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageLambdaResponse",
        ""
      ) as UsageLambdaResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageLogs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageLogs(
    response: ResponseContext
  ): Promise<UsageLogsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageLogsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageLogsResponse",
        ""
      ) as UsageLogsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageLogsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageLogsResponse",
        ""
      ) as UsageLogsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageLogsByIndex
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageLogsByIndex(
    response: ResponseContext
  ): Promise<UsageLogsByIndexResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageLogsByIndexResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageLogsByIndexResponse",
        ""
      ) as UsageLogsByIndexResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageLogsByIndexResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageLogsByIndexResponse",
        ""
      ) as UsageLogsByIndexResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageLogsByRetention
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageLogsByRetention(
    response: ResponseContext
  ): Promise<UsageLogsByRetentionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageLogsByRetentionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageLogsByRetentionResponse",
        ""
      ) as UsageLogsByRetentionResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageLogsByRetentionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageLogsByRetentionResponse",
        ""
      ) as UsageLogsByRetentionResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageNetworkFlows
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageNetworkFlows(
    response: ResponseContext
  ): Promise<UsageNetworkFlowsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageNetworkFlowsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageNetworkFlowsResponse",
        ""
      ) as UsageNetworkFlowsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageNetworkFlowsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageNetworkFlowsResponse",
        ""
      ) as UsageNetworkFlowsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageNetworkHosts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageNetworkHosts(
    response: ResponseContext
  ): Promise<UsageNetworkHostsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageNetworkHostsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageNetworkHostsResponse",
        ""
      ) as UsageNetworkHostsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageNetworkHostsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageNetworkHostsResponse",
        ""
      ) as UsageNetworkHostsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageOnlineArchive
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageOnlineArchive(
    response: ResponseContext
  ): Promise<UsageOnlineArchiveResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageOnlineArchiveResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageOnlineArchiveResponse",
        ""
      ) as UsageOnlineArchiveResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageOnlineArchiveResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageOnlineArchiveResponse",
        ""
      ) as UsageOnlineArchiveResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageProfiling
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageProfiling(
    response: ResponseContext
  ): Promise<UsageProfilingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageProfilingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageProfilingResponse",
        ""
      ) as UsageProfilingResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageProfilingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageProfilingResponse",
        ""
      ) as UsageProfilingResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageRumSessions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageRumSessions(
    response: ResponseContext
  ): Promise<UsageRumSessionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageRumSessionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageRumSessionsResponse",
        ""
      ) as UsageRumSessionsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageRumSessionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageRumSessionsResponse",
        ""
      ) as UsageRumSessionsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageRumUnits
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageRumUnits(
    response: ResponseContext
  ): Promise<UsageRumUnitsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageRumUnitsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageRumUnitsResponse",
        ""
      ) as UsageRumUnitsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageRumUnitsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageRumUnitsResponse",
        ""
      ) as UsageRumUnitsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageSDS
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageSDS(
    response: ResponseContext
  ): Promise<UsageSDSResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageSDSResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSDSResponse",
        ""
      ) as UsageSDSResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageSDSResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSDSResponse",
        ""
      ) as UsageSDSResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageSNMP
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageSNMP(
    response: ResponseContext
  ): Promise<UsageSNMPResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageSNMPResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSNMPResponse",
        ""
      ) as UsageSNMPResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageSNMPResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSNMPResponse",
        ""
      ) as UsageSNMPResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageSummary
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageSummary(
    response: ResponseContext
  ): Promise<UsageSummaryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageSummaryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSummaryResponse",
        ""
      ) as UsageSummaryResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageSummaryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSummaryResponse",
        ""
      ) as UsageSummaryResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageSynthetics
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageSynthetics(
    response: ResponseContext
  ): Promise<UsageSyntheticsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageSyntheticsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSyntheticsResponse",
        ""
      ) as UsageSyntheticsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageSyntheticsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSyntheticsResponse",
        ""
      ) as UsageSyntheticsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageSyntheticsAPI
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageSyntheticsAPI(
    response: ResponseContext
  ): Promise<UsageSyntheticsAPIResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageSyntheticsAPIResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSyntheticsAPIResponse",
        ""
      ) as UsageSyntheticsAPIResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageSyntheticsAPIResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSyntheticsAPIResponse",
        ""
      ) as UsageSyntheticsAPIResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageSyntheticsBrowser
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageSyntheticsBrowser(
    response: ResponseContext
  ): Promise<UsageSyntheticsBrowserResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageSyntheticsBrowserResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSyntheticsBrowserResponse",
        ""
      ) as UsageSyntheticsBrowserResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageSyntheticsBrowserResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageSyntheticsBrowserResponse",
        ""
      ) as UsageSyntheticsBrowserResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageTimeseries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageTimeseries(
    response: ResponseContext
  ): Promise<UsageTimeseriesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageTimeseriesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageTimeseriesResponse",
        ""
      ) as UsageTimeseriesResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageTimeseriesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageTimeseriesResponse",
        ""
      ) as UsageTimeseriesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getUsageTopAvgMetrics
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUsageTopAvgMetrics(
    response: ResponseContext
  ): Promise<UsageTopAvgMetricsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: UsageTopAvgMetricsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageTopAvgMetricsResponse",
        ""
      ) as UsageTopAvgMetricsResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UsageTopAvgMetricsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsageTopAvgMetricsResponse",
        ""
      ) as UsageTopAvgMetricsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface UsageMeteringApiGetDailyCustomReportsRequest {
  /**
   * The number of files to return in the response. &#x60;[default&#x3D;60]&#x60;.
   * @type number
   */
  pageSize?: number;
  /**
   * The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;.
   * @type number
   */
  pageNumber?: number;
  /**
   * The direction to sort by: &#x60;[desc, asc]&#x60;.
   * @type UsageSortDirection
   */
  sortDir?: UsageSortDirection;
  /**
   * The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;.
   * @type UsageSort
   */
  sort?: UsageSort;
}

export interface UsageMeteringApiGetHourlyUsageAttributionRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Usage type to retrieve.
   * @type HourlyUsageAttributionUsageType
   */
  usageType: HourlyUsageAttributionUsageType;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
  /**
   * List following results with a next_record_id provided in the previous query.
   * @type string
   */
  nextRecordId?: string;
  /**
   * Comma separated list of tags used to group usage. If no value is provided the usage will not be broken down by tags.
   * @type string
   */
  tagBreakdownKeys?: string;
}

export interface UsageMeteringApiGetIncidentManagementRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetIngestedSpansRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetMonthlyCustomReportsRequest {
  /**
   * The number of files to return in the response &#x60;[default&#x3D;60].&#x60;
   * @type number
   */
  pageSize?: number;
  /**
   * The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;.
   * @type number
   */
  pageNumber?: number;
  /**
   * The direction to sort by: &#x60;[desc, asc]&#x60;.
   * @type UsageSortDirection
   */
  sortDir?: UsageSortDirection;
  /**
   * The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;.
   * @type UsageSort
   */
  sort?: UsageSort;
}

export interface UsageMeteringApiGetMonthlyUsageAttributionRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
   * @type Date
   */
  startMonth: Date;
  /**
   * Comma-separated list of usage types to return, or &#x60;*&#x60; for all usage types.
   * @type MonthlyUsageAttributionSupportedMetrics
   */
  fields: MonthlyUsageAttributionSupportedMetrics;
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
   * @type Date
   */
  endMonth?: Date;
  /**
   * The direction to sort by: &#x60;[desc, asc]&#x60;.
   * @type UsageSortDirection
   */
  sortDirection?: UsageSortDirection;
  /**
   * The field to sort by.
   * @type MonthlyUsageAttributionSupportedMetrics
   */
  sortName?: MonthlyUsageAttributionSupportedMetrics;
  /**
   * Comma separated list of tags used to group usage. If no value is provided the usage will not be broken down by tags.
   * @type string
   */
  tagBreakdownKeys?: string;
  /**
   * List following results with a next_record_id provided in the previous query.
   * @type string
   */
  nextRecordId?: string;
}

export interface UsageMeteringApiGetSpecifiedDailyCustomReportsRequest {
  /**
   * Date of the report in the format &#x60;YYYY-MM-DD&#x60;.
   * @type string
   */
  reportId: string;
}

export interface UsageMeteringApiGetSpecifiedMonthlyCustomReportsRequest {
  /**
   * Date of the report in the format &#x60;YYYY-MM-DD&#x60;.
   * @type string
   */
  reportId: string;
}

export interface UsageMeteringApiGetUsageAnalyzedLogsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageAttributionRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
   * @type Date
   */
  startMonth: Date;
  /**
   * Comma-separated list of usage types to return, or &#x60;*&#x60; for all usage types.
   * @type UsageAttributionSupportedMetrics
   */
  fields: UsageAttributionSupportedMetrics;
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
   * @type Date
   */
  endMonth?: Date;
  /**
   * The direction to sort by: &#x60;[desc, asc]&#x60;.
   * @type UsageSortDirection
   */
  sortDirection?: UsageSortDirection;
  /**
   * The field to sort by.
   * @type UsageAttributionSort
   */
  sortName?: UsageAttributionSort;
  /**
   * Include child org usage in the response. Defaults to false.
   * @type boolean
   */
  includeDescendants?: boolean;
  /**
   * Number of records to skip before beginning to return.
   * @type number
   */
  offset?: number;
  /**
   * Maximum number of records to be returned.
   * @type number
   */
  limit?: number;
}

export interface UsageMeteringApiGetUsageAuditLogsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageBillableSummaryRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage starting this month.
   * @type Date
   */
  month?: Date;
}

export interface UsageMeteringApiGetUsageCIAppRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageCWSRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageCloudSecurityPostureManagementRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageDBMRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageFargateRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageHostsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageIndexedSpansRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageInternetOfThingsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageLambdaRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageLogsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageLogsByIndexRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
  /**
   * Comma-separated list of log index names.
   * @type Array&lt;string&gt;
   */
  indexName?: Array<string>;
}

export interface UsageMeteringApiGetUsageLogsByRetentionRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageNetworkFlowsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageNetworkHostsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageOnlineArchiveRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageProfilingRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageRumSessionsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
  /**
   * RUM type: &#x60;[browser, mobile]&#x60;. Defaults to &#x60;browser&#x60;.
   * @type string
   */
  type?: string;
}

export interface UsageMeteringApiGetUsageRumUnitsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageSDSRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageSNMPRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageSummaryRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
   * @type Date
   */
  startMonth: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
   * @type Date
   */
  endMonth?: Date;
  /**
   * Include usage summaries for each sub-org.
   * @type boolean
   */
  includeOrgDetails?: boolean;
}

export interface UsageMeteringApiGetUsageSyntheticsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageSyntheticsAPIRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageSyntheticsBrowserRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageTimeseriesRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageTopAvgMetricsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: [YYYY-MM] for usage beginning at this hour. (Either month or day should be specified, but not both)
   * @type Date
   */
  month?: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to day: [YYYY-MM-DD] for usage beginning at this hour. (Either month or day should be specified, but not both)
   * @type Date
   */
  day?: Date;
  /**
   * Comma-separated list of metric names.
   * @type Array&lt;string&gt;
   */
  names?: Array<string>;
  /**
   * Maximum number of results to return (between 1 and 5000) - defaults to 500 results if limit not specified.
   * @type number
   */
  limit?: number;
  /**
   * List following results with a next_record_id provided in the previous query.
   * @type string
   */
  nextRecordId?: string;
}

export class UsageMeteringApi {
  private requestFactory: UsageMeteringApiRequestFactory;
  private responseProcessor: UsageMeteringApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: UsageMeteringApiRequestFactory,
    responseProcessor?: UsageMeteringApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new UsageMeteringApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new UsageMeteringApiResponseProcessor();
  }

  /**
   * Get daily custom reports.
   * @param param The request object
   */
  public getDailyCustomReports(
    param: UsageMeteringApiGetDailyCustomReportsRequest = {},
    options?: Configuration
  ): Promise<UsageCustomReportsResponse> {
    const requestContextPromise = this.requestFactory.getDailyCustomReports(
      param.pageSize,
      param.pageNumber,
      param.sortDir,
      param.sort,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDailyCustomReports(responseContext);
        });
    });
  }

  /**
   * Get Hourly Usage Attribution.
   * @param param The request object
   */
  public getHourlyUsageAttribution(
    param: UsageMeteringApiGetHourlyUsageAttributionRequest,
    options?: Configuration
  ): Promise<HourlyUsageAttributionResponse> {
    const requestContextPromise = this.requestFactory.getHourlyUsageAttribution(
      param.startHr,
      param.usageType,
      param.endHr,
      param.nextRecordId,
      param.tagBreakdownKeys,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getHourlyUsageAttribution(
            responseContext
          );
        });
    });
  }

  /**
   * Get hourly usage for incident management.
   * @param param The request object
   */
  public getIncidentManagement(
    param: UsageMeteringApiGetIncidentManagementRequest,
    options?: Configuration
  ): Promise<UsageIncidentManagementResponse> {
    const requestContextPromise = this.requestFactory.getIncidentManagement(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentManagement(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for ingested spans.
   * @param param The request object
   */
  public getIngestedSpans(
    param: UsageMeteringApiGetIngestedSpansRequest,
    options?: Configuration
  ): Promise<UsageIngestedSpansResponse> {
    const requestContextPromise = this.requestFactory.getIngestedSpans(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIngestedSpans(responseContext);
        });
    });
  }

  /**
   * Get monthly custom reports.
   * @param param The request object
   */
  public getMonthlyCustomReports(
    param: UsageMeteringApiGetMonthlyCustomReportsRequest = {},
    options?: Configuration
  ): Promise<UsageCustomReportsResponse> {
    const requestContextPromise = this.requestFactory.getMonthlyCustomReports(
      param.pageSize,
      param.pageNumber,
      param.sortDir,
      param.sort,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMonthlyCustomReports(
            responseContext
          );
        });
    });
  }

  /**
   * Get Monthly Usage Attribution.
   * @param param The request object
   */
  public getMonthlyUsageAttribution(
    param: UsageMeteringApiGetMonthlyUsageAttributionRequest,
    options?: Configuration
  ): Promise<MonthlyUsageAttributionResponse> {
    const requestContextPromise =
      this.requestFactory.getMonthlyUsageAttribution(
        param.startMonth,
        param.fields,
        param.endMonth,
        param.sortDirection,
        param.sortName,
        param.tagBreakdownKeys,
        param.nextRecordId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMonthlyUsageAttribution(
            responseContext
          );
        });
    });
  }

  /**
   * Get specified daily custom reports.
   * @param param The request object
   */
  public getSpecifiedDailyCustomReports(
    param: UsageMeteringApiGetSpecifiedDailyCustomReportsRequest,
    options?: Configuration
  ): Promise<UsageSpecifiedCustomReportsResponse> {
    const requestContextPromise =
      this.requestFactory.getSpecifiedDailyCustomReports(
        param.reportId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSpecifiedDailyCustomReports(
            responseContext
          );
        });
    });
  }

  /**
   * Get specified monthly custom reports.
   * @param param The request object
   */
  public getSpecifiedMonthlyCustomReports(
    param: UsageMeteringApiGetSpecifiedMonthlyCustomReportsRequest,
    options?: Configuration
  ): Promise<UsageSpecifiedCustomReportsResponse> {
    const requestContextPromise =
      this.requestFactory.getSpecifiedMonthlyCustomReports(
        param.reportId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSpecifiedMonthlyCustomReports(
            responseContext
          );
        });
    });
  }

  /**
   * Get hourly usage for analyzed logs (Security Monitoring).
   * @param param The request object
   */
  public getUsageAnalyzedLogs(
    param: UsageMeteringApiGetUsageAnalyzedLogsRequest,
    options?: Configuration
  ): Promise<UsageAnalyzedLogsResponse> {
    const requestContextPromise = this.requestFactory.getUsageAnalyzedLogs(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageAnalyzedLogs(responseContext);
        });
    });
  }

  /**
   * Get Usage Attribution.
   * @param param The request object
   */
  public getUsageAttribution(
    param: UsageMeteringApiGetUsageAttributionRequest,
    options?: Configuration
  ): Promise<UsageAttributionResponse> {
    const requestContextPromise = this.requestFactory.getUsageAttribution(
      param.startMonth,
      param.fields,
      param.endMonth,
      param.sortDirection,
      param.sortName,
      param.includeDescendants,
      param.offset,
      param.limit,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageAttribution(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for audit logs.
   * @param param The request object
   */
  public getUsageAuditLogs(
    param: UsageMeteringApiGetUsageAuditLogsRequest,
    options?: Configuration
  ): Promise<UsageAuditLogsResponse> {
    const requestContextPromise = this.requestFactory.getUsageAuditLogs(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageAuditLogs(responseContext);
        });
    });
  }

  /**
   * Get billable usage across your account.
   * @param param The request object
   */
  public getUsageBillableSummary(
    param: UsageMeteringApiGetUsageBillableSummaryRequest = {},
    options?: Configuration
  ): Promise<UsageBillableSummaryResponse> {
    const requestContextPromise = this.requestFactory.getUsageBillableSummary(
      param.month,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageBillableSummary(
            responseContext
          );
        });
    });
  }

  /**
   * Get hourly usage for CI Visibility (Tests, Pipeline, Combo, and Spans).
   * @param param The request object
   */
  public getUsageCIApp(
    param: UsageMeteringApiGetUsageCIAppRequest,
    options?: Configuration
  ): Promise<UsageCIVisibilityResponse> {
    const requestContextPromise = this.requestFactory.getUsageCIApp(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageCIApp(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for Cloud Workload Security.
   * @param param The request object
   */
  public getUsageCWS(
    param: UsageMeteringApiGetUsageCWSRequest,
    options?: Configuration
  ): Promise<UsageCWSResponse> {
    const requestContextPromise = this.requestFactory.getUsageCWS(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageCWS(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for Cloud Security Posture Management (CSPM).
   * @param param The request object
   */
  public getUsageCloudSecurityPostureManagement(
    param: UsageMeteringApiGetUsageCloudSecurityPostureManagementRequest,
    options?: Configuration
  ): Promise<UsageCloudSecurityPostureManagementResponse> {
    const requestContextPromise =
      this.requestFactory.getUsageCloudSecurityPostureManagement(
        param.startHr,
        param.endHr,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageCloudSecurityPostureManagement(
            responseContext
          );
        });
    });
  }

  /**
   * Get hourly usage for Database Monitoring
   * @param param The request object
   */
  public getUsageDBM(
    param: UsageMeteringApiGetUsageDBMRequest,
    options?: Configuration
  ): Promise<UsageDBMResponse> {
    const requestContextPromise = this.requestFactory.getUsageDBM(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageDBM(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for [Fargate](https://docs.datadoghq.com/integrations/ecs_fargate/).
   * @param param The request object
   */
  public getUsageFargate(
    param: UsageMeteringApiGetUsageFargateRequest,
    options?: Configuration
  ): Promise<UsageFargateResponse> {
    const requestContextPromise = this.requestFactory.getUsageFargate(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageFargate(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for hosts and containers.
   * @param param The request object
   */
  public getUsageHosts(
    param: UsageMeteringApiGetUsageHostsRequest,
    options?: Configuration
  ): Promise<UsageHostsResponse> {
    const requestContextPromise = this.requestFactory.getUsageHosts(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageHosts(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for indexed spans.
   * @param param The request object
   */
  public getUsageIndexedSpans(
    param: UsageMeteringApiGetUsageIndexedSpansRequest,
    options?: Configuration
  ): Promise<UsageIndexedSpansResponse> {
    const requestContextPromise = this.requestFactory.getUsageIndexedSpans(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageIndexedSpans(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for IoT.
   * @param param The request object
   */
  public getUsageInternetOfThings(
    param: UsageMeteringApiGetUsageInternetOfThingsRequest,
    options?: Configuration
  ): Promise<UsageIoTResponse> {
    const requestContextPromise = this.requestFactory.getUsageInternetOfThings(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageInternetOfThings(
            responseContext
          );
        });
    });
  }

  /**
   * Get hourly usage for lambda.
   * @param param The request object
   */
  public getUsageLambda(
    param: UsageMeteringApiGetUsageLambdaRequest,
    options?: Configuration
  ): Promise<UsageLambdaResponse> {
    const requestContextPromise = this.requestFactory.getUsageLambda(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageLambda(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for logs.
   * @param param The request object
   */
  public getUsageLogs(
    param: UsageMeteringApiGetUsageLogsRequest,
    options?: Configuration
  ): Promise<UsageLogsResponse> {
    const requestContextPromise = this.requestFactory.getUsageLogs(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageLogs(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for logs by index.
   * @param param The request object
   */
  public getUsageLogsByIndex(
    param: UsageMeteringApiGetUsageLogsByIndexRequest,
    options?: Configuration
  ): Promise<UsageLogsByIndexResponse> {
    const requestContextPromise = this.requestFactory.getUsageLogsByIndex(
      param.startHr,
      param.endHr,
      param.indexName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageLogsByIndex(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for indexed logs by retention period.
   * @param param The request object
   */
  public getUsageLogsByRetention(
    param: UsageMeteringApiGetUsageLogsByRetentionRequest,
    options?: Configuration
  ): Promise<UsageLogsByRetentionResponse> {
    const requestContextPromise = this.requestFactory.getUsageLogsByRetention(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageLogsByRetention(
            responseContext
          );
        });
    });
  }

  /**
   * Get hourly usage for network flows.
   * @param param The request object
   */
  public getUsageNetworkFlows(
    param: UsageMeteringApiGetUsageNetworkFlowsRequest,
    options?: Configuration
  ): Promise<UsageNetworkFlowsResponse> {
    const requestContextPromise = this.requestFactory.getUsageNetworkFlows(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageNetworkFlows(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for network hosts.
   * @param param The request object
   */
  public getUsageNetworkHosts(
    param: UsageMeteringApiGetUsageNetworkHostsRequest,
    options?: Configuration
  ): Promise<UsageNetworkHostsResponse> {
    const requestContextPromise = this.requestFactory.getUsageNetworkHosts(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageNetworkHosts(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for Online Archive.
   * @param param The request object
   */
  public getUsageOnlineArchive(
    param: UsageMeteringApiGetUsageOnlineArchiveRequest,
    options?: Configuration
  ): Promise<UsageOnlineArchiveResponse> {
    const requestContextPromise = this.requestFactory.getUsageOnlineArchive(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageOnlineArchive(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for profiled hosts.
   * @param param The request object
   */
  public getUsageProfiling(
    param: UsageMeteringApiGetUsageProfilingRequest,
    options?: Configuration
  ): Promise<UsageProfilingResponse> {
    const requestContextPromise = this.requestFactory.getUsageProfiling(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageProfiling(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for [RUM](https://docs.datadoghq.com/real_user_monitoring/) Sessions.
   * @param param The request object
   */
  public getUsageRumSessions(
    param: UsageMeteringApiGetUsageRumSessionsRequest,
    options?: Configuration
  ): Promise<UsageRumSessionsResponse> {
    const requestContextPromise = this.requestFactory.getUsageRumSessions(
      param.startHr,
      param.endHr,
      param.type,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageRumSessions(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for [RUM](https://docs.datadoghq.com/real_user_monitoring/) Units.
   * @param param The request object
   */
  public getUsageRumUnits(
    param: UsageMeteringApiGetUsageRumUnitsRequest,
    options?: Configuration
  ): Promise<UsageRumUnitsResponse> {
    const requestContextPromise = this.requestFactory.getUsageRumUnits(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageRumUnits(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for Sensitive Data Scanner.
   * @param param The request object
   */
  public getUsageSDS(
    param: UsageMeteringApiGetUsageSDSRequest,
    options?: Configuration
  ): Promise<UsageSDSResponse> {
    const requestContextPromise = this.requestFactory.getUsageSDS(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageSDS(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for SNMP devices.
   * @param param The request object
   */
  public getUsageSNMP(
    param: UsageMeteringApiGetUsageSNMPRequest,
    options?: Configuration
  ): Promise<UsageSNMPResponse> {
    const requestContextPromise = this.requestFactory.getUsageSNMP(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageSNMP(responseContext);
        });
    });
  }

  /**
   * Get usage across your multi-org account. You must have the multi-org feature enabled.
   * @param param The request object
   */
  public getUsageSummary(
    param: UsageMeteringApiGetUsageSummaryRequest,
    options?: Configuration
  ): Promise<UsageSummaryResponse> {
    const requestContextPromise = this.requestFactory.getUsageSummary(
      param.startMonth,
      param.endMonth,
      param.includeOrgDetails,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageSummary(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for [Synthetics checks](https://docs.datadoghq.com/synthetics/).
   * @param param The request object
   */
  public getUsageSynthetics(
    param: UsageMeteringApiGetUsageSyntheticsRequest,
    options?: Configuration
  ): Promise<UsageSyntheticsResponse> {
    const requestContextPromise = this.requestFactory.getUsageSynthetics(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageSynthetics(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for [synthetics API checks](https://docs.datadoghq.com/synthetics/).
   * @param param The request object
   */
  public getUsageSyntheticsAPI(
    param: UsageMeteringApiGetUsageSyntheticsAPIRequest,
    options?: Configuration
  ): Promise<UsageSyntheticsAPIResponse> {
    const requestContextPromise = this.requestFactory.getUsageSyntheticsAPI(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageSyntheticsAPI(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for synthetics browser checks.
   * @param param The request object
   */
  public getUsageSyntheticsBrowser(
    param: UsageMeteringApiGetUsageSyntheticsBrowserRequest,
    options?: Configuration
  ): Promise<UsageSyntheticsBrowserResponse> {
    const requestContextPromise = this.requestFactory.getUsageSyntheticsBrowser(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageSyntheticsBrowser(
            responseContext
          );
        });
    });
  }

  /**
   * Get hourly usage for [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/).
   * @param param The request object
   */
  public getUsageTimeseries(
    param: UsageMeteringApiGetUsageTimeseriesRequest,
    options?: Configuration
  ): Promise<UsageTimeseriesResponse> {
    const requestContextPromise = this.requestFactory.getUsageTimeseries(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageTimeseries(responseContext);
        });
    });
  }

  /**
   * Get all [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/) by hourly average. Use the month parameter to get a month-to-date data resolution or use the day parameter to get a daily resolution. One of the two is required, and only one of the two is allowed.
   * @param param The request object
   */
  public getUsageTopAvgMetrics(
    param: UsageMeteringApiGetUsageTopAvgMetricsRequest = {},
    options?: Configuration
  ): Promise<UsageTopAvgMetricsResponse> {
    const requestContextPromise = this.requestFactory.getUsageTopAvgMetrics(
      param.month,
      param.day,
      param.names,
      param.limit,
      param.nextRecordId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageTopAvgMetrics(responseContext);
        });
    });
  }
}
