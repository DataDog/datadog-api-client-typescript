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
import { IntakePayloadAccepted } from "./models/IntakePayloadAccepted";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { MetricAllTagsResponse } from "./models/MetricAllTagsResponse";
import { MetricAssetsResponse } from "./models/MetricAssetsResponse";
import { MetricBulkTagConfigCreateRequest } from "./models/MetricBulkTagConfigCreateRequest";
import { MetricBulkTagConfigDeleteRequest } from "./models/MetricBulkTagConfigDeleteRequest";
import { MetricBulkTagConfigResponse } from "./models/MetricBulkTagConfigResponse";
import { MetricContentEncoding } from "./models/MetricContentEncoding";
import { MetricEstimateResponse } from "./models/MetricEstimateResponse";
import { MetricPayload } from "./models/MetricPayload";
import { MetricsAndMetricTagConfigurations } from "./models/MetricsAndMetricTagConfigurations";
import { MetricsAndMetricTagConfigurationsResponse } from "./models/MetricsAndMetricTagConfigurationsResponse";
import { MetricSuggestedTagsAndAggregationsResponse } from "./models/MetricSuggestedTagsAndAggregationsResponse";
import { MetricTagCardinalitiesResponse } from "./models/MetricTagCardinalitiesResponse";
import { MetricTagConfigurationCreateRequest } from "./models/MetricTagConfigurationCreateRequest";
import { MetricTagConfigurationMetricTypeCategory } from "./models/MetricTagConfigurationMetricTypeCategory";
import { MetricTagConfigurationResponse } from "./models/MetricTagConfigurationResponse";
import { MetricTagConfigurationUpdateRequest } from "./models/MetricTagConfigurationUpdateRequest";
import { MetricVolumesResponse } from "./models/MetricVolumesResponse";
import { ScalarFormulaQueryRequest } from "./models/ScalarFormulaQueryRequest";
import { ScalarFormulaQueryResponse } from "./models/ScalarFormulaQueryResponse";
import { TagIndexingRuleCreateRequest } from "./models/TagIndexingRuleCreateRequest";
import { TagIndexingRuleExemptionCreateRequest } from "./models/TagIndexingRuleExemptionCreateRequest";
import { TagIndexingRuleExemptionResponse } from "./models/TagIndexingRuleExemptionResponse";
import { TagIndexingRuleOrderRequest } from "./models/TagIndexingRuleOrderRequest";
import { TagIndexingRuleResponse } from "./models/TagIndexingRuleResponse";
import { TagIndexingRulesResponse } from "./models/TagIndexingRulesResponse";
import { TagIndexingRuleUpdateRequest } from "./models/TagIndexingRuleUpdateRequest";
import { TimeseriesFormulaQueryRequest } from "./models/TimeseriesFormulaQueryRequest";
import { TimeseriesFormulaQueryResponse } from "./models/TimeseriesFormulaQueryResponse";
import { version } from "../version";

