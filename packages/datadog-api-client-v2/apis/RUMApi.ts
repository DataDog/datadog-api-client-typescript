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
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { ListSourcemapsResponse } from "../models/ListSourcemapsResponse";
import { RUMAggregateRequest } from "../models/RUMAggregateRequest";
import { RUMAnalyticsAggregateResponse } from "../models/RUMAnalyticsAggregateResponse";
import { RUMApplicationCreateRequest } from "../models/RUMApplicationCreateRequest";
import { RUMApplicationResponse } from "../models/RUMApplicationResponse";
import { RUMApplicationsResponse } from "../models/RUMApplicationsResponse";
import { RUMApplicationUpdateRequest } from "../models/RUMApplicationUpdateRequest";
import { RUMEvent } from "../models/RUMEvent";
import { RUMEventProcessingState } from "../models/RUMEventProcessingState";
import { RUMEventsResponse } from "../models/RUMEventsResponse";
import { RUMProductAnalyticsRetentionState } from "../models/RUMProductAnalyticsRetentionState";
import { RUMQueryPageOptions } from "../models/RUMQueryPageOptions";
import { RUMSearchEventsRequest } from "../models/RUMSearchEventsRequest";
import { RUMSort } from "../models/RUMSort";
import { ServiceRepositoryInfoRequest } from "../models/ServiceRepositoryInfoRequest";
import { ServiceRepositoryInfoResponse } from "../models/ServiceRepositoryInfoResponse";
import { SourcemapFileResponse } from "../models/SourcemapFileResponse";
import { SourcemapMapKind } from "../models/SourcemapMapKind";
import { SourcemapSearchBy } from "../models/SourcemapSearchBy";
import { SourcemapsResponse } from "../models/SourcemapsResponse";

