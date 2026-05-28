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
  HttpFile,
} from "../../datadog-api-client-common/http/http";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { AnalysisRequest } from "../models/AnalysisRequest";
import { AnalysisResponse } from "../models/AnalysisResponse";
import { APIErrorResponse } from "../models/APIErrorResponse";
import { AssetType } from "../models/AssetType";
import { AttachCaseRequest } from "../models/AttachCaseRequest";
import { AttachJiraIssueRequest } from "../models/AttachJiraIssueRequest";
import { BulkMuteFindingsRequest } from "../models/BulkMuteFindingsRequest";
import { BulkMuteFindingsResponse } from "../models/BulkMuteFindingsResponse";
import { CloudAssetType } from "../models/CloudAssetType";
import { ConvertJobResultsToSignalsRequest } from "../models/ConvertJobResultsToSignalsRequest";
import { CreateCaseRequestArray } from "../models/CreateCaseRequestArray";
import { CreateCustomFrameworkRequest } from "../models/CreateCustomFrameworkRequest";
import { CreateCustomFrameworkResponse } from "../models/CreateCustomFrameworkResponse";
import { CreateJiraIssueRequestArray } from "../models/CreateJiraIssueRequestArray";
import { CreateNotificationRuleParameters } from "../models/CreateNotificationRuleParameters";
import { DefaultRulesetsPerLanguageResponse } from "../models/DefaultRulesetsPerLanguageResponse";
import { DeleteCustomFrameworkResponse } from "../models/DeleteCustomFrameworkResponse";
import { DetachCaseRequest } from "../models/DetachCaseRequest";
import { EntityContextResponse } from "../models/EntityContextResponse";
import { Finding } from "../models/Finding";
import { FindingCaseResponse } from "../models/FindingCaseResponse";
import { FindingCaseResponseArray } from "../models/FindingCaseResponseArray";
import { FindingEvaluation } from "../models/FindingEvaluation";
import { FindingStatus } from "../models/FindingStatus";
import { FindingVulnerabilityType } from "../models/FindingVulnerabilityType";
import { GetAstRequest } from "../models/GetAstRequest";
import { GetAstResponse } from "../models/GetAstResponse";
import { GetCustomFrameworkResponse } from "../models/GetCustomFrameworkResponse";
import { GetFindingResponse } from "../models/GetFindingResponse";
import { GetIoCIndicatorResponse } from "../models/GetIoCIndicatorResponse";
import { GetMultipleRulesetsRequest } from "../models/GetMultipleRulesetsRequest";
import { GetMultipleRulesetsResponse } from "../models/GetMultipleRulesetsResponse";
import { GetResourceEvaluationFiltersResponse } from "../models/GetResourceEvaluationFiltersResponse";
import { GetRuleVersionHistoryResponse } from "../models/GetRuleVersionHistoryResponse";
import { GetSBOMResponse } from "../models/GetSBOMResponse";
import { GetSuppressionVersionHistoryResponse } from "../models/GetSuppressionVersionHistoryResponse";
import { HistoricalJobResponse } from "../models/HistoricalJobResponse";
import { IoCExplorerListResponse } from "../models/IoCExplorerListResponse";
import { JobCreateResponse } from "../models/JobCreateResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { ListAssetsSBOMsResponse } from "../models/ListAssetsSBOMsResponse";
import { ListFindingsResponse } from "../models/ListFindingsResponse";
import { ListHistoricalJobsResponse } from "../models/ListHistoricalJobsResponse";
import { ListSecurityFindingsResponse } from "../models/ListSecurityFindingsResponse";
import { ListVulnerabilitiesResponse } from "../models/ListVulnerabilitiesResponse";
import { ListVulnerableAssetsResponse } from "../models/ListVulnerableAssetsResponse";
import { MuteFindingsRequest } from "../models/MuteFindingsRequest";
import { MuteFindingsResponse } from "../models/MuteFindingsResponse";
import { NodeTypesResponse } from "../models/NodeTypesResponse";
import { NotificationRuleResponse } from "../models/NotificationRuleResponse";
import { NotificationRulesList } from "../models/NotificationRulesList";
import { PatchNotificationRuleParameters } from "../models/PatchNotificationRuleParameters";
import { RunHistoricalJobRequest } from "../models/RunHistoricalJobRequest";
import { SampleLogGenerationBulkSubscriptionRequest } from "../models/SampleLogGenerationBulkSubscriptionRequest";
import { SampleLogGenerationBulkSubscriptionResponse } from "../models/SampleLogGenerationBulkSubscriptionResponse";
import { SampleLogGenerationSubscriptionCreateRequest } from "../models/SampleLogGenerationSubscriptionCreateRequest";
import { SampleLogGenerationSubscriptionResponse } from "../models/SampleLogGenerationSubscriptionResponse";
import { SampleLogGenerationSubscriptionsResponse } from "../models/SampleLogGenerationSubscriptionsResponse";
import { SampleLogGenerationSubscriptionsStatusFilter } from "../models/SampleLogGenerationSubscriptionsStatusFilter";
import { SastRulesetResponse } from "../models/SastRulesetResponse";
import { SastRulesetsResponse } from "../models/SastRulesetsResponse";
import { SBOMComponentLicenseType } from "../models/SBOMComponentLicenseType";
import { SBOMFormat } from "../models/SBOMFormat";
import { ScannedAssetsMetadata } from "../models/ScannedAssetsMetadata";
import { SecretRuleArray } from "../models/SecretRuleArray";
import { SecurityFilterCreateRequest } from "../models/SecurityFilterCreateRequest";
import { SecurityFilterResponse } from "../models/SecurityFilterResponse";
import { SecurityFiltersResponse } from "../models/SecurityFiltersResponse";
import { SecurityFilterUpdateRequest } from "../models/SecurityFilterUpdateRequest";
import { SecurityFilterVersionsResponse } from "../models/SecurityFilterVersionsResponse";
import { SecurityFindingsData } from "../models/SecurityFindingsData";
import { SecurityFindingsSearchRequest } from "../models/SecurityFindingsSearchRequest";
import { SecurityFindingsSearchRequestData } from "../models/SecurityFindingsSearchRequestData";
import { SecurityFindingsSearchRequestDataAttributes } from "../models/SecurityFindingsSearchRequestDataAttributes";
import { SecurityFindingsSearchRequestPage } from "../models/SecurityFindingsSearchRequestPage";
import { SecurityFindingsSort } from "../models/SecurityFindingsSort";
import { SecurityMonitoringContentPackStatesResponse } from "../models/SecurityMonitoringContentPackStatesResponse";
import { SecurityMonitoringCriticalAssetCreateRequest } from "../models/SecurityMonitoringCriticalAssetCreateRequest";
import { SecurityMonitoringCriticalAssetResponse } from "../models/SecurityMonitoringCriticalAssetResponse";
import { SecurityMonitoringCriticalAssetsResponse } from "../models/SecurityMonitoringCriticalAssetsResponse";
import { SecurityMonitoringCriticalAssetUpdateRequest } from "../models/SecurityMonitoringCriticalAssetUpdateRequest";
import { SecurityMonitoringDatasetCreateRequest } from "../models/SecurityMonitoringDatasetCreateRequest";
import { SecurityMonitoringDatasetCreateResponse } from "../models/SecurityMonitoringDatasetCreateResponse";
import { SecurityMonitoringDatasetDependenciesRequest } from "../models/SecurityMonitoringDatasetDependenciesRequest";
import { SecurityMonitoringDatasetDependenciesResponse } from "../models/SecurityMonitoringDatasetDependenciesResponse";
import { SecurityMonitoringDatasetResponse } from "../models/SecurityMonitoringDatasetResponse";
import { SecurityMonitoringDatasetsListResponse } from "../models/SecurityMonitoringDatasetsListResponse";
import { SecurityMonitoringDatasetUpdateRequest } from "../models/SecurityMonitoringDatasetUpdateRequest";
import { SecurityMonitoringDatasetVersionHistoryResponse } from "../models/SecurityMonitoringDatasetVersionHistoryResponse";
import { SecurityMonitoringIntegrationConfigCreateRequest } from "../models/SecurityMonitoringIntegrationConfigCreateRequest";
import { SecurityMonitoringIntegrationConfigResponse } from "../models/SecurityMonitoringIntegrationConfigResponse";
import { SecurityMonitoringIntegrationConfigsResponse } from "../models/SecurityMonitoringIntegrationConfigsResponse";
import { SecurityMonitoringIntegrationConfigUpdateRequest } from "../models/SecurityMonitoringIntegrationConfigUpdateRequest";
import { SecurityMonitoringIntegrationCredentialsValidateRequest } from "../models/SecurityMonitoringIntegrationCredentialsValidateRequest";
import { SecurityMonitoringIntegrationType } from "../models/SecurityMonitoringIntegrationType";
import { SecurityMonitoringListRulesResponse } from "../models/SecurityMonitoringListRulesResponse";
import { SecurityMonitoringPaginatedSuppressionsResponse } from "../models/SecurityMonitoringPaginatedSuppressionsResponse";
import { SecurityMonitoringRuleBulkDeletePayload } from "../models/SecurityMonitoringRuleBulkDeletePayload";
import { SecurityMonitoringRuleBulkDeleteResponse } from "../models/SecurityMonitoringRuleBulkDeleteResponse";
import { SecurityMonitoringRuleBulkExportPayload } from "../models/SecurityMonitoringRuleBulkExportPayload";
import { SecurityMonitoringRuleConvertPayload } from "../models/SecurityMonitoringRuleConvertPayload";
import { SecurityMonitoringRuleConvertResponse } from "../models/SecurityMonitoringRuleConvertResponse";
import { SecurityMonitoringRuleCreatePayload } from "../models/SecurityMonitoringRuleCreatePayload";
import { SecurityMonitoringRuleResponse } from "../models/SecurityMonitoringRuleResponse";
import { SecurityMonitoringRuleSort } from "../models/SecurityMonitoringRuleSort";
import { SecurityMonitoringRuleTestRequest } from "../models/SecurityMonitoringRuleTestRequest";
import { SecurityMonitoringRuleTestResponse } from "../models/SecurityMonitoringRuleTestResponse";
import { SecurityMonitoringRuleUpdatePayload } from "../models/SecurityMonitoringRuleUpdatePayload";
import { SecurityMonitoringRuleValidatePayload } from "../models/SecurityMonitoringRuleValidatePayload";
import { SecurityMonitoringSignal } from "../models/SecurityMonitoringSignal";
import { SecurityMonitoringSignalAssigneeUpdateRequest } from "../models/SecurityMonitoringSignalAssigneeUpdateRequest";
import { SecurityMonitoringSignalIncidentsUpdateRequest } from "../models/SecurityMonitoringSignalIncidentsUpdateRequest";
import { SecurityMonitoringSignalListRequest } from "../models/SecurityMonitoringSignalListRequest";
import { SecurityMonitoringSignalListRequestPage } from "../models/SecurityMonitoringSignalListRequestPage";
import { SecurityMonitoringSignalResponse } from "../models/SecurityMonitoringSignalResponse";
import { SecurityMonitoringSignalsBulkAssigneeUpdateRequest } from "../models/SecurityMonitoringSignalsBulkAssigneeUpdateRequest";
import { SecurityMonitoringSignalsBulkStateUpdateRequest } from "../models/SecurityMonitoringSignalsBulkStateUpdateRequest";
import { SecurityMonitoringSignalsBulkTriageUpdateResponse } from "../models/SecurityMonitoringSignalsBulkTriageUpdateResponse";
import { SecurityMonitoringSignalsBulkUpdateRequest } from "../models/SecurityMonitoringSignalsBulkUpdateRequest";
import { SecurityMonitoringSignalsListResponse } from "../models/SecurityMonitoringSignalsListResponse";
import { SecurityMonitoringSignalsSort } from "../models/SecurityMonitoringSignalsSort";
import { SecurityMonitoringSignalStateUpdateRequest } from "../models/SecurityMonitoringSignalStateUpdateRequest";
import { SecurityMonitoringSignalSuggestedActionsResponse } from "../models/SecurityMonitoringSignalSuggestedActionsResponse";
import { SecurityMonitoringSignalTriageUpdateResponse } from "../models/SecurityMonitoringSignalTriageUpdateResponse";
import { SecurityMonitoringSignalUpdateRequest } from "../models/SecurityMonitoringSignalUpdateRequest";
import { SecurityMonitoringSuppressionCreateRequest } from "../models/SecurityMonitoringSuppressionCreateRequest";
import { SecurityMonitoringSuppressionResponse } from "../models/SecurityMonitoringSuppressionResponse";
import { SecurityMonitoringSuppressionSort } from "../models/SecurityMonitoringSuppressionSort";
import { SecurityMonitoringSuppressionsResponse } from "../models/SecurityMonitoringSuppressionsResponse";
import { SecurityMonitoringSuppressionUpdateRequest } from "../models/SecurityMonitoringSuppressionUpdateRequest";
import { SecurityMonitoringTerraformBulkExportRequest } from "../models/SecurityMonitoringTerraformBulkExportRequest";
import { SecurityMonitoringTerraformConvertRequest } from "../models/SecurityMonitoringTerraformConvertRequest";
import { SecurityMonitoringTerraformExportResponse } from "../models/SecurityMonitoringTerraformExportResponse";
import { SecurityMonitoringTerraformResourceType } from "../models/SecurityMonitoringTerraformResourceType";
import { SignalEntitiesResponse } from "../models/SignalEntitiesResponse";
import { UpdateCustomFrameworkRequest } from "../models/UpdateCustomFrameworkRequest";
import { UpdateCustomFrameworkResponse } from "../models/UpdateCustomFrameworkResponse";
import { UpdateResourceEvaluationFiltersRequest } from "../models/UpdateResourceEvaluationFiltersRequest";
import { UpdateResourceEvaluationFiltersResponse } from "../models/UpdateResourceEvaluationFiltersResponse";
import { VulnerabilityEcosystem } from "../models/VulnerabilityEcosystem";
import { VulnerabilitySeverity } from "../models/VulnerabilitySeverity";
import { VulnerabilityStatus } from "../models/VulnerabilityStatus";
import { VulnerabilityTool } from "../models/VulnerabilityTool";
import { VulnerabilityType } from "../models/VulnerabilityType";

