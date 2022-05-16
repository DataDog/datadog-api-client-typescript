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
import { LogsAPIErrorResponse } from "../models/LogsAPIErrorResponse";
import { LogsPipeline } from "../models/LogsPipeline";
import { LogsPipelinesOrder } from "../models/LogsPipelinesOrder";

export class LogsPipelinesApiRequestFactory extends BaseAPIRequestFactory {
  public async createLogsPipeline(
    body: LogsPipeline,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createLogsPipeline."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/logs/config/pipelines";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "LogsPipelinesApi.createLogsPipeline"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LogsPipeline", ""),
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

  public async deleteLogsPipeline(
    pipelineId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pipelineId' is not null or undefined
    if (pipelineId === null || pipelineId === undefined) {
      throw new RequiredError(
        "Required parameter pipelineId was null or undefined when calling deleteLogsPipeline."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/logs/config/pipelines/{pipeline_id}".replace(
      "{" + "pipeline_id" + "}",
      encodeURIComponent(String(pipelineId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "LogsPipelinesApi.deleteLogsPipeline"
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

  public async getLogsPipeline(
    pipelineId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pipelineId' is not null or undefined
    if (pipelineId === null || pipelineId === undefined) {
      throw new RequiredError(
        "Required parameter pipelineId was null or undefined when calling getLogsPipeline."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/logs/config/pipelines/{pipeline_id}".replace(
      "{" + "pipeline_id" + "}",
      encodeURIComponent(String(pipelineId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "LogsPipelinesApi.getLogsPipeline"
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

  public async getLogsPipelineOrder(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/logs/config/pipeline-order";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "LogsPipelinesApi.getLogsPipelineOrder"
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

  public async listLogsPipelines(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/logs/config/pipelines";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "LogsPipelinesApi.listLogsPipelines"
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

  public async updateLogsPipeline(
    pipelineId: string,
    body: LogsPipeline,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pipelineId' is not null or undefined
    if (pipelineId === null || pipelineId === undefined) {
      throw new RequiredError(
        "Required parameter pipelineId was null or undefined when calling updateLogsPipeline."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateLogsPipeline."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/logs/config/pipelines/{pipeline_id}".replace(
      "{" + "pipeline_id" + "}",
      encodeURIComponent(String(pipelineId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "LogsPipelinesApi.updateLogsPipeline"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LogsPipeline", ""),
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

  public async updateLogsPipelineOrder(
    body: LogsPipelinesOrder,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateLogsPipelineOrder."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/logs/config/pipeline-order";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "LogsPipelinesApi.updateLogsPipelineOrder"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LogsPipelinesOrder", ""),
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

export class LogsPipelinesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createLogsPipeline
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLogsPipeline(
    response: ResponseContext
  ): Promise<LogsPipeline> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: LogsPipeline = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsPipeline",
        ""
      ) as LogsPipeline;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: LogsAPIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsAPIErrorResponse",
        ""
      ) as LogsAPIErrorResponse;
      throw new ApiException<LogsAPIErrorResponse>(400, body);
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
      const body: LogsPipeline = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsPipeline",
        ""
      ) as LogsPipeline;
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
   * @params response Response returned by the server for a request to deleteLogsPipeline
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLogsPipeline(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      return;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: LogsAPIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsAPIErrorResponse",
        ""
      ) as LogsAPIErrorResponse;
      throw new ApiException<LogsAPIErrorResponse>(400, body);
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
   * @params response Response returned by the server for a request to getLogsPipeline
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLogsPipeline(
    response: ResponseContext
  ): Promise<LogsPipeline> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: LogsPipeline = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsPipeline",
        ""
      ) as LogsPipeline;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: LogsAPIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsAPIErrorResponse",
        ""
      ) as LogsAPIErrorResponse;
      throw new ApiException<LogsAPIErrorResponse>(400, body);
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
      const body: LogsPipeline = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsPipeline",
        ""
      ) as LogsPipeline;
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
   * @params response Response returned by the server for a request to getLogsPipelineOrder
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLogsPipelineOrder(
    response: ResponseContext
  ): Promise<LogsPipelinesOrder> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: LogsPipelinesOrder = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsPipelinesOrder",
        ""
      ) as LogsPipelinesOrder;
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
      const body: LogsPipelinesOrder = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsPipelinesOrder",
        ""
      ) as LogsPipelinesOrder;
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
   * @params response Response returned by the server for a request to listLogsPipelines
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLogsPipelines(
    response: ResponseContext
  ): Promise<Array<LogsPipeline>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Array<LogsPipeline> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<LogsPipeline>",
        ""
      ) as Array<LogsPipeline>;
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
      const body: Array<LogsPipeline> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<LogsPipeline>",
        ""
      ) as Array<LogsPipeline>;
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
   * @params response Response returned by the server for a request to updateLogsPipeline
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLogsPipeline(
    response: ResponseContext
  ): Promise<LogsPipeline> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: LogsPipeline = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsPipeline",
        ""
      ) as LogsPipeline;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: LogsAPIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsAPIErrorResponse",
        ""
      ) as LogsAPIErrorResponse;
      throw new ApiException<LogsAPIErrorResponse>(400, body);
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
      const body: LogsPipeline = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsPipeline",
        ""
      ) as LogsPipeline;
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
   * @params response Response returned by the server for a request to updateLogsPipelineOrder
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLogsPipelineOrder(
    response: ResponseContext
  ): Promise<LogsPipelinesOrder> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: LogsPipelinesOrder = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsPipelinesOrder",
        ""
      ) as LogsPipelinesOrder;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: LogsAPIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsAPIErrorResponse",
        ""
      ) as LogsAPIErrorResponse;
      throw new ApiException<LogsAPIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("422", response.httpStatusCode)) {
      const body: LogsAPIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsAPIErrorResponse",
        ""
      ) as LogsAPIErrorResponse;
      throw new ApiException<LogsAPIErrorResponse>(422, body);
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
      const body: LogsPipelinesOrder = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsPipelinesOrder",
        ""
      ) as LogsPipelinesOrder;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface LogsPipelinesApiCreateLogsPipelineRequest {
  /**
   * Definition of the new pipeline.
   * @type LogsPipeline
   */
  body: LogsPipeline;
}

export interface LogsPipelinesApiDeleteLogsPipelineRequest {
  /**
   * ID of the pipeline to delete.
   * @type string
   */
  pipelineId: string;
}

export interface LogsPipelinesApiGetLogsPipelineRequest {
  /**
   * ID of the pipeline to get.
   * @type string
   */
  pipelineId: string;
}

export interface LogsPipelinesApiUpdateLogsPipelineRequest {
  /**
   * ID of the pipeline to delete.
   * @type string
   */
  pipelineId: string;
  /**
   * New definition of the pipeline.
   * @type LogsPipeline
   */
  body: LogsPipeline;
}

export interface LogsPipelinesApiUpdateLogsPipelineOrderRequest {
  /**
   * Object containing the new ordered list of pipeline IDs.
   * @type LogsPipelinesOrder
   */
  body: LogsPipelinesOrder;
}

export class LogsPipelinesApi {
  private requestFactory: LogsPipelinesApiRequestFactory;
  private responseProcessor: LogsPipelinesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: LogsPipelinesApiRequestFactory,
    responseProcessor?: LogsPipelinesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new LogsPipelinesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new LogsPipelinesApiResponseProcessor();
  }

  /**
   * Create a pipeline in your organization.
   * @param param The request object
   */
  public createLogsPipeline(
    param: LogsPipelinesApiCreateLogsPipelineRequest,
    options?: Configuration
  ): Promise<LogsPipeline> {
    const requestContextPromise = this.requestFactory.createLogsPipeline(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLogsPipeline(responseContext);
        });
    });
  }

