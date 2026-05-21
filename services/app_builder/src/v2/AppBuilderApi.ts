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
import { AppBuilderListTagsResponse } from "./models/AppBuilderListTagsResponse";
import { AppsSortField } from "./models/AppsSortField";
import { CreateAppRequest } from "./models/CreateAppRequest";
import { CreateAppResponse } from "./models/CreateAppResponse";
import { CreatePublishRequestRequest } from "./models/CreatePublishRequestRequest";
import { DeleteAppResponse } from "./models/DeleteAppResponse";
import { DeleteAppsRequest } from "./models/DeleteAppsRequest";
import { DeleteAppsResponse } from "./models/DeleteAppsResponse";
import { GetAppResponse } from "./models/GetAppResponse";
import { GetBlueprintResponse } from "./models/GetBlueprintResponse";
import { GetBlueprintsResponse } from "./models/GetBlueprintsResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { ListAppsResponse } from "./models/ListAppsResponse";
import { ListAppVersionsResponse } from "./models/ListAppVersionsResponse";
import { ListBlueprintsResponse } from "./models/ListBlueprintsResponse";
import { PublishAppResponse } from "./models/PublishAppResponse";
import { UnpublishAppResponse } from "./models/UnpublishAppResponse";
import { UpdateAppFavoriteRequest } from "./models/UpdateAppFavoriteRequest";
import { UpdateAppProtectionLevelRequest } from "./models/UpdateAppProtectionLevelRequest";
import { UpdateAppRequest } from "./models/UpdateAppRequest";
import { UpdateAppResponse } from "./models/UpdateAppResponse";
import { UpdateAppSelfServiceRequest } from "./models/UpdateAppSelfServiceRequest";
import { UpdateAppTagsRequest } from "./models/UpdateAppTagsRequest";
import { UpdateAppVersionNameRequest } from "./models/UpdateAppVersionNameRequest";
import { version } from "../version";

