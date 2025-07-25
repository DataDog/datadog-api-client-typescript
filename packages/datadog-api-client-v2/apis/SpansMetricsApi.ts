import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  applySecurityAuthentication,
} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
} from "../../datadog-api-client-common/http/http";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";
import { APIErrorResponse } from "../models/APIErrorResponse";
import { SpansMetricCreateRequest } from "../models/SpansMetricCreateRequest";
import { SpansMetricResponse } from "../models/SpansMetricResponse";
import { SpansMetricsResponse } from "../models/SpansMetricsResponse";
import { SpansMetricUpdateRequest } from "../models/SpansMetricUpdateRequest";

export class SpansMetricsApiRequestFactory extends BaseAPIRequestFactory {
  public async createSpansMetric(
    body: SpansMetricCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSpansMetric");
    }

    // Path Params
    const localVarPath = "/api/v2/apm/config/metrics";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SpansMetricsApi.createSpansMetric")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SpansMetricCreateRequest", ""),
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

  public async deleteSpansMetric(
    metricId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricId' is not null or undefined
    if (metricId === null || metricId === undefined) {
      throw new RequiredError("metricId", "deleteSpansMetric");
    }

    // Path Params
    const localVarPath = "/api/v2/apm/config/metrics/{metric_id}".replace(
      "{metric_id}",
      encodeURIComponent(String(metricId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SpansMetricsApi.deleteSpansMetric")
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

  public async getSpansMetric(
    metricId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricId' is not null or undefined
    if (metricId === null || metricId === undefined) {
      throw new RequiredError("metricId", "getSpansMetric");
    }

    // Path Params
    const localVarPath = "/api/v2/apm/config/metrics/{metric_id}".replace(
      "{metric_id}",
      encodeURIComponent(String(metricId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SpansMetricsApi.getSpansMetric")
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

  public async listSpansMetrics(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/apm/config/metrics";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SpansMetricsApi.listSpansMetrics")
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

  public async updateSpansMetric(
    metricId: string,
    body: SpansMetricUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricId' is not null or undefined
    if (metricId === null || metricId === undefined) {
      throw new RequiredError("metricId", "updateSpansMetric");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateSpansMetric");
    }

    // Path Params
    const localVarPath = "/api/v2/apm/config/metrics/{metric_id}".replace(
      "{metric_id}",
      encodeURIComponent(String(metricId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SpansMetricsApi.updateSpansMetric")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SpansMetricUpdateRequest", ""),
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

export class SpansMetricsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createSpansMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSpansMetric(
    response: ResponseContext
  ): Promise<SpansMetricResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SpansMetricResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SpansMetricResponse"
      ) as SpansMetricResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SpansMetricResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SpansMetricResponse",
        ""
      ) as SpansMetricResponse;
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
   * @params response Response returned by the server for a request to deleteSpansMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSpansMetric(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
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
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getSpansMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSpansMetric(
    response: ResponseContext
  ): Promise<SpansMetricResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SpansMetricResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SpansMetricResponse"
      ) as SpansMetricResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SpansMetricResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SpansMetricResponse",
        ""
      ) as SpansMetricResponse;
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
   * @params response Response returned by the server for a request to listSpansMetrics
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSpansMetrics(
    response: ResponseContext
  ): Promise<SpansMetricsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SpansMetricsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SpansMetricsResponse"
      ) as SpansMetricsResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SpansMetricsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SpansMetricsResponse",
        ""
      ) as SpansMetricsResponse;
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
   * @params response Response returned by the server for a request to updateSpansMetric
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSpansMetric(
    response: ResponseContext
  ): Promise<SpansMetricResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SpansMetricResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SpansMetricResponse"
      ) as SpansMetricResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SpansMetricResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SpansMetricResponse",
        ""
      ) as SpansMetricResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface SpansMetricsApiCreateSpansMetricRequest {
  /**
   * The definition of the new span-based metric.
   * @type SpansMetricCreateRequest
   */
  body: SpansMetricCreateRequest;
}

export interface SpansMetricsApiDeleteSpansMetricRequest {
  /**
   * The name of the span-based metric.
   * @type string
   */
  metricId: string;
}

export interface SpansMetricsApiGetSpansMetricRequest {
  /**
   * The name of the span-based metric.
   * @type string
   */
  metricId: string;
}

export interface SpansMetricsApiUpdateSpansMetricRequest {
  /**
   * The name of the span-based metric.
   * @type string
   */
  metricId: string;
  /**
   * New definition of the span-based metric.
   * @type SpansMetricUpdateRequest
   */
  body: SpansMetricUpdateRequest;
}

export class SpansMetricsApi {
  private requestFactory: SpansMetricsApiRequestFactory;
  private responseProcessor: SpansMetricsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: SpansMetricsApiRequestFactory,
    responseProcessor?: SpansMetricsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new SpansMetricsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new SpansMetricsApiResponseProcessor();
  }

  /**
   * Create a metric based on your ingested spans in your organization.
   * Returns the span-based metric object from the request body when the request is successful.
   * @param param The request object
   */
  public createSpansMetric(
    param: SpansMetricsApiCreateSpansMetricRequest,
    options?: Configuration
  ): Promise<SpansMetricResponse> {
    const requestContextPromise = this.requestFactory.createSpansMetric(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSpansMetric(responseContext);
        });
    });
  }

  /**
   * Delete a specific span-based metric from your organization.
   * @param param The request object
   */
  public deleteSpansMetric(
    param: SpansMetricsApiDeleteSpansMetricRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteSpansMetric(
      param.metricId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSpansMetric(responseContext);
        });
    });
  }

  /**
   * Get a specific span-based metric from your organization.
   * @param param The request object
   */
  public getSpansMetric(
    param: SpansMetricsApiGetSpansMetricRequest,
    options?: Configuration
  ): Promise<SpansMetricResponse> {
    const requestContextPromise = this.requestFactory.getSpansMetric(
      param.metricId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSpansMetric(responseContext);
        });
    });
  }

  /**
   * Get the list of configured span-based metrics with their definitions.
   * @param param The request object
   */
  public listSpansMetrics(
    options?: Configuration
  ): Promise<SpansMetricsResponse> {
    const requestContextPromise = this.requestFactory.listSpansMetrics(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSpansMetrics(responseContext);
        });
    });
  }

  /**
   * Update a specific span-based metric from your organization.
   * Returns the span-based metric object from the request body when the request is successful.
   * @param param The request object
   */
  public updateSpansMetric(
    param: SpansMetricsApiUpdateSpansMetricRequest,
    options?: Configuration
  ): Promise<SpansMetricResponse> {
    const requestContextPromise = this.requestFactory.updateSpansMetric(
      param.metricId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSpansMetric(responseContext);
        });
    });
  }
}
