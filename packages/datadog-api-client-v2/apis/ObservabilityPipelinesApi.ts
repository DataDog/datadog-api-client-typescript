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
import { ListPipelinesResponse } from "../models/ListPipelinesResponse";
import { ObservabilityPipeline } from "../models/ObservabilityPipeline";
import { ObservabilityPipelineSpec } from "../models/ObservabilityPipelineSpec";
import { ValidationResponse } from "../models/ValidationResponse";

export class ObservabilityPipelinesApiRequestFactory extends BaseAPIRequestFactory {
  public async createPipeline(
    body: ObservabilityPipelineSpec,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createPipeline'");
    if (!_config.unstableOperations["v2.createPipeline"]) {
      throw new Error("Unstable operation 'createPipeline' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createPipeline");
    }

    // Path Params
    const localVarPath = "/api/v2/obs-pipelines/pipelines";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ObservabilityPipelinesApi.createPipeline")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ObservabilityPipelineSpec", ""),
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

  public async deletePipeline(
    pipelineId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deletePipeline'");
    if (!_config.unstableOperations["v2.deletePipeline"]) {
      throw new Error("Unstable operation 'deletePipeline' is disabled");
    }

    // verify required parameter 'pipelineId' is not null or undefined
    if (pipelineId === null || pipelineId === undefined) {
      throw new RequiredError("pipelineId", "deletePipeline");
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/obs_pipelines/pipelines/{pipeline_id}".replace(
        "{pipeline_id}",
        encodeURIComponent(String(pipelineId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ObservabilityPipelinesApi.deletePipeline")
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

  public async getPipeline(
    pipelineId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getPipeline'");
    if (!_config.unstableOperations["v2.getPipeline"]) {
      throw new Error("Unstable operation 'getPipeline' is disabled");
    }

    // verify required parameter 'pipelineId' is not null or undefined
    if (pipelineId === null || pipelineId === undefined) {
      throw new RequiredError("pipelineId", "getPipeline");
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/obs_pipelines/pipelines/{pipeline_id}".replace(
        "{pipeline_id}",
        encodeURIComponent(String(pipelineId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ObservabilityPipelinesApi.getPipeline")
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

  public async listPipelines(
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listPipelines'");
    if (!_config.unstableOperations["v2.listPipelines"]) {
      throw new Error("Unstable operation 'listPipelines' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/obs-pipelines/pipelines";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ObservabilityPipelinesApi.listPipelines")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
        ""
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64"),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updatePipeline(
    pipelineId: string,
    body: ObservabilityPipeline,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updatePipeline'");
    if (!_config.unstableOperations["v2.updatePipeline"]) {
      throw new Error("Unstable operation 'updatePipeline' is disabled");
    }

    // verify required parameter 'pipelineId' is not null or undefined
    if (pipelineId === null || pipelineId === undefined) {
      throw new RequiredError("pipelineId", "updatePipeline");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updatePipeline");
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/obs_pipelines/pipelines/{pipeline_id}".replace(
        "{pipeline_id}",
        encodeURIComponent(String(pipelineId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ObservabilityPipelinesApi.updatePipeline")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ObservabilityPipeline", ""),
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

  public async validatePipeline(
    body: ObservabilityPipelineSpec,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'validatePipeline'");
    if (!_config.unstableOperations["v2.validatePipeline"]) {
      throw new Error("Unstable operation 'validatePipeline' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "validatePipeline");
    }

    // Path Params
    const localVarPath = "/api/v2/obs-pipelines/pipelines/validate";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ObservabilityPipelinesApi.validatePipeline")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ObservabilityPipelineSpec", ""),
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

export class ObservabilityPipelinesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createPipeline
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createPipeline(
    response: ResponseContext
  ): Promise<ObservabilityPipeline> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: ObservabilityPipeline = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ObservabilityPipeline"
      ) as ObservabilityPipeline;
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
      const body: ObservabilityPipeline = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ObservabilityPipeline",
        ""
      ) as ObservabilityPipeline;
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
   * @params response Response returned by the server for a request to deletePipeline
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deletePipeline(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
   * @params response Response returned by the server for a request to getPipeline
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPipeline(
    response: ResponseContext
  ): Promise<ObservabilityPipeline> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ObservabilityPipeline = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ObservabilityPipeline"
      ) as ObservabilityPipeline;
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
      const body: ObservabilityPipeline = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ObservabilityPipeline",
        ""
      ) as ObservabilityPipeline;
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
   * @params response Response returned by the server for a request to listPipelines
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listPipelines(
    response: ResponseContext
  ): Promise<ListPipelinesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListPipelinesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListPipelinesResponse"
      ) as ListPipelinesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: ListPipelinesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListPipelinesResponse",
        ""
      ) as ListPipelinesResponse;
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
   * @params response Response returned by the server for a request to updatePipeline
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updatePipeline(
    response: ResponseContext
  ): Promise<ObservabilityPipeline> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ObservabilityPipeline = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ObservabilityPipeline"
      ) as ObservabilityPipeline;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: ObservabilityPipeline = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ObservabilityPipeline",
        ""
      ) as ObservabilityPipeline;
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
   * @params response Response returned by the server for a request to validatePipeline
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validatePipeline(
    response: ResponseContext
  ): Promise<ValidationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ValidationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ValidationResponse"
      ) as ValidationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: ValidationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ValidationResponse",
        ""
      ) as ValidationResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ObservabilityPipelinesApiCreatePipelineRequest {
  /**
   * @type ObservabilityPipelineSpec
   */
  body: ObservabilityPipelineSpec;
}

export interface ObservabilityPipelinesApiDeletePipelineRequest {
  /**
   * The ID of the pipeline to delete.
   * @type string
   */
  pipelineId: string;
}

export interface ObservabilityPipelinesApiGetPipelineRequest {
  /**
   * The ID of the pipeline to retrieve.
   * @type string
   */
  pipelineId: string;
}

export interface ObservabilityPipelinesApiListPipelinesRequest {
  /**
   * Size for a given page. The maximum allowed value is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific page number to return.
   * @type number
   */
  pageNumber?: number;
}

export interface ObservabilityPipelinesApiUpdatePipelineRequest {
  /**
   * The ID of the pipeline to update.
   * @type string
   */
  pipelineId: string;
  /**
   * @type ObservabilityPipeline
   */
  body: ObservabilityPipeline;
}

export interface ObservabilityPipelinesApiValidatePipelineRequest {
  /**
   * @type ObservabilityPipelineSpec
   */
  body: ObservabilityPipelineSpec;
}

export class ObservabilityPipelinesApi {
  private requestFactory: ObservabilityPipelinesApiRequestFactory;
  private responseProcessor: ObservabilityPipelinesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ObservabilityPipelinesApiRequestFactory,
    responseProcessor?: ObservabilityPipelinesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new ObservabilityPipelinesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ObservabilityPipelinesApiResponseProcessor();
  }

  /**
   * Create a new pipeline.
   * @param param The request object
   */
  public createPipeline(
    param: ObservabilityPipelinesApiCreatePipelineRequest,
    options?: Configuration
  ): Promise<ObservabilityPipeline> {
    const requestContextPromise = this.requestFactory.createPipeline(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createPipeline(responseContext);
        });
    });
  }

  /**
   * Delete a pipeline.
   * @param param The request object
   */
  public deletePipeline(
    param: ObservabilityPipelinesApiDeletePipelineRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deletePipeline(
      param.pipelineId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deletePipeline(responseContext);
        });
    });
  }

  /**
   * Get a specific pipeline by its ID.
   * @param param The request object
   */
  public getPipeline(
    param: ObservabilityPipelinesApiGetPipelineRequest,
    options?: Configuration
  ): Promise<ObservabilityPipeline> {
    const requestContextPromise = this.requestFactory.getPipeline(
      param.pipelineId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getPipeline(responseContext);
        });
    });
  }

  /**
   * Retrieve a list of pipelines.
   * @param param The request object
   */
  public listPipelines(
    param: ObservabilityPipelinesApiListPipelinesRequest = {},
    options?: Configuration
  ): Promise<ListPipelinesResponse> {
    const requestContextPromise = this.requestFactory.listPipelines(
      param.pageSize,
      param.pageNumber,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listPipelines(responseContext);
        });
    });
  }

  /**
   * Update a pipeline.
   * @param param The request object
   */
  public updatePipeline(
    param: ObservabilityPipelinesApiUpdatePipelineRequest,
    options?: Configuration
  ): Promise<ObservabilityPipeline> {
    const requestContextPromise = this.requestFactory.updatePipeline(
      param.pipelineId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updatePipeline(responseContext);
        });
    });
  }

  /**
   * Validates a pipeline configuration without creating or updating any resources.
   * Returns a list of validation errors, if any.
   * @param param The request object
   */
  public validatePipeline(
    param: ObservabilityPipelinesApiValidatePipelineRequest,
    options?: Configuration
  ): Promise<ValidationResponse> {
    const requestContextPromise = this.requestFactory.validatePipeline(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validatePipeline(responseContext);
        });
    });
  }
}
