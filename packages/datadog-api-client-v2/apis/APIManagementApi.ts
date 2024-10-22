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
  HttpFile,
} from "../../datadog-api-client-common/http/http";

import FormData from "form-data";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { CreateOpenAPIResponse } from "../models/CreateOpenAPIResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { ListAPIsResponse } from "../models/ListAPIsResponse";
import { UpdateOpenAPIResponse } from "../models/UpdateOpenAPIResponse";

export class APIManagementApiRequestFactory extends BaseAPIRequestFactory {
  public async createOpenAPI(
    openapiSpecFile?: HttpFile,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createOpenAPI'");
    if (!_config.unstableOperations["v2.createOpenAPI"]) {
      throw new Error("Unstable operation 'createOpenAPI' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/apicatalog/openapi";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.APIManagementApi.createOpenAPI")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Form Params
    const localVarFormParams = new FormData();
    if (openapiSpecFile !== undefined) {
      // TODO: replace .append with .set
      localVarFormParams.append(
        "openapi_spec_file",
        openapiSpecFile.data,
        openapiSpecFile.name
      );
    }
    requestContext.setBody(localVarFormParams);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteOpenAPI(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteOpenAPI'");
    if (!_config.unstableOperations["v2.deleteOpenAPI"]) {
      throw new Error("Unstable operation 'deleteOpenAPI' is disabled");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteOpenAPI");
    }

    // Path Params
    const localVarPath = "/api/v2/apicatalog/api/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.APIManagementApi.deleteOpenAPI")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getOpenAPI(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getOpenAPI'");
    if (!_config.unstableOperations["v2.getOpenAPI"]) {
      throw new Error("Unstable operation 'getOpenAPI' is disabled");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getOpenAPI");
    }

    // Path Params
    const localVarPath = "/api/v2/apicatalog/api/{id}/openapi".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.APIManagementApi.getOpenAPI")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "multipart/form-data, application/json"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listAPIs(
    query?: string,
    pageLimit?: number,
    pageOffset?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAPIs'");
    if (!_config.unstableOperations["v2.listAPIs"]) {
      throw new Error("Unstable operation 'listAPIs' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/apicatalog/api";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.APIManagementApi.listAPIs")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        ObjectSerializer.serialize(query, "string", ""),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64"),
        ""
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", "int64"),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateOpenAPI(
    id: string,
    openapiSpecFile?: HttpFile,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateOpenAPI'");
    if (!_config.unstableOperations["v2.updateOpenAPI"]) {
      throw new Error("Unstable operation 'updateOpenAPI' is disabled");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateOpenAPI");
    }

    // Path Params
    const localVarPath = "/api/v2/apicatalog/api/{id}/openapi".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.APIManagementApi.updateOpenAPI")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Form Params
    const localVarFormParams = new FormData();
    if (openapiSpecFile !== undefined) {
      // TODO: replace .append with .set
      localVarFormParams.append(
        "openapi_spec_file",
        openapiSpecFile.data,
        openapiSpecFile.name
      );
    }
    requestContext.setBody(localVarFormParams);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class APIManagementApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createOpenAPI
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOpenAPI(
    response: ResponseContext
  ): Promise<CreateOpenAPIResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: CreateOpenAPIResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreateOpenAPIResponse"
      ) as CreateOpenAPIResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: CreateOpenAPIResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreateOpenAPIResponse",
        ""
      ) as CreateOpenAPIResponse;
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
   * @params response Response returned by the server for a request to deleteOpenAPI
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOpenAPI(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
   * @params response Response returned by the server for a request to getOpenAPI
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOpenAPI(response: ResponseContext): Promise<HttpFile> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: HttpFile = (await response.getBodyAsFile()) as HttpFile;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
      const body: HttpFile =
        (await response.getBodyAsFile()) as any as HttpFile;
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
   * @params response Response returned by the server for a request to listAPIs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAPIs(response: ResponseContext): Promise<ListAPIsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListAPIsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListAPIsResponse"
      ) as ListAPIsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: ListAPIsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListAPIsResponse",
        ""
      ) as ListAPIsResponse;
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
   * @params response Response returned by the server for a request to updateOpenAPI
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOpenAPI(
    response: ResponseContext
  ): Promise<UpdateOpenAPIResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: UpdateOpenAPIResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UpdateOpenAPIResponse"
      ) as UpdateOpenAPIResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
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
      const body: UpdateOpenAPIResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UpdateOpenAPIResponse",
        ""
      ) as UpdateOpenAPIResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface APIManagementApiCreateOpenAPIRequest {
  /**
   * Binary `OpenAPI` spec file
   * @type HttpFile
   */
  openapiSpecFile?: HttpFile;
}

export interface APIManagementApiDeleteOpenAPIRequest {
  /**
   * ID of the API to delete
   * @type string
   */
  id: string;
}

export interface APIManagementApiGetOpenAPIRequest {
  /**
   * ID of the API to retrieve
   * @type string
   */
  id: string;
}

export interface APIManagementApiListAPIsRequest {
  /**
   * Filter APIs by name
   * @type string
   */
  query?: string;
  /**
   * Number of items per page.
   * @type number
   */
  pageLimit?: number;
  /**
   * Offset for pagination.
   * @type number
   */
  pageOffset?: number;
}

export interface APIManagementApiUpdateOpenAPIRequest {
  /**
   * ID of the API to modify
   * @type string
   */
  id: string;
  /**
   * Binary `OpenAPI` spec file
   * @type HttpFile
   */
  openapiSpecFile?: HttpFile;
}

export class APIManagementApi {
  private requestFactory: APIManagementApiRequestFactory;
  private responseProcessor: APIManagementApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: APIManagementApiRequestFactory,
    responseProcessor?: APIManagementApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new APIManagementApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new APIManagementApiResponseProcessor();
  }

