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
import { CreateConnectionRequest } from "../models/CreateConnectionRequest";
import { FacetInfoRequest } from "../models/FacetInfoRequest";
import { FacetInfoResponse } from "../models/FacetInfoResponse";
import { GetMappingResponse } from "../models/GetMappingResponse";
import { ListConnectionsResponse } from "../models/ListConnectionsResponse";
import { QueryAccountRequest } from "../models/QueryAccountRequest";
import { QueryEventFilteredUsersRequest } from "../models/QueryEventFilteredUsersRequest";
import { QueryResponse } from "../models/QueryResponse";
import { QueryUsersRequest } from "../models/QueryUsersRequest";
import { UpdateConnectionRequest } from "../models/UpdateConnectionRequest";

export class RumAudienceManagementApiRequestFactory extends BaseAPIRequestFactory {
  public async createConnection(
    entity: string,
    body: CreateConnectionRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createConnection'");
    if (!_config.unstableOperations["v2.createConnection"]) {
      throw new Error("Unstable operation 'createConnection' is disabled");
    }

    // verify required parameter 'entity' is not null or undefined
    if (entity === null || entity === undefined) {
      throw new RequiredError("entity", "createConnection");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createConnection");
    }

    // Path Params
    const localVarPath =
      "/api/v2/product-analytics/{entity}/mapping/connection".replace(
        "{entity}",
        encodeURIComponent(String(entity))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumAudienceManagementApi.createConnection")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateConnectionRequest", ""),
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

  public async deleteConnection(
    id: string,
    entity: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteConnection'");
    if (!_config.unstableOperations["v2.deleteConnection"]) {
      throw new Error("Unstable operation 'deleteConnection' is disabled");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteConnection");
    }

    // verify required parameter 'entity' is not null or undefined
    if (entity === null || entity === undefined) {
      throw new RequiredError("entity", "deleteConnection");
    }

    // Path Params
    const localVarPath =
      "/api/v2/product-analytics/{entity}/mapping/connection/{id}"
        .replace("{id}", encodeURIComponent(String(id)))
        .replace("{entity}", encodeURIComponent(String(entity)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumAudienceManagementApi.deleteConnection")
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

  public async getAccountFacetInfo(
    body: FacetInfoRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getAccountFacetInfo'");
    if (!_config.unstableOperations["v2.getAccountFacetInfo"]) {
      throw new Error("Unstable operation 'getAccountFacetInfo' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "getAccountFacetInfo");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/accounts/facet_info";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumAudienceManagementApi.getAccountFacetInfo")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "FacetInfoRequest", ""),
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

  public async getMapping(
    entity: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getMapping'");
    if (!_config.unstableOperations["v2.getMapping"]) {
      throw new Error("Unstable operation 'getMapping' is disabled");
    }

    // verify required parameter 'entity' is not null or undefined
    if (entity === null || entity === undefined) {
      throw new RequiredError("entity", "getMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/{entity}/mapping".replace(
      "{entity}",
      encodeURIComponent(String(entity))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumAudienceManagementApi.getMapping")
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

  public async getUserFacetInfo(
    body: FacetInfoRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getUserFacetInfo'");
    if (!_config.unstableOperations["v2.getUserFacetInfo"]) {
      throw new Error("Unstable operation 'getUserFacetInfo' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "getUserFacetInfo");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/users/facet_info";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumAudienceManagementApi.getUserFacetInfo")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "FacetInfoRequest", ""),
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

  public async listConnections(
    entity: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listConnections'");
    if (!_config.unstableOperations["v2.listConnections"]) {
      throw new Error("Unstable operation 'listConnections' is disabled");
    }

    // verify required parameter 'entity' is not null or undefined
    if (entity === null || entity === undefined) {
      throw new RequiredError("entity", "listConnections");
    }

    // Path Params
    const localVarPath =
      "/api/v2/product-analytics/{entity}/mapping/connections".replace(
        "{entity}",
        encodeURIComponent(String(entity))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumAudienceManagementApi.listConnections")
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

  public async queryAccounts(
    body: QueryAccountRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'queryAccounts'");
    if (!_config.unstableOperations["v2.queryAccounts"]) {
      throw new Error("Unstable operation 'queryAccounts' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryAccounts");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/accounts/query";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumAudienceManagementApi.queryAccounts")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "QueryAccountRequest", ""),
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

  public async queryEventFilteredUsers(
    body: QueryEventFilteredUsersRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'queryEventFilteredUsers'");
    if (!_config.unstableOperations["v2.queryEventFilteredUsers"]) {
      throw new Error(
        "Unstable operation 'queryEventFilteredUsers' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryEventFilteredUsers");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/users/event_filtered_query";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumAudienceManagementApi.queryEventFilteredUsers")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "QueryEventFilteredUsersRequest", ""),
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

  public async queryUsers(
    body: QueryUsersRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'queryUsers'");
    if (!_config.unstableOperations["v2.queryUsers"]) {
      throw new Error("Unstable operation 'queryUsers' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryUsers");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/users/query";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumAudienceManagementApi.queryUsers")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "QueryUsersRequest", ""),
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

  public async updateConnection(
    entity: string,
    body: UpdateConnectionRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateConnection'");
    if (!_config.unstableOperations["v2.updateConnection"]) {
      throw new Error("Unstable operation 'updateConnection' is disabled");
    }

    // verify required parameter 'entity' is not null or undefined
    if (entity === null || entity === undefined) {
      throw new RequiredError("entity", "updateConnection");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateConnection");
    }

    // Path Params
    const localVarPath =
      "/api/v2/product-analytics/{entity}/mapping/connection".replace(
        "{entity}",
        encodeURIComponent(String(entity))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumAudienceManagementApi.updateConnection")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UpdateConnectionRequest", ""),
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

export class RumAudienceManagementApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createConnection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createConnection(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      return;
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
   * @params response Response returned by the server for a request to deleteConnection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteConnection(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to getAccountFacetInfo
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAccountFacetInfo(
    response: ResponseContext
  ): Promise<FacetInfoResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FacetInfoResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FacetInfoResponse"
      ) as FacetInfoResponse;
      return body;
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
      const body: FacetInfoResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FacetInfoResponse",
        ""
      ) as FacetInfoResponse;
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
   * @params response Response returned by the server for a request to getMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMapping(
    response: ResponseContext
  ): Promise<GetMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GetMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetMappingResponse"
      ) as GetMappingResponse;
      return body;
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
      const body: GetMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetMappingResponse",
        ""
      ) as GetMappingResponse;
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
   * @params response Response returned by the server for a request to getUserFacetInfo
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUserFacetInfo(
    response: ResponseContext
  ): Promise<FacetInfoResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FacetInfoResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FacetInfoResponse"
      ) as FacetInfoResponse;
      return body;
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
      const body: FacetInfoResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FacetInfoResponse",
        ""
      ) as FacetInfoResponse;
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
   * @params response Response returned by the server for a request to listConnections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listConnections(
    response: ResponseContext
  ): Promise<ListConnectionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListConnectionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListConnectionsResponse"
      ) as ListConnectionsResponse;
      return body;
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
      const body: ListConnectionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListConnectionsResponse",
        ""
      ) as ListConnectionsResponse;
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
   * @params response Response returned by the server for a request to queryAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryAccounts(
    response: ResponseContext
  ): Promise<QueryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: QueryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueryResponse"
      ) as QueryResponse;
      return body;
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
      const body: QueryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueryResponse",
        ""
      ) as QueryResponse;
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
   * @params response Response returned by the server for a request to queryEventFilteredUsers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryEventFilteredUsers(
    response: ResponseContext
  ): Promise<QueryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: QueryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueryResponse"
      ) as QueryResponse;
      return body;
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
      const body: QueryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueryResponse",
        ""
      ) as QueryResponse;
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
   * @params response Response returned by the server for a request to queryUsers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryUsers(response: ResponseContext): Promise<QueryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: QueryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueryResponse"
      ) as QueryResponse;
      return body;
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
      const body: QueryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueryResponse",
        ""
      ) as QueryResponse;
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
   * @params response Response returned by the server for a request to updateConnection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateConnection(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      return;
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
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface RumAudienceManagementApiCreateConnectionRequest {
  /**
   * The entity for which to create the connection
   * @type string
   */
  entity: string;
  /**
   * @type CreateConnectionRequest
   */
  body: CreateConnectionRequest;
}

export interface RumAudienceManagementApiDeleteConnectionRequest {
  /**
   * The connection ID to delete
   * @type string
   */
  id: string;
  /**
   * The entity for which to delete the connection
   * @type string
   */
  entity: string;
}

export interface RumAudienceManagementApiGetAccountFacetInfoRequest {
  /**
   * @type FacetInfoRequest
   */
  body: FacetInfoRequest;
}

export interface RumAudienceManagementApiGetMappingRequest {
  /**
   * The entity for which to get the mapping
   * @type string
   */
  entity: string;
}

export interface RumAudienceManagementApiGetUserFacetInfoRequest {
  /**
   * @type FacetInfoRequest
   */
  body: FacetInfoRequest;
}

export interface RumAudienceManagementApiListConnectionsRequest {
  /**
   * The entity for which to list connections
   * @type string
   */
  entity: string;
}

export interface RumAudienceManagementApiQueryAccountsRequest {
  /**
   * @type QueryAccountRequest
   */
  body: QueryAccountRequest;
}

export interface RumAudienceManagementApiQueryEventFilteredUsersRequest {
  /**
   * @type QueryEventFilteredUsersRequest
   */
  body: QueryEventFilteredUsersRequest;
}

export interface RumAudienceManagementApiQueryUsersRequest {
  /**
   * @type QueryUsersRequest
   */
  body: QueryUsersRequest;
}

export interface RumAudienceManagementApiUpdateConnectionRequest {
  /**
   * The entity for which to update the connection
   * @type string
   */
  entity: string;
  /**
   * @type UpdateConnectionRequest
   */
  body: UpdateConnectionRequest;
}

export class RumAudienceManagementApi {
  private requestFactory: RumAudienceManagementApiRequestFactory;
  private responseProcessor: RumAudienceManagementApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: RumAudienceManagementApiRequestFactory,
    responseProcessor?: RumAudienceManagementApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new RumAudienceManagementApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new RumAudienceManagementApiResponseProcessor();
  }

  /**
   * Create a new data connection and its fields for an entity
   * @param param The request object
   */
  public createConnection(
    param: RumAudienceManagementApiCreateConnectionRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.createConnection(
      param.entity,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createConnection(responseContext);
        });
    });
  }

  /**
   * Delete an existing data connection for an entity
   * @param param The request object
   */
  public deleteConnection(
    param: RumAudienceManagementApiDeleteConnectionRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteConnection(
      param.id,
      param.entity,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteConnection(responseContext);
        });
    });
  }

