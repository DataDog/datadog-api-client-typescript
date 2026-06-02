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

import { AggregatedLongTasksRequest } from "../models/AggregatedLongTasksRequest";
import { AggregatedLongTasksResponse } from "../models/AggregatedLongTasksResponse";
import { AggregatedSignalsProblemsRequest } from "../models/AggregatedSignalsProblemsRequest";
import { AggregatedSignalsProblemsResponse } from "../models/AggregatedSignalsProblemsResponse";
import { AggregatedWaterfallRequest } from "../models/AggregatedWaterfallRequest";
import { AggregatedWaterfallResponse } from "../models/AggregatedWaterfallResponse";
import { APIErrorResponse } from "../models/APIErrorResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class RUMInsightsApiRequestFactory extends BaseAPIRequestFactory {
  public async queryAggregatedLongTasks(
    body: AggregatedLongTasksRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'queryAggregatedLongTasks'");
    if (!_config.unstableOperations["v2.queryAggregatedLongTasks"]) {
      throw new Error(
        "Unstable operation 'queryAggregatedLongTasks' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryAggregatedLongTasks");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/query/insight/aggregated_long_tasks";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMInsightsApi.queryAggregatedLongTasks")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AggregatedLongTasksRequest", ""),
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

  public async queryAggregatedSignalsProblems(
    body: AggregatedSignalsProblemsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'queryAggregatedSignalsProblems'");
    if (!_config.unstableOperations["v2.queryAggregatedSignalsProblems"]) {
      throw new Error(
        "Unstable operation 'queryAggregatedSignalsProblems' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryAggregatedSignalsProblems");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/query/insight/aggregated_signals_problems";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMInsightsApi.queryAggregatedSignalsProblems")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AggregatedSignalsProblemsRequest", ""),
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

  public async queryAggregatedWaterfall(
    body: AggregatedWaterfallRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'queryAggregatedWaterfall'");
    if (!_config.unstableOperations["v2.queryAggregatedWaterfall"]) {
      throw new Error(
        "Unstable operation 'queryAggregatedWaterfall' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryAggregatedWaterfall");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/query/insight/aggregated_waterfall";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMInsightsApi.queryAggregatedWaterfall")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AggregatedWaterfallRequest", ""),
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

export class RUMInsightsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to queryAggregatedLongTasks
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryAggregatedLongTasks(
    response: ResponseContext
  ): Promise<AggregatedLongTasksResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AggregatedLongTasksResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AggregatedLongTasksResponse"
      ) as AggregatedLongTasksResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 401) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: AggregatedLongTasksResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AggregatedLongTasksResponse",
        ""
      ) as AggregatedLongTasksResponse;
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
   * @params response Response returned by the server for a request to queryAggregatedSignalsProblems
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryAggregatedSignalsProblems(
    response: ResponseContext
  ): Promise<AggregatedSignalsProblemsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AggregatedSignalsProblemsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AggregatedSignalsProblemsResponse"
        ) as AggregatedSignalsProblemsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 401) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: AggregatedSignalsProblemsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AggregatedSignalsProblemsResponse",
          ""
        ) as AggregatedSignalsProblemsResponse;
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
   * @params response Response returned by the server for a request to queryAggregatedWaterfall
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryAggregatedWaterfall(
    response: ResponseContext
  ): Promise<AggregatedWaterfallResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AggregatedWaterfallResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AggregatedWaterfallResponse"
      ) as AggregatedWaterfallResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 401) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: AggregatedWaterfallResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AggregatedWaterfallResponse",
        ""
      ) as AggregatedWaterfallResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface RUMInsightsApiQueryAggregatedLongTasksRequest {
  /**
   * @type AggregatedLongTasksRequest
   */
  body: AggregatedLongTasksRequest;
}

export interface RUMInsightsApiQueryAggregatedSignalsProblemsRequest {
  /**
   * @type AggregatedSignalsProblemsRequest
   */
  body: AggregatedSignalsProblemsRequest;
}

export interface RUMInsightsApiQueryAggregatedWaterfallRequest {
  /**
   * @type AggregatedWaterfallRequest
   */
  body: AggregatedWaterfallRequest;
}

export class RUMInsightsApi {
  private requestFactory: RUMInsightsApiRequestFactory;
  private responseProcessor: RUMInsightsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: RUMInsightsApiRequestFactory,
    responseProcessor?: RUMInsightsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new RUMInsightsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new RUMInsightsApiResponseProcessor();
  }

  /**
   * Get aggregated long task data for a RUM view, grouped by invoker type and sampled across multiple view instances.
   * @param param The request object
   */
  public queryAggregatedLongTasks(
    param: RUMInsightsApiQueryAggregatedLongTasksRequest,
    options?: Configuration
  ): Promise<AggregatedLongTasksResponse> {
    const requestContextPromise = this.requestFactory.queryAggregatedLongTasks(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryAggregatedLongTasks(
            responseContext
          );
        });
    });
  }

  /**
   * Get aggregated performance signals and problem detections for a RUM view, sampled across multiple view instances.
   * @param param The request object
   */
  public queryAggregatedSignalsProblems(
    param: RUMInsightsApiQueryAggregatedSignalsProblemsRequest,
    options?: Configuration
  ): Promise<AggregatedSignalsProblemsResponse> {
    const requestContextPromise =
      this.requestFactory.queryAggregatedSignalsProblems(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryAggregatedSignalsProblems(
            responseContext
          );
        });
    });
  }

  /**
   * Get aggregated network resource waterfall data for a RUM view, sampled across multiple view instances.
   * @param param The request object
   */
  public queryAggregatedWaterfall(
    param: RUMInsightsApiQueryAggregatedWaterfallRequest,
    options?: Configuration
  ): Promise<AggregatedWaterfallResponse> {
    const requestContextPromise = this.requestFactory.queryAggregatedWaterfall(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryAggregatedWaterfall(
            responseContext
          );
        });
    });
  }
}
