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
import { MetricTagConfigurationCreateRequest } from "./models/MetricTagConfigurationCreateRequest";
import { MetricTagConfigurationMetricTypeCategory } from "./models/MetricTagConfigurationMetricTypeCategory";
import { MetricTagConfigurationResponse } from "./models/MetricTagConfigurationResponse";
import { MetricTagConfigurationUpdateRequest } from "./models/MetricTagConfigurationUpdateRequest";
import { MetricVolumesResponse } from "./models/MetricVolumesResponse";
import { ScalarFormulaQueryRequest } from "./models/ScalarFormulaQueryRequest";
import { ScalarFormulaQueryResponse } from "./models/ScalarFormulaQueryResponse";
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listTagConfigurations(
    filterConfigured?: boolean,
    filterTagsConfigured?: string,
    filterMetricType?: MetricTagConfigurationMetricTypeCategory,
    filterIncludePercentiles?: boolean,
    filterQueried?: boolean,
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listTagsByMetricName(
    metricName: string,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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

export interface MetricsApiEstimateMetricsOutputSeriesRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
  /**
   * Filtered tag keys that the metric is configured to query with.
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
   * Filter custom metrics that have configured tags.
   * @type boolean
   */
  filterConfigured?: boolean;
  /**
   * Filter tag configurations by configured tags.
   * @type string
   */
  filterTagsConfigured?: string;
  /**
   * Filter metrics by metric type.
   * @type MetricTagConfigurationMetricTypeCategory
   */
  filterMetricType?: MetricTagConfigurationMetricTypeCategory;
  /**
   * Filter distributions with additional percentile
   * aggregations enabled or disabled.
   * @type boolean
   */
  filterIncludePercentiles?: boolean;
  /**
   * (Preview) Filter custom metrics that have or have not been queried in the specified window[seconds].
   * If no window is provided or the window is less than 2 hours, a default of 2 hours will be applied.
   * @type boolean
   */
  filterQueried?: boolean;
  /**
   * Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions.
   * Can only be combined with the filter[queried] filter.
   * @type string
   */
  filterTags?: string;
  /**
   * (Preview) Filter metrics that are used in dashboards, monitors, notebooks, SLOs.
   * @type boolean
   */
  filterRelatedAssets?: boolean;
  /**
   * The number of seconds of look back (from now) to apply to a filter[tag] or filter[queried] query.
   * Default value is 3600 (1 hour), maximum value is 2,592,000 (30 days).
   * @type number
   */
  windowSeconds?: number;
  /**
   * Maximum number of results returned.
   * @type number
   */
  pageSize?: number;
  /**
   * String to query the next page of results.
   * This key is provided with each valid response from the API in `meta.pagination.next_cursor`.
   * Once the `meta.pagination.next_cursor` key is null, all pages have been retrieved.
   * @type string
   */
  pageCursor?: string;
}

export interface MetricsApiListTagsByMetricNameRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
}

export interface MetricsApiListVolumesByMetricNameRequest {
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
   * Returns all metrics that can be configured in the Metrics Summary page or with Metrics without Limits™ (matching additional filters if specified).
   * Optionally, paginate by using the `page[cursor]` and/or `page[size]` query parameters.
   * To fetch the first page, pass in a query parameter with either a valid `page[size]` or an empty cursor like `page[cursor]=`. To fetch the next page, pass in the `next_cursor` value from the response as the new `page[cursor]` value.
   * Once the `meta.pagination.next_cursor` value is null, all pages have been retrieved.
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
      if (results.length < pageSize) {
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
   * View indexed tag key-value pairs for a given metric name over the previous hour.
   * @param param The request object
   */
  public listTagsByMetricName(
    param: MetricsApiListTagsByMetricNameRequest,
    options?: Configuration,
  ): Promise<MetricAllTagsResponse> {
    const requestContextPromise = this.requestFactory.listTagsByMetricName(
      param.metricName,
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
   * View distinct metrics volumes for the given metric name.
   *
   * Custom metrics generated in-app from other products will return `null` for ingested volumes.
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
}
