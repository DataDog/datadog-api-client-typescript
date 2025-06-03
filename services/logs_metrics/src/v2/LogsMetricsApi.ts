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
import { LogsMetricCreateRequest } from "./models/LogsMetricCreateRequest";
import { LogsMetricResponse } from "./models/LogsMetricResponse";
import { LogsMetricsResponse } from "./models/LogsMetricsResponse";
import { LogsMetricUpdateRequest } from "./models/LogsMetricUpdateRequest";
import { version } from "../version";

export class LogsMetricsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("logs-metrics", version);
    }
  }
  public async createLogsMetric(
    body: LogsMetricCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createLogsMetric");
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/metrics";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsMetricsApi.v2.createLogsMetric",
      LogsMetricsApi.operationServers,
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
      serialize(body, TypingInfo, "LogsMetricCreateRequest", ""),
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

  public async deleteLogsMetric(
    metricId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricId' is not null or undefined
    if (metricId === null || metricId === undefined) {
      throw new RequiredError("metricId", "deleteLogsMetric");
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/metrics/{metric_id}".replace(
      "{metric_id}",
      encodeURIComponent(String(metricId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsMetricsApi.v2.deleteLogsMetric",
      LogsMetricsApi.operationServers,
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

  public async getLogsMetric(
    metricId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricId' is not null or undefined
    if (metricId === null || metricId === undefined) {
      throw new RequiredError("metricId", "getLogsMetric");
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/metrics/{metric_id}".replace(
      "{metric_id}",
      encodeURIComponent(String(metricId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsMetricsApi.v2.getLogsMetric",
      LogsMetricsApi.operationServers,
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

  public async listLogsMetrics(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/logs/config/metrics";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsMetricsApi.v2.listLogsMetrics",
      LogsMetricsApi.operationServers,
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

  public async updateLogsMetric(
    metricId: string,
    body: LogsMetricUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricId' is not null or undefined
    if (metricId === null || metricId === undefined) {
      throw new RequiredError("metricId", "updateLogsMetric");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateLogsMetric");
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/metrics/{metric_id}".replace(
      "{metric_id}",
      encodeURIComponent(String(metricId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsMetricsApi.v2.updateLogsMetric",
      LogsMetricsApi.operationServers,
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
      serialize(body, TypingInfo, "LogsMetricUpdateRequest", ""),
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

export class LogsMetricsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createLogsMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLogsMetric(
    response: ResponseContext,
  ): Promise<LogsMetricResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LogsMetricResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LogsMetricResponse",
      ) as LogsMetricResponse;
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
      const body: LogsMetricResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LogsMetricResponse",
        "",
      ) as LogsMetricResponse;
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
   * @params response Response returned by the server for a request to deleteLogsMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLogsMetric(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to getLogsMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLogsMetric(
    response: ResponseContext,
  ): Promise<LogsMetricResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LogsMetricResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LogsMetricResponse",
      ) as LogsMetricResponse;
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
      const body: LogsMetricResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LogsMetricResponse",
        "",
      ) as LogsMetricResponse;
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
   * @params response Response returned by the server for a request to listLogsMetrics
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLogsMetrics(
    response: ResponseContext,
  ): Promise<LogsMetricsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LogsMetricsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LogsMetricsResponse",
      ) as LogsMetricsResponse;
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
      const body: LogsMetricsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LogsMetricsResponse",
        "",
      ) as LogsMetricsResponse;
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
   * @params response Response returned by the server for a request to updateLogsMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLogsMetric(
    response: ResponseContext,
  ): Promise<LogsMetricResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LogsMetricResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LogsMetricResponse",
      ) as LogsMetricResponse;
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
      const body: LogsMetricResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LogsMetricResponse",
        "",
      ) as LogsMetricResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface LogsMetricsApiCreateLogsMetricRequest {
  /**
   * The definition of the new log-based metric.
   * @type LogsMetricCreateRequest
   */
  body: LogsMetricCreateRequest;
}

export interface LogsMetricsApiDeleteLogsMetricRequest {
  /**
   * The name of the log-based metric.
   * @type string
   */
  metricId: string;
}

export interface LogsMetricsApiGetLogsMetricRequest {
  /**
   * The name of the log-based metric.
   * @type string
   */
  metricId: string;
}

export interface LogsMetricsApiUpdateLogsMetricRequest {
  /**
   * The name of the log-based metric.
   * @type string
   */
  metricId: string;
  /**
   * New definition of the log-based metric.
   * @type LogsMetricUpdateRequest
   */
  body: LogsMetricUpdateRequest;
}

export class LogsMetricsApi {
  private requestFactory: LogsMetricsApiRequestFactory;
  private responseProcessor: LogsMetricsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: LogsMetricsApiRequestFactory,
    responseProcessor?: LogsMetricsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new LogsMetricsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new LogsMetricsApiResponseProcessor();
  }

  /**
   * Create a metric based on your ingested logs in your organization.
   * Returns the log-based metric object from the request body when the request is successful.
   * @param param The request object
   */
  public createLogsMetric(
    param: LogsMetricsApiCreateLogsMetricRequest,
    options?: Configuration,
  ): Promise<LogsMetricResponse> {
    const requestContextPromise = this.requestFactory.createLogsMetric(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLogsMetric(responseContext);
        });
    });
  }

  /**
   * Delete a specific log-based metric from your organization.
   * @param param The request object
   */
  public deleteLogsMetric(
    param: LogsMetricsApiDeleteLogsMetricRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteLogsMetric(
      param.metricId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLogsMetric(responseContext);
        });
    });
  }

  /**
   * Get a specific log-based metric from your organization.
   * @param param The request object
   */
  public getLogsMetric(
    param: LogsMetricsApiGetLogsMetricRequest,
    options?: Configuration,
  ): Promise<LogsMetricResponse> {
    const requestContextPromise = this.requestFactory.getLogsMetric(
      param.metricId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLogsMetric(responseContext);
        });
    });
  }

  /**
   * Get the list of configured log-based metrics with their definitions.
   * @param param The request object
   */
  public listLogsMetrics(
    options?: Configuration,
  ): Promise<LogsMetricsResponse> {
    const requestContextPromise = this.requestFactory.listLogsMetrics(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLogsMetrics(responseContext);
        });
    });
  }

  /**
   * Update a specific log-based metric from your organization.
   * Returns the log-based metric object from the request body when the request is successful.
   * @param param The request object
   */
  public updateLogsMetric(
    param: LogsMetricsApiUpdateLogsMetricRequest,
    options?: Configuration,
  ): Promise<LogsMetricResponse> {
    const requestContextPromise = this.requestFactory.updateLogsMetric(
      param.metricId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLogsMetric(responseContext);
        });
    });
  }
}
