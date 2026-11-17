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
} from "@datadog/datadog-api-client-core";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { AssigneeRequest } from "./models/AssigneeRequest";
import { AssigneeResponse } from "./models/AssigneeResponse";
import { AttachCaseRequest } from "./models/AttachCaseRequest";
import { AttachJiraIssueRequest } from "./models/AttachJiraIssueRequest";
import { AttachLinearIssueRequest } from "./models/AttachLinearIssueRequest";
import { AttachServiceNowTicketRequest } from "./models/AttachServiceNowTicketRequest";
import { CreateCaseRequestArray } from "./models/CreateCaseRequestArray";
import { CreateJiraIssueRequestArray } from "./models/CreateJiraIssueRequestArray";
import { CreateLinearIssueRequestArray } from "./models/CreateLinearIssueRequestArray";
import { CreateServiceNowTicketRequestArray } from "./models/CreateServiceNowTicketRequestArray";
import { DefaultInboxRuleResponse } from "./models/DefaultInboxRuleResponse";
import { DefaultInboxRulesResponse } from "./models/DefaultInboxRulesResponse";
import { DetachCaseRequest } from "./models/DetachCaseRequest";
import { DueDateRuleCreateRequest } from "./models/DueDateRuleCreateRequest";
import { DueDateRuleReorderRequest } from "./models/DueDateRuleReorderRequest";
import { DueDateRuleReorderResponse } from "./models/DueDateRuleReorderResponse";
import { DueDateRuleResponse } from "./models/DueDateRuleResponse";
import { DueDateRulesResponse } from "./models/DueDateRulesResponse";
import { DueDateRuleUpdateRequest } from "./models/DueDateRuleUpdateRequest";
import { Finding } from "./models/Finding";
import { FindingCaseResponse } from "./models/FindingCaseResponse";
import { FindingCaseResponseArray } from "./models/FindingCaseResponseArray";
import { FindingEvaluation } from "./models/FindingEvaluation";
import { FindingStatus } from "./models/FindingStatus";
import { FindingVulnerabilityType } from "./models/FindingVulnerabilityType";
import { GetFindingResponse } from "./models/GetFindingResponse";
import { InboxRuleCreateRequest } from "./models/InboxRuleCreateRequest";
import { InboxRuleReorderRequest } from "./models/InboxRuleReorderRequest";
import { InboxRuleReorderResponse } from "./models/InboxRuleReorderResponse";
import { InboxRuleResponse } from "./models/InboxRuleResponse";
import { InboxRulesResponse } from "./models/InboxRulesResponse";
import { InboxRuleUpdateRequest } from "./models/InboxRuleUpdateRequest";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { ListFindingsResponse } from "./models/ListFindingsResponse";
import { ListSecurityFindingsResponse } from "./models/ListSecurityFindingsResponse";
import { MuteFindingsRequest } from "./models/MuteFindingsRequest";
import { MuteFindingsResponse } from "./models/MuteFindingsResponse";
import { MuteRuleCreateRequest } from "./models/MuteRuleCreateRequest";
import { MuteRuleReorderRequest } from "./models/MuteRuleReorderRequest";
import { MuteRuleReorderResponse } from "./models/MuteRuleReorderResponse";
import { MuteRuleResponse } from "./models/MuteRuleResponse";
import { MuteRulesResponse } from "./models/MuteRulesResponse";
import { MuteRuleUpdateRequest } from "./models/MuteRuleUpdateRequest";
import { SecurityFindingsData } from "./models/SecurityFindingsData";
import { SecurityFindingsSearchRequest } from "./models/SecurityFindingsSearchRequest";
import { SecurityFindingsSearchRequestData } from "./models/SecurityFindingsSearchRequestData";
import { SecurityFindingsSearchRequestDataAttributes } from "./models/SecurityFindingsSearchRequestDataAttributes";
import { SecurityFindingsSearchRequestPage } from "./models/SecurityFindingsSearchRequestPage";
import { SecurityFindingsSort } from "./models/SecurityFindingsSort";
import { SeverityModifierRuleCreateRequest } from "./models/SeverityModifierRuleCreateRequest";
import { SeverityModifierRuleReorderRequest } from "./models/SeverityModifierRuleReorderRequest";
import { SeverityModifierRuleReorderResponse } from "./models/SeverityModifierRuleReorderResponse";
import { SeverityModifierRuleResponse } from "./models/SeverityModifierRuleResponse";
import { SeverityModifierRulesResponse } from "./models/SeverityModifierRulesResponse";
import { SeverityModifierRuleUpdateRequest } from "./models/SeverityModifierRuleUpdateRequest";
import { SeverityOverrideRequest } from "./models/SeverityOverrideRequest";
import { SeverityOverrideResponse } from "./models/SeverityOverrideResponse";
import { TicketCreationRuleCreateRequest } from "./models/TicketCreationRuleCreateRequest";
import { TicketCreationRuleReorderRequest } from "./models/TicketCreationRuleReorderRequest";
import { TicketCreationRuleReorderResponse } from "./models/TicketCreationRuleReorderResponse";
import { TicketCreationRuleResponse } from "./models/TicketCreationRuleResponse";
import { TicketCreationRulesResponse } from "./models/TicketCreationRulesResponse";
import { TicketCreationRuleUpdateRequest } from "./models/TicketCreationRuleUpdateRequest";
import { version } from "../version";