export class RUMApiRequestFactory extends BaseAPIRequestFactory {
  public async aggregateRUMEvents(
    body: RUMAggregateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "aggregateRUMEvents");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/analytics/aggregate";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMApi.aggregateRUMEvents")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RUMAggregateRequest", ""),
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

  public async createRUMApplication(
    body: RUMApplicationCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRUMApplication");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/applications";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMApi.createRUMApplication")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RUMApplicationCreateRequest", ""),
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

  public async deleteRUMApplication(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteRUMApplication");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/applications/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMApi.deleteRUMApplication")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteSourcemaps'");
    if (!_config.unstableOperations["v2.deleteSourcemaps"]) {
      throw new Error("Unstable operation 'deleteSourcemaps' is disabled");
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
    const requestContext = _config
      .getServer("v2.RUMApi.deleteSourcemaps")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (mapkind !== undefined) {
      requestContext.setQueryParam(
        "mapkind",
        ObjectSerializer.serialize(mapkind, "SourcemapMapKind", ""),
        ""
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dry_run",
        ObjectSerializer.serialize(dryRun, "boolean", ""),
        ""
      );
    }
    if (filterService !== undefined) {
      requestContext.setQueryParam(
        "filter[service]",
        ObjectSerializer.serialize(filterService, "Array<string>", ""),
        "multi"
      );
    }
    if (filterVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[version]",
        ObjectSerializer.serialize(filterVersion, "Array<string>", ""),
        "multi"
      );
    }
    if (filterVariant !== undefined) {
      requestContext.setQueryParam(
        "filter[variant]",
        ObjectSerializer.serialize(filterVariant, "Array<string>", ""),
        "multi"
      );
    }
    if (filterId !== undefined) {
      requestContext.setQueryParam(
        "filter[id]",
        ObjectSerializer.serialize(filterId, "Array<string>", ""),
        "multi"
      );
    }
    if (filterBuildId !== undefined) {
      requestContext.setQueryParam(
        "filter[build_id]",
        ObjectSerializer.serialize(filterBuildId, "Array<string>", ""),
        "multi"
      );
    }
    if (filterUuid !== undefined) {
      requestContext.setQueryParam(
        "filter[uuid]",
        ObjectSerializer.serialize(filterUuid, "Array<string>", ""),
        "multi"
      );
    }
    if (filterPlatform !== undefined) {
      requestContext.setQueryParam(
        "filter[platform]",
        ObjectSerializer.serialize(filterPlatform, "Array<string>", ""),
        "multi"
      );
    }
    if (filterBuildNumber !== undefined) {
      requestContext.setQueryParam(
        "filter[build_number]",
        ObjectSerializer.serialize(filterBuildNumber, "Array<string>", ""),
        "multi"
      );
    }
    if (filterBundleName !== undefined) {
      requestContext.setQueryParam(
        "filter[bundle_name]",
        ObjectSerializer.serialize(filterBundleName, "Array<string>", ""),
        "multi"
      );
    }
    if (filterArch !== undefined) {
      requestContext.setQueryParam(
        "filter[arch]",
        ObjectSerializer.serialize(filterArch, "Array<string>", ""),
        "multi"
      );
    }
    if (filterSymbolSource !== undefined) {
      requestContext.setQueryParam(
        "filter[symbol_source]",
        ObjectSerializer.serialize(filterSymbolSource, "Array<string>", ""),
        "multi"
      );
    }
    if (filterOrigin !== undefined) {
      requestContext.setQueryParam(
        "filter[origin]",
        ObjectSerializer.serialize(filterOrigin, "Array<string>", ""),
        "multi"
      );
    }
    if (filterOriginVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[origin_version]",
        ObjectSerializer.serialize(filterOriginVersion, "Array<string>", ""),
        "multi"
      );
    }
    if (filterFilename !== undefined) {
      requestContext.setQueryParam(
        "filter[filename]",
        ObjectSerializer.serialize(filterFilename, "string", ""),
        ""
      );
    }
    if (filterDebugId !== undefined) {
      requestContext.setQueryParam(
        "filter[debug_id]",
        ObjectSerializer.serialize(filterDebugId, "string", ""),
        ""
      );
    }
    if (filterGnuBuildId !== undefined) {
      requestContext.setQueryParam(
        "filter[gnu_build_id]",
        ObjectSerializer.serialize(filterGnuBuildId, "string", ""),
        ""
      );
    }
    if (filterGoBuildId !== undefined) {
      requestContext.setQueryParam(
        "filter[go_build_id]",
        ObjectSerializer.serialize(filterGoBuildId, "string", ""),
        ""
      );
    }
    if (filterFileHash !== undefined) {
      requestContext.setQueryParam(
        "filter[file_hash]",
        ObjectSerializer.serialize(filterFileHash, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getRUMApplication(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getRUMApplication");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/applications/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMApi.getRUMApplication")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getRUMApplications(
    filterRumEnabled?: boolean,
    filterProductAnalyticsEnabled?: boolean,
    filterErrorFocusedModeEnabled?: boolean,
    filterRemoteConfigEnabled?: boolean,
    filterRumEventProcessingState?: RUMEventProcessingState,
    filterProductAnalyticsRetentionState?: RUMProductAnalyticsRetentionState,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/rum/applications";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMApi.getRUMApplications")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterRumEnabled !== undefined) {
      requestContext.setQueryParam(
        "filter[rum_enabled]",
        ObjectSerializer.serialize(filterRumEnabled, "boolean", ""),
        ""
      );
    }
    if (filterProductAnalyticsEnabled !== undefined) {
      requestContext.setQueryParam(
        "filter[product_analytics_enabled]",
        ObjectSerializer.serialize(
          filterProductAnalyticsEnabled,
          "boolean",
          ""
        ),
        ""
      );
    }
    if (filterErrorFocusedModeEnabled !== undefined) {
      requestContext.setQueryParam(
        "filter[error_focused_mode_enabled]",
        ObjectSerializer.serialize(
          filterErrorFocusedModeEnabled,
          "boolean",
          ""
        ),
        ""
      );
    }
    if (filterRemoteConfigEnabled !== undefined) {
      requestContext.setQueryParam(
        "filter[remote_config_enabled]",
        ObjectSerializer.serialize(filterRemoteConfigEnabled, "boolean", ""),
        ""
      );
    }
    if (filterRumEventProcessingState !== undefined) {
      requestContext.setQueryParam(
        "filter[rum_event_processing_state]",
        ObjectSerializer.serialize(
          filterRumEventProcessingState,
          "RUMEventProcessingState",
          ""
        ),
        ""
      );
    }
    if (filterProductAnalyticsRetentionState !== undefined) {
      requestContext.setQueryParam(
        "filter[product_analytics_retention_state]",
        ObjectSerializer.serialize(
          filterProductAnalyticsRetentionState,
          "RUMProductAnalyticsRetentionState",
          ""
        ),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getServiceRepositoryInfo(
    body: ServiceRepositoryInfoRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getServiceRepositoryInfo'");
    if (!_config.unstableOperations["v2.getServiceRepositoryInfo"]) {
      throw new Error(
        "Unstable operation 'getServiceRepositoryInfo' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "getServiceRepositoryInfo");
    }

    // Path Params
    const localVarPath = "/api/v2/sourcemaps/service_repository_info";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMApi.getServiceRepositoryInfo")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ServiceRepositoryInfoRequest", ""),
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

  public async getSourcemaps(
    debugId?: string,
    filename?: string,
    service?: string,
    version?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getSourcemaps'");
    if (!_config.unstableOperations["v2.getSourcemaps"]) {
      throw new Error("Unstable operation 'getSourcemaps' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/sourcemaps";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMApi.getSourcemaps")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (debugId !== undefined) {
      requestContext.setQueryParam(
        "debug_id",
        ObjectSerializer.serialize(debugId, "string", "uuid"),
        ""
      );
    }
    if (filename !== undefined) {
      requestContext.setQueryParam(
        "filename",
        ObjectSerializer.serialize(filename, "string", ""),
        ""
      );
    }
    if (service !== undefined) {
      requestContext.setQueryParam(
        "service",
        ObjectSerializer.serialize(service, "string", ""),
        ""
      );
    }
    if (version !== undefined) {
      requestContext.setQueryParam(
        "version",
        ObjectSerializer.serialize(version, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listRUMEvents(
    filterQuery?: string,
    filterFrom?: string,
    filterTo?: string,
    sort?: RUMSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/rum/events";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMApi.listRUMEvents")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        ObjectSerializer.serialize(filterQuery, "string", ""),
        ""
      );
    }
    if (filterFrom !== undefined) {
      requestContext.setQueryParam(
        "filter[from]",
        ObjectSerializer.serialize(filterFrom, "string", ""),
        ""
      );
    }
    if (filterTo !== undefined) {
      requestContext.setQueryParam(
        "filter[to]",
        ObjectSerializer.serialize(filterTo, "string", ""),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "RUMSort", ""),
        ""
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", ""),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int32"),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listSourcemaps(
    searchBy?: SourcemapSearchBy,
    mapkind?: SourcemapMapKind,
    pageAfter?: string,
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listSourcemaps'");
    if (!_config.unstableOperations["v2.listSourcemaps"]) {
      throw new Error("Unstable operation 'listSourcemaps' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/sourcemaps/list";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMApi.listSourcemaps")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (searchBy !== undefined) {
      requestContext.setQueryParam(
        "search_by",
        ObjectSerializer.serialize(searchBy, "SourcemapSearchBy", ""),
        ""
      );
    }
    if (mapkind !== undefined) {
      requestContext.setQueryParam(
        "mapkind",
        ObjectSerializer.serialize(mapkind, "SourcemapMapKind", ""),
        ""
      );
    }
    if (pageAfter !== undefined) {
      requestContext.setQueryParam(
        "page[after]",
        ObjectSerializer.serialize(pageAfter, "string", ""),
        ""
      );
    }
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
    if (filterService !== undefined) {
      requestContext.setQueryParam(
        "filter[service]",
        ObjectSerializer.serialize(filterService, "Array<string>", ""),
        "multi"
      );
    }
    if (filterVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[version]",
        ObjectSerializer.serialize(filterVersion, "Array<string>", ""),
        "multi"
      );
    }
    if (filterVariant !== undefined) {
      requestContext.setQueryParam(
        "filter[variant]",
        ObjectSerializer.serialize(filterVariant, "Array<string>", ""),
        "multi"
      );
    }
    if (filterId !== undefined) {
      requestContext.setQueryParam(
        "filter[id]",
        ObjectSerializer.serialize(filterId, "Array<string>", ""),
        "multi"
      );
    }
    if (filterBuildId !== undefined) {
      requestContext.setQueryParam(
        "filter[build_id]",
        ObjectSerializer.serialize(filterBuildId, "Array<string>", ""),
        "multi"
      );
    }
    if (filterUuid !== undefined) {
      requestContext.setQueryParam(
        "filter[uuid]",
        ObjectSerializer.serialize(filterUuid, "Array<string>", ""),
        "multi"
      );
    }
    if (filterPlatform !== undefined) {
      requestContext.setQueryParam(
        "filter[platform]",
        ObjectSerializer.serialize(filterPlatform, "Array<string>", ""),
        "multi"
      );
    }
    if (filterBuildNumber !== undefined) {
      requestContext.setQueryParam(
        "filter[build_number]",
        ObjectSerializer.serialize(filterBuildNumber, "Array<string>", ""),
        "multi"
      );
    }
    if (filterBundleName !== undefined) {
      requestContext.setQueryParam(
        "filter[bundle_name]",
        ObjectSerializer.serialize(filterBundleName, "Array<string>", ""),
        "multi"
      );
    }
    if (filterArch !== undefined) {
      requestContext.setQueryParam(
        "filter[arch]",
        ObjectSerializer.serialize(filterArch, "Array<string>", ""),
        "multi"
      );
    }
    if (filterSymbolSource !== undefined) {
      requestContext.setQueryParam(
        "filter[symbol_source]",
        ObjectSerializer.serialize(filterSymbolSource, "Array<string>", ""),
        "multi"
      );
    }
    if (filterOrigin !== undefined) {
      requestContext.setQueryParam(
        "filter[origin]",
        ObjectSerializer.serialize(filterOrigin, "Array<string>", ""),
        "multi"
      );
    }
    if (filterOriginVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[origin_version]",
        ObjectSerializer.serialize(filterOriginVersion, "Array<string>", ""),
        "multi"
      );
    }
    if (filterFilename !== undefined) {
      requestContext.setQueryParam(
        "filter[filename]",
        ObjectSerializer.serialize(filterFilename, "string", ""),
        ""
      );
    }
    if (filterDebugId !== undefined) {
      requestContext.setQueryParam(
        "filter[debug_id]",
        ObjectSerializer.serialize(filterDebugId, "string", "uuid"),
        ""
      );
    }
    if (filterGnuBuildId !== undefined) {
      requestContext.setQueryParam(
        "filter[gnu_build_id]",
        ObjectSerializer.serialize(filterGnuBuildId, "string", ""),
        ""
      );
    }
    if (filterGoBuildId !== undefined) {
      requestContext.setQueryParam(
        "filter[go_build_id]",
        ObjectSerializer.serialize(filterGoBuildId, "string", ""),
        ""
      );
    }
    if (filterFileHash !== undefined) {
      requestContext.setQueryParam(
        "filter[file_hash]",
        ObjectSerializer.serialize(filterFileHash, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'restoreSourcemaps'");
    if (!_config.unstableOperations["v2.restoreSourcemaps"]) {
      throw new Error("Unstable operation 'restoreSourcemaps' is disabled");
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
    const requestContext = _config
      .getServer("v2.RUMApi.restoreSourcemaps")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (mapkind !== undefined) {
      requestContext.setQueryParam(
        "mapkind",
        ObjectSerializer.serialize(mapkind, "SourcemapMapKind", ""),
        ""
      );
    }
    if (dryRun !== undefined) {
      requestContext.setQueryParam(
        "dry_run",
        ObjectSerializer.serialize(dryRun, "boolean", ""),
        ""
      );
    }
    if (filterService !== undefined) {
      requestContext.setQueryParam(
        "filter[service]",
        ObjectSerializer.serialize(filterService, "Array<string>", ""),
        "multi"
      );
    }
    if (filterVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[version]",
        ObjectSerializer.serialize(filterVersion, "Array<string>", ""),
        "multi"
      );
    }
    if (filterVariant !== undefined) {
      requestContext.setQueryParam(
        "filter[variant]",
        ObjectSerializer.serialize(filterVariant, "Array<string>", ""),
        "multi"
      );
    }
    if (filterId !== undefined) {
      requestContext.setQueryParam(
        "filter[id]",
        ObjectSerializer.serialize(filterId, "Array<string>", ""),
        "multi"
      );
    }
    if (filterBuildId !== undefined) {
      requestContext.setQueryParam(
        "filter[build_id]",
        ObjectSerializer.serialize(filterBuildId, "Array<string>", ""),
        "multi"
      );
    }
    if (filterUuid !== undefined) {
      requestContext.setQueryParam(
        "filter[uuid]",
        ObjectSerializer.serialize(filterUuid, "Array<string>", ""),
        "multi"
      );
    }
    if (filterPlatform !== undefined) {
      requestContext.setQueryParam(
        "filter[platform]",
        ObjectSerializer.serialize(filterPlatform, "Array<string>", ""),
        "multi"
      );
    }
    if (filterBuildNumber !== undefined) {
      requestContext.setQueryParam(
        "filter[build_number]",
        ObjectSerializer.serialize(filterBuildNumber, "Array<string>", ""),
        "multi"
      );
    }
    if (filterBundleName !== undefined) {
      requestContext.setQueryParam(
        "filter[bundle_name]",
        ObjectSerializer.serialize(filterBundleName, "Array<string>", ""),
        "multi"
      );
    }
    if (filterArch !== undefined) {
      requestContext.setQueryParam(
        "filter[arch]",
        ObjectSerializer.serialize(filterArch, "Array<string>", ""),
        "multi"
      );
    }
    if (filterSymbolSource !== undefined) {
      requestContext.setQueryParam(
        "filter[symbol_source]",
        ObjectSerializer.serialize(filterSymbolSource, "Array<string>", ""),
        "multi"
      );
    }
    if (filterOrigin !== undefined) {
      requestContext.setQueryParam(
        "filter[origin]",
        ObjectSerializer.serialize(filterOrigin, "Array<string>", ""),
        "multi"
      );
    }
    if (filterOriginVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[origin_version]",
        ObjectSerializer.serialize(filterOriginVersion, "Array<string>", ""),
        "multi"
      );
    }
    if (filterFilename !== undefined) {
      requestContext.setQueryParam(
        "filter[filename]",
        ObjectSerializer.serialize(filterFilename, "string", ""),
        ""
      );
    }
    if (filterDebugId !== undefined) {
      requestContext.setQueryParam(
        "filter[debug_id]",
        ObjectSerializer.serialize(filterDebugId, "string", ""),
        ""
      );
    }
    if (filterGnuBuildId !== undefined) {
      requestContext.setQueryParam(
        "filter[gnu_build_id]",
        ObjectSerializer.serialize(filterGnuBuildId, "string", ""),
        ""
      );
    }
    if (filterGoBuildId !== undefined) {
      requestContext.setQueryParam(
        "filter[go_build_id]",
        ObjectSerializer.serialize(filterGoBuildId, "string", ""),
        ""
      );
    }
    if (filterFileHash !== undefined) {
      requestContext.setQueryParam(
        "filter[file_hash]",
        ObjectSerializer.serialize(filterFileHash, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async searchRUMEvents(
    body: RUMSearchEventsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "searchRUMEvents");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/events/search";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMApi.searchRUMEvents")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RUMSearchEventsRequest", ""),
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

  public async updateRUMApplication(
    id: string,
    body: RUMApplicationUpdateRequest,
    _options?: Configuration
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
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMApi.updateRUMApplication")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RUMApplicationUpdateRequest", ""),
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

export class RUMApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to aggregateRUMEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async aggregateRUMEvents(
    response: ResponseContext
  ): Promise<RUMAnalyticsAggregateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RUMAnalyticsAggregateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RUMAnalyticsAggregateResponse"
      ) as RUMAnalyticsAggregateResponse;
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
      const body: RUMAnalyticsAggregateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RUMAnalyticsAggregateResponse",
        ""
      ) as RUMAnalyticsAggregateResponse;
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
   * @params response Response returned by the server for a request to createRUMApplication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRUMApplication(
    response: ResponseContext
  ): Promise<RUMApplicationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: RUMApplicationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RUMApplicationResponse"
      ) as RUMApplicationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: RUMApplicationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RUMApplicationResponse",
        ""
      ) as RUMApplicationResponse;
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
   * @params response Response returned by the server for a request to deleteRUMApplication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRUMApplication(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
   * @params response Response returned by the server for a request to deleteSourcemaps
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSourcemaps(
    response: ResponseContext
  ): Promise<SourcemapsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SourcemapsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SourcemapsResponse"
      ) as SourcemapsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: SourcemapsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SourcemapsResponse",
        ""
      ) as SourcemapsResponse;
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
   * @params response Response returned by the server for a request to getRUMApplication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRUMApplication(
    response: ResponseContext
  ): Promise<RUMApplicationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RUMApplicationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RUMApplicationResponse"
      ) as RUMApplicationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: RUMApplicationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RUMApplicationResponse",
        ""
      ) as RUMApplicationResponse;
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
   * @params response Response returned by the server for a request to getRUMApplications
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRUMApplications(
    response: ResponseContext
  ): Promise<RUMApplicationsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RUMApplicationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RUMApplicationsResponse"
      ) as RUMApplicationsResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
      const body: RUMApplicationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RUMApplicationsResponse",
        ""
      ) as RUMApplicationsResponse;
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
   * @params response Response returned by the server for a request to getServiceRepositoryInfo
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getServiceRepositoryInfo(
    response: ResponseContext
  ): Promise<ServiceRepositoryInfoResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ServiceRepositoryInfoResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ServiceRepositoryInfoResponse"
      ) as ServiceRepositoryInfoResponse;
      return body;
    }
    if (response.httpStatusCode === 401 || response.httpStatusCode === 500) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: ServiceRepositoryInfoResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ServiceRepositoryInfoResponse",
        ""
      ) as ServiceRepositoryInfoResponse;
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
   * @params response Response returned by the server for a request to getSourcemaps
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSourcemaps(
    response: ResponseContext
  ): Promise<SourcemapFileResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SourcemapFileResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SourcemapFileResponse"
      ) as SourcemapFileResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: SourcemapFileResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SourcemapFileResponse",
        ""
      ) as SourcemapFileResponse;
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
   * @params response Response returned by the server for a request to listRUMEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRUMEvents(
    response: ResponseContext
  ): Promise<RUMEventsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RUMEventsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RUMEventsResponse"
      ) as RUMEventsResponse;
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
      const body: RUMEventsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RUMEventsResponse",
        ""
      ) as RUMEventsResponse;
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
   * @params response Response returned by the server for a request to listSourcemaps
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSourcemaps(
    response: ResponseContext
  ): Promise<ListSourcemapsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListSourcemapsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListSourcemapsResponse"
      ) as ListSourcemapsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 413 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: ListSourcemapsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListSourcemapsResponse",
        ""
      ) as ListSourcemapsResponse;
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
   * @params response Response returned by the server for a request to restoreSourcemaps
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async restoreSourcemaps(
    response: ResponseContext
  ): Promise<SourcemapsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SourcemapsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SourcemapsResponse"
      ) as SourcemapsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: SourcemapsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SourcemapsResponse",
        ""
      ) as SourcemapsResponse;
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
   * @params response Response returned by the server for a request to searchRUMEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchRUMEvents(
    response: ResponseContext
  ): Promise<RUMEventsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RUMEventsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RUMEventsResponse"
      ) as RUMEventsResponse;
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
      const body: RUMEventsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RUMEventsResponse",
        ""
      ) as RUMEventsResponse;
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
   * @params response Response returned by the server for a request to updateRUMApplication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRUMApplication(
    response: ResponseContext
  ): Promise<RUMApplicationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RUMApplicationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RUMApplicationResponse"
      ) as RUMApplicationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: RUMApplicationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RUMApplicationResponse",
        ""
      ) as RUMApplicationResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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
   * ID of the RUM application, returned as `application_id` by `GetRUMApplications` and `CreateRUMApplication`.
   * @type string
   */
  id: string;
}

