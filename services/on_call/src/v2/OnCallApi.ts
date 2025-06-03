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
import { EscalationPolicy } from "./models/EscalationPolicy";
import { EscalationPolicyCreateRequest } from "./models/EscalationPolicyCreateRequest";
import { EscalationPolicyUpdateRequest } from "./models/EscalationPolicyUpdateRequest";
import { Schedule } from "./models/Schedule";
import { ScheduleCreateRequest } from "./models/ScheduleCreateRequest";
import { ScheduleUpdateRequest } from "./models/ScheduleUpdateRequest";
import { Shift } from "./models/Shift";
import { TeamRoutingRules } from "./models/TeamRoutingRules";
import { TeamRoutingRulesRequest } from "./models/TeamRoutingRulesRequest";
import { version } from "../version";

export class OnCallApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("on-call", version);
    }
  }
  public async createOnCallEscalationPolicy(
    body: EscalationPolicyCreateRequest,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOnCallEscalationPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/on-call/escalation-policies";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OnCallApi.v2.createOnCallEscalationPolicy",
      OnCallApi.operationServers,
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
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "EscalationPolicyCreateRequest", ""),
      contentType,
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOnCallSchedule");
    }

    // Path Params
    const localVarPath = "/api/v2/on-call/schedules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OnCallApi.v2.createOnCallSchedule",
      OnCallApi.operationServers,
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
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "ScheduleCreateRequest", ""),
      contentType,
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
    _options?: Configuration,
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
        encodeURIComponent(String(policyId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OnCallApi.v2.deleteOnCallEscalationPolicy",
      OnCallApi.operationServers,
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteOnCallSchedule(
    scheduleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scheduleId' is not null or undefined
    if (scheduleId === null || scheduleId === undefined) {
      throw new RequiredError("scheduleId", "deleteOnCallSchedule");
    }

    // Path Params
    const localVarPath = "/api/v2/on-call/schedules/{schedule_id}".replace(
      "{schedule_id}",
      encodeURIComponent(String(scheduleId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OnCallApi.v2.deleteOnCallSchedule",
      OnCallApi.operationServers,
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getOnCallEscalationPolicy(
    policyId: string,
    include?: string,
    _options?: Configuration,
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
        encodeURIComponent(String(policyId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OnCallApi.v2.getOnCallEscalationPolicy",
      OnCallApi.operationServers,
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
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scheduleId' is not null or undefined
    if (scheduleId === null || scheduleId === undefined) {
      throw new RequiredError("scheduleId", "getOnCallSchedule");
    }

    // Path Params
    const localVarPath = "/api/v2/on-call/schedules/{schedule_id}".replace(
      "{schedule_id}",
      encodeURIComponent(String(scheduleId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OnCallApi.v2.getOnCallSchedule",
      OnCallApi.operationServers,
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
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
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
    _options?: Configuration,
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
        encodeURIComponent(String(teamId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OnCallApi.v2.getOnCallTeamRoutingRules",
      OnCallApi.operationServers,
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
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
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
    _options?: Configuration,
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
        encodeURIComponent(String(scheduleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OnCallApi.v2.getScheduleOnCallUser",
      OnCallApi.operationServers,
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
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAtTs !== undefined) {
      requestContext.setQueryParam(
        "filter[at_ts]",
        serialize(filterAtTs, TypingInfo, "string", ""),
        "",
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
    _options?: Configuration,
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
        encodeURIComponent(String(teamId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OnCallApi.v2.setOnCallTeamRoutingRules",
      OnCallApi.operationServers,
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

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "TeamRoutingRulesRequest", ""),
      contentType,
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
    _options?: Configuration,
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
        encodeURIComponent(String(policyId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OnCallApi.v2.updateOnCallEscalationPolicy",
      OnCallApi.operationServers,
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

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "EscalationPolicyUpdateRequest", ""),
      contentType,
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
    _options?: Configuration,
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
      encodeURIComponent(String(scheduleId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OnCallApi.v2.updateOnCallSchedule",
      OnCallApi.operationServers,
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

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "ScheduleUpdateRequest", ""),
      contentType,
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
    response: ResponseContext,
  ): Promise<EscalationPolicy> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: EscalationPolicy = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EscalationPolicy",
      ) as EscalationPolicy;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: EscalationPolicy = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EscalationPolicy",
        "",
      ) as EscalationPolicy;
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
   * @params response Response returned by the server for a request to createOnCallSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOnCallSchedule(
    response: ResponseContext,
  ): Promise<Schedule> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: Schedule = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Schedule",
      ) as Schedule;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: Schedule = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Schedule",
        "",
      ) as Schedule;
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
   * @params response Response returned by the server for a request to deleteOnCallEscalationPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOnCallEscalationPolicy(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 401 ||
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
   * @params response Response returned by the server for a request to deleteOnCallSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOnCallSchedule(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 401 ||
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
   * @params response Response returned by the server for a request to getOnCallEscalationPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOnCallEscalationPolicy(
    response: ResponseContext,
  ): Promise<EscalationPolicy> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: EscalationPolicy = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EscalationPolicy",
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
      const body: EscalationPolicy = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EscalationPolicy",
        "",
      ) as EscalationPolicy;
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
   * @params response Response returned by the server for a request to getOnCallSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOnCallSchedule(response: ResponseContext): Promise<Schedule> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: Schedule = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Schedule",
      ) as Schedule;
      return body;
    }
    if (
      response.httpStatusCode === 401 ||
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
      const body: Schedule = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Schedule",
        "",
      ) as Schedule;
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
   * @params response Response returned by the server for a request to getOnCallTeamRoutingRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOnCallTeamRoutingRules(
    response: ResponseContext,
  ): Promise<TeamRoutingRules> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamRoutingRules = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamRoutingRules",
      ) as TeamRoutingRules;
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
      const body: TeamRoutingRules = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamRoutingRules",
        "",
      ) as TeamRoutingRules;
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
   * @params response Response returned by the server for a request to getScheduleOnCallUser
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getScheduleOnCallUser(
    response: ResponseContext,
  ): Promise<Shift> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: Shift = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Shift",
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
      const body: Shift = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Shift",
        "",
      ) as Shift;
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
   * @params response Response returned by the server for a request to setOnCallTeamRoutingRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async setOnCallTeamRoutingRules(
    response: ResponseContext,
  ): Promise<TeamRoutingRules> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TeamRoutingRules = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamRoutingRules",
      ) as TeamRoutingRules;
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
      const body: TeamRoutingRules = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TeamRoutingRules",
        "",
      ) as TeamRoutingRules;
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
   * @params response Response returned by the server for a request to updateOnCallEscalationPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOnCallEscalationPolicy(
    response: ResponseContext,
  ): Promise<EscalationPolicy> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: EscalationPolicy = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EscalationPolicy",
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
      const body: EscalationPolicy = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EscalationPolicy",
        "",
      ) as EscalationPolicy;
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
   * @params response Response returned by the server for a request to updateOnCallSchedule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOnCallSchedule(
    response: ResponseContext,
  ): Promise<Schedule> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: Schedule = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Schedule",
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
      const body: Schedule = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Schedule",
        "",
      ) as Schedule;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
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

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: OnCallApiRequestFactory,
    responseProcessor?: OnCallApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new OnCallApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new OnCallApiResponseProcessor();
  }

  /**
   * Create a new On-Call escalation policy
   * @param param The request object
   */
  public createOnCallEscalationPolicy(
    param: OnCallApiCreateOnCallEscalationPolicyRequest,
    options?: Configuration,
  ): Promise<EscalationPolicy> {
    const requestContextPromise =
      this.requestFactory.createOnCallEscalationPolicy(
        param.body,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOnCallEscalationPolicy(
            responseContext,
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
    options?: Configuration,
  ): Promise<Schedule> {
    const requestContextPromise = this.requestFactory.createOnCallSchedule(
      param.body,
      param.include,
      options,
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
   * Delete an On-Call escalation policy
   * @param param The request object
   */
  public deleteOnCallEscalationPolicy(
    param: OnCallApiDeleteOnCallEscalationPolicyRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteOnCallEscalationPolicy(param.policyId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOnCallEscalationPolicy(
            responseContext,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteOnCallSchedule(
      param.scheduleId,
      options,
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
   * Get an On-Call escalation policy
   * @param param The request object
   */
  public getOnCallEscalationPolicy(
    param: OnCallApiGetOnCallEscalationPolicyRequest,
    options?: Configuration,
  ): Promise<EscalationPolicy> {
    const requestContextPromise = this.requestFactory.getOnCallEscalationPolicy(
      param.policyId,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOnCallEscalationPolicy(
            responseContext,
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
    options?: Configuration,
  ): Promise<Schedule> {
    const requestContextPromise = this.requestFactory.getOnCallSchedule(
      param.scheduleId,
      param.include,
      options,
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
    options?: Configuration,
  ): Promise<TeamRoutingRules> {
    const requestContextPromise = this.requestFactory.getOnCallTeamRoutingRules(
      param.teamId,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOnCallTeamRoutingRules(
            responseContext,
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
    options?: Configuration,
  ): Promise<Shift> {
    const requestContextPromise = this.requestFactory.getScheduleOnCallUser(
      param.scheduleId,
      param.include,
      param.filterAtTs,
      options,
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
   * Set a team's On-Call routing rules
   * @param param The request object
   */
  public setOnCallTeamRoutingRules(
    param: OnCallApiSetOnCallTeamRoutingRulesRequest,
    options?: Configuration,
  ): Promise<TeamRoutingRules> {
    const requestContextPromise = this.requestFactory.setOnCallTeamRoutingRules(
      param.teamId,
      param.body,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.setOnCallTeamRoutingRules(
            responseContext,
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
    options?: Configuration,
  ): Promise<EscalationPolicy> {
    const requestContextPromise =
      this.requestFactory.updateOnCallEscalationPolicy(
        param.policyId,
        param.body,
        param.include,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOnCallEscalationPolicy(
            responseContext,
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
    options?: Configuration,
  ): Promise<Schedule> {
    const requestContextPromise = this.requestFactory.updateOnCallSchedule(
      param.scheduleId,
      param.body,
      param.include,
      options,
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