export class SecurityFindingsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("security-findings", version);
    }
  }
  public async attachCase(
    caseId: string,
    body: AttachCaseRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseId' is not null or undefined
    if (caseId === null || caseId === undefined) {
      throw new RequiredError("caseId", "attachCase");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "attachCase");
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/cases/{case_id}".replace(
      "{case_id}",
      encodeURIComponent(String(caseId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.attachCase",
      SecurityFindingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "AttachCaseRequest", ""),
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

  public async attachJiraIssue(
    body: AttachJiraIssueRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "attachJiraIssue");
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/jira_issues";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.attachJiraIssue",
      SecurityFindingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "AttachJiraIssueRequest", ""),
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

  public async attachLinearIssue(
    body: AttachLinearIssueRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "attachLinearIssue");
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/linear_issues";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.attachLinearIssue",
      SecurityFindingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "AttachLinearIssueRequest", ""),
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

  public async attachServiceNowTicket(
    body: AttachServiceNowTicketRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "attachServiceNowTicket");
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/servicenow_tickets";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.attachServiceNowTicket",
      SecurityFindingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "AttachServiceNowTicketRequest", ""),
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

  public async createCases(
    body: CreateCaseRequestArray,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCases");
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/cases";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.createCases",
      SecurityFindingsApi.operationServers,
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
      serialize(body, TypingInfo, "CreateCaseRequestArray", ""),
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

  public async createJiraIssues(
    body: CreateJiraIssueRequestArray,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createJiraIssues");
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/jira_issues";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.createJiraIssues",
      SecurityFindingsApi.operationServers,
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
      serialize(body, TypingInfo, "CreateJiraIssueRequestArray", ""),
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

  public async createLinearIssues(
    body: CreateLinearIssueRequestArray,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createLinearIssues");
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/linear_issues";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.createLinearIssues",
      SecurityFindingsApi.operationServers,
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
      serialize(body, TypingInfo, "CreateLinearIssueRequestArray", ""),
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

  public async createSecurityFindingsAutomationDueDateRule(
    body: DueDateRuleCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createSecurityFindingsAutomationDueDateRule'",
    );
    if (
      !_config.unstableOperations[
        "v2.createSecurityFindingsAutomationDueDateRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createSecurityFindingsAutomationDueDateRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.createSecurityFindingsAutomationDueDateRule'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createSecurityFindingsAutomationDueDateRule",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/automation/due_date_rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.createSecurityFindingsAutomationDueDateRule",
      SecurityFindingsApi.operationServers,
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
      serialize(body, TypingInfo, "DueDateRuleCreateRequest", ""),
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

  public async createSecurityFindingsAutomationInboxRule(
    body: InboxRuleCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createSecurityFindingsAutomationInboxRule'",
    );
    if (
      !_config.unstableOperations[
        "v2.createSecurityFindingsAutomationInboxRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createSecurityFindingsAutomationInboxRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.createSecurityFindingsAutomationInboxRule'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createSecurityFindingsAutomationInboxRule",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/automation/inbox_rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.createSecurityFindingsAutomationInboxRule",
      SecurityFindingsApi.operationServers,
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
      serialize(body, TypingInfo, "InboxRuleCreateRequest", ""),
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

  public async createSecurityFindingsAutomationMuteRule(
    body: MuteRuleCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createSecurityFindingsAutomationMuteRule'",
    );
    if (
      !_config.unstableOperations["v2.createSecurityFindingsAutomationMuteRule"]
    ) {
      throw new Error(
        "Unstable operation 'createSecurityFindingsAutomationMuteRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.createSecurityFindingsAutomationMuteRule'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createSecurityFindingsAutomationMuteRule",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/automation/mute_rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.createSecurityFindingsAutomationMuteRule",
      SecurityFindingsApi.operationServers,
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
      serialize(body, TypingInfo, "MuteRuleCreateRequest", ""),
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

  public async createSecurityFindingsAutomationSeverityModifierRule(
    body: SeverityModifierRuleCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createSecurityFindingsAutomationSeverityModifierRule'",
    );
    if (
      !_config.unstableOperations[
        "v2.createSecurityFindingsAutomationSeverityModifierRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createSecurityFindingsAutomationSeverityModifierRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.createSecurityFindingsAutomationSeverityModifierRule'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createSecurityFindingsAutomationSeverityModifierRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/severity_modifier_rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.createSecurityFindingsAutomationSeverityModifierRule",
      SecurityFindingsApi.operationServers,
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
      serialize(body, TypingInfo, "SeverityModifierRuleCreateRequest", ""),
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

  public async createSecurityFindingsAutomationTicketCreationRule(
    body: TicketCreationRuleCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createSecurityFindingsAutomationTicketCreationRule'",
    );
    if (
      !_config.unstableOperations[
        "v2.createSecurityFindingsAutomationTicketCreationRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createSecurityFindingsAutomationTicketCreationRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.createSecurityFindingsAutomationTicketCreationRule'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createSecurityFindingsAutomationTicketCreationRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/ticket_creation_rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.createSecurityFindingsAutomationTicketCreationRule",
      SecurityFindingsApi.operationServers,
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
      serialize(body, TypingInfo, "TicketCreationRuleCreateRequest", ""),
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

  public async createServiceNowTickets(
    body: CreateServiceNowTicketRequestArray,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createServiceNowTickets");
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/servicenow_tickets";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.createServiceNowTickets",
      SecurityFindingsApi.operationServers,
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
      serialize(body, TypingInfo, "CreateServiceNowTicketRequestArray", ""),
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

  public async deleteSecurityFindingsAutomationDueDateRule(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteSecurityFindingsAutomationDueDateRule'",
    );
    if (
      !_config.unstableOperations[
        "v2.deleteSecurityFindingsAutomationDueDateRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteSecurityFindingsAutomationDueDateRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.deleteSecurityFindingsAutomationDueDateRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "deleteSecurityFindingsAutomationDueDateRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/due_date_rules/{rule_id}".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.deleteSecurityFindingsAutomationDueDateRule",
      SecurityFindingsApi.operationServers,
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

  public async deleteSecurityFindingsAutomationInboxRule(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteSecurityFindingsAutomationInboxRule'",
    );
    if (
      !_config.unstableOperations[
        "v2.deleteSecurityFindingsAutomationInboxRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteSecurityFindingsAutomationInboxRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.deleteSecurityFindingsAutomationInboxRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "deleteSecurityFindingsAutomationInboxRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/inbox_rules/{rule_id}".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.deleteSecurityFindingsAutomationInboxRule",
      SecurityFindingsApi.operationServers,
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

  public async deleteSecurityFindingsAutomationMuteRule(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteSecurityFindingsAutomationMuteRule'",
    );
    if (
      !_config.unstableOperations["v2.deleteSecurityFindingsAutomationMuteRule"]
    ) {
      throw new Error(
        "Unstable operation 'deleteSecurityFindingsAutomationMuteRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.deleteSecurityFindingsAutomationMuteRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "deleteSecurityFindingsAutomationMuteRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/mute_rules/{rule_id}".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.deleteSecurityFindingsAutomationMuteRule",
      SecurityFindingsApi.operationServers,
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

  public async deleteSecurityFindingsAutomationSeverityModifierRule(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteSecurityFindingsAutomationSeverityModifierRule'",
    );
    if (
      !_config.unstableOperations[
        "v2.deleteSecurityFindingsAutomationSeverityModifierRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteSecurityFindingsAutomationSeverityModifierRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.deleteSecurityFindingsAutomationSeverityModifierRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "deleteSecurityFindingsAutomationSeverityModifierRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/severity_modifier_rules/{rule_id}".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.deleteSecurityFindingsAutomationSeverityModifierRule",
      SecurityFindingsApi.operationServers,
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

  public async deleteSecurityFindingsAutomationTicketCreationRule(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteSecurityFindingsAutomationTicketCreationRule'",
    );
    if (
      !_config.unstableOperations[
        "v2.deleteSecurityFindingsAutomationTicketCreationRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteSecurityFindingsAutomationTicketCreationRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.deleteSecurityFindingsAutomationTicketCreationRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "deleteSecurityFindingsAutomationTicketCreationRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/ticket_creation_rules/{rule_id}".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.deleteSecurityFindingsAutomationTicketCreationRule",
      SecurityFindingsApi.operationServers,
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

  public async detachCase(
    body: DetachCaseRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "detachCase");
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/cases";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.detachCase",
      SecurityFindingsApi.operationServers,
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

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "DetachCaseRequest", ""),
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

  public async disableSecurityFindingsAutomationDefaultInboxRule(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'disableSecurityFindingsAutomationDefaultInboxRule'",
    );
    if (
      !_config.unstableOperations[
        "v2.disableSecurityFindingsAutomationDefaultInboxRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'disableSecurityFindingsAutomationDefaultInboxRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.disableSecurityFindingsAutomationDefaultInboxRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "disableSecurityFindingsAutomationDefaultInboxRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/default_inbox_rules/{rule_id}/disable".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.disableSecurityFindingsAutomationDefaultInboxRule",
      SecurityFindingsApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async enableSecurityFindingsAutomationDefaultInboxRule(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'enableSecurityFindingsAutomationDefaultInboxRule'",
    );
    if (
      !_config.unstableOperations[
        "v2.enableSecurityFindingsAutomationDefaultInboxRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'enableSecurityFindingsAutomationDefaultInboxRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.enableSecurityFindingsAutomationDefaultInboxRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "enableSecurityFindingsAutomationDefaultInboxRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/default_inbox_rules/{rule_id}/enable".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.enableSecurityFindingsAutomationDefaultInboxRule",
      SecurityFindingsApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getFinding(
    findingId: string,
    snapshotTimestamp?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getFinding'");
    if (!_config.unstableOperations["v2.getFinding"]) {
      throw new Error(
        "Unstable operation 'getFinding' is disabled. Enable it by setting `configuration.unstableOperations['v2.getFinding'] = true`",
      );
    }

    // verify required parameter 'findingId' is not null or undefined
    if (findingId === null || findingId === undefined) {
      throw new RequiredError("findingId", "getFinding");
    }

    // Path Params
    const localVarPath =
      "/api/v2/posture_management/findings/{finding_id}".replace(
        "{finding_id}",
        encodeURIComponent(String(findingId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getFinding",
      SecurityFindingsApi.operationServers,
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
    if (snapshotTimestamp !== undefined) {
      requestContext.setQueryParam(
        "snapshot_timestamp",
        serialize(snapshotTimestamp, TypingInfo, "number", "int64"),
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

  public async getSecurityFindingsAutomationDefaultInboxRule(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getSecurityFindingsAutomationDefaultInboxRule'",
    );
    if (
      !_config.unstableOperations[
        "v2.getSecurityFindingsAutomationDefaultInboxRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getSecurityFindingsAutomationDefaultInboxRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.getSecurityFindingsAutomationDefaultInboxRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "getSecurityFindingsAutomationDefaultInboxRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/default_inbox_rules/{rule_id}".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSecurityFindingsAutomationDefaultInboxRule",
      SecurityFindingsApi.operationServers,
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

  public async getSecurityFindingsAutomationDueDateRule(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getSecurityFindingsAutomationDueDateRule'",
    );
    if (
      !_config.unstableOperations["v2.getSecurityFindingsAutomationDueDateRule"]
    ) {
      throw new Error(
        "Unstable operation 'getSecurityFindingsAutomationDueDateRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.getSecurityFindingsAutomationDueDateRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "getSecurityFindingsAutomationDueDateRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/due_date_rules/{rule_id}".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSecurityFindingsAutomationDueDateRule",
      SecurityFindingsApi.operationServers,
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

  public async getSecurityFindingsAutomationInboxRule(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getSecurityFindingsAutomationInboxRule'",
    );
    if (
      !_config.unstableOperations["v2.getSecurityFindingsAutomationInboxRule"]
    ) {
      throw new Error(
        "Unstable operation 'getSecurityFindingsAutomationInboxRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.getSecurityFindingsAutomationInboxRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "getSecurityFindingsAutomationInboxRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/inbox_rules/{rule_id}".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSecurityFindingsAutomationInboxRule",
      SecurityFindingsApi.operationServers,
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

  public async getSecurityFindingsAutomationMuteRule(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getSecurityFindingsAutomationMuteRule'",
    );
    if (
      !_config.unstableOperations["v2.getSecurityFindingsAutomationMuteRule"]
    ) {
      throw new Error(
        "Unstable operation 'getSecurityFindingsAutomationMuteRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.getSecurityFindingsAutomationMuteRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "getSecurityFindingsAutomationMuteRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/mute_rules/{rule_id}".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSecurityFindingsAutomationMuteRule",
      SecurityFindingsApi.operationServers,
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

  public async getSecurityFindingsAutomationSeverityModifierRule(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getSecurityFindingsAutomationSeverityModifierRule'",
    );
    if (
      !_config.unstableOperations[
        "v2.getSecurityFindingsAutomationSeverityModifierRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getSecurityFindingsAutomationSeverityModifierRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.getSecurityFindingsAutomationSeverityModifierRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "getSecurityFindingsAutomationSeverityModifierRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/severity_modifier_rules/{rule_id}".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSecurityFindingsAutomationSeverityModifierRule",
      SecurityFindingsApi.operationServers,
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

  public async getSecurityFindingsAutomationTicketCreationRule(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getSecurityFindingsAutomationTicketCreationRule'",
    );
    if (
      !_config.unstableOperations[
        "v2.getSecurityFindingsAutomationTicketCreationRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getSecurityFindingsAutomationTicketCreationRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.getSecurityFindingsAutomationTicketCreationRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "getSecurityFindingsAutomationTicketCreationRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/ticket_creation_rules/{rule_id}".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSecurityFindingsAutomationTicketCreationRule",
      SecurityFindingsApi.operationServers,
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

  public async listFindings(
    pageLimit?: number,
    snapshotTimestamp?: number,
    pageCursor?: string,
    filterTags?: string,
    filterEvaluationChangedAt?: string,
    filterMuted?: boolean,
    filterRuleId?: string,
    filterRuleName?: string,
    filterResourceType?: string,
    filterResourceId?: string,
    filterDiscoveryTimestamp?: string,
    filterEvaluation?: FindingEvaluation,
    filterStatus?: FindingStatus,
    filterVulnerabilityType?: Array<FindingVulnerabilityType>,
    detailedFindings?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listFindings'");
    if (!_config.unstableOperations["v2.listFindings"]) {
      throw new Error(
        "Unstable operation 'listFindings' is disabled. Enable it by setting `configuration.unstableOperations['v2.listFindings'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/posture_management/findings";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listFindings",
      SecurityFindingsApi.operationServers,
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
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (snapshotTimestamp !== undefined) {
      requestContext.setQueryParam(
        "snapshot_timestamp",
        serialize(snapshotTimestamp, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        serialize(pageCursor, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        serialize(filterTags, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterEvaluationChangedAt !== undefined) {
      requestContext.setQueryParam(
        "filter[evaluation_changed_at]",
        serialize(filterEvaluationChangedAt, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterMuted !== undefined) {
      requestContext.setQueryParam(
        "filter[muted]",
        serialize(filterMuted, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterRuleId !== undefined) {
      requestContext.setQueryParam(
        "filter[rule_id]",
        serialize(filterRuleId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRuleName !== undefined) {
      requestContext.setQueryParam(
        "filter[rule_name]",
        serialize(filterRuleName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterResourceType !== undefined) {
      requestContext.setQueryParam(
        "filter[resource_type]",
        serialize(filterResourceType, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterResourceId !== undefined) {
      requestContext.setQueryParam(
        "filter[@resource_id]",
        serialize(filterResourceId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterDiscoveryTimestamp !== undefined) {
      requestContext.setQueryParam(
        "filter[discovery_timestamp]",
        serialize(filterDiscoveryTimestamp, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterEvaluation !== undefined) {
      requestContext.setQueryParam(
        "filter[evaluation]",
        serialize(filterEvaluation, TypingInfo, "FindingEvaluation", ""),
        "",
      );
    }
    if (filterStatus !== undefined) {
      requestContext.setQueryParam(
        "filter[status]",
        serialize(filterStatus, TypingInfo, "FindingStatus", ""),
        "",
      );
    }
    if (filterVulnerabilityType !== undefined) {
      requestContext.setQueryParam(
        "filter[vulnerability_type]",
        serialize(
          filterVulnerabilityType,
          TypingInfo,
          "Array<FindingVulnerabilityType>",
          "",
        ),
        "multi",
      );
    }
    if (detailedFindings !== undefined) {
      requestContext.setQueryParam(
        "detailed_findings",
        serialize(detailedFindings, TypingInfo, "boolean", ""),
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

  public async listSecurityFindings(
    filterQuery?: string,
    pageCursor?: string,
    pageLimit?: number,
    sort?: SecurityFindingsSort,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security/findings";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listSecurityFindings",
      SecurityFindingsApi.operationServers,
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
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        serialize(filterQuery, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        serialize(pageCursor, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "SecurityFindingsSort", ""),
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

  public async listSecurityFindingsAutomationDefaultInboxRules(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listSecurityFindingsAutomationDefaultInboxRules'",
    );
    if (
      !_config.unstableOperations[
        "v2.listSecurityFindingsAutomationDefaultInboxRules"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listSecurityFindingsAutomationDefaultInboxRules' is disabled. Enable it by setting `configuration.unstableOperations['v2.listSecurityFindingsAutomationDefaultInboxRules'] = true`",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/default_inbox_rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listSecurityFindingsAutomationDefaultInboxRules",
      SecurityFindingsApi.operationServers,
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

  public async listSecurityFindingsAutomationDueDateRules(
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listSecurityFindingsAutomationDueDateRules'",
    );
    if (
      !_config.unstableOperations[
        "v2.listSecurityFindingsAutomationDueDateRules"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listSecurityFindingsAutomationDueDateRules' is disabled. Enable it by setting `configuration.unstableOperations['v2.listSecurityFindingsAutomationDueDateRules'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/automation/due_date_rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listSecurityFindingsAutomationDueDateRules",
      SecurityFindingsApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listSecurityFindingsAutomationInboxRules(
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listSecurityFindingsAutomationInboxRules'",
    );
    if (
      !_config.unstableOperations["v2.listSecurityFindingsAutomationInboxRules"]
    ) {
      throw new Error(
        "Unstable operation 'listSecurityFindingsAutomationInboxRules' is disabled. Enable it by setting `configuration.unstableOperations['v2.listSecurityFindingsAutomationInboxRules'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/automation/inbox_rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listSecurityFindingsAutomationInboxRules",
      SecurityFindingsApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listSecurityFindingsAutomationMuteRules(
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listSecurityFindingsAutomationMuteRules'",
    );
    if (
      !_config.unstableOperations["v2.listSecurityFindingsAutomationMuteRules"]
    ) {
      throw new Error(
        "Unstable operation 'listSecurityFindingsAutomationMuteRules' is disabled. Enable it by setting `configuration.unstableOperations['v2.listSecurityFindingsAutomationMuteRules'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/automation/mute_rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listSecurityFindingsAutomationMuteRules",
      SecurityFindingsApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listSecurityFindingsAutomationSeverityModifierRules(
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listSecurityFindingsAutomationSeverityModifierRules'",
    );
    if (
      !_config.unstableOperations[
        "v2.listSecurityFindingsAutomationSeverityModifierRules"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listSecurityFindingsAutomationSeverityModifierRules' is disabled. Enable it by setting `configuration.unstableOperations['v2.listSecurityFindingsAutomationSeverityModifierRules'] = true`",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/severity_modifier_rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listSecurityFindingsAutomationSeverityModifierRules",
      SecurityFindingsApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listSecurityFindingsAutomationTicketCreationRules(
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listSecurityFindingsAutomationTicketCreationRules'",
    );
    if (
      !_config.unstableOperations[
        "v2.listSecurityFindingsAutomationTicketCreationRules"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listSecurityFindingsAutomationTicketCreationRules' is disabled. Enable it by setting `configuration.unstableOperations['v2.listSecurityFindingsAutomationTicketCreationRules'] = true`",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/ticket_creation_rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listSecurityFindingsAutomationTicketCreationRules",
      SecurityFindingsApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async muteSecurityFindings(
    body: MuteFindingsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "muteSecurityFindings");
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/mute";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.muteSecurityFindings",
      SecurityFindingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "MuteFindingsRequest", ""),
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

  public async reorderSecurityFindingsAutomationDueDateRules(
    body: DueDateRuleReorderRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'reorderSecurityFindingsAutomationDueDateRules'",
    );
    if (
      !_config.unstableOperations[
        "v2.reorderSecurityFindingsAutomationDueDateRules"
      ]
    ) {
      throw new Error(
        "Unstable operation 'reorderSecurityFindingsAutomationDueDateRules' is disabled. Enable it by setting `configuration.unstableOperations['v2.reorderSecurityFindingsAutomationDueDateRules'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "reorderSecurityFindingsAutomationDueDateRules",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/due_date_rules/reorder";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.reorderSecurityFindingsAutomationDueDateRules",
      SecurityFindingsApi.operationServers,
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
      serialize(body, TypingInfo, "DueDateRuleReorderRequest", ""),
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

  public async reorderSecurityFindingsAutomationInboxRules(
    body: InboxRuleReorderRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'reorderSecurityFindingsAutomationInboxRules'",
    );
    if (
      !_config.unstableOperations[
        "v2.reorderSecurityFindingsAutomationInboxRules"
      ]
    ) {
      throw new Error(
        "Unstable operation 'reorderSecurityFindingsAutomationInboxRules' is disabled. Enable it by setting `configuration.unstableOperations['v2.reorderSecurityFindingsAutomationInboxRules'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "reorderSecurityFindingsAutomationInboxRules",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/inbox_rules/reorder";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.reorderSecurityFindingsAutomationInboxRules",
      SecurityFindingsApi.operationServers,
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
      serialize(body, TypingInfo, "InboxRuleReorderRequest", ""),
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

  public async reorderSecurityFindingsAutomationMuteRules(
    body: MuteRuleReorderRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'reorderSecurityFindingsAutomationMuteRules'",
    );
    if (
      !_config.unstableOperations[
        "v2.reorderSecurityFindingsAutomationMuteRules"
      ]
    ) {
      throw new Error(
        "Unstable operation 'reorderSecurityFindingsAutomationMuteRules' is disabled. Enable it by setting `configuration.unstableOperations['v2.reorderSecurityFindingsAutomationMuteRules'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "reorderSecurityFindingsAutomationMuteRules",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/mute_rules/reorder";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.reorderSecurityFindingsAutomationMuteRules",
      SecurityFindingsApi.operationServers,
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
      serialize(body, TypingInfo, "MuteRuleReorderRequest", ""),
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

  public async reorderSecurityFindingsAutomationSeverityModifierRules(
    body: SeverityModifierRuleReorderRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'reorderSecurityFindingsAutomationSeverityModifierRules'",
    );
    if (
      !_config.unstableOperations[
        "v2.reorderSecurityFindingsAutomationSeverityModifierRules"
      ]
    ) {
      throw new Error(
        "Unstable operation 'reorderSecurityFindingsAutomationSeverityModifierRules' is disabled. Enable it by setting `configuration.unstableOperations['v2.reorderSecurityFindingsAutomationSeverityModifierRules'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "reorderSecurityFindingsAutomationSeverityModifierRules",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/severity_modifier_rules/reorder";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.reorderSecurityFindingsAutomationSeverityModifierRules",
      SecurityFindingsApi.operationServers,
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
      serialize(body, TypingInfo, "SeverityModifierRuleReorderRequest", ""),
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

  public async reorderSecurityFindingsAutomationTicketCreationRules(
    body: TicketCreationRuleReorderRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'reorderSecurityFindingsAutomationTicketCreationRules'",
    );
    if (
      !_config.unstableOperations[
        "v2.reorderSecurityFindingsAutomationTicketCreationRules"
      ]
    ) {
      throw new Error(
        "Unstable operation 'reorderSecurityFindingsAutomationTicketCreationRules' is disabled. Enable it by setting `configuration.unstableOperations['v2.reorderSecurityFindingsAutomationTicketCreationRules'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "reorderSecurityFindingsAutomationTicketCreationRules",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/ticket_creation_rules/reorder";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.reorderSecurityFindingsAutomationTicketCreationRules",
      SecurityFindingsApi.operationServers,
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
      serialize(body, TypingInfo, "TicketCreationRuleReorderRequest", ""),
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

  public async searchSecurityFindings(
    body: SecurityFindingsSearchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "searchSecurityFindings");
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/search";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.searchSecurityFindings",
      SecurityFindingsApi.operationServers,
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
      serialize(body, TypingInfo, "SecurityFindingsSearchRequest", ""),
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

  public async updateFindingsAssignee(
    body: AssigneeRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateFindingsAssignee");
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/assignee";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.updateFindingsAssignee",
      SecurityFindingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "AssigneeRequest", ""),
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

  public async updateFindingsSeverity(
    body: SeverityOverrideRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateFindingsSeverity");
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/severity";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.updateFindingsSeverity",
      SecurityFindingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SeverityOverrideRequest", ""),
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

  public async updateSecurityFindingsAutomationDueDateRule(
    ruleId: string,
    body: DueDateRuleUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateSecurityFindingsAutomationDueDateRule'",
    );
    if (
      !_config.unstableOperations[
        "v2.updateSecurityFindingsAutomationDueDateRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateSecurityFindingsAutomationDueDateRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.updateSecurityFindingsAutomationDueDateRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "updateSecurityFindingsAutomationDueDateRule",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateSecurityFindingsAutomationDueDateRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/due_date_rules/{rule_id}".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.updateSecurityFindingsAutomationDueDateRule",
      SecurityFindingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "DueDateRuleUpdateRequest", ""),
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

  public async updateSecurityFindingsAutomationInboxRule(
    ruleId: string,
    body: InboxRuleUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateSecurityFindingsAutomationInboxRule'",
    );
    if (
      !_config.unstableOperations[
        "v2.updateSecurityFindingsAutomationInboxRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateSecurityFindingsAutomationInboxRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.updateSecurityFindingsAutomationInboxRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "updateSecurityFindingsAutomationInboxRule",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateSecurityFindingsAutomationInboxRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/inbox_rules/{rule_id}".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.updateSecurityFindingsAutomationInboxRule",
      SecurityFindingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "InboxRuleUpdateRequest", ""),
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

  public async updateSecurityFindingsAutomationMuteRule(
    ruleId: string,
    body: MuteRuleUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateSecurityFindingsAutomationMuteRule'",
    );
    if (
      !_config.unstableOperations["v2.updateSecurityFindingsAutomationMuteRule"]
    ) {
      throw new Error(
        "Unstable operation 'updateSecurityFindingsAutomationMuteRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.updateSecurityFindingsAutomationMuteRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "updateSecurityFindingsAutomationMuteRule",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateSecurityFindingsAutomationMuteRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/mute_rules/{rule_id}".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.updateSecurityFindingsAutomationMuteRule",
      SecurityFindingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "MuteRuleUpdateRequest", ""),
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

  public async updateSecurityFindingsAutomationSeverityModifierRule(
    ruleId: string,
    body: SeverityModifierRuleUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateSecurityFindingsAutomationSeverityModifierRule'",
    );
    if (
      !_config.unstableOperations[
        "v2.updateSecurityFindingsAutomationSeverityModifierRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateSecurityFindingsAutomationSeverityModifierRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.updateSecurityFindingsAutomationSeverityModifierRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "updateSecurityFindingsAutomationSeverityModifierRule",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateSecurityFindingsAutomationSeverityModifierRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/severity_modifier_rules/{rule_id}".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.updateSecurityFindingsAutomationSeverityModifierRule",
      SecurityFindingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SeverityModifierRuleUpdateRequest", ""),
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

  public async updateSecurityFindingsAutomationTicketCreationRule(
    ruleId: string,
    body: TicketCreationRuleUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateSecurityFindingsAutomationTicketCreationRule'",
    );
    if (
      !_config.unstableOperations[
        "v2.updateSecurityFindingsAutomationTicketCreationRule"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateSecurityFindingsAutomationTicketCreationRule' is disabled. Enable it by setting `configuration.unstableOperations['v2.updateSecurityFindingsAutomationTicketCreationRule'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "updateSecurityFindingsAutomationTicketCreationRule",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateSecurityFindingsAutomationTicketCreationRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/findings/automation/ticket_creation_rules/{rule_id}".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.updateSecurityFindingsAutomationTicketCreationRule",
      SecurityFindingsApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "TicketCreationRuleUpdateRequest", ""),
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

export class SecurityFindingsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to attachCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async attachCase(
    response: ResponseContext,
  ): Promise<FindingCaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FindingCaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FindingCaseResponse",
      ) as FindingCaseResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: FindingCaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FindingCaseResponse",
        "",
      ) as FindingCaseResponse;
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
   * @params response Response returned by the server for a request to attachJiraIssue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async attachJiraIssue(
    response: ResponseContext,
  ): Promise<FindingCaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FindingCaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FindingCaseResponse",
      ) as FindingCaseResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: FindingCaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FindingCaseResponse",
        "",
      ) as FindingCaseResponse;
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
   * @params response Response returned by the server for a request to attachLinearIssue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async attachLinearIssue(
    response: ResponseContext,
  ): Promise<FindingCaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FindingCaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FindingCaseResponse",
      ) as FindingCaseResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: FindingCaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FindingCaseResponse",
        "",
      ) as FindingCaseResponse;
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
   * @params response Response returned by the server for a request to attachServiceNowTicket
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async attachServiceNowTicket(
    response: ResponseContext,
  ): Promise<FindingCaseResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FindingCaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FindingCaseResponse",
      ) as FindingCaseResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: FindingCaseResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FindingCaseResponse",
        "",
      ) as FindingCaseResponse;
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
   * @params response Response returned by the server for a request to createCases
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCases(
    response: ResponseContext,
  ): Promise<FindingCaseResponseArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: FindingCaseResponseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FindingCaseResponseArray",
      ) as FindingCaseResponseArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: FindingCaseResponseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FindingCaseResponseArray",
        "",
      ) as FindingCaseResponseArray;
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
   * @params response Response returned by the server for a request to createJiraIssues
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createJiraIssues(
    response: ResponseContext,
  ): Promise<FindingCaseResponseArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: FindingCaseResponseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FindingCaseResponseArray",
      ) as FindingCaseResponseArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: FindingCaseResponseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FindingCaseResponseArray",
        "",
      ) as FindingCaseResponseArray;
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
   * @params response Response returned by the server for a request to createLinearIssues
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLinearIssues(
    response: ResponseContext,
  ): Promise<FindingCaseResponseArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: FindingCaseResponseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FindingCaseResponseArray",
      ) as FindingCaseResponseArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: FindingCaseResponseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FindingCaseResponseArray",
        "",
      ) as FindingCaseResponseArray;
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
   * @params response Response returned by the server for a request to createSecurityFindingsAutomationDueDateRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityFindingsAutomationDueDateRule(
    response: ResponseContext,
  ): Promise<DueDateRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: DueDateRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DueDateRuleResponse",
      ) as DueDateRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 422) {
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
      const body: DueDateRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DueDateRuleResponse",
        "",
      ) as DueDateRuleResponse;
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
   * @params response Response returned by the server for a request to createSecurityFindingsAutomationInboxRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityFindingsAutomationInboxRule(
    response: ResponseContext,
  ): Promise<InboxRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: InboxRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "InboxRuleResponse",
      ) as InboxRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 422) {
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
      const body: InboxRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "InboxRuleResponse",
        "",
      ) as InboxRuleResponse;
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
   * @params response Response returned by the server for a request to createSecurityFindingsAutomationMuteRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityFindingsAutomationMuteRule(
    response: ResponseContext,
  ): Promise<MuteRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: MuteRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MuteRuleResponse",
      ) as MuteRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 422) {
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
      const body: MuteRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MuteRuleResponse",
        "",
      ) as MuteRuleResponse;
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
   * @params response Response returned by the server for a request to createSecurityFindingsAutomationSeverityModifierRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityFindingsAutomationSeverityModifierRule(
    response: ResponseContext,
  ): Promise<SeverityModifierRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: SeverityModifierRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SeverityModifierRuleResponse",
      ) as SeverityModifierRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 422) {
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
      const body: SeverityModifierRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SeverityModifierRuleResponse",
        "",
      ) as SeverityModifierRuleResponse;
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
   * @params response Response returned by the server for a request to createSecurityFindingsAutomationTicketCreationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityFindingsAutomationTicketCreationRule(
    response: ResponseContext,
  ): Promise<TicketCreationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: TicketCreationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TicketCreationRuleResponse",
      ) as TicketCreationRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 422) {
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
      const body: TicketCreationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TicketCreationRuleResponse",
        "",
      ) as TicketCreationRuleResponse;
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
   * @params response Response returned by the server for a request to createServiceNowTickets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createServiceNowTickets(
    response: ResponseContext,
  ): Promise<FindingCaseResponseArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: FindingCaseResponseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FindingCaseResponseArray",
      ) as FindingCaseResponseArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: FindingCaseResponseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FindingCaseResponseArray",
        "",
      ) as FindingCaseResponseArray;
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
   * @params response Response returned by the server for a request to deleteSecurityFindingsAutomationDueDateRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityFindingsAutomationDueDateRule(
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
   * @params response Response returned by the server for a request to deleteSecurityFindingsAutomationInboxRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityFindingsAutomationInboxRule(
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
   * @params response Response returned by the server for a request to deleteSecurityFindingsAutomationMuteRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityFindingsAutomationMuteRule(
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
   * @params response Response returned by the server for a request to deleteSecurityFindingsAutomationSeverityModifierRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityFindingsAutomationSeverityModifierRule(
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
    if (response.httpStatusCode === 422) {
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
   * @params response Response returned by the server for a request to deleteSecurityFindingsAutomationTicketCreationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityFindingsAutomationTicketCreationRule(
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
   * @params response Response returned by the server for a request to detachCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async detachCase(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
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
   * @params response Response returned by the server for a request to disableSecurityFindingsAutomationDefaultInboxRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async disableSecurityFindingsAutomationDefaultInboxRule(
    response: ResponseContext,
  ): Promise<DefaultInboxRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DefaultInboxRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DefaultInboxRuleResponse",
      ) as DefaultInboxRuleResponse;
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
      const body: DefaultInboxRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DefaultInboxRuleResponse",
        "",
      ) as DefaultInboxRuleResponse;
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
   * @params response Response returned by the server for a request to enableSecurityFindingsAutomationDefaultInboxRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async enableSecurityFindingsAutomationDefaultInboxRule(
    response: ResponseContext,
  ): Promise<DefaultInboxRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DefaultInboxRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DefaultInboxRuleResponse",
      ) as DefaultInboxRuleResponse;
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
      const body: DefaultInboxRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DefaultInboxRuleResponse",
        "",
      ) as DefaultInboxRuleResponse;
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
   * @params response Response returned by the server for a request to getFinding
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getFinding(
    response: ResponseContext,
  ): Promise<GetFindingResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetFindingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetFindingResponse",
      ) as GetFindingResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GetFindingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetFindingResponse",
        "",
      ) as GetFindingResponse;
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
   * @params response Response returned by the server for a request to getSecurityFindingsAutomationDefaultInboxRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityFindingsAutomationDefaultInboxRule(
    response: ResponseContext,
  ): Promise<DefaultInboxRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DefaultInboxRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DefaultInboxRuleResponse",
      ) as DefaultInboxRuleResponse;
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
      const body: DefaultInboxRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DefaultInboxRuleResponse",
        "",
      ) as DefaultInboxRuleResponse;
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
   * @params response Response returned by the server for a request to getSecurityFindingsAutomationDueDateRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityFindingsAutomationDueDateRule(
    response: ResponseContext,
  ): Promise<DueDateRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DueDateRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DueDateRuleResponse",
      ) as DueDateRuleResponse;
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
      const body: DueDateRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DueDateRuleResponse",
        "",
      ) as DueDateRuleResponse;
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
   * @params response Response returned by the server for a request to getSecurityFindingsAutomationInboxRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityFindingsAutomationInboxRule(
    response: ResponseContext,
  ): Promise<InboxRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: InboxRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "InboxRuleResponse",
      ) as InboxRuleResponse;
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
      const body: InboxRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "InboxRuleResponse",
        "",
      ) as InboxRuleResponse;
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
   * @params response Response returned by the server for a request to getSecurityFindingsAutomationMuteRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityFindingsAutomationMuteRule(
    response: ResponseContext,
  ): Promise<MuteRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MuteRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MuteRuleResponse",
      ) as MuteRuleResponse;
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
      const body: MuteRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MuteRuleResponse",
        "",
      ) as MuteRuleResponse;
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
   * @params response Response returned by the server for a request to getSecurityFindingsAutomationSeverityModifierRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityFindingsAutomationSeverityModifierRule(
    response: ResponseContext,
  ): Promise<SeverityModifierRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SeverityModifierRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SeverityModifierRuleResponse",
      ) as SeverityModifierRuleResponse;
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
    if (response.httpStatusCode === 422) {
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SeverityModifierRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SeverityModifierRuleResponse",
        "",
      ) as SeverityModifierRuleResponse;
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
   * @params response Response returned by the server for a request to getSecurityFindingsAutomationTicketCreationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityFindingsAutomationTicketCreationRule(
    response: ResponseContext,
  ): Promise<TicketCreationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TicketCreationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TicketCreationRuleResponse",
      ) as TicketCreationRuleResponse;
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
      const body: TicketCreationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TicketCreationRuleResponse",
        "",
      ) as TicketCreationRuleResponse;
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
   * @params response Response returned by the server for a request to listFindings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listFindings(
    response: ResponseContext,
  ): Promise<ListFindingsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListFindingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListFindingsResponse",
      ) as ListFindingsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ListFindingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListFindingsResponse",
        "",
      ) as ListFindingsResponse;
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
   * @params response Response returned by the server for a request to listSecurityFindings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityFindings(
    response: ResponseContext,
  ): Promise<ListSecurityFindingsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListSecurityFindingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListSecurityFindingsResponse",
      ) as ListSecurityFindingsResponse;
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
      const body: ListSecurityFindingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListSecurityFindingsResponse",
        "",
      ) as ListSecurityFindingsResponse;
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
   * @params response Response returned by the server for a request to listSecurityFindingsAutomationDefaultInboxRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityFindingsAutomationDefaultInboxRules(
    response: ResponseContext,
  ): Promise<DefaultInboxRulesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DefaultInboxRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DefaultInboxRulesResponse",
      ) as DefaultInboxRulesResponse;
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
      const body: DefaultInboxRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DefaultInboxRulesResponse",
        "",
      ) as DefaultInboxRulesResponse;
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
   * @params response Response returned by the server for a request to listSecurityFindingsAutomationDueDateRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityFindingsAutomationDueDateRules(
    response: ResponseContext,
  ): Promise<DueDateRulesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DueDateRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DueDateRulesResponse",
      ) as DueDateRulesResponse;
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
      const body: DueDateRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DueDateRulesResponse",
        "",
      ) as DueDateRulesResponse;
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
   * @params response Response returned by the server for a request to listSecurityFindingsAutomationInboxRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityFindingsAutomationInboxRules(
    response: ResponseContext,
  ): Promise<InboxRulesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: InboxRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "InboxRulesResponse",
      ) as InboxRulesResponse;
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
      const body: InboxRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "InboxRulesResponse",
        "",
      ) as InboxRulesResponse;
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
   * @params response Response returned by the server for a request to listSecurityFindingsAutomationMuteRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityFindingsAutomationMuteRules(
    response: ResponseContext,
  ): Promise<MuteRulesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MuteRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MuteRulesResponse",
      ) as MuteRulesResponse;
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
      const body: MuteRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MuteRulesResponse",
        "",
      ) as MuteRulesResponse;
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
   * @params response Response returned by the server for a request to listSecurityFindingsAutomationSeverityModifierRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityFindingsAutomationSeverityModifierRules(
    response: ResponseContext,
  ): Promise<SeverityModifierRulesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SeverityModifierRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SeverityModifierRulesResponse",
      ) as SeverityModifierRulesResponse;
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
      const body: SeverityModifierRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SeverityModifierRulesResponse",
        "",
      ) as SeverityModifierRulesResponse;
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
   * @params response Response returned by the server for a request to listSecurityFindingsAutomationTicketCreationRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityFindingsAutomationTicketCreationRules(
    response: ResponseContext,
  ): Promise<TicketCreationRulesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TicketCreationRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TicketCreationRulesResponse",
      ) as TicketCreationRulesResponse;
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
      const body: TicketCreationRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TicketCreationRulesResponse",
        "",
      ) as TicketCreationRulesResponse;
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
   * @params response Response returned by the server for a request to muteSecurityFindings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async muteSecurityFindings(
    response: ResponseContext,
  ): Promise<MuteFindingsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      const body: MuteFindingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MuteFindingsResponse",
      ) as MuteFindingsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
    if (response.httpStatusCode === 422) {
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MuteFindingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MuteFindingsResponse",
        "",
      ) as MuteFindingsResponse;
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
   * @params response Response returned by the server for a request to reorderSecurityFindingsAutomationDueDateRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async reorderSecurityFindingsAutomationDueDateRules(
    response: ResponseContext,
  ): Promise<DueDateRuleReorderResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DueDateRuleReorderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DueDateRuleReorderResponse",
      ) as DueDateRuleReorderResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 422) {
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
      const body: DueDateRuleReorderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DueDateRuleReorderResponse",
        "",
      ) as DueDateRuleReorderResponse;
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
   * @params response Response returned by the server for a request to reorderSecurityFindingsAutomationInboxRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async reorderSecurityFindingsAutomationInboxRules(
    response: ResponseContext,
  ): Promise<InboxRuleReorderResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: InboxRuleReorderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "InboxRuleReorderResponse",
      ) as InboxRuleReorderResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 422) {
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
      const body: InboxRuleReorderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "InboxRuleReorderResponse",
        "",
      ) as InboxRuleReorderResponse;
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
   * @params response Response returned by the server for a request to reorderSecurityFindingsAutomationMuteRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async reorderSecurityFindingsAutomationMuteRules(
    response: ResponseContext,
  ): Promise<MuteRuleReorderResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MuteRuleReorderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MuteRuleReorderResponse",
      ) as MuteRuleReorderResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 422) {
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
      const body: MuteRuleReorderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MuteRuleReorderResponse",
        "",
      ) as MuteRuleReorderResponse;
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
   * @params response Response returned by the server for a request to reorderSecurityFindingsAutomationSeverityModifierRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async reorderSecurityFindingsAutomationSeverityModifierRules(
    response: ResponseContext,
  ): Promise<SeverityModifierRuleReorderResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SeverityModifierRuleReorderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SeverityModifierRuleReorderResponse",
      ) as SeverityModifierRuleReorderResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 422) {
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
      const body: SeverityModifierRuleReorderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SeverityModifierRuleReorderResponse",
        "",
      ) as SeverityModifierRuleReorderResponse;
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
   * @params response Response returned by the server for a request to reorderSecurityFindingsAutomationTicketCreationRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async reorderSecurityFindingsAutomationTicketCreationRules(
    response: ResponseContext,
  ): Promise<TicketCreationRuleReorderResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TicketCreationRuleReorderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TicketCreationRuleReorderResponse",
      ) as TicketCreationRuleReorderResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 422) {
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
      const body: TicketCreationRuleReorderResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TicketCreationRuleReorderResponse",
        "",
      ) as TicketCreationRuleReorderResponse;
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
   * @params response Response returned by the server for a request to searchSecurityFindings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchSecurityFindings(
    response: ResponseContext,
  ): Promise<ListSecurityFindingsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListSecurityFindingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListSecurityFindingsResponse",
      ) as ListSecurityFindingsResponse;
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
      const body: ListSecurityFindingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListSecurityFindingsResponse",
        "",
      ) as ListSecurityFindingsResponse;
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
   * @params response Response returned by the server for a request to updateFindingsAssignee
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateFindingsAssignee(
    response: ResponseContext,
  ): Promise<AssigneeResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      const body: AssigneeResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AssigneeResponse",
      ) as AssigneeResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: AssigneeResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AssigneeResponse",
        "",
      ) as AssigneeResponse;
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
   * @params response Response returned by the server for a request to updateFindingsSeverity
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateFindingsSeverity(
    response: ResponseContext,
  ): Promise<SeverityOverrideResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      const body: SeverityOverrideResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SeverityOverrideResponse",
      ) as SeverityOverrideResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422
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
    if (
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
      const body: SeverityOverrideResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SeverityOverrideResponse",
        "",
      ) as SeverityOverrideResponse;
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
   * @params response Response returned by the server for a request to updateSecurityFindingsAutomationDueDateRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityFindingsAutomationDueDateRule(
    response: ResponseContext,
  ): Promise<DueDateRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DueDateRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DueDateRuleResponse",
      ) as DueDateRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 422) {
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
      const body: DueDateRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DueDateRuleResponse",
        "",
      ) as DueDateRuleResponse;
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
   * @params response Response returned by the server for a request to updateSecurityFindingsAutomationInboxRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityFindingsAutomationInboxRule(
    response: ResponseContext,
  ): Promise<InboxRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: InboxRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "InboxRuleResponse",
      ) as InboxRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 422) {
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
      const body: InboxRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "InboxRuleResponse",
        "",
      ) as InboxRuleResponse;
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
   * @params response Response returned by the server for a request to updateSecurityFindingsAutomationMuteRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityFindingsAutomationMuteRule(
    response: ResponseContext,
  ): Promise<MuteRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MuteRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MuteRuleResponse",
      ) as MuteRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 422) {
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
      const body: MuteRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MuteRuleResponse",
        "",
      ) as MuteRuleResponse;
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
   * @params response Response returned by the server for a request to updateSecurityFindingsAutomationSeverityModifierRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityFindingsAutomationSeverityModifierRule(
    response: ResponseContext,
  ): Promise<SeverityModifierRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SeverityModifierRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SeverityModifierRuleResponse",
      ) as SeverityModifierRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 422) {
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
      const body: SeverityModifierRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SeverityModifierRuleResponse",
        "",
      ) as SeverityModifierRuleResponse;
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
   * @params response Response returned by the server for a request to updateSecurityFindingsAutomationTicketCreationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityFindingsAutomationTicketCreationRule(
    response: ResponseContext,
  ): Promise<TicketCreationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: TicketCreationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TicketCreationRuleResponse",
      ) as TicketCreationRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 422) {
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
      const body: TicketCreationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "TicketCreationRuleResponse",
        "",
      ) as TicketCreationRuleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface SecurityFindingsApiAttachCaseRequest {
  /**
   * Unique identifier of the case to attach security findings to
   * @type string
   */
  caseId: string;
  /**
   * @type AttachCaseRequest
   */
  body: AttachCaseRequest;
}

export interface SecurityFindingsApiAttachJiraIssueRequest {
  /**
   * @type AttachJiraIssueRequest
   */
  body: AttachJiraIssueRequest;
}

export interface SecurityFindingsApiAttachLinearIssueRequest {
  /**
   * @type AttachLinearIssueRequest
   */
  body: AttachLinearIssueRequest;
}

export interface SecurityFindingsApiAttachServiceNowTicketRequest {
  /**
   * @type AttachServiceNowTicketRequest
   */
  body: AttachServiceNowTicketRequest;
}

export interface SecurityFindingsApiCreateCasesRequest {
  /**
   * @type CreateCaseRequestArray
   */
  body: CreateCaseRequestArray;
}

export interface SecurityFindingsApiCreateJiraIssuesRequest {
  /**
   * @type CreateJiraIssueRequestArray
   */
  body: CreateJiraIssueRequestArray;
}

export interface SecurityFindingsApiCreateLinearIssuesRequest {
  /**
   * @type CreateLinearIssueRequestArray
   */
  body: CreateLinearIssueRequestArray;
}

export interface SecurityFindingsApiCreateSecurityFindingsAutomationDueDateRuleRequest {
  /**
   * @type DueDateRuleCreateRequest
   */
  body: DueDateRuleCreateRequest;
}

export interface SecurityFindingsApiCreateSecurityFindingsAutomationInboxRuleRequest {
  /**
   * @type InboxRuleCreateRequest
   */
  body: InboxRuleCreateRequest;
}

export interface SecurityFindingsApiCreateSecurityFindingsAutomationMuteRuleRequest {
  /**
   * @type MuteRuleCreateRequest
   */
  body: MuteRuleCreateRequest;
}

export interface SecurityFindingsApiCreateSecurityFindingsAutomationSeverityModifierRuleRequest {
  /**
   * @type SeverityModifierRuleCreateRequest
   */
  body: SeverityModifierRuleCreateRequest;
}

export interface SecurityFindingsApiCreateSecurityFindingsAutomationTicketCreationRuleRequest {
  /**
   * @type TicketCreationRuleCreateRequest
   */
  body: TicketCreationRuleCreateRequest;
}

export interface SecurityFindingsApiCreateServiceNowTicketsRequest {
  /**
   * @type CreateServiceNowTicketRequestArray
   */
  body: CreateServiceNowTicketRequestArray;
}

export interface SecurityFindingsApiDeleteSecurityFindingsAutomationDueDateRuleRequest {
  /**
   * The ID of the due date rule.
   * @type string
   */
  ruleId: string;
}

export interface SecurityFindingsApiDeleteSecurityFindingsAutomationInboxRuleRequest {
  /**
   * The ID of the inbox rule.
   * @type string
   */
  ruleId: string;
}

export interface SecurityFindingsApiDeleteSecurityFindingsAutomationMuteRuleRequest {
  /**
   * The ID of the mute rule.
   * @type string
   */
  ruleId: string;
}

export interface SecurityFindingsApiDeleteSecurityFindingsAutomationSeverityModifierRuleRequest {
  /**
   * The ID of the severity modifier rule.
   * @type string
   */
  ruleId: string;
}

export interface SecurityFindingsApiDeleteSecurityFindingsAutomationTicketCreationRuleRequest {
  /**
   * The ID of the ticket creation rule.
   * @type string
   */
  ruleId: string;
}

export interface SecurityFindingsApiDetachCaseRequest {
  /**
   * @type DetachCaseRequest
   */
  body: DetachCaseRequest;
}

export interface SecurityFindingsApiDisableSecurityFindingsAutomationDefaultInboxRuleRequest {
  /**
   * The ID of the default inbox rule.
   * Known default rule IDs include: `identity_risk_default_rule`,
   * `secret_default_rule`, `library_vulnerability_default_rule`,
   * `attack_path_default_rule`, `host_and_container_vulnerability_default_rule`,
   * `runtime_code_vulnerability_default_rule`, `iac_misconfiguration_default_rule`,
   * and `misconfiguration_default_rule`. Datadog can add new default rules
   * over time.
   * @type string
   */
  ruleId: string;
}

export interface SecurityFindingsApiEnableSecurityFindingsAutomationDefaultInboxRuleRequest {
  /**
   * The ID of the default inbox rule.
   * Known default rule IDs include: `identity_risk_default_rule`,
   * `secret_default_rule`, `library_vulnerability_default_rule`,
   * `attack_path_default_rule`, `host_and_container_vulnerability_default_rule`,
   * `runtime_code_vulnerability_default_rule`, `iac_misconfiguration_default_rule`,
   * and `misconfiguration_default_rule`. Datadog can add new default rules
   * over time.
   * @type string
   */
  ruleId: string;
}

export interface SecurityFindingsApiGetFindingRequest {
  /**
   * The ID of the finding.
   * @type string
   */
  findingId: string;
  /**
   * Return the finding for a given snapshot of time (Unix ms).
   * @type number
   */
  snapshotTimestamp?: number;
}

export interface SecurityFindingsApiGetSecurityFindingsAutomationDefaultInboxRuleRequest {
  /**
   * The ID of the default inbox rule.
   * Known default rule IDs include: `identity_risk_default_rule`,
   * `secret_default_rule`, `library_vulnerability_default_rule`,
   * `attack_path_default_rule`, `host_and_container_vulnerability_default_rule`,
   * `runtime_code_vulnerability_default_rule`, `iac_misconfiguration_default_rule`,
   * and `misconfiguration_default_rule`. Datadog can add new default rules
   * over time.
   * @type string
   */
  ruleId: string;
}

export interface SecurityFindingsApiGetSecurityFindingsAutomationDueDateRuleRequest {
  /**
   * The ID of the due date rule.
   * @type string
   */
  ruleId: string;
}

export interface SecurityFindingsApiGetSecurityFindingsAutomationInboxRuleRequest {
  /**
   * The ID of the inbox rule.
   * @type string
   */
  ruleId: string;
}

export interface SecurityFindingsApiGetSecurityFindingsAutomationMuteRuleRequest {
  /**
   * The ID of the mute rule.
   * @type string
   */
  ruleId: string;
}

export interface SecurityFindingsApiGetSecurityFindingsAutomationSeverityModifierRuleRequest {
  /**
   * The ID of the severity modifier rule.
   * @type string
   */
  ruleId: string;
}

export interface SecurityFindingsApiGetSecurityFindingsAutomationTicketCreationRuleRequest {
  /**
   * The ID of the ticket creation rule.
   * @type string
   */
  ruleId: string;
}

export interface SecurityFindingsApiListFindingsRequest {
  /**
   * Limit the number of findings returned. Must be <= 1000.
   * @type number
   */
  pageLimit?: number;
  /**
   * Return findings for a given snapshot of time (Unix ms).
   * @type number
   */
  snapshotTimestamp?: number;
  /**
   * Return the next page of findings pointed to by the cursor.
   * @type string
   */
  pageCursor?: string;
  /**
   * Return findings that have these associated tags (repeatable).
   * @type string
   */
  filterTags?: string;
  /**
   * Return findings that have changed from pass to fail or vice versa on a specified date (Unix ms) or date range (using comparison operators).
   * @type string
   */
  filterEvaluationChangedAt?: string;
  /**
   * Set to `true` to return findings that are muted. Set to `false` to return unmuted findings.
   * @type boolean
   */
  filterMuted?: boolean;
  /**
   * Return findings for the specified rule ID.
   * @type string
   */
  filterRuleId?: string;
  /**
   * Return findings for the specified rule.
   * @type string
   */
  filterRuleName?: string;
  /**
   * Return only findings for the specified resource type.
   * @type string
   */
  filterResourceType?: string;
  /**
   * Return only findings for the specified resource id.
   * @type string
   */
  filterResourceId?: string;
  /**
   * Return findings that were found on a specified date (Unix ms) or date range (using comparison operators).
   * @type string
   */
  filterDiscoveryTimestamp?: string;
  /**
   * Return only `pass` or `fail` findings.
   * @type FindingEvaluation
   */
  filterEvaluation?: FindingEvaluation;
  /**
   * Return only findings with the specified status.
   * @type FindingStatus
   */
  filterStatus?: FindingStatus;
  /**
   * Return findings that match the selected vulnerability types (repeatable).
   * @type Array<FindingVulnerabilityType>
   */
  filterVulnerabilityType?: Array<FindingVulnerabilityType>;
  /**
   * Return additional fields for some findings.
   * @type boolean
   */
  detailedFindings?: boolean;
}

export interface SecurityFindingsApiListSecurityFindingsRequest {
  /**
   * The search query following log search syntax.
   * @type string
   */
  filterQuery?: string;
  /**
   * Get the next page of results with a cursor provided in the previous query.
   * @type string
   */
  pageCursor?: string;
  /**
   * The maximum number of findings in the response.
   * @type number
   */
  pageLimit?: number;
  /**
   * Sorts by @detection_changed_at.
   * @type SecurityFindingsSort
   */
  sort?: SecurityFindingsSort;
}

export interface SecurityFindingsApiListSecurityFindingsAutomationDueDateRulesRequest {
  /**
   * The number of rules per page. Maximum is 1000.
   * @type number
   */
  pageSize?: number;
  /**
   * The page number to return.
   * @type number
   */
  pageNumber?: number;
}

export interface SecurityFindingsApiListSecurityFindingsAutomationInboxRulesRequest {
  /**
   * The number of rules per page. Maximum is 1000.
   * @type number
   */
  pageSize?: number;
  /**
   * The page number to return.
   * @type number
   */
  pageNumber?: number;
}

export interface SecurityFindingsApiListSecurityFindingsAutomationMuteRulesRequest {
  /**
   * The number of rules per page. Maximum is 1000.
   * @type number
   */
  pageSize?: number;
  /**
   * The page number to return.
   * @type number
   */
  pageNumber?: number;
}

export interface SecurityFindingsApiListSecurityFindingsAutomationSeverityModifierRulesRequest {
  /**
   * The number of rules per page. Maximum is 1000.
   * @type number
   */
  pageSize?: number;
  /**
   * The page number to return.
   * @type number
   */
  pageNumber?: number;
}

export interface SecurityFindingsApiListSecurityFindingsAutomationTicketCreationRulesRequest {
  /**
   * The number of rules per page. Maximum is 1000.
   * @type number
   */
  pageSize?: number;
  /**
   * The page number to return.
   * @type number
   */
  pageNumber?: number;
}

export interface SecurityFindingsApiMuteSecurityFindingsRequest {
  /**
   * @type MuteFindingsRequest
   */
  body: MuteFindingsRequest;
}

export interface SecurityFindingsApiReorderSecurityFindingsAutomationDueDateRulesRequest {
  /**
   * @type DueDateRuleReorderRequest
   */
  body: DueDateRuleReorderRequest;
}

export interface SecurityFindingsApiReorderSecurityFindingsAutomationInboxRulesRequest {
  /**
   * @type InboxRuleReorderRequest
   */
  body: InboxRuleReorderRequest;
}

export interface SecurityFindingsApiReorderSecurityFindingsAutomationMuteRulesRequest {
  /**
   * @type MuteRuleReorderRequest
   */
  body: MuteRuleReorderRequest;
}

export interface SecurityFindingsApiReorderSecurityFindingsAutomationSeverityModifierRulesRequest {
  /**
   * @type SeverityModifierRuleReorderRequest
   */
  body: SeverityModifierRuleReorderRequest;
}

export interface SecurityFindingsApiReorderSecurityFindingsAutomationTicketCreationRulesRequest {
  /**
   * @type TicketCreationRuleReorderRequest
   */
  body: TicketCreationRuleReorderRequest;
}

export interface SecurityFindingsApiSearchSecurityFindingsRequest {
  /**
   * @type SecurityFindingsSearchRequest
   */
  body: SecurityFindingsSearchRequest;
}

export interface SecurityFindingsApiUpdateFindingsAssigneeRequest {
  /**
   * @type AssigneeRequest
   */
  body: AssigneeRequest;
}

export interface SecurityFindingsApiUpdateFindingsSeverityRequest {
  /**
   * @type SeverityOverrideRequest
   */
  body: SeverityOverrideRequest;
}

export interface SecurityFindingsApiUpdateSecurityFindingsAutomationDueDateRuleRequest {
  /**
   * The ID of the due date rule.
   * @type string
   */
  ruleId: string;
  /**
   * @type DueDateRuleUpdateRequest
   */
  body: DueDateRuleUpdateRequest;
}

export interface SecurityFindingsApiUpdateSecurityFindingsAutomationInboxRuleRequest {
  /**
   * The ID of the inbox rule.
   * @type string
   */
  ruleId: string;
  /**
   * @type InboxRuleUpdateRequest
   */
  body: InboxRuleUpdateRequest;
}

export interface SecurityFindingsApiUpdateSecurityFindingsAutomationMuteRuleRequest {
  /**
   * The ID of the mute rule.
   * @type string
   */
  ruleId: string;
  /**
   * @type MuteRuleUpdateRequest
   */
  body: MuteRuleUpdateRequest;
}

export interface SecurityFindingsApiUpdateSecurityFindingsAutomationSeverityModifierRuleRequest {
  /**
   * The ID of the severity modifier rule.
   * @type string
   */
  ruleId: string;
  /**
   * @type SeverityModifierRuleUpdateRequest
   */
  body: SeverityModifierRuleUpdateRequest;
}

export interface SecurityFindingsApiUpdateSecurityFindingsAutomationTicketCreationRuleRequest {
  /**
   * The ID of the ticket creation rule.
   * @type string
   */
  ruleId: string;
  /**
   * @type TicketCreationRuleUpdateRequest
   */
  body: TicketCreationRuleUpdateRequest;
}

export class SecurityFindingsApi {
  private requestFactory: SecurityFindingsApiRequestFactory;
  private responseProcessor: SecurityFindingsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: SecurityFindingsApiRequestFactory,
    responseProcessor?: SecurityFindingsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new SecurityFindingsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new SecurityFindingsApiResponseProcessor();
  }

  /**
   * Attach security findings to a case.
   * You can attach up to 50 security findings per case. Security findings that are already attached to another case will be detached from their previous case and attached to the specified case.
   * @param param The request object
   */
  public attachCase(
    param: SecurityFindingsApiAttachCaseRequest,
    options?: Configuration,
  ): Promise<FindingCaseResponse> {
    const requestContextPromise = this.requestFactory.attachCase(
      param.caseId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.attachCase(responseContext);
        });
    });
  }

  /**
   * Attach security findings to a Jira issue by providing the Jira issue URL.
   * You can attach up to 50 security findings per Jira issue. If the Jira issue is not linked to any case, this operation will create a case for the security findings and link the Jira issue to the newly created case. To configure the Jira integration, see [Bidirectional ticket syncing with Jira](https://docs.datadoghq.com/security/ticketing_integrations/#bidirectional-ticket-syncing-with-jira). Security findings that are already attached to another Jira issue will be detached from their previous Jira issue and attached to the specified Jira issue.
   * @param param The request object
   */
  public attachJiraIssue(
    param: SecurityFindingsApiAttachJiraIssueRequest,
    options?: Configuration,
  ): Promise<FindingCaseResponse> {
    const requestContextPromise = this.requestFactory.attachJiraIssue(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.attachJiraIssue(responseContext);
        });
    });
  }

  /**
   * Attach security findings to a Linear issue by providing the Linear issue URL.
   * You can attach up to 50 security findings per Linear issue. If the Linear issue is not linked to any case, this operation will create a case for the security findings and link the Linear issue to the newly created case. Security findings that are already attached to another Linear issue will be detached from their previous Linear issue and attached to the specified Linear issue.
   * @param param The request object
   */
  public attachLinearIssue(
    param: SecurityFindingsApiAttachLinearIssueRequest,
    options?: Configuration,
  ): Promise<FindingCaseResponse> {
    const requestContextPromise = this.requestFactory.attachLinearIssue(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.attachLinearIssue(responseContext);
        });
    });
  }

  /**
   * Attach security findings to a ServiceNow ticket by providing the ServiceNow ticket URL.
   * You can attach up to 50 security findings per ServiceNow ticket. If the ServiceNow ticket is not linked to any case, this operation will create a case for the security findings and link the ServiceNow ticket to the newly created case. Security findings that are already attached to another ServiceNow ticket will be detached from their previous ServiceNow ticket and attached to the specified ServiceNow ticket.
   * @param param The request object
   */
  public attachServiceNowTicket(
    param: SecurityFindingsApiAttachServiceNowTicketRequest,
    options?: Configuration,
  ): Promise<FindingCaseResponse> {
    const requestContextPromise = this.requestFactory.attachServiceNowTicket(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.attachServiceNowTicket(responseContext);
        });
    });
  }

  /**
   * Create cases for security findings.
   * You can create up to 50 cases per request and associate up to 50 security findings per case. Security findings that are already attached to another case will be detached from their previous case and attached to the newly created case.
   * @param param The request object
   */
  public createCases(
    param: SecurityFindingsApiCreateCasesRequest,
    options?: Configuration,
  ): Promise<FindingCaseResponseArray> {
    const requestContextPromise = this.requestFactory.createCases(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCases(responseContext);
        });
    });
  }

  /**
   * Create Jira issues for security findings.
   * This operation creates a case in Datadog and a Jira issue linked to that case for bidirectional sync between Datadog and Jira. To configure the Jira integration, see [Bidirectional ticket syncing with Jira](https://docs.datadoghq.com/security/ticketing_integrations/#bidirectional-ticket-syncing-with-jira). You can create up to 50 Jira issues per request and associate up to 50 security findings per Jira issue. Security findings that are already attached to another Jira issue will be detached from their previous Jira issue and attached to the newly created Jira issue.
   * @param param The request object
   */
  public createJiraIssues(
    param: SecurityFindingsApiCreateJiraIssuesRequest,
    options?: Configuration,
  ): Promise<FindingCaseResponseArray> {
    const requestContextPromise = this.requestFactory.createJiraIssues(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createJiraIssues(responseContext);
        });
    });
  }

  /**
   * Create Linear issues for security findings.
   * This operation creates a case in Datadog and a Linear issue linked to that case for bidirectional sync between Datadog and Linear. You can create up to 50 Linear issues per request and associate up to 50 security findings per Linear issue. Security findings that are already attached to another Linear issue will be detached from their previous Linear issue and attached to the newly created Linear issue.
   * @param param The request object
   */
  public createLinearIssues(
    param: SecurityFindingsApiCreateLinearIssuesRequest,
    options?: Configuration,
  ): Promise<FindingCaseResponseArray> {
    const requestContextPromise = this.requestFactory.createLinearIssues(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLinearIssues(responseContext);
        });
    });
  }

  /**
   * Create a due date rule for the current organization.
   * @param param The request object
   */
  public createSecurityFindingsAutomationDueDateRule(
    param: SecurityFindingsApiCreateSecurityFindingsAutomationDueDateRuleRequest,
    options?: Configuration,
  ): Promise<DueDateRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createSecurityFindingsAutomationDueDateRule(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityFindingsAutomationDueDateRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Create an inbox rule for the current organization.
   * @param param The request object
   */
  public createSecurityFindingsAutomationInboxRule(
    param: SecurityFindingsApiCreateSecurityFindingsAutomationInboxRuleRequest,
    options?: Configuration,
  ): Promise<InboxRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createSecurityFindingsAutomationInboxRule(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityFindingsAutomationInboxRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a mute rule for the current organization.
   * @param param The request object
   */
  public createSecurityFindingsAutomationMuteRule(
    param: SecurityFindingsApiCreateSecurityFindingsAutomationMuteRuleRequest,
    options?: Configuration,
  ): Promise<MuteRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createSecurityFindingsAutomationMuteRule(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityFindingsAutomationMuteRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a severity modifier rule for the current organization.
   * @param param The request object
   */
  public createSecurityFindingsAutomationSeverityModifierRule(
    param: SecurityFindingsApiCreateSecurityFindingsAutomationSeverityModifierRuleRequest,
    options?: Configuration,
  ): Promise<SeverityModifierRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createSecurityFindingsAutomationSeverityModifierRule(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityFindingsAutomationSeverityModifierRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a ticket creation rule for the current organization.
   * @param param The request object
   */
  public createSecurityFindingsAutomationTicketCreationRule(
    param: SecurityFindingsApiCreateSecurityFindingsAutomationTicketCreationRuleRequest,
    options?: Configuration,
  ): Promise<TicketCreationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createSecurityFindingsAutomationTicketCreationRule(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityFindingsAutomationTicketCreationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Create ServiceNow tickets for security findings.
   * This operation creates a case in Datadog and a ServiceNow ticket linked to that case for bidirectional sync between Datadog and ServiceNow. You can create up to 50 ServiceNow tickets per request and associate up to 50 security findings per ServiceNow ticket. Security findings that are already attached to another ServiceNow ticket will be detached from their previous ServiceNow ticket and attached to the newly created ServiceNow ticket.
   * @param param The request object
   */
  public createServiceNowTickets(
    param: SecurityFindingsApiCreateServiceNowTicketsRequest,
    options?: Configuration,
  ): Promise<FindingCaseResponseArray> {
    const requestContextPromise = this.requestFactory.createServiceNowTickets(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createServiceNowTickets(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a due date rule by ID.
   * @param param The request object
   */
  public deleteSecurityFindingsAutomationDueDateRule(
    param: SecurityFindingsApiDeleteSecurityFindingsAutomationDueDateRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSecurityFindingsAutomationDueDateRule(
        param.ruleId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityFindingsAutomationDueDateRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete an inbox rule by ID.
   * @param param The request object
   */
  public deleteSecurityFindingsAutomationInboxRule(
    param: SecurityFindingsApiDeleteSecurityFindingsAutomationInboxRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSecurityFindingsAutomationInboxRule(
        param.ruleId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityFindingsAutomationInboxRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a mute rule by ID.
   * @param param The request object
   */
  public deleteSecurityFindingsAutomationMuteRule(
    param: SecurityFindingsApiDeleteSecurityFindingsAutomationMuteRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSecurityFindingsAutomationMuteRule(
        param.ruleId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityFindingsAutomationMuteRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a severity modifier rule by ID.
   * @param param The request object
   */
  public deleteSecurityFindingsAutomationSeverityModifierRule(
    param: SecurityFindingsApiDeleteSecurityFindingsAutomationSeverityModifierRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSecurityFindingsAutomationSeverityModifierRule(
        param.ruleId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityFindingsAutomationSeverityModifierRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a ticket creation rule by ID.
   * @param param The request object
   */
  public deleteSecurityFindingsAutomationTicketCreationRule(
    param: SecurityFindingsApiDeleteSecurityFindingsAutomationTicketCreationRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSecurityFindingsAutomationTicketCreationRule(
        param.ruleId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityFindingsAutomationTicketCreationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Detach security findings from their case.
   * This operation dissociates security findings from their associated cases without deleting the cases themselves. You can detach security findings from multiple different cases in a single request, with a limit of 50 security findings per request. Security findings that are not currently attached to any case will be ignored.
   * @param param The request object
   */
  public detachCase(
    param: SecurityFindingsApiDetachCaseRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.detachCase(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.detachCase(responseContext);
        });
    });
  }

  /**
   * Disable a default inbox rule for the current organization.
   * @param param The request object
   */
  public disableSecurityFindingsAutomationDefaultInboxRule(
    param: SecurityFindingsApiDisableSecurityFindingsAutomationDefaultInboxRuleRequest,
    options?: Configuration,
  ): Promise<DefaultInboxRuleResponse> {
    const requestContextPromise =
      this.requestFactory.disableSecurityFindingsAutomationDefaultInboxRule(
        param.ruleId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.disableSecurityFindingsAutomationDefaultInboxRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Enable a default inbox rule for the current organization.
   * @param param The request object
   */
  public enableSecurityFindingsAutomationDefaultInboxRule(
    param: SecurityFindingsApiEnableSecurityFindingsAutomationDefaultInboxRuleRequest,
    options?: Configuration,
  ): Promise<DefaultInboxRuleResponse> {
    const requestContextPromise =
      this.requestFactory.enableSecurityFindingsAutomationDefaultInboxRule(
        param.ruleId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.enableSecurityFindingsAutomationDefaultInboxRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Returns a single finding with message and resource configuration.
   * @param param The request object
   */
  public getFinding(
    param: SecurityFindingsApiGetFindingRequest,
    options?: Configuration,
  ): Promise<GetFindingResponse> {
    const requestContextPromise = this.requestFactory.getFinding(
      param.findingId,
      param.snapshotTimestamp,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getFinding(responseContext);
        });
    });
  }

  /**
   * Get the details of a default inbox rule by ID.
   * Datadog manages default inbox rules. Their name, rule, and action are
   * read-only, and each organization can change only whether they are enabled.
   * @param param The request object
   */
  public getSecurityFindingsAutomationDefaultInboxRule(
    param: SecurityFindingsApiGetSecurityFindingsAutomationDefaultInboxRuleRequest,
    options?: Configuration,
  ): Promise<DefaultInboxRuleResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityFindingsAutomationDefaultInboxRule(
        param.ruleId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityFindingsAutomationDefaultInboxRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the details of a due date rule by ID.
   * @param param The request object
   */
  public getSecurityFindingsAutomationDueDateRule(
    param: SecurityFindingsApiGetSecurityFindingsAutomationDueDateRuleRequest,
    options?: Configuration,
  ): Promise<DueDateRuleResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityFindingsAutomationDueDateRule(
        param.ruleId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityFindingsAutomationDueDateRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the details of an inbox rule by ID.
   * @param param The request object
   */
  public getSecurityFindingsAutomationInboxRule(
    param: SecurityFindingsApiGetSecurityFindingsAutomationInboxRuleRequest,
    options?: Configuration,
  ): Promise<InboxRuleResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityFindingsAutomationInboxRule(
        param.ruleId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityFindingsAutomationInboxRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the details of a mute rule by ID.
   * @param param The request object
   */
  public getSecurityFindingsAutomationMuteRule(
    param: SecurityFindingsApiGetSecurityFindingsAutomationMuteRuleRequest,
    options?: Configuration,
  ): Promise<MuteRuleResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityFindingsAutomationMuteRule(
        param.ruleId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityFindingsAutomationMuteRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the details of a severity modifier rule by ID.
   * @param param The request object
   */
  public getSecurityFindingsAutomationSeverityModifierRule(
    param: SecurityFindingsApiGetSecurityFindingsAutomationSeverityModifierRuleRequest,
    options?: Configuration,
  ): Promise<SeverityModifierRuleResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityFindingsAutomationSeverityModifierRule(
        param.ruleId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityFindingsAutomationSeverityModifierRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the details of a ticket creation rule by ID.
   * @param param The request object
   */
  public getSecurityFindingsAutomationTicketCreationRule(
    param: SecurityFindingsApiGetSecurityFindingsAutomationTicketCreationRuleRequest,
    options?: Configuration,
  ): Promise<TicketCreationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityFindingsAutomationTicketCreationRule(
        param.ruleId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityFindingsAutomationTicketCreationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a list of findings. These include both misconfigurations and identity risks.
   *
   * **Note**: To filter and return only identity risks, add the following query parameter: `?filter[tags]=dd_rule_type:ciem`
   *
   * ### Filtering
   *
   * Filters can be applied by appending query parameters to the URL.
   *
   *   - Using a single filter: `?filter[attribute_key]=attribute_value`
   *   - Chaining filters: `?filter[attribute_key]=attribute_value&filter[attribute_key]=attribute_value...`
   *   - Filtering on tags: `?filter[tags]=tag_key:tag_value&filter[tags]=tag_key_2:tag_value_2`
   *
   * Here, `attribute_key` can be any of the filter keys described further below.
   *
   * Query parameters of type `integer` support comparison operators (`>`, `>=`, `<`, `<=`). This is particularly useful when filtering by `evaluation_changed_at` or `resource_discovery_timestamp`. For example: `?filter[evaluation_changed_at]=>20123123121`.
   *
   * You can also use the negation operator on strings. For example, use `filter[resource_type]=-aws*` to filter for any non-AWS resources.
   *
   * The operator must come after the equal sign. For example, to filter with the `>=` operator, add the operator after the equal sign: `filter[evaluation_changed_at]=>=1678809373257`.
   *
   * Query parameters must be only among the documented ones and with values of correct types. Duplicated query parameters (e.g. `filter[status]=low&filter[status]=info`) are not allowed.
   *
   * ### Additional extension fields
   *
   * Additional extension fields are available for some findings.
   *
   * The data is available when you include the query parameter `?detailed_findings=true` in the request.
   *
   * The following fields are available for findings:
   * - `external_id`: The resource external ID related to the finding.
   * - `description`: The description and remediation steps for the finding.
   * - `datadog_link`: The Datadog relative link for the finding.
   * - `ip_addresses`: The list of private IP addresses for the resource related to the finding.
   *
   * ### Response
   *
   * The response includes an array of finding objects, pagination metadata, and a count of items that match the query.
   *
   * Each finding object contains the following:
   *
   * - The finding ID that can be used in a `GetFinding` request to retrieve the full finding details.
   * - Core attributes, including status, evaluation, high-level resource details, muted state, and rule details.
   * - `evaluation_changed_at` and `resource_discovery_date` time stamps.
   * - An array of associated tags.
   * @param param The request object
   */
  public listFindings(
    param: SecurityFindingsApiListFindingsRequest = {},
    options?: Configuration,
  ): Promise<ListFindingsResponse> {
    const requestContextPromise = this.requestFactory.listFindings(
      param.pageLimit,
      param.snapshotTimestamp,
      param.pageCursor,
      param.filterTags,
      param.filterEvaluationChangedAt,
      param.filterMuted,
      param.filterRuleId,
      param.filterRuleName,
      param.filterResourceType,
      param.filterResourceId,
      param.filterDiscoveryTimestamp,
      param.filterEvaluation,
      param.filterStatus,
      param.filterVulnerabilityType,
      param.detailedFindings,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listFindings(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listFindings returning a generator with all the items.
   */
  public async *listFindingsWithPagination(
    param: SecurityFindingsApiListFindingsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<Finding> {
    let pageSize = 100;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listFindings(
        param.pageLimit,
        param.snapshotTimestamp,
        param.pageCursor,
        param.filterTags,
        param.filterEvaluationChangedAt,
        param.filterMuted,
        param.filterRuleId,
        param.filterRuleName,
        param.filterResourceType,
        param.filterResourceId,
        param.filterDiscoveryTimestamp,
        param.filterEvaluation,
        param.filterStatus,
        param.filterVulnerabilityType,
        param.detailedFindings,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listFindings(responseContext);
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length === 0) {
        break;
      }
      const cursorMeta = response.meta;
      if (cursorMeta === undefined) {
        break;
      }
      const cursorMetaPage = cursorMeta.page;
      if (cursorMetaPage === undefined) {
        break;
      }
      const cursorMetaPageCursor = cursorMetaPage.cursor;
      if (cursorMetaPageCursor === undefined) {
        break;
      }

      param.pageCursor = cursorMetaPageCursor;
    }
  }

  /**
   * Get a list of security findings that match a search query. [See the schema for security findings](https://docs.datadoghq.com/security/guide/findings-schema/).
   *
   * ### Query Syntax
   *
   * This endpoint uses the logs query syntax. Findings attributes (living in the attributes.attributes. namespace) are prefixed by @ when queried. Tags are queried without a prefix.
   *
   * Example: `@severity:(critical OR high) @status:open team:platform`
   * @param param The request object
   */
  public listSecurityFindings(
    param: SecurityFindingsApiListSecurityFindingsRequest = {},
    options?: Configuration,
  ): Promise<ListSecurityFindingsResponse> {
    const requestContextPromise = this.requestFactory.listSecurityFindings(
      param.filterQuery,
      param.pageCursor,
      param.pageLimit,
      param.sort,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityFindings(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listSecurityFindings returning a generator with all the items.
   */
  public async *listSecurityFindingsWithPagination(
    param: SecurityFindingsApiListSecurityFindingsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<SecurityFindingsData> {
    let pageSize = 10;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listSecurityFindings(
        param.filterQuery,
        param.pageCursor,
        param.pageLimit,
        param.sort,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listSecurityFindings(responseContext);
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length === 0) {
        break;
      }
      const cursorMeta = response.meta;
      if (cursorMeta === undefined) {
        break;
      }
      const cursorMetaPage = cursorMeta.page;
      if (cursorMetaPage === undefined) {
        break;
      }
      const cursorMetaPageAfter = cursorMetaPage.after;
      if (cursorMetaPageAfter === undefined) {
        break;
      }

      param.pageCursor = cursorMetaPageAfter;
    }
  }

  /**
   * Get all default inbox rules for the current organization.
   * Datadog manages default inbox rules. Their name, rule, and action are
   * read-only, and each organization can change only whether they are enabled.
   * @param param The request object
   */
  public listSecurityFindingsAutomationDefaultInboxRules(
    options?: Configuration,
  ): Promise<DefaultInboxRulesResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityFindingsAutomationDefaultInboxRules(
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityFindingsAutomationDefaultInboxRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Get all due date rules for the current organization.
   * @param param The request object
   */
  public listSecurityFindingsAutomationDueDateRules(
    param: SecurityFindingsApiListSecurityFindingsAutomationDueDateRulesRequest = {},
    options?: Configuration,
  ): Promise<DueDateRulesResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityFindingsAutomationDueDateRules(
        param.pageSize,
        param.pageNumber,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityFindingsAutomationDueDateRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Get all inbox rules for the current organization.
   * @param param The request object
   */
  public listSecurityFindingsAutomationInboxRules(
    param: SecurityFindingsApiListSecurityFindingsAutomationInboxRulesRequest = {},
    options?: Configuration,
  ): Promise<InboxRulesResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityFindingsAutomationInboxRules(
        param.pageSize,
        param.pageNumber,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityFindingsAutomationInboxRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Get all mute rules for the current organization.
   * @param param The request object
   */
  public listSecurityFindingsAutomationMuteRules(
    param: SecurityFindingsApiListSecurityFindingsAutomationMuteRulesRequest = {},
    options?: Configuration,
  ): Promise<MuteRulesResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityFindingsAutomationMuteRules(
        param.pageSize,
        param.pageNumber,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityFindingsAutomationMuteRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Get all severity modifier rules for the current organization.
   * @param param The request object
   */
  public listSecurityFindingsAutomationSeverityModifierRules(
    param: SecurityFindingsApiListSecurityFindingsAutomationSeverityModifierRulesRequest = {},
    options?: Configuration,
  ): Promise<SeverityModifierRulesResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityFindingsAutomationSeverityModifierRules(
        param.pageSize,
        param.pageNumber,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityFindingsAutomationSeverityModifierRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Get all ticket creation rules for the current organization.
   * @param param The request object
   */
  public listSecurityFindingsAutomationTicketCreationRules(
    param: SecurityFindingsApiListSecurityFindingsAutomationTicketCreationRulesRequest = {},
    options?: Configuration,
  ): Promise<TicketCreationRulesResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityFindingsAutomationTicketCreationRules(
        param.pageSize,
        param.pageNumber,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityFindingsAutomationTicketCreationRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Mute or unmute security findings.
   * You can mute or unmute up to 100 security findings per request. The request body must include `is_muted` and `reason` attributes. The allowed reasons depend on whether the finding is being muted or unmuted:
   *   - To mute a finding: `PENDING_FIX`, `FALSE_POSITIVE`, `OTHER`, `NO_FIX`, `DUPLICATE`, `RISK_ACCEPTED`.
   *   - To unmute a finding: `NO_PENDING_FIX`, `HUMAN_ERROR`, `NO_LONGER_ACCEPTED_RISK`, `OTHER`.
   * @param param The request object
   */
  public muteSecurityFindings(
    param: SecurityFindingsApiMuteSecurityFindingsRequest,
    options?: Configuration,
  ): Promise<MuteFindingsResponse> {
    const requestContextPromise = this.requestFactory.muteSecurityFindings(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.muteSecurityFindings(responseContext);
        });
    });
  }

  /**
   * Reorder the list of due date rules for the current organization.
   * @param param The request object
   */
  public reorderSecurityFindingsAutomationDueDateRules(
    param: SecurityFindingsApiReorderSecurityFindingsAutomationDueDateRulesRequest,
    options?: Configuration,
  ): Promise<DueDateRuleReorderResponse> {
    const requestContextPromise =
      this.requestFactory.reorderSecurityFindingsAutomationDueDateRules(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.reorderSecurityFindingsAutomationDueDateRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Reorder the list of inbox rules for the current organization.
   * @param param The request object
   */
  public reorderSecurityFindingsAutomationInboxRules(
    param: SecurityFindingsApiReorderSecurityFindingsAutomationInboxRulesRequest,
    options?: Configuration,
  ): Promise<InboxRuleReorderResponse> {
    const requestContextPromise =
      this.requestFactory.reorderSecurityFindingsAutomationInboxRules(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.reorderSecurityFindingsAutomationInboxRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Reorder the list of mute rules for the current organization.
   * @param param The request object
   */
  public reorderSecurityFindingsAutomationMuteRules(
    param: SecurityFindingsApiReorderSecurityFindingsAutomationMuteRulesRequest,
    options?: Configuration,
  ): Promise<MuteRuleReorderResponse> {
    const requestContextPromise =
      this.requestFactory.reorderSecurityFindingsAutomationMuteRules(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.reorderSecurityFindingsAutomationMuteRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Reorder the list of severity modifier rules for the current organization.
   * @param param The request object
   */
  public reorderSecurityFindingsAutomationSeverityModifierRules(
    param: SecurityFindingsApiReorderSecurityFindingsAutomationSeverityModifierRulesRequest,
    options?: Configuration,
  ): Promise<SeverityModifierRuleReorderResponse> {
    const requestContextPromise =
      this.requestFactory.reorderSecurityFindingsAutomationSeverityModifierRules(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.reorderSecurityFindingsAutomationSeverityModifierRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Reorder the list of ticket creation rules for the current organization.
   * @param param The request object
   */
  public reorderSecurityFindingsAutomationTicketCreationRules(
    param: SecurityFindingsApiReorderSecurityFindingsAutomationTicketCreationRulesRequest,
    options?: Configuration,
  ): Promise<TicketCreationRuleReorderResponse> {
    const requestContextPromise =
      this.requestFactory.reorderSecurityFindingsAutomationTicketCreationRules(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.reorderSecurityFindingsAutomationTicketCreationRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a list of security findings that match a search query. [See the schema for security findings](https://docs.datadoghq.com/security/guide/findings-schema/).
   *
   * ### Query Syntax
   *
   * The API uses the logs query syntax. Findings attributes (living in the attributes.attributes. namespace) are prefixed by @ when queried. Tags are queried without a prefix.
   *
   * Example: `@severity:(critical OR high) @status:open team:platform`
   * @param param The request object
   */
  public searchSecurityFindings(
    param: SecurityFindingsApiSearchSecurityFindingsRequest,
    options?: Configuration,
  ): Promise<ListSecurityFindingsResponse> {
    const requestContextPromise = this.requestFactory.searchSecurityFindings(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchSecurityFindings(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of searchSecurityFindings returning a generator with all the items.
   */
  public async *searchSecurityFindingsWithPagination(
    param: SecurityFindingsApiSearchSecurityFindingsRequest,
    options?: Configuration,
  ): AsyncGenerator<SecurityFindingsData> {
    let pageSize = 10;
    if (param.body.data === undefined) {
      param.body.data = new SecurityFindingsSearchRequestData();
    }
    if (param.body.data.attributes === undefined) {
      param.body.data.attributes =
        new SecurityFindingsSearchRequestDataAttributes();
    }
    if (param.body.data.attributes.page === undefined) {
      param.body.data.attributes.page = new SecurityFindingsSearchRequestPage();
    }
    if (param.body.data.attributes.page.limit === undefined) {
      param.body.data.attributes.page.limit = pageSize;
    } else {
      pageSize = param.body.data.attributes.page.limit;
    }
    while (true) {
      const requestContext = await this.requestFactory.searchSecurityFindings(
        param.body,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.searchSecurityFindings(responseContext);
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length === 0) {
        break;
      }
      const cursorMeta = response.meta;
      if (cursorMeta === undefined) {
        break;
      }
      const cursorMetaPage = cursorMeta.page;
      if (cursorMetaPage === undefined) {
        break;
      }
      const cursorMetaPageAfter = cursorMetaPage.after;
      if (cursorMetaPageAfter === undefined) {
        break;
      }

      param.body.data.attributes.page.cursor = cursorMetaPageAfter;
    }
  }

  /**
   * Assign or unassign security findings.
   * You can assign up to 100 security findings per request. Set `assignee_id` to the unique identifier of the Datadog user you want to assign the findings to. Omit `assignee_id` (or set it to `null`) to unassign the findings. Per-finding warnings and failures are returned in the response `meta` object.
   * @param param The request object
   */
  public updateFindingsAssignee(
    param: SecurityFindingsApiUpdateFindingsAssigneeRequest,
    options?: Configuration,
  ): Promise<AssigneeResponse> {
    const requestContextPromise = this.requestFactory.updateFindingsAssignee(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateFindingsAssignee(responseContext);
        });
    });
  }

  /**
   * Set or clear the manual severity override of security findings.
   *
   * You can update up to 100 security findings per request.
   * Use the `set` action with a `value` to apply a manual severity override.
   * `value` is required for `set` and must be omitted for `clear`.
   * The `info` value sets the lowest severity the finding type allows.
   * Use the `clear` action to remove a manual severity override.
   * `clear` does not remove a severity set by an automation rule.
   * The optional `description` is accepted with both actions and has a limit of 280 characters.
   *
   * Auto-closed findings are excluded.
   * Findings whose severity was set by an automation rule are skipped and listed in the response `meta.warnings`.
   * If every finding is skipped this way, the request fails with a `400` error.
   * Findings that cannot be found are skipped without a warning.
   * The request fails with a `404` error only if none of the findings can be found.
   * @param param The request object
   */
  public updateFindingsSeverity(
    param: SecurityFindingsApiUpdateFindingsSeverityRequest,
    options?: Configuration,
  ): Promise<SeverityOverrideResponse> {
    const requestContextPromise = this.requestFactory.updateFindingsSeverity(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateFindingsSeverity(responseContext);
        });
    });
  }

  /**
   * Update a due date rule by ID.
   * @param param The request object
   */
  public updateSecurityFindingsAutomationDueDateRule(
    param: SecurityFindingsApiUpdateSecurityFindingsAutomationDueDateRuleRequest,
    options?: Configuration,
  ): Promise<DueDateRuleResponse> {
    const requestContextPromise =
      this.requestFactory.updateSecurityFindingsAutomationDueDateRule(
        param.ruleId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityFindingsAutomationDueDateRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Update an inbox rule by ID.
   * @param param The request object
   */
  public updateSecurityFindingsAutomationInboxRule(
    param: SecurityFindingsApiUpdateSecurityFindingsAutomationInboxRuleRequest,
    options?: Configuration,
  ): Promise<InboxRuleResponse> {
    const requestContextPromise =
      this.requestFactory.updateSecurityFindingsAutomationInboxRule(
        param.ruleId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityFindingsAutomationInboxRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a mute rule by ID.
   * @param param The request object
   */
  public updateSecurityFindingsAutomationMuteRule(
    param: SecurityFindingsApiUpdateSecurityFindingsAutomationMuteRuleRequest,
    options?: Configuration,
  ): Promise<MuteRuleResponse> {
    const requestContextPromise =
      this.requestFactory.updateSecurityFindingsAutomationMuteRule(
        param.ruleId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityFindingsAutomationMuteRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a severity modifier rule by ID.
   * @param param The request object
   */
  public updateSecurityFindingsAutomationSeverityModifierRule(
    param: SecurityFindingsApiUpdateSecurityFindingsAutomationSeverityModifierRuleRequest,
    options?: Configuration,
  ): Promise<SeverityModifierRuleResponse> {
    const requestContextPromise =
      this.requestFactory.updateSecurityFindingsAutomationSeverityModifierRule(
        param.ruleId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityFindingsAutomationSeverityModifierRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a ticket creation rule by ID.
   * @param param The request object
   */
  public updateSecurityFindingsAutomationTicketCreationRule(
    param: SecurityFindingsApiUpdateSecurityFindingsAutomationTicketCreationRuleRequest,
    options?: Configuration,
  ): Promise<TicketCreationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.updateSecurityFindingsAutomationTicketCreationRule(
        param.ruleId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityFindingsAutomationTicketCreationRule(
            responseContext,
          );
        });
    });
  }
}
