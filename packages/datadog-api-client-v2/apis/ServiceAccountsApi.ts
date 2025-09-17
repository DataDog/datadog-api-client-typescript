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
import { ApplicationKeyCreateRequest } from "../models/ApplicationKeyCreateRequest";
import { ApplicationKeyResponse } from "../models/ApplicationKeyResponse";
import { ApplicationKeysSort } from "../models/ApplicationKeysSort";
import { ApplicationKeyUpdateRequest } from "../models/ApplicationKeyUpdateRequest";
import { ListApplicationKeysResponse } from "../models/ListApplicationKeysResponse";
import { PartialApplicationKeyResponse } from "../models/PartialApplicationKeyResponse";
import { ServiceAccountCreateRequest } from "../models/ServiceAccountCreateRequest";
import { UserResponse } from "../models/UserResponse";

export class ServiceAccountsApiRequestFactory extends BaseAPIRequestFactory {
  public async createServiceAccount(
    body: ServiceAccountCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createServiceAccount");
    }

    // Path Params
    const localVarPath = "/api/v2/service_accounts";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceAccountsApi.createServiceAccount")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ServiceAccountCreateRequest", ""),
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

  public async createServiceAccountApplicationKey(
    serviceAccountId: string,
    body: ApplicationKeyCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'serviceAccountId' is not null or undefined
    if (serviceAccountId === null || serviceAccountId === undefined) {
      throw new RequiredError(
        "serviceAccountId",
        "createServiceAccountApplicationKey"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createServiceAccountApplicationKey");
    }

    // Path Params
    const localVarPath =
      "/api/v2/service_accounts/{service_account_id}/application_keys".replace(
        "{service_account_id}",
        encodeURIComponent(String(serviceAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceAccountsApi.createServiceAccountApplicationKey")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteServiceAccountApplicationKey(
    serviceAccountId: string,
    appKeyId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'serviceAccountId' is not null or undefined
    if (serviceAccountId === null || serviceAccountId === undefined) {
      throw new RequiredError(
        "serviceAccountId",
        "deleteServiceAccountApplicationKey"
      );
    }

    // verify required parameter 'appKeyId' is not null or undefined
    if (appKeyId === null || appKeyId === undefined) {
      throw new RequiredError("appKeyId", "deleteServiceAccountApplicationKey");
    }

    // Path Params
    const localVarPath =
      "/api/v2/service_accounts/{service_account_id}/application_keys/{app_key_id}"
        .replace(
          "{service_account_id}",
          encodeURIComponent(String(serviceAccountId))
        )
        .replace("{app_key_id}", encodeURIComponent(String(appKeyId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceAccountsApi.deleteServiceAccountApplicationKey")
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

  public async getServiceAccountApplicationKey(
    serviceAccountId: string,
    appKeyId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'serviceAccountId' is not null or undefined
    if (serviceAccountId === null || serviceAccountId === undefined) {
      throw new RequiredError(
        "serviceAccountId",
        "getServiceAccountApplicationKey"
      );
    }

    // verify required parameter 'appKeyId' is not null or undefined
    if (appKeyId === null || appKeyId === undefined) {
      throw new RequiredError("appKeyId", "getServiceAccountApplicationKey");
    }

    // Path Params
    const localVarPath =
      "/api/v2/service_accounts/{service_account_id}/application_keys/{app_key_id}"
        .replace(
          "{service_account_id}",
          encodeURIComponent(String(serviceAccountId))
        )
        .replace("{app_key_id}", encodeURIComponent(String(appKeyId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceAccountsApi.getServiceAccountApplicationKey")
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
        "serviceAccountId",
        "listServiceAccountApplicationKeys"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/service_accounts/{service_account_id}/application_keys".replace(
        "{service_account_id}",
        encodeURIComponent(String(serviceAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceAccountsApi.listServiceAccountApplicationKeys")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
        ""
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64"),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "ApplicationKeysSort", ""),
        ""
      );
    }
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        ObjectSerializer.serialize(filter, "string", ""),
        ""
      );
    }
    if (filterCreatedAtStart !== undefined) {
      requestContext.setQueryParam(
        "filter[created_at][start]",
        ObjectSerializer.serialize(filterCreatedAtStart, "string", ""),
        ""
      );
    }
    if (filterCreatedAtEnd !== undefined) {
      requestContext.setQueryParam(
        "filter[created_at][end]",
        ObjectSerializer.serialize(filterCreatedAtEnd, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

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
        "serviceAccountId",
        "updateServiceAccountApplicationKey"
      );
    }

    // verify required parameter 'appKeyId' is not null or undefined
    if (appKeyId === null || appKeyId === undefined) {
      throw new RequiredError("appKeyId", "updateServiceAccountApplicationKey");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateServiceAccountApplicationKey");
    }

    // Path Params
    const localVarPath =
      "/api/v2/service_accounts/{service_account_id}/application_keys/{app_key_id}"
        .replace(
          "{service_account_id}",
          encodeURIComponent(String(serviceAccountId))
        )
        .replace("{app_key_id}", encodeURIComponent(String(appKeyId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ServiceAccountsApi.updateServiceAccountApplicationKey")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class ServiceAccountsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createServiceAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createServiceAccount(
    response: ResponseContext
  ): Promise<UserResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: UserResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserResponse"
      ) as UserResponse;
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
      const body: UserResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserResponse",
        ""
      ) as UserResponse;
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
   * @params response Response returned by the server for a request to createServiceAccountApplicationKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createServiceAccountApplicationKey(
    response: ResponseContext
  ): Promise<ApplicationKeyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: ApplicationKeyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ApplicationKeyResponse"
      ) as ApplicationKeyResponse;
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
   * @params response Response returned by the server for a request to getServiceAccountApplicationKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getServiceAccountApplicationKey(
    response: ResponseContext
  ): Promise<PartialApplicationKeyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: PartialApplicationKeyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PartialApplicationKeyResponse"
      ) as PartialApplicationKeyResponse;
      return body;
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
    if (response.httpStatusCode === 200) {
      const body: ListApplicationKeysResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListApplicationKeysResponse"
      ) as ListApplicationKeysResponse;
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
    if (response.httpStatusCode === 200) {
      const body: PartialApplicationKeyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PartialApplicationKeyResponse"
      ) as PartialApplicationKeyResponse;
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

export interface ServiceAccountsApiCreateServiceAccountRequest {
  /**
   * @type ServiceAccountCreateRequest
   */
  body: ServiceAccountCreateRequest;
}

export interface ServiceAccountsApiCreateServiceAccountApplicationKeyRequest {
  /**
   * The ID of the service account.
   * @type string
   */
  serviceAccountId: string;
  /**
   * @type ApplicationKeyCreateRequest
   */
  body: ApplicationKeyCreateRequest;
}

export interface ServiceAccountsApiDeleteServiceAccountApplicationKeyRequest {
  /**
   * The ID of the service account.
   * @type string
   */
  serviceAccountId: string;
  /**
   * The ID of the application key.
   * @type string
   */
  appKeyId: string;
}

export interface ServiceAccountsApiGetServiceAccountApplicationKeyRequest {
  /**
   * The ID of the service account.
   * @type string
   */
  serviceAccountId: string;
  /**
   * The ID of the application key.
   * @type string
   */
  appKeyId: string;
}

export interface ServiceAccountsApiListServiceAccountApplicationKeysRequest {
  /**
   * The ID of the service account.
   * @type string
   */
  serviceAccountId: string;
  /**
   * Size for a given page. The maximum allowed value is 100. Test change to trigger client generation.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific page number to return.
   * @type number
   */
  pageNumber?: number;
  /**
   * Application key attribute used to sort results. Sort order is ascending
   * by default. In order to specify a descending sort, prefix the
   * attribute with a minus sign.
   * @type ApplicationKeysSort
   */
  sort?: ApplicationKeysSort;
  /**
   * Filter application keys by the specified string.
   * @type string
   */
  filter?: string;
  /**
   * Only include application keys created on or after the specified date.
   * @type string
   */
  filterCreatedAtStart?: string;
  /**
   * Only include application keys created on or before the specified date.
   * @type string
   */
  filterCreatedAtEnd?: string;
}

export interface ServiceAccountsApiUpdateServiceAccountApplicationKeyRequest {
  /**
   * The ID of the service account.
   * @type string
   */
  serviceAccountId: string;
  /**
   * The ID of the application key.
   * @type string
   */
  appKeyId: string;
  /**
   * @type ApplicationKeyUpdateRequest
   */
  body: ApplicationKeyUpdateRequest;
}

export class ServiceAccountsApi {
  private requestFactory: ServiceAccountsApiRequestFactory;
  private responseProcessor: ServiceAccountsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ServiceAccountsApiRequestFactory,
    responseProcessor?: ServiceAccountsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ServiceAccountsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ServiceAccountsApiResponseProcessor();
  }

  /**
   * Create a service account for your organization.
   * @param param The request object
   */
  public createServiceAccount(
    param: ServiceAccountsApiCreateServiceAccountRequest,
    options?: Configuration
  ): Promise<UserResponse> {
    const requestContextPromise = this.requestFactory.createServiceAccount(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createServiceAccount(responseContext);
        });
    });
  }

  /**
   * Create an application key for this service account.
   * @param param The request object
   */
  public createServiceAccountApplicationKey(
    param: ServiceAccountsApiCreateServiceAccountApplicationKeyRequest,
    options?: Configuration
  ): Promise<ApplicationKeyResponse> {
    const requestContextPromise =
      this.requestFactory.createServiceAccountApplicationKey(
        param.serviceAccountId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createServiceAccountApplicationKey(
            responseContext
          );
        });
    });
  }

  /**
   * Delete an application key owned by this service account.
   * @param param The request object
   */
  public deleteServiceAccountApplicationKey(
    param: ServiceAccountsApiDeleteServiceAccountApplicationKeyRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteServiceAccountApplicationKey(
        param.serviceAccountId,
        param.appKeyId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteServiceAccountApplicationKey(
            responseContext
          );
        });
    });
  }

  /**
   * Get an application key owned by this service account.
   * @param param The request object
   */
  public getServiceAccountApplicationKey(
    param: ServiceAccountsApiGetServiceAccountApplicationKeyRequest,
    options?: Configuration
  ): Promise<PartialApplicationKeyResponse> {
    const requestContextPromise =
      this.requestFactory.getServiceAccountApplicationKey(
        param.serviceAccountId,
        param.appKeyId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getServiceAccountApplicationKey(
            responseContext
          );
        });
    });
  }

  /**
   * List all application keys available for this service account.
   * @param param The request object
   */
  public listServiceAccountApplicationKeys(
    param: ServiceAccountsApiListServiceAccountApplicationKeysRequest,
    options?: Configuration
  ): Promise<ListApplicationKeysResponse> {
    const requestContextPromise =
      this.requestFactory.listServiceAccountApplicationKeys(
        param.serviceAccountId,
        param.pageSize,
        param.pageNumber,
        param.sort,
        param.filter,
        param.filterCreatedAtStart,
        param.filterCreatedAtEnd,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listServiceAccountApplicationKeys(
            responseContext
          );
        });
    });
  }

  /**
   * Edit an application key owned by this service account.
   * @param param The request object
   */
  public updateServiceAccountApplicationKey(
    param: ServiceAccountsApiUpdateServiceAccountApplicationKeyRequest,
    options?: Configuration
  ): Promise<PartialApplicationKeyResponse> {
    const requestContextPromise =
      this.requestFactory.updateServiceAccountApplicationKey(
        param.serviceAccountId,
        param.appKeyId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateServiceAccountApplicationKey(
            responseContext
          );
        });
    });
  }
}