  /**
   * Get facet information for account attributes including possible values and counts
   * @param param The request object
   */
  public getAccountFacetInfo(
    param: RumAudienceManagementApiGetAccountFacetInfoRequest,
    options?: Configuration
  ): Promise<FacetInfoResponse> {
    const requestContextPromise = this.requestFactory.getAccountFacetInfo(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAccountFacetInfo(responseContext);
        });
    });
  }

  /**
   * Get entity mapping configuration including all available attributes and their properties
   * @param param The request object
   */
  public getMapping(
    param: RumAudienceManagementApiGetMappingRequest,
    options?: Configuration
  ): Promise<GetMappingResponse> {
    const requestContextPromise = this.requestFactory.getMapping(
      param.entity,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMapping(responseContext);
        });
    });
  }

  /**
   * Get facet information for user attributes including possible values and counts
   * @param param The request object
   */
  public getUserFacetInfo(
    param: RumAudienceManagementApiGetUserFacetInfoRequest,
    options?: Configuration
  ): Promise<FacetInfoResponse> {
    const requestContextPromise = this.requestFactory.getUserFacetInfo(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUserFacetInfo(responseContext);
        });
    });
  }

  /**
   * List all data connections for an entity
   * @param param The request object
   */
  public listConnections(
    param: RumAudienceManagementApiListConnectionsRequest,
    options?: Configuration
  ): Promise<ListConnectionsResponse> {
    const requestContextPromise = this.requestFactory.listConnections(
      param.entity,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listConnections(responseContext);
        });
    });
  }

  /**
   * Query accounts with flexible filtering by account properties
   * @param param The request object
   */
  public queryAccounts(
    param: RumAudienceManagementApiQueryAccountsRequest,
    options?: Configuration
  ): Promise<QueryResponse> {
    const requestContextPromise = this.requestFactory.queryAccounts(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryAccounts(responseContext);
        });
    });
  }

  /**
   * Query users filtered by both user properties and event platform data
   * @param param The request object
   */
  public queryEventFilteredUsers(
    param: RumAudienceManagementApiQueryEventFilteredUsersRequest,
    options?: Configuration
  ): Promise<QueryResponse> {
    const requestContextPromise = this.requestFactory.queryEventFilteredUsers(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryEventFilteredUsers(
            responseContext
          );
        });
    });
  }

  /**
   * Query users with flexible filtering by user properties, with optional wildcard search
   * @param param The request object
   */
  public queryUsers(
    param: RumAudienceManagementApiQueryUsersRequest,
    options?: Configuration
  ): Promise<QueryResponse> {
    const requestContextPromise = this.requestFactory.queryUsers(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryUsers(responseContext);
        });
    });
  }

  /**
   * Update an existing data connection by adding, updating, or deleting fields
   * @param param The request object
   */
  public updateConnection(
    param: RumAudienceManagementApiUpdateConnectionRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.updateConnection(
      param.entity,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateConnection(responseContext);
        });
    });
  }
}
