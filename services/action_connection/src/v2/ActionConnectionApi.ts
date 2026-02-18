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
import { CreateActionConnectionRequest } from "./models/CreateActionConnectionRequest";
import { CreateActionConnectionResponse } from "./models/CreateActionConnectionResponse";
import { GetActionConnectionResponse } from "./models/GetActionConnectionResponse";
import { GetAppKeyRegistrationResponse } from "./models/GetAppKeyRegistrationResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { ListActionConnectionsResponse } from "./models/ListActionConnectionsResponse";
import { ListAppKeyRegistrationsResponse } from "./models/ListAppKeyRegistrationsResponse";
import { ListConnectionGroupsResponse } from "./models/ListConnectionGroupsResponse";
import { RegisterAppKeyResponse } from "./models/RegisterAppKeyResponse";
import { UpdateActionConnectionRequest } from "./models/UpdateActionConnectionRequest";
import { UpdateActionConnectionResponse } from "./models/UpdateActionConnectionResponse";
import { UpdateConnectionGroupRequest } from "./models/UpdateConnectionGroupRequest";
import { UpdateConnectionGroupResponse } from "./models/UpdateConnectionGroupResponse";
import { version } from "../version";

export class ActionConnectionApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("action-connection", version);
    }
  }
  public async createActionConnection(
    body: CreateActionConnectionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createActionConnection");
    }

    // Path Params
    const localVarPath = "/api/v2/actions/connections";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionConnectionApi.v2.createActionConnection",
      ActionConnectionApi.operationServers,
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
      serialize(body, TypingInfo, "CreateActionConnectionRequest", ""),
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

  public async deleteActionConnection(
    connectionId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'connectionId' is not null or undefined
    if (connectionId === null || connectionId === undefined) {
      throw new RequiredError("connectionId", "deleteActionConnection");
    }

    // Path Params
    const localVarPath = "/api/v2/actions/connections/{connection_id}".replace(
      "{connection_id}",
      encodeURIComponent(String(connectionId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionConnectionApi.v2.deleteActionConnection",
      ActionConnectionApi.operationServers,
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

  public async getActionConnection(
    connectionId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'connectionId' is not null or undefined
    if (connectionId === null || connectionId === undefined) {
      throw new RequiredError("connectionId", "getActionConnection");
    }

    // Path Params
    const localVarPath = "/api/v2/actions/connections/{connection_id}".replace(
      "{connection_id}",
      encodeURIComponent(String(connectionId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionConnectionApi.v2.getActionConnection",
      ActionConnectionApi.operationServers,
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

  public async getAppKeyRegistration(
    appKeyId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appKeyId' is not null or undefined
    if (appKeyId === null || appKeyId === undefined) {
      throw new RequiredError("appKeyId", "getAppKeyRegistration");
    }

    // Path Params
    const localVarPath =
      "/api/v2/actions/app_key_registrations/{app_key_id}".replace(
        "{app_key_id}",
        encodeURIComponent(String(appKeyId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionConnectionApi.v2.getAppKeyRegistration",
      ActionConnectionApi.operationServers,
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

  public async listActionConnections(
    pageSize?: number,
    pageNumber?: number,
    filterIntegration?: Array<string>,
    filterTags?: Array<string>,
    filterEnvironment?: string,
    filterConnectionIds?: Array<string>,
    filterCreatorIds?: Array<string>,
    filterSearch?: string,
    sort?: Array<string>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ActionConnectionApi.v2.listActionConnections"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listActionConnections' is disabled. Enable it by setting `configuration.unstableOperations['ActionConnectionApi.v2.listActionConnections'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/actions/connections";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionConnectionApi.v2.listActionConnections",
      ActionConnectionApi.operationServers,
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
    if (filterIntegration !== undefined) {
      requestContext.setQueryParam(
        "filter[integration]",
        serialize(filterIntegration, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        serialize(filterTags, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterEnvironment !== undefined) {
      requestContext.setQueryParam(
        "filter[environment]",
        serialize(filterEnvironment, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterConnectionIds !== undefined) {
      requestContext.setQueryParam(
        "filter[connection_ids]",
        serialize(filterConnectionIds, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterCreatorIds !== undefined) {
      requestContext.setQueryParam(
        "filter[creator_ids]",
        serialize(filterCreatorIds, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterSearch !== undefined) {
      requestContext.setQueryParam(
        "filter[search]",
        serialize(filterSearch, TypingInfo, "string", ""),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listAppKeyRegistrations(
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/actions/app_key_registrations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionConnectionApi.v2.listAppKeyRegistrations",
      ActionConnectionApi.operationServers,
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

  public async listConnectionGroups(
    pageSize?: number,
    pageNumber?: number,
    filterIntegration?: Array<string>,
    filterEnvironment?: string,
    filterConnectionGroupIds?: Array<string>,
    filterCreatorId?: string,
    filterCreatorIds?: Array<string>,
    filterSearch?: string,
    sort?: Array<string>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["ActionConnectionApi.v2.listConnectionGroups"]
    ) {
      throw new Error(
        "Unstable operation 'listConnectionGroups' is disabled. Enable it by setting `configuration.unstableOperations['ActionConnectionApi.v2.listConnectionGroups'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/actions/connections/groups";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionConnectionApi.v2.listConnectionGroups",
      ActionConnectionApi.operationServers,
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
    if (filterIntegration !== undefined) {
      requestContext.setQueryParam(
        "filter[integration]",
        serialize(filterIntegration, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterEnvironment !== undefined) {
      requestContext.setQueryParam(
        "filter[environment]",
        serialize(filterEnvironment, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterConnectionGroupIds !== undefined) {
      requestContext.setQueryParam(
        "filter[connection_group_ids]",
        serialize(filterConnectionGroupIds, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterCreatorId !== undefined) {
      requestContext.setQueryParam(
        "filter[creator_id]",
        serialize(filterCreatorId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterCreatorIds !== undefined) {
      requestContext.setQueryParam(
        "filter[creator_ids]",
        serialize(filterCreatorIds, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterSearch !== undefined) {
      requestContext.setQueryParam(
        "filter[search]",
        serialize(filterSearch, TypingInfo, "string", ""),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async registerAppKey(
    appKeyId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appKeyId' is not null or undefined
    if (appKeyId === null || appKeyId === undefined) {
      throw new RequiredError("appKeyId", "registerAppKey");
    }

    // Path Params
    const localVarPath =
      "/api/v2/actions/app_key_registrations/{app_key_id}".replace(
        "{app_key_id}",
        encodeURIComponent(String(appKeyId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionConnectionApi.v2.registerAppKey",
      ActionConnectionApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async unregisterAppKey(
    appKeyId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appKeyId' is not null or undefined
    if (appKeyId === null || appKeyId === undefined) {
      throw new RequiredError("appKeyId", "unregisterAppKey");
    }

    // Path Params
    const localVarPath =
      "/api/v2/actions/app_key_registrations/{app_key_id}".replace(
        "{app_key_id}",
        encodeURIComponent(String(appKeyId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionConnectionApi.v2.unregisterAppKey",
      ActionConnectionApi.operationServers,
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

  public async updateActionConnection(
    connectionId: string,
    body: UpdateActionConnectionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'connectionId' is not null or undefined
    if (connectionId === null || connectionId === undefined) {
      throw new RequiredError("connectionId", "updateActionConnection");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateActionConnection");
    }

    // Path Params
    const localVarPath = "/api/v2/actions/connections/{connection_id}".replace(
      "{connection_id}",
      encodeURIComponent(String(connectionId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionConnectionApi.v2.updateActionConnection",
      ActionConnectionApi.operationServers,
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
      serialize(body, TypingInfo, "UpdateActionConnectionRequest", ""),
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

  public async updateConnectionGroup(
    connectionGroupId: string,
    body: UpdateConnectionGroupRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ActionConnectionApi.v2.updateConnectionGroup"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateConnectionGroup' is disabled. Enable it by setting `configuration.unstableOperations['ActionConnectionApi.v2.updateConnectionGroup'] = true`",
      );
    }

    // verify required parameter 'connectionGroupId' is not null or undefined
    if (connectionGroupId === null || connectionGroupId === undefined) {
      throw new RequiredError("connectionGroupId", "updateConnectionGroup");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateConnectionGroup");
    }

    // Path Params
    const localVarPath =
      "/api/v2/actions/connections/groups/{connection_group_id}".replace(
        "{connection_group_id}",
        encodeURIComponent(String(connectionGroupId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionConnectionApi.v2.updateConnectionGroup",
      ActionConnectionApi.operationServers,
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
      serialize(body, TypingInfo, "UpdateConnectionGroupRequest", ""),
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

export class ActionConnectionApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createActionConnection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createActionConnection(
    response: ResponseContext,
  ): Promise<CreateActionConnectionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: CreateActionConnectionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateActionConnectionResponse",
      ) as CreateActionConnectionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CreateActionConnectionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateActionConnectionResponse",
        "",
      ) as CreateActionConnectionResponse;
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
   * @params response Response returned by the server for a request to deleteActionConnection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteActionConnection(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
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
   * @params response Response returned by the server for a request to getActionConnection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getActionConnection(
    response: ResponseContext,
  ): Promise<GetActionConnectionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetActionConnectionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetActionConnectionResponse",
      ) as GetActionConnectionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GetActionConnectionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetActionConnectionResponse",
        "",
      ) as GetActionConnectionResponse;
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
   * @params response Response returned by the server for a request to getAppKeyRegistration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAppKeyRegistration(
    response: ResponseContext,
  ): Promise<GetAppKeyRegistrationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetAppKeyRegistrationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetAppKeyRegistrationResponse",
      ) as GetAppKeyRegistrationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GetAppKeyRegistrationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetAppKeyRegistrationResponse",
        "",
      ) as GetAppKeyRegistrationResponse;
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
   * @params response Response returned by the server for a request to listActionConnections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listActionConnections(
    response: ResponseContext,
  ): Promise<ListActionConnectionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListActionConnectionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListActionConnectionsResponse",
      ) as ListActionConnectionsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: ListActionConnectionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListActionConnectionsResponse",
        "",
      ) as ListActionConnectionsResponse;
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
   * @params response Response returned by the server for a request to listAppKeyRegistrations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAppKeyRegistrations(
    response: ResponseContext,
  ): Promise<ListAppKeyRegistrationsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListAppKeyRegistrationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListAppKeyRegistrationsResponse",
      ) as ListAppKeyRegistrationsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ListAppKeyRegistrationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListAppKeyRegistrationsResponse",
        "",
      ) as ListAppKeyRegistrationsResponse;
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
   * @params response Response returned by the server for a request to listConnectionGroups
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listConnectionGroups(
    response: ResponseContext,
  ): Promise<ListConnectionGroupsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListConnectionGroupsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListConnectionGroupsResponse",
      ) as ListConnectionGroupsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: ListConnectionGroupsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListConnectionGroupsResponse",
        "",
      ) as ListConnectionGroupsResponse;
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
   * @params response Response returned by the server for a request to registerAppKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async registerAppKey(
    response: ResponseContext,
  ): Promise<RegisterAppKeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: RegisterAppKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RegisterAppKeyResponse",
      ) as RegisterAppKeyResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RegisterAppKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RegisterAppKeyResponse",
        "",
      ) as RegisterAppKeyResponse;
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
   * @params response Response returned by the server for a request to unregisterAppKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unregisterAppKey(response: ResponseContext): Promise<void> {
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
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
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
   * @params response Response returned by the server for a request to updateActionConnection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateActionConnection(
    response: ResponseContext,
  ): Promise<UpdateActionConnectionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UpdateActionConnectionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateActionConnectionResponse",
      ) as UpdateActionConnectionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UpdateActionConnectionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateActionConnectionResponse",
        "",
      ) as UpdateActionConnectionResponse;
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
   * @params response Response returned by the server for a request to updateConnectionGroup
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateConnectionGroup(
    response: ResponseContext,
  ): Promise<UpdateConnectionGroupResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UpdateConnectionGroupResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateConnectionGroupResponse",
      ) as UpdateConnectionGroupResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: UpdateConnectionGroupResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateConnectionGroupResponse",
        "",
      ) as UpdateConnectionGroupResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ActionConnectionApiCreateActionConnectionRequest {
  /**
   * @type CreateActionConnectionRequest
   */
  body: CreateActionConnectionRequest;
}

export interface ActionConnectionApiDeleteActionConnectionRequest {
  /**
   * The ID of the action connection
   * @type string
   */
  connectionId: string;
}

export interface ActionConnectionApiGetActionConnectionRequest {
  /**
   * The ID of the action connection
   * @type string
   */
  connectionId: string;
}

export interface ActionConnectionApiGetAppKeyRegistrationRequest {
  /**
   * The ID of the app key
   * @type string
   */
  appKeyId: string;
}

export interface ActionConnectionApiListActionConnectionsRequest {
  /**
   * The number of connections to return per page.
   * @type number
   */
  pageSize?: number;
  /**
   * The page number to return.
   * @type number
   */
  pageNumber?: number;
  /**
   * Filter by integration type.
   * @type Array<string>
   */
  filterIntegration?: Array<string>;
  /**
   * Filter by tags.
   * @type Array<string>
   */
  filterTags?: Array<string>;
  /**
   * Filter by environment.
   * @type string
   */
  filterEnvironment?: string;
  /**
   * Filter by connection IDs.
   * @type Array<string>
   */
  filterConnectionIds?: Array<string>;
  /**
   * Filter by creator IDs.
   * @type Array<string>
   */
  filterCreatorIds?: Array<string>;
  /**
   * Search string to filter connections.
   * @type string
   */
  filterSearch?: string;
  /**
   * Sort parameters.
   * @type Array<string>
   */
  sort?: Array<string>;
}

export interface ActionConnectionApiListAppKeyRegistrationsRequest {
  /**
   * The number of App Key Registrations to return per page.
   * @type number
   */
  pageSize?: number;
  /**
   * The page number to return.
   * @type number
   */
  pageNumber?: number;
}

export interface ActionConnectionApiListConnectionGroupsRequest {
  /**
   * The number of connection groups to return per page.
   * @type number
   */
  pageSize?: number;
  /**
   * The page number to return.
   * @type number
   */
  pageNumber?: number;
  /**
   * Filter by integration type.
   * @type Array<string>
   */
  filterIntegration?: Array<string>;
  /**
   * Filter by environment.
   * @type string
   */
  filterEnvironment?: string;
  /**
   * Filter by connection group IDs.
   * @type Array<string>
   */
  filterConnectionGroupIds?: Array<string>;
  /**
   * Filter by creator ID.
   * @type string
   */
  filterCreatorId?: string;
  /**
   * Filter by creator IDs.
   * @type Array<string>
   */
  filterCreatorIds?: Array<string>;
  /**
   * Search string to filter connection groups.
   * @type string
   */
  filterSearch?: string;
  /**
   * Sort parameters.
   * @type Array<string>
   */
  sort?: Array<string>;
}

export interface ActionConnectionApiRegisterAppKeyRequest {
  /**
   * The ID of the app key
   * @type string
   */
  appKeyId: string;
}

export interface ActionConnectionApiUnregisterAppKeyRequest {
  /**
   * The ID of the app key
   * @type string
   */
  appKeyId: string;
}

export interface ActionConnectionApiUpdateActionConnectionRequest {
  /**
   * The ID of the action connection
   * @type string
   */
  connectionId: string;
  /**
   * Update an existing Action Connection request body
   * @type UpdateActionConnectionRequest
   */
  body: UpdateActionConnectionRequest;
}

export interface ActionConnectionApiUpdateConnectionGroupRequest {
  /**
   * The ID of the connection group.
   * @type string
   */
  connectionGroupId: string;
  /**
   * @type UpdateConnectionGroupRequest
   */
  body: UpdateConnectionGroupRequest;
}

export class ActionConnectionApi {
  private requestFactory: ActionConnectionApiRequestFactory;
  private responseProcessor: ActionConnectionApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: ActionConnectionApiRequestFactory,
    responseProcessor?: ActionConnectionApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new ActionConnectionApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ActionConnectionApiResponseProcessor();
  }

  /**
   * Create a new Action Connection. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key).
   * @param param The request object
   */
  public createActionConnection(
    param: ActionConnectionApiCreateActionConnectionRequest,
    options?: Configuration,
  ): Promise<CreateActionConnectionResponse> {
    const requestContextPromise = this.requestFactory.createActionConnection(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createActionConnection(responseContext);
        });
    });
  }

  /**
   * Delete an existing Action Connection. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
   * @param param The request object
   */
  public deleteActionConnection(
    param: ActionConnectionApiDeleteActionConnectionRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteActionConnection(
      param.connectionId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteActionConnection(responseContext);
        });
    });
  }

  /**
   * Get an existing Action Connection. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key).
   * @param param The request object
   */
  public getActionConnection(
    param: ActionConnectionApiGetActionConnectionRequest,
    options?: Configuration,
  ): Promise<GetActionConnectionResponse> {
    const requestContextPromise = this.requestFactory.getActionConnection(
      param.connectionId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getActionConnection(responseContext);
        });
    });
  }

  /**
   * Get an existing App Key Registration
   * @param param The request object
   */
  public getAppKeyRegistration(
    param: ActionConnectionApiGetAppKeyRegistrationRequest,
    options?: Configuration,
  ): Promise<GetAppKeyRegistrationResponse> {
    const requestContextPromise = this.requestFactory.getAppKeyRegistration(
      param.appKeyId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAppKeyRegistration(responseContext);
        });
    });
  }

  /**
   * List all action connections for the organization. This endpoint supports filtering by integration type, tags, environment, and search strings. Pagination is supported using page size and page number parameters.
   * @param param The request object
   */
  public listActionConnections(
    param: ActionConnectionApiListActionConnectionsRequest = {},
    options?: Configuration,
  ): Promise<ListActionConnectionsResponse> {
    const requestContextPromise = this.requestFactory.listActionConnections(
      param.pageSize,
      param.pageNumber,
      param.filterIntegration,
      param.filterTags,
      param.filterEnvironment,
      param.filterConnectionIds,
      param.filterCreatorIds,
      param.filterSearch,
      param.sort,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listActionConnections(responseContext);
        });
    });
  }

  /**
   * List App Key Registrations
   * @param param The request object
   */
  public listAppKeyRegistrations(
    param: ActionConnectionApiListAppKeyRegistrationsRequest = {},
    options?: Configuration,
  ): Promise<ListAppKeyRegistrationsResponse> {
    const requestContextPromise = this.requestFactory.listAppKeyRegistrations(
      param.pageSize,
      param.pageNumber,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAppKeyRegistrations(
            responseContext,
          );
        });
    });
  }

  /**
   * List all connection groups for the organization. This endpoint supports filtering by integration type, environment, connection group IDs, and search strings. Pagination is supported using page size and page number parameters.
   * @param param The request object
   */
  public listConnectionGroups(
    param: ActionConnectionApiListConnectionGroupsRequest = {},
    options?: Configuration,
  ): Promise<ListConnectionGroupsResponse> {
    const requestContextPromise = this.requestFactory.listConnectionGroups(
      param.pageSize,
      param.pageNumber,
      param.filterIntegration,
      param.filterEnvironment,
      param.filterConnectionGroupIds,
      param.filterCreatorId,
      param.filterCreatorIds,
      param.filterSearch,
      param.sort,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listConnectionGroups(responseContext);
        });
    });
  }

  /**
   * Register a new App Key
   * @param param The request object
   */
  public registerAppKey(
    param: ActionConnectionApiRegisterAppKeyRequest,
    options?: Configuration,
  ): Promise<RegisterAppKeyResponse> {
    const requestContextPromise = this.requestFactory.registerAppKey(
      param.appKeyId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.registerAppKey(responseContext);
        });
    });
  }

  /**
   * Unregister an App Key
   * @param param The request object
   */
  public unregisterAppKey(
    param: ActionConnectionApiUnregisterAppKeyRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.unregisterAppKey(
      param.appKeyId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unregisterAppKey(responseContext);
        });
    });
  }

  /**
   * Update an existing Action Connection. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key).
   * @param param The request object
   */
  public updateActionConnection(
    param: ActionConnectionApiUpdateActionConnectionRequest,
    options?: Configuration,
  ): Promise<UpdateActionConnectionResponse> {
    const requestContextPromise = this.requestFactory.updateActionConnection(
      param.connectionId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateActionConnection(responseContext);
        });
    });
  }

  /**
   * Update an existing connection group by ID. This endpoint allows updating the name, description, tag keys, integration type, connections, and policy attributes of a connection group.
   * @param param The request object
   */
  public updateConnectionGroup(
    param: ActionConnectionApiUpdateConnectionGroupRequest,
    options?: Configuration,
  ): Promise<UpdateConnectionGroupResponse> {
    const requestContextPromise = this.requestFactory.updateConnectionGroup(
      param.connectionGroupId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateConnectionGroup(responseContext);
        });
    });
  }
}
