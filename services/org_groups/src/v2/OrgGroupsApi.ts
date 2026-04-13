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
import { OrgGroupCreateRequest } from "./models/OrgGroupCreateRequest";
import { OrgGroupIncludeOption } from "./models/OrgGroupIncludeOption";
import { OrgGroupListResponse } from "./models/OrgGroupListResponse";
import { OrgGroupMembershipBulkUpdateRequest } from "./models/OrgGroupMembershipBulkUpdateRequest";
import { OrgGroupMembershipListResponse } from "./models/OrgGroupMembershipListResponse";
import { OrgGroupMembershipResponse } from "./models/OrgGroupMembershipResponse";
import { OrgGroupMembershipSortOption } from "./models/OrgGroupMembershipSortOption";
import { OrgGroupMembershipUpdateRequest } from "./models/OrgGroupMembershipUpdateRequest";
import { OrgGroupPolicyConfigListResponse } from "./models/OrgGroupPolicyConfigListResponse";
import { OrgGroupPolicyCreateRequest } from "./models/OrgGroupPolicyCreateRequest";
import { OrgGroupPolicyListResponse } from "./models/OrgGroupPolicyListResponse";
import { OrgGroupPolicyOverrideCreateRequest } from "./models/OrgGroupPolicyOverrideCreateRequest";
import { OrgGroupPolicyOverrideListResponse } from "./models/OrgGroupPolicyOverrideListResponse";
import { OrgGroupPolicyOverrideResponse } from "./models/OrgGroupPolicyOverrideResponse";
import { OrgGroupPolicyOverrideSortOption } from "./models/OrgGroupPolicyOverrideSortOption";
import { OrgGroupPolicyOverrideUpdateRequest } from "./models/OrgGroupPolicyOverrideUpdateRequest";
import { OrgGroupPolicyResponse } from "./models/OrgGroupPolicyResponse";
import { OrgGroupPolicySortOption } from "./models/OrgGroupPolicySortOption";
import { OrgGroupPolicyUpdateRequest } from "./models/OrgGroupPolicyUpdateRequest";
import { OrgGroupResponse } from "./models/OrgGroupResponse";
import { OrgGroupSortOption } from "./models/OrgGroupSortOption";
import { OrgGroupUpdateRequest } from "./models/OrgGroupUpdateRequest";
import { version } from "../version";

