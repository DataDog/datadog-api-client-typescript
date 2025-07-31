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
import { AssetType } from "./models/AssetType";
import { BulkMuteFindingsRequest } from "./models/BulkMuteFindingsRequest";
import { BulkMuteFindingsResponse } from "./models/BulkMuteFindingsResponse";
import { ConvertJobResultsToSignalsRequest } from "./models/ConvertJobResultsToSignalsRequest";
import { CreateCustomFrameworkRequest } from "./models/CreateCustomFrameworkRequest";
import { CreateCustomFrameworkResponse } from "./models/CreateCustomFrameworkResponse";
import { CreateNotificationRuleParameters } from "./models/CreateNotificationRuleParameters";
import { DeleteCustomFrameworkResponse } from "./models/DeleteCustomFrameworkResponse";
import { Finding } from "./models/Finding";
import { FindingEvaluation } from "./models/FindingEvaluation";
import { FindingStatus } from "./models/FindingStatus";
import { FindingVulnerabilityType } from "./models/FindingVulnerabilityType";
import { GetCustomFrameworkResponse } from "./models/GetCustomFrameworkResponse";
import { GetFindingResponse } from "./models/GetFindingResponse";
import { GetResourceEvaluationFiltersResponse } from "./models/GetResourceEvaluationFiltersResponse";
import { GetRuleVersionHistoryResponse } from "./models/GetRuleVersionHistoryResponse";
import { GetSBOMResponse } from "./models/GetSBOMResponse";
import { HistoricalJobResponse } from "./models/HistoricalJobResponse";
import { JobCreateResponse } from "./models/JobCreateResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { ListAssetsSBOMsResponse } from "./models/ListAssetsSBOMsResponse";
import { ListFindingsResponse } from "./models/ListFindingsResponse";
import { ListHistoricalJobsResponse } from "./models/ListHistoricalJobsResponse";
import { ListVulnerabilitiesResponse } from "./models/ListVulnerabilitiesResponse";
import { ListVulnerableAssetsResponse } from "./models/ListVulnerableAssetsResponse";
import { NotificationRuleResponse } from "./models/NotificationRuleResponse";
import { NotificationRulesList } from "./models/NotificationRulesList";
import { PatchNotificationRuleParameters } from "./models/PatchNotificationRuleParameters";
import { RunHistoricalJobRequest } from "./models/RunHistoricalJobRequest";
import { SBOMComponentLicenseType } from "./models/SBOMComponentLicenseType";
import { SecurityFilterCreateRequest } from "./models/SecurityFilterCreateRequest";
import { SecurityFilterResponse } from "./models/SecurityFilterResponse";
import { SecurityFiltersResponse } from "./models/SecurityFiltersResponse";
import { SecurityFilterUpdateRequest } from "./models/SecurityFilterUpdateRequest";
import { SecurityMonitoringListRulesResponse } from "./models/SecurityMonitoringListRulesResponse";
import { SecurityMonitoringRuleConvertPayload } from "./models/SecurityMonitoringRuleConvertPayload";
import { SecurityMonitoringRuleConvertResponse } from "./models/SecurityMonitoringRuleConvertResponse";
import { SecurityMonitoringRuleCreatePayload } from "./models/SecurityMonitoringRuleCreatePayload";
import { SecurityMonitoringRuleResponse } from "./models/SecurityMonitoringRuleResponse";
import { SecurityMonitoringRuleTestRequest } from "./models/SecurityMonitoringRuleTestRequest";
import { SecurityMonitoringRuleTestResponse } from "./models/SecurityMonitoringRuleTestResponse";
import { SecurityMonitoringRuleUpdatePayload } from "./models/SecurityMonitoringRuleUpdatePayload";
import { SecurityMonitoringRuleValidatePayload } from "./models/SecurityMonitoringRuleValidatePayload";
import { SecurityMonitoringSignal } from "./models/SecurityMonitoringSignal";
import { SecurityMonitoringSignalAssigneeUpdateRequest } from "./models/SecurityMonitoringSignalAssigneeUpdateRequest";
import { SecurityMonitoringSignalIncidentsUpdateRequest } from "./models/SecurityMonitoringSignalIncidentsUpdateRequest";
import { SecurityMonitoringSignalListRequest } from "./models/SecurityMonitoringSignalListRequest";
import { SecurityMonitoringSignalListRequestPage } from "./models/SecurityMonitoringSignalListRequestPage";
import { SecurityMonitoringSignalResponse } from "./models/SecurityMonitoringSignalResponse";
import { SecurityMonitoringSignalsListResponse } from "./models/SecurityMonitoringSignalsListResponse";
import { SecurityMonitoringSignalsSort } from "./models/SecurityMonitoringSignalsSort";
import { SecurityMonitoringSignalStateUpdateRequest } from "./models/SecurityMonitoringSignalStateUpdateRequest";
import { SecurityMonitoringSignalTriageUpdateResponse } from "./models/SecurityMonitoringSignalTriageUpdateResponse";
import { SecurityMonitoringSuppressionCreateRequest } from "./models/SecurityMonitoringSuppressionCreateRequest";
import { SecurityMonitoringSuppressionResponse } from "./models/SecurityMonitoringSuppressionResponse";
import { SecurityMonitoringSuppressionsResponse } from "./models/SecurityMonitoringSuppressionsResponse";
import { SecurityMonitoringSuppressionUpdateRequest } from "./models/SecurityMonitoringSuppressionUpdateRequest";
import { UpdateCustomFrameworkRequest } from "./models/UpdateCustomFrameworkRequest";
import { UpdateCustomFrameworkResponse } from "./models/UpdateCustomFrameworkResponse";
import { UpdateResourceEvaluationFiltersRequest } from "./models/UpdateResourceEvaluationFiltersRequest";
import { UpdateResourceEvaluationFiltersResponse } from "./models/UpdateResourceEvaluationFiltersResponse";
import { VulnerabilityEcosystem } from "./models/VulnerabilityEcosystem";
import { VulnerabilitySeverity } from "./models/VulnerabilitySeverity";
import { VulnerabilityStatus } from "./models/VulnerabilityStatus";
import { VulnerabilityTool } from "./models/VulnerabilityTool";
import { VulnerabilityType } from "./models/VulnerabilityType";
import { version } from "../version";