export class MetricsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("metrics", version);
    }
  }
  public async createBulkTagsMetricsConfiguration(
    body: MetricBulkTagConfigCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createBulkTagsMetricsConfiguration");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/config/bulk-tags";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.createBulkTagsMetricsConfiguration",
      MetricsApi.operationServers,
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
      serialize(body, TypingInfo, "MetricBulkTagConfigCreateRequest", ""),
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

  public async createTagConfiguration(
    metricName: string,
    body: MetricTagConfigurationCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "createTagConfiguration");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTagConfiguration");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/tags".replace(
      "{metric_name}",
      encodeURIComponent(String(metricName)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.createTagConfiguration",
      MetricsApi.operationServers,
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
      serialize(body, TypingInfo, "MetricTagConfigurationCreateRequest", ""),
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

  public async createTagIndexingRule(
    body: TagIndexingRuleCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTagIndexingRule");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/tag-indexing-rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.createTagIndexingRule",
      MetricsApi.operationServers,
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
      serialize(body, TypingInfo, "TagIndexingRuleCreateRequest", ""),
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

  public async createTagIndexingRuleExemption(
    metricName: string,
    body: TagIndexingRuleExemptionCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "createTagIndexingRuleExemption");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTagIndexingRuleExemption");
    }

    // Path Params
    const localVarPath =
      "/api/v2/metrics/{metric_name}/tag-indexing-rule-exemptions".replace(
        "{metric_name}",
        encodeURIComponent(String(metricName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.createTagIndexingRuleExemption",
      MetricsApi.operationServers,
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
      serialize(body, TypingInfo, "TagIndexingRuleExemptionCreateRequest", ""),
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

  public async deleteBulkTagsMetricsConfiguration(
    body: MetricBulkTagConfigDeleteRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteBulkTagsMetricsConfiguration");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/config/bulk-tags";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.deleteBulkTagsMetricsConfiguration",
      MetricsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
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
      serialize(body, TypingInfo, "MetricBulkTagConfigDeleteRequest", ""),
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

  public async deleteTagConfiguration(
    metricName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "deleteTagConfiguration");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/tags".replace(
      "{metric_name}",
      encodeURIComponent(String(metricName)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.deleteTagConfiguration",
      MetricsApi.operationServers,
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

  public async deleteTagIndexingRule(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteTagIndexingRule");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/tag-indexing-rules/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.deleteTagIndexingRule",
      MetricsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteTagIndexingRuleExemption(
    metricName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "deleteTagIndexingRuleExemption");
    }

    // Path Params
    const localVarPath =
      "/api/v2/metrics/{metric_name}/tag-indexing-rule-exemptions".replace(
        "{metric_name}",
        encodeURIComponent(String(metricName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.deleteTagIndexingRuleExemption",
      MetricsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async estimateMetricsOutputSeries(
    metricName: string,
    filterGroups?: string,
    filterHoursAgo?: number,
    filterNumAggregations?: number,
    filterPct?: boolean,
    filterTimespanH?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "estimateMetricsOutputSeries");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/estimate".replace(
      "{metric_name}",
      encodeURIComponent(String(metricName)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.estimateMetricsOutputSeries",
      MetricsApi.operationServers,
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

    // Query Params
    if (filterGroups !== undefined) {
      requestContext.setQueryParam(
        "filter[groups]",
        serialize(filterGroups, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterHoursAgo !== undefined) {
      requestContext.setQueryParam(
        "filter[hours_ago]",
        serialize(filterHoursAgo, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (filterNumAggregations !== undefined) {
      requestContext.setQueryParam(
        "filter[num_aggregations]",
        serialize(filterNumAggregations, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (filterPct !== undefined) {
      requestContext.setQueryParam(
        "filter[pct]",
        serialize(filterPct, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterTimespanH !== undefined) {
      requestContext.setQueryParam(
        "filter[timespan_h]",
        serialize(filterTimespanH, TypingInfo, "number", "int32"),
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

  public async getMetricTagCardinalityDetails(
    metricName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "getMetricTagCardinalityDetails");
    }

    // Path Params
    const localVarPath =
      "/api/v2/metrics/{metric_name}/tag-cardinalities".replace(
        "{metric_name}",
        encodeURIComponent(String(metricName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.getMetricTagCardinalityDetails",
      MetricsApi.operationServers,
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

  public async getTagIndexingRule(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getTagIndexingRule");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/tag-indexing-rules/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.getTagIndexingRule",
      MetricsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getTagIndexingRuleExemption(
    metricName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "getTagIndexingRuleExemption");
    }

    // Path Params
    const localVarPath =
      "/api/v2/metrics/{metric_name}/tag-indexing-rule-exemptions".replace(
        "{metric_name}",
        encodeURIComponent(String(metricName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.getTagIndexingRuleExemption",
      MetricsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listActiveMetricConfigurations(
    metricName: string,
    windowSeconds?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "listActiveMetricConfigurations");
    }

    // Path Params
    const localVarPath =
      "/api/v2/metrics/{metric_name}/active-configurations".replace(
        "{metric_name}",
        encodeURIComponent(String(metricName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.listActiveMetricConfigurations",
      MetricsApi.operationServers,
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

    // Query Params
    if (windowSeconds !== undefined) {
      requestContext.setQueryParam(
        "window[seconds]",
        serialize(windowSeconds, TypingInfo, "number", "int64"),
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

  public async listMetricAssets(
    metricName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "listMetricAssets");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/assets".replace(
      "{metric_name}",
      encodeURIComponent(String(metricName)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.listMetricAssets",
      MetricsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listTagConfigurationByName(
    metricName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "listTagConfigurationByName");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/tags".replace(
      "{metric_name}",
      encodeURIComponent(String(metricName)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.listTagConfigurationByName",
      MetricsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listTagConfigurations(
    filterConfigured?: boolean,
    filterTagsConfigured?: string,
    filterMetricType?: MetricTagConfigurationMetricTypeCategory,
    filterIncludePercentiles?: boolean,
    filterQueried?: boolean,
    filterQueriedWindowSeconds?: number,
    filterTags?: string,
    filterRelatedAssets?: boolean,
    windowSeconds?: number,
    pageSize?: number,
    pageCursor?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/metrics";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.listTagConfigurations",
      MetricsApi.operationServers,
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

    // Query Params
    if (filterConfigured !== undefined) {
      requestContext.setQueryParam(
        "filter[configured]",
        serialize(filterConfigured, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterTagsConfigured !== undefined) {
      requestContext.setQueryParam(
        "filter[tags_configured]",
        serialize(filterTagsConfigured, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterMetricType !== undefined) {
      requestContext.setQueryParam(
        "filter[metric_type]",
        serialize(
          filterMetricType,
          TypingInfo,
          "MetricTagConfigurationMetricTypeCategory",
          "",
        ),
        "",
      );
    }
    if (filterIncludePercentiles !== undefined) {
      requestContext.setQueryParam(
        "filter[include_percentiles]",
        serialize(filterIncludePercentiles, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterQueried !== undefined) {
      requestContext.setQueryParam(
        "filter[queried]",
        serialize(filterQueried, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterQueriedWindowSeconds !== undefined) {
      requestContext.setQueryParam(
        "filter[queried][window][seconds]",
        serialize(filterQueriedWindowSeconds, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        serialize(filterTags, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRelatedAssets !== undefined) {
      requestContext.setQueryParam(
        "filter[related_assets]",
        serialize(filterRelatedAssets, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (windowSeconds !== undefined) {
      requestContext.setQueryParam(
        "window[seconds]",
        serialize(windowSeconds, TypingInfo, "number", "int64"),
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
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        serialize(pageCursor, TypingInfo, "string", ""),
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

  public async listTagIndexingRules(
    pageLimit?: number,
    pageOffset?: number,
    search?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/metrics/tag-indexing-rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.listTagIndexingRules",
      MetricsApi.operationServers,
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

    // Query Params
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", ""),
        "",
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        serialize(pageOffset, TypingInfo, "number", ""),
        "",
      );
    }
    if (search !== undefined) {
      requestContext.setQueryParam(
        "search",
        serialize(search, TypingInfo, "string", ""),
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

  public async listTagIndexingRulesForMetric(
    metricName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "listTagIndexingRulesForMetric");
    }

    // Path Params
    const localVarPath =
      "/api/v2/metrics/{metric_name}/tag-indexing-rules".replace(
        "{metric_name}",
        encodeURIComponent(String(metricName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.listTagIndexingRulesForMetric",
      MetricsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listTagsByMetricName(
    metricName: string,
    windowSeconds?: number,
    filterTags?: string,
    filterMatch?: string,
    filterIncludeTagValues?: boolean,
    filterAllowPartial?: boolean,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "listTagsByMetricName");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/all-tags".replace(
      "{metric_name}",
      encodeURIComponent(String(metricName)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.listTagsByMetricName",
      MetricsApi.operationServers,
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

    // Query Params
    if (windowSeconds !== undefined) {
      requestContext.setQueryParam(
        "window[seconds]",
        serialize(windowSeconds, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        serialize(filterTags, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterMatch !== undefined) {
      requestContext.setQueryParam(
        "filter[match]",
        serialize(filterMatch, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterIncludeTagValues !== undefined) {
      requestContext.setQueryParam(
        "filter[include_tag_values]",
        serialize(filterIncludeTagValues, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterAllowPartial !== undefined) {
      requestContext.setQueryParam(
        "filter[allow_partial]",
        serialize(filterAllowPartial, TypingInfo, "boolean", ""),
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listVolumesByMetricName(
    metricName: string,
    windowSeconds?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "listVolumesByMetricName");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/volumes".replace(
      "{metric_name}",
      encodeURIComponent(String(metricName)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.listVolumesByMetricName",
      MetricsApi.operationServers,
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

    // Query Params
    if (windowSeconds !== undefined) {
      requestContext.setQueryParam(
        "window[seconds]",
        serialize(windowSeconds, TypingInfo, "number", "int64"),
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

  public async queryScalarData(
    body: ScalarFormulaQueryRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryScalarData");
    }

    // Path Params
    const localVarPath = "/api/v2/query/scalar";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.queryScalarData",
      MetricsApi.operationServers,
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
      serialize(body, TypingInfo, "ScalarFormulaQueryRequest", ""),
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

  public async queryTimeseriesData(
    body: TimeseriesFormulaQueryRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryTimeseriesData");
    }

    // Path Params
    const localVarPath = "/api/v2/query/timeseries";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.queryTimeseriesData",
      MetricsApi.operationServers,
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
      serialize(body, TypingInfo, "TimeseriesFormulaQueryRequest", ""),
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

  public async reorderTagIndexingRules(
    body: TagIndexingRuleOrderRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "reorderTagIndexingRules");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/tag-indexing-rules/order";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.reorderTagIndexingRules",
      MetricsApi.operationServers,
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

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "TagIndexingRuleOrderRequest", ""),
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

  public async submitMetrics(
    body: MetricPayload,
    contentEncoding?: MetricContentEncoding,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "submitMetrics");
    }

    // Path Params
    const localVarPath = "/api/v2/series";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.submitMetrics",
      MetricsApi.operationServers,
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

    // Header Params
    if (contentEncoding !== undefined) {
      requestContext.setHeaderParam(
        "Content-Encoding",
        serialize(contentEncoding, TypingInfo, "MetricContentEncoding", ""),
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "MetricPayload", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }

  public async updateTagConfiguration(
    metricName: string,
    body: MetricTagConfigurationUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "updateTagConfiguration");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateTagConfiguration");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/tags".replace(
      "{metric_name}",
      encodeURIComponent(String(metricName)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.updateTagConfiguration",
      MetricsApi.operationServers,
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
      serialize(body, TypingInfo, "MetricTagConfigurationUpdateRequest", ""),
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

  public async updateTagIndexingRule(
    id: string,
    body: TagIndexingRuleUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateTagIndexingRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateTagIndexingRule");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/tag-indexing-rules/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v2.updateTagIndexingRule",
      MetricsApi.operationServers,
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

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "TagIndexingRuleUpdateRequest", ""),
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

export class MetricsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createBulkTagsMetricsConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createBulkTagsMetricsConfiguration(
    response: ResponseContext,
  ): Promise<MetricBulkTagConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      const body: MetricBulkTagConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricBulkTagConfigResponse",
      ) as MetricBulkTagConfigResponse;
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
      const body: MetricBulkTagConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricBulkTagConfigResponse",
        "",
      ) as MetricBulkTagConfigResponse;
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
   * @params response Response returned by the server for a request to createTagConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTagConfiguration(
    response: ResponseContext,
  ): Promise<MetricTagConfigurationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: MetricTagConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricTagConfigurationResponse",
      ) as MetricTagConfigurationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: MetricTagConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricTagConfigurationResponse",
        "",
      ) as MetricTagConfigurationResponse;
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
   * @params response Response returned by the server for a request to createTagIndexingRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTagIndexingRule(
    response: ResponseContext,
  ): Promise<TagIndexingRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: TagIndexingRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TagIndexingRuleResponse",
      ) as TagIndexingRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: TagIndexingRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TagIndexingRuleResponse",
        "",
      ) as TagIndexingRuleResponse;
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
   * @params response Response returned by the server for a request to createTagIndexingRuleExemption
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTagIndexingRuleExemption(
    response: ResponseContext,
  ): Promise<TagIndexingRuleExemptionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: TagIndexingRuleExemptionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TagIndexingRuleExemptionResponse",
      ) as TagIndexingRuleExemptionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: TagIndexingRuleExemptionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TagIndexingRuleExemptionResponse",
        "",
      ) as TagIndexingRuleExemptionResponse;
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
   * @params response Response returned by the server for a request to deleteBulkTagsMetricsConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteBulkTagsMetricsConfiguration(
    response: ResponseContext,
  ): Promise<MetricBulkTagConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      const body: MetricBulkTagConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricBulkTagConfigResponse",
      ) as MetricBulkTagConfigResponse;
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
      const body: MetricBulkTagConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricBulkTagConfigResponse",
        "",
      ) as MetricBulkTagConfigResponse;
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
   * @params response Response returned by the server for a request to deleteTagConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTagConfiguration(
    response: ResponseContext,
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteTagIndexingRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTagIndexingRule(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
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
   * @params response Response returned by the server for a request to deleteTagIndexingRuleExemption
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTagIndexingRuleExemption(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
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
   * @params response Response returned by the server for a request to estimateMetricsOutputSeries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async estimateMetricsOutputSeries(
    response: ResponseContext,
  ): Promise<MetricEstimateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MetricEstimateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricEstimateResponse",
      ) as MetricEstimateResponse;
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
      const body: MetricEstimateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricEstimateResponse",
        "",
      ) as MetricEstimateResponse;
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
   * @params response Response returned by the server for a request to getMetricTagCardinalityDetails
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMetricTagCardinalityDetails(
    response: ResponseContext,
  ): Promise<MetricTagCardinalitiesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MetricTagCardinalitiesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricTagCardinalitiesResponse",
      ) as MetricTagCardinalitiesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MetricTagCardinalitiesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricTagCardinalitiesResponse",
        "",
      ) as MetricTagCardinalitiesResponse;
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
   * @params response Response returned by the server for a request to getTagIndexingRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTagIndexingRule(
    response: ResponseContext,
  ): Promise<TagIndexingRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TagIndexingRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TagIndexingRuleResponse",
      ) as TagIndexingRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: TagIndexingRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TagIndexingRuleResponse",
        "",
      ) as TagIndexingRuleResponse;
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
   * @params response Response returned by the server for a request to getTagIndexingRuleExemption
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTagIndexingRuleExemption(
    response: ResponseContext,
  ): Promise<TagIndexingRuleExemptionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TagIndexingRuleExemptionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TagIndexingRuleExemptionResponse",
      ) as TagIndexingRuleExemptionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: TagIndexingRuleExemptionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TagIndexingRuleExemptionResponse",
        "",
      ) as TagIndexingRuleExemptionResponse;
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
   * @params response Response returned by the server for a request to listActiveMetricConfigurations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listActiveMetricConfigurations(
    response: ResponseContext,
  ): Promise<MetricSuggestedTagsAndAggregationsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MetricSuggestedTagsAndAggregationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricSuggestedTagsAndAggregationsResponse",
      ) as MetricSuggestedTagsAndAggregationsResponse;
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
      const body: MetricSuggestedTagsAndAggregationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricSuggestedTagsAndAggregationsResponse",
        "",
      ) as MetricSuggestedTagsAndAggregationsResponse;
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
   * @params response Response returned by the server for a request to listMetricAssets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listMetricAssets(
    response: ResponseContext,
  ): Promise<MetricAssetsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MetricAssetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricAssetsResponse",
      ) as MetricAssetsResponse;
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
      const body: MetricAssetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricAssetsResponse",
        "",
      ) as MetricAssetsResponse;
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
   * @params response Response returned by the server for a request to listTagConfigurationByName
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTagConfigurationByName(
    response: ResponseContext,
  ): Promise<MetricTagConfigurationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MetricTagConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricTagConfigurationResponse",
      ) as MetricTagConfigurationResponse;
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
      const body: MetricTagConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricTagConfigurationResponse",
        "",
      ) as MetricTagConfigurationResponse;
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
   * @params response Response returned by the server for a request to listTagConfigurations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTagConfigurations(
    response: ResponseContext,
  ): Promise<MetricsAndMetricTagConfigurationsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MetricsAndMetricTagConfigurationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricsAndMetricTagConfigurationsResponse",
      ) as MetricsAndMetricTagConfigurationsResponse;
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
      const body: MetricsAndMetricTagConfigurationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricsAndMetricTagConfigurationsResponse",
        "",
      ) as MetricsAndMetricTagConfigurationsResponse;
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
   * @params response Response returned by the server for a request to listTagIndexingRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTagIndexingRules(
    response: ResponseContext,
  ): Promise<TagIndexingRulesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TagIndexingRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TagIndexingRulesResponse",
      ) as TagIndexingRulesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: TagIndexingRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TagIndexingRulesResponse",
        "",
      ) as TagIndexingRulesResponse;
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
   * @params response Response returned by the server for a request to listTagIndexingRulesForMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTagIndexingRulesForMetric(
    response: ResponseContext,
  ): Promise<TagIndexingRulesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TagIndexingRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TagIndexingRulesResponse",
      ) as TagIndexingRulesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: TagIndexingRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TagIndexingRulesResponse",
        "",
      ) as TagIndexingRulesResponse;
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
   * @params response Response returned by the server for a request to listTagsByMetricName
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTagsByMetricName(
    response: ResponseContext,
  ): Promise<MetricAllTagsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MetricAllTagsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricAllTagsResponse",
      ) as MetricAllTagsResponse;
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
      const body: MetricAllTagsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricAllTagsResponse",
        "",
      ) as MetricAllTagsResponse;
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
   * @params response Response returned by the server for a request to listVolumesByMetricName
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listVolumesByMetricName(
    response: ResponseContext,
  ): Promise<MetricVolumesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MetricVolumesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricVolumesResponse",
      ) as MetricVolumesResponse;
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
      const body: MetricVolumesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricVolumesResponse",
        "",
      ) as MetricVolumesResponse;
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
   * @params response Response returned by the server for a request to queryScalarData
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryScalarData(
    response: ResponseContext,
  ): Promise<ScalarFormulaQueryResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ScalarFormulaQueryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ScalarFormulaQueryResponse",
      ) as ScalarFormulaQueryResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: ScalarFormulaQueryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ScalarFormulaQueryResponse",
        "",
      ) as ScalarFormulaQueryResponse;
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
   * @params response Response returned by the server for a request to queryTimeseriesData
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryTimeseriesData(
    response: ResponseContext,
  ): Promise<TimeseriesFormulaQueryResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TimeseriesFormulaQueryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TimeseriesFormulaQueryResponse",
      ) as TimeseriesFormulaQueryResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: TimeseriesFormulaQueryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TimeseriesFormulaQueryResponse",
        "",
      ) as TimeseriesFormulaQueryResponse;
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
   * @params response Response returned by the server for a request to reorderTagIndexingRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async reorderTagIndexingRules(
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
      response.httpStatusCode === 429
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
   * @params response Response returned by the server for a request to submitMetrics
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async submitMetrics(
    response: ResponseContext,
  ): Promise<IntakePayloadAccepted> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      const body: IntakePayloadAccepted = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IntakePayloadAccepted",
      ) as IntakePayloadAccepted;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 408 ||
      response.httpStatusCode === 413 ||
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
      const body: IntakePayloadAccepted = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IntakePayloadAccepted",
        "",
      ) as IntakePayloadAccepted;
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
   * @params response Response returned by the server for a request to updateTagConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTagConfiguration(
    response: ResponseContext,
  ): Promise<MetricTagConfigurationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MetricTagConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricTagConfigurationResponse",
      ) as MetricTagConfigurationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 422 ||
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
      const body: MetricTagConfigurationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricTagConfigurationResponse",
        "",
      ) as MetricTagConfigurationResponse;
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
   * @params response Response returned by the server for a request to updateTagIndexingRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTagIndexingRule(
    response: ResponseContext,
  ): Promise<TagIndexingRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TagIndexingRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TagIndexingRuleResponse",
      ) as TagIndexingRuleResponse;
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: TagIndexingRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TagIndexingRuleResponse",
        "",
      ) as TagIndexingRuleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface MetricsApiCreateBulkTagsMetricsConfigurationRequest {
  /**
   * @type MetricBulkTagConfigCreateRequest
   */
  body: MetricBulkTagConfigCreateRequest;
}

export interface MetricsApiCreateTagConfigurationRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
  /**
   * @type MetricTagConfigurationCreateRequest
   */
  body: MetricTagConfigurationCreateRequest;
}

export interface MetricsApiCreateTagIndexingRuleRequest {
  /**
   * @type TagIndexingRuleCreateRequest
   */
  body: TagIndexingRuleCreateRequest;
}

export interface MetricsApiCreateTagIndexingRuleExemptionRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
  /**
   * @type TagIndexingRuleExemptionCreateRequest
   */
  body: TagIndexingRuleExemptionCreateRequest;
}

export interface MetricsApiDeleteBulkTagsMetricsConfigurationRequest {
  /**
   * @type MetricBulkTagConfigDeleteRequest
   */
  body: MetricBulkTagConfigDeleteRequest;
}

export interface MetricsApiDeleteTagConfigurationRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
}

export interface MetricsApiDeleteTagIndexingRuleRequest {
  /**
   * ID of the tag indexing rule.
   * @type string
   */
  id: string;
}

export interface MetricsApiDeleteTagIndexingRuleExemptionRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
}

export interface MetricsApiEstimateMetricsOutputSeriesRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
  /**
   * Comma-separated list of tag keys that the metric is configured to query with. For example: `filter[groups]=app,host`.
   * @type string
   */
  filterGroups?: string;
  /**
   * The number of hours of look back (from now) to estimate cardinality with. If unspecified, it defaults to 0 hours.
   * @type number
   */
  filterHoursAgo?: number;
  /**
   * Deprecated. Number of aggregations has no impact on volume.
   * @type number
   */
  filterNumAggregations?: number;
  /**
   * A boolean, for distribution metrics only, to estimate cardinality if the metric includes additional percentile aggregators.
   * @type boolean
   */
  filterPct?: boolean;
  /**
   * A window, in hours, from the look back to estimate cardinality with. The minimum and default is 1 hour.
   * @type number
   */
  filterTimespanH?: number;
}

export interface MetricsApiGetMetricTagCardinalityDetailsRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
}

export interface MetricsApiGetTagIndexingRuleRequest {
  /**
   * ID of the tag indexing rule.
   * @type string
   */
  id: string;
}

export interface MetricsApiGetTagIndexingRuleExemptionRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
}

export interface MetricsApiListActiveMetricConfigurationsRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
  /**
   * The number of seconds of look back (from now).
   * Default value is 604,800 (1 week), minimum value is 7200 (2 hours), maximum value is 2,630,000 (1 month).
   * @type number
   */
  windowSeconds?: number;
}

export interface MetricsApiListMetricAssetsRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
}

export interface MetricsApiListTagConfigurationByNameRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
}

export interface MetricsApiListTagConfigurationsRequest {
  /**
   * Only return custom metrics that have been configured with Metrics Without Limits.
   * @type boolean
   */
  filterConfigured?: boolean;
  /**
   * Only return metrics that have the given tag key(s) in their Metrics Without Limits configuration (included or excluded).
   * @type string
   */
  filterTagsConfigured?: string;
  /**
   * Only return metrics of the given metric type.
   * @type MetricTagConfigurationMetricTypeCategory
   */
  filterMetricType?: MetricTagConfigurationMetricTypeCategory;
  /**
   * Only return distribution metrics that have percentile aggregations enabled (true) or disabled (false).
   * @type boolean
   */
  filterIncludePercentiles?: boolean;
  /**
   * Only return metrics that have been queried (true) or not queried (false) in the look back window. Set the window with `filter[queried][window][seconds]`; if omitted, a default window is used.
   * @type boolean
   */
  filterQueried?: boolean;
  /**
   * This parameter has no effect unless `filter[queried]` is also set. Only return metrics that have been queried or not queried in the specified window. The default value is 2,592,000 seconds (30 days), the maximum value is 15,552,000 seconds (180 days), and the minimum value is 1 second. For example: `filter[queried]=true&filter[queried][window][seconds]=604800`.
   * @type number
   */
  filterQueriedWindowSeconds?: number;
  /**
   * Only return metrics that were submitted with tags matching this expression. You can use AND, OR, IN, and wildcards. For example: `filter[tags]=env IN (staging,test) AND service:web*`.
   * @type string
   */
  filterTags?: string;
  /**
   * Only return metrics that are used in at least one dashboard, monitor, notebook, or SLO.
   * @type boolean
   */
  filterRelatedAssets?: boolean;
  /**
   * Only return metrics that have been actively reporting in the specified window. The default value is 3600 seconds (1 hour), the maximum value is 2,592,000 seconds (30 days), and the minimum value is 1 second.
   * @type number
   */
  windowSeconds?: number;
  /**
   * Maximum number of results per page. Send `page[size]` on the first request to opt in to pagination. On each subsequent request, send `page[cursor]` set to the value of `meta.pagination.next_cursor` from the previous response. The default value is 10000, the maximum value is 10000, and the minimum value is 1.
   * @type number
   */
  pageSize?: number;
  /**
   * Cursor for pagination. Use `page[size]` to opt-in to pagination and get the first page; for subsequent pages, use the value from `meta.pagination.next_cursor` in the response. Pagination is complete when `next_cursor` is null.
   * @type string
   */
  pageCursor?: string;
}

export interface MetricsApiListTagIndexingRulesRequest {
  /**
   * Page size (1–1000, default 100).
   * @type number
   */
  pageLimit?: number;
  /**
   * Page offset from the start of the list (default 0).
   * @type number
   */
  pageOffset?: number;
  /**
   * Substring filter on rule name.
   * @type string
   */
  search?: string;
}

export interface MetricsApiListTagIndexingRulesForMetricRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
}

export interface MetricsApiListTagsByMetricNameRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
  /**
   * The number of seconds of look back (from now) to query for tag data.
   * Default value is 14400 (4 hours), minimum value is 14400 (4 hours).
   * @type number
   */
  windowSeconds?: number;
  /**
   * Filter results to tags from data points that have the specified tags.
   * For example, `filter[tags]=env:staging,host:123` returns tags only from data points with both `env:staging` and `host:123`.
   * @type string
   */
  filterTags?: string;
  /**
   * Filter returned tags to those matching a substring.
   * For example, `filter[match]=env` returns tags like `env:prod`, `environment:staging`, etc.
   * @type string
   */
  filterMatch?: string;
  /**
   * Whether to include tag values in the response.
   * Defaults to true.
   * @type boolean
   */
  filterIncludeTagValues?: boolean;
  /**
   * Whether to allow partial results.
   * Defaults to false.
   * @type boolean
   */
  filterAllowPartial?: boolean;
  /**
   * Maximum number of results to return.
   * @type number
   */
  pageLimit?: number;
}

export interface MetricsApiListVolumesByMetricNameRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
  /**
   * The number of seconds of look back (from now).
   * Default value is 3,600 (1 hour), maximum value is 2,592,000 (1 month).
   * @type number
   */
  windowSeconds?: number;
}

export interface MetricsApiQueryScalarDataRequest {
  /**
   * @type ScalarFormulaQueryRequest
   */
  body: ScalarFormulaQueryRequest;
}

export interface MetricsApiQueryTimeseriesDataRequest {
  /**
   * @type TimeseriesFormulaQueryRequest
   */
  body: TimeseriesFormulaQueryRequest;
}

export interface MetricsApiReorderTagIndexingRulesRequest {
  /**
   * @type TagIndexingRuleOrderRequest
   */
  body: TagIndexingRuleOrderRequest;
}

export interface MetricsApiSubmitMetricsRequest {
  /**
   * @type MetricPayload
   */
  body: MetricPayload;
  /**
   * HTTP header used to compress the media-type.
   * @type MetricContentEncoding
   */
  contentEncoding?: MetricContentEncoding;
}

export interface MetricsApiUpdateTagConfigurationRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
  /**
   * @type MetricTagConfigurationUpdateRequest
   */
  body: MetricTagConfigurationUpdateRequest;
}

export interface MetricsApiUpdateTagIndexingRuleRequest {
  /**
   * ID of the tag indexing rule.
   * @type string
   */
  id: string;
  /**
   * @type TagIndexingRuleUpdateRequest
   */
  body: TagIndexingRuleUpdateRequest;
}

export class MetricsApi {
  private requestFactory: MetricsApiRequestFactory;
  private responseProcessor: MetricsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: MetricsApiRequestFactory,
    responseProcessor?: MetricsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new MetricsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new MetricsApiResponseProcessor();
  }

  /**
   * Create and define a list of queryable tag keys for a set of existing count, gauge, rate, and distribution metrics.
   * Metrics are selected by passing a metric name prefix. Use the Delete method of this API path to remove tag configurations.
   * Results can be sent to a set of account email addresses, just like the same operation in the Datadog web app.
   * If multiple calls include the same metric, the last configuration applied (not by submit order) is used, do not
   * expect deterministic ordering of concurrent calls. The `exclude_tags_mode` value will set all metrics that match the prefix to
   * the same exclusion state, metric tag configurations do not support mixed inclusion and exclusion for tags on the same metric.
   * Can only be used with application keys of users with the `Manage Tags for Metrics` permission.
   * @param param The request object
   */
  public createBulkTagsMetricsConfiguration(
    param: MetricsApiCreateBulkTagsMetricsConfigurationRequest,
    options?: Configuration,
  ): Promise<MetricBulkTagConfigResponse> {
    const requestContextPromise =
      this.requestFactory.createBulkTagsMetricsConfiguration(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createBulkTagsMetricsConfiguration(
            responseContext,
          );
        });
    });
  }

  /**
   * Create and define a list of queryable tag keys for an existing count/gauge/rate/distribution metric.
   * Optionally, include percentile aggregations on any distribution metric. By setting `exclude_tags_mode`
   * to true, the behavior is changed from an allow-list to a deny-list, and tags in the defined list are
   * not queryable. Can only be used with application keys of users with the `Manage Tags for Metrics`
   * permission.
   * @param param The request object
   */
  public createTagConfiguration(
    param: MetricsApiCreateTagConfigurationRequest,
    options?: Configuration,
  ): Promise<MetricTagConfigurationResponse> {
    const requestContextPromise = this.requestFactory.createTagConfiguration(
      param.metricName,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTagConfiguration(responseContext);
        });
    });
  }

  /**
   * Create a tag indexing rule for the org. `rule_order` is assigned server-side as max+1
   * among existing rules; use the reorder endpoint to change the evaluation order.
   * Requires the `Manage Tags for Metrics` permission.
   * @param param The request object
   */
  public createTagIndexingRule(
    param: MetricsApiCreateTagIndexingRuleRequest,
    options?: Configuration,
  ): Promise<TagIndexingRuleResponse> {
    const requestContextPromise = this.requestFactory.createTagIndexingRule(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTagIndexingRule(responseContext);
        });
    });
  }

  /**
   * Exempt a metric from all tag indexing rules. The response includes the created
   * exemption resource. Requires the `Manage Tags for Metrics` permission.
   * @param param The request object
   */
  public createTagIndexingRuleExemption(
    param: MetricsApiCreateTagIndexingRuleExemptionRequest,
    options?: Configuration,
  ): Promise<TagIndexingRuleExemptionResponse> {
    const requestContextPromise =
      this.requestFactory.createTagIndexingRuleExemption(
        param.metricName,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTagIndexingRuleExemption(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete all custom lists of queryable tag keys for a set of existing count, gauge, rate, and distribution metrics.
   * Metrics are selected by passing a metric name prefix.
   * Results can be sent to a set of account email addresses, just like the same operation in the Datadog web app.
   * Can only be used with application keys of users with the `Manage Tags for Metrics` permission.
   * @param param The request object
   */
  public deleteBulkTagsMetricsConfiguration(
    param: MetricsApiDeleteBulkTagsMetricsConfigurationRequest,
    options?: Configuration,
  ): Promise<MetricBulkTagConfigResponse> {
    const requestContextPromise =
      this.requestFactory.deleteBulkTagsMetricsConfiguration(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteBulkTagsMetricsConfiguration(
            responseContext,
          );
        });
    });
  }

  /**
   * Deletes a metric's tag configuration. Can only be used with application
   * keys from users with the `Manage Tags for Metrics` permission.
   * Note: This operation is irreversible.
   * @param param The request object
   */
  public deleteTagConfiguration(
    param: MetricsApiDeleteTagConfigurationRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTagConfiguration(
      param.metricName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTagConfiguration(responseContext);
        });
    });
  }

  /**
   * Soft-delete a tag indexing rule. Idempotent: returns 204 whether the rule existed or was already deleted.
   * Remaining rules in the org are automatically re-sequenced to keep `rule_order` dense and 1-based.
   * Requires the `Manage Tags for Metrics` permission.
   * @param param The request object
   */
  public deleteTagIndexingRule(
    param: MetricsApiDeleteTagIndexingRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTagIndexingRule(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTagIndexingRule(responseContext);
        });
    });
  }

  /**
   * Remove a metric's exemption from tag indexing rules. Idempotent: returns 204 whether or not
   * an exemption existed. Any associated legacy tag configuration record is also removed.
   * Requires the `Manage Tags for Metrics` permission.
   * @param param The request object
   */
  public deleteTagIndexingRuleExemption(
    param: MetricsApiDeleteTagIndexingRuleExemptionRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteTagIndexingRuleExemption(
        param.metricName,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTagIndexingRuleExemption(
            responseContext,
          );
        });
    });
  }

  /**
   * Returns the estimated cardinality for a metric with a given tag, percentile and number of aggregations configuration using Metrics without Limits&trade;.
   * @param param The request object
   */
  public estimateMetricsOutputSeries(
    param: MetricsApiEstimateMetricsOutputSeriesRequest,
    options?: Configuration,
  ): Promise<MetricEstimateResponse> {
    const requestContextPromise =
      this.requestFactory.estimateMetricsOutputSeries(
        param.metricName,
        param.filterGroups,
        param.filterHoursAgo,
        param.filterNumAggregations,
        param.filterPct,
        param.filterTimespanH,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.estimateMetricsOutputSeries(
            responseContext,
          );
        });
    });
  }

  /**
   * Returns the cardinality details of tags for a specific metric.
   * @param param The request object
   */
  public getMetricTagCardinalityDetails(
    param: MetricsApiGetMetricTagCardinalityDetailsRequest,
    options?: Configuration,
  ): Promise<MetricTagCardinalitiesResponse> {
    const requestContextPromise =
      this.requestFactory.getMetricTagCardinalityDetails(
        param.metricName,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMetricTagCardinalityDetails(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a single tag indexing rule by its UUID.
   * @param param The request object
   */
  public getTagIndexingRule(
    param: MetricsApiGetTagIndexingRuleRequest,
    options?: Configuration,
  ): Promise<TagIndexingRuleResponse> {
    const requestContextPromise = this.requestFactory.getTagIndexingRule(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTagIndexingRule(responseContext);
        });
    });
  }

  /**
   * Returns why a metric is excluded from tag indexing rules.
   * Returns 200 with `kind=exemption` when an explicit exemption exists, 200 with
   * `kind=legacy_tag_configuration` when the metric has a legacy tag configuration acting as an
   * implicit exclusion, or 404 when neither applies.
   * @param param The request object
   */
  public getTagIndexingRuleExemption(
    param: MetricsApiGetTagIndexingRuleExemptionRequest,
    options?: Configuration,
  ): Promise<TagIndexingRuleExemptionResponse> {
    const requestContextPromise =
      this.requestFactory.getTagIndexingRuleExemption(
        param.metricName,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTagIndexingRuleExemption(
            responseContext,
          );
        });
    });
  }

  /**
   * List tags and aggregations that are actively queried on dashboards, notebooks, monitors, the Metrics Explorer, and using the API for a given metric name.
   * @param param The request object
   */
  public listActiveMetricConfigurations(
    param: MetricsApiListActiveMetricConfigurationsRequest,
    options?: Configuration,
  ): Promise<MetricSuggestedTagsAndAggregationsResponse> {
    const requestContextPromise =
      this.requestFactory.listActiveMetricConfigurations(
        param.metricName,
        param.windowSeconds,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listActiveMetricConfigurations(
            responseContext,
          );
        });
    });
  }

  /**
   * Returns dashboards, monitors, notebooks, and SLOs that a metric is stored in, if any.  Updated every 24 hours.
   * @param param The request object
   */
  public listMetricAssets(
    param: MetricsApiListMetricAssetsRequest,
    options?: Configuration,
  ): Promise<MetricAssetsResponse> {
    const requestContextPromise = this.requestFactory.listMetricAssets(
      param.metricName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMetricAssets(responseContext);
        });
    });
  }

  /**
   * Returns the tag configuration for the given metric name.
   * @param param The request object
   */
  public listTagConfigurationByName(
    param: MetricsApiListTagConfigurationByNameRequest,
    options?: Configuration,
  ): Promise<MetricTagConfigurationResponse> {
    const requestContextPromise =
      this.requestFactory.listTagConfigurationByName(param.metricName, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTagConfigurationByName(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a list of actively reporting metrics for your organization. Pagination is optional using the `page[cursor]` and `page[size]` query parameters.
   *
   * Query parameters use bracket notation (for example, `filter[tags]`, `filter[queried][window][seconds]`). Pass them as standard URL query strings, URL-encoding the brackets if your client does not handle them. For example: `GET /api/v2/metrics?filter[tags]=env:prod&window[seconds]=86400&page[size]=500`.
   * @param param The request object
   */
  public listTagConfigurations(
    param: MetricsApiListTagConfigurationsRequest = {},
    options?: Configuration,
  ): Promise<MetricsAndMetricTagConfigurationsResponse> {
    const requestContextPromise = this.requestFactory.listTagConfigurations(
      param.filterConfigured,
      param.filterTagsConfigured,
      param.filterMetricType,
      param.filterIncludePercentiles,
      param.filterQueried,
      param.filterQueriedWindowSeconds,
      param.filterTags,
      param.filterRelatedAssets,
      param.windowSeconds,
      param.pageSize,
      param.pageCursor,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTagConfigurations(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listTagConfigurations returning a generator with all the items.
   */
  public async *listTagConfigurationsWithPagination(
    param: MetricsApiListTagConfigurationsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<MetricsAndMetricTagConfigurations> {
    let pageSize = 10000;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listTagConfigurations(
        param.filterConfigured,
        param.filterTagsConfigured,
        param.filterMetricType,
        param.filterIncludePercentiles,
        param.filterQueried,
        param.filterQueriedWindowSeconds,
        param.filterTags,
        param.filterRelatedAssets,
        param.windowSeconds,
        param.pageSize,
        param.pageCursor,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listTagConfigurations(responseContext);
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
      const cursorMetaPagination = cursorMeta.pagination;
      if (cursorMetaPagination === undefined) {
        break;
      }
      const cursorMetaPaginationNextCursor = cursorMetaPagination.nextCursor;
      if (cursorMetaPaginationNextCursor === undefined) {
        break;
      }

      param.pageCursor = cursorMetaPaginationNextCursor;
    }
  }

  /**
   * List tag indexing rules for an org, sorted by `rule_order`, with offset/limit pagination.
   * @param param The request object
   */
  public listTagIndexingRules(
    param: MetricsApiListTagIndexingRulesRequest = {},
    options?: Configuration,
  ): Promise<TagIndexingRulesResponse> {
    const requestContextPromise = this.requestFactory.listTagIndexingRules(
      param.pageLimit,
      param.pageOffset,
      param.search,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTagIndexingRules(responseContext);
        });
    });
  }

  /**
   * List the tag indexing rules that apply to a given metric, sorted by `rule_order`.
   * Matching is performed server-side using each rule's `metric_name_matches` glob patterns.
   * @param param The request object
   */
  public listTagIndexingRulesForMetric(
    param: MetricsApiListTagIndexingRulesForMetricRequest,
    options?: Configuration,
  ): Promise<TagIndexingRulesResponse> {
    const requestContextPromise =
      this.requestFactory.listTagIndexingRulesForMetric(
        param.metricName,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTagIndexingRulesForMetric(
            responseContext,
          );
        });
    });
  }

  /**
   * View indexed and ingested tags for a given metric name.
   * Results are filtered by the `window[seconds]` parameter, which defaults to 14400 (4 hours).
   * @param param The request object
   */
  public listTagsByMetricName(
    param: MetricsApiListTagsByMetricNameRequest,
    options?: Configuration,
  ): Promise<MetricAllTagsResponse> {
    const requestContextPromise = this.requestFactory.listTagsByMetricName(
      param.metricName,
      param.windowSeconds,
      param.filterTags,
      param.filterMatch,
      param.filterIncludeTagValues,
      param.filterAllowPartial,
      param.pageLimit,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTagsByMetricName(responseContext);
        });
    });
  }

  /**
   * View hourly average cardinality for the given metric name over the look back period.
   * For Metric Name Pricing customers, view total point volume for the given metric name
   * over the look back period.
   * @param param The request object
   */
  public listVolumesByMetricName(
    param: MetricsApiListVolumesByMetricNameRequest,
    options?: Configuration,
  ): Promise<MetricVolumesResponse> {
    const requestContextPromise = this.requestFactory.listVolumesByMetricName(
      param.metricName,
      param.windowSeconds,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listVolumesByMetricName(
            responseContext,
          );
        });
    });
  }

  /**
   * Query scalar values (as seen on Query Value, Table, and Toplist widgets).
   * Multiple data sources are supported with the ability to
   * process the data using formulas and functions.
   * @param param The request object
   */
  public queryScalarData(
    param: MetricsApiQueryScalarDataRequest,
    options?: Configuration,
  ): Promise<ScalarFormulaQueryResponse> {
    const requestContextPromise = this.requestFactory.queryScalarData(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryScalarData(responseContext);
        });
    });
  }

  /**
   * Query timeseries data across various data sources and
   * process the data by applying formulas and functions.
   * @param param The request object
   */
  public queryTimeseriesData(
    param: MetricsApiQueryTimeseriesDataRequest,
    options?: Configuration,
  ): Promise<TimeseriesFormulaQueryResponse> {
    const requestContextPromise = this.requestFactory.queryTimeseriesData(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryTimeseriesData(responseContext);
        });
    });
  }

  /**
   * Atomically re-sequence the tag indexing rules for an org to match the supplied list of rule UUIDs.
   * The server assigns `rule_order` 1, 2, … matching each rule UUID by position in the list.
   * Requires the `Manage Tags for Metrics` permission.
   * @param param The request object
   */
  public reorderTagIndexingRules(
    param: MetricsApiReorderTagIndexingRulesRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.reorderTagIndexingRules(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.reorderTagIndexingRules(
            responseContext,
          );
        });
    });
  }

  /**
   * The metrics end-point allows you to post time-series data that can be graphed on Datadog’s dashboards.
   * The maximum payload size is 500 kilobytes (512000 bytes). Compressed payloads must have a decompressed size of less than 5 megabytes (5242880 bytes).
   *
   * If you’re submitting metrics directly to the Datadog API without using DogStatsD, expect:
   *
   * - 64 bits for the timestamp
   * - 64 bits for the value
   * - 20 bytes for the metric names
   * - 50 bytes for the timeseries
   * - The full payload is approximately 100 bytes.
   *
   * Host name is one of the resources in the Resources field.
   * @param param The request object
   */
  public submitMetrics(
    param: MetricsApiSubmitMetricsRequest,
    options?: Configuration,
  ): Promise<IntakePayloadAccepted> {
    const requestContextPromise = this.requestFactory.submitMetrics(
      param.body,
      param.contentEncoding,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.submitMetrics(responseContext);
        });
    });
  }

  /**
   * Update the tag configuration of a metric or percentile aggregations of a distribution metric or custom aggregations
   * of a count, rate, or gauge metric. By setting `exclude_tags_mode` to true the behavior is changed
   * from an allow-list to a deny-list, and tags in the defined list will not be queryable.
   * Can only be used with application keys from users with the `Manage Tags for Metrics` permission. This endpoint requires
   * a tag configuration to be created first.
   * @param param The request object
   */
  public updateTagConfiguration(
    param: MetricsApiUpdateTagConfigurationRequest,
    options?: Configuration,
  ): Promise<MetricTagConfigurationResponse> {
    const requestContextPromise = this.requestFactory.updateTagConfiguration(
      param.metricName,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTagConfiguration(responseContext);
        });
    });
  }

  /**
   * Partially update a tag indexing rule. Fields omitted from the request body are left unchanged.
   * Setting `rule_order` to a value already used by another rule returns 409; use the
   * reorder endpoint for atomic re-sequencing. Requires the `Manage Tags for Metrics` permission.
   * @param param The request object
   */
  public updateTagIndexingRule(
    param: MetricsApiUpdateTagIndexingRuleRequest,
    options?: Configuration,
  ): Promise<TagIndexingRuleResponse> {
    const requestContextPromise = this.requestFactory.updateTagIndexingRule(
      param.id,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTagIndexingRule(responseContext);
        });
    });
  }
}
