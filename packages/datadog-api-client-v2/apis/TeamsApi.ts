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

import { AddMemberTeamRequest } from "../models/AddMemberTeamRequest";
import { APIErrorResponse } from "../models/APIErrorResponse";
import { GetTeamMembershipsSort } from "../models/GetTeamMembershipsSort";
import { ListTeamsInclude } from "../models/ListTeamsInclude";
import { ListTeamsSort } from "../models/ListTeamsSort";
import { Team } from "../models/Team";
import { TeamCreateRequest } from "../models/TeamCreateRequest";
import { TeamLinkCreateRequest } from "../models/TeamLinkCreateRequest";
import { TeamLinkResponse } from "../models/TeamLinkResponse";
import { TeamLinksResponse } from "../models/TeamLinksResponse";
import { TeamPermissionSettingResponse } from "../models/TeamPermissionSettingResponse";
import { TeamPermissionSettingsResponse } from "../models/TeamPermissionSettingsResponse";
import { TeamPermissionSettingUpdateRequest } from "../models/TeamPermissionSettingUpdateRequest";
import { TeamResponse } from "../models/TeamResponse";
import { TeamsField } from "../models/TeamsField";
import { TeamsResponse } from "../models/TeamsResponse";
import { TeamUpdateRequest } from "../models/TeamUpdateRequest";
import { UserTeam } from "../models/UserTeam";
import { UserTeamRequest } from "../models/UserTeamRequest";
import { UserTeamResponse } from "../models/UserTeamResponse";
import { UserTeamsResponse } from "../models/UserTeamsResponse";
import { UserTeamUpdateRequest } from "../models/UserTeamUpdateRequest";