export class SecurityMonitoringApiRequestFactory extends BaseAPIRequestFactory {
  public async activateContentPack(
    contentPackId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'activateContentPack'");
    if (!_config.unstableOperations["v2.activateContentPack"]) {
      throw new Error("Unstable operation 'activateContentPack' is disabled");
    }

    // verify required parameter 'contentPackId' is not null or undefined
    if (contentPackId === null || contentPackId === undefined) {
      throw new RequiredError("contentPackId", "activateContentPack");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/content_packs/{content_pack_id}/activate".replace(
        "{content_pack_id}",
        encodeURIComponent(String(contentPackId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.activateContentPack")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
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

  public async attachCase(
    caseId: string,
    body: AttachCaseRequest,
    _options?: Configuration
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
      encodeURIComponent(String(caseId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.attachCase")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AttachCaseRequest", ""),
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

  public async attachJiraIssue(
    body: AttachJiraIssueRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "attachJiraIssue");
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/jira_issues";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.attachJiraIssue")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AttachJiraIssueRequest", ""),
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

  public async batchGetSecurityMonitoringDatasetDependencies(
    body: SecurityMonitoringDatasetDependenciesRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'batchGetSecurityMonitoringDatasetDependencies'"
    );
    if (
      !_config.unstableOperations[
        "v2.batchGetSecurityMonitoringDatasetDependencies"
      ]
    ) {
      throw new Error(
        "Unstable operation 'batchGetSecurityMonitoringDatasetDependencies' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "batchGetSecurityMonitoringDatasetDependencies"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/datasets/dependencies";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.batchGetSecurityMonitoringDatasetDependencies"
      )
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
        "SecurityMonitoringDatasetDependenciesRequest",
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

  public async bulkCreateSampleLogGenerationSubscriptions(
    body: SampleLogGenerationBulkSubscriptionRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'bulkCreateSampleLogGenerationSubscriptions'"
    );
    if (
      !_config.unstableOperations[
        "v2.bulkCreateSampleLogGenerationSubscriptions"
      ]
    ) {
      throw new Error(
        "Unstable operation 'bulkCreateSampleLogGenerationSubscriptions' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "bulkCreateSampleLogGenerationSubscriptions"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/sample_log_generation/subscriptions/bulk";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.bulkCreateSampleLogGenerationSubscriptions"
      )
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
        "SampleLogGenerationBulkSubscriptionRequest",
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

  public async bulkDeleteSecurityMonitoringRules(
    body: SecurityMonitoringRuleBulkDeletePayload,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "bulkDeleteSecurityMonitoringRules");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/bulk_delete";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.bulkDeleteSecurityMonitoringRules")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
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
        "SecurityMonitoringRuleBulkDeletePayload",
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

  public async bulkEditSecurityMonitoringSignals(
    body: SecurityMonitoringSignalsBulkUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "bulkEditSecurityMonitoringSignals");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/signals/bulk/update";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.bulkEditSecurityMonitoringSignals")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
        "SecurityMonitoringSignalsBulkUpdateRequest",
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

  public async bulkEditSecurityMonitoringSignalsAssignee(
    body: SecurityMonitoringSignalsBulkAssigneeUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "bulkEditSecurityMonitoringSignalsAssignee"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/signals/bulk/assignee";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.bulkEditSecurityMonitoringSignalsAssignee"
      )
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
        "SecurityMonitoringSignalsBulkAssigneeUpdateRequest",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async bulkEditSecurityMonitoringSignalsState(
    body: SecurityMonitoringSignalsBulkStateUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "bulkEditSecurityMonitoringSignalsState");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/signals/bulk/state";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.bulkEditSecurityMonitoringSignalsState"
      )
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
        "SecurityMonitoringSignalsBulkStateUpdateRequest",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async bulkExportSecurityMonitoringRules(
    body: SecurityMonitoringRuleBulkExportPayload,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "bulkExportSecurityMonitoringRules");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/bulk_export";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.bulkExportSecurityMonitoringRules")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam(
      "Accept",
      "application/zip, application/json"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "SecurityMonitoringRuleBulkExportPayload",
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

  public async bulkExportSecurityMonitoringTerraformResources(
    resourceType: SecurityMonitoringTerraformResourceType,
    body: SecurityMonitoringTerraformBulkExportRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'bulkExportSecurityMonitoringTerraformResources'"
    );
    if (
      !_config.unstableOperations[
        "v2.bulkExportSecurityMonitoringTerraformResources"
      ]
    ) {
      throw new Error(
        "Unstable operation 'bulkExportSecurityMonitoringTerraformResources' is disabled"
      );
    }

    // verify required parameter 'resourceType' is not null or undefined
    if (resourceType === null || resourceType === undefined) {
      throw new RequiredError(
        "resourceType",
        "bulkExportSecurityMonitoringTerraformResources"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "bulkExportSecurityMonitoringTerraformResources"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/terraform/{resource_type}/bulk".replace(
        "{resource_type}",
        encodeURIComponent(String(resourceType))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.bulkExportSecurityMonitoringTerraformResources"
      )
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam(
      "Accept",
      "application/zip, application/json"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "SecurityMonitoringTerraformBulkExportRequest",
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

  public async cancelHistoricalJob(
    jobId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'cancelHistoricalJob'");
    if (!_config.unstableOperations["v2.cancelHistoricalJob"]) {
      throw new Error("Unstable operation 'cancelHistoricalJob' is disabled");
    }

    // verify required parameter 'jobId' is not null or undefined
    if (jobId === null || jobId === undefined) {
      throw new RequiredError("jobId", "cancelHistoricalJob");
    }

    // Path Params
    const localVarPath =
      "/api/v2/siem-historical-detections/jobs/{job_id}/cancel".replace(
        "{job_id}",
        encodeURIComponent(String(jobId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.cancelHistoricalJob")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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

  public async convertExistingSecurityMonitoringRule(
    ruleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError(
        "ruleId",
        "convertExistingSecurityMonitoringRule"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/rules/{rule_id}/convert".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.convertExistingSecurityMonitoringRule"
      )
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

  public async convertJobResultToSignal(
    body: ConvertJobResultsToSignalsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'convertJobResultToSignal'");
    if (!_config.unstableOperations["v2.convertJobResultToSignal"]) {
      throw new Error(
        "Unstable operation 'convertJobResultToSignal' is disabled"
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
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.convertJobResultToSignal")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ConvertJobResultsToSignalsRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "convertSecurityMonitoringRuleFromJSONToTerraform"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/convert";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.convertSecurityMonitoringRuleFromJSONToTerraform"
      )
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
        "SecurityMonitoringRuleConvertPayload",
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

  public async convertSecurityMonitoringTerraformResource(
    resourceType: SecurityMonitoringTerraformResourceType,
    body: SecurityMonitoringTerraformConvertRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'convertSecurityMonitoringTerraformResource'"
    );
    if (
      !_config.unstableOperations[
        "v2.convertSecurityMonitoringTerraformResource"
      ]
    ) {
      throw new Error(
        "Unstable operation 'convertSecurityMonitoringTerraformResource' is disabled"
      );
    }

    // verify required parameter 'resourceType' is not null or undefined
    if (resourceType === null || resourceType === undefined) {
      throw new RequiredError(
        "resourceType",
        "convertSecurityMonitoringTerraformResource"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "convertSecurityMonitoringTerraformResource"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/terraform/{resource_type}/convert".replace(
        "{resource_type}",
        encodeURIComponent(String(resourceType))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.convertSecurityMonitoringTerraformResource"
      )
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
        "SecurityMonitoringTerraformConvertRequest",
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

  public async createCases(
    body: CreateCaseRequestArray,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCases");
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/cases";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.createCases")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateCaseRequestArray", ""),
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

  public async createCustomFramework(
    body: CreateCustomFrameworkRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCustomFramework");
    }

    // Path Params
    const localVarPath = "/api/v2/cloud_security_management/custom_frameworks";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.createCustomFramework")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateCustomFrameworkRequest", ""),
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

  public async createJiraIssues(
    body: CreateJiraIssueRequestArray,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createJiraIssues");
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/jira_issues";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.createJiraIssues")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateJiraIssueRequestArray", ""),
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

  public async createSampleLogGenerationSubscription(
    body: SampleLogGenerationSubscriptionCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createSampleLogGenerationSubscription'"
    );
    if (
      !_config.unstableOperations["v2.createSampleLogGenerationSubscription"]
    ) {
      throw new Error(
        "Unstable operation 'createSampleLogGenerationSubscription' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSampleLogGenerationSubscription");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/sample_log_generation/subscriptions";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.createSampleLogGenerationSubscription"
      )
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
        "SampleLogGenerationSubscriptionCreateRequest",
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

  public async createSecurityFilter(
    body: SecurityFilterCreateRequest,
    _options?: Configuration
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
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.createSecurityFilter")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SecurityFilterCreateRequest", ""),
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

  public async createSecurityMonitoringCriticalAsset(
    body: SecurityMonitoringCriticalAssetCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSecurityMonitoringCriticalAsset");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/critical_assets";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.createSecurityMonitoringCriticalAsset"
      )
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
        "SecurityMonitoringCriticalAssetCreateRequest",
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

  public async createSecurityMonitoringDataset(
    body: SecurityMonitoringDatasetCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createSecurityMonitoringDataset'");
    if (!_config.unstableOperations["v2.createSecurityMonitoringDataset"]) {
      throw new Error(
        "Unstable operation 'createSecurityMonitoringDataset' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSecurityMonitoringDataset");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/datasets";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.createSecurityMonitoringDataset")
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
        "SecurityMonitoringDatasetCreateRequest",
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

  public async createSecurityMonitoringIntegrationConfig(
    body: SecurityMonitoringIntegrationConfigCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createSecurityMonitoringIntegrationConfig'"
    );
    if (
      !_config.unstableOperations[
        "v2.createSecurityMonitoringIntegrationConfig"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createSecurityMonitoringIntegrationConfig' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createSecurityMonitoringIntegrationConfig"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/integration_config";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.createSecurityMonitoringIntegrationConfig"
      )
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
        "SecurityMonitoringIntegrationConfigCreateRequest",
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

  public async createSecurityMonitoringRule(
    body: SecurityMonitoringRuleCreatePayload,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSecurityMonitoringRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.createSecurityMonitoringRule")
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
        "SecurityMonitoringRuleCreatePayload",
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

  public async createSecurityMonitoringSuppression(
    body: SecurityMonitoringSuppressionCreateRequest,
    _options?: Configuration
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
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.createSecurityMonitoringSuppression")
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
        "SecurityMonitoringSuppressionCreateRequest",
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

  public async createSignalNotificationRule(
    body: CreateNotificationRuleParameters,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSignalNotificationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security/signals/notification_rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.createSignalNotificationRule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateNotificationRuleParameters", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createStaticAnalysisAst(
    body: GetAstRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createStaticAnalysisAst'");
    if (!_config.unstableOperations["v2.createStaticAnalysisAst"]) {
      throw new Error(
        "Unstable operation 'createStaticAnalysisAst' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createStaticAnalysisAst");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/static-analysis-server/get-ast";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.createStaticAnalysisAst")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "GetAstRequest", ""),
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

  public async createStaticAnalysisServerAnalysis(
    body: AnalysisRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createStaticAnalysisServerAnalysis'"
    );
    if (!_config.unstableOperations["v2.createStaticAnalysisServerAnalysis"]) {
      throw new Error(
        "Unstable operation 'createStaticAnalysisServerAnalysis' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createStaticAnalysisServerAnalysis");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/static-analysis-server/analyze";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.createStaticAnalysisServerAnalysis")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AnalysisRequest", ""),
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

  public async createVulnerabilityNotificationRule(
    body: CreateNotificationRuleParameters,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createVulnerabilityNotificationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security/vulnerabilities/notification_rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.createVulnerabilityNotificationRule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateNotificationRuleParameters", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deactivateContentPack(
    contentPackId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deactivateContentPack'");
    if (!_config.unstableOperations["v2.deactivateContentPack"]) {
      throw new Error("Unstable operation 'deactivateContentPack' is disabled");
    }

    // verify required parameter 'contentPackId' is not null or undefined
    if (contentPackId === null || contentPackId === undefined) {
      throw new RequiredError("contentPackId", "deactivateContentPack");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/content_packs/{content_pack_id}/deactivate".replace(
        "{content_pack_id}",
        encodeURIComponent(String(contentPackId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.deactivateContentPack")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
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

  public async deleteCustomFramework(
    handle: string,
    version: string,
    _options?: Configuration
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
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.deleteCustomFramework")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
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

  public async deleteHistoricalJob(
    jobId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteHistoricalJob'");
    if (!_config.unstableOperations["v2.deleteHistoricalJob"]) {
      throw new Error("Unstable operation 'deleteHistoricalJob' is disabled");
    }

    // verify required parameter 'jobId' is not null or undefined
    if (jobId === null || jobId === undefined) {
      throw new RequiredError("jobId", "deleteHistoricalJob");
    }

    // Path Params
    const localVarPath =
      "/api/v2/siem-historical-detections/jobs/{job_id}".replace(
        "{job_id}",
        encodeURIComponent(String(jobId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.deleteHistoricalJob")
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

  public async deleteSampleLogGenerationSubscription(
    contentPackId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteSampleLogGenerationSubscription'"
    );
    if (
      !_config.unstableOperations["v2.deleteSampleLogGenerationSubscription"]
    ) {
      throw new Error(
        "Unstable operation 'deleteSampleLogGenerationSubscription' is disabled"
      );
    }

    // verify required parameter 'contentPackId' is not null or undefined
    if (contentPackId === null || contentPackId === undefined) {
      throw new RequiredError(
        "contentPackId",
        "deleteSampleLogGenerationSubscription"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/sample_log_generation/subscriptions/{content_pack_id}".replace(
        "{content_pack_id}",
        encodeURIComponent(String(contentPackId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.deleteSampleLogGenerationSubscription"
      )
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
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

  public async deleteSecurityFilter(
    securityFilterId: string,
    _options?: Configuration
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
        encodeURIComponent(String(securityFilterId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.deleteSecurityFilter")
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

  public async deleteSecurityMonitoringCriticalAsset(
    criticalAssetId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'criticalAssetId' is not null or undefined
    if (criticalAssetId === null || criticalAssetId === undefined) {
      throw new RequiredError(
        "criticalAssetId",
        "deleteSecurityMonitoringCriticalAsset"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/critical_assets/{critical_asset_id}".replace(
        "{critical_asset_id}",
        encodeURIComponent(String(criticalAssetId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.deleteSecurityMonitoringCriticalAsset"
      )
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

  public async deleteSecurityMonitoringDataset(
    datasetId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteSecurityMonitoringDataset'");
    if (!_config.unstableOperations["v2.deleteSecurityMonitoringDataset"]) {
      throw new Error(
        "Unstable operation 'deleteSecurityMonitoringDataset' is disabled"
      );
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "deleteSecurityMonitoringDataset");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/datasets/{dataset_id}".replace(
        "{dataset_id}",
        encodeURIComponent(String(datasetId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.deleteSecurityMonitoringDataset")
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

  public async deleteSecurityMonitoringIntegrationConfig(
    integrationConfigId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteSecurityMonitoringIntegrationConfig'"
    );
    if (
      !_config.unstableOperations[
        "v2.deleteSecurityMonitoringIntegrationConfig"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteSecurityMonitoringIntegrationConfig' is disabled"
      );
    }

    // verify required parameter 'integrationConfigId' is not null or undefined
    if (integrationConfigId === null || integrationConfigId === undefined) {
      throw new RequiredError(
        "integrationConfigId",
        "deleteSecurityMonitoringIntegrationConfig"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/integration_config/{integration_config_id}".replace(
        "{integration_config_id}",
        encodeURIComponent(String(integrationConfigId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.deleteSecurityMonitoringIntegrationConfig"
      )
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

  public async deleteSecurityMonitoringRule(
    ruleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "deleteSecurityMonitoringRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.deleteSecurityMonitoringRule")
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

  public async deleteSecurityMonitoringSuppression(
    suppressionId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'suppressionId' is not null or undefined
    if (suppressionId === null || suppressionId === undefined) {
      throw new RequiredError(
        "suppressionId",
        "deleteSecurityMonitoringSuppression"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/suppressions/{suppression_id}".replace(
        "{suppression_id}",
        encodeURIComponent(String(suppressionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.deleteSecurityMonitoringSuppression")
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

  public async deleteSignalNotificationRule(
    id: string,
    _options?: Configuration
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
        encodeURIComponent(String(id))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.deleteSignalNotificationRule")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteVulnerabilityNotificationRule(
    id: string,
    _options?: Configuration
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
        encodeURIComponent(String(id))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.deleteVulnerabilityNotificationRule")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async detachCase(
    body: DetachCaseRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "detachCase");
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/cases";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.detachCase")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DetachCaseRequest", ""),
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

  public async editSecurityMonitoringSignal(
    signalId: string,
    body: SecurityMonitoringSignalUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'signalId' is not null or undefined
    if (signalId === null || signalId === undefined) {
      throw new RequiredError("signalId", "editSecurityMonitoringSignal");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "editSecurityMonitoringSignal");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/signals/{signal_id}/update".replace(
        "{signal_id}",
        encodeURIComponent(String(signalId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.editSecurityMonitoringSignal")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
        "SecurityMonitoringSignalUpdateRequest",
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

  public async editSecurityMonitoringSignalAssignee(
    signalId: string,
    body: SecurityMonitoringSignalAssigneeUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'signalId' is not null or undefined
    if (signalId === null || signalId === undefined) {
      throw new RequiredError(
        "signalId",
        "editSecurityMonitoringSignalAssignee"
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
        encodeURIComponent(String(signalId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.editSecurityMonitoringSignalAssignee"
      )
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
        "SecurityMonitoringSignalAssigneeUpdateRequest",
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

  public async editSecurityMonitoringSignalIncidents(
    signalId: string,
    body: SecurityMonitoringSignalIncidentsUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'signalId' is not null or undefined
    if (signalId === null || signalId === undefined) {
      throw new RequiredError(
        "signalId",
        "editSecurityMonitoringSignalIncidents"
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
        encodeURIComponent(String(signalId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.editSecurityMonitoringSignalIncidents"
      )
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
        "SecurityMonitoringSignalIncidentsUpdateRequest",
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

  public async editSecurityMonitoringSignalState(
    signalId: string,
    body: SecurityMonitoringSignalStateUpdateRequest,
    _options?: Configuration
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
        encodeURIComponent(String(signalId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.editSecurityMonitoringSignalState")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
        "SecurityMonitoringSignalStateUpdateRequest",
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

  public async exportSecurityMonitoringTerraformResource(
    resourceType: SecurityMonitoringTerraformResourceType,
    resourceId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'exportSecurityMonitoringTerraformResource'"
    );
    if (
      !_config.unstableOperations[
        "v2.exportSecurityMonitoringTerraformResource"
      ]
    ) {
      throw new Error(
        "Unstable operation 'exportSecurityMonitoringTerraformResource' is disabled"
      );
    }

    // verify required parameter 'resourceType' is not null or undefined
    if (resourceType === null || resourceType === undefined) {
      throw new RequiredError(
        "resourceType",
        "exportSecurityMonitoringTerraformResource"
      );
    }

    // verify required parameter 'resourceId' is not null or undefined
    if (resourceId === null || resourceId === undefined) {
      throw new RequiredError(
        "resourceId",
        "exportSecurityMonitoringTerraformResource"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/terraform/{resource_type}/{resource_id}"
        .replace("{resource_type}", encodeURIComponent(String(resourceType)))
        .replace("{resource_id}", encodeURIComponent(String(resourceId)));

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.exportSecurityMonitoringTerraformResource"
      )
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

  public async getContentPacksStates(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getContentPacksStates'");
    if (!_config.unstableOperations["v2.getContentPacksStates"]) {
      throw new Error("Unstable operation 'getContentPacksStates' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/content_packs/states";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getContentPacksStates")
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

  public async getCriticalAssetsAffectingRule(
    ruleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "getCriticalAssetsAffectingRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/critical_assets/rules/{rule_id}".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getCriticalAssetsAffectingRule")
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

  public async getCustomFramework(
    handle: string,
    version: string,
    _options?: Configuration
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
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getCustomFramework")
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

  public async getEntityContext(
    query?: string,
    from?: string,
    to?: string,
    asOf?: string,
    limit?: number,
    pageToken?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getEntityContext'");
    if (!_config.unstableOperations["v2.getEntityContext"]) {
      throw new Error("Unstable operation 'getEntityContext' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/entity_context";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getEntityContext")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        ObjectSerializer.serialize(query, "string", ""),
        ""
      );
    }
    if (from !== undefined) {
      requestContext.setQueryParam(
        "from",
        ObjectSerializer.serialize(from, "string", ""),
        ""
      );
    }
    if (to !== undefined) {
      requestContext.setQueryParam(
        "to",
        ObjectSerializer.serialize(to, "string", ""),
        ""
      );
    }
    if (asOf !== undefined) {
      requestContext.setQueryParam(
        "as_of",
        ObjectSerializer.serialize(asOf, "string", ""),
        ""
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", "int64"),
        ""
      );
    }
    if (pageToken !== undefined) {
      requestContext.setQueryParam(
        "page_token",
        ObjectSerializer.serialize(pageToken, "string", ""),
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

  public async getFinding(
    findingId: string,
    snapshotTimestamp?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getFinding'");
    if (!_config.unstableOperations["v2.getFinding"]) {
      throw new Error("Unstable operation 'getFinding' is disabled");
    }

    // verify required parameter 'findingId' is not null or undefined
    if (findingId === null || findingId === undefined) {
      throw new RequiredError("findingId", "getFinding");
    }

    // Path Params
    const localVarPath =
      "/api/v2/posture_management/findings/{finding_id}".replace(
        "{finding_id}",
        encodeURIComponent(String(findingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getFinding")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (snapshotTimestamp !== undefined) {
      requestContext.setQueryParam(
        "snapshot_timestamp",
        ObjectSerializer.serialize(snapshotTimestamp, "number", "int64"),
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

  public async getHistoricalJob(
    jobId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getHistoricalJob'");
    if (!_config.unstableOperations["v2.getHistoricalJob"]) {
      throw new Error("Unstable operation 'getHistoricalJob' is disabled");
    }

    // verify required parameter 'jobId' is not null or undefined
    if (jobId === null || jobId === undefined) {
      throw new RequiredError("jobId", "getHistoricalJob");
    }

    // Path Params
    const localVarPath =
      "/api/v2/siem-historical-detections/jobs/{job_id}".replace(
        "{job_id}",
        encodeURIComponent(String(jobId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getHistoricalJob")
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

  public async getIndicatorOfCompromise(
    indicator: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIndicatorOfCompromise'");
    if (!_config.unstableOperations["v2.getIndicatorOfCompromise"]) {
      throw new Error(
        "Unstable operation 'getIndicatorOfCompromise' is disabled"
      );
    }

    // verify required parameter 'indicator' is not null or undefined
    if (indicator === null || indicator === undefined) {
      throw new RequiredError("indicator", "getIndicatorOfCompromise");
    }

    // Path Params
    const localVarPath = "/api/v2/security/siem/ioc-explorer/indicator";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getIndicatorOfCompromise")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (indicator !== undefined) {
      requestContext.setQueryParam(
        "indicator",
        ObjectSerializer.serialize(indicator, "string", ""),
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

  public async getInvestigationLogQueriesMatchingSignal(
    signalId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'signalId' is not null or undefined
    if (signalId === null || signalId === undefined) {
      throw new RequiredError(
        "signalId",
        "getInvestigationLogQueriesMatchingSignal"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/signals/{signal_id}/investigation_queries".replace(
        "{signal_id}",
        encodeURIComponent(String(signalId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.getInvestigationLogQueriesMatchingSignal"
      )
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

  public async getResourceEvaluationFilters(
    cloudProvider?: string,
    accountId?: string,
    skipCache?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cloud_security_management/resource_filters";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getResourceEvaluationFilters")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (cloudProvider !== undefined) {
      requestContext.setQueryParam(
        "cloud_provider",
        ObjectSerializer.serialize(cloudProvider, "string", ""),
        ""
      );
    }
    if (accountId !== undefined) {
      requestContext.setQueryParam(
        "account_id",
        ObjectSerializer.serialize(accountId, "string", ""),
        ""
      );
    }
    if (skipCache !== undefined) {
      requestContext.setQueryParam(
        "skip_cache",
        ObjectSerializer.serialize(skipCache, "boolean", ""),
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

  public async getRuleVersionHistory(
    ruleId: string,
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getRuleVersionHistory'");
    if (!_config.unstableOperations["v2.getRuleVersionHistory"]) {
      throw new Error("Unstable operation 'getRuleVersionHistory' is disabled");
    }

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "getRuleVersionHistory");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/rules/{rule_id}/version_history".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getRuleVersionHistory")
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
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getSBOM(
    assetType: AssetType,
    filterAssetName: string,
    filterRepoDigest?: string,
    extFormat?: SBOMFormat,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

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
      encodeURIComponent(String(assetType))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getSBOM")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterAssetName !== undefined) {
      requestContext.setQueryParam(
        "filter[asset_name]",
        ObjectSerializer.serialize(filterAssetName, "string", ""),
        ""
      );
    }
    if (filterRepoDigest !== undefined) {
      requestContext.setQueryParam(
        "filter[repo_digest]",
        ObjectSerializer.serialize(filterRepoDigest, "string", ""),
        ""
      );
    }
    if (extFormat !== undefined) {
      requestContext.setQueryParam(
        "ext:format",
        ObjectSerializer.serialize(extFormat, "SBOMFormat", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getSecretsRules(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getSecretsRules'");
    if (!_config.unstableOperations["v2.getSecretsRules"]) {
      throw new Error("Unstable operation 'getSecretsRules' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/static-analysis/secrets/rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getSecretsRules")
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

  public async getSecurityFilter(
    securityFilterId: string,
    _options?: Configuration
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
        encodeURIComponent(String(securityFilterId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getSecurityFilter")
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

  public async getSecurityMonitoringCriticalAsset(
    criticalAssetId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'criticalAssetId' is not null or undefined
    if (criticalAssetId === null || criticalAssetId === undefined) {
      throw new RequiredError(
        "criticalAssetId",
        "getSecurityMonitoringCriticalAsset"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/critical_assets/{critical_asset_id}".replace(
        "{critical_asset_id}",
        encodeURIComponent(String(criticalAssetId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getSecurityMonitoringCriticalAsset")
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

  public async getSecurityMonitoringDataset(
    datasetId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getSecurityMonitoringDataset'");
    if (!_config.unstableOperations["v2.getSecurityMonitoringDataset"]) {
      throw new Error(
        "Unstable operation 'getSecurityMonitoringDataset' is disabled"
      );
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "getSecurityMonitoringDataset");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/datasets/{dataset_id}".replace(
        "{dataset_id}",
        encodeURIComponent(String(datasetId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getSecurityMonitoringDataset")
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

  public async getSecurityMonitoringDatasetByVersion(
    datasetId: string,
    version: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getSecurityMonitoringDatasetByVersion'"
    );
    if (
      !_config.unstableOperations["v2.getSecurityMonitoringDatasetByVersion"]
    ) {
      throw new Error(
        "Unstable operation 'getSecurityMonitoringDatasetByVersion' is disabled"
      );
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError(
        "datasetId",
        "getSecurityMonitoringDatasetByVersion"
      );
    }

    // verify required parameter 'version' is not null or undefined
    if (version === null || version === undefined) {
      throw new RequiredError(
        "version",
        "getSecurityMonitoringDatasetByVersion"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/datasets/{dataset_id}/version/{version}"
        .replace("{dataset_id}", encodeURIComponent(String(datasetId)))
        .replace("{version}", encodeURIComponent(String(version)));

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.getSecurityMonitoringDatasetByVersion"
      )
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

  public async getSecurityMonitoringDatasetVersionHistory(
    datasetId: string,
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getSecurityMonitoringDatasetVersionHistory'"
    );
    if (
      !_config.unstableOperations[
        "v2.getSecurityMonitoringDatasetVersionHistory"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getSecurityMonitoringDatasetVersionHistory' is disabled"
      );
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError(
        "datasetId",
        "getSecurityMonitoringDatasetVersionHistory"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/datasets/{dataset_id}/version_history".replace(
        "{dataset_id}",
        encodeURIComponent(String(datasetId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.getSecurityMonitoringDatasetVersionHistory"
      )
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
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getSecurityMonitoringHistsignal(
    histsignalId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getSecurityMonitoringHistsignal'");
    if (!_config.unstableOperations["v2.getSecurityMonitoringHistsignal"]) {
      throw new Error(
        "Unstable operation 'getSecurityMonitoringHistsignal' is disabled"
      );
    }

    // verify required parameter 'histsignalId' is not null or undefined
    if (histsignalId === null || histsignalId === undefined) {
      throw new RequiredError(
        "histsignalId",
        "getSecurityMonitoringHistsignal"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/siem-historical-detections/histsignals/{histsignal_id}".replace(
        "{histsignal_id}",
        encodeURIComponent(String(histsignalId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getSecurityMonitoringHistsignal")
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

  public async getSecurityMonitoringHistsignalsByJobId(
    jobId: string,
    filterQuery?: string,
    filterFrom?: Date,
    filterTo?: Date,
    sort?: SecurityMonitoringSignalsSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getSecurityMonitoringHistsignalsByJobId'"
    );
    if (
      !_config.unstableOperations["v2.getSecurityMonitoringHistsignalsByJobId"]
    ) {
      throw new Error(
        "Unstable operation 'getSecurityMonitoringHistsignalsByJobId' is disabled"
      );
    }

    // verify required parameter 'jobId' is not null or undefined
    if (jobId === null || jobId === undefined) {
      throw new RequiredError(
        "jobId",
        "getSecurityMonitoringHistsignalsByJobId"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/siem-historical-detections/jobs/{job_id}/histsignals".replace(
        "{job_id}",
        encodeURIComponent(String(jobId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.getSecurityMonitoringHistsignalsByJobId"
      )
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        ObjectSerializer.serialize(filterQuery, "string", ""),
        ""
      );
    }
    if (filterFrom !== undefined) {
      requestContext.setQueryParam(
        "filter[from]",
        ObjectSerializer.serialize(filterFrom, "Date", "date-time"),
        ""
      );
    }
    if (filterTo !== undefined) {
      requestContext.setQueryParam(
        "filter[to]",
        ObjectSerializer.serialize(filterTo, "Date", "date-time"),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "SecurityMonitoringSignalsSort", ""),
        ""
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", ""),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int32"),
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

  public async getSecurityMonitoringIntegrationConfig(
    integrationConfigId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getSecurityMonitoringIntegrationConfig'"
    );
    if (
      !_config.unstableOperations["v2.getSecurityMonitoringIntegrationConfig"]
    ) {
      throw new Error(
        "Unstable operation 'getSecurityMonitoringIntegrationConfig' is disabled"
      );
    }

    // verify required parameter 'integrationConfigId' is not null or undefined
    if (integrationConfigId === null || integrationConfigId === undefined) {
      throw new RequiredError(
        "integrationConfigId",
        "getSecurityMonitoringIntegrationConfig"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/integration_config/{integration_config_id}".replace(
        "{integration_config_id}",
        encodeURIComponent(String(integrationConfigId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.getSecurityMonitoringIntegrationConfig"
      )
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

  public async getSecurityMonitoringRule(
    ruleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "getSecurityMonitoringRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getSecurityMonitoringRule")
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

  public async getSecurityMonitoringSignal(
    signalId: string,
    _options?: Configuration
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
        encodeURIComponent(String(signalId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getSecurityMonitoringSignal")
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

  public async getSecurityMonitoringSuppression(
    suppressionId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'suppressionId' is not null or undefined
    if (suppressionId === null || suppressionId === undefined) {
      throw new RequiredError(
        "suppressionId",
        "getSecurityMonitoringSuppression"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/suppressions/{suppression_id}".replace(
        "{suppression_id}",
        encodeURIComponent(String(suppressionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getSecurityMonitoringSuppression")
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

  public async getSignalEntities(
    signalId: string,
    limit?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getSignalEntities'");
    if (!_config.unstableOperations["v2.getSignalEntities"]) {
      throw new Error("Unstable operation 'getSignalEntities' is disabled");
    }

    // verify required parameter 'signalId' is not null or undefined
    if (signalId === null || signalId === undefined) {
      throw new RequiredError("signalId", "getSignalEntities");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/signals/{signal_id}/entities".replace(
        "{signal_id}",
        encodeURIComponent(String(signalId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getSignalEntities")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", "int32"),
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

  public async getSignalNotificationRule(
    id: string,
    _options?: Configuration
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
        encodeURIComponent(String(id))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getSignalNotificationRule")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getSignalNotificationRules(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security/signals/notification_rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getSignalNotificationRules")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getStaticAnalysisDefaultRulesets(
    language: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getStaticAnalysisDefaultRulesets'");
    if (!_config.unstableOperations["v2.getStaticAnalysisDefaultRulesets"]) {
      throw new Error(
        "Unstable operation 'getStaticAnalysisDefaultRulesets' is disabled"
      );
    }

    // verify required parameter 'language' is not null or undefined
    if (language === null || language === undefined) {
      throw new RequiredError("language", "getStaticAnalysisDefaultRulesets");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/default-rulesets/{language}".replace(
        "{language}",
        encodeURIComponent(String(language))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getStaticAnalysisDefaultRulesets")
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

  public async getStaticAnalysisNodeTypes(
    language: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getStaticAnalysisNodeTypes'");
    if (!_config.unstableOperations["v2.getStaticAnalysisNodeTypes"]) {
      throw new Error(
        "Unstable operation 'getStaticAnalysisNodeTypes' is disabled"
      );
    }

    // verify required parameter 'language' is not null or undefined
    if (language === null || language === undefined) {
      throw new RequiredError("language", "getStaticAnalysisNodeTypes");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/static-analysis-server/node-types/{language}".replace(
        "{language}",
        encodeURIComponent(String(language))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getStaticAnalysisNodeTypes")
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

  public async getStaticAnalysisRuleset(
    rulesetName: string,
    includeTests?: boolean,
    includeTestingRules?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getStaticAnalysisRuleset'");
    if (!_config.unstableOperations["v2.getStaticAnalysisRuleset"]) {
      throw new Error(
        "Unstable operation 'getStaticAnalysisRuleset' is disabled"
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "getStaticAnalysisRuleset");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/rulesets/{ruleset_name}".replace(
        "{ruleset_name}",
        encodeURIComponent(String(rulesetName))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getStaticAnalysisRuleset")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (includeTests !== undefined) {
      requestContext.setQueryParam(
        "include_tests",
        ObjectSerializer.serialize(includeTests, "boolean", ""),
        ""
      );
    }
    if (includeTestingRules !== undefined) {
      requestContext.setQueryParam(
        "include_testing_rules",
        ObjectSerializer.serialize(includeTestingRules, "boolean", ""),
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

  public async getStaticAnalysisTreeSitterWasm(
    file: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getStaticAnalysisTreeSitterWasm'");
    if (!_config.unstableOperations["v2.getStaticAnalysisTreeSitterWasm"]) {
      throw new Error(
        "Unstable operation 'getStaticAnalysisTreeSitterWasm' is disabled"
      );
    }

    // verify required parameter 'file' is not null or undefined
    if (file === null || file === undefined) {
      throw new RequiredError("file", "getStaticAnalysisTreeSitterWasm");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/static-analysis-server/tree-sitter-wasm/{file}".replace(
        "{file}",
        encodeURIComponent(String(file))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getStaticAnalysisTreeSitterWasm")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam(
      "Accept",
      "application/octet-stream, application/json"
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getSuggestedActionsMatchingSignal(
    signalId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'signalId' is not null or undefined
    if (signalId === null || signalId === undefined) {
      throw new RequiredError("signalId", "getSuggestedActionsMatchingSignal");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/signals/{signal_id}/suggested_actions".replace(
        "{signal_id}",
        encodeURIComponent(String(signalId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getSuggestedActionsMatchingSignal")
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

  public async getSuppressionsAffectingFutureRule(
    body: SecurityMonitoringRuleCreatePayload,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "getSuppressionsAffectingFutureRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/suppressions/rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getSuppressionsAffectingFutureRule")
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
        "SecurityMonitoringRuleCreatePayload",
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

  public async getSuppressionsAffectingRule(
    ruleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "getSuppressionsAffectingRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/suppressions/rules/{rule_id}".replace(
        "{rule_id}",
        encodeURIComponent(String(ruleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getSuppressionsAffectingRule")
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

  public async getSuppressionVersionHistory(
    suppressionId: string,
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'suppressionId' is not null or undefined
    if (suppressionId === null || suppressionId === undefined) {
      throw new RequiredError("suppressionId", "getSuppressionVersionHistory");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/suppressions/{suppression_id}/version_history".replace(
        "{suppression_id}",
        encodeURIComponent(String(suppressionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getSuppressionVersionHistory")
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
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getVulnerabilityNotificationRule(
    id: string,
    _options?: Configuration
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
        encodeURIComponent(String(id))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getVulnerabilityNotificationRule")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getVulnerabilityNotificationRules(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security/vulnerabilities/notification_rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getVulnerabilityNotificationRules")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security/sboms";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listAssetsSBOMs")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageToken !== undefined) {
      requestContext.setQueryParam(
        "page[token]",
        ObjectSerializer.serialize(pageToken, "string", ""),
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
    if (filterAssetType !== undefined) {
      requestContext.setQueryParam(
        "filter[asset_type]",
        ObjectSerializer.serialize(filterAssetType, "AssetType", ""),
        ""
      );
    }
    if (filterAssetName !== undefined) {
      requestContext.setQueryParam(
        "filter[asset_name]",
        ObjectSerializer.serialize(filterAssetName, "string", ""),
        ""
      );
    }
    if (filterPackageName !== undefined) {
      requestContext.setQueryParam(
        "filter[package_name]",
        ObjectSerializer.serialize(filterPackageName, "string", ""),
        ""
      );
    }
    if (filterPackageVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[package_version]",
        ObjectSerializer.serialize(filterPackageVersion, "string", ""),
        ""
      );
    }
    if (filterLicenseName !== undefined) {
      requestContext.setQueryParam(
        "filter[license_name]",
        ObjectSerializer.serialize(filterLicenseName, "string", ""),
        ""
      );
    }
    if (filterLicenseType !== undefined) {
      requestContext.setQueryParam(
        "filter[license_type]",
        ObjectSerializer.serialize(
          filterLicenseType,
          "SBOMComponentLicenseType",
          ""
        ),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listFindings'");
    if (!_config.unstableOperations["v2.listFindings"]) {
      throw new Error("Unstable operation 'listFindings' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/posture_management/findings";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listFindings")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64"),
        ""
      );
    }
    if (snapshotTimestamp !== undefined) {
      requestContext.setQueryParam(
        "snapshot_timestamp",
        ObjectSerializer.serialize(snapshotTimestamp, "number", "int64"),
        ""
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", ""),
        ""
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        ObjectSerializer.serialize(filterTags, "string", ""),
        ""
      );
    }
    if (filterEvaluationChangedAt !== undefined) {
      requestContext.setQueryParam(
        "filter[evaluation_changed_at]",
        ObjectSerializer.serialize(filterEvaluationChangedAt, "string", ""),
        ""
      );
    }
    if (filterMuted !== undefined) {
      requestContext.setQueryParam(
        "filter[muted]",
        ObjectSerializer.serialize(filterMuted, "boolean", ""),
        ""
      );
    }
    if (filterRuleId !== undefined) {
      requestContext.setQueryParam(
        "filter[rule_id]",
        ObjectSerializer.serialize(filterRuleId, "string", ""),
        ""
      );
    }
    if (filterRuleName !== undefined) {
      requestContext.setQueryParam(
        "filter[rule_name]",
        ObjectSerializer.serialize(filterRuleName, "string", ""),
        ""
      );
    }
    if (filterResourceType !== undefined) {
      requestContext.setQueryParam(
        "filter[resource_type]",
        ObjectSerializer.serialize(filterResourceType, "string", ""),
        ""
      );
    }
    if (filterResourceId !== undefined) {
      requestContext.setQueryParam(
        "filter[@resource_id]",
        ObjectSerializer.serialize(filterResourceId, "string", ""),
        ""
      );
    }
    if (filterDiscoveryTimestamp !== undefined) {
      requestContext.setQueryParam(
        "filter[discovery_timestamp]",
        ObjectSerializer.serialize(filterDiscoveryTimestamp, "string", ""),
        ""
      );
    }
    if (filterEvaluation !== undefined) {
      requestContext.setQueryParam(
        "filter[evaluation]",
        ObjectSerializer.serialize(filterEvaluation, "FindingEvaluation", ""),
        ""
      );
    }
    if (filterStatus !== undefined) {
      requestContext.setQueryParam(
        "filter[status]",
        ObjectSerializer.serialize(filterStatus, "FindingStatus", ""),
        ""
      );
    }
    if (filterVulnerabilityType !== undefined) {
      requestContext.setQueryParam(
        "filter[vulnerability_type]",
        ObjectSerializer.serialize(
          filterVulnerabilityType,
          "Array<FindingVulnerabilityType>",
          ""
        ),
        "multi"
      );
    }
    if (detailedFindings !== undefined) {
      requestContext.setQueryParam(
        "detailed_findings",
        ObjectSerializer.serialize(detailedFindings, "boolean", ""),
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

  public async listHistoricalJobs(
    pageSize?: number,
    pageNumber?: number,
    sort?: string,
    filterQuery?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listHistoricalJobs'");
    if (!_config.unstableOperations["v2.listHistoricalJobs"]) {
      throw new Error("Unstable operation 'listHistoricalJobs' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/siem-historical-detections/jobs";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listHistoricalJobs")
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
        ObjectSerializer.serialize(sort, "string", ""),
        ""
      );
    }
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        ObjectSerializer.serialize(filterQuery, "string", ""),
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

  public async listIndicatorsOfCompromise(
    limit?: number,
    offset?: number,
    query?: string,
    sortColumn?: string,
    sortOrder?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listIndicatorsOfCompromise'");
    if (!_config.unstableOperations["v2.listIndicatorsOfCompromise"]) {
      throw new Error(
        "Unstable operation 'listIndicatorsOfCompromise' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security/siem/ioc-explorer";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listIndicatorsOfCompromise")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", "int32"),
        ""
      );
    }
    if (offset !== undefined) {
      requestContext.setQueryParam(
        "offset",
        ObjectSerializer.serialize(offset, "number", "int32"),
        ""
      );
    }
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        ObjectSerializer.serialize(query, "string", ""),
        ""
      );
    }
    if (sortColumn !== undefined) {
      requestContext.setQueryParam(
        "sort[column]",
        ObjectSerializer.serialize(sortColumn, "string", ""),
        ""
      );
    }
    if (sortOrder !== undefined) {
      requestContext.setQueryParam(
        "sort[order]",
        ObjectSerializer.serialize(sortOrder, "string", ""),
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

  public async listMultipleRulesets(
    body: GetMultipleRulesetsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listMultipleRulesets'");
    if (!_config.unstableOperations["v2.listMultipleRulesets"]) {
      throw new Error("Unstable operation 'listMultipleRulesets' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "listMultipleRulesets");
    }

    // Path Params
    const localVarPath = "/api/v2/static-analysis/rulesets";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listMultipleRulesets")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "GetMultipleRulesetsRequest", ""),
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

  public async listSampleLogGenerationSubscriptions(
    status?: SampleLogGenerationSubscriptionsStatusFilter,
    startTimestamp?: Date,
    endTimestamp?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listSampleLogGenerationSubscriptions'"
    );
    if (
      !_config.unstableOperations["v2.listSampleLogGenerationSubscriptions"]
    ) {
      throw new Error(
        "Unstable operation 'listSampleLogGenerationSubscriptions' is disabled"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/sample_log_generation/subscriptions";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.listSampleLogGenerationSubscriptions"
      )
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (status !== undefined) {
      requestContext.setQueryParam(
        "status",
        ObjectSerializer.serialize(
          status,
          "SampleLogGenerationSubscriptionsStatusFilter",
          ""
        ),
        ""
      );
    }
    if (startTimestamp !== undefined) {
      requestContext.setQueryParam(
        "start_timestamp",
        ObjectSerializer.serialize(startTimestamp, "Date", "date-time"),
        ""
      );
    }
    if (endTimestamp !== undefined) {
      requestContext.setQueryParam(
        "end_timestamp",
        ObjectSerializer.serialize(endTimestamp, "Date", "date-time"),
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

  public async listScannedAssetsMetadata(
    pageToken?: string,
    pageNumber?: number,
    filterAssetType?: CloudAssetType,
    filterAssetName?: string,
    filterLastSuccessOrigin?: string,
    filterLastSuccessEnv?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listScannedAssetsMetadata'");
    if (!_config.unstableOperations["v2.listScannedAssetsMetadata"]) {
      throw new Error(
        "Unstable operation 'listScannedAssetsMetadata' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security/scanned-assets-metadata";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listScannedAssetsMetadata")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageToken !== undefined) {
      requestContext.setQueryParam(
        "page[token]",
        ObjectSerializer.serialize(pageToken, "string", ""),
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
    if (filterAssetType !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.type]",
        ObjectSerializer.serialize(filterAssetType, "CloudAssetType", ""),
        ""
      );
    }
    if (filterAssetName !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.name]",
        ObjectSerializer.serialize(filterAssetName, "string", ""),
        ""
      );
    }
    if (filterLastSuccessOrigin !== undefined) {
      requestContext.setQueryParam(
        "filter[last_success.origin]",
        ObjectSerializer.serialize(filterLastSuccessOrigin, "string", ""),
        ""
      );
    }
    if (filterLastSuccessEnv !== undefined) {
      requestContext.setQueryParam(
        "filter[last_success.env]",
        ObjectSerializer.serialize(filterLastSuccessEnv, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listSecurityFilters(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/security_filters";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listSecurityFilters")
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

  public async listSecurityFilterVersions(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/security_filters/versions";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listSecurityFilterVersions")
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

  public async listSecurityFindings(
    filterQuery?: string,
    pageCursor?: string,
    pageLimit?: number,
    sort?: SecurityFindingsSort,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security/findings";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listSecurityFindings")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        ObjectSerializer.serialize(filterQuery, "string", ""),
        ""
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", ""),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64"),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "SecurityFindingsSort", ""),
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

  public async listSecurityMonitoringCriticalAssets(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/critical_assets";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.listSecurityMonitoringCriticalAssets"
      )
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

  public async listSecurityMonitoringDatasets(
    pageSize?: number,
    pageNumber?: number,
    sort?: string,
    filterQuery?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listSecurityMonitoringDatasets'");
    if (!_config.unstableOperations["v2.listSecurityMonitoringDatasets"]) {
      throw new Error(
        "Unstable operation 'listSecurityMonitoringDatasets' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/datasets";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listSecurityMonitoringDatasets")
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
        ObjectSerializer.serialize(sort, "string", ""),
        ""
      );
    }
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        ObjectSerializer.serialize(filterQuery, "string", ""),
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

  public async listSecurityMonitoringHistsignals(
    filterQuery?: string,
    filterFrom?: Date,
    filterTo?: Date,
    sort?: SecurityMonitoringSignalsSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listSecurityMonitoringHistsignals'");
    if (!_config.unstableOperations["v2.listSecurityMonitoringHistsignals"]) {
      throw new Error(
        "Unstable operation 'listSecurityMonitoringHistsignals' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/siem-historical-detections/histsignals";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listSecurityMonitoringHistsignals")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        ObjectSerializer.serialize(filterQuery, "string", ""),
        ""
      );
    }
    if (filterFrom !== undefined) {
      requestContext.setQueryParam(
        "filter[from]",
        ObjectSerializer.serialize(filterFrom, "Date", "date-time"),
        ""
      );
    }
    if (filterTo !== undefined) {
      requestContext.setQueryParam(
        "filter[to]",
        ObjectSerializer.serialize(filterTo, "Date", "date-time"),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "SecurityMonitoringSignalsSort", ""),
        ""
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", ""),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int32"),
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

  public async listSecurityMonitoringIntegrationConfigs(
    filterIntegrationType?: SecurityMonitoringIntegrationType,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listSecurityMonitoringIntegrationConfigs'"
    );
    if (
      !_config.unstableOperations["v2.listSecurityMonitoringIntegrationConfigs"]
    ) {
      throw new Error(
        "Unstable operation 'listSecurityMonitoringIntegrationConfigs' is disabled"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/integration_config";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.listSecurityMonitoringIntegrationConfigs"
      )
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterIntegrationType !== undefined) {
      requestContext.setQueryParam(
        "filter[integration_type]",
        ObjectSerializer.serialize(
          filterIntegrationType,
          "SecurityMonitoringIntegrationType",
          ""
        ),
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

  public async listSecurityMonitoringRules(
    pageSize?: number,
    pageNumber?: number,
    query?: string,
    sort?: SecurityMonitoringRuleSort,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listSecurityMonitoringRules")
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
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        ObjectSerializer.serialize(query, "string", ""),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "SecurityMonitoringRuleSort", ""),
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

  public async listSecurityMonitoringSignals(
    filterQuery?: string,
    filterFrom?: Date,
    filterTo?: Date,
    sort?: SecurityMonitoringSignalsSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/signals";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listSecurityMonitoringSignals")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        ObjectSerializer.serialize(filterQuery, "string", ""),
        ""
      );
    }
    if (filterFrom !== undefined) {
      requestContext.setQueryParam(
        "filter[from]",
        ObjectSerializer.serialize(filterFrom, "Date", "date-time"),
        ""
      );
    }
    if (filterTo !== undefined) {
      requestContext.setQueryParam(
        "filter[to]",
        ObjectSerializer.serialize(filterTo, "Date", "date-time"),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "SecurityMonitoringSignalsSort", ""),
        ""
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", ""),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int32"),
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

  public async listSecurityMonitoringSuppressions(
    query?: string,
    sort?: SecurityMonitoringSuppressionSort,
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/suppressions";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listSecurityMonitoringSuppressions")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        ObjectSerializer.serialize(query, "string", ""),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(
          sort,
          "SecurityMonitoringSuppressionSort",
          ""
        ),
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
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64"),
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

  public async listStaticAnalysisCodegenRulesets(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listStaticAnalysisCodegenRulesets'");
    if (!_config.unstableOperations["v2.listStaticAnalysisCodegenRulesets"]) {
      throw new Error(
        "Unstable operation 'listStaticAnalysisCodegenRulesets' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/static-analysis/codegen/rulesets";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listStaticAnalysisCodegenRulesets")
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
    filterRunningKernel?: boolean,
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listVulnerabilities'");
    if (!_config.unstableOperations["v2.listVulnerabilities"]) {
      throw new Error("Unstable operation 'listVulnerabilities' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/security/vulnerabilities";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listVulnerabilities")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageToken !== undefined) {
      requestContext.setQueryParam(
        "page[token]",
        ObjectSerializer.serialize(pageToken, "string", ""),
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
    if (filterType !== undefined) {
      requestContext.setQueryParam(
        "filter[type]",
        ObjectSerializer.serialize(filterType, "VulnerabilityType", ""),
        ""
      );
    }
    if (filterCvssBaseScoreOp !== undefined) {
      requestContext.setQueryParam(
        "filter[cvss.base.score][`$op`]",
        ObjectSerializer.serialize(filterCvssBaseScoreOp, "number", "double"),
        ""
      );
    }
    if (filterCvssBaseSeverity !== undefined) {
      requestContext.setQueryParam(
        "filter[cvss.base.severity]",
        ObjectSerializer.serialize(
          filterCvssBaseSeverity,
          "VulnerabilitySeverity",
          ""
        ),
        ""
      );
    }
    if (filterCvssBaseVector !== undefined) {
      requestContext.setQueryParam(
        "filter[cvss.base.vector]",
        ObjectSerializer.serialize(filterCvssBaseVector, "string", ""),
        ""
      );
    }
    if (filterCvssDatadogScoreOp !== undefined) {
      requestContext.setQueryParam(
        "filter[cvss.datadog.score][`$op`]",
        ObjectSerializer.serialize(
          filterCvssDatadogScoreOp,
          "number",
          "double"
        ),
        ""
      );
    }
    if (filterCvssDatadogSeverity !== undefined) {
      requestContext.setQueryParam(
        "filter[cvss.datadog.severity]",
        ObjectSerializer.serialize(
          filterCvssDatadogSeverity,
          "VulnerabilitySeverity",
          ""
        ),
        ""
      );
    }
    if (filterCvssDatadogVector !== undefined) {
      requestContext.setQueryParam(
        "filter[cvss.datadog.vector]",
        ObjectSerializer.serialize(filterCvssDatadogVector, "string", ""),
        ""
      );
    }
    if (filterStatus !== undefined) {
      requestContext.setQueryParam(
        "filter[status]",
        ObjectSerializer.serialize(filterStatus, "VulnerabilityStatus", ""),
        ""
      );
    }
    if (filterTool !== undefined) {
      requestContext.setQueryParam(
        "filter[tool]",
        ObjectSerializer.serialize(filterTool, "VulnerabilityTool", ""),
        ""
      );
    }
    if (filterLibraryName !== undefined) {
      requestContext.setQueryParam(
        "filter[library.name]",
        ObjectSerializer.serialize(filterLibraryName, "string", ""),
        ""
      );
    }
    if (filterLibraryVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[library.version]",
        ObjectSerializer.serialize(filterLibraryVersion, "string", ""),
        ""
      );
    }
    if (filterAdvisoryId !== undefined) {
      requestContext.setQueryParam(
        "filter[advisory.id]",
        ObjectSerializer.serialize(filterAdvisoryId, "string", ""),
        ""
      );
    }
    if (filterRisksExploitationProbability !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.exploitation_probability]",
        ObjectSerializer.serialize(
          filterRisksExploitationProbability,
          "boolean",
          ""
        ),
        ""
      );
    }
    if (filterRisksPocExploitAvailable !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.poc_exploit_available]",
        ObjectSerializer.serialize(
          filterRisksPocExploitAvailable,
          "boolean",
          ""
        ),
        ""
      );
    }
    if (filterRisksExploitAvailable !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.exploit_available]",
        ObjectSerializer.serialize(filterRisksExploitAvailable, "boolean", ""),
        ""
      );
    }
    if (filterRisksEpssScoreOp !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.epss.score][`$op`]",
        ObjectSerializer.serialize(filterRisksEpssScoreOp, "number", "double"),
        ""
      );
    }
    if (filterRisksEpssSeverity !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.epss.severity]",
        ObjectSerializer.serialize(
          filterRisksEpssSeverity,
          "VulnerabilitySeverity",
          ""
        ),
        ""
      );
    }
    if (filterLanguage !== undefined) {
      requestContext.setQueryParam(
        "filter[language]",
        ObjectSerializer.serialize(filterLanguage, "string", ""),
        ""
      );
    }
    if (filterEcosystem !== undefined) {
      requestContext.setQueryParam(
        "filter[ecosystem]",
        ObjectSerializer.serialize(
          filterEcosystem,
          "VulnerabilityEcosystem",
          ""
        ),
        ""
      );
    }
    if (filterCodeLocationLocation !== undefined) {
      requestContext.setQueryParam(
        "filter[code_location.location]",
        ObjectSerializer.serialize(filterCodeLocationLocation, "string", ""),
        ""
      );
    }
    if (filterCodeLocationFilePath !== undefined) {
      requestContext.setQueryParam(
        "filter[code_location.file_path]",
        ObjectSerializer.serialize(filterCodeLocationFilePath, "string", ""),
        ""
      );
    }
    if (filterCodeLocationMethod !== undefined) {
      requestContext.setQueryParam(
        "filter[code_location.method]",
        ObjectSerializer.serialize(filterCodeLocationMethod, "string", ""),
        ""
      );
    }
    if (filterFixAvailable !== undefined) {
      requestContext.setQueryParam(
        "filter[fix_available]",
        ObjectSerializer.serialize(filterFixAvailable, "boolean", ""),
        ""
      );
    }
    if (filterRepoDigests !== undefined) {
      requestContext.setQueryParam(
        "filter[repo_digests]",
        ObjectSerializer.serialize(filterRepoDigests, "string", ""),
        ""
      );
    }
    if (filterOrigin !== undefined) {
      requestContext.setQueryParam(
        "filter[origin]",
        ObjectSerializer.serialize(filterOrigin, "string", ""),
        ""
      );
    }
    if (filterRunningKernel !== undefined) {
      requestContext.setQueryParam(
        "filter[running_kernel]",
        ObjectSerializer.serialize(filterRunningKernel, "boolean", ""),
        ""
      );
    }
    if (filterAssetName !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.name]",
        ObjectSerializer.serialize(filterAssetName, "string", ""),
        ""
      );
    }
    if (filterAssetType !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.type]",
        ObjectSerializer.serialize(filterAssetType, "AssetType", ""),
        ""
      );
    }
    if (filterAssetVersionFirst !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.version.first]",
        ObjectSerializer.serialize(filterAssetVersionFirst, "string", ""),
        ""
      );
    }
    if (filterAssetVersionLast !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.version.last]",
        ObjectSerializer.serialize(filterAssetVersionLast, "string", ""),
        ""
      );
    }
    if (filterAssetRepositoryUrl !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.repository_url]",
        ObjectSerializer.serialize(filterAssetRepositoryUrl, "string", ""),
        ""
      );
    }
    if (filterAssetRisksInProduction !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.risks.in_production]",
        ObjectSerializer.serialize(filterAssetRisksInProduction, "boolean", ""),
        ""
      );
    }
    if (filterAssetRisksUnderAttack !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.risks.under_attack]",
        ObjectSerializer.serialize(filterAssetRisksUnderAttack, "boolean", ""),
        ""
      );
    }
    if (filterAssetRisksIsPubliclyAccessible !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.risks.is_publicly_accessible]",
        ObjectSerializer.serialize(
          filterAssetRisksIsPubliclyAccessible,
          "boolean",
          ""
        ),
        ""
      );
    }
    if (filterAssetRisksHasPrivilegedAccess !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.risks.has_privileged_access]",
        ObjectSerializer.serialize(
          filterAssetRisksHasPrivilegedAccess,
          "boolean",
          ""
        ),
        ""
      );
    }
    if (filterAssetRisksHasAccessToSensitiveData !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.risks.has_access_to_sensitive_data]",
        ObjectSerializer.serialize(
          filterAssetRisksHasAccessToSensitiveData,
          "boolean",
          ""
        ),
        ""
      );
    }
    if (filterAssetEnvironments !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.environments]",
        ObjectSerializer.serialize(filterAssetEnvironments, "string", ""),
        ""
      );
    }
    if (filterAssetTeams !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.teams]",
        ObjectSerializer.serialize(filterAssetTeams, "string", ""),
        ""
      );
    }
    if (filterAssetArch !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.arch]",
        ObjectSerializer.serialize(filterAssetArch, "string", ""),
        ""
      );
    }
    if (filterAssetOperatingSystemName !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.operating_system.name]",
        ObjectSerializer.serialize(
          filterAssetOperatingSystemName,
          "string",
          ""
        ),
        ""
      );
    }
    if (filterAssetOperatingSystemVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[asset.operating_system.version]",
        ObjectSerializer.serialize(
          filterAssetOperatingSystemVersion,
          "string",
          ""
        ),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listVulnerableAssets'");
    if (!_config.unstableOperations["v2.listVulnerableAssets"]) {
      throw new Error("Unstable operation 'listVulnerableAssets' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/security/vulnerable-assets";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listVulnerableAssets")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageToken !== undefined) {
      requestContext.setQueryParam(
        "page[token]",
        ObjectSerializer.serialize(pageToken, "string", ""),
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
    if (filterName !== undefined) {
      requestContext.setQueryParam(
        "filter[name]",
        ObjectSerializer.serialize(filterName, "string", ""),
        ""
      );
    }
    if (filterType !== undefined) {
      requestContext.setQueryParam(
        "filter[type]",
        ObjectSerializer.serialize(filterType, "AssetType", ""),
        ""
      );
    }
    if (filterVersionFirst !== undefined) {
      requestContext.setQueryParam(
        "filter[version.first]",
        ObjectSerializer.serialize(filterVersionFirst, "string", ""),
        ""
      );
    }
    if (filterVersionLast !== undefined) {
      requestContext.setQueryParam(
        "filter[version.last]",
        ObjectSerializer.serialize(filterVersionLast, "string", ""),
        ""
      );
    }
    if (filterRepositoryUrl !== undefined) {
      requestContext.setQueryParam(
        "filter[repository_url]",
        ObjectSerializer.serialize(filterRepositoryUrl, "string", ""),
        ""
      );
    }
    if (filterRisksInProduction !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.in_production]",
        ObjectSerializer.serialize(filterRisksInProduction, "boolean", ""),
        ""
      );
    }
    if (filterRisksUnderAttack !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.under_attack]",
        ObjectSerializer.serialize(filterRisksUnderAttack, "boolean", ""),
        ""
      );
    }
    if (filterRisksIsPubliclyAccessible !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.is_publicly_accessible]",
        ObjectSerializer.serialize(
          filterRisksIsPubliclyAccessible,
          "boolean",
          ""
        ),
        ""
      );
    }
    if (filterRisksHasPrivilegedAccess !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.has_privileged_access]",
        ObjectSerializer.serialize(
          filterRisksHasPrivilegedAccess,
          "boolean",
          ""
        ),
        ""
      );
    }
    if (filterRisksHasAccessToSensitiveData !== undefined) {
      requestContext.setQueryParam(
        "filter[risks.has_access_to_sensitive_data]",
        ObjectSerializer.serialize(
          filterRisksHasAccessToSensitiveData,
          "boolean",
          ""
        ),
        ""
      );
    }
    if (filterEnvironments !== undefined) {
      requestContext.setQueryParam(
        "filter[environments]",
        ObjectSerializer.serialize(filterEnvironments, "string", ""),
        ""
      );
    }
    if (filterTeams !== undefined) {
      requestContext.setQueryParam(
        "filter[teams]",
        ObjectSerializer.serialize(filterTeams, "string", ""),
        ""
      );
    }
    if (filterArch !== undefined) {
      requestContext.setQueryParam(
        "filter[arch]",
        ObjectSerializer.serialize(filterArch, "string", ""),
        ""
      );
    }
    if (filterOperatingSystemName !== undefined) {
      requestContext.setQueryParam(
        "filter[operating_system.name]",
        ObjectSerializer.serialize(filterOperatingSystemName, "string", ""),
        ""
      );
    }
    if (filterOperatingSystemVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[operating_system.version]",
        ObjectSerializer.serialize(filterOperatingSystemVersion, "string", ""),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'muteFindings'");
    if (!_config.unstableOperations["v2.muteFindings"]) {
      throw new Error("Unstable operation 'muteFindings' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "muteFindings");
    }

    // Path Params
    const localVarPath = "/api/v2/posture_management/findings";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.muteFindings")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "BulkMuteFindingsRequest", ""),
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

  public async muteSecurityFindings(
    body: MuteFindingsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "muteSecurityFindings");
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/mute";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.muteSecurityFindings")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "MuteFindingsRequest", ""),
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

  public async patchSignalNotificationRule(
    id: string,
    body: PatchNotificationRuleParameters,
    _options?: Configuration
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
        encodeURIComponent(String(id))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.patchSignalNotificationRule")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PatchNotificationRuleParameters", ""),
      contentType
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
    _options?: Configuration
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
        encodeURIComponent(String(id))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.patchVulnerabilityNotificationRule")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PatchNotificationRuleParameters", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'runHistoricalJob'");
    if (!_config.unstableOperations["v2.runHistoricalJob"]) {
      throw new Error("Unstable operation 'runHistoricalJob' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "runHistoricalJob");
    }

    // Path Params
    const localVarPath = "/api/v2/siem-historical-detections/jobs";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.runHistoricalJob")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RunHistoricalJobRequest", ""),
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

  public async searchSecurityFindings(
    body: SecurityFindingsSearchRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "searchSecurityFindings");
    }

    // Path Params
    const localVarPath = "/api/v2/security/findings/search";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.searchSecurityFindings")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SecurityFindingsSearchRequest", ""),
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

  public async searchSecurityMonitoringHistsignals(
    body?: SecurityMonitoringSignalListRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'searchSecurityMonitoringHistsignals'"
    );
    if (!_config.unstableOperations["v2.searchSecurityMonitoringHistsignals"]) {
      throw new Error(
        "Unstable operation 'searchSecurityMonitoringHistsignals' is disabled"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/siem-historical-detections/histsignals/search";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.searchSecurityMonitoringHistsignals")
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
        "SecurityMonitoringSignalListRequest",
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

  public async searchSecurityMonitoringSignals(
    body?: SecurityMonitoringSignalListRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/signals/search";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.searchSecurityMonitoringSignals")
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
        "SecurityMonitoringSignalListRequest",
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

  public async testExistingSecurityMonitoringRule(
    ruleId: string,
    body: SecurityMonitoringRuleTestRequest,
    _options?: Configuration
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
        encodeURIComponent(String(ruleId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.testExistingSecurityMonitoringRule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SecurityMonitoringRuleTestRequest", ""),
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

  public async testSecurityMonitoringRule(
    body: SecurityMonitoringRuleTestRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "testSecurityMonitoringRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/test";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.testSecurityMonitoringRule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SecurityMonitoringRuleTestRequest", ""),
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

  public async updateCustomFramework(
    handle: string,
    version: string,
    body: UpdateCustomFrameworkRequest,
    _options?: Configuration
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
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.updateCustomFramework")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UpdateCustomFrameworkRequest", ""),
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

  public async updateResourceEvaluationFilters(
    body: UpdateResourceEvaluationFiltersRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateResourceEvaluationFilters");
    }

    // Path Params
    const localVarPath = "/api/v2/cloud_security_management/resource_filters";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.updateResourceEvaluationFilters")
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
        "UpdateResourceEvaluationFiltersRequest",
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

  public async updateSecurityFilter(
    securityFilterId: string,
    body: SecurityFilterUpdateRequest,
    _options?: Configuration
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
        encodeURIComponent(String(securityFilterId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.updateSecurityFilter")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SecurityFilterUpdateRequest", ""),
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

  public async updateSecurityMonitoringCriticalAsset(
    criticalAssetId: string,
    body: SecurityMonitoringCriticalAssetUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'criticalAssetId' is not null or undefined
    if (criticalAssetId === null || criticalAssetId === undefined) {
      throw new RequiredError(
        "criticalAssetId",
        "updateSecurityMonitoringCriticalAsset"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateSecurityMonitoringCriticalAsset");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/critical_assets/{critical_asset_id}".replace(
        "{critical_asset_id}",
        encodeURIComponent(String(criticalAssetId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.updateSecurityMonitoringCriticalAsset"
      )
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
        "SecurityMonitoringCriticalAssetUpdateRequest",
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

  public async updateSecurityMonitoringDataset(
    datasetId: string,
    body: SecurityMonitoringDatasetUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateSecurityMonitoringDataset'");
    if (!_config.unstableOperations["v2.updateSecurityMonitoringDataset"]) {
      throw new Error(
        "Unstable operation 'updateSecurityMonitoringDataset' is disabled"
      );
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "updateSecurityMonitoringDataset");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateSecurityMonitoringDataset");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/datasets/{dataset_id}".replace(
        "{dataset_id}",
        encodeURIComponent(String(datasetId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.updateSecurityMonitoringDataset")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "SecurityMonitoringDatasetUpdateRequest",
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

  public async updateSecurityMonitoringIntegrationConfig(
    integrationConfigId: string,
    body: SecurityMonitoringIntegrationConfigUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateSecurityMonitoringIntegrationConfig'"
    );
    if (
      !_config.unstableOperations[
        "v2.updateSecurityMonitoringIntegrationConfig"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateSecurityMonitoringIntegrationConfig' is disabled"
      );
    }

    // verify required parameter 'integrationConfigId' is not null or undefined
    if (integrationConfigId === null || integrationConfigId === undefined) {
      throw new RequiredError(
        "integrationConfigId",
        "updateSecurityMonitoringIntegrationConfig"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateSecurityMonitoringIntegrationConfig"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/integration_config/{integration_config_id}".replace(
        "{integration_config_id}",
        encodeURIComponent(String(integrationConfigId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.updateSecurityMonitoringIntegrationConfig"
      )
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
        "SecurityMonitoringIntegrationConfigUpdateRequest",
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

  public async updateSecurityMonitoringRule(
    ruleId: string,
    body: SecurityMonitoringRuleUpdatePayload,
    _options?: Configuration
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
      encodeURIComponent(String(ruleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.updateSecurityMonitoringRule")
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
        "SecurityMonitoringRuleUpdatePayload",
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

  public async updateSecurityMonitoringSuppression(
    suppressionId: string,
    body: SecurityMonitoringSuppressionUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'suppressionId' is not null or undefined
    if (suppressionId === null || suppressionId === undefined) {
      throw new RequiredError(
        "suppressionId",
        "updateSecurityMonitoringSuppression"
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
        encodeURIComponent(String(suppressionId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.updateSecurityMonitoringSuppression")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
        "SecurityMonitoringSuppressionUpdateRequest",
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

  public async validateSecurityMonitoringIntegrationConfig(
    integrationConfigId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'validateSecurityMonitoringIntegrationConfig'"
    );
    if (
      !_config.unstableOperations[
        "v2.validateSecurityMonitoringIntegrationConfig"
      ]
    ) {
      throw new Error(
        "Unstable operation 'validateSecurityMonitoringIntegrationConfig' is disabled"
      );
    }

    // verify required parameter 'integrationConfigId' is not null or undefined
    if (integrationConfigId === null || integrationConfigId === undefined) {
      throw new RequiredError(
        "integrationConfigId",
        "validateSecurityMonitoringIntegrationConfig"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/integration_config/{integration_config_id}/validate".replace(
        "{integration_config_id}",
        encodeURIComponent(String(integrationConfigId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.validateSecurityMonitoringIntegrationConfig"
      )
      .makeRequestContext(localVarPath, HttpMethod.POST);
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

  public async validateSecurityMonitoringIntegrationCredentials(
    body: SecurityMonitoringIntegrationCredentialsValidateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'validateSecurityMonitoringIntegrationCredentials'"
    );
    if (
      !_config.unstableOperations[
        "v2.validateSecurityMonitoringIntegrationCredentials"
      ]
    ) {
      throw new Error(
        "Unstable operation 'validateSecurityMonitoringIntegrationCredentials' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "validateSecurityMonitoringIntegrationCredentials"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/integration_config/validate";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.validateSecurityMonitoringIntegrationCredentials"
      )
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "SecurityMonitoringIntegrationCredentialsValidateRequest",
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

  public async validateSecurityMonitoringRule(
    body: SecurityMonitoringRuleValidatePayload,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "validateSecurityMonitoringRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/validation";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.validateSecurityMonitoringRule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "SecurityMonitoringRuleValidatePayload",
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

  public async validateSecurityMonitoringSuppression(
    body: SecurityMonitoringSuppressionCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "validateSecurityMonitoringSuppression");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/suppressions/validation";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.validateSecurityMonitoringSuppression"
      )
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "SecurityMonitoringSuppressionCreateRequest",
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

export class SecurityMonitoringApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to activateContentPack
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async activateContentPack(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      return;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
   * @params response Response returned by the server for a request to attachCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async attachCase(
    response: ResponseContext
  ): Promise<FindingCaseResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FindingCaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FindingCaseResponse"
      ) as FindingCaseResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: FindingCaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FindingCaseResponse",
        ""
      ) as FindingCaseResponse;
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
   * @params response Response returned by the server for a request to attachJiraIssue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async attachJiraIssue(
    response: ResponseContext
  ): Promise<FindingCaseResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FindingCaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FindingCaseResponse"
      ) as FindingCaseResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: FindingCaseResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FindingCaseResponse",
        ""
      ) as FindingCaseResponse;
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
   * @params response Response returned by the server for a request to batchGetSecurityMonitoringDatasetDependencies
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async batchGetSecurityMonitoringDatasetDependencies(
    response: ResponseContext
  ): Promise<SecurityMonitoringDatasetDependenciesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringDatasetDependenciesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringDatasetDependenciesResponse"
        ) as SecurityMonitoringDatasetDependenciesResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: SecurityMonitoringDatasetDependenciesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringDatasetDependenciesResponse",
          ""
        ) as SecurityMonitoringDatasetDependenciesResponse;
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
   * @params response Response returned by the server for a request to bulkCreateSampleLogGenerationSubscriptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkCreateSampleLogGenerationSubscriptions(
    response: ResponseContext
  ): Promise<SampleLogGenerationBulkSubscriptionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SampleLogGenerationBulkSubscriptionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SampleLogGenerationBulkSubscriptionResponse"
        ) as SampleLogGenerationBulkSubscriptionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SampleLogGenerationBulkSubscriptionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SampleLogGenerationBulkSubscriptionResponse",
          ""
        ) as SampleLogGenerationBulkSubscriptionResponse;
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
   * @params response Response returned by the server for a request to bulkDeleteSecurityMonitoringRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkDeleteSecurityMonitoringRules(
    response: ResponseContext
  ): Promise<SecurityMonitoringRuleBulkDeleteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringRuleBulkDeleteResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringRuleBulkDeleteResponse"
        ) as SecurityMonitoringRuleBulkDeleteResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SecurityMonitoringRuleBulkDeleteResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringRuleBulkDeleteResponse",
          ""
        ) as SecurityMonitoringRuleBulkDeleteResponse;
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
   * @params response Response returned by the server for a request to bulkEditSecurityMonitoringSignals
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkEditSecurityMonitoringSignals(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalsBulkTriageUpdateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalsBulkTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsBulkTriageUpdateResponse"
        ) as SecurityMonitoringSignalsBulkTriageUpdateResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: SecurityMonitoringSignalsBulkTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsBulkTriageUpdateResponse",
          ""
        ) as SecurityMonitoringSignalsBulkTriageUpdateResponse;
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
   * @params response Response returned by the server for a request to bulkEditSecurityMonitoringSignalsAssignee
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkEditSecurityMonitoringSignalsAssignee(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalsBulkTriageUpdateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalsBulkTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsBulkTriageUpdateResponse"
        ) as SecurityMonitoringSignalsBulkTriageUpdateResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: SecurityMonitoringSignalsBulkTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsBulkTriageUpdateResponse",
          ""
        ) as SecurityMonitoringSignalsBulkTriageUpdateResponse;
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
   * @params response Response returned by the server for a request to bulkEditSecurityMonitoringSignalsState
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkEditSecurityMonitoringSignalsState(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalsBulkTriageUpdateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalsBulkTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsBulkTriageUpdateResponse"
        ) as SecurityMonitoringSignalsBulkTriageUpdateResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: SecurityMonitoringSignalsBulkTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsBulkTriageUpdateResponse",
          ""
        ) as SecurityMonitoringSignalsBulkTriageUpdateResponse;
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
   * @params response Response returned by the server for a request to bulkExportSecurityMonitoringRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkExportSecurityMonitoringRules(
    response: ResponseContext
  ): Promise<HttpFile> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: HttpFile = (await response.getBodyAsFile()) as HttpFile;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: HttpFile =
        (await response.getBodyAsFile()) as any as HttpFile;
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
   * @params response Response returned by the server for a request to bulkExportSecurityMonitoringTerraformResources
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkExportSecurityMonitoringTerraformResources(
    response: ResponseContext
  ): Promise<HttpFile> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: HttpFile = (await response.getBodyAsFile()) as HttpFile;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: HttpFile =
        (await response.getBodyAsFile()) as any as HttpFile;
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
   * @params response Response returned by the server for a request to cancelHistoricalJob
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cancelHistoricalJob(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to convertExistingSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async convertExistingSecurityMonitoringRule(
    response: ResponseContext
  ): Promise<SecurityMonitoringRuleConvertResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringRuleConvertResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringRuleConvertResponse"
        ) as SecurityMonitoringRuleConvertResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SecurityMonitoringRuleConvertResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringRuleConvertResponse",
          ""
        ) as SecurityMonitoringRuleConvertResponse;
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
   * @params response Response returned by the server for a request to convertJobResultToSignal
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async convertJobResultToSignal(
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
   * @params response Response returned by the server for a request to convertSecurityMonitoringRuleFromJSONToTerraform
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async convertSecurityMonitoringRuleFromJSONToTerraform(
    response: ResponseContext
  ): Promise<SecurityMonitoringRuleConvertResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringRuleConvertResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringRuleConvertResponse"
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
      const body: SecurityMonitoringRuleConvertResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringRuleConvertResponse",
          ""
        ) as SecurityMonitoringRuleConvertResponse;
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
   * @params response Response returned by the server for a request to convertSecurityMonitoringTerraformResource
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async convertSecurityMonitoringTerraformResource(
    response: ResponseContext
  ): Promise<SecurityMonitoringTerraformExportResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringTerraformExportResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringTerraformExportResponse"
        ) as SecurityMonitoringTerraformExportResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SecurityMonitoringTerraformExportResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringTerraformExportResponse",
          ""
        ) as SecurityMonitoringTerraformExportResponse;
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
   * @params response Response returned by the server for a request to createCases
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCases(
    response: ResponseContext
  ): Promise<FindingCaseResponseArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: FindingCaseResponseArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FindingCaseResponseArray"
      ) as FindingCaseResponseArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: FindingCaseResponseArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FindingCaseResponseArray",
        ""
      ) as FindingCaseResponseArray;
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
   * @params response Response returned by the server for a request to createCustomFramework
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCustomFramework(
    response: ResponseContext
  ): Promise<CreateCustomFrameworkResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CreateCustomFrameworkResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreateCustomFrameworkResponse"
      ) as CreateCustomFrameworkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 500
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
      const body: CreateCustomFrameworkResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreateCustomFrameworkResponse",
        ""
      ) as CreateCustomFrameworkResponse;
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
   * @params response Response returned by the server for a request to createJiraIssues
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createJiraIssues(
    response: ResponseContext
  ): Promise<FindingCaseResponseArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: FindingCaseResponseArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FindingCaseResponseArray"
      ) as FindingCaseResponseArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: FindingCaseResponseArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FindingCaseResponseArray",
        ""
      ) as FindingCaseResponseArray;
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
   * @params response Response returned by the server for a request to createSampleLogGenerationSubscription
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSampleLogGenerationSubscription(
    response: ResponseContext
  ): Promise<SampleLogGenerationSubscriptionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SampleLogGenerationSubscriptionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SampleLogGenerationSubscriptionResponse"
        ) as SampleLogGenerationSubscriptionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SampleLogGenerationSubscriptionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SampleLogGenerationSubscriptionResponse",
          ""
        ) as SampleLogGenerationSubscriptionResponse;
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
   * @params response Response returned by the server for a request to createSecurityFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityFilter(
    response: ResponseContext
  ): Promise<SecurityFilterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityFilterResponse"
      ) as SecurityFilterResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SecurityFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityFilterResponse",
        ""
      ) as SecurityFilterResponse;
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
   * @params response Response returned by the server for a request to createSecurityMonitoringCriticalAsset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityMonitoringCriticalAsset(
    response: ResponseContext
  ): Promise<SecurityMonitoringCriticalAssetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringCriticalAssetResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringCriticalAssetResponse"
        ) as SecurityMonitoringCriticalAssetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SecurityMonitoringCriticalAssetResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringCriticalAssetResponse",
          ""
        ) as SecurityMonitoringCriticalAssetResponse;
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
   * @params response Response returned by the server for a request to createSecurityMonitoringDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityMonitoringDataset(
    response: ResponseContext
  ): Promise<SecurityMonitoringDatasetCreateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: SecurityMonitoringDatasetCreateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringDatasetCreateResponse"
        ) as SecurityMonitoringDatasetCreateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: SecurityMonitoringDatasetCreateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringDatasetCreateResponse",
          ""
        ) as SecurityMonitoringDatasetCreateResponse;
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
   * @params response Response returned by the server for a request to createSecurityMonitoringIntegrationConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityMonitoringIntegrationConfig(
    response: ResponseContext
  ): Promise<SecurityMonitoringIntegrationConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringIntegrationConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringIntegrationConfigResponse"
        ) as SecurityMonitoringIntegrationConfigResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SecurityMonitoringIntegrationConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringIntegrationConfigResponse",
          ""
        ) as SecurityMonitoringIntegrationConfigResponse;
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
   * @params response Response returned by the server for a request to createSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityMonitoringRule(
    response: ResponseContext
  ): Promise<SecurityMonitoringRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityMonitoringRuleResponse"
      ) as SecurityMonitoringRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SecurityMonitoringRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityMonitoringRuleResponse",
        ""
      ) as SecurityMonitoringRuleResponse;
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
   * @params response Response returned by the server for a request to createSecurityMonitoringSuppression
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityMonitoringSuppression(
    response: ResponseContext
  ): Promise<SecurityMonitoringSuppressionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSuppressionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSuppressionResponse"
        ) as SecurityMonitoringSuppressionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SecurityMonitoringSuppressionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSuppressionResponse",
          ""
        ) as SecurityMonitoringSuppressionResponse;
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
   * @params response Response returned by the server for a request to createSignalNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSignalNotificationRule(
    response: ResponseContext
  ): Promise<NotificationRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: NotificationRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationRuleResponse"
      ) as NotificationRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: NotificationRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationRuleResponse",
        ""
      ) as NotificationRuleResponse;
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
   * @params response Response returned by the server for a request to createStaticAnalysisAst
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createStaticAnalysisAst(
    response: ResponseContext
  ): Promise<GetAstResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GetAstResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetAstResponse"
      ) as GetAstResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 401) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: GetAstResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetAstResponse",
        ""
      ) as GetAstResponse;
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
   * @params response Response returned by the server for a request to createStaticAnalysisServerAnalysis
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createStaticAnalysisServerAnalysis(
    response: ResponseContext
  ): Promise<AnalysisResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AnalysisResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AnalysisResponse"
      ) as AnalysisResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 401) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: AnalysisResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AnalysisResponse",
        ""
      ) as AnalysisResponse;
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
   * @params response Response returned by the server for a request to createVulnerabilityNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createVulnerabilityNotificationRule(
    response: ResponseContext
  ): Promise<NotificationRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: NotificationRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationRuleResponse"
      ) as NotificationRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: NotificationRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationRuleResponse",
        ""
      ) as NotificationRuleResponse;
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
   * @params response Response returned by the server for a request to deactivateContentPack
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deactivateContentPack(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      return;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
   * @params response Response returned by the server for a request to deleteCustomFramework
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCustomFramework(
    response: ResponseContext
  ): Promise<DeleteCustomFrameworkResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DeleteCustomFrameworkResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeleteCustomFrameworkResponse"
      ) as DeleteCustomFrameworkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 500
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
      const body: DeleteCustomFrameworkResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeleteCustomFrameworkResponse",
        ""
      ) as DeleteCustomFrameworkResponse;
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
   * @params response Response returned by the server for a request to deleteHistoricalJob
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteHistoricalJob(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteSampleLogGenerationSubscription
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSampleLogGenerationSubscription(
    response: ResponseContext
  ): Promise<SampleLogGenerationSubscriptionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SampleLogGenerationSubscriptionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SampleLogGenerationSubscriptionResponse"
        ) as SampleLogGenerationSubscriptionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SampleLogGenerationSubscriptionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SampleLogGenerationSubscriptionResponse",
          ""
        ) as SampleLogGenerationSubscriptionResponse;
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
   * @params response Response returned by the server for a request to deleteSecurityFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityFilter(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteSecurityMonitoringCriticalAsset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityMonitoringCriticalAsset(
    response: ResponseContext
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteSecurityMonitoringDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityMonitoringDataset(
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
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
   * @params response Response returned by the server for a request to deleteSecurityMonitoringIntegrationConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityMonitoringIntegrationConfig(
    response: ResponseContext
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityMonitoringRule(
    response: ResponseContext
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteSecurityMonitoringSuppression
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityMonitoringSuppression(
    response: ResponseContext
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteSignalNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSignalNotificationRule(
    response: ResponseContext
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to deleteVulnerabilityNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteVulnerabilityNotificationRule(
    response: ResponseContext
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to detachCase
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async detachCase(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
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
   * @params response Response returned by the server for a request to editSecurityMonitoringSignal
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async editSecurityMonitoringSignal(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalTriageUpdateResponse"
        ) as SecurityMonitoringSignalTriageUpdateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: SecurityMonitoringSignalTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalTriageUpdateResponse",
          ""
        ) as SecurityMonitoringSignalTriageUpdateResponse;
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
   * @params response Response returned by the server for a request to editSecurityMonitoringSignalAssignee
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async editSecurityMonitoringSignalAssignee(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalTriageUpdateResponse"
        ) as SecurityMonitoringSignalTriageUpdateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SecurityMonitoringSignalTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalTriageUpdateResponse",
          ""
        ) as SecurityMonitoringSignalTriageUpdateResponse;
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
   * @params response Response returned by the server for a request to editSecurityMonitoringSignalIncidents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async editSecurityMonitoringSignalIncidents(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalTriageUpdateResponse"
        ) as SecurityMonitoringSignalTriageUpdateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SecurityMonitoringSignalTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalTriageUpdateResponse",
          ""
        ) as SecurityMonitoringSignalTriageUpdateResponse;
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
   * @params response Response returned by the server for a request to editSecurityMonitoringSignalState
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async editSecurityMonitoringSignalState(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalTriageUpdateResponse"
        ) as SecurityMonitoringSignalTriageUpdateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SecurityMonitoringSignalTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalTriageUpdateResponse",
          ""
        ) as SecurityMonitoringSignalTriageUpdateResponse;
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
   * @params response Response returned by the server for a request to exportSecurityMonitoringTerraformResource
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async exportSecurityMonitoringTerraformResource(
    response: ResponseContext
  ): Promise<SecurityMonitoringTerraformExportResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringTerraformExportResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringTerraformExportResponse"
        ) as SecurityMonitoringTerraformExportResponse;
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
      const body: SecurityMonitoringTerraformExportResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringTerraformExportResponse",
          ""
        ) as SecurityMonitoringTerraformExportResponse;
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
   * @params response Response returned by the server for a request to getContentPacksStates
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getContentPacksStates(
    response: ResponseContext
  ): Promise<SecurityMonitoringContentPackStatesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringContentPackStatesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringContentPackStatesResponse"
        ) as SecurityMonitoringContentPackStatesResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: SecurityMonitoringContentPackStatesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringContentPackStatesResponse",
          ""
        ) as SecurityMonitoringContentPackStatesResponse;
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
   * @params response Response returned by the server for a request to getCriticalAssetsAffectingRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCriticalAssetsAffectingRule(
    response: ResponseContext
  ): Promise<SecurityMonitoringCriticalAssetsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringCriticalAssetsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringCriticalAssetsResponse"
        ) as SecurityMonitoringCriticalAssetsResponse;
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
      const body: SecurityMonitoringCriticalAssetsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringCriticalAssetsResponse",
          ""
        ) as SecurityMonitoringCriticalAssetsResponse;
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
   * @params response Response returned by the server for a request to getCustomFramework
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCustomFramework(
    response: ResponseContext
  ): Promise<GetCustomFrameworkResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GetCustomFrameworkResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetCustomFrameworkResponse"
      ) as GetCustomFrameworkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 500
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
      const body: GetCustomFrameworkResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetCustomFrameworkResponse",
        ""
      ) as GetCustomFrameworkResponse;
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
   * @params response Response returned by the server for a request to getEntityContext
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEntityContext(
    response: ResponseContext
  ): Promise<EntityContextResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: EntityContextResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EntityContextResponse"
      ) as EntityContextResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: EntityContextResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EntityContextResponse",
        ""
      ) as EntityContextResponse;
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
   * @params response Response returned by the server for a request to getFinding
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getFinding(
    response: ResponseContext
  ): Promise<GetFindingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GetFindingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetFindingResponse"
      ) as GetFindingResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GetFindingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetFindingResponse",
        ""
      ) as GetFindingResponse;
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
   * @params response Response returned by the server for a request to getHistoricalJob
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getHistoricalJob(
    response: ResponseContext
  ): Promise<HistoricalJobResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: HistoricalJobResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HistoricalJobResponse"
      ) as HistoricalJobResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: HistoricalJobResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HistoricalJobResponse",
        ""
      ) as HistoricalJobResponse;
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
   * @params response Response returned by the server for a request to getIndicatorOfCompromise
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIndicatorOfCompromise(
    response: ResponseContext
  ): Promise<GetIoCIndicatorResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GetIoCIndicatorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetIoCIndicatorResponse"
      ) as GetIoCIndicatorResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: GetIoCIndicatorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetIoCIndicatorResponse",
        ""
      ) as GetIoCIndicatorResponse;
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
   * @params response Response returned by the server for a request to getInvestigationLogQueriesMatchingSignal
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getInvestigationLogQueriesMatchingSignal(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalSuggestedActionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalSuggestedActionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalSuggestedActionsResponse"
        ) as SecurityMonitoringSignalSuggestedActionsResponse;
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
      const body: SecurityMonitoringSignalSuggestedActionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalSuggestedActionsResponse",
          ""
        ) as SecurityMonitoringSignalSuggestedActionsResponse;
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
   * @params response Response returned by the server for a request to getResourceEvaluationFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getResourceEvaluationFilters(
    response: ResponseContext
  ): Promise<GetResourceEvaluationFiltersResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GetResourceEvaluationFiltersResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GetResourceEvaluationFiltersResponse"
        ) as GetResourceEvaluationFiltersResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: GetResourceEvaluationFiltersResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GetResourceEvaluationFiltersResponse",
          ""
        ) as GetResourceEvaluationFiltersResponse;
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
   * @params response Response returned by the server for a request to getRuleVersionHistory
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRuleVersionHistory(
    response: ResponseContext
  ): Promise<GetRuleVersionHistoryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GetRuleVersionHistoryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetRuleVersionHistoryResponse"
      ) as GetRuleVersionHistoryResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: GetRuleVersionHistoryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetRuleVersionHistoryResponse",
        ""
      ) as GetRuleVersionHistoryResponse;
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
   * @params response Response returned by the server for a request to getSBOM
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSBOM(response: ResponseContext): Promise<GetSBOMResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GetSBOMResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetSBOMResponse"
      ) as GetSBOMResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: GetSBOMResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetSBOMResponse",
        ""
      ) as GetSBOMResponse;
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
   * @params response Response returned by the server for a request to getSecretsRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecretsRules(
    response: ResponseContext
  ): Promise<SecretRuleArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecretRuleArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecretRuleArray"
      ) as SecretRuleArray;
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
      const body: SecretRuleArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecretRuleArray",
        ""
      ) as SecretRuleArray;
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
   * @params response Response returned by the server for a request to getSecurityFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityFilter(
    response: ResponseContext
  ): Promise<SecurityFilterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityFilterResponse"
      ) as SecurityFilterResponse;
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
      const body: SecurityFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityFilterResponse",
        ""
      ) as SecurityFilterResponse;
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
   * @params response Response returned by the server for a request to getSecurityMonitoringCriticalAsset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringCriticalAsset(
    response: ResponseContext
  ): Promise<SecurityMonitoringCriticalAssetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringCriticalAssetResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringCriticalAssetResponse"
        ) as SecurityMonitoringCriticalAssetResponse;
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
      const body: SecurityMonitoringCriticalAssetResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringCriticalAssetResponse",
          ""
        ) as SecurityMonitoringCriticalAssetResponse;
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
   * @params response Response returned by the server for a request to getSecurityMonitoringDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringDataset(
    response: ResponseContext
  ): Promise<SecurityMonitoringDatasetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringDatasetResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringDatasetResponse"
        ) as SecurityMonitoringDatasetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: SecurityMonitoringDatasetResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringDatasetResponse",
          ""
        ) as SecurityMonitoringDatasetResponse;
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
   * @params response Response returned by the server for a request to getSecurityMonitoringDatasetByVersion
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringDatasetByVersion(
    response: ResponseContext
  ): Promise<SecurityMonitoringDatasetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringDatasetResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringDatasetResponse"
        ) as SecurityMonitoringDatasetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: SecurityMonitoringDatasetResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringDatasetResponse",
          ""
        ) as SecurityMonitoringDatasetResponse;
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
   * @params response Response returned by the server for a request to getSecurityMonitoringDatasetVersionHistory
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringDatasetVersionHistory(
    response: ResponseContext
  ): Promise<SecurityMonitoringDatasetVersionHistoryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringDatasetVersionHistoryResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringDatasetVersionHistoryResponse"
        ) as SecurityMonitoringDatasetVersionHistoryResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: SecurityMonitoringDatasetVersionHistoryResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringDatasetVersionHistoryResponse",
          ""
        ) as SecurityMonitoringDatasetVersionHistoryResponse;
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
   * @params response Response returned by the server for a request to getSecurityMonitoringHistsignal
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringHistsignal(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalResponse"
        ) as SecurityMonitoringSignalResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SecurityMonitoringSignalResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalResponse",
          ""
        ) as SecurityMonitoringSignalResponse;
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
   * @params response Response returned by the server for a request to getSecurityMonitoringHistsignalsByJobId
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringHistsignalsByJobId(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsListResponse"
        ) as SecurityMonitoringSignalsListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SecurityMonitoringSignalsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsListResponse",
          ""
        ) as SecurityMonitoringSignalsListResponse;
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
   * @params response Response returned by the server for a request to getSecurityMonitoringIntegrationConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringIntegrationConfig(
    response: ResponseContext
  ): Promise<SecurityMonitoringIntegrationConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringIntegrationConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringIntegrationConfigResponse"
        ) as SecurityMonitoringIntegrationConfigResponse;
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
      const body: SecurityMonitoringIntegrationConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringIntegrationConfigResponse",
          ""
        ) as SecurityMonitoringIntegrationConfigResponse;
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
   * @params response Response returned by the server for a request to getSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringRule(
    response: ResponseContext
  ): Promise<SecurityMonitoringRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityMonitoringRuleResponse"
      ) as SecurityMonitoringRuleResponse;
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
      const body: SecurityMonitoringRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityMonitoringRuleResponse",
        ""
      ) as SecurityMonitoringRuleResponse;
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
   * @params response Response returned by the server for a request to getSecurityMonitoringSignal
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringSignal(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalResponse"
        ) as SecurityMonitoringSignalResponse;
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
      const body: SecurityMonitoringSignalResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalResponse",
          ""
        ) as SecurityMonitoringSignalResponse;
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
   * @params response Response returned by the server for a request to getSecurityMonitoringSuppression
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringSuppression(
    response: ResponseContext
  ): Promise<SecurityMonitoringSuppressionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSuppressionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSuppressionResponse"
        ) as SecurityMonitoringSuppressionResponse;
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
      const body: SecurityMonitoringSuppressionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSuppressionResponse",
          ""
        ) as SecurityMonitoringSuppressionResponse;
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
   * @params response Response returned by the server for a request to getSignalEntities
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSignalEntities(
    response: ResponseContext
  ): Promise<SignalEntitiesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SignalEntitiesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SignalEntitiesResponse"
      ) as SignalEntitiesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SignalEntitiesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SignalEntitiesResponse",
        ""
      ) as SignalEntitiesResponse;
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
   * @params response Response returned by the server for a request to getSignalNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSignalNotificationRule(
    response: ResponseContext
  ): Promise<NotificationRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: NotificationRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationRuleResponse"
      ) as NotificationRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: NotificationRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationRuleResponse",
        ""
      ) as NotificationRuleResponse;
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
   * @params response Response returned by the server for a request to getSignalNotificationRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSignalNotificationRules(
    response: ResponseContext
  ): Promise<NotificationRulesList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: NotificationRulesList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationRulesList"
      ) as NotificationRulesList;
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
      const body: NotificationRulesList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationRulesList",
        ""
      ) as NotificationRulesList;
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
   * @params response Response returned by the server for a request to getStaticAnalysisDefaultRulesets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getStaticAnalysisDefaultRulesets(
    response: ResponseContext
  ): Promise<DefaultRulesetsPerLanguageResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DefaultRulesetsPerLanguageResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DefaultRulesetsPerLanguageResponse"
        ) as DefaultRulesetsPerLanguageResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: DefaultRulesetsPerLanguageResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DefaultRulesetsPerLanguageResponse",
          ""
        ) as DefaultRulesetsPerLanguageResponse;
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
   * @params response Response returned by the server for a request to getStaticAnalysisNodeTypes
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getStaticAnalysisNodeTypes(
    response: ResponseContext
  ): Promise<NodeTypesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: NodeTypesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NodeTypesResponse"
      ) as NodeTypesResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 401) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: NodeTypesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NodeTypesResponse",
        ""
      ) as NodeTypesResponse;
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
   * @params response Response returned by the server for a request to getStaticAnalysisRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getStaticAnalysisRuleset(
    response: ResponseContext
  ): Promise<SastRulesetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SastRulesetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SastRulesetResponse"
      ) as SastRulesetResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: SastRulesetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SastRulesetResponse",
        ""
      ) as SastRulesetResponse;
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
   * @params response Response returned by the server for a request to getStaticAnalysisTreeSitterWasm
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getStaticAnalysisTreeSitterWasm(
    response: ResponseContext
  ): Promise<HttpFile> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: HttpFile = (await response.getBodyAsFile()) as HttpFile;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 401) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: HttpFile =
        (await response.getBodyAsFile()) as any as HttpFile;
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
   * @params response Response returned by the server for a request to getSuggestedActionsMatchingSignal
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSuggestedActionsMatchingSignal(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalSuggestedActionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalSuggestedActionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalSuggestedActionsResponse"
        ) as SecurityMonitoringSignalSuggestedActionsResponse;
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
      const body: SecurityMonitoringSignalSuggestedActionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalSuggestedActionsResponse",
          ""
        ) as SecurityMonitoringSignalSuggestedActionsResponse;
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
   * @params response Response returned by the server for a request to getSuppressionsAffectingFutureRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSuppressionsAffectingFutureRule(
    response: ResponseContext
  ): Promise<SecurityMonitoringSuppressionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSuppressionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSuppressionsResponse"
        ) as SecurityMonitoringSuppressionsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SecurityMonitoringSuppressionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSuppressionsResponse",
          ""
        ) as SecurityMonitoringSuppressionsResponse;
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
   * @params response Response returned by the server for a request to getSuppressionsAffectingRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSuppressionsAffectingRule(
    response: ResponseContext
  ): Promise<SecurityMonitoringSuppressionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSuppressionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSuppressionsResponse"
        ) as SecurityMonitoringSuppressionsResponse;
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
      const body: SecurityMonitoringSuppressionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSuppressionsResponse",
          ""
        ) as SecurityMonitoringSuppressionsResponse;
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
   * @params response Response returned by the server for a request to getSuppressionVersionHistory
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSuppressionVersionHistory(
    response: ResponseContext
  ): Promise<GetSuppressionVersionHistoryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GetSuppressionVersionHistoryResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GetSuppressionVersionHistoryResponse"
        ) as GetSuppressionVersionHistoryResponse;
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
      const body: GetSuppressionVersionHistoryResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GetSuppressionVersionHistoryResponse",
          ""
        ) as GetSuppressionVersionHistoryResponse;
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
   * @params response Response returned by the server for a request to getVulnerabilityNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getVulnerabilityNotificationRule(
    response: ResponseContext
  ): Promise<NotificationRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: NotificationRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationRuleResponse"
      ) as NotificationRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: NotificationRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationRuleResponse",
        ""
      ) as NotificationRuleResponse;
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
   * @params response Response returned by the server for a request to getVulnerabilityNotificationRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getVulnerabilityNotificationRules(
    response: ResponseContext
  ): Promise<NotificationRulesList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: NotificationRulesList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationRulesList"
      ) as NotificationRulesList;
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
      const body: NotificationRulesList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationRulesList",
        ""
      ) as NotificationRulesList;
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
   * @params response Response returned by the server for a request to listAssetsSBOMs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAssetsSBOMs(
    response: ResponseContext
  ): Promise<ListAssetsSBOMsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListAssetsSBOMsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListAssetsSBOMsResponse"
      ) as ListAssetsSBOMsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: ListAssetsSBOMsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListAssetsSBOMsResponse",
        ""
      ) as ListAssetsSBOMsResponse;
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
   * @params response Response returned by the server for a request to listFindings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listFindings(
    response: ResponseContext
  ): Promise<ListFindingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListFindingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListFindingsResponse"
      ) as ListFindingsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ListFindingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListFindingsResponse",
        ""
      ) as ListFindingsResponse;
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
   * @params response Response returned by the server for a request to listHistoricalJobs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listHistoricalJobs(
    response: ResponseContext
  ): Promise<ListHistoricalJobsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListHistoricalJobsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListHistoricalJobsResponse"
      ) as ListHistoricalJobsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: ListHistoricalJobsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListHistoricalJobsResponse",
        ""
      ) as ListHistoricalJobsResponse;
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
   * @params response Response returned by the server for a request to listIndicatorsOfCompromise
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIndicatorsOfCompromise(
    response: ResponseContext
  ): Promise<IoCExplorerListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IoCExplorerListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoCExplorerListResponse"
      ) as IoCExplorerListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: IoCExplorerListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IoCExplorerListResponse",
        ""
      ) as IoCExplorerListResponse;
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
   * @params response Response returned by the server for a request to listMultipleRulesets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listMultipleRulesets(
    response: ResponseContext
  ): Promise<GetMultipleRulesetsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GetMultipleRulesetsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetMultipleRulesetsResponse"
      ) as GetMultipleRulesetsResponse;
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
      const body: GetMultipleRulesetsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetMultipleRulesetsResponse",
        ""
      ) as GetMultipleRulesetsResponse;
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
   * @params response Response returned by the server for a request to listSampleLogGenerationSubscriptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSampleLogGenerationSubscriptions(
    response: ResponseContext
  ): Promise<SampleLogGenerationSubscriptionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SampleLogGenerationSubscriptionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SampleLogGenerationSubscriptionsResponse"
        ) as SampleLogGenerationSubscriptionsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SampleLogGenerationSubscriptionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SampleLogGenerationSubscriptionsResponse",
          ""
        ) as SampleLogGenerationSubscriptionsResponse;
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
   * @params response Response returned by the server for a request to listScannedAssetsMetadata
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listScannedAssetsMetadata(
    response: ResponseContext
  ): Promise<ScannedAssetsMetadata> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ScannedAssetsMetadata = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ScannedAssetsMetadata"
      ) as ScannedAssetsMetadata;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: ScannedAssetsMetadata = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ScannedAssetsMetadata",
        ""
      ) as ScannedAssetsMetadata;
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
   * @params response Response returned by the server for a request to listSecurityFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityFilters(
    response: ResponseContext
  ): Promise<SecurityFiltersResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityFiltersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityFiltersResponse"
      ) as SecurityFiltersResponse;
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
      const body: SecurityFiltersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityFiltersResponse",
        ""
      ) as SecurityFiltersResponse;
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
   * @params response Response returned by the server for a request to listSecurityFilterVersions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityFilterVersions(
    response: ResponseContext
  ): Promise<SecurityFilterVersionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityFilterVersionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityFilterVersionsResponse"
      ) as SecurityFilterVersionsResponse;
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
      const body: SecurityFilterVersionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityFilterVersionsResponse",
        ""
      ) as SecurityFilterVersionsResponse;
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
   * @params response Response returned by the server for a request to listSecurityFindings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityFindings(
    response: ResponseContext
  ): Promise<ListSecurityFindingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListSecurityFindingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListSecurityFindingsResponse"
      ) as ListSecurityFindingsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: ListSecurityFindingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListSecurityFindingsResponse",
        ""
      ) as ListSecurityFindingsResponse;
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
   * @params response Response returned by the server for a request to listSecurityMonitoringCriticalAssets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityMonitoringCriticalAssets(
    response: ResponseContext
  ): Promise<SecurityMonitoringCriticalAssetsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringCriticalAssetsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringCriticalAssetsResponse"
        ) as SecurityMonitoringCriticalAssetsResponse;
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
      const body: SecurityMonitoringCriticalAssetsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringCriticalAssetsResponse",
          ""
        ) as SecurityMonitoringCriticalAssetsResponse;
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
   * @params response Response returned by the server for a request to listSecurityMonitoringDatasets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityMonitoringDatasets(
    response: ResponseContext
  ): Promise<SecurityMonitoringDatasetsListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringDatasetsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringDatasetsListResponse"
        ) as SecurityMonitoringDatasetsListResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: SecurityMonitoringDatasetsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringDatasetsListResponse",
          ""
        ) as SecurityMonitoringDatasetsListResponse;
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
   * @params response Response returned by the server for a request to listSecurityMonitoringHistsignals
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityMonitoringHistsignals(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsListResponse"
        ) as SecurityMonitoringSignalsListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SecurityMonitoringSignalsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsListResponse",
          ""
        ) as SecurityMonitoringSignalsListResponse;
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
   * @params response Response returned by the server for a request to listSecurityMonitoringIntegrationConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityMonitoringIntegrationConfigs(
    response: ResponseContext
  ): Promise<SecurityMonitoringIntegrationConfigsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringIntegrationConfigsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringIntegrationConfigsResponse"
        ) as SecurityMonitoringIntegrationConfigsResponse;
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
      const body: SecurityMonitoringIntegrationConfigsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringIntegrationConfigsResponse",
          ""
        ) as SecurityMonitoringIntegrationConfigsResponse;
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
   * @params response Response returned by the server for a request to listSecurityMonitoringRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityMonitoringRules(
    response: ResponseContext
  ): Promise<SecurityMonitoringListRulesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringListRulesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringListRulesResponse"
        ) as SecurityMonitoringListRulesResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
      const body: SecurityMonitoringListRulesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringListRulesResponse",
          ""
        ) as SecurityMonitoringListRulesResponse;
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
   * @params response Response returned by the server for a request to listSecurityMonitoringSignals
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityMonitoringSignals(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsListResponse"
        ) as SecurityMonitoringSignalsListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SecurityMonitoringSignalsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsListResponse",
          ""
        ) as SecurityMonitoringSignalsListResponse;
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
   * @params response Response returned by the server for a request to listSecurityMonitoringSuppressions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityMonitoringSuppressions(
    response: ResponseContext
  ): Promise<SecurityMonitoringPaginatedSuppressionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringPaginatedSuppressionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringPaginatedSuppressionsResponse"
        ) as SecurityMonitoringPaginatedSuppressionsResponse;
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
      const body: SecurityMonitoringPaginatedSuppressionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringPaginatedSuppressionsResponse",
          ""
        ) as SecurityMonitoringPaginatedSuppressionsResponse;
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
   * @params response Response returned by the server for a request to listStaticAnalysisCodegenRulesets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listStaticAnalysisCodegenRulesets(
    response: ResponseContext
  ): Promise<SastRulesetsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SastRulesetsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SastRulesetsResponse"
      ) as SastRulesetsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 401) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: SastRulesetsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SastRulesetsResponse",
        ""
      ) as SastRulesetsResponse;
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
   * @params response Response returned by the server for a request to listVulnerabilities
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listVulnerabilities(
    response: ResponseContext
  ): Promise<ListVulnerabilitiesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListVulnerabilitiesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListVulnerabilitiesResponse"
      ) as ListVulnerabilitiesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: ListVulnerabilitiesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListVulnerabilitiesResponse",
        ""
      ) as ListVulnerabilitiesResponse;
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
   * @params response Response returned by the server for a request to listVulnerableAssets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listVulnerableAssets(
    response: ResponseContext
  ): Promise<ListVulnerableAssetsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListVulnerableAssetsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListVulnerableAssetsResponse"
      ) as ListVulnerableAssetsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: ListVulnerableAssetsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListVulnerableAssetsResponse",
        ""
      ) as ListVulnerableAssetsResponse;
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
   * @params response Response returned by the server for a request to muteFindings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async muteFindings(
    response: ResponseContext
  ): Promise<BulkMuteFindingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: BulkMuteFindingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "BulkMuteFindingsResponse"
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
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: BulkMuteFindingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "BulkMuteFindingsResponse",
        ""
      ) as BulkMuteFindingsResponse;
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
   * @params response Response returned by the server for a request to muteSecurityFindings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async muteSecurityFindings(
    response: ResponseContext
  ): Promise<MuteFindingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      const body: MuteFindingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MuteFindingsResponse"
      ) as MuteFindingsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
    if (response.httpStatusCode === 422) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MuteFindingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MuteFindingsResponse",
        ""
      ) as MuteFindingsResponse;
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
   * @params response Response returned by the server for a request to patchSignalNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async patchSignalNotificationRule(
    response: ResponseContext
  ): Promise<NotificationRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: NotificationRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationRuleResponse"
      ) as NotificationRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
    if (response.httpStatusCode === 422) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: NotificationRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationRuleResponse",
        ""
      ) as NotificationRuleResponse;
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
   * @params response Response returned by the server for a request to patchVulnerabilityNotificationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async patchVulnerabilityNotificationRule(
    response: ResponseContext
  ): Promise<NotificationRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: NotificationRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationRuleResponse"
      ) as NotificationRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
    if (response.httpStatusCode === 422) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: NotificationRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NotificationRuleResponse",
        ""
      ) as NotificationRuleResponse;
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
   * @params response Response returned by the server for a request to runHistoricalJob
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async runHistoricalJob(
    response: ResponseContext
  ): Promise<JobCreateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: JobCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "JobCreateResponse"
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
      const body: JobCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "JobCreateResponse",
        ""
      ) as JobCreateResponse;
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
   * @params response Response returned by the server for a request to searchSecurityFindings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchSecurityFindings(
    response: ResponseContext
  ): Promise<ListSecurityFindingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListSecurityFindingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListSecurityFindingsResponse"
      ) as ListSecurityFindingsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: ListSecurityFindingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListSecurityFindingsResponse",
        ""
      ) as ListSecurityFindingsResponse;
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
   * @params response Response returned by the server for a request to searchSecurityMonitoringHistsignals
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchSecurityMonitoringHistsignals(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsListResponse"
        ) as SecurityMonitoringSignalsListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SecurityMonitoringSignalsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsListResponse",
          ""
        ) as SecurityMonitoringSignalsListResponse;
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
   * @params response Response returned by the server for a request to searchSecurityMonitoringSignals
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchSecurityMonitoringSignals(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsListResponse"
        ) as SecurityMonitoringSignalsListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SecurityMonitoringSignalsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsListResponse",
          ""
        ) as SecurityMonitoringSignalsListResponse;
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
   * @params response Response returned by the server for a request to testExistingSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async testExistingSecurityMonitoringRule(
    response: ResponseContext
  ): Promise<SecurityMonitoringRuleTestResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringRuleTestResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringRuleTestResponse"
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
      const body: SecurityMonitoringRuleTestResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringRuleTestResponse",
          ""
        ) as SecurityMonitoringRuleTestResponse;
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
   * @params response Response returned by the server for a request to testSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async testSecurityMonitoringRule(
    response: ResponseContext
  ): Promise<SecurityMonitoringRuleTestResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringRuleTestResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringRuleTestResponse"
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
      const body: SecurityMonitoringRuleTestResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringRuleTestResponse",
          ""
        ) as SecurityMonitoringRuleTestResponse;
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
   * @params response Response returned by the server for a request to updateCustomFramework
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCustomFramework(
    response: ResponseContext
  ): Promise<UpdateCustomFrameworkResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: UpdateCustomFrameworkResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UpdateCustomFrameworkResponse"
      ) as UpdateCustomFrameworkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 500
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
      const body: UpdateCustomFrameworkResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UpdateCustomFrameworkResponse",
        ""
      ) as UpdateCustomFrameworkResponse;
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
   * @params response Response returned by the server for a request to updateResourceEvaluationFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateResourceEvaluationFilters(
    response: ResponseContext
  ): Promise<UpdateResourceEvaluationFiltersResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: UpdateResourceEvaluationFiltersResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "UpdateResourceEvaluationFiltersResponse"
        ) as UpdateResourceEvaluationFiltersResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: UpdateResourceEvaluationFiltersResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "UpdateResourceEvaluationFiltersResponse",
          ""
        ) as UpdateResourceEvaluationFiltersResponse;
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
   * @params response Response returned by the server for a request to updateSecurityFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityFilter(
    response: ResponseContext
  ): Promise<SecurityFilterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityFilterResponse"
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
      const body: SecurityFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityFilterResponse",
        ""
      ) as SecurityFilterResponse;
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
   * @params response Response returned by the server for a request to updateSecurityMonitoringCriticalAsset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityMonitoringCriticalAsset(
    response: ResponseContext
  ): Promise<SecurityMonitoringCriticalAssetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringCriticalAssetResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringCriticalAssetResponse"
        ) as SecurityMonitoringCriticalAssetResponse;
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
      const body: SecurityMonitoringCriticalAssetResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringCriticalAssetResponse",
          ""
        ) as SecurityMonitoringCriticalAssetResponse;
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
   * @params response Response returned by the server for a request to updateSecurityMonitoringDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityMonitoringDataset(
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
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
   * @params response Response returned by the server for a request to updateSecurityMonitoringIntegrationConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityMonitoringIntegrationConfig(
    response: ResponseContext
  ): Promise<SecurityMonitoringIntegrationConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringIntegrationConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringIntegrationConfigResponse"
        ) as SecurityMonitoringIntegrationConfigResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: SecurityMonitoringIntegrationConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringIntegrationConfigResponse",
          ""
        ) as SecurityMonitoringIntegrationConfigResponse;
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
   * @params response Response returned by the server for a request to updateSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityMonitoringRule(
    response: ResponseContext
  ): Promise<SecurityMonitoringRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityMonitoringRuleResponse"
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
      const body: SecurityMonitoringRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityMonitoringRuleResponse",
        ""
      ) as SecurityMonitoringRuleResponse;
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
   * @params response Response returned by the server for a request to updateSecurityMonitoringSuppression
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityMonitoringSuppression(
    response: ResponseContext
  ): Promise<SecurityMonitoringSuppressionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSuppressionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSuppressionResponse"
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
      const body: SecurityMonitoringSuppressionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSuppressionResponse",
          ""
        ) as SecurityMonitoringSuppressionResponse;
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
   * @params response Response returned by the server for a request to validateSecurityMonitoringIntegrationConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validateSecurityMonitoringIntegrationConfig(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
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
   * @params response Response returned by the server for a request to validateSecurityMonitoringIntegrationCredentials
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validateSecurityMonitoringIntegrationCredentials(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
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
   * @params response Response returned by the server for a request to validateSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validateSecurityMonitoringRule(
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
   * @params response Response returned by the server for a request to validateSecurityMonitoringSuppression
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validateSecurityMonitoringSuppression(
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
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface SecurityMonitoringApiActivateContentPackRequest {
  /**
   * The ID of the content pack to activate (for example, `aws-cloudtrail`).
   * @type string
   */
  contentPackId: string;
}

export interface SecurityMonitoringApiAttachCaseRequest {
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

export interface SecurityMonitoringApiAttachJiraIssueRequest {
  /**
   * @type AttachJiraIssueRequest
   */
  body: AttachJiraIssueRequest;
}

export interface SecurityMonitoringApiBatchGetSecurityMonitoringDatasetDependenciesRequest {
  /**
   * @type SecurityMonitoringDatasetDependenciesRequest
   */
  body: SecurityMonitoringDatasetDependenciesRequest;
}

export interface SecurityMonitoringApiBulkCreateSampleLogGenerationSubscriptionsRequest {
  /**
   * The content packs to subscribe to and the desired duration of the subscriptions.
   * @type SampleLogGenerationBulkSubscriptionRequest
   */
  body: SampleLogGenerationBulkSubscriptionRequest;
}

export interface SecurityMonitoringApiBulkDeleteSecurityMonitoringRulesRequest {
  /**
   * @type SecurityMonitoringRuleBulkDeletePayload
   */
  body: SecurityMonitoringRuleBulkDeletePayload;
}

export interface SecurityMonitoringApiBulkEditSecurityMonitoringSignalsRequest {
  /**
   * Attributes describing the signal updates.
   * @type SecurityMonitoringSignalsBulkUpdateRequest
   */
  body: SecurityMonitoringSignalsBulkUpdateRequest;
}

export interface SecurityMonitoringApiBulkEditSecurityMonitoringSignalsAssigneeRequest {
  /**
   * Attributes describing the signal assignee updates.
   * @type SecurityMonitoringSignalsBulkAssigneeUpdateRequest
   */
  body: SecurityMonitoringSignalsBulkAssigneeUpdateRequest;
}

export interface SecurityMonitoringApiBulkEditSecurityMonitoringSignalsStateRequest {
  /**
   * Attributes describing the signal state updates.
   * @type SecurityMonitoringSignalsBulkStateUpdateRequest
   */
  body: SecurityMonitoringSignalsBulkStateUpdateRequest;
}

export interface SecurityMonitoringApiBulkExportSecurityMonitoringRulesRequest {
  /**
   * @type SecurityMonitoringRuleBulkExportPayload
   */
  body: SecurityMonitoringRuleBulkExportPayload;
}

export interface SecurityMonitoringApiBulkExportSecurityMonitoringTerraformResourcesRequest {
  /**
   * The type of security monitoring resource to export.
   * @type SecurityMonitoringTerraformResourceType
   */
  resourceType: SecurityMonitoringTerraformResourceType;
  /**
   * The resource IDs to export.
   * @type SecurityMonitoringTerraformBulkExportRequest
   */
  body: SecurityMonitoringTerraformBulkExportRequest;
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

export interface SecurityMonitoringApiConvertSecurityMonitoringTerraformResourceRequest {
  /**
   * The type of security monitoring resource to export.
   * @type SecurityMonitoringTerraformResourceType
   */
  resourceType: SecurityMonitoringTerraformResourceType;
  /**
   * The resource JSON to convert.
   * @type SecurityMonitoringTerraformConvertRequest
   */
  body: SecurityMonitoringTerraformConvertRequest;
}

export interface SecurityMonitoringApiCreateCasesRequest {
  /**
   * @type CreateCaseRequestArray
   */
  body: CreateCaseRequestArray;
}

export interface SecurityMonitoringApiCreateCustomFrameworkRequest {
  /**
   * @type CreateCustomFrameworkRequest
   */
  body: CreateCustomFrameworkRequest;
}

export interface SecurityMonitoringApiCreateJiraIssuesRequest {
  /**
   * @type CreateJiraIssueRequestArray
   */
  body: CreateJiraIssueRequestArray;
}

export interface SecurityMonitoringApiCreateSampleLogGenerationSubscriptionRequest {
  /**
   * The content pack to subscribe to and the desired duration of the subscription.
   * @type SampleLogGenerationSubscriptionCreateRequest
   */
  body: SampleLogGenerationSubscriptionCreateRequest;
}

export interface SecurityMonitoringApiCreateSecurityFilterRequest {
  /**
   * The definition of the new security filter.
   * @type SecurityFilterCreateRequest
   */
  body: SecurityFilterCreateRequest;
}

export interface SecurityMonitoringApiCreateSecurityMonitoringCriticalAssetRequest {
  /**
   * The definition of the new critical asset.
   * @type SecurityMonitoringCriticalAssetCreateRequest
   */
  body: SecurityMonitoringCriticalAssetCreateRequest;
}

export interface SecurityMonitoringApiCreateSecurityMonitoringDatasetRequest {
  /**
   * @type SecurityMonitoringDatasetCreateRequest
   */
  body: SecurityMonitoringDatasetCreateRequest;
}

export interface SecurityMonitoringApiCreateSecurityMonitoringIntegrationConfigRequest {
  /**
   * The definition of the new integration configuration.
   * @type SecurityMonitoringIntegrationConfigCreateRequest
   */
  body: SecurityMonitoringIntegrationConfigCreateRequest;
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

export interface SecurityMonitoringApiCreateStaticAnalysisAstRequest {
  /**
   * @type GetAstRequest
   */
  body: GetAstRequest;
}

export interface SecurityMonitoringApiCreateStaticAnalysisServerAnalysisRequest {
  /**
   * @type AnalysisRequest
   */
  body: AnalysisRequest;
}

export interface SecurityMonitoringApiCreateVulnerabilityNotificationRuleRequest {
  /**
   * The body of the create notification rule request is composed of the rule type and the rule attributes:
   * the rule name, the selectors, the notification targets, and the rule enabled status.
   * @type CreateNotificationRuleParameters
   */
  body: CreateNotificationRuleParameters;
}

export interface SecurityMonitoringApiDeactivateContentPackRequest {
  /**
   * The ID of the content pack to deactivate (for example, `aws-cloudtrail`).
   * @type string
   */
  contentPackId: string;
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

export interface SecurityMonitoringApiDeleteSampleLogGenerationSubscriptionRequest {
  /**
   * The identifier of the Cloud SIEM content pack to operate on (for example, `aws-cloudtrail`).
   * @type string
   */
  contentPackId: string;
}

export interface SecurityMonitoringApiDeleteSecurityFilterRequest {
  /**
   * The ID of the security filter.
   * @type string
   */
  securityFilterId: string;
}

export interface SecurityMonitoringApiDeleteSecurityMonitoringCriticalAssetRequest {
  /**
   * The ID of the critical asset.
   * @type string
   */
  criticalAssetId: string;
}

export interface SecurityMonitoringApiDeleteSecurityMonitoringDatasetRequest {
  /**
   * The UUID of the dataset.
   * @type string
   */
  datasetId: string;
}

export interface SecurityMonitoringApiDeleteSecurityMonitoringIntegrationConfigRequest {
  /**
   * The ID of the entity context sync configuration.
   * @type string
   */
  integrationConfigId: string;
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

export interface SecurityMonitoringApiDetachCaseRequest {
  /**
   * @type DetachCaseRequest
   */
  body: DetachCaseRequest;
}

export interface SecurityMonitoringApiEditSecurityMonitoringSignalRequest {
  /**
   * The ID of the signal.
   * @type string
   */
  signalId: string;
  /**
   * Attributes describing the signal triage state or assignee update.
   * @type SecurityMonitoringSignalUpdateRequest
   */
  body: SecurityMonitoringSignalUpdateRequest;
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

export interface SecurityMonitoringApiExportSecurityMonitoringTerraformResourceRequest {
  /**
   * The type of security monitoring resource to export.
   * @type SecurityMonitoringTerraformResourceType
   */
  resourceType: SecurityMonitoringTerraformResourceType;
  /**
   * The ID of the security monitoring resource to export.
   * @type string
   */
  resourceId: string;
}

export interface SecurityMonitoringApiGetCriticalAssetsAffectingRuleRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
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

export interface SecurityMonitoringApiGetEntityContextRequest {
  /**
   * A free-text query (for example, an email address or principal ID) used to filter the entities returned.
   * @type string
   */
  query?: string;
  /**
   * The start of the time range to query, as an RFC3339 timestamp or a relative time (for example, `now-7d`).
   * Defaults to `now-7d`. Ignored when `as_of` is set.
   * @type string
   */
  from?: string;
  /**
   * The end of the time range to query, as an RFC3339 timestamp or a relative time (for example, `now`).
   * Defaults to `now`. Ignored when `as_of` is set.
   * @type string
   */
  to?: string;
  /**
   * A point in time at which to query the entity revisions, as an RFC3339 timestamp, a Unix timestamp
   * (in seconds), or a relative time (for example, `now-1d`). When set, `from` and `to` are ignored.
   * Cannot be combined with custom `from` / `to` values.
   * @type string
   */
  asOf?: string;
  /**
   * The maximum number of entities to return.
   * @type number
   */
  limit?: number;
  /**
   * An opaque token used to fetch the next page of results, as returned in `meta.page.next_token` of a previous response.
   * @type string
   */
  pageToken?: string;
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

export interface SecurityMonitoringApiGetIndicatorOfCompromiseRequest {
  /**
   * The indicator value to look up (for example, an IP address or domain).
   * @type string
   */
  indicator: string;
}

export interface SecurityMonitoringApiGetInvestigationLogQueriesMatchingSignalRequest {
  /**
   * The ID of the signal.
   * @type string
   */
  signalId: string;
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
  /**
   * The standard of the SBOM.
   * @type SBOMFormat
   */
  extFormat?: SBOMFormat;
}

export interface SecurityMonitoringApiGetSecurityFilterRequest {
  /**
   * The ID of the security filter.
   * @type string
   */
  securityFilterId: string;
}

export interface SecurityMonitoringApiGetSecurityMonitoringCriticalAssetRequest {
  /**
   * The ID of the critical asset.
   * @type string
   */
  criticalAssetId: string;
}

export interface SecurityMonitoringApiGetSecurityMonitoringDatasetRequest {
  /**
   * The UUID of the dataset.
   * @type string
   */
  datasetId: string;
}

export interface SecurityMonitoringApiGetSecurityMonitoringDatasetByVersionRequest {
  /**
   * The UUID of the dataset.
   * @type string
   */
  datasetId: string;
  /**
   * The version number of the dataset to retrieve.
   * @type number
   */
  version: number;
}

export interface SecurityMonitoringApiGetSecurityMonitoringDatasetVersionHistoryRequest {
  /**
   * The UUID of the dataset.
   * @type string
   */
  datasetId: string;
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

export interface SecurityMonitoringApiGetSecurityMonitoringHistsignalRequest {
  /**
   * The ID of the historical signal.
   * @type string
   */
  histsignalId: string;
}

export interface SecurityMonitoringApiGetSecurityMonitoringHistsignalsByJobIdRequest {
  /**
   * The ID of the job.
   * @type string
   */
  jobId: string;
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

export interface SecurityMonitoringApiGetSecurityMonitoringIntegrationConfigRequest {
  /**
   * The ID of the entity context sync configuration.
   * @type string
   */
  integrationConfigId: string;
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

export interface SecurityMonitoringApiGetSignalEntitiesRequest {
  /**
   * The ID of the signal.
   * @type string
   */
  signalId: string;
  /**
   * The maximum number of entities to return.
   * @type number
   */
  limit?: number;
}

export interface SecurityMonitoringApiGetSignalNotificationRuleRequest {
  /**
   * ID of the notification rule.
   * @type string
   */
  id: string;
}

export interface SecurityMonitoringApiGetStaticAnalysisDefaultRulesetsRequest {
  /**
   * The programming language for which to retrieve the default rulesets.
   * @type string
   */
  language: string;
}

export interface SecurityMonitoringApiGetStaticAnalysisNodeTypesRequest {
  /**
   * The programming language for which to retrieve node type definitions.
   * @type string
   */
  language: string;
}

export interface SecurityMonitoringApiGetStaticAnalysisRulesetRequest {
  /**
   * The name of the ruleset to retrieve.
   * @type string
   */
  rulesetName: string;
  /**
   * When true, test cases for each rule are included in the response.
   * @type boolean
   */
  includeTests?: boolean;
  /**
   * When true, rules that are in testing mode are included in the response.
   * @type boolean
   */
  includeTestingRules?: boolean;
}

export interface SecurityMonitoringApiGetStaticAnalysisTreeSitterWasmRequest {
  /**
   * The name of the WASM file to download.
   * @type string
   */
  file: string;
}

export interface SecurityMonitoringApiGetSuggestedActionsMatchingSignalRequest {
  /**
   * The ID of the signal.
   * @type string
   */
  signalId: string;
}

export interface SecurityMonitoringApiGetSuppressionsAffectingFutureRuleRequest {
  /**
   * @type SecurityMonitoringRuleCreatePayload
   */
  body: SecurityMonitoringRuleCreatePayload;
}

export interface SecurityMonitoringApiGetSuppressionsAffectingRuleRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
}

export interface SecurityMonitoringApiGetSuppressionVersionHistoryRequest {
  /**
   * The ID of the suppression rule
   * @type string
   */
  suppressionId: string;
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

export interface SecurityMonitoringApiListIndicatorsOfCompromiseRequest {
  /**
   * Number of results per page.
   * @type number
   */
  limit?: number;
  /**
   * Pagination offset.
   * @type number
   */
  offset?: number;
  /**
   * Search/filter query (supports field:value syntax).
   * @type string
   */
  query?: string;
  /**
   * Sort column: score, first_seen_ts_epoch, last_seen_ts_epoch, indicator, indicator_type, signal_count, log_count, category, as_type.
   * @type string
   */
  sortColumn?: string;
  /**
   * Sort order: asc or desc.
   * @type string
   */
  sortOrder?: string;
}

export interface SecurityMonitoringApiListMultipleRulesetsRequest {
  /**
   * @type GetMultipleRulesetsRequest
   */
  body: GetMultipleRulesetsRequest;
}

export interface SecurityMonitoringApiListSampleLogGenerationSubscriptionsRequest {
  /**
   * Filter the subscriptions by status. Use `active` to return only currently active
   * subscriptions, or `all` to return every subscription including expired ones.
   * Ignored when `start_timestamp` is provided. Defaults to `active`.
   * @type SampleLogGenerationSubscriptionsStatusFilter
   */
  status?: SampleLogGenerationSubscriptionsStatusFilter;
  /**
   * The start of the time range, as an RFC3339 timestamp. When provided, the response includes
   * every subscription that was active at any point in `[start_timestamp, end_timestamp]`,
   * and the `status` filter is ignored.
   * @type Date
   */
  startTimestamp?: Date;
  /**
   * The end of the time range, as an RFC3339 timestamp. Ignored unless `start_timestamp` is set.
   * Defaults to the current time when `start_timestamp` is provided.
   * @type Date
   */
  endTimestamp?: Date;
}

export interface SecurityMonitoringApiListScannedAssetsMetadataRequest {
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
   * The type of the scanned asset.
   * @type CloudAssetType
   */
  filterAssetType?: CloudAssetType;
  /**
   * The name of the scanned asset.
   * @type string
   */
  filterAssetName?: string;
  /**
   * The origin of last success scan.
   * @type string
   */
  filterLastSuccessOrigin?: string;
  /**
   * The environment of last success scan.
   * @type string
   */
  filterLastSuccessEnv?: string;
}

export interface SecurityMonitoringApiListSecurityFindingsRequest {
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

export interface SecurityMonitoringApiListSecurityMonitoringDatasetsRequest {
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
   * Attribute used to sort datasets. Prefix with `-` to sort in descending order.
   * @type string
   */
  sort?: string;
  /**
   * A search query to filter datasets by name or description.
   * @type string
   */
  filterQuery?: string;
}

export interface SecurityMonitoringApiListSecurityMonitoringHistsignalsRequest {
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

export interface SecurityMonitoringApiListSecurityMonitoringIntegrationConfigsRequest {
  /**
   * Filter the entity context sync configurations by source type.
   * @type SecurityMonitoringIntegrationType
   */
  filterIntegrationType?: SecurityMonitoringIntegrationType;
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
  /**
   * A search query to filter security rules. You can filter by attributes such as `type`, `source`, `tags`.
   * @type string
   */
  query?: string;
  /**
   * Attribute used to sort rules. Prefix with `-` to sort in descending order.
   * @type SecurityMonitoringRuleSort
   */
  sort?: SecurityMonitoringRuleSort;
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

export interface SecurityMonitoringApiListSecurityMonitoringSuppressionsRequest {
  /**
   * Query string.
   * @type string
   */
  query?: string;
  /**
   * Attribute used to sort the list of suppression rules. Prefix with `-` to sort in descending order.
   * @type SecurityMonitoringSuppressionSort
   */
  sort?: SecurityMonitoringSuppressionSort;
  /**
   * Size for a given page. Use `-1` to return all items.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific page number to return.
   * @type number
   */
  pageNumber?: number;
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
   * Filter for whether the vulnerability affects a running kernel (for vulnerabilities related to a `Host` asset).
   * @type boolean
   */
  filterRunningKernel?: boolean;
  /**
   * Filter by asset name. This field supports the usage of wildcards (*).
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
   * Filter by name. This field supports the usage of wildcards (*).
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

export interface SecurityMonitoringApiMuteSecurityFindingsRequest {
  /**
   * @type MuteFindingsRequest
   */
  body: MuteFindingsRequest;
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

export interface SecurityMonitoringApiSearchSecurityFindingsRequest {
  /**
   * @type SecurityFindingsSearchRequest
   */
  body: SecurityFindingsSearchRequest;
}

export interface SecurityMonitoringApiSearchSecurityMonitoringHistsignalsRequest {
  /**
   * @type SecurityMonitoringSignalListRequest
   */
  body?: SecurityMonitoringSignalListRequest;
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

export interface SecurityMonitoringApiUpdateSecurityMonitoringCriticalAssetRequest {
  /**
   * The ID of the critical asset.
   * @type string
   */
  criticalAssetId: string;
  /**
   * New definition of the critical asset. Supports partial updates.
   * @type SecurityMonitoringCriticalAssetUpdateRequest
   */
  body: SecurityMonitoringCriticalAssetUpdateRequest;
}

export interface SecurityMonitoringApiUpdateSecurityMonitoringDatasetRequest {
  /**
   * The UUID of the dataset.
   * @type string
   */
  datasetId: string;
  /**
   * @type SecurityMonitoringDatasetUpdateRequest
   */
  body: SecurityMonitoringDatasetUpdateRequest;
}

export interface SecurityMonitoringApiUpdateSecurityMonitoringIntegrationConfigRequest {
  /**
   * The ID of the entity context sync configuration.
   * @type string
   */
  integrationConfigId: string;
  /**
   * The fields to update on the integration configuration.
   * @type SecurityMonitoringIntegrationConfigUpdateRequest
   */
  body: SecurityMonitoringIntegrationConfigUpdateRequest;
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

export interface SecurityMonitoringApiValidateSecurityMonitoringIntegrationConfigRequest {
  /**
   * The ID of the entity context sync configuration.
   * @type string
   */
  integrationConfigId: string;
}

export interface SecurityMonitoringApiValidateSecurityMonitoringIntegrationCredentialsRequest {
  /**
   * The credentials to validate.
   * @type SecurityMonitoringIntegrationCredentialsValidateRequest
   */
  body: SecurityMonitoringIntegrationCredentialsValidateRequest;
}

export interface SecurityMonitoringApiValidateSecurityMonitoringRuleRequest {
  /**
   * @type SecurityMonitoringRuleValidatePayload
   */
  body: SecurityMonitoringRuleValidatePayload;
}

export interface SecurityMonitoringApiValidateSecurityMonitoringSuppressionRequest {
  /**
   * @type SecurityMonitoringSuppressionCreateRequest
   */
  body: SecurityMonitoringSuppressionCreateRequest;
}

export class SecurityMonitoringApi {
  private requestFactory: SecurityMonitoringApiRequestFactory;
  private responseProcessor: SecurityMonitoringApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: SecurityMonitoringApiRequestFactory,
    responseProcessor?: SecurityMonitoringApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new SecurityMonitoringApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new SecurityMonitoringApiResponseProcessor();
  }

  /**
   * Activate a Cloud SIEM content pack. This operation configures the necessary
   * log filters or security filters depending on the pricing model and updates the content
   * pack activation state.
   * @param param The request object
   */
  public activateContentPack(
    param: SecurityMonitoringApiActivateContentPackRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.activateContentPack(
      param.contentPackId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.activateContentPack(responseContext);
        });
    });
  }

  /**
   * Attach security findings to a case.
   * You can attach up to 50 security findings per case. Security findings that are already attached to another case will be detached from their previous case and attached to the specified case.
   * @param param The request object
   */
  public attachCase(
    param: SecurityMonitoringApiAttachCaseRequest,
    options?: Configuration
  ): Promise<FindingCaseResponse> {
    const requestContextPromise = this.requestFactory.attachCase(
      param.caseId,
      param.body,
      options
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
    param: SecurityMonitoringApiAttachJiraIssueRequest,
    options?: Configuration
  ): Promise<FindingCaseResponse> {
    const requestContextPromise = this.requestFactory.attachJiraIssue(
      param.body,
      options
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
   * Return, for each of the requested datasets, the list of detection rules that depend
   * on it. Useful for understanding the impact of updating or deleting a dataset.
   * @param param The request object
   */
  public batchGetSecurityMonitoringDatasetDependencies(
    param: SecurityMonitoringApiBatchGetSecurityMonitoringDatasetDependenciesRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringDatasetDependenciesResponse> {
    const requestContextPromise =
      this.requestFactory.batchGetSecurityMonitoringDatasetDependencies(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.batchGetSecurityMonitoringDatasetDependencies(
            responseContext
          );
        });
    });
  }

  /**
   * Subscribe to sample log generation for multiple Cloud SIEM content packs in a single call.
   * Each requested content pack is processed independently; the response includes a per-item
   * status so partial successes can be inspected.
   *
   * **Availability**: this endpoint is restricted to Cloud SIEM trial organizations on an
   * eligible pricing model. Non-trial orgs receive `403 Forbidden`, the feature flag may also reject
   * requests with `400 Bad Request`, and legacy pricing tiers receive per-item responses with `status: not_available`.
   * @param param The request object
   */
  public bulkCreateSampleLogGenerationSubscriptions(
    param: SecurityMonitoringApiBulkCreateSampleLogGenerationSubscriptionsRequest,
    options?: Configuration
  ): Promise<SampleLogGenerationBulkSubscriptionResponse> {
    const requestContextPromise =
      this.requestFactory.bulkCreateSampleLogGenerationSubscriptions(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkCreateSampleLogGenerationSubscriptions(
            responseContext
          );
        });
    });
  }

  /**
   * Delete multiple security monitoring rules in a single request. Default rules cannot be deleted.
   * @param param The request object
   */
  public bulkDeleteSecurityMonitoringRules(
    param: SecurityMonitoringApiBulkDeleteSecurityMonitoringRulesRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringRuleBulkDeleteResponse> {
    const requestContextPromise =
      this.requestFactory.bulkDeleteSecurityMonitoringRules(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkDeleteSecurityMonitoringRules(
            responseContext
          );
        });
    });
  }

  /**
   * Update the triage state or assignee of multiple security signals at once.
   * The maximum number of signals that can be updated in a single request is 199.
   * @param param The request object
   */
  public bulkEditSecurityMonitoringSignals(
    param: SecurityMonitoringApiBulkEditSecurityMonitoringSignalsRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringSignalsBulkTriageUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.bulkEditSecurityMonitoringSignals(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkEditSecurityMonitoringSignals(
            responseContext
          );
        });
    });
  }

  /**
   * Change the triage assignees of multiple security signals at once.
   * The maximum number of signals that can be updated in a single request is 199.
   * @param param The request object
   */
  public bulkEditSecurityMonitoringSignalsAssignee(
    param: SecurityMonitoringApiBulkEditSecurityMonitoringSignalsAssigneeRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringSignalsBulkTriageUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.bulkEditSecurityMonitoringSignalsAssignee(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkEditSecurityMonitoringSignalsAssignee(
            responseContext
          );
        });
    });
  }

  /**
   * Change the triage states of multiple security signals at once.
   * The maximum number of signals that can be updated in a single request is 199.
   * @param param The request object
   */
  public bulkEditSecurityMonitoringSignalsState(
    param: SecurityMonitoringApiBulkEditSecurityMonitoringSignalsStateRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringSignalsBulkTriageUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.bulkEditSecurityMonitoringSignalsState(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkEditSecurityMonitoringSignalsState(
            responseContext
          );
        });
    });
  }

  /**
   * Export a list of security monitoring rules as a ZIP file containing JSON rule definitions.
   * The endpoint accepts a list of rule IDs and returns a ZIP archive where each rule is
   * saved as a separate JSON file named after the rule.
   * @param param The request object
   */
  public bulkExportSecurityMonitoringRules(
    param: SecurityMonitoringApiBulkExportSecurityMonitoringRulesRequest,
    options?: Configuration
  ): Promise<HttpFile> {
    const requestContextPromise =
      this.requestFactory.bulkExportSecurityMonitoringRules(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkExportSecurityMonitoringRules(
            responseContext
          );
        });
    });
  }

  /**
   * Export multiple security monitoring resources to Terraform, packaged as a zip archive.
   * The `resource_type` path parameter specifies the type of resources to export
   * and must be one of `suppressions` or `critical_assets`.
   * A maximum of 1000 resources can be exported in a single request.
   * @param param The request object
   */
  public bulkExportSecurityMonitoringTerraformResources(
    param: SecurityMonitoringApiBulkExportSecurityMonitoringTerraformResourcesRequest,
    options?: Configuration
  ): Promise<HttpFile> {
    const requestContextPromise =
      this.requestFactory.bulkExportSecurityMonitoringTerraformResources(
        param.resourceType,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkExportSecurityMonitoringTerraformResources(
            responseContext
          );
        });
    });
  }

  /**
   * Cancel a historical job.
   * @param param The request object
   */
  public cancelHistoricalJob(
    param: SecurityMonitoringApiCancelHistoricalJobRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.cancelHistoricalJob(
      param.jobId,
      options
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
   * Convert an existing rule from JSON to Terraform for Datadog provider
   * resource `datadog_security_monitoring_rule`. You can do so for the following rule types:
   * - App and API Protection
   * - Cloud SIEM (log detection and signal correlation)
   * - Workload Protection
   *
   * You can convert Cloud Security configuration rules using Terraform's [Datadog Cloud Configuration Rule resource](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/resources/cloud_configuration_rule).
   * @param param The request object
   */
  public convertExistingSecurityMonitoringRule(
    param: SecurityMonitoringApiConvertExistingSecurityMonitoringRuleRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringRuleConvertResponse> {
    const requestContextPromise =
      this.requestFactory.convertExistingSecurityMonitoringRule(
        param.ruleId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.convertExistingSecurityMonitoringRule(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.convertJobResultToSignal(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.convertJobResultToSignal(
            responseContext
          );
        });
    });
  }

  /**
   * Convert a rule that doesn't (yet) exist from JSON to Terraform for Datadog provider
   * resource `datadog_security_monitoring_rule`. You can do so for the following rule types:
   * - App and API Protection
   * - Cloud SIEM (log detection and signal correlation)
   * - Workload Protection
   *
   * You can convert Cloud Security configuration rules using Terraform's [Datadog Cloud Configuration Rule resource](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/resources/cloud_configuration_rule).
   * @param param The request object
   */
  public convertSecurityMonitoringRuleFromJSONToTerraform(
    param: SecurityMonitoringApiConvertSecurityMonitoringRuleFromJSONToTerraformRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringRuleConvertResponse> {
    const requestContextPromise =
      this.requestFactory.convertSecurityMonitoringRuleFromJSONToTerraform(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.convertSecurityMonitoringRuleFromJSONToTerraform(
            responseContext
          );
        });
    });
  }

  /**
   * Convert a security monitoring resource that doesn't (yet) exist from JSON to Terraform.
   * The `resource_type` path parameter specifies the type of resource to convert
   * and must be one of `suppressions` or `critical_assets`.
   * @param param The request object
   */
  public convertSecurityMonitoringTerraformResource(
    param: SecurityMonitoringApiConvertSecurityMonitoringTerraformResourceRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringTerraformExportResponse> {
    const requestContextPromise =
      this.requestFactory.convertSecurityMonitoringTerraformResource(
        param.resourceType,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.convertSecurityMonitoringTerraformResource(
            responseContext
          );
        });
    });
  }

  /**
   * Create cases for security findings.
   * You can create up to 50 cases per request and associate up to 50 security findings per case. Security findings that are already attached to another case will be detached from their previous case and attached to the newly created case.
   * @param param The request object
   */
  public createCases(
    param: SecurityMonitoringApiCreateCasesRequest,
    options?: Configuration
  ): Promise<FindingCaseResponseArray> {
    const requestContextPromise = this.requestFactory.createCases(
      param.body,
      options
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
   * Create a custom framework.
   * @param param The request object
   */
  public createCustomFramework(
    param: SecurityMonitoringApiCreateCustomFrameworkRequest,
    options?: Configuration
  ): Promise<CreateCustomFrameworkResponse> {
    const requestContextPromise = this.requestFactory.createCustomFramework(
      param.body,
      options
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
   * Create Jira issues for security findings.
   * This operation creates a case in Datadog and a Jira issue linked to that case for bidirectional sync between Datadog and Jira. To configure the Jira integration, see [Bidirectional ticket syncing with Jira](https://docs.datadoghq.com/security/ticketing_integrations/#bidirectional-ticket-syncing-with-jira). You can create up to 50 Jira issues per request and associate up to 50 security findings per Jira issue. Security findings that are already attached to another Jira issue will be detached from their previous Jira issue and attached to the newly created Jira issue.
   * @param param The request object
   */
  public createJiraIssues(
    param: SecurityMonitoringApiCreateJiraIssuesRequest,
    options?: Configuration
  ): Promise<FindingCaseResponseArray> {
    const requestContextPromise = this.requestFactory.createJiraIssues(
      param.body,
      options
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
   * Subscribe to sample log generation for a Cloud SIEM content pack. Sample logs for the
   * requested content pack are injected into the Logs platform for the duration of the subscription,
   * so detection rules can be exercised without onboarding the underlying integration first.
   *
   * **Availability**: this endpoint is restricted to Cloud SIEM trial organizations on an
   * eligible pricing model. Non-trial orgs receive `403 Forbidden`, the feature flag may also reject
   * requests with `400 Bad Request`, and legacy pricing tiers receive a response with `status: not_available`.
   * @param param The request object
   */
  public createSampleLogGenerationSubscription(
    param: SecurityMonitoringApiCreateSampleLogGenerationSubscriptionRequest,
    options?: Configuration
  ): Promise<SampleLogGenerationSubscriptionResponse> {
    const requestContextPromise =
      this.requestFactory.createSampleLogGenerationSubscription(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSampleLogGenerationSubscription(
            responseContext
          );
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
    options?: Configuration
  ): Promise<SecurityFilterResponse> {
    const requestContextPromise = this.requestFactory.createSecurityFilter(
      param.body,
      options
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
   * Create a new critical asset.
   * @param param The request object
   */
  public createSecurityMonitoringCriticalAsset(
    param: SecurityMonitoringApiCreateSecurityMonitoringCriticalAssetRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringCriticalAssetResponse> {
    const requestContextPromise =
      this.requestFactory.createSecurityMonitoringCriticalAsset(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityMonitoringCriticalAsset(
            responseContext
          );
        });
    });
  }

  /**
   * Create a new Cloud SIEM dataset. A dataset bundles a data source, a set of
   * indexes, and a search query that can be referenced from detection rules.
   * @param param The request object
   */
  public createSecurityMonitoringDataset(
    param: SecurityMonitoringApiCreateSecurityMonitoringDatasetRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringDatasetCreateResponse> {
    const requestContextPromise =
      this.requestFactory.createSecurityMonitoringDataset(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityMonitoringDataset(
            responseContext
          );
        });
    });
  }

  /**
   * Create a new entity context sync configuration so Cloud SIEM can ingest entities from an external
   * source. The credentials provided in `secrets` are validated against the source before the configuration
   * is stored and never returned in subsequent responses.
   * @param param The request object
   */
  public createSecurityMonitoringIntegrationConfig(
    param: SecurityMonitoringApiCreateSecurityMonitoringIntegrationConfigRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringIntegrationConfigResponse> {
    const requestContextPromise =
      this.requestFactory.createSecurityMonitoringIntegrationConfig(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityMonitoringIntegrationConfig(
            responseContext
          );
        });
    });
  }

  /**
   * Create a detection rule.
   * @param param The request object
   */
  public createSecurityMonitoringRule(
    param: SecurityMonitoringApiCreateSecurityMonitoringRuleRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createSecurityMonitoringRule(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityMonitoringRule(
            responseContext
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
    options?: Configuration
  ): Promise<SecurityMonitoringSuppressionResponse> {
    const requestContextPromise =
      this.requestFactory.createSecurityMonitoringSuppression(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityMonitoringSuppression(
            responseContext
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
    options?: Configuration
  ): Promise<NotificationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createSignalNotificationRule(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSignalNotificationRule(
            responseContext
          );
        });
    });
  }

  /**
   * Parse source code into an abstract syntax tree (AST) for the specified language.
   * @param param The request object
   */
  public createStaticAnalysisAst(
    param: SecurityMonitoringApiCreateStaticAnalysisAstRequest,
    options?: Configuration
  ): Promise<GetAstResponse> {
    const requestContextPromise = this.requestFactory.createStaticAnalysisAst(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createStaticAnalysisAst(
            responseContext
          );
        });
    });
  }

  /**
   * Run static analysis rules against a source code file and return violations found.
   * @param param The request object
   */
  public createStaticAnalysisServerAnalysis(
    param: SecurityMonitoringApiCreateStaticAnalysisServerAnalysisRequest,
    options?: Configuration
  ): Promise<AnalysisResponse> {
    const requestContextPromise =
      this.requestFactory.createStaticAnalysisServerAnalysis(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createStaticAnalysisServerAnalysis(
            responseContext
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
    options?: Configuration
  ): Promise<NotificationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createVulnerabilityNotificationRule(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createVulnerabilityNotificationRule(
            responseContext
          );
        });
    });
  }

  /**
   * Deactivate a Cloud SIEM content pack. This operation removes the content pack's
   * configuration from log filters or security filters and updates the content pack activation state.
   * @param param The request object
   */
  public deactivateContentPack(
    param: SecurityMonitoringApiDeactivateContentPackRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deactivateContentPack(
      param.contentPackId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deactivateContentPack(responseContext);
        });
    });
  }

  /**
   * Delete a custom framework.
   * @param param The request object
   */
  public deleteCustomFramework(
    param: SecurityMonitoringApiDeleteCustomFrameworkRequest,
    options?: Configuration
  ): Promise<DeleteCustomFrameworkResponse> {
    const requestContextPromise = this.requestFactory.deleteCustomFramework(
      param.handle,
      param.version,
      options
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteHistoricalJob(
      param.jobId,
      options
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
   * Unsubscribe from sample log generation for a Cloud SIEM content pack.
   * After unsubscribing, no more sample logs are generated for the requested content pack.
   *
   * **Availability**: this endpoint is restricted to Cloud SIEM trial organizations on an
   * eligible pricing model. Non-trial orgs receive `403 Forbidden`, the feature flag may also reject
   * requests with `400 Bad Request`, and legacy pricing tiers receive a response with `status: not_available`.
   * @param param The request object
   */
  public deleteSampleLogGenerationSubscription(
    param: SecurityMonitoringApiDeleteSampleLogGenerationSubscriptionRequest,
    options?: Configuration
  ): Promise<SampleLogGenerationSubscriptionResponse> {
    const requestContextPromise =
      this.requestFactory.deleteSampleLogGenerationSubscription(
        param.contentPackId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSampleLogGenerationSubscription(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a specific security filter.
   * @param param The request object
   */
  public deleteSecurityFilter(
    param: SecurityMonitoringApiDeleteSecurityFilterRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteSecurityFilter(
      param.securityFilterId,
      options
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
   * Delete a specific critical asset.
   * @param param The request object
   */
  public deleteSecurityMonitoringCriticalAsset(
    param: SecurityMonitoringApiDeleteSecurityMonitoringCriticalAssetRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSecurityMonitoringCriticalAsset(
        param.criticalAssetId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityMonitoringCriticalAsset(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a Cloud SIEM dataset. Out-of-the-box datasets cannot be deleted and
   * deleting a dataset that is referenced by a detection rule is rejected.
   * @param param The request object
   */
  public deleteSecurityMonitoringDataset(
    param: SecurityMonitoringApiDeleteSecurityMonitoringDatasetRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSecurityMonitoringDataset(
        param.datasetId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityMonitoringDataset(
            responseContext
          );
        });
    });
  }

  /**
   * Delete an entity context sync configuration. Cloud SIEM stops ingesting entities from this source,
   * and the credentials stored for the configuration are removed from the secrets store.
   * @param param The request object
   */
  public deleteSecurityMonitoringIntegrationConfig(
    param: SecurityMonitoringApiDeleteSecurityMonitoringIntegrationConfigRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSecurityMonitoringIntegrationConfig(
        param.integrationConfigId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityMonitoringIntegrationConfig(
            responseContext
          );
        });
    });
  }

  /**
   * Delete an existing rule. Default rules cannot be deleted.
   * @param param The request object
   */
  public deleteSecurityMonitoringRule(
    param: SecurityMonitoringApiDeleteSecurityMonitoringRuleRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSecurityMonitoringRule(param.ruleId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityMonitoringRule(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSecurityMonitoringSuppression(
        param.suppressionId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityMonitoringSuppression(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSignalNotificationRule(param.id, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSignalNotificationRule(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteVulnerabilityNotificationRule(
        param.id,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteVulnerabilityNotificationRule(
            responseContext
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
    param: SecurityMonitoringApiDetachCaseRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.detachCase(
      param.body,
      options
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
   * Update the triage state or assignee of a security signal.
   * @param param The request object
   */
  public editSecurityMonitoringSignal(
    param: SecurityMonitoringApiEditSecurityMonitoringSignalRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.editSecurityMonitoringSignal(
        param.signalId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.editSecurityMonitoringSignal(
            responseContext
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
    options?: Configuration
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.editSecurityMonitoringSignalAssignee(
        param.signalId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.editSecurityMonitoringSignalAssignee(
            responseContext
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
    options?: Configuration
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.editSecurityMonitoringSignalIncidents(
        param.signalId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.editSecurityMonitoringSignalIncidents(
            responseContext
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
    options?: Configuration
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.editSecurityMonitoringSignalState(
        param.signalId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.editSecurityMonitoringSignalState(
            responseContext
          );
        });
    });
  }

  /**
   * Export a security monitoring resource to a Terraform configuration.
   * The `resource_type` path parameter specifies the type of resource to export
   * and must be one of `suppressions` or `critical_assets`.
   * @param param The request object
   */
  public exportSecurityMonitoringTerraformResource(
    param: SecurityMonitoringApiExportSecurityMonitoringTerraformResourceRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringTerraformExportResponse> {
    const requestContextPromise =
      this.requestFactory.exportSecurityMonitoringTerraformResource(
        param.resourceType,
        param.resourceId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.exportSecurityMonitoringTerraformResource(
            responseContext
          );
        });
    });
  }

  /**
   * Get the activation state, integration status, and log collection status
   * for all Cloud SIEM content packs.
   * @param param The request object
   */
  public getContentPacksStates(
    options?: Configuration
  ): Promise<SecurityMonitoringContentPackStatesResponse> {
    const requestContextPromise =
      this.requestFactory.getContentPacksStates(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getContentPacksStates(responseContext);
        });
    });
  }

  /**
   * Get the list of critical assets that affect a specific existing rule by the rule's ID.
   * @param param The request object
   */
  public getCriticalAssetsAffectingRule(
    param: SecurityMonitoringApiGetCriticalAssetsAffectingRuleRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringCriticalAssetsResponse> {
    const requestContextPromise =
      this.requestFactory.getCriticalAssetsAffectingRule(param.ruleId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCriticalAssetsAffectingRule(
            responseContext
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
    options?: Configuration
  ): Promise<GetCustomFrameworkResponse> {
    const requestContextPromise = this.requestFactory.getCustomFramework(
      param.handle,
      param.version,
      options
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
   * Search the Cloud SIEM entity context store for entities that match a query, and return the historical
   * revisions of each entity in the requested time range. The endpoint can either return revisions across an
   * interval (`from` / `to`) or the snapshot of each entity at a single point in time (`as_of`); the two modes
   * are mutually exclusive.
   * @param param The request object
   */
  public getEntityContext(
    param: SecurityMonitoringApiGetEntityContextRequest = {},
    options?: Configuration
  ): Promise<EntityContextResponse> {
    const requestContextPromise = this.requestFactory.getEntityContext(
      param.query,
      param.from,
      param.to,
      param.asOf,
      param.limit,
      param.pageToken,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getEntityContext(responseContext);
        });
    });
  }

  /**
   * Returns a single finding with message and resource configuration.
   * @param param The request object
   */
  public getFinding(
    param: SecurityMonitoringApiGetFindingRequest,
    options?: Configuration
  ): Promise<GetFindingResponse> {
    const requestContextPromise = this.requestFactory.getFinding(
      param.findingId,
      param.snapshotTimestamp,
      options
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
    options?: Configuration
  ): Promise<HistoricalJobResponse> {
    const requestContextPromise = this.requestFactory.getHistoricalJob(
      param.jobId,
      options
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
   * Get detailed information about a specific indicator of compromise (IoC).
   * @param param The request object
   */
  public getIndicatorOfCompromise(
    param: SecurityMonitoringApiGetIndicatorOfCompromiseRequest,
    options?: Configuration
  ): Promise<GetIoCIndicatorResponse> {
    const requestContextPromise = this.requestFactory.getIndicatorOfCompromise(
      param.indicator,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIndicatorOfCompromise(
            responseContext
          );
        });
    });
  }

  /**
   * Get the list of investigation log queries available for a given security signal.
   * @param param The request object
   */
  public getInvestigationLogQueriesMatchingSignal(
    param: SecurityMonitoringApiGetInvestigationLogQueriesMatchingSignalRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringSignalSuggestedActionsResponse> {
    const requestContextPromise =
      this.requestFactory.getInvestigationLogQueriesMatchingSignal(
        param.signalId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getInvestigationLogQueriesMatchingSignal(
            responseContext
          );
        });
    });
  }

  /**
   * List resource filters.
   * @param param The request object
   */
  public getResourceEvaluationFilters(
    param: SecurityMonitoringApiGetResourceEvaluationFiltersRequest = {},
    options?: Configuration
  ): Promise<GetResourceEvaluationFiltersResponse> {
    const requestContextPromise =
      this.requestFactory.getResourceEvaluationFilters(
        param.cloudProvider,
        param.accountId,
        param.skipCache,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getResourceEvaluationFilters(
            responseContext
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
    options?: Configuration
  ): Promise<GetRuleVersionHistoryResponse> {
    const requestContextPromise = this.requestFactory.getRuleVersionHistory(
      param.ruleId,
      param.pageSize,
      param.pageNumber,
      options
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
    options?: Configuration
  ): Promise<GetSBOMResponse> {
    const requestContextPromise = this.requestFactory.getSBOM(
      param.assetType,
      param.filterAssetName,
      param.filterRepoDigest,
      param.extFormat,
      options
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
   * Returns a list of Secrets rules with ID, Pattern, Description, Priority, and SDS ID.
   * @param param The request object
   */
  public getSecretsRules(options?: Configuration): Promise<SecretRuleArray> {
    const requestContextPromise = this.requestFactory.getSecretsRules(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecretsRules(responseContext);
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
    options?: Configuration
  ): Promise<SecurityFilterResponse> {
    const requestContextPromise = this.requestFactory.getSecurityFilter(
      param.securityFilterId,
      options
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
   * Get the details of a specific critical asset.
   * @param param The request object
   */
  public getSecurityMonitoringCriticalAsset(
    param: SecurityMonitoringApiGetSecurityMonitoringCriticalAssetRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringCriticalAssetResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityMonitoringCriticalAsset(
        param.criticalAssetId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringCriticalAsset(
            responseContext
          );
        });
    });
  }

  /**
   * Get the current version of a Cloud SIEM dataset by ID.
   * @param param The request object
   */
  public getSecurityMonitoringDataset(
    param: SecurityMonitoringApiGetSecurityMonitoringDatasetRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringDatasetResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityMonitoringDataset(
        param.datasetId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringDataset(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve a specific historical version of a Cloud SIEM dataset.
   * @param param The request object
   */
  public getSecurityMonitoringDatasetByVersion(
    param: SecurityMonitoringApiGetSecurityMonitoringDatasetByVersionRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringDatasetResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityMonitoringDatasetByVersion(
        param.datasetId,
        param.version,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringDatasetByVersion(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve the version history of a Cloud SIEM dataset, including the changes made at each version.
   * @param param The request object
   */
  public getSecurityMonitoringDatasetVersionHistory(
    param: SecurityMonitoringApiGetSecurityMonitoringDatasetVersionHistoryRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringDatasetVersionHistoryResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityMonitoringDatasetVersionHistory(
        param.datasetId,
        param.pageSize,
        param.pageNumber,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringDatasetVersionHistory(
            responseContext
          );
        });
    });
  }

  /**
   * Get a hist signal's details.
   * @param param The request object
   */
  public getSecurityMonitoringHistsignal(
    param: SecurityMonitoringApiGetSecurityMonitoringHistsignalRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringSignalResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityMonitoringHistsignal(
        param.histsignalId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringHistsignal(
            responseContext
          );
        });
    });
  }

  /**
   * Get a job's hist signals.
   * @param param The request object
   */
  public getSecurityMonitoringHistsignalsByJobId(
    param: SecurityMonitoringApiGetSecurityMonitoringHistsignalsByJobIdRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityMonitoringHistsignalsByJobId(
        param.jobId,
        param.filterQuery,
        param.filterFrom,
        param.filterTo,
        param.sort,
        param.pageCursor,
        param.pageLimit,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringHistsignalsByJobId(
            responseContext
          );
        });
    });
  }

  /**
   * Get the details of a specific entity context sync configuration.
   * @param param The request object
   */
  public getSecurityMonitoringIntegrationConfig(
    param: SecurityMonitoringApiGetSecurityMonitoringIntegrationConfigRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringIntegrationConfigResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityMonitoringIntegrationConfig(
        param.integrationConfigId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringIntegrationConfig(
            responseContext
          );
        });
    });
  }

  /**
   * Get a rule's details.
   * @param param The request object
   */
  public getSecurityMonitoringRule(
    param: SecurityMonitoringApiGetSecurityMonitoringRuleRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringRuleResponse> {
    const requestContextPromise = this.requestFactory.getSecurityMonitoringRule(
      param.ruleId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringRule(
            responseContext
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
    options?: Configuration
  ): Promise<SecurityMonitoringSignalResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityMonitoringSignal(param.signalId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringSignal(
            responseContext
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
    options?: Configuration
  ): Promise<SecurityMonitoringSuppressionResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityMonitoringSuppression(
        param.suppressionId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringSuppression(
            responseContext
          );
        });
    });
  }

  /**
   * Get the list of entities related to a security signal, captured at the signal's timestamp.
   * @param param The request object
   */
  public getSignalEntities(
    param: SecurityMonitoringApiGetSignalEntitiesRequest,
    options?: Configuration
  ): Promise<SignalEntitiesResponse> {
    const requestContextPromise = this.requestFactory.getSignalEntities(
      param.signalId,
      param.limit,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSignalEntities(responseContext);
        });
    });
  }

  /**
   * Get the details of a notification rule for security signals.
   * @param param The request object
   */
  public getSignalNotificationRule(
    param: SecurityMonitoringApiGetSignalNotificationRuleRequest,
    options?: Configuration
  ): Promise<NotificationRuleResponse> {
    const requestContextPromise = this.requestFactory.getSignalNotificationRule(
      param.id,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSignalNotificationRule(
            responseContext
          );
        });
    });
  }

  /**
   * Returns the list of notification rules for security signals.
   * @param param The request object
   */
  public getSignalNotificationRules(
    options?: Configuration
  ): Promise<NotificationRulesList> {
    const requestContextPromise =
      this.requestFactory.getSignalNotificationRules(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSignalNotificationRules(
            responseContext
          );
        });
    });
  }

  /**
   * Get the default SAST ruleset names for a given programming language.
   * @param param The request object
   */
  public getStaticAnalysisDefaultRulesets(
    param: SecurityMonitoringApiGetStaticAnalysisDefaultRulesetsRequest,
    options?: Configuration
  ): Promise<DefaultRulesetsPerLanguageResponse> {
    const requestContextPromise =
      this.requestFactory.getStaticAnalysisDefaultRulesets(
        param.language,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getStaticAnalysisDefaultRulesets(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve tree-sitter node type definitions for a given programming language.
   * @param param The request object
   */
  public getStaticAnalysisNodeTypes(
    param: SecurityMonitoringApiGetStaticAnalysisNodeTypesRequest,
    options?: Configuration
  ): Promise<NodeTypesResponse> {
    const requestContextPromise =
      this.requestFactory.getStaticAnalysisNodeTypes(param.language, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getStaticAnalysisNodeTypes(
            responseContext
          );
        });
    });
  }

  /**
   * Get a SAST ruleset by name, including all its rules.
   * @param param The request object
   */
  public getStaticAnalysisRuleset(
    param: SecurityMonitoringApiGetStaticAnalysisRulesetRequest,
    options?: Configuration
  ): Promise<SastRulesetResponse> {
    const requestContextPromise = this.requestFactory.getStaticAnalysisRuleset(
      param.rulesetName,
      param.includeTests,
      param.includeTestingRules,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getStaticAnalysisRuleset(
            responseContext
          );
        });
    });
  }

  /**
   * Download the WebAssembly binary for a tree-sitter grammar by file name.
   * @param param The request object
   */
  public getStaticAnalysisTreeSitterWasm(
    param: SecurityMonitoringApiGetStaticAnalysisTreeSitterWasmRequest,
    options?: Configuration
  ): Promise<HttpFile> {
    const requestContextPromise =
      this.requestFactory.getStaticAnalysisTreeSitterWasm(param.file, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getStaticAnalysisTreeSitterWasm(
            responseContext
          );
        });
    });
  }

  /**
   * Get the list of suggested actions for a given security signal.
   * @param param The request object
   */
  public getSuggestedActionsMatchingSignal(
    param: SecurityMonitoringApiGetSuggestedActionsMatchingSignalRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringSignalSuggestedActionsResponse> {
    const requestContextPromise =
      this.requestFactory.getSuggestedActionsMatchingSignal(
        param.signalId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSuggestedActionsMatchingSignal(
            responseContext
          );
        });
    });
  }

  /**
   * Get the list of suppressions that would affect a rule.
   * @param param The request object
   */
  public getSuppressionsAffectingFutureRule(
    param: SecurityMonitoringApiGetSuppressionsAffectingFutureRuleRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringSuppressionsResponse> {
    const requestContextPromise =
      this.requestFactory.getSuppressionsAffectingFutureRule(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSuppressionsAffectingFutureRule(
            responseContext
          );
        });
    });
  }

  /**
   * Get the list of suppressions that affect a specific existing rule by its ID.
   * @param param The request object
   */
  public getSuppressionsAffectingRule(
    param: SecurityMonitoringApiGetSuppressionsAffectingRuleRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringSuppressionsResponse> {
    const requestContextPromise =
      this.requestFactory.getSuppressionsAffectingRule(param.ruleId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSuppressionsAffectingRule(
            responseContext
          );
        });
    });
  }

  /**
   * Get a suppression's version history.
   * @param param The request object
   */
  public getSuppressionVersionHistory(
    param: SecurityMonitoringApiGetSuppressionVersionHistoryRequest,
    options?: Configuration
  ): Promise<GetSuppressionVersionHistoryResponse> {
    const requestContextPromise =
      this.requestFactory.getSuppressionVersionHistory(
        param.suppressionId,
        param.pageSize,
        param.pageNumber,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSuppressionVersionHistory(
            responseContext
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
    options?: Configuration
  ): Promise<NotificationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.getVulnerabilityNotificationRule(param.id, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getVulnerabilityNotificationRule(
            responseContext
          );
        });
    });
  }

  /**
   * Returns the list of notification rules for security vulnerabilities.
   * @param param The request object
   */
  public getVulnerabilityNotificationRules(
    options?: Configuration
  ): Promise<NotificationRulesList> {
    const requestContextPromise =
      this.requestFactory.getVulnerabilityNotificationRules(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getVulnerabilityNotificationRules(
            responseContext
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
    options?: Configuration
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
      options
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
    options?: Configuration
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
      options
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
    options?: Configuration
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
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listFindings(
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
    options?: Configuration
  ): Promise<ListHistoricalJobsResponse> {
    const requestContextPromise = this.requestFactory.listHistoricalJobs(
      param.pageSize,
      param.pageNumber,
      param.sort,
      param.filterQuery,
      options
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
   * Get a list of indicators of compromise (IoCs) matching the specified filters.
   * @param param The request object
   */
  public listIndicatorsOfCompromise(
    param: SecurityMonitoringApiListIndicatorsOfCompromiseRequest = {},
    options?: Configuration
  ): Promise<IoCExplorerListResponse> {
    const requestContextPromise =
      this.requestFactory.listIndicatorsOfCompromise(
        param.limit,
        param.offset,
        param.query,
        param.sortColumn,
        param.sortOrder,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIndicatorsOfCompromise(
            responseContext
          );
        });
    });
  }

  /**
   * Get rules for multiple rulesets in batch.
   * @param param The request object
   */
  public listMultipleRulesets(
    param: SecurityMonitoringApiListMultipleRulesetsRequest,
    options?: Configuration
  ): Promise<GetMultipleRulesetsResponse> {
    const requestContextPromise = this.requestFactory.listMultipleRulesets(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMultipleRulesets(responseContext);
        });
    });
  }

  /**
   * Get the sample log generation subscriptions for the organization.
   * Sample log generation injects representative example logs for a given Cloud SIEM content pack into the Logs platform,
   * which can be used to test detection rules without onboarding the underlying integration first.
   *
   * **Availability**: this endpoint is restricted to Cloud SIEM trial organizations on an eligible
   * pricing model. Other organizations receive a `403 Forbidden` (non-trial orgs) or a `400 Bad Request`
   * (feature disabled), and legacy pricing tiers receive a response with `status: not_available`.
   * @param param The request object
   */
  public listSampleLogGenerationSubscriptions(
    param: SecurityMonitoringApiListSampleLogGenerationSubscriptionsRequest = {},
    options?: Configuration
  ): Promise<SampleLogGenerationSubscriptionsResponse> {
    const requestContextPromise =
      this.requestFactory.listSampleLogGenerationSubscriptions(
        param.status,
        param.startTimestamp,
        param.endTimestamp,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSampleLogGenerationSubscriptions(
            responseContext
          );
        });
    });
  }

  /**
   * Get a list of security scanned assets metadata for an organization.
   *
   * ### Pagination
   *
   * For the "List Vulnerabilities" endpoint, see the [Pagination section](#pagination).
   *
   * ### Filtering
   *
   * For the "List Vulnerabilities" endpoint, see the [Filtering section](#filtering).
   *
   * ### Metadata
   *
   *  For the "List Vulnerabilities" endpoint, see the [Metadata section](#metadata).
   *
   * ### Related endpoints
   *
   * This endpoint returns additional metadata for cloud resources that is not available from the standard resource endpoints. To access a richer dataset, call this endpoint together with the relevant resource endpoint(s) and merge (join) their results using the resource identifier.
   *
   * **Hosts**
   *
   * To enrich host data, join the response from the [Hosts](https://docs.datadoghq.com/api/latest/hosts/) endpoint with the response from the scanned-assets-metadata endpoint on the following key fields:
   *
   * | ENDPOINT | JOIN KEY | TYPE |
   * | --- | --- | --- |
   * | [/api/v1/hosts](https://docs.datadoghq.com/api/latest/hosts/) | host_list.host_name | string |
   * | /api/v2/security/scanned-assets-metadata | data.attributes.asset.name | string |
   *
   * **Host Images**
   *
   * To enrich host image data, join the response from the [Hosts](https://docs.datadoghq.com/api/latest/hosts/) endpoint with the response from the scanned-assets-metadata endpoint on the following key fields:
   *
   * | ENDPOINT | JOIN KEY | TYPE |
   * | --- | --- | --- |
   * | [/api/v1/hosts](https://docs.datadoghq.com/api/latest/hosts/) | host_list.tags_by_source["Amazon Web Services"]["image"] | string |
   * | /api/v2/security/scanned-assets-metadata | data.attributes.asset.name | string |
   *
   * **Container Images**
   *
   * To enrich container image data, join the response from the [Container Images](https://docs.datadoghq.com/api/latest/container-images/) endpoint with the response from the scanned-assets-metadata endpoint on the following key fields:
   *
   * | ENDPOINT | JOIN KEY | TYPE |
   * | --- | --- | --- |
   * | [/api/v2/container_images](https://docs.datadoghq.com/api/latest/container-images/) | `data.attributes.name`@`data.attributes.repo_digest` | string |
   * | /api/v2/security/scanned-assets-metadata | data.attributes.asset.name | string |
   * @param param The request object
   */
  public listScannedAssetsMetadata(
    param: SecurityMonitoringApiListScannedAssetsMetadataRequest = {},
    options?: Configuration
  ): Promise<ScannedAssetsMetadata> {
    const requestContextPromise = this.requestFactory.listScannedAssetsMetadata(
      param.pageToken,
      param.pageNumber,
      param.filterAssetType,
      param.filterAssetName,
      param.filterLastSuccessOrigin,
      param.filterLastSuccessEnv,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listScannedAssetsMetadata(
            responseContext
          );
        });
    });
  }

  /**
   * Get the list of configured security filters with their definitions.
   * @param param The request object
   */
  public listSecurityFilters(
    options?: Configuration
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
   * Get the configured security filters at each historical version of the configuration.
   * Each entry in the response represents the set of all security filters at a given version,
   * ordered from the most recent version to the oldest.
   * @param param The request object
   */
  public listSecurityFilterVersions(
    options?: Configuration
  ): Promise<SecurityFilterVersionsResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityFilterVersions(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityFilterVersions(
            responseContext
          );
        });
    });
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
    param: SecurityMonitoringApiListSecurityFindingsRequest = {},
    options?: Configuration
  ): Promise<ListSecurityFindingsResponse> {
    const requestContextPromise = this.requestFactory.listSecurityFindings(
      param.filterQuery,
      param.pageCursor,
      param.pageLimit,
      param.sort,
      options
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
    param: SecurityMonitoringApiListSecurityFindingsRequest = {},
    options?: Configuration
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
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listSecurityFindings(
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
   * Get the list of all critical assets.
   * @param param The request object
   */
  public listSecurityMonitoringCriticalAssets(
    options?: Configuration
  ): Promise<SecurityMonitoringCriticalAssetsResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringCriticalAssets(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityMonitoringCriticalAssets(
            responseContext
          );
        });
    });
  }

  /**
   * List all Cloud SIEM datasets available to the organization, including both
   * customer-defined datasets and Datadog out-of-the-box datasets.
   * @param param The request object
   */
  public listSecurityMonitoringDatasets(
    param: SecurityMonitoringApiListSecurityMonitoringDatasetsRequest = {},
    options?: Configuration
  ): Promise<SecurityMonitoringDatasetsListResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringDatasets(
        param.pageSize,
        param.pageNumber,
        param.sort,
        param.filterQuery,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityMonitoringDatasets(
            responseContext
          );
        });
    });
  }

  /**
   * List hist signals.
   * @param param The request object
   */
  public listSecurityMonitoringHistsignals(
    param: SecurityMonitoringApiListSecurityMonitoringHistsignalsRequest = {},
    options?: Configuration
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringHistsignals(
        param.filterQuery,
        param.filterFrom,
        param.filterTo,
        param.sort,
        param.pageCursor,
        param.pageLimit,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityMonitoringHistsignals(
            responseContext
          );
        });
    });
  }

  /**
   * List the entity context sync configurations for Cloud SIEM. Each configuration connects Cloud SIEM
   * to an external source that provides entities (for example, users from an identity provider) for use
   * in signals and the entity explorer.
   * @param param The request object
   */
  public listSecurityMonitoringIntegrationConfigs(
    param: SecurityMonitoringApiListSecurityMonitoringIntegrationConfigsRequest = {},
    options?: Configuration
  ): Promise<SecurityMonitoringIntegrationConfigsResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringIntegrationConfigs(
        param.filterIntegrationType,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityMonitoringIntegrationConfigs(
            responseContext
          );
        });
    });
  }

  /**
   * List rules.
   * @param param The request object
   */
  public listSecurityMonitoringRules(
    param: SecurityMonitoringApiListSecurityMonitoringRulesRequest = {},
    options?: Configuration
  ): Promise<SecurityMonitoringListRulesResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringRules(
        param.pageSize,
        param.pageNumber,
        param.query,
        param.sort,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityMonitoringRules(
            responseContext
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
    options?: Configuration
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringSignals(
        param.filterQuery,
        param.filterFrom,
        param.filterTo,
        param.sort,
        param.pageCursor,
        param.pageLimit,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityMonitoringSignals(
            responseContext
          );
        });
    });
  }

  /**
   * Provide a paginated version of listSecurityMonitoringSignals returning a generator with all the items.
   */
  public async *listSecurityMonitoringSignalsWithPagination(
    param: SecurityMonitoringApiListSecurityMonitoringSignalsRequest = {},
    options?: Configuration
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
          options
        );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response =
        await this.responseProcessor.listSecurityMonitoringSignals(
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
    param: SecurityMonitoringApiListSecurityMonitoringSuppressionsRequest = {},
    options?: Configuration
  ): Promise<SecurityMonitoringPaginatedSuppressionsResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringSuppressions(
        param.query,
        param.sort,
        param.pageSize,
        param.pageNumber,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityMonitoringSuppressions(
            responseContext
          );
        });
    });
  }

  /**
   * Get the rulesets relevant for code generation for the authenticated user.
   * @param param The request object
   */
  public listStaticAnalysisCodegenRulesets(
    options?: Configuration
  ): Promise<SastRulesetsResponse> {
    const requestContextPromise =
      this.requestFactory.listStaticAnalysisCodegenRulesets(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listStaticAnalysisCodegenRulesets(
            responseContext
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
   * *Note: The first request may take longer to complete than subsequent requests.*
   *
   * #### Subsequent requests
   *
   * Any request containing valid `page[token]` and `page[number]` parameters will be considered a subsequent request.
   *
   * If the `token` is invalid, a `404` response will be returned.
   *
   * If the page `number` is invalid, a `400` response will be returned.
   *
   * The returned `token` is valid for all requests in the pagination sequence. To send paginated requests in parallel, reuse the same `token` and change only the `page[number]` parameter.
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
   * ### Extensions
   *
   * Requests may include extensions to modify the behavior of the requested endpoint. The filter parameters follow the [JSON:API format](https://jsonapi.org/extensions/#extensions) format: `ext:$extension_name`, where `extension_name` is the name of the modifier that is being applied.
   *
   * Extensions can only include one value: `ext:modifier=value`.
   * @param param The request object
   */
  public listVulnerabilities(
    param: SecurityMonitoringApiListVulnerabilitiesRequest = {},
    options?: Configuration
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
      param.filterRunningKernel,
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
      options
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
    options?: Configuration
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
      options
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
    options?: Configuration
  ): Promise<BulkMuteFindingsResponse> {
    const requestContextPromise = this.requestFactory.muteFindings(
      param.body,
      options
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
   * Mute or unmute security findings.
   * You can mute or unmute up to 100 security findings per request. The request body must include `is_muted` and `reason` attributes. The allowed reasons depend on whether the finding is being muted or unmuted:
   *   - To mute a finding: `PENDING_FIX`, `FALSE_POSITIVE`, `OTHER`, `NO_FIX`, `DUPLICATE`, `RISK_ACCEPTED`.
   *   - To unmute a finding: `NO_PENDING_FIX`, `HUMAN_ERROR`, `NO_LONGER_ACCEPTED_RISK`, `OTHER`.
   * @param param The request object
   */
  public muteSecurityFindings(
    param: SecurityMonitoringApiMuteSecurityFindingsRequest,
    options?: Configuration
  ): Promise<MuteFindingsResponse> {
    const requestContextPromise = this.requestFactory.muteSecurityFindings(
      param.body,
      options
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
   * Partially update the notification rule. All fields are optional; if a field is not provided, it is not updated.
   * @param param The request object
   */
  public patchSignalNotificationRule(
    param: SecurityMonitoringApiPatchSignalNotificationRuleRequest,
    options?: Configuration
  ): Promise<NotificationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.patchSignalNotificationRule(
        param.id,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.patchSignalNotificationRule(
            responseContext
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
    options?: Configuration
  ): Promise<NotificationRuleResponse> {
    const requestContextPromise =
      this.requestFactory.patchVulnerabilityNotificationRule(
        param.id,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.patchVulnerabilityNotificationRule(
            responseContext
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
    options?: Configuration
  ): Promise<JobCreateResponse> {
    const requestContextPromise = this.requestFactory.runHistoricalJob(
      param.body,
      options
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
    param: SecurityMonitoringApiSearchSecurityFindingsRequest,
    options?: Configuration
  ): Promise<ListSecurityFindingsResponse> {
    const requestContextPromise = this.requestFactory.searchSecurityFindings(
      param.body,
      options
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
    param: SecurityMonitoringApiSearchSecurityFindingsRequest,
    options?: Configuration
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
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.searchSecurityFindings(
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
   * Search hist signals.
   * @param param The request object
   */
  public searchSecurityMonitoringHistsignals(
    param: SecurityMonitoringApiSearchSecurityMonitoringHistsignalsRequest = {},
    options?: Configuration
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const requestContextPromise =
      this.requestFactory.searchSecurityMonitoringHistsignals(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchSecurityMonitoringHistsignals(
            responseContext
          );
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
    options?: Configuration
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const requestContextPromise =
      this.requestFactory.searchSecurityMonitoringSignals(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchSecurityMonitoringSignals(
            responseContext
          );
        });
    });
  }

  /**
   * Provide a paginated version of searchSecurityMonitoringSignals returning a generator with all the items.
   */
  public async *searchSecurityMonitoringSignalsWithPagination(
    param: SecurityMonitoringApiSearchSecurityMonitoringSignalsRequest = {},
    options?: Configuration
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
          options
        );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response =
        await this.responseProcessor.searchSecurityMonitoringSignals(
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
    options?: Configuration
  ): Promise<SecurityMonitoringRuleTestResponse> {
    const requestContextPromise =
      this.requestFactory.testExistingSecurityMonitoringRule(
        param.ruleId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.testExistingSecurityMonitoringRule(
            responseContext
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
    options?: Configuration
  ): Promise<SecurityMonitoringRuleTestResponse> {
    const requestContextPromise =
      this.requestFactory.testSecurityMonitoringRule(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.testSecurityMonitoringRule(
            responseContext
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
    options?: Configuration
  ): Promise<UpdateCustomFrameworkResponse> {
    const requestContextPromise = this.requestFactory.updateCustomFramework(
      param.handle,
      param.version,
      param.body,
      options
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
    options?: Configuration
  ): Promise<UpdateResourceEvaluationFiltersResponse> {
    const requestContextPromise =
      this.requestFactory.updateResourceEvaluationFilters(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateResourceEvaluationFilters(
            responseContext
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
    options?: Configuration
  ): Promise<SecurityFilterResponse> {
    const requestContextPromise = this.requestFactory.updateSecurityFilter(
      param.securityFilterId,
      param.body,
      options
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
   * Update a specific critical asset.
   * @param param The request object
   */
  public updateSecurityMonitoringCriticalAsset(
    param: SecurityMonitoringApiUpdateSecurityMonitoringCriticalAssetRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringCriticalAssetResponse> {
    const requestContextPromise =
      this.requestFactory.updateSecurityMonitoringCriticalAsset(
        param.criticalAssetId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityMonitoringCriticalAsset(
            responseContext
          );
        });
    });
  }

  /**
   * Update an existing Cloud SIEM dataset. The current version of the dataset can be
   * provided to detect concurrent modifications.
   * @param param The request object
   */
  public updateSecurityMonitoringDataset(
    param: SecurityMonitoringApiUpdateSecurityMonitoringDatasetRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.updateSecurityMonitoringDataset(
        param.datasetId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityMonitoringDataset(
            responseContext
          );
        });
    });
  }

  /**
   * Update an existing entity context sync configuration. Supports partial updates; only the fields provided in the request body are modified.
   * @param param The request object
   */
  public updateSecurityMonitoringIntegrationConfig(
    param: SecurityMonitoringApiUpdateSecurityMonitoringIntegrationConfigRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringIntegrationConfigResponse> {
    const requestContextPromise =
      this.requestFactory.updateSecurityMonitoringIntegrationConfig(
        param.integrationConfigId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityMonitoringIntegrationConfig(
            responseContext
          );
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
    options?: Configuration
  ): Promise<SecurityMonitoringRuleResponse> {
    const requestContextPromise =
      this.requestFactory.updateSecurityMonitoringRule(
        param.ruleId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityMonitoringRule(
            responseContext
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
    options?: Configuration
  ): Promise<SecurityMonitoringSuppressionResponse> {
    const requestContextPromise =
      this.requestFactory.updateSecurityMonitoringSuppression(
        param.suppressionId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityMonitoringSuppression(
            responseContext
          );
        });
    });
  }

  /**
   * Validate the credentials currently stored on an existing entity context sync configuration.
   * Returns a 200 status code if the credentials are still valid against the external entity source.
   * @param param The request object
   */
  public validateSecurityMonitoringIntegrationConfig(
    param: SecurityMonitoringApiValidateSecurityMonitoringIntegrationConfigRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.validateSecurityMonitoringIntegrationConfig(
        param.integrationConfigId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validateSecurityMonitoringIntegrationConfig(
            responseContext
          );
        });
    });
  }

  /**
   * Validate a set of credentials against the external entity source before creating a sync configuration.
   * Returns a 200 status code if the credentials are valid.
   * @param param The request object
   */
  public validateSecurityMonitoringIntegrationCredentials(
    param: SecurityMonitoringApiValidateSecurityMonitoringIntegrationCredentialsRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.validateSecurityMonitoringIntegrationCredentials(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validateSecurityMonitoringIntegrationCredentials(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.validateSecurityMonitoringRule(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validateSecurityMonitoringRule(
            responseContext
          );
        });
    });
  }

  /**
   * Validate a suppression rule.
   * @param param The request object
   */
  public validateSecurityMonitoringSuppression(
    param: SecurityMonitoringApiValidateSecurityMonitoringSuppressionRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.validateSecurityMonitoringSuppression(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validateSecurityMonitoringSuppression(
            responseContext
          );
        });
    });
  }
}
