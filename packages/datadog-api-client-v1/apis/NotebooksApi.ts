// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import { Configuration, getServer } from "../configuration";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { NotebookCreateRequest } from "../models/NotebookCreateRequest";
import { NotebookResponse } from "../models/NotebookResponse";
import { NotebookUpdateRequest } from "../models/NotebookUpdateRequest";
import { NotebooksResponse } from "../models/NotebooksResponse";

/**
 * no description
 */
export class NotebooksApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Create a notebook using the specified options.
   * Create a notebook
   * @param body The JSON description of the notebook you want to create.
   */
  public async createNotebook(
    body: NotebookCreateRequest,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

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
      config,
      "NotebooksApi.createNotebook"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

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

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Delete a notebook using the specified ID.
   * Delete a notebook
   * @param notebookId Unique ID, assigned when you create the notebook.
   */
  public async deleteNotebook(
    notebookId: number,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

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
      config,
      "NotebooksApi.deleteNotebook"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get a notebook using the specified notebook ID.
   * Get a notebook
   * @param notebookId Unique ID, assigned when you create the notebook.
   */
  public async getNotebook(
    notebookId: number,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

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
      config,
      "NotebooksApi.getNotebook"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get all notebooks. This can also be used to search for notebooks with a particular `query` in the notebook `name` or author `handle`.
   * Get all notebooks
   * @param authorHandle Return notebooks created by the given &#x60;author_handle&#x60;.
   * @param excludeAuthorHandle Return notebooks not created by the given &#x60;author_handle&#x60;.
   * @param start The index of the first notebook you want returned.
   * @param count The number of notebooks to be returned.
   * @param sortField Sort by field &#x60;modified&#x60; or &#x60;name&#x60;.
   * @param sortDir Sort by direction &#x60;asc&#x60; or &#x60;desc&#x60;.
   * @param query Return only notebooks with &#x60;query&#x60; string in notebook name or author handle.
   * @param includeCells Value of &#x60;false&#x60; excludes the &#x60;cells&#x60; and global &#x60;time&#x60; for each notebook.
   */
  public async listNotebooks(
    authorHandle?: string,
    excludeAuthorHandle?: string,
    start?: number,
    count?: number,
    sortField?: string,
    sortDir?: string,
    query?: string,
    includeCells?: boolean,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/notebooks";

    // Make Request Context
    const requestContext = getServer(
      config,
      "NotebooksApi.listNotebooks"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(config.httpConfig);

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

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Update a notebook using the specified ID.
   * Update a notebook
   * @param notebookId Unique ID, assigned when you create the notebook.
   * @param body Update notebook request body.
   */
  public async updateNotebook(
    notebookId: number,
    body: NotebookUpdateRequest,
    options?: Configuration
  ): Promise<RequestContext> {
    const config = options || this.configuration;

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
      config,
      "NotebooksApi.updateNotebook"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

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

    let authMethod = null;
    // Apply auth methods
    authMethod = config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: NotebookResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotebookResponse",
        ""
      ) as NotebookResponse;
      return body;
    }

    const body = response.body || "";
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
      return body;
    }

    const body = response.body || "";
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: NotebookResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotebookResponse",
        ""
      ) as NotebookResponse;
      return body;
    }

    const body = response.body || "";
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: NotebooksResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotebooksResponse",
        ""
      ) as NotebooksResponse;
      return body;
    }

    const body = response.body || "";
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: NotebookResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotebookResponse",
        ""
      ) as NotebookResponse;
      return body;
    }

    const body = response.body || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}
