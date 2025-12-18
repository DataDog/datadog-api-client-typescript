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
import { CreateOnCallNotificationRuleRequest } from "../models/CreateOnCallNotificationRuleRequest";
import { CreateUserNotificationChannelRequest } from "../models/CreateUserNotificationChannelRequest";
import { EscalationPolicy } from "../models/EscalationPolicy";
import { EscalationPolicyCreateRequest } from "../models/EscalationPolicyCreateRequest";
import { EscalationPolicyUpdateRequest } from "../models/EscalationPolicyUpdateRequest";
import { ListNotificationChannelsResponse } from "../models/ListNotificationChannelsResponse";
import { ListOnCallNotificationRulesResponse } from "../models/ListOnCallNotificationRulesResponse";
import { NotificationChannel } from "../models/NotificationChannel";
import { OnCallNotificationRule } from "../models/OnCallNotificationRule";
import { Schedule } from "../models/Schedule";
import { ScheduleCreateRequest } from "../models/ScheduleCreateRequest";
import { ScheduleUpdateRequest } from "../models/ScheduleUpdateRequest";
import { Shift } from "../models/Shift";
import { TeamOnCallResponders } from "../models/TeamOnCallResponders";
import { TeamRoutingRules } from "../models/TeamRoutingRules";
import { TeamRoutingRulesRequest } from "../models/TeamRoutingRulesRequest";
import { UpdateOnCallNotificationRuleRequest } from "../models/UpdateOnCallNotificationRuleRequest";

