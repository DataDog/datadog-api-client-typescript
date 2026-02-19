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
import { CampaignResponse } from "./models/CampaignResponse";
import { CreateCampaignRequest } from "./models/CreateCampaignRequest";
import { CreateRuleRequest } from "./models/CreateRuleRequest";
import { CreateRuleResponse } from "./models/CreateRuleResponse";
import { GenerateCampaignReportRequest } from "./models/GenerateCampaignReportRequest";
import { GenerateCampaignTeamReportsRequest } from "./models/GenerateCampaignTeamReportsRequest";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { ListCampaignsResponse } from "./models/ListCampaignsResponse";
import { ListDefaultRulesResponse } from "./models/ListDefaultRulesResponse";
import { ListFacetsResponse } from "./models/ListFacetsResponse";
import { ListRulesResponse } from "./models/ListRulesResponse";
import { ListRulesResponseDataItem } from "./models/ListRulesResponseDataItem";
import { ListScorecardsResponse } from "./models/ListScorecardsResponse";
import { ListScoresResponse } from "./models/ListScoresResponse";
import { OutcomesBatchRequest } from "./models/OutcomesBatchRequest";
import { OutcomesBatchResponse } from "./models/OutcomesBatchResponse";
import { OutcomesResponse } from "./models/OutcomesResponse";
import { OutcomesResponseDataItem } from "./models/OutcomesResponseDataItem";
import { SetupRulesRequest } from "./models/SetupRulesRequest";
import { UpdateCampaignRequest } from "./models/UpdateCampaignRequest";
import { UpdateOutcomesAsyncRequest } from "./models/UpdateOutcomesAsyncRequest";
import { UpdateRuleRequest } from "./models/UpdateRuleRequest";
import { UpdateRuleResponse } from "./models/UpdateRuleResponse";
import { version } from "../version";