export class AppBuilderApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("app-builder", version);
    }
  }
  public async createApp(
    body: CreateAppRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.createApp",
      AppBuilderApi.operationServers,
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
      serialize(body, TypingInfo, "CreateAppRequest", ""),
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

  public async createPublishRequest(
    appId: string,
    body: CreatePublishRequestRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "createPublishRequest");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createPublishRequest");
    }

    // Path Params
    const localVarPath =
      "/api/v2/app-builder/apps/{app_id}/publish-request".replace(
        "{app_id}",
        encodeURIComponent(String(appId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.createPublishRequest",
      AppBuilderApi.operationServers,
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
      serialize(body, TypingInfo, "CreatePublishRequestRequest", ""),
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

  public async deleteApp(
    appId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "deleteApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}".replace(
      "{app_id}",
      encodeURIComponent(String(appId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.deleteApp",
      AppBuilderApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
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

  public async deleteApps(
    body: DeleteAppsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteApps");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.deleteApps",
      AppBuilderApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
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
      serialize(body, TypingInfo, "DeleteAppsRequest", ""),
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

  public async getApp(
    appId: string,
    version?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "getApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}".replace(
      "{app_id}",
      encodeURIComponent(String(appId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.getApp",
      AppBuilderApi.operationServers,
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
    if (version !== undefined) {
      requestContext.setQueryParam(
        "version",
        serialize(version, TypingInfo, "string", ""),
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

  public async getBlueprint(
    blueprintId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'blueprintId' is not null or undefined
    if (blueprintId === null || blueprintId === undefined) {
      throw new RequiredError("blueprintId", "getBlueprint");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/blueprint/{blueprint_id}".replace(
      "{blueprint_id}",
      encodeURIComponent(String(blueprintId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.getBlueprint",
      AppBuilderApi.operationServers,
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

  public async getBlueprintsByIntegrationId(
    integrationId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'integrationId' is not null or undefined
    if (integrationId === null || integrationId === undefined) {
      throw new RequiredError("integrationId", "getBlueprintsByIntegrationId");
    }

    // Path Params
    const localVarPath =
      "/api/v2/app-builder/blueprints/integration-id/{integration_id}".replace(
        "{integration_id}",
        encodeURIComponent(String(integrationId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.getBlueprintsByIntegrationId",
      AppBuilderApi.operationServers,
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

  public async getBlueprintsBySlugs(
    slugs: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'slugs' is not null or undefined
    if (slugs === null || slugs === undefined) {
      throw new RequiredError("slugs", "getBlueprintsBySlugs");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/blueprints/slugs/{slugs}".replace(
      "{slugs}",
      encodeURIComponent(String(slugs)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.getBlueprintsBySlugs",
      AppBuilderApi.operationServers,
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

  public async listApps(
    limit?: number,
    page?: number,
    filterUserName?: string,
    filterUserUuid?: string,
    filterName?: string,
    filterQuery?: string,
    filterDeployed?: boolean,
    filterTags?: string,
    filterFavorite?: boolean,
    filterSelfService?: boolean,
    sort?: Array<AppsSortField>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.listApps",
      AppBuilderApi.operationServers,
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
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (page !== undefined) {
      requestContext.setQueryParam(
        "page",
        serialize(page, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterUserName !== undefined) {
      requestContext.setQueryParam(
        "filter[user_name]",
        serialize(filterUserName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterUserUuid !== undefined) {
      requestContext.setQueryParam(
        "filter[user_uuid]",
        serialize(filterUserUuid, TypingInfo, "string", "uuid"),
        "",
      );
    }
    if (filterName !== undefined) {
      requestContext.setQueryParam(
        "filter[name]",
        serialize(filterName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        serialize(filterQuery, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterDeployed !== undefined) {
      requestContext.setQueryParam(
        "filter[deployed]",
        serialize(filterDeployed, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        serialize(filterTags, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterFavorite !== undefined) {
      requestContext.setQueryParam(
        "filter[favorite]",
        serialize(filterFavorite, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterSelfService !== undefined) {
      requestContext.setQueryParam(
        "filter[self_service]",
        serialize(filterSelfService, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "Array<AppsSortField>", ""),
        "csv",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listAppVersions(
    appId: string,
    limit?: number,
    page?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "listAppVersions");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}/versions".replace(
      "{app_id}",
      encodeURIComponent(String(appId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.listAppVersions",
      AppBuilderApi.operationServers,
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
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (page !== undefined) {
      requestContext.setQueryParam(
        "page",
        serialize(page, TypingInfo, "number", "int64"),
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

  public async listBlueprints(
    limit?: number,
    page?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/app-builder/blueprints";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.listBlueprints",
      AppBuilderApi.operationServers,
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
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (page !== undefined) {
      requestContext.setQueryParam(
        "page",
        serialize(page, TypingInfo, "number", "int64"),
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

  public async listTags(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/app-builder/tags";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.listTags",
      AppBuilderApi.operationServers,
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

  public async publishApp(
    appId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "publishApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}/deployment".replace(
      "{app_id}",
      encodeURIComponent(String(appId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.publishApp",
      AppBuilderApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async revertApp(
    appId: string,
    version: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "revertApp");
    }

    // verify required parameter 'version' is not null or undefined
    if (version === null || version === undefined) {
      throw new RequiredError("version", "revertApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}/revert".replace(
      "{app_id}",
      encodeURIComponent(String(appId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.revertApp",
      AppBuilderApi.operationServers,
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

    // Query Params
    if (version !== undefined) {
      requestContext.setQueryParam(
        "version",
        serialize(version, TypingInfo, "string", ""),
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

  public async unpublishApp(
    appId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "unpublishApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}/deployment".replace(
      "{app_id}",
      encodeURIComponent(String(appId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.unpublishApp",
      AppBuilderApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
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

  public async updateApp(
    appId: string,
    body: UpdateAppRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "updateApp");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}".replace(
      "{app_id}",
      encodeURIComponent(String(appId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.updateApp",
      AppBuilderApi.operationServers,
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
      serialize(body, TypingInfo, "UpdateAppRequest", ""),
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

  public async updateAppFavorite(
    appId: string,
    body: UpdateAppFavoriteRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "updateAppFavorite");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAppFavorite");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}/favorite".replace(
      "{app_id}",
      encodeURIComponent(String(appId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.updateAppFavorite",
      AppBuilderApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
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
      serialize(body, TypingInfo, "UpdateAppFavoriteRequest", ""),
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

  public async updateAppSelfService(
    appId: string,
    body: UpdateAppSelfServiceRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "updateAppSelfService");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAppSelfService");
    }

    // Path Params
    const localVarPath =
      "/api/v2/app-builder/apps/{app_id}/self-service".replace(
        "{app_id}",
        encodeURIComponent(String(appId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.updateAppSelfService",
      AppBuilderApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
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
      serialize(body, TypingInfo, "UpdateAppSelfServiceRequest", ""),
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

  public async updateAppTags(
    appId: string,
    body: UpdateAppTagsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "updateAppTags");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAppTags");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}/tags".replace(
      "{app_id}",
      encodeURIComponent(String(appId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.updateAppTags",
      AppBuilderApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
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
      serialize(body, TypingInfo, "UpdateAppTagsRequest", ""),
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

  public async updateAppVersionName(
    appId: string,
    version: string,
    body: UpdateAppVersionNameRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "updateAppVersionName");
    }

    // verify required parameter 'version' is not null or undefined
    if (version === null || version === undefined) {
      throw new RequiredError("version", "updateAppVersionName");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAppVersionName");
    }

    // Path Params
    const localVarPath =
      "/api/v2/app-builder/apps/{app_id}/version-name".replace(
        "{app_id}",
        encodeURIComponent(String(appId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.updateAppVersionName",
      AppBuilderApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (version !== undefined) {
      requestContext.setQueryParam(
        "version",
        serialize(version, TypingInfo, "string", ""),
        "",
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "UpdateAppVersionNameRequest", ""),
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

  public async updateProtectionLevel(
    appId: string,
    body: UpdateAppProtectionLevelRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "updateProtectionLevel");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateProtectionLevel");
    }

    // Path Params
    const localVarPath =
      "/api/v2/app-builder/apps/{app_id}/protection-level".replace(
        "{app_id}",
        encodeURIComponent(String(appId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AppBuilderApi.v2.updateProtectionLevel",
      AppBuilderApi.operationServers,
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
      serialize(body, TypingInfo, "UpdateAppProtectionLevelRequest", ""),
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

export class AppBuilderApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createApp(
    response: ResponseContext,
  ): Promise<CreateAppResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: CreateAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateAppResponse",
      ) as CreateAppResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: CreateAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateAppResponse",
        "",
      ) as CreateAppResponse;
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
   * @params response Response returned by the server for a request to createPublishRequest
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createPublishRequest(
    response: ResponseContext,
  ): Promise<PublishAppResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: PublishAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PublishAppResponse",
      ) as PublishAppResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: PublishAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PublishAppResponse",
        "",
      ) as PublishAppResponse;
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
   * @params response Response returned by the server for a request to deleteApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteApp(
    response: ResponseContext,
  ): Promise<DeleteAppResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DeleteAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeleteAppResponse",
      ) as DeleteAppResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 410
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
      const body: DeleteAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeleteAppResponse",
        "",
      ) as DeleteAppResponse;
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
   * @params response Response returned by the server for a request to deleteApps
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteApps(
    response: ResponseContext,
  ): Promise<DeleteAppsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DeleteAppsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeleteAppsResponse",
      ) as DeleteAppsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: DeleteAppsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeleteAppsResponse",
        "",
      ) as DeleteAppsResponse;
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
   * @params response Response returned by the server for a request to getApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getApp(response: ResponseContext): Promise<GetAppResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetAppResponse",
      ) as GetAppResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 410
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
      const body: GetAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetAppResponse",
        "",
      ) as GetAppResponse;
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
   * @params response Response returned by the server for a request to getBlueprint
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getBlueprint(
    response: ResponseContext,
  ): Promise<GetBlueprintResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetBlueprintResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetBlueprintResponse",
      ) as GetBlueprintResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
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
      const body: GetBlueprintResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetBlueprintResponse",
        "",
      ) as GetBlueprintResponse;
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
   * @params response Response returned by the server for a request to getBlueprintsByIntegrationId
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getBlueprintsByIntegrationId(
    response: ResponseContext,
  ): Promise<GetBlueprintsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetBlueprintsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetBlueprintsResponse",
      ) as GetBlueprintsResponse;
      return body;
    }
    if (response.httpStatusCode === 403) {
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
      const body: GetBlueprintsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetBlueprintsResponse",
        "",
      ) as GetBlueprintsResponse;
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
   * @params response Response returned by the server for a request to getBlueprintsBySlugs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getBlueprintsBySlugs(
    response: ResponseContext,
  ): Promise<GetBlueprintsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetBlueprintsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetBlueprintsResponse",
      ) as GetBlueprintsResponse;
      return body;
    }
    if (response.httpStatusCode === 403) {
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
      const body: GetBlueprintsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetBlueprintsResponse",
        "",
      ) as GetBlueprintsResponse;
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
   * @params response Response returned by the server for a request to listApps
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listApps(response: ResponseContext): Promise<ListAppsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListAppsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListAppsResponse",
      ) as ListAppsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: ListAppsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListAppsResponse",
        "",
      ) as ListAppsResponse;
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
   * @params response Response returned by the server for a request to listAppVersions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAppVersions(
    response: ResponseContext,
  ): Promise<ListAppVersionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListAppVersionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListAppVersionsResponse",
      ) as ListAppVersionsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: ListAppVersionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListAppVersionsResponse",
        "",
      ) as ListAppVersionsResponse;
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
   * @params response Response returned by the server for a request to listBlueprints
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listBlueprints(
    response: ResponseContext,
  ): Promise<ListBlueprintsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListBlueprintsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListBlueprintsResponse",
      ) as ListBlueprintsResponse;
      return body;
    }
    if (response.httpStatusCode === 403) {
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
      const body: ListBlueprintsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListBlueprintsResponse",
        "",
      ) as ListBlueprintsResponse;
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
   * @params response Response returned by the server for a request to listTags
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTags(
    response: ResponseContext,
  ): Promise<AppBuilderListTagsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AppBuilderListTagsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AppBuilderListTagsResponse",
      ) as AppBuilderListTagsResponse;
      return body;
    }
    if (response.httpStatusCode === 403) {
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
      const body: AppBuilderListTagsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AppBuilderListTagsResponse",
        "",
      ) as AppBuilderListTagsResponse;
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
   * @params response Response returned by the server for a request to publishApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async publishApp(
    response: ResponseContext,
  ): Promise<PublishAppResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: PublishAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PublishAppResponse",
      ) as PublishAppResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: PublishAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PublishAppResponse",
        "",
      ) as PublishAppResponse;
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
   * @params response Response returned by the server for a request to revertApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async revertApp(
    response: ResponseContext,
  ): Promise<UpdateAppResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UpdateAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateAppResponse",
      ) as UpdateAppResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: UpdateAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateAppResponse",
        "",
      ) as UpdateAppResponse;
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
   * @params response Response returned by the server for a request to unpublishApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unpublishApp(
    response: ResponseContext,
  ): Promise<UnpublishAppResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UnpublishAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UnpublishAppResponse",
      ) as UnpublishAppResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: UnpublishAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UnpublishAppResponse",
        "",
      ) as UnpublishAppResponse;
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
   * @params response Response returned by the server for a request to updateApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateApp(
    response: ResponseContext,
  ): Promise<UpdateAppResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UpdateAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateAppResponse",
      ) as UpdateAppResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
      const body: UpdateAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateAppResponse",
        "",
      ) as UpdateAppResponse;
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
   * @params response Response returned by the server for a request to updateAppFavorite
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAppFavorite(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
   * @params response Response returned by the server for a request to updateAppSelfService
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAppSelfService(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
   * @params response Response returned by the server for a request to updateAppTags
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAppTags(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
   * @params response Response returned by the server for a request to updateAppVersionName
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAppVersionName(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
   * @params response Response returned by the server for a request to updateProtectionLevel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateProtectionLevel(
    response: ResponseContext,
  ): Promise<UpdateAppResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UpdateAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateAppResponse",
      ) as UpdateAppResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: UpdateAppResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateAppResponse",
        "",
      ) as UpdateAppResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface AppBuilderApiCreateAppRequest {
  /**
   * @type CreateAppRequest
   */
  body: CreateAppRequest;
}

export interface AppBuilderApiCreatePublishRequestRequest {
  /**
   * The ID of the app.
   * @type string
   */
  appId: string;
  /**
   * @type CreatePublishRequestRequest
   */
  body: CreatePublishRequestRequest;
}

export interface AppBuilderApiDeleteAppRequest {
  /**
   * The ID of the app to delete.
   * @type string
   */
  appId: string;
}

export interface AppBuilderApiDeleteAppsRequest {
  /**
   * @type DeleteAppsRequest
   */
  body: DeleteAppsRequest;
}

export interface AppBuilderApiGetAppRequest {
  /**
   * The ID of the app to retrieve.
   * @type string
   */
  appId: string;
  /**
   * The version number of the app to retrieve. If not specified, the latest version is returned. Version numbers start at 1 and increment with each update. The special values `latest` and `deployed` can be used to retrieve the latest version or the published version, respectively.
   * @type string
   */
  version?: string;
}

export interface AppBuilderApiGetBlueprintRequest {
  /**
   * The ID of the blueprint to retrieve.
   * @type string
   */
  blueprintId: string;
}

export interface AppBuilderApiGetBlueprintsByIntegrationIdRequest {
  /**
   * The integration ID to filter blueprints by.
   * @type string
   */
  integrationId: string;
}

export interface AppBuilderApiGetBlueprintsBySlugsRequest {
  /**
   * A comma-separated list of blueprint slugs.
   * @type string
   */
  slugs: string;
}

export interface AppBuilderApiListAppsRequest {
  /**
   * The number of apps to return per page.
   * @type number
   */
  limit?: number;
  /**
   * The page number to return.
   * @type number
   */
  page?: number;
  /**
   * Filter apps by the app creator. Usually the user's email.
   * @type string
   */
  filterUserName?: string;
  /**
   * Filter apps by the app creator's UUID.
   * @type string
   */
  filterUserUuid?: string;
  /**
   * Filter by app name.
   * @type string
   */
  filterName?: string;
  /**
   * Filter apps by the app name or the app creator.
   * @type string
   */
  filterQuery?: string;
  /**
   * Filter apps by whether they are published.
   * @type boolean
   */
  filterDeployed?: boolean;
  /**
   * Filter apps by tags.
   * @type string
   */
  filterTags?: string;
  /**
   * Filter apps by whether you have added them to your favorites.
   * @type boolean
   */
  filterFavorite?: boolean;
  /**
   * Filter apps by whether they are enabled for self-service.
   * @type boolean
   */
  filterSelfService?: boolean;
  /**
   * The fields and direction to sort apps by.
   * @type Array<AppsSortField>
   */
  sort?: Array<AppsSortField>;
}

export interface AppBuilderApiListAppVersionsRequest {
  /**
   * The ID of the app.
   * @type string
   */
  appId: string;
  /**
   * The number of versions to return per page.
   * @type number
   */
  limit?: number;
  /**
   * The page number to return.
   * @type number
   */
  page?: number;
}

export interface AppBuilderApiListBlueprintsRequest {
  /**
   * The number of blueprints to return per page. Defaults to 10. Maximum is 100.
   * @type number
   */
  limit?: number;
  /**
   * The page of results to return. Starts at 0.
   * @type number
   */
  page?: number;
}

export interface AppBuilderApiPublishAppRequest {
  /**
   * The ID of the app to publish.
   * @type string
   */
  appId: string;
}

export interface AppBuilderApiRevertAppRequest {
  /**
   * The ID of the app.
   * @type string
   */
  appId: string;
  /**
   * The version number of the app to revert to. Cannot be `latest`. The special value `deployed` can be used to revert to the currently published version.
   * @type string
   */
  version: string;
}

export interface AppBuilderApiUnpublishAppRequest {
  /**
   * The ID of the app to unpublish.
   * @type string
   */
  appId: string;
}

export interface AppBuilderApiUpdateAppRequest {
  /**
   * The ID of the app to update.
   * @type string
   */
  appId: string;
  /**
   * @type UpdateAppRequest
   */
  body: UpdateAppRequest;
}

export interface AppBuilderApiUpdateAppFavoriteRequest {
  /**
   * The ID of the app.
   * @type string
   */
  appId: string;
  /**
   * @type UpdateAppFavoriteRequest
   */
  body: UpdateAppFavoriteRequest;
}

export interface AppBuilderApiUpdateAppSelfServiceRequest {
  /**
   * The ID of the app.
   * @type string
   */
  appId: string;
  /**
   * @type UpdateAppSelfServiceRequest
   */
  body: UpdateAppSelfServiceRequest;
}

export interface AppBuilderApiUpdateAppTagsRequest {
  /**
   * The ID of the app.
   * @type string
   */
  appId: string;
  /**
   * @type UpdateAppTagsRequest
   */
  body: UpdateAppTagsRequest;
}

export interface AppBuilderApiUpdateAppVersionNameRequest {
  /**
   * The ID of the app.
   * @type string
   */
  appId: string;
  /**
   * The version number of the app to name. The special values `latest` and `deployed` can also be used to target the latest or currently published version.
   * @type string
   */
  version: string;
  /**
   * @type UpdateAppVersionNameRequest
   */
  body: UpdateAppVersionNameRequest;
}

export interface AppBuilderApiUpdateProtectionLevelRequest {
  /**
   * The ID of the app.
   * @type string
   */
  appId: string;
  /**
   * @type UpdateAppProtectionLevelRequest
   */
  body: UpdateAppProtectionLevelRequest;
}

export class AppBuilderApi {
  private requestFactory: AppBuilderApiRequestFactory;
  private responseProcessor: AppBuilderApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: AppBuilderApiRequestFactory,
    responseProcessor?: AppBuilderApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new AppBuilderApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new AppBuilderApiResponseProcessor();
  }

  /**
   * Create a new app, returning the app ID. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
   * @param param The request object
   */
  public createApp(
    param: AppBuilderApiCreateAppRequest,
    options?: Configuration,
  ): Promise<CreateAppResponse> {
    const requestContextPromise = this.requestFactory.createApp(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createApp(responseContext);
        });
    });
  }

  /**
   * Create a publish request to ask for approval to publish an app whose protection level is `approval_required`. Publishing happens automatically once the request is approved by a user with the appropriate permissions.
   * @param param The request object
   */
  public createPublishRequest(
    param: AppBuilderApiCreatePublishRequestRequest,
    options?: Configuration,
  ): Promise<PublishAppResponse> {
    const requestContextPromise = this.requestFactory.createPublishRequest(
      param.appId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createPublishRequest(responseContext);
        });
    });
  }

  /**
   * Delete a single app. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
   * @param param The request object
   */
  public deleteApp(
    param: AppBuilderApiDeleteAppRequest,
    options?: Configuration,
  ): Promise<DeleteAppResponse> {
    const requestContextPromise = this.requestFactory.deleteApp(
      param.appId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteApp(responseContext);
        });
    });
  }

  /**
   * Delete multiple apps in a single request from a list of app IDs. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
   * @param param The request object
   */
  public deleteApps(
    param: AppBuilderApiDeleteAppsRequest,
    options?: Configuration,
  ): Promise<DeleteAppsResponse> {
    const requestContextPromise = this.requestFactory.deleteApps(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteApps(responseContext);
        });
    });
  }

  /**
   * Get the full definition of an app. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
   * @param param The request object
   */
  public getApp(
    param: AppBuilderApiGetAppRequest,
    options?: Configuration,
  ): Promise<GetAppResponse> {
    const requestContextPromise = this.requestFactory.getApp(
      param.appId,
      param.version,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getApp(responseContext);
        });
    });
  }

  /**
   * Retrieve an app blueprint by its ID.
   * @param param The request object
   */
  public getBlueprint(
    param: AppBuilderApiGetBlueprintRequest,
    options?: Configuration,
  ): Promise<GetBlueprintResponse> {
    const requestContextPromise = this.requestFactory.getBlueprint(
      param.blueprintId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getBlueprint(responseContext);
        });
    });
  }

  /**
   * List app blueprints associated with a specific integration ID.
   * @param param The request object
   */
  public getBlueprintsByIntegrationId(
    param: AppBuilderApiGetBlueprintsByIntegrationIdRequest,
    options?: Configuration,
  ): Promise<GetBlueprintsResponse> {
    const requestContextPromise =
      this.requestFactory.getBlueprintsByIntegrationId(
        param.integrationId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getBlueprintsByIntegrationId(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve app blueprints by their slugs.
   * @param param The request object
   */
  public getBlueprintsBySlugs(
    param: AppBuilderApiGetBlueprintsBySlugsRequest,
    options?: Configuration,
  ): Promise<GetBlueprintsResponse> {
    const requestContextPromise = this.requestFactory.getBlueprintsBySlugs(
      param.slugs,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getBlueprintsBySlugs(responseContext);
        });
    });
  }

  /**
   * List all apps, with optional filters and sorting. This endpoint is paginated. Only basic app information such as the app ID, name, and description is returned by this endpoint. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
   * @param param The request object
   */
  public listApps(
    param: AppBuilderApiListAppsRequest = {},
    options?: Configuration,
  ): Promise<ListAppsResponse> {
    const requestContextPromise = this.requestFactory.listApps(
      param.limit,
      param.page,
      param.filterUserName,
      param.filterUserUuid,
      param.filterName,
      param.filterQuery,
      param.filterDeployed,
      param.filterTags,
      param.filterFavorite,
      param.filterSelfService,
      param.sort,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listApps(responseContext);
        });
    });
  }

  /**
   * List the versions of an app. This endpoint is paginated.
   * @param param The request object
   */
  public listAppVersions(
    param: AppBuilderApiListAppVersionsRequest,
    options?: Configuration,
  ): Promise<ListAppVersionsResponse> {
    const requestContextPromise = this.requestFactory.listAppVersions(
      param.appId,
      param.limit,
      param.page,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAppVersions(responseContext);
        });
    });
  }

  /**
   * List available app blueprints.
   * @param param The request object
   */
  public listBlueprints(
    param: AppBuilderApiListBlueprintsRequest = {},
    options?: Configuration,
  ): Promise<ListBlueprintsResponse> {
    const requestContextPromise = this.requestFactory.listBlueprints(
      param.limit,
      param.page,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listBlueprints(responseContext);
        });
    });
  }

  /**
   * List all tags associated with the authenticated user's apps.
   * @param param The request object
   */
  public listTags(
    options?: Configuration,
  ): Promise<AppBuilderListTagsResponse> {
    const requestContextPromise = this.requestFactory.listTags(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTags(responseContext);
        });
    });
  }

  /**
   * Publish an app for use by other users. To ensure the app is accessible to the correct users, you also need to set a [Restriction Policy](https://docs.datadoghq.com/api/latest/restriction-policies/) on the app if a policy does not yet exist. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
   * @param param The request object
   */
  public publishApp(
    param: AppBuilderApiPublishAppRequest,
    options?: Configuration,
  ): Promise<PublishAppResponse> {
    const requestContextPromise = this.requestFactory.publishApp(
      param.appId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.publishApp(responseContext);
        });
    });
  }

  /**
   * Revert an app to a previous version. The version to revert to is selected through the `version` query parameter. The reverted version becomes the new latest version of the app.
   * @param param The request object
   */
  public revertApp(
    param: AppBuilderApiRevertAppRequest,
    options?: Configuration,
  ): Promise<UpdateAppResponse> {
    const requestContextPromise = this.requestFactory.revertApp(
      param.appId,
      param.version,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.revertApp(responseContext);
        });
    });
  }

  /**
   * Unpublish an app, removing the live version of the app. Unpublishing creates a new instance of a `deployment` object on the app, with a nil `app_version_id` (`00000000-0000-0000-0000-000000000000`). The app can still be updated and published again in the future. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
   * @param param The request object
   */
  public unpublishApp(
    param: AppBuilderApiUnpublishAppRequest,
    options?: Configuration,
  ): Promise<UnpublishAppResponse> {
    const requestContextPromise = this.requestFactory.unpublishApp(
      param.appId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unpublishApp(responseContext);
        });
    });
  }

  /**
   * Update an existing app. This creates a new version of the app. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
   * @param param The request object
   */
  public updateApp(
    param: AppBuilderApiUpdateAppRequest,
    options?: Configuration,
  ): Promise<UpdateAppResponse> {
    const requestContextPromise = this.requestFactory.updateApp(
      param.appId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateApp(responseContext);
        });
    });
  }

  /**
   * Add or remove an app from the current user's favorites. Favorited apps can be filtered for using the `filter[favorite]` query parameter on the [List Apps](https://docs.datadoghq.com/api/latest/app-builder/#list-apps) endpoint.
   * @param param The request object
   */
  public updateAppFavorite(
    param: AppBuilderApiUpdateAppFavoriteRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.updateAppFavorite(
      param.appId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAppFavorite(responseContext);
        });
    });
  }

  /**
   * Enable or disable self-service for an app. Self-service apps can be discovered and run by users in your organization without explicit access being granted.
   * @param param The request object
   */
  public updateAppSelfService(
    param: AppBuilderApiUpdateAppSelfServiceRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.updateAppSelfService(
      param.appId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAppSelfService(responseContext);
        });
    });
  }

  /**
   * Replace the tags on an app. The provided list overwrites the existing tags entirely; tags not present in the request body are removed.
   * @param param The request object
   */
  public updateAppTags(
    param: AppBuilderApiUpdateAppTagsRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.updateAppTags(
      param.appId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAppTags(responseContext);
        });
    });
  }

  /**
   * Assign a human-readable name to a specific version of an app. The version is selected through the `version` query parameter.
   * @param param The request object
   */
  public updateAppVersionName(
    param: AppBuilderApiUpdateAppVersionNameRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.updateAppVersionName(
      param.appId,
      param.version,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAppVersionName(responseContext);
        });
    });
  }

  /**
   * Update the publication protection level of an app. When set to `approval_required`, future publishes must go through an approval workflow before going live.
   * @param param The request object
   */
  public updateProtectionLevel(
    param: AppBuilderApiUpdateProtectionLevelRequest,
    options?: Configuration,
  ): Promise<UpdateAppResponse> {
    const requestContextPromise = this.requestFactory.updateProtectionLevel(
      param.appId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateProtectionLevel(responseContext);
        });
    });
  }
}
