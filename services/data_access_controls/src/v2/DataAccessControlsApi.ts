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
import { DatasetCreateRequest } from "./models/DatasetCreateRequest";
import { DatasetResponseMulti } from "./models/DatasetResponseMulti";
import { DatasetResponseSingle } from "./models/DatasetResponseSingle";
import { DatasetUpdateRequest } from "./models/DatasetUpdateRequest";
import { version } from "../version";

export class DataAccessControlsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("data-access-controls", version);
    }
  }
  public async createDataset(
    body: DatasetCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDataset");
    }

    // Path Params
    const localVarPath = "/api/v2/datasets";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DataAccessControlsApi.v2.createDataset",
      DataAccessControlsApi.operationServers,
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
      serialize(body, TypingInfo, "DatasetCreateRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteDataset(
    datasetId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "deleteDataset");
    }

    // Path Params
    const localVarPath = "/api/v2/datasets/{dataset_id}".replace(
      "{dataset_id}",
      encodeURIComponent(String(datasetId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DataAccessControlsApi.v2.deleteDataset",
      DataAccessControlsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getAllDatasets(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/datasets";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DataAccessControlsApi.v2.getAllDatasets",
      DataAccessControlsApi.operationServers,
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

  public async getDataset(
    datasetId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "getDataset");
    }

    // Path Params
    const localVarPath = "/api/v2/datasets/{dataset_id}".replace(
      "{dataset_id}",
      encodeURIComponent(String(datasetId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DataAccessControlsApi.v2.getDataset",
      DataAccessControlsApi.operationServers,
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

  public async updateDataset(
    datasetId: string,
    body: DatasetUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "updateDataset");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateDataset");
    }

    // Path Params
    const localVarPath = "/api/v2/datasets/{dataset_id}".replace(
      "{dataset_id}",
      encodeURIComponent(String(datasetId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DataAccessControlsApi.v2.updateDataset",
      DataAccessControlsApi.operationServers,
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
      serialize(body, TypingInfo, "DatasetUpdateRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class DataAccessControlsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDataset(
    response: ResponseContext,
  ): Promise<DatasetResponseSingle> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DatasetResponseSingle = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DatasetResponseSingle",
      ) as DatasetResponseSingle;
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
      const body: DatasetResponseSingle = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DatasetResponseSingle",
        "",
      ) as DatasetResponseSingle;
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
   * @params response Response returned by the server for a request to deleteDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteDataset(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to getAllDatasets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAllDatasets(
    response: ResponseContext,
  ): Promise<DatasetResponseMulti> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DatasetResponseMulti = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DatasetResponseMulti",
      ) as DatasetResponseMulti;
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
      const body: DatasetResponseMulti = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DatasetResponseMulti",
        "",
      ) as DatasetResponseMulti;
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
   * @params response Response returned by the server for a request to getDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDataset(
    response: ResponseContext,
  ): Promise<DatasetResponseSingle> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DatasetResponseSingle = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DatasetResponseSingle",
      ) as DatasetResponseSingle;
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
      const body: DatasetResponseSingle = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DatasetResponseSingle",
        "",
      ) as DatasetResponseSingle;
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
   * @params response Response returned by the server for a request to updateDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDataset(
    response: ResponseContext,
  ): Promise<DatasetResponseSingle> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DatasetResponseSingle = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DatasetResponseSingle",
      ) as DatasetResponseSingle;
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
      const body: DatasetResponseSingle = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DatasetResponseSingle",
        "",
      ) as DatasetResponseSingle;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface DataAccessControlsApiCreateDatasetRequest {
  /**
   * Dataset payload
   * @type DatasetCreateRequest
   */
  body: DatasetCreateRequest;
}

export interface DataAccessControlsApiDeleteDatasetRequest {
  /**
   * The ID of a defined dataset.
   * @type string
   */
  datasetId: string;
}

export interface DataAccessControlsApiGetDatasetRequest {
  /**
   * The ID of a defined dataset.
   * @type string
   */
  datasetId: string;
}

export interface DataAccessControlsApiUpdateDatasetRequest {
  /**
   * The ID of a defined dataset.
   * @type string
   */
  datasetId: string;
  /**
   * Dataset payload
   * @type DatasetUpdateRequest
   */
  body: DatasetUpdateRequest;
}

export class DataAccessControlsApi {
  private requestFactory: DataAccessControlsApiRequestFactory;
  private responseProcessor: DataAccessControlsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: DataAccessControlsApiRequestFactory,
    responseProcessor?: DataAccessControlsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new DataAccessControlsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new DataAccessControlsApiResponseProcessor();
  }

  /**
   * Create a dataset with the configurations in the request.
   * @param param The request object
   */
  public createDataset(
    param: DataAccessControlsApiCreateDatasetRequest,
    options?: Configuration,
  ): Promise<DatasetResponseSingle> {
    const requestContextPromise = this.requestFactory.createDataset(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDataset(responseContext);
        });
    });
  }

  /**
   * Deletes the dataset associated with the ID.
   * @param param The request object
   */
  public deleteDataset(
    param: DataAccessControlsApiDeleteDatasetRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteDataset(
      param.datasetId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteDataset(responseContext);
        });
    });
  }

  /**
   * Get all datasets that have been configured for an organization.
   * @param param The request object
   */
  public getAllDatasets(
    options?: Configuration,
  ): Promise<DatasetResponseMulti> {
    const requestContextPromise = this.requestFactory.getAllDatasets(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAllDatasets(responseContext);
        });
    });
  }

  /**
   * Retrieves the dataset associated with the ID.
   * @param param The request object
   */
  public getDataset(
    param: DataAccessControlsApiGetDatasetRequest,
    options?: Configuration,
  ): Promise<DatasetResponseSingle> {
    const requestContextPromise = this.requestFactory.getDataset(
      param.datasetId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDataset(responseContext);
        });
    });
  }

  /**
   * Edits the dataset associated with the ID.
   * @param param The request object
   */
  public updateDataset(
    param: DataAccessControlsApiUpdateDatasetRequest,
    options?: Configuration,
  ): Promise<DatasetResponseSingle> {
    const requestContextPromise = this.requestFactory.updateDataset(
      param.datasetId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDataset(responseContext);
        });
    });
  }
}