export interface RUMApiDeleteSourcemapsRequest {
  /**
   * The type of source map. Valid values are `js`, `jvm`, `ios`,
   * `react`, `flutter`, `elf`, `ndk`, `il2cpp`, `wasm`, `portable_pdb`.
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
   * Filter by build ID values (multiple values allowed). Supported for `jvm`, `ndk`, `il2cpp`, `wasm`, and `portable_pdb`.
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
   * Filter by filename (single value). Supported for `js`, `elf`, `ndk`, `wasm`, and `portable_pdb`.
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
   * ID of the RUM application, returned as `application_id` by `GetRUMApplications` and `CreateRUMApplication`.
   * @type string
   */
  id: string;
}

export interface RUMApiGetRUMApplicationsRequest {
  /**
   * Only return applications for which RUM event processing is enabled (`true`) or not (`false`).
   * @type boolean
   */
  filterRumEnabled?: boolean;
  /**
   * Only return applications for which Product Analytics is enabled (`true`) or not (`false`).
   * @type boolean
   */
  filterProductAnalyticsEnabled?: boolean;
  /**
   * Only return applications that run in error focused mode (`true`) or not (`false`).
   * @type boolean
   */
  filterErrorFocusedModeEnabled?: boolean;
  /**
   * Only return applications that have an SDK remote configuration (`true`) or not (`false`).
   * @type boolean
   */
  filterRemoteConfigEnabled?: boolean;
  /**
   * Only return applications with this RUM event processing state.
   * @type RUMEventProcessingState
   */
  filterRumEventProcessingState?: RUMEventProcessingState;
  /**
   * Only return applications with this Product Analytics retention state.
   * @type RUMProductAnalyticsRetentionState
   */
  filterProductAnalyticsRetentionState?: RUMProductAnalyticsRetentionState;
}

