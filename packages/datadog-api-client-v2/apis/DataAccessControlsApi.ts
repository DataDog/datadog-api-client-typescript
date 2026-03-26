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
import { DatasetCreateRequest } from "../models/DatasetCreateRequest";
import { DatasetResponseMulti } from "../models/DatasetResponseMulti";
import { DatasetResponseSingle } from "../models/DatasetResponseSingle";
import { DatasetUpdateRequest } from "../models/DatasetUpdateRequest";

export class DataAccessControlsApiRequestFactory extends BaseAPIRequestFactory {
  public async createDataset(
    body: DatasetCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDataset");
    }

    // Path Params
    const localVarPath = "/api/v2/datasets";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DataAccessControlsApi.createDataset")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DatasetCreateRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "deleteDataset");
    }

    // Path Params
    const localVarPath = "/api/v2/datasets/{dataset_id}".replace(
      "{dataset_id}",
      encodeURIComponent(String(datasetId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DataAccessControlsApi.deleteDataset")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getAllDatasets(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/datasets";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DataAccessControlsApi.getAllDatasets")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "getDataset");
    }

    // Path Params
    const localVarPath = "/api/v2/datasets/{dataset_id}".replace(
      "{dataset_id}",
      encodeURIComponent(String(datasetId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DataAccessControlsApi.getDataset")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
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
      encodeURIComponent(String(datasetId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DataAccessControlsApi.updateDataset")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DatasetUpdateRequest", ""),
      contentType
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
    response: ResponseContext
  ): Promise<DatasetResponseSingle> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DatasetResponseSingle = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DatasetResponseSingle"
      ) as DatasetResponseSingle;
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
      const body: DatasetResponseSingle = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DatasetResponseSingle",
        ""
      ) as DatasetResponseSingle;
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
   * @params response Response returned by the server for a request to deleteDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteDataset(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to getAllDatasets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAllDatasets(
    response: ResponseContext
  ): Promise<DatasetResponseMulti> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DatasetResponseMulti = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DatasetResponseMulti"
      ) as DatasetResponseMulti;
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
      const body: DatasetResponseMulti = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DatasetResponseMulti",
        ""
      ) as DatasetResponseMulti;
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
   * @params response Response returned by the server for a request to getDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDataset(
    response: ResponseContext
  ): Promise<DatasetResponseSingle> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DatasetResponseSingle = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DatasetResponseSingle"
      ) as DatasetResponseSingle;
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
      const body: DatasetResponseSingle = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DatasetResponseSingle",
        ""
      ) as DatasetResponseSingle;
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
   * @params response Response returned by the server for a request to updateDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDataset(
    response: ResponseContext
  ): Promise<DatasetResponseSingle> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DatasetResponseSingle = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DatasetResponseSingle"
      ) as DatasetResponseSingle;
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
      const body: DatasetResponseSingle = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DatasetResponseSingle",
        ""
      ) as DatasetResponseSingle;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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

  public constructor(
    configuration: Configuration,
    requestFactory?: DataAccessControlsApiRequestFactory,
    responseProcessor?: DataAccessControlsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new DataAccessControlsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new DataAccessControlsApiResponseProcessor();
  }

  /**
   * Create a dataset with the configurations in the request.
   * @param param The request object
   */
  public createDataset(
    param: DataAccessControlsApiCreateDatasetRequest,
    options?: Configuration
  ): Promise<DatasetResponseSingle> {
    const requestContextPromise = this.requestFactory.createDataset(
      param.body,
      options
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteDataset(
      param.datasetId,
      options
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
    options?: Configuration
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
    options?: Configuration
  ): Promise<DatasetResponseSingle> {
    const requestContextPromise = this.requestFactory.getDataset(
      param.datasetId,
      options
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
    options?: Configuration
  ): Promise<DatasetResponseSingle> {
    const requestContextPromise = this.requestFactory.updateDataset(
      param.datasetId,
      param.body,
      options
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
