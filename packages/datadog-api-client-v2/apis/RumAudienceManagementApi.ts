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
import { Int64Input } from "../../datadog-api-client-common/util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { CreateConnectionRequest } from "../models/CreateConnectionRequest";
import { FacetInfoRequest } from "../models/FacetInfoRequest";
import { FacetInfoResponse } from "../models/FacetInfoResponse";
import { GetMappingResponse } from "../models/GetMappingResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { ListConnectionsResponse } from "../models/ListConnectionsResponse";
import { QueryAccountRequest } from "../models/QueryAccountRequest";
import { QueryEventFilteredUsersRequest } from "../models/QueryEventFilteredUsersRequest";
import { QueryResponse } from "../models/QueryResponse";
import { QuerySortOrder } from "../models/QuerySortOrder";
import { QueryUsersRequest } from "../models/QueryUsersRequest";
import { SegmentCreateRequest } from "../models/SegmentCreateRequest";
import { SegmentDeleteResponse } from "../models/SegmentDeleteResponse";
import { SegmentEntity } from "../models/SegmentEntity";
import { SegmentPreviewRequest } from "../models/SegmentPreviewRequest";
import { SegmentPreviewResponse } from "../models/SegmentPreviewResponse";
import { SegmentResponse } from "../models/SegmentResponse";
import { SegmentSortColumn } from "../models/SegmentSortColumn";
import { SegmentsResponse } from "../models/SegmentsResponse";
import { SegmentUpdateRequest } from "../models/SegmentUpdateRequest";
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
      ObjectSerializer.serialize(body, "CreateConnectionRequest", ""),
      contentType,
      this.configuration.preserveLargeIntegers
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createProductAnalyticsSegment'");
    if (!_config.unstableOperations["v2.createProductAnalyticsSegment"]) {
      throw new Error(
        "Unstable operation 'createProductAnalyticsSegment' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createProductAnalyticsSegment");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/segment";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumAudienceManagementApi.createProductAnalyticsSegment")
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
      ObjectSerializer.serialize(body, "SegmentCreateRequest", ""),
      contentType,
      this.configuration.preserveLargeIntegers
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteProductAnalyticsSegment'");
    if (!_config.unstableOperations["v2.deleteProductAnalyticsSegment"]) {
      throw new Error(
        "Unstable operation 'deleteProductAnalyticsSegment' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteProductAnalyticsSegment");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/segment/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumAudienceManagementApi.deleteProductAnalyticsSegment")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
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

  public async deleteUserProfile(
    userId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteUserProfile'");
    if (!_config.unstableOperations["v2.deleteUserProfile"]) {
      throw new Error("Unstable operation 'deleteUserProfile' is disabled");
    }

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError("userId", "deleteUserProfile");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/users/{user_id}".replace(
      "{user_id}",
      encodeURIComponent(String(userId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumAudienceManagementApi.deleteUserProfile")
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
      ObjectSerializer.serialize(body, "FacetInfoRequest", ""),
      contentType,
      this.configuration.preserveLargeIntegers
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getProductAnalyticsSegment'");
    if (!_config.unstableOperations["v2.getProductAnalyticsSegment"]) {
      throw new Error(
        "Unstable operation 'getProductAnalyticsSegment' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getProductAnalyticsSegment");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/segment/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumAudienceManagementApi.getProductAnalyticsSegment")
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
      ObjectSerializer.serialize(body, "FacetInfoRequest", ""),
      contentType,
      this.configuration.preserveLargeIntegers
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
    limit?: Int64Input,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listProductAnalyticsSegments'");
    if (!_config.unstableOperations["v2.listProductAnalyticsSegments"]) {
      throw new Error(
        "Unstable operation 'listProductAnalyticsSegments' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/segment";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumAudienceManagementApi.listProductAnalyticsSegments")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterEntity !== undefined) {
      requestContext.setQueryParam(
        "filter[entity]",
        ObjectSerializer.serialize(filterEntity, "SegmentEntity", ""),
        ""
      );
    }
    if (filterType !== undefined) {
      requestContext.setQueryParam(
        "filter[type]",
        ObjectSerializer.serialize(filterType, "string", ""),
        ""
      );
    }
    if (filterIds !== undefined) {
      requestContext.setQueryParam(
        "filter[ids]",
        ObjectSerializer.serialize(filterIds, "string", ""),
        ""
      );
    }
    if (filterDisabled !== undefined) {
      requestContext.setQueryParam(
        "filter[disabled]",
        ObjectSerializer.serialize(filterDisabled, "boolean", ""),
        ""
      );
    }
    if (sortColumn !== undefined) {
      requestContext.setQueryParam(
        "sort[column]",
        ObjectSerializer.serialize(sortColumn, "SegmentSortColumn", ""),
        ""
      );
    }
    if (sortOrder !== undefined) {
      requestContext.setQueryParam(
        "sort[order]",
        ObjectSerializer.serialize(sortOrder, "QuerySortOrder", ""),
        ""
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", "int64"),
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

  public async previewProductAnalyticsSegment(
    body: SegmentPreviewRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'previewProductAnalyticsSegment'");
    if (!_config.unstableOperations["v2.previewProductAnalyticsSegment"]) {
      throw new Error(
        "Unstable operation 'previewProductAnalyticsSegment' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "previewProductAnalyticsSegment");
    }

    // Path Params
    const localVarPath = "/api/v2/product-analytics/segments/preview";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumAudienceManagementApi.previewProductAnalyticsSegment")
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
      ObjectSerializer.serialize(body, "SegmentPreviewRequest", ""),
      contentType,
      this.configuration.preserveLargeIntegers
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
      ObjectSerializer.serialize(body, "QueryAccountRequest", ""),
      contentType,
      this.configuration.preserveLargeIntegers
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
      ObjectSerializer.serialize(body, "QueryEventFilteredUsersRequest", ""),
      contentType,
      this.configuration.preserveLargeIntegers
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
      ObjectSerializer.serialize(body, "QueryUsersRequest", ""),
      contentType,
      this.configuration.preserveLargeIntegers
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
      ObjectSerializer.serialize(body, "UpdateConnectionRequest", ""),
      contentType,
      this.configuration.preserveLargeIntegers
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateProductAnalyticsSegment'");
    if (!_config.unstableOperations["v2.updateProductAnalyticsSegment"]) {
      throw new Error(
        "Unstable operation 'updateProductAnalyticsSegment' is disabled"
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
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumAudienceManagementApi.updateProductAnalyticsSegment")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "*/*");
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
      ObjectSerializer.serialize(body, "SegmentUpdateRequest", ""),
      contentType,
      this.configuration.preserveLargeIntegers
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
  private configuration?: Configuration;

  public constructor(configuration?: Configuration) {
    this.configuration = configuration;
  }

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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to createProductAnalyticsSegment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createProductAnalyticsSegment(
    response: ResponseContext
  ): Promise<SegmentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: SegmentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "SegmentResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as SegmentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: SegmentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "SegmentResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as SegmentResponse;
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to deleteProductAnalyticsSegment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteProductAnalyticsSegment(
    response: ResponseContext
  ): Promise<SegmentDeleteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SegmentDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "SegmentDeleteResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as SegmentDeleteResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: SegmentDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "SegmentDeleteResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as SegmentDeleteResponse;
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
   * @params response Response returned by the server for a request to deleteUserProfile
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteUserProfile(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      return;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "FacetInfoResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as FacetInfoResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "FacetInfoResponse",
        "",
        this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "GetMappingResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as GetMappingResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "GetMappingResponse",
        "",
        this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to getProductAnalyticsSegment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getProductAnalyticsSegment(
    response: ResponseContext
  ): Promise<SegmentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SegmentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "SegmentResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as SegmentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: SegmentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "SegmentResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as SegmentResponse;
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "FacetInfoResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as FacetInfoResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "FacetInfoResponse",
        "",
        this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "ListConnectionsResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as ListConnectionsResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "ListConnectionsResponse",
        "",
        this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to listProductAnalyticsSegments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listProductAnalyticsSegments(
    response: ResponseContext
  ): Promise<SegmentsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SegmentsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "SegmentsResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as SegmentsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: SegmentsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "SegmentsResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as SegmentsResponse;
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
   * @params response Response returned by the server for a request to previewProductAnalyticsSegment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async previewProductAnalyticsSegment(
    response: ResponseContext
  ): Promise<SegmentPreviewResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SegmentPreviewResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "SegmentPreviewResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as SegmentPreviewResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: SegmentPreviewResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "SegmentPreviewResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as SegmentPreviewResponse;
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "QueryResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as QueryResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "QueryResponse",
        "",
        this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "QueryResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as QueryResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "QueryResponse",
        "",
        this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "QueryResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as QueryResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "QueryResponse",
        "",
        this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to updateProductAnalyticsSegment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateProductAnalyticsSegment(
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
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
   * @type Int64Input
   */
  limit?: Int64Input;
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
      responseProcessor ||
      new RumAudienceManagementApiResponseProcessor(configuration);
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
   * Create a user or account segment. The `data_query` defines who belongs to the segment.
   * Segment names must be unique in the organization.
   * @param param The request object
   */
  public createProductAnalyticsSegment(
    param: RumAudienceManagementApiCreateProductAnalyticsSegmentRequest,
    options?: Configuration
  ): Promise<SegmentResponse> {
    const requestContextPromise =
      this.requestFactory.createProductAnalyticsSegment(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createProductAnalyticsSegment(
            responseContext
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
   * Delete a segment. Segments created by users are deleted permanently.
   * Segments created by Datadog, and segments based on an uploaded list, are disabled instead.
   * @param param The request object
   */
  public deleteProductAnalyticsSegment(
    param: RumAudienceManagementApiDeleteProductAnalyticsSegmentRequest,
    options?: Configuration
  ): Promise<SegmentDeleteResponse> {
    const requestContextPromise =
      this.requestFactory.deleteProductAnalyticsSegment(param.id, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteProductAnalyticsSegment(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteUserProfile(
      param.userId,
      options
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
   * Get a segment by ID, including its definition.
   * @param param The request object
   */
  public getProductAnalyticsSegment(
    param: RumAudienceManagementApiGetProductAnalyticsSegmentRequest,
    options?: Configuration
  ): Promise<SegmentResponse> {
    const requestContextPromise =
      this.requestFactory.getProductAnalyticsSegment(param.id, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getProductAnalyticsSegment(
            responseContext
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
   * List the user and account segments of your organization. Disabled segments are left out unless
   * `filter[disabled]` is `false`.
   * The list does not include segment definitions; get a segment by ID to see its `data_query`.
   * @param param The request object
   */
  public listProductAnalyticsSegments(
    param: RumAudienceManagementApiListProductAnalyticsSegmentsRequest = {},
    options?: Configuration
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
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listProductAnalyticsSegments(
            responseContext
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
    options?: Configuration
  ): Promise<SegmentPreviewResponse> {
    const requestContextPromise =
      this.requestFactory.previewProductAnalyticsSegment(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.previewProductAnalyticsSegment(
            responseContext
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

  /**
   * Update a segment. Fields that are not set are left unchanged. The `id` in the body must match the one in the
   * path.
   * The response has no body; get the segment to see the result.
   * @param param The request object
   */
  public updateProductAnalyticsSegment(
    param: RumAudienceManagementApiUpdateProductAnalyticsSegmentRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.updateProductAnalyticsSegment(
        param.id,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateProductAnalyticsSegment(
            responseContext
          );
        });
    });
  }
}