export interface RUMApiGetServiceRepositoryInfoRequest {
  /**
   * @type ServiceRepositoryInfoRequest
   */
  body: ServiceRepositoryInfoRequest;
}

export interface RUMApiGetSourcemapsRequest {
  /**
   * The debug ID of the JavaScript source map, in UUID format. When provided,
   * filename, service, and version are not required and are ignored.
   * @type string
   */
  debugId?: string;
  /**
   * The path to the source map file. Required when `debug_id` is omitted.
   * @type string
   */
  filename?: string;
  /**
   * The service name associated with the source map. Required when `debug_id` is omitted.
   * @type string
   */
  service?: string;
  /**
   * The version of the service associated with the source map. Required when `debug_id` is omitted.
   * @type string
   */
  version?: string;
}

export interface RUMApiListRUMEventsRequest {
  /**
   * Search query following the [RUM search syntax](https://docs.datadoghq.com/real_user_monitoring/explorer/search_syntax/). Defaults to `*`.
   * @type string
   */
  filterQuery?: string;
  /**
   * Minimum time for requested events, inclusive. Accepts date math (for example `now-15m`), an ISO 8601 date, or a timestamp in milliseconds. Defaults to `now-15m`.
   * @type string
   */
  filterFrom?: string;
  /**
   * Maximum time for requested events. Accepts the same formats as `filter[from]`. Defaults to `now`.
   * @type string
   */
  filterTo?: string;
  /**
   * Order of events in results, by event timestamp.
   * @type RUMSort
   */
  sort?: RUMSort;
  /**
   * Cursor to get the next page of results, taken from `meta.page.after` or `links.next` of the previous response. Use it with the same other parameters.
   * @type string
   */
  pageCursor?: string;
  /**
   * Maximum number of events in the response. Between 1 and 1000.
   * @type number
   */
  pageLimit?: number;
}

