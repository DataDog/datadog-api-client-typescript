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
import { AddMemberTeamRequest } from "./models/AddMemberTeamRequest";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { GetTeamMembershipsSort } from "./models/GetTeamMembershipsSort";
import { ListTeamsInclude } from "./models/ListTeamsInclude";
import { ListTeamsSort } from "./models/ListTeamsSort";
import { Team } from "./models/Team";
import { TeamConnection } from "./models/TeamConnection";
import { TeamConnectionCreateRequest } from "./models/TeamConnectionCreateRequest";
import { TeamConnectionDeleteRequest } from "./models/TeamConnectionDeleteRequest";
import { TeamConnectionsResponse } from "./models/TeamConnectionsResponse";
import { TeamCreateRequest } from "./models/TeamCreateRequest";
import { TeamHierarchyLink } from "./models/TeamHierarchyLink";
import { TeamHierarchyLinkCreateRequest } from "./models/TeamHierarchyLinkCreateRequest";
import { TeamHierarchyLinkResponse } from "./models/TeamHierarchyLinkResponse";
import { TeamHierarchyLinksResponse } from "./models/TeamHierarchyLinksResponse";
import { TeamLinkCreateRequest } from "./models/TeamLinkCreateRequest";
import { TeamLinkResponse } from "./models/TeamLinkResponse";
import { TeamLinksResponse } from "./models/TeamLinksResponse";
import { TeamNotificationRuleRequest } from "./models/TeamNotificationRuleRequest";
import { TeamNotificationRuleResponse } from "./models/TeamNotificationRuleResponse";
import { TeamNotificationRulesResponse } from "./models/TeamNotificationRulesResponse";
import { TeamPermissionSettingResponse } from "./models/TeamPermissionSettingResponse";
import { TeamPermissionSettingsResponse } from "./models/TeamPermissionSettingsResponse";
import { TeamPermissionSettingUpdateRequest } from "./models/TeamPermissionSettingUpdateRequest";
import { TeamResponse } from "./models/TeamResponse";
import { TeamsField } from "./models/TeamsField";
import { TeamsResponse } from "./models/TeamsResponse";
import { TeamSyncAttributesSource } from "./models/TeamSyncAttributesSource";
import { TeamSyncRequest } from "./models/TeamSyncRequest";
import { TeamSyncResponse } from "./models/TeamSyncResponse";
import { TeamUpdateRequest } from "./models/TeamUpdateRequest";
import { UserTeam } from "./models/UserTeam";
import { UserTeamRequest } from "./models/UserTeamRequest";
import { UserTeamResponse } from "./models/UserTeamResponse";
import { UserTeamsResponse } from "./models/UserTeamsResponse";
import { UserTeamUpdateRequest } from "./models/UserTeamUpdateRequest";
import { version } from "../version";

