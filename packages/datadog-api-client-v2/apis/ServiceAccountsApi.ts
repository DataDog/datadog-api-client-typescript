// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import { Configuration, getServer } from "../configuration";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { ApplicationKeyCreateRequest } from "../models/ApplicationKeyCreateRequest";
import { ApplicationKeyResponse } from "../models/ApplicationKeyResponse";
import { ApplicationKeyUpdateRequest } from "../models/ApplicationKeyUpdateRequest";
import { ApplicationKeysSort } from "../models/ApplicationKeysSort";
import { ListApplicationKeysResponse } from "../models/ListApplicationKeysResponse";
import { PartialApplicationKeyResponse } from "../models/PartialApplicationKeyResponse";

/**
 * no description
 */
export class ServiceAccountsApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Create an application key for this service account.
   * Create an application key for this service account
   * @param serviceAccountId The ID of the service account.
   * @param body
   */
  public async createServiceAccountApplicationKey(
    serviceAccountId: string,
    body: ApplicationKeyCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'serviceAccountId' is not null or undefined
    if (serviceAccountId === null || serviceAccountId === undefined) {
      throw new RequiredError(
        "Required parameter serviceAccountId was null or undefined when calling createServiceAccountApplicationKey."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createServiceAccountApplicationKey."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/service_accounts/{service_account_id}/application_keys".replace(
        "{" + "service_account_id" + "}",
        encodeURIComponent(String(serviceAccountId))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "ServiceAccountsApi.createServiceAccountApplicationKey"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ApplicationKeyCreateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Delete an application key owned by this service account.
   * Delete an application key for this service account
   * @param serviceAccountId The ID of the service account.
   * @param appKeyId The ID of the application key.
   */
  public async deleteServiceAccountApplicationKey(
    serviceAccountId: string,
    appKeyId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'serviceAccountId' is not null or undefined
    if (serviceAccountId === null || serviceAccountId === undefined) {
      throw new RequiredError(
        "Required parameter serviceAccountId was null or undefined when calling deleteServiceAccountApplicationKey."
      );
    }

    // verify required parameter 'appKeyId' is not null or undefined
    if (appKeyId === null || appKeyId === undefined) {
      throw new RequiredError(
        "Required parameter appKeyId was null or undefined when calling deleteServiceAccountApplicationKey."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/service_accounts/{service_account_id}/application_keys/{app_key_id}"
        .replace(
          "{" + "service_account_id" + "}",
          encodeURIComponent(String(serviceAccountId))
        )
        .replace(
          "{" + "app_key_id" + "}",
          encodeURIComponent(String(appKeyId))
        );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "ServiceAccountsApi.deleteServiceAccountApplicationKey"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get an application key owned by this service account.
   * Get one application key for this service account
   * @param serviceAccountId The ID of the service account.
   * @param appKeyId The ID of the application key.
   */
  public async getServiceAccountApplicationKey(
    serviceAccountId: string,
    appKeyId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'serviceAccountId' is not null or undefined
    if (serviceAccountId === null || serviceAccountId === undefined) {
      throw new RequiredError(
        "Required parameter serviceAccountId was null or undefined when calling getServiceAccountApplicationKey."
      );
    }

    // verify required parameter 'appKeyId' is not null or undefined
    if (appKeyId === null || appKeyId === undefined) {
      throw new RequiredError(
        "Required parameter appKeyId was null or undefined when calling getServiceAccountApplicationKey."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/service_accounts/{service_account_id}/application_keys/{app_key_id}"
        .replace(
          "{" + "service_account_id" + "}",
          encodeURIComponent(String(serviceAccountId))
        )
        .replace(
          "{" + "app_key_id" + "}",
          encodeURIComponent(String(appKeyId))
        );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "ServiceAccountsApi.getServiceAccountApplicationKey"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * List all application keys available for this service account.
   * List application keys for this service account
   * @param serviceAccountId The ID of the service account.
   * @param pageSize Size for a given page.
   * @param pageNumber Specific page number to return.
   * @param sort Application key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign.
   * @param filter Filter application keys by the specified string.
   * @param filterCreatedAtStart Only include application keys created on or after the specified date.
   * @param filterCreatedAtEnd Only include application keys created on or before the specified date.
   */
  public async listServiceAccountApplicationKeys(
    serviceAccountId: string,
    pageSize?: number,
    pageNumber?: number,
    sort?: ApplicationKeysSort,
    filter?: string,
    filterCreatedAtStart?: string,
    filterCreatedAtEnd?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'serviceAccountId' is not null or undefined
    if (serviceAccountId === null || serviceAccountId === undefined) {
      throw new RequiredError(
        "Required parameter serviceAccountId was null or undefined when calling listServiceAccountApplicationKeys."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/service_accounts/{service_account_id}/application_keys".replace(
        "{" + "service_account_id" + "}",
        encodeURIComponent(String(serviceAccountId))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "ServiceAccountsApi.listServiceAccountApplicationKeys"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
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
        ObjectSerializer.serialize(sort, "ApplicationKeysSort", "")
      );
    }
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        ObjectSerializer.serialize(filter, "string", "")
      );
    }
    if (filterCreatedAtStart !== undefined) {
      requestContext.setQueryParam(
        "filter[created_at][start]",
        ObjectSerializer.serialize(filterCreatedAtStart, "string", "")
      );
    }
    if (filterCreatedAtEnd !== undefined) {
      requestContext.setQueryParam(
        "filter[created_at][end]",
        ObjectSerializer.serialize(filterCreatedAtEnd, "string", "")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Edit an application key owned by this service account.
   * Edit an application key for this service account
   * @param serviceAccountId The ID of the service account.
   * @param appKeyId The ID of the application key.
   * @param body
   */
  public async updateServiceAccountApplicationKey(
    serviceAccountId: string,
    appKeyId: string,
    body: ApplicationKeyUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'serviceAccountId' is not null or undefined
    if (serviceAccountId === null || serviceAccountId === undefined) {
      throw new RequiredError(
        "Required parameter serviceAccountId was null or undefined when calling updateServiceAccountApplicationKey."
      );
    }

    // verify required parameter 'appKeyId' is not null or undefined
    if (appKeyId === null || appKeyId === undefined) {
      throw new RequiredError(
        "Required parameter appKeyId was null or undefined when calling updateServiceAccountApplicationKey."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateServiceAccountApplicationKey."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/service_accounts/{service_account_id}/application_keys/{app_key_id}"
        .replace(
          "{" + "service_account_id" + "}",
          encodeURIComponent(String(serviceAccountId))
        )
        .replace(
          "{" + "app_key_id" + "}",
          encodeURIComponent(String(appKeyId))
        );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "ServiceAccountsApi.updateServiceAccountApplicationKey"
    ).makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ApplicationKeyUpdateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }
}

export class ServiceAccountsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createServiceAccountApplicationKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createServiceAccountApplicationKey(
    response: ResponseContext
  ): Promise<ApplicationKeyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: ApplicationKeyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ApplicationKeyResponse",
        ""
      ) as ApplicationKeyResponse;
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
      const body: ApplicationKeyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ApplicationKeyResponse",
        ""
      ) as ApplicationKeyResponse;
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
   * @params response Response returned by the server for a request to deleteServiceAccountApplicationKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteServiceAccountApplicationKey(
    response: ResponseContext
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to getServiceAccountApplicationKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getServiceAccountApplicationKey(
    response: ResponseContext
  ): Promise<PartialApplicationKeyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: PartialApplicationKeyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PartialApplicationKeyResponse",
        ""
      ) as PartialApplicationKeyResponse;
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
      const body: PartialApplicationKeyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PartialApplicationKeyResponse",
        ""
      ) as PartialApplicationKeyResponse;
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
   * @params response Response returned by the server for a request to listServiceAccountApplicationKeys
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listServiceAccountApplicationKeys(
    response: ResponseContext
  ): Promise<ListApplicationKeysResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: ListApplicationKeysResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListApplicationKeysResponse",
        ""
      ) as ListApplicationKeysResponse;
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
      const body: ListApplicationKeysResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListApplicationKeysResponse",
        ""
      ) as ListApplicationKeysResponse;
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
   * @params response Response returned by the server for a request to updateServiceAccountApplicationKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateServiceAccountApplicationKey(
    response: ResponseContext
  ): Promise<PartialApplicationKeyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: PartialApplicationKeyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PartialApplicationKeyResponse",
        ""
      ) as PartialApplicationKeyResponse;
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
      const body: PartialApplicationKeyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PartialApplicationKeyResponse",
        ""
      ) as PartialApplicationKeyResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}