export class TeamsApiRequestFactory extends BaseAPIRequestFactory {
  public async addMemberTeam(
    superTeamId: string,
    body: AddMemberTeamRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'addMemberTeam'");
    if (!_config.unstableOperations["v2.addMemberTeam"]) {
      throw new Error("Unstable operation 'addMemberTeam' is disabled");
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
      encodeURIComponent(String(superTeamId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TeamsApi.addMemberTeam")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AddMemberTeamRequest", ""),
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

  public async createTeam(
    body: TeamCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTeam");
    }

    // Path Params
    const localVarPath = "/api/v2/team";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TeamsApi.createTeam")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "TeamCreateRequest", ""),
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

  public async createTeamLink(
    teamId: string,
    body: TeamLinkCreateRequest,
    _options?: Configuration
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
      encodeURIComponent(String(teamId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TeamsApi.createTeamLink")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "TeamLinkCreateRequest", ""),
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

  public async createTeamMembership(
    teamId: string,
    body: UserTeamRequest,
    _options?: Configuration
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
      encodeURIComponent(String(teamId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TeamsApi.createTeamMembership")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UserTeamRequest", ""),
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

  public async deleteTeam(
    teamId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "deleteTeam");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}".replace(
      "{team_id}",
      encodeURIComponent(String(teamId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TeamsApi.deleteTeam")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
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
    const requestContext = _config
      .getServer("v2.TeamsApi.deleteTeamLink")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
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
    const requestContext = _config
      .getServer("v2.TeamsApi.deleteTeamMembership")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "getTeam");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}".replace(
      "{team_id}",
      encodeURIComponent(String(teamId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TeamsApi.getTeam")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
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
    const requestContext = _config
      .getServer("v2.TeamsApi.getTeamLink")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "getTeamLinks");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}/links".replace(
      "{team_id}",
      encodeURIComponent(String(teamId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TeamsApi.getTeamLinks")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "getTeamMemberships");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}/memberships".replace(
      "{team_id}",
      encodeURIComponent(String(teamId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TeamsApi.getTeamMemberships")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
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
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "GetTeamMembershipsSort", ""),
        ""
      );
    }
    if (filterKeyword !== undefined) {
      requestContext.setQueryParam(
        "filter[keyword]",
        ObjectSerializer.serialize(filterKeyword, "string", ""),
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

  public async getTeamPermissionSettings(
    teamId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "getTeamPermissionSettings");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{team_id}/permission-settings".replace(
      "{team_id}",
      encodeURIComponent(String(teamId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TeamsApi.getTeamPermissionSettings")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userUuid' is not null or undefined
    if (userUuid === null || userUuid === undefined) {
      throw new RequiredError("userUuid", "getUserMemberships");
    }

    // Path Params
    const localVarPath = "/api/v2/users/{user_uuid}/memberships".replace(
      "{user_uuid}",
      encodeURIComponent(String(userUuid))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TeamsApi.getUserMemberships")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listMemberTeams'");
    if (!_config.unstableOperations["v2.listMemberTeams"]) {
      throw new Error("Unstable operation 'listMemberTeams' is disabled");
    }

    // verify required parameter 'superTeamId' is not null or undefined
    if (superTeamId === null || superTeamId === undefined) {
      throw new RequiredError("superTeamId", "listMemberTeams");
    }

    // Path Params
    const localVarPath = "/api/v2/team/{super_team_id}/member_teams".replace(
      "{super_team_id}",
      encodeURIComponent(String(superTeamId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TeamsApi.listMemberTeams")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
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
    if (fieldsTeam !== undefined) {
      requestContext.setQueryParam(
        "fields[team]",
        ObjectSerializer.serialize(fieldsTeam, "Array<TeamsField>", ""),
        "csv"
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/team";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TeamsApi.listTeams")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64"),
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
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "ListTeamsSort", ""),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "Array<ListTeamsInclude>", ""),
        "multi"
      );
    }
    if (filterKeyword !== undefined) {
      requestContext.setQueryParam(
        "filter[keyword]",
        ObjectSerializer.serialize(filterKeyword, "string", ""),
        ""
      );
    }
    if (filterMe !== undefined) {
      requestContext.setQueryParam(
        "filter[me]",
        ObjectSerializer.serialize(filterMe, "boolean", ""),
        ""
      );
    }
    if (fieldsTeam !== undefined) {
      requestContext.setQueryParam(
        "fields[team]",
        ObjectSerializer.serialize(fieldsTeam, "Array<TeamsField>", ""),
        "csv"
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'removeMemberTeam'");
    if (!_config.unstableOperations["v2.removeMemberTeam"]) {
      throw new Error("Unstable operation 'removeMemberTeam' is disabled");
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
    const requestContext = _config
      .getServer("v2.TeamsApi.removeMemberTeam")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
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
      encodeURIComponent(String(teamId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TeamsApi.updateTeam")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "TeamUpdateRequest", ""),
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

  public async updateTeamLink(
    teamId: string,
    linkId: string,
    body: TeamLinkCreateRequest,
    _options?: Configuration
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
    const requestContext = _config
      .getServer("v2.TeamsApi.updateTeamLink")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "TeamLinkCreateRequest", ""),
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

  public async updateTeamMembership(
    teamId: string,
    userId: string,
    body: UserTeamUpdateRequest,
    _options?: Configuration
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
    const requestContext = _config
      .getServer("v2.TeamsApi.updateTeamMembership")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UserTeamUpdateRequest", ""),
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

  public async updateTeamPermissionSetting(
    teamId: string,
    action: string,
    body: TeamPermissionSettingUpdateRequest,
    _options?: Configuration
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
    const requestContext = _config
      .getServer("v2.TeamsApi.updateTeamPermissionSetting")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "TeamPermissionSettingUpdateRequest",
        ""
      ),
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

export class TeamsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to addMemberTeam
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async addMemberTeam(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to createTeam
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTeam(response: ResponseContext): Promise<TeamResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: TeamResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamResponse"
      ) as TeamResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
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
      const body: TeamResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamResponse",
        ""
      ) as TeamResponse;
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
   * @params response Response returned by the server for a request to createTeamLink
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTeamLink(
    response: ResponseContext
  ): Promise<TeamLinkResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TeamLinkResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamLinkResponse"
      ) as TeamLinkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422 ||
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
      const body: TeamLinkResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamLinkResponse",
        ""
      ) as TeamLinkResponse;
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
   * @params response Response returned by the server for a request to createTeamMembership
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTeamMembership(
    response: ResponseContext
  ): Promise<UserTeamResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: UserTeamResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserTeamResponse"
      ) as UserTeamResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
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
      const body: UserTeamResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserTeamResponse",
        ""
      ) as UserTeamResponse;
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
   * @params response Response returned by the server for a request to deleteTeam
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTeam(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to deleteTeamLink
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTeamLink(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to deleteTeamMembership
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTeamMembership(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to getTeam
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTeam(response: ResponseContext): Promise<TeamResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TeamResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamResponse"
      ) as TeamResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: TeamResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamResponse",
        ""
      ) as TeamResponse;
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
   * @params response Response returned by the server for a request to getTeamLink
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTeamLink(
    response: ResponseContext
  ): Promise<TeamLinkResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TeamLinkResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamLinkResponse"
      ) as TeamLinkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: TeamLinkResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamLinkResponse",
        ""
      ) as TeamLinkResponse;
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
   * @params response Response returned by the server for a request to getTeamLinks
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTeamLinks(
    response: ResponseContext
  ): Promise<TeamLinksResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TeamLinksResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamLinksResponse"
      ) as TeamLinksResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: TeamLinksResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamLinksResponse",
        ""
      ) as TeamLinksResponse;
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
   * @params response Response returned by the server for a request to getTeamMemberships
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTeamMemberships(
    response: ResponseContext
  ): Promise<UserTeamsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: UserTeamsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserTeamsResponse"
      ) as UserTeamsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: UserTeamsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserTeamsResponse",
        ""
      ) as UserTeamsResponse;
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
   * @params response Response returned by the server for a request to getTeamPermissionSettings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTeamPermissionSettings(
    response: ResponseContext
  ): Promise<TeamPermissionSettingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TeamPermissionSettingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamPermissionSettingsResponse"
      ) as TeamPermissionSettingsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: TeamPermissionSettingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamPermissionSettingsResponse",
        ""
      ) as TeamPermissionSettingsResponse;
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
   * @params response Response returned by the server for a request to getUserMemberships
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUserMemberships(
    response: ResponseContext
  ): Promise<UserTeamsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: UserTeamsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserTeamsResponse"
      ) as UserTeamsResponse;
      return body;
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
      const body: UserTeamsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserTeamsResponse",
        ""
      ) as UserTeamsResponse;
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
   * @params response Response returned by the server for a request to listMemberTeams
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listMemberTeams(
    response: ResponseContext
  ): Promise<TeamsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TeamsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamsResponse"
      ) as TeamsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: TeamsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamsResponse",
        ""
      ) as TeamsResponse;
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
   * @params response Response returned by the server for a request to listTeams
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTeams(response: ResponseContext): Promise<TeamsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TeamsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamsResponse"
      ) as TeamsResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: TeamsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamsResponse",
        ""
      ) as TeamsResponse;
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
   * @params response Response returned by the server for a request to removeMemberTeam
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async removeMemberTeam(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to updateTeam
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTeam(response: ResponseContext): Promise<TeamResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TeamResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamResponse"
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
      const body: TeamResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamResponse",
        ""
      ) as TeamResponse;
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
   * @params response Response returned by the server for a request to updateTeamLink
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTeamLink(
    response: ResponseContext
  ): Promise<TeamLinkResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TeamLinkResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamLinkResponse"
      ) as TeamLinkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: TeamLinkResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamLinkResponse",
        ""
      ) as TeamLinkResponse;
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
   * @params response Response returned by the server for a request to updateTeamMembership
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTeamMembership(
    response: ResponseContext
  ): Promise<UserTeamResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: UserTeamResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserTeamResponse"
      ) as UserTeamResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: UserTeamResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserTeamResponse",
        ""
      ) as UserTeamResponse;
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
   * @params response Response returned by the server for a request to updateTeamPermissionSetting
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTeamPermissionSetting(
    response: ResponseContext
  ): Promise<TeamPermissionSettingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TeamPermissionSettingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamPermissionSettingResponse"
      ) as TeamPermissionSettingResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: TeamPermissionSettingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamPermissionSettingResponse",
        ""
      ) as TeamPermissionSettingResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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