export class ServiceScorecardsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("service-scorecards", version);
    }
  }
  public async createScorecardCampaign(
    body: CreateCampaignRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceScorecardsApi.v2.createScorecardCampaign"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createScorecardCampaign' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.createScorecardCampaign'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createScorecardCampaign");
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/campaigns";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.createScorecardCampaign",
      ServiceScorecardsApi.operationServers,
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
      serialize(body, TypingInfo, "CreateCampaignRequest", ""),
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

  public async createScorecardOutcomesBatch(
    body: OutcomesBatchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceScorecardsApi.v2.createScorecardOutcomesBatch"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createScorecardOutcomesBatch' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.createScorecardOutcomesBatch'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createScorecardOutcomesBatch");
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/outcomes/batch";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.createScorecardOutcomesBatch",
      ServiceScorecardsApi.operationServers,
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
      serialize(body, TypingInfo, "OutcomesBatchRequest", ""),
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

  public async createScorecardRule(
    body: CreateRuleRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["ServiceScorecardsApi.v2.createScorecardRule"]
    ) {
      throw new Error(
        "Unstable operation 'createScorecardRule' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.createScorecardRule'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createScorecardRule");
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.createScorecardRule",
      ServiceScorecardsApi.operationServers,
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
      serialize(body, TypingInfo, "CreateRuleRequest", ""),
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

  public async deleteScorecardCampaign(
    campaignId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceScorecardsApi.v2.deleteScorecardCampaign"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteScorecardCampaign' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.deleteScorecardCampaign'] = true`",
      );
    }

    // verify required parameter 'campaignId' is not null or undefined
    if (campaignId === null || campaignId === undefined) {
      throw new RequiredError("campaignId", "deleteScorecardCampaign");
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/campaigns/{campaign_id}".replace(
      "{campaign_id}",
      encodeURIComponent(String(campaignId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.deleteScorecardCampaign",
      ServiceScorecardsApi.operationServers,
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

  public async deleteScorecardRule(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["ServiceScorecardsApi.v2.deleteScorecardRule"]
    ) {
      throw new Error(
        "Unstable operation 'deleteScorecardRule' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.deleteScorecardRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "deleteScorecardRule");
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.deleteScorecardRule",
      ServiceScorecardsApi.operationServers,
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

  public async deleteScorecardRuleWorkflow(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceScorecardsApi.v2.deleteScorecardRuleWorkflow"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteScorecardRuleWorkflow' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.deleteScorecardRuleWorkflow'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "deleteScorecardRuleWorkflow");
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/rules/{rule_id}/workflow".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.deleteScorecardRuleWorkflow",
      ServiceScorecardsApi.operationServers,
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

  public async generateScorecardCampaignReport(
    campaignId: string,
    body: GenerateCampaignReportRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceScorecardsApi.v2.generateScorecardCampaignReport"
      ]
    ) {
      throw new Error(
        "Unstable operation 'generateScorecardCampaignReport' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.generateScorecardCampaignReport'] = true`",
      );
    }

    // verify required parameter 'campaignId' is not null or undefined
    if (campaignId === null || campaignId === undefined) {
      throw new RequiredError("campaignId", "generateScorecardCampaignReport");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "generateScorecardCampaignReport");
    }

    // Path Params
    const localVarPath =
      "/api/v2/scorecard/campaigns/{campaign_id}/report".replace(
        "{campaign_id}",
        encodeURIComponent(String(campaignId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.generateScorecardCampaignReport",
      ServiceScorecardsApi.operationServers,
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
      serialize(body, TypingInfo, "GenerateCampaignReportRequest", ""),
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

  public async generateScorecardCampaignTeamReports(
    campaignId: string,
    body: GenerateCampaignTeamReportsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceScorecardsApi.v2.generateScorecardCampaignTeamReports"
      ]
    ) {
      throw new Error(
        "Unstable operation 'generateScorecardCampaignTeamReports' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.generateScorecardCampaignTeamReports'] = true`",
      );
    }

    // verify required parameter 'campaignId' is not null or undefined
    if (campaignId === null || campaignId === undefined) {
      throw new RequiredError(
        "campaignId",
        "generateScorecardCampaignTeamReports",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "generateScorecardCampaignTeamReports");
    }

    // Path Params
    const localVarPath =
      "/api/v2/scorecard/campaigns/{campaign_id}/entity-owner-report".replace(
        "{campaign_id}",
        encodeURIComponent(String(campaignId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.generateScorecardCampaignTeamReports",
      ServiceScorecardsApi.operationServers,
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
      serialize(body, TypingInfo, "GenerateCampaignTeamReportsRequest", ""),
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

  public async getScorecardCampaign(
    campaignId: string,
    include?: string,
    includeMeta?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceScorecardsApi.v2.getScorecardCampaign"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getScorecardCampaign' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.getScorecardCampaign'] = true`",
      );
    }

    // verify required parameter 'campaignId' is not null or undefined
    if (campaignId === null || campaignId === undefined) {
      throw new RequiredError("campaignId", "getScorecardCampaign");
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/campaigns/{campaign_id}".replace(
      "{campaign_id}",
      encodeURIComponent(String(campaignId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.getScorecardCampaign",
      ServiceScorecardsApi.operationServers,
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
    if (includeMeta !== undefined) {
      requestContext.setQueryParam(
        "include_meta",
        serialize(includeMeta, TypingInfo, "boolean", ""),
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

  public async listScorecardCampaigns(
    pageLimit?: number,
    pageOffset?: number,
    filterCampaignName?: string,
    filterCampaignStatus?: string,
    filterCampaignOwner?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceScorecardsApi.v2.listScorecardCampaigns"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listScorecardCampaigns' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.listScorecardCampaigns'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/campaigns";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.listScorecardCampaigns",
      ServiceScorecardsApi.operationServers,
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
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        serialize(pageOffset, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterCampaignName !== undefined) {
      requestContext.setQueryParam(
        "filter[campaign][name]",
        serialize(filterCampaignName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterCampaignStatus !== undefined) {
      requestContext.setQueryParam(
        "filter[campaign][status]",
        serialize(filterCampaignStatus, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterCampaignOwner !== undefined) {
      requestContext.setQueryParam(
        "filter[campaign][owner]",
        serialize(filterCampaignOwner, TypingInfo, "string", ""),
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

  public async listScorecardDefaultRules(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceScorecardsApi.v2.listScorecardDefaultRules"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listScorecardDefaultRules' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.listScorecardDefaultRules'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/default-rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.listScorecardDefaultRules",
      ServiceScorecardsApi.operationServers,
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

  public async listScorecardFacets(
    filterEntityQuery?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["ServiceScorecardsApi.v2.listScorecardFacets"]
    ) {
      throw new Error(
        "Unstable operation 'listScorecardFacets' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.listScorecardFacets'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/facets";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.listScorecardFacets",
      ServiceScorecardsApi.operationServers,
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
    if (filterEntityQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[entity][query]",
        serialize(filterEntityQuery, TypingInfo, "string", ""),
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

  public async listScorecardOutcomes(
    pageSize?: number,
    pageOffset?: number,
    include?: string,
    fieldsOutcome?: string,
    fieldsRule?: string,
    filterOutcomeServiceName?: string,
    filterOutcomeState?: string,
    filterRuleEnabled?: boolean,
    filterRuleId?: string,
    filterRuleName?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceScorecardsApi.v2.listScorecardOutcomes"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listScorecardOutcomes' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.listScorecardOutcomes'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/outcomes";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.listScorecardOutcomes",
      ServiceScorecardsApi.operationServers,
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
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        serialize(pageOffset, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }
    if (fieldsOutcome !== undefined) {
      requestContext.setQueryParam(
        "fields[outcome]",
        serialize(fieldsOutcome, TypingInfo, "string", ""),
        "",
      );
    }
    if (fieldsRule !== undefined) {
      requestContext.setQueryParam(
        "fields[rule]",
        serialize(fieldsRule, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterOutcomeServiceName !== undefined) {
      requestContext.setQueryParam(
        "filter[outcome][service_name]",
        serialize(filterOutcomeServiceName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterOutcomeState !== undefined) {
      requestContext.setQueryParam(
        "filter[outcome][state]",
        serialize(filterOutcomeState, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRuleEnabled !== undefined) {
      requestContext.setQueryParam(
        "filter[rule][enabled]",
        serialize(filterRuleEnabled, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterRuleId !== undefined) {
      requestContext.setQueryParam(
        "filter[rule][id]",
        serialize(filterRuleId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRuleName !== undefined) {
      requestContext.setQueryParam(
        "filter[rule][name]",
        serialize(filterRuleName, TypingInfo, "string", ""),
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

  public async listScorecardRules(
    pageSize?: number,
    pageOffset?: number,
    include?: string,
    filterRuleId?: string,
    filterRuleEnabled?: boolean,
    filterRuleCustom?: boolean,
    filterRuleName?: string,
    filterRuleDescription?: string,
    fieldsRule?: string,
    fieldsScorecard?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["ServiceScorecardsApi.v2.listScorecardRules"]
    ) {
      throw new Error(
        "Unstable operation 'listScorecardRules' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.listScorecardRules'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.listScorecardRules",
      ServiceScorecardsApi.operationServers,
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
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        serialize(pageOffset, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRuleId !== undefined) {
      requestContext.setQueryParam(
        "filter[rule][id]",
        serialize(filterRuleId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRuleEnabled !== undefined) {
      requestContext.setQueryParam(
        "filter[rule][enabled]",
        serialize(filterRuleEnabled, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterRuleCustom !== undefined) {
      requestContext.setQueryParam(
        "filter[rule][custom]",
        serialize(filterRuleCustom, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterRuleName !== undefined) {
      requestContext.setQueryParam(
        "filter[rule][name]",
        serialize(filterRuleName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRuleDescription !== undefined) {
      requestContext.setQueryParam(
        "filter[rule][description]",
        serialize(filterRuleDescription, TypingInfo, "string", ""),
        "",
      );
    }
    if (fieldsRule !== undefined) {
      requestContext.setQueryParam(
        "fields[rule]",
        serialize(fieldsRule, TypingInfo, "string", ""),
        "",
      );
    }
    if (fieldsScorecard !== undefined) {
      requestContext.setQueryParam(
        "fields[scorecard]",
        serialize(fieldsScorecard, TypingInfo, "string", ""),
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

  public async listScorecards(
    pageOffset?: number,
    pageSize?: number,
    filterScorecardId?: string,
    filterScorecardName?: string,
    filterScorecardDescription?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["ServiceScorecardsApi.v2.listScorecards"]) {
      throw new Error(
        "Unstable operation 'listScorecards' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.listScorecards'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/scorecards";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.listScorecards",
      ServiceScorecardsApi.operationServers,
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
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        serialize(pageOffset, TypingInfo, "number", "int64"),
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
    if (filterScorecardId !== undefined) {
      requestContext.setQueryParam(
        "filter[scorecard][id]",
        serialize(filterScorecardId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterScorecardName !== undefined) {
      requestContext.setQueryParam(
        "filter[scorecard][name]",
        serialize(filterScorecardName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterScorecardDescription !== undefined) {
      requestContext.setQueryParam(
        "filter[scorecard][description]",
        serialize(filterScorecardDescription, TypingInfo, "string", ""),
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

  public async listScorecardScores(
    aggregation: string,
    pageLimit?: number,
    pageOffset?: number,
    filterEntityQuery?: string,
    filterRuleId?: string,
    filterRuleEnabled?: boolean,
    filterRuleCustom?: boolean,
    sort?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["ServiceScorecardsApi.v2.listScorecardScores"]
    ) {
      throw new Error(
        "Unstable operation 'listScorecardScores' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.listScorecardScores'] = true`",
      );
    }

    // verify required parameter 'aggregation' is not null or undefined
    if (aggregation === null || aggregation === undefined) {
      throw new RequiredError("aggregation", "listScorecardScores");
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/scores/{aggregation}".replace(
      "{aggregation}",
      encodeURIComponent(String(aggregation)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.listScorecardScores",
      ServiceScorecardsApi.operationServers,
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
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        serialize(pageOffset, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterEntityQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[entity][query]",
        serialize(filterEntityQuery, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRuleId !== undefined) {
      requestContext.setQueryParam(
        "filter[rule][id]",
        serialize(filterRuleId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRuleEnabled !== undefined) {
      requestContext.setQueryParam(
        "filter[rule][enabled]",
        serialize(filterRuleEnabled, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterRuleCustom !== undefined) {
      requestContext.setQueryParam(
        "filter[rule][custom]",
        serialize(filterRuleCustom, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "string", ""),
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

  public async setupScorecardRules(
    body: SetupRulesRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["ServiceScorecardsApi.v2.setupScorecardRules"]
    ) {
      throw new Error(
        "Unstable operation 'setupScorecardRules' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.setupScorecardRules'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "setupScorecardRules");
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/setup";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.setupScorecardRules",
      ServiceScorecardsApi.operationServers,
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
      serialize(body, TypingInfo, "SetupRulesRequest", ""),
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

  public async updateScorecardCampaign(
    campaignId: string,
    body: UpdateCampaignRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceScorecardsApi.v2.updateScorecardCampaign"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateScorecardCampaign' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.updateScorecardCampaign'] = true`",
      );
    }

    // verify required parameter 'campaignId' is not null or undefined
    if (campaignId === null || campaignId === undefined) {
      throw new RequiredError("campaignId", "updateScorecardCampaign");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateScorecardCampaign");
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/campaigns/{campaign_id}".replace(
      "{campaign_id}",
      encodeURIComponent(String(campaignId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.updateScorecardCampaign",
      ServiceScorecardsApi.operationServers,
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
      serialize(body, TypingInfo, "UpdateCampaignRequest", ""),
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

  public async updateScorecardOutcomesAsync(
    body: UpdateOutcomesAsyncRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceScorecardsApi.v2.updateScorecardOutcomesAsync"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateScorecardOutcomesAsync' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.updateScorecardOutcomesAsync'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateScorecardOutcomesAsync");
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/outcomes";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.updateScorecardOutcomesAsync",
      ServiceScorecardsApi.operationServers,
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
      serialize(body, TypingInfo, "UpdateOutcomesAsyncRequest", ""),
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

  public async updateScorecardRule(
    ruleId: string,
    body: UpdateRuleRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["ServiceScorecardsApi.v2.updateScorecardRule"]
    ) {
      throw new Error(
        "Unstable operation 'updateScorecardRule' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.updateScorecardRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "updateScorecardRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateScorecardRule");
    }

    // Path Params
    const localVarPath = "/api/v2/scorecard/rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.updateScorecardRule",
      ServiceScorecardsApi.operationServers,
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
      serialize(body, TypingInfo, "UpdateRuleRequest", ""),
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

  public async updateScorecardRuleWorkflow(
    ruleId: string,
    workflowId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ServiceScorecardsApi.v2.updateScorecardRuleWorkflow"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateScorecardRuleWorkflow' is disabled. Enable it by setting `configuration.unstableOperations['ServiceScorecardsApi.v2.updateScorecardRuleWorkflow'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "updateScorecardRuleWorkflow");
    }

    // verify required parameter 'workflowId' is not null or undefined
    if (workflowId === null || workflowId === undefined) {
      throw new RequiredError("workflowId", "updateScorecardRuleWorkflow");
    }

    // Path Params
    const localVarPath =
      "/api/v2/scorecard/rules/{rule_id}/workflow/{workflow_id}"
        .replace("{rule_id}", encodeURIComponent(String(ruleId)))
        .replace("{workflow_id}", encodeURIComponent(String(workflowId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ServiceScorecardsApi.v2.updateScorecardRuleWorkflow",
      ServiceScorecardsApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class ServiceScorecardsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createScorecardCampaign
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createScorecardCampaign(
    response: ResponseContext,
  ): Promise<CampaignResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: CampaignResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CampaignResponse",
      ) as CampaignResponse;
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
      const body: CampaignResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CampaignResponse",
        "",
      ) as CampaignResponse;
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
   * @params response Response returned by the server for a request to createScorecardOutcomesBatch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createScorecardOutcomesBatch(
    response: ResponseContext,
  ): Promise<OutcomesBatchResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OutcomesBatchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OutcomesBatchResponse",
      ) as OutcomesBatchResponse;
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
      const body: OutcomesBatchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OutcomesBatchResponse",
        "",
      ) as OutcomesBatchResponse;
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
   * @params response Response returned by the server for a request to createScorecardRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createScorecardRule(
    response: ResponseContext,
  ): Promise<CreateRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: CreateRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateRuleResponse",
      ) as CreateRuleResponse;
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
      const body: CreateRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateRuleResponse",
        "",
      ) as CreateRuleResponse;
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
   * @params response Response returned by the server for a request to deleteScorecardCampaign
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteScorecardCampaign(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to deleteScorecardRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteScorecardRule(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteScorecardRuleWorkflow
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteScorecardRuleWorkflow(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to generateScorecardCampaignReport
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async generateScorecardCampaignReport(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      return;
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
   * @params response Response returned by the server for a request to generateScorecardCampaignTeamReports
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async generateScorecardCampaignTeamReports(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      return;
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
   * @params response Response returned by the server for a request to getScorecardCampaign
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getScorecardCampaign(
    response: ResponseContext,
  ): Promise<CampaignResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CampaignResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CampaignResponse",
      ) as CampaignResponse;
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
      const body: CampaignResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CampaignResponse",
        "",
      ) as CampaignResponse;
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
   * @params response Response returned by the server for a request to listScorecardCampaigns
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listScorecardCampaigns(
    response: ResponseContext,
  ): Promise<ListCampaignsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListCampaignsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListCampaignsResponse",
      ) as ListCampaignsResponse;
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
      const body: ListCampaignsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListCampaignsResponse",
        "",
      ) as ListCampaignsResponse;
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
   * @params response Response returned by the server for a request to listScorecardDefaultRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listScorecardDefaultRules(
    response: ResponseContext,
  ): Promise<ListDefaultRulesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListDefaultRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListDefaultRulesResponse",
      ) as ListDefaultRulesResponse;
      return body;
    }
    if (response.httpStatusCode === 403) {
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
      const body: ListDefaultRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListDefaultRulesResponse",
        "",
      ) as ListDefaultRulesResponse;
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
   * @params response Response returned by the server for a request to listScorecardFacets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listScorecardFacets(
    response: ResponseContext,
  ): Promise<ListFacetsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListFacetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListFacetsResponse",
      ) as ListFacetsResponse;
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
      const body: ListFacetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListFacetsResponse",
        "",
      ) as ListFacetsResponse;
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
   * @params response Response returned by the server for a request to listScorecardOutcomes
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listScorecardOutcomes(
    response: ResponseContext,
  ): Promise<OutcomesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OutcomesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OutcomesResponse",
      ) as OutcomesResponse;
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
      const body: OutcomesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OutcomesResponse",
        "",
      ) as OutcomesResponse;
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
   * @params response Response returned by the server for a request to listScorecardRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listScorecardRules(
    response: ResponseContext,
  ): Promise<ListRulesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListRulesResponse",
      ) as ListRulesResponse;
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
      const body: ListRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListRulesResponse",
        "",
      ) as ListRulesResponse;
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
   * @params response Response returned by the server for a request to listScorecards
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listScorecards(
    response: ResponseContext,
  ): Promise<ListScorecardsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListScorecardsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListScorecardsResponse",
      ) as ListScorecardsResponse;
      return body;
    }
    if (response.httpStatusCode === 403) {
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
      const body: ListScorecardsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListScorecardsResponse",
        "",
      ) as ListScorecardsResponse;
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
   * @params response Response returned by the server for a request to listScorecardScores
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listScorecardScores(
    response: ResponseContext,
  ): Promise<ListScoresResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListScoresResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListScoresResponse",
      ) as ListScoresResponse;
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
      const body: ListScoresResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListScoresResponse",
        "",
      ) as ListScoresResponse;
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
   * @params response Response returned by the server for a request to setupScorecardRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async setupScorecardRules(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to updateScorecardCampaign
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateScorecardCampaign(
    response: ResponseContext,
  ): Promise<CampaignResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CampaignResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CampaignResponse",
      ) as CampaignResponse;
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
      const body: CampaignResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CampaignResponse",
        "",
      ) as CampaignResponse;
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
   * @params response Response returned by the server for a request to updateScorecardOutcomesAsync
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateScorecardOutcomesAsync(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      return;
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
   * @params response Response returned by the server for a request to updateScorecardRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateScorecardRule(
    response: ResponseContext,
  ): Promise<UpdateRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UpdateRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateRuleResponse",
      ) as UpdateRuleResponse;
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
      const body: UpdateRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateRuleResponse",
        "",
      ) as UpdateRuleResponse;
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
   * @params response Response returned by the server for a request to updateScorecardRuleWorkflow
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateScorecardRuleWorkflow(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ServiceScorecardsApiCreateScorecardCampaignRequest {
  /**
   * Campaign data.
   * @type CreateCampaignRequest
   */
  body: CreateCampaignRequest;
}

export interface ServiceScorecardsApiCreateScorecardOutcomesBatchRequest {
  /**
   * Set of scorecard outcomes.
   * @type OutcomesBatchRequest
   */
  body: OutcomesBatchRequest;
}

export interface ServiceScorecardsApiCreateScorecardRuleRequest {
  /**
   * Rule attributes.
   * @type CreateRuleRequest
   */
  body: CreateRuleRequest;
}

export interface ServiceScorecardsApiDeleteScorecardCampaignRequest {
  /**
   * Campaign ID or key.
   * @type string
   */
  campaignId: string;
}

export interface ServiceScorecardsApiDeleteScorecardRuleRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
}

export interface ServiceScorecardsApiDeleteScorecardRuleWorkflowRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
}

export interface ServiceScorecardsApiGenerateScorecardCampaignReportRequest {
  /**
   * Campaign ID.
   * @type string
   */
  campaignId: string;
  /**
   * Report generation request.
   * @type GenerateCampaignReportRequest
   */
  body: GenerateCampaignReportRequest;
}

export interface ServiceScorecardsApiGenerateScorecardCampaignTeamReportsRequest {
  /**
   * Campaign ID.
   * @type string
   */
  campaignId: string;
  /**
   * Team report generation request.
   * @type GenerateCampaignTeamReportsRequest
   */
  body: GenerateCampaignTeamReportsRequest;
}

export interface ServiceScorecardsApiGetScorecardCampaignRequest {
  /**
   * Campaign ID or key.
   * @type string
   */
  campaignId: string;
  /**
   * Include related data (for example, scores).
   * @type string
   */
  include?: string;
  /**
   * Include metadata (entity and rule counts).
   * @type boolean
   */
  includeMeta?: boolean;
}

export interface ServiceScorecardsApiListScorecardCampaignsRequest {
  /**
   * Maximum number of campaigns to return.
   * @type number
   */
  pageLimit?: number;
  /**
   * Offset for pagination.
   * @type number
   */
  pageOffset?: number;
  /**
   * Filter campaigns by name (full-text search).
   * @type string
   */
  filterCampaignName?: string;
  /**
   * Filter campaigns by status.
   * @type string
   */
  filterCampaignStatus?: string;
  /**
   * Filter campaigns by owner UUID.
   * @type string
   */
  filterCampaignOwner?: string;
}

export interface ServiceScorecardsApiListScorecardFacetsRequest {
  /**
   * Entity query filter.
   * @type string
   */
  filterEntityQuery?: string;
}

export interface ServiceScorecardsApiListScorecardOutcomesRequest {
  /**
   * Size for a given page. The maximum allowed value is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific offset to use as the beginning of the returned page.
   * @type number
   */
  pageOffset?: number;
  /**
   * Include related rule details in the response.
   * @type string
   */
  include?: string;
  /**
   * Return only specified values in the outcome attributes.
   * @type string
   */
  fieldsOutcome?: string;
  /**
   * Return only specified values in the included rule details.
   * @type string
   */
  fieldsRule?: string;
  /**
   * Filter outcomes on a specific service name.
   * @type string
   */
  filterOutcomeServiceName?: string;
  /**
   * Filter outcomes by a specific state.
   * @type string
   */
  filterOutcomeState?: string;
  /**
   * Filter outcomes based on whether a rule is enabled or disabled.
   * @type boolean
   */
  filterRuleEnabled?: boolean;
  /**
   * Filter outcomes based on rule ID.
   * @type string
   */
  filterRuleId?: string;
  /**
   * Filter outcomes based on rule name.
   * @type string
   */
  filterRuleName?: string;
}

export interface ServiceScorecardsApiListScorecardRulesRequest {
  /**
   * Size for a given page. The maximum allowed value is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific offset to use as the beginning of the returned page.
   * @type number
   */
  pageOffset?: number;
  /**
   * Include related scorecard details in the response.
   * @type string
   */
  include?: string;
  /**
   * Filter the rules on a rule ID.
   * @type string
   */
  filterRuleId?: string;
  /**
   * Filter for enabled rules only.
   * @type boolean
   */
  filterRuleEnabled?: boolean;
  /**
   * Filter for custom rules only.
   * @type boolean
   */
  filterRuleCustom?: boolean;
  /**
   * Filter rules on the rule name.
   * @type string
   */
  filterRuleName?: string;
  /**
   * Filter rules on the rule description.
   * @type string
   */
  filterRuleDescription?: string;
  /**
   * Return only specific fields in the response for rule attributes.
   * @type string
   */
  fieldsRule?: string;
  /**
   * Return only specific fields in the included response for scorecard attributes.
   * @type string
   */
  fieldsScorecard?: string;
}

export interface ServiceScorecardsApiListScorecardsRequest {
  /**
   * Offset for pagination.
   * @type number
   */
  pageOffset?: number;
  /**
   * Maximum number of scorecards to return.
   * @type number
   */
  pageSize?: number;
  /**
   * Filter by scorecard ID.
   * @type string
   */
  filterScorecardId?: string;
  /**
   * Filter by scorecard name (partial match).
   * @type string
   */
  filterScorecardName?: string;
  /**
   * Filter by scorecard description (partial match).
   * @type string
   */
  filterScorecardDescription?: string;
}

export interface ServiceScorecardsApiListScorecardScoresRequest {
  /**
   * Aggregation type (by-entity, by-rule, by-scorecard, by-service, by-team).
   * @type string
   */
  aggregation: string;
  /**
   * Maximum number of scores to return.
   * @type number
   */
  pageLimit?: number;
  /**
   * Offset for pagination.
   * @type number
   */
  pageOffset?: number;
  /**
   * Entity query filter.
   * @type string
   */
  filterEntityQuery?: string;
  /**
   * Filter by rule IDs (comma-separated).
   * @type string
   */
  filterRuleId?: string;
  /**
   * Filter by rule enabled status.
   * @type boolean
   */
  filterRuleEnabled?: boolean;
  /**
   * Filter by custom rules.
   * @type boolean
   */
  filterRuleCustom?: boolean;
  /**
   * Sort order (comma-separated list of fields; prefix a field with - for descending order).
   * @type string
   */
  sort?: string;
}

export interface ServiceScorecardsApiSetupScorecardRulesRequest {
  /**
   * Setup rules request.
   * @type SetupRulesRequest
   */
  body: SetupRulesRequest;
}

export interface ServiceScorecardsApiUpdateScorecardCampaignRequest {
  /**
   * Campaign ID or key.
   * @type string
   */
  campaignId: string;
  /**
   * Campaign data.
   * @type UpdateCampaignRequest
   */
  body: UpdateCampaignRequest;
}

export interface ServiceScorecardsApiUpdateScorecardOutcomesAsyncRequest {
  /**
   * Set of scorecard outcomes.
   * @type UpdateOutcomesAsyncRequest
   */
  body: UpdateOutcomesAsyncRequest;
}

export interface ServiceScorecardsApiUpdateScorecardRuleRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
  /**
   * Rule attributes.
   * @type UpdateRuleRequest
   */
  body: UpdateRuleRequest;
}

export interface ServiceScorecardsApiUpdateScorecardRuleWorkflowRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
  /**
   * Workflow ID.
   * @type string
   */
  workflowId: string;
}

export class ServiceScorecardsApi {
  private requestFactory: ServiceScorecardsApiRequestFactory;
  private responseProcessor: ServiceScorecardsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: ServiceScorecardsApiRequestFactory,
    responseProcessor?: ServiceScorecardsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new ServiceScorecardsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ServiceScorecardsApiResponseProcessor();
  }

  /**
   * Creates a new scorecard campaign.
   * @param param The request object
   */
  public createScorecardCampaign(
    param: ServiceScorecardsApiCreateScorecardCampaignRequest,
    options?: Configuration,
  ): Promise<CampaignResponse> {
    const requestContextPromise = this.requestFactory.createScorecardCampaign(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createScorecardCampaign(
            responseContext,
          );
        });
    });
  }

  /**
   * Sets multiple service-rule outcomes in a single batched request.
   * @param param The request object
   */
  public createScorecardOutcomesBatch(
    param: ServiceScorecardsApiCreateScorecardOutcomesBatchRequest,
    options?: Configuration,
  ): Promise<OutcomesBatchResponse> {
    const requestContextPromise =
      this.requestFactory.createScorecardOutcomesBatch(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createScorecardOutcomesBatch(
            responseContext,
          );
        });
    });
  }

  /**
   * Creates a new rule.
   * @param param The request object
   */
  public createScorecardRule(
    param: ServiceScorecardsApiCreateScorecardRuleRequest,
    options?: Configuration,
  ): Promise<CreateRuleResponse> {
    const requestContextPromise = this.requestFactory.createScorecardRule(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createScorecardRule(responseContext);
        });
    });
  }

  /**
   * Deletes a single campaign by ID or key.
   * @param param The request object
   */
  public deleteScorecardCampaign(
    param: ServiceScorecardsApiDeleteScorecardCampaignRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteScorecardCampaign(
      param.campaignId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteScorecardCampaign(
            responseContext,
          );
        });
    });
  }

  /**
   * Deletes a single rule.
   * @param param The request object
   */
  public deleteScorecardRule(
    param: ServiceScorecardsApiDeleteScorecardRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteScorecardRule(
      param.ruleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteScorecardRule(responseContext);
        });
    });
  }

  /**
   * Removes workflow association from a scorecard rule.
   * @param param The request object
   */
  public deleteScorecardRuleWorkflow(
    param: ServiceScorecardsApiDeleteScorecardRuleWorkflowRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteScorecardRuleWorkflow(param.ruleId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteScorecardRuleWorkflow(
            responseContext,
          );
        });
    });
  }

  /**
   * Generates and sends a campaign report to Slack.
   * @param param The request object
   */
  public generateScorecardCampaignReport(
    param: ServiceScorecardsApiGenerateScorecardCampaignReportRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.generateScorecardCampaignReport(
        param.campaignId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.generateScorecardCampaignReport(
            responseContext,
          );
        });
    });
  }

  /**
   * Generates and sends team-specific campaign reports to Slack.
   * @param param The request object
   */
  public generateScorecardCampaignTeamReports(
    param: ServiceScorecardsApiGenerateScorecardCampaignTeamReportsRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.generateScorecardCampaignTeamReports(
        param.campaignId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.generateScorecardCampaignTeamReports(
            responseContext,
          );
        });
    });
  }

  /**
   * Fetches a single campaign by ID or key.
   * @param param The request object
   */
  public getScorecardCampaign(
    param: ServiceScorecardsApiGetScorecardCampaignRequest,
    options?: Configuration,
  ): Promise<CampaignResponse> {
    const requestContextPromise = this.requestFactory.getScorecardCampaign(
      param.campaignId,
      param.include,
      param.includeMeta,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getScorecardCampaign(responseContext);
        });
    });
  }

  /**
   * Fetches all scorecard campaigns.
   * @param param The request object
   */
  public listScorecardCampaigns(
    param: ServiceScorecardsApiListScorecardCampaignsRequest = {},
    options?: Configuration,
  ): Promise<ListCampaignsResponse> {
    const requestContextPromise = this.requestFactory.listScorecardCampaigns(
      param.pageLimit,
      param.pageOffset,
      param.filterCampaignName,
      param.filterCampaignStatus,
      param.filterCampaignOwner,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listScorecardCampaigns(responseContext);
        });
    });
  }

  /**
   * Fetches all default scorecard rules available for the organization.
   * @param param The request object
   */
  public listScorecardDefaultRules(
    options?: Configuration,
  ): Promise<ListDefaultRulesResponse> {
    const requestContextPromise =
      this.requestFactory.listScorecardDefaultRules(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listScorecardDefaultRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Fetches facets for scorecard entities with counts.
   * @param param The request object
   */
  public listScorecardFacets(
    param: ServiceScorecardsApiListScorecardFacetsRequest = {},
    options?: Configuration,
  ): Promise<ListFacetsResponse> {
    const requestContextPromise = this.requestFactory.listScorecardFacets(
      param.filterEntityQuery,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listScorecardFacets(responseContext);
        });
    });
  }

  /**
   * Fetches all rule outcomes.
   * @param param The request object
   */
  public listScorecardOutcomes(
    param: ServiceScorecardsApiListScorecardOutcomesRequest = {},
    options?: Configuration,
  ): Promise<OutcomesResponse> {
    const requestContextPromise = this.requestFactory.listScorecardOutcomes(
      param.pageSize,
      param.pageOffset,
      param.include,
      param.fieldsOutcome,
      param.fieldsRule,
      param.filterOutcomeServiceName,
      param.filterOutcomeState,
      param.filterRuleEnabled,
      param.filterRuleId,
      param.filterRuleName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listScorecardOutcomes(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listScorecardOutcomes returning a generator with all the items.
   */
  public async *listScorecardOutcomesWithPagination(
    param: ServiceScorecardsApiListScorecardOutcomesRequest = {},
    options?: Configuration,
  ): AsyncGenerator<OutcomesResponseDataItem> {
    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listScorecardOutcomes(
        param.pageSize,
        param.pageOffset,
        param.include,
        param.fieldsOutcome,
        param.fieldsRule,
        param.filterOutcomeServiceName,
        param.filterOutcomeState,
        param.filterRuleEnabled,
        param.filterRuleId,
        param.filterRuleName,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listScorecardOutcomes(responseContext);
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
      if (param.pageOffset === undefined) {
        param.pageOffset = pageSize;
      } else {
        param.pageOffset = param.pageOffset + pageSize;
      }
    }
  }

  /**
   * Fetch all rules.
   * @param param The request object
   */
  public listScorecardRules(
    param: ServiceScorecardsApiListScorecardRulesRequest = {},
    options?: Configuration,
  ): Promise<ListRulesResponse> {
    const requestContextPromise = this.requestFactory.listScorecardRules(
      param.pageSize,
      param.pageOffset,
      param.include,
      param.filterRuleId,
      param.filterRuleEnabled,
      param.filterRuleCustom,
      param.filterRuleName,
      param.filterRuleDescription,
      param.fieldsRule,
      param.fieldsScorecard,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listScorecardRules(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listScorecardRules returning a generator with all the items.
   */
  public async *listScorecardRulesWithPagination(
    param: ServiceScorecardsApiListScorecardRulesRequest = {},
    options?: Configuration,
  ): AsyncGenerator<ListRulesResponseDataItem> {
    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listScorecardRules(
        param.pageSize,
        param.pageOffset,
        param.include,
        param.filterRuleId,
        param.filterRuleEnabled,
        param.filterRuleCustom,
        param.filterRuleName,
        param.filterRuleDescription,
        param.fieldsRule,
        param.fieldsScorecard,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listScorecardRules(responseContext);
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
      if (param.pageOffset === undefined) {
        param.pageOffset = pageSize;
      } else {
        param.pageOffset = param.pageOffset + pageSize;
      }
    }
  }

  /**
   * Fetches all scorecards.
   * @param param The request object
   */
  public listScorecards(
    param: ServiceScorecardsApiListScorecardsRequest = {},
    options?: Configuration,
  ): Promise<ListScorecardsResponse> {
    const requestContextPromise = this.requestFactory.listScorecards(
      param.pageOffset,
      param.pageSize,
      param.filterScorecardId,
      param.filterScorecardName,
      param.filterScorecardDescription,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listScorecards(responseContext);
        });
    });
  }

  /**
   * Fetches scorecard scores aggregated by entity, rule, scorecard, service, or team.
   * @param param The request object
   */
  public listScorecardScores(
    param: ServiceScorecardsApiListScorecardScoresRequest,
    options?: Configuration,
  ): Promise<ListScoresResponse> {
    const requestContextPromise = this.requestFactory.listScorecardScores(
      param.aggregation,
      param.pageLimit,
      param.pageOffset,
      param.filterEntityQuery,
      param.filterRuleId,
      param.filterRuleEnabled,
      param.filterRuleCustom,
      param.sort,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listScorecardScores(responseContext);
        });
    });
  }

  /**
   * Sets up default scorecard rules for the organization.
   * @param param The request object
   */
  public setupScorecardRules(
    param: ServiceScorecardsApiSetupScorecardRulesRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.setupScorecardRules(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.setupScorecardRules(responseContext);
        });
    });
  }

  /**
   * Updates an existing campaign.
   * @param param The request object
   */
  public updateScorecardCampaign(
    param: ServiceScorecardsApiUpdateScorecardCampaignRequest,
    options?: Configuration,
  ): Promise<CampaignResponse> {
    const requestContextPromise = this.requestFactory.updateScorecardCampaign(
      param.campaignId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateScorecardCampaign(
            responseContext,
          );
        });
    });
  }

  /**
   * Updates multiple scorecard rule outcomes in a single batched request.
   * @param param The request object
   */
  public updateScorecardOutcomesAsync(
    param: ServiceScorecardsApiUpdateScorecardOutcomesAsyncRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.updateScorecardOutcomesAsync(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateScorecardOutcomesAsync(
            responseContext,
          );
        });
    });
  }

  /**
   * Updates an existing rule.
   * @param param The request object
   */
  public updateScorecardRule(
    param: ServiceScorecardsApiUpdateScorecardRuleRequest,
    options?: Configuration,
  ): Promise<UpdateRuleResponse> {
    const requestContextPromise = this.requestFactory.updateScorecardRule(
      param.ruleId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateScorecardRule(responseContext);
        });
    });
  }

  /**
   * Associates a workflow with a scorecard rule.
   * @param param The request object
   */
  public updateScorecardRuleWorkflow(
    param: ServiceScorecardsApiUpdateScorecardRuleWorkflowRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.updateScorecardRuleWorkflow(
        param.ruleId,
        param.workflowId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateScorecardRuleWorkflow(
            responseContext,
          );
        });
    });
  }
}
