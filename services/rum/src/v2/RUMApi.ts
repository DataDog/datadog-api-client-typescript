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
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { ListSourcemapsResponse } from "./models/ListSourcemapsResponse";
import { RUMAggregateRequest } from "./models/RUMAggregateRequest";
import { RUMAnalyticsAggregateResponse } from "./models/RUMAnalyticsAggregateResponse";
import { RUMApplicationCreateRequest } from "./models/RUMApplicationCreateRequest";
import { RUMApplicationResponse } from "./models/RUMApplicationResponse";
import { RUMApplicationsResponse } from "./models/RUMApplicationsResponse";
import { RUMApplicationUpdateRequest } from "./models/RUMApplicationUpdateRequest";
import { RUMEvent } from "./models/RUMEvent";
import { RUMEventsResponse } from "./models/RUMEventsResponse";
import { RUMQueryPageOptions } from "./models/RUMQueryPageOptions";
import { RUMSearchEventsRequest } from "./models/RUMSearchEventsRequest";
import { RUMSort } from "./models/RUMSort";
import { ServiceRepositoryInfoRequest } from "./models/ServiceRepositoryInfoRequest";
import { ServiceRepositoryInfoResponse } from "./models/ServiceRepositoryInfoResponse";
import { SourcemapFileResponse } from "./models/SourcemapFileResponse";
import { SourcemapMapKind } from "./models/SourcemapMapKind";
import { SourcemapsResponse } from "./models/SourcemapsResponse";
import { version } from "../version";

