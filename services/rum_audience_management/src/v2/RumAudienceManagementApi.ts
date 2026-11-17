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
import { CreateConnectionRequest } from "./models/CreateConnectionRequest";
import { FacetInfoRequest } from "./models/FacetInfoRequest";
import { FacetInfoResponse } from "./models/FacetInfoResponse";
import { GetMappingResponse } from "./models/GetMappingResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { ListConnectionsResponse } from "./models/ListConnectionsResponse";
import { QueryAccountRequest } from "./models/QueryAccountRequest";
import { QueryEventFilteredUsersRequest } from "./models/QueryEventFilteredUsersRequest";
import { QueryResponse } from "./models/QueryResponse";
import { QuerySortOrder } from "./models/QuerySortOrder";
import { QueryUsersRequest } from "./models/QueryUsersRequest";
import { SegmentCreateRequest } from "./models/SegmentCreateRequest";
import { SegmentDeleteResponse } from "./models/SegmentDeleteResponse";
import { SegmentEntity } from "./models/SegmentEntity";
import { SegmentPreviewRequest } from "./models/SegmentPreviewRequest";
import { SegmentPreviewResponse } from "./models/SegmentPreviewResponse";
import { SegmentResponse } from "./models/SegmentResponse";
import { SegmentSortColumn } from "./models/SegmentSortColumn";
import { SegmentsResponse } from "./models/SegmentsResponse";
import { SegmentUpdateRequest } from "./models/SegmentUpdateRequest";
import { UpdateConnectionRequest } from "./models/UpdateConnectionRequest";
import { version } from "../version";