export interface RUMApiListSourcemapsRequest {
  /**
   * Set to `debug_id` to browse JavaScript source maps indexed by debug ID.
   * Only supported for `mapkind=js`. Omit for service/version searches or a
   * specific `filter[debug_id]` lookup. In debug-ID browse mode, service,
   * version, and filename filters are not supported.
   * @type SourcemapSearchBy
   */
  searchBy?: SourcemapSearchBy;
  /**
   * The type of source map. Defaults to `js`.
   * @type SourcemapMapKind
   */
  mapkind?: SourcemapMapKind;
  /**
   * Cursor for the next page of a JavaScript listing. Use the value from
   * `meta.page.next_cursor` and keep the same search mode and filters.
   * Omit on the first request. Not supported for other map kinds or for
   * a specific `filter[debug_id]` lookup without `search_by=debug_id`.
   * @type string
   */
  pageAfter?: string;
  /**
   * The number of results per page. Defaults to 100. Must be at least 1; values above 1000 are capped at 1000.
   * @type number
   */
  pageSize?: number;
  /**
   * Legacy page number, starting from 1. Prefer `page[after]` for JavaScript
   * listings. Not supported with `search_by=debug_id`. Other map kinds
   * default to page 1 when pagination parameters are omitted.
   * @type number
   */
  pageNumber?: number;
  /**
   * Filter by service names (multiple values allowed). Required for
   * `jvm`, `react`, and `flutter` map kinds. Also required for `js` unless
   * searching by `filter[debug_id]` or browsing with `search_by=debug_id`.
   * @type Array<string>
   */
  filterService?: Array<string>;
  /**
   * Filter by version values (multiple values allowed). Required for
   * `jvm`, `react`, and `flutter` map kinds. Also required for `js` unless
   * searching by `filter[debug_id]` or browsing with `search_by=debug_id`.
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
   * Filter by build ID values (multiple values allowed). Supported for `jvm`, `ndk`, `il2cpp`, `wasm`, and `portable_pdb`.
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
   * Filter by filename (single value). Supported for `js`, `elf`, `ndk`, `wasm`, and `portable_pdb`.
   * @type string
   */
  filterFilename?: string;
  /**
   * Filter by a single debug ID in UUID format. Supported for `js` and `react`.
   * For `js`, the lookup returns at most one result and does not require
   * service/version filters. For `react`, service/version filters remain required.
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
   * `react`, `flutter`, `elf`, `ndk`, `il2cpp`, `wasm`, `portable_pdb`.
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
   * Filter by build ID values (multiple values allowed). Supported for `jvm`, `ndk`, `il2cpp`, `wasm`, and `portable_pdb`.
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
   * Filter by filename (single value). Supported for `js`, `elf`, `ndk`, `wasm`, and `portable_pdb`.
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
   * ID of the RUM application, returned as `application_id` by `GetRUMApplications` and `CreateRUMApplication`.
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

  public constructor(
    configuration: Configuration,
    requestFactory?: RUMApiRequestFactory,
    responseProcessor?: RUMApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new RUMApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new RUMApiResponseProcessor();
  }

  /**
   * Aggregate RUM events into buckets of computed metrics and timeseries. Use this endpoint for counts, percentiles, top-N breakdowns and timeseries. To read individual events, use `SearchRUMEvents` or `ListRUMEvents`.
   *
   * `filter` selects the events with the [RUM search syntax][1] and a time range (`from` and `to` accept date math such as `now-15m`, ISO 8601 dates and timestamps in milliseconds). Each `compute` rule produces one value (`type: total`) or one list of time points (`type: timeseries`) per bucket, keyed `c0`, `c1`... in the response. Each `group_by` rule splits the events into buckets by a facet, returned in `by`. Use `histogram` on a numeric facet to bucket it by ranges.
   *
   * [1]: https://docs.datadoghq.com/real_user_monitoring/explorer/search_syntax/
   * @param param The request object
   */
  public aggregateRUMEvents(
    param: RUMApiAggregateRUMEventsRequest,
    options?: Configuration
  ): Promise<RUMAnalyticsAggregateResponse> {
    const requestContextPromise = this.requestFactory.aggregateRUMEvents(
      param.body,
      options
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
   * The application ID is generated by Datadog and returned in `data.attributes.application_id`. A client token is created with the application and returned in `data.attributes.client_token`, use both to initialize the RUM SDK.
   * The application is created with the default retention filters unless `create_default_retention_filters` is `false`.
   * @param param The request object
   */
  public createRUMApplication(
    param: RUMApiCreateRUMApplicationRequest,
    options?: Configuration
  ): Promise<RUMApplicationResponse> {
    const requestContextPromise = this.requestFactory.createRUMApplication(
      param.body,
      options
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
   * The application is disabled and its client token is revoked, so the RUM SDK stops sending events for it. The application ID cannot be reused or re-enabled through the API.
   * Deleting an application with Product Analytics enabled requires the `product_analytics_apps_write` permission.
   * @param param The request object
   */
  public deleteRUMApplication(
    param: RUMApiDeleteRUMApplicationRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRUMApplication(
      param.id,
      options
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
    options?: Configuration
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
      options
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
   * Unlike `GetRUMApplications`, the response includes the `client_token` used to initialize the RUM SDK.
   * @param param The request object
   */
  public getRUMApplication(
    param: RUMApiGetRUMApplicationRequest,
    options?: Configuration
  ): Promise<RUMApplicationResponse> {
    const requestContextPromise = this.requestFactory.getRUMApplication(
      param.id,
      options
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
   * List the enabled RUM applications of your organization. Applications deleted with `DeleteRUMApplication` are not returned.
   * The response is not paginated and does not include the `client_token`, use `GetRUMApplication` to retrieve it.
   * Use the `application_id` of an item as the `id` path parameter of the other application operations, and as `@application.id` in RUM event queries.
   * @param param The request object
   */
  public getRUMApplications(
    param: RUMApiGetRUMApplicationsRequest = {},
    options?: Configuration
  ): Promise<RUMApplicationsResponse> {
    const requestContextPromise = this.requestFactory.getRUMApplications(
      param.filterRumEnabled,
      param.filterProductAnalyticsEnabled,
      param.filterErrorFocusedModeEnabled,
      param.filterRemoteConfigEnabled,
      param.filterRumEventProcessingState,
      param.filterProductAnalyticsRetentionState,
      options
    );
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
    options?: Configuration
  ): Promise<ServiceRepositoryInfoResponse> {
    const requestContextPromise = this.requestFactory.getServiceRepositoryInfo(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getServiceRepositoryInfo(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieves the content of a specific JavaScript source map file. Provide either
   * `debug_id` with a UUID, or all three of `filename`, `service`, and `version`.
   * When `debug_id` is provided, filename, service, and version are not required
   * and are ignored.
   *
   * **Examples:** the following commands use the US1 API host. Replace the host
   * with the API host for your site, and the filename, service, version, and
   * debug ID with values from your organization. Use `--get` so curl sends the
   * parameters in the query string.
   *
   * **1. Retrieve a source map by debug ID**
   *
   * Provide `debug_id` with a UUID. No filename, service, or version is required.
   *
   * ```bash
   * curl -sS --get "https://api.datadoghq.com/api/v2/sourcemaps" \
   *   -H "Accept: application/json" \
   *   -H "Authorization: Bearer ${DD_BEARER_TOKEN}" \
   *   --data-urlencode "debug_id=00000000-0000-4000-8000-000000000001"
   * ```
   *
   * **2. Retrieve a source map by service and version**
   *
   * Provide `filename` together with `service` and `version`.
   *
   * ```bash
   * curl -sS --get "https://api.datadoghq.com/api/v2/sourcemaps" \
   *   -H "Accept: application/json" \
   *   -H "Authorization: Bearer ${DD_BEARER_TOKEN}" \
   *   --data-urlencode "filename=js/bundle.min.js.map" \
   *   --data-urlencode "service=my-web-service" \
   *   --data-urlencode "version=1.0.0"
   * ```
   * @param param The request object
   */
  public getSourcemaps(
    param: RUMApiGetSourcemapsRequest = {},
    options?: Configuration
  ): Promise<SourcemapFileResponse> {
    const requestContextPromise = this.requestFactory.getSourcemaps(
      param.debugId,
      param.filename,
      param.service,
      param.version,
      options
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
   * Returns the RUM events that match a RUM search query within a time range. Use this endpoint to see your latest RUM events with a simple query. For long filters, use `SearchRUMEvents`. To compute counts, percentiles or timeseries, use `AggregateRUMEvents`.
   *
   * The query follows the [RUM search syntax][2]. Without `filter[from]` and `filter[to]`, the last 15 minutes are searched.
   *
   * [Results are paginated][1]: `page[limit]` is at most 1000 (default 10). When more results are available, the response contains `meta.page.after` and `links.next`. Request `links.next`, or send `meta.page.after` as `page[cursor]` with the same other parameters, and repeat until they are absent.
   *
   * [1]: https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination
   * [2]: https://docs.datadoghq.com/real_user_monitoring/explorer/search_syntax/
   * @param param The request object
   */
  public listRUMEvents(
    param: RUMApiListRUMEventsRequest = {},
    options?: Configuration
  ): Promise<RUMEventsResponse> {
    const requestContextPromise = this.requestFactory.listRUMEvents(
      param.filterQuery,
      param.filterFrom,
      param.filterTo,
      param.sort,
      param.pageCursor,
      param.pageLimit,
      options
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
    options?: Configuration
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
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listRUMEvents(
        responseContext
      );
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
   * Retrieves a paginated list of source maps. Send filters as query parameters,
   * not in a JSON request body. `mapkind` defaults to `js`.
   *
   * For JavaScript source maps, choose one of the three request shapes below.
   *
   * **Examples:** the following commands use the US1 API host. Replace the host with
   * the API host for your site, and the service, version, debug ID, and cursor with
   * values from your organization. Use `--get` so curl sends the filters in the query
   * string; `-X GET` with `--data-urlencode` sends them in the request body instead.
   *
   * **1. List by service and version**
   *
   * Provide both `filter[service]` and `filter[version]` to search source maps
   * indexed by service and version. Omit `search_by`.
   *
   * **Pagination:** prefer cursor pagination. Omit `page[after]` and `page[number]`
   * on the first request. To get the next page, pass `meta.page.next_cursor` as
   * `page[after]`, keeping the same filters. Continue until
   * `meta.page.has_more_results` is `false`. Do not decode or modify the cursor.
   * Legacy page-number pagination is also supported, starting at `page[number]=1`.
   *
   * ```bash
   * curl -sS --get "https://api.datadoghq.com/api/v2/sourcemaps/list" \
   *   -H "Accept: application/json" \
   *   -H "Authorization: Bearer ${DD_BEARER_TOKEN}" \
   *   --data-urlencode "mapkind=js" \
   *   --data-urlencode "filter[service]=my-web-service" \
   *   --data-urlencode "filter[version]=1.0.0" \
   *   --data-urlencode "page[size]=10"
   * ```
   *
   * **2. Find a specific JavaScript debug ID**
   *
   * Provide `filter[debug_id]` with a UUID. Service and version filters are not
   * required. Omit `search_by`.
   *
   * **Pagination:** the lookup returns at most one result, so no pagination is
   * needed. `page[after]` is not supported.
   *
   * ```bash
   * curl -sS --get "https://api.datadoghq.com/api/v2/sourcemaps/list" \
   *   -H "Accept: application/json" \
   *   -H "Authorization: Bearer ${DD_BEARER_TOKEN}" \
   *   --data-urlencode "mapkind=js" \
   *   --data-urlencode "filter[debug_id]=00000000-0000-4000-8000-000000000001"
   * ```
   *
   * **3. Browse source maps indexed by debug ID**
   *
   * Set `search_by=debug_id` without specifying a debug ID. Do not send service,
   * version, or filename filters in this mode.
   *
   * **Pagination:** this mode requires cursor pagination; `page[number]` is not
   * supported. Omit `page[after]` on the first request. To get the next page, pass
   * `meta.page.next_cursor` as `page[after]`, keeping the same search mode and
   * filters. Continue until `meta.page.has_more_results` is `false`. Do not decode
   * or modify the cursor.
   *
   * First page:
   *
   * ```bash
   * curl -sS --get "https://api.datadoghq.com/api/v2/sourcemaps/list" \
   *   -H "Accept: application/json" \
   *   -H "Authorization: Bearer ${DD_BEARER_TOKEN}" \
   *   --data-urlencode "mapkind=js" \
   *   --data-urlencode "search_by=debug_id" \
   *   --data-urlencode "page[size]=10"
   * ```
   *
   * Next page:
   *
   * ```bash
   * curl -sS --get "https://api.datadoghq.com/api/v2/sourcemaps/list" \
   *   -H "Accept: application/json" \
   *   -H "Authorization: Bearer ${DD_BEARER_TOKEN}" \
   *   --data-urlencode "mapkind=js" \
   *   --data-urlencode "search_by=debug_id" \
   *   --data-urlencode "page[size]=10" \
   *   --data-urlencode "page[after]=<meta.page.next_cursor>"
   * ```
   *
   * For other map kinds, use `page[number]`, starting at 1.
   * @param param The request object
   */
  public listSourcemaps(
    param: RUMApiListSourcemapsRequest = {},
    options?: Configuration
  ): Promise<ListSourcemapsResponse> {
    const requestContextPromise = this.requestFactory.listSourcemaps(
      param.searchBy,
      param.mapkind,
      param.pageAfter,
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
      options
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
    options?: Configuration
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
      options
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
   * Returns the RUM events that match a RUM search query within a time range, as a list of individual events. Use this endpoint when the filter is too long for a query string, or to set `options`. To compute counts, percentiles or timeseries instead of reading events, use `AggregateRUMEvents`.
   *
   * The query follows the [RUM search syntax][2]. `filter.from` and `filter.to` accept date math (`now-15m`), ISO 8601 dates and timestamps in milliseconds.
   *
   * [Results are paginated][1]: `page.limit` is at most 1000 (default 10). When more results are available, the response contains `meta.page.after`. Send it as `page.cursor`, with the same `filter` and `sort`, to get the next page, and repeat until `meta.page.after` is absent.
   *
   * [1]: https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination
   * [2]: https://docs.datadoghq.com/real_user_monitoring/explorer/search_syntax/
   * @param param The request object
   */
  public searchRUMEvents(
    param: RUMApiSearchRUMEventsRequest,
    options?: Configuration
  ): Promise<RUMEventsResponse> {
    const requestContextPromise = this.requestFactory.searchRUMEvents(
      param.body,
      options
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
    options?: Configuration
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
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.searchRUMEvents(
        responseContext
      );
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
   * This is a partial update: only the attributes present in the request are changed. `data.id` must match the `id` path parameter.
   * @param param The request object
   */
  public updateRUMApplication(
    param: RUMApiUpdateRUMApplicationRequest,
    options?: Configuration
  ): Promise<RUMApplicationResponse> {
    const requestContextPromise = this.requestFactory.updateRUMApplication(
      param.id,
      param.body,
      options
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
