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
import { AutomationRuleCreateRequest } from "./models/AutomationRuleCreateRequest";
import { AutomationRuleResponse } from "./models/AutomationRuleResponse";
import { AutomationRulesResponse } from "./models/AutomationRulesResponse";
import { AutomationRuleUpdateRequest } from "./models/AutomationRuleUpdateRequest";
import { Case } from "./models/Case";
import { CaseAggregateRequest } from "./models/CaseAggregateRequest";
import { CaseAggregateResponse } from "./models/CaseAggregateResponse";
import { CaseAssignRequest } from "./models/CaseAssignRequest";
import { CaseBulkUpdateRequest } from "./models/CaseBulkUpdateRequest";
import { CaseCommentRequest } from "./models/CaseCommentRequest";
import { CaseCountResponse } from "./models/CaseCountResponse";
import { CaseCreateRequest } from "./models/CaseCreateRequest";
import { CaseEmptyRequest } from "./models/CaseEmptyRequest";
import { CaseInsightsRequest } from "./models/CaseInsightsRequest";
import { CaseLinkCreateRequest } from "./models/CaseLinkCreateRequest";
import { CaseLinkResponse } from "./models/CaseLinkResponse";
import { CaseLinksResponse } from "./models/CaseLinksResponse";
import { CaseNotificationRuleCreateRequest } from "./models/CaseNotificationRuleCreateRequest";
import { CaseNotificationRuleResponse } from "./models/CaseNotificationRuleResponse";
import { CaseNotificationRulesResponse } from "./models/CaseNotificationRulesResponse";
import { CaseNotificationRuleUpdateRequest } from "./models/CaseNotificationRuleUpdateRequest";
import { CaseResponse } from "./models/CaseResponse";
import { CaseSortableField } from "./models/CaseSortableField";
import { CasesResponse } from "./models/CasesResponse";
import { CaseUpdateAttributesRequest } from "./models/CaseUpdateAttributesRequest";
import { CaseUpdateCommentRequest } from "./models/CaseUpdateCommentRequest";
import { CaseUpdateCustomAttributeRequest } from "./models/CaseUpdateCustomAttributeRequest";
import { CaseUpdateDescriptionRequest } from "./models/CaseUpdateDescriptionRequest";
import { CaseUpdateDueDateRequest } from "./models/CaseUpdateDueDateRequest";
import { CaseUpdatePriorityRequest } from "./models/CaseUpdatePriorityRequest";
import { CaseUpdateResolvedReasonRequest } from "./models/CaseUpdateResolvedReasonRequest";
import { CaseUpdateStatusRequest } from "./models/CaseUpdateStatusRequest";
import { CaseUpdateTitleRequest } from "./models/CaseUpdateTitleRequest";
import { CaseViewCreateRequest } from "./models/CaseViewCreateRequest";
import { CaseViewResponse } from "./models/CaseViewResponse";
import { CaseViewsResponse } from "./models/CaseViewsResponse";
import { CaseViewUpdateRequest } from "./models/CaseViewUpdateRequest";
import { CaseWatchersResponse } from "./models/CaseWatchersResponse";
import { JiraIssueCreateRequest } from "./models/JiraIssueCreateRequest";
import { JiraIssueLinkRequest } from "./models/JiraIssueLinkRequest";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { MaintenanceWindowCreateRequest } from "./models/MaintenanceWindowCreateRequest";
import { MaintenanceWindowResponse } from "./models/MaintenanceWindowResponse";
import { MaintenanceWindowsResponse } from "./models/MaintenanceWindowsResponse";
import { MaintenanceWindowUpdateRequest } from "./models/MaintenanceWindowUpdateRequest";
import { NotebookCreateRequest } from "./models/NotebookCreateRequest";
import { ProjectCreateRequest } from "./models/ProjectCreateRequest";
import { ProjectFavoritesResponse } from "./models/ProjectFavoritesResponse";
import { ProjectRelationship } from "./models/ProjectRelationship";
import { ProjectResponse } from "./models/ProjectResponse";
import { ProjectsResponse } from "./models/ProjectsResponse";
import { ProjectUpdateRequest } from "./models/ProjectUpdateRequest";
import { RelationshipToIncidentRequest } from "./models/RelationshipToIncidentRequest";
import { ServiceNowTicketCreateRequest } from "./models/ServiceNowTicketCreateRequest";
import { TimelineResponse } from "./models/TimelineResponse";
import { version } from "../version";