export class OnCallApiRequestFactory extends BaseAPIRequestFactory {
  public async createOnCallEscalationPolicy(
    body: EscalationPolicyCreateRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOnCallEscalationPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/on-call/escalation-policies";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.createOnCallEscalationPolicy")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "EscalationPolicyCreateRequest", ""),
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

  public async createOnCallSchedule(
    body: ScheduleCreateRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOnCallSchedule");
    }

    // Path Params
    const localVarPath = "/api/v2/on-call/schedules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.createOnCallSchedule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ScheduleCreateRequest", ""),
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

  public async createUserNotificationChannel(
    userId: string,
    body: CreateUserNotificationChannelRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError("userId", "createUserNotificationChannel");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createUserNotificationChannel");
    }

    // Path Params
    const localVarPath =
      "/api/v2/on-call/users/{user_id}/notification-channels".replace(
        "{user_id}",
        encodeURIComponent(String(userId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.createUserNotificationChannel")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
        "CreateUserNotificationChannelRequest",
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

  public async createUserNotificationRule(
    userId: string,
    body: CreateOnCallNotificationRuleRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError("userId", "createUserNotificationRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createUserNotificationRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/on-call/users/{user_id}/notification-rules".replace(
        "{user_id}",
        encodeURIComponent(String(userId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.createUserNotificationRule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
        "CreateOnCallNotificationRuleRequest",
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

  public async deleteOnCallEscalationPolicy(
    policyId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError("policyId", "deleteOnCallEscalationPolicy");
    }

    // Path Params
    const localVarPath =
      "/api/v2/on-call/escalation-policies/{policy_id}".replace(
        "{policy_id}",
        encodeURIComponent(String(policyId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.deleteOnCallEscalationPolicy")
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

  public async deleteOnCallSchedule(
    scheduleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scheduleId' is not null or undefined
    if (scheduleId === null || scheduleId === undefined) {
      throw new RequiredError("scheduleId", "deleteOnCallSchedule");
    }

    // Path Params
    const localVarPath = "/api/v2/on-call/schedules/{schedule_id}".replace(
      "{schedule_id}",
      encodeURIComponent(String(scheduleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.deleteOnCallSchedule")
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

  public async deleteUserNotificationChannel(
    userId: string,
    channelId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError("userId", "deleteUserNotificationChannel");
    }

    // verify required parameter 'channelId' is not null or undefined
    if (channelId === null || channelId === undefined) {
      throw new RequiredError("channelId", "deleteUserNotificationChannel");
    }

    // Path Params
    const localVarPath =
      "/api/v2/on-call/users/{user_id}/notification-channels/{channel_id}"
        .replace("{user_id}", encodeURIComponent(String(userId)))
        .replace("{channel_id}", encodeURIComponent(String(channelId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.deleteUserNotificationChannel")
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

  public async deleteUserNotificationRule(
    userId: string,
    ruleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError("userId", "deleteUserNotificationRule");
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "deleteUserNotificationRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/on-call/users/{user_id}/notification-rules/{rule_id}"
        .replace("{user_id}", encodeURIComponent(String(userId)))
        .replace("{rule_id}", encodeURIComponent(String(ruleId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.deleteUserNotificationRule")
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

  public async getOnCallEscalationPolicy(
    policyId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError("policyId", "getOnCallEscalationPolicy");
    }

    // Path Params
    const localVarPath =
      "/api/v2/on-call/escalation-policies/{policy_id}".replace(
        "{policy_id}",
        encodeURIComponent(String(policyId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.getOnCallEscalationPolicy")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
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

  public async getOnCallSchedule(
    scheduleId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scheduleId' is not null or undefined
    if (scheduleId === null || scheduleId === undefined) {
      throw new RequiredError("scheduleId", "getOnCallSchedule");
    }

    // Path Params
    const localVarPath = "/api/v2/on-call/schedules/{schedule_id}".replace(
      "{schedule_id}",
      encodeURIComponent(String(scheduleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.getOnCallSchedule")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
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

  public async getOnCallTeamRoutingRules(
    teamId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "getOnCallTeamRoutingRules");
    }

    // Path Params
    const localVarPath =
      "/api/v2/on-call/teams/{team_id}/routing-rules".replace(
        "{team_id}",
        encodeURIComponent(String(teamId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.getOnCallTeamRoutingRules")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
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

  public async getScheduleOnCallUser(
    scheduleId: string,
    include?: string,
    filterAtTs?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scheduleId' is not null or undefined
    if (scheduleId === null || scheduleId === undefined) {
      throw new RequiredError("scheduleId", "getScheduleOnCallUser");
    }

    // Path Params
    const localVarPath =
      "/api/v2/on-call/schedules/{schedule_id}/on-call".replace(
        "{schedule_id}",
        encodeURIComponent(String(scheduleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.getScheduleOnCallUser")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }
    if (filterAtTs !== undefined) {
      requestContext.setQueryParam(
        "filter[at_ts]",
        ObjectSerializer.serialize(filterAtTs, "string", ""),
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

  public async getTeamOnCallUsers(
    teamId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "getTeamOnCallUsers");
    }

    // Path Params
    const localVarPath = "/api/v2/on-call/teams/{team_id}/on-call".replace(
      "{team_id}",
      encodeURIComponent(String(teamId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.getTeamOnCallUsers")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
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

  public async getUserNotificationChannel(
    userId: string,
    channelId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError("userId", "getUserNotificationChannel");
    }

    // verify required parameter 'channelId' is not null or undefined
    if (channelId === null || channelId === undefined) {
      throw new RequiredError("channelId", "getUserNotificationChannel");
    }

    // Path Params
    const localVarPath =
      "/api/v2/on-call/users/{user_id}/notification-channels/{channel_id}"
        .replace("{user_id}", encodeURIComponent(String(userId)))
        .replace("{channel_id}", encodeURIComponent(String(channelId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.getUserNotificationChannel")
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

  public async getUserNotificationRule(
    userId: string,
    ruleId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError("userId", "getUserNotificationRule");
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "getUserNotificationRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/on-call/users/{user_id}/notification-rules/{rule_id}"
        .replace("{user_id}", encodeURIComponent(String(userId)))
        .replace("{rule_id}", encodeURIComponent(String(ruleId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.getUserNotificationRule")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
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

  public async listUserNotificationChannels(
    userId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError("userId", "listUserNotificationChannels");
    }

    // Path Params
    const localVarPath =
      "/api/v2/on-call/users/{user_id}/notification-channels".replace(
        "{user_id}",
        encodeURIComponent(String(userId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.listUserNotificationChannels")
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

  public async listUserNotificationRules(
    userId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError("userId", "listUserNotificationRules");
    }

    // Path Params
    const localVarPath =
      "/api/v2/on-call/users/{user_id}/notification-rules".replace(
        "{user_id}",
        encodeURIComponent(String(userId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.listUserNotificationRules")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
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

  public async setOnCallTeamRoutingRules(
    teamId: string,
    body: TeamRoutingRulesRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new RequiredError("teamId", "setOnCallTeamRoutingRules");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "setOnCallTeamRoutingRules");
    }

    // Path Params
    const localVarPath =
      "/api/v2/on-call/teams/{team_id}/routing-rules".replace(
        "{team_id}",
        encodeURIComponent(String(teamId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.setOnCallTeamRoutingRules")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "TeamRoutingRulesRequest", ""),
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

  public async updateOnCallEscalationPolicy(
    policyId: string,
    body: EscalationPolicyUpdateRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'policyId' is not null or undefined
    if (policyId === null || policyId === undefined) {
      throw new RequiredError("policyId", "updateOnCallEscalationPolicy");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateOnCallEscalationPolicy");
    }

    // Path Params
    const localVarPath =
      "/api/v2/on-call/escalation-policies/{policy_id}".replace(
        "{policy_id}",
        encodeURIComponent(String(policyId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.updateOnCallEscalationPolicy")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "EscalationPolicyUpdateRequest", ""),
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

  public async updateOnCallSchedule(
    scheduleId: string,
    body: ScheduleUpdateRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scheduleId' is not null or undefined
    if (scheduleId === null || scheduleId === undefined) {
      throw new RequiredError("scheduleId", "updateOnCallSchedule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateOnCallSchedule");
    }

    // Path Params
    const localVarPath = "/api/v2/on-call/schedules/{schedule_id}".replace(
      "{schedule_id}",
      encodeURIComponent(String(scheduleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.updateOnCallSchedule")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ScheduleUpdateRequest", ""),
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

  public async updateUserNotificationRule(
    userId: string,
    ruleId: string,
    body: UpdateOnCallNotificationRuleRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError("userId", "updateUserNotificationRule");
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "updateUserNotificationRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateUserNotificationRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/on-call/users/{user_id}/notification-rules/{rule_id}"
        .replace("{user_id}", encodeURIComponent(String(userId)))
        .replace("{rule_id}", encodeURIComponent(String(ruleId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.updateUserNotificationRule")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "UpdateOnCallNotificationRuleRequest",
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

export class OnCallApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createOnCallEscalationPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOnCallEscalationPolicy(
    response: ResponseContext
  ): Promise<EscalationPolicy> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: EscalationPolicy = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EscalationPolicy"
      ) as EscalationPolicy;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: EscalationPolicy = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EscalationPolicy",
        ""
      ) as EscalationPolicy;
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
   * @params response Response returned by the server for a request to createOnCallSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOnCallSchedule(
    response: ResponseContext
  ): Promise<Schedule> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: Schedule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Schedule"
      ) as Schedule;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: Schedule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Schedule",
        ""
      ) as Schedule;
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
   * @params response Response returned by the server for a request to createUserNotificationChannel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createUserNotificationChannel(
    response: ResponseContext
  ): Promise<NotificationChannel> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: NotificationChannel = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationChannel"
      ) as NotificationChannel;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: NotificationChannel = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationChannel",
        ""
      ) as NotificationChannel;
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
   * @params response Response returned by the server for a request to createUserNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createUserNotificationRule(
    response: ResponseContext
  ): Promise<OnCallNotificationRule> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: OnCallNotificationRule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OnCallNotificationRule"
      ) as OnCallNotificationRule;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: OnCallNotificationRule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OnCallNotificationRule",
        ""
      ) as OnCallNotificationRule;
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
   * @params response Response returned by the server for a request to deleteOnCallEscalationPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOnCallEscalationPolicy(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 401 ||
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
   * @params response Response returned by the server for a request to deleteOnCallSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOnCallSchedule(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 401 ||
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
   * @params response Response returned by the server for a request to deleteUserNotificationChannel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteUserNotificationChannel(
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
      response.httpStatusCode === 401 ||
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
   * @params response Response returned by the server for a request to deleteUserNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteUserNotificationRule(
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
      response.httpStatusCode === 401 ||
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
   * @params response Response returned by the server for a request to getOnCallEscalationPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOnCallEscalationPolicy(
    response: ResponseContext
  ): Promise<EscalationPolicy> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: EscalationPolicy = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EscalationPolicy"
      ) as EscalationPolicy;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: EscalationPolicy = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EscalationPolicy",
        ""
      ) as EscalationPolicy;
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
   * @params response Response returned by the server for a request to getOnCallSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOnCallSchedule(response: ResponseContext): Promise<Schedule> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Schedule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Schedule"
      ) as Schedule;
      return body;
    }
    if (
      response.httpStatusCode === 401 ||
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
      const body: Schedule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Schedule",
        ""
      ) as Schedule;
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
   * @params response Response returned by the server for a request to getOnCallTeamRoutingRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOnCallTeamRoutingRules(
    response: ResponseContext
  ): Promise<TeamRoutingRules> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TeamRoutingRules = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamRoutingRules"
      ) as TeamRoutingRules;
      return body;
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
      const body: TeamRoutingRules = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamRoutingRules",
        ""
      ) as TeamRoutingRules;
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
   * @params response Response returned by the server for a request to getScheduleOnCallUser
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getScheduleOnCallUser(
    response: ResponseContext
  ): Promise<Shift> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Shift = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Shift"
      ) as Shift;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: Shift = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Shift",
        ""
      ) as Shift;
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
   * @params response Response returned by the server for a request to getTeamOnCallUsers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTeamOnCallUsers(
    response: ResponseContext
  ): Promise<TeamOnCallResponders> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TeamOnCallResponders = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamOnCallResponders"
      ) as TeamOnCallResponders;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: TeamOnCallResponders = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamOnCallResponders",
        ""
      ) as TeamOnCallResponders;
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
   * @params response Response returned by the server for a request to getUserNotificationChannel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUserNotificationChannel(
    response: ResponseContext
  ): Promise<NotificationChannel> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: NotificationChannel = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationChannel"
      ) as NotificationChannel;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: NotificationChannel = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationChannel",
        ""
      ) as NotificationChannel;
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
   * @params response Response returned by the server for a request to getUserNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUserNotificationRule(
    response: ResponseContext
  ): Promise<OnCallNotificationRule> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OnCallNotificationRule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OnCallNotificationRule"
      ) as OnCallNotificationRule;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: OnCallNotificationRule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OnCallNotificationRule",
        ""
      ) as OnCallNotificationRule;
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
   * @params response Response returned by the server for a request to listUserNotificationChannels
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listUserNotificationChannels(
    response: ResponseContext
  ): Promise<ListNotificationChannelsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListNotificationChannelsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ListNotificationChannelsResponse"
        ) as ListNotificationChannelsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: ListNotificationChannelsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ListNotificationChannelsResponse",
          ""
        ) as ListNotificationChannelsResponse;
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
   * @params response Response returned by the server for a request to listUserNotificationRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listUserNotificationRules(
    response: ResponseContext
  ): Promise<ListOnCallNotificationRulesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListOnCallNotificationRulesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ListOnCallNotificationRulesResponse"
        ) as ListOnCallNotificationRulesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: ListOnCallNotificationRulesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ListOnCallNotificationRulesResponse",
          ""
        ) as ListOnCallNotificationRulesResponse;
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
   * @params response Response returned by the server for a request to setOnCallTeamRoutingRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async setOnCallTeamRoutingRules(
    response: ResponseContext
  ): Promise<TeamRoutingRules> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TeamRoutingRules = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamRoutingRules"
      ) as TeamRoutingRules;
      return body;
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
      const body: TeamRoutingRules = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TeamRoutingRules",
        ""
      ) as TeamRoutingRules;
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
   * @params response Response returned by the server for a request to updateOnCallEscalationPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOnCallEscalationPolicy(
    response: ResponseContext
  ): Promise<EscalationPolicy> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: EscalationPolicy = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EscalationPolicy"
      ) as EscalationPolicy;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: EscalationPolicy = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EscalationPolicy",
        ""
      ) as EscalationPolicy;
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
   * @params response Response returned by the server for a request to updateOnCallSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOnCallSchedule(
    response: ResponseContext
  ): Promise<Schedule> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Schedule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Schedule"
      ) as Schedule;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: Schedule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Schedule",
        ""
      ) as Schedule;
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
   * @params response Response returned by the server for a request to updateUserNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateUserNotificationRule(
    response: ResponseContext
  ): Promise<OnCallNotificationRule> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OnCallNotificationRule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OnCallNotificationRule"
      ) as OnCallNotificationRule;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: OnCallNotificationRule = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OnCallNotificationRule",
        ""
      ) as OnCallNotificationRule;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface OnCallApiCreateOnCallEscalationPolicyRequest {
  /**
   * @type EscalationPolicyCreateRequest
   */
  body: EscalationPolicyCreateRequest;
  /**
   * Comma-separated list of included relationships to be returned. Allowed values: `teams`, `steps`, `steps.targets`.
   * @type string
   */
  include?: string;
}

export interface OnCallApiCreateOnCallScheduleRequest {
  /**
   * @type ScheduleCreateRequest
   */
  body: ScheduleCreateRequest;
  /**
   * Comma-separated list of included relationships to be returned. Allowed values: `teams`, `layers`, `layers.members`, `layers.members.user`.
   * @type string
   */
  include?: string;
}

export interface OnCallApiCreateUserNotificationChannelRequest {
  /**
   * The user ID
   * @type string
   */
  userId: string;
  /**
   * @type CreateUserNotificationChannelRequest
   */
  body: CreateUserNotificationChannelRequest;
}

export interface OnCallApiCreateUserNotificationRuleRequest {
  /**
   * The user ID
   * @type string
   */
  userId: string;
  /**
   * @type CreateOnCallNotificationRuleRequest
   */
  body: CreateOnCallNotificationRuleRequest;
}

export interface OnCallApiDeleteOnCallEscalationPolicyRequest {
  /**
   * The ID of the escalation policy
   * @type string
   */
  policyId: string;
}

export interface OnCallApiDeleteOnCallScheduleRequest {
  /**
   * The ID of the schedule
   * @type string
   */
  scheduleId: string;
}

export interface OnCallApiDeleteUserNotificationChannelRequest {
  /**
   * The user ID
   * @type string
   */
  userId: string;
  /**
   * The channel ID
   * @type string
   */
  channelId: string;
}

export interface OnCallApiDeleteUserNotificationRuleRequest {
  /**
   * The user ID
   * @type string
   */
  userId: string;
  /**
   * The rule ID
   * @type string
   */
  ruleId: string;
}

export interface OnCallApiGetOnCallEscalationPolicyRequest {
  /**
   * The ID of the escalation policy
   * @type string
   */
  policyId: string;
  /**
   * Comma-separated list of included relationships to be returned. Allowed values: `teams`, `steps`, `steps.targets`.
   * @type string
   */
  include?: string;
}

export interface OnCallApiGetOnCallScheduleRequest {
  /**
   * The ID of the schedule
   * @type string
   */
  scheduleId: string;
  /**
   * Comma-separated list of included relationships to be returned. Allowed values: `teams`, `layers`, `layers.members`, `layers.members.user`.
   * @type string
   */
  include?: string;
}

export interface OnCallApiGetOnCallTeamRoutingRulesRequest {
  /**
   * The team ID
   * @type string
   */
  teamId: string;
  /**
   * Comma-separated list of included relationships to be returned. Allowed values: `rules`, `rules.policy`.
   * @type string
   */
  include?: string;
}

export interface OnCallApiGetScheduleOnCallUserRequest {
  /**
   * The ID of the schedule.
   * @type string
   */
  scheduleId: string;
  /**
   * Specifies related resources to include in the response as a comma-separated list. Allowed value: `user`.
   * @type string
   */
  include?: string;
  /**
   * Retrieves the on-call user at the given timestamp (ISO-8601). Defaults to the current time if omitted."
   * @type string
   */
  filterAtTs?: string;
}

export interface OnCallApiGetTeamOnCallUsersRequest {
  /**
   * The team ID
   * @type string
   */
  teamId: string;
  /**
   * Comma-separated list of included relationships to be returned. Allowed values: `responders`, `escalations`, `escalations.responders`.
   * @type string
   */
  include?: string;
}

export interface OnCallApiGetUserNotificationChannelRequest {
  /**
   * The user ID
   * @type string
   */
  userId: string;
  /**
   * The channel ID
   * @type string
   */
  channelId: string;
}

export interface OnCallApiGetUserNotificationRuleRequest {
  /**
   * The user ID
   * @type string
   */
  userId: string;
  /**
   * The rule ID
   * @type string
   */
  ruleId: string;
  /**
   * Comma-separated list of included relationships to be returned. Allowed values: `channel`.
   * @type string
   */
  include?: string;
}

export interface OnCallApiListUserNotificationChannelsRequest {
  /**
   * The user ID
   * @type string
   */
  userId: string;
}

export interface OnCallApiListUserNotificationRulesRequest {
  /**
   * The user ID
   * @type string
   */
  userId: string;
  /**
   * Comma-separated list of included relationships to be returned. Allowed values: `channel`.
   * @type string
   */
  include?: string;
}

export interface OnCallApiSetOnCallTeamRoutingRulesRequest {
  /**
   * The team ID
   * @type string
   */
  teamId: string;
  /**
   * @type TeamRoutingRulesRequest
   */
  body: TeamRoutingRulesRequest;
  /**
   * Comma-separated list of included relationships to be returned. Allowed values: `rules`, `rules.policy`.
   * @type string
   */
  include?: string;
}

export interface OnCallApiUpdateOnCallEscalationPolicyRequest {
  /**
   * The ID of the escalation policy
   * @type string
   */
  policyId: string;
  /**
   * @type EscalationPolicyUpdateRequest
   */
  body: EscalationPolicyUpdateRequest;
  /**
   * Comma-separated list of included relationships to be returned. Allowed values: `teams`, `steps`, `steps.targets`.
   * @type string
   */
  include?: string;
}

export interface OnCallApiUpdateOnCallScheduleRequest {
  /**
   * The ID of the schedule
   * @type string
   */
  scheduleId: string;
  /**
   * @type ScheduleUpdateRequest
   */
  body: ScheduleUpdateRequest;
  /**
   * Comma-separated list of included relationships to be returned. Allowed values: `teams`, `layers`, `layers.members`, `layers.members.user`.
   * @type string
   */
  include?: string;
}

export interface OnCallApiUpdateUserNotificationRuleRequest {
  /**
   * The user ID
   * @type string
   */
  userId: string;
  /**
   * The rule ID
   * @type string
   */
  ruleId: string;
  /**
   * @type UpdateOnCallNotificationRuleRequest
   */
  body: UpdateOnCallNotificationRuleRequest;
  /**
   * Comma-separated list of included relationships to be returned. Allowed values: `channel`.
   * @type string
   */
  include?: string;
}

export class OnCallApi {
  private requestFactory: OnCallApiRequestFactory;
  private responseProcessor: OnCallApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: OnCallApiRequestFactory,
    responseProcessor?: OnCallApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new OnCallApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new OnCallApiResponseProcessor();
  }

  /**
   * Create a new On-Call escalation policy
   * @param param The request object
   */
  public createOnCallEscalationPolicy(
    param: OnCallApiCreateOnCallEscalationPolicyRequest,
    options?: Configuration
  ): Promise<EscalationPolicy> {
    const requestContextPromise =
      this.requestFactory.createOnCallEscalationPolicy(
        param.body,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOnCallEscalationPolicy(
            responseContext
          );
        });
    });
  }

  /**
   * Create a new On-Call schedule
   * @param param The request object
   */
  public createOnCallSchedule(
    param: OnCallApiCreateOnCallScheduleRequest,
    options?: Configuration
  ): Promise<Schedule> {
    const requestContextPromise = this.requestFactory.createOnCallSchedule(
      param.body,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOnCallSchedule(responseContext);
        });
    });
  }

  /**
   * Create a new notification channel for a user. The authenticated user must be the target user or have the `on_call_admin` permission
   * @param param The request object
   */
  public createUserNotificationChannel(
    param: OnCallApiCreateUserNotificationChannelRequest,
    options?: Configuration
  ): Promise<NotificationChannel> {
    const requestContextPromise =
      this.requestFactory.createUserNotificationChannel(
        param.userId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createUserNotificationChannel(
            responseContext
          );
        });
    });
  }

  /**
   * Create a new notification rule for a user. The authenticated user must be the target user or have the `on_call_admin` permission
   * @param param The request object
   */
  public createUserNotificationRule(
    param: OnCallApiCreateUserNotificationRuleRequest,
    options?: Configuration
  ): Promise<OnCallNotificationRule> {
    const requestContextPromise =
      this.requestFactory.createUserNotificationRule(
        param.userId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createUserNotificationRule(
            responseContext
          );
        });
    });
  }

  /**
   * Delete an On-Call escalation policy
   * @param param The request object
   */
  public deleteOnCallEscalationPolicy(
    param: OnCallApiDeleteOnCallEscalationPolicyRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteOnCallEscalationPolicy(param.policyId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOnCallEscalationPolicy(
            responseContext
          );
        });
    });
  }

  /**
   * Delete an On-Call schedule
   * @param param The request object
   */
  public deleteOnCallSchedule(
    param: OnCallApiDeleteOnCallScheduleRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteOnCallSchedule(
      param.scheduleId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOnCallSchedule(responseContext);
        });
    });
  }

  /**
   * Delete a notification channel for a user. The authenticated user must be the target user or have the `on_call_admin` permission
   * @param param The request object
   */
  public deleteUserNotificationChannel(
    param: OnCallApiDeleteUserNotificationChannelRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteUserNotificationChannel(
        param.userId,
        param.channelId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteUserNotificationChannel(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a notification rule for a user. The authenticated user must be the target user or have the `on_call_admin` permission
   * @param param The request object
   */
  public deleteUserNotificationRule(
    param: OnCallApiDeleteUserNotificationRuleRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteUserNotificationRule(
        param.userId,
        param.ruleId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteUserNotificationRule(
            responseContext
          );
        });
    });
  }

  /**
   * Get an On-Call escalation policy
   * @param param The request object
   */
  public getOnCallEscalationPolicy(
    param: OnCallApiGetOnCallEscalationPolicyRequest,
    options?: Configuration
  ): Promise<EscalationPolicy> {
    const requestContextPromise = this.requestFactory.getOnCallEscalationPolicy(
      param.policyId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOnCallEscalationPolicy(
            responseContext
          );
        });
    });
  }

  /**
   * Get an On-Call schedule
   * @param param The request object
   */
  public getOnCallSchedule(
    param: OnCallApiGetOnCallScheduleRequest,
    options?: Configuration
  ): Promise<Schedule> {
    const requestContextPromise = this.requestFactory.getOnCallSchedule(
      param.scheduleId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOnCallSchedule(responseContext);
        });
    });
  }

  /**
   * Get a team's On-Call routing rules
   * @param param The request object
   */
  public getOnCallTeamRoutingRules(
    param: OnCallApiGetOnCallTeamRoutingRulesRequest,
    options?: Configuration
  ): Promise<TeamRoutingRules> {
    const requestContextPromise = this.requestFactory.getOnCallTeamRoutingRules(
      param.teamId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOnCallTeamRoutingRules(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieves the user who is on-call for the specified schedule at a given time.
   * @param param The request object
   */
  public getScheduleOnCallUser(
    param: OnCallApiGetScheduleOnCallUserRequest,
    options?: Configuration
  ): Promise<Shift> {
    const requestContextPromise = this.requestFactory.getScheduleOnCallUser(
      param.scheduleId,
      param.include,
      param.filterAtTs,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getScheduleOnCallUser(responseContext);
        });
    });
  }

  /**
   * Get a team's on-call users at a given time
   * @param param The request object
   */
  public getTeamOnCallUsers(
    param: OnCallApiGetTeamOnCallUsersRequest,
    options?: Configuration
  ): Promise<TeamOnCallResponders> {
    const requestContextPromise = this.requestFactory.getTeamOnCallUsers(
      param.teamId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTeamOnCallUsers(responseContext);
        });
    });
  }

  /**
   * Get a notification channel for a user. The authenticated user must be the target user or have the `on_call_admin` permission
   * @param param The request object
   */
  public getUserNotificationChannel(
    param: OnCallApiGetUserNotificationChannelRequest,
    options?: Configuration
  ): Promise<NotificationChannel> {
    const requestContextPromise =
      this.requestFactory.getUserNotificationChannel(
        param.userId,
        param.channelId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUserNotificationChannel(
            responseContext
          );
        });
    });
  }

  /**
   * Get a notification rule for a user. The authenticated user must be the target user or have the `on_call_admin` permission
   * @param param The request object
   */
  public getUserNotificationRule(
    param: OnCallApiGetUserNotificationRuleRequest,
    options?: Configuration
  ): Promise<OnCallNotificationRule> {
    const requestContextPromise = this.requestFactory.getUserNotificationRule(
      param.userId,
      param.ruleId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUserNotificationRule(
            responseContext
          );
        });
    });
  }

  /**
   * List the notification channels for a user. The authenticated user must be the target user or have the `on_call_admin` permission
   * @param param The request object
   */
  public listUserNotificationChannels(
    param: OnCallApiListUserNotificationChannelsRequest,
    options?: Configuration
  ): Promise<ListNotificationChannelsResponse> {
    const requestContextPromise =
      this.requestFactory.listUserNotificationChannels(param.userId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listUserNotificationChannels(
            responseContext
          );
        });
    });
  }

  /**
   * List the notification rules for a user. The authenticated user must be the target user or have the `on_call_admin` permission
   * @param param The request object
   */
  public listUserNotificationRules(
    param: OnCallApiListUserNotificationRulesRequest,
    options?: Configuration
  ): Promise<ListOnCallNotificationRulesResponse> {
    const requestContextPromise = this.requestFactory.listUserNotificationRules(
      param.userId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listUserNotificationRules(
            responseContext
          );
        });
    });
  }

  /**
   * Set a team's On-Call routing rules
   * @param param The request object
   */
  public setOnCallTeamRoutingRules(
    param: OnCallApiSetOnCallTeamRoutingRulesRequest,
    options?: Configuration
  ): Promise<TeamRoutingRules> {
    const requestContextPromise = this.requestFactory.setOnCallTeamRoutingRules(
      param.teamId,
      param.body,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.setOnCallTeamRoutingRules(
            responseContext
          );
        });
    });
  }

  /**
   * Update an On-Call escalation policy
   * @param param The request object
   */
  public updateOnCallEscalationPolicy(
    param: OnCallApiUpdateOnCallEscalationPolicyRequest,
    options?: Configuration
  ): Promise<EscalationPolicy> {
    const requestContextPromise =
      this.requestFactory.updateOnCallEscalationPolicy(
        param.policyId,
        param.body,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOnCallEscalationPolicy(
            responseContext
          );
        });
    });
  }

  /**
   * Update a new On-Call schedule
   * @param param The request object
   */
  public updateOnCallSchedule(
    param: OnCallApiUpdateOnCallScheduleRequest,
    options?: Configuration
  ): Promise<Schedule> {
    const requestContextPromise = this.requestFactory.updateOnCallSchedule(
      param.scheduleId,
      param.body,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOnCallSchedule(responseContext);
        });
    });
  }

  /**
   * Update a notification rule for a user. The authenticated user must be the target user or have the `on_call_admin` permission
   * @param param The request object
   */
  public updateUserNotificationRule(
    param: OnCallApiUpdateUserNotificationRuleRequest,
    options?: Configuration
  ): Promise<OnCallNotificationRule> {
    const requestContextPromise =
      this.requestFactory.updateUserNotificationRule(
        param.userId,
        param.ruleId,
        param.body,
        param.include,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateUserNotificationRule(
            responseContext
          );
        });
    });
  }
}
