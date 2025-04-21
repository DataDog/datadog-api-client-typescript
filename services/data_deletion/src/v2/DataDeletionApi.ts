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
import { CancelDataDeletionResponseBody } from "./models/CancelDataDeletionResponseBody";
import { CreateDataDeletionRequestBody } from "./models/CreateDataDeletionRequestBody";
import { CreateDataDeletionResponseBody } from "./models/CreateDataDeletionResponseBody";
import { GetDataDeletionsResponseBody } from "./models/GetDataDeletionsResponseBody";

export class DataDeletionApiRequestFactory extends BaseAPIRequestFactory {
  public async cancelDataDeletionRequest(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'cancelDataDeletionRequest'");
    if (!_config.unstableOperations["v2.cancelDataDeletionRequest"]) {
      throw new Error(
        "Unstable operation 'cancelDataDeletionRequest' is disabled",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "cancelDataDeletionRequest");
    }

    // Path Params
    const localVarPath = "/api/v2/deletion/requests/{id}/cancel".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DataDeletionApi.cancelDataDeletionRequest")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createDataDeletionRequest(
    product: string,
    body: CreateDataDeletionRequestBody,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createDataDeletionRequest'");
    if (!_config.unstableOperations["v2.createDataDeletionRequest"]) {
      throw new Error(
        "Unstable operation 'createDataDeletionRequest' is disabled",
      );
    }

    // verify required parameter 'product' is not null or undefined
    if (product === null || product === undefined) {
      throw new RequiredError("product", "createDataDeletionRequest");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDataDeletionRequest");
    }

    // Path Params
    const localVarPath = "/api/v2/deletion/data/{product}".replace(
      "{product}",
      encodeURIComponent(String(product)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DataDeletionApi.createDataDeletionRequest")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CreateDataDeletionRequestBody", ""),
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

  public async getDataDeletionRequests(
    nextPage?: string,
    product?: string,
    query?: string,
    status?: string,
    pageSize?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getDataDeletionRequests'");
    if (!_config.unstableOperations["v2.getDataDeletionRequests"]) {
      throw new Error(
        "Unstable operation 'getDataDeletionRequests' is disabled",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/deletion/requests";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DataDeletionApi.getDataDeletionRequests")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (nextPage !== undefined) {
      requestContext.setQueryParam(
        "next_page",
        serialize(nextPage, TypingInfo, "string", ""),
        "",
      );
    }
    if (product !== undefined) {
      requestContext.setQueryParam(
        "product",
        serialize(product, TypingInfo, "string", ""),
        "",
      );
    }
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        serialize(query, TypingInfo, "string", ""),
        "",
      );
    }
    if (status !== undefined) {
      requestContext.setQueryParam(
        "status",
        serialize(status, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page_size",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class DataDeletionApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to cancelDataDeletionRequest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cancelDataDeletionRequest(
    response: ResponseContext,
  ): Promise<CancelDataDeletionResponseBody> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CancelDataDeletionResponseBody = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CancelDataDeletionResponseBody",
      ) as CancelDataDeletionResponseBody;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 412 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 500
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
      const body: CancelDataDeletionResponseBody = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CancelDataDeletionResponseBody",
        "",
      ) as CancelDataDeletionResponseBody;
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
   * @params response Response returned by the server for a request to createDataDeletionRequest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDataDeletionRequest(
    response: ResponseContext,
  ): Promise<CreateDataDeletionResponseBody> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CreateDataDeletionResponseBody = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateDataDeletionResponseBody",
      ) as CreateDataDeletionResponseBody;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 412 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 500
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
      const body: CreateDataDeletionResponseBody = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateDataDeletionResponseBody",
        "",
      ) as CreateDataDeletionResponseBody;
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
   * @params response Response returned by the server for a request to getDataDeletionRequests
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDataDeletionRequests(
    response: ResponseContext,
  ): Promise<GetDataDeletionsResponseBody> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetDataDeletionsResponseBody = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetDataDeletionsResponseBody",
      ) as GetDataDeletionsResponseBody;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 500
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
      const body: GetDataDeletionsResponseBody = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetDataDeletionsResponseBody",
        "",
      ) as GetDataDeletionsResponseBody;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface DataDeletionApiCancelDataDeletionRequestRequest {
  /**
   * ID of the deletion request.
   * @type string
   */
  id: string;
}

export interface DataDeletionApiCreateDataDeletionRequestRequest {
  /**
   * Name of the product to be deleted, either `logs` or `rum`.
   * @type string
   */
  product: string;
  /**
   * @type CreateDataDeletionRequestBody
   */
  body: CreateDataDeletionRequestBody;
}

export interface DataDeletionApiGetDataDeletionRequestsRequest {
  /**
   * The next page of the previous search. If the next_page parameter is included, the rest of the query elements are ignored.
   * @type string
   */
  nextPage?: string;
  /**
   * Retrieve only the requests related to the given product.
   * @type string
   */
  product?: string;
  /**
   * Retrieve only the requests that matches the given query.
   * @type string
   */
  query?: string;
  /**
   * Retrieve only the requests with the given status.
   * @type string
   */
  status?: string;
  /**
   * Sets the page size of the search.
   * @type number
   */
  pageSize?: number;
}

export class DataDeletionApi {
  private requestFactory: DataDeletionApiRequestFactory;
  private responseProcessor: DataDeletionApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: DataDeletionApiRequestFactory,
    responseProcessor?: DataDeletionApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new DataDeletionApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new DataDeletionApiResponseProcessor();
  }

  /**
   * Cancels a data deletion request by providing its ID.
   * @param param The request object
   */
  public cancelDataDeletionRequest(
    param: DataDeletionApiCancelDataDeletionRequestRequest,
    options?: Configuration,
  ): Promise<CancelDataDeletionResponseBody> {
    const requestContextPromise = this.requestFactory.cancelDataDeletionRequest(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.cancelDataDeletionRequest(
            responseContext,
          );
        });
    });
  }

  /**
   * Creates a data deletion request by providing a query and a timeframe targeting the proper data.
   * @param param The request object
   */
  public createDataDeletionRequest(
    param: DataDeletionApiCreateDataDeletionRequestRequest,
    options?: Configuration,
  ): Promise<CreateDataDeletionResponseBody> {
    const requestContextPromise = this.requestFactory.createDataDeletionRequest(
      param.product,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDataDeletionRequest(
            responseContext,
          );
        });
    });
  }

  /**
   * Gets a list of data deletion requests based on several filter parameters.
   * @param param The request object
   */
  public getDataDeletionRequests(
    param: DataDeletionApiGetDataDeletionRequestsRequest = {},
    options?: Configuration,
  ): Promise<GetDataDeletionsResponseBody> {
    const requestContextPromise = this.requestFactory.getDataDeletionRequests(
      param.nextPage,
      param.product,
      param.query,
      param.status,
      param.pageSize,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDataDeletionRequests(
            responseContext,
          );
        });
    });
  }
}