export class RUMApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("rum", version);
    }
  }
  public async aggregateRUMEvents(
    body: RUMAggregateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "aggregateRUMEvents");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/analytics/aggregate";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMApi.v2.aggregateRUMEvents",
      RUMApi.operationServers,
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
      serialize(body, TypingInfo, "RUMAggregateRequest", ""),
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

  public async createRUMApplication(
    body: RUMApplicationCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRUMApplication");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/applications";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMApi.v2.createRUMApplication",
      RUMApi.operationServers,
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
      serialize(body, TypingInfo, "RUMApplicationCreateRequest", ""),
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

  public async deleteRUMApplication(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteRUMApplication");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/applications/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMApi.v2.deleteRUMApplication",
      RUMApi.operationServers,
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

  public async deleteSourcemaps(
    mapkind: SourcemapMapKind,
    dryRun: boolean,
    filterService?: Array<string>,
    filterVersion?: Array<string>,
    filterVariant?: Array<string>,
    filterId?: Array<string>,
    filterBuildId?: Array<string>,
    filterUuid?: Array<string>,
    filterPlatform?: Array<string>,
    filterBuildNumber?: Array<string>,
    filterBundleName?: Array<string>,
    filterArch?: Array<string>,
    filterSymbolSource?: Array<string>,
    filterOrigin?: Array<string>,
    filterOriginVersion?: Array<string>,
    filterFilename?: string,
    filterDebugId?: string,
    filterGnuBuildId?: string,
    filterGoBuildId?: string,
    filterFileHash?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RUMApi.v2.deleteSourcemaps"]) {
      throw new Error(
        "Unstable operation 'deleteSourcemaps' is disabled. Enable it by setting `configuration.unstableOperations['RUMApi.v2.deleteSourcemaps'] = true`",
      );
    }

    // verify required parameter 'mapkind' is not null or undefined
    if (mapkind === null || mapkind === undefined) {
      throw new RequiredError("mapkind", "deleteSourcemaps");
    }

    // verify required parameter 'dryRun' is not null or undefined
    if (dryRun === null || dryRun === undefined) {
      throw new RequiredError("dryRun", "deleteSourcemaps");
    }

    // Path Params
    const localVarPath = "/api/v2/sourcemaps";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMApi.v2.deleteSourcemaps",
      RUMApi.operationServers,
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

    // Query Params
    if (mapkind !== undefined) {
      requestContext.setQueryParam(
        "mapkind",
        serialize(mapkind, TypingInfo, "SourcemapMapKind", ""),
        "",
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dry_run",
        serialize(dryRun, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterService !== undefined) {
      requestContext.setQueryParam(
        "filter[service]",
        serialize(filterService, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[version]",
        serialize(filterVersion, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterVariant !== undefined) {
      requestContext.setQueryParam(
        "filter[variant]",
        serialize(filterVariant, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterId !== undefined) {
      requestContext.setQueryParam(
        "filter[id]",
        serialize(filterId, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterBuildId !== undefined) {
      requestContext.setQueryParam(
        "filter[build_id]",
        serialize(filterBuildId, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterUuid !== undefined) {
      requestContext.setQueryParam(
        "filter[uuid]",
        serialize(filterUuid, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterPlatform !== undefined) {
      requestContext.setQueryParam(
        "filter[platform]",
        serialize(filterPlatform, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterBuildNumber !== undefined) {
      requestContext.setQueryParam(
        "filter[build_number]",
        serialize(filterBuildNumber, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterBundleName !== undefined) {
      requestContext.setQueryParam(
        "filter[bundle_name]",
        serialize(filterBundleName, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterArch !== undefined) {
      requestContext.setQueryParam(
        "filter[arch]",
        serialize(filterArch, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterSymbolSource !== undefined) {
      requestContext.setQueryParam(
        "filter[symbol_source]",
        serialize(filterSymbolSource, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterOrigin !== undefined) {
      requestContext.setQueryParam(
        "filter[origin]",
        serialize(filterOrigin, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterOriginVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[origin_version]",
        serialize(filterOriginVersion, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterFilename !== undefined) {
      requestContext.setQueryParam(
        "filter[filename]",
        serialize(filterFilename, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterDebugId !== undefined) {
      requestContext.setQueryParam(
        "filter[debug_id]",
        serialize(filterDebugId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterGnuBuildId !== undefined) {
      requestContext.setQueryParam(
        "filter[gnu_build_id]",
        serialize(filterGnuBuildId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterGoBuildId !== undefined) {
      requestContext.setQueryParam(
        "filter[go_build_id]",
        serialize(filterGoBuildId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterFileHash !== undefined) {
      requestContext.setQueryParam(
        "filter[file_hash]",
        serialize(filterFileHash, TypingInfo, "string", ""),
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

  public async getRUMApplication(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getRUMApplication");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/applications/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMApi.v2.getRUMApplication",
      RUMApi.operationServers,
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

  public async getRUMApplications(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/rum/applications";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMApi.v2.getRUMApplications",
      RUMApi.operationServers,
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

  public async getServiceRepositoryInfo(
    body: ServiceRepositoryInfoRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RUMApi.v2.getServiceRepositoryInfo"]) {
      throw new Error(
        "Unstable operation 'getServiceRepositoryInfo' is disabled. Enable it by setting `configuration.unstableOperations['RUMApi.v2.getServiceRepositoryInfo'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "getServiceRepositoryInfo");
    }

    // Path Params
    const localVarPath = "/api/v2/sourcemaps/service_repository_info";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMApi.v2.getServiceRepositoryInfo",
      RUMApi.operationServers,
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
      serialize(body, TypingInfo, "ServiceRepositoryInfoRequest", ""),
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

  public async getSourcemaps(
    filename: string,
    service: string,
    version: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RUMApi.v2.getSourcemaps"]) {
      throw new Error(
        "Unstable operation 'getSourcemaps' is disabled. Enable it by setting `configuration.unstableOperations['RUMApi.v2.getSourcemaps'] = true`",
      );
    }

    // verify required parameter 'filename' is not null or undefined
    if (filename === null || filename === undefined) {
      throw new RequiredError("filename", "getSourcemaps");
    }

    // verify required parameter 'service' is not null or undefined
    if (service === null || service === undefined) {
      throw new RequiredError("service", "getSourcemaps");
    }

    // verify required parameter 'version' is not null or undefined
    if (version === null || version === undefined) {
      throw new RequiredError("version", "getSourcemaps");
    }

    // Path Params
    const localVarPath = "/api/v2/sourcemaps";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMApi.v2.getSourcemaps",
      RUMApi.operationServers,
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
    if (filename !== undefined) {
      requestContext.setQueryParam(
        "filename",
        serialize(filename, TypingInfo, "string", ""),
        "",
      );
    }
    if (service !== undefined) {
      requestContext.setQueryParam(
        "service",
        serialize(service, TypingInfo, "string", ""),
        "",
      );
    }
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

  public async listRUMEvents(
    filterQuery?: string,
    filterFrom?: Date,
    filterTo?: Date,
    sort?: RUMSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/rum/events";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMApi.v2.listRUMEvents",
      RUMApi.operationServers,
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
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        serialize(filterQuery, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterFrom !== undefined) {
      requestContext.setQueryParam(
        "filter[from]",
        serialize(filterFrom, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (filterTo !== undefined) {
      requestContext.setQueryParam(
        "filter[to]",
        serialize(filterTo, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "RUMSort", ""),
        "",
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        serialize(pageCursor, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", "int32"),
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

  public async listSourcemaps(
    mapkind?: SourcemapMapKind,
    pageSize?: number,
    pageNumber?: number,
    filterService?: Array<string>,
    filterVersion?: Array<string>,
    filterVariant?: Array<string>,
    filterId?: Array<string>,
    filterBuildId?: Array<string>,
    filterUuid?: Array<string>,
    filterPlatform?: Array<string>,
    filterBuildNumber?: Array<string>,
    filterBundleName?: Array<string>,
    filterArch?: Array<string>,
    filterSymbolSource?: Array<string>,
    filterOrigin?: Array<string>,
    filterOriginVersion?: Array<string>,
    filterFilename?: string,
    filterDebugId?: string,
    filterGnuBuildId?: string,
    filterGoBuildId?: string,
    filterFileHash?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RUMApi.v2.listSourcemaps"]) {
      throw new Error(
        "Unstable operation 'listSourcemaps' is disabled. Enable it by setting `configuration.unstableOperations['RUMApi.v2.listSourcemaps'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/sourcemaps/list";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMApi.v2.listSourcemaps",
      RUMApi.operationServers,
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
    if (mapkind !== undefined) {
      requestContext.setQueryParam(
        "mapkind",
        serialize(mapkind, TypingInfo, "SourcemapMapKind", ""),
        "",
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", ""),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", ""),
        "",
      );
    }
    if (filterService !== undefined) {
      requestContext.setQueryParam(
        "filter[service]",
        serialize(filterService, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[version]",
        serialize(filterVersion, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterVariant !== undefined) {
      requestContext.setQueryParam(
        "filter[variant]",
        serialize(filterVariant, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterId !== undefined) {
      requestContext.setQueryParam(
        "filter[id]",
        serialize(filterId, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterBuildId !== undefined) {
      requestContext.setQueryParam(
        "filter[build_id]",
        serialize(filterBuildId, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterUuid !== undefined) {
      requestContext.setQueryParam(
        "filter[uuid]",
        serialize(filterUuid, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterPlatform !== undefined) {
      requestContext.setQueryParam(
        "filter[platform]",
        serialize(filterPlatform, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterBuildNumber !== undefined) {
      requestContext.setQueryParam(
        "filter[build_number]",
        serialize(filterBuildNumber, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterBundleName !== undefined) {
      requestContext.setQueryParam(
        "filter[bundle_name]",
        serialize(filterBundleName, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterArch !== undefined) {
      requestContext.setQueryParam(
        "filter[arch]",
        serialize(filterArch, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterSymbolSource !== undefined) {
      requestContext.setQueryParam(
        "filter[symbol_source]",
        serialize(filterSymbolSource, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterOrigin !== undefined) {
      requestContext.setQueryParam(
        "filter[origin]",
        serialize(filterOrigin, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterOriginVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[origin_version]",
        serialize(filterOriginVersion, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterFilename !== undefined) {
      requestContext.setQueryParam(
        "filter[filename]",
        serialize(filterFilename, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterDebugId !== undefined) {
      requestContext.setQueryParam(
        "filter[debug_id]",
        serialize(filterDebugId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterGnuBuildId !== undefined) {
      requestContext.setQueryParam(
        "filter[gnu_build_id]",
        serialize(filterGnuBuildId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterGoBuildId !== undefined) {
      requestContext.setQueryParam(
        "filter[go_build_id]",
        serialize(filterGoBuildId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterFileHash !== undefined) {
      requestContext.setQueryParam(
        "filter[file_hash]",
        serialize(filterFileHash, TypingInfo, "string", ""),
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

  public async restoreSourcemaps(
    mapkind: SourcemapMapKind,
    dryRun: boolean,
    filterService?: Array<string>,
    filterVersion?: Array<string>,
    filterVariant?: Array<string>,
    filterId?: Array<string>,
    filterBuildId?: Array<string>,
    filterUuid?: Array<string>,
    filterPlatform?: Array<string>,
    filterBuildNumber?: Array<string>,
    filterBundleName?: Array<string>,
    filterArch?: Array<string>,
    filterSymbolSource?: Array<string>,
    filterOrigin?: Array<string>,
    filterOriginVersion?: Array<string>,
    filterFilename?: string,
    filterDebugId?: string,
    filterGnuBuildId?: string,
    filterGoBuildId?: string,
    filterFileHash?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RUMApi.v2.restoreSourcemaps"]) {
      throw new Error(
        "Unstable operation 'restoreSourcemaps' is disabled. Enable it by setting `configuration.unstableOperations['RUMApi.v2.restoreSourcemaps'] = true`",
      );
    }

    // verify required parameter 'mapkind' is not null or undefined
    if (mapkind === null || mapkind === undefined) {
      throw new RequiredError("mapkind", "restoreSourcemaps");
    }

    // verify required parameter 'dryRun' is not null or undefined
    if (dryRun === null || dryRun === undefined) {
      throw new RequiredError("dryRun", "restoreSourcemaps");
    }

    // Path Params
    const localVarPath = "/api/v2/sourcemaps/restore";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMApi.v2.restoreSourcemaps",
      RUMApi.operationServers,
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

    // Query Params
    if (mapkind !== undefined) {
      requestContext.setQueryParam(
        "mapkind",
        serialize(mapkind, TypingInfo, "SourcemapMapKind", ""),
        "",
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dry_run",
        serialize(dryRun, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterService !== undefined) {
      requestContext.setQueryParam(
        "filter[service]",
        serialize(filterService, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[version]",
        serialize(filterVersion, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterVariant !== undefined) {
      requestContext.setQueryParam(
        "filter[variant]",
        serialize(filterVariant, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterId !== undefined) {
      requestContext.setQueryParam(
        "filter[id]",
        serialize(filterId, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterBuildId !== undefined) {
      requestContext.setQueryParam(
        "filter[build_id]",
        serialize(filterBuildId, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterUuid !== undefined) {
      requestContext.setQueryParam(
        "filter[uuid]",
        serialize(filterUuid, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterPlatform !== undefined) {
      requestContext.setQueryParam(
        "filter[platform]",
        serialize(filterPlatform, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterBuildNumber !== undefined) {
      requestContext.setQueryParam(
        "filter[build_number]",
        serialize(filterBuildNumber, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterBundleName !== undefined) {
      requestContext.setQueryParam(
        "filter[bundle_name]",
        serialize(filterBundleName, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterArch !== undefined) {
      requestContext.setQueryParam(
        "filter[arch]",
        serialize(filterArch, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterSymbolSource !== undefined) {
      requestContext.setQueryParam(
        "filter[symbol_source]",
        serialize(filterSymbolSource, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterOrigin !== undefined) {
      requestContext.setQueryParam(
        "filter[origin]",
        serialize(filterOrigin, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterOriginVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[origin_version]",
        serialize(filterOriginVersion, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterFilename !== undefined) {
      requestContext.setQueryParam(
        "filter[filename]",
        serialize(filterFilename, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterDebugId !== undefined) {
      requestContext.setQueryParam(
        "filter[debug_id]",
        serialize(filterDebugId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterGnuBuildId !== undefined) {
      requestContext.setQueryParam(
        "filter[gnu_build_id]",
        serialize(filterGnuBuildId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterGoBuildId !== undefined) {
      requestContext.setQueryParam(
        "filter[go_build_id]",
        serialize(filterGoBuildId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterFileHash !== undefined) {
      requestContext.setQueryParam(
        "filter[file_hash]",
        serialize(filterFileHash, TypingInfo, "string", ""),
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

  public async searchRUMEvents(
    body: RUMSearchEventsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "searchRUMEvents");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/events/search";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMApi.v2.searchRUMEvents",
      RUMApi.operationServers,
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
      serialize(body, TypingInfo, "RUMSearchEventsRequest", ""),
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

  public async updateRUMApplication(
    id: string,
    body: RUMApplicationUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateRUMApplication");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateRUMApplication");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/applications/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMApi.v2.updateRUMApplication",
      RUMApi.operationServers,
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
      serialize(body, TypingInfo, "RUMApplicationUpdateRequest", ""),
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

export class RUMApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to aggregateRUMEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async aggregateRUMEvents(
    response: ResponseContext,
  ): Promise<RUMAnalyticsAggregateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMAnalyticsAggregateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMAnalyticsAggregateResponse",
      ) as RUMAnalyticsAggregateResponse;
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
      const body: RUMAnalyticsAggregateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMAnalyticsAggregateResponse",
        "",
      ) as RUMAnalyticsAggregateResponse;
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
   * @params response Response returned by the server for a request to createRUMApplication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRUMApplication(
    response: ResponseContext,
  ): Promise<RUMApplicationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMApplicationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMApplicationResponse",
      ) as RUMApplicationResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
      const body: RUMApplicationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMApplicationResponse",
        "",
      ) as RUMApplicationResponse;
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
   * @params response Response returned by the server for a request to deleteRUMApplication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRUMApplication(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to deleteSourcemaps
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSourcemaps(
    response: ResponseContext,
  ): Promise<SourcemapsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SourcemapsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SourcemapsResponse",
      ) as SourcemapsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SourcemapsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SourcemapsResponse",
        "",
      ) as SourcemapsResponse;
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
   * @params response Response returned by the server for a request to getRUMApplication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRUMApplication(
    response: ResponseContext,
  ): Promise<RUMApplicationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMApplicationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMApplicationResponse",
      ) as RUMApplicationResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
      const body: RUMApplicationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMApplicationResponse",
        "",
      ) as RUMApplicationResponse;
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
   * @params response Response returned by the server for a request to getRUMApplications
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRUMApplications(
    response: ResponseContext,
  ): Promise<RUMApplicationsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMApplicationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMApplicationsResponse",
      ) as RUMApplicationsResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
      const body: RUMApplicationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMApplicationsResponse",
        "",
      ) as RUMApplicationsResponse;
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
   * @params response Response returned by the server for a request to getServiceRepositoryInfo
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getServiceRepositoryInfo(
    response: ResponseContext,
  ): Promise<ServiceRepositoryInfoResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ServiceRepositoryInfoResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceRepositoryInfoResponse",
      ) as ServiceRepositoryInfoResponse;
      return body;
    }
    if (response.httpStatusCode === 401 || response.httpStatusCode === 500) {
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
      const body: ServiceRepositoryInfoResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ServiceRepositoryInfoResponse",
        "",
      ) as ServiceRepositoryInfoResponse;
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
   * @params response Response returned by the server for a request to getSourcemaps
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSourcemaps(
    response: ResponseContext,
  ): Promise<SourcemapFileResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SourcemapFileResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SourcemapFileResponse",
      ) as SourcemapFileResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SourcemapFileResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SourcemapFileResponse",
        "",
      ) as SourcemapFileResponse;
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
   * @params response Response returned by the server for a request to listRUMEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRUMEvents(
    response: ResponseContext,
  ): Promise<RUMEventsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMEventsResponse",
      ) as RUMEventsResponse;
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
      const body: RUMEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMEventsResponse",
        "",
      ) as RUMEventsResponse;
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
   * @params response Response returned by the server for a request to listSourcemaps
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSourcemaps(
    response: ResponseContext,
  ): Promise<ListSourcemapsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListSourcemapsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListSourcemapsResponse",
      ) as ListSourcemapsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 413 ||
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
      const body: ListSourcemapsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListSourcemapsResponse",
        "",
      ) as ListSourcemapsResponse;
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
   * @params response Response returned by the server for a request to restoreSourcemaps
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async restoreSourcemaps(
    response: ResponseContext,
  ): Promise<SourcemapsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SourcemapsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SourcemapsResponse",
      ) as SourcemapsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SourcemapsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SourcemapsResponse",
        "",
      ) as SourcemapsResponse;
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
   * @params response Response returned by the server for a request to searchRUMEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchRUMEvents(
    response: ResponseContext,
  ): Promise<RUMEventsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMEventsResponse",
      ) as RUMEventsResponse;
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
      const body: RUMEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMEventsResponse",
        "",
      ) as RUMEventsResponse;
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
   * @params response Response returned by the server for a request to updateRUMApplication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRUMApplication(
    response: ResponseContext,
  ): Promise<RUMApplicationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMApplicationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMApplicationResponse",
      ) as RUMApplicationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422 ||
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
      const body: RUMApplicationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMApplicationResponse",
        "",
      ) as RUMApplicationResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface RUMApiAggregateRUMEventsRequest {
  /**
   * @type RUMAggregateRequest
   */
  body: RUMAggregateRequest;
}

export interface RUMApiCreateRUMApplicationRequest {
  /**
   * @type RUMApplicationCreateRequest
   */
  body: RUMApplicationCreateRequest;
}

export interface RUMApiDeleteRUMApplicationRequest {
  /**
   * RUM application ID.
   * @type string
   */
  id: string;
}

export interface RUMApiDeleteSourcemapsRequest {
  /**
   * The type of source map. Valid values are `js`, `jvm`, `ios`,
   * `react`, `flutter`, `elf`, `ndk`, `il2cpp`.
   * @type SourcemapMapKind
   */
  mapkind: SourcemapMapKind;
  /**
   * When set to `true`, returns the source maps that would be deleted
   * without performing the actual deletion. When set to `false`,
   * performs the deletion.
   * @type boolean
   */
  dryRun: boolean;
  /**
   * Filter by service names (multiple values allowed). Required for
   * `js`, `jvm`, `react`, and `flutter` map kinds.
   * @type Array<string>
   */
  filterService?: Array<string>;
  /**
   * Filter by version values (multiple values allowed, maximum 10).
   * Required for `js`, `jvm`, `react`, and `flutter` map kinds.
   * @type Array<string>
   */
  filterVersion?: Array<string>;
  /**
   * Filter by variant values (multiple values allowed). Supported for `jvm`.
   * @type Array<string>
   */
  filterVariant?: Array<string>;
  /**
   * Filter by source map ID values (multiple values allowed). Supported for all map kinds.
   * @type Array<string>
   */
  filterId?: Array<string>;
  /**
   * Filter by build ID values (multiple values allowed). Supported for `jvm`, `ndk`, and `il2cpp`.
   * @type Array<string>
   */
  filterBuildId?: Array<string>;
  /**
   * Filter by UUID values (multiple values allowed). Supported for `ios`.
   * @type Array<string>
   */
  filterUuid?: Array<string>;
  /**
   * Filter by platform values (multiple values allowed). Supported for `react`.
   * @type Array<string>
   */
  filterPlatform?: Array<string>;
  /**
   * Filter by build number values (multiple values allowed). Supported for `react`.
   * @type Array<string>
   */
  filterBuildNumber?: Array<string>;
  /**
   * Filter by bundle name values (multiple values allowed). Supported for `react`.
   * @type Array<string>
   */
  filterBundleName?: Array<string>;
  /**
   * Filter by architecture values (multiple values allowed). Supported
   * for `flutter`, `elf`, and `ndk`.
   * @type Array<string>
   */
  filterArch?: Array<string>;
  /**
   * Filter by symbol source values (multiple values allowed). Supported for `elf`.
   * @type Array<string>
   */
  filterSymbolSource?: Array<string>;
  /**
   * Filter by origin values (multiple values allowed). Supported for `elf`.
   * @type Array<string>
   */
  filterOrigin?: Array<string>;
  /**
   * Filter by origin version values (multiple values allowed). Supported for `elf`.
   * @type Array<string>
   */
  filterOriginVersion?: Array<string>;
  /**
   * Filter by filename (single value). Supported for `js`, `elf`, and `ndk`.
   * @type string
   */
  filterFilename?: string;
  /**
   * Filter by debug ID (single value). Supported for `react`.
   * @type string
   */
  filterDebugId?: string;
  /**
   * Filter by GNU build ID (single value). Supported for `elf`.
   * @type string
   */
  filterGnuBuildId?: string;
  /**
   * Filter by Go build ID (single value). Supported for `elf`.
   * @type string
   */
  filterGoBuildId?: string;
  /**
   * Filter by file hash (single value). Supported for `elf`.
   * @type string
   */
  filterFileHash?: string;
}

export interface RUMApiGetRUMApplicationRequest {
  /**
   * RUM application ID.
   * @type string
   */
  id: string;
}

export interface RUMApiGetServiceRepositoryInfoRequest {
  /**
   * @type ServiceRepositoryInfoRequest
   */
  body: ServiceRepositoryInfoRequest;
}

export interface RUMApiGetSourcemapsRequest {
  /**
   * The path to the source map file.
   * @type string
   */
  filename: string;
  /**
   * The service name associated with the source map.
   * @type string
   */
  service: string;
  /**
   * The version of the service associated with the source map.
   * @type string
   */
  version: string;
}

export interface RUMApiListRUMEventsRequest {
  /**
   * Search query following RUM syntax.
   * @type string
   */
  filterQuery?: string;
  /**
   * Minimum timestamp for requested events.
   * @type Date
   */
  filterFrom?: Date;
  /**
   * Maximum timestamp for requested events.
   * @type Date
   */
  filterTo?: Date;
  /**
   * Order of events in results.
   * @type RUMSort
   */
  sort?: RUMSort;
  /**
   * List following results with a cursor provided in the previous query.
   * @type string
   */
  pageCursor?: string;
  /**
   * Maximum number of events in the response.
   * @type number
   */
  pageLimit?: number;
}

export interface RUMApiListSourcemapsRequest {
  /**
   * The type of source map. Defaults to `js`.
   * @type SourcemapMapKind
   */
  mapkind?: SourcemapMapKind;
  /**
   * The number of results to return per page. Must be at least 1.
   * @type number
   */
  pageSize?: number;
  /**
   * The page number to retrieve, starting from 1.
   * @type number
   */
  pageNumber?: number;
  /**
   * Filter by service names (multiple values allowed). Required for
   * `js`, `jvm`, `react`, and `flutter` map kinds.
   * @type Array<string>
   */
  filterService?: Array<string>;
  /**
   * Filter by version values (multiple values allowed). Required for
   * `js`, `jvm`, `react`, and `flutter` map kinds.
   * @type Array<string>
   */
  filterVersion?: Array<string>;
  /**
   * Filter by variant values (multiple values allowed). Supported for `jvm`.
   * @type Array<string>
   */
  filterVariant?: Array<string>;
  /**
   * Filter by source map ID values (multiple values allowed). Supported for all map kinds.
   * @type Array<string>
   */
  filterId?: Array<string>;
  /**
   * Filter by build ID values (multiple values allowed). Supported for `jvm`, `ndk`, and `il2cpp`.
   * @type Array<string>
   */
  filterBuildId?: Array<string>;
  /**
   * Filter by UUID values (multiple values allowed). Supported for `ios`.
   * @type Array<string>
   */
  filterUuid?: Array<string>;
  /**
   * Filter by platform values (multiple values allowed). Supported for `react`.
   * @type Array<string>
   */
  filterPlatform?: Array<string>;
  /**
   * Filter by build number values (multiple values allowed). Supported for `react`.
   * @type Array<string>
   */
  filterBuildNumber?: Array<string>;
  /**
   * Filter by bundle name values (multiple values allowed). Supported for `react`.
   * @type Array<string>
   */
  filterBundleName?: Array<string>;
  /**
   * Filter by architecture values (multiple values allowed). Supported
   * for `flutter`, `elf`, and `ndk`.
   * @type Array<string>
   */
  filterArch?: Array<string>;
  /**
   * Filter by symbol source values (multiple values allowed). Supported for `elf`.
   * @type Array<string>
   */
  filterSymbolSource?: Array<string>;
  /**
   * Filter by origin values (multiple values allowed). Supported for `elf`.
   * @type Array<string>
   */
  filterOrigin?: Array<string>;
  /**
   * Filter by origin version values (multiple values allowed). Supported for `elf`.
   * @type Array<string>
   */
  filterOriginVersion?: Array<string>;
  /**
   * Filter by filename (single value). Supported for `js`, `elf`, and `ndk`.
   * @type string
   */
  filterFilename?: string;
  /**
   * Filter by debug ID (single value). Supported for `react`.
   * @type string
   */
  filterDebugId?: string;
  /**
   * Filter by GNU build ID (single value). Supported for `elf`.
   * @type string
   */
  filterGnuBuildId?: string;
  /**
   * Filter by Go build ID (single value). Supported for `elf`.
   * @type string
   */
  filterGoBuildId?: string;
  /**
   * Filter by file hash (single value). Supported for `elf`.
   * @type string
   */
  filterFileHash?: string;
}

export interface RUMApiRestoreSourcemapsRequest {
  /**
   * The type of source map. Valid values are `js`, `jvm`, `ios`,
   * `react`, `flutter`, `elf`, `ndk`, `il2cpp`.
   * @type SourcemapMapKind
   */
  mapkind: SourcemapMapKind;
  /**
   * When set to `true`, returns the source maps that would be restored
   * without performing the actual restoration. When set to `false`,
   * performs the restoration.
   * @type boolean
   */
  dryRun: boolean;
  /**
   * Filter by service names (multiple values allowed). Required for
   * `js`, `jvm`, `react`, and `flutter` map kinds.
   * @type Array<string>
   */
  filterService?: Array<string>;
  /**
   * Filter by version values (multiple values allowed, maximum 10).
   * Required for `js`, `jvm`, `react`, and `flutter` map kinds.
   * @type Array<string>
   */
  filterVersion?: Array<string>;
  /**
   * Filter by variant values (multiple values allowed). Supported for `jvm`.
   * @type Array<string>
   */
  filterVariant?: Array<string>;
  /**
   * Filter by source map ID values (multiple values allowed). Supported for all map kinds.
   * @type Array<string>
   */
  filterId?: Array<string>;
  /**
   * Filter by build ID values (multiple values allowed). Supported for `jvm`, `ndk`, and `il2cpp`.
   * @type Array<string>
   */
  filterBuildId?: Array<string>;
  /**
   * Filter by UUID values (multiple values allowed). Supported for `ios`.
   * @type Array<string>
   */
  filterUuid?: Array<string>;
  /**
   * Filter by platform values (multiple values allowed). Supported for `react`.
   * @type Array<string>
   */
  filterPlatform?: Array<string>;
  /**
   * Filter by build number values (multiple values allowed). Supported for `react`.
   * @type Array<string>
   */
  filterBuildNumber?: Array<string>;
  /**
   * Filter by bundle name values (multiple values allowed). Supported for `react`.
   * @type Array<string>
   */
  filterBundleName?: Array<string>;
  /**
   * Filter by architecture values (multiple values allowed). Supported
   * for `flutter`, `elf`, and `ndk`.
   * @type Array<string>
   */
  filterArch?: Array<string>;
  /**
   * Filter by symbol source values (multiple values allowed). Supported for `elf`.
   * @type Array<string>
   */
  filterSymbolSource?: Array<string>;
  /**
   * Filter by origin values (multiple values allowed). Supported for `elf`.
   * @type Array<string>
   */
  filterOrigin?: Array<string>;
  /**
   * Filter by origin version values (multiple values allowed). Supported for `elf`.
   * @type Array<string>
   */
  filterOriginVersion?: Array<string>;
  /**
   * Filter by filename (single value). Supported for `js`, `elf`, and `ndk`.
   * @type string
   */
  filterFilename?: string;
  /**
   * Filter by debug ID (single value). Supported for `react`.
   * @type string
   */
  filterDebugId?: string;
  /**
   * Filter by GNU build ID (single value). Supported for `elf`.
   * @type string
   */
  filterGnuBuildId?: string;
  /**
   * Filter by Go build ID (single value). Supported for `elf`.
   * @type string
   */
  filterGoBuildId?: string;
  /**
   * Filter by file hash (single value). Supported for `elf`.
   * @type string
   */
  filterFileHash?: string;
}

export interface RUMApiSearchRUMEventsRequest {
  /**
   * @type RUMSearchEventsRequest
   */
  body: RUMSearchEventsRequest;
}

export interface RUMApiUpdateRUMApplicationRequest {
  /**
   * RUM application ID.
   * @type string
   */
  id: string;
  /**
   * @type RUMApplicationUpdateRequest
   */
  body: RUMApplicationUpdateRequest;
}

export class RUMApi {
  private requestFactory: RUMApiRequestFactory;
  private responseProcessor: RUMApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: RUMApiRequestFactory,
    responseProcessor?: RUMApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new RUMApiRequestFactory(this.configuration);
    this.responseProcessor = responseProcessor || new RUMApiResponseProcessor();
  }

  /**
   * The API endpoint to aggregate RUM events into buckets of computed metrics and timeseries.
   * @param param The request object
   */
  public aggregateRUMEvents(
    param: RUMApiAggregateRUMEventsRequest,
    options?: Configuration,
  ): Promise<RUMAnalyticsAggregateResponse> {
    const requestContextPromise = this.requestFactory.aggregateRUMEvents(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.aggregateRUMEvents(responseContext);
        });
    });
  }

  /**
   * Create a new RUM application in your organization.
   * @param param The request object
   */
  public createRUMApplication(
    param: RUMApiCreateRUMApplicationRequest,
    options?: Configuration,
  ): Promise<RUMApplicationResponse> {
    const requestContextPromise = this.requestFactory.createRUMApplication(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRUMApplication(responseContext);
        });
    });
  }

  /**
   * Delete an existing RUM application in your organization.
   * @param param The request object
   */
  public deleteRUMApplication(
    param: RUMApiDeleteRUMApplicationRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRUMApplication(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRUMApplication(responseContext);
        });
    });
  }

  /**
   * Deletes source maps matching the specified filter criteria. Supports
   * dry-run mode to preview which source maps would be deleted without
   * performing the actual deletion.
   * @param param The request object
   */
  public deleteSourcemaps(
    param: RUMApiDeleteSourcemapsRequest,
    options?: Configuration,
  ): Promise<SourcemapsResponse> {
    const requestContextPromise = this.requestFactory.deleteSourcemaps(
      param.mapkind,
      param.dryRun,
      param.filterService,
      param.filterVersion,
      param.filterVariant,
      param.filterId,
      param.filterBuildId,
      param.filterUuid,
      param.filterPlatform,
      param.filterBuildNumber,
      param.filterBundleName,
      param.filterArch,
      param.filterSymbolSource,
      param.filterOrigin,
      param.filterOriginVersion,
      param.filterFilename,
      param.filterDebugId,
      param.filterGnuBuildId,
      param.filterGoBuildId,
      param.filterFileHash,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSourcemaps(responseContext);
        });
    });
  }

  /**
   * Get the RUM application with given ID in your organization.
   * @param param The request object
   */
  public getRUMApplication(
    param: RUMApiGetRUMApplicationRequest,
    options?: Configuration,
  ): Promise<RUMApplicationResponse> {
    const requestContextPromise = this.requestFactory.getRUMApplication(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRUMApplication(responseContext);
        });
    });
  }

  /**
   * List all the RUM applications in your organization.
   * @param param The request object
   */
  public getRUMApplications(
    options?: Configuration,
  ): Promise<RUMApplicationsResponse> {
    const requestContextPromise =
      this.requestFactory.getRUMApplications(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRUMApplications(responseContext);
        });
    });
  }

  /**
   * Returns the repository URL and commit SHA associated with a given service and version.
   * @param param The request object
   */
  public getServiceRepositoryInfo(
    param: RUMApiGetServiceRepositoryInfoRequest,
    options?: Configuration,
  ): Promise<ServiceRepositoryInfoResponse> {
    const requestContextPromise = this.requestFactory.getServiceRepositoryInfo(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getServiceRepositoryInfo(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieves the content of a specific JavaScript source map file by its
   * filename, service name, and version.
   * @param param The request object
   */
  public getSourcemaps(
    param: RUMApiGetSourcemapsRequest,
    options?: Configuration,
  ): Promise<SourcemapFileResponse> {
    const requestContextPromise = this.requestFactory.getSourcemaps(
      param.filename,
      param.service,
      param.version,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSourcemaps(responseContext);
        });
    });
  }

  /**
   * List endpoint returns events that match a RUM search query.
   * [Results are paginated][1].
   *
   * Use this endpoint to see your latest RUM events.
   *
   * [1]: https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination
   * @param param The request object
   */
  public listRUMEvents(
    param: RUMApiListRUMEventsRequest = {},
    options?: Configuration,
  ): Promise<RUMEventsResponse> {
    const requestContextPromise = this.requestFactory.listRUMEvents(
      param.filterQuery,
      param.filterFrom,
      param.filterTo,
      param.sort,
      param.pageCursor,
      param.pageLimit,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRUMEvents(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listRUMEvents returning a generator with all the items.
   */
  public async *listRUMEventsWithPagination(
    param: RUMApiListRUMEventsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<RUMEvent> {
    let pageSize = 10;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listRUMEvents(
        param.filterQuery,
        param.filterFrom,
        param.filterTo,
        param.sort,
        param.pageCursor,
        param.pageLimit,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listRUMEvents(responseContext);
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length === 0) {
        break;
      }
      const cursorMeta = response.meta;
      if (cursorMeta === undefined) {
        break;
      }
      const cursorMetaPage = cursorMeta.page;
      if (cursorMetaPage === undefined) {
        break;
      }
      const cursorMetaPageAfter = cursorMetaPage.after;
      if (cursorMetaPageAfter === undefined) {
        break;
      }

      param.pageCursor = cursorMetaPageAfter;
    }
  }

  /**
   * Retrieves a paginated list of source maps matching the specified filter criteria.
   * @param param The request object
   */
  public listSourcemaps(
    param: RUMApiListSourcemapsRequest = {},
    options?: Configuration,
  ): Promise<ListSourcemapsResponse> {
    const requestContextPromise = this.requestFactory.listSourcemaps(
      param.mapkind,
      param.pageSize,
      param.pageNumber,
      param.filterService,
      param.filterVersion,
      param.filterVariant,
      param.filterId,
      param.filterBuildId,
      param.filterUuid,
      param.filterPlatform,
      param.filterBuildNumber,
      param.filterBundleName,
      param.filterArch,
      param.filterSymbolSource,
      param.filterOrigin,
      param.filterOriginVersion,
      param.filterFilename,
      param.filterDebugId,
      param.filterGnuBuildId,
      param.filterGoBuildId,
      param.filterFileHash,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSourcemaps(responseContext);
        });
    });
  }

  /**
   * Restores previously deleted source maps matching the specified filter
   * criteria. Supports dry-run mode to preview which source maps would be
   * restored without performing the actual restoration.
   * @param param The request object
   */
  public restoreSourcemaps(
    param: RUMApiRestoreSourcemapsRequest,
    options?: Configuration,
  ): Promise<SourcemapsResponse> {
    const requestContextPromise = this.requestFactory.restoreSourcemaps(
      param.mapkind,
      param.dryRun,
      param.filterService,
      param.filterVersion,
      param.filterVariant,
      param.filterId,
      param.filterBuildId,
      param.filterUuid,
      param.filterPlatform,
      param.filterBuildNumber,
      param.filterBundleName,
      param.filterArch,
      param.filterSymbolSource,
      param.filterOrigin,
      param.filterOriginVersion,
      param.filterFilename,
      param.filterDebugId,
      param.filterGnuBuildId,
      param.filterGoBuildId,
      param.filterFileHash,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.restoreSourcemaps(responseContext);
        });
    });
  }

  /**
   * List endpoint returns RUM events that match a RUM search query.
   * [Results are paginated][1].
   *
   * Use this endpoint to build complex RUM events filtering and search.
   *
   * [1]: https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination
   * @param param The request object
   */
  public searchRUMEvents(
    param: RUMApiSearchRUMEventsRequest,
    options?: Configuration,
  ): Promise<RUMEventsResponse> {
    const requestContextPromise = this.requestFactory.searchRUMEvents(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchRUMEvents(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of searchRUMEvents returning a generator with all the items.
   */
  public async *searchRUMEventsWithPagination(
    param: RUMApiSearchRUMEventsRequest,
    options?: Configuration,
  ): AsyncGenerator<RUMEvent> {
    let pageSize = 10;
    if (param.body.page === undefined) {
      param.body.page = new RUMQueryPageOptions();
    }
    if (param.body.page.limit === undefined) {
      param.body.page.limit = pageSize;
    } else {
      pageSize = param.body.page.limit;
    }
    while (true) {
      const requestContext = await this.requestFactory.searchRUMEvents(
        param.body,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.searchRUMEvents(responseContext);
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length === 0) {
        break;
      }
      const cursorMeta = response.meta;
      if (cursorMeta === undefined) {
        break;
      }
      const cursorMetaPage = cursorMeta.page;
      if (cursorMetaPage === undefined) {
        break;
      }
      const cursorMetaPageAfter = cursorMetaPage.after;
      if (cursorMetaPageAfter === undefined) {
        break;
      }

      param.body.page.cursor = cursorMetaPageAfter;
    }
  }

  /**
   * Update the RUM application with given ID in your organization.
   * @param param The request object
   */
  public updateRUMApplication(
    param: RUMApiUpdateRUMApplicationRequest,
    options?: Configuration,
  ): Promise<RUMApplicationResponse> {
    const requestContextPromise = this.requestFactory.updateRUMApplication(
      param.id,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRUMApplication(responseContext);
        });
    });
  }
}
