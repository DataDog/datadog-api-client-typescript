import {
  ApiException,
  BaseAPIRequestFactory,
  BaseServerConfiguration,
  buildUserAgent,
  Configuration,
  createConfiguration,
  deserialize,
  getPreferredMediaType,
  HttpMethod,
  isBrowser,
  logger,
  normalizeMediaType,
  parse,
  RequiredError,
  RequestContext,
  ResponseContext,
  serialize,
  ServerConfiguration,
  stringify,
  applySecurityAuthentication,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { RelationshipToRole } from "./models/RelationshipToRole";
import { RestrictionQueryCreatePayload } from "./models/RestrictionQueryCreatePayload";
import { RestrictionQueryListResponse } from "./models/RestrictionQueryListResponse";
import { RestrictionQueryRolesResponse } from "./models/RestrictionQueryRolesResponse";
import { RestrictionQueryUpdatePayload } from "./models/RestrictionQueryUpdatePayload";
import { RestrictionQueryWithoutRelationshipsResponse } from "./models/RestrictionQueryWithoutRelationshipsResponse";
import { RestrictionQueryWithRelationshipsResponse } from "./models/RestrictionQueryWithRelationshipsResponse";
import { version } from "../version";

export class LogsRestrictionQueriesApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("logs-restriction-queries", version);
    }
  }
  public async addRoleToRestrictionQuery(
    restrictionQueryId: string,
    body: RelationshipToRole,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LogsRestrictionQueriesApi.v2.addRoleToRestrictionQuery"
      ]
    ) {
      throw new Error(
        "Unstable operation 'addRoleToRestrictionQuery' is disabled. Enable it by setting `configuration.unstableOperations['LogsRestrictionQueriesApi.v2.addRoleToRestrictionQuery'] = true`",
      );
    }

    // verify required parameter 'restrictionQueryId' is not null or undefined
    if (restrictionQueryId === null || restrictionQueryId === undefined) {
      throw new RequiredError(
        "restrictionQueryId",
        "addRoleToRestrictionQuery",
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
        encodeURIComponent(String(restrictionQueryId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsRestrictionQueriesApi.v2.addRoleToRestrictionQuery",
      LogsRestrictionQueriesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "RelationshipToRole", ""),
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

  public async createRestrictionQuery(
    body: RestrictionQueryCreatePayload,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LogsRestrictionQueriesApi.v2.createRestrictionQuery"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createRestrictionQuery' is disabled. Enable it by setting `configuration.unstableOperations['LogsRestrictionQueriesApi.v2.createRestrictionQuery'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRestrictionQuery");
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/restriction_queries";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsRestrictionQueriesApi.v2.createRestrictionQuery",
      LogsRestrictionQueriesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "RestrictionQueryCreatePayload", ""),
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

  public async deleteRestrictionQuery(
    restrictionQueryId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LogsRestrictionQueriesApi.v2.deleteRestrictionQuery"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteRestrictionQuery' is disabled. Enable it by setting `configuration.unstableOperations['LogsRestrictionQueriesApi.v2.deleteRestrictionQuery'] = true`",
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
        encodeURIComponent(String(restrictionQueryId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsRestrictionQueriesApi.v2.deleteRestrictionQuery",
      LogsRestrictionQueriesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getRestrictionQuery(
    restrictionQueryId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LogsRestrictionQueriesApi.v2.getRestrictionQuery"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getRestrictionQuery' is disabled. Enable it by setting `configuration.unstableOperations['LogsRestrictionQueriesApi.v2.getRestrictionQuery'] = true`",
      );
    }

    // verify required parameter 'restrictionQueryId' is not null or undefined
    if (restrictionQueryId === null || restrictionQueryId === undefined) {
      throw new RequiredError("restrictionQueryId", "getRestrictionQuery");
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/restriction_queries/{restriction_query_id}".replace(
        "{restriction_query_id}",
        encodeURIComponent(String(restrictionQueryId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsRestrictionQueriesApi.v2.getRestrictionQuery",
      LogsRestrictionQueriesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getRoleRestrictionQuery(
    roleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LogsRestrictionQueriesApi.v2.getRoleRestrictionQuery"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getRoleRestrictionQuery' is disabled. Enable it by setting `configuration.unstableOperations['LogsRestrictionQueriesApi.v2.getRoleRestrictionQuery'] = true`",
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
        encodeURIComponent(String(roleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsRestrictionQueriesApi.v2.getRoleRestrictionQuery",
      LogsRestrictionQueriesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LogsRestrictionQueriesApi.v2.listRestrictionQueries"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listRestrictionQueries' is disabled. Enable it by setting `configuration.unstableOperations['LogsRestrictionQueriesApi.v2.listRestrictionQueries'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/restriction_queries";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsRestrictionQueriesApi.v2.listRestrictionQueries",
      LogsRestrictionQueriesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int64"),
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

  public async listRestrictionQueryRoles(
    restrictionQueryId: string,
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LogsRestrictionQueriesApi.v2.listRestrictionQueryRoles"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listRestrictionQueryRoles' is disabled. Enable it by setting `configuration.unstableOperations['LogsRestrictionQueriesApi.v2.listRestrictionQueryRoles'] = true`",
      );
    }

    // verify required parameter 'restrictionQueryId' is not null or undefined
    if (restrictionQueryId === null || restrictionQueryId === undefined) {
      throw new RequiredError(
        "restrictionQueryId",
        "listRestrictionQueryRoles",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/restriction_queries/{restriction_query_id}/roles".replace(
        "{restriction_query_id}",
        encodeURIComponent(String(restrictionQueryId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsRestrictionQueriesApi.v2.listRestrictionQueryRoles",
      LogsRestrictionQueriesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int64"),
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

  public async listUserRestrictionQueries(
    userId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LogsRestrictionQueriesApi.v2.listUserRestrictionQueries"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listUserRestrictionQueries' is disabled. Enable it by setting `configuration.unstableOperations['LogsRestrictionQueriesApi.v2.listUserRestrictionQueries'] = true`",
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
        encodeURIComponent(String(userId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsRestrictionQueriesApi.v2.listUserRestrictionQueries",
      LogsRestrictionQueriesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LogsRestrictionQueriesApi.v2.removeRoleFromRestrictionQuery"
      ]
    ) {
      throw new Error(
        "Unstable operation 'removeRoleFromRestrictionQuery' is disabled. Enable it by setting `configuration.unstableOperations['LogsRestrictionQueriesApi.v2.removeRoleFromRestrictionQuery'] = true`",
      );
    }

    // verify required parameter 'restrictionQueryId' is not null or undefined
    if (restrictionQueryId === null || restrictionQueryId === undefined) {
      throw new RequiredError(
        "restrictionQueryId",
        "removeRoleFromRestrictionQuery",
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
        encodeURIComponent(String(restrictionQueryId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsRestrictionQueriesApi.v2.removeRoleFromRestrictionQuery",
      LogsRestrictionQueriesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "RelationshipToRole", ""),
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

  public async replaceRestrictionQuery(
    restrictionQueryId: string,
    body: RestrictionQueryUpdatePayload,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LogsRestrictionQueriesApi.v2.replaceRestrictionQuery"
      ]
    ) {
      throw new Error(
        "Unstable operation 'replaceRestrictionQuery' is disabled. Enable it by setting `configuration.unstableOperations['LogsRestrictionQueriesApi.v2.replaceRestrictionQuery'] = true`",
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
        encodeURIComponent(String(restrictionQueryId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsRestrictionQueriesApi.v2.replaceRestrictionQuery",
      LogsRestrictionQueriesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "RestrictionQueryUpdatePayload", ""),
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

  public async updateRestrictionQuery(
    restrictionQueryId: string,
    body: RestrictionQueryUpdatePayload,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LogsRestrictionQueriesApi.v2.updateRestrictionQuery"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateRestrictionQuery' is disabled. Enable it by setting `configuration.unstableOperations['LogsRestrictionQueriesApi.v2.updateRestrictionQuery'] = true`",
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
        encodeURIComponent(String(restrictionQueryId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsRestrictionQueriesApi.v2.updateRestrictionQuery",
      LogsRestrictionQueriesApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "RestrictionQueryUpdatePayload", ""),
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

export class LogsRestrictionQueriesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to addRoleToRestrictionQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async addRoleToRestrictionQuery(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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
   * @params response Response returned by the server for a request to createRestrictionQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRestrictionQuery(
    response: ResponseContext,
  ): Promise<RestrictionQueryWithoutRelationshipsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RestrictionQueryWithoutRelationshipsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RestrictionQueryWithoutRelationshipsResponse",
      ) as RestrictionQueryWithoutRelationshipsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
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
      const body: RestrictionQueryWithoutRelationshipsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RestrictionQueryWithoutRelationshipsResponse",
        "",
      ) as RestrictionQueryWithoutRelationshipsResponse;
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
   * @params response Response returned by the server for a request to deleteRestrictionQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRestrictionQuery(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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
   * @params response Response returned by the server for a request to getRestrictionQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRestrictionQuery(
    response: ResponseContext,
  ): Promise<RestrictionQueryWithRelationshipsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RestrictionQueryWithRelationshipsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RestrictionQueryWithRelationshipsResponse",
      ) as RestrictionQueryWithRelationshipsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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
      const body: RestrictionQueryWithRelationshipsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RestrictionQueryWithRelationshipsResponse",
        "",
      ) as RestrictionQueryWithRelationshipsResponse;
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
   * @params response Response returned by the server for a request to getRoleRestrictionQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRoleRestrictionQuery(
    response: ResponseContext,
  ): Promise<RestrictionQueryListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RestrictionQueryListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RestrictionQueryListResponse",
      ) as RestrictionQueryListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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
      const body: RestrictionQueryListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RestrictionQueryListResponse",
        "",
      ) as RestrictionQueryListResponse;
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
   * @params response Response returned by the server for a request to listRestrictionQueries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRestrictionQueries(
    response: ResponseContext,
  ): Promise<RestrictionQueryListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RestrictionQueryListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RestrictionQueryListResponse",
      ) as RestrictionQueryListResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: RestrictionQueryListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RestrictionQueryListResponse",
        "",
      ) as RestrictionQueryListResponse;
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
   * @params response Response returned by the server for a request to listRestrictionQueryRoles
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRestrictionQueryRoles(
    response: ResponseContext,
  ): Promise<RestrictionQueryRolesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RestrictionQueryRolesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RestrictionQueryRolesResponse",
      ) as RestrictionQueryRolesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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
      const body: RestrictionQueryRolesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RestrictionQueryRolesResponse",
        "",
      ) as RestrictionQueryRolesResponse;
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
   * @params response Response returned by the server for a request to listUserRestrictionQueries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listUserRestrictionQueries(
    response: ResponseContext,
  ): Promise<RestrictionQueryListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RestrictionQueryListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RestrictionQueryListResponse",
      ) as RestrictionQueryListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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
      const body: RestrictionQueryListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RestrictionQueryListResponse",
        "",
      ) as RestrictionQueryListResponse;
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
   * @params response Response returned by the server for a request to removeRoleFromRestrictionQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async removeRoleFromRestrictionQuery(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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
   * @params response Response returned by the server for a request to replaceRestrictionQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async replaceRestrictionQuery(
    response: ResponseContext,
  ): Promise<RestrictionQueryWithoutRelationshipsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RestrictionQueryWithoutRelationshipsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RestrictionQueryWithoutRelationshipsResponse",
      ) as RestrictionQueryWithoutRelationshipsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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
      const body: RestrictionQueryWithoutRelationshipsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RestrictionQueryWithoutRelationshipsResponse",
        "",
      ) as RestrictionQueryWithoutRelationshipsResponse;
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
   * @params response Response returned by the server for a request to updateRestrictionQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRestrictionQuery(
    response: ResponseContext,
  ): Promise<RestrictionQueryWithoutRelationshipsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RestrictionQueryWithoutRelationshipsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RestrictionQueryWithoutRelationshipsResponse",
      ) as RestrictionQueryWithoutRelationshipsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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
      const body: RestrictionQueryWithoutRelationshipsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RestrictionQueryWithoutRelationshipsResponse",
        "",
      ) as RestrictionQueryWithoutRelationshipsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
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

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: LogsRestrictionQueriesApiRequestFactory,
    responseProcessor?: LogsRestrictionQueriesApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new LogsRestrictionQueriesApiRequestFactory(this.configuration);
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.addRoleToRestrictionQuery(
      param.restrictionQueryId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.addRoleToRestrictionQuery(
            responseContext,
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
    options?: Configuration,
  ): Promise<RestrictionQueryWithoutRelationshipsResponse> {
    const requestContextPromise = this.requestFactory.createRestrictionQuery(
      param.body,
      options,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRestrictionQuery(
      param.restrictionQueryId,
      options,
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
    options?: Configuration,
  ): Promise<RestrictionQueryWithRelationshipsResponse> {
    const requestContextPromise = this.requestFactory.getRestrictionQuery(
      param.restrictionQueryId,
      options,
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
    options?: Configuration,
  ): Promise<RestrictionQueryListResponse> {
    const requestContextPromise = this.requestFactory.getRoleRestrictionQuery(
      param.roleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRoleRestrictionQuery(
            responseContext,
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
    options?: Configuration,
  ): Promise<RestrictionQueryListResponse> {
    const requestContextPromise = this.requestFactory.listRestrictionQueries(
      param.pageSize,
      param.pageNumber,
      options,
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
    options?: Configuration,
  ): Promise<RestrictionQueryRolesResponse> {
    const requestContextPromise = this.requestFactory.listRestrictionQueryRoles(
      param.restrictionQueryId,
      param.pageSize,
      param.pageNumber,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRestrictionQueryRoles(
            responseContext,
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
    options?: Configuration,
  ): Promise<RestrictionQueryListResponse> {
    const requestContextPromise =
      this.requestFactory.listUserRestrictionQueries(param.userId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listUserRestrictionQueries(
            responseContext,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.removeRoleFromRestrictionQuery(
        param.restrictionQueryId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.removeRoleFromRestrictionQuery(
            responseContext,
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
    options?: Configuration,
  ): Promise<RestrictionQueryWithoutRelationshipsResponse> {
    const requestContextPromise = this.requestFactory.replaceRestrictionQuery(
      param.restrictionQueryId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.replaceRestrictionQuery(
            responseContext,
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
    options?: Configuration,
  ): Promise<RestrictionQueryWithoutRelationshipsResponse> {
    const requestContextPromise = this.requestFactory.updateRestrictionQuery(
      param.restrictionQueryId,
      param.body,
      options,
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
