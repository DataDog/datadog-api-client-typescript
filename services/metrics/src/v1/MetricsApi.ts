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
import { DistributionPointsContentEncoding } from "./models/DistributionPointsContentEncoding";
import { DistributionPointsPayload } from "./models/DistributionPointsPayload";
import { IntakePayloadAccepted } from "./models/IntakePayloadAccepted";
import { MetricContentEncoding } from "./models/MetricContentEncoding";
import { MetricMetadata } from "./models/MetricMetadata";
import { MetricSearchResponse } from "./models/MetricSearchResponse";
import { MetricsListResponse } from "./models/MetricsListResponse";
import { MetricsPayload } from "./models/MetricsPayload";
import { MetricsQueryResponse } from "./models/MetricsQueryResponse";
import { version } from "../version";

export class MetricsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("metrics", version);
    }
  }
  public async getMetricMetadata(
    metricName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "getMetricMetadata");
    }

    // Path Params
    const localVarPath = "/api/v1/metrics/{metric_name}".replace(
      "{metric_name}",
      encodeURIComponent(String(metricName)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v1.getMetricMetadata",
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

  public async listActiveMetrics(
    from: number,
    host?: string,
    tagFilter?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'from' is not null or undefined
    if (from === null || from === undefined) {
      throw new RequiredError("from", "listActiveMetrics");
    }

    // Path Params
    const localVarPath = "/api/v1/metrics";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v1.listActiveMetrics",
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
    if (from !== undefined) {
      requestContext.setQueryParam(
        "from",
        serialize(from, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (host !== undefined) {
      requestContext.setQueryParam(
        "host",
        serialize(host, TypingInfo, "string", ""),
        "",
      );
    }
    if (tagFilter !== undefined) {
      requestContext.setQueryParam(
        "tag_filter",
        serialize(tagFilter, TypingInfo, "string", ""),
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

  public async listMetrics(
    q: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'q' is not null or undefined
    if (q === null || q === undefined) {
      throw new RequiredError("q", "listMetrics");
    }

    // Path Params
    const localVarPath = "/api/v1/search";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v1.listMetrics",
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
    if (q !== undefined) {
      requestContext.setQueryParam(
        "q",
        serialize(q, TypingInfo, "string", ""),
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

  public async queryMetrics(
    from: number,
    to: number,
    query: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'from' is not null or undefined
    if (from === null || from === undefined) {
      throw new RequiredError("from", "queryMetrics");
    }

    // verify required parameter 'to' is not null or undefined
    if (to === null || to === undefined) {
      throw new RequiredError("to", "queryMetrics");
    }

    // verify required parameter 'query' is not null or undefined
    if (query === null || query === undefined) {
      throw new RequiredError("query", "queryMetrics");
    }

    // Path Params
    const localVarPath = "/api/v1/query";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v1.queryMetrics",
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
    if (from !== undefined) {
      requestContext.setQueryParam(
        "from",
        serialize(from, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (to !== undefined) {
      requestContext.setQueryParam(
        "to",
        serialize(to, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        serialize(query, TypingInfo, "string", ""),
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

  public async submitDistributionPoints(
    body: DistributionPointsPayload,
    contentEncoding?: DistributionPointsContentEncoding,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "submitDistributionPoints");
    }

    // Path Params
    const localVarPath = "/api/v1/distribution_points";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v1.submitDistributionPoints",
      MetricsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "text/json, application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Header Params
    if (contentEncoding !== undefined) {
      requestContext.setHeaderParam(
        "Content-Encoding",
        serialize(
          contentEncoding,
          TypingInfo,
          "DistributionPointsContentEncoding",
          "",
        ),
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["text/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "DistributionPointsPayload", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }

  public async submitMetrics(
    body: MetricsPayload,
    contentEncoding?: MetricContentEncoding,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "submitMetrics");
    }

    // Path Params
    const localVarPath = "/api/v1/series";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v1.submitMetrics",
      MetricsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "text/json, application/json");
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
    const contentType = getPreferredMediaType(["text/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "MetricsPayload", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }

  public async updateMetricMetadata(
    metricName: string,
    body: MetricMetadata,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "updateMetricMetadata");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateMetricMetadata");
    }

    // Path Params
    const localVarPath = "/api/v1/metrics/{metric_name}".replace(
      "{metric_name}",
      encodeURIComponent(String(metricName)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "MetricsApi.v1.updateMetricMetadata",
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
      serialize(body, TypingInfo, "MetricMetadata", ""),
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
   * @params response Response returned by the server for a request to getMetricMetadata
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMetricMetadata(
    response: ResponseContext,
  ): Promise<MetricMetadata> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MetricMetadata = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricMetadata",
      ) as MetricMetadata;
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
      const body: MetricMetadata = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricMetadata",
        "",
      ) as MetricMetadata;
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
   * @params response Response returned by the server for a request to listActiveMetrics
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listActiveMetrics(
    response: ResponseContext,
  ): Promise<MetricsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MetricsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricsListResponse",
      ) as MetricsListResponse;
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
      const body: MetricsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricsListResponse",
        "",
      ) as MetricsListResponse;
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
   * @params response Response returned by the server for a request to listMetrics
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listMetrics(
    response: ResponseContext,
  ): Promise<MetricSearchResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MetricSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricSearchResponse",
      ) as MetricSearchResponse;
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
      const body: MetricSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricSearchResponse",
        "",
      ) as MetricSearchResponse;
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
   * @params response Response returned by the server for a request to queryMetrics
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryMetrics(
    response: ResponseContext,
  ): Promise<MetricsQueryResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MetricsQueryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricsQueryResponse",
      ) as MetricsQueryResponse;
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
      const body: MetricsQueryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricsQueryResponse",
        "",
      ) as MetricsQueryResponse;
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
   * @params response Response returned by the server for a request to submitDistributionPoints
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async submitDistributionPoints(
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
   * @params response Response returned by the server for a request to updateMetricMetadata
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateMetricMetadata(
    response: ResponseContext,
  ): Promise<MetricMetadata> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MetricMetadata = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricMetadata",
      ) as MetricMetadata;
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
      const body: MetricMetadata = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MetricMetadata",
        "",
      ) as MetricMetadata;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface MetricsApiGetMetricMetadataRequest {
  /**
   * Name of the metric for which to get metadata.
   * @type string
   */
  metricName: string;
}

export interface MetricsApiListActiveMetricsRequest {
  /**
   * Seconds since the Unix epoch.
   * @type number
   */
  from: number;
  /**
   * Hostname for filtering the list of metrics returned.
   * If set, metrics retrieved are those with the corresponding hostname tag.
   * @type string
   */
  host?: string;
  /**
   * Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions.
   * Cannot be combined with other filters.
   * @type string
   */
  tagFilter?: string;
}

export interface MetricsApiListMetricsRequest {
  /**
   * Query string to search metrics upon. Can optionally be prefixed with `metrics:`.
   * @type string
   */
  q: string;
}

export interface MetricsApiQueryMetricsRequest {
  /**
   * Start of the queried time period, seconds since the Unix epoch.
   * @type number
   */
  from: number;
  /**
   * End of the queried time period, seconds since the Unix epoch.
   * @type number
   */
  to: number;
  /**
   * Query string.
   * @type string
   */
  query: string;
}

export interface MetricsApiSubmitDistributionPointsRequest {
  /**
   * @type DistributionPointsPayload
   */
  body: DistributionPointsPayload;
  /**
   * HTTP header used to compress the media-type.
   * @type DistributionPointsContentEncoding
   */
  contentEncoding?: DistributionPointsContentEncoding;
}

export interface MetricsApiSubmitMetricsRequest {
  /**
   * @type MetricsPayload
   */
  body: MetricsPayload;
  /**
   * HTTP header used to compress the media-type.
   * @type MetricContentEncoding
   */
  contentEncoding?: MetricContentEncoding;
}

export interface MetricsApiUpdateMetricMetadataRequest {
  /**
   * Name of the metric for which to edit metadata.
   * @type string
   */
  metricName: string;
  /**
   * New metadata.
   * @type MetricMetadata
   */
  body: MetricMetadata;
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
   * Get metadata about a specific metric.
   * @param param The request object
   */
  public getMetricMetadata(
    param: MetricsApiGetMetricMetadataRequest,
    options?: Configuration,
  ): Promise<MetricMetadata> {
    const requestContextPromise = this.requestFactory.getMetricMetadata(
      param.metricName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMetricMetadata(responseContext);
        });
    });
  }

  /**
   * Get the list of actively reporting metrics from a given time until now.
   * @param param The request object
   */
  public listActiveMetrics(
    param: MetricsApiListActiveMetricsRequest,
    options?: Configuration,
  ): Promise<MetricsListResponse> {
    const requestContextPromise = this.requestFactory.listActiveMetrics(
      param.from,
      param.host,
      param.tagFilter,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listActiveMetrics(responseContext);
        });
    });
  }

  /**
   * Search for metrics from the last 24 hours in Datadog.
   * @param param The request object
   */
  public listMetrics(
    param: MetricsApiListMetricsRequest,
    options?: Configuration,
  ): Promise<MetricSearchResponse> {
    const requestContextPromise = this.requestFactory.listMetrics(
      param.q,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMetrics(responseContext);
        });
    });
  }

  /**
   * Query timeseries points.
   * @param param The request object
   */
  public queryMetrics(
    param: MetricsApiQueryMetricsRequest,
    options?: Configuration,
  ): Promise<MetricsQueryResponse> {
    const requestContextPromise = this.requestFactory.queryMetrics(
      param.from,
      param.to,
      param.query,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryMetrics(responseContext);
        });
    });
  }

  /**
   * The distribution points end-point allows you to post distribution data that can be graphed on Datadog’s dashboards.
   * @param param The request object
   */
  public submitDistributionPoints(
    param: MetricsApiSubmitDistributionPointsRequest,
    options?: Configuration,
  ): Promise<IntakePayloadAccepted> {
    const requestContextPromise = this.requestFactory.submitDistributionPoints(
      param.body,
      param.contentEncoding,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.submitDistributionPoints(
            responseContext,
          );
        });
    });
  }

  /**
   * The metrics end-point allows you to post time-series data that can be graphed on Datadog’s dashboards.
   * The maximum payload size is 3.2 megabytes (3200000 bytes). Compressed payloads must have a decompressed size of less than 62 megabytes (62914560 bytes).
   *
   * If you’re submitting metrics directly to the Datadog API without using DogStatsD, expect:
   *
   * - 64 bits for the timestamp
   * - 64 bits for the value
   * - 40 bytes for the metric names
   * - 50 bytes for the timeseries
   * - The full payload is approximately 100 bytes. However, with the DogStatsD API,
   * compression is applied, which reduces the payload size.
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
   * Edit metadata of a specific metric. Find out more about [supported types](https://docs.datadoghq.com/developers/metrics).
   * @param param The request object
   */
  public updateMetricMetadata(
    param: MetricsApiUpdateMetricMetadataRequest,
    options?: Configuration,
  ): Promise<MetricMetadata> {
    const requestContextPromise = this.requestFactory.updateMetricMetadata(
      param.metricName,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateMetricMetadata(responseContext);
        });
    });
  }
}
