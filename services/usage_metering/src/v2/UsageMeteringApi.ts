import {
  BaseAPIRequestFactory,
  Configuration,
  applySecurityAuthentication,
  RequestContext,
  HttpMethod,
  ResponseContext,
  logger,
  RequiredError,
  ApiException,
  createConfiguration,
  getPreferredMediaType,
  stringify,
  serialize,
  deserialize,
  parse,
  normalizeMediaType,
  buildUserAgent,
  isBrowser,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { ActiveBillingDimensionsResponse } from "./models/ActiveBillingDimensionsResponse";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { BillingDimensionsMappingResponse } from "./models/BillingDimensionsMappingResponse";
import { CostByOrgResponse } from "./models/CostByOrgResponse";
import { HourlyUsageResponse } from "./models/HourlyUsageResponse";
import { MonthlyCostAttributionResponse } from "./models/MonthlyCostAttributionResponse";
import { ProjectedCostResponse } from "./models/ProjectedCostResponse";
import { SortDirection } from "./models/SortDirection";
import { UsageApplicationSecurityMonitoringResponse } from "./models/UsageApplicationSecurityMonitoringResponse";
import { UsageLambdaTracedInvocationsResponse } from "./models/UsageLambdaTracedInvocationsResponse";
import { UsageObservabilityPipelinesResponse } from "./models/UsageObservabilityPipelinesResponse";
import { version } from "../version";

export class UsageMeteringApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("usage-metering", version);
    }
  }
  public async getActiveBillingDimensions(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost_by_tag/active_billing_dimensions";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.UsageMeteringApi.getActiveBillingDimensions")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
    const requestContext = _config
      .getServer("v2.UsageMeteringApi.getBillingDimensionMapping")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
    const requestContext = _config
      .getServer("v2.UsageMeteringApi.getCostByOrg")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getEstimatedCostByOrg(
    view?: string,
    startMonth?: Date,
    endMonth?: Date,
    startDate?: Date,
    endDate?: Date,
    includeConnectedAccounts?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/usage/estimated_cost";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.UsageMeteringApi.getEstimatedCostByOrg")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
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
    if (includeConnectedAccounts !== undefined) {
      requestContext.setQueryParam(
        "include_connected_accounts",
        serialize(includeConnectedAccounts, TypingInfo, "boolean", ""),
        "",
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
    const requestContext = _config
      .getServer("v2.UsageMeteringApi.getHistoricalCostByOrg")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
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
    if (includeConnectedAccounts !== undefined) {
      requestContext.setQueryParam(
        "include_connected_accounts",
        serialize(includeConnectedAccounts, TypingInfo, "boolean", ""),
        "",
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
    const requestContext = _config
      .getServer("v2.UsageMeteringApi.getHourlyUsage")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
    const requestContext = _config
      .getServer("v2.UsageMeteringApi.getMonthlyCostAttribution")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
    const requestContext = _config
      .getServer("v2.UsageMeteringApi.getProjectedCost")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
    const requestContext = _config
      .getServer("v2.UsageMeteringApi.getUsageApplicationSecurityMonitoring")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
    const requestContext = _config
      .getServer("v2.UsageMeteringApi.getUsageLambdaTracedInvocations")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
    const requestContext = _config
      .getServer("v2.UsageMeteringApi.getUsageObservabilityPipelines")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/json;datetime-format=rfc3339",
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
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
   * Comma separated list of product families to retrieve. Available families are `all`, `analyzed_logs`,
   * `application_security`, `audit_trail`, `serverless`, `ci_app`, `cloud_cost_management`, `cloud_siem`,
   * `csm_container_enterprise`, `csm_host_enterprise`, `cspm`, `custom_events`, `cws`, `dbm`, `error_tracking`,
   * `fargate`, `infra_hosts`, `incident_management`, `indexed_logs`, `indexed_spans`, `ingested_spans`, `iot`,
   * `lambda_traced_invocations`, `logs`, `network_flows`, `network_hosts`, `network_monitoring`, `observability_pipelines`,
   * `online_archive`, `profiling`, `rum`, `rum_browser_sessions`, `rum_mobile_sessions`, `sds`, `snmp`, `software_delivery`,
   * `synthetics_api`, `synthetics_browser`, `synthetics_mobile`, `synthetics_parallel_testing`, `timeseries`, `vuln_management`,
   * and `workflow_executions`.
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

export class UsageMeteringApi {
  private requestFactory: UsageMeteringApiRequestFactory;
  private responseProcessor: UsageMeteringApiResponseProcessor;
  private configuration: Configuration;

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
}
