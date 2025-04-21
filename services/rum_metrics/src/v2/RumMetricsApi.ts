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
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { RumMetricCreateRequest } from "./models/RumMetricCreateRequest";
import { RumMetricResponse } from "./models/RumMetricResponse";
import { RumMetricsResponse } from "./models/RumMetricsResponse";
import { RumMetricUpdateRequest } from "./models/RumMetricUpdateRequest";

export class RumMetricsApiRequestFactory extends BaseAPIRequestFactory {
  public async createRumMetric(
    body: RumMetricCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRumMetric");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/config/metrics";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumMetricsApi.createRumMetric")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "RumMetricCreateRequest", ""),
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

  public async deleteRumMetric(
    metricId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricId' is not null or undefined
    if (metricId === null || metricId === undefined) {
      throw new RequiredError("metricId", "deleteRumMetric");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/config/metrics/{metric_id}".replace(
      "{metric_id}",
      encodeURIComponent(String(metricId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumMetricsApi.deleteRumMetric")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getRumMetric(
    metricId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricId' is not null or undefined
    if (metricId === null || metricId === undefined) {
      throw new RequiredError("metricId", "getRumMetric");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/config/metrics/{metric_id}".replace(
      "{metric_id}",
      encodeURIComponent(String(metricId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumMetricsApi.getRumMetric")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listRumMetrics(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/rum/config/metrics";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumMetricsApi.listRumMetrics")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateRumMetric(
    metricId: string,
    body: RumMetricUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricId' is not null or undefined
    if (metricId === null || metricId === undefined) {
      throw new RequiredError("metricId", "updateRumMetric");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateRumMetric");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/config/metrics/{metric_id}".replace(
      "{metric_id}",
      encodeURIComponent(String(metricId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumMetricsApi.updateRumMetric")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "RumMetricUpdateRequest", ""),
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

export class RumMetricsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createRumMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRumMetric(
    response: ResponseContext,
  ): Promise<RumMetricResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: RumMetricResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumMetricResponse",
      ) as RumMetricResponse;
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
      const body: RumMetricResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumMetricResponse",
        "",
      ) as RumMetricResponse;
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
   * @params response Response returned by the server for a request to deleteRumMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRumMetric(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to getRumMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRumMetric(
    response: ResponseContext,
  ): Promise<RumMetricResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumMetricResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumMetricResponse",
      ) as RumMetricResponse;
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
      const body: RumMetricResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumMetricResponse",
        "",
      ) as RumMetricResponse;
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
   * @params response Response returned by the server for a request to listRumMetrics
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRumMetrics(
    response: ResponseContext,
  ): Promise<RumMetricsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumMetricsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumMetricsResponse",
      ) as RumMetricsResponse;
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
      const body: RumMetricsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumMetricsResponse",
        "",
      ) as RumMetricsResponse;
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
   * @params response Response returned by the server for a request to updateRumMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRumMetric(
    response: ResponseContext,
  ): Promise<RumMetricResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumMetricResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumMetricResponse",
      ) as RumMetricResponse;
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
      const body: RumMetricResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumMetricResponse",
        "",
      ) as RumMetricResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface RumMetricsApiCreateRumMetricRequest {
  /**
   * The definition of the new rum-based metric.
   * @type RumMetricCreateRequest
   */
  body: RumMetricCreateRequest;
}

export interface RumMetricsApiDeleteRumMetricRequest {
  /**
   * The name of the rum-based metric.
   * @type string
   */
  metricId: string;
}

export interface RumMetricsApiGetRumMetricRequest {
  /**
   * The name of the rum-based metric.
   * @type string
   */
  metricId: string;
}

export interface RumMetricsApiUpdateRumMetricRequest {
  /**
   * The name of the rum-based metric.
   * @type string
   */
  metricId: string;
  /**
   * New definition of the rum-based metric.
   * @type RumMetricUpdateRequest
   */
  body: RumMetricUpdateRequest;
}

export class RumMetricsApi {
  private requestFactory: RumMetricsApiRequestFactory;
  private responseProcessor: RumMetricsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: RumMetricsApiRequestFactory,
    responseProcessor?: RumMetricsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new RumMetricsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new RumMetricsApiResponseProcessor();
  }

  /**
   * Create a metric based on your organization's RUM data.
   * Returns the rum-based metric object from the request body when the request is successful.
   * @param param The request object
   */
  public createRumMetric(
    param: RumMetricsApiCreateRumMetricRequest,
    options?: Configuration,
  ): Promise<RumMetricResponse> {
    const requestContextPromise = this.requestFactory.createRumMetric(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRumMetric(responseContext);
        });
    });
  }

  /**
   * Delete a specific rum-based metric from your organization.
   * @param param The request object
   */
  public deleteRumMetric(
    param: RumMetricsApiDeleteRumMetricRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRumMetric(
      param.metricId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRumMetric(responseContext);
        });
    });
  }

  /**
   * Get a specific rum-based metric from your organization.
   * @param param The request object
   */
  public getRumMetric(
    param: RumMetricsApiGetRumMetricRequest,
    options?: Configuration,
  ): Promise<RumMetricResponse> {
    const requestContextPromise = this.requestFactory.getRumMetric(
      param.metricId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRumMetric(responseContext);
        });
    });
  }

  /**
   * Get the list of configured rum-based metrics with their definitions.
   * @param param The request object
   */
  public listRumMetrics(options?: Configuration): Promise<RumMetricsResponse> {
    const requestContextPromise = this.requestFactory.listRumMetrics(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRumMetrics(responseContext);
        });
    });
  }

  /**
   * Update a specific rum-based metric from your organization.
   * Returns the rum-based metric object from the request body when the request is successful.
   * @param param The request object
   */
  public updateRumMetric(
    param: RumMetricsApiUpdateRumMetricRequest,
    options?: Configuration,
  ): Promise<RumMetricResponse> {
    const requestContextPromise = this.requestFactory.updateRumMetric(
      param.metricId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRumMetric(responseContext);
        });
    });
  }
}