export class SecurityMonitoringApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("security-monitoring", version);
    }
  }
  public async cancelHistoricalJob(
    jobId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "SecurityMonitoringApi.v2.cancelHistoricalJob"
      ]
    ) {
      throw new Error(
        "Unstable operation 'cancelHistoricalJob' is disabled. Enable it by setting `configuration.unstableOperations['SecurityMonitoringApi.v2.cancelHistoricalJob'] = true`",
      );
    }

    // verify required parameter 'jobId' is not null or undefined
    if (jobId === null || jobId === undefined) {
      throw new RequiredError("jobId", "cancelHistoricalJob");
    }

    // Path Params
    const localVarPath =
      "/api/v2/siem-historical-detections/jobs/{job_id}/cancel".replace(
        "{job_id}",
        encodeURIComponent(String(jobId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.cancelHistoricalJob",
      SecurityMonitoringApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async convertExistingSecurityMonitoringRule(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "convertExistingSecurityMonitoringRule",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/rules/{rule_id}/convert".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.convertExistingSecurityMonitoringRule",
      SecurityMonitoringApi.operationServers,
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

  public async convertJobResultToSignal(
    body: ConvertJobResultsToSignalsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "SecurityMonitoringApi.v2.convertJobResultToSignal"
      ]
    ) {
      throw new Error(
        "Unstable operation 'convertJobResultToSignal' is disabled. Enable it by setting `configuration.unstableOperations['SecurityMonitoringApi.v2.convertJobResultToSignal'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "convertJobResultToSignal");
    }

    // Path Params
    const localVarPath =
      "/api/v2/siem-historical-detections/jobs/signal_convert";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.convertJobResultToSignal",
      SecurityMonitoringApi.operationServers,
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
      serialize(body, TypingInfo, "ConvertJobResultsToSignalsRequest", ""),
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

  public async convertSecurityMonitoringRuleFromJSONToTerraform(
    body: SecurityMonitoringRuleConvertPayload,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "convertSecurityMonitoringRuleFromJSONToTerraform",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/convert";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.convertSecurityMonitoringRuleFromJSONToTerraform",
      SecurityMonitoringApi.operationServers,
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
      serialize(body, TypingInfo, "SecurityMonitoringRuleConvertPayload", ""),
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

  public async createCustomFramework(
    body: CreateCustomFrameworkRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCustomFramework");
    }

    // Path Params
    const localVarPath = "/api/v2/cloud_security_management/custom_frameworks";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.createCustomFramework",
      SecurityMonitoringApi.operationServers,
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
      serialize(body, TypingInfo, "CreateCustomFrameworkRequest", ""),
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

  public async createSecurityFilter(
    body: SecurityFilterCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSecurityFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/security_filters";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.createSecurityFilter",
      SecurityMonitoringApi.operationServers,
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
      serialize(body, TypingInfo, "SecurityFilterCreateRequest", ""),
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

  public async createSecurityMonitoringRule(
    body: SecurityMonitoringRuleCreatePayload,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSecurityMonitoringRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.createSecurityMonitoringRule",
      SecurityMonitoringApi.operationServers,
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
      serialize(body, TypingInfo, "SecurityMonitoringRuleCreatePayload", ""),
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

  public async createSecurityMonitoringSuppression(
    body: SecurityMonitoringSuppressionCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSecurityMonitoringSuppression");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/suppressions";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.createSecurityMonitoringSuppression",
      SecurityMonitoringApi.operationServers,
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
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringSuppressionCreateRequest",
        "",
      ),
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

  public async createSignalNotificationRule(
    body: CreateNotificationRuleParameters,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSignalNotificationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security/signals/notification_rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.createSignalNotificationRule",
      SecurityMonitoringApi.operationServers,
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
      serialize(body, TypingInfo, "CreateNotificationRuleParameters", ""),
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

  public async createVulnerabilityNotificationRule(
    body: CreateNotificationRuleParameters,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createVulnerabilityNotificationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security/vulnerabilities/notification_rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.createVulnerabilityNotificationRule",
      SecurityMonitoringApi.operationServers,
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
      serialize(body, TypingInfo, "CreateNotificationRuleParameters", ""),
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

  public async deleteCustomFramework(
    handle: string,
    version: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'handle' is not null or undefined
    if (handle === null || handle === undefined) {
      throw new RequiredError("handle", "deleteCustomFramework");
    }

    // verify required parameter 'version' is not null or undefined
    if (version === null || version === undefined) {
      throw new RequiredError("version", "deleteCustomFramework");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cloud_security_management/custom_frameworks/{handle}/{version}"
        .replace("{handle}", encodeURIComponent(String(handle)))
        .replace("{version}", encodeURIComponent(String(version)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.deleteCustomFramework",
      SecurityMonitoringApi.operationServers,
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

  public async deleteHistoricalJob(
    jobId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "SecurityMonitoringApi.v2.deleteHistoricalJob"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteHistoricalJob' is disabled. Enable it by setting `configuration.unstableOperations['SecurityMonitoringApi.v2.deleteHistoricalJob'] = true`",
      );
    }

    // verify required parameter 'jobId' is not null or undefined
    if (jobId === null || jobId === undefined) {
      throw new RequiredError("jobId", "deleteHistoricalJob");
    }

    // Path Params
    const localVarPath =
      "/api/v2/siem-historical-detections/jobs/{job_id}".replace(
        "{job_id}",
        encodeURIComponent(String(jobId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.deleteHistoricalJob",
      SecurityMonitoringApi.operationServers,
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

  public async deleteSecurityFilter(
    securityFilterId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'securityFilterId' is not null or undefined
    if (securityFilterId === null || securityFilterId === undefined) {
      throw new RequiredError("securityFilterId", "deleteSecurityFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/security_filters/{security_filter_id}".replace(
        "{security_filter_id}",
        encodeURIComponent(String(securityFilterId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.deleteSecurityFilter",
      SecurityMonitoringApi.operationServers,
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

  public async deleteSecurityMonitoringRule(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "deleteSecurityMonitoringRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.deleteSecurityMonitoringRule",
      SecurityMonitoringApi.operationServers,
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

  public async deleteSecurityMonitoringSuppression(
    suppressionId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'suppressionId' is not null or undefined
    if (suppressionId === null || suppressionId === undefined) {
      throw new RequiredError(
        "suppressionId",
        "deleteSecurityMonitoringSuppression",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/suppressions/{suppression_id}".replace(
        "{suppression_id}",
        encodeURIComponent(String(suppressionId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.deleteSecurityMonitoringSuppression",
      SecurityMonitoringApi.operationServers,
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

  public async deleteSignalNotificationRule(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteSignalNotificationRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/signals/notification_rules/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.deleteSignalNotificationRule",
      SecurityMonitoringApi.operationServers,
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

  public async deleteVulnerabilityNotificationRule(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteVulnerabilityNotificationRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/vulnerabilities/notification_rules/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.deleteVulnerabilityNotificationRule",
      SecurityMonitoringApi.operationServers,
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

  public async editSecurityMonitoringSignalAssignee(
    signalId: string,
    body: SecurityMonitoringSignalAssigneeUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'signalId' is not null or undefined
    if (signalId === null || signalId === undefined) {
      throw new RequiredError(
        "signalId",
        "editSecurityMonitoringSignalAssignee",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "editSecurityMonitoringSignalAssignee");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/signals/{signal_id}/assignee".replace(
        "{signal_id}",
        encodeURIComponent(String(signalId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.editSecurityMonitoringSignalAssignee",
      SecurityMonitoringApi.operationServers,
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
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringSignalAssigneeUpdateRequest",
        "",
      ),
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

  public async editSecurityMonitoringSignalIncidents(
    signalId: string,
    body: SecurityMonitoringSignalIncidentsUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'signalId' is not null or undefined
    if (signalId === null || signalId === undefined) {
      throw new RequiredError(
        "signalId",
        "editSecurityMonitoringSignalIncidents",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "editSecurityMonitoringSignalIncidents");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/signals/{signal_id}/incidents".replace(
        "{signal_id}",
        encodeURIComponent(String(signalId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.editSecurityMonitoringSignalIncidents",
      SecurityMonitoringApi.operationServers,
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
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringSignalIncidentsUpdateRequest",
        "",
      ),
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

  public async editSecurityMonitoringSignalState(
    signalId: string,
    body: SecurityMonitoringSignalStateUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'signalId' is not null or undefined
    if (signalId === null || signalId === undefined) {
      throw new RequiredError("signalId", "editSecurityMonitoringSignalState");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "editSecurityMonitoringSignalState");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/signals/{signal_id}/state".replace(
        "{signal_id}",
        encodeURIComponent(String(signalId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.editSecurityMonitoringSignalState",
      SecurityMonitoringApi.operationServers,
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
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringSignalStateUpdateRequest",
        "",
      ),
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

  public async getCustomFramework(
    handle: string,
    version: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'handle' is not null or undefined
    if (handle === null || handle === undefined) {
      throw new RequiredError("handle", "getCustomFramework");
    }

    // verify required parameter 'version' is not null or undefined
    if (version === null || version === undefined) {
      throw new RequiredError("version", "getCustomFramework");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cloud_security_management/custom_frameworks/{handle}/{version}"
        .replace("{handle}", encodeURIComponent(String(handle)))
        .replace("{version}", encodeURIComponent(String(version)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.getCustomFramework",
      SecurityMonitoringApi.operationServers,
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

  public async getFinding(
    findingId: string,
    snapshotTimestamp?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["SecurityMonitoringApi.v2.getFinding"]) {
      throw new Error(
        "Unstable operation 'getFinding' is disabled. Enable it by setting `configuration.unstableOperations['SecurityMonitoringApi.v2.getFinding'] = true`",
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
      "SecurityMonitoringApi.v2.getFinding",
      SecurityMonitoringApi.operationServers,
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

  public async getHistoricalJob(
    jobId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["SecurityMonitoringApi.v2.getHistoricalJob"]
    ) {
      throw new Error(
        "Unstable operation 'getHistoricalJob' is disabled. Enable it by setting `configuration.unstableOperations['SecurityMonitoringApi.v2.getHistoricalJob'] = true`",
      );
    }

    // verify required parameter 'jobId' is not null or undefined
    if (jobId === null || jobId === undefined) {
      throw new RequiredError("jobId", "getHistoricalJob");
    }

    // Path Params
    const localVarPath =
      "/api/v2/siem-historical-detections/jobs/{job_id}".replace(
        "{job_id}",
        encodeURIComponent(String(jobId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.getHistoricalJob",
      SecurityMonitoringApi.operationServers,
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

  public async getResourceEvaluationFilters(
    cloudProvider?: string,
    accountId?: string,
    skipCache?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cloud_security_management/resource_filters";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.getResourceEvaluationFilters",
      SecurityMonitoringApi.operationServers,
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
    if (cloudProvider !== undefined) {
      requestContext.setQueryParam(
        "cloud_provider",
        serialize(cloudProvider, TypingInfo, "string", ""),
        "",
      );
    }
    if (accountId !== undefined) {
      requestContext.setQueryParam(
        "account_id",
        serialize(accountId, TypingInfo, "string", ""),
        "",
      );
    }
    if (skipCache !== undefined) {
      requestContext.setQueryParam(
        "skip_cache",
        serialize(skipCache, TypingInfo, "boolean", ""),
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

  public async getRuleVersionHistory(
    ruleId: string,
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "SecurityMonitoringApi.v2.getRuleVersionHistory"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getRuleVersionHistory' is disabled. Enable it by setting `configuration.unstableOperations['SecurityMonitoringApi.v2.getRuleVersionHistory'] = true`",
      );
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "getRuleVersionHistory");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/rules/{rule_id}/version_history".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.getRuleVersionHistory",
      SecurityMonitoringApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getSBOM(
    assetType: AssetType,
    filterAssetName: string,
    filterRepoDigest?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["SecurityMonitoringApi.v2.getSBOM"]) {
      throw new Error(
        "Unstable operation 'getSBOM' is disabled. Enable it by setting `configuration.unstableOperations['SecurityMonitoringApi.v2.getSBOM'] = true`",
      );
    }

    // verify required parameter 'assetType' is not null or undefined
    if (assetType === null || assetType === undefined) {
      throw new RequiredError("assetType", "getSBOM");
    }

    // verify required parameter 'filterAssetName' is not null or undefined
    if (filterAssetName === null || filterAssetName === undefined) {
      throw new RequiredError("filterAssetName", "getSBOM");
    }

    // Path Params
    const localVarPath = "/api/v2/security/sboms/{asset_type}".replace(
      "{asset_type}",
      encodeURIComponent(String(assetType)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.getSBOM",
      SecurityMonitoringApi.operationServers,
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
    if (filterAssetName !== undefined) {
      requestContext.setQueryParam(
        "filter[asset_name]",
        serialize(filterAssetName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRepoDigest !== undefined) {
      requestContext.setQueryParam(
        "filter[repo_digest]",
        serialize(filterRepoDigest, TypingInfo, "string", ""),
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

  public async getSecurityFilter(
    securityFilterId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'securityFilterId' is not null or undefined
    if (securityFilterId === null || securityFilterId === undefined) {
      throw new RequiredError("securityFilterId", "getSecurityFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/security_filters/{security_filter_id}".replace(
        "{security_filter_id}",
        encodeURIComponent(String(securityFilterId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.getSecurityFilter",
      SecurityMonitoringApi.operationServers,
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

  public async getSecurityMonitoringRule(
    ruleId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "getSecurityMonitoringRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.getSecurityMonitoringRule",
      SecurityMonitoringApi.operationServers,
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

  public async getSecurityMonitoringSignal(
    signalId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'signalId' is not null or undefined
    if (signalId === null || signalId === undefined) {
      throw new RequiredError("signalId", "getSecurityMonitoringSignal");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/signals/{signal_id}".replace(
        "{signal_id}",
        encodeURIComponent(String(signalId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.getSecurityMonitoringSignal",
      SecurityMonitoringApi.operationServers,
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

  public async getSecurityMonitoringSuppression(
    suppressionId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'suppressionId' is not null or undefined
    if (suppressionId === null || suppressionId === undefined) {
      throw new RequiredError(
        "suppressionId",
        "getSecurityMonitoringSuppression",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/suppressions/{suppression_id}".replace(
        "{suppression_id}",
        encodeURIComponent(String(suppressionId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.getSecurityMonitoringSuppression",
      SecurityMonitoringApi.operationServers,
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

  public async getSignalNotificationRule(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getSignalNotificationRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/signals/notification_rules/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.getSignalNotificationRule",
      SecurityMonitoringApi.operationServers,
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

  public async getSignalNotificationRules(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security/signals/notification_rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.getSignalNotificationRules",
      SecurityMonitoringApi.operationServers,
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

  public async getVulnerabilityNotificationRule(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getVulnerabilityNotificationRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/vulnerabilities/notification_rules/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.getVulnerabilityNotificationRule",
      SecurityMonitoringApi.operationServers,
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

  public async getVulnerabilityNotificationRules(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security/vulnerabilities/notification_rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.getVulnerabilityNotificationRules",
      SecurityMonitoringApi.operationServers,
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

  public async listAssetsSBOMs(
    pageToken?: string,
    pageNumber?: number,
    filterAssetType?: AssetType,
    filterAssetName?: string,
    filterPackageName?: string,
    filterPackageVersion?: string,
    filterLicenseName?: string,
    filterLicenseType?: SBOMComponentLicenseType,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["SecurityMonitoringApi.v2.listAssetsSBOMs"]
    ) {
      throw new Error(
        "Unstable operation 'listAssetsSBOMs' is disabled. Enable it by setting `configuration.unstableOperations['SecurityMonitoringApi.v2.listAssetsSBOMs'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security/sboms";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.listAssetsSBOMs",
      SecurityMonitoringApi.operationServers,
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
    if (pageToken !== undefined) {
      requestContext.setQueryParam(
        "page[token]",
        serialize(pageToken, TypingInfo, "string", ""),
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
    if (filterAssetType !== undefined) {
      requestContext.setQueryParam(
        "filter[asset_type]",
        serialize(filterAssetType, TypingInfo, "AssetType", ""),
        "",
      );
    }
    if (filterAssetName !== undefined) {
      requestContext.setQueryParam(
        "filter[asset_name]",
        serialize(filterAssetName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterPackageName !== undefined) {
      requestContext.setQueryParam(
        "filter[package_name]",
        serialize(filterPackageName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterPackageVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[package_version]",
        serialize(filterPackageVersion, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterLicenseName !== undefined) {
      requestContext.setQueryParam(
        "filter[license_name]",
        serialize(filterLicenseName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterLicenseType !== undefined) {
      requestContext.setQueryParam(
        "filter[license_type]",
        serialize(
          filterLicenseType,
          TypingInfo,
          "SBOMComponentLicenseType",
          "",
        ),
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

    if (!_config.unstableOperations["SecurityMonitoringApi.v2.listFindings"]) {
      throw new Error(
        "Unstable operation 'listFindings' is disabled. Enable it by setting `configuration.unstableOperations['SecurityMonitoringApi.v2.listFindings'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/posture_management/findings";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.listFindings",
      SecurityMonitoringApi.operationServers,
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

  public async listHistoricalJobs(
    pageSize?: number,
    pageNumber?: number,
    sort?: string,
    filterQuery?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["SecurityMonitoringApi.v2.listHistoricalJobs"]
    ) {
      throw new Error(
        "Unstable operation 'listHistoricalJobs' is disabled. Enable it by setting `configuration.unstableOperations['SecurityMonitoringApi.v2.listHistoricalJobs'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/siem-historical-detections/jobs";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.listHistoricalJobs",
      SecurityMonitoringApi.operationServers,
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
        serialize(sort, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        serialize(filterQuery, TypingInfo, "string", ""),
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

  public async listSecurityFilters(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/security_filters";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.listSecurityFilters",
      SecurityMonitoringApi.operationServers,
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

  public async listSecurityMonitoringRules(
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.listSecurityMonitoringRules",
      SecurityMonitoringApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listSecurityMonitoringSignals(
    filterQuery?: string,
    filterFrom?: Date,
    filterTo?: Date,
    sort?: SecurityMonitoringSignalsSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/signals";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.listSecurityMonitoringSignals",
      SecurityMonitoringApi.operationServers,
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
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        serialize(filterQuery, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterFrom !== undefined) {
      requestContext.setQueryParam(
        "filter[from]",
        serialize(filterFrom, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (filterTo !== undefined) {
      requestContext.setQueryParam(
        "filter[to]",
        serialize(filterTo, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "SecurityMonitoringSignalsSort", ""),
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
        serialize(pageLimit, TypingInfo, "number", "int32"),
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

  public async listSecurityMonitoringSuppressions(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/suppressions";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.listSecurityMonitoringSuppressions",
      SecurityMonitoringApi.operationServers,
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

  public async listVulnerabilities(
    pageToken?: string,
    pageNumber?: number,
    filterType?: VulnerabilityType,
    filterCvssBaseScoreOp?: number,
    filterCvssBaseSeverity?: VulnerabilitySeverity,
    filterCvssBaseVector?: string,
    filterCvssDatadogScoreOp?: number,
    filterCvssDatadogSeverity?: VulnerabilitySeverity,
    filterCvssDatadogVector?: string,
    filterStatus?: VulnerabilityStatus,
    filterTool?: VulnerabilityTool,
    filterLibraryName?: string,
    filterLibraryVersion?: string,
    filterAdvisoryId?: string,
    filterRisksExploitationProbability?: boolean,
    filterRisksPocExploitAvailable?: boolean,
    filterRisksExploitAvailable?: boolean,
    filterRisksEpssScoreOp?: number,
    filterRisksEpssSeverity?: VulnerabilitySeverity,
    filterLanguage?: string,
    filterEcosystem?: VulnerabilityEcosystem,
    filterCodeLocationLocation?: string,
    filterCodeLocationFilePath?: string,
    filterCodeLocationMethod?: string,
    filterFixAvailable?: boolean,
    filterRepoDigests?: string,
    filterOrigin?: string,
    filterAssetName?: string,
    filterAssetType?: AssetType,
    filterAssetVersionFirst?: string,
    filterAssetVersionLast?: string,
    filterAssetRepositoryUrl?: string,
    filterAssetRisksInProduction?: boolean,
    filterAssetRisksUnderAttack?: boolean,
    filterAssetRisksIsPubliclyAccessible?: boolean,
    filterAssetRisksHasPrivilegedAccess?: boolean,
    filterAssetRisksHasAccessToSensitiveData?: boolean,
    filterAssetEnvironments?: string,
    filterAssetTeams?: string,
    filterAssetArch?: string,
    filterAssetOperatingSystemName?: string,
    filterAssetOperatingSystemVersion?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "SecurityMonitoringApi.v2.listVulnerabilities"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listVulnerabilities' is disabled. Enable it by setting `configuration.unstableOperations['SecurityMonitoringApi.v2.listVulnerabilities'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security/vulnerabilities";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.listVulnerabilities",
      SecurityMonitoringApi.operationServers,
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
    if (pageToken !== undefined) {
      requestContext.setQueryParam(
        "page[token]",
        serialize(pageToken, TypingInfo, "string", ""),
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
    if (filterType !== undefined) {
      requestContext.setQueryParam(
        "filter[type]",
        serialize(filterType, TypingInfo, "VulnerabilityType", ""),
        "",
      );
    }
    if (filterCvssBaseScoreOp !== undefined) {
      requestContext.setQueryParam(
        "filter[cvss.base.score][`$op`]",
        serialize(filterCvssBaseScoreOp, TypingInfo, "number", "double"),
        "",
      );
    }
    if (filterCvssBaseSeverity !== undefined) {
      requestContext.setQueryParam(
        "filter[cvss.base.severity]",
        serialize(
          filterCvssBaseSeverity,
          TypingInfo,
          "VulnerabilitySeverity",
          "",
        ),
        "",
      );
    }
    if (filterCvssBaseVector !== undefined) {
      requestContext.setQueryParam(
        "filter[cvss.base.vector]",
        serialize(filterCvssBaseVector, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterCvssDatadogScoreOp !== undefined) {
      requestContext.setQueryParam(
        "filter[cvss.datadog.score][`$op`]",
        serialize(filterCvssDatadogScoreOp, TypingInfo, "number", "double"),
        "",
      );
    }
    if (filterCvssDatadogSeverity !== undefined) {
      requestContext.setQueryParam(
        "filter[cvss.datadog.severity]",
        serialize(
          filterCvssDatadogSeverity,
          TypingInfo,
          "VulnerabilitySeverity",
          "",
        ),
        "",
      );
    }
    if (filterCvssDatadogVector !== undefined) {
      requestContext.setQueryParam(
        "filter[cvss.datadog.vector]",
        serialize(filterCvssDatadogVector, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterStatus !== undefined) {
      requestContext.setQueryParam(
        "filter[status]",
        serialize(filterStatus, TypingInfo, "VulnerabilityStatus", ""),
        "",
      );
    }
    if (filterTool !== undefined) {
      requestContext.setQueryParam(
        "filter[tool]",
        serialize(filterTool, TypingInfo, "VulnerabilityTool", ""),
        "",
      );
    }
    if (filterLibraryName !== undefined) {
      requestContext.setQueryParam(
        "filter[library.name]",
        serialize(filterLibraryName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterLibraryVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[library.version]",
        serialize(filterLibraryVersion, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAdvisoryId !== undefined) {
      requestContext.setQueryParam(
        "filter[advisory_id]",
        serialize(filterAdvisoryId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRisksExploitationProbability !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.exploitation_probability]",
        serialize(
          filterRisksExploitationProbability,
          TypingInfo,
          "boolean",
          "",
        ),
        "",
      );
    }
    if (filterRisksPocExploitAvailable !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.poc_exploit_available]",
        serialize(filterRisksPocExploitAvailable, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterRisksExploitAvailable !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.exploit_available]",
        serialize(filterRisksExploitAvailable, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterRisksEpssScoreOp !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.epss.score][`$op`]",
        serialize(filterRisksEpssScoreOp, TypingInfo, "number", "double"),
        "",
      );
    }
    if (filterRisksEpssSeverity !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.epss.severity]",
        serialize(
          filterRisksEpssSeverity,
          TypingInfo,
          "VulnerabilitySeverity",
          "",
        ),
        "",
      );
    }
    if (filterLanguage !== undefined) {
      requestContext.setQueryParam(
        "filter[language]",
        serialize(filterLanguage, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterEcosystem !== undefined) {
      requestContext.setQueryParam(
        "filter[ecosystem]",
        serialize(filterEcosystem, TypingInfo, "VulnerabilityEcosystem", ""),
        "",
      );
    }
    if (filterCodeLocationLocation !== undefined) {
      requestContext.setQueryParam(
        "filter[code_location.location]",
        serialize(filterCodeLocationLocation, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterCodeLocationFilePath !== undefined) {
      requestContext.setQueryParam(
        "filter[code_location.file_path]",
        serialize(filterCodeLocationFilePath, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterCodeLocationMethod !== undefined) {
      requestContext.setQueryParam(
        "filter[code_location.method]",
        serialize(filterCodeLocationMethod, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterFixAvailable !== undefined) {
      requestContext.setQueryParam(
        "filter[fix_available]",
        serialize(filterFixAvailable, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterRepoDigests !== undefined) {
      requestContext.setQueryParam(
        "filter[repo_digests]",
        serialize(filterRepoDigests, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterOrigin !== undefined) {
      requestContext.setQueryParam(
        "filter[origin]",
        serialize(filterOrigin, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAssetName !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.name]",
        serialize(filterAssetName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAssetType !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.type]",
        serialize(filterAssetType, TypingInfo, "AssetType", ""),
        "",
      );
    }
    if (filterAssetVersionFirst !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.version.first]",
        serialize(filterAssetVersionFirst, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAssetVersionLast !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.version.last]",
        serialize(filterAssetVersionLast, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAssetRepositoryUrl !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.repository_url]",
        serialize(filterAssetRepositoryUrl, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAssetRisksInProduction !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.risks.in_production]",
        serialize(filterAssetRisksInProduction, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterAssetRisksUnderAttack !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.risks.under_attack]",
        serialize(filterAssetRisksUnderAttack, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterAssetRisksIsPubliclyAccessible !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.risks.is_publicly_accessible]",
        serialize(
          filterAssetRisksIsPubliclyAccessible,
          TypingInfo,
          "boolean",
          "",
        ),
        "",
      );
    }
    if (filterAssetRisksHasPrivilegedAccess !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.risks.has_privileged_access]",
        serialize(
          filterAssetRisksHasPrivilegedAccess,
          TypingInfo,
          "boolean",
          "",
        ),
        "",
      );
    }
    if (filterAssetRisksHasAccessToSensitiveData !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.risks.has_access_to_sensitive_data]",
        serialize(
          filterAssetRisksHasAccessToSensitiveData,
          TypingInfo,
          "boolean",
          "",
        ),
        "",
      );
    }
    if (filterAssetEnvironments !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.environments]",
        serialize(filterAssetEnvironments, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAssetTeams !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.teams]",
        serialize(filterAssetTeams, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAssetArch !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.arch]",
        serialize(filterAssetArch, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAssetOperatingSystemName !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.operating_system.name]",
        serialize(filterAssetOperatingSystemName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterAssetOperatingSystemVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.operating_system.version]",
        serialize(filterAssetOperatingSystemVersion, TypingInfo, "string", ""),
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

  public async listVulnerableAssets(
    pageToken?: string,
    pageNumber?: number,
    filterName?: string,
    filterType?: AssetType,
    filterVersionFirst?: string,
    filterVersionLast?: string,
    filterRepositoryUrl?: string,
    filterRisksInProduction?: boolean,
    filterRisksUnderAttack?: boolean,
    filterRisksIsPubliclyAccessible?: boolean,
    filterRisksHasPrivilegedAccess?: boolean,
    filterRisksHasAccessToSensitiveData?: boolean,
    filterEnvironments?: string,
    filterTeams?: string,
    filterArch?: string,
    filterOperatingSystemName?: string,
    filterOperatingSystemVersion?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "SecurityMonitoringApi.v2.listVulnerableAssets"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listVulnerableAssets' is disabled. Enable it by setting `configuration.unstableOperations['SecurityMonitoringApi.v2.listVulnerableAssets'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security/assets";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.listVulnerableAssets",
      SecurityMonitoringApi.operationServers,
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
    if (pageToken !== undefined) {
      requestContext.setQueryParam(
        "page[token]",
        serialize(pageToken, TypingInfo, "string", ""),
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
    if (filterName !== undefined) {
      requestContext.setQueryParam(
        "filter[name]",
        serialize(filterName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterType !== undefined) {
      requestContext.setQueryParam(
        "filter[type]",
        serialize(filterType, TypingInfo, "AssetType", ""),
        "",
      );
    }
    if (filterVersionFirst !== undefined) {
      requestContext.setQueryParam(
        "filter[version.first]",
        serialize(filterVersionFirst, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterVersionLast !== undefined) {
      requestContext.setQueryParam(
        "filter[version.last]",
        serialize(filterVersionLast, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRepositoryUrl !== undefined) {
      requestContext.setQueryParam(
        "filter[repository_url]",
        serialize(filterRepositoryUrl, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRisksInProduction !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.in_production]",
        serialize(filterRisksInProduction, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterRisksUnderAttack !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.under_attack]",
        serialize(filterRisksUnderAttack, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterRisksIsPubliclyAccessible !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.is_publicly_accessible]",
        serialize(filterRisksIsPubliclyAccessible, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterRisksHasPrivilegedAccess !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.has_privileged_access]",
        serialize(filterRisksHasPrivilegedAccess, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (filterRisksHasAccessToSensitiveData !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.has_access_to_sensitive_data]",
        serialize(
          filterRisksHasAccessToSensitiveData,
          TypingInfo,
          "boolean",
          "",
        ),
        "",
      );
    }
    if (filterEnvironments !== undefined) {
      requestContext.setQueryParam(
        "filter[environments]",
        serialize(filterEnvironments, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterTeams !== undefined) {
      requestContext.setQueryParam(
        "filter[teams]",
        serialize(filterTeams, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterArch !== undefined) {
      requestContext.setQueryParam(
        "filter[arch]",
        serialize(filterArch, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterOperatingSystemName !== undefined) {
      requestContext.setQueryParam(
        "filter[operating_system.name]",
        serialize(filterOperatingSystemName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterOperatingSystemVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[operating_system.version]",
        serialize(filterOperatingSystemVersion, TypingInfo, "string", ""),
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

  public async muteFindings(
    body: BulkMuteFindingsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["SecurityMonitoringApi.v2.muteFindings"]) {
      throw new Error(
        "Unstable operation 'muteFindings' is disabled. Enable it by setting `configuration.unstableOperations['SecurityMonitoringApi.v2.muteFindings'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "muteFindings");
    }

    // Path Params
    const localVarPath = "/api/v2/posture_management/findings";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.muteFindings",
      SecurityMonitoringApi.operationServers,
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
      serialize(body, TypingInfo, "BulkMuteFindingsRequest", ""),
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

  public async patchSignalNotificationRule(
    id: string,
    body: PatchNotificationRuleParameters,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "patchSignalNotificationRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "patchSignalNotificationRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/signals/notification_rules/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.patchSignalNotificationRule",
      SecurityMonitoringApi.operationServers,
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
      serialize(body, TypingInfo, "PatchNotificationRuleParameters", ""),
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

  public async patchVulnerabilityNotificationRule(
    id: string,
    body: PatchNotificationRuleParameters,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "patchVulnerabilityNotificationRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "patchVulnerabilityNotificationRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security/vulnerabilities/notification_rules/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.patchVulnerabilityNotificationRule",
      SecurityMonitoringApi.operationServers,
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
      serialize(body, TypingInfo, "PatchNotificationRuleParameters", ""),
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

  public async runHistoricalJob(
    body: RunHistoricalJobRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["SecurityMonitoringApi.v2.runHistoricalJob"]
    ) {
      throw new Error(
        "Unstable operation 'runHistoricalJob' is disabled. Enable it by setting `configuration.unstableOperations['SecurityMonitoringApi.v2.runHistoricalJob'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "runHistoricalJob");
    }

    // Path Params
    const localVarPath = "/api/v2/siem-historical-detections/jobs";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.runHistoricalJob",
      SecurityMonitoringApi.operationServers,
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
      serialize(body, TypingInfo, "RunHistoricalJobRequest", ""),
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

  public async searchSecurityMonitoringSignals(
    body?: SecurityMonitoringSignalListRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/signals/search";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.searchSecurityMonitoringSignals",
      SecurityMonitoringApi.operationServers,
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
      serialize(body, TypingInfo, "SecurityMonitoringSignalListRequest", ""),
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

  public async testExistingSecurityMonitoringRule(
    ruleId: string,
    body: SecurityMonitoringRuleTestRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "testExistingSecurityMonitoringRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "testExistingSecurityMonitoringRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/rules/{rule_id}/test".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.testExistingSecurityMonitoringRule",
      SecurityMonitoringApi.operationServers,
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
      serialize(body, TypingInfo, "SecurityMonitoringRuleTestRequest", ""),
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

  public async testSecurityMonitoringRule(
    body: SecurityMonitoringRuleTestRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "testSecurityMonitoringRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/test";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.testSecurityMonitoringRule",
      SecurityMonitoringApi.operationServers,
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
      serialize(body, TypingInfo, "SecurityMonitoringRuleTestRequest", ""),
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

  public async updateCustomFramework(
    handle: string,
    version: string,
    body: UpdateCustomFrameworkRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'handle' is not null or undefined
    if (handle === null || handle === undefined) {
      throw new RequiredError("handle", "updateCustomFramework");
    }

    // verify required parameter 'version' is not null or undefined
    if (version === null || version === undefined) {
      throw new RequiredError("version", "updateCustomFramework");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCustomFramework");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cloud_security_management/custom_frameworks/{handle}/{version}"
        .replace("{handle}", encodeURIComponent(String(handle)))
        .replace("{version}", encodeURIComponent(String(version)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.updateCustomFramework",
      SecurityMonitoringApi.operationServers,
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
      serialize(body, TypingInfo, "UpdateCustomFrameworkRequest", ""),
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

  public async updateResourceEvaluationFilters(
    body: UpdateResourceEvaluationFiltersRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateResourceEvaluationFilters");
    }

    // Path Params
    const localVarPath = "/api/v2/cloud_security_management/resource_filters";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.updateResourceEvaluationFilters",
      SecurityMonitoringApi.operationServers,
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
      serialize(body, TypingInfo, "UpdateResourceEvaluationFiltersRequest", ""),
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

  public async updateSecurityFilter(
    securityFilterId: string,
    body: SecurityFilterUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'securityFilterId' is not null or undefined
    if (securityFilterId === null || securityFilterId === undefined) {
      throw new RequiredError("securityFilterId", "updateSecurityFilter");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateSecurityFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/security_filters/{security_filter_id}".replace(
        "{security_filter_id}",
        encodeURIComponent(String(securityFilterId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.updateSecurityFilter",
      SecurityMonitoringApi.operationServers,
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
      serialize(body, TypingInfo, "SecurityFilterUpdateRequest", ""),
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

  public async updateSecurityMonitoringRule(
    ruleId: string,
    body: SecurityMonitoringRuleUpdatePayload,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "updateSecurityMonitoringRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateSecurityMonitoringRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.updateSecurityMonitoringRule",
      SecurityMonitoringApi.operationServers,
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
      serialize(body, TypingInfo, "SecurityMonitoringRuleUpdatePayload", ""),
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

  public async updateSecurityMonitoringSuppression(
    suppressionId: string,
    body: SecurityMonitoringSuppressionUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'suppressionId' is not null or undefined
    if (suppressionId === null || suppressionId === undefined) {
      throw new RequiredError(
        "suppressionId",
        "updateSecurityMonitoringSuppression",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateSecurityMonitoringSuppression");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/suppressions/{suppression_id}".replace(
        "{suppression_id}",
        encodeURIComponent(String(suppressionId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.updateSecurityMonitoringSuppression",
      SecurityMonitoringApi.operationServers,
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
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringSuppressionUpdateRequest",
        "",
      ),
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

  public async validateSecurityMonitoringRule(
    body: SecurityMonitoringRuleValidatePayload,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "validateSecurityMonitoringRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/validation";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SecurityMonitoringApi.v2.validateSecurityMonitoringRule",
      SecurityMonitoringApi.operationServers,
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
      serialize(body, TypingInfo, "SecurityMonitoringRuleValidatePayload", ""),
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

export class SecurityMonitoringApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to cancelHistoricalJob
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cancelHistoricalJob(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
   * @params response Response returned by the server for a request to convertExistingSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async convertExistingSecurityMonitoringRule(
    response: ResponseContext,
  ): Promise<SecurityMonitoringRuleConvertResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringRuleConvertResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleConvertResponse",
      ) as SecurityMonitoringRuleConvertResponse;
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
      const body: SecurityMonitoringRuleConvertResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleConvertResponse",
        "",
      ) as SecurityMonitoringRuleConvertResponse;
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
   * @params response Response returned by the server for a request to convertJobResultToSignal
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async convertJobResultToSignal(
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
   * @params response Response returned by the server for a request to convertSecurityMonitoringRuleFromJSONToTerraform
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async convertSecurityMonitoringRuleFromJSONToTerraform(
    response: ResponseContext,
  ): Promise<SecurityMonitoringRuleConvertResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringRuleConvertResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleConvertResponse",
      ) as SecurityMonitoringRuleConvertResponse;
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
      const body: SecurityMonitoringRuleConvertResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleConvertResponse",
        "",
      ) as SecurityMonitoringRuleConvertResponse;
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
   * @params response Response returned by the server for a request to createCustomFramework
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCustomFramework(
    response: ResponseContext,
  ): Promise<CreateCustomFrameworkResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CreateCustomFrameworkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateCustomFrameworkResponse",
      ) as CreateCustomFrameworkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 409 ||
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
      const body: CreateCustomFrameworkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateCustomFrameworkResponse",
        "",
      ) as CreateCustomFrameworkResponse;
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
   * @params response Response returned by the server for a request to createSecurityFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityFilter(
    response: ResponseContext,
  ): Promise<SecurityFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityFilterResponse",
      ) as SecurityFilterResponse;
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
      const body: SecurityFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityFilterResponse",
        "",
      ) as SecurityFilterResponse;
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
   * @params response Response returned by the server for a request to createSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityMonitoringRule(
    response: ResponseContext,
  ): Promise<SecurityMonitoringRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleResponse",
      ) as SecurityMonitoringRuleResponse;
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
      const body: SecurityMonitoringRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleResponse",
        "",
      ) as SecurityMonitoringRuleResponse;
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
   * @params response Response returned by the server for a request to createSecurityMonitoringSuppression
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityMonitoringSuppression(
    response: ResponseContext,
  ): Promise<SecurityMonitoringSuppressionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSuppressionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSuppressionResponse",
      ) as SecurityMonitoringSuppressionResponse;
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
      const body: SecurityMonitoringSuppressionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSuppressionResponse",
        "",
      ) as SecurityMonitoringSuppressionResponse;
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
   * @params response Response returned by the server for a request to createSignalNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSignalNotificationRule(
    response: ResponseContext,
  ): Promise<NotificationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: NotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRuleResponse",
      ) as NotificationRuleResponse;
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
      const body: NotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRuleResponse",
        "",
      ) as NotificationRuleResponse;
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
   * @params response Response returned by the server for a request to createVulnerabilityNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createVulnerabilityNotificationRule(
    response: ResponseContext,
  ): Promise<NotificationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: NotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRuleResponse",
      ) as NotificationRuleResponse;
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
      const body: NotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRuleResponse",
        "",
      ) as NotificationRuleResponse;
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
   * @params response Response returned by the server for a request to deleteCustomFramework
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCustomFramework(
    response: ResponseContext,
  ): Promise<DeleteCustomFrameworkResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DeleteCustomFrameworkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeleteCustomFrameworkResponse",
      ) as DeleteCustomFrameworkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: DeleteCustomFrameworkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeleteCustomFrameworkResponse",
        "",
      ) as DeleteCustomFrameworkResponse;
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
   * @params response Response returned by the server for a request to deleteHistoricalJob
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteHistoricalJob(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
   * @params response Response returned by the server for a request to deleteSecurityFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityFilter(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityMonitoringRule(
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
   * @params response Response returned by the server for a request to deleteSecurityMonitoringSuppression
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityMonitoringSuppression(
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
   * @params response Response returned by the server for a request to deleteSignalNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSignalNotificationRule(
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
   * @params response Response returned by the server for a request to deleteVulnerabilityNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteVulnerabilityNotificationRule(
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
   * @params response Response returned by the server for a request to editSecurityMonitoringSignalAssignee
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async editSecurityMonitoringSignalAssignee(
    response: ResponseContext,
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalTriageUpdateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSignalTriageUpdateResponse",
      ) as SecurityMonitoringSignalTriageUpdateResponse;
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
      const body: SecurityMonitoringSignalTriageUpdateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSignalTriageUpdateResponse",
        "",
      ) as SecurityMonitoringSignalTriageUpdateResponse;
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
   * @params response Response returned by the server for a request to editSecurityMonitoringSignalIncidents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async editSecurityMonitoringSignalIncidents(
    response: ResponseContext,
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalTriageUpdateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSignalTriageUpdateResponse",
      ) as SecurityMonitoringSignalTriageUpdateResponse;
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
      const body: SecurityMonitoringSignalTriageUpdateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSignalTriageUpdateResponse",
        "",
      ) as SecurityMonitoringSignalTriageUpdateResponse;
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
   * @params response Response returned by the server for a request to editSecurityMonitoringSignalState
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async editSecurityMonitoringSignalState(
    response: ResponseContext,
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalTriageUpdateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSignalTriageUpdateResponse",
      ) as SecurityMonitoringSignalTriageUpdateResponse;
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
      const body: SecurityMonitoringSignalTriageUpdateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSignalTriageUpdateResponse",
        "",
      ) as SecurityMonitoringSignalTriageUpdateResponse;
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
   * @params response Response returned by the server for a request to getCustomFramework
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCustomFramework(
    response: ResponseContext,
  ): Promise<GetCustomFrameworkResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetCustomFrameworkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetCustomFrameworkResponse",
      ) as GetCustomFrameworkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: GetCustomFrameworkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetCustomFrameworkResponse",
        "",
      ) as GetCustomFrameworkResponse;
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
   * @params response Response returned by the server for a request to getHistoricalJob
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getHistoricalJob(
    response: ResponseContext,
  ): Promise<HistoricalJobResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: HistoricalJobResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "HistoricalJobResponse",
      ) as HistoricalJobResponse;
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
      const body: HistoricalJobResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "HistoricalJobResponse",
        "",
      ) as HistoricalJobResponse;
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
   * @params response Response returned by the server for a request to getResourceEvaluationFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getResourceEvaluationFilters(
    response: ResponseContext,
  ): Promise<GetResourceEvaluationFiltersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetResourceEvaluationFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetResourceEvaluationFiltersResponse",
      ) as GetResourceEvaluationFiltersResponse;
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
      const body: GetResourceEvaluationFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetResourceEvaluationFiltersResponse",
        "",
      ) as GetResourceEvaluationFiltersResponse;
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
   * @params response Response returned by the server for a request to getRuleVersionHistory
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRuleVersionHistory(
    response: ResponseContext,
  ): Promise<GetRuleVersionHistoryResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetRuleVersionHistoryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetRuleVersionHistoryResponse",
      ) as GetRuleVersionHistoryResponse;
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
      const body: GetRuleVersionHistoryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetRuleVersionHistoryResponse",
        "",
      ) as GetRuleVersionHistoryResponse;
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
   * @params response Response returned by the server for a request to getSBOM
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSBOM(response: ResponseContext): Promise<GetSBOMResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetSBOMResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetSBOMResponse",
      ) as GetSBOMResponse;
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
      const body: GetSBOMResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetSBOMResponse",
        "",
      ) as GetSBOMResponse;
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
   * @params response Response returned by the server for a request to getSecurityFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityFilter(
    response: ResponseContext,
  ): Promise<SecurityFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityFilterResponse",
      ) as SecurityFilterResponse;
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
      const body: SecurityFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityFilterResponse",
        "",
      ) as SecurityFilterResponse;
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
   * @params response Response returned by the server for a request to getSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringRule(
    response: ResponseContext,
  ): Promise<SecurityMonitoringRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleResponse",
      ) as SecurityMonitoringRuleResponse;
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
      const body: SecurityMonitoringRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleResponse",
        "",
      ) as SecurityMonitoringRuleResponse;
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
   * @params response Response returned by the server for a request to getSecurityMonitoringSignal
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringSignal(
    response: ResponseContext,
  ): Promise<SecurityMonitoringSignalResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSignalResponse",
      ) as SecurityMonitoringSignalResponse;
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
      const body: SecurityMonitoringSignalResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSignalResponse",
        "",
      ) as SecurityMonitoringSignalResponse;
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
   * @params response Response returned by the server for a request to getSecurityMonitoringSuppression
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringSuppression(
    response: ResponseContext,
  ): Promise<SecurityMonitoringSuppressionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSuppressionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSuppressionResponse",
      ) as SecurityMonitoringSuppressionResponse;
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
      const body: SecurityMonitoringSuppressionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSuppressionResponse",
        "",
      ) as SecurityMonitoringSuppressionResponse;
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
   * @params response Response returned by the server for a request to getSignalNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSignalNotificationRule(
    response: ResponseContext,
  ): Promise<NotificationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: NotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRuleResponse",
      ) as NotificationRuleResponse;
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
      const body: NotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRuleResponse",
        "",
      ) as NotificationRuleResponse;
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
   * @params response Response returned by the server for a request to getSignalNotificationRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSignalNotificationRules(
    response: ResponseContext,
  ): Promise<NotificationRulesList> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: NotificationRulesList = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRulesList",
      ) as NotificationRulesList;
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
      const body: NotificationRulesList = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRulesList",
        "",
      ) as NotificationRulesList;
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
   * @params response Response returned by the server for a request to getVulnerabilityNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getVulnerabilityNotificationRule(
    response: ResponseContext,
  ): Promise<NotificationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: NotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRuleResponse",
      ) as NotificationRuleResponse;
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
      const body: NotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRuleResponse",
        "",
      ) as NotificationRuleResponse;
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
   * @params response Response returned by the server for a request to getVulnerabilityNotificationRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getVulnerabilityNotificationRules(
    response: ResponseContext,
  ): Promise<NotificationRulesList> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: NotificationRulesList = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRulesList",
      ) as NotificationRulesList;
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
      const body: NotificationRulesList = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRulesList",
        "",
      ) as NotificationRulesList;
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
   * @params response Response returned by the server for a request to listAssetsSBOMs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAssetsSBOMs(
    response: ResponseContext,
  ): Promise<ListAssetsSBOMsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListAssetsSBOMsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListAssetsSBOMsResponse",
      ) as ListAssetsSBOMsResponse;
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
      const body: ListAssetsSBOMsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListAssetsSBOMsResponse",
        "",
      ) as ListAssetsSBOMsResponse;
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
   * @params response Response returned by the server for a request to listHistoricalJobs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listHistoricalJobs(
    response: ResponseContext,
  ): Promise<ListHistoricalJobsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListHistoricalJobsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListHistoricalJobsResponse",
      ) as ListHistoricalJobsResponse;
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
      const body: ListHistoricalJobsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListHistoricalJobsResponse",
        "",
      ) as ListHistoricalJobsResponse;
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
   * @params response Response returned by the server for a request to listSecurityFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityFilters(
    response: ResponseContext,
  ): Promise<SecurityFiltersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityFiltersResponse",
      ) as SecurityFiltersResponse;
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
      const body: SecurityFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityFiltersResponse",
        "",
      ) as SecurityFiltersResponse;
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
   * @params response Response returned by the server for a request to listSecurityMonitoringRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityMonitoringRules(
    response: ResponseContext,
  ): Promise<SecurityMonitoringListRulesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringListRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringListRulesResponse",
      ) as SecurityMonitoringListRulesResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
      const body: SecurityMonitoringListRulesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringListRulesResponse",
        "",
      ) as SecurityMonitoringListRulesResponse;
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
   * @params response Response returned by the server for a request to listSecurityMonitoringSignals
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityMonitoringSignals(
    response: ResponseContext,
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSignalsListResponse",
      ) as SecurityMonitoringSignalsListResponse;
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
      const body: SecurityMonitoringSignalsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSignalsListResponse",
        "",
      ) as SecurityMonitoringSignalsListResponse;
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
   * @params response Response returned by the server for a request to listSecurityMonitoringSuppressions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityMonitoringSuppressions(
    response: ResponseContext,
  ): Promise<SecurityMonitoringSuppressionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSuppressionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSuppressionsResponse",
      ) as SecurityMonitoringSuppressionsResponse;
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
      const body: SecurityMonitoringSuppressionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSuppressionsResponse",
        "",
      ) as SecurityMonitoringSuppressionsResponse;
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
   * @params response Response returned by the server for a request to listVulnerabilities
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listVulnerabilities(
    response: ResponseContext,
  ): Promise<ListVulnerabilitiesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListVulnerabilitiesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListVulnerabilitiesResponse",
      ) as ListVulnerabilitiesResponse;
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
      const body: ListVulnerabilitiesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListVulnerabilitiesResponse",
        "",
      ) as ListVulnerabilitiesResponse;
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
   * @params response Response returned by the server for a request to listVulnerableAssets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listVulnerableAssets(
    response: ResponseContext,
  ): Promise<ListVulnerableAssetsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListVulnerableAssetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListVulnerableAssetsResponse",
      ) as ListVulnerableAssetsResponse;
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
      const body: ListVulnerableAssetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListVulnerableAssetsResponse",
        "",
      ) as ListVulnerableAssetsResponse;
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
   * @params response Response returned by the server for a request to muteFindings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async muteFindings(
    response: ResponseContext,
  ): Promise<BulkMuteFindingsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: BulkMuteFindingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "BulkMuteFindingsResponse",
      ) as BulkMuteFindingsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422 ||
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
      const body: BulkMuteFindingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "BulkMuteFindingsResponse",
        "",
      ) as BulkMuteFindingsResponse;
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
   * @params response Response returned by the server for a request to patchSignalNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async patchSignalNotificationRule(
    response: ResponseContext,
  ): Promise<NotificationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: NotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRuleResponse",
      ) as NotificationRuleResponse;
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
      const body: NotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRuleResponse",
        "",
      ) as NotificationRuleResponse;
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
   * @params response Response returned by the server for a request to patchVulnerabilityNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async patchVulnerabilityNotificationRule(
    response: ResponseContext,
  ): Promise<NotificationRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: NotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRuleResponse",
      ) as NotificationRuleResponse;
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
      const body: NotificationRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRuleResponse",
        "",
      ) as NotificationRuleResponse;
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
   * @params response Response returned by the server for a request to runHistoricalJob
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async runHistoricalJob(
    response: ResponseContext,
  ): Promise<JobCreateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: JobCreateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "JobCreateResponse",
      ) as JobCreateResponse;
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
      const body: JobCreateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "JobCreateResponse",
        "",
      ) as JobCreateResponse;
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
   * @params response Response returned by the server for a request to searchSecurityMonitoringSignals
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchSecurityMonitoringSignals(
    response: ResponseContext,
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSignalsListResponse",
      ) as SecurityMonitoringSignalsListResponse;
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
      const body: SecurityMonitoringSignalsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSignalsListResponse",
        "",
      ) as SecurityMonitoringSignalsListResponse;
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
   * @params response Response returned by the server for a request to testExistingSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async testExistingSecurityMonitoringRule(
    response: ResponseContext,
  ): Promise<SecurityMonitoringRuleTestResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringRuleTestResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleTestResponse",
      ) as SecurityMonitoringRuleTestResponse;
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
      const body: SecurityMonitoringRuleTestResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleTestResponse",
        "",
      ) as SecurityMonitoringRuleTestResponse;
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
   * @params response Response returned by the server for a request to testSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async testSecurityMonitoringRule(
    response: ResponseContext,
  ): Promise<SecurityMonitoringRuleTestResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringRuleTestResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleTestResponse",
      ) as SecurityMonitoringRuleTestResponse;
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
      const body: SecurityMonitoringRuleTestResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleTestResponse",
        "",
      ) as SecurityMonitoringRuleTestResponse;
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
   * @params response Response returned by the server for a request to updateCustomFramework
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCustomFramework(
    response: ResponseContext,
  ): Promise<UpdateCustomFrameworkResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UpdateCustomFrameworkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateCustomFrameworkResponse",
      ) as UpdateCustomFrameworkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: UpdateCustomFrameworkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateCustomFrameworkResponse",
        "",
      ) as UpdateCustomFrameworkResponse;
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
   * @params response Response returned by the server for a request to updateResourceEvaluationFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateResourceEvaluationFilters(
    response: ResponseContext,
  ): Promise<UpdateResourceEvaluationFiltersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: UpdateResourceEvaluationFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateResourceEvaluationFiltersResponse",
      ) as UpdateResourceEvaluationFiltersResponse;
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
      const body: UpdateResourceEvaluationFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateResourceEvaluationFiltersResponse",
        "",
      ) as UpdateResourceEvaluationFiltersResponse;
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
   * @params response Response returned by the server for a request to updateSecurityFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityFilter(
    response: ResponseContext,
  ): Promise<SecurityFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityFilterResponse",
      ) as SecurityFilterResponse;
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
      const body: SecurityFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityFilterResponse",
        "",
      ) as SecurityFilterResponse;
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
   * @params response Response returned by the server for a request to updateSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityMonitoringRule(
    response: ResponseContext,
  ): Promise<SecurityMonitoringRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleResponse",
      ) as SecurityMonitoringRuleResponse;
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
      const body: SecurityMonitoringRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleResponse",
        "",
      ) as SecurityMonitoringRuleResponse;
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
   * @params response Response returned by the server for a request to updateSecurityMonitoringSuppression
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityMonitoringSuppression(
    response: ResponseContext,
  ): Promise<SecurityMonitoringSuppressionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSuppressionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSuppressionResponse",
      ) as SecurityMonitoringSuppressionResponse;
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
      const body: SecurityMonitoringSuppressionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringSuppressionResponse",
        "",
      ) as SecurityMonitoringSuppressionResponse;
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
   * @params response Response returned by the server for a request to validateSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validateSecurityMonitoringRule(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface SecurityMonitoringApiCancelHistoricalJobRequest {
  /**
   * The ID of the job.
   * @type string
   */
  jobId: string;
}

export interface SecurityMonitoringApiConvertExistingSecurityMonitoringRuleRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
}

export interface SecurityMonitoringApiConvertJobResultToSignalRequest {
  /**
   * @type ConvertJobResultsToSignalsRequest
   */
  body: ConvertJobResultsToSignalsRequest;
}

export interface SecurityMonitoringApiConvertSecurityMonitoringRuleFromJSONToTerraformRequest {
  /**
   * @type SecurityMonitoringRuleConvertPayload
   */
  body: SecurityMonitoringRuleConvertPayload;
}

export interface SecurityMonitoringApiCreateCustomFrameworkRequest {
  /**
   * @type CreateCustomFrameworkRequest
   */
  body: CreateCustomFrameworkRequest;
}

export interface SecurityMonitoringApiCreateSecurityFilterRequest {
  /**
   * The definition of the new security filter.
   * @type SecurityFilterCreateRequest
   */
  body: SecurityFilterCreateRequest;
}

export interface SecurityMonitoringApiCreateSecurityMonitoringRuleRequest {
  /**
   * @type SecurityMonitoringRuleCreatePayload
   */
  body: SecurityMonitoringRuleCreatePayload;
}

export interface SecurityMonitoringApiCreateSecurityMonitoringSuppressionRequest {
  /**
   * The definition of the new suppression rule.
   * @type SecurityMonitoringSuppressionCreateRequest
   */
  body: SecurityMonitoringSuppressionCreateRequest;
}

export interface SecurityMonitoringApiCreateSignalNotificationRuleRequest {
  /**
   * The body of the create notification rule request is composed of the rule type and the rule attributes:
   * the rule name, the selectors, the notification targets, and the rule enabled status.
   * @type CreateNotificationRuleParameters
   */
  body: CreateNotificationRuleParameters;
}

export interface SecurityMonitoringApiCreateVulnerabilityNotificationRuleRequest {
  /**
   * The body of the create notification rule request is composed of the rule type and the rule attributes:
   * the rule name, the selectors, the notification targets, and the rule enabled status.
   * @type CreateNotificationRuleParameters
   */
  body: CreateNotificationRuleParameters;
}

export interface SecurityMonitoringApiDeleteCustomFrameworkRequest {
  /**
   * The framework handle
   * @type string
   */
  handle: string;
  /**
   * The framework version
   * @type string
   */
  version: string;
}

export interface SecurityMonitoringApiDeleteHistoricalJobRequest {
  /**
   * The ID of the job.
   * @type string
   */
  jobId: string;
}

export interface SecurityMonitoringApiDeleteSecurityFilterRequest {
  /**
   * The ID of the security filter.
   * @type string
   */
  securityFilterId: string;
}

export interface SecurityMonitoringApiDeleteSecurityMonitoringRuleRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
}

export interface SecurityMonitoringApiDeleteSecurityMonitoringSuppressionRequest {
  /**
   * The ID of the suppression rule
   * @type string
   */
  suppressionId: string;
}

export interface SecurityMonitoringApiDeleteSignalNotificationRuleRequest {
  /**
   * ID of the notification rule.
   * @type string
   */
  id: string;
}

export interface SecurityMonitoringApiDeleteVulnerabilityNotificationRuleRequest {
  /**
   * ID of the notification rule.
   * @type string
   */
  id: string;
}

export interface SecurityMonitoringApiEditSecurityMonitoringSignalAssigneeRequest {
  /**
   * The ID of the signal.
   * @type string
   */
  signalId: string;
  /**
   * Attributes describing the signal update.
   * @type SecurityMonitoringSignalAssigneeUpdateRequest
   */
  body: SecurityMonitoringSignalAssigneeUpdateRequest;
}

export interface SecurityMonitoringApiEditSecurityMonitoringSignalIncidentsRequest {
  /**
   * The ID of the signal.
   * @type string
   */
  signalId: string;
  /**
   * Attributes describing the signal update.
   * @type SecurityMonitoringSignalIncidentsUpdateRequest
   */
  body: SecurityMonitoringSignalIncidentsUpdateRequest;
}

export interface SecurityMonitoringApiEditSecurityMonitoringSignalStateRequest {
  /**
   * The ID of the signal.
   * @type string
   */
  signalId: string;
  /**
   * Attributes describing the signal update.
   * @type SecurityMonitoringSignalStateUpdateRequest
   */
  body: SecurityMonitoringSignalStateUpdateRequest;
}

export interface SecurityMonitoringApiGetCustomFrameworkRequest {
  /**
   * The framework handle
   * @type string
   */
  handle: string;
  /**
   * The framework version
   * @type string
   */
  version: string;
}

export interface SecurityMonitoringApiGetFindingRequest {
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

export interface SecurityMonitoringApiGetHistoricalJobRequest {
  /**
   * The ID of the job.
   * @type string
   */
  jobId: string;
}

export interface SecurityMonitoringApiGetResourceEvaluationFiltersRequest {
  /**
   * Filter resource filters by cloud provider (e.g. aws, gcp, azure).
   * @type string
   */
  cloudProvider?: string;
  /**
   * Filter resource filters by cloud provider account ID. This parameter is only valid when provider is specified.
   * @type string
   */
  accountId?: string;
  /**
   * Skip cache for resource filters.
   * @type boolean
   */
  skipCache?: boolean;
}

export interface SecurityMonitoringApiGetRuleVersionHistoryRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
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

export interface SecurityMonitoringApiGetSBOMRequest {
  /**
   * The type of the asset for the SBOM request.
   * @type AssetType
   */
  assetType: AssetType;
  /**
   * The name of the asset for the SBOM request.
   * @type string
   */
  filterAssetName: string;
  /**
   * The container image `repo_digest` for the SBOM request. When the requested asset type is 'Image', this filter is mandatory.
   * @type string
   */
  filterRepoDigest?: string;
}

export interface SecurityMonitoringApiGetSecurityFilterRequest {
  /**
   * The ID of the security filter.
   * @type string
   */
  securityFilterId: string;
}

export interface SecurityMonitoringApiGetSecurityMonitoringRuleRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
}

export interface SecurityMonitoringApiGetSecurityMonitoringSignalRequest {
  /**
   * The ID of the signal.
   * @type string
   */
  signalId: string;
}

export interface SecurityMonitoringApiGetSecurityMonitoringSuppressionRequest {
  /**
   * The ID of the suppression rule
   * @type string
   */
  suppressionId: string;
}

export interface SecurityMonitoringApiGetSignalNotificationRuleRequest {
  /**
   * ID of the notification rule.
   * @type string
   */
  id: string;
}

export interface SecurityMonitoringApiGetVulnerabilityNotificationRuleRequest {
  /**
   * ID of the notification rule.
   * @type string
   */
  id: string;
}

export interface SecurityMonitoringApiListAssetsSBOMsRequest {
  /**
   * Its value must come from the `links` section of the response of the first request. Do not manually edit it.
   * @type string
   */
  pageToken?: string;
  /**
   * The page number to be retrieved. It should be equal to or greater than 1.
   * @type number
   */
  pageNumber?: number;
  /**
   * The type of the assets for the SBOM request.
   * @type AssetType
   */
  filterAssetType?: AssetType;
  /**
   * The name of the asset for the SBOM request.
   * @type string
   */
  filterAssetName?: string;
  /**
   * The name of the component that is a dependency of an asset.
   * @type string
   */
  filterPackageName?: string;
  /**
   * The version of the component that is a dependency of an asset.
   * @type string
   */
  filterPackageVersion?: string;
  /**
   * The software license name of the component that is a dependency of an asset.
   * @type string
   */
  filterLicenseName?: string;
  /**
   * The software license type of the component that is a dependency of an asset.
   * @type SBOMComponentLicenseType
   */
  filterLicenseType?: SBOMComponentLicenseType;
}

export interface SecurityMonitoringApiListFindingsRequest {
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

export interface SecurityMonitoringApiListHistoricalJobsRequest {
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
   * The order of the jobs in results.
   * @type string
   */
  sort?: string;
  /**
   * Query used to filter items from the fetched list.
   * @type string
   */
  filterQuery?: string;
}

export interface SecurityMonitoringApiListSecurityMonitoringRulesRequest {
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

export interface SecurityMonitoringApiListSecurityMonitoringSignalsRequest {
  /**
   * The search query for security signals.
   * @type string
   */
  filterQuery?: string;
  /**
   * The minimum timestamp for requested security signals.
   * @type Date
   */
  filterFrom?: Date;
  /**
   * The maximum timestamp for requested security signals.
   * @type Date
   */
  filterTo?: Date;
  /**
   * The order of the security signals in results.
   * @type SecurityMonitoringSignalsSort
   */
  sort?: SecurityMonitoringSignalsSort;
  /**
   * A list of results using the cursor provided in the previous query.
   * @type string
   */
  pageCursor?: string;
  /**
   * The maximum number of security signals in the response.
   * @type number
   */
  pageLimit?: number;
}

export interface SecurityMonitoringApiListVulnerabilitiesRequest {
  /**
   * Its value must come from the `links` section of the response of the first request. Do not manually edit it.
   * @type string
   */
  pageToken?: string;
  /**
   * The page number to be retrieved. It should be equal or greater than `1`
   * @type number
   */
  pageNumber?: number;
  /**
   * Filter by vulnerability type.
   * @type VulnerabilityType
   */
  filterType?: VulnerabilityType;
  /**
   * Filter by vulnerability base (i.e. from the original advisory) severity score.
   * @type number
   */
  filterCvssBaseScoreOp?: number;
  /**
   * Filter by vulnerability base severity.
   * @type VulnerabilitySeverity
   */
  filterCvssBaseSeverity?: VulnerabilitySeverity;
  /**
   * Filter by vulnerability base CVSS vector.
   * @type string
   */
  filterCvssBaseVector?: string;
  /**
   * Filter by vulnerability Datadog severity score.
   * @type number
   */
  filterCvssDatadogScoreOp?: number;
  /**
   * Filter by vulnerability Datadog severity.
   * @type VulnerabilitySeverity
   */
  filterCvssDatadogSeverity?: VulnerabilitySeverity;
  /**
   * Filter by vulnerability Datadog CVSS vector.
   * @type string
   */
  filterCvssDatadogVector?: string;
  /**
   * Filter by the status of the vulnerability.
   * @type VulnerabilityStatus
   */
  filterStatus?: VulnerabilityStatus;
  /**
   * Filter by the tool of the vulnerability.
   * @type VulnerabilityTool
   */
  filterTool?: VulnerabilityTool;
  /**
   * Filter by library name.
   * @type string
   */
  filterLibraryName?: string;
  /**
   * Filter by library version.
   * @type string
   */
  filterLibraryVersion?: string;
  /**
   * Filter by advisory ID.
   * @type string
   */
  filterAdvisoryId?: string;
  /**
   * Filter by exploitation probability.
   * @type boolean
   */
  filterRisksExploitationProbability?: boolean;
  /**
   * Filter by POC exploit availability.
   * @type boolean
   */
  filterRisksPocExploitAvailable?: boolean;
  /**
   * Filter by public exploit availability.
   * @type boolean
   */
  filterRisksExploitAvailable?: boolean;
  /**
   * Filter by vulnerability [EPSS](https://www.first.org/epss/) severity score.
   * @type number
   */
  filterRisksEpssScoreOp?: number;
  /**
   * Filter by vulnerability [EPSS](https://www.first.org/epss/) severity.
   * @type VulnerabilitySeverity
   */
  filterRisksEpssSeverity?: VulnerabilitySeverity;
  /**
   * Filter by language.
   * @type string
   */
  filterLanguage?: string;
  /**
   * Filter by ecosystem.
   * @type VulnerabilityEcosystem
   */
  filterEcosystem?: VulnerabilityEcosystem;
  /**
   * Filter by vulnerability location.
   * @type string
   */
  filterCodeLocationLocation?: string;
  /**
   * Filter by vulnerability file path.
   * @type string
   */
  filterCodeLocationFilePath?: string;
  /**
   * Filter by method.
   * @type string
   */
  filterCodeLocationMethod?: string;
  /**
   * Filter by fix availability.
   * @type boolean
   */
  filterFixAvailable?: boolean;
  /**
   * Filter by vulnerability `repo_digest` (when the vulnerability is related to `Image` asset).
   * @type string
   */
  filterRepoDigests?: string;
  /**
   * Filter by origin.
   * @type string
   */
  filterOrigin?: string;
  /**
   * Filter by asset name.
   * @type string
   */
  filterAssetName?: string;
  /**
   * Filter by asset type.
   * @type AssetType
   */
  filterAssetType?: AssetType;
  /**
   * Filter by the first version of the asset this vulnerability has been detected on.
   * @type string
   */
  filterAssetVersionFirst?: string;
  /**
   * Filter by the last version of the asset this vulnerability has been detected on.
   * @type string
   */
  filterAssetVersionLast?: string;
  /**
   * Filter by the repository url associated to the asset.
   * @type string
   */
  filterAssetRepositoryUrl?: string;
  /**
   * Filter whether the asset is in production or not.
   * @type boolean
   */
  filterAssetRisksInProduction?: boolean;
  /**
   * Filter whether the asset is under attack or not.
   * @type boolean
   */
  filterAssetRisksUnderAttack?: boolean;
  /**
   * Filter whether the asset is publicly accessible or not.
   * @type boolean
   */
  filterAssetRisksIsPubliclyAccessible?: boolean;
  /**
   * Filter whether the asset is publicly accessible or not.
   * @type boolean
   */
  filterAssetRisksHasPrivilegedAccess?: boolean;
  /**
   * Filter whether the asset  has access to sensitive data or not.
   * @type boolean
   */
  filterAssetRisksHasAccessToSensitiveData?: boolean;
  /**
   * Filter by asset environments.
   * @type string
   */
  filterAssetEnvironments?: string;
  /**
   * Filter by asset teams.
   * @type string
   */
  filterAssetTeams?: string;
  /**
   * Filter by asset architecture.
   * @type string
   */
  filterAssetArch?: string;
  /**
   * Filter by asset operating system name.
   * @type string
   */
  filterAssetOperatingSystemName?: string;
  /**
   * Filter by asset operating system version.
   * @type string
   */
  filterAssetOperatingSystemVersion?: string;
}

export interface SecurityMonitoringApiListVulnerableAssetsRequest {
  /**
   * Its value must come from the `links` section of the response of the first request. Do not manually edit it.
   * @type string
   */
  pageToken?: string;
  /**
   * The page number to be retrieved. It should be equal or greater than `1`
   * @type number
   */
  pageNumber?: number;
  /**
   * Filter by name.
   * @type string
   */
  filterName?: string;
  /**
   * Filter by type.
   * @type AssetType
   */
  filterType?: AssetType;
  /**
   * Filter by the first version of the asset since it has been vulnerable.
   * @type string
   */
  filterVersionFirst?: string;
  /**
   * Filter by the last detected version of the asset.
   * @type string
   */
  filterVersionLast?: string;
  /**
   * Filter by the repository url associated to the asset.
   * @type string
   */
  filterRepositoryUrl?: string;
  /**
   * Filter whether the asset is in production or not.
   * @type boolean
   */
  filterRisksInProduction?: boolean;
  /**
   * Filter whether the asset (Service) is under attack or not.
   * @type boolean
   */
  filterRisksUnderAttack?: boolean;
  /**
   * Filter whether the asset (Host) is publicly accessible or not.
   * @type boolean
   */
  filterRisksIsPubliclyAccessible?: boolean;
  /**
   * Filter whether the asset (Host) has privileged access or not.
   * @type boolean
   */
  filterRisksHasPrivilegedAccess?: boolean;
  /**
   * Filter whether the asset (Host)  has access to sensitive data or not.
   * @type boolean
   */
  filterRisksHasAccessToSensitiveData?: boolean;
  /**
   * Filter by environment.
   * @type string
   */
  filterEnvironments?: string;
  /**
   * Filter by teams.
   * @type string
   */
  filterTeams?: string;
  /**
   * Filter by architecture.
   * @type string
   */
  filterArch?: string;
  /**
   * Filter by operating system name.
   * @type string
   */
  filterOperatingSystemName?: string;
  /**
   * Filter by operating system version.
   * @type string
   */
  filterOperatingSystemVersion?: string;
}

export interface SecurityMonitoringApiMuteFindingsRequest {
  /**
   * ### Attributes
   *
   * All findings are updated with the same attributes. The request body must include at least two attributes: `muted` and `reason`.
   * The allowed reasons depend on whether the finding is being muted or unmuted:
   *   - To mute a finding: `PENDING_FIX`, `FALSE_POSITIVE`, `ACCEPTED_RISK`, `OTHER`.
   *   - To unmute a finding : `NO_PENDING_FIX`, `HUMAN_ERROR`, `NO_LONGER_ACCEPTED_RISK`, `OTHER`.
   *
   * ### Meta
   *
   * The request body must include a list of the finding IDs to be updated.
   * @type BulkMuteFindingsRequest
   */
  body: BulkMuteFindingsRequest;
}

export interface SecurityMonitoringApiPatchSignalNotificationRuleRequest {
  /**
   * ID of the notification rule.
   * @type string
   */
  id: string;
  /**
   * @type PatchNotificationRuleParameters
   */
  body: PatchNotificationRuleParameters;
}

export interface SecurityMonitoringApiPatchVulnerabilityNotificationRuleRequest {
  /**
   * ID of the notification rule.
   * @type string
   */
  id: string;
  /**
   * @type PatchNotificationRuleParameters
   */
  body: PatchNotificationRuleParameters;
}

export interface SecurityMonitoringApiRunHistoricalJobRequest {
  /**
   * @type RunHistoricalJobRequest
   */
  body: RunHistoricalJobRequest;
}

export interface SecurityMonitoringApiSearchSecurityMonitoringSignalsRequest {
  /**
   * @type SecurityMonitoringSignalListRequest
   */
  body?: SecurityMonitoringSignalListRequest;
}

export interface SecurityMonitoringApiTestExistingSecurityMonitoringRuleRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
  /**
   * @type SecurityMonitoringRuleTestRequest
   */
  body: SecurityMonitoringRuleTestRequest;
}

export interface SecurityMonitoringApiTestSecurityMonitoringRuleRequest {
  /**
   * @type SecurityMonitoringRuleTestRequest
   */
  body: SecurityMonitoringRuleTestRequest;
}

export interface SecurityMonitoringApiUpdateCustomFrameworkRequest {
  /**
   * The framework handle
   * @type string
   */
  handle: string;
  /**
   * The framework version
   * @type string
   */
  version: string;
  /**
   * @type UpdateCustomFrameworkRequest
   */
  body: UpdateCustomFrameworkRequest;
}

export interface SecurityMonitoringApiUpdateResourceEvaluationFiltersRequest {
  /**
   * @type UpdateResourceEvaluationFiltersRequest
   */
  body: UpdateResourceEvaluationFiltersRequest;
}

export interface SecurityMonitoringApiUpdateSecurityFilterRequest {
  /**
   * The ID of the security filter.
   * @type string
   */
  securityFilterId: string;
  /**
   * New definition of the security filter.
   * @type SecurityFilterUpdateRequest
   */
  body: SecurityFilterUpdateRequest;
}

export interface SecurityMonitoringApiUpdateSecurityMonitoringRuleRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
  /**
   * @type SecurityMonitoringRuleUpdatePayload
   */
  body: SecurityMonitoringRuleUpdatePayload;
}

export interface SecurityMonitoringApiUpdateSecurityMonitoringSuppressionRequest {
  /**
   * The ID of the suppression rule
   * @type string
   */
  suppressionId: string;
  /**
   * New definition of the suppression rule. Supports partial updates.
   * @type SecurityMonitoringSuppressionUpdateRequest
   */
  body: SecurityMonitoringSuppressionUpdateRequest;
}

export interface SecurityMonitoringApiValidateSecurityMonitoringRuleRequest {
  /**
   * @type SecurityMonitoringRuleValidatePayload
   */
  body: SecurityMonitoringRuleValidatePayload;
}

export class SecurityMonitoringApi {
  private requestFactory: SecurityMonitoringApiRequestFactory;
  private responseProcessor: SecurityMonitoringApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: SecurityMonitoringApiRequestFactory,
    responseProcessor?: SecurityMonitoringApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new SecurityMonitoringApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new SecurityMonitoringApiResponseProcessor();
  }

  /**
   * Cancel a historical job.
   * @param param The request object
   */
  public cancelHistoricalJob(
    param: SecurityMonitoringApiCancelHistoricalJobRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.cancelHistoricalJob(
      param.jobId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.cancelHistoricalJob(responseContext);
        });
    });
  }

  /**
   * Convert an existing rule from JSON to Terraform for datadog provider
   * resource datadog_security_monitoring_rule.
   * @param param The request object
   */
  public convertExistingSecurityMonitoringRule(
    param: SecurityMonitoringApiConvertExistingSecurityMonitoringRuleRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringRuleConvertResponse> {
    const requestContextPromise =
      this.requestFactory.convertExistingSecurityMonitoringRule(
        param.ruleId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.convertExistingSecurityMonitoringRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Convert a job result to a signal.
   * @param param The request object
   */
  public convertJobResultToSignal(
    param: SecurityMonitoringApiConvertJobResultToSignalRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.convertJobResultToSignal(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.convertJobResultToSignal(
            responseContext,
          );
        });
    });
  }

  /**
   * Convert a rule that doesn't (yet) exist from JSON to Terraform for datadog provider
   * resource datadog_security_monitoring_rule.
   * @param param The request object
   */
  public convertSecurityMonitoringRuleFromJSONToTerraform(
    param: SecurityMonitoringApiConvertSecurityMonitoringRuleFromJSONToTerraformRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringRuleConvertResponse> {
    const requestContextPromise =
      this.requestFactory.convertSecurityMonitoringRuleFromJSONToTerraform(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.convertSecurityMonitoringRuleFromJSONToTerraform(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a custom framework.
   * @param param The request object
   */
  public createCustomFramework(
    param: SecurityMonitoringApiCreateCustomFrameworkRequest,
    options?: Configuration,
  ): Promise<CreateCustomFrameworkResponse> {
    const requestContextPromise = this.requestFactory.createCustomFramework(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCustomFramework(responseContext);
        });
    });
  }

  /**
   * Create a security filter.
   *
   * See the [security filter guide](https://docs.datadoghq.com/security_platform/guide/how-to-setup-security-filters-using-security-monitoring-api/)
   * for more examples.
   * @param param The request object
   */
  public createSecurityFilter(
    param: SecurityMonitoringApiCreateSecurityFilterRequest,
    options?: Configuration,
  ): Promise<SecurityFilterResponse> {
    const requestContextPromise = this.requestFactory.createSecurityFilter(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityFilter(responseContext);
        });
    });
  }

  /**
   * Create a detection rule.
   * @param param The request object
   */
  public createSecurityMonitoringRule(
    param: SecurityMonitoringApiCreateSecurityMonitoringRuleRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createSecurityMonitoringRule(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityMonitoringRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a new suppression rule.
   * @param param The request object
   */
  public createSecurityMonitoringSuppression(
    param: SecurityMonitoringApiCreateSecurityMonitoringSuppressionRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringSuppressionResponse> {
    const requestContextPromise =
      this.requestFactory.createSecurityMonitoringSuppression(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityMonitoringSuppression(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a new notification rule for security signals and return the created rule.
   * @param param The request object
   */
  public createSignalNotificationRule(
    param: SecurityMonitoringApiCreateSignalNotificationRuleRequest,
    options?: Configuration,
  ): Promise<NotificationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createSignalNotificationRule(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSignalNotificationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a new notification rule for security vulnerabilities and return the created rule.
   * @param param The request object
   */
  public createVulnerabilityNotificationRule(
    param: SecurityMonitoringApiCreateVulnerabilityNotificationRuleRequest,
    options?: Configuration,
  ): Promise<NotificationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createVulnerabilityNotificationRule(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createVulnerabilityNotificationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a custom framework.
   * @param param The request object
   */
  public deleteCustomFramework(
    param: SecurityMonitoringApiDeleteCustomFrameworkRequest,
    options?: Configuration,
  ): Promise<DeleteCustomFrameworkResponse> {
    const requestContextPromise = this.requestFactory.deleteCustomFramework(
      param.handle,
      param.version,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCustomFramework(responseContext);
        });
    });
  }

  /**
   * Delete an existing job.
   * @param param The request object
   */
  public deleteHistoricalJob(
    param: SecurityMonitoringApiDeleteHistoricalJobRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteHistoricalJob(
      param.jobId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteHistoricalJob(responseContext);
        });
    });
  }

  /**
   * Delete a specific security filter.
   * @param param The request object
   */
  public deleteSecurityFilter(
    param: SecurityMonitoringApiDeleteSecurityFilterRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteSecurityFilter(
      param.securityFilterId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityFilter(responseContext);
        });
    });
  }

  /**
   * Delete an existing rule. Default rules cannot be deleted.
   * @param param The request object
   */
  public deleteSecurityMonitoringRule(
    param: SecurityMonitoringApiDeleteSecurityMonitoringRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSecurityMonitoringRule(param.ruleId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityMonitoringRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a specific suppression rule.
   * @param param The request object
   */
  public deleteSecurityMonitoringSuppression(
    param: SecurityMonitoringApiDeleteSecurityMonitoringSuppressionRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSecurityMonitoringSuppression(
        param.suppressionId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityMonitoringSuppression(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a notification rule for security signals.
   * @param param The request object
   */
  public deleteSignalNotificationRule(
    param: SecurityMonitoringApiDeleteSignalNotificationRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSignalNotificationRule(param.id, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSignalNotificationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a notification rule for security vulnerabilities.
   * @param param The request object
   */
  public deleteVulnerabilityNotificationRule(
    param: SecurityMonitoringApiDeleteVulnerabilityNotificationRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteVulnerabilityNotificationRule(
        param.id,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteVulnerabilityNotificationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Modify the triage assignee of a security signal.
   * @param param The request object
   */
  public editSecurityMonitoringSignalAssignee(
    param: SecurityMonitoringApiEditSecurityMonitoringSignalAssigneeRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.editSecurityMonitoringSignalAssignee(
        param.signalId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.editSecurityMonitoringSignalAssignee(
            responseContext,
          );
        });
    });
  }

  /**
   * Change the related incidents for a security signal.
   * @param param The request object
   */
  public editSecurityMonitoringSignalIncidents(
    param: SecurityMonitoringApiEditSecurityMonitoringSignalIncidentsRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.editSecurityMonitoringSignalIncidents(
        param.signalId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.editSecurityMonitoringSignalIncidents(
            responseContext,
          );
        });
    });
  }

  /**
   * Change the triage state of a security signal.
   * @param param The request object
   */
  public editSecurityMonitoringSignalState(
    param: SecurityMonitoringApiEditSecurityMonitoringSignalStateRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.editSecurityMonitoringSignalState(
        param.signalId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.editSecurityMonitoringSignalState(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a custom framework.
   * @param param The request object
   */
  public getCustomFramework(
    param: SecurityMonitoringApiGetCustomFrameworkRequest,
    options?: Configuration,
  ): Promise<GetCustomFrameworkResponse> {
    const requestContextPromise = this.requestFactory.getCustomFramework(
      param.handle,
      param.version,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCustomFramework(responseContext);
        });
    });
  }

  /**
   * Returns a single finding with message and resource configuration.
   * @param param The request object
   */
  public getFinding(
    param: SecurityMonitoringApiGetFindingRequest,
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
   * Get a job's details.
   * @param param The request object
   */
  public getHistoricalJob(
    param: SecurityMonitoringApiGetHistoricalJobRequest,
    options?: Configuration,
  ): Promise<HistoricalJobResponse> {
    const requestContextPromise = this.requestFactory.getHistoricalJob(
      param.jobId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getHistoricalJob(responseContext);
        });
    });
  }

  /**
   * List resource filters.
   * @param param The request object
   */
  public getResourceEvaluationFilters(
    param: SecurityMonitoringApiGetResourceEvaluationFiltersRequest = {},
    options?: Configuration,
  ): Promise<GetResourceEvaluationFiltersResponse> {
    const requestContextPromise =
      this.requestFactory.getResourceEvaluationFilters(
        param.cloudProvider,
        param.accountId,
        param.skipCache,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getResourceEvaluationFilters(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a rule's version history.
   * @param param The request object
   */
  public getRuleVersionHistory(
    param: SecurityMonitoringApiGetRuleVersionHistoryRequest,
    options?: Configuration,
  ): Promise<GetRuleVersionHistoryResponse> {
    const requestContextPromise = this.requestFactory.getRuleVersionHistory(
      param.ruleId,
      param.pageSize,
      param.pageNumber,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRuleVersionHistory(responseContext);
        });
    });
  }

  /**
   * Get a single SBOM related to an asset by its type and name.
   * @param param The request object
   */
  public getSBOM(
    param: SecurityMonitoringApiGetSBOMRequest,
    options?: Configuration,
  ): Promise<GetSBOMResponse> {
    const requestContextPromise = this.requestFactory.getSBOM(
      param.assetType,
      param.filterAssetName,
      param.filterRepoDigest,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSBOM(responseContext);
        });
    });
  }

  /**
   * Get the details of a specific security filter.
   *
   * See the [security filter guide](https://docs.datadoghq.com/security_platform/guide/how-to-setup-security-filters-using-security-monitoring-api/)
   * for more examples.
   * @param param The request object
   */
  public getSecurityFilter(
    param: SecurityMonitoringApiGetSecurityFilterRequest,
    options?: Configuration,
  ): Promise<SecurityFilterResponse> {
    const requestContextPromise = this.requestFactory.getSecurityFilter(
      param.securityFilterId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityFilter(responseContext);
        });
    });
  }

  /**
   * Get a rule's details.
   * @param param The request object
   */
  public getSecurityMonitoringRule(
    param: SecurityMonitoringApiGetSecurityMonitoringRuleRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringRuleResponse> {
    const requestContextPromise = this.requestFactory.getSecurityMonitoringRule(
      param.ruleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a signal's details.
   * @param param The request object
   */
  public getSecurityMonitoringSignal(
    param: SecurityMonitoringApiGetSecurityMonitoringSignalRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringSignalResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityMonitoringSignal(param.signalId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringSignal(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the details of a specific suppression rule.
   * @param param The request object
   */
  public getSecurityMonitoringSuppression(
    param: SecurityMonitoringApiGetSecurityMonitoringSuppressionRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringSuppressionResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityMonitoringSuppression(
        param.suppressionId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringSuppression(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the details of a notification rule for security signals.
   * @param param The request object
   */
  public getSignalNotificationRule(
    param: SecurityMonitoringApiGetSignalNotificationRuleRequest,
    options?: Configuration,
  ): Promise<NotificationRuleResponse> {
    const requestContextPromise = this.requestFactory.getSignalNotificationRule(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSignalNotificationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Returns the list of notification rules for security signals.
   * @param param The request object
   */
  public getSignalNotificationRules(
    options?: Configuration,
  ): Promise<NotificationRulesList> {
    const requestContextPromise =
      this.requestFactory.getSignalNotificationRules(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSignalNotificationRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the details of a notification rule for security vulnerabilities.
   * @param param The request object
   */
  public getVulnerabilityNotificationRule(
    param: SecurityMonitoringApiGetVulnerabilityNotificationRuleRequest,
    options?: Configuration,
  ): Promise<NotificationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.getVulnerabilityNotificationRule(param.id, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getVulnerabilityNotificationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Returns the list of notification rules for security vulnerabilities.
   * @param param The request object
   */
  public getVulnerabilityNotificationRules(
    options?: Configuration,
  ): Promise<NotificationRulesList> {
    const requestContextPromise =
      this.requestFactory.getVulnerabilityNotificationRules(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getVulnerabilityNotificationRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a list of assets SBOMs for an organization.
   *
   * ### Pagination
   *
   * Please review the [Pagination section](#pagination) for the "List Vulnerabilities" endpoint.
   *
   * ### Filtering
   *
   * Please review the [Filtering section](#filtering) for the "List Vulnerabilities" endpoint.
   *
   * ### Metadata
   *
   * Please review the [Metadata section](#metadata) for the "List Vulnerabilities" endpoint.
   * @param param The request object
   */
  public listAssetsSBOMs(
    param: SecurityMonitoringApiListAssetsSBOMsRequest = {},
    options?: Configuration,
  ): Promise<ListAssetsSBOMsResponse> {
    const requestContextPromise = this.requestFactory.listAssetsSBOMs(
      param.pageToken,
      param.pageNumber,
      param.filterAssetType,
      param.filterAssetName,
      param.filterPackageName,
      param.filterPackageVersion,
      param.filterLicenseName,
      param.filterLicenseType,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAssetsSBOMs(responseContext);
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
    param: SecurityMonitoringApiListFindingsRequest = {},
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
    param: SecurityMonitoringApiListFindingsRequest = {},
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
      if (results.length < pageSize) {
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
   * List historical jobs.
   * @param param The request object
   */
  public listHistoricalJobs(
    param: SecurityMonitoringApiListHistoricalJobsRequest = {},
    options?: Configuration,
  ): Promise<ListHistoricalJobsResponse> {
    const requestContextPromise = this.requestFactory.listHistoricalJobs(
      param.pageSize,
      param.pageNumber,
      param.sort,
      param.filterQuery,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listHistoricalJobs(responseContext);
        });
    });
  }

  /**
   * Get the list of configured security filters with their definitions.
   * @param param The request object
   */
  public listSecurityFilters(
    options?: Configuration,
  ): Promise<SecurityFiltersResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityFilters(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityFilters(responseContext);
        });
    });
  }

  /**
   * List rules.
   * @param param The request object
   */
  public listSecurityMonitoringRules(
    param: SecurityMonitoringApiListSecurityMonitoringRulesRequest = {},
    options?: Configuration,
  ): Promise<SecurityMonitoringListRulesResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringRules(
        param.pageSize,
        param.pageNumber,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityMonitoringRules(
            responseContext,
          );
        });
    });
  }

  /**
   * The list endpoint returns security signals that match a search query.
   * Both this endpoint and the POST endpoint can be used interchangeably when listing
   * security signals.
   * @param param The request object
   */
  public listSecurityMonitoringSignals(
    param: SecurityMonitoringApiListSecurityMonitoringSignalsRequest = {},
    options?: Configuration,
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringSignals(
        param.filterQuery,
        param.filterFrom,
        param.filterTo,
        param.sort,
        param.pageCursor,
        param.pageLimit,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityMonitoringSignals(
            responseContext,
          );
        });
    });
  }

  /**
   * Provide a paginated version of listSecurityMonitoringSignals returning a generator with all the items.
   */
  public async *listSecurityMonitoringSignalsWithPagination(
    param: SecurityMonitoringApiListSecurityMonitoringSignalsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<SecurityMonitoringSignal> {
    let pageSize = 10;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext =
        await this.requestFactory.listSecurityMonitoringSignals(
          param.filterQuery,
          param.filterFrom,
          param.filterTo,
          param.sort,
          param.pageCursor,
          param.pageLimit,
          options,
        );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listSecurityMonitoringSignals(
          responseContext,
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
   * Get the list of all suppression rules.
   * @param param The request object
   */
  public listSecurityMonitoringSuppressions(
    options?: Configuration,
  ): Promise<SecurityMonitoringSuppressionsResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringSuppressions(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityMonitoringSuppressions(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a list of vulnerabilities.
   *
   * ### Pagination
   *
   * Pagination is enabled by default in both `vulnerabilities` and `assets`. The size of the page varies depending on the endpoint and cannot be modified. To automate the request of the next page, you can use the links section in the response.
   *
   * This endpoint will return paginated responses. The pages are stored in the links section of the response:
   *
   * ```JSON
   * {
   *   "data": [...],
   *   "meta": {...},
   *   "links": {
   *     "self": "https://.../api/v2/security/vulnerabilities",
   *     "first": "https://.../api/v2/security/vulnerabilities?page[number]=1&page[token]=abc",
   *     "last": "https://.../api/v2/security/vulnerabilities?page[number]=43&page[token]=abc",
   *     "next": "https://.../api/v2/security/vulnerabilities?page[number]=2&page[token]=abc"
   *   }
   * }
   * ```
   *
   *
   * - `links.previous` is empty if the first page is requested.
   * - `links.next` is empty if the last page is requested.
   *
   * #### Token
   *
   * Vulnerabilities can be created, updated or deleted at any point in time.
   *
   * Upon the first request, a token is created to ensure consistency across subsequent paginated requests.
   *
   * A token is valid only for 24 hours.
   *
   * #### First request
   *
   * We consider a request to be the first request when there is no `page[token]` parameter.
   *
   * The response of this first request contains the newly created token in the `links` section.
   *
   * This token can then be used in the subsequent paginated requests.
   *
   * #### Subsequent requests
   *
   * Any request containing valid `page[token]` and `page[number]` parameters will be considered a subsequent request.
   *
   * If the `token` is invalid, a `404` response will be returned.
   *
   * If the page `number` is invalid, a `400` response will be returned.
   *
   * ### Filtering
   *
   * The request can include some filter parameters to filter the data to be retrieved. The format of the filter parameters follows the [JSON:API format](https://jsonapi.org/format/#fetching-filtering): `filter[$prop_name]`, where `prop_name` is the property name in the entity being filtered by.
   *
   * All filters can include multiple values, where data will be filtered with an OR clause: `filter[title]=Title1,Title2` will filter all vulnerabilities where title is equal to `Title1` OR `Title2`.
   *
   * String filters are case sensitive.
   *
   * Boolean filters accept `true` or `false` as values.
   *
   * Number filters must include an operator as a second filter input: `filter[$prop_name][$operator]`. For example, for the vulnerabilities endpoint: `filter[cvss.base.score][lte]=8`.
   *
   * Available operators are: `eq` (==), `lt` (<), `lte` (<=), `gt` (>) and `gte` (>=).
   *
   * ### Metadata
   *
   * Following [JSON:API format](https://jsonapi.org/format/#document-meta), object including non-standard meta-information.
   *
   * This endpoint includes the meta member in the response. For more details on each of the properties included in this section, check the endpoints response tables.
   *
   * ```JSON
   * {
   *   "data": [...],
   *   "meta": {
   *     "total": 1500,
   *     "count": 18732,
   *     "token": "some_token"
   *   },
   *   "links": {...}
   * }
   * ```
   * @param param The request object
   */
  public listVulnerabilities(
    param: SecurityMonitoringApiListVulnerabilitiesRequest = {},
    options?: Configuration,
  ): Promise<ListVulnerabilitiesResponse> {
    const requestContextPromise = this.requestFactory.listVulnerabilities(
      param.pageToken,
      param.pageNumber,
      param.filterType,
      param.filterCvssBaseScoreOp,
      param.filterCvssBaseSeverity,
      param.filterCvssBaseVector,
      param.filterCvssDatadogScoreOp,
      param.filterCvssDatadogSeverity,
      param.filterCvssDatadogVector,
      param.filterStatus,
      param.filterTool,
      param.filterLibraryName,
      param.filterLibraryVersion,
      param.filterAdvisoryId,
      param.filterRisksExploitationProbability,
      param.filterRisksPocExploitAvailable,
      param.filterRisksExploitAvailable,
      param.filterRisksEpssScoreOp,
      param.filterRisksEpssSeverity,
      param.filterLanguage,
      param.filterEcosystem,
      param.filterCodeLocationLocation,
      param.filterCodeLocationFilePath,
      param.filterCodeLocationMethod,
      param.filterFixAvailable,
      param.filterRepoDigests,
      param.filterOrigin,
      param.filterAssetName,
      param.filterAssetType,
      param.filterAssetVersionFirst,
      param.filterAssetVersionLast,
      param.filterAssetRepositoryUrl,
      param.filterAssetRisksInProduction,
      param.filterAssetRisksUnderAttack,
      param.filterAssetRisksIsPubliclyAccessible,
      param.filterAssetRisksHasPrivilegedAccess,
      param.filterAssetRisksHasAccessToSensitiveData,
      param.filterAssetEnvironments,
      param.filterAssetTeams,
      param.filterAssetArch,
      param.filterAssetOperatingSystemName,
      param.filterAssetOperatingSystemVersion,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listVulnerabilities(responseContext);
        });
    });
  }

  /**
   * Get a list of vulnerable assets.
   *
   * ### Pagination
   *
   * Please review the [Pagination section for the "List Vulnerabilities"](#pagination) endpoint.
   *
   * ### Filtering
   *
   * Please review the [Filtering section for the "List Vulnerabilities"](#filtering) endpoint.
   *
   * ### Metadata
   *
   * Please review the [Metadata section for the "List Vulnerabilities"](#metadata) endpoint.
   * @param param The request object
   */
  public listVulnerableAssets(
    param: SecurityMonitoringApiListVulnerableAssetsRequest = {},
    options?: Configuration,
  ): Promise<ListVulnerableAssetsResponse> {
    const requestContextPromise = this.requestFactory.listVulnerableAssets(
      param.pageToken,
      param.pageNumber,
      param.filterName,
      param.filterType,
      param.filterVersionFirst,
      param.filterVersionLast,
      param.filterRepositoryUrl,
      param.filterRisksInProduction,
      param.filterRisksUnderAttack,
      param.filterRisksIsPubliclyAccessible,
      param.filterRisksHasPrivilegedAccess,
      param.filterRisksHasAccessToSensitiveData,
      param.filterEnvironments,
      param.filterTeams,
      param.filterArch,
      param.filterOperatingSystemName,
      param.filterOperatingSystemVersion,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listVulnerableAssets(responseContext);
        });
    });
  }

  /**
   * Mute or unmute findings.
   * @param param The request object
   */
  public muteFindings(
    param: SecurityMonitoringApiMuteFindingsRequest,
    options?: Configuration,
  ): Promise<BulkMuteFindingsResponse> {
    const requestContextPromise = this.requestFactory.muteFindings(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.muteFindings(responseContext);
        });
    });
  }

  /**
   * Partially update the notification rule. All fields are optional; if a field is not provided, it is not updated.
   * @param param The request object
   */
  public patchSignalNotificationRule(
    param: SecurityMonitoringApiPatchSignalNotificationRuleRequest,
    options?: Configuration,
  ): Promise<NotificationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.patchSignalNotificationRule(
        param.id,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.patchSignalNotificationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Partially update the notification rule. All fields are optional; if a field is not provided, it is not updated.
   * @param param The request object
   */
  public patchVulnerabilityNotificationRule(
    param: SecurityMonitoringApiPatchVulnerabilityNotificationRuleRequest,
    options?: Configuration,
  ): Promise<NotificationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.patchVulnerabilityNotificationRule(
        param.id,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.patchVulnerabilityNotificationRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Run a historical job.
   * @param param The request object
   */
  public runHistoricalJob(
    param: SecurityMonitoringApiRunHistoricalJobRequest,
    options?: Configuration,
  ): Promise<JobCreateResponse> {
    const requestContextPromise = this.requestFactory.runHistoricalJob(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.runHistoricalJob(responseContext);
        });
    });
  }

  /**
   * Returns security signals that match a search query.
   * Both this endpoint and the GET endpoint can be used interchangeably for listing
   * security signals.
   * @param param The request object
   */
  public searchSecurityMonitoringSignals(
    param: SecurityMonitoringApiSearchSecurityMonitoringSignalsRequest = {},
    options?: Configuration,
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const requestContextPromise =
      this.requestFactory.searchSecurityMonitoringSignals(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchSecurityMonitoringSignals(
            responseContext,
          );
        });
    });
  }

  /**
   * Provide a paginated version of searchSecurityMonitoringSignals returning a generator with all the items.
   */
  public async *searchSecurityMonitoringSignalsWithPagination(
    param: SecurityMonitoringApiSearchSecurityMonitoringSignalsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<SecurityMonitoringSignal> {
    let pageSize = 10;
    if (param.body === undefined) {
      param.body = new SecurityMonitoringSignalListRequest();
    }
    if (param.body.page === undefined) {
      param.body.page = new SecurityMonitoringSignalListRequestPage();
    }
    if (param.body.page.limit !== undefined) {
      pageSize = param.body.page.limit;
    }
    param.body.page.limit = pageSize;
    while (true) {
      const requestContext =
        await this.requestFactory.searchSecurityMonitoringSignals(
          param.body,
          options,
        );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.searchSecurityMonitoringSignals(
          responseContext,
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

      param.body.page.cursor = cursorMetaPageAfter;
    }
  }

  /**
   * Test an existing rule.
   * @param param The request object
   */
  public testExistingSecurityMonitoringRule(
    param: SecurityMonitoringApiTestExistingSecurityMonitoringRuleRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringRuleTestResponse> {
    const requestContextPromise =
      this.requestFactory.testExistingSecurityMonitoringRule(
        param.ruleId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.testExistingSecurityMonitoringRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Test a rule.
   * @param param The request object
   */
  public testSecurityMonitoringRule(
    param: SecurityMonitoringApiTestSecurityMonitoringRuleRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringRuleTestResponse> {
    const requestContextPromise =
      this.requestFactory.testSecurityMonitoringRule(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.testSecurityMonitoringRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a custom framework.
   * @param param The request object
   */
  public updateCustomFramework(
    param: SecurityMonitoringApiUpdateCustomFrameworkRequest,
    options?: Configuration,
  ): Promise<UpdateCustomFrameworkResponse> {
    const requestContextPromise = this.requestFactory.updateCustomFramework(
      param.handle,
      param.version,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCustomFramework(responseContext);
        });
    });
  }

  /**
   * Update resource filters.
   * @param param The request object
   */
  public updateResourceEvaluationFilters(
    param: SecurityMonitoringApiUpdateResourceEvaluationFiltersRequest,
    options?: Configuration,
  ): Promise<UpdateResourceEvaluationFiltersResponse> {
    const requestContextPromise =
      this.requestFactory.updateResourceEvaluationFilters(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateResourceEvaluationFilters(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a specific security filter.
   * Returns the security filter object when the request is successful.
   * @param param The request object
   */
  public updateSecurityFilter(
    param: SecurityMonitoringApiUpdateSecurityFilterRequest,
    options?: Configuration,
  ): Promise<SecurityFilterResponse> {
    const requestContextPromise = this.requestFactory.updateSecurityFilter(
      param.securityFilterId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityFilter(responseContext);
        });
    });
  }

  /**
   * Update an existing rule. When updating `cases`, `queries` or `options`, the whole field
   * must be included. For example, when modifying a query all queries must be included.
   * Default rules can only be updated to be enabled, to change notifications, or to update
   * the tags (default tags cannot be removed).
   * @param param The request object
   */
  public updateSecurityMonitoringRule(
    param: SecurityMonitoringApiUpdateSecurityMonitoringRuleRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringRuleResponse> {
    const requestContextPromise =
      this.requestFactory.updateSecurityMonitoringRule(
        param.ruleId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityMonitoringRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a specific suppression rule.
   * @param param The request object
   */
  public updateSecurityMonitoringSuppression(
    param: SecurityMonitoringApiUpdateSecurityMonitoringSuppressionRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringSuppressionResponse> {
    const requestContextPromise =
      this.requestFactory.updateSecurityMonitoringSuppression(
        param.suppressionId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityMonitoringSuppression(
            responseContext,
          );
        });
    });
  }

  /**
   * Validate a detection rule.
   * @param param The request object
   */
  public validateSecurityMonitoringRule(
    param: SecurityMonitoringApiValidateSecurityMonitoringRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.validateSecurityMonitoringRule(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validateSecurityMonitoringRule(
            responseContext,
          );
        });
    });
  }
}