  /**
   * Create a new API from the [OpenAPI](https://spec.openapis.org/oas/latest.html) specification given.
   * See the [API Catalog documentation](https://docs.datadoghq.com/api_catalog/add_metadata/) for additional
   * information about the possible metadata.
   * It returns the created API ID.
   * @param param The request object
   */
  public createOpenAPI(
    param: APIManagementApiCreateOpenAPIRequest = {},
    options?: Configuration
  ): Promise<CreateOpenAPIResponse> {
    const requestContextPromise = this.requestFactory.createOpenAPI(
      param.openapiSpecFile,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOpenAPI(responseContext);
        });
    });
  }

  /**
   * Delete a specific API by ID.
   * @param param The request object
   */
  public deleteOpenAPI(
    param: APIManagementApiDeleteOpenAPIRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteOpenAPI(
      param.id,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOpenAPI(responseContext);
        });
    });
  }

  /**
   * Retrieve information about a specific API in [OpenAPI](https://spec.openapis.org/oas/latest.html) format file.
   * @param param The request object
   */
  public getOpenAPI(
    param: APIManagementApiGetOpenAPIRequest,
    options?: Configuration
  ): Promise<HttpFile> {
    const requestContextPromise = this.requestFactory.getOpenAPI(
      param.id,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOpenAPI(responseContext);
        });
    });
  }

  /**
   * List APIs and their IDs.
   * @param param The request object
   */
  public listAPIs(
    param: APIManagementApiListAPIsRequest = {},
    options?: Configuration
  ): Promise<ListAPIsResponse> {
    const requestContextPromise = this.requestFactory.listAPIs(
      param.query,
      param.pageLimit,
      param.pageOffset,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAPIs(responseContext);
        });
    });
  }

  /**
   * Update information about a specific API. The given content will replace all API content of the given ID.
   * The ID is returned by the create API, or can be found in the URL in the API catalog UI.
   * @param param The request object
   */
  public updateOpenAPI(
    param: APIManagementApiUpdateOpenAPIRequest,
    options?: Configuration
  ): Promise<UpdateOpenAPIResponse> {
    const requestContextPromise = this.requestFactory.updateOpenAPI(
      param.id,
      param.openapiSpecFile,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOpenAPI(responseContext);
        });
    });
  }
}
