import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import {
  Configuration,
  getServer,
  applySecurityAuthentication,
} from "../configuration";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";

import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { LogsMetricCreateRequest } from "../models/LogsMetricCreateRequest";
import { LogsMetricResponse } from "../models/LogsMetricResponse";
import { LogsMetricsResponse } from "../models/LogsMetricsResponse";
import { LogsMetricUpdateRequest } from "../models/LogsMetricUpdateRequest";

export class LogsMetricsApiRequestFactory extends BaseAPIRequestFactory {
  public async createLogsMetric(
    body: LogsMetricCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createLogsMetric."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/metrics";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "LogsMetricsApi.createLogsMetric"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LogsMetricCreateRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricId' is not null or undefined
    if (metricId === null || metricId === undefined) {
      throw new RequiredError(
        "Required parameter metricId was null or undefined when calling deleteLogsMetric."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/metrics/{metric_id}".replace(
      "{" + "metric_id" + "}",
      encodeURIComponent(String(metricId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "LogsMetricsApi.deleteLogsMetric"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getLogsMetric(
    metricId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricId' is not null or undefined
    if (metricId === null || metricId === undefined) {
      throw new RequiredError(
        "Required parameter metricId was null or undefined when calling getLogsMetric."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/metrics/{metric_id}".replace(
      "{" + "metric_id" + "}",
      encodeURIComponent(String(metricId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "LogsMetricsApi.getLogsMetric"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listLogsMetrics(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/logs/config/metrics";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "LogsMetricsApi.listLogsMetrics"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateLogsMetric(
    metricId: string,
    body: LogsMetricUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricId' is not null or undefined
    if (metricId === null || metricId === undefined) {
      throw new RequiredError(
        "Required parameter metricId was null or undefined when calling updateLogsMetric."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateLogsMetric."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/metrics/{metric_id}".replace(
      "{" + "metric_id" + "}",
      encodeURIComponent(String(metricId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "LogsMetricsApi.updateLogsMetric"
    ).makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LogsMetricUpdateRequest", ""),
      contentType
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
    response: ResponseContext
  ): Promise<LogsMetricResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: LogsMetricResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsMetricResponse",
        ""
      ) as LogsMetricResponse;
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
    if (isCodeInRange("409", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(409, body);
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
      const body: LogsMetricResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsMetricResponse",
        ""
      ) as LogsMetricResponse;
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
   * @params response Response returned by the server for a request to deleteLogsMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLogsMetric(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      return;
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to getLogsMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLogsMetric(
    response: ResponseContext
  ): Promise<LogsMetricResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: LogsMetricResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsMetricResponse",
        ""
      ) as LogsMetricResponse;
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
      const body: LogsMetricResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsMetricResponse",
        ""
      ) as LogsMetricResponse;
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
   * @params response Response returned by the server for a request to listLogsMetrics
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLogsMetrics(
    response: ResponseContext
  ): Promise<LogsMetricsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: LogsMetricsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsMetricsResponse",
        ""
      ) as LogsMetricsResponse;
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
      const body: LogsMetricsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsMetricsResponse",
        ""
      ) as LogsMetricsResponse;
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
   * @params response Response returned by the server for a request to updateLogsMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLogsMetric(
    response: ResponseContext
  ): Promise<LogsMetricResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: LogsMetricResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsMetricResponse",
        ""
      ) as LogsMetricResponse;
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
      const body: LogsMetricResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsMetricResponse",
        ""
      ) as LogsMetricResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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

  public constructor(
    configuration: Configuration,
    requestFactory?: LogsMetricsApiRequestFactory,
    responseProcessor?: LogsMetricsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new LogsMetricsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new LogsMetricsApiResponseProcessor();
  }

  /**
   * Create a metric based on your ingested logs in your organization. Returns the log-based metric object from the request body when the request is successful.
   * @param param The request object
   */
  public createLogsMetric(
    param: LogsMetricsApiCreateLogsMetricRequest,
    options?: Configuration
  ): Promise<LogsMetricResponse> {
    const requestContextPromise = this.requestFactory.createLogsMetric(
      param.body,
      options
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteLogsMetric(
      param.metricId,
      options
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
    options?: Configuration
  ): Promise<LogsMetricResponse> {
    const requestContextPromise = this.requestFactory.getLogsMetric(
      param.metricId,
      options
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
    options?: Configuration
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
   * Update a specific log-based metric from your organization. Returns the log-based metric object from the request body when the request is successful.
   * @param param The request object
   */
  public updateLogsMetric(
    param: LogsMetricsApiUpdateLogsMetricRequest,
    options?: Configuration
  ): Promise<LogsMetricResponse> {
    const requestContextPromise = this.requestFactory.updateLogsMetric(
      param.metricId,
      param.body,
      options
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