  /**
   * Delete a given pipeline from your organization.
   * This endpoint takes no JSON arguments.
   * @param param The request object
   */
  public deleteLogsPipeline(
    param: LogsPipelinesApiDeleteLogsPipelineRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteLogsPipeline(
      param.pipelineId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLogsPipeline(responseContext);
        });
    });
  }

  /**
   * Get a specific pipeline from your organization.
   * This endpoint takes no JSON arguments.
   * @param param The request object
   */
  public getLogsPipeline(
    param: LogsPipelinesApiGetLogsPipelineRequest,
    options?: Configuration
  ): Promise<LogsPipeline> {
    const requestContextPromise = this.requestFactory.getLogsPipeline(
      param.pipelineId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLogsPipeline(responseContext);
        });
    });
  }

  /**
   * Get the current order of your pipelines.
   * This endpoint takes no JSON arguments.
   * @param param The request object
   */
  public getLogsPipelineOrder(
    options?: Configuration
  ): Promise<LogsPipelinesOrder> {
    const requestContextPromise =
      this.requestFactory.getLogsPipelineOrder(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLogsPipelineOrder(responseContext);
        });
    });
  }

  /**
   * Get all pipelines from your organization.
   * This endpoint takes no JSON arguments.
   * @param param The request object
   */
  public listLogsPipelines(
    options?: Configuration
  ): Promise<Array<LogsPipeline>> {
    const requestContextPromise =
      this.requestFactory.listLogsPipelines(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLogsPipelines(responseContext);
        });
    });
  }

  /**
   * Update a given pipeline configuration to change it’s processors or their order.
   *
   * **Note**: Using this method updates your pipeline configuration by **replacing**
   * your current configuration with the new one sent to your Datadog organization.
   * @param param The request object
   */
  public updateLogsPipeline(
    param: LogsPipelinesApiUpdateLogsPipelineRequest,
    options?: Configuration
  ): Promise<LogsPipeline> {
    const requestContextPromise = this.requestFactory.updateLogsPipeline(
      param.pipelineId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLogsPipeline(responseContext);
        });
    });
  }

  /**
   * Update the order of your pipelines. Since logs are processed sequentially, reordering a pipeline may change
   * the structure and content of the data processed by other pipelines and their processors.
   *
   * **Note**: Using the `PUT` method updates your pipeline order by replacing your current order
   * with the new one sent to your Datadog organization.
   * @param param The request object
   */
  public updateLogsPipelineOrder(
    param: LogsPipelinesApiUpdateLogsPipelineOrderRequest,
    options?: Configuration
  ): Promise<LogsPipelinesOrder> {
    const requestContextPromise = this.requestFactory.updateLogsPipelineOrder(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLogsPipelineOrder(
            responseContext
          );
        });
    });
  }
}