export class TeamsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("teams", version);
    }
  }
  public async addMemberTeam(
    superTeamId: string,
    body: AddMemberTeamRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["TeamsApi.v2.addMemberTeam"]) {
      throw new Error(
        "Unstable operation 'addMemberTeam' is disabled. Enable it by setting `configuration.unstableOperations['TeamsApi.v2.addMemberTeam'] = true`",
      );
    }

    // verify required parameter 'superTeamId' is not null or undefined
    if (superTeamId === null || superTeamId === undefined) {
      throw new RequiredError("superTeamId", "addMemberTeam");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "addMemberTeam");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{super_team_id}/member_teams".replace(
      "{super_team_id}",
      encodeURIComponent(String(superTeamId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.addMemberTeam",
      TeamsApi.operationServers,
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
      serialize(body, TypingInfo, "AddMemberTeamRequest", ""),
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

  public async addTeamHierarchyLink(
    body: TeamHierarchyLinkCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "addTeamHierarchyLink");
    }

    // Path Params
    const localVarPath = "/api/v2/team-hierarchy-links";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.addTeamHierarchyLink",
      TeamsApi.operationServers,
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
      serialize(body, TypingInfo, "TeamHierarchyLinkCreateRequest", ""),
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

  public async createTeam(
    body: TeamCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTeam");
    }

    // Path Params
    const localVarPath = "/api/v2/team";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.createTeam",
      TeamsApi.operationServers,
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
      serialize(body, TypingInfo, "TeamCreateRequest", ""),
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

  public async createTeamConnections(
    body: TeamConnectionCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTeamConnections");
    }

    // Path Params
    const localVarPath = "/api/v2/team/connections";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.createTeamConnections",
      TeamsApi.operationServers,
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
      serialize(body, TypingInfo, "TeamConnectionCreateRequest", ""),
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

  public async createTeamLink(
    teamId: string,
    body: TeamLinkCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "createTeamLink");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTeamLink");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}/links".replace(
      "{team_id}",
      encodeURIComponent(String(teamId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.createTeamLink",
      TeamsApi.operationServers,
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
      serialize(body, TypingInfo, "TeamLinkCreateRequest", ""),
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

  public async createTeamMembership(
    teamId: string,
    body: UserTeamRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "createTeamMembership");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTeamMembership");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}/memberships".replace(
      "{team_id}",
      encodeURIComponent(String(teamId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.createTeamMembership",
      TeamsApi.operationServers,
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
      serialize(body, TypingInfo, "UserTeamRequest", ""),
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

  public async createTeamNotificationRule(
    teamId: string,
    body: TeamNotificationRuleRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "createTeamNotificationRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTeamNotificationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}/notification-rules".replace(
      "{team_id}",
      encodeURIComponent(String(teamId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.createTeamNotificationRule",
      TeamsApi.operationServers,
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
      serialize(body, TypingInfo, "TeamNotificationRuleRequest", ""),
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

  public async deleteTeam(
    teamId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "deleteTeam");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}".replace(
      "{team_id}",
      encodeURIComponent(String(teamId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.deleteTeam",
      TeamsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteTeamConnections(
    body: TeamConnectionDeleteRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteTeamConnections");
    }

    // Path Params
    const localVarPath = "/api/v2/team/connections";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.deleteTeamConnections",
      TeamsApi.operationServers,
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
      serialize(body, TypingInfo, "TeamConnectionDeleteRequest", ""),
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

  public async deleteTeamLink(
    teamId: string,
    linkId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "deleteTeamLink");
    }

    // verify required parameter 'linkId' is not null or undefined
    if (linkId === null || linkId === undefined) {
      throw new RequiredError("linkId", "deleteTeamLink");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}/links/{link_id}"
      .replace("{team_id}", encodeURIComponent(String(teamId)))
      .replace("{link_id}", encodeURIComponent(String(linkId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.deleteTeamLink",
      TeamsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteTeamMembership(
    teamId: string,
    userId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "deleteTeamMembership");
    }

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError("userId", "deleteTeamMembership");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}/memberships/{user_id}"
      .replace("{team_id}", encodeURIComponent(String(teamId)))
      .replace("{user_id}", encodeURIComponent(String(userId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.deleteTeamMembership",
      TeamsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteTeamNotificationRule(
    teamId: string,
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "deleteTeamNotificationRule");
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "deleteTeamNotificationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}/notification-rules/{rule_id}"
      .replace("{team_id}", encodeURIComponent(String(teamId)))
      .replace("{rule_id}", encodeURIComponent(String(ruleId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.deleteTeamNotificationRule",
      TeamsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getTeam(
    teamId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "getTeam");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}".replace(
      "{team_id}",
      encodeURIComponent(String(teamId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.getTeam",
      TeamsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getTeamHierarchyLink(
    linkId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'linkId' is not null or undefined
    if (linkId === null || linkId === undefined) {
      throw new RequiredError("linkId", "getTeamHierarchyLink");
    }

    // Path Params
    const localVarPath = "/api/v2/team-hierarchy-links/{link_id}".replace(
      "{link_id}",
      encodeURIComponent(String(linkId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.getTeamHierarchyLink",
      TeamsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getTeamLink(
    teamId: string,
    linkId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "getTeamLink");
    }

    // verify required parameter 'linkId' is not null or undefined
    if (linkId === null || linkId === undefined) {
      throw new RequiredError("linkId", "getTeamLink");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}/links/{link_id}"
      .replace("{team_id}", encodeURIComponent(String(teamId)))
      .replace("{link_id}", encodeURIComponent(String(linkId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.getTeamLink",
      TeamsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getTeamLinks(
    teamId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "getTeamLinks");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}/links".replace(
      "{team_id}",
      encodeURIComponent(String(teamId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.getTeamLinks",
      TeamsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getTeamMemberships(
    teamId: string,
    pageSize?: number,
    pageNumber?: number,
    sort?: GetTeamMembershipsSort,
    filterKeyword?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "getTeamMemberships");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}/memberships".replace(
      "{team_id}",
      encodeURIComponent(String(teamId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.getTeamMemberships",
      TeamsApi.operationServers,
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
        serialize(sort, TypingInfo, "GetTeamMembershipsSort", ""),
        "",
      );
    }
    if (filterKeyword !== undefined) {
      requestContext.setQueryParam(
        "filter[keyword]",
        serialize(filterKeyword, TypingInfo, "string", ""),
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

  public async getTeamNotificationRule(
    teamId: string,
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "getTeamNotificationRule");
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "getTeamNotificationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}/notification-rules/{rule_id}"
      .replace("{team_id}", encodeURIComponent(String(teamId)))
      .replace("{rule_id}", encodeURIComponent(String(ruleId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.getTeamNotificationRule",
      TeamsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getTeamNotificationRules(
    teamId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "getTeamNotificationRules");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}/notification-rules".replace(
      "{team_id}",
      encodeURIComponent(String(teamId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.getTeamNotificationRules",
      TeamsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getTeamPermissionSettings(
    teamId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "getTeamPermissionSettings");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}/permission-settings".replace(
      "{team_id}",
      encodeURIComponent(String(teamId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.getTeamPermissionSettings",
      TeamsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getTeamSync(
    filterSource: TeamSyncAttributesSource,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'filterSource' is not null or undefined
    if (filterSource === null || filterSource === undefined) {
      throw new RequiredError("filterSource", "getTeamSync");
    }

    // Path Params
    const localVarPath = "/api/v2/team/sync";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.getTeamSync",
      TeamsApi.operationServers,
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
    if (filterSource !== undefined) {
      requestContext.setQueryParam(
        "filter[source]",
        serialize(filterSource, TypingInfo, "TeamSyncAttributesSource", ""),
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

  public async getUserMemberships(
    userUuid: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userUuid' is not null or undefined
    if (userUuid === null || userUuid === undefined) {
      throw new RequiredError("userUuid", "getUserMemberships");
    }

    // Path Params
    const localVarPath = "/api/v2/users/{user_uuid}/memberships".replace(
      "{user_uuid}",
      encodeURIComponent(String(userUuid)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.getUserMemberships",
      TeamsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listMemberTeams(
    superTeamId: string,
    pageSize?: number,
    pageNumber?: number,
    fieldsTeam?: Array<TeamsField>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["TeamsApi.v2.listMemberTeams"]) {
      throw new Error(
        "Unstable operation 'listMemberTeams' is disabled. Enable it by setting `configuration.unstableOperations['TeamsApi.v2.listMemberTeams'] = true`",
      );
    }

    // verify required parameter 'superTeamId' is not null or undefined
    if (superTeamId === null || superTeamId === undefined) {
      throw new RequiredError("superTeamId", "listMemberTeams");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{super_team_id}/member_teams".replace(
      "{super_team_id}",
      encodeURIComponent(String(superTeamId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.listMemberTeams",
      TeamsApi.operationServers,
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
    if (fieldsTeam !== undefined) {
      requestContext.setQueryParam(
        "fields[team]",
        serialize(fieldsTeam, TypingInfo, "Array<TeamsField>", ""),
        "csv",
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

  public async listTeamConnections(
    pageSize?: number,
    pageNumber?: number,
    filterSources?: Array<string>,
    filterTeamIds?: Array<string>,
    filterConnectedTeamIds?: Array<string>,
    filterConnectionIds?: Array<string>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/team/connections";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.listTeamConnections",
      TeamsApi.operationServers,
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
    if (filterSources !== undefined) {
      requestContext.setQueryParam(
        "filter[sources]",
        serialize(filterSources, TypingInfo, "Array<string>", ""),
        "csv",
      );
    }
    if (filterTeamIds !== undefined) {
      requestContext.setQueryParam(
        "filter[team_ids]",
        serialize(filterTeamIds, TypingInfo, "Array<string>", ""),
        "csv",
      );
    }
    if (filterConnectedTeamIds !== undefined) {
      requestContext.setQueryParam(
        "filter[connected_team_ids]",
        serialize(filterConnectedTeamIds, TypingInfo, "Array<string>", ""),
        "csv",
      );
    }
    if (filterConnectionIds !== undefined) {
      requestContext.setQueryParam(
        "filter[connection_ids]",
        serialize(filterConnectionIds, TypingInfo, "Array<string>", ""),
        "csv",
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

  public async listTeamHierarchyLinks(
    pageNumber?: number,
    pageSize?: number,
    filterParentTeam?: string,
    filterSubTeam?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/team-hierarchy-links";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.listTeamHierarchyLinks",
      TeamsApi.operationServers,
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
    if (filterParentTeam !== undefined) {
      requestContext.setQueryParam(
        "filter[parent_team]",
        serialize(filterParentTeam, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterSubTeam !== undefined) {
      requestContext.setQueryParam(
        "filter[sub_team]",
        serialize(filterSubTeam, TypingInfo, "string", ""),
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

  public async listTeams(
    pageNumber?: number,
    pageSize?: number,
    sort?: ListTeamsSort,
    include?: Array<ListTeamsInclude>,
    filterKeyword?: string,
    filterMe?: boolean,
    fieldsTeam?: Array<TeamsField>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/team";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.listTeams",
      TeamsApi.operationServers,
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
        serialize(sort, TypingInfo, "ListTeamsSort", ""),
        "",
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "Array<ListTeamsInclude>", ""),
        "multi",
      );
    }
    if (filterKeyword !== undefined) {
      requestContext.setQueryParam(
        "filter[keyword]",
        serialize(filterKeyword, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterMe !== undefined) {
      requestContext.setQueryParam(
        "filter[me]",
        serialize(filterMe, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (fieldsTeam !== undefined) {
      requestContext.setQueryParam(
        "fields[team]",
        serialize(fieldsTeam, TypingInfo, "Array<TeamsField>", ""),
        "csv",
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

  public async removeMemberTeam(
    superTeamId: string,
    memberTeamId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["TeamsApi.v2.removeMemberTeam"]) {
      throw new Error(
        "Unstable operation 'removeMemberTeam' is disabled. Enable it by setting `configuration.unstableOperations['TeamsApi.v2.removeMemberTeam'] = true`",
      );
    }

    // verify required parameter 'superTeamId' is not null or undefined
    if (superTeamId === null || superTeamId === undefined) {
      throw new RequiredError("superTeamId", "removeMemberTeam");
    }

    // verify required parameter 'memberTeamId' is not null or undefined
    if (memberTeamId === null || memberTeamId === undefined) {
      throw new RequiredError("memberTeamId", "removeMemberTeam");
    }

    // Path Params
    const localVarPath =
      "/api/v2/team/{super_team_id}/member_teams/{member_team_id}"
        .replace("{super_team_id}", encodeURIComponent(String(superTeamId)))
        .replace("{member_team_id}", encodeURIComponent(String(memberTeamId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.removeMemberTeam",
      TeamsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async removeTeamHierarchyLink(
    linkId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'linkId' is not null or undefined
    if (linkId === null || linkId === undefined) {
      throw new RequiredError("linkId", "removeTeamHierarchyLink");
    }

    // Path Params
    const localVarPath = "/api/v2/team-hierarchy-links/{link_id}".replace(
      "{link_id}",
      encodeURIComponent(String(linkId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.removeTeamHierarchyLink",
      TeamsApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async syncTeams(
    body: TeamSyncRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "syncTeams");
    }

    // Path Params
    const localVarPath = "/api/v2/team/sync";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.syncTeams",
      TeamsApi.operationServers,
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
      serialize(body, TypingInfo, "TeamSyncRequest", ""),
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

  public async updateTeam(
    teamId: string,
    body: TeamUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "updateTeam");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateTeam");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}".replace(
      "{team_id}",
      encodeURIComponent(String(teamId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.updateTeam",
      TeamsApi.operationServers,
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
      serialize(body, TypingInfo, "TeamUpdateRequest", ""),
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

  public async updateTeamLink(
    teamId: string,
    linkId: string,
    body: TeamLinkCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "updateTeamLink");
    }

    // verify required parameter 'linkId' is not null or undefined
    if (linkId === null || linkId === undefined) {
      throw new RequiredError("linkId", "updateTeamLink");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateTeamLink");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}/links/{link_id}"
      .replace("{team_id}", encodeURIComponent(String(teamId)))
      .replace("{link_id}", encodeURIComponent(String(linkId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.updateTeamLink",
      TeamsApi.operationServers,
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
      serialize(body, TypingInfo, "TeamLinkCreateRequest", ""),
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

  public async updateTeamMembership(
    teamId: string,
    userId: string,
    body: UserTeamUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "updateTeamMembership");
    }

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError("userId", "updateTeamMembership");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateTeamMembership");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}/memberships/{user_id}"
      .replace("{team_id}", encodeURIComponent(String(teamId)))
      .replace("{user_id}", encodeURIComponent(String(userId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.updateTeamMembership",
      TeamsApi.operationServers,
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
      serialize(body, TypingInfo, "UserTeamUpdateRequest", ""),
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

  public async updateTeamNotificationRule(
    teamId: string,
    ruleId: string,
    body: TeamNotificationRuleRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "updateTeamNotificationRule");
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "updateTeamNotificationRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateTeamNotificationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}/notification-rules/{rule_id}"
      .replace("{team_id}", encodeURIComponent(String(teamId)))
      .replace("{rule_id}", encodeURIComponent(String(ruleId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.updateTeamNotificationRule",
      TeamsApi.operationServers,
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
      serialize(body, TypingInfo, "TeamNotificationRuleRequest", ""),
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

  public async updateTeamPermissionSetting(
    teamId: string,
    action: string,
    body: TeamPermissionSettingUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "updateTeamPermissionSetting");
    }

    // verify required parameter 'action' is not null or undefined
    if (action === null || action === undefined) {
      throw new RequiredError("action", "updateTeamPermissionSetting");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateTeamPermissionSetting");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}/permission-settings/{action}"
      .replace("{team_id}", encodeURIComponent(String(teamId)))
      .replace("{action}", encodeURIComponent(String(action)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TeamsApi.v2.updateTeamPermissionSetting",
      TeamsApi.operationServers,
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
      serialize(body, TypingInfo, "TeamPermissionSettingUpdateRequest", ""),
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

export class TeamsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to addMemberTeam
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async addMemberTeam(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
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
   * @params response Response returned by the server for a request to addTeamHierarchyLink
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async addTeamHierarchyLink(
    response: ResponseContext,
  ): Promise<TeamHierarchyLinkResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamHierarchyLinkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamHierarchyLinkResponse",
      ) as TeamHierarchyLinkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
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
      const body: TeamHierarchyLinkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamHierarchyLinkResponse",
        "",
      ) as TeamHierarchyLinkResponse;
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
   * @params response Response returned by the server for a request to createTeam
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTeam(response: ResponseContext): Promise<TeamResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: TeamResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamResponse",
      ) as TeamResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
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
      const body: TeamResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamResponse",
        "",
      ) as TeamResponse;
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
   * @params response Response returned by the server for a request to createTeamConnections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTeamConnections(
    response: ResponseContext,
  ): Promise<TeamConnectionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: TeamConnectionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamConnectionsResponse",
      ) as TeamConnectionsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
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
      const body: TeamConnectionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamConnectionsResponse",
        "",
      ) as TeamConnectionsResponse;
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
   * @params response Response returned by the server for a request to createTeamLink
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTeamLink(
    response: ResponseContext,
  ): Promise<TeamLinkResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamLinkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamLinkResponse",
      ) as TeamLinkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
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
      const body: TeamLinkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamLinkResponse",
        "",
      ) as TeamLinkResponse;
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
   * @params response Response returned by the server for a request to createTeamMembership
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTeamMembership(
    response: ResponseContext,
  ): Promise<UserTeamResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UserTeamResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserTeamResponse",
      ) as UserTeamResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
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
      const body: UserTeamResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserTeamResponse",
        "",
      ) as UserTeamResponse;
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
   * @params response Response returned by the server for a request to createTeamNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTeamNotificationRule(
    response: ResponseContext,
  ): Promise<TeamNotificationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: TeamNotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamNotificationRuleResponse",
      ) as TeamNotificationRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
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
      const body: TeamNotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamNotificationRuleResponse",
        "",
      ) as TeamNotificationRuleResponse;
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
   * @params response Response returned by the server for a request to deleteTeam
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTeam(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteTeamConnections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTeamConnections(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteTeamLink
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTeamLink(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteTeamMembership
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTeamMembership(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteTeamNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTeamNotificationRule(
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
   * @params response Response returned by the server for a request to getTeam
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTeam(response: ResponseContext): Promise<TeamResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamResponse",
      ) as TeamResponse;
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
      const body: TeamResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamResponse",
        "",
      ) as TeamResponse;
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
   * @params response Response returned by the server for a request to getTeamHierarchyLink
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTeamHierarchyLink(
    response: ResponseContext,
  ): Promise<TeamHierarchyLinkResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamHierarchyLinkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamHierarchyLinkResponse",
      ) as TeamHierarchyLinkResponse;
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
      const body: TeamHierarchyLinkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamHierarchyLinkResponse",
        "",
      ) as TeamHierarchyLinkResponse;
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
   * @params response Response returned by the server for a request to getTeamLink
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTeamLink(
    response: ResponseContext,
  ): Promise<TeamLinkResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamLinkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamLinkResponse",
      ) as TeamLinkResponse;
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
      const body: TeamLinkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamLinkResponse",
        "",
      ) as TeamLinkResponse;
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
   * @params response Response returned by the server for a request to getTeamLinks
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTeamLinks(
    response: ResponseContext,
  ): Promise<TeamLinksResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamLinksResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamLinksResponse",
      ) as TeamLinksResponse;
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
      const body: TeamLinksResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamLinksResponse",
        "",
      ) as TeamLinksResponse;
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
   * @params response Response returned by the server for a request to getTeamMemberships
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTeamMemberships(
    response: ResponseContext,
  ): Promise<UserTeamsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UserTeamsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserTeamsResponse",
      ) as UserTeamsResponse;
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
      const body: UserTeamsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserTeamsResponse",
        "",
      ) as UserTeamsResponse;
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
   * @params response Response returned by the server for a request to getTeamNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTeamNotificationRule(
    response: ResponseContext,
  ): Promise<TeamNotificationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamNotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamNotificationRuleResponse",
      ) as TeamNotificationRuleResponse;
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
      const body: TeamNotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamNotificationRuleResponse",
        "",
      ) as TeamNotificationRuleResponse;
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
   * @params response Response returned by the server for a request to getTeamNotificationRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTeamNotificationRules(
    response: ResponseContext,
  ): Promise<TeamNotificationRulesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamNotificationRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamNotificationRulesResponse",
      ) as TeamNotificationRulesResponse;
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
      const body: TeamNotificationRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamNotificationRulesResponse",
        "",
      ) as TeamNotificationRulesResponse;
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
   * @params response Response returned by the server for a request to getTeamPermissionSettings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTeamPermissionSettings(
    response: ResponseContext,
  ): Promise<TeamPermissionSettingsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamPermissionSettingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamPermissionSettingsResponse",
      ) as TeamPermissionSettingsResponse;
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
      const body: TeamPermissionSettingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamPermissionSettingsResponse",
        "",
      ) as TeamPermissionSettingsResponse;
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
   * @params response Response returned by the server for a request to getTeamSync
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTeamSync(
    response: ResponseContext,
  ): Promise<TeamSyncResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamSyncResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamSyncResponse",
      ) as TeamSyncResponse;
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
      const body: TeamSyncResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamSyncResponse",
        "",
      ) as TeamSyncResponse;
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
   * @params response Response returned by the server for a request to getUserMemberships
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUserMemberships(
    response: ResponseContext,
  ): Promise<UserTeamsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UserTeamsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserTeamsResponse",
      ) as UserTeamsResponse;
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
      const body: UserTeamsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserTeamsResponse",
        "",
      ) as UserTeamsResponse;
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
   * @params response Response returned by the server for a request to listMemberTeams
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listMemberTeams(
    response: ResponseContext,
  ): Promise<TeamsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamsResponse",
      ) as TeamsResponse;
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
      const body: TeamsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamsResponse",
        "",
      ) as TeamsResponse;
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
   * @params response Response returned by the server for a request to listTeamConnections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTeamConnections(
    response: ResponseContext,
  ): Promise<TeamConnectionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamConnectionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamConnectionsResponse",
      ) as TeamConnectionsResponse;
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
      const body: TeamConnectionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamConnectionsResponse",
        "",
      ) as TeamConnectionsResponse;
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
   * @params response Response returned by the server for a request to listTeamHierarchyLinks
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTeamHierarchyLinks(
    response: ResponseContext,
  ): Promise<TeamHierarchyLinksResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamHierarchyLinksResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamHierarchyLinksResponse",
      ) as TeamHierarchyLinksResponse;
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
      const body: TeamHierarchyLinksResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamHierarchyLinksResponse",
        "",
      ) as TeamHierarchyLinksResponse;
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
   * @params response Response returned by the server for a request to listTeams
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTeams(response: ResponseContext): Promise<TeamsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamsResponse",
      ) as TeamsResponse;
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
      const body: TeamsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamsResponse",
        "",
      ) as TeamsResponse;
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
   * @params response Response returned by the server for a request to removeMemberTeam
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async removeMemberTeam(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to removeTeamHierarchyLink
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async removeTeamHierarchyLink(
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
   * @params response Response returned by the server for a request to syncTeams
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async syncTeams(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 500
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
   * @params response Response returned by the server for a request to updateTeam
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTeam(response: ResponseContext): Promise<TeamResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamResponse",
      ) as TeamResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
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
      const body: TeamResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamResponse",
        "",
      ) as TeamResponse;
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
   * @params response Response returned by the server for a request to updateTeamLink
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTeamLink(
    response: ResponseContext,
  ): Promise<TeamLinkResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamLinkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamLinkResponse",
      ) as TeamLinkResponse;
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
      const body: TeamLinkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamLinkResponse",
        "",
      ) as TeamLinkResponse;
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
   * @params response Response returned by the server for a request to updateTeamMembership
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTeamMembership(
    response: ResponseContext,
  ): Promise<UserTeamResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UserTeamResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserTeamResponse",
      ) as UserTeamResponse;
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
      const body: UserTeamResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UserTeamResponse",
        "",
      ) as UserTeamResponse;
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
   * @params response Response returned by the server for a request to updateTeamNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTeamNotificationRule(
    response: ResponseContext,
  ): Promise<TeamNotificationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamNotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamNotificationRuleResponse",
      ) as TeamNotificationRuleResponse;
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
      const body: TeamNotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamNotificationRuleResponse",
        "",
      ) as TeamNotificationRuleResponse;
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
   * @params response Response returned by the server for a request to updateTeamPermissionSetting
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTeamPermissionSetting(
    response: ResponseContext,
  ): Promise<TeamPermissionSettingResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamPermissionSettingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamPermissionSettingResponse",
      ) as TeamPermissionSettingResponse;
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
      const body: TeamPermissionSettingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamPermissionSettingResponse",
        "",
      ) as TeamPermissionSettingResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface TeamsApiAddMemberTeamRequest {
  /**
   * None
   * @type string
   */
  superTeamId: string;
  /**
   * @type AddMemberTeamRequest
   */
  body: AddMemberTeamRequest;
}

export interface TeamsApiAddTeamHierarchyLinkRequest {
  /**
   * @type TeamHierarchyLinkCreateRequest
   */
  body: TeamHierarchyLinkCreateRequest;
}

export interface TeamsApiCreateTeamRequest {
  /**
   * @type TeamCreateRequest
   */
  body: TeamCreateRequest;
}

export interface TeamsApiCreateTeamConnectionsRequest {
  /**
   * @type TeamConnectionCreateRequest
   */
  body: TeamConnectionCreateRequest;
}

export interface TeamsApiCreateTeamLinkRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
  /**
   * @type TeamLinkCreateRequest
   */
  body: TeamLinkCreateRequest;
}

export interface TeamsApiCreateTeamMembershipRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
  /**
   * @type UserTeamRequest
   */
  body: UserTeamRequest;
}

export interface TeamsApiCreateTeamNotificationRuleRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
  /**
   * @type TeamNotificationRuleRequest
   */
  body: TeamNotificationRuleRequest;
}

export interface TeamsApiDeleteTeamRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
}

export interface TeamsApiDeleteTeamConnectionsRequest {
  /**
   * @type TeamConnectionDeleteRequest
   */
  body: TeamConnectionDeleteRequest;
}

export interface TeamsApiDeleteTeamLinkRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
  /**
   * None
   * @type string
   */
  linkId: string;
}

export interface TeamsApiDeleteTeamMembershipRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
  /**
   * None
   * @type string
   */
  userId: string;
}

export interface TeamsApiDeleteTeamNotificationRuleRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
  /**
   * None
   * @type string
   */
  ruleId: string;
}

export interface TeamsApiGetTeamRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
}

export interface TeamsApiGetTeamHierarchyLinkRequest {
  /**
   * The team hierarchy link's identifier
   * @type string
   */
  linkId: string;
}

export interface TeamsApiGetTeamLinkRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
  /**
   * None
   * @type string
   */
  linkId: string;
}

export interface TeamsApiGetTeamLinksRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
}

export interface TeamsApiGetTeamMembershipsRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
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
   * Specifies the order of returned team memberships
   * @type GetTeamMembershipsSort
   */
  sort?: GetTeamMembershipsSort;
  /**
   * Search query, can be user email or name
   * @type string
   */
  filterKeyword?: string;
}

export interface TeamsApiGetTeamNotificationRuleRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
  /**
   * None
   * @type string
   */
  ruleId: string;
}

export interface TeamsApiGetTeamNotificationRulesRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
}

export interface TeamsApiGetTeamPermissionSettingsRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
}

export interface TeamsApiGetTeamSyncRequest {
  /**
   * Filter by the external source platform for team synchronization
   * @type TeamSyncAttributesSource
   */
  filterSource: TeamSyncAttributesSource;
}

export interface TeamsApiGetUserMembershipsRequest {
  /**
   * None
   * @type string
   */
  userUuid: string;
}

export interface TeamsApiListMemberTeamsRequest {
  /**
   * None
   * @type string
   */
  superTeamId: string;
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
   * List of fields that need to be fetched.
   * @type Array<TeamsField>
   */
  fieldsTeam?: Array<TeamsField>;
}

export interface TeamsApiListTeamConnectionsRequest {
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
   * Filter team connections by external source systems.
   * @type Array<string>
   */
  filterSources?: Array<string>;
  /**
   * Filter team connections by Datadog team IDs.
   * @type Array<string>
   */
  filterTeamIds?: Array<string>;
  /**
   * Filter team connections by connected team IDs from external systems.
   * @type Array<string>
   */
  filterConnectedTeamIds?: Array<string>;
  /**
   * Filter team connections by connection IDs.
   * @type Array<string>
   */
  filterConnectionIds?: Array<string>;
}

export interface TeamsApiListTeamHierarchyLinksRequest {
  /**
   * Specific page number to return.
   * @type number
   */
  pageNumber?: number;
  /**
   * Size for a given page. The maximum allowed value is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Filter by parent team ID
   * @type string
   */
  filterParentTeam?: string;
  /**
   * Filter by sub team ID
   * @type string
   */
  filterSubTeam?: string;
}

export interface TeamsApiListTeamsRequest {
  /**
   * Specific page number to return.
   * @type number
   */
  pageNumber?: number;
  /**
   * Size for a given page. The maximum allowed value is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Specifies the order of the returned teams
   * @type ListTeamsSort
   */
  sort?: ListTeamsSort;
  /**
   * Included related resources optionally requested. Allowed enum values: `team_links, user_team_permissions`
   * @type Array<ListTeamsInclude>
   */
  include?: Array<ListTeamsInclude>;
  /**
   * Search query. Can be team name, team handle, or email of team member
   * @type string
   */
  filterKeyword?: string;
  /**
   * When true, only returns teams the current user belongs to
   * @type boolean
   */
  filterMe?: boolean;
  /**
   * List of fields that need to be fetched.
   * @type Array<TeamsField>
   */
  fieldsTeam?: Array<TeamsField>;
}

export interface TeamsApiRemoveMemberTeamRequest {
  /**
   * None
   * @type string
   */
  superTeamId: string;
  /**
   * None
   * @type string
   */
  memberTeamId: string;
}

export interface TeamsApiRemoveTeamHierarchyLinkRequest {
  /**
   * The team hierarchy link's identifier
   * @type string
   */
  linkId: string;
}

export interface TeamsApiSyncTeamsRequest {
  /**
   * @type TeamSyncRequest
   */
  body: TeamSyncRequest;
}

export interface TeamsApiUpdateTeamRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
  /**
   * @type TeamUpdateRequest
   */
  body: TeamUpdateRequest;
}

export interface TeamsApiUpdateTeamLinkRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
  /**
   * None
   * @type string
   */
  linkId: string;
  /**
   * @type TeamLinkCreateRequest
   */
  body: TeamLinkCreateRequest;
}

export interface TeamsApiUpdateTeamMembershipRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
  /**
   * None
   * @type string
   */
  userId: string;
  /**
   * @type UserTeamUpdateRequest
   */
  body: UserTeamUpdateRequest;
}

export interface TeamsApiUpdateTeamNotificationRuleRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
  /**
   * None
   * @type string
   */
  ruleId: string;
  /**
   * @type TeamNotificationRuleRequest
   */
  body: TeamNotificationRuleRequest;
}

export interface TeamsApiUpdateTeamPermissionSettingRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
  /**
   * None
   * @type string
   */
  action: string;
  /**
   * @type TeamPermissionSettingUpdateRequest
   */
  body: TeamPermissionSettingUpdateRequest;
}

export class TeamsApi {
  private requestFactory: TeamsApiRequestFactory;
  private responseProcessor: TeamsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: TeamsApiRequestFactory,
    responseProcessor?: TeamsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new TeamsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new TeamsApiResponseProcessor();
  }

  /**
   * Add a member team.
   * Adds the team given by the `id` in the body as a member team of the super team.
   *
   * **Note**: This API is deprecated. For creating team hierarchy links, use the team hierarchy links API: `POST /api/v2/team-hierarchy-links`.
   * @param param The request object
   */
  public addMemberTeam(
    param: TeamsApiAddMemberTeamRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.addMemberTeam(
      param.superTeamId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.addMemberTeam(responseContext);
        });
    });
  }

  /**
   * Create a new team hierarchy link between a parent team and a sub team.
   * @param param The request object
   */
  public addTeamHierarchyLink(
    param: TeamsApiAddTeamHierarchyLinkRequest,
    options?: Configuration,
  ): Promise<TeamHierarchyLinkResponse> {
    const requestContextPromise = this.requestFactory.addTeamHierarchyLink(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.addTeamHierarchyLink(responseContext);
        });
    });
  }

  /**
   * Create a new team.
   * User IDs passed through the `users` relationship field are added to the team.
   * @param param The request object
   */
  public createTeam(
    param: TeamsApiCreateTeamRequest,
    options?: Configuration,
  ): Promise<TeamResponse> {
    const requestContextPromise = this.requestFactory.createTeam(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTeam(responseContext);
        });
    });
  }

  /**
   * Create multiple team connections.
   * @param param The request object
   */
  public createTeamConnections(
    param: TeamsApiCreateTeamConnectionsRequest,
    options?: Configuration,
  ): Promise<TeamConnectionsResponse> {
    const requestContextPromise = this.requestFactory.createTeamConnections(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTeamConnections(responseContext);
        });
    });
  }

  /**
   * Add a new link to a team.
   * @param param The request object
   */
  public createTeamLink(
    param: TeamsApiCreateTeamLinkRequest,
    options?: Configuration,
  ): Promise<TeamLinkResponse> {
    const requestContextPromise = this.requestFactory.createTeamLink(
      param.teamId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTeamLink(responseContext);
        });
    });
  }

  /**
   * Add a user to a team.
   *
   * **Note**: Each team has a setting that determines who is allowed to modify membership of the team. The `user_access_manage` permission generally grants access to modify membership of any team. To get the full picture, see [Team Membership documentation](https://docs.datadoghq.com/account_management/teams/manage/#team-membership).
   * @param param The request object
   */
  public createTeamMembership(
    param: TeamsApiCreateTeamMembershipRequest,
    options?: Configuration,
  ): Promise<UserTeamResponse> {
    const requestContextPromise = this.requestFactory.createTeamMembership(
      param.teamId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTeamMembership(responseContext);
        });
    });
  }

  /**
   * @param param The request object
   */
  public createTeamNotificationRule(
    param: TeamsApiCreateTeamNotificationRuleRequest,
    options?: Configuration,
  ): Promise<TeamNotificationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createTeamNotificationRule(
        param.teamId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTeamNotificationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Remove a team using the team's `id`.
   * @param param The request object
   */
  public deleteTeam(
    param: TeamsApiDeleteTeamRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTeam(
      param.teamId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTeam(responseContext);
        });
    });
  }

  /**
   * Delete multiple team connections.
   * @param param The request object
   */
  public deleteTeamConnections(
    param: TeamsApiDeleteTeamConnectionsRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTeamConnections(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTeamConnections(responseContext);
        });
    });
  }

  /**
   * Remove a link from a team.
   * @param param The request object
   */
  public deleteTeamLink(
    param: TeamsApiDeleteTeamLinkRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTeamLink(
      param.teamId,
      param.linkId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTeamLink(responseContext);
        });
    });
  }

  /**
   * Remove a user from a team.
   *
   * **Note**: Each team has a setting that determines who is allowed to modify membership of the team. The `user_access_manage` permission generally grants access to modify membership of any team. To get the full picture, see [Team Membership documentation](https://docs.datadoghq.com/account_management/teams/manage/#team-membership).
   * @param param The request object
   */
  public deleteTeamMembership(
    param: TeamsApiDeleteTeamMembershipRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTeamMembership(
      param.teamId,
      param.userId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTeamMembership(responseContext);
        });
    });
  }

  /**
   * @param param The request object
   */
  public deleteTeamNotificationRule(
    param: TeamsApiDeleteTeamNotificationRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteTeamNotificationRule(
        param.teamId,
        param.ruleId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTeamNotificationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a single team using the team's `id`.
   * @param param The request object
   */
  public getTeam(
    param: TeamsApiGetTeamRequest,
    options?: Configuration,
  ): Promise<TeamResponse> {
    const requestContextPromise = this.requestFactory.getTeam(
      param.teamId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTeam(responseContext);
        });
    });
  }

  /**
   * Get a single team hierarchy link for the given link_id.
   * @param param The request object
   */
  public getTeamHierarchyLink(
    param: TeamsApiGetTeamHierarchyLinkRequest,
    options?: Configuration,
  ): Promise<TeamHierarchyLinkResponse> {
    const requestContextPromise = this.requestFactory.getTeamHierarchyLink(
      param.linkId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTeamHierarchyLink(responseContext);
        });
    });
  }

  /**
   * Get a single link for a team.
   * @param param The request object
   */
  public getTeamLink(
    param: TeamsApiGetTeamLinkRequest,
    options?: Configuration,
  ): Promise<TeamLinkResponse> {
    const requestContextPromise = this.requestFactory.getTeamLink(
      param.teamId,
      param.linkId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTeamLink(responseContext);
        });
    });
  }

  /**
   * Get all links for a given team.
   * @param param The request object
   */
  public getTeamLinks(
    param: TeamsApiGetTeamLinksRequest,
    options?: Configuration,
  ): Promise<TeamLinksResponse> {
    const requestContextPromise = this.requestFactory.getTeamLinks(
      param.teamId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTeamLinks(responseContext);
        });
    });
  }

  /**
   * Get a paginated list of members for a team
   * @param param The request object
   */
  public getTeamMemberships(
    param: TeamsApiGetTeamMembershipsRequest,
    options?: Configuration,
  ): Promise<UserTeamsResponse> {
    const requestContextPromise = this.requestFactory.getTeamMemberships(
      param.teamId,
      param.pageSize,
      param.pageNumber,
      param.sort,
      param.filterKeyword,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTeamMemberships(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of getTeamMemberships returning a generator with all the items.
   */
  public async *getTeamMembershipsWithPagination(
    param: TeamsApiGetTeamMembershipsRequest,
    options?: Configuration,
  ): AsyncGenerator<UserTeam> {
    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    param.pageNumber = 0;
    while (true) {
      const requestContext = await this.requestFactory.getTeamMemberships(
        param.teamId,
        param.pageSize,
        param.pageNumber,
        param.sort,
        param.filterKeyword,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.getTeamMemberships(responseContext);
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      param.pageNumber = param.pageNumber + 1;
    }
  }

  /**
   * @param param The request object
   */
  public getTeamNotificationRule(
    param: TeamsApiGetTeamNotificationRuleRequest,
    options?: Configuration,
  ): Promise<TeamNotificationRuleResponse> {
    const requestContextPromise = this.requestFactory.getTeamNotificationRule(
      param.teamId,
      param.ruleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTeamNotificationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * @param param The request object
   */
  public getTeamNotificationRules(
    param: TeamsApiGetTeamNotificationRulesRequest,
    options?: Configuration,
  ): Promise<TeamNotificationRulesResponse> {
    const requestContextPromise = this.requestFactory.getTeamNotificationRules(
      param.teamId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTeamNotificationRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Get all permission settings for a given team.
   * @param param The request object
   */
  public getTeamPermissionSettings(
    param: TeamsApiGetTeamPermissionSettingsRequest,
    options?: Configuration,
  ): Promise<TeamPermissionSettingsResponse> {
    const requestContextPromise = this.requestFactory.getTeamPermissionSettings(
      param.teamId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTeamPermissionSettings(
            responseContext,
          );
        });
    });
  }

  /**
   * Get all team synchronization configurations.
   * Returns a list of configurations used for linking or provisioning teams with external sources like GitHub.
   * @param param The request object
   */
  public getTeamSync(
    param: TeamsApiGetTeamSyncRequest,
    options?: Configuration,
  ): Promise<TeamSyncResponse> {
    const requestContextPromise = this.requestFactory.getTeamSync(
      param.filterSource,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTeamSync(responseContext);
        });
    });
  }

  /**
   * Get a list of memberships for a user
   * @param param The request object
   */
  public getUserMemberships(
    param: TeamsApiGetUserMembershipsRequest,
    options?: Configuration,
  ): Promise<UserTeamsResponse> {
    const requestContextPromise = this.requestFactory.getUserMemberships(
      param.userUuid,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUserMemberships(responseContext);
        });
    });
  }

  /**
   * Get all member teams.
   *
   * **Note**: This API is deprecated. For team hierarchy relationships (parent-child
   * teams), use the team hierarchy links API: `GET /api/v2/team-hierarchy-links`.
   * @param param The request object
   */
  public listMemberTeams(
    param: TeamsApiListMemberTeamsRequest,
    options?: Configuration,
  ): Promise<TeamsResponse> {
    const requestContextPromise = this.requestFactory.listMemberTeams(
      param.superTeamId,
      param.pageSize,
      param.pageNumber,
      param.fieldsTeam,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMemberTeams(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listMemberTeams returning a generator with all the items.
   */
  public async *listMemberTeamsWithPagination(
    param: TeamsApiListMemberTeamsRequest,
    options?: Configuration,
  ): AsyncGenerator<Team> {
    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    param.pageNumber = 0;
    while (true) {
      const requestContext = await this.requestFactory.listMemberTeams(
        param.superTeamId,
        param.pageSize,
        param.pageNumber,
        param.fieldsTeam,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listMemberTeams(responseContext);
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      param.pageNumber = param.pageNumber + 1;
    }
  }

  /**
   * Returns all team connections.
   * @param param The request object
   */
  public listTeamConnections(
    param: TeamsApiListTeamConnectionsRequest = {},
    options?: Configuration,
  ): Promise<TeamConnectionsResponse> {
    const requestContextPromise = this.requestFactory.listTeamConnections(
      param.pageSize,
      param.pageNumber,
      param.filterSources,
      param.filterTeamIds,
      param.filterConnectedTeamIds,
      param.filterConnectionIds,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTeamConnections(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listTeamConnections returning a generator with all the items.
   */
  public async *listTeamConnectionsWithPagination(
    param: TeamsApiListTeamConnectionsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<TeamConnection> {
    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    param.pageNumber = 0;
    while (true) {
      const requestContext = await this.requestFactory.listTeamConnections(
        param.pageSize,
        param.pageNumber,
        param.filterSources,
        param.filterTeamIds,
        param.filterConnectedTeamIds,
        param.filterConnectionIds,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listTeamConnections(responseContext);
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      param.pageNumber = param.pageNumber + 1;
    }
  }

  /**
   * List all team hierarchy links that match the provided filters.
   * @param param The request object
   */
  public listTeamHierarchyLinks(
    param: TeamsApiListTeamHierarchyLinksRequest = {},
    options?: Configuration,
  ): Promise<TeamHierarchyLinksResponse> {
    const requestContextPromise = this.requestFactory.listTeamHierarchyLinks(
      param.pageNumber,
      param.pageSize,
      param.filterParentTeam,
      param.filterSubTeam,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTeamHierarchyLinks(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listTeamHierarchyLinks returning a generator with all the items.
   */
  public async *listTeamHierarchyLinksWithPagination(
    param: TeamsApiListTeamHierarchyLinksRequest = {},
    options?: Configuration,
  ): AsyncGenerator<TeamHierarchyLink> {
    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    param.pageNumber = 0;
    while (true) {
      const requestContext = await this.requestFactory.listTeamHierarchyLinks(
        param.pageNumber,
        param.pageSize,
        param.filterParentTeam,
        param.filterSubTeam,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listTeamHierarchyLinks(responseContext);
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      param.pageNumber = param.pageNumber + 1;
    }
  }

  /**
   * Get all teams.
   * Can be used to search for teams using the `filter[keyword]` and `filter[me]` query parameters.
   * @param param The request object
   */
  public listTeams(
    param: TeamsApiListTeamsRequest = {},
    options?: Configuration,
  ): Promise<TeamsResponse> {
    const requestContextPromise = this.requestFactory.listTeams(
      param.pageNumber,
      param.pageSize,
      param.sort,
      param.include,
      param.filterKeyword,
      param.filterMe,
      param.fieldsTeam,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTeams(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listTeams returning a generator with all the items.
   */
  public async *listTeamsWithPagination(
    param: TeamsApiListTeamsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<Team> {
    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    param.pageNumber = 0;
    while (true) {
      const requestContext = await this.requestFactory.listTeams(
        param.pageNumber,
        param.pageSize,
        param.sort,
        param.include,
        param.filterKeyword,
        param.filterMe,
        param.fieldsTeam,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response = await this.responseProcessor.listTeams(responseContext);
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      param.pageNumber = param.pageNumber + 1;
    }
  }

  /**
   * Remove a super team's member team identified by `member_team_id`.
   *
   * **Note**: This API is deprecated. For deleting team hierarchy links, use the team hierarchy links API: `DELETE /api/v2/team-hierarchy-links/{link_id}`.
   * @param param The request object
   */
  public removeMemberTeam(
    param: TeamsApiRemoveMemberTeamRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.removeMemberTeam(
      param.superTeamId,
      param.memberTeamId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.removeMemberTeam(responseContext);
        });
    });
  }

  /**
   * Remove a team hierarchy link by the given link_id.
   * @param param The request object
   */
  public removeTeamHierarchyLink(
    param: TeamsApiRemoveTeamHierarchyLinkRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.removeTeamHierarchyLink(
      param.linkId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.removeTeamHierarchyLink(
            responseContext,
          );
        });
    });
  }

  /**
   * This endpoint attempts to link your existing Datadog teams with GitHub teams by matching their names.
   * It evaluates all current Datadog teams and compares them against teams in the GitHub organization
   * connected to your Datadog account, based on Datadog Team handle and GitHub Team slug
   * (lowercased and kebab-cased).
   *
   * This operation is read-only on the GitHub side, no teams will be modified or created.
   *
   * [A GitHub organization must be connected to your Datadog account](https://docs.datadoghq.com/integrations/github/),
   * and the GitHub App integrated with Datadog must have the `Members Read` permission. Matching is performed by comparing the Datadog team handle to the GitHub team slug
   * using a normalized exact match; case is ignored and spaces are removed. No modifications are made
   * to teams in GitHub. This only creates new teams in Datadog when type is set to `provision`.
   * @param param The request object
   */
  public syncTeams(
    param: TeamsApiSyncTeamsRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.syncTeams(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.syncTeams(responseContext);
        });
    });
  }

  /**
   * Update a team using the team's `id`.
   * If the `team_links` relationship is present, the associated links are updated to be in the order they appear in the array, and any existing team links not present are removed.
   * @param param The request object
   */
  public updateTeam(
    param: TeamsApiUpdateTeamRequest,
    options?: Configuration,
  ): Promise<TeamResponse> {
    const requestContextPromise = this.requestFactory.updateTeam(
      param.teamId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTeam(responseContext);
        });
    });
  }

  /**
   * Update a team link.
   * @param param The request object
   */
  public updateTeamLink(
    param: TeamsApiUpdateTeamLinkRequest,
    options?: Configuration,
  ): Promise<TeamLinkResponse> {
    const requestContextPromise = this.requestFactory.updateTeamLink(
      param.teamId,
      param.linkId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTeamLink(responseContext);
        });
    });
  }

  /**
   * Update a user's membership attributes on a team.
   *
   * **Note**: Each team has a setting that determines who is allowed to modify membership of the team. The `user_access_manage` permission generally grants access to modify membership of any team. To get the full picture, see [Team Membership documentation](https://docs.datadoghq.com/account_management/teams/manage/#team-membership).
   * @param param The request object
   */
  public updateTeamMembership(
    param: TeamsApiUpdateTeamMembershipRequest,
    options?: Configuration,
  ): Promise<UserTeamResponse> {
    const requestContextPromise = this.requestFactory.updateTeamMembership(
      param.teamId,
      param.userId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTeamMembership(responseContext);
        });
    });
  }

  /**
   * @param param The request object
   */
  public updateTeamNotificationRule(
    param: TeamsApiUpdateTeamNotificationRuleRequest,
    options?: Configuration,
  ): Promise<TeamNotificationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.updateTeamNotificationRule(
        param.teamId,
        param.ruleId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTeamNotificationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a team permission setting for a given team.
   * @param param The request object
   */
  public updateTeamPermissionSetting(
    param: TeamsApiUpdateTeamPermissionSettingRequest,
    options?: Configuration,
  ): Promise<TeamPermissionSettingResponse> {
    const requestContextPromise =
      this.requestFactory.updateTeamPermissionSetting(
        param.teamId,
        param.action,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTeamPermissionSetting(
            responseContext,
          );
        });
    });
  }
}
