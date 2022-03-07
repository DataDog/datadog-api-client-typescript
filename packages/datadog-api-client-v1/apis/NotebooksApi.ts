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
import { NotebookCreateRequest } from "../models/NotebookCreateRequest";
import { NotebookResponse } from "../models/NotebookResponse";
import { NotebookUpdateRequest } from "../models/NotebookUpdateRequest";
import { NotebooksResponse } from "../models/NotebooksResponse";

export class NotebooksApiRequestFactory extends BaseAPIRequestFactory {
  public async createNotebook(
    body: NotebookCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createNotebook."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/notebooks";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "NotebooksApi.createNotebook"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "NotebookCreateRequest", ""),
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

  public async deleteNotebook(
    notebookId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'notebookId' is not null or undefined
    if (notebookId === null || notebookId === undefined) {
      throw new RequiredError(
        "Required parameter notebookId was null or undefined when calling deleteNotebook."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/notebooks/{notebook_id}".replace(
      "{" + "notebook_id" + "}",
      encodeURIComponent(String(notebookId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "NotebooksApi.deleteNotebook"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getNotebook(
    notebookId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'notebookId' is not null or undefined
    if (notebookId === null || notebookId === undefined) {
      throw new RequiredError(
        "Required parameter notebookId was null or undefined when calling getNotebook."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/notebooks/{notebook_id}".replace(
      "{" + "notebook_id" + "}",
      encodeURIComponent(String(notebookId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "NotebooksApi.getNotebook"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listNotebooks(
    authorHandle?: string,
    excludeAuthorHandle?: string,
    start?: number,
    count?: number,
    sortField?: string,
    sortDir?: string,
    query?: string,
    includeCells?: boolean,
    isTemplate?: boolean,
    type?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/notebooks";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "NotebooksApi.listNotebooks"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (authorHandle !== undefined) {
      requestContext.setQueryParam(
        "author_handle",
        ObjectSerializer.serialize(authorHandle, "string", "")
      );
    }
    if (excludeAuthorHandle !== undefined) {
      requestContext.setQueryParam(
        "exclude_author_handle",
        ObjectSerializer.serialize(excludeAuthorHandle, "string", "")
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        ObjectSerializer.serialize(start, "number", "int64")
      );
    }
    if (count !== undefined) {
      requestContext.setQueryParam(
        "count",
        ObjectSerializer.serialize(count, "number", "int64")
      );
    }
    if (sortField !== undefined) {
      requestContext.setQueryParam(
        "sort_field",
        ObjectSerializer.serialize(sortField, "string", "")
      );
    }
    if (sortDir !== undefined) {
      requestContext.setQueryParam(
        "sort_dir",
        ObjectSerializer.serialize(sortDir, "string", "")
      );
    }
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        ObjectSerializer.serialize(query, "string", "")
      );
    }
    if (includeCells !== undefined) {
      requestContext.setQueryParam(
        "include_cells",
        ObjectSerializer.serialize(includeCells, "boolean", "")
      );
    }
    if (isTemplate !== undefined) {
      requestContext.setQueryParam(
        "is_template",
        ObjectSerializer.serialize(isTemplate, "boolean", "")
      );
    }
    if (type !== undefined) {
      requestContext.setQueryParam(
        "type",
        ObjectSerializer.serialize(type, "string", "")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateNotebook(
    notebookId: number,
    body: NotebookUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'notebookId' is not null or undefined
    if (notebookId === null || notebookId === undefined) {
      throw new RequiredError(
        "Required parameter notebookId was null or undefined when calling updateNotebook."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateNotebook."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/notebooks/{notebook_id}".replace(
      "{" + "notebook_id" + "}",
      encodeURIComponent(String(notebookId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "NotebooksApi.updateNotebook"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "NotebookUpdateRequest", ""),
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

export class NotebooksApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createNotebook
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createNotebook(
    response: ResponseContext
  ): Promise<NotebookResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: NotebookResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotebookResponse",
        ""
      ) as NotebookResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
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
      const body: NotebookResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotebookResponse",
        ""
      ) as NotebookResponse;
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
   * @params response Response returned by the server for a request to deleteNotebook
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteNotebook(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("204", response.httpStatusCode)) {
      return;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
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
   * @params response Response returned by the server for a request to getNotebook
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getNotebook(
    response: ResponseContext
  ): Promise<NotebookResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: NotebookResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotebookResponse",
        ""
      ) as NotebookResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
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
      const body: NotebookResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotebookResponse",
        ""
      ) as NotebookResponse;
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
   * @params response Response returned by the server for a request to listNotebooks
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listNotebooks(
    response: ResponseContext
  ): Promise<NotebooksResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: NotebooksResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotebooksResponse",
        ""
      ) as NotebooksResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
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
      const body: NotebooksResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotebooksResponse",
        ""
      ) as NotebooksResponse;
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
   * @params response Response returned by the server for a request to updateNotebook
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateNotebook(
    response: ResponseContext
  ): Promise<NotebookResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: NotebookResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotebookResponse",
        ""
      ) as NotebookResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("409", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(409, body);
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
      const body: NotebookResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotebookResponse",
        ""
      ) as NotebookResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface NotebooksApiCreateNotebookRequest {
  /**
   * The JSON description of the notebook you want to create.
   * @type NotebookCreateRequest
   */
  body: NotebookCreateRequest;
}

export interface NotebooksApiDeleteNotebookRequest {
  /**
   * Unique ID, assigned when you create the notebook.
   * @type number
   */
  notebookId: number;
}

export interface NotebooksApiGetNotebookRequest {
  /**
   * Unique ID, assigned when you create the notebook.
   * @type number
   */
  notebookId: number;
}

export interface NotebooksApiListNotebooksRequest {
  /**
   * Return notebooks created by the given &#x60;author_handle&#x60;.
   * @type string
   */
  authorHandle?: string;
  /**
   * Return notebooks not created by the given &#x60;author_handle&#x60;.
   * @type string
   */
  excludeAuthorHandle?: string;
  /**
   * The index of the first notebook you want returned.
   * @type number
   */
  start?: number;
  /**
   * The number of notebooks to be returned.
   * @type number
   */
  count?: number;
  /**
   * Sort by field &#x60;modified&#x60;, &#x60;name&#x60;, or &#x60;created&#x60;.
   * @type string
   */
  sortField?: string;
  /**
   * Sort by direction &#x60;asc&#x60; or &#x60;desc&#x60;.
   * @type string
   */
  sortDir?: string;
  /**
   * Return only notebooks with &#x60;query&#x60; string in notebook name or author handle.
   * @type string
   */
  query?: string;
  /**
   * Value of &#x60;false&#x60; excludes the &#x60;cells&#x60; and global &#x60;time&#x60; for each notebook.
   * @type boolean
   */
  includeCells?: boolean;
  /**
   * True value returns only template notebooks. Default is false (returns only non-template notebooks).
   * @type boolean
   */
  isTemplate?: boolean;
  /**
   * If type is provided, returns only notebooks with that metadata type. Default does not have type filtering.
   * @type string
   */
  type?: string;
}

export interface NotebooksApiUpdateNotebookRequest {
  /**
   * Unique ID, assigned when you create the notebook.
   * @type number
   */
  notebookId: number;
  /**
   * Update notebook request body.
   * @type NotebookUpdateRequest
   */
  body: NotebookUpdateRequest;
}

export class NotebooksApi {
  private requestFactory: NotebooksApiRequestFactory;
  private responseProcessor: NotebooksApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: NotebooksApiRequestFactory,
    responseProcessor?: NotebooksApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new NotebooksApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new NotebooksApiResponseProcessor();
  }

  /**
   * Create a notebook using the specified options.
   * @param param The request object
   */
  public createNotebook(
    param: NotebooksApiCreateNotebookRequest,
    options?: Configuration
  ): Promise<NotebookResponse> {
    const requestContextPromise = this.requestFactory.createNotebook(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createNotebook(responseContext);
        });
    });
  }

  /**
   * Delete a notebook using the specified ID.
   * @param param The request object
   */
  public deleteNotebook(
    param: NotebooksApiDeleteNotebookRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteNotebook(
      param.notebookId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteNotebook(responseContext);
        });
    });
  }

  /**
   * Get a notebook using the specified notebook ID.
   * @param param The request object
   */
  public getNotebook(
    param: NotebooksApiGetNotebookRequest,
    options?: Configuration
  ): Promise<NotebookResponse> {
    const requestContextPromise = this.requestFactory.getNotebook(
      param.notebookId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getNotebook(responseContext);
        });
    });
  }

  /**
   * Get all notebooks. This can also be used to search for notebooks with a particular `query` in the notebook `name` or author `handle`.
   * @param param The request object
   */
  public listNotebooks(
    param: NotebooksApiListNotebooksRequest = {},
    options?: Configuration
  ): Promise<NotebooksResponse> {
    const requestContextPromise = this.requestFactory.listNotebooks(
      param.authorHandle,
      param.excludeAuthorHandle,
      param.start,
      param.count,
      param.sortField,
      param.sortDir,
      param.query,
      param.includeCells,
      param.isTemplate,
      param.type,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listNotebooks(responseContext);
        });
    });
  }

  /**
   * Update a notebook using the specified ID.
   * @param param The request object
   */
  public updateNotebook(
    param: NotebooksApiUpdateNotebookRequest,
    options?: Configuration
  ): Promise<NotebookResponse> {
    const requestContextPromise = this.requestFactory.updateNotebook(
      param.notebookId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateNotebook(responseContext);
        });
    });
  }
}
