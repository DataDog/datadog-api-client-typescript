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
import { AuthNMappingCreateRequest } from "../models/AuthNMappingCreateRequest";
import { AuthNMappingResponse } from "../models/AuthNMappingResponse";
import { AuthNMappingUpdateRequest } from "../models/AuthNMappingUpdateRequest";
import { AuthNMappingsResponse } from "../models/AuthNMappingsResponse";
import { AuthNMappingsSort } from "../models/AuthNMappingsSort";

export class AuthNMappingsApiRequestFactory extends BaseAPIRequestFactory {
  public async createAuthNMapping(
    body: AuthNMappingCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createAuthNMapping."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/authn_mappings";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "AuthNMappingsApi.createAuthNMapping"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AuthNMappingCreateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteAuthNMapping(
    authnMappingId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'authnMappingId' is not null or undefined
    if (authnMappingId === null || authnMappingId === undefined) {
      throw new RequiredError(
        "Required parameter authnMappingId was null or undefined when calling deleteAuthNMapping."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/authn_mappings/{authn_mapping_id}".replace(
      "{" + "authn_mapping_id" + "}",
      encodeURIComponent(String(authnMappingId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "AuthNMappingsApi.deleteAuthNMapping"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
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

  public async getAuthNMapping(
    authnMappingId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'authnMappingId' is not null or undefined
    if (authnMappingId === null || authnMappingId === undefined) {
      throw new RequiredError(
        "Required parameter authnMappingId was null or undefined when calling getAuthNMapping."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/authn_mappings/{authn_mapping_id}".replace(
      "{" + "authn_mapping_id" + "}",
      encodeURIComponent(String(authnMappingId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "AuthNMappingsApi.getAuthNMapping"
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

  public async listAuthNMappings(
    pageSize?: number,
    pageNumber?: number,
    sort?: AuthNMappingsSort,
    include?: Array<string>,
    filter?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/authn_mappings";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "AuthNMappingsApi.listAuthNMappings"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64")
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64")
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "AuthNMappingsSort", "")
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "Array<string>", "")
      );
    }
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        ObjectSerializer.serialize(filter, "string", "")
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

  public async updateAuthNMapping(
    authnMappingId: string,
    body: AuthNMappingUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'authnMappingId' is not null or undefined
    if (authnMappingId === null || authnMappingId === undefined) {
      throw new RequiredError(
        "Required parameter authnMappingId was null or undefined when calling updateAuthNMapping."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateAuthNMapping."
      );
    }

    // Path Params
    const localVarPath = "/api/v2/authn_mappings/{authn_mapping_id}".replace(
      "{" + "authn_mapping_id" + "}",
      encodeURIComponent(String(authnMappingId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "AuthNMappingsApi.updateAuthNMapping"
    ).makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AuthNMappingUpdateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class AuthNMappingsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAuthNMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAuthNMapping(
    response: ResponseContext
  ): Promise<AuthNMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: AuthNMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuthNMappingResponse",
        ""
      ) as AuthNMappingResponse;
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
      const body: AuthNMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuthNMappingResponse",
        ""
      ) as AuthNMappingResponse;
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
   * @params response Response returned by the server for a request to deleteAuthNMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAuthNMapping(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("204", response.httpStatusCode)) {
      return;
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
   * @params response Response returned by the server for a request to getAuthNMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAuthNMapping(
    response: ResponseContext
  ): Promise<AuthNMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: AuthNMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuthNMappingResponse",
        ""
      ) as AuthNMappingResponse;
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
      const body: AuthNMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuthNMappingResponse",
        ""
      ) as AuthNMappingResponse;
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
   * @params response Response returned by the server for a request to listAuthNMappings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAuthNMappings(
    response: ResponseContext
  ): Promise<AuthNMappingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: AuthNMappingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuthNMappingsResponse",
        ""
      ) as AuthNMappingsResponse;
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
      const body: AuthNMappingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuthNMappingsResponse",
        ""
      ) as AuthNMappingsResponse;
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
   * @params response Response returned by the server for a request to updateAuthNMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAuthNMapping(
    response: ResponseContext
  ): Promise<AuthNMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: AuthNMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuthNMappingResponse",
        ""
      ) as AuthNMappingResponse;
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
    if (isCodeInRange("422", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(422, body);
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
      const body: AuthNMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuthNMappingResponse",
        ""
      ) as AuthNMappingResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface AuthNMappingsApiCreateAuthNMappingRequest {
  /**
   *
   * @type AuthNMappingCreateRequest
   */
  body: AuthNMappingCreateRequest;
}

export interface AuthNMappingsApiDeleteAuthNMappingRequest {
  /**
   * The UUID of the AuthN Mapping.
   * @type string
   */
  authnMappingId: string;
}

export interface AuthNMappingsApiGetAuthNMappingRequest {
  /**
   * The UUID of the AuthN Mapping.
   * @type string
   */
  authnMappingId: string;
}

export interface AuthNMappingsApiListAuthNMappingsRequest {
  /**
   * Size for a given page.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific page number to return.
   * @type number
   */
  pageNumber?: number;
  /**
   * Sort AuthN Mappings depending on the given field.
   * @type AuthNMappingsSort
   */
  sort?: AuthNMappingsSort;
  /**
   *
   * @type Array&lt;string&gt;
   */
  include?: Array<string>;
  /**
   * Filter all mappings by the given string.
   * @type string
   */
  filter?: string;
}

export interface AuthNMappingsApiUpdateAuthNMappingRequest {
  /**
   * The UUID of the AuthN Mapping.
   * @type string
   */
  authnMappingId: string;
  /**
   *
   * @type AuthNMappingUpdateRequest
   */
  body: AuthNMappingUpdateRequest;
}

export class AuthNMappingsApi {
  private requestFactory: AuthNMappingsApiRequestFactory;
  private responseProcessor: AuthNMappingsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AuthNMappingsApiRequestFactory,
    responseProcessor?: AuthNMappingsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new AuthNMappingsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new AuthNMappingsApiResponseProcessor();
  }

  /**
   * Create an AuthN Mapping.
   * @param param The request object
   */
  public createAuthNMapping(
    param: AuthNMappingsApiCreateAuthNMappingRequest,
    options?: Configuration
  ): Promise<AuthNMappingResponse> {
    const requestContextPromise = this.requestFactory.createAuthNMapping(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAuthNMapping(responseContext);
        });
    });
  }

  /**
   * Delete an AuthN Mapping specified by AuthN Mapping UUID.
   * @param param The request object
   */
  public deleteAuthNMapping(
    param: AuthNMappingsApiDeleteAuthNMappingRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteAuthNMapping(
      param.authnMappingId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAuthNMapping(responseContext);
        });
    });
  }

  /**
   * Get an AuthN Mapping specified by the AuthN Mapping UUID.
   * @param param The request object
   */
  public getAuthNMapping(
    param: AuthNMappingsApiGetAuthNMappingRequest,
    options?: Configuration
  ): Promise<AuthNMappingResponse> {
    const requestContextPromise = this.requestFactory.getAuthNMapping(
      param.authnMappingId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAuthNMapping(responseContext);
        });
    });
  }

  /**
   * List all AuthN Mappings in the org.
   * @param param The request object
   */
  public listAuthNMappings(
    param: AuthNMappingsApiListAuthNMappingsRequest = {},
    options?: Configuration
  ): Promise<AuthNMappingsResponse> {
    const requestContextPromise = this.requestFactory.listAuthNMappings(
      param.pageSize,
      param.pageNumber,
      param.sort,
      param.include,
      param.filter,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAuthNMappings(responseContext);
        });
    });
  }

  /**
   * Edit an AuthN Mapping.
   * @param param The request object
   */
  public updateAuthNMapping(
    param: AuthNMappingsApiUpdateAuthNMappingRequest,
    options?: Configuration
  ): Promise<AuthNMappingResponse> {
    const requestContextPromise = this.requestFactory.updateAuthNMapping(
      param.authnMappingId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAuthNMapping(responseContext);
        });
    });
  }
}
