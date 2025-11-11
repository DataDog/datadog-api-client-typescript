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
import { APIKeyCreateRequest } from "./models/APIKeyCreateRequest";
import { APIKeyResponse } from "./models/APIKeyResponse";
import { APIKeysResponse } from "./models/APIKeysResponse";
import { APIKeysSort } from "./models/APIKeysSort";
import { APIKeyUpdateRequest } from "./models/APIKeyUpdateRequest";
import { ApplicationKeyCreateRequest } from "./models/ApplicationKeyCreateRequest";
import { ApplicationKeyResponse } from "./models/ApplicationKeyResponse";
import { ApplicationKeysSort } from "./models/ApplicationKeysSort";
import { ApplicationKeyUpdateRequest } from "./models/ApplicationKeyUpdateRequest";
import { ListApplicationKeysResponse } from "./models/ListApplicationKeysResponse";
import { version } from "../version";

export class KeyManagementApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("key-management", version);
    }
  }
  public async createAPIKey(
    body: APIKeyCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAPIKey");
    }

    // Path Params
    const localVarPath = "/api/v2/api_keys";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v2.createAPIKey",
      KeyManagementApi.operationServers,
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
      serialize(body, TypingInfo, "APIKeyCreateRequest", ""),
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

  public async createCurrentUserApplicationKey(
    body: ApplicationKeyCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCurrentUserApplicationKey");
    }

    // Path Params
    const localVarPath = "/api/v2/current_user/application_keys";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v2.createCurrentUserApplicationKey",
      KeyManagementApi.operationServers,
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
      serialize(body, TypingInfo, "ApplicationKeyCreateRequest", ""),
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

  public async deleteAPIKey(
    apiKeyId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'apiKeyId' is not null or undefined
    if (apiKeyId === null || apiKeyId === undefined) {
      throw new RequiredError("apiKeyId", "deleteAPIKey");
    }

    // Path Params
    const localVarPath = "/api/v2/api_keys/{api_key_id}".replace(
      "{api_key_id}",
      encodeURIComponent(String(apiKeyId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v2.deleteAPIKey",
      KeyManagementApi.operationServers,
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

  public async deleteApplicationKey(
    appKeyId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appKeyId' is not null or undefined
    if (appKeyId === null || appKeyId === undefined) {
      throw new RequiredError("appKeyId", "deleteApplicationKey");
    }

    // Path Params
    const localVarPath = "/api/v2/application_keys/{app_key_id}".replace(
      "{app_key_id}",
      encodeURIComponent(String(appKeyId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v2.deleteApplicationKey",
      KeyManagementApi.operationServers,
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

  public async deleteCurrentUserApplicationKey(
    appKeyId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appKeyId' is not null or undefined
    if (appKeyId === null || appKeyId === undefined) {
      throw new RequiredError("appKeyId", "deleteCurrentUserApplicationKey");
    }

    // Path Params
    const localVarPath =
      "/api/v2/current_user/application_keys/{app_key_id}".replace(
        "{app_key_id}",
        encodeURIComponent(String(appKeyId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v2.deleteCurrentUserApplicationKey",
      KeyManagementApi.operationServers,
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

  public async getAPIKey(
    apiKeyId: string,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'apiKeyId' is not null or undefined
    if (apiKeyId === null || apiKeyId === undefined) {
      throw new RequiredError("apiKeyId", "getAPIKey");
    }

    // Path Params
    const localVarPath = "/api/v2/api_keys/{api_key_id}".replace(
      "{api_key_id}",
      encodeURIComponent(String(apiKeyId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v2.getAPIKey",
      KeyManagementApi.operationServers,
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
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
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

  public async getApplicationKey(
    appKeyId: string,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appKeyId' is not null or undefined
    if (appKeyId === null || appKeyId === undefined) {
      throw new RequiredError("appKeyId", "getApplicationKey");
    }

    // Path Params
    const localVarPath = "/api/v2/application_keys/{app_key_id}".replace(
      "{app_key_id}",
      encodeURIComponent(String(appKeyId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v2.getApplicationKey",
      KeyManagementApi.operationServers,
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
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
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

  public async getCurrentUserApplicationKey(
    appKeyId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appKeyId' is not null or undefined
    if (appKeyId === null || appKeyId === undefined) {
      throw new RequiredError("appKeyId", "getCurrentUserApplicationKey");
    }

    // Path Params
    const localVarPath =
      "/api/v2/current_user/application_keys/{app_key_id}".replace(
        "{app_key_id}",
        encodeURIComponent(String(appKeyId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v2.getCurrentUserApplicationKey",
      KeyManagementApi.operationServers,
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

  public async listAPIKeys(
    pageSize?: number,
    pageNumber?: number,
    sort?: APIKeysSort,
    filter?: string,
    filterCreatedAtStart?: string,
    filterCreatedAtEnd?: string,
    filterModifiedAtStart?: string,
    filterModifiedAtEnd?: string,
    include?: string,
    filterRemoteConfigReadEnabled?: boolean,
    filterCategory?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/api_keys";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v2.listAPIKeys",
      KeyManagementApi.operationServers,
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
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "APIKeysSort", ""),
        "",
      );
    }
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        serialize(filter, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterCreatedAtStart !== undefined) {
      requestContext.setQueryParam(
        "filter[created_at][start]",
        serialize(filterCreatedAtStart, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterCreatedAtEnd !== undefined) {
      requestContext.setQueryParam(
        "filter[created_at][end]",
        serialize(filterCreatedAtEnd, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterModifiedAtStart !== undefined) {
      requestContext.setQueryParam(
        "filter[modified_at][start]",
        serialize(filterModifiedAtStart, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterModifiedAtEnd !== undefined) {
      requestContext.setQueryParam(
        "filter[modified_at][end]",
        serialize(filterModifiedAtEnd, TypingInfo, "string", ""),
        "",
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRemoteConfigReadEnabled !== undefined) {
      requestContext.setQueryParam(
        "filter[remote_config_read_enabled]",
        serialize(filterRemoteConfigReadEnabled, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterCategory !== undefined) {
      requestContext.setQueryParam(
        "filter[category]",
        serialize(filterCategory, TypingInfo, "string", ""),
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

  public async listApplicationKeys(
    pageSize?: number,
    pageNumber?: number,
    sort?: ApplicationKeysSort,
    filter?: string,
    filterCreatedAtStart?: string,
    filterCreatedAtEnd?: string,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/application_keys";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v2.listApplicationKeys",
      KeyManagementApi.operationServers,
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
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "ApplicationKeysSort", ""),
        "",
      );
    }
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        serialize(filter, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterCreatedAtStart !== undefined) {
      requestContext.setQueryParam(
        "filter[created_at][start]",
        serialize(filterCreatedAtStart, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterCreatedAtEnd !== undefined) {
      requestContext.setQueryParam(
        "filter[created_at][end]",
        serialize(filterCreatedAtEnd, TypingInfo, "string", ""),
        "",
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
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

  public async listCurrentUserApplicationKeys(
    pageSize?: number,
    pageNumber?: number,
    sort?: ApplicationKeysSort,
    filter?: string,
    filterCreatedAtStart?: string,
    filterCreatedAtEnd?: string,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/current_user/application_keys";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v2.listCurrentUserApplicationKeys",
      KeyManagementApi.operationServers,
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
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "ApplicationKeysSort", ""),
        "",
      );
    }
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        serialize(filter, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterCreatedAtStart !== undefined) {
      requestContext.setQueryParam(
        "filter[created_at][start]",
        serialize(filterCreatedAtStart, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterCreatedAtEnd !== undefined) {
      requestContext.setQueryParam(
        "filter[created_at][end]",
        serialize(filterCreatedAtEnd, TypingInfo, "string", ""),
        "",
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
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

  public async updateAPIKey(
    apiKeyId: string,
    body: APIKeyUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'apiKeyId' is not null or undefined
    if (apiKeyId === null || apiKeyId === undefined) {
      throw new RequiredError("apiKeyId", "updateAPIKey");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAPIKey");
    }

    // Path Params
    const localVarPath = "/api/v2/api_keys/{api_key_id}".replace(
      "{api_key_id}",
      encodeURIComponent(String(apiKeyId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v2.updateAPIKey",
      KeyManagementApi.operationServers,
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
      serialize(body, TypingInfo, "APIKeyUpdateRequest", ""),
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

  public async updateApplicationKey(
    appKeyId: string,
    body: ApplicationKeyUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appKeyId' is not null or undefined
    if (appKeyId === null || appKeyId === undefined) {
      throw new RequiredError("appKeyId", "updateApplicationKey");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateApplicationKey");
    }

    // Path Params
    const localVarPath = "/api/v2/application_keys/{app_key_id}".replace(
      "{app_key_id}",
      encodeURIComponent(String(appKeyId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v2.updateApplicationKey",
      KeyManagementApi.operationServers,
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
      serialize(body, TypingInfo, "ApplicationKeyUpdateRequest", ""),
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

  public async updateCurrentUserApplicationKey(
    appKeyId: string,
    body: ApplicationKeyUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appKeyId' is not null or undefined
    if (appKeyId === null || appKeyId === undefined) {
      throw new RequiredError("appKeyId", "updateCurrentUserApplicationKey");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCurrentUserApplicationKey");
    }

    // Path Params
    const localVarPath =
      "/api/v2/current_user/application_keys/{app_key_id}".replace(
        "{app_key_id}",
        encodeURIComponent(String(appKeyId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "KeyManagementApi.v2.updateCurrentUserApplicationKey",
      KeyManagementApi.operationServers,
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
      serialize(body, TypingInfo, "ApplicationKeyUpdateRequest", ""),
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

export class KeyManagementApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAPIKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAPIKey(
    response: ResponseContext,
  ): Promise<APIKeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: APIKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "APIKeyResponse",
      ) as APIKeyResponse;
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
      const body: APIKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "APIKeyResponse",
        "",
      ) as APIKeyResponse;
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
   * @params response Response returned by the server for a request to createCurrentUserApplicationKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCurrentUserApplicationKey(
    response: ResponseContext,
  ): Promise<ApplicationKeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: ApplicationKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyResponse",
      ) as ApplicationKeyResponse;
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
      const body: ApplicationKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyResponse",
        "",
      ) as ApplicationKeyResponse;
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
   * @params response Response returned by the server for a request to deleteAPIKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAPIKey(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteApplicationKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteApplicationKey(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteCurrentUserApplicationKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCurrentUserApplicationKey(
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
   * @params response Response returned by the server for a request to getAPIKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAPIKey(response: ResponseContext): Promise<APIKeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: APIKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "APIKeyResponse",
      ) as APIKeyResponse;
      return body;
    }
    if (
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
      const body: APIKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "APIKeyResponse",
        "",
      ) as APIKeyResponse;
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
   * @params response Response returned by the server for a request to getApplicationKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getApplicationKey(
    response: ResponseContext,
  ): Promise<ApplicationKeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApplicationKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyResponse",
      ) as ApplicationKeyResponse;
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
      const body: ApplicationKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyResponse",
        "",
      ) as ApplicationKeyResponse;
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
   * @params response Response returned by the server for a request to getCurrentUserApplicationKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCurrentUserApplicationKey(
    response: ResponseContext,
  ): Promise<ApplicationKeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApplicationKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyResponse",
      ) as ApplicationKeyResponse;
      return body;
    }
    if (
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
      const body: ApplicationKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyResponse",
        "",
      ) as ApplicationKeyResponse;
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
   * @params response Response returned by the server for a request to listAPIKeys
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAPIKeys(
    response: ResponseContext,
  ): Promise<APIKeysResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: APIKeysResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "APIKeysResponse",
      ) as APIKeysResponse;
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
      const body: APIKeysResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "APIKeysResponse",
        "",
      ) as APIKeysResponse;
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
   * @params response Response returned by the server for a request to listApplicationKeys
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listApplicationKeys(
    response: ResponseContext,
  ): Promise<ListApplicationKeysResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListApplicationKeysResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListApplicationKeysResponse",
      ) as ListApplicationKeysResponse;
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
      const body: ListApplicationKeysResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListApplicationKeysResponse",
        "",
      ) as ListApplicationKeysResponse;
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
   * @params response Response returned by the server for a request to listCurrentUserApplicationKeys
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCurrentUserApplicationKeys(
    response: ResponseContext,
  ): Promise<ListApplicationKeysResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListApplicationKeysResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListApplicationKeysResponse",
      ) as ListApplicationKeysResponse;
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
      const body: ListApplicationKeysResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListApplicationKeysResponse",
        "",
      ) as ListApplicationKeysResponse;
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
   * @params response Response returned by the server for a request to updateAPIKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAPIKey(
    response: ResponseContext,
  ): Promise<APIKeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: APIKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "APIKeyResponse",
      ) as APIKeyResponse;
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
      const body: APIKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "APIKeyResponse",
        "",
      ) as APIKeyResponse;
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
   * @params response Response returned by the server for a request to updateApplicationKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateApplicationKey(
    response: ResponseContext,
  ): Promise<ApplicationKeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApplicationKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyResponse",
      ) as ApplicationKeyResponse;
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
      const body: ApplicationKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyResponse",
        "",
      ) as ApplicationKeyResponse;
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
   * @params response Response returned by the server for a request to updateCurrentUserApplicationKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCurrentUserApplicationKey(
    response: ResponseContext,
  ): Promise<ApplicationKeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ApplicationKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyResponse",
      ) as ApplicationKeyResponse;
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
      const body: ApplicationKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ApplicationKeyResponse",
        "",
      ) as ApplicationKeyResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface KeyManagementApiCreateAPIKeyRequest {
  /**
   * @type APIKeyCreateRequest
   */
  body: APIKeyCreateRequest;
}

export interface KeyManagementApiCreateCurrentUserApplicationKeyRequest {
  /**
   * @type ApplicationKeyCreateRequest
   */
  body: ApplicationKeyCreateRequest;
}

export interface KeyManagementApiDeleteAPIKeyRequest {
  /**
   * The ID of the API key.
   * @type string
   */
  apiKeyId: string;
}

export interface KeyManagementApiDeleteApplicationKeyRequest {
  /**
   * The ID of the application key.
   * @type string
   */
  appKeyId: string;
}

export interface KeyManagementApiDeleteCurrentUserApplicationKeyRequest {
  /**
   * The ID of the application key.
   * @type string
   */
  appKeyId: string;
}

export interface KeyManagementApiGetAPIKeyRequest {
  /**
   * The ID of the API key.
   * @type string
   */
  apiKeyId: string;
  /**
   * Comma separated list of resource paths for related resources to include in the response. Supported resource paths are `created_by` and `modified_by`.
   * @type string
   */
  include?: string;
}

export interface KeyManagementApiGetApplicationKeyRequest {
  /**
   * The ID of the application key.
   * @type string
   */
  appKeyId: string;
  /**
   * Resource path for related resources to include in the response. Only `owned_by` is supported.
   * @type string
   */
  include?: string;
}

export interface KeyManagementApiGetCurrentUserApplicationKeyRequest {
  /**
   * The ID of the application key.
   * @type string
   */
  appKeyId: string;
}

export interface KeyManagementApiListAPIKeysRequest {
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
   * API key attribute used to sort results. Sort order is ascending
   * by default. In order to specify a descending sort, prefix the
   * attribute with a minus sign.
   * @type APIKeysSort
   */
  sort?: APIKeysSort;
  /**
   * Filter API keys by the specified string.
   * @type string
   */
  filter?: string;
  /**
   * Only include API keys created on or after the specified date.
   * @type string
   */
  filterCreatedAtStart?: string;
  /**
   * Only include API keys created on or before the specified date.
   * @type string
   */
  filterCreatedAtEnd?: string;
  /**
   * Only include API keys modified on or after the specified date.
   * @type string
   */
  filterModifiedAtStart?: string;
  /**
   * Only include API keys modified on or before the specified date.
   * @type string
   */
  filterModifiedAtEnd?: string;
  /**
   * Comma separated list of resource paths for related resources to include in the response. Supported resource paths are `created_by` and `modified_by`.
   * @type string
   */
  include?: string;
  /**
   * Filter API keys by remote config read enabled status.
   * @type boolean
   */
  filterRemoteConfigReadEnabled?: boolean;
  /**
   * Filter API keys by category.
   * @type string
   */
  filterCategory?: string;
}

export interface KeyManagementApiListApplicationKeysRequest {
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
  /**
   * Resource path for related resources to include in the response. Only `owned_by` is supported.
   * @type string
   */
  include?: string;
}

export interface KeyManagementApiListCurrentUserApplicationKeysRequest {
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
  /**
   * Resource path for related resources to include in the response. Only `owned_by` is supported.
   * @type string
   */
  include?: string;
}

export interface KeyManagementApiUpdateAPIKeyRequest {
  /**
   * The ID of the API key.
   * @type string
   */
  apiKeyId: string;
  /**
   * @type APIKeyUpdateRequest
   */
  body: APIKeyUpdateRequest;
}

export interface KeyManagementApiUpdateApplicationKeyRequest {
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

export interface KeyManagementApiUpdateCurrentUserApplicationKeyRequest {
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

export class KeyManagementApi {
  private requestFactory: KeyManagementApiRequestFactory;
  private responseProcessor: KeyManagementApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: KeyManagementApiRequestFactory,
    responseProcessor?: KeyManagementApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new KeyManagementApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new KeyManagementApiResponseProcessor();
  }

  /**
   * Create an API key.
   * @param param The request object
   */
  public createAPIKey(
    param: KeyManagementApiCreateAPIKeyRequest,
    options?: Configuration,
  ): Promise<APIKeyResponse> {
    const requestContextPromise = this.requestFactory.createAPIKey(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAPIKey(responseContext);
        });
    });
  }

  /**
   * Create an application key for current user
   * @param param The request object
   */
  public createCurrentUserApplicationKey(
    param: KeyManagementApiCreateCurrentUserApplicationKeyRequest,
    options?: Configuration,
  ): Promise<ApplicationKeyResponse> {
    const requestContextPromise =
      this.requestFactory.createCurrentUserApplicationKey(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCurrentUserApplicationKey(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete an API key.
   * @param param The request object
   */
  public deleteAPIKey(
    param: KeyManagementApiDeleteAPIKeyRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteAPIKey(
      param.apiKeyId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAPIKey(responseContext);
        });
    });
  }

  /**
   * Delete an application key
   * @param param The request object
   */
  public deleteApplicationKey(
    param: KeyManagementApiDeleteApplicationKeyRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteApplicationKey(
      param.appKeyId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteApplicationKey(responseContext);
        });
    });
  }

  /**
   * Delete an application key owned by current user
   * @param param The request object
   */
  public deleteCurrentUserApplicationKey(
    param: KeyManagementApiDeleteCurrentUserApplicationKeyRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteCurrentUserApplicationKey(
        param.appKeyId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCurrentUserApplicationKey(
            responseContext,
          );
        });
    });
  }

  /**
   * Get an API key.
   * @param param The request object
   */
  public getAPIKey(
    param: KeyManagementApiGetAPIKeyRequest,
    options?: Configuration,
  ): Promise<APIKeyResponse> {
    const requestContextPromise = this.requestFactory.getAPIKey(
      param.apiKeyId,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAPIKey(responseContext);
        });
    });
  }

  /**
   * Get an application key for your org.
   * @param param The request object
   */
  public getApplicationKey(
    param: KeyManagementApiGetApplicationKeyRequest,
    options?: Configuration,
  ): Promise<ApplicationKeyResponse> {
    const requestContextPromise = this.requestFactory.getApplicationKey(
      param.appKeyId,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getApplicationKey(responseContext);
        });
    });
  }

  /**
   * Get an application key owned by current user.
   * The `key` field is not returned for organizations in [One-Time Read mode](https://docs.datadoghq.com/account_management/api-app-keys/#one-time-read-mode).
   * @param param The request object
   */
  public getCurrentUserApplicationKey(
    param: KeyManagementApiGetCurrentUserApplicationKeyRequest,
    options?: Configuration,
  ): Promise<ApplicationKeyResponse> {
    const requestContextPromise =
      this.requestFactory.getCurrentUserApplicationKey(param.appKeyId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCurrentUserApplicationKey(
            responseContext,
          );
        });
    });
  }

  /**
   * List all API keys available for your account.
   * @param param The request object
   */
  public listAPIKeys(
    param: KeyManagementApiListAPIKeysRequest = {},
    options?: Configuration,
  ): Promise<APIKeysResponse> {
    const requestContextPromise = this.requestFactory.listAPIKeys(
      param.pageSize,
      param.pageNumber,
      param.sort,
      param.filter,
      param.filterCreatedAtStart,
      param.filterCreatedAtEnd,
      param.filterModifiedAtStart,
      param.filterModifiedAtEnd,
      param.include,
      param.filterRemoteConfigReadEnabled,
      param.filterCategory,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAPIKeys(responseContext);
        });
    });
  }

  /**
   * List all application keys available for your org
   * @param param The request object
   */
  public listApplicationKeys(
    param: KeyManagementApiListApplicationKeysRequest = {},
    options?: Configuration,
  ): Promise<ListApplicationKeysResponse> {
    const requestContextPromise = this.requestFactory.listApplicationKeys(
      param.pageSize,
      param.pageNumber,
      param.sort,
      param.filter,
      param.filterCreatedAtStart,
      param.filterCreatedAtEnd,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listApplicationKeys(responseContext);
        });
    });
  }

  /**
   * List all application keys available for current user
   * @param param The request object
   */
  public listCurrentUserApplicationKeys(
    param: KeyManagementApiListCurrentUserApplicationKeysRequest = {},
    options?: Configuration,
  ): Promise<ListApplicationKeysResponse> {
    const requestContextPromise =
      this.requestFactory.listCurrentUserApplicationKeys(
        param.pageSize,
        param.pageNumber,
        param.sort,
        param.filter,
        param.filterCreatedAtStart,
        param.filterCreatedAtEnd,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCurrentUserApplicationKeys(
            responseContext,
          );
        });
    });
  }

  /**
   * Update an API key.
   * @param param The request object
   */
  public updateAPIKey(
    param: KeyManagementApiUpdateAPIKeyRequest,
    options?: Configuration,
  ): Promise<APIKeyResponse> {
    const requestContextPromise = this.requestFactory.updateAPIKey(
      param.apiKeyId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAPIKey(responseContext);
        });
    });
  }

  /**
   * Edit an application key
   * @param param The request object
   */
  public updateApplicationKey(
    param: KeyManagementApiUpdateApplicationKeyRequest,
    options?: Configuration,
  ): Promise<ApplicationKeyResponse> {
    const requestContextPromise = this.requestFactory.updateApplicationKey(
      param.appKeyId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateApplicationKey(responseContext);
        });
    });
  }

  /**
   * Edit an application key owned by current user.
   * The `key` field is not returned for organizations in [One-Time Read mode](https://docs.datadoghq.com/account_management/api-app-keys/#one-time-read-mode).
   * @param param The request object
   */
  public updateCurrentUserApplicationKey(
    param: KeyManagementApiUpdateCurrentUserApplicationKeyRequest,
    options?: Configuration,
  ): Promise<ApplicationKeyResponse> {
    const requestContextPromise =
      this.requestFactory.updateCurrentUserApplicationKey(
        param.appKeyId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCurrentUserApplicationKey(
            responseContext,
          );
        });
    });
  }
}
