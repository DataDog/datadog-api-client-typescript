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
import { EscalationPoliciesResponse } from "../models/EscalationPoliciesResponse";
import { EscalationPolicy } from "../models/EscalationPolicy";
import { EscalationPolicyCreateRequest } from "../models/EscalationPolicyCreateRequest";
import { EscalationPolicyUpdateRequest } from "../models/EscalationPolicyUpdateRequest";
import { OverrideRequest } from "../models/OverrideRequest";
import { OverrideResponse } from "../models/OverrideResponse";
import { OverridesResponse } from "../models/OverridesResponse";
import { Schedule } from "../models/Schedule";
import { ScheduleCreateRequest } from "../models/ScheduleCreateRequest";
import { SchedulesResponse } from "../models/SchedulesResponse";
import { ScheduleUpdateRequest } from "../models/ScheduleUpdateRequest";
import { Shift } from "../models/Shift";
import { TeamOnCallResponders } from "../models/TeamOnCallResponders";
import { TeamRoutingRules } from "../models/TeamRoutingRules";
import { TeamRoutingRulesRequest } from "../models/TeamRoutingRulesRequest";

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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createOnCallScheduleOverride(
    scheduleId: string,
    body: OverrideRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scheduleId' is not null or undefined
    if (scheduleId === null || scheduleId === undefined) {
      throw new RequiredError("scheduleId", "createOnCallScheduleOverride");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOnCallScheduleOverride");
    }

    // Path Params
    const localVarPath =
      "/api/v2/on-call/schedules/{schedule_id}/overrides".replace(
        "{schedule_id}",
        encodeURIComponent(String(scheduleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.createOnCallScheduleOverride")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "OverrideRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteOnCallScheduleOverride(
    scheduleId: string,
    overrideId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scheduleId' is not null or undefined
    if (scheduleId === null || scheduleId === undefined) {
      throw new RequiredError("scheduleId", "deleteOnCallScheduleOverride");
    }

    // verify required parameter 'overrideId' is not null or undefined
    if (overrideId === null || overrideId === undefined) {
      throw new RequiredError("overrideId", "deleteOnCallScheduleOverride");
    }

    // Path Params
    const localVarPath =
      "/api/v2/on-call/schedules/{schedule_id}/overrides/{override_id}"
        .replace("{schedule_id}", encodeURIComponent(String(scheduleId)))
        .replace("{override_id}", encodeURIComponent(String(overrideId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.deleteOnCallScheduleOverride")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listOnCallEscalationPolicies(
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/on-call/escalation-policies";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.listOnCallEscalationPolicies")
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listOnCallScheduleOverrides(
    scheduleId: string,
    filterStart: string,
    filterEnd: string,
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scheduleId' is not null or undefined
    if (scheduleId === null || scheduleId === undefined) {
      throw new RequiredError("scheduleId", "listOnCallScheduleOverrides");
    }

    // verify required parameter 'filterStart' is not null or undefined
    if (filterStart === null || filterStart === undefined) {
      throw new RequiredError("filterStart", "listOnCallScheduleOverrides");
    }

    // verify required parameter 'filterEnd' is not null or undefined
    if (filterEnd === null || filterEnd === undefined) {
      throw new RequiredError("filterEnd", "listOnCallScheduleOverrides");
    }

    // Path Params
    const localVarPath =
      "/api/v2/on-call/schedules/{schedule_id}/overrides".replace(
        "{schedule_id}",
        encodeURIComponent(String(scheduleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.listOnCallScheduleOverrides")
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
    if (filterStart !== undefined) {
      requestContext.setQueryParam(
        "filter[start]",
        ObjectSerializer.serialize(filterStart, "string", ""),
        ""
      );
    }
    if (filterEnd !== undefined) {
      requestContext.setQueryParam(
        "filter[end]",
        ObjectSerializer.serialize(filterEnd, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listOnCallSchedules(
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/on-call/schedules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.OnCallApi.listOnCallSchedules")
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
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
   * @params response Response returned by the server for a request to createOnCallScheduleOverride
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOnCallScheduleOverride(
    response: ResponseContext
  ): Promise<OverrideResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: OverrideResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OverrideResponse"
      ) as OverrideResponse;
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
      const body: OverrideResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OverrideResponse",
        ""
      ) as OverrideResponse;
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
   * @params response Response returned by the server for a request to deleteOnCallScheduleOverride
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOnCallScheduleOverride(
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
   * @params response Response returned by the server for a request to listOnCallEscalationPolicies
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOnCallEscalationPolicies(
    response: ResponseContext
  ): Promise<EscalationPoliciesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: EscalationPoliciesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EscalationPoliciesResponse"
      ) as EscalationPoliciesResponse;
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
      const body: EscalationPoliciesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EscalationPoliciesResponse",
        ""
      ) as EscalationPoliciesResponse;
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
   * @params response Response returned by the server for a request to listOnCallScheduleOverrides
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOnCallScheduleOverrides(
    response: ResponseContext
  ): Promise<OverridesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OverridesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OverridesResponse"
      ) as OverridesResponse;
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
      const body: OverridesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OverridesResponse",
        ""
      ) as OverridesResponse;
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
   * @params response Response returned by the server for a request to listOnCallSchedules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOnCallSchedules(
    response: ResponseContext
  ): Promise<SchedulesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SchedulesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SchedulesResponse"
      ) as SchedulesResponse;
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
      const body: SchedulesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SchedulesResponse",
        ""
      ) as SchedulesResponse;
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

export interface OnCallApiCreateOnCallScheduleOverrideRequest {
  /**
   * The ID of the on-call schedule.
   * @type string
   */
  scheduleId: string;
  /**
   * @type OverrideRequest
   */
  body: OverrideRequest;
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

export interface OnCallApiDeleteOnCallScheduleOverrideRequest {
  /**
   * The ID of the on-call schedule.
   * @type string
   */
  scheduleId: string;
  /**
   * The ID of the override.
   * @type string
   */
  overrideId: string;
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

export interface OnCallApiListOnCallEscalationPoliciesRequest {
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
}

export interface OnCallApiListOnCallScheduleOverridesRequest {
  /**
   * The ID of the on-call schedule.
   * @type string
   */
  scheduleId: string;
  /**
   * The start time (in ISO-8601 format) of the time range to filter overrides by. Only overrides that overlap with this time range will be returned.
   * @type string
   */
  filterStart: string;
  /**
   * The end time (in ISO-8601 format) of the time range to filter overrides by. Only overrides that overlap with this time range will be returned.
   * @type string
   */
  filterEnd: string;
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
}

export interface OnCallApiListOnCallSchedulesRequest {
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
   * Create an override for a given schedule.
   * @param param The request object
   */
  public createOnCallScheduleOverride(
    param: OnCallApiCreateOnCallScheduleOverrideRequest,
    options?: Configuration
  ): Promise<OverrideResponse> {
    const requestContextPromise =
      this.requestFactory.createOnCallScheduleOverride(
        param.scheduleId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOnCallScheduleOverride(
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
   * Delete an override for a given schedule.
   * @param param The request object
   */
  public deleteOnCallScheduleOverride(
    param: OnCallApiDeleteOnCallScheduleOverrideRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteOnCallScheduleOverride(
        param.scheduleId,
        param.overrideId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOnCallScheduleOverride(
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
   * Get a list of all escalation policies.
   * @param param The request object
   */
  public listOnCallEscalationPolicies(
    param: OnCallApiListOnCallEscalationPoliciesRequest = {},
    options?: Configuration
  ): Promise<EscalationPoliciesResponse> {
    const requestContextPromise =
      this.requestFactory.listOnCallEscalationPolicies(
        param.pageSize,
        param.pageNumber,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOnCallEscalationPolicies(
            responseContext
          );
        });
    });
  }

  /**
   * Get a list of all overrides for a given schedule.
   * @param param The request object
   */
  public listOnCallScheduleOverrides(
    param: OnCallApiListOnCallScheduleOverridesRequest,
    options?: Configuration
  ): Promise<OverridesResponse> {
    const requestContextPromise =
      this.requestFactory.listOnCallScheduleOverrides(
        param.scheduleId,
        param.filterStart,
        param.filterEnd,
        param.pageSize,
        param.pageNumber,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOnCallScheduleOverrides(
            responseContext
          );
        });
    });
  }

  /**
   * Get a list of all on-call schedules.
   * @param param The request object
   */
  public listOnCallSchedules(
    param: OnCallApiListOnCallSchedulesRequest = {},
    options?: Configuration
  ): Promise<SchedulesResponse> {
    const requestContextPromise = this.requestFactory.listOnCallSchedules(
      param.pageSize,
      param.pageNumber,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOnCallSchedules(responseContext);
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
}
