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
import { RelationshipToRole } from "../models/RelationshipToRole";
import { RestrictionQueryCreatePayload } from "../models/RestrictionQueryCreatePayload";
import { RestrictionQueryListResponse } from "../models/RestrictionQueryListResponse";
import { RestrictionQueryRolesResponse } from "../models/RestrictionQueryRolesResponse";
import { RestrictionQueryUpdatePayload } from "../models/RestrictionQueryUpdatePayload";
import { RestrictionQueryWithoutRelationshipsResponse } from "../models/RestrictionQueryWithoutRelationshipsResponse";
import { RestrictionQueryWithRelationshipsResponse } from "../models/RestrictionQueryWithRelationshipsResponse";

export class LogsRestrictionQueriesApiRequestFactory extends BaseAPIRequestFactory {
  public async addRoleToRestrictionQuery(
    restrictionQueryId: string,
    body: RelationshipToRole,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'addRoleToRestrictionQuery'");
    if (!_config.unstableOperations["v2.addRoleToRestrictionQuery"]) {
      throw new Error(
        "Unstable operation 'addRoleToRestrictionQuery' is disabled"
      );
    }

    // verify required parameter 'restrictionQueryId' is not null or undefined
    if (restrictionQueryId === null || restrictionQueryId === undefined) {
      throw new RequiredError(
        "restrictionQueryId",
        "addRoleToRestrictionQuery"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "addRoleToRestrictionQuery");
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/restriction_queries/{restriction_query_id}/roles".replace(
        "{restriction_query_id}",
        encodeURIComponent(String(restrictionQueryId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsRestrictionQueriesApi.addRoleToRestrictionQuery")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RelationshipToRole", ""),
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

  public async createRestrictionQuery(
    body: RestrictionQueryCreatePayload,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createRestrictionQuery'");
    if (!_config.unstableOperations["v2.createRestrictionQuery"]) {
      throw new Error(
        "Unstable operation 'createRestrictionQuery' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRestrictionQuery");
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/restriction_queries";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsRestrictionQueriesApi.createRestrictionQuery")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RestrictionQueryCreatePayload", ""),
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

  public async deleteRestrictionQuery(
    restrictionQueryId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteRestrictionQuery'");
    if (!_config.unstableOperations["v2.deleteRestrictionQuery"]) {
      throw new Error(
        "Unstable operation 'deleteRestrictionQuery' is disabled"
      );
    }

    // verify required parameter 'restrictionQueryId' is not null or undefined
    if (restrictionQueryId === null || restrictionQueryId === undefined) {
      throw new RequiredError("restrictionQueryId", "deleteRestrictionQuery");
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/restriction_queries/{restriction_query_id}".replace(
        "{restriction_query_id}",
        encodeURIComponent(String(restrictionQueryId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsRestrictionQueriesApi.deleteRestrictionQuery")
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

  public async getRestrictionQuery(
    restrictionQueryId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getRestrictionQuery'");
    if (!_config.unstableOperations["v2.getRestrictionQuery"]) {
      throw new Error("Unstable operation 'getRestrictionQuery' is disabled");
    }

    // verify required parameter 'restrictionQueryId' is not null or undefined
    if (restrictionQueryId === null || restrictionQueryId === undefined) {
      throw new RequiredError("restrictionQueryId", "getRestrictionQuery");
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/restriction_queries/{restriction_query_id}".replace(
        "{restriction_query_id}",
        encodeURIComponent(String(restrictionQueryId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsRestrictionQueriesApi.getRestrictionQuery")
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

  public async getRoleRestrictionQuery(
    roleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getRoleRestrictionQuery'");
    if (!_config.unstableOperations["v2.getRoleRestrictionQuery"]) {
      throw new Error(
        "Unstable operation 'getRoleRestrictionQuery' is disabled"
      );
    }

    // verify required parameter 'roleId' is not null or undefined
    if (roleId === null || roleId === undefined) {
      throw new RequiredError("roleId", "getRoleRestrictionQuery");
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/restriction_queries/role/{role_id}".replace(
        "{role_id}",
        encodeURIComponent(String(roleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsRestrictionQueriesApi.getRoleRestrictionQuery")
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

  public async listRestrictionQueries(
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listRestrictionQueries'");
    if (!_config.unstableOperations["v2.listRestrictionQueries"]) {
      throw new Error(
        "Unstable operation 'listRestrictionQueries' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/restriction_queries";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsRestrictionQueriesApi.listRestrictionQueries")
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listRestrictionQueryRoles(
    restrictionQueryId: string,
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listRestrictionQueryRoles'");
    if (!_config.unstableOperations["v2.listRestrictionQueryRoles"]) {
      throw new Error(
        "Unstable operation 'listRestrictionQueryRoles' is disabled"
      );
    }

    // verify required parameter 'restrictionQueryId' is not null or undefined
    if (restrictionQueryId === null || restrictionQueryId === undefined) {
      throw new RequiredError(
        "restrictionQueryId",
        "listRestrictionQueryRoles"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/restriction_queries/{restriction_query_id}/roles".replace(
        "{restriction_query_id}",
        encodeURIComponent(String(restrictionQueryId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsRestrictionQueriesApi.listRestrictionQueryRoles")
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listUserRestrictionQueries(
    userId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listUserRestrictionQueries'");
    if (!_config.unstableOperations["v2.listUserRestrictionQueries"]) {
      throw new Error(
        "Unstable operation 'listUserRestrictionQueries' is disabled"
      );
    }

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError("userId", "listUserRestrictionQueries");
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/restriction_queries/user/{user_id}".replace(
        "{user_id}",
        encodeURIComponent(String(userId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsRestrictionQueriesApi.listUserRestrictionQueries")
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

  public async removeRoleFromRestrictionQuery(
    restrictionQueryId: string,
    body: RelationshipToRole,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'removeRoleFromRestrictionQuery'");
    if (!_config.unstableOperations["v2.removeRoleFromRestrictionQuery"]) {
      throw new Error(
        "Unstable operation 'removeRoleFromRestrictionQuery' is disabled"
      );
    }

    // verify required parameter 'restrictionQueryId' is not null or undefined
    if (restrictionQueryId === null || restrictionQueryId === undefined) {
      throw new RequiredError(
        "restrictionQueryId",
        "removeRoleFromRestrictionQuery"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "removeRoleFromRestrictionQuery");
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/restriction_queries/{restriction_query_id}/roles".replace(
        "{restriction_query_id}",
        encodeURIComponent(String(restrictionQueryId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsRestrictionQueriesApi.removeRoleFromRestrictionQuery")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RelationshipToRole", ""),
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

  public async replaceRestrictionQuery(
    restrictionQueryId: string,
    body: RestrictionQueryUpdatePayload,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'replaceRestrictionQuery'");
    if (!_config.unstableOperations["v2.replaceRestrictionQuery"]) {
      throw new Error(
        "Unstable operation 'replaceRestrictionQuery' is disabled"
      );
    }

    // verify required parameter 'restrictionQueryId' is not null or undefined
    if (restrictionQueryId === null || restrictionQueryId === undefined) {
      throw new RequiredError("restrictionQueryId", "replaceRestrictionQuery");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "replaceRestrictionQuery");
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/restriction_queries/{restriction_query_id}".replace(
        "{restriction_query_id}",
        encodeURIComponent(String(restrictionQueryId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsRestrictionQueriesApi.replaceRestrictionQuery")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RestrictionQueryUpdatePayload", ""),
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

  public async updateRestrictionQuery(
    restrictionQueryId: string,
    body: RestrictionQueryUpdatePayload,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateRestrictionQuery'");
    if (!_config.unstableOperations["v2.updateRestrictionQuery"]) {
      throw new Error(
        "Unstable operation 'updateRestrictionQuery' is disabled"
      );
    }

    // verify required parameter 'restrictionQueryId' is not null or undefined
    if (restrictionQueryId === null || restrictionQueryId === undefined) {
      throw new RequiredError("restrictionQueryId", "updateRestrictionQuery");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateRestrictionQuery");
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/restriction_queries/{restriction_query_id}".replace(
        "{restriction_query_id}",
        encodeURIComponent(String(restrictionQueryId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsRestrictionQueriesApi.updateRestrictionQuery")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RestrictionQueryUpdatePayload", ""),
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

export class LogsRestrictionQueriesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to addRoleToRestrictionQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async addRoleToRestrictionQuery(
    response: ResponseContext
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to createRestrictionQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRestrictionQuery(
    response: ResponseContext
  ): Promise<RestrictionQueryWithoutRelationshipsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RestrictionQueryWithoutRelationshipsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "RestrictionQueryWithoutRelationshipsResponse"
        ) as RestrictionQueryWithoutRelationshipsResponse;
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
      const body: RestrictionQueryWithoutRelationshipsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "RestrictionQueryWithoutRelationshipsResponse",
          ""
        ) as RestrictionQueryWithoutRelationshipsResponse;
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
   * @params response Response returned by the server for a request to deleteRestrictionQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRestrictionQuery(
    response: ResponseContext
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to getRestrictionQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRestrictionQuery(
    response: ResponseContext
  ): Promise<RestrictionQueryWithRelationshipsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RestrictionQueryWithRelationshipsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "RestrictionQueryWithRelationshipsResponse"
        ) as RestrictionQueryWithRelationshipsResponse;
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
      const body: RestrictionQueryWithRelationshipsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "RestrictionQueryWithRelationshipsResponse",
          ""
        ) as RestrictionQueryWithRelationshipsResponse;
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
   * @params response Response returned by the server for a request to getRoleRestrictionQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRoleRestrictionQuery(
    response: ResponseContext
  ): Promise<RestrictionQueryListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RestrictionQueryListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RestrictionQueryListResponse"
      ) as RestrictionQueryListResponse;
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
      const body: RestrictionQueryListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RestrictionQueryListResponse",
        ""
      ) as RestrictionQueryListResponse;
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
   * @params response Response returned by the server for a request to listRestrictionQueries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRestrictionQueries(
    response: ResponseContext
  ): Promise<RestrictionQueryListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RestrictionQueryListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RestrictionQueryListResponse"
      ) as RestrictionQueryListResponse;
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
      const body: RestrictionQueryListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RestrictionQueryListResponse",
        ""
      ) as RestrictionQueryListResponse;
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
   * @params response Response returned by the server for a request to listRestrictionQueryRoles
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRestrictionQueryRoles(
    response: ResponseContext
  ): Promise<RestrictionQueryRolesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RestrictionQueryRolesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RestrictionQueryRolesResponse"
      ) as RestrictionQueryRolesResponse;
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
      const body: RestrictionQueryRolesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RestrictionQueryRolesResponse",
        ""
      ) as RestrictionQueryRolesResponse;
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
   * @params response Response returned by the server for a request to listUserRestrictionQueries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listUserRestrictionQueries(
    response: ResponseContext
  ): Promise<RestrictionQueryListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RestrictionQueryListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RestrictionQueryListResponse"
      ) as RestrictionQueryListResponse;
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
      const body: RestrictionQueryListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RestrictionQueryListResponse",
        ""
      ) as RestrictionQueryListResponse;
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
   * @params response Response returned by the server for a request to removeRoleFromRestrictionQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async removeRoleFromRestrictionQuery(
    response: ResponseContext
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to replaceRestrictionQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async replaceRestrictionQuery(
    response: ResponseContext
  ): Promise<RestrictionQueryWithoutRelationshipsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RestrictionQueryWithoutRelationshipsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "RestrictionQueryWithoutRelationshipsResponse"
        ) as RestrictionQueryWithoutRelationshipsResponse;
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
      const body: RestrictionQueryWithoutRelationshipsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "RestrictionQueryWithoutRelationshipsResponse",
          ""
        ) as RestrictionQueryWithoutRelationshipsResponse;
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
   * @params response Response returned by the server for a request to updateRestrictionQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRestrictionQuery(
    response: ResponseContext
  ): Promise<RestrictionQueryWithoutRelationshipsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RestrictionQueryWithoutRelationshipsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "RestrictionQueryWithoutRelationshipsResponse"
        ) as RestrictionQueryWithoutRelationshipsResponse;
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
      const body: RestrictionQueryWithoutRelationshipsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "RestrictionQueryWithoutRelationshipsResponse",
          ""
        ) as RestrictionQueryWithoutRelationshipsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface LogsRestrictionQueriesApiAddRoleToRestrictionQueryRequest {
  /**
   * The ID of the restriction query.
   * @type string
   */
  restrictionQueryId: string;
  /**
   * @type RelationshipToRole
   */
  body: RelationshipToRole;
}

export interface LogsRestrictionQueriesApiCreateRestrictionQueryRequest {
  /**
   * @type RestrictionQueryCreatePayload
   */
  body: RestrictionQueryCreatePayload;
}

export interface LogsRestrictionQueriesApiDeleteRestrictionQueryRequest {
  /**
   * The ID of the restriction query.
   * @type string
   */
  restrictionQueryId: string;
}

export interface LogsRestrictionQueriesApiGetRestrictionQueryRequest {
  /**
   * The ID of the restriction query.
   * @type string
   */
  restrictionQueryId: string;
}

export interface LogsRestrictionQueriesApiGetRoleRestrictionQueryRequest {
  /**
   * The ID of the role.
   * @type string
   */
  roleId: string;
}

export interface LogsRestrictionQueriesApiListRestrictionQueriesRequest {
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
}

export interface LogsRestrictionQueriesApiListRestrictionQueryRolesRequest {
  /**
   * The ID of the restriction query.
   * @type string
   */
  restrictionQueryId: string;
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
}

export interface LogsRestrictionQueriesApiListUserRestrictionQueriesRequest {
  /**
   * The ID of the user.
   * @type string
   */
  userId: string;
}

export interface LogsRestrictionQueriesApiRemoveRoleFromRestrictionQueryRequest {
  /**
   * The ID of the restriction query.
   * @type string
   */
  restrictionQueryId: string;
  /**
   * @type RelationshipToRole
   */
  body: RelationshipToRole;
}

export interface LogsRestrictionQueriesApiReplaceRestrictionQueryRequest {
  /**
   * The ID of the restriction query.
   * @type string
   */
  restrictionQueryId: string;
  /**
   * @type RestrictionQueryUpdatePayload
   */
  body: RestrictionQueryUpdatePayload;
}

export interface LogsRestrictionQueriesApiUpdateRestrictionQueryRequest {
  /**
   * The ID of the restriction query.
   * @type string
   */
  restrictionQueryId: string;
  /**
   * @type RestrictionQueryUpdatePayload
   */
  body: RestrictionQueryUpdatePayload;
}

export class LogsRestrictionQueriesApi {
  private requestFactory: LogsRestrictionQueriesApiRequestFactory;
  private responseProcessor: LogsRestrictionQueriesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: LogsRestrictionQueriesApiRequestFactory,
    responseProcessor?: LogsRestrictionQueriesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new LogsRestrictionQueriesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new LogsRestrictionQueriesApiResponseProcessor();
  }

  /**
   * Adds a role to a restriction query.
   *
   * **Note**: This operation automatically grants the `logs_read_data` permission to the role if it doesn't already have it.
   * @param param The request object
   */
  public addRoleToRestrictionQuery(
    param: LogsRestrictionQueriesApiAddRoleToRestrictionQueryRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.addRoleToRestrictionQuery(
      param.restrictionQueryId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.addRoleToRestrictionQuery(
            responseContext
          );
        });
    });
  }

  /**
   * Create a new restriction query for your organization.
   * @param param The request object
   */
  public createRestrictionQuery(
    param: LogsRestrictionQueriesApiCreateRestrictionQueryRequest,
    options?: Configuration
  ): Promise<RestrictionQueryWithoutRelationshipsResponse> {
    const requestContextPromise = this.requestFactory.createRestrictionQuery(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRestrictionQuery(responseContext);
        });
    });
  }

  /**
   * Deletes a restriction query.
   * @param param The request object
   */
  public deleteRestrictionQuery(
    param: LogsRestrictionQueriesApiDeleteRestrictionQueryRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRestrictionQuery(
      param.restrictionQueryId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRestrictionQuery(responseContext);
        });
    });
  }

  /**
   * Get a restriction query in the organization specified by the restriction query's `restriction_query_id`.
   * @param param The request object
   */
  public getRestrictionQuery(
    param: LogsRestrictionQueriesApiGetRestrictionQueryRequest,
    options?: Configuration
  ): Promise<RestrictionQueryWithRelationshipsResponse> {
    const requestContextPromise = this.requestFactory.getRestrictionQuery(
      param.restrictionQueryId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRestrictionQuery(responseContext);
        });
    });
  }

  /**
   * Get restriction query for a given role.
   * @param param The request object
   */
  public getRoleRestrictionQuery(
    param: LogsRestrictionQueriesApiGetRoleRestrictionQueryRequest,
    options?: Configuration
  ): Promise<RestrictionQueryListResponse> {
    const requestContextPromise = this.requestFactory.getRoleRestrictionQuery(
      param.roleId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRoleRestrictionQuery(
            responseContext
          );
        });
    });
  }

  /**
   * Returns all restriction queries, including their names and IDs.
   * @param param The request object
   */
  public listRestrictionQueries(
    param: LogsRestrictionQueriesApiListRestrictionQueriesRequest = {},
    options?: Configuration
  ): Promise<RestrictionQueryListResponse> {
    const requestContextPromise = this.requestFactory.listRestrictionQueries(
      param.pageSize,
      param.pageNumber,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRestrictionQueries(responseContext);
        });
    });
  }

  /**
   * Returns all roles that have a given restriction query.
   * @param param The request object
   */
  public listRestrictionQueryRoles(
    param: LogsRestrictionQueriesApiListRestrictionQueryRolesRequest,
    options?: Configuration
  ): Promise<RestrictionQueryRolesResponse> {
    const requestContextPromise = this.requestFactory.listRestrictionQueryRoles(
      param.restrictionQueryId,
      param.pageSize,
      param.pageNumber,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRestrictionQueryRoles(
            responseContext
          );
        });
    });
  }

  /**
   * Get all restriction queries for a given user.
   * @param param The request object
   */
  public listUserRestrictionQueries(
    param: LogsRestrictionQueriesApiListUserRestrictionQueriesRequest,
    options?: Configuration
  ): Promise<RestrictionQueryListResponse> {
    const requestContextPromise =
      this.requestFactory.listUserRestrictionQueries(param.userId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listUserRestrictionQueries(
            responseContext
          );
        });
    });
  }

  /**
   * Removes a role from a restriction query.
   * @param param The request object
   */
  public removeRoleFromRestrictionQuery(
    param: LogsRestrictionQueriesApiRemoveRoleFromRestrictionQueryRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.removeRoleFromRestrictionQuery(
        param.restrictionQueryId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.removeRoleFromRestrictionQuery(
            responseContext
          );
        });
    });
  }

  /**
   * Replace a restriction query.
   * @param param The request object
   */
  public replaceRestrictionQuery(
    param: LogsRestrictionQueriesApiReplaceRestrictionQueryRequest,
    options?: Configuration
  ): Promise<RestrictionQueryWithoutRelationshipsResponse> {
    const requestContextPromise = this.requestFactory.replaceRestrictionQuery(
      param.restrictionQueryId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.replaceRestrictionQuery(
            responseContext
          );
        });
    });
  }

  /**
   * Edit a restriction query.
   * @param param The request object
   */
  public updateRestrictionQuery(
    param: LogsRestrictionQueriesApiUpdateRestrictionQueryRequest,
    options?: Configuration
  ): Promise<RestrictionQueryWithoutRelationshipsResponse> {
    const requestContextPromise = this.requestFactory.updateRestrictionQuery(
      param.restrictionQueryId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRestrictionQuery(responseContext);
        });
    });
  }
}
