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
} from "@datadog/datadog-api-client";

import { ObjectSerializer } from "./models/ObjectSerializer";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { AuthNMappingCreateRequest } from "./models/AuthNMappingCreateRequest";
import { AuthNMappingResourceType } from "./models/AuthNMappingResourceType";
import { AuthNMappingResponse } from "./models/AuthNMappingResponse";
import { AuthNMappingsResponse } from "./models/AuthNMappingsResponse";
import { AuthNMappingsSort } from "./models/AuthNMappingsSort";
import { AuthNMappingUpdateRequest } from "./models/AuthNMappingUpdateRequest";

export class AuthNMappingsApiRequestFactory extends BaseAPIRequestFactory {
  public async createAuthNMapping(
    body: AuthNMappingCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAuthNMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/authn_mappings";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AuthNMappingsApi.createAuthNMapping")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "AuthNMappingCreateRequest", ""),
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

  public async deleteAuthNMapping(
    authnMappingId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'authnMappingId' is not null or undefined
    if (authnMappingId === null || authnMappingId === undefined) {
      throw new RequiredError("authnMappingId", "deleteAuthNMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/authn_mappings/{authn_mapping_id}".replace(
      "{authn_mapping_id}",
      encodeURIComponent(String(authnMappingId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AuthNMappingsApi.deleteAuthNMapping")
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

  public async getAuthNMapping(
    authnMappingId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'authnMappingId' is not null or undefined
    if (authnMappingId === null || authnMappingId === undefined) {
      throw new RequiredError("authnMappingId", "getAuthNMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/authn_mappings/{authn_mapping_id}".replace(
      "{authn_mapping_id}",
      encodeURIComponent(String(authnMappingId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AuthNMappingsApi.getAuthNMapping")
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

  public async listAuthNMappings(
    pageSize?: number,
    pageNumber?: number,
    sort?: AuthNMappingsSort,
    filter?: string,
    resourceType?: AuthNMappingResourceType,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/authn_mappings";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AuthNMappingsApi.listAuthNMappings")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64"),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "AuthNMappingsSort", ""),
        "",
      );
    }
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        ObjectSerializer.serialize(filter, "string", ""),
        "",
      );
    }
    if (resourceType !== undefined) {
      requestContext.setQueryParam(
        "resource_type",
        ObjectSerializer.serialize(resourceType, "AuthNMappingResourceType", ""),
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

  public async updateAuthNMapping(
    authnMappingId: string,
    body: AuthNMappingUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'authnMappingId' is not null or undefined
    if (authnMappingId === null || authnMappingId === undefined) {
      throw new RequiredError("authnMappingId", "updateAuthNMapping");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAuthNMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/authn_mappings/{authn_mapping_id}".replace(
      "{authn_mapping_id}",
      encodeURIComponent(String(authnMappingId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AuthNMappingsApi.updateAuthNMapping")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "AuthNMappingUpdateRequest", ""),
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
    response: ResponseContext,
  ): Promise<AuthNMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: AuthNMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuthNMappingResponse",
      ) as AuthNMappingResponse;
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
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AuthNMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuthNMappingResponse",
        "",
      ) as AuthNMappingResponse;
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
   * @params response Response returned by the server for a request to deleteAuthNMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAuthNMapping(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
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
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
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
   * @params response Response returned by the server for a request to getAuthNMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAuthNMapping(
    response: ResponseContext,
  ): Promise<AuthNMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: AuthNMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuthNMappingResponse",
      ) as AuthNMappingResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AuthNMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuthNMappingResponse",
        "",
      ) as AuthNMappingResponse;
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
   * @params response Response returned by the server for a request to listAuthNMappings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAuthNMappings(
    response: ResponseContext,
  ): Promise<AuthNMappingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: AuthNMappingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuthNMappingsResponse",
      ) as AuthNMappingsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AuthNMappingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuthNMappingsResponse",
        "",
      ) as AuthNMappingsResponse;
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
   * @params response Response returned by the server for a request to updateAuthNMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAuthNMapping(
    response: ResponseContext,
  ): Promise<AuthNMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: AuthNMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuthNMappingResponse",
      ) as AuthNMappingResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 422 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AuthNMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AuthNMappingResponse",
        "",
      ) as AuthNMappingResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface AuthNMappingsApiCreateAuthNMappingRequest {
  /**
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
   * Size for a given page. The maximum allowed value is 100.
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
   * Filter all mappings by the given string.
   * @type string
   */
  filter?: string;
  /**
   * Filter by mapping resource type. Defaults to "role" if not specified.
   * @type AuthNMappingResourceType
   */
  resourceType?: AuthNMappingResourceType;
}

export interface AuthNMappingsApiUpdateAuthNMappingRequest {
  /**
   * The UUID of the AuthN Mapping.
   * @type string
   */
  authnMappingId: string;
  /**
   * @type AuthNMappingUpdateRequest
   */
  body: AuthNMappingUpdateRequest;
}

export class AuthNMappingsApi {
  private requestFactory: AuthNMappingsApiRequestFactory;
  private responseProcessor: AuthNMappingsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: AuthNMappingsApiRequestFactory,
    responseProcessor?: AuthNMappingsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new AuthNMappingsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new AuthNMappingsApiResponseProcessor();
  }

  /**
   * Create an AuthN Mapping.
   * @param param The request object
   */
  public createAuthNMapping(
    param: AuthNMappingsApiCreateAuthNMappingRequest,
    options?: Configuration,
  ): Promise<AuthNMappingResponse> {
    const requestContextPromise = this.requestFactory.createAuthNMapping(
      param.body,
      options,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteAuthNMapping(
      param.authnMappingId,
      options,
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
    options?: Configuration,
  ): Promise<AuthNMappingResponse> {
    const requestContextPromise = this.requestFactory.getAuthNMapping(
      param.authnMappingId,
      options,
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
    options?: Configuration,
  ): Promise<AuthNMappingsResponse> {
    const requestContextPromise = this.requestFactory.listAuthNMappings(
      param.pageSize,
      param.pageNumber,
      param.sort,
      param.filter,
      param.resourceType,
      options,
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
    options?: Configuration,
  ): Promise<AuthNMappingResponse> {
    const requestContextPromise = this.requestFactory.updateAuthNMapping(
      param.authnMappingId,
      param.body,
      options,
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