export interface TeamsApiCreateTeamRequest {
  /**
   * @type TeamCreateRequest
   */
  body: TeamCreateRequest;
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

export interface TeamsApiDeleteTeamRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
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

export interface TeamsApiGetTeamRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
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

export interface TeamsApiGetTeamPermissionSettingsRequest {
  /**
   * None
   * @type string
   */
  teamId: string;
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

  public constructor(
    configuration: Configuration,
    requestFactory?: TeamsApiRequestFactory,
    responseProcessor?: TeamsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new TeamsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new TeamsApiResponseProcessor();
  }

  /**
   * Add a member team.
   * Adds the team given by the `id` in the body as a member team of the super team.
   * @param param The request object
   */
  public addMemberTeam(
    param: TeamsApiAddMemberTeamRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.addMemberTeam(
      param.superTeamId,
      param.body,
      options
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
   * Create a new team.
   * User IDs passed through the `users` relationship field are added to the team.
   * @param param The request object
   */
  public createTeam(
    param: TeamsApiCreateTeamRequest,
    options?: Configuration
  ): Promise<TeamResponse> {
    const requestContextPromise = this.requestFactory.createTeam(
      param.body,
      options
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
   * Add a new link to a team.
   * @param param The request object
   */
  public createTeamLink(
    param: TeamsApiCreateTeamLinkRequest,
    options?: Configuration
  ): Promise<TeamLinkResponse> {
    const requestContextPromise = this.requestFactory.createTeamLink(
      param.teamId,
      param.body,
      options
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
   * @param param The request object
   */
  public createTeamMembership(
    param: TeamsApiCreateTeamMembershipRequest,
    options?: Configuration
  ): Promise<UserTeamResponse> {
    const requestContextPromise = this.requestFactory.createTeamMembership(
      param.teamId,
      param.body,
      options
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
   * Remove a team using the team's `id`.
   * @param param The request object
   */
  public deleteTeam(
    param: TeamsApiDeleteTeamRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTeam(
      param.teamId,
      options
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
   * Remove a link from a team.
   * @param param The request object
   */
  public deleteTeamLink(
    param: TeamsApiDeleteTeamLinkRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTeamLink(
      param.teamId,
      param.linkId,
      options
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
   * @param param The request object
   */
  public deleteTeamMembership(
    param: TeamsApiDeleteTeamMembershipRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTeamMembership(
      param.teamId,
      param.userId,
      options
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
   * Get a single team using the team's `id`.
   * @param param The request object
   */
  public getTeam(
    param: TeamsApiGetTeamRequest,
    options?: Configuration
  ): Promise<TeamResponse> {
    const requestContextPromise = this.requestFactory.getTeam(
      param.teamId,
      options
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
   * Get a single link for a team.
   * @param param The request object
   */
  public getTeamLink(
    param: TeamsApiGetTeamLinkRequest,
    options?: Configuration
  ): Promise<TeamLinkResponse> {
    const requestContextPromise = this.requestFactory.getTeamLink(
      param.teamId,
      param.linkId,
      options
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
    options?: Configuration
  ): Promise<TeamLinksResponse> {
    const requestContextPromise = this.requestFactory.getTeamLinks(
      param.teamId,
      options
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
    options?: Configuration
  ): Promise<UserTeamsResponse> {
    const requestContextPromise = this.requestFactory.getTeamMemberships(
      param.teamId,
      param.pageSize,
      param.pageNumber,
      param.sort,
      param.filterKeyword,
      options
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
    options?: Configuration
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
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.getTeamMemberships(
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
      if (results.length < pageSize) {
        break;
      }
      param.pageNumber = param.pageNumber + 1;
    }
  }

  /**
   * Get all permission settings for a given team.
   * @param param The request object
   */
  public getTeamPermissionSettings(
    param: TeamsApiGetTeamPermissionSettingsRequest,
    options?: Configuration
  ): Promise<TeamPermissionSettingsResponse> {
    const requestContextPromise = this.requestFactory.getTeamPermissionSettings(
      param.teamId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTeamPermissionSettings(
            responseContext
          );
        });
    });
  }

  /**
   * Get a list of memberships for a user
   * @param param The request object
   */
  public getUserMemberships(
    param: TeamsApiGetUserMembershipsRequest,
    options?: Configuration
  ): Promise<UserTeamsResponse> {
    const requestContextPromise = this.requestFactory.getUserMemberships(
      param.userUuid,
      options
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
   * @param param The request object
   */
  public listMemberTeams(
    param: TeamsApiListMemberTeamsRequest,
    options?: Configuration
  ): Promise<TeamsResponse> {
    const requestContextPromise = this.requestFactory.listMemberTeams(
      param.superTeamId,
      param.pageSize,
      param.pageNumber,
      param.fieldsTeam,
      options
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
    options?: Configuration
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
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listMemberTeams(
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
    options?: Configuration
  ): Promise<TeamsResponse> {
    const requestContextPromise = this.requestFactory.listTeams(
      param.pageNumber,
      param.pageSize,
      param.sort,
      param.include,
      param.filterKeyword,
      param.filterMe,
      param.fieldsTeam,
      options
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
    options?: Configuration
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
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

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
   * @param param The request object
   */
  public removeMemberTeam(
    param: TeamsApiRemoveMemberTeamRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.removeMemberTeam(
      param.superTeamId,
      param.memberTeamId,
      options
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
   * Update a team using the team's `id`.
   * If the `team_links` relationship is present, the associated links are updated to be in the order they appear in the array, and any existing team links not present are removed.
   * @param param The request object
   */
  public updateTeam(
    param: TeamsApiUpdateTeamRequest,
    options?: Configuration
  ): Promise<TeamResponse> {
    const requestContextPromise = this.requestFactory.updateTeam(
      param.teamId,
      param.body,
      options
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
    options?: Configuration
  ): Promise<TeamLinkResponse> {
    const requestContextPromise = this.requestFactory.updateTeamLink(
      param.teamId,
      param.linkId,
      param.body,
      options
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
   * @param param The request object
   */
  public updateTeamMembership(
    param: TeamsApiUpdateTeamMembershipRequest,
    options?: Configuration
  ): Promise<UserTeamResponse> {
    const requestContextPromise = this.requestFactory.updateTeamMembership(
      param.teamId,
      param.userId,
      param.body,
      options
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
   * Update a team permission setting for a given team.
   * @param param The request object
   */
  public updateTeamPermissionSetting(
    param: TeamsApiUpdateTeamPermissionSettingRequest,
    options?: Configuration
  ): Promise<TeamPermissionSettingResponse> {
    const requestContextPromise =
      this.requestFactory.updateTeamPermissionSetting(
        param.teamId,
        param.action,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTeamPermissionSetting(
            responseContext
          );
        });
    });
  }
}
