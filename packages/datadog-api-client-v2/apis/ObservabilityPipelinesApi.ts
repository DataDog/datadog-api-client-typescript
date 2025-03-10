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
import { Pipeline } from "../models/Pipeline";

export class ObservabilityPipelinesApiRequestFactory extends BaseAPIRequestFactory {
  public async createPipeline(
    body: Pipeline,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createPipeline");
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/obs_pipelines/pipelines";

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
      ObjectSerializer.serialize(body, "Pipeline", ""),
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/obs_pipelines/pipelines";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ObservabilityPipelinesApi.listPipelines")
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

  public async updatePipeline(
    pipelineId: string,
    body: Pipeline,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

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
      ObjectSerializer.serialize(body, "Pipeline", ""),
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
  public async createPipeline(response: ResponseContext): Promise<Pipeline> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: Pipeline = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Pipeline"
      ) as Pipeline;
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
      const body: Pipeline = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Pipeline",
        ""
      ) as Pipeline;
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
   * @params response Response returned by the server for a request to getPipeline
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPipeline(response: ResponseContext): Promise<Pipeline> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Pipeline = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Pipeline"
      ) as Pipeline;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
      const body: Pipeline = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Pipeline",
        ""
      ) as Pipeline;
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
  ): Promise<Array<Pipeline>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Array<Pipeline> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<Pipeline>"
      ) as Array<Pipeline>;
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
      const body: Array<Pipeline> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<Pipeline>",
        ""
      ) as Array<Pipeline>;
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
  public async updatePipeline(response: ResponseContext): Promise<Pipeline> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Pipeline = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Pipeline"
      ) as Pipeline;
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
      const body: Pipeline = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Pipeline",
        ""
      ) as Pipeline;
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
   * @type Pipeline
   */
  body: Pipeline;
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

export interface ObservabilityPipelinesApiUpdatePipelineRequest {
  /**
   * The ID of the pipeline to update.
   * @type string
   */
  pipelineId: string;
  /**
   * @type Pipeline
   */
  body: Pipeline;
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
   * Creates a new observability pipeline.
   * @param param The request object
   */
  public createPipeline(
    param: ObservabilityPipelinesApiCreatePipelineRequest,
    options?: Configuration
  ): Promise<Pipeline> {
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
   * Deletes a specific observability pipeline.
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
   * Retrieves a specific observability pipeline.
   * @param param The request object
   */
  public getPipeline(
    param: ObservabilityPipelinesApiGetPipelineRequest,
    options?: Configuration
  ): Promise<Pipeline> {
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
   * Retrieves a list of all configured observability pipelines.
   * @param param The request object
   */
  public listPipelines(options?: Configuration): Promise<Array<Pipeline>> {
    const requestContextPromise = this.requestFactory.listPipelines(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listPipelines(responseContext);
        });
    });
  }

  /**
   * Updates a specific observability pipeline.
   * @param param The request object
   */
  public updatePipeline(
    param: ObservabilityPipelinesApiUpdatePipelineRequest,
    options?: Configuration
  ): Promise<Pipeline> {
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
}