export class CaseManagementApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("case-management", version);
    }
  }
  public async addCaseInsights(
    caseId: string,
    body: CaseInsightsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.addCaseInsights"]) {
      throw new Error(
        "Unstable operation 'addCaseInsights' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.addCaseInsights'] = true`",
      );
    }

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "addCaseInsights");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "addCaseInsights");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/insights".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.addCaseInsights",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseInsightsRequest", ""),
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

  public async aggregateCases(
    body: CaseAggregateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.aggregateCases"]) {
      throw new Error(
        "Unstable operation 'aggregateCases' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.aggregateCases'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "aggregateCases");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/aggregate";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.aggregateCases",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseAggregateRequest", ""),
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

  public async archiveCase(
    caseId: string,
    body: CaseEmptyRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "archiveCase");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "archiveCase");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/archive".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.archiveCase",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseEmptyRequest", ""),
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

  public async assignCase(
    caseId: string,
    body: CaseAssignRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "assignCase");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "assignCase");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/assign".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.assignCase",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseAssignRequest", ""),
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

  public async bulkUpdateCases(
    body: CaseBulkUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.bulkUpdateCases"]) {
      throw new Error(
        "Unstable operation 'bulkUpdateCases' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.bulkUpdateCases'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "bulkUpdateCases");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/bulk";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.bulkUpdateCases",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseBulkUpdateRequest", ""),
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

  public async commentCase(
    caseId: string,
    body: CaseCommentRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "commentCase");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "commentCase");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/comment".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.commentCase",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseCommentRequest", ""),
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

  public async countCases(
    queryFilter?: string,
    groupBys?: string,
    limit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.countCases"]) {
      throw new Error(
        "Unstable operation 'countCases' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.countCases'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/cases/count";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.countCases",
      CaseManagementApi.operationServers,
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
    if (queryFilter !== undefined) {
      requestContext.setQueryParam(
        "query_filter",
        serialize(queryFilter, TypingInfo, "string", ""),
        "",
      );
    }
    if (groupBys !== undefined) {
      requestContext.setQueryParam(
        "group_bys",
        serialize(groupBys, TypingInfo, "string", ""),
        "",
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", ""),
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

  public async createCase(
    body: CaseCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCase");
    }

    // Path Params
    const localVarPath = "/api/v2/cases";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.createCase",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseCreateRequest", ""),
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

  public async createCaseAutomationRule(
    projectId: string,
    body: AutomationRuleCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CaseManagementApi.v2.createCaseAutomationRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createCaseAutomationRule' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.createCaseAutomationRule'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "createCaseAutomationRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCaseAutomationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/projects/{project_id}/rules".replace(
      "{project_id}",
      encodeURIComponent(String(projectId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.createCaseAutomationRule",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "AutomationRuleCreateRequest", ""),
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

  public async createCaseJiraIssue(
    caseId: string,
    body: JiraIssueCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["CaseManagementApi.v2.createCaseJiraIssue"]
    ) {
      throw new Error(
        "Unstable operation 'createCaseJiraIssue' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.createCaseJiraIssue'] = true`",
      );
    }

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "createCaseJiraIssue");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCaseJiraIssue");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cases/{case_id}/relationships/jira_issues".replace(
        "{case_id}",
        encodeURIComponent(String(caseId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.createCaseJiraIssue",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "JiraIssueCreateRequest", ""),
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

  public async createCaseLink(
    body: CaseLinkCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.createCaseLink"]) {
      throw new Error(
        "Unstable operation 'createCaseLink' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.createCaseLink'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCaseLink");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/link";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.createCaseLink",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseLinkCreateRequest", ""),
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

  public async createCaseNotebook(
    caseId: string,
    body: NotebookCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["CaseManagementApi.v2.createCaseNotebook"]
    ) {
      throw new Error(
        "Unstable operation 'createCaseNotebook' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.createCaseNotebook'] = true`",
      );
    }

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "createCaseNotebook");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCaseNotebook");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cases/{case_id}/relationships/notebook".replace(
        "{case_id}",
        encodeURIComponent(String(caseId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.createCaseNotebook",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "NotebookCreateRequest", ""),
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

  public async createCaseServiceNowTicket(
    caseId: string,
    body: ServiceNowTicketCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CaseManagementApi.v2.createCaseServiceNowTicket"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createCaseServiceNowTicket' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.createCaseServiceNowTicket'] = true`",
      );
    }

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "createCaseServiceNowTicket");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCaseServiceNowTicket");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cases/{case_id}/relationships/servicenow_tickets".replace(
        "{case_id}",
        encodeURIComponent(String(caseId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.createCaseServiceNowTicket",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "ServiceNowTicketCreateRequest", ""),
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

  public async createCaseView(
    body: CaseViewCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.createCaseView"]) {
      throw new Error(
        "Unstable operation 'createCaseView' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.createCaseView'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCaseView");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/views";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.createCaseView",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseViewCreateRequest", ""),
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

  public async createMaintenanceWindow(
    body: MaintenanceWindowCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CaseManagementApi.v2.createMaintenanceWindow"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createMaintenanceWindow' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.createMaintenanceWindow'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createMaintenanceWindow");
    }

    // Path Params
    const localVarPath = "/api/v2/maintenance_windows";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.createMaintenanceWindow",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "MaintenanceWindowCreateRequest", ""),
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

  public async createProject(
    body: ProjectCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createProject");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/projects";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.createProject",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "ProjectCreateRequest", ""),
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

  public async createProjectNotificationRule(
    projectId: string,
    body: CaseNotificationRuleCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "createProjectNotificationRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createProjectNotificationRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cases/projects/{project_id}/notification_rules".replace(
        "{project_id}",
        encodeURIComponent(String(projectId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.createProjectNotificationRule",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseNotificationRuleCreateRequest", ""),
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

  public async deleteCaseAutomationRule(
    projectId: string,
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CaseManagementApi.v2.deleteCaseAutomationRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteCaseAutomationRule' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.deleteCaseAutomationRule'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "deleteCaseAutomationRule");
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "deleteCaseAutomationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/projects/{project_id}/rules/{rule_id}"
      .replace("{project_id}", encodeURIComponent(String(projectId)))
      .replace("{rule_id}", encodeURIComponent(String(ruleId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.deleteCaseAutomationRule",
      CaseManagementApi.operationServers,
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

  public async deleteCaseComment(
    caseId: string,
    cellId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "deleteCaseComment");
    }

    // verify required parameter 'cellId' is not null or undefined
    if (cellId === null || cellId === undefined) {
      throw new RequiredError("cellId", "deleteCaseComment");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/comment/{cell_id}"
      .replace("{case_id}", encodeURIComponent(String(caseId)))
      .replace("{cell_id}", encodeURIComponent(String(cellId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.deleteCaseComment",
      CaseManagementApi.operationServers,
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

  public async deleteCaseCustomAttribute(
    caseId: string,
    customAttributeKey: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "deleteCaseCustomAttribute");
    }

    // verify required parameter 'customAttributeKey' is not null or undefined
    if (customAttributeKey === null || customAttributeKey === undefined) {
      throw new RequiredError(
        "customAttributeKey",
        "deleteCaseCustomAttribute",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/cases/{case_id}/custom_attributes/{custom_attribute_key}"
        .replace("{case_id}", encodeURIComponent(String(caseId)))
        .replace(
          "{custom_attribute_key}",
          encodeURIComponent(String(customAttributeKey)),
        );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.deleteCaseCustomAttribute",
      CaseManagementApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteCaseLink(
    linkId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.deleteCaseLink"]) {
      throw new Error(
        "Unstable operation 'deleteCaseLink' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.deleteCaseLink'] = true`",
      );
    }

    // verify required parameter 'linkId' is not null or undefined
    if (linkId === null || linkId === undefined) {
      throw new RequiredError("linkId", "deleteCaseLink");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/link/{link_id}".replace(
      "{link_id}",
      encodeURIComponent(String(linkId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.deleteCaseLink",
      CaseManagementApi.operationServers,
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

  public async deleteCaseView(
    viewId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.deleteCaseView"]) {
      throw new Error(
        "Unstable operation 'deleteCaseView' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.deleteCaseView'] = true`",
      );
    }

    // verify required parameter 'viewId' is not null or undefined
    if (viewId === null || viewId === undefined) {
      throw new RequiredError("viewId", "deleteCaseView");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/views/{view_id}".replace(
      "{view_id}",
      encodeURIComponent(String(viewId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.deleteCaseView",
      CaseManagementApi.operationServers,
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

  public async deleteMaintenanceWindow(
    maintenanceWindowId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CaseManagementApi.v2.deleteMaintenanceWindow"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteMaintenanceWindow' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.deleteMaintenanceWindow'] = true`",
      );
    }

    // verify required parameter 'maintenanceWindowId' is not null or undefined
    if (maintenanceWindowId === null || maintenanceWindowId === undefined) {
      throw new RequiredError("maintenanceWindowId", "deleteMaintenanceWindow");
    }

    // Path Params
    const localVarPath =
      "/api/v2/maintenance_windows/{maintenance_window_id}".replace(
        "{maintenance_window_id}",
        encodeURIComponent(String(maintenanceWindowId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.deleteMaintenanceWindow",
      CaseManagementApi.operationServers,
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

  public async deleteProject(
    projectId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "deleteProject");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/projects/{project_id}".replace(
      "{project_id}",
      encodeURIComponent(String(projectId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.deleteProject",
      CaseManagementApi.operationServers,
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

  public async deleteProjectNotificationRule(
    projectId: string,
    notificationRuleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "deleteProjectNotificationRule");
    }

    // verify required parameter 'notificationRuleId' is not null or undefined
    if (notificationRuleId === null || notificationRuleId === undefined) {
      throw new RequiredError(
        "notificationRuleId",
        "deleteProjectNotificationRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/cases/projects/{project_id}/notification_rules/{notification_rule_id}"
        .replace("{project_id}", encodeURIComponent(String(projectId)))
        .replace(
          "{notification_rule_id}",
          encodeURIComponent(String(notificationRuleId)),
        );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.deleteProjectNotificationRule",
      CaseManagementApi.operationServers,
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

  public async disableCaseAutomationRule(
    projectId: string,
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CaseManagementApi.v2.disableCaseAutomationRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'disableCaseAutomationRule' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.disableCaseAutomationRule'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "disableCaseAutomationRule");
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "disableCaseAutomationRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cases/projects/{project_id}/rules/{rule_id}/disable"
        .replace("{project_id}", encodeURIComponent(String(projectId)))
        .replace("{rule_id}", encodeURIComponent(String(ruleId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.disableCaseAutomationRule",
      CaseManagementApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async enableCaseAutomationRule(
    projectId: string,
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CaseManagementApi.v2.enableCaseAutomationRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'enableCaseAutomationRule' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.enableCaseAutomationRule'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "enableCaseAutomationRule");
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "enableCaseAutomationRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cases/projects/{project_id}/rules/{rule_id}/enable"
        .replace("{project_id}", encodeURIComponent(String(projectId)))
        .replace("{rule_id}", encodeURIComponent(String(ruleId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.enableCaseAutomationRule",
      CaseManagementApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async favoriteCaseProject(
    projectId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["CaseManagementApi.v2.favoriteCaseProject"]
    ) {
      throw new Error(
        "Unstable operation 'favoriteCaseProject' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.favoriteCaseProject'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "favoriteCaseProject");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cases/projects/{project_id}/favorites".replace(
        "{project_id}",
        encodeURIComponent(String(projectId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.favoriteCaseProject",
      CaseManagementApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getCase(
    caseId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "getCase");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.getCase",
      CaseManagementApi.operationServers,
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

  public async getCaseAutomationRule(
    projectId: string,
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["CaseManagementApi.v2.getCaseAutomationRule"]
    ) {
      throw new Error(
        "Unstable operation 'getCaseAutomationRule' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.getCaseAutomationRule'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "getCaseAutomationRule");
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "getCaseAutomationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/projects/{project_id}/rules/{rule_id}"
      .replace("{project_id}", encodeURIComponent(String(projectId)))
      .replace("{rule_id}", encodeURIComponent(String(ruleId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.getCaseAutomationRule",
      CaseManagementApi.operationServers,
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

  public async getCaseView(
    viewId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.getCaseView"]) {
      throw new Error(
        "Unstable operation 'getCaseView' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.getCaseView'] = true`",
      );
    }

    // verify required parameter 'viewId' is not null or undefined
    if (viewId === null || viewId === undefined) {
      throw new RequiredError("viewId", "getCaseView");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/views/{view_id}".replace(
      "{view_id}",
      encodeURIComponent(String(viewId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.getCaseView",
      CaseManagementApi.operationServers,
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

  public async getProject(
    projectId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "getProject");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/projects/{project_id}".replace(
      "{project_id}",
      encodeURIComponent(String(projectId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.getProject",
      CaseManagementApi.operationServers,
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

  public async getProjectNotificationRules(
    projectId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "getProjectNotificationRules");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cases/projects/{project_id}/notification_rules".replace(
        "{project_id}",
        encodeURIComponent(String(projectId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.getProjectNotificationRules",
      CaseManagementApi.operationServers,
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

  public async getProjects(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cases/projects";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.getProjects",
      CaseManagementApi.operationServers,
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

  public async linkIncident(
    caseId: string,
    body: RelationshipToIncidentRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.linkIncident"]) {
      throw new Error(
        "Unstable operation 'linkIncident' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.linkIncident'] = true`",
      );
    }

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "linkIncident");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "linkIncident");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cases/{case_id}/relationships/incidents".replace(
        "{case_id}",
        encodeURIComponent(String(caseId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.linkIncident",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "RelationshipToIncidentRequest", ""),
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

  public async linkJiraIssueToCase(
    caseId: string,
    body: JiraIssueLinkRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["CaseManagementApi.v2.linkJiraIssueToCase"]
    ) {
      throw new Error(
        "Unstable operation 'linkJiraIssueToCase' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.linkJiraIssueToCase'] = true`",
      );
    }

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "linkJiraIssueToCase");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "linkJiraIssueToCase");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cases/{case_id}/relationships/jira_issues".replace(
        "{case_id}",
        encodeURIComponent(String(caseId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.linkJiraIssueToCase",
      CaseManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
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
      serialize(body, TypingInfo, "JiraIssueLinkRequest", ""),
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

  public async listCaseAutomationRules(
    projectId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CaseManagementApi.v2.listCaseAutomationRules"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listCaseAutomationRules' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.listCaseAutomationRules'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "listCaseAutomationRules");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/projects/{project_id}/rules".replace(
      "{project_id}",
      encodeURIComponent(String(projectId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.listCaseAutomationRules",
      CaseManagementApi.operationServers,
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

  public async listCaseLinks(
    entityType: string,
    entityId: string,
    relationship?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.listCaseLinks"]) {
      throw new Error(
        "Unstable operation 'listCaseLinks' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.listCaseLinks'] = true`",
      );
    }

    // verify required parameter 'entityType' is not null or undefined
    if (entityType === null || entityType === undefined) {
      throw new RequiredError("entityType", "listCaseLinks");
    }

    // verify required parameter 'entityId' is not null or undefined
    if (entityId === null || entityId === undefined) {
      throw new RequiredError("entityId", "listCaseLinks");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/link";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.listCaseLinks",
      CaseManagementApi.operationServers,
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
    if (entityType !== undefined) {
      requestContext.setQueryParam(
        "entity_type",
        serialize(entityType, TypingInfo, "string", ""),
        "",
      );
    }
    if (entityId !== undefined) {
      requestContext.setQueryParam(
        "entity_id",
        serialize(entityId, TypingInfo, "string", ""),
        "",
      );
    }
    if (relationship !== undefined) {
      requestContext.setQueryParam(
        "relationship",
        serialize(relationship, TypingInfo, "string", ""),
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

  public async listCaseTimeline(
    caseId: string,
    pageSize?: number,
    pageNumber?: number,
    sortAscending?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.listCaseTimeline"]) {
      throw new Error(
        "Unstable operation 'listCaseTimeline' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.listCaseTimeline'] = true`",
      );
    }

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "listCaseTimeline");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/timelines".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.listCaseTimeline",
      CaseManagementApi.operationServers,
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
        serialize(pageSize, TypingInfo, "number", ""),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", ""),
        "",
      );
    }
    if (sortAscending !== undefined) {
      requestContext.setQueryParam(
        "sort[ascending]",
        serialize(sortAscending, TypingInfo, "boolean", ""),
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

  public async listCaseViews(
    projectId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.listCaseViews"]) {
      throw new Error(
        "Unstable operation 'listCaseViews' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.listCaseViews'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "listCaseViews");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/views";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.listCaseViews",
      CaseManagementApi.operationServers,
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
    if (projectId !== undefined) {
      requestContext.setQueryParam(
        "project_id",
        serialize(projectId, TypingInfo, "string", ""),
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

  public async listCaseWatchers(
    caseId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.listCaseWatchers"]) {
      throw new Error(
        "Unstable operation 'listCaseWatchers' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.listCaseWatchers'] = true`",
      );
    }

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "listCaseWatchers");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/watchers".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.listCaseWatchers",
      CaseManagementApi.operationServers,
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

  public async listMaintenanceWindows(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["CaseManagementApi.v2.listMaintenanceWindows"]
    ) {
      throw new Error(
        "Unstable operation 'listMaintenanceWindows' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.listMaintenanceWindows'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/maintenance_windows";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.listMaintenanceWindows",
      CaseManagementApi.operationServers,
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

  public async listUserCaseProjectFavorites(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CaseManagementApi.v2.listUserCaseProjectFavorites"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listUserCaseProjectFavorites' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.listUserCaseProjectFavorites'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/cases/projects/favorites";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.listUserCaseProjectFavorites",
      CaseManagementApi.operationServers,
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

  public async moveCaseToProject(
    caseId: string,
    body: ProjectRelationship,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.moveCaseToProject"]) {
      throw new Error(
        "Unstable operation 'moveCaseToProject' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.moveCaseToProject'] = true`",
      );
    }

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "moveCaseToProject");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "moveCaseToProject");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cases/{case_id}/relationships/project".replace(
        "{case_id}",
        encodeURIComponent(String(caseId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.moveCaseToProject",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "ProjectRelationship", ""),
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

  public async removeCaseInsights(
    caseId: string,
    body: CaseInsightsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["CaseManagementApi.v2.removeCaseInsights"]
    ) {
      throw new Error(
        "Unstable operation 'removeCaseInsights' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.removeCaseInsights'] = true`",
      );
    }

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "removeCaseInsights");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "removeCaseInsights");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/insights".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.removeCaseInsights",
      CaseManagementApi.operationServers,
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

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CaseInsightsRequest", ""),
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

  public async searchCases(
    pageSize?: number,
    pageNumber?: number,
    sortField?: CaseSortableField,
    filter?: string,
    sortAsc?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cases";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.searchCases",
      CaseManagementApi.operationServers,
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
    if (sortField !== undefined) {
      requestContext.setQueryParam(
        "sort[field]",
        serialize(sortField, TypingInfo, "CaseSortableField", ""),
        "",
      );
    }
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        serialize(filter, TypingInfo, "string", ""),
        "",
      );
    }
    if (sortAsc !== undefined) {
      requestContext.setQueryParam(
        "sort[asc]",
        serialize(sortAsc, TypingInfo, "boolean", ""),
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

  public async unarchiveCase(
    caseId: string,
    body: CaseEmptyRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "unarchiveCase");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "unarchiveCase");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/unarchive".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.unarchiveCase",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseEmptyRequest", ""),
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

  public async unassignCase(
    caseId: string,
    body: CaseEmptyRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "unassignCase");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "unassignCase");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/unassign".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.unassignCase",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseEmptyRequest", ""),
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

  public async unfavoriteCaseProject(
    projectId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["CaseManagementApi.v2.unfavoriteCaseProject"]
    ) {
      throw new Error(
        "Unstable operation 'unfavoriteCaseProject' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.unfavoriteCaseProject'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "unfavoriteCaseProject");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cases/projects/{project_id}/favorites".replace(
        "{project_id}",
        encodeURIComponent(String(projectId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.unfavoriteCaseProject",
      CaseManagementApi.operationServers,
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

  public async unlinkJiraIssue(
    caseId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.unlinkJiraIssue"]) {
      throw new Error(
        "Unstable operation 'unlinkJiraIssue' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.unlinkJiraIssue'] = true`",
      );
    }

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "unlinkJiraIssue");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cases/{case_id}/relationships/jira_issues".replace(
        "{case_id}",
        encodeURIComponent(String(caseId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.unlinkJiraIssue",
      CaseManagementApi.operationServers,
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

  public async unwatchCase(
    caseId: string,
    userUuid: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.unwatchCase"]) {
      throw new Error(
        "Unstable operation 'unwatchCase' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.unwatchCase'] = true`",
      );
    }

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "unwatchCase");
    }

    // verify required parameter 'userUuid' is not null or undefined
    if (userUuid === null || userUuid === undefined) {
      throw new RequiredError("userUuid", "unwatchCase");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/watchers/{user_uuid}"
      .replace("{case_id}", encodeURIComponent(String(caseId)))
      .replace("{user_uuid}", encodeURIComponent(String(userUuid)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.unwatchCase",
      CaseManagementApi.operationServers,
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

  public async updateAttributes(
    caseId: string,
    body: CaseUpdateAttributesRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "updateAttributes");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAttributes");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/attributes".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.updateAttributes",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseUpdateAttributesRequest", ""),
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

  public async updateCaseAutomationRule(
    projectId: string,
    ruleId: string,
    body: AutomationRuleUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CaseManagementApi.v2.updateCaseAutomationRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateCaseAutomationRule' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.updateCaseAutomationRule'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "updateCaseAutomationRule");
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "updateCaseAutomationRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCaseAutomationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/projects/{project_id}/rules/{rule_id}"
      .replace("{project_id}", encodeURIComponent(String(projectId)))
      .replace("{rule_id}", encodeURIComponent(String(ruleId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.updateCaseAutomationRule",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "AutomationRuleUpdateRequest", ""),
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

  public async updateCaseComment(
    caseId: string,
    cellId: string,
    body: CaseUpdateCommentRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.updateCaseComment"]) {
      throw new Error(
        "Unstable operation 'updateCaseComment' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.updateCaseComment'] = true`",
      );
    }

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "updateCaseComment");
    }

    // verify required parameter 'cellId' is not null or undefined
    if (cellId === null || cellId === undefined) {
      throw new RequiredError("cellId", "updateCaseComment");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCaseComment");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/comment/{cell_id}"
      .replace("{case_id}", encodeURIComponent(String(caseId)))
      .replace("{cell_id}", encodeURIComponent(String(cellId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.updateCaseComment",
      CaseManagementApi.operationServers,
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

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CaseUpdateCommentRequest", ""),
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

  public async updateCaseCustomAttribute(
    caseId: string,
    customAttributeKey: string,
    body: CaseUpdateCustomAttributeRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "updateCaseCustomAttribute");
    }

    // verify required parameter 'customAttributeKey' is not null or undefined
    if (customAttributeKey === null || customAttributeKey === undefined) {
      throw new RequiredError(
        "customAttributeKey",
        "updateCaseCustomAttribute",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCaseCustomAttribute");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cases/{case_id}/custom_attributes/{custom_attribute_key}"
        .replace("{case_id}", encodeURIComponent(String(caseId)))
        .replace(
          "{custom_attribute_key}",
          encodeURIComponent(String(customAttributeKey)),
        );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.updateCaseCustomAttribute",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseUpdateCustomAttributeRequest", ""),
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

  public async updateCaseDescription(
    caseId: string,
    body: CaseUpdateDescriptionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "updateCaseDescription");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCaseDescription");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/description".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.updateCaseDescription",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseUpdateDescriptionRequest", ""),
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

  public async updateCaseDueDate(
    caseId: string,
    body: CaseUpdateDueDateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.updateCaseDueDate"]) {
      throw new Error(
        "Unstable operation 'updateCaseDueDate' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.updateCaseDueDate'] = true`",
      );
    }

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "updateCaseDueDate");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCaseDueDate");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/due_date".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.updateCaseDueDate",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseUpdateDueDateRequest", ""),
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

  public async updateCaseResolvedReason(
    caseId: string,
    body: CaseUpdateResolvedReasonRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CaseManagementApi.v2.updateCaseResolvedReason"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateCaseResolvedReason' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.updateCaseResolvedReason'] = true`",
      );
    }

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "updateCaseResolvedReason");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCaseResolvedReason");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/resolved_reason".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.updateCaseResolvedReason",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseUpdateResolvedReasonRequest", ""),
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

  public async updateCaseTitle(
    caseId: string,
    body: CaseUpdateTitleRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "updateCaseTitle");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCaseTitle");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/title".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.updateCaseTitle",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseUpdateTitleRequest", ""),
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

  public async updateCaseView(
    viewId: string,
    body: CaseViewUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.updateCaseView"]) {
      throw new Error(
        "Unstable operation 'updateCaseView' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.updateCaseView'] = true`",
      );
    }

    // verify required parameter 'viewId' is not null or undefined
    if (viewId === null || viewId === undefined) {
      throw new RequiredError("viewId", "updateCaseView");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCaseView");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/views/{view_id}".replace(
      "{view_id}",
      encodeURIComponent(String(viewId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.updateCaseView",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseViewUpdateRequest", ""),
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

  public async updateMaintenanceWindow(
    maintenanceWindowId: string,
    body: MaintenanceWindowUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CaseManagementApi.v2.updateMaintenanceWindow"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateMaintenanceWindow' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.updateMaintenanceWindow'] = true`",
      );
    }

    // verify required parameter 'maintenanceWindowId' is not null or undefined
    if (maintenanceWindowId === null || maintenanceWindowId === undefined) {
      throw new RequiredError("maintenanceWindowId", "updateMaintenanceWindow");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateMaintenanceWindow");
    }

    // Path Params
    const localVarPath =
      "/api/v2/maintenance_windows/{maintenance_window_id}".replace(
        "{maintenance_window_id}",
        encodeURIComponent(String(maintenanceWindowId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.updateMaintenanceWindow",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "MaintenanceWindowUpdateRequest", ""),
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

  public async updatePriority(
    caseId: string,
    body: CaseUpdatePriorityRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "updatePriority");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updatePriority");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/priority".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.updatePriority",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseUpdatePriorityRequest", ""),
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

  public async updateProject(
    projectId: string,
    body: ProjectUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "updateProject");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateProject");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/projects/{project_id}".replace(
      "{project_id}",
      encodeURIComponent(String(projectId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.updateProject",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "ProjectUpdateRequest", ""),
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

  public async updateProjectNotificationRule(
    projectId: string,
    notificationRuleId: string,
    body: CaseNotificationRuleUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "updateProjectNotificationRule");
    }

    // verify required parameter 'notificationRuleId' is not null or undefined
    if (notificationRuleId === null || notificationRuleId === undefined) {
      throw new RequiredError(
        "notificationRuleId",
        "updateProjectNotificationRule",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateProjectNotificationRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cases/projects/{project_id}/notification_rules/{notification_rule_id}"
        .replace("{project_id}", encodeURIComponent(String(projectId)))
        .replace(
          "{notification_rule_id}",
          encodeURIComponent(String(notificationRuleId)),
        );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.updateProjectNotificationRule",
      CaseManagementApi.operationServers,
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

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CaseNotificationRuleUpdateRequest", ""),
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

  public async updateStatus(
    caseId: string,
    body: CaseUpdateStatusRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "updateStatus");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateStatus");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/status".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.updateStatus",
      CaseManagementApi.operationServers,
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
      serialize(body, TypingInfo, "CaseUpdateStatusRequest", ""),
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

  public async watchCase(
    caseId: string,
    userUuid: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["CaseManagementApi.v2.watchCase"]) {
      throw new Error(
        "Unstable operation 'watchCase' is disabled. Enable it by setting `configuration.unstableOperations['CaseManagementApi.v2.watchCase'] = true`",
      );
    }

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "watchCase");
    }

    // verify required parameter 'userUuid' is not null or undefined
    if (userUuid === null || userUuid === undefined) {
      throw new RequiredError("userUuid", "watchCase");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/{case_id}/watchers/{user_uuid}"
      .replace("{case_id}", encodeURIComponent(String(caseId)))
      .replace("{user_uuid}", encodeURIComponent(String(userUuid)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementApi.v2.watchCase",
      CaseManagementApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class CaseManagementApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to addCaseInsights
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async addCaseInsights(
    response: ResponseContext,
  ): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to aggregateCases
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async aggregateCases(
    response: ResponseContext,
  ): Promise<CaseAggregateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseAggregateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseAggregateResponse",
      ) as CaseAggregateResponse;
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
      const body: CaseAggregateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseAggregateResponse",
        "",
      ) as CaseAggregateResponse;
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
   * @params response Response returned by the server for a request to archiveCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async archiveCase(response: ResponseContext): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to assignCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async assignCase(response: ResponseContext): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to bulkUpdateCases
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkUpdateCases(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
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
   * @params response Response returned by the server for a request to commentCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async commentCase(
    response: ResponseContext,
  ): Promise<TimelineResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TimelineResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TimelineResponse",
      ) as TimelineResponse;
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
      const body: TimelineResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TimelineResponse",
        "",
      ) as TimelineResponse;
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
   * @params response Response returned by the server for a request to countCases
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async countCases(
    response: ResponseContext,
  ): Promise<CaseCountResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseCountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseCountResponse",
      ) as CaseCountResponse;
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
      const body: CaseCountResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseCountResponse",
        "",
      ) as CaseCountResponse;
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
   * @params response Response returned by the server for a request to createCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCase(response: ResponseContext): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to createCaseAutomationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCaseAutomationRule(
    response: ResponseContext,
  ): Promise<AutomationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: AutomationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AutomationRuleResponse",
      ) as AutomationRuleResponse;
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
      const body: AutomationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AutomationRuleResponse",
        "",
      ) as AutomationRuleResponse;
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
   * @params response Response returned by the server for a request to createCaseJiraIssue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCaseJiraIssue(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
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
   * @params response Response returned by the server for a request to createCaseLink
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCaseLink(
    response: ResponseContext,
  ): Promise<CaseLinkResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: CaseLinkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseLinkResponse",
      ) as CaseLinkResponse;
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
      const body: CaseLinkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseLinkResponse",
        "",
      ) as CaseLinkResponse;
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
   * @params response Response returned by the server for a request to createCaseNotebook
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCaseNotebook(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to createCaseServiceNowTicket
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCaseServiceNowTicket(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
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
   * @params response Response returned by the server for a request to createCaseView
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCaseView(
    response: ResponseContext,
  ): Promise<CaseViewResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: CaseViewResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseViewResponse",
      ) as CaseViewResponse;
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
      const body: CaseViewResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseViewResponse",
        "",
      ) as CaseViewResponse;
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
   * @params response Response returned by the server for a request to createMaintenanceWindow
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createMaintenanceWindow(
    response: ResponseContext,
  ): Promise<MaintenanceWindowResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: MaintenanceWindowResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MaintenanceWindowResponse",
      ) as MaintenanceWindowResponse;
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
      const body: MaintenanceWindowResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MaintenanceWindowResponse",
        "",
      ) as MaintenanceWindowResponse;
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
   * @params response Response returned by the server for a request to createProject
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createProject(
    response: ResponseContext,
  ): Promise<ProjectResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: ProjectResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProjectResponse",
      ) as ProjectResponse;
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
      const body: ProjectResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProjectResponse",
        "",
      ) as ProjectResponse;
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
   * @params response Response returned by the server for a request to createProjectNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createProjectNotificationRule(
    response: ResponseContext,
  ): Promise<CaseNotificationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: CaseNotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseNotificationRuleResponse",
      ) as CaseNotificationRuleResponse;
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
      const body: CaseNotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseNotificationRuleResponse",
        "",
      ) as CaseNotificationRuleResponse;
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
   * @params response Response returned by the server for a request to deleteCaseAutomationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCaseAutomationRule(
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
   * @params response Response returned by the server for a request to deleteCaseComment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCaseComment(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
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
   * @params response Response returned by the server for a request to deleteCaseCustomAttribute
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCaseCustomAttribute(
    response: ResponseContext,
  ): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to deleteCaseLink
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCaseLink(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
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
   * @params response Response returned by the server for a request to deleteCaseView
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCaseView(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
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
   * @params response Response returned by the server for a request to deleteMaintenanceWindow
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteMaintenanceWindow(
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
   * @params response Response returned by the server for a request to deleteProject
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteProject(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteProjectNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteProjectNotificationRule(
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
   * @params response Response returned by the server for a request to disableCaseAutomationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async disableCaseAutomationRule(
    response: ResponseContext,
  ): Promise<AutomationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AutomationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AutomationRuleResponse",
      ) as AutomationRuleResponse;
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
      const body: AutomationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AutomationRuleResponse",
        "",
      ) as AutomationRuleResponse;
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
   * @params response Response returned by the server for a request to enableCaseAutomationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async enableCaseAutomationRule(
    response: ResponseContext,
  ): Promise<AutomationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AutomationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AutomationRuleResponse",
      ) as AutomationRuleResponse;
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
      const body: AutomationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AutomationRuleResponse",
        "",
      ) as AutomationRuleResponse;
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
   * @params response Response returned by the server for a request to favoriteCaseProject
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async favoriteCaseProject(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
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
   * @params response Response returned by the server for a request to getCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCase(response: ResponseContext): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to getCaseAutomationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCaseAutomationRule(
    response: ResponseContext,
  ): Promise<AutomationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AutomationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AutomationRuleResponse",
      ) as AutomationRuleResponse;
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
      const body: AutomationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AutomationRuleResponse",
        "",
      ) as AutomationRuleResponse;
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
   * @params response Response returned by the server for a request to getCaseView
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCaseView(
    response: ResponseContext,
  ): Promise<CaseViewResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseViewResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseViewResponse",
      ) as CaseViewResponse;
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
      const body: CaseViewResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseViewResponse",
        "",
      ) as CaseViewResponse;
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
   * @params response Response returned by the server for a request to getProject
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getProject(response: ResponseContext): Promise<ProjectResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProjectResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProjectResponse",
      ) as ProjectResponse;
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
      const body: ProjectResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProjectResponse",
        "",
      ) as ProjectResponse;
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
   * @params response Response returned by the server for a request to getProjectNotificationRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getProjectNotificationRules(
    response: ResponseContext,
  ): Promise<CaseNotificationRulesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseNotificationRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseNotificationRulesResponse",
      ) as CaseNotificationRulesResponse;
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
      const body: CaseNotificationRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseNotificationRulesResponse",
        "",
      ) as CaseNotificationRulesResponse;
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
   * @params response Response returned by the server for a request to getProjects
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getProjects(
    response: ResponseContext,
  ): Promise<ProjectsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProjectsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProjectsResponse",
      ) as ProjectsResponse;
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
      const body: ProjectsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProjectsResponse",
        "",
      ) as ProjectsResponse;
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
   * @params response Response returned by the server for a request to linkIncident
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async linkIncident(response: ResponseContext): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to linkJiraIssueToCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async linkJiraIssueToCase(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listCaseAutomationRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCaseAutomationRules(
    response: ResponseContext,
  ): Promise<AutomationRulesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AutomationRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AutomationRulesResponse",
      ) as AutomationRulesResponse;
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
      const body: AutomationRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AutomationRulesResponse",
        "",
      ) as AutomationRulesResponse;
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
   * @params response Response returned by the server for a request to listCaseLinks
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCaseLinks(
    response: ResponseContext,
  ): Promise<CaseLinksResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseLinksResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseLinksResponse",
      ) as CaseLinksResponse;
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
      const body: CaseLinksResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseLinksResponse",
        "",
      ) as CaseLinksResponse;
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
   * @params response Response returned by the server for a request to listCaseTimeline
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCaseTimeline(
    response: ResponseContext,
  ): Promise<TimelineResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TimelineResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TimelineResponse",
      ) as TimelineResponse;
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
      const body: TimelineResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TimelineResponse",
        "",
      ) as TimelineResponse;
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
   * @params response Response returned by the server for a request to listCaseViews
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCaseViews(
    response: ResponseContext,
  ): Promise<CaseViewsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseViewsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseViewsResponse",
      ) as CaseViewsResponse;
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
      const body: CaseViewsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseViewsResponse",
        "",
      ) as CaseViewsResponse;
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
   * @params response Response returned by the server for a request to listCaseWatchers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCaseWatchers(
    response: ResponseContext,
  ): Promise<CaseWatchersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseWatchersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseWatchersResponse",
      ) as CaseWatchersResponse;
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
      const body: CaseWatchersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseWatchersResponse",
        "",
      ) as CaseWatchersResponse;
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
   * @params response Response returned by the server for a request to listMaintenanceWindows
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listMaintenanceWindows(
    response: ResponseContext,
  ): Promise<MaintenanceWindowsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MaintenanceWindowsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MaintenanceWindowsResponse",
      ) as MaintenanceWindowsResponse;
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
      const body: MaintenanceWindowsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MaintenanceWindowsResponse",
        "",
      ) as MaintenanceWindowsResponse;
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
   * @params response Response returned by the server for a request to listUserCaseProjectFavorites
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listUserCaseProjectFavorites(
    response: ResponseContext,
  ): Promise<ProjectFavoritesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProjectFavoritesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProjectFavoritesResponse",
      ) as ProjectFavoritesResponse;
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
      const body: ProjectFavoritesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProjectFavoritesResponse",
        "",
      ) as ProjectFavoritesResponse;
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
   * @params response Response returned by the server for a request to moveCaseToProject
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async moveCaseToProject(
    response: ResponseContext,
  ): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to removeCaseInsights
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async removeCaseInsights(
    response: ResponseContext,
  ): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to searchCases
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchCases(response: ResponseContext): Promise<CasesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CasesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CasesResponse",
      ) as CasesResponse;
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
      const body: CasesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CasesResponse",
        "",
      ) as CasesResponse;
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
   * @params response Response returned by the server for a request to unarchiveCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unarchiveCase(response: ResponseContext): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to unassignCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unassignCase(response: ResponseContext): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to unfavoriteCaseProject
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unfavoriteCaseProject(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
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
   * @params response Response returned by the server for a request to unlinkJiraIssue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unlinkJiraIssue(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to unwatchCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unwatchCase(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
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
   * @params response Response returned by the server for a request to updateAttributes
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAttributes(
    response: ResponseContext,
  ): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to updateCaseAutomationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCaseAutomationRule(
    response: ResponseContext,
  ): Promise<AutomationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AutomationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AutomationRuleResponse",
      ) as AutomationRuleResponse;
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
      const body: AutomationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AutomationRuleResponse",
        "",
      ) as AutomationRuleResponse;
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
   * @params response Response returned by the server for a request to updateCaseComment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCaseComment(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
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
   * @params response Response returned by the server for a request to updateCaseCustomAttribute
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCaseCustomAttribute(
    response: ResponseContext,
  ): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to updateCaseDescription
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCaseDescription(
    response: ResponseContext,
  ): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to updateCaseDueDate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCaseDueDate(
    response: ResponseContext,
  ): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to updateCaseResolvedReason
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCaseResolvedReason(
    response: ResponseContext,
  ): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to updateCaseTitle
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCaseTitle(
    response: ResponseContext,
  ): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to updateCaseView
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCaseView(
    response: ResponseContext,
  ): Promise<CaseViewResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseViewResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseViewResponse",
      ) as CaseViewResponse;
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
      const body: CaseViewResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseViewResponse",
        "",
      ) as CaseViewResponse;
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
   * @params response Response returned by the server for a request to updateMaintenanceWindow
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateMaintenanceWindow(
    response: ResponseContext,
  ): Promise<MaintenanceWindowResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MaintenanceWindowResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MaintenanceWindowResponse",
      ) as MaintenanceWindowResponse;
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
      const body: MaintenanceWindowResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MaintenanceWindowResponse",
        "",
      ) as MaintenanceWindowResponse;
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
   * @params response Response returned by the server for a request to updatePriority
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updatePriority(
    response: ResponseContext,
  ): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to updateProject
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateProject(
    response: ResponseContext,
  ): Promise<ProjectResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ProjectResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProjectResponse",
      ) as ProjectResponse;
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
      const body: ProjectResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ProjectResponse",
        "",
      ) as ProjectResponse;
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
   * @params response Response returned by the server for a request to updateProjectNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateProjectNotificationRule(
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
   * @params response Response returned by the server for a request to updateStatus
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateStatus(response: ResponseContext): Promise<CaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
      ) as CaseResponse;
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
      const body: CaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseResponse",
        "",
      ) as CaseResponse;
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
   * @params response Response returned by the server for a request to watchCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async watchCase(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      return;
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
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface CaseManagementApiAddCaseInsightsRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Case insights request.
   * @type CaseInsightsRequest
   */
  body: CaseInsightsRequest;
}

export interface CaseManagementApiAggregateCasesRequest {
  /**
   * Case aggregate request payload.
   * @type CaseAggregateRequest
   */
  body: CaseAggregateRequest;
}

export interface CaseManagementApiArchiveCaseRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Archive case payload
   * @type CaseEmptyRequest
   */
  body: CaseEmptyRequest;
}

export interface CaseManagementApiAssignCaseRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Assign case payload
   * @type CaseAssignRequest
   */
  body: CaseAssignRequest;
}

export interface CaseManagementApiBulkUpdateCasesRequest {
  /**
   * Case bulk update request payload.
   * @type CaseBulkUpdateRequest
   */
  body: CaseBulkUpdateRequest;
}

export interface CaseManagementApiCommentCaseRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Case comment payload
   * @type CaseCommentRequest
   */
  body: CaseCommentRequest;
}

export interface CaseManagementApiCountCasesRequest {
  /**
   * Filter query for cases.
   * @type string
   */
  queryFilter?: string;
  /**
   * Comma-separated fields to group by.
   * @type string
   */
  groupBys?: string;
  /**
   * Maximum facet values to return.
   * @type number
   */
  limit?: number;
}

export interface CaseManagementApiCreateCaseRequest {
  /**
   * Case payload
   * @type CaseCreateRequest
   */
  body: CaseCreateRequest;
}

export interface CaseManagementApiCreateCaseAutomationRuleRequest {
  /**
   * The UUID of the project that owns the automation rules.
   * @type string
   */
  projectId: string;
  /**
   * Automation rule payload.
   * @type AutomationRuleCreateRequest
   */
  body: AutomationRuleCreateRequest;
}

export interface CaseManagementApiCreateCaseJiraIssueRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Jira issue creation request
   * @type JiraIssueCreateRequest
   */
  body: JiraIssueCreateRequest;
}

export interface CaseManagementApiCreateCaseLinkRequest {
  /**
   * Case link create request.
   * @type CaseLinkCreateRequest
   */
  body: CaseLinkCreateRequest;
}

export interface CaseManagementApiCreateCaseNotebookRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Notebook creation request
   * @type NotebookCreateRequest
   */
  body: NotebookCreateRequest;
}

export interface CaseManagementApiCreateCaseServiceNowTicketRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * ServiceNow ticket creation request
   * @type ServiceNowTicketCreateRequest
   */
  body: ServiceNowTicketCreateRequest;
}

export interface CaseManagementApiCreateCaseViewRequest {
  /**
   * Case view payload.
   * @type CaseViewCreateRequest
   */
  body: CaseViewCreateRequest;
}

export interface CaseManagementApiCreateMaintenanceWindowRequest {
  /**
   * Maintenance window payload.
   * @type MaintenanceWindowCreateRequest
   */
  body: MaintenanceWindowCreateRequest;
}

export interface CaseManagementApiCreateProjectRequest {
  /**
   * Project payload.
   * @type ProjectCreateRequest
   */
  body: ProjectCreateRequest;
}

export interface CaseManagementApiCreateProjectNotificationRuleRequest {
  /**
   * Project UUID
   * @type string
   */
  projectId: string;
  /**
   * Notification rule payload
   * @type CaseNotificationRuleCreateRequest
   */
  body: CaseNotificationRuleCreateRequest;
}

export interface CaseManagementApiDeleteCaseAutomationRuleRequest {
  /**
   * The UUID of the project that owns the automation rules.
   * @type string
   */
  projectId: string;
  /**
   * The UUID of the automation rule.
   * @type string
   */
  ruleId: string;
}

export interface CaseManagementApiDeleteCaseCommentRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * The UUID of the timeline cell (comment) to update.
   * @type string
   */
  cellId: string;
}

export interface CaseManagementApiDeleteCaseCustomAttributeRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Case Custom attribute's key
   * @type string
   */
  customAttributeKey: string;
}

export interface CaseManagementApiDeleteCaseLinkRequest {
  /**
   * The UUID of the case link.
   * @type string
   */
  linkId: string;
}

export interface CaseManagementApiDeleteCaseViewRequest {
  /**
   * The UUID of the case view.
   * @type string
   */
  viewId: string;
}

export interface CaseManagementApiDeleteMaintenanceWindowRequest {
  /**
   * The UUID of the maintenance window.
   * @type string
   */
  maintenanceWindowId: string;
}

export interface CaseManagementApiDeleteProjectRequest {
  /**
   * Project UUID.
   * @type string
   */
  projectId: string;
}

export interface CaseManagementApiDeleteProjectNotificationRuleRequest {
  /**
   * Project UUID
   * @type string
   */
  projectId: string;
  /**
   * Notification Rule UUID
   * @type string
   */
  notificationRuleId: string;
}

export interface CaseManagementApiDisableCaseAutomationRuleRequest {
  /**
   * The UUID of the project that owns the automation rules.
   * @type string
   */
  projectId: string;
  /**
   * The UUID of the automation rule.
   * @type string
   */
  ruleId: string;
}

export interface CaseManagementApiEnableCaseAutomationRuleRequest {
  /**
   * The UUID of the project that owns the automation rules.
   * @type string
   */
  projectId: string;
  /**
   * The UUID of the automation rule.
   * @type string
   */
  ruleId: string;
}

export interface CaseManagementApiFavoriteCaseProjectRequest {
  /**
   * Project UUID.
   * @type string
   */
  projectId: string;
}

export interface CaseManagementApiGetCaseRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
}

export interface CaseManagementApiGetCaseAutomationRuleRequest {
  /**
   * The UUID of the project that owns the automation rules.
   * @type string
   */
  projectId: string;
  /**
   * The UUID of the automation rule.
   * @type string
   */
  ruleId: string;
}

export interface CaseManagementApiGetCaseViewRequest {
  /**
   * The UUID of the case view.
   * @type string
   */
  viewId: string;
}

export interface CaseManagementApiGetProjectRequest {
  /**
   * Project UUID.
   * @type string
   */
  projectId: string;
}

export interface CaseManagementApiGetProjectNotificationRulesRequest {
  /**
   * Project UUID
   * @type string
   */
  projectId: string;
}

export interface CaseManagementApiLinkIncidentRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Incident link request
   * @type RelationshipToIncidentRequest
   */
  body: RelationshipToIncidentRequest;
}

export interface CaseManagementApiLinkJiraIssueToCaseRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Jira issue link request
   * @type JiraIssueLinkRequest
   */
  body: JiraIssueLinkRequest;
}

export interface CaseManagementApiListCaseAutomationRulesRequest {
  /**
   * The UUID of the project that owns the automation rules.
   * @type string
   */
  projectId: string;
}

export interface CaseManagementApiListCaseLinksRequest {
  /**
   * The entity type to look up links for. Use `CASE` to find links for a specific case.
   * @type string
   */
  entityType: string;
  /**
   * The UUID of the entity to look up links for.
   * @type string
   */
  entityId: string;
  /**
   * Optional filter to only return links of a specific relationship type (for example, `BLOCKS` or `CAUSES`).
   * @type string
   */
  relationship?: string;
}

export interface CaseManagementApiListCaseTimelineRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Number of timeline cells to return per page.
   * @type number
   */
  pageSize?: number;
  /**
   * Zero-based page number for pagination.
   * @type number
   */
  pageNumber?: number;
  /**
   * If `true`, returns timeline cells in chronological order (oldest first). Defaults to `false` (newest first).
   * @type boolean
   */
  sortAscending?: boolean;
}

export interface CaseManagementApiListCaseViewsRequest {
  /**
   * Filter views by project identifier.
   * @type string
   */
  projectId: string;
}

export interface CaseManagementApiListCaseWatchersRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
}

export interface CaseManagementApiMoveCaseToProjectRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Project update request
   * @type ProjectRelationship
   */
  body: ProjectRelationship;
}

export interface CaseManagementApiRemoveCaseInsightsRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Case insights request.
   * @type CaseInsightsRequest
   */
  body: CaseInsightsRequest;
}

export interface CaseManagementApiSearchCasesRequest {
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
   * Specify which field to sort
   * @type CaseSortableField
   */
  sortField?: CaseSortableField;
  /**
   * Search query
   * @type string
   */
  filter?: string;
  /**
   * Specify if order is ascending or not
   * @type boolean
   */
  sortAsc?: boolean;
}

export interface CaseManagementApiUnarchiveCaseRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Unarchive case payload
   * @type CaseEmptyRequest
   */
  body: CaseEmptyRequest;
}

export interface CaseManagementApiUnassignCaseRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Unassign case payload
   * @type CaseEmptyRequest
   */
  body: CaseEmptyRequest;
}

export interface CaseManagementApiUnfavoriteCaseProjectRequest {
  /**
   * Project UUID.
   * @type string
   */
  projectId: string;
}

export interface CaseManagementApiUnlinkJiraIssueRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
}

export interface CaseManagementApiUnwatchCaseRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * The UUID of the user to add or remove as a watcher.
   * @type string
   */
  userUuid: string;
}

export interface CaseManagementApiUpdateAttributesRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Case attributes update payload
   * @type CaseUpdateAttributesRequest
   */
  body: CaseUpdateAttributesRequest;
}

export interface CaseManagementApiUpdateCaseAutomationRuleRequest {
  /**
   * The UUID of the project that owns the automation rules.
   * @type string
   */
  projectId: string;
  /**
   * The UUID of the automation rule.
   * @type string
   */
  ruleId: string;
  /**
   * Automation rule payload.
   * @type AutomationRuleUpdateRequest
   */
  body: AutomationRuleUpdateRequest;
}

export interface CaseManagementApiUpdateCaseCommentRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * The UUID of the timeline cell (comment) to update.
   * @type string
   */
  cellId: string;
  /**
   * Case update comment payload.
   * @type CaseUpdateCommentRequest
   */
  body: CaseUpdateCommentRequest;
}

export interface CaseManagementApiUpdateCaseCustomAttributeRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Case Custom attribute's key
   * @type string
   */
  customAttributeKey: string;
  /**
   * Update case custom attribute payload
   * @type CaseUpdateCustomAttributeRequest
   */
  body: CaseUpdateCustomAttributeRequest;
}

export interface CaseManagementApiUpdateCaseDescriptionRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Case description update payload
   * @type CaseUpdateDescriptionRequest
   */
  body: CaseUpdateDescriptionRequest;
}

export interface CaseManagementApiUpdateCaseDueDateRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Case due date update payload.
   * @type CaseUpdateDueDateRequest
   */
  body: CaseUpdateDueDateRequest;
}

export interface CaseManagementApiUpdateCaseResolvedReasonRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Case resolved reason update payload.
   * @type CaseUpdateResolvedReasonRequest
   */
  body: CaseUpdateResolvedReasonRequest;
}

export interface CaseManagementApiUpdateCaseTitleRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Case title update payload
   * @type CaseUpdateTitleRequest
   */
  body: CaseUpdateTitleRequest;
}

export interface CaseManagementApiUpdateCaseViewRequest {
  /**
   * The UUID of the case view.
   * @type string
   */
  viewId: string;
  /**
   * Case view payload.
   * @type CaseViewUpdateRequest
   */
  body: CaseViewUpdateRequest;
}

export interface CaseManagementApiUpdateMaintenanceWindowRequest {
  /**
   * The UUID of the maintenance window.
   * @type string
   */
  maintenanceWindowId: string;
  /**
   * Maintenance window payload.
   * @type MaintenanceWindowUpdateRequest
   */
  body: MaintenanceWindowUpdateRequest;
}

export interface CaseManagementApiUpdatePriorityRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Case priority update payload
   * @type CaseUpdatePriorityRequest
   */
  body: CaseUpdatePriorityRequest;
}

export interface CaseManagementApiUpdateProjectRequest {
  /**
   * Project UUID.
   * @type string
   */
  projectId: string;
  /**
   * Project payload.
   * @type ProjectUpdateRequest
   */
  body: ProjectUpdateRequest;
}

export interface CaseManagementApiUpdateProjectNotificationRuleRequest {
  /**
   * Project UUID
   * @type string
   */
  projectId: string;
  /**
   * Notification Rule UUID
   * @type string
   */
  notificationRuleId: string;
  /**
   * Notification rule payload
   * @type CaseNotificationRuleUpdateRequest
   */
  body: CaseNotificationRuleUpdateRequest;
}

export interface CaseManagementApiUpdateStatusRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * Case status update payload
   * @type CaseUpdateStatusRequest
   */
  body: CaseUpdateStatusRequest;
}

export interface CaseManagementApiWatchCaseRequest {
  /**
   * Case's UUID or key
   * @type string
   */
  caseId: string;
  /**
   * The UUID of the user to add or remove as a watcher.
   * @type string
   */
  userUuid: string;
}

export class CaseManagementApi {
  private requestFactory: CaseManagementApiRequestFactory;
  private responseProcessor: CaseManagementApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: CaseManagementApiRequestFactory,
    responseProcessor?: CaseManagementApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new CaseManagementApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new CaseManagementApiResponseProcessor();
  }

  /**
   * Adds one or more insights to a case. Insights are references to related Datadog resources (such as monitors, security signals, incidents, or error tracking issues) that provide investigative context. Up to 100 insights can be added per request. Each insight requires a type (see `CaseInsightType` for allowed values), a ref (URL path to the resource), and a resource_id.
   * @param param The request object
   */
  public addCaseInsights(
    param: CaseManagementApiAddCaseInsightsRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.addCaseInsights(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.addCaseInsights(responseContext);
        });
    });
  }

  /**
   * Performs an aggregation query over cases, grouping results by specified fields and returning counts per group along with a total. Useful for dashboards and analytics.
   * @param param The request object
   */
  public aggregateCases(
    param: CaseManagementApiAggregateCasesRequest,
    options?: Configuration,
  ): Promise<CaseAggregateResponse> {
    const requestContextPromise = this.requestFactory.aggregateCases(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.aggregateCases(responseContext);
        });
    });
  }

  /**
   * Archive case
   * @param param The request object
   */
  public archiveCase(
    param: CaseManagementApiArchiveCaseRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.archiveCase(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.archiveCase(responseContext);
        });
    });
  }

  /**
   * Assign case to a user
   * @param param The request object
   */
  public assignCase(
    param: CaseManagementApiAssignCaseRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.assignCase(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.assignCase(responseContext);
        });
    });
  }

  /**
   * Applies a single action (such as changing priority, status, assignment, or archiving) to multiple cases at once. The list of case IDs and the action type with its payload are specified in the request body.
   * @param param The request object
   */
  public bulkUpdateCases(
    param: CaseManagementApiBulkUpdateCasesRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.bulkUpdateCases(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkUpdateCases(responseContext);
        });
    });
  }

  /**
   * Comment case
   * @param param The request object
   */
  public commentCase(
    param: CaseManagementApiCommentCaseRequest,
    options?: Configuration,
  ): Promise<TimelineResponse> {
    const requestContextPromise = this.requestFactory.commentCase(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.commentCase(responseContext);
        });
    });
  }

  /**
   * Returns case counts, optionally grouped by one or more fields (for example, status, priority). Supports a query filter to narrow the scope.
   * @param param The request object
   */
  public countCases(
    param: CaseManagementApiCountCasesRequest = {},
    options?: Configuration,
  ): Promise<CaseCountResponse> {
    const requestContextPromise = this.requestFactory.countCases(
      param.queryFilter,
      param.groupBys,
      param.limit,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.countCases(responseContext);
        });
    });
  }

  /**
   * Create a Case
   * @param param The request object
   */
  public createCase(
    param: CaseManagementApiCreateCaseRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.createCase(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCase(responseContext);
        });
    });
  }

  /**
   * Creates an automation rule for a project. The rule defines a trigger event (for example, case created, status transitioned) and an action to execute.
   * @param param The request object
   */
  public createCaseAutomationRule(
    param: CaseManagementApiCreateCaseAutomationRuleRequest,
    options?: Configuration,
  ): Promise<AutomationRuleResponse> {
    const requestContextPromise = this.requestFactory.createCaseAutomationRule(
      param.projectId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCaseAutomationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a new Jira issue and link it to a case
   * @param param The request object
   */
  public createCaseJiraIssue(
    param: CaseManagementApiCreateCaseJiraIssueRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.createCaseJiraIssue(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCaseJiraIssue(responseContext);
        });
    });
  }

  /**
   * Creates a directional link between two cases (for example, case A blocks case B). The parent and child cases and their relationship type must be specified.
   * @param param The request object
   */
  public createCaseLink(
    param: CaseManagementApiCreateCaseLinkRequest,
    options?: Configuration,
  ): Promise<CaseLinkResponse> {
    const requestContextPromise = this.requestFactory.createCaseLink(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCaseLink(responseContext);
        });
    });
  }

  /**
   * Create a new investigation notebook and link it to a case
   * @param param The request object
   */
  public createCaseNotebook(
    param: CaseManagementApiCreateCaseNotebookRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.createCaseNotebook(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCaseNotebook(responseContext);
        });
    });
  }

  /**
   * Create a new ServiceNow incident ticket and link it to a case
   * @param param The request object
   */
  public createCaseServiceNowTicket(
    param: CaseManagementApiCreateCaseServiceNowTicketRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.createCaseServiceNowTicket(
        param.caseId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCaseServiceNowTicket(
            responseContext,
          );
        });
    });
  }

  /**
   * Creates a new saved case view with a name, filter query, and associated project. Optionally, a notification rule can be linked to the view.
   * @param param The request object
   */
  public createCaseView(
    param: CaseManagementApiCreateCaseViewRequest,
    options?: Configuration,
  ): Promise<CaseViewResponse> {
    const requestContextPromise = this.requestFactory.createCaseView(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCaseView(responseContext);
        });
    });
  }

  /**
   * Creates a maintenance window for event management cases with a name, case filter query, and time range (start and end).
   * @param param The request object
   */
  public createMaintenanceWindow(
    param: CaseManagementApiCreateMaintenanceWindowRequest,
    options?: Configuration,
  ): Promise<MaintenanceWindowResponse> {
    const requestContextPromise = this.requestFactory.createMaintenanceWindow(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createMaintenanceWindow(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a project.
   * @param param The request object
   */
  public createProject(
    param: CaseManagementApiCreateProjectRequest,
    options?: Configuration,
  ): Promise<ProjectResponse> {
    const requestContextPromise = this.requestFactory.createProject(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createProject(responseContext);
        });
    });
  }

  /**
   * Create a notification rule for a project.
   * @param param The request object
   */
  public createProjectNotificationRule(
    param: CaseManagementApiCreateProjectNotificationRuleRequest,
    options?: Configuration,
  ): Promise<CaseNotificationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createProjectNotificationRule(
        param.projectId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createProjectNotificationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Permanently deletes an automation rule from a project.
   * @param param The request object
   */
  public deleteCaseAutomationRule(
    param: CaseManagementApiDeleteCaseAutomationRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCaseAutomationRule(
      param.projectId,
      param.ruleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCaseAutomationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete case comment
   * @param param The request object
   */
  public deleteCaseComment(
    param: CaseManagementApiDeleteCaseCommentRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCaseComment(
      param.caseId,
      param.cellId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCaseComment(responseContext);
        });
    });
  }

  /**
   * Delete custom attribute from case
   * @param param The request object
   */
  public deleteCaseCustomAttribute(
    param: CaseManagementApiDeleteCaseCustomAttributeRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.deleteCaseCustomAttribute(
      param.caseId,
      param.customAttributeKey,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCaseCustomAttribute(
            responseContext,
          );
        });
    });
  }

  /**
   * Deletes an existing link between cases by link ID.
   * @param param The request object
   */
  public deleteCaseLink(
    param: CaseManagementApiDeleteCaseLinkRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCaseLink(
      param.linkId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCaseLink(responseContext);
        });
    });
  }

  /**
   * Permanently deletes a saved case view.
   * @param param The request object
   */
  public deleteCaseView(
    param: CaseManagementApiDeleteCaseViewRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCaseView(
      param.viewId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCaseView(responseContext);
        });
    });
  }

  /**
   * Permanently deletes a maintenance window.
   * @param param The request object
   */
  public deleteMaintenanceWindow(
    param: CaseManagementApiDeleteMaintenanceWindowRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteMaintenanceWindow(
      param.maintenanceWindowId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteMaintenanceWindow(
            responseContext,
          );
        });
    });
  }

  /**
   * Remove a project using the project's `id`.
   * @param param The request object
   */
  public deleteProject(
    param: CaseManagementApiDeleteProjectRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteProject(
      param.projectId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteProject(responseContext);
        });
    });
  }

  /**
   * Delete a notification rule using the notification rule's `id`.
   * @param param The request object
   */
  public deleteProjectNotificationRule(
    param: CaseManagementApiDeleteProjectNotificationRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteProjectNotificationRule(
        param.projectId,
        param.notificationRuleId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteProjectNotificationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Disables an automation rule so it no longer triggers on case events. The rule configuration is preserved.
   * @param param The request object
   */
  public disableCaseAutomationRule(
    param: CaseManagementApiDisableCaseAutomationRuleRequest,
    options?: Configuration,
  ): Promise<AutomationRuleResponse> {
    const requestContextPromise = this.requestFactory.disableCaseAutomationRule(
      param.projectId,
      param.ruleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.disableCaseAutomationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Enables a previously disabled automation rule so it triggers on matching case events.
   * @param param The request object
   */
  public enableCaseAutomationRule(
    param: CaseManagementApiEnableCaseAutomationRuleRequest,
    options?: Configuration,
  ): Promise<AutomationRuleResponse> {
    const requestContextPromise = this.requestFactory.enableCaseAutomationRule(
      param.projectId,
      param.ruleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.enableCaseAutomationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Marks a case project as a favorite for the current authenticated user.
   * @param param The request object
   */
  public favoriteCaseProject(
    param: CaseManagementApiFavoriteCaseProjectRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.favoriteCaseProject(
      param.projectId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.favoriteCaseProject(responseContext);
        });
    });
  }

  /**
   * Get the details of case by `case_id`
   * @param param The request object
   */
  public getCase(
    param: CaseManagementApiGetCaseRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.getCase(
      param.caseId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCase(responseContext);
        });
    });
  }

  /**
   * Returns a single automation rule identified by its UUID, including its trigger, action, and current state (enabled/disabled).
   * @param param The request object
   */
  public getCaseAutomationRule(
    param: CaseManagementApiGetCaseAutomationRuleRequest,
    options?: Configuration,
  ): Promise<AutomationRuleResponse> {
    const requestContextPromise = this.requestFactory.getCaseAutomationRule(
      param.projectId,
      param.ruleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCaseAutomationRule(responseContext);
        });
    });
  }

  /**
   * Returns a single saved case view identified by its UUID, including its query, associated project, and timestamps.
   * @param param The request object
   */
  public getCaseView(
    param: CaseManagementApiGetCaseViewRequest,
    options?: Configuration,
  ): Promise<CaseViewResponse> {
    const requestContextPromise = this.requestFactory.getCaseView(
      param.viewId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCaseView(responseContext);
        });
    });
  }

  /**
   * Get the details of a project by `project_id`.
   * @param param The request object
   */
  public getProject(
    param: CaseManagementApiGetProjectRequest,
    options?: Configuration,
  ): Promise<ProjectResponse> {
    const requestContextPromise = this.requestFactory.getProject(
      param.projectId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getProject(responseContext);
        });
    });
  }

  /**
   * Get all notification rules for a project.
   * @param param The request object
   */
  public getProjectNotificationRules(
    param: CaseManagementApiGetProjectNotificationRulesRequest,
    options?: Configuration,
  ): Promise<CaseNotificationRulesResponse> {
    const requestContextPromise =
      this.requestFactory.getProjectNotificationRules(param.projectId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getProjectNotificationRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Get all projects.
   * @param param The request object
   */
  public getProjects(options?: Configuration): Promise<ProjectsResponse> {
    const requestContextPromise = this.requestFactory.getProjects(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getProjects(responseContext);
        });
    });
  }

  /**
   * Link an incident to a case
   * @param param The request object
   */
  public linkIncident(
    param: CaseManagementApiLinkIncidentRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.linkIncident(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.linkIncident(responseContext);
        });
    });
  }

  /**
   * Link an existing Jira issue to a case
   * @param param The request object
   */
  public linkJiraIssueToCase(
    param: CaseManagementApiLinkJiraIssueToCaseRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.linkJiraIssueToCase(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.linkJiraIssueToCase(responseContext);
        });
    });
  }

  /**
   * Returns all automation rules configured for a project. Automation rules allow automatic actions to be triggered by case events like creation, status transitions, or attribute changes.
   * @param param The request object
   */
  public listCaseAutomationRules(
    param: CaseManagementApiListCaseAutomationRulesRequest,
    options?: Configuration,
  ): Promise<AutomationRulesResponse> {
    const requestContextPromise = this.requestFactory.listCaseAutomationRules(
      param.projectId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCaseAutomationRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Returns all links associated with a case. Links define relationships (for example, BLOCKS) between cases. Requires entity_type and entity_id query parameters.
   * @param param The request object
   */
  public listCaseLinks(
    param: CaseManagementApiListCaseLinksRequest,
    options?: Configuration,
  ): Promise<CaseLinksResponse> {
    const requestContextPromise = this.requestFactory.listCaseLinks(
      param.entityType,
      param.entityId,
      param.relationship,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCaseLinks(responseContext);
        });
    });
  }

  /**
   * Returns the timeline of events for a case, including comments, status changes, and other activity. Supports pagination and sort order.
   * @param param The request object
   */
  public listCaseTimeline(
    param: CaseManagementApiListCaseTimelineRequest,
    options?: Configuration,
  ): Promise<TimelineResponse> {
    const requestContextPromise = this.requestFactory.listCaseTimeline(
      param.caseId,
      param.pageSize,
      param.pageNumber,
      param.sortAscending,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCaseTimeline(responseContext);
        });
    });
  }

  /**
   * Returns all saved case views for a given project. Views are saved search queries that allow quick access to filtered lists of cases.
   * @param param The request object
   */
  public listCaseViews(
    param: CaseManagementApiListCaseViewsRequest,
    options?: Configuration,
  ): Promise<CaseViewsResponse> {
    const requestContextPromise = this.requestFactory.listCaseViews(
      param.projectId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCaseViews(responseContext);
        });
    });
  }

  /**
   * Returns the list of users who are watching a case. Watchers receive notifications about updates to the case.
   * @param param The request object
   */
  public listCaseWatchers(
    param: CaseManagementApiListCaseWatchersRequest,
    options?: Configuration,
  ): Promise<CaseWatchersResponse> {
    const requestContextPromise = this.requestFactory.listCaseWatchers(
      param.caseId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCaseWatchers(responseContext);
        });
    });
  }

  /**
   * Returns all configured maintenance windows for event management cases. Maintenance windows define time periods during which case notifications and automation rules are suppressed for cases matching a given query.
   * @param param The request object
   */
  public listMaintenanceWindows(
    options?: Configuration,
  ): Promise<MaintenanceWindowsResponse> {
    const requestContextPromise =
      this.requestFactory.listMaintenanceWindows(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMaintenanceWindows(responseContext);
        });
    });
  }

  /**
   * Returns the list of case projects that the current authenticated user has marked as favorites.
   * @param param The request object
   */
  public listUserCaseProjectFavorites(
    options?: Configuration,
  ): Promise<ProjectFavoritesResponse> {
    const requestContextPromise =
      this.requestFactory.listUserCaseProjectFavorites(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listUserCaseProjectFavorites(
            responseContext,
          );
        });
    });
  }

  /**
   * Update the project associated with a case
   * @param param The request object
   */
  public moveCaseToProject(
    param: CaseManagementApiMoveCaseToProjectRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.moveCaseToProject(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.moveCaseToProject(responseContext);
        });
    });
  }

  /**
   * Removes one or more previously added insights from a case by specifying their type and resource identifier in the request body.
   * @param param The request object
   */
  public removeCaseInsights(
    param: CaseManagementApiRemoveCaseInsightsRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.removeCaseInsights(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.removeCaseInsights(responseContext);
        });
    });
  }

  /**
   * Search cases.
   * @param param The request object
   */
  public searchCases(
    param: CaseManagementApiSearchCasesRequest = {},
    options?: Configuration,
  ): Promise<CasesResponse> {
    const requestContextPromise = this.requestFactory.searchCases(
      param.pageSize,
      param.pageNumber,
      param.sortField,
      param.filter,
      param.sortAsc,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchCases(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of searchCases returning a generator with all the items.
   */
  public async *searchCasesWithPagination(
    param: CaseManagementApiSearchCasesRequest = {},
    options?: Configuration,
  ): AsyncGenerator<Case> {
    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    param.pageNumber = 1;
    while (true) {
      const requestContext = await this.requestFactory.searchCases(
        param.pageSize,
        param.pageNumber,
        param.sortField,
        param.filter,
        param.sortAsc,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.searchCases(responseContext);
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
   * Unarchive case
   * @param param The request object
   */
  public unarchiveCase(
    param: CaseManagementApiUnarchiveCaseRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.unarchiveCase(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unarchiveCase(responseContext);
        });
    });
  }

  /**
   * Unassign case
   * @param param The request object
   */
  public unassignCase(
    param: CaseManagementApiUnassignCaseRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.unassignCase(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unassignCase(responseContext);
        });
    });
  }

  /**
   * Removes a case project from the current user's favorites list.
   * @param param The request object
   */
  public unfavoriteCaseProject(
    param: CaseManagementApiUnfavoriteCaseProjectRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.unfavoriteCaseProject(
      param.projectId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unfavoriteCaseProject(responseContext);
        });
    });
  }

  /**
   * Remove the link between a Jira issue and a case
   * @param param The request object
   */
  public unlinkJiraIssue(
    param: CaseManagementApiUnlinkJiraIssueRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.unlinkJiraIssue(
      param.caseId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unlinkJiraIssue(responseContext);
        });
    });
  }

  /**
   * Removes a user from the watchers list of a case. The user no longer receives notifications about updates to the case.
   * @param param The request object
   */
  public unwatchCase(
    param: CaseManagementApiUnwatchCaseRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.unwatchCase(
      param.caseId,
      param.userUuid,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unwatchCase(responseContext);
        });
    });
  }

  /**
   * Update case attributes
   * @param param The request object
   */
  public updateAttributes(
    param: CaseManagementApiUpdateAttributesRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.updateAttributes(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAttributes(responseContext);
        });
    });
  }

  /**
   * Updates the trigger, action, name, or state of an existing automation rule.
   * @param param The request object
   */
  public updateCaseAutomationRule(
    param: CaseManagementApiUpdateCaseAutomationRuleRequest,
    options?: Configuration,
  ): Promise<AutomationRuleResponse> {
    const requestContextPromise = this.requestFactory.updateCaseAutomationRule(
      param.projectId,
      param.ruleId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCaseAutomationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Updates the text content of an existing comment on a case timeline. The comment is identified by its cell ID.
   * @param param The request object
   */
  public updateCaseComment(
    param: CaseManagementApiUpdateCaseCommentRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.updateCaseComment(
      param.caseId,
      param.cellId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCaseComment(responseContext);
        });
    });
  }

  /**
   * Update case custom attribute
   * @param param The request object
   */
  public updateCaseCustomAttribute(
    param: CaseManagementApiUpdateCaseCustomAttributeRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.updateCaseCustomAttribute(
      param.caseId,
      param.customAttributeKey,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCaseCustomAttribute(
            responseContext,
          );
        });
    });
  }

  /**
   * Update case description
   * @param param The request object
   */
  public updateCaseDescription(
    param: CaseManagementApiUpdateCaseDescriptionRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.updateCaseDescription(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCaseDescription(responseContext);
        });
    });
  }

  /**
   * Sets or updates the due date for a case. The due date is a calendar date (without a time component) indicating when the case should be resolved.
   * @param param The request object
   */
  public updateCaseDueDate(
    param: CaseManagementApiUpdateCaseDueDateRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.updateCaseDueDate(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCaseDueDate(responseContext);
        });
    });
  }

  /**
   * Sets the resolved reason for a security case (for example, FALSE_POSITIVE, TRUE_POSITIVE). Applicable to security-type cases.
   * @param param The request object
   */
  public updateCaseResolvedReason(
    param: CaseManagementApiUpdateCaseResolvedReasonRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.updateCaseResolvedReason(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCaseResolvedReason(
            responseContext,
          );
        });
    });
  }

  /**
   * Update case title
   * @param param The request object
   */
  public updateCaseTitle(
    param: CaseManagementApiUpdateCaseTitleRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.updateCaseTitle(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCaseTitle(responseContext);
        });
    });
  }

  /**
   * Updates the name, query, or notification rule of an existing case view.
   * @param param The request object
   */
  public updateCaseView(
    param: CaseManagementApiUpdateCaseViewRequest,
    options?: Configuration,
  ): Promise<CaseViewResponse> {
    const requestContextPromise = this.requestFactory.updateCaseView(
      param.viewId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCaseView(responseContext);
        });
    });
  }

  /**
   * Updates the name, query, start time, or end time of an existing maintenance window.
   * @param param The request object
   */
  public updateMaintenanceWindow(
    param: CaseManagementApiUpdateMaintenanceWindowRequest,
    options?: Configuration,
  ): Promise<MaintenanceWindowResponse> {
    const requestContextPromise = this.requestFactory.updateMaintenanceWindow(
      param.maintenanceWindowId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateMaintenanceWindow(
            responseContext,
          );
        });
    });
  }

  /**
   * Update case priority
   * @param param The request object
   */
  public updatePriority(
    param: CaseManagementApiUpdatePriorityRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.updatePriority(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updatePriority(responseContext);
        });
    });
  }

  /**
   * Update a project.
   * @param param The request object
   */
  public updateProject(
    param: CaseManagementApiUpdateProjectRequest,
    options?: Configuration,
  ): Promise<ProjectResponse> {
    const requestContextPromise = this.requestFactory.updateProject(
      param.projectId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateProject(responseContext);
        });
    });
  }

  /**
   * Update a notification rule.
   * @param param The request object
   */
  public updateProjectNotificationRule(
    param: CaseManagementApiUpdateProjectNotificationRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.updateProjectNotificationRule(
        param.projectId,
        param.notificationRuleId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateProjectNotificationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Update case status
   * @param param The request object
   */
  public updateStatus(
    param: CaseManagementApiUpdateStatusRequest,
    options?: Configuration,
  ): Promise<CaseResponse> {
    const requestContextPromise = this.requestFactory.updateStatus(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateStatus(responseContext);
        });
    });
  }

  /**
   * Adds a user (identified by their UUID) as a watcher of a case. The user receives notifications about subsequent updates to the case.
   * @param param The request object
   */
  public watchCase(
    param: CaseManagementApiWatchCaseRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.watchCase(
      param.caseId,
      param.userUuid,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.watchCase(responseContext);
        });
    });
  }
}