export class OrgGroupsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("org-groups", version);
    }
  }
  public async bulkUpdateOrgGroupMemberships(
    body: OrgGroupMembershipBulkUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OrgGroupsApi.v2.bulkUpdateOrgGroupMemberships"
      ]
    ) {
      throw new Error(
        "Unstable operation 'bulkUpdateOrgGroupMemberships' is disabled. Enable it by setting `configuration.unstableOperations['OrgGroupsApi.v2.bulkUpdateOrgGroupMemberships'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "bulkUpdateOrgGroupMemberships");
    }

    // Path Params
    const localVarPath = "/api/v2/org_group_memberships/bulk";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgGroupsApi.v2.bulkUpdateOrgGroupMemberships",
      OrgGroupsApi.operationServers,
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
      serialize(body, TypingInfo, "OrgGroupMembershipBulkUpdateRequest", ""),
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

  public async createOrgGroup(
    body: OrgGroupCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["OrgGroupsApi.v2.createOrgGroup"]) {
      throw new Error(
        "Unstable operation 'createOrgGroup' is disabled. Enable it by setting `configuration.unstableOperations['OrgGroupsApi.v2.createOrgGroup'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOrgGroup");
    }

    // Path Params
    const localVarPath = "/api/v2/org_groups";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgGroupsApi.v2.createOrgGroup",
      OrgGroupsApi.operationServers,
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
      serialize(body, TypingInfo, "OrgGroupCreateRequest", ""),
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

  public async createOrgGroupPolicy(
    body: OrgGroupPolicyCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["OrgGroupsApi.v2.createOrgGroupPolicy"]) {
      throw new Error(
        "Unstable operation 'createOrgGroupPolicy' is disabled. Enable it by setting `configuration.unstableOperations['OrgGroupsApi.v2.createOrgGroupPolicy'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOrgGroupPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/org_group_policies";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgGroupsApi.v2.createOrgGroupPolicy",
      OrgGroupsApi.operationServers,
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
      serialize(body, TypingInfo, "OrgGroupPolicyCreateRequest", ""),
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

  public async createOrgGroupPolicyOverride(
    body: OrgGroupPolicyOverrideCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OrgGroupsApi.v2.createOrgGroupPolicyOverride"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createOrgGroupPolicyOverride' is disabled. Enable it by setting `configuration.unstableOperations['OrgGroupsApi.v2.createOrgGroupPolicyOverride'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOrgGroupPolicyOverride");
    }

    // Path Params
    const localVarPath = "/api/v2/org_group_policy_overrides";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgGroupsApi.v2.createOrgGroupPolicyOverride",
      OrgGroupsApi.operationServers,
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
      serialize(body, TypingInfo, "OrgGroupPolicyOverrideCreateRequest", ""),
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

  public async deleteOrgGroup(
    orgGroupId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["OrgGroupsApi.v2.deleteOrgGroup"]) {
      throw new Error(
        "Unstable operation 'deleteOrgGroup' is disabled. Enable it by setting `configuration.unstableOperations['OrgGroupsApi.v2.deleteOrgGroup'] = true`",
      );
    }

    // verify required parameter 'orgGroupId' is not null or undefined
    if (orgGroupId === null || orgGroupId === undefined) {
      throw new RequiredError("orgGroupId", "deleteOrgGroup");
    }

    // Path Params
    const localVarPath = "/api/v2/org_groups/{org_group_id}".replace(
      "{org_group_id}",
      encodeURIComponent(String(orgGroupId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgGroupsApi.v2.deleteOrgGroup",
      OrgGroupsApi.operationServers,
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

  public async deleteOrgGroupPolicy(
    orgGroupPolicyId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["OrgGroupsApi.v2.deleteOrgGroupPolicy"]) {
      throw new Error(
        "Unstable operation 'deleteOrgGroupPolicy' is disabled. Enable it by setting `configuration.unstableOperations['OrgGroupsApi.v2.deleteOrgGroupPolicy'] = true`",
      );
    }

    // verify required parameter 'orgGroupPolicyId' is not null or undefined
    if (orgGroupPolicyId === null || orgGroupPolicyId === undefined) {
      throw new RequiredError("orgGroupPolicyId", "deleteOrgGroupPolicy");
    }

    // Path Params
    const localVarPath =
      "/api/v2/org_group_policies/{org_group_policy_id}".replace(
        "{org_group_policy_id}",
        encodeURIComponent(String(orgGroupPolicyId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgGroupsApi.v2.deleteOrgGroupPolicy",
      OrgGroupsApi.operationServers,
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

  public async deleteOrgGroupPolicyOverride(
    orgGroupPolicyOverrideId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OrgGroupsApi.v2.deleteOrgGroupPolicyOverride"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteOrgGroupPolicyOverride' is disabled. Enable it by setting `configuration.unstableOperations['OrgGroupsApi.v2.deleteOrgGroupPolicyOverride'] = true`",
      );
    }

    // verify required parameter 'orgGroupPolicyOverrideId' is not null or undefined
    if (
      orgGroupPolicyOverrideId === null ||
      orgGroupPolicyOverrideId === undefined
    ) {
      throw new RequiredError(
        "orgGroupPolicyOverrideId",
        "deleteOrgGroupPolicyOverride",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/org_group_policy_overrides/{org_group_policy_override_id}".replace(
        "{org_group_policy_override_id}",
        encodeURIComponent(String(orgGroupPolicyOverrideId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgGroupsApi.v2.deleteOrgGroupPolicyOverride",
      OrgGroupsApi.operationServers,
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

  public async getOrgGroup(
    orgGroupId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["OrgGroupsApi.v2.getOrgGroup"]) {
      throw new Error(
        "Unstable operation 'getOrgGroup' is disabled. Enable it by setting `configuration.unstableOperations['OrgGroupsApi.v2.getOrgGroup'] = true`",
      );
    }

    // verify required parameter 'orgGroupId' is not null or undefined
    if (orgGroupId === null || orgGroupId === undefined) {
      throw new RequiredError("orgGroupId", "getOrgGroup");
    }

    // Path Params
    const localVarPath = "/api/v2/org_groups/{org_group_id}".replace(
      "{org_group_id}",
      encodeURIComponent(String(orgGroupId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgGroupsApi.v2.getOrgGroup",
      OrgGroupsApi.operationServers,
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

  public async getOrgGroupMembership(
    orgGroupMembershipId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["OrgGroupsApi.v2.getOrgGroupMembership"]) {
      throw new Error(
        "Unstable operation 'getOrgGroupMembership' is disabled. Enable it by setting `configuration.unstableOperations['OrgGroupsApi.v2.getOrgGroupMembership'] = true`",
      );
    }

    // verify required parameter 'orgGroupMembershipId' is not null or undefined
    if (orgGroupMembershipId === null || orgGroupMembershipId === undefined) {
      throw new RequiredError("orgGroupMembershipId", "getOrgGroupMembership");
    }

    // Path Params
    const localVarPath =
      "/api/v2/org_group_memberships/{org_group_membership_id}".replace(
        "{org_group_membership_id}",
        encodeURIComponent(String(orgGroupMembershipId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgGroupsApi.v2.getOrgGroupMembership",
      OrgGroupsApi.operationServers,
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

  public async listOrgGroupMemberships(
    filterOrgGroupId?: string,
    filterOrgUuid?: string,
    pageNumber?: number,
    pageSize?: number,
    sort?: OrgGroupMembershipSortOption,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["OrgGroupsApi.v2.listOrgGroupMemberships"]
    ) {
      throw new Error(
        "Unstable operation 'listOrgGroupMemberships' is disabled. Enable it by setting `configuration.unstableOperations['OrgGroupsApi.v2.listOrgGroupMemberships'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/org_group_memberships";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgGroupsApi.v2.listOrgGroupMemberships",
      OrgGroupsApi.operationServers,
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
    if (filterOrgGroupId !== undefined) {
      requestContext.setQueryParam(
        "filter[org_group_id]",
        serialize(filterOrgGroupId, TypingInfo, "string", "uuid"),
        "",
      );
    }
    if (filterOrgUuid !== undefined) {
      requestContext.setQueryParam(
        "filter[org_uuid]",
        serialize(filterOrgUuid, TypingInfo, "string", "uuid"),
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
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "OrgGroupMembershipSortOption", ""),
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

  public async listOrgGroupPolicies(
    filterOrgGroupId: string,
    filterPolicyName?: string,
    pageNumber?: number,
    pageSize?: number,
    sort?: OrgGroupPolicySortOption,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["OrgGroupsApi.v2.listOrgGroupPolicies"]) {
      throw new Error(
        "Unstable operation 'listOrgGroupPolicies' is disabled. Enable it by setting `configuration.unstableOperations['OrgGroupsApi.v2.listOrgGroupPolicies'] = true`",
      );
    }

    // verify required parameter 'filterOrgGroupId' is not null or undefined
    if (filterOrgGroupId === null || filterOrgGroupId === undefined) {
      throw new RequiredError("filterOrgGroupId", "listOrgGroupPolicies");
    }

    // Path Params
    const localVarPath = "/api/v2/org_group_policies";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgGroupsApi.v2.listOrgGroupPolicies",
      OrgGroupsApi.operationServers,
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
    if (filterOrgGroupId !== undefined) {
      requestContext.setQueryParam(
        "filter[org_group_id]",
        serialize(filterOrgGroupId, TypingInfo, "string", "uuid"),
        "",
      );
    }
    if (filterPolicyName !== undefined) {
      requestContext.setQueryParam(
        "filter[policy_name]",
        serialize(filterPolicyName, TypingInfo, "string", ""),
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
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "OrgGroupPolicySortOption", ""),
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

  public async listOrgGroupPolicyConfigs(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["OrgGroupsApi.v2.listOrgGroupPolicyConfigs"]
    ) {
      throw new Error(
        "Unstable operation 'listOrgGroupPolicyConfigs' is disabled. Enable it by setting `configuration.unstableOperations['OrgGroupsApi.v2.listOrgGroupPolicyConfigs'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/org_group_policy_configs";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgGroupsApi.v2.listOrgGroupPolicyConfigs",
      OrgGroupsApi.operationServers,
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

  public async listOrgGroupPolicyOverrides(
    filterOrgGroupId: string,
    filterPolicyId?: string,
    pageNumber?: number,
    pageSize?: number,
    sort?: OrgGroupPolicyOverrideSortOption,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["OrgGroupsApi.v2.listOrgGroupPolicyOverrides"]
    ) {
      throw new Error(
        "Unstable operation 'listOrgGroupPolicyOverrides' is disabled. Enable it by setting `configuration.unstableOperations['OrgGroupsApi.v2.listOrgGroupPolicyOverrides'] = true`",
      );
    }

    // verify required parameter 'filterOrgGroupId' is not null or undefined
    if (filterOrgGroupId === null || filterOrgGroupId === undefined) {
      throw new RequiredError(
        "filterOrgGroupId",
        "listOrgGroupPolicyOverrides",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/org_group_policy_overrides";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgGroupsApi.v2.listOrgGroupPolicyOverrides",
      OrgGroupsApi.operationServers,
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
    if (filterOrgGroupId !== undefined) {
      requestContext.setQueryParam(
        "filter[org_group_id]",
        serialize(filterOrgGroupId, TypingInfo, "string", "uuid"),
        "",
      );
    }
    if (filterPolicyId !== undefined) {
      requestContext.setQueryParam(
        "filter[policy_id]",
        serialize(filterPolicyId, TypingInfo, "string", "uuid"),
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
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "OrgGroupPolicyOverrideSortOption", ""),
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

  public async listOrgGroups(
    pageNumber?: number,
    pageSize?: number,
    sort?: OrgGroupSortOption,
    include?: Array<OrgGroupIncludeOption>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["OrgGroupsApi.v2.listOrgGroups"]) {
      throw new Error(
        "Unstable operation 'listOrgGroups' is disabled. Enable it by setting `configuration.unstableOperations['OrgGroupsApi.v2.listOrgGroups'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/org_groups";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgGroupsApi.v2.listOrgGroups",
      OrgGroupsApi.operationServers,
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
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "OrgGroupSortOption", ""),
        "",
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "Array<OrgGroupIncludeOption>", ""),
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

  public async updateOrgGroup(
    orgGroupId: string,
    body: OrgGroupUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["OrgGroupsApi.v2.updateOrgGroup"]) {
      throw new Error(
        "Unstable operation 'updateOrgGroup' is disabled. Enable it by setting `configuration.unstableOperations['OrgGroupsApi.v2.updateOrgGroup'] = true`",
      );
    }

    // verify required parameter 'orgGroupId' is not null or undefined
    if (orgGroupId === null || orgGroupId === undefined) {
      throw new RequiredError("orgGroupId", "updateOrgGroup");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateOrgGroup");
    }

    // Path Params
    const localVarPath = "/api/v2/org_groups/{org_group_id}".replace(
      "{org_group_id}",
      encodeURIComponent(String(orgGroupId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgGroupsApi.v2.updateOrgGroup",
      OrgGroupsApi.operationServers,
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
      serialize(body, TypingInfo, "OrgGroupUpdateRequest", ""),
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

  public async updateOrgGroupMembership(
    orgGroupMembershipId: string,
    body: OrgGroupMembershipUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["OrgGroupsApi.v2.updateOrgGroupMembership"]
    ) {
      throw new Error(
        "Unstable operation 'updateOrgGroupMembership' is disabled. Enable it by setting `configuration.unstableOperations['OrgGroupsApi.v2.updateOrgGroupMembership'] = true`",
      );
    }

    // verify required parameter 'orgGroupMembershipId' is not null or undefined
    if (orgGroupMembershipId === null || orgGroupMembershipId === undefined) {
      throw new RequiredError(
        "orgGroupMembershipId",
        "updateOrgGroupMembership",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateOrgGroupMembership");
    }

    // Path Params
    const localVarPath =
      "/api/v2/org_group_memberships/{org_group_membership_id}".replace(
        "{org_group_membership_id}",
        encodeURIComponent(String(orgGroupMembershipId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgGroupsApi.v2.updateOrgGroupMembership",
      OrgGroupsApi.operationServers,
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
      serialize(body, TypingInfo, "OrgGroupMembershipUpdateRequest", ""),
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

  public async updateOrgGroupPolicy(
    orgGroupPolicyId: string,
    body: OrgGroupPolicyUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["OrgGroupsApi.v2.updateOrgGroupPolicy"]) {
      throw new Error(
        "Unstable operation 'updateOrgGroupPolicy' is disabled. Enable it by setting `configuration.unstableOperations['OrgGroupsApi.v2.updateOrgGroupPolicy'] = true`",
      );
    }

    // verify required parameter 'orgGroupPolicyId' is not null or undefined
    if (orgGroupPolicyId === null || orgGroupPolicyId === undefined) {
      throw new RequiredError("orgGroupPolicyId", "updateOrgGroupPolicy");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateOrgGroupPolicy");
    }

    // Path Params
    const localVarPath =
      "/api/v2/org_group_policies/{org_group_policy_id}".replace(
        "{org_group_policy_id}",
        encodeURIComponent(String(orgGroupPolicyId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgGroupsApi.v2.updateOrgGroupPolicy",
      OrgGroupsApi.operationServers,
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
      serialize(body, TypingInfo, "OrgGroupPolicyUpdateRequest", ""),
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

  public async updateOrgGroupPolicyOverride(
    orgGroupPolicyOverrideId: string,
    body: OrgGroupPolicyOverrideUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "OrgGroupsApi.v2.updateOrgGroupPolicyOverride"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateOrgGroupPolicyOverride' is disabled. Enable it by setting `configuration.unstableOperations['OrgGroupsApi.v2.updateOrgGroupPolicyOverride'] = true`",
      );
    }

    // verify required parameter 'orgGroupPolicyOverrideId' is not null or undefined
    if (
      orgGroupPolicyOverrideId === null ||
      orgGroupPolicyOverrideId === undefined
    ) {
      throw new RequiredError(
        "orgGroupPolicyOverrideId",
        "updateOrgGroupPolicyOverride",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateOrgGroupPolicyOverride");
    }

    // Path Params
    const localVarPath =
      "/api/v2/org_group_policy_overrides/{org_group_policy_override_id}".replace(
        "{org_group_policy_override_id}",
        encodeURIComponent(String(orgGroupPolicyOverrideId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgGroupsApi.v2.updateOrgGroupPolicyOverride",
      OrgGroupsApi.operationServers,
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
      serialize(body, TypingInfo, "OrgGroupPolicyOverrideUpdateRequest", ""),
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

export class OrgGroupsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to bulkUpdateOrgGroupMemberships
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkUpdateOrgGroupMemberships(
    response: ResponseContext,
  ): Promise<OrgGroupMembershipListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgGroupMembershipListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupMembershipListResponse",
      ) as OrgGroupMembershipListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: OrgGroupMembershipListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupMembershipListResponse",
        "",
      ) as OrgGroupMembershipListResponse;
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
   * @params response Response returned by the server for a request to createOrgGroup
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOrgGroup(
    response: ResponseContext,
  ): Promise<OrgGroupResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: OrgGroupResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupResponse",
      ) as OrgGroupResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: OrgGroupResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupResponse",
        "",
      ) as OrgGroupResponse;
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
   * @params response Response returned by the server for a request to createOrgGroupPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOrgGroupPolicy(
    response: ResponseContext,
  ): Promise<OrgGroupPolicyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: OrgGroupPolicyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupPolicyResponse",
      ) as OrgGroupPolicyResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: OrgGroupPolicyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupPolicyResponse",
        "",
      ) as OrgGroupPolicyResponse;
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
   * @params response Response returned by the server for a request to createOrgGroupPolicyOverride
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOrgGroupPolicyOverride(
    response: ResponseContext,
  ): Promise<OrgGroupPolicyOverrideResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: OrgGroupPolicyOverrideResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupPolicyOverrideResponse",
      ) as OrgGroupPolicyOverrideResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: OrgGroupPolicyOverrideResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupPolicyOverrideResponse",
        "",
      ) as OrgGroupPolicyOverrideResponse;
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
   * @params response Response returned by the server for a request to deleteOrgGroup
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOrgGroup(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
   * @params response Response returned by the server for a request to deleteOrgGroupPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOrgGroupPolicy(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
   * @params response Response returned by the server for a request to deleteOrgGroupPolicyOverride
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOrgGroupPolicyOverride(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
   * @params response Response returned by the server for a request to getOrgGroup
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOrgGroup(
    response: ResponseContext,
  ): Promise<OrgGroupResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgGroupResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupResponse",
      ) as OrgGroupResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: OrgGroupResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupResponse",
        "",
      ) as OrgGroupResponse;
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
   * @params response Response returned by the server for a request to getOrgGroupMembership
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOrgGroupMembership(
    response: ResponseContext,
  ): Promise<OrgGroupMembershipResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgGroupMembershipResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupMembershipResponse",
      ) as OrgGroupMembershipResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: OrgGroupMembershipResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupMembershipResponse",
        "",
      ) as OrgGroupMembershipResponse;
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
   * @params response Response returned by the server for a request to listOrgGroupMemberships
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOrgGroupMemberships(
    response: ResponseContext,
  ): Promise<OrgGroupMembershipListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgGroupMembershipListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupMembershipListResponse",
      ) as OrgGroupMembershipListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: OrgGroupMembershipListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupMembershipListResponse",
        "",
      ) as OrgGroupMembershipListResponse;
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
   * @params response Response returned by the server for a request to listOrgGroupPolicies
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOrgGroupPolicies(
    response: ResponseContext,
  ): Promise<OrgGroupPolicyListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgGroupPolicyListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupPolicyListResponse",
      ) as OrgGroupPolicyListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: OrgGroupPolicyListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupPolicyListResponse",
        "",
      ) as OrgGroupPolicyListResponse;
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
   * @params response Response returned by the server for a request to listOrgGroupPolicyConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOrgGroupPolicyConfigs(
    response: ResponseContext,
  ): Promise<OrgGroupPolicyConfigListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgGroupPolicyConfigListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupPolicyConfigListResponse",
      ) as OrgGroupPolicyConfigListResponse;
      return body;
    }
    if (response.httpStatusCode === 401 || response.httpStatusCode === 403) {
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
      const body: OrgGroupPolicyConfigListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupPolicyConfigListResponse",
        "",
      ) as OrgGroupPolicyConfigListResponse;
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
   * @params response Response returned by the server for a request to listOrgGroupPolicyOverrides
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOrgGroupPolicyOverrides(
    response: ResponseContext,
  ): Promise<OrgGroupPolicyOverrideListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgGroupPolicyOverrideListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupPolicyOverrideListResponse",
      ) as OrgGroupPolicyOverrideListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: OrgGroupPolicyOverrideListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupPolicyOverrideListResponse",
        "",
      ) as OrgGroupPolicyOverrideListResponse;
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
   * @params response Response returned by the server for a request to listOrgGroups
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOrgGroups(
    response: ResponseContext,
  ): Promise<OrgGroupListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgGroupListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupListResponse",
      ) as OrgGroupListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: OrgGroupListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupListResponse",
        "",
      ) as OrgGroupListResponse;
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
   * @params response Response returned by the server for a request to updateOrgGroup
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOrgGroup(
    response: ResponseContext,
  ): Promise<OrgGroupResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgGroupResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupResponse",
      ) as OrgGroupResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: OrgGroupResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupResponse",
        "",
      ) as OrgGroupResponse;
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
   * @params response Response returned by the server for a request to updateOrgGroupMembership
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOrgGroupMembership(
    response: ResponseContext,
  ): Promise<OrgGroupMembershipResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgGroupMembershipResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupMembershipResponse",
      ) as OrgGroupMembershipResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: OrgGroupMembershipResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupMembershipResponse",
        "",
      ) as OrgGroupMembershipResponse;
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
   * @params response Response returned by the server for a request to updateOrgGroupPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOrgGroupPolicy(
    response: ResponseContext,
  ): Promise<OrgGroupPolicyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgGroupPolicyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupPolicyResponse",
      ) as OrgGroupPolicyResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: OrgGroupPolicyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupPolicyResponse",
        "",
      ) as OrgGroupPolicyResponse;
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
   * @params response Response returned by the server for a request to updateOrgGroupPolicyOverride
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOrgGroupPolicyOverride(
    response: ResponseContext,
  ): Promise<OrgGroupPolicyOverrideResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgGroupPolicyOverrideResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupPolicyOverrideResponse",
      ) as OrgGroupPolicyOverrideResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: OrgGroupPolicyOverrideResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgGroupPolicyOverrideResponse",
        "",
      ) as OrgGroupPolicyOverrideResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface OrgGroupsApiBulkUpdateOrgGroupMembershipsRequest {
  /**
   * @type OrgGroupMembershipBulkUpdateRequest
   */
  body: OrgGroupMembershipBulkUpdateRequest;
}

export interface OrgGroupsApiCreateOrgGroupRequest {
  /**
   * @type OrgGroupCreateRequest
   */
  body: OrgGroupCreateRequest;
}

export interface OrgGroupsApiCreateOrgGroupPolicyRequest {
  /**
   * @type OrgGroupPolicyCreateRequest
   */
  body: OrgGroupPolicyCreateRequest;
}

export interface OrgGroupsApiCreateOrgGroupPolicyOverrideRequest {
  /**
   * @type OrgGroupPolicyOverrideCreateRequest
   */
  body: OrgGroupPolicyOverrideCreateRequest;
}

export interface OrgGroupsApiDeleteOrgGroupRequest {
  /**
   * The ID of the org group.
   * @type string
   */
  orgGroupId: string;
}

export interface OrgGroupsApiDeleteOrgGroupPolicyRequest {
  /**
   * The ID of the org group policy.
   * @type string
   */
  orgGroupPolicyId: string;
}

export interface OrgGroupsApiDeleteOrgGroupPolicyOverrideRequest {
  /**
   * The ID of the org group policy override.
   * @type string
   */
  orgGroupPolicyOverrideId: string;
}

export interface OrgGroupsApiGetOrgGroupRequest {
  /**
   * The ID of the org group.
   * @type string
   */
  orgGroupId: string;
}

export interface OrgGroupsApiGetOrgGroupMembershipRequest {
  /**
   * The ID of the org group membership.
   * @type string
   */
  orgGroupMembershipId: string;
}

export interface OrgGroupsApiListOrgGroupMembershipsRequest {
  /**
   * Filter memberships by org group ID. Required when `filter[org_uuid]` is not provided.
   * @type string
   */
  filterOrgGroupId?: string;
  /**
   * Filter memberships by org UUID. Returns a single-item list.
   * @type string
   */
  filterOrgUuid?: string;
  /**
   * The page number to return.
   * @type number
   */
  pageNumber?: number;
  /**
   * The number of items per page. Maximum is 1000.
   * @type number
   */
  pageSize?: number;
  /**
   * Field to sort memberships by. Supported values: `name`, `uuid`, `-name`, `-uuid`. Defaults to `uuid`.
   * @type OrgGroupMembershipSortOption
   */
  sort?: OrgGroupMembershipSortOption;
}

export interface OrgGroupsApiListOrgGroupPoliciesRequest {
  /**
   * Filter policies by org group ID.
   * @type string
   */
  filterOrgGroupId: string;
  /**
   * Filter policies by policy name.
   * @type string
   */
  filterPolicyName?: string;
  /**
   * The page number to return.
   * @type number
   */
  pageNumber?: number;
  /**
   * The number of items per page. Maximum is 1000.
   * @type number
   */
  pageSize?: number;
  /**
   * Field to sort policies by. Supported values: `id`, `name`, `-id`, `-name`. Defaults to `id`.
   * @type OrgGroupPolicySortOption
   */
  sort?: OrgGroupPolicySortOption;
}

export interface OrgGroupsApiListOrgGroupPolicyOverridesRequest {
  /**
   * Filter policy overrides by org group ID.
   * @type string
   */
  filterOrgGroupId: string;
  /**
   * Filter policy overrides by policy ID.
   * @type string
   */
  filterPolicyId?: string;
  /**
   * The page number to return.
   * @type number
   */
  pageNumber?: number;
  /**
   * The number of items per page. Maximum is 1000.
   * @type number
   */
  pageSize?: number;
  /**
   * Field to sort overrides by. Supported values: `id`, `org_uuid`, `-id`, `-org_uuid`. Defaults to `id`.
   * @type OrgGroupPolicyOverrideSortOption
   */
  sort?: OrgGroupPolicyOverrideSortOption;
}

export interface OrgGroupsApiListOrgGroupsRequest {
  /**
   * The page number to return.
   * @type number
   */
  pageNumber?: number;
  /**
   * The number of items per page. Maximum is 1000.
   * @type number
   */
  pageSize?: number;
  /**
   * Field to sort org groups by. Supported values: `name`, `uuid`, `-name`, `-uuid`. Defaults to `uuid`.
   * @type OrgGroupSortOption
   */
  sort?: OrgGroupSortOption;
  /**
   * List of related resources to include.
   * @type Array<OrgGroupIncludeOption>
   */
  include?: Array<OrgGroupIncludeOption>;
}

export interface OrgGroupsApiUpdateOrgGroupRequest {
  /**
   * The ID of the org group.
   * @type string
   */
  orgGroupId: string;
  /**
   * @type OrgGroupUpdateRequest
   */
  body: OrgGroupUpdateRequest;
}

export interface OrgGroupsApiUpdateOrgGroupMembershipRequest {
  /**
   * The ID of the org group membership.
   * @type string
   */
  orgGroupMembershipId: string;
  /**
   * @type OrgGroupMembershipUpdateRequest
   */
  body: OrgGroupMembershipUpdateRequest;
}

export interface OrgGroupsApiUpdateOrgGroupPolicyRequest {
  /**
   * The ID of the org group policy.
   * @type string
   */
  orgGroupPolicyId: string;
  /**
   * @type OrgGroupPolicyUpdateRequest
   */
  body: OrgGroupPolicyUpdateRequest;
}

export interface OrgGroupsApiUpdateOrgGroupPolicyOverrideRequest {
  /**
   * The ID of the org group policy override.
   * @type string
   */
  orgGroupPolicyOverrideId: string;
  /**
   * @type OrgGroupPolicyOverrideUpdateRequest
   */
  body: OrgGroupPolicyOverrideUpdateRequest;
}

export class OrgGroupsApi {
  private requestFactory: OrgGroupsApiRequestFactory;
  private responseProcessor: OrgGroupsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: OrgGroupsApiRequestFactory,
    responseProcessor?: OrgGroupsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new OrgGroupsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new OrgGroupsApiResponseProcessor();
  }

  /**
   * Move a batch of organizations from one org group to another. This is an atomic operation. Maximum 100 orgs per request.
   * @param param The request object
   */
  public bulkUpdateOrgGroupMemberships(
    param: OrgGroupsApiBulkUpdateOrgGroupMembershipsRequest,
    options?: Configuration,
  ): Promise<OrgGroupMembershipListResponse> {
    const requestContextPromise =
      this.requestFactory.bulkUpdateOrgGroupMemberships(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkUpdateOrgGroupMemberships(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a new organization group.
   * @param param The request object
   */
  public createOrgGroup(
    param: OrgGroupsApiCreateOrgGroupRequest,
    options?: Configuration,
  ): Promise<OrgGroupResponse> {
    const requestContextPromise = this.requestFactory.createOrgGroup(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOrgGroup(responseContext);
        });
    });
  }

  /**
   * Create a new policy for an organization group.
   * @param param The request object
   */
  public createOrgGroupPolicy(
    param: OrgGroupsApiCreateOrgGroupPolicyRequest,
    options?: Configuration,
  ): Promise<OrgGroupPolicyResponse> {
    const requestContextPromise = this.requestFactory.createOrgGroupPolicy(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOrgGroupPolicy(responseContext);
        });
    });
  }

  /**
   * Create a new policy override for an organization within an org group.
   * @param param The request object
   */
  public createOrgGroupPolicyOverride(
    param: OrgGroupsApiCreateOrgGroupPolicyOverrideRequest,
    options?: Configuration,
  ): Promise<OrgGroupPolicyOverrideResponse> {
    const requestContextPromise =
      this.requestFactory.createOrgGroupPolicyOverride(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOrgGroupPolicyOverride(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete an organization group by its ID.
   * @param param The request object
   */
  public deleteOrgGroup(
    param: OrgGroupsApiDeleteOrgGroupRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteOrgGroup(
      param.orgGroupId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOrgGroup(responseContext);
        });
    });
  }

  /**
   * Delete an organization group policy by its ID.
   * @param param The request object
   */
  public deleteOrgGroupPolicy(
    param: OrgGroupsApiDeleteOrgGroupPolicyRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteOrgGroupPolicy(
      param.orgGroupPolicyId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOrgGroupPolicy(responseContext);
        });
    });
  }

  /**
   * Delete an organization group policy override by its ID.
   * @param param The request object
   */
  public deleteOrgGroupPolicyOverride(
    param: OrgGroupsApiDeleteOrgGroupPolicyOverrideRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteOrgGroupPolicyOverride(
        param.orgGroupPolicyOverrideId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOrgGroupPolicyOverride(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a specific organization group by its ID.
   * @param param The request object
   */
  public getOrgGroup(
    param: OrgGroupsApiGetOrgGroupRequest,
    options?: Configuration,
  ): Promise<OrgGroupResponse> {
    const requestContextPromise = this.requestFactory.getOrgGroup(
      param.orgGroupId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOrgGroup(responseContext);
        });
    });
  }

  /**
   * Get a specific organization group membership by its ID.
   * @param param The request object
   */
  public getOrgGroupMembership(
    param: OrgGroupsApiGetOrgGroupMembershipRequest,
    options?: Configuration,
  ): Promise<OrgGroupMembershipResponse> {
    const requestContextPromise = this.requestFactory.getOrgGroupMembership(
      param.orgGroupMembershipId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOrgGroupMembership(responseContext);
        });
    });
  }

  /**
   * List organization group memberships. Filter by org group ID or org UUID. At least one of `filter[org_group_id]` or `filter[org_uuid]` must be provided. When filtering by org UUID, returns a single-item list with the membership for that org.
   * @param param The request object
   */
  public listOrgGroupMemberships(
    param: OrgGroupsApiListOrgGroupMembershipsRequest = {},
    options?: Configuration,
  ): Promise<OrgGroupMembershipListResponse> {
    const requestContextPromise = this.requestFactory.listOrgGroupMemberships(
      param.filterOrgGroupId,
      param.filterOrgUuid,
      param.pageNumber,
      param.pageSize,
      param.sort,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOrgGroupMemberships(
            responseContext,
          );
        });
    });
  }

  /**
   * List policies for an organization group. Requires a filter on org group ID.
   * @param param The request object
   */
  public listOrgGroupPolicies(
    param: OrgGroupsApiListOrgGroupPoliciesRequest,
    options?: Configuration,
  ): Promise<OrgGroupPolicyListResponse> {
    const requestContextPromise = this.requestFactory.listOrgGroupPolicies(
      param.filterOrgGroupId,
      param.filterPolicyName,
      param.pageNumber,
      param.pageSize,
      param.sort,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOrgGroupPolicies(responseContext);
        });
    });
  }

  /**
   * List all org configs that are eligible to be used as organization group policies.
   * @param param The request object
   */
  public listOrgGroupPolicyConfigs(
    options?: Configuration,
  ): Promise<OrgGroupPolicyConfigListResponse> {
    const requestContextPromise =
      this.requestFactory.listOrgGroupPolicyConfigs(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOrgGroupPolicyConfigs(
            responseContext,
          );
        });
    });
  }

  /**
   * List policy overrides for an organization group. Requires a filter on org group ID. Optionally filter by policy ID.
   * @param param The request object
   */
  public listOrgGroupPolicyOverrides(
    param: OrgGroupsApiListOrgGroupPolicyOverridesRequest,
    options?: Configuration,
  ): Promise<OrgGroupPolicyOverrideListResponse> {
    const requestContextPromise =
      this.requestFactory.listOrgGroupPolicyOverrides(
        param.filterOrgGroupId,
        param.filterPolicyId,
        param.pageNumber,
        param.pageSize,
        param.sort,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOrgGroupPolicyOverrides(
            responseContext,
          );
        });
    });
  }

  /**
   * List all organization groups that the requesting organization has access to.
   * @param param The request object
   */
  public listOrgGroups(
    param: OrgGroupsApiListOrgGroupsRequest = {},
    options?: Configuration,
  ): Promise<OrgGroupListResponse> {
    const requestContextPromise = this.requestFactory.listOrgGroups(
      param.pageNumber,
      param.pageSize,
      param.sort,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOrgGroups(responseContext);
        });
    });
  }

  /**
   * Update the name of an existing organization group.
   * @param param The request object
   */
  public updateOrgGroup(
    param: OrgGroupsApiUpdateOrgGroupRequest,
    options?: Configuration,
  ): Promise<OrgGroupResponse> {
    const requestContextPromise = this.requestFactory.updateOrgGroup(
      param.orgGroupId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOrgGroup(responseContext);
        });
    });
  }

  /**
   * Move an organization to a different org group by updating its membership.
   * @param param The request object
   */
  public updateOrgGroupMembership(
    param: OrgGroupsApiUpdateOrgGroupMembershipRequest,
    options?: Configuration,
  ): Promise<OrgGroupMembershipResponse> {
    const requestContextPromise = this.requestFactory.updateOrgGroupMembership(
      param.orgGroupMembershipId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOrgGroupMembership(
            responseContext,
          );
        });
    });
  }

  /**
   * Update the content of an existing organization group policy.
   * @param param The request object
   */
  public updateOrgGroupPolicy(
    param: OrgGroupsApiUpdateOrgGroupPolicyRequest,
    options?: Configuration,
  ): Promise<OrgGroupPolicyResponse> {
    const requestContextPromise = this.requestFactory.updateOrgGroupPolicy(
      param.orgGroupPolicyId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOrgGroupPolicy(responseContext);
        });
    });
  }

  /**
   * Update an existing organization group policy override.
   * @param param The request object
   */
  public updateOrgGroupPolicyOverride(
    param: OrgGroupsApiUpdateOrgGroupPolicyOverrideRequest,
    options?: Configuration,
  ): Promise<OrgGroupPolicyOverrideResponse> {
    const requestContextPromise =
      this.requestFactory.updateOrgGroupPolicyOverride(
        param.orgGroupPolicyOverrideId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOrgGroupPolicyOverride(
            responseContext,
          );
        });
    });
  }
}