export class RumAudienceManagementApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("rum-audience-management", version);
    }
  }
  public async createConnection(
    entity: string,
    body: CreateConnectionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumAudienceManagementApi.v2.createConnection"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createConnection' is disabled. Enable it by setting `configuration.unstableOperations['RumAudienceManagementApi.v2.createConnection'] = true`",
      );
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
        encodeURIComponent(String(entity)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumAudienceManagementApi.v2.createConnection",
      RumAudienceManagementApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CreateConnectionRequest", ""),
      contentType,
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

  public async createProductAnalyticsSegment(
    body: SegmentCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumAudienceManagementApi.v2.createProductAnalyticsSegment"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createProductAnalyticsSegment' is disabled. Enable it by setting `configuration.unstableOperations['RumAudienceManagementApi.v2.createProductAnalyticsSegment'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createProductAnalyticsSegment");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/segment";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumAudienceManagementApi.v2.createProductAnalyticsSegment",
      RumAudienceManagementApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SegmentCreateRequest", ""),
      contentType,
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumAudienceManagementApi.v2.deleteConnection"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteConnection' is disabled. Enable it by setting `configuration.unstableOperations['RumAudienceManagementApi.v2.deleteConnection'] = true`",
      );
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
    const { server, overrides } = _config.getServerAndOverrides(
      "RumAudienceManagementApi.v2.deleteConnection",
      RumAudienceManagementApi.operationServers,
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

  public async deleteProductAnalyticsSegment(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumAudienceManagementApi.v2.deleteProductAnalyticsSegment"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteProductAnalyticsSegment' is disabled. Enable it by setting `configuration.unstableOperations['RumAudienceManagementApi.v2.deleteProductAnalyticsSegment'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteProductAnalyticsSegment");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/segment/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumAudienceManagementApi.v2.deleteProductAnalyticsSegment",
      RumAudienceManagementApi.operationServers,
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

  public async deleteUserProfile(
    userId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumAudienceManagementApi.v2.deleteUserProfile"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteUserProfile' is disabled. Enable it by setting `configuration.unstableOperations['RumAudienceManagementApi.v2.deleteUserProfile'] = true`",
      );
    }

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError("userId", "deleteUserProfile");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/users/{user_id}".replace(
      "{user_id}",
      encodeURIComponent(String(userId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumAudienceManagementApi.v2.deleteUserProfile",
      RumAudienceManagementApi.operationServers,
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

  public async getAccountFacetInfo(
    body: FacetInfoRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumAudienceManagementApi.v2.getAccountFacetInfo"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getAccountFacetInfo' is disabled. Enable it by setting `configuration.unstableOperations['RumAudienceManagementApi.v2.getAccountFacetInfo'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "getAccountFacetInfo");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/accounts/facet_info";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumAudienceManagementApi.v2.getAccountFacetInfo",
      RumAudienceManagementApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "FacetInfoRequest", ""),
      contentType,
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RumAudienceManagementApi.v2.getMapping"]) {
      throw new Error(
        "Unstable operation 'getMapping' is disabled. Enable it by setting `configuration.unstableOperations['RumAudienceManagementApi.v2.getMapping'] = true`",
      );
    }

    // verify required parameter 'entity' is not null or undefined
    if (entity === null || entity === undefined) {
      throw new RequiredError("entity", "getMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/{entity}/mapping".replace(
      "{entity}",
      encodeURIComponent(String(entity)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumAudienceManagementApi.v2.getMapping",
      RumAudienceManagementApi.operationServers,
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

  public async getProductAnalyticsSegment(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumAudienceManagementApi.v2.getProductAnalyticsSegment"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getProductAnalyticsSegment' is disabled. Enable it by setting `configuration.unstableOperations['RumAudienceManagementApi.v2.getProductAnalyticsSegment'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getProductAnalyticsSegment");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/segment/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumAudienceManagementApi.v2.getProductAnalyticsSegment",
      RumAudienceManagementApi.operationServers,
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

  public async getUserFacetInfo(
    body: FacetInfoRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumAudienceManagementApi.v2.getUserFacetInfo"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getUserFacetInfo' is disabled. Enable it by setting `configuration.unstableOperations['RumAudienceManagementApi.v2.getUserFacetInfo'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "getUserFacetInfo");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/users/facet_info";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumAudienceManagementApi.v2.getUserFacetInfo",
      RumAudienceManagementApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "FacetInfoRequest", ""),
      contentType,
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["RumAudienceManagementApi.v2.listConnections"]
    ) {
      throw new Error(
        "Unstable operation 'listConnections' is disabled. Enable it by setting `configuration.unstableOperations['RumAudienceManagementApi.v2.listConnections'] = true`",
      );
    }

    // verify required parameter 'entity' is not null or undefined
    if (entity === null || entity === undefined) {
      throw new RequiredError("entity", "listConnections");
    }

    // Path Params
    const localVarPath =
      "/api/v2/product-analytics/{entity}/mapping/connections".replace(
        "{entity}",
        encodeURIComponent(String(entity)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumAudienceManagementApi.v2.listConnections",
      RumAudienceManagementApi.operationServers,
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

  public async listProductAnalyticsSegments(
    filterEntity?: SegmentEntity,
    filterType?: string,
    filterIds?: string,
    filterDisabled?: boolean,
    sortColumn?: SegmentSortColumn,
    sortOrder?: QuerySortOrder,
    limit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumAudienceManagementApi.v2.listProductAnalyticsSegments"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listProductAnalyticsSegments' is disabled. Enable it by setting `configuration.unstableOperations['RumAudienceManagementApi.v2.listProductAnalyticsSegments'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/segment";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumAudienceManagementApi.v2.listProductAnalyticsSegments",
      RumAudienceManagementApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterEntity !== undefined) {
      requestContext.setQueryParam(
        "filter[entity]",
        serialize(filterEntity, TypingInfo, "SegmentEntity", ""),
        "",
      );
    }
    if (filterType !== undefined) {
      requestContext.setQueryParam(
        "filter[type]",
        serialize(filterType, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterIds !== undefined) {
      requestContext.setQueryParam(
        "filter[ids]",
        serialize(filterIds, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterDisabled !== undefined) {
      requestContext.setQueryParam(
        "filter[disabled]",
        serialize(filterDisabled, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (sortColumn !== undefined) {
      requestContext.setQueryParam(
        "sort[column]",
        serialize(sortColumn, TypingInfo, "SegmentSortColumn", ""),
        "",
      );
    }
    if (sortOrder !== undefined) {
      requestContext.setQueryParam(
        "sort[order]",
        serialize(sortOrder, TypingInfo, "QuerySortOrder", ""),
        "",
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", "int64"),
        "",
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

  public async previewProductAnalyticsSegment(
    body: SegmentPreviewRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumAudienceManagementApi.v2.previewProductAnalyticsSegment"
      ]
    ) {
      throw new Error(
        "Unstable operation 'previewProductAnalyticsSegment' is disabled. Enable it by setting `configuration.unstableOperations['RumAudienceManagementApi.v2.previewProductAnalyticsSegment'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "previewProductAnalyticsSegment");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/segments/preview";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumAudienceManagementApi.v2.previewProductAnalyticsSegment",
      RumAudienceManagementApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SegmentPreviewRequest", ""),
      contentType,
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

  public async queryAccounts(
    body: QueryAccountRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["RumAudienceManagementApi.v2.queryAccounts"]
    ) {
      throw new Error(
        "Unstable operation 'queryAccounts' is disabled. Enable it by setting `configuration.unstableOperations['RumAudienceManagementApi.v2.queryAccounts'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryAccounts");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/accounts/query";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumAudienceManagementApi.v2.queryAccounts",
      RumAudienceManagementApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "QueryAccountRequest", ""),
      contentType,
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumAudienceManagementApi.v2.queryEventFilteredUsers"
      ]
    ) {
      throw new Error(
        "Unstable operation 'queryEventFilteredUsers' is disabled. Enable it by setting `configuration.unstableOperations['RumAudienceManagementApi.v2.queryEventFilteredUsers'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryEventFilteredUsers");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/users/event_filtered_query";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumAudienceManagementApi.v2.queryEventFilteredUsers",
      RumAudienceManagementApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "QueryEventFilteredUsersRequest", ""),
      contentType,
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RumAudienceManagementApi.v2.queryUsers"]) {
      throw new Error(
        "Unstable operation 'queryUsers' is disabled. Enable it by setting `configuration.unstableOperations['RumAudienceManagementApi.v2.queryUsers'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "queryUsers");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/users/query";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumAudienceManagementApi.v2.queryUsers",
      RumAudienceManagementApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "QueryUsersRequest", ""),
      contentType,
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumAudienceManagementApi.v2.updateConnection"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateConnection' is disabled. Enable it by setting `configuration.unstableOperations['RumAudienceManagementApi.v2.updateConnection'] = true`",
      );
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
        encodeURIComponent(String(entity)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumAudienceManagementApi.v2.updateConnection",
      RumAudienceManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "UpdateConnectionRequest", ""),
      contentType,
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

  public async updateProductAnalyticsSegment(
    id: string,
    body: SegmentUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RumAudienceManagementApi.v2.updateProductAnalyticsSegment"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateProductAnalyticsSegment' is disabled. Enable it by setting `configuration.unstableOperations['RumAudienceManagementApi.v2.updateProductAnalyticsSegment'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateProductAnalyticsSegment");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateProductAnalyticsSegment");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/segment/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumAudienceManagementApi.v2.updateProductAnalyticsSegment",
      RumAudienceManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SegmentUpdateRequest", ""),
      contentType,
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
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      return;
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
   * @params response Response returned by the server for a request to createProductAnalyticsSegment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createProductAnalyticsSegment(
    response: ResponseContext,
  ): Promise<SegmentResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: SegmentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SegmentResponse",
      ) as SegmentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
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
      const body: SegmentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SegmentResponse",
        "",
      ) as SegmentResponse;
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
   * @params response Response returned by the server for a request to deleteConnection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteConnection(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to deleteProductAnalyticsSegment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteProductAnalyticsSegment(
    response: ResponseContext,
  ): Promise<SegmentDeleteResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SegmentDeleteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SegmentDeleteResponse",
      ) as SegmentDeleteResponse;
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
      const body: SegmentDeleteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SegmentDeleteResponse",
        "",
      ) as SegmentDeleteResponse;
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
   * @params response Response returned by the server for a request to deleteUserProfile
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteUserProfile(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      return;
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
   * @params response Response returned by the server for a request to getAccountFacetInfo
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAccountFacetInfo(
    response: ResponseContext,
  ): Promise<FacetInfoResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FacetInfoResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FacetInfoResponse",
      ) as FacetInfoResponse;
      return body;
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
      const body: FacetInfoResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FacetInfoResponse",
        "",
      ) as FacetInfoResponse;
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
   * @params response Response returned by the server for a request to getMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMapping(
    response: ResponseContext,
  ): Promise<GetMappingResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetMappingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetMappingResponse",
      ) as GetMappingResponse;
      return body;
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
      const body: GetMappingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetMappingResponse",
        "",
      ) as GetMappingResponse;
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
   * @params response Response returned by the server for a request to getProductAnalyticsSegment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getProductAnalyticsSegment(
    response: ResponseContext,
  ): Promise<SegmentResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SegmentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SegmentResponse",
      ) as SegmentResponse;
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
      const body: SegmentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SegmentResponse",
        "",
      ) as SegmentResponse;
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
   * @params response Response returned by the server for a request to getUserFacetInfo
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUserFacetInfo(
    response: ResponseContext,
  ): Promise<FacetInfoResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FacetInfoResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FacetInfoResponse",
      ) as FacetInfoResponse;
      return body;
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
      const body: FacetInfoResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FacetInfoResponse",
        "",
      ) as FacetInfoResponse;
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
   * @params response Response returned by the server for a request to listConnections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listConnections(
    response: ResponseContext,
  ): Promise<ListConnectionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListConnectionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListConnectionsResponse",
      ) as ListConnectionsResponse;
      return body;
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
      const body: ListConnectionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListConnectionsResponse",
        "",
      ) as ListConnectionsResponse;
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
   * @params response Response returned by the server for a request to listProductAnalyticsSegments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listProductAnalyticsSegments(
    response: ResponseContext,
  ): Promise<SegmentsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SegmentsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SegmentsResponse",
      ) as SegmentsResponse;
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
      const body: SegmentsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SegmentsResponse",
        "",
      ) as SegmentsResponse;
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
   * @params response Response returned by the server for a request to previewProductAnalyticsSegment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async previewProductAnalyticsSegment(
    response: ResponseContext,
  ): Promise<SegmentPreviewResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SegmentPreviewResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SegmentPreviewResponse",
      ) as SegmentPreviewResponse;
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
      const body: SegmentPreviewResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SegmentPreviewResponse",
        "",
      ) as SegmentPreviewResponse;
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
   * @params response Response returned by the server for a request to queryAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryAccounts(
    response: ResponseContext,
  ): Promise<QueryResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: QueryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "QueryResponse",
      ) as QueryResponse;
      return body;
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
      const body: QueryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "QueryResponse",
        "",
      ) as QueryResponse;
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
   * @params response Response returned by the server for a request to queryEventFilteredUsers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryEventFilteredUsers(
    response: ResponseContext,
  ): Promise<QueryResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: QueryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "QueryResponse",
      ) as QueryResponse;
      return body;
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
      const body: QueryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "QueryResponse",
        "",
      ) as QueryResponse;
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
   * @params response Response returned by the server for a request to queryUsers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async queryUsers(response: ResponseContext): Promise<QueryResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: QueryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "QueryResponse",
      ) as QueryResponse;
      return body;
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
      const body: QueryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "QueryResponse",
        "",
      ) as QueryResponse;
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
   * @params response Response returned by the server for a request to updateConnection
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateConnection(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
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
   * @params response Response returned by the server for a request to updateProductAnalyticsSegment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateProductAnalyticsSegment(
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
      response.httpStatusCode === 409
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

export interface RumAudienceManagementApiCreateProductAnalyticsSegmentRequest {
  /**
   * @type SegmentCreateRequest
   */
  body: SegmentCreateRequest;
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

export interface RumAudienceManagementApiDeleteProductAnalyticsSegmentRequest {
  /**
   * ID of the segment.
   * @type string
   */
  id: string;
}

export interface RumAudienceManagementApiDeleteUserProfileRequest {
  /**
   * The ID of the user to delete, as sent in the `usr.id` attribute.
   * @type string
   */
  userId: string;
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

export interface RumAudienceManagementApiGetProductAnalyticsSegmentRequest {
  /**
   * ID of the segment.
   * @type string
   */
  id: string;
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

export interface RumAudienceManagementApiListProductAnalyticsSegmentsRequest {
  /**
   * Return only segments of this entity kind. Other values are ignored.
   * @type SegmentEntity
   */
  filterEntity?: SegmentEntity;
  /**
   * Comma-separated segment kinds to return: `event_platform`, `user_store`, `account_store`, `reference_table`,
   * `static`, `template`, `combination`, `journey`, or `retention`.
   * @type string
   */
  filterType?: string;
  /**
   * Comma-separated segment IDs to return, up to 1000.
   * @type string
   */
  filterIds?: string;
  /**
   * Set to `false` to include disabled segments.
   * @type boolean
   */
  filterDisabled?: boolean;
  /**
   * Column to sort by. Other values are ignored.
   * @type SegmentSortColumn
   */
  sortColumn?: SegmentSortColumn;
  /**
   * Sort order. Only used with `sort[column]`.
   * @type QuerySortOrder
   */
  sortOrder?: QuerySortOrder;
  /**
   * Maximum number of segments to return. Returns all segments when not set.
   * @type number
   */
  limit?: number;
}

export interface RumAudienceManagementApiPreviewProductAnalyticsSegmentRequest {
  /**
   * @type SegmentPreviewRequest
   */
  body: SegmentPreviewRequest;
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

export interface RumAudienceManagementApiUpdateProductAnalyticsSegmentRequest {
  /**
   * ID of the segment.
   * @type string
   */
  id: string;
  /**
   * @type SegmentUpdateRequest
   */
  body: SegmentUpdateRequest;
}

export class RumAudienceManagementApi {
  private requestFactory: RumAudienceManagementApiRequestFactory;
  private responseProcessor: RumAudienceManagementApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: RumAudienceManagementApiRequestFactory,
    responseProcessor?: RumAudienceManagementApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new RumAudienceManagementApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new RumAudienceManagementApiResponseProcessor();
  }

  /**
   * Create a new data connection and its fields for an entity
   * @param param The request object
   */
  public createConnection(
    param: RumAudienceManagementApiCreateConnectionRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.createConnection(
      param.entity,
      param.body,
      options,
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
   * Create a user or account segment. The `data_query` defines who belongs to the segment.
   * Segment names must be unique in the organization.
   * @param param The request object
   */
  public createProductAnalyticsSegment(
    param: RumAudienceManagementApiCreateProductAnalyticsSegmentRequest,
    options?: Configuration,
  ): Promise<SegmentResponse> {
    const requestContextPromise =
      this.requestFactory.createProductAnalyticsSegment(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createProductAnalyticsSegment(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete an existing data connection for an entity
   * @param param The request object
   */
  public deleteConnection(
    param: RumAudienceManagementApiDeleteConnectionRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteConnection(
      param.id,
      param.entity,
      options,
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
   * Delete a segment. Segments created by users are deleted permanently.
   * Segments created by Datadog, and segments based on an uploaded list, are disabled instead.
   * @param param The request object
   */
  public deleteProductAnalyticsSegment(
    param: RumAudienceManagementApiDeleteProductAnalyticsSegmentRequest,
    options?: Configuration,
  ): Promise<SegmentDeleteResponse> {
    const requestContextPromise =
      this.requestFactory.deleteProductAnalyticsSegment(param.id, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteProductAnalyticsSegment(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a Product Analytics user profile.
   * Deletion is asynchronous: the request is accepted and the profile is removed shortly after, usually within a few
   * minutes.
   * This only deletes the user profile. To delete the RUM events of the user, use the RUM data deletion API.
   * @param param The request object
   */
  public deleteUserProfile(
    param: RumAudienceManagementApiDeleteUserProfileRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteUserProfile(
      param.userId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteUserProfile(responseContext);
        });
    });
  }

  /**
   * Get facet information for account attributes including possible values and counts
   * @param param The request object
   */
  public getAccountFacetInfo(
    param: RumAudienceManagementApiGetAccountFacetInfoRequest,
    options?: Configuration,
  ): Promise<FacetInfoResponse> {
    const requestContextPromise = this.requestFactory.getAccountFacetInfo(
      param.body,
      options,
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
    options?: Configuration,
  ): Promise<GetMappingResponse> {
    const requestContextPromise = this.requestFactory.getMapping(
      param.entity,
      options,
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
   * Get a segment by ID, including its definition.
   * @param param The request object
   */
  public getProductAnalyticsSegment(
    param: RumAudienceManagementApiGetProductAnalyticsSegmentRequest,
    options?: Configuration,
  ): Promise<SegmentResponse> {
    const requestContextPromise =
      this.requestFactory.getProductAnalyticsSegment(param.id, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getProductAnalyticsSegment(
            responseContext,
          );
        });
    });
  }

  /**
   * Get facet information for user attributes including possible values and counts
   * @param param The request object
   */
  public getUserFacetInfo(
    param: RumAudienceManagementApiGetUserFacetInfoRequest,
    options?: Configuration,
  ): Promise<FacetInfoResponse> {
    const requestContextPromise = this.requestFactory.getUserFacetInfo(
      param.body,
      options,
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
    options?: Configuration,
  ): Promise<ListConnectionsResponse> {
    const requestContextPromise = this.requestFactory.listConnections(
      param.entity,
      options,
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
   * List the user and account segments of your organization. Disabled segments are left out unless
   * `filter[disabled]` is `false`.
   * The list does not include segment definitions; get a segment by ID to see its `data_query`.
   * @param param The request object
   */
  public listProductAnalyticsSegments(
    param: RumAudienceManagementApiListProductAnalyticsSegmentsRequest = {},
    options?: Configuration,
  ): Promise<SegmentsResponse> {
    const requestContextPromise =
      this.requestFactory.listProductAnalyticsSegments(
        param.filterEntity,
        param.filterType,
        param.filterIds,
        param.filterDisabled,
        param.sortColumn,
        param.sortOrder,
        param.limit,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listProductAnalyticsSegments(
            responseContext,
          );
        });
    });
  }

  /**
   * Preview the users or accounts that match a segment definition, without saving it.
   * Returns up to 1000 rows and the total number of matching entities.
   * @param param The request object
   */
  public previewProductAnalyticsSegment(
    param: RumAudienceManagementApiPreviewProductAnalyticsSegmentRequest,
    options?: Configuration,
  ): Promise<SegmentPreviewResponse> {
    const requestContextPromise =
      this.requestFactory.previewProductAnalyticsSegment(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.previewProductAnalyticsSegment(
            responseContext,
          );
        });
    });
  }

  /**
   * Query accounts with flexible filtering by account properties
   * @param param The request object
   */
  public queryAccounts(
    param: RumAudienceManagementApiQueryAccountsRequest,
    options?: Configuration,
  ): Promise<QueryResponse> {
    const requestContextPromise = this.requestFactory.queryAccounts(
      param.body,
      options,
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
    options?: Configuration,
  ): Promise<QueryResponse> {
    const requestContextPromise = this.requestFactory.queryEventFilteredUsers(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryEventFilteredUsers(
            responseContext,
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
    options?: Configuration,
  ): Promise<QueryResponse> {
    const requestContextPromise = this.requestFactory.queryUsers(
      param.body,
      options,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.updateConnection(
      param.entity,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateConnection(responseContext);
        });
    });
  }

  /**
   * Update a segment. Fields that are not set are left unchanged. The `id` in the body must match the one in the
   * path.
   * The response has no body; get the segment to see the result.
   * @param param The request object
   */
  public updateProductAnalyticsSegment(
    param: RumAudienceManagementApiUpdateProductAnalyticsSegmentRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.updateProductAnalyticsSegment(
        param.id,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateProductAnalyticsSegment(
            responseContext,
          );
        });
    });
  }
}
