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
  HttpFile,
} from "@datadog/datadog-api-client-core";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { ConvertJobResultsToSignalsRequest } from "./models/ConvertJobResultsToSignalsRequest";
import { CreateNotificationRuleParameters } from "./models/CreateNotificationRuleParameters";
import { EntityContextEntityType } from "./models/EntityContextEntityType";
import { EntityContextResponse } from "./models/EntityContextResponse";
import { EntityContextRevisionsMode } from "./models/EntityContextRevisionsMode";
import { GetIoCIndicatorResponse } from "./models/GetIoCIndicatorResponse";
import { GetRuleVersionHistoryResponse } from "./models/GetRuleVersionHistoryResponse";
import { GetSuppressionVersionHistoryResponse } from "./models/GetSuppressionVersionHistoryResponse";
import { HistoricalJobResponse } from "./models/HistoricalJobResponse";
import { IoCExplorerListResponse } from "./models/IoCExplorerListResponse";
import { IoCTriageState } from "./models/IoCTriageState";
import { IoCTriageWriteRequest } from "./models/IoCTriageWriteRequest";
import { IoCTriageWriteResponse } from "./models/IoCTriageWriteResponse";
import { JobCreateResponse } from "./models/JobCreateResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { ListHistoricalJobsResponse } from "./models/ListHistoricalJobsResponse";
import { MatchingSignalsResponse } from "./models/MatchingSignalsResponse";
import { NotificationRulePreviewResponse } from "./models/NotificationRulePreviewResponse";
import { NotificationRuleResponse } from "./models/NotificationRuleResponse";
import { NotificationRulesListResponse } from "./models/NotificationRulesListResponse";
import { PatchNotificationRuleParameters } from "./models/PatchNotificationRuleParameters";
import { RecentlyUpdatedEntitiesResponse } from "./models/RecentlyUpdatedEntitiesResponse";
import { RunHistoricalJobRequest } from "./models/RunHistoricalJobRequest";
import { SampleLogGenerationBulkSubscriptionRequest } from "./models/SampleLogGenerationBulkSubscriptionRequest";
import { SampleLogGenerationBulkSubscriptionResponse } from "./models/SampleLogGenerationBulkSubscriptionResponse";
import { SampleLogGenerationSubscriptionCreateRequest } from "./models/SampleLogGenerationSubscriptionCreateRequest";
import { SampleLogGenerationSubscriptionResponse } from "./models/SampleLogGenerationSubscriptionResponse";
import { SampleLogGenerationSubscriptionsResponse } from "./models/SampleLogGenerationSubscriptionsResponse";
import { SampleLogGenerationSubscriptionsStatusFilter } from "./models/SampleLogGenerationSubscriptionsStatusFilter";
import { SecurityFilterCreateRequest } from "./models/SecurityFilterCreateRequest";
import { SecurityFilterResponse } from "./models/SecurityFilterResponse";
import { SecurityFiltersResponse } from "./models/SecurityFiltersResponse";
import { SecurityFilterUpdateRequest } from "./models/SecurityFilterUpdateRequest";
import { SecurityFilterVersionsResponse } from "./models/SecurityFilterVersionsResponse";
import { SecurityMonitoringBatchMigrationCreateRequest } from "./models/SecurityMonitoringBatchMigrationCreateRequest";
import { SecurityMonitoringBatchMigrationPublishRequest } from "./models/SecurityMonitoringBatchMigrationPublishRequest";
import { SecurityMonitoringBatchMigrationPublishResponse } from "./models/SecurityMonitoringBatchMigrationPublishResponse";
import { SecurityMonitoringBatchMigrationResourceResponse } from "./models/SecurityMonitoringBatchMigrationResourceResponse";
import { SecurityMonitoringBatchMigrationResourcesCreateRequest } from "./models/SecurityMonitoringBatchMigrationResourcesCreateRequest";
import { SecurityMonitoringBatchMigrationResourcesCreateResponse } from "./models/SecurityMonitoringBatchMigrationResourcesCreateResponse";
import { SecurityMonitoringBatchMigrationResourcesDeleteRequest } from "./models/SecurityMonitoringBatchMigrationResourcesDeleteRequest";
import { SecurityMonitoringBatchMigrationResourcesListResponse } from "./models/SecurityMonitoringBatchMigrationResourcesListResponse";
import { SecurityMonitoringBatchMigrationResourceUpdateRequest } from "./models/SecurityMonitoringBatchMigrationResourceUpdateRequest";
import { SecurityMonitoringBatchMigrationResponse } from "./models/SecurityMonitoringBatchMigrationResponse";
import { SecurityMonitoringBatchMigrationsListResponse } from "./models/SecurityMonitoringBatchMigrationsListResponse";
import { SecurityMonitoringBatchMigrationUpdateRequest } from "./models/SecurityMonitoringBatchMigrationUpdateRequest";
import { SecurityMonitoringContentPackStatesResponse } from "./models/SecurityMonitoringContentPackStatesResponse";
import { SecurityMonitoringCriticalAssetCreateRequest } from "./models/SecurityMonitoringCriticalAssetCreateRequest";
import { SecurityMonitoringCriticalAssetResponse } from "./models/SecurityMonitoringCriticalAssetResponse";
import { SecurityMonitoringCriticalAssetsResponse } from "./models/SecurityMonitoringCriticalAssetsResponse";
import { SecurityMonitoringCriticalAssetUpdateRequest } from "./models/SecurityMonitoringCriticalAssetUpdateRequest";
import { SecurityMonitoringDatasetCreateRequest } from "./models/SecurityMonitoringDatasetCreateRequest";
import { SecurityMonitoringDatasetCreateResponse } from "./models/SecurityMonitoringDatasetCreateResponse";
import { SecurityMonitoringDatasetDependenciesRequest } from "./models/SecurityMonitoringDatasetDependenciesRequest";
import { SecurityMonitoringDatasetDependenciesResponse } from "./models/SecurityMonitoringDatasetDependenciesResponse";
import { SecurityMonitoringDatasetResponse } from "./models/SecurityMonitoringDatasetResponse";
import { SecurityMonitoringDatasetsListResponse } from "./models/SecurityMonitoringDatasetsListResponse";
import { SecurityMonitoringDatasetUpdateRequest } from "./models/SecurityMonitoringDatasetUpdateRequest";
import { SecurityMonitoringDatasetVersionHistoryResponse } from "./models/SecurityMonitoringDatasetVersionHistoryResponse";
import { SecurityMonitoringEntraIdAzureAppRegistrationsResponse } from "./models/SecurityMonitoringEntraIdAzureAppRegistrationsResponse";
import { SecurityMonitoringIntegrationActivateRequest } from "./models/SecurityMonitoringIntegrationActivateRequest";
import { SecurityMonitoringIntegrationConfigCreateRequest } from "./models/SecurityMonitoringIntegrationConfigCreateRequest";
import { SecurityMonitoringIntegrationConfigResponse } from "./models/SecurityMonitoringIntegrationConfigResponse";
import { SecurityMonitoringIntegrationConfigsResponse } from "./models/SecurityMonitoringIntegrationConfigsResponse";
import { SecurityMonitoringIntegrationConfigUpdateRequest } from "./models/SecurityMonitoringIntegrationConfigUpdateRequest";
import { SecurityMonitoringIntegrationCredentialsValidateRequest } from "./models/SecurityMonitoringIntegrationCredentialsValidateRequest";
import { SecurityMonitoringIntegrationType } from "./models/SecurityMonitoringIntegrationType";
import { SecurityMonitoringListRulesResponse } from "./models/SecurityMonitoringListRulesResponse";
import { SecurityMonitoringPaginatedSuppressionsResponse } from "./models/SecurityMonitoringPaginatedSuppressionsResponse";
import { SecurityMonitoringRuleBulkDeletePayload } from "./models/SecurityMonitoringRuleBulkDeletePayload";
import { SecurityMonitoringRuleBulkDeleteResponse } from "./models/SecurityMonitoringRuleBulkDeleteResponse";
import { SecurityMonitoringRuleBulkExportPayload } from "./models/SecurityMonitoringRuleBulkExportPayload";
import { SecurityMonitoringRuleConvertBulkPayload } from "./models/SecurityMonitoringRuleConvertBulkPayload";
import { SecurityMonitoringRuleConvertPayload } from "./models/SecurityMonitoringRuleConvertPayload";
import { SecurityMonitoringRuleConvertResponse } from "./models/SecurityMonitoringRuleConvertResponse";
import { SecurityMonitoringRuleCreatePayload } from "./models/SecurityMonitoringRuleCreatePayload";
import { SecurityMonitoringRuleProposalResponse } from "./models/SecurityMonitoringRuleProposalResponse";
import { SecurityMonitoringRuleProposalStartRequest } from "./models/SecurityMonitoringRuleProposalStartRequest";
import { SecurityMonitoringRuleProposalStartResponse } from "./models/SecurityMonitoringRuleProposalStartResponse";
import { SecurityMonitoringRuleResponse } from "./models/SecurityMonitoringRuleResponse";
import { SecurityMonitoringRuleSort } from "./models/SecurityMonitoringRuleSort";
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
import { SecurityMonitoringSignalsBulkAssigneeUpdateRequest } from "./models/SecurityMonitoringSignalsBulkAssigneeUpdateRequest";
import { SecurityMonitoringSignalsBulkStateUpdateRequest } from "./models/SecurityMonitoringSignalsBulkStateUpdateRequest";
import { SecurityMonitoringSignalsBulkTriageUpdateResponse } from "./models/SecurityMonitoringSignalsBulkTriageUpdateResponse";
import { SecurityMonitoringSignalsBulkUpdateRequest } from "./models/SecurityMonitoringSignalsBulkUpdateRequest";
import { SecurityMonitoringSignalsListResponse } from "./models/SecurityMonitoringSignalsListResponse";
import { SecurityMonitoringSignalsSort } from "./models/SecurityMonitoringSignalsSort";
import { SecurityMonitoringSignalStateUpdateRequest } from "./models/SecurityMonitoringSignalStateUpdateRequest";
import { SecurityMonitoringSignalSuggestedActionsResponse } from "./models/SecurityMonitoringSignalSuggestedActionsResponse";
import { SecurityMonitoringSignalTriageUpdateResponse } from "./models/SecurityMonitoringSignalTriageUpdateResponse";
import { SecurityMonitoringSignalUpdateRequest } from "./models/SecurityMonitoringSignalUpdateRequest";
import { SecurityMonitoringSuppressionCreateRequest } from "./models/SecurityMonitoringSuppressionCreateRequest";
import { SecurityMonitoringSuppressionResponse } from "./models/SecurityMonitoringSuppressionResponse";
import { SecurityMonitoringSuppressionSort } from "./models/SecurityMonitoringSuppressionSort";
import { SecurityMonitoringSuppressionsResponse } from "./models/SecurityMonitoringSuppressionsResponse";
import { SecurityMonitoringSuppressionUpdateRequest } from "./models/SecurityMonitoringSuppressionUpdateRequest";
import { SecurityMonitoringTerraformBulkExportRequest } from "./models/SecurityMonitoringTerraformBulkExportRequest";
import { SecurityMonitoringTerraformConvertRequest } from "./models/SecurityMonitoringTerraformConvertRequest";
import { SecurityMonitoringTerraformExportResponse } from "./models/SecurityMonitoringTerraformExportResponse";
import { SecurityMonitoringTerraformResourceType } from "./models/SecurityMonitoringTerraformResourceType";
import { SignalEntitiesResponse } from "./models/SignalEntitiesResponse";
import { SingleEntityContextResponse } from "./models/SingleEntityContextResponse";
import { version } from "../version";

export class SecurityMonitoringApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("security-detection", version);
    }
  }
  public async activateContentPack(
    contentPackId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'activateContentPack'");
    if (!_config.unstableOperations["v2.activateContentPack"]) {
      throw new Error(
        "Unstable operation 'activateContentPack' is disabled. Enable it by setting `configuration.unstableOperations['v2.activateContentPack'] = true`",
      );
    }

    // verify required parameter 'contentPackId' is not null or undefined
    if (contentPackId === null || contentPackId === undefined) {
      throw new RequiredError("contentPackId", "activateContentPack");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/content_packs/{content_pack_id}/activate".replace(
        "{content_pack_id}",
        encodeURIComponent(String(contentPackId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.activateContentPack",
      SecurityMonitoringApi.operationServers,
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

  public async activateIntegration(
    integrationType: string,
    body?: SecurityMonitoringIntegrationActivateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'activateIntegration'");
    if (!_config.unstableOperations["v2.activateIntegration"]) {
      throw new Error(
        "Unstable operation 'activateIntegration' is disabled. Enable it by setting `configuration.unstableOperations['v2.activateIntegration'] = true`",
      );
    }

    // verify required parameter 'integrationType' is not null or undefined
    if (integrationType === null || integrationType === undefined) {
      throw new RequiredError("integrationType", "activateIntegration");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/integration_config/{integration_type}/activate".replace(
        "{integration_type}",
        encodeURIComponent(String(integrationType)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.activateIntegration",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringIntegrationActivateRequest",
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

  public async batchGetSecurityMonitoringDatasetDependencies(
    body: SecurityMonitoringDatasetDependenciesRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'batchGetSecurityMonitoringDatasetDependencies'",
    );
    if (
      !_config.unstableOperations[
        "v2.batchGetSecurityMonitoringDatasetDependencies"
      ]
    ) {
      throw new Error(
        "Unstable operation 'batchGetSecurityMonitoringDatasetDependencies' is disabled. Enable it by setting `configuration.unstableOperations['v2.batchGetSecurityMonitoringDatasetDependencies'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "batchGetSecurityMonitoringDatasetDependencies",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/datasets/dependencies";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.batchGetSecurityMonitoringDatasetDependencies",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringDatasetDependenciesRequest",
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

  public async bulkConvertExistingSecurityMonitoringRules(
    body: SecurityMonitoringRuleConvertBulkPayload,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "bulkConvertExistingSecurityMonitoringRules",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/convert/bulk";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.bulkConvertExistingSecurityMonitoringRules",
      SecurityMonitoringApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam(
      "Accept",
      "application/zip, application/json",
    );
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
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringRuleConvertBulkPayload",
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

  public async bulkCreateSampleLogGenerationSubscriptions(
    body: SampleLogGenerationBulkSubscriptionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'bulkCreateSampleLogGenerationSubscriptions'",
    );
    if (
      !_config.unstableOperations[
        "v2.bulkCreateSampleLogGenerationSubscriptions"
      ]
    ) {
      throw new Error(
        "Unstable operation 'bulkCreateSampleLogGenerationSubscriptions' is disabled. Enable it by setting `configuration.unstableOperations['v2.bulkCreateSampleLogGenerationSubscriptions'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "bulkCreateSampleLogGenerationSubscriptions",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/sample_log_generation/subscriptions/bulk";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.bulkCreateSampleLogGenerationSubscriptions",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SampleLogGenerationBulkSubscriptionRequest",
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

  public async bulkDeleteSecurityMonitoringRules(
    body: SecurityMonitoringRuleBulkDeletePayload,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "bulkDeleteSecurityMonitoringRules");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/bulk_delete";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.bulkDeleteSecurityMonitoringRules",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringRuleBulkDeletePayload",
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

  public async bulkEditSecurityMonitoringSignals(
    body: SecurityMonitoringSignalsBulkUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "bulkEditSecurityMonitoringSignals");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/signals/bulk/update";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.bulkEditSecurityMonitoringSignals",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringSignalsBulkUpdateRequest",
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

  public async bulkEditSecurityMonitoringSignalsAssignee(
    body: SecurityMonitoringSignalsBulkAssigneeUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "bulkEditSecurityMonitoringSignalsAssignee",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/signals/bulk/assignee";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.bulkEditSecurityMonitoringSignalsAssignee",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringSignalsBulkAssigneeUpdateRequest",
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

  public async bulkEditSecurityMonitoringSignalsState(
    body: SecurityMonitoringSignalsBulkStateUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "bulkEditSecurityMonitoringSignalsState");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/signals/bulk/state";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.bulkEditSecurityMonitoringSignalsState",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringSignalsBulkStateUpdateRequest",
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

  public async bulkExportSecurityMonitoringRules(
    body: SecurityMonitoringRuleBulkExportPayload,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "bulkExportSecurityMonitoringRules");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/bulk_export";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.bulkExportSecurityMonitoringRules",
      SecurityMonitoringApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam(
      "Accept",
      "application/zip, application/json",
    );
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
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringRuleBulkExportPayload",
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

  public async bulkExportSecurityMonitoringTerraformResources(
    resourceType: SecurityMonitoringTerraformResourceType,
    body: SecurityMonitoringTerraformBulkExportRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'bulkExportSecurityMonitoringTerraformResources'",
    );
    if (
      !_config.unstableOperations[
        "v2.bulkExportSecurityMonitoringTerraformResources"
      ]
    ) {
      throw new Error(
        "Unstable operation 'bulkExportSecurityMonitoringTerraformResources' is disabled. Enable it by setting `configuration.unstableOperations['v2.bulkExportSecurityMonitoringTerraformResources'] = true`",
      );
    }

    // verify required parameter 'resourceType' is not null or undefined
    if (resourceType === null || resourceType === undefined) {
      throw new RequiredError(
        "resourceType",
        "bulkExportSecurityMonitoringTerraformResources",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "bulkExportSecurityMonitoringTerraformResources",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/terraform/{resource_type}/bulk".replace(
        "{resource_type}",
        encodeURIComponent(String(resourceType)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.bulkExportSecurityMonitoringTerraformResources",
      SecurityMonitoringApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam(
      "Accept",
      "application/zip, application/json",
    );
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
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringTerraformBulkExportRequest",
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

  public async cancelHistoricalJob(
    jobId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'cancelHistoricalJob'");
    if (!_config.unstableOperations["v2.cancelHistoricalJob"]) {
      throw new Error(
        "Unstable operation 'cancelHistoricalJob' is disabled. Enable it by setting `configuration.unstableOperations['v2.cancelHistoricalJob'] = true`",
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
      "v2.SecurityMonitoringApi.cancelHistoricalJob",
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

  public async cancelSecurityMonitoringBatchMigration(
    batchId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'cancelSecurityMonitoringBatchMigration'",
    );
    if (
      !_config.unstableOperations["v2.cancelSecurityMonitoringBatchMigration"]
    ) {
      throw new Error(
        "Unstable operation 'cancelSecurityMonitoringBatchMigration' is disabled. Enable it by setting `configuration.unstableOperations['v2.cancelSecurityMonitoringBatchMigration'] = true`",
      );
    }

    // verify required parameter 'batchId' is not null or undefined
    if (batchId === null || batchId === undefined) {
      throw new RequiredError(
        "batchId",
        "cancelSecurityMonitoringBatchMigration",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/batch-migrations/{batch_id}/cancel".replace(
        "{batch_id}",
        encodeURIComponent(String(batchId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.cancelSecurityMonitoringBatchMigration",
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
      "v2.SecurityMonitoringApi.convertExistingSecurityMonitoringRule",
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

  public async convertJobResultToSignal(
    body: ConvertJobResultsToSignalsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'convertJobResultToSignal'");
    if (!_config.unstableOperations["v2.convertJobResultToSignal"]) {
      throw new Error(
        "Unstable operation 'convertJobResultToSignal' is disabled. Enable it by setting `configuration.unstableOperations['v2.convertJobResultToSignal'] = true`",
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
      "v2.SecurityMonitoringApi.convertJobResultToSignal",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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
      "AuthZ",
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
      "v2.SecurityMonitoringApi.convertSecurityMonitoringRuleFromJSONToTerraform",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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

  public async convertSecurityMonitoringTerraformResource(
    resourceType: SecurityMonitoringTerraformResourceType,
    body: SecurityMonitoringTerraformConvertRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'convertSecurityMonitoringTerraformResource'",
    );
    if (
      !_config.unstableOperations[
        "v2.convertSecurityMonitoringTerraformResource"
      ]
    ) {
      throw new Error(
        "Unstable operation 'convertSecurityMonitoringTerraformResource' is disabled. Enable it by setting `configuration.unstableOperations['v2.convertSecurityMonitoringTerraformResource'] = true`",
      );
    }

    // verify required parameter 'resourceType' is not null or undefined
    if (resourceType === null || resourceType === undefined) {
      throw new RequiredError(
        "resourceType",
        "convertSecurityMonitoringTerraformResource",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "convertSecurityMonitoringTerraformResource",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/terraform/{resource_type}/convert".replace(
        "{resource_type}",
        encodeURIComponent(String(resourceType)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.convertSecurityMonitoringTerraformResource",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringTerraformConvertRequest",
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

  public async createIoCTriageState(
    body: IoCTriageWriteRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createIoCTriageState'");
    if (!_config.unstableOperations["v2.createIoCTriageState"]) {
      throw new Error(
        "Unstable operation 'createIoCTriageState' is disabled. Enable it by setting `configuration.unstableOperations['v2.createIoCTriageState'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIoCTriageState");
    }

    // Path Params
    const localVarPath = "/api/v2/security/siem/ioc-explorer/triage";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.createIoCTriageState",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "IoCTriageWriteRequest", ""),
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

  public async createSampleLogGenerationSubscription(
    body: SampleLogGenerationSubscriptionCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createSampleLogGenerationSubscription'",
    );
    if (
      !_config.unstableOperations["v2.createSampleLogGenerationSubscription"]
    ) {
      throw new Error(
        "Unstable operation 'createSampleLogGenerationSubscription' is disabled. Enable it by setting `configuration.unstableOperations['v2.createSampleLogGenerationSubscription'] = true`",
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
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.createSampleLogGenerationSubscription",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SampleLogGenerationSubscriptionCreateRequest",
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
      "v2.SecurityMonitoringApi.createSecurityFilter",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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

  public async createSecurityMonitoringBatchMigration(
    body: SecurityMonitoringBatchMigrationCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createSecurityMonitoringBatchMigration'",
    );
    if (
      !_config.unstableOperations["v2.createSecurityMonitoringBatchMigration"]
    ) {
      throw new Error(
        "Unstable operation 'createSecurityMonitoringBatchMigration' is disabled. Enable it by setting `configuration.unstableOperations['v2.createSecurityMonitoringBatchMigration'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSecurityMonitoringBatchMigration");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/batch-migrations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.createSecurityMonitoringBatchMigration",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringBatchMigrationCreateRequest",
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

  public async createSecurityMonitoringBatchMigrationResources(
    batchId: string,
    body: SecurityMonitoringBatchMigrationResourcesCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createSecurityMonitoringBatchMigrationResources'",
    );
    if (
      !_config.unstableOperations[
        "v2.createSecurityMonitoringBatchMigrationResources"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createSecurityMonitoringBatchMigrationResources' is disabled. Enable it by setting `configuration.unstableOperations['v2.createSecurityMonitoringBatchMigrationResources'] = true`",
      );
    }

    // verify required parameter 'batchId' is not null or undefined
    if (batchId === null || batchId === undefined) {
      throw new RequiredError(
        "batchId",
        "createSecurityMonitoringBatchMigrationResources",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createSecurityMonitoringBatchMigrationResources",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/batch-migrations/{batch_id}/resources".replace(
        "{batch_id}",
        encodeURIComponent(String(batchId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.createSecurityMonitoringBatchMigrationResources",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringBatchMigrationResourcesCreateRequest",
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

  public async createSecurityMonitoringCriticalAsset(
    body: SecurityMonitoringCriticalAssetCreateRequest,
    _options?: Configuration,
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
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.createSecurityMonitoringCriticalAsset",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringCriticalAssetCreateRequest",
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

  public async createSecurityMonitoringDataset(
    body: SecurityMonitoringDatasetCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createSecurityMonitoringDataset'");
    if (!_config.unstableOperations["v2.createSecurityMonitoringDataset"]) {
      throw new Error(
        "Unstable operation 'createSecurityMonitoringDataset' is disabled. Enable it by setting `configuration.unstableOperations['v2.createSecurityMonitoringDataset'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSecurityMonitoringDataset");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/datasets";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.createSecurityMonitoringDataset",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SecurityMonitoringDatasetCreateRequest", ""),
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

  public async createSecurityMonitoringIntegrationConfig(
    body: SecurityMonitoringIntegrationConfigCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createSecurityMonitoringIntegrationConfig'",
    );
    if (
      !_config.unstableOperations[
        "v2.createSecurityMonitoringIntegrationConfig"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createSecurityMonitoringIntegrationConfig' is disabled. Enable it by setting `configuration.unstableOperations['v2.createSecurityMonitoringIntegrationConfig'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createSecurityMonitoringIntegrationConfig",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/integration_config";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.createSecurityMonitoringIntegrationConfig",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringIntegrationConfigCreateRequest",
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
      "v2.SecurityMonitoringApi.createSecurityMonitoringRule",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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
      "v2.SecurityMonitoringApi.createSecurityMonitoringSuppression",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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
      "v2.SecurityMonitoringApi.createSignalNotificationRule",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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
      "AuthZ",
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
      "v2.SecurityMonitoringApi.createVulnerabilityNotificationRule",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deactivateContentPack(
    contentPackId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deactivateContentPack'");
    if (!_config.unstableOperations["v2.deactivateContentPack"]) {
      throw new Error(
        "Unstable operation 'deactivateContentPack' is disabled. Enable it by setting `configuration.unstableOperations['v2.deactivateContentPack'] = true`",
      );
    }

    // verify required parameter 'contentPackId' is not null or undefined
    if (contentPackId === null || contentPackId === undefined) {
      throw new RequiredError("contentPackId", "deactivateContentPack");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/content_packs/{content_pack_id}/deactivate".replace(
        "{content_pack_id}",
        encodeURIComponent(String(contentPackId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.deactivateContentPack",
      SecurityMonitoringApi.operationServers,
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

  public async deactivateIntegration(
    integrationType: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deactivateIntegration'");
    if (!_config.unstableOperations["v2.deactivateIntegration"]) {
      throw new Error(
        "Unstable operation 'deactivateIntegration' is disabled. Enable it by setting `configuration.unstableOperations['v2.deactivateIntegration'] = true`",
      );
    }

    // verify required parameter 'integrationType' is not null or undefined
    if (integrationType === null || integrationType === undefined) {
      throw new RequiredError("integrationType", "deactivateIntegration");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/integration_config/{integration_type}/deactivate".replace(
        "{integration_type}",
        encodeURIComponent(String(integrationType)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.deactivateIntegration",
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

  public async deleteHistoricalJob(
    jobId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteHistoricalJob'");
    if (!_config.unstableOperations["v2.deleteHistoricalJob"]) {
      throw new Error(
        "Unstable operation 'deleteHistoricalJob' is disabled. Enable it by setting `configuration.unstableOperations['v2.deleteHistoricalJob'] = true`",
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
      "v2.SecurityMonitoringApi.deleteHistoricalJob",
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

  public async deleteSampleLogGenerationSubscription(
    contentPackId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteSampleLogGenerationSubscription'",
    );
    if (
      !_config.unstableOperations["v2.deleteSampleLogGenerationSubscription"]
    ) {
      throw new Error(
        "Unstable operation 'deleteSampleLogGenerationSubscription' is disabled. Enable it by setting `configuration.unstableOperations['v2.deleteSampleLogGenerationSubscription'] = true`",
      );
    }

    // verify required parameter 'contentPackId' is not null or undefined
    if (contentPackId === null || contentPackId === undefined) {
      throw new RequiredError(
        "contentPackId",
        "deleteSampleLogGenerationSubscription",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/sample_log_generation/subscriptions/{content_pack_id}".replace(
        "{content_pack_id}",
        encodeURIComponent(String(contentPackId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.deleteSampleLogGenerationSubscription",
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
      "v2.SecurityMonitoringApi.deleteSecurityFilter",
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

  public async deleteSecurityMonitoringBatchMigration(
    batchId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteSecurityMonitoringBatchMigration'",
    );
    if (
      !_config.unstableOperations["v2.deleteSecurityMonitoringBatchMigration"]
    ) {
      throw new Error(
        "Unstable operation 'deleteSecurityMonitoringBatchMigration' is disabled. Enable it by setting `configuration.unstableOperations['v2.deleteSecurityMonitoringBatchMigration'] = true`",
      );
    }

    // verify required parameter 'batchId' is not null or undefined
    if (batchId === null || batchId === undefined) {
      throw new RequiredError(
        "batchId",
        "deleteSecurityMonitoringBatchMigration",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/batch-migrations/{batch_id}".replace(
        "{batch_id}",
        encodeURIComponent(String(batchId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.deleteSecurityMonitoringBatchMigration",
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

  public async deleteSecurityMonitoringBatchMigrationResources(
    batchId: string,
    body: SecurityMonitoringBatchMigrationResourcesDeleteRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteSecurityMonitoringBatchMigrationResources'",
    );
    if (
      !_config.unstableOperations[
        "v2.deleteSecurityMonitoringBatchMigrationResources"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteSecurityMonitoringBatchMigrationResources' is disabled. Enable it by setting `configuration.unstableOperations['v2.deleteSecurityMonitoringBatchMigrationResources'] = true`",
      );
    }

    // verify required parameter 'batchId' is not null or undefined
    if (batchId === null || batchId === undefined) {
      throw new RequiredError(
        "batchId",
        "deleteSecurityMonitoringBatchMigrationResources",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "deleteSecurityMonitoringBatchMigrationResources",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/batch-migrations/{batch_id}/resources".replace(
        "{batch_id}",
        encodeURIComponent(String(batchId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.deleteSecurityMonitoringBatchMigrationResources",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringBatchMigrationResourcesDeleteRequest",
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

  public async deleteSecurityMonitoringCriticalAsset(
    criticalAssetId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'criticalAssetId' is not null or undefined
    if (criticalAssetId === null || criticalAssetId === undefined) {
      throw new RequiredError(
        "criticalAssetId",
        "deleteSecurityMonitoringCriticalAsset",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/critical_assets/{critical_asset_id}".replace(
        "{critical_asset_id}",
        encodeURIComponent(String(criticalAssetId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.deleteSecurityMonitoringCriticalAsset",
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

  public async deleteSecurityMonitoringDataset(
    datasetId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteSecurityMonitoringDataset'");
    if (!_config.unstableOperations["v2.deleteSecurityMonitoringDataset"]) {
      throw new Error(
        "Unstable operation 'deleteSecurityMonitoringDataset' is disabled. Enable it by setting `configuration.unstableOperations['v2.deleteSecurityMonitoringDataset'] = true`",
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
        encodeURIComponent(String(datasetId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.deleteSecurityMonitoringDataset",
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

  public async deleteSecurityMonitoringIntegrationConfig(
    integrationConfigId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteSecurityMonitoringIntegrationConfig'",
    );
    if (
      !_config.unstableOperations[
        "v2.deleteSecurityMonitoringIntegrationConfig"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteSecurityMonitoringIntegrationConfig' is disabled. Enable it by setting `configuration.unstableOperations['v2.deleteSecurityMonitoringIntegrationConfig'] = true`",
      );
    }

    // verify required parameter 'integrationConfigId' is not null or undefined
    if (integrationConfigId === null || integrationConfigId === undefined) {
      throw new RequiredError(
        "integrationConfigId",
        "deleteSecurityMonitoringIntegrationConfig",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/integration_config/{integration_config_id}".replace(
        "{integration_config_id}",
        encodeURIComponent(String(integrationConfigId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.deleteSecurityMonitoringIntegrationConfig",
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
      "v2.SecurityMonitoringApi.deleteSecurityMonitoringRule",
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
      "v2.SecurityMonitoringApi.deleteSecurityMonitoringSuppression",
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
      "v2.SecurityMonitoringApi.deleteSignalNotificationRule",
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
      "v2.SecurityMonitoringApi.deleteVulnerabilityNotificationRule",
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

  public async editSecurityMonitoringSignal(
    signalId: string,
    body: SecurityMonitoringSignalUpdateRequest,
    _options?: Configuration,
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
        encodeURIComponent(String(signalId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.editSecurityMonitoringSignal",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SecurityMonitoringSignalUpdateRequest", ""),
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
      "v2.SecurityMonitoringApi.editSecurityMonitoringSignalAssignee",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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
      "AuthZ",
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
      "v2.SecurityMonitoringApi.editSecurityMonitoringSignalIncidents",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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
      "AuthZ",
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
      "v2.SecurityMonitoringApi.editSecurityMonitoringSignalState",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async exportSecurityMonitoringTerraformResource(
    resourceType: SecurityMonitoringTerraformResourceType,
    resourceId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'exportSecurityMonitoringTerraformResource'",
    );
    if (
      !_config.unstableOperations[
        "v2.exportSecurityMonitoringTerraformResource"
      ]
    ) {
      throw new Error(
        "Unstable operation 'exportSecurityMonitoringTerraformResource' is disabled. Enable it by setting `configuration.unstableOperations['v2.exportSecurityMonitoringTerraformResource'] = true`",
      );
    }

    // verify required parameter 'resourceType' is not null or undefined
    if (resourceType === null || resourceType === undefined) {
      throw new RequiredError(
        "resourceType",
        "exportSecurityMonitoringTerraformResource",
      );
    }

    // verify required parameter 'resourceId' is not null or undefined
    if (resourceId === null || resourceId === undefined) {
      throw new RequiredError(
        "resourceId",
        "exportSecurityMonitoringTerraformResource",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/terraform/{resource_type}/{resource_id}"
        .replace("{resource_type}", encodeURIComponent(String(resourceType)))
        .replace("{resource_id}", encodeURIComponent(String(resourceId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.exportSecurityMonitoringTerraformResource",
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

  public async getContentPacksStates(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getContentPacksStates'");
    if (!_config.unstableOperations["v2.getContentPacksStates"]) {
      throw new Error(
        "Unstable operation 'getContentPacksStates' is disabled. Enable it by setting `configuration.unstableOperations['v2.getContentPacksStates'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/content_packs/states";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getContentPacksStates",
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

  public async getCriticalAssetsAffectingRule(
    ruleId: string,
    _options?: Configuration,
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
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getCriticalAssetsAffectingRule",
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

  public async getEntityContext(
    query?: string,
    entityType?: EntityContextEntityType,
    from?: string,
    to?: string,
    asOf?: string,
    limit?: number,
    pageToken?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getEntityContext'");
    if (!_config.unstableOperations["v2.getEntityContext"]) {
      throw new Error(
        "Unstable operation 'getEntityContext' is disabled. Enable it by setting `configuration.unstableOperations['v2.getEntityContext'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/entity_context";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getEntityContext",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        serialize(query, TypingInfo, "string", ""),
        "",
      );
    }
    if (entityType !== undefined) {
      requestContext.setQueryParam(
        "entity_type",
        serialize(entityType, TypingInfo, "EntityContextEntityType", ""),
        "",
      );
    }
    if (from !== undefined) {
      requestContext.setQueryParam(
        "from",
        serialize(from, TypingInfo, "string", ""),
        "",
      );
    }
    if (to !== undefined) {
      requestContext.setQueryParam(
        "to",
        serialize(to, TypingInfo, "string", ""),
        "",
      );
    }
    if (asOf !== undefined) {
      requestContext.setQueryParam(
        "as_of",
        serialize(asOf, TypingInfo, "string", ""),
        "",
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageToken !== undefined) {
      requestContext.setQueryParam(
        "page_token",
        serialize(pageToken, TypingInfo, "string", ""),
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

  public async getEntityContextRecentlyUpdated(
    query?: string,
    entityType?: EntityContextEntityType,
    from?: string,
    to?: string,
    limit?: number,
    revisions?: EntityContextRevisionsMode,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getEntityContextRecentlyUpdated'");
    if (!_config.unstableOperations["v2.getEntityContextRecentlyUpdated"]) {
      throw new Error(
        "Unstable operation 'getEntityContextRecentlyUpdated' is disabled. Enable it by setting `configuration.unstableOperations['v2.getEntityContextRecentlyUpdated'] = true`",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/entity_context/recently_updated";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getEntityContextRecentlyUpdated",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        serialize(query, TypingInfo, "string", ""),
        "",
      );
    }
    if (entityType !== undefined) {
      requestContext.setQueryParam(
        "entity_type",
        serialize(entityType, TypingInfo, "EntityContextEntityType", ""),
        "",
      );
    }
    if (from !== undefined) {
      requestContext.setQueryParam(
        "from",
        serialize(from, TypingInfo, "string", ""),
        "",
      );
    }
    if (to !== undefined) {
      requestContext.setQueryParam(
        "to",
        serialize(to, TypingInfo, "string", ""),
        "",
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (revisions !== undefined) {
      requestContext.setQueryParam(
        "revisions",
        serialize(revisions, TypingInfo, "EntityContextRevisionsMode", ""),
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

  public async getEntraIdAzureAppRegistrations(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getEntraIdAzureAppRegistrations'");
    if (!_config.unstableOperations["v2.getEntraIdAzureAppRegistrations"]) {
      throw new Error(
        "Unstable operation 'getEntraIdAzureAppRegistrations' is disabled. Enable it by setting `configuration.unstableOperations['v2.getEntraIdAzureAppRegistrations'] = true`",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/integration_config/entra_id/azure_app_registrations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getEntraIdAzureAppRegistrations",
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

  public async getHistoricalJob(
    jobId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getHistoricalJob'");
    if (!_config.unstableOperations["v2.getHistoricalJob"]) {
      throw new Error(
        "Unstable operation 'getHistoricalJob' is disabled. Enable it by setting `configuration.unstableOperations['v2.getHistoricalJob'] = true`",
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
      "v2.SecurityMonitoringApi.getHistoricalJob",
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

  public async getIndicatorOfCompromise(
    indicator: string,
    ocsf?: boolean,
    includeTriageHistory?: boolean,
    triageHistoryLimit?: number,
    triageHistoryOffset?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIndicatorOfCompromise'");
    if (!_config.unstableOperations["v2.getIndicatorOfCompromise"]) {
      throw new Error(
        "Unstable operation 'getIndicatorOfCompromise' is disabled. Enable it by setting `configuration.unstableOperations['v2.getIndicatorOfCompromise'] = true`",
      );
    }

    // verify required parameter 'indicator' is not null or undefined
    if (indicator === null || indicator === undefined) {
      throw new RequiredError("indicator", "getIndicatorOfCompromise");
    }

    // Path Params
    const localVarPath = "/api/v2/security/siem/ioc-explorer/indicator";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getIndicatorOfCompromise",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (indicator !== undefined) {
      requestContext.setQueryParam(
        "indicator",
        serialize(indicator, TypingInfo, "string", ""),
        "",
      );
    }
    if (ocsf !== undefined) {
      requestContext.setQueryParam(
        "ocsf",
        serialize(ocsf, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (includeTriageHistory !== undefined) {
      requestContext.setQueryParam(
        "include_triage_history",
        serialize(includeTriageHistory, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (triageHistoryLimit !== undefined) {
      requestContext.setQueryParam(
        "triage_history_limit",
        serialize(triageHistoryLimit, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (triageHistoryOffset !== undefined) {
      requestContext.setQueryParam(
        "triage_history_offset",
        serialize(triageHistoryOffset, TypingInfo, "number", "int32"),
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

  public async getInvestigationLogQueriesMatchingSignal(
    signalId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'signalId' is not null or undefined
    if (signalId === null || signalId === undefined) {
      throw new RequiredError(
        "signalId",
        "getInvestigationLogQueriesMatchingSignal",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/signals/{signal_id}/investigation_queries".replace(
        "{signal_id}",
        encodeURIComponent(String(signalId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getInvestigationLogQueriesMatchingSignal",
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

  public async getMatchingSignals(
    eventId: string,
    track: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getMatchingSignals'");
    if (!_config.unstableOperations["v2.getMatchingSignals"]) {
      throw new Error(
        "Unstable operation 'getMatchingSignals' is disabled. Enable it by setting `configuration.unstableOperations['v2.getMatchingSignals'] = true`",
      );
    }

    // verify required parameter 'eventId' is not null or undefined
    if (eventId === null || eventId === undefined) {
      throw new RequiredError("eventId", "getMatchingSignals");
    }

    // verify required parameter 'track' is not null or undefined
    if (track === null || track === undefined) {
      throw new RequiredError("track", "getMatchingSignals");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/events/{event_id}/matching_signals".replace(
        "{event_id}",
        encodeURIComponent(String(eventId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getMatchingSignals",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (track !== undefined) {
      requestContext.setQueryParam(
        "track",
        serialize(track, TypingInfo, "string", ""),
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
      "v2.SecurityMonitoringApi.getRuleVersionHistory",
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
      "v2.SecurityMonitoringApi.getSecurityFilter",
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

  public async getSecurityMonitoringCriticalAsset(
    criticalAssetId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'criticalAssetId' is not null or undefined
    if (criticalAssetId === null || criticalAssetId === undefined) {
      throw new RequiredError(
        "criticalAssetId",
        "getSecurityMonitoringCriticalAsset",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/critical_assets/{critical_asset_id}".replace(
        "{critical_asset_id}",
        encodeURIComponent(String(criticalAssetId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSecurityMonitoringCriticalAsset",
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

  public async getSecurityMonitoringDataset(
    datasetId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getSecurityMonitoringDataset'");
    if (!_config.unstableOperations["v2.getSecurityMonitoringDataset"]) {
      throw new Error(
        "Unstable operation 'getSecurityMonitoringDataset' is disabled. Enable it by setting `configuration.unstableOperations['v2.getSecurityMonitoringDataset'] = true`",
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
        encodeURIComponent(String(datasetId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSecurityMonitoringDataset",
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

  public async getSecurityMonitoringDatasetByVersion(
    datasetId: string,
    version: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getSecurityMonitoringDatasetByVersion'",
    );
    if (
      !_config.unstableOperations["v2.getSecurityMonitoringDatasetByVersion"]
    ) {
      throw new Error(
        "Unstable operation 'getSecurityMonitoringDatasetByVersion' is disabled. Enable it by setting `configuration.unstableOperations['v2.getSecurityMonitoringDatasetByVersion'] = true`",
      );
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError(
        "datasetId",
        "getSecurityMonitoringDatasetByVersion",
      );
    }

    // verify required parameter 'version' is not null or undefined
    if (version === null || version === undefined) {
      throw new RequiredError(
        "version",
        "getSecurityMonitoringDatasetByVersion",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/datasets/{dataset_id}/version/{version}"
        .replace("{dataset_id}", encodeURIComponent(String(datasetId)))
        .replace("{version}", encodeURIComponent(String(version)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSecurityMonitoringDatasetByVersion",
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

  public async getSecurityMonitoringDatasetVersionHistory(
    datasetId: string,
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getSecurityMonitoringDatasetVersionHistory'",
    );
    if (
      !_config.unstableOperations[
        "v2.getSecurityMonitoringDatasetVersionHistory"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getSecurityMonitoringDatasetVersionHistory' is disabled. Enable it by setting `configuration.unstableOperations['v2.getSecurityMonitoringDatasetVersionHistory'] = true`",
      );
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError(
        "datasetId",
        "getSecurityMonitoringDatasetVersionHistory",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/datasets/{dataset_id}/version_history".replace(
        "{dataset_id}",
        encodeURIComponent(String(datasetId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSecurityMonitoringDatasetVersionHistory",
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

  public async getSecurityMonitoringHistsignal(
    histsignalId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getSecurityMonitoringHistsignal'");
    if (!_config.unstableOperations["v2.getSecurityMonitoringHistsignal"]) {
      throw new Error(
        "Unstable operation 'getSecurityMonitoringHistsignal' is disabled. Enable it by setting `configuration.unstableOperations['v2.getSecurityMonitoringHistsignal'] = true`",
      );
    }

    // verify required parameter 'histsignalId' is not null or undefined
    if (histsignalId === null || histsignalId === undefined) {
      throw new RequiredError(
        "histsignalId",
        "getSecurityMonitoringHistsignal",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/siem-historical-detections/histsignals/{histsignal_id}".replace(
        "{histsignal_id}",
        encodeURIComponent(String(histsignalId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSecurityMonitoringHistsignal",
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

  public async getSecurityMonitoringHistsignalsByJobId(
    jobId: string,
    filterQuery?: string,
    filterFrom?: Date,
    filterTo?: Date,
    sort?: SecurityMonitoringSignalsSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getSecurityMonitoringHistsignalsByJobId'",
    );
    if (
      !_config.unstableOperations["v2.getSecurityMonitoringHistsignalsByJobId"]
    ) {
      throw new Error(
        "Unstable operation 'getSecurityMonitoringHistsignalsByJobId' is disabled. Enable it by setting `configuration.unstableOperations['v2.getSecurityMonitoringHistsignalsByJobId'] = true`",
      );
    }

    // verify required parameter 'jobId' is not null or undefined
    if (jobId === null || jobId === undefined) {
      throw new RequiredError(
        "jobId",
        "getSecurityMonitoringHistsignalsByJobId",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/siem-historical-detections/jobs/{job_id}/histsignals".replace(
        "{job_id}",
        encodeURIComponent(String(jobId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSecurityMonitoringHistsignalsByJobId",
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

  public async getSecurityMonitoringIntegrationConfig(
    integrationConfigId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getSecurityMonitoringIntegrationConfig'",
    );
    if (
      !_config.unstableOperations["v2.getSecurityMonitoringIntegrationConfig"]
    ) {
      throw new Error(
        "Unstable operation 'getSecurityMonitoringIntegrationConfig' is disabled. Enable it by setting `configuration.unstableOperations['v2.getSecurityMonitoringIntegrationConfig'] = true`",
      );
    }

    // verify required parameter 'integrationConfigId' is not null or undefined
    if (integrationConfigId === null || integrationConfigId === undefined) {
      throw new RequiredError(
        "integrationConfigId",
        "getSecurityMonitoringIntegrationConfig",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/integration_config/{integration_config_id}".replace(
        "{integration_config_id}",
        encodeURIComponent(String(integrationConfigId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSecurityMonitoringIntegrationConfig",
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
      "v2.SecurityMonitoringApi.getSecurityMonitoringRule",
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

  public async getSecurityMonitoringRuleProposal(
    proposalId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getSecurityMonitoringRuleProposal'");
    if (!_config.unstableOperations["v2.getSecurityMonitoringRuleProposal"]) {
      throw new Error(
        "Unstable operation 'getSecurityMonitoringRuleProposal' is disabled. Enable it by setting `configuration.unstableOperations['v2.getSecurityMonitoringRuleProposal'] = true`",
      );
    }

    // verify required parameter 'proposalId' is not null or undefined
    if (proposalId === null || proposalId === undefined) {
      throw new RequiredError(
        "proposalId",
        "getSecurityMonitoringRuleProposal",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/rules/proposals/{proposal_id}".replace(
        "{proposal_id}",
        encodeURIComponent(String(proposalId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSecurityMonitoringRuleProposal",
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
      "v2.SecurityMonitoringApi.getSecurityMonitoringSignal",
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
      "v2.SecurityMonitoringApi.getSecurityMonitoringSuppression",
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

  public async getSignalEntities(
    signalId: string,
    limit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getSignalEntities'");
    if (!_config.unstableOperations["v2.getSignalEntities"]) {
      throw new Error(
        "Unstable operation 'getSignalEntities' is disabled. Enable it by setting `configuration.unstableOperations['v2.getSignalEntities'] = true`",
      );
    }

    // verify required parameter 'signalId' is not null or undefined
    if (signalId === null || signalId === undefined) {
      throw new RequiredError("signalId", "getSignalEntities");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/signals/{signal_id}/entities".replace(
        "{signal_id}",
        encodeURIComponent(String(signalId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSignalEntities",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", "int32"),
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
      "v2.SecurityMonitoringApi.getSignalNotificationRule",
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

  public async getSignalNotificationRules(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security/signals/notification_rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSignalNotificationRules",
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

  public async getSingleEntityContext(
    id: string,
    entityType?: EntityContextEntityType,
    from?: string,
    to?: string,
    asOf?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getSingleEntityContext'");
    if (!_config.unstableOperations["v2.getSingleEntityContext"]) {
      throw new Error(
        "Unstable operation 'getSingleEntityContext' is disabled. Enable it by setting `configuration.unstableOperations['v2.getSingleEntityContext'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getSingleEntityContext");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/entity_context/{id}".replace(
        "{id}",
        encodeURIComponent(String(id)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSingleEntityContext",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (entityType !== undefined) {
      requestContext.setQueryParam(
        "entity_type",
        serialize(entityType, TypingInfo, "EntityContextEntityType", ""),
        "",
      );
    }
    if (from !== undefined) {
      requestContext.setQueryParam(
        "from",
        serialize(from, TypingInfo, "string", ""),
        "",
      );
    }
    if (to !== undefined) {
      requestContext.setQueryParam(
        "to",
        serialize(to, TypingInfo, "string", ""),
        "",
      );
    }
    if (asOf !== undefined) {
      requestContext.setQueryParam(
        "as_of",
        serialize(asOf, TypingInfo, "string", ""),
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

  public async getSuggestedActionsMatchingSignal(
    signalId: string,
    _options?: Configuration,
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
        encodeURIComponent(String(signalId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSuggestedActionsMatchingSignal",
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

  public async getSuppressionsAffectingFutureRule(
    body: SecurityMonitoringRuleCreatePayload,
    _options?: Configuration,
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
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSuppressionsAffectingFutureRule",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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

  public async getSuppressionsAffectingRule(
    ruleId: string,
    _options?: Configuration,
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
        encodeURIComponent(String(ruleId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSuppressionsAffectingRule",
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

  public async getSuppressionVersionHistory(
    suppressionId: string,
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration,
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
        encodeURIComponent(String(suppressionId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getSuppressionVersionHistory",
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
      "v2.SecurityMonitoringApi.getVulnerabilityNotificationRule",
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

  public async getVulnerabilityNotificationRules(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security/vulnerabilities/notification_rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getVulnerabilityNotificationRules",
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

  public async listHistoricalJobs(
    pageSize?: number,
    pageNumber?: number,
    sort?: string,
    filterQuery?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listHistoricalJobs'");
    if (!_config.unstableOperations["v2.listHistoricalJobs"]) {
      throw new Error(
        "Unstable operation 'listHistoricalJobs' is disabled. Enable it by setting `configuration.unstableOperations['v2.listHistoricalJobs'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/siem-historical-detections/jobs";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listHistoricalJobs",
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

  public async listIndicatorsOfCompromise(
    limit?: number,
    offset?: number,
    query?: string,
    sortColumn?: string,
    sortOrder?: string,
    ocsf?: boolean,
    workedBy?: string,
    triageState?: IoCTriageState,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listIndicatorsOfCompromise'");
    if (!_config.unstableOperations["v2.listIndicatorsOfCompromise"]) {
      throw new Error(
        "Unstable operation 'listIndicatorsOfCompromise' is disabled. Enable it by setting `configuration.unstableOperations['v2.listIndicatorsOfCompromise'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security/siem/ioc-explorer";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listIndicatorsOfCompromise",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (offset !== undefined) {
      requestContext.setQueryParam(
        "offset",
        serialize(offset, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        serialize(query, TypingInfo, "string", ""),
        "",
      );
    }
    if (sortColumn !== undefined) {
      requestContext.setQueryParam(
        "sort[column]",
        serialize(sortColumn, TypingInfo, "string", ""),
        "",
      );
    }
    if (sortOrder !== undefined) {
      requestContext.setQueryParam(
        "sort[order]",
        serialize(sortOrder, TypingInfo, "string", ""),
        "",
      );
    }
    if (ocsf !== undefined) {
      requestContext.setQueryParam(
        "ocsf",
        serialize(ocsf, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (workedBy !== undefined) {
      requestContext.setQueryParam(
        "worked_by",
        serialize(workedBy, TypingInfo, "string", ""),
        "",
      );
    }
    if (triageState !== undefined) {
      requestContext.setQueryParam(
        "triage_state",
        serialize(triageState, TypingInfo, "IoCTriageState", ""),
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

  public async listSampleLogGenerationSubscriptions(
    status?: SampleLogGenerationSubscriptionsStatusFilter,
    startTimestamp?: Date,
    endTimestamp?: Date,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listSampleLogGenerationSubscriptions'",
    );
    if (
      !_config.unstableOperations["v2.listSampleLogGenerationSubscriptions"]
    ) {
      throw new Error(
        "Unstable operation 'listSampleLogGenerationSubscriptions' is disabled. Enable it by setting `configuration.unstableOperations['v2.listSampleLogGenerationSubscriptions'] = true`",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/sample_log_generation/subscriptions";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listSampleLogGenerationSubscriptions",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (status !== undefined) {
      requestContext.setQueryParam(
        "status",
        serialize(
          status,
          TypingInfo,
          "SampleLogGenerationSubscriptionsStatusFilter",
          "",
        ),
        "",
      );
    }
    if (startTimestamp !== undefined) {
      requestContext.setQueryParam(
        "start_timestamp",
        serialize(startTimestamp, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (endTimestamp !== undefined) {
      requestContext.setQueryParam(
        "end_timestamp",
        serialize(endTimestamp, TypingInfo, "Date", "date-time"),
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
      "v2.SecurityMonitoringApi.listSecurityFilters",
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

  public async listSecurityFilterVersions(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/security_filters/versions";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listSecurityFilterVersions",
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

  public async listSecurityMonitoringBatchMigrationResources(
    batchId: string,
    pageSize?: number,
    pageNumber?: number,
    filterQuery?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listSecurityMonitoringBatchMigrationResources'",
    );
    if (
      !_config.unstableOperations[
        "v2.listSecurityMonitoringBatchMigrationResources"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listSecurityMonitoringBatchMigrationResources' is disabled. Enable it by setting `configuration.unstableOperations['v2.listSecurityMonitoringBatchMigrationResources'] = true`",
      );
    }

    // verify required parameter 'batchId' is not null or undefined
    if (batchId === null || batchId === undefined) {
      throw new RequiredError(
        "batchId",
        "listSecurityMonitoringBatchMigrationResources",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/batch-migrations/{batch_id}/resources".replace(
        "{batch_id}",
        encodeURIComponent(String(batchId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listSecurityMonitoringBatchMigrationResources",
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

  public async listSecurityMonitoringBatchMigrations(
    pageSize?: number,
    pageNumber?: number,
    filterQuery?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listSecurityMonitoringBatchMigrations'",
    );
    if (
      !_config.unstableOperations["v2.listSecurityMonitoringBatchMigrations"]
    ) {
      throw new Error(
        "Unstable operation 'listSecurityMonitoringBatchMigrations' is disabled. Enable it by setting `configuration.unstableOperations['v2.listSecurityMonitoringBatchMigrations'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/batch-migrations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listSecurityMonitoringBatchMigrations",
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

  public async listSecurityMonitoringCriticalAssets(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/critical_assets";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listSecurityMonitoringCriticalAssets",
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

  public async listSecurityMonitoringDatasets(
    pageSize?: number,
    pageNumber?: number,
    sort?: string,
    filterQuery?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listSecurityMonitoringDatasets'");
    if (!_config.unstableOperations["v2.listSecurityMonitoringDatasets"]) {
      throw new Error(
        "Unstable operation 'listSecurityMonitoringDatasets' is disabled. Enable it by setting `configuration.unstableOperations['v2.listSecurityMonitoringDatasets'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/datasets";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listSecurityMonitoringDatasets",
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

  public async listSecurityMonitoringHistsignals(
    filterQuery?: string,
    filterFrom?: Date,
    filterTo?: Date,
    sort?: SecurityMonitoringSignalsSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listSecurityMonitoringHistsignals'");
    if (!_config.unstableOperations["v2.listSecurityMonitoringHistsignals"]) {
      throw new Error(
        "Unstable operation 'listSecurityMonitoringHistsignals' is disabled. Enable it by setting `configuration.unstableOperations['v2.listSecurityMonitoringHistsignals'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/siem-historical-detections/histsignals";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listSecurityMonitoringHistsignals",
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

  public async listSecurityMonitoringIntegrationConfigs(
    filterIntegrationType?: SecurityMonitoringIntegrationType,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listSecurityMonitoringIntegrationConfigs'",
    );
    if (
      !_config.unstableOperations["v2.listSecurityMonitoringIntegrationConfigs"]
    ) {
      throw new Error(
        "Unstable operation 'listSecurityMonitoringIntegrationConfigs' is disabled. Enable it by setting `configuration.unstableOperations['v2.listSecurityMonitoringIntegrationConfigs'] = true`",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/integration_config";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listSecurityMonitoringIntegrationConfigs",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterIntegrationType !== undefined) {
      requestContext.setQueryParam(
        "filter[integration_type]",
        serialize(
          filterIntegrationType,
          TypingInfo,
          "SecurityMonitoringIntegrationType",
          "",
        ),
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

  public async listSecurityMonitoringRules(
    pageSize?: number,
    pageNumber?: number,
    query?: string,
    sort?: SecurityMonitoringRuleSort,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listSecurityMonitoringRules",
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
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        serialize(query, TypingInfo, "string", ""),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "SecurityMonitoringRuleSort", ""),
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
      "v2.SecurityMonitoringApi.listSecurityMonitoringSignals",
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
    query?: string,
    sort?: SecurityMonitoringSuppressionSort,
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/suppressions";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.listSecurityMonitoringSuppressions",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        serialize(query, TypingInfo, "string", ""),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "SecurityMonitoringSuppressionSort", ""),
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
      "v2.SecurityMonitoringApi.patchSignalNotificationRule",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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
      "AuthZ",
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
      "v2.SecurityMonitoringApi.patchVulnerabilityNotificationRule",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async publishSecurityMonitoringBatchMigration(
    batchId: string,
    body: SecurityMonitoringBatchMigrationPublishRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'publishSecurityMonitoringBatchMigration'",
    );
    if (
      !_config.unstableOperations["v2.publishSecurityMonitoringBatchMigration"]
    ) {
      throw new Error(
        "Unstable operation 'publishSecurityMonitoringBatchMigration' is disabled. Enable it by setting `configuration.unstableOperations['v2.publishSecurityMonitoringBatchMigration'] = true`",
      );
    }

    // verify required parameter 'batchId' is not null or undefined
    if (batchId === null || batchId === undefined) {
      throw new RequiredError(
        "batchId",
        "publishSecurityMonitoringBatchMigration",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "publishSecurityMonitoringBatchMigration",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/batch-migrations/{batch_id}/publish".replace(
        "{batch_id}",
        encodeURIComponent(String(batchId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.publishSecurityMonitoringBatchMigration",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringBatchMigrationPublishRequest",
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

  public async restoreSecurityMonitoringRule(
    ruleId: string,
    version: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "restoreSecurityMonitoringRule");
    }

    // verify required parameter 'version' is not null or undefined
    if (version === null || version === undefined) {
      throw new RequiredError("version", "restoreSecurityMonitoringRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/rules/{rule_id}/restore/{version}"
        .replace("{rule_id}", encodeURIComponent(String(ruleId)))
        .replace("{version}", encodeURIComponent(String(version)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.restoreSecurityMonitoringRule",
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

  public async runHistoricalJob(
    body: RunHistoricalJobRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'runHistoricalJob'");
    if (!_config.unstableOperations["v2.runHistoricalJob"]) {
      throw new Error(
        "Unstable operation 'runHistoricalJob' is disabled. Enable it by setting `configuration.unstableOperations['v2.runHistoricalJob'] = true`",
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
      "v2.SecurityMonitoringApi.runHistoricalJob",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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

  public async searchSecurityMonitoringHistsignals(
    body?: SecurityMonitoringSignalListRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'searchSecurityMonitoringHistsignals'",
    );
    if (!_config.unstableOperations["v2.searchSecurityMonitoringHistsignals"]) {
      throw new Error(
        "Unstable operation 'searchSecurityMonitoringHistsignals' is disabled. Enable it by setting `configuration.unstableOperations['v2.searchSecurityMonitoringHistsignals'] = true`",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/siem-historical-detections/histsignals/search";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.searchSecurityMonitoringHistsignals",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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

  public async searchSecurityMonitoringSignals(
    body?: SecurityMonitoringSignalListRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/signals/search";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.searchSecurityMonitoringSignals",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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

  public async sendSecurityMonitoringNotificationPreview(
    body: CreateNotificationRuleParameters,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "sendSecurityMonitoringNotificationPreview",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/notification_rules/send_notification_preview";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.sendSecurityMonitoringNotificationPreview",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async startSecurityMonitoringBatchMigration(
    batchId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'startSecurityMonitoringBatchMigration'",
    );
    if (
      !_config.unstableOperations["v2.startSecurityMonitoringBatchMigration"]
    ) {
      throw new Error(
        "Unstable operation 'startSecurityMonitoringBatchMigration' is disabled. Enable it by setting `configuration.unstableOperations['v2.startSecurityMonitoringBatchMigration'] = true`",
      );
    }

    // verify required parameter 'batchId' is not null or undefined
    if (batchId === null || batchId === undefined) {
      throw new RequiredError(
        "batchId",
        "startSecurityMonitoringBatchMigration",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/batch-migrations/{batch_id}/start".replace(
        "{batch_id}",
        encodeURIComponent(String(batchId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.startSecurityMonitoringBatchMigration",
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

  public async startSecurityMonitoringRuleProposal(
    body: SecurityMonitoringRuleProposalStartRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'startSecurityMonitoringRuleProposal'",
    );
    if (!_config.unstableOperations["v2.startSecurityMonitoringRuleProposal"]) {
      throw new Error(
        "Unstable operation 'startSecurityMonitoringRuleProposal' is disabled. Enable it by setting `configuration.unstableOperations['v2.startSecurityMonitoringRuleProposal'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "startSecurityMonitoringRuleProposal");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/proposals";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.startSecurityMonitoringRuleProposal",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringRuleProposalStartRequest",
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
      "v2.SecurityMonitoringApi.testExistingSecurityMonitoringRule",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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
      "v2.SecurityMonitoringApi.testSecurityMonitoringRule",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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
      "v2.SecurityMonitoringApi.updateSecurityFilter",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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

  public async updateSecurityMonitoringBatchMigration(
    batchId: string,
    body: SecurityMonitoringBatchMigrationUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateSecurityMonitoringBatchMigration'",
    );
    if (
      !_config.unstableOperations["v2.updateSecurityMonitoringBatchMigration"]
    ) {
      throw new Error(
        "Unstable operation 'updateSecurityMonitoringBatchMigration' is disabled. Enable it by setting `configuration.unstableOperations['v2.updateSecurityMonitoringBatchMigration'] = true`",
      );
    }

    // verify required parameter 'batchId' is not null or undefined
    if (batchId === null || batchId === undefined) {
      throw new RequiredError(
        "batchId",
        "updateSecurityMonitoringBatchMigration",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateSecurityMonitoringBatchMigration");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/batch-migrations/{batch_id}".replace(
        "{batch_id}",
        encodeURIComponent(String(batchId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.updateSecurityMonitoringBatchMigration",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringBatchMigrationUpdateRequest",
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

  public async updateSecurityMonitoringBatchMigrationResource(
    batchId: string,
    resourceId: string,
    body: SecurityMonitoringBatchMigrationResourceUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateSecurityMonitoringBatchMigrationResource'",
    );
    if (
      !_config.unstableOperations[
        "v2.updateSecurityMonitoringBatchMigrationResource"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateSecurityMonitoringBatchMigrationResource' is disabled. Enable it by setting `configuration.unstableOperations['v2.updateSecurityMonitoringBatchMigrationResource'] = true`",
      );
    }

    // verify required parameter 'batchId' is not null or undefined
    if (batchId === null || batchId === undefined) {
      throw new RequiredError(
        "batchId",
        "updateSecurityMonitoringBatchMigrationResource",
      );
    }

    // verify required parameter 'resourceId' is not null or undefined
    if (resourceId === null || resourceId === undefined) {
      throw new RequiredError(
        "resourceId",
        "updateSecurityMonitoringBatchMigrationResource",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateSecurityMonitoringBatchMigrationResource",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/batch-migrations/{batch_id}/resources/{resource_id}"
        .replace("{batch_id}", encodeURIComponent(String(batchId)))
        .replace("{resource_id}", encodeURIComponent(String(resourceId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.updateSecurityMonitoringBatchMigrationResource",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringBatchMigrationResourceUpdateRequest",
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

  public async updateSecurityMonitoringCriticalAsset(
    criticalAssetId: string,
    body: SecurityMonitoringCriticalAssetUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'criticalAssetId' is not null or undefined
    if (criticalAssetId === null || criticalAssetId === undefined) {
      throw new RequiredError(
        "criticalAssetId",
        "updateSecurityMonitoringCriticalAsset",
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
        encodeURIComponent(String(criticalAssetId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.updateSecurityMonitoringCriticalAsset",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringCriticalAssetUpdateRequest",
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

  public async updateSecurityMonitoringDataset(
    datasetId: string,
    body: SecurityMonitoringDatasetUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateSecurityMonitoringDataset'");
    if (!_config.unstableOperations["v2.updateSecurityMonitoringDataset"]) {
      throw new Error(
        "Unstable operation 'updateSecurityMonitoringDataset' is disabled. Enable it by setting `configuration.unstableOperations['v2.updateSecurityMonitoringDataset'] = true`",
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
        encodeURIComponent(String(datasetId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.updateSecurityMonitoringDataset",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "SecurityMonitoringDatasetUpdateRequest", ""),
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

  public async updateSecurityMonitoringIntegrationConfig(
    integrationConfigId: string,
    body: SecurityMonitoringIntegrationConfigUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateSecurityMonitoringIntegrationConfig'",
    );
    if (
      !_config.unstableOperations[
        "v2.updateSecurityMonitoringIntegrationConfig"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateSecurityMonitoringIntegrationConfig' is disabled. Enable it by setting `configuration.unstableOperations['v2.updateSecurityMonitoringIntegrationConfig'] = true`",
      );
    }

    // verify required parameter 'integrationConfigId' is not null or undefined
    if (integrationConfigId === null || integrationConfigId === undefined) {
      throw new RequiredError(
        "integrationConfigId",
        "updateSecurityMonitoringIntegrationConfig",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateSecurityMonitoringIntegrationConfig",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/integration_config/{integration_config_id}".replace(
        "{integration_config_id}",
        encodeURIComponent(String(integrationConfigId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.updateSecurityMonitoringIntegrationConfig",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringIntegrationConfigUpdateRequest",
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
      "v2.SecurityMonitoringApi.updateSecurityMonitoringRule",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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
      "v2.SecurityMonitoringApi.updateSecurityMonitoringSuppression",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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

  public async validateSecurityMonitoringIntegrationConfig(
    integrationConfigId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'validateSecurityMonitoringIntegrationConfig'",
    );
    if (
      !_config.unstableOperations[
        "v2.validateSecurityMonitoringIntegrationConfig"
      ]
    ) {
      throw new Error(
        "Unstable operation 'validateSecurityMonitoringIntegrationConfig' is disabled. Enable it by setting `configuration.unstableOperations['v2.validateSecurityMonitoringIntegrationConfig'] = true`",
      );
    }

    // verify required parameter 'integrationConfigId' is not null or undefined
    if (integrationConfigId === null || integrationConfigId === undefined) {
      throw new RequiredError(
        "integrationConfigId",
        "validateSecurityMonitoringIntegrationConfig",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/integration_config/{integration_config_id}/validate".replace(
        "{integration_config_id}",
        encodeURIComponent(String(integrationConfigId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.validateSecurityMonitoringIntegrationConfig",
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

  public async validateSecurityMonitoringIntegrationCredentials(
    body: SecurityMonitoringIntegrationCredentialsValidateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'validateSecurityMonitoringIntegrationCredentials'",
    );
    if (
      !_config.unstableOperations[
        "v2.validateSecurityMonitoringIntegrationCredentials"
      ]
    ) {
      throw new Error(
        "Unstable operation 'validateSecurityMonitoringIntegrationCredentials' is disabled. Enable it by setting `configuration.unstableOperations['v2.validateSecurityMonitoringIntegrationCredentials'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "validateSecurityMonitoringIntegrationCredentials",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/integration_config/validate";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.validateSecurityMonitoringIntegrationCredentials",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "SecurityMonitoringIntegrationCredentialsValidateRequest",
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
      "v2.SecurityMonitoringApi.validateSecurityMonitoringRule",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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

  public async validateSecurityMonitoringSuppression(
    body: SecurityMonitoringSuppressionCreateRequest,
    _options?: Configuration,
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
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.validateSecurityMonitoringSuppression",
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      return;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
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
   * @params response Response returned by the server for a request to activateIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async activateIntegration(
    response: ResponseContext,
  ): Promise<SecurityMonitoringIntegrationConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringIntegrationConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringIntegrationConfigResponse",
      ) as SecurityMonitoringIntegrationConfigResponse;
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
      const body: SecurityMonitoringIntegrationConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringIntegrationConfigResponse",
        "",
      ) as SecurityMonitoringIntegrationConfigResponse;
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
   * @params response Response returned by the server for a request to batchGetSecurityMonitoringDatasetDependencies
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async batchGetSecurityMonitoringDatasetDependencies(
    response: ResponseContext,
  ): Promise<SecurityMonitoringDatasetDependenciesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringDatasetDependenciesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringDatasetDependenciesResponse",
      ) as SecurityMonitoringDatasetDependenciesResponse;
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
      const body: SecurityMonitoringDatasetDependenciesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringDatasetDependenciesResponse",
        "",
      ) as SecurityMonitoringDatasetDependenciesResponse;
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
   * @params response Response returned by the server for a request to bulkConvertExistingSecurityMonitoringRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkConvertExistingSecurityMonitoringRules(
    response: ResponseContext,
  ): Promise<HttpFile> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
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
      const body: HttpFile =
        (await response.getBodyAsFile()) as any as HttpFile;
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
   * @params response Response returned by the server for a request to bulkCreateSampleLogGenerationSubscriptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkCreateSampleLogGenerationSubscriptions(
    response: ResponseContext,
  ): Promise<SampleLogGenerationBulkSubscriptionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SampleLogGenerationBulkSubscriptionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SampleLogGenerationBulkSubscriptionResponse",
      ) as SampleLogGenerationBulkSubscriptionResponse;
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
      const body: SampleLogGenerationBulkSubscriptionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SampleLogGenerationBulkSubscriptionResponse",
        "",
      ) as SampleLogGenerationBulkSubscriptionResponse;
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
   * @params response Response returned by the server for a request to bulkDeleteSecurityMonitoringRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkDeleteSecurityMonitoringRules(
    response: ResponseContext,
  ): Promise<SecurityMonitoringRuleBulkDeleteResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringRuleBulkDeleteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleBulkDeleteResponse",
      ) as SecurityMonitoringRuleBulkDeleteResponse;
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
      const body: SecurityMonitoringRuleBulkDeleteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleBulkDeleteResponse",
        "",
      ) as SecurityMonitoringRuleBulkDeleteResponse;
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
   * @params response Response returned by the server for a request to bulkEditSecurityMonitoringSignals
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkEditSecurityMonitoringSignals(
    response: ResponseContext,
  ): Promise<SecurityMonitoringSignalsBulkTriageUpdateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalsBulkTriageUpdateResponse =
        deserialize(
          parse(await response.body.text(), contentType),
          TypingInfo,
          "SecurityMonitoringSignalsBulkTriageUpdateResponse",
        ) as SecurityMonitoringSignalsBulkTriageUpdateResponse;
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
      const body: SecurityMonitoringSignalsBulkTriageUpdateResponse =
        deserialize(
          parse(await response.body.text(), contentType),
          TypingInfo,
          "SecurityMonitoringSignalsBulkTriageUpdateResponse",
          "",
        ) as SecurityMonitoringSignalsBulkTriageUpdateResponse;
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
   * @params response Response returned by the server for a request to bulkEditSecurityMonitoringSignalsAssignee
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkEditSecurityMonitoringSignalsAssignee(
    response: ResponseContext,
  ): Promise<SecurityMonitoringSignalsBulkTriageUpdateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalsBulkTriageUpdateResponse =
        deserialize(
          parse(await response.body.text(), contentType),
          TypingInfo,
          "SecurityMonitoringSignalsBulkTriageUpdateResponse",
        ) as SecurityMonitoringSignalsBulkTriageUpdateResponse;
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
      const body: SecurityMonitoringSignalsBulkTriageUpdateResponse =
        deserialize(
          parse(await response.body.text(), contentType),
          TypingInfo,
          "SecurityMonitoringSignalsBulkTriageUpdateResponse",
          "",
        ) as SecurityMonitoringSignalsBulkTriageUpdateResponse;
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
   * @params response Response returned by the server for a request to bulkEditSecurityMonitoringSignalsState
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkEditSecurityMonitoringSignalsState(
    response: ResponseContext,
  ): Promise<SecurityMonitoringSignalsBulkTriageUpdateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalsBulkTriageUpdateResponse =
        deserialize(
          parse(await response.body.text(), contentType),
          TypingInfo,
          "SecurityMonitoringSignalsBulkTriageUpdateResponse",
        ) as SecurityMonitoringSignalsBulkTriageUpdateResponse;
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
      const body: SecurityMonitoringSignalsBulkTriageUpdateResponse =
        deserialize(
          parse(await response.body.text(), contentType),
          TypingInfo,
          "SecurityMonitoringSignalsBulkTriageUpdateResponse",
          "",
        ) as SecurityMonitoringSignalsBulkTriageUpdateResponse;
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
   * @params response Response returned by the server for a request to bulkExportSecurityMonitoringRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkExportSecurityMonitoringRules(
    response: ResponseContext,
  ): Promise<HttpFile> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
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
      const body: HttpFile =
        (await response.getBodyAsFile()) as any as HttpFile;
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
   * @params response Response returned by the server for a request to bulkExportSecurityMonitoringTerraformResources
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkExportSecurityMonitoringTerraformResources(
    response: ResponseContext,
  ): Promise<HttpFile> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
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
      const body: HttpFile =
        (await response.getBodyAsFile()) as any as HttpFile;
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
   * @params response Response returned by the server for a request to cancelSecurityMonitoringBatchMigration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cancelSecurityMonitoringBatchMigration(
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
   * @params response Response returned by the server for a request to convertSecurityMonitoringTerraformResource
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async convertSecurityMonitoringTerraformResource(
    response: ResponseContext,
  ): Promise<SecurityMonitoringTerraformExportResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringTerraformExportResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringTerraformExportResponse",
      ) as SecurityMonitoringTerraformExportResponse;
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
      const body: SecurityMonitoringTerraformExportResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringTerraformExportResponse",
        "",
      ) as SecurityMonitoringTerraformExportResponse;
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
   * @params response Response returned by the server for a request to createIoCTriageState
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIoCTriageState(
    response: ResponseContext,
  ): Promise<IoCTriageWriteResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IoCTriageWriteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IoCTriageWriteResponse",
      ) as IoCTriageWriteResponse;
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
      const body: IoCTriageWriteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IoCTriageWriteResponse",
        "",
      ) as IoCTriageWriteResponse;
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
   * @params response Response returned by the server for a request to createSampleLogGenerationSubscription
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSampleLogGenerationSubscription(
    response: ResponseContext,
  ): Promise<SampleLogGenerationSubscriptionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SampleLogGenerationSubscriptionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SampleLogGenerationSubscriptionResponse",
      ) as SampleLogGenerationSubscriptionResponse;
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
      const body: SampleLogGenerationSubscriptionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SampleLogGenerationSubscriptionResponse",
        "",
      ) as SampleLogGenerationSubscriptionResponse;
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
   * @params response Response returned by the server for a request to createSecurityMonitoringBatchMigration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityMonitoringBatchMigration(
    response: ResponseContext,
  ): Promise<SecurityMonitoringBatchMigrationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: SecurityMonitoringBatchMigrationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringBatchMigrationResponse",
      ) as SecurityMonitoringBatchMigrationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: SecurityMonitoringBatchMigrationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringBatchMigrationResponse",
        "",
      ) as SecurityMonitoringBatchMigrationResponse;
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
   * @params response Response returned by the server for a request to createSecurityMonitoringBatchMigrationResources
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityMonitoringBatchMigrationResources(
    response: ResponseContext,
  ): Promise<SecurityMonitoringBatchMigrationResourcesCreateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: SecurityMonitoringBatchMigrationResourcesCreateResponse =
        deserialize(
          parse(await response.body.text(), contentType),
          TypingInfo,
          "SecurityMonitoringBatchMigrationResourcesCreateResponse",
        ) as SecurityMonitoringBatchMigrationResourcesCreateResponse;
      return body;
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
      const body: SecurityMonitoringBatchMigrationResourcesCreateResponse =
        deserialize(
          parse(await response.body.text(), contentType),
          TypingInfo,
          "SecurityMonitoringBatchMigrationResourcesCreateResponse",
          "",
        ) as SecurityMonitoringBatchMigrationResourcesCreateResponse;
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
   * @params response Response returned by the server for a request to createSecurityMonitoringCriticalAsset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityMonitoringCriticalAsset(
    response: ResponseContext,
  ): Promise<SecurityMonitoringCriticalAssetResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringCriticalAssetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringCriticalAssetResponse",
      ) as SecurityMonitoringCriticalAssetResponse;
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
      const body: SecurityMonitoringCriticalAssetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringCriticalAssetResponse",
        "",
      ) as SecurityMonitoringCriticalAssetResponse;
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
   * @params response Response returned by the server for a request to createSecurityMonitoringDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityMonitoringDataset(
    response: ResponseContext,
  ): Promise<SecurityMonitoringDatasetCreateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: SecurityMonitoringDatasetCreateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringDatasetCreateResponse",
      ) as SecurityMonitoringDatasetCreateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
      const body: SecurityMonitoringDatasetCreateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringDatasetCreateResponse",
        "",
      ) as SecurityMonitoringDatasetCreateResponse;
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
   * @params response Response returned by the server for a request to createSecurityMonitoringIntegrationConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityMonitoringIntegrationConfig(
    response: ResponseContext,
  ): Promise<SecurityMonitoringIntegrationConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringIntegrationConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringIntegrationConfigResponse",
      ) as SecurityMonitoringIntegrationConfigResponse;
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
      const body: SecurityMonitoringIntegrationConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringIntegrationConfigResponse",
        "",
      ) as SecurityMonitoringIntegrationConfigResponse;
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
   * @params response Response returned by the server for a request to deactivateContentPack
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deactivateContentPack(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      return;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
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
   * @params response Response returned by the server for a request to deactivateIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deactivateIntegration(
    response: ResponseContext,
  ): Promise<SecurityMonitoringIntegrationConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringIntegrationConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringIntegrationConfigResponse",
      ) as SecurityMonitoringIntegrationConfigResponse;
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
      const body: SecurityMonitoringIntegrationConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringIntegrationConfigResponse",
        "",
      ) as SecurityMonitoringIntegrationConfigResponse;
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
   * @params response Response returned by the server for a request to deleteSampleLogGenerationSubscription
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSampleLogGenerationSubscription(
    response: ResponseContext,
  ): Promise<SampleLogGenerationSubscriptionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SampleLogGenerationSubscriptionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SampleLogGenerationSubscriptionResponse",
      ) as SampleLogGenerationSubscriptionResponse;
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
      const body: SampleLogGenerationSubscriptionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SampleLogGenerationSubscriptionResponse",
        "",
      ) as SampleLogGenerationSubscriptionResponse;
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
   * @params response Response returned by the server for a request to deleteSecurityMonitoringBatchMigration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityMonitoringBatchMigration(
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
   * @params response Response returned by the server for a request to deleteSecurityMonitoringBatchMigrationResources
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityMonitoringBatchMigrationResources(
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
   * @params response Response returned by the server for a request to deleteSecurityMonitoringCriticalAsset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityMonitoringCriticalAsset(
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
   * @params response Response returned by the server for a request to deleteSecurityMonitoringDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityMonitoringDataset(
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
   * @params response Response returned by the server for a request to deleteSecurityMonitoringIntegrationConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityMonitoringIntegrationConfig(
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
   * @params response Response returned by the server for a request to editSecurityMonitoringSignal
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async editSecurityMonitoringSignal(
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
   * @params response Response returned by the server for a request to exportSecurityMonitoringTerraformResource
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async exportSecurityMonitoringTerraformResource(
    response: ResponseContext,
  ): Promise<SecurityMonitoringTerraformExportResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringTerraformExportResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringTerraformExportResponse",
      ) as SecurityMonitoringTerraformExportResponse;
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
      const body: SecurityMonitoringTerraformExportResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringTerraformExportResponse",
        "",
      ) as SecurityMonitoringTerraformExportResponse;
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
   * @params response Response returned by the server for a request to getContentPacksStates
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getContentPacksStates(
    response: ResponseContext,
  ): Promise<SecurityMonitoringContentPackStatesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringContentPackStatesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringContentPackStatesResponse",
      ) as SecurityMonitoringContentPackStatesResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
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
      const body: SecurityMonitoringContentPackStatesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringContentPackStatesResponse",
        "",
      ) as SecurityMonitoringContentPackStatesResponse;
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
   * @params response Response returned by the server for a request to getCriticalAssetsAffectingRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCriticalAssetsAffectingRule(
    response: ResponseContext,
  ): Promise<SecurityMonitoringCriticalAssetsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringCriticalAssetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringCriticalAssetsResponse",
      ) as SecurityMonitoringCriticalAssetsResponse;
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
      const body: SecurityMonitoringCriticalAssetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringCriticalAssetsResponse",
        "",
      ) as SecurityMonitoringCriticalAssetsResponse;
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
   * @params response Response returned by the server for a request to getEntityContext
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEntityContext(
    response: ResponseContext,
  ): Promise<EntityContextResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: EntityContextResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EntityContextResponse",
      ) as EntityContextResponse;
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
      const body: EntityContextResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EntityContextResponse",
        "",
      ) as EntityContextResponse;
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
   * @params response Response returned by the server for a request to getEntityContextRecentlyUpdated
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEntityContextRecentlyUpdated(
    response: ResponseContext,
  ): Promise<RecentlyUpdatedEntitiesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RecentlyUpdatedEntitiesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RecentlyUpdatedEntitiesResponse",
      ) as RecentlyUpdatedEntitiesResponse;
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
      const body: RecentlyUpdatedEntitiesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RecentlyUpdatedEntitiesResponse",
        "",
      ) as RecentlyUpdatedEntitiesResponse;
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
   * @params response Response returned by the server for a request to getEntraIdAzureAppRegistrations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEntraIdAzureAppRegistrations(
    response: ResponseContext,
  ): Promise<SecurityMonitoringEntraIdAzureAppRegistrationsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringEntraIdAzureAppRegistrationsResponse =
        deserialize(
          parse(await response.body.text(), contentType),
          TypingInfo,
          "SecurityMonitoringEntraIdAzureAppRegistrationsResponse",
        ) as SecurityMonitoringEntraIdAzureAppRegistrationsResponse;
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
      const body: SecurityMonitoringEntraIdAzureAppRegistrationsResponse =
        deserialize(
          parse(await response.body.text(), contentType),
          TypingInfo,
          "SecurityMonitoringEntraIdAzureAppRegistrationsResponse",
          "",
        ) as SecurityMonitoringEntraIdAzureAppRegistrationsResponse;
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
   * @params response Response returned by the server for a request to getIndicatorOfCompromise
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIndicatorOfCompromise(
    response: ResponseContext,
  ): Promise<GetIoCIndicatorResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetIoCIndicatorResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetIoCIndicatorResponse",
      ) as GetIoCIndicatorResponse;
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
      const body: GetIoCIndicatorResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetIoCIndicatorResponse",
        "",
      ) as GetIoCIndicatorResponse;
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
   * @params response Response returned by the server for a request to getInvestigationLogQueriesMatchingSignal
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getInvestigationLogQueriesMatchingSignal(
    response: ResponseContext,
  ): Promise<SecurityMonitoringSignalSuggestedActionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalSuggestedActionsResponse =
        deserialize(
          parse(await response.body.text(), contentType),
          TypingInfo,
          "SecurityMonitoringSignalSuggestedActionsResponse",
        ) as SecurityMonitoringSignalSuggestedActionsResponse;
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
      const body: SecurityMonitoringSignalSuggestedActionsResponse =
        deserialize(
          parse(await response.body.text(), contentType),
          TypingInfo,
          "SecurityMonitoringSignalSuggestedActionsResponse",
          "",
        ) as SecurityMonitoringSignalSuggestedActionsResponse;
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
   * @params response Response returned by the server for a request to getMatchingSignals
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getMatchingSignals(
    response: ResponseContext,
  ): Promise<MatchingSignalsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: MatchingSignalsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MatchingSignalsResponse",
      ) as MatchingSignalsResponse;
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
      const body: MatchingSignalsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "MatchingSignalsResponse",
        "",
      ) as MatchingSignalsResponse;
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
   * @params response Response returned by the server for a request to getSecurityMonitoringCriticalAsset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringCriticalAsset(
    response: ResponseContext,
  ): Promise<SecurityMonitoringCriticalAssetResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringCriticalAssetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringCriticalAssetResponse",
      ) as SecurityMonitoringCriticalAssetResponse;
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
      const body: SecurityMonitoringCriticalAssetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringCriticalAssetResponse",
        "",
      ) as SecurityMonitoringCriticalAssetResponse;
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
   * @params response Response returned by the server for a request to getSecurityMonitoringDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringDataset(
    response: ResponseContext,
  ): Promise<SecurityMonitoringDatasetResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringDatasetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringDatasetResponse",
      ) as SecurityMonitoringDatasetResponse;
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
      const body: SecurityMonitoringDatasetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringDatasetResponse",
        "",
      ) as SecurityMonitoringDatasetResponse;
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
   * @params response Response returned by the server for a request to getSecurityMonitoringDatasetByVersion
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringDatasetByVersion(
    response: ResponseContext,
  ): Promise<SecurityMonitoringDatasetResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringDatasetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringDatasetResponse",
      ) as SecurityMonitoringDatasetResponse;
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
      const body: SecurityMonitoringDatasetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringDatasetResponse",
        "",
      ) as SecurityMonitoringDatasetResponse;
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
   * @params response Response returned by the server for a request to getSecurityMonitoringDatasetVersionHistory
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringDatasetVersionHistory(
    response: ResponseContext,
  ): Promise<SecurityMonitoringDatasetVersionHistoryResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringDatasetVersionHistoryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringDatasetVersionHistoryResponse",
      ) as SecurityMonitoringDatasetVersionHistoryResponse;
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
      const body: SecurityMonitoringDatasetVersionHistoryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringDatasetVersionHistoryResponse",
        "",
      ) as SecurityMonitoringDatasetVersionHistoryResponse;
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
   * @params response Response returned by the server for a request to getSecurityMonitoringHistsignal
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringHistsignal(
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
   * @params response Response returned by the server for a request to getSecurityMonitoringHistsignalsByJobId
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringHistsignalsByJobId(
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
   * @params response Response returned by the server for a request to getSecurityMonitoringIntegrationConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringIntegrationConfig(
    response: ResponseContext,
  ): Promise<SecurityMonitoringIntegrationConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringIntegrationConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringIntegrationConfigResponse",
      ) as SecurityMonitoringIntegrationConfigResponse;
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
      const body: SecurityMonitoringIntegrationConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringIntegrationConfigResponse",
        "",
      ) as SecurityMonitoringIntegrationConfigResponse;
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
   * @params response Response returned by the server for a request to getSecurityMonitoringRuleProposal
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringRuleProposal(
    response: ResponseContext,
  ): Promise<SecurityMonitoringRuleProposalResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringRuleProposalResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleProposalResponse",
      ) as SecurityMonitoringRuleProposalResponse;
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
      const body: SecurityMonitoringRuleProposalResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleProposalResponse",
        "",
      ) as SecurityMonitoringRuleProposalResponse;
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
   * @params response Response returned by the server for a request to getSignalEntities
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSignalEntities(
    response: ResponseContext,
  ): Promise<SignalEntitiesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SignalEntitiesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SignalEntitiesResponse",
      ) as SignalEntitiesResponse;
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
      const body: SignalEntitiesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SignalEntitiesResponse",
        "",
      ) as SignalEntitiesResponse;
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
  ): Promise<NotificationRulesListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: NotificationRulesListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRulesListResponse",
      ) as NotificationRulesListResponse;
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
      const body: NotificationRulesListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRulesListResponse",
        "",
      ) as NotificationRulesListResponse;
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
   * @params response Response returned by the server for a request to getSingleEntityContext
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSingleEntityContext(
    response: ResponseContext,
  ): Promise<SingleEntityContextResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SingleEntityContextResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SingleEntityContextResponse",
      ) as SingleEntityContextResponse;
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
      const body: SingleEntityContextResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SingleEntityContextResponse",
        "",
      ) as SingleEntityContextResponse;
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
   * @params response Response returned by the server for a request to getSuggestedActionsMatchingSignal
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSuggestedActionsMatchingSignal(
    response: ResponseContext,
  ): Promise<SecurityMonitoringSignalSuggestedActionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringSignalSuggestedActionsResponse =
        deserialize(
          parse(await response.body.text(), contentType),
          TypingInfo,
          "SecurityMonitoringSignalSuggestedActionsResponse",
        ) as SecurityMonitoringSignalSuggestedActionsResponse;
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
      const body: SecurityMonitoringSignalSuggestedActionsResponse =
        deserialize(
          parse(await response.body.text(), contentType),
          TypingInfo,
          "SecurityMonitoringSignalSuggestedActionsResponse",
          "",
        ) as SecurityMonitoringSignalSuggestedActionsResponse;
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
   * @params response Response returned by the server for a request to getSuppressionsAffectingFutureRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSuppressionsAffectingFutureRule(
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
   * @params response Response returned by the server for a request to getSuppressionsAffectingRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSuppressionsAffectingRule(
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
   * @params response Response returned by the server for a request to getSuppressionVersionHistory
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSuppressionVersionHistory(
    response: ResponseContext,
  ): Promise<GetSuppressionVersionHistoryResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetSuppressionVersionHistoryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetSuppressionVersionHistoryResponse",
      ) as GetSuppressionVersionHistoryResponse;
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
      const body: GetSuppressionVersionHistoryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetSuppressionVersionHistoryResponse",
        "",
      ) as GetSuppressionVersionHistoryResponse;
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
  ): Promise<NotificationRulesListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: NotificationRulesListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRulesListResponse",
      ) as NotificationRulesListResponse;
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
      const body: NotificationRulesListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRulesListResponse",
        "",
      ) as NotificationRulesListResponse;
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
   * @params response Response returned by the server for a request to listIndicatorsOfCompromise
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIndicatorsOfCompromise(
    response: ResponseContext,
  ): Promise<IoCExplorerListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IoCExplorerListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IoCExplorerListResponse",
      ) as IoCExplorerListResponse;
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
      const body: IoCExplorerListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IoCExplorerListResponse",
        "",
      ) as IoCExplorerListResponse;
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
   * @params response Response returned by the server for a request to listSampleLogGenerationSubscriptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSampleLogGenerationSubscriptions(
    response: ResponseContext,
  ): Promise<SampleLogGenerationSubscriptionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SampleLogGenerationSubscriptionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SampleLogGenerationSubscriptionsResponse",
      ) as SampleLogGenerationSubscriptionsResponse;
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
      const body: SampleLogGenerationSubscriptionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SampleLogGenerationSubscriptionsResponse",
        "",
      ) as SampleLogGenerationSubscriptionsResponse;
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
   * @params response Response returned by the server for a request to listSecurityFilterVersions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityFilterVersions(
    response: ResponseContext,
  ): Promise<SecurityFilterVersionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityFilterVersionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityFilterVersionsResponse",
      ) as SecurityFilterVersionsResponse;
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
      const body: SecurityFilterVersionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityFilterVersionsResponse",
        "",
      ) as SecurityFilterVersionsResponse;
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
   * @params response Response returned by the server for a request to listSecurityMonitoringBatchMigrationResources
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityMonitoringBatchMigrationResources(
    response: ResponseContext,
  ): Promise<SecurityMonitoringBatchMigrationResourcesListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringBatchMigrationResourcesListResponse =
        deserialize(
          parse(await response.body.text(), contentType),
          TypingInfo,
          "SecurityMonitoringBatchMigrationResourcesListResponse",
        ) as SecurityMonitoringBatchMigrationResourcesListResponse;
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
      const body: SecurityMonitoringBatchMigrationResourcesListResponse =
        deserialize(
          parse(await response.body.text(), contentType),
          TypingInfo,
          "SecurityMonitoringBatchMigrationResourcesListResponse",
          "",
        ) as SecurityMonitoringBatchMigrationResourcesListResponse;
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
   * @params response Response returned by the server for a request to listSecurityMonitoringBatchMigrations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityMonitoringBatchMigrations(
    response: ResponseContext,
  ): Promise<SecurityMonitoringBatchMigrationsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringBatchMigrationsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringBatchMigrationsListResponse",
      ) as SecurityMonitoringBatchMigrationsListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: SecurityMonitoringBatchMigrationsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringBatchMigrationsListResponse",
        "",
      ) as SecurityMonitoringBatchMigrationsListResponse;
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
   * @params response Response returned by the server for a request to listSecurityMonitoringCriticalAssets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityMonitoringCriticalAssets(
    response: ResponseContext,
  ): Promise<SecurityMonitoringCriticalAssetsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringCriticalAssetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringCriticalAssetsResponse",
      ) as SecurityMonitoringCriticalAssetsResponse;
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
      const body: SecurityMonitoringCriticalAssetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringCriticalAssetsResponse",
        "",
      ) as SecurityMonitoringCriticalAssetsResponse;
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
   * @params response Response returned by the server for a request to listSecurityMonitoringDatasets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityMonitoringDatasets(
    response: ResponseContext,
  ): Promise<SecurityMonitoringDatasetsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringDatasetsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringDatasetsListResponse",
      ) as SecurityMonitoringDatasetsListResponse;
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
      const body: SecurityMonitoringDatasetsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringDatasetsListResponse",
        "",
      ) as SecurityMonitoringDatasetsListResponse;
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
   * @params response Response returned by the server for a request to listSecurityMonitoringHistsignals
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityMonitoringHistsignals(
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
   * @params response Response returned by the server for a request to listSecurityMonitoringIntegrationConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityMonitoringIntegrationConfigs(
    response: ResponseContext,
  ): Promise<SecurityMonitoringIntegrationConfigsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringIntegrationConfigsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringIntegrationConfigsResponse",
      ) as SecurityMonitoringIntegrationConfigsResponse;
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
      const body: SecurityMonitoringIntegrationConfigsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringIntegrationConfigsResponse",
        "",
      ) as SecurityMonitoringIntegrationConfigsResponse;
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
  ): Promise<SecurityMonitoringPaginatedSuppressionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringPaginatedSuppressionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringPaginatedSuppressionsResponse",
      ) as SecurityMonitoringPaginatedSuppressionsResponse;
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
      const body: SecurityMonitoringPaginatedSuppressionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringPaginatedSuppressionsResponse",
        "",
      ) as SecurityMonitoringPaginatedSuppressionsResponse;
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
   * @params response Response returned by the server for a request to publishSecurityMonitoringBatchMigration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async publishSecurityMonitoringBatchMigration(
    response: ResponseContext,
  ): Promise<SecurityMonitoringBatchMigrationPublishResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringBatchMigrationPublishResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringBatchMigrationPublishResponse",
      ) as SecurityMonitoringBatchMigrationPublishResponse;
      return body;
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
      const body: SecurityMonitoringBatchMigrationPublishResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringBatchMigrationPublishResponse",
        "",
      ) as SecurityMonitoringBatchMigrationPublishResponse;
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
   * @params response Response returned by the server for a request to restoreSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async restoreSecurityMonitoringRule(
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
   * @params response Response returned by the server for a request to searchSecurityMonitoringHistsignals
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchSecurityMonitoringHistsignals(
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
   * @params response Response returned by the server for a request to sendSecurityMonitoringNotificationPreview
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sendSecurityMonitoringNotificationPreview(
    response: ResponseContext,
  ): Promise<NotificationRulePreviewResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: NotificationRulePreviewResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRulePreviewResponse",
      ) as NotificationRulePreviewResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: NotificationRulePreviewResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NotificationRulePreviewResponse",
        "",
      ) as NotificationRulePreviewResponse;
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
   * @params response Response returned by the server for a request to startSecurityMonitoringBatchMigration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async startSecurityMonitoringBatchMigration(
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
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 500
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
   * @params response Response returned by the server for a request to startSecurityMonitoringRuleProposal
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async startSecurityMonitoringRuleProposal(
    response: ResponseContext,
  ): Promise<SecurityMonitoringRuleProposalStartResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      const body: SecurityMonitoringRuleProposalStartResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleProposalStartResponse",
      ) as SecurityMonitoringRuleProposalStartResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: SecurityMonitoringRuleProposalStartResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringRuleProposalStartResponse",
        "",
      ) as SecurityMonitoringRuleProposalStartResponse;
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
   * @params response Response returned by the server for a request to updateSecurityMonitoringBatchMigration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityMonitoringBatchMigration(
    response: ResponseContext,
  ): Promise<SecurityMonitoringBatchMigrationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringBatchMigrationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringBatchMigrationResponse",
      ) as SecurityMonitoringBatchMigrationResponse;
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
      const body: SecurityMonitoringBatchMigrationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringBatchMigrationResponse",
        "",
      ) as SecurityMonitoringBatchMigrationResponse;
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
   * @params response Response returned by the server for a request to updateSecurityMonitoringBatchMigrationResource
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityMonitoringBatchMigrationResource(
    response: ResponseContext,
  ): Promise<SecurityMonitoringBatchMigrationResourceResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringBatchMigrationResourceResponse =
        deserialize(
          parse(await response.body.text(), contentType),
          TypingInfo,
          "SecurityMonitoringBatchMigrationResourceResponse",
        ) as SecurityMonitoringBatchMigrationResourceResponse;
      return body;
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
      const body: SecurityMonitoringBatchMigrationResourceResponse =
        deserialize(
          parse(await response.body.text(), contentType),
          TypingInfo,
          "SecurityMonitoringBatchMigrationResourceResponse",
          "",
        ) as SecurityMonitoringBatchMigrationResourceResponse;
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
   * @params response Response returned by the server for a request to updateSecurityMonitoringCriticalAsset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityMonitoringCriticalAsset(
    response: ResponseContext,
  ): Promise<SecurityMonitoringCriticalAssetResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringCriticalAssetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringCriticalAssetResponse",
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
      const body: SecurityMonitoringCriticalAssetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringCriticalAssetResponse",
        "",
      ) as SecurityMonitoringCriticalAssetResponse;
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
   * @params response Response returned by the server for a request to updateSecurityMonitoringDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityMonitoringDataset(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
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
   * @params response Response returned by the server for a request to updateSecurityMonitoringIntegrationConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityMonitoringIntegrationConfig(
    response: ResponseContext,
  ): Promise<SecurityMonitoringIntegrationConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityMonitoringIntegrationConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringIntegrationConfigResponse",
      ) as SecurityMonitoringIntegrationConfigResponse;
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
      const body: SecurityMonitoringIntegrationConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityMonitoringIntegrationConfigResponse",
        "",
      ) as SecurityMonitoringIntegrationConfigResponse;
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
   * @params response Response returned by the server for a request to validateSecurityMonitoringIntegrationConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validateSecurityMonitoringIntegrationConfig(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
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
   * @params response Response returned by the server for a request to validateSecurityMonitoringIntegrationCredentials
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validateSecurityMonitoringIntegrationCredentials(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
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

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to validateSecurityMonitoringSuppression
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validateSecurityMonitoringSuppression(
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

export interface SecurityMonitoringApiActivateContentPackRequest {
  /**
   * The ID of the content pack to activate (for example, `aws-cloudtrail`).
   * @type string
   */
  contentPackId: string;
}

export interface SecurityMonitoringApiActivateIntegrationRequest {
  /**
   * The integration type to activate (for example, `entra_id`).
   * @type string
   */
  integrationType: string;
  /**
   * Optional configuration overrides for the integration to activate.
   * @type SecurityMonitoringIntegrationActivateRequest
   */
  body?: SecurityMonitoringIntegrationActivateRequest;
}

export interface SecurityMonitoringApiBatchGetSecurityMonitoringDatasetDependenciesRequest {
  /**
   * @type SecurityMonitoringDatasetDependenciesRequest
   */
  body: SecurityMonitoringDatasetDependenciesRequest;
}

export interface SecurityMonitoringApiBulkConvertExistingSecurityMonitoringRulesRequest {
  /**
   * @type SecurityMonitoringRuleConvertBulkPayload
   */
  body: SecurityMonitoringRuleConvertBulkPayload;
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

export interface SecurityMonitoringApiCancelSecurityMonitoringBatchMigrationRequest {
  /**
   * The UUID of the batch migration.
   * @type string
   */
  batchId: string;
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

export interface SecurityMonitoringApiCreateIoCTriageStateRequest {
  /**
   * The triage state to set for the indicator.
   * @type IoCTriageWriteRequest
   */
  body: IoCTriageWriteRequest;
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

export interface SecurityMonitoringApiCreateSecurityMonitoringBatchMigrationRequest {
  /**
   * @type SecurityMonitoringBatchMigrationCreateRequest
   */
  body: SecurityMonitoringBatchMigrationCreateRequest;
}

export interface SecurityMonitoringApiCreateSecurityMonitoringBatchMigrationResourcesRequest {
  /**
   * The UUID of the batch migration.
   * @type string
   */
  batchId: string;
  /**
   * @type SecurityMonitoringBatchMigrationResourcesCreateRequest
   */
  body: SecurityMonitoringBatchMigrationResourcesCreateRequest;
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

export interface SecurityMonitoringApiDeactivateIntegrationRequest {
  /**
   * The integration type to deactivate (for example, `entra_id`).
   * @type string
   */
  integrationType: string;
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

export interface SecurityMonitoringApiDeleteSecurityMonitoringBatchMigrationRequest {
  /**
   * The UUID of the batch migration.
   * @type string
   */
  batchId: string;
}

export interface SecurityMonitoringApiDeleteSecurityMonitoringBatchMigrationResourcesRequest {
  /**
   * The UUID of the batch migration.
   * @type string
   */
  batchId: string;
  /**
   * @type SecurityMonitoringBatchMigrationResourcesDeleteRequest
   */
  body: SecurityMonitoringBatchMigrationResourcesDeleteRequest;
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

export interface SecurityMonitoringApiGetEntityContextRequest {
  /**
   * A free-text query (for example, an email address or principal ID) used to filter the entities returned.
   * @type string
   */
  query?: string;
  /**
   * The type of entity to retrieve. Only `siem_entity_identity` is currently supported.
   * Defaults to `siem_entity_identity`.
   * @type EntityContextEntityType
   */
  entityType?: EntityContextEntityType;
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

export interface SecurityMonitoringApiGetEntityContextRecentlyUpdatedRequest {
  /**
   * A free-text query (for example, an email address or principal ID) used to filter the entities returned.
   * @type string
   */
  query?: string;
  /**
   * The type of entity to retrieve. Only `siem_entity_identity` is currently supported.
   * Defaults to `siem_entity_identity`.
   * @type EntityContextEntityType
   */
  entityType?: EntityContextEntityType;
  /**
   * The start of the time range to query, as an RFC3339 timestamp or a relative time (for example, `now-7d`).
   * Defaults to `now-7d`.
   * @type string
   */
  from?: string;
  /**
   * The end of the time range to query, as an RFC3339 timestamp or a relative time (for example, `now`).
   * Defaults to `now`. Entities are ranked by their most recent revision within `[from, to]`.
   * @type string
   */
  to?: string;
  /**
   * The number of entities to return. Must be between 1 and 100.
   * @type number
   */
  limit?: number;
  /**
   * Which revisions to return for each entity: `latest` returns only the latest revision of each entity as of `to`,
   * and `all` returns every revision in the requested time range.
   * @type EntityContextRevisionsMode
   */
  revisions?: EntityContextRevisionsMode;
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
  /**
   * When true, return only OCSF field-based matches. When false, return regex/message-based matches.
   * @type boolean
   */
  ocsf?: boolean;
  /**
   * Include full triage history for the indicator.
   * @type boolean
   */
  includeTriageHistory?: boolean;
  /**
   * Maximum number of triage history events returned. Only applied when `include_triage_history` is true.
   * @type number
   */
  triageHistoryLimit?: number;
  /**
   * Pagination offset into the triage history. Only applied when `include_triage_history` is true.
   * @type number
   */
  triageHistoryOffset?: number;
}

export interface SecurityMonitoringApiGetInvestigationLogQueriesMatchingSignalRequest {
  /**
   * The ID of the signal.
   * @type string
   */
  signalId: string;
}

export interface SecurityMonitoringApiGetMatchingSignalsRequest {
  /**
   * The ID of the event to find matching signals for.
   * @type string
   */
  eventId: string;
  /**
   * The product track that the event belongs to.
   * @type string
   */
  track: string;
}

export interface SecurityMonitoringApiGetRuleVersionHistoryRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
  /**
   * Number of items to return per page. The maximum allowed value is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific page number to return.
   * @type number
   */
  pageNumber?: number;
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

export interface SecurityMonitoringApiGetSecurityMonitoringRuleProposalRequest {
  /**
   * The ID of the rule proposal, returned by the start a rule proposal endpoint.
   * @type string
   */
  proposalId: string;
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

export interface SecurityMonitoringApiGetSingleEntityContextRequest {
  /**
   * The unique identifier of the entity to retrieve.
   * @type string
   */
  id: string;
  /**
   * The type of entity to retrieve. Only `siem_entity_identity` is currently supported.
   * Defaults to `siem_entity_identity`.
   * @type EntityContextEntityType
   */
  entityType?: EntityContextEntityType;
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
   * Number of items to return per page. The maximum allowed value is 100.
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

export interface SecurityMonitoringApiListHistoricalJobsRequest {
  /**
   * Number of items to return per page. The maximum allowed value is 100.
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
  /**
   * When true, return only OCSF field-based matches. When false, return regex/message-based matches.
   * @type boolean
   */
  ocsf?: boolean;
  /**
   * Filter indicators whose triage state was updated by a specific user identified by their handle.
   * @type string
   */
  workedBy?: string;
  /**
   * Filter by triage state.
   * @type IoCTriageState
   */
  triageState?: IoCTriageState;
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

export interface SecurityMonitoringApiListSecurityMonitoringBatchMigrationResourcesRequest {
  /**
   * The UUID of the batch migration.
   * @type string
   */
  batchId: string;
  /**
   * Size for a given page. The maximum allowed value is 500.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific page number to return, starting at 1.
   * @type number
   */
  pageNumber?: number;
  /**
   * A search query in Datadog search syntax to filter resources, such as
   * `status:completed`. Filterable attributes are `id`, `name`, `description`, `inputType`,
   * `status`, `input`, `createdBy`, and `lastUpdatedBy`. Free text matches the resource name.
   * @type string
   */
  filterQuery?: string;
}

export interface SecurityMonitoringApiListSecurityMonitoringBatchMigrationsRequest {
  /**
   * Size for a given page. The maximum allowed value is 500.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific page number to return, starting at 1.
   * @type number
   */
  pageNumber?: number;
  /**
   * A search query in Datadog search syntax to filter batch migrations, such as
   * `status:completed`. Filterable attributes are `id`, `name`, `description`, `status`,
   * `createdBy`, and `lastUpdatedBy`. Free text matches the batch migration name.
   * @type string
   */
  filterQuery?: string;
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
   * Number of items to return per page. The maximum allowed value is 100.
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

export interface SecurityMonitoringApiPublishSecurityMonitoringBatchMigrationRequest {
  /**
   * The UUID of the batch migration.
   * @type string
   */
  batchId: string;
  /**
   * @type SecurityMonitoringBatchMigrationPublishRequest
   */
  body: SecurityMonitoringBatchMigrationPublishRequest;
}

export interface SecurityMonitoringApiRestoreSecurityMonitoringRuleRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
  /**
   * The historical version number of the rule.
   * @type number
   */
  version: number;
}

export interface SecurityMonitoringApiRunHistoricalJobRequest {
  /**
   * @type RunHistoricalJobRequest
   */
  body: RunHistoricalJobRequest;
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

export interface SecurityMonitoringApiSendSecurityMonitoringNotificationPreviewRequest {
  /**
   * @type CreateNotificationRuleParameters
   */
  body: CreateNotificationRuleParameters;
}

export interface SecurityMonitoringApiStartSecurityMonitoringBatchMigrationRequest {
  /**
   * The UUID of the batch migration.
   * @type string
   */
  batchId: string;
}

export interface SecurityMonitoringApiStartSecurityMonitoringRuleProposalRequest {
  /**
   * @type SecurityMonitoringRuleProposalStartRequest
   */
  body: SecurityMonitoringRuleProposalStartRequest;
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

export interface SecurityMonitoringApiUpdateSecurityMonitoringBatchMigrationRequest {
  /**
   * The UUID of the batch migration.
   * @type string
   */
  batchId: string;
  /**
   * @type SecurityMonitoringBatchMigrationUpdateRequest
   */
  body: SecurityMonitoringBatchMigrationUpdateRequest;
}

export interface SecurityMonitoringApiUpdateSecurityMonitoringBatchMigrationResourceRequest {
  /**
   * The UUID of the batch migration.
   * @type string
   */
  batchId: string;
  /**
   * The UUID of the batch migration resource.
   * @type string
   */
  resourceId: string;
  /**
   * @type SecurityMonitoringBatchMigrationResourceUpdateRequest
   */
  body: SecurityMonitoringBatchMigrationResourceUpdateRequest;
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
   * Activate a Cloud SIEM content pack. This operation configures the necessary
   * log filters or security filters depending on the pricing model and updates the content
   * pack activation state.
   * @param param The request object
   */
  public activateContentPack(
    param: SecurityMonitoringApiActivateContentPackRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.activateContentPack(
      param.contentPackId,
      options,
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
   * Activate an entity context sync integration for a source type that does not require manually
   * supplied credentials (for example, Entra ID). If an integration of this type already exists,
   * it is returned (re-enabling it first if it was disabled) instead of creating a duplicate.
   * @param param The request object
   */
  public activateIntegration(
    param: SecurityMonitoringApiActivateIntegrationRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringIntegrationConfigResponse> {
    const requestContextPromise = this.requestFactory.activateIntegration(
      param.integrationType,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.activateIntegration(responseContext);
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
    options?: Configuration,
  ): Promise<SecurityMonitoringDatasetDependenciesResponse> {
    const requestContextPromise =
      this.requestFactory.batchGetSecurityMonitoringDatasetDependencies(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.batchGetSecurityMonitoringDatasetDependencies(
            responseContext,
          );
        });
    });
  }

  /**
   * Convert a list of existing security monitoring rules to Terraform for the Datadog provider
   * resource `datadog_security_monitoring_rule`. Returns a ZIP archive containing one Terraform
   * file per rule. You can convert rules for the following types:
   * - App and API Protection
   * - Cloud SIEM (log detection and signal correlation)
   * - Workload Protection
   * @param param The request object
   */
  public bulkConvertExistingSecurityMonitoringRules(
    param: SecurityMonitoringApiBulkConvertExistingSecurityMonitoringRulesRequest,
    options?: Configuration,
  ): Promise<HttpFile> {
    const requestContextPromise =
      this.requestFactory.bulkConvertExistingSecurityMonitoringRules(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkConvertExistingSecurityMonitoringRules(
            responseContext,
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
    options?: Configuration,
  ): Promise<SampleLogGenerationBulkSubscriptionResponse> {
    const requestContextPromise =
      this.requestFactory.bulkCreateSampleLogGenerationSubscriptions(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkCreateSampleLogGenerationSubscriptions(
            responseContext,
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
    options?: Configuration,
  ): Promise<SecurityMonitoringRuleBulkDeleteResponse> {
    const requestContextPromise =
      this.requestFactory.bulkDeleteSecurityMonitoringRules(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkDeleteSecurityMonitoringRules(
            responseContext,
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
    options?: Configuration,
  ): Promise<SecurityMonitoringSignalsBulkTriageUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.bulkEditSecurityMonitoringSignals(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkEditSecurityMonitoringSignals(
            responseContext,
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
    options?: Configuration,
  ): Promise<SecurityMonitoringSignalsBulkTriageUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.bulkEditSecurityMonitoringSignalsAssignee(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkEditSecurityMonitoringSignalsAssignee(
            responseContext,
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
    options?: Configuration,
  ): Promise<SecurityMonitoringSignalsBulkTriageUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.bulkEditSecurityMonitoringSignalsState(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkEditSecurityMonitoringSignalsState(
            responseContext,
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
    options?: Configuration,
  ): Promise<HttpFile> {
    const requestContextPromise =
      this.requestFactory.bulkExportSecurityMonitoringRules(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkExportSecurityMonitoringRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Export multiple security monitoring resources to Terraform, packaged as a zip archive.
   * The `resource_type` path parameter specifies the type of resources to export
   * and must be one of `suppressions`, `critical_assets`, `security_filters`, or `rules`.
   * A maximum of 1000 resources can be exported in a single request.
   * For `rules`, partner rules cannot be exported and return a 400 error.
   * @param param The request object
   */
  public bulkExportSecurityMonitoringTerraformResources(
    param: SecurityMonitoringApiBulkExportSecurityMonitoringTerraformResourcesRequest,
    options?: Configuration,
  ): Promise<HttpFile> {
    const requestContextPromise =
      this.requestFactory.bulkExportSecurityMonitoringTerraformResources(
        param.resourceType,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkExportSecurityMonitoringTerraformResources(
            responseContext,
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
   * Cancel an `in_progress` batch migration. Resources that are `pending` or `in_progress`
   * become `canceled`. Resources that are already `completed` or `failed` keep their status
   * and output, so completed resources can still be published. Canceling a `canceled` batch
   * migration succeeds, so the request can be safely retried. Returns `409 Conflict` if the
   * batch migration is `draft` or `completed`.
   * @param param The request object
   */
  public cancelSecurityMonitoringBatchMigration(
    param: SecurityMonitoringApiCancelSecurityMonitoringBatchMigrationRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.cancelSecurityMonitoringBatchMigration(
        param.batchId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.cancelSecurityMonitoringBatchMigration(
            responseContext,
          );
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
   * Convert a security monitoring resource that doesn't (yet) exist from JSON to Terraform.
   * The `resource_type` path parameter specifies the type of resource to convert
   * and must be one of `suppressions`, `critical_assets`, `security_filters`, or `rules`.
   * @param param The request object
   */
  public convertSecurityMonitoringTerraformResource(
    param: SecurityMonitoringApiConvertSecurityMonitoringTerraformResourceRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringTerraformExportResponse> {
    const requestContextPromise =
      this.requestFactory.convertSecurityMonitoringTerraformResource(
        param.resourceType,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.convertSecurityMonitoringTerraformResource(
            responseContext,
          );
        });
    });
  }

  /**
   * Set the triage state of an indicator of compromise (IoC). This creates or
   * updates the triage state for the indicator in your organization.
   * @param param The request object
   */
  public createIoCTriageState(
    param: SecurityMonitoringApiCreateIoCTriageStateRequest,
    options?: Configuration,
  ): Promise<IoCTriageWriteResponse> {
    const requestContextPromise = this.requestFactory.createIoCTriageState(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIoCTriageState(responseContext);
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
    options?: Configuration,
  ): Promise<SampleLogGenerationSubscriptionResponse> {
    const requestContextPromise =
      this.requestFactory.createSampleLogGenerationSubscription(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSampleLogGenerationSubscription(
            responseContext,
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
   * Create a batch migration in the `draft` status, together with 1 to 100 initial
   * resources. Each resource holds one source rule to translate into a Cloud SIEM detection
   * rule. To load more rules, add them with the add resources endpoint before starting the
   * batch migration. A batch migration can hold up to 1000 resources. The response does not
   * include the created resources: list the resources of the batch migration to retrieve them.
   * Alternatively, use the start-a-rule-proposal endpoint to get a single proposed rule.
   * @param param The request object
   */
  public createSecurityMonitoringBatchMigration(
    param: SecurityMonitoringApiCreateSecurityMonitoringBatchMigrationRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringBatchMigrationResponse> {
    const requestContextPromise =
      this.requestFactory.createSecurityMonitoringBatchMigration(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityMonitoringBatchMigration(
            responseContext,
          );
        });
    });
  }

  /**
   * Add 1 to 1000 resources to a `draft` batch migration. Returns `409 Conflict` if the
   * batch migration is not `draft`, and `400 Bad Request` if the batch migration would
   * contain more than 1000 resources.
   * @param param The request object
   */
  public createSecurityMonitoringBatchMigrationResources(
    param: SecurityMonitoringApiCreateSecurityMonitoringBatchMigrationResourcesRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringBatchMigrationResourcesCreateResponse> {
    const requestContextPromise =
      this.requestFactory.createSecurityMonitoringBatchMigrationResources(
        param.batchId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityMonitoringBatchMigrationResources(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a new dynamic severity rule (previously called critical assets).
   * @param param The request object
   */
  public createSecurityMonitoringCriticalAsset(
    param: SecurityMonitoringApiCreateSecurityMonitoringCriticalAssetRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringCriticalAssetResponse> {
    const requestContextPromise =
      this.requestFactory.createSecurityMonitoringCriticalAsset(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityMonitoringCriticalAsset(
            responseContext,
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
    options?: Configuration,
  ): Promise<SecurityMonitoringDatasetCreateResponse> {
    const requestContextPromise =
      this.requestFactory.createSecurityMonitoringDataset(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityMonitoringDataset(
            responseContext,
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
    options?: Configuration,
  ): Promise<SecurityMonitoringIntegrationConfigResponse> {
    const requestContextPromise =
      this.requestFactory.createSecurityMonitoringIntegrationConfig(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityMonitoringIntegrationConfig(
            responseContext,
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
   * Deactivate a Cloud SIEM content pack. This operation removes the content pack's
   * configuration from log filters or security filters and updates the content pack activation state.
   * @param param The request object
   */
  public deactivateContentPack(
    param: SecurityMonitoringApiDeactivateContentPackRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deactivateContentPack(
      param.contentPackId,
      options,
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
   * Deactivate all active entity context sync integrations of the given source type (for example, Entra ID).
   * @param param The request object
   */
  public deactivateIntegration(
    param: SecurityMonitoringApiDeactivateIntegrationRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringIntegrationConfigResponse> {
    const requestContextPromise = this.requestFactory.deactivateIntegration(
      param.integrationType,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deactivateIntegration(responseContext);
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
    options?: Configuration,
  ): Promise<SampleLogGenerationSubscriptionResponse> {
    const requestContextPromise =
      this.requestFactory.deleteSampleLogGenerationSubscription(
        param.contentPackId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSampleLogGenerationSubscription(
            responseContext,
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
   * Delete a batch migration and its resources. Detection rules that were already
   * published are not deleted. Returns `409 Conflict` while any resource is `in_progress`
   * or `publishing`: cancel the batch migration, or wait for publishing to finish, and
   * then try again.
   * @param param The request object
   */
  public deleteSecurityMonitoringBatchMigration(
    param: SecurityMonitoringApiDeleteSecurityMonitoringBatchMigrationRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSecurityMonitoringBatchMigration(
        param.batchId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityMonitoringBatchMigration(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete resources from a batch migration. The request is all-or-nothing: it returns
   * `404 Not Found` if any resource does not exist, and `409 Conflict` if any resource is
   * `in_progress` or `publishing`. In both cases nothing is deleted. Duplicate resource IDs
   * are ignored. Detection rules already published from the deleted resources are not deleted.
   * @param param The request object
   */
  public deleteSecurityMonitoringBatchMigrationResources(
    param: SecurityMonitoringApiDeleteSecurityMonitoringBatchMigrationResourcesRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSecurityMonitoringBatchMigrationResources(
        param.batchId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityMonitoringBatchMigrationResources(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a specific dynamic severity rule (previously called critical assets).
   * @param param The request object
   */
  public deleteSecurityMonitoringCriticalAsset(
    param: SecurityMonitoringApiDeleteSecurityMonitoringCriticalAssetRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSecurityMonitoringCriticalAsset(
        param.criticalAssetId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityMonitoringCriticalAsset(
            responseContext,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSecurityMonitoringDataset(
        param.datasetId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityMonitoringDataset(
            responseContext,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSecurityMonitoringIntegrationConfig(
        param.integrationConfigId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityMonitoringIntegrationConfig(
            responseContext,
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
   * Update the triage state or assignee of a security signal.
   * @param param The request object
   */
  public editSecurityMonitoringSignal(
    param: SecurityMonitoringApiEditSecurityMonitoringSignalRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.editSecurityMonitoringSignal(
        param.signalId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.editSecurityMonitoringSignal(
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
   * Export a security monitoring resource to a Terraform configuration.
   * The `resource_type` path parameter specifies the type of resource to export
   * and must be one of `suppressions`, `critical_assets`, `security_filters`, or `rules`.
   * For `rules`, partner rules cannot be exported and return a 400 error.
   * @param param The request object
   */
  public exportSecurityMonitoringTerraformResource(
    param: SecurityMonitoringApiExportSecurityMonitoringTerraformResourceRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringTerraformExportResponse> {
    const requestContextPromise =
      this.requestFactory.exportSecurityMonitoringTerraformResource(
        param.resourceType,
        param.resourceId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.exportSecurityMonitoringTerraformResource(
            responseContext,
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
    options?: Configuration,
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
   * Get the list of dynamic severity rules (previously called critical assets) that affect a specific existing rule by the rule's ID.
   * @param param The request object
   */
  public getCriticalAssetsAffectingRule(
    param: SecurityMonitoringApiGetCriticalAssetsAffectingRuleRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringCriticalAssetsResponse> {
    const requestContextPromise =
      this.requestFactory.getCriticalAssetsAffectingRule(param.ruleId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCriticalAssetsAffectingRule(
            responseContext,
          );
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
    options?: Configuration,
  ): Promise<EntityContextResponse> {
    const requestContextPromise = this.requestFactory.getEntityContext(
      param.query,
      param.entityType,
      param.from,
      param.to,
      param.asOf,
      param.limit,
      param.pageToken,
      options,
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
   * Get the entities with the most recent updates in the Cloud SIEM entity context store. Entities are ranked
   * by the time of their most recent revision in the requested time range, and the top `limit` entities are
   * returned in that order. This endpoint is not paginated.
   * @param param The request object
   */
  public getEntityContextRecentlyUpdated(
    param: SecurityMonitoringApiGetEntityContextRecentlyUpdatedRequest = {},
    options?: Configuration,
  ): Promise<RecentlyUpdatedEntitiesResponse> {
    const requestContextPromise =
      this.requestFactory.getEntityContextRecentlyUpdated(
        param.query,
        param.entityType,
        param.from,
        param.to,
        param.limit,
        param.revisions,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getEntityContextRecentlyUpdated(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the Azure App Registrations discovered for the organization and whether at least one of them has
   * resource collection enabled, which is a prerequisite for activating the Entra ID entity context sync integration.
   * @param param The request object
   */
  public getEntraIdAzureAppRegistrations(
    options?: Configuration,
  ): Promise<SecurityMonitoringEntraIdAzureAppRegistrationsResponse> {
    const requestContextPromise =
      this.requestFactory.getEntraIdAzureAppRegistrations(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getEntraIdAzureAppRegistrations(
            responseContext,
          );
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
   * Get detailed information about a specific indicator of compromise (IoC).
   * @param param The request object
   */
  public getIndicatorOfCompromise(
    param: SecurityMonitoringApiGetIndicatorOfCompromiseRequest,
    options?: Configuration,
  ): Promise<GetIoCIndicatorResponse> {
    const requestContextPromise = this.requestFactory.getIndicatorOfCompromise(
      param.indicator,
      param.ocsf,
      param.includeTriageHistory,
      param.triageHistoryLimit,
      param.triageHistoryOffset,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIndicatorOfCompromise(
            responseContext,
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
    options?: Configuration,
  ): Promise<SecurityMonitoringSignalSuggestedActionsResponse> {
    const requestContextPromise =
      this.requestFactory.getInvestigationLogQueriesMatchingSignal(
        param.signalId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getInvestigationLogQueriesMatchingSignal(
            responseContext,
          );
        });
    });
  }

  /**
   * Returns the list of security signals that match a given event on the given track.
   * @param param The request object
   */
  public getMatchingSignals(
    param: SecurityMonitoringApiGetMatchingSignalsRequest,
    options?: Configuration,
  ): Promise<MatchingSignalsResponse> {
    const requestContextPromise = this.requestFactory.getMatchingSignals(
      param.eventId,
      param.track,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMatchingSignals(responseContext);
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
   * Get the details of a specific dynamic severity rule (previously called critical assets).
   * @param param The request object
   */
  public getSecurityMonitoringCriticalAsset(
    param: SecurityMonitoringApiGetSecurityMonitoringCriticalAssetRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringCriticalAssetResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityMonitoringCriticalAsset(
        param.criticalAssetId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringCriticalAsset(
            responseContext,
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
    options?: Configuration,
  ): Promise<SecurityMonitoringDatasetResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityMonitoringDataset(
        param.datasetId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringDataset(
            responseContext,
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
    options?: Configuration,
  ): Promise<SecurityMonitoringDatasetResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityMonitoringDatasetByVersion(
        param.datasetId,
        param.version,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringDatasetByVersion(
            responseContext,
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
    options?: Configuration,
  ): Promise<SecurityMonitoringDatasetVersionHistoryResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityMonitoringDatasetVersionHistory(
        param.datasetId,
        param.pageSize,
        param.pageNumber,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringDatasetVersionHistory(
            responseContext,
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
    options?: Configuration,
  ): Promise<SecurityMonitoringSignalResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityMonitoringHistsignal(
        param.histsignalId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringHistsignal(
            responseContext,
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
    options?: Configuration,
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
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringHistsignalsByJobId(
            responseContext,
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
    options?: Configuration,
  ): Promise<SecurityMonitoringIntegrationConfigResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityMonitoringIntegrationConfig(
        param.integrationConfigId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringIntegrationConfig(
            responseContext,
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
   * Get the status of a rule proposal started with the start-a-rule-proposal endpoint.
   * While the status is `pending` or `in_progress`, the proposed rule is still being
   * generated. Poll this endpoint again later. If the status is `completed`, the response's `rule` field contains
   * the proposed Cloud SIEM detection rule. If the status is `failed`, the response's `error` field contains
   * the reason a rule could not be generated.
   *
   * This endpoint does not create or modify any detection rules in Cloud SIEM. To create the
   * proposed rule, use the create-a-detection-rule endpoint.
   * @param param The request object
   */
  public getSecurityMonitoringRuleProposal(
    param: SecurityMonitoringApiGetSecurityMonitoringRuleProposalRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringRuleProposalResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityMonitoringRuleProposal(
        param.proposalId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringRuleProposal(
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
   * Get the list of entities related to a security signal, captured at the signal's timestamp.
   * @param param The request object
   */
  public getSignalEntities(
    param: SecurityMonitoringApiGetSignalEntitiesRequest,
    options?: Configuration,
  ): Promise<SignalEntitiesResponse> {
    const requestContextPromise = this.requestFactory.getSignalEntities(
      param.signalId,
      param.limit,
      options,
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
  ): Promise<NotificationRulesListResponse> {
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
   * Get a single entity from the Cloud SIEM entity context store by its identifier, returning the historical
   * revisions of the entity in the requested time range. The endpoint can either return revisions across an
   * interval (`from` / `to`) or the snapshot of the entity at a single point in time (`as_of`); the two modes
   * are mutually exclusive.
   * @param param The request object
   */
  public getSingleEntityContext(
    param: SecurityMonitoringApiGetSingleEntityContextRequest,
    options?: Configuration,
  ): Promise<SingleEntityContextResponse> {
    const requestContextPromise = this.requestFactory.getSingleEntityContext(
      param.id,
      param.entityType,
      param.from,
      param.to,
      param.asOf,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSingleEntityContext(responseContext);
        });
    });
  }

  /**
   * Get the list of suggested actions for a given security signal.
   * @param param The request object
   */
  public getSuggestedActionsMatchingSignal(
    param: SecurityMonitoringApiGetSuggestedActionsMatchingSignalRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringSignalSuggestedActionsResponse> {
    const requestContextPromise =
      this.requestFactory.getSuggestedActionsMatchingSignal(
        param.signalId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSuggestedActionsMatchingSignal(
            responseContext,
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
    options?: Configuration,
  ): Promise<SecurityMonitoringSuppressionsResponse> {
    const requestContextPromise =
      this.requestFactory.getSuppressionsAffectingFutureRule(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSuppressionsAffectingFutureRule(
            responseContext,
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
    options?: Configuration,
  ): Promise<SecurityMonitoringSuppressionsResponse> {
    const requestContextPromise =
      this.requestFactory.getSuppressionsAffectingRule(param.ruleId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSuppressionsAffectingRule(
            responseContext,
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
    options?: Configuration,
  ): Promise<GetSuppressionVersionHistoryResponse> {
    const requestContextPromise =
      this.requestFactory.getSuppressionVersionHistory(
        param.suppressionId,
        param.pageSize,
        param.pageNumber,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSuppressionVersionHistory(
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
  ): Promise<NotificationRulesListResponse> {
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
   * Get a list of indicators of compromise (IoCs) matching the specified filters.
   * @param param The request object
   */
  public listIndicatorsOfCompromise(
    param: SecurityMonitoringApiListIndicatorsOfCompromiseRequest = {},
    options?: Configuration,
  ): Promise<IoCExplorerListResponse> {
    const requestContextPromise =
      this.requestFactory.listIndicatorsOfCompromise(
        param.limit,
        param.offset,
        param.query,
        param.sortColumn,
        param.sortOrder,
        param.ocsf,
        param.workedBy,
        param.triageState,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIndicatorsOfCompromise(
            responseContext,
          );
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
    options?: Configuration,
  ): Promise<SampleLogGenerationSubscriptionsResponse> {
    const requestContextPromise =
      this.requestFactory.listSampleLogGenerationSubscriptions(
        param.status,
        param.startTimestamp,
        param.endTimestamp,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSampleLogGenerationSubscriptions(
            responseContext,
          );
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
   * Get the configured security filters at each historical version of the configuration.
   * Each entry in the response represents the set of all security filters at a given version,
   * ordered from the most recent version to the oldest.
   * @param param The request object
   */
  public listSecurityFilterVersions(
    options?: Configuration,
  ): Promise<SecurityFilterVersionsResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityFilterVersions(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityFilterVersions(
            responseContext,
          );
        });
    });
  }

  /**
   * List the resources of a batch migration, including the input of each source rule and,
   * once translated, the proposed Cloud SIEM detection rule in `output`.
   * @param param The request object
   */
  public listSecurityMonitoringBatchMigrationResources(
    param: SecurityMonitoringApiListSecurityMonitoringBatchMigrationResourcesRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringBatchMigrationResourcesListResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringBatchMigrationResources(
        param.batchId,
        param.pageSize,
        param.pageNumber,
        param.filterQuery,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityMonitoringBatchMigrationResources(
            responseContext,
          );
        });
    });
  }

  /**
   * List the batch migrations of your organization. A batch migration groups detection
   * rules from another SIEM that the Datadog Detection Agent translates into Cloud SIEM
   * detection rules. To retrieve a single batch migration, filter by its ID with
   * `filter[query]=id:<batch_id>`. Poll this endpoint to follow the progress of a batch
   * migration through its `status` and `resourceStatusCounts`.
   * @param param The request object
   */
  public listSecurityMonitoringBatchMigrations(
    param: SecurityMonitoringApiListSecurityMonitoringBatchMigrationsRequest = {},
    options?: Configuration,
  ): Promise<SecurityMonitoringBatchMigrationsListResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringBatchMigrations(
        param.pageSize,
        param.pageNumber,
        param.filterQuery,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityMonitoringBatchMigrations(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the list of all dynamic severity rules (previously called critical assets).
   * @param param The request object
   */
  public listSecurityMonitoringCriticalAssets(
    options?: Configuration,
  ): Promise<SecurityMonitoringCriticalAssetsResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringCriticalAssets(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityMonitoringCriticalAssets(
            responseContext,
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
    options?: Configuration,
  ): Promise<SecurityMonitoringDatasetsListResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringDatasets(
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
          return this.responseProcessor.listSecurityMonitoringDatasets(
            responseContext,
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
    options?: Configuration,
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringHistsignals(
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
          return this.responseProcessor.listSecurityMonitoringHistsignals(
            responseContext,
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
    options?: Configuration,
  ): Promise<SecurityMonitoringIntegrationConfigsResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringIntegrationConfigs(
        param.filterIntegrationType,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityMonitoringIntegrationConfigs(
            responseContext,
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
    options?: Configuration,
  ): Promise<SecurityMonitoringListRulesResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringRules(
        param.pageSize,
        param.pageNumber,
        param.query,
        param.sort,
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
   * Get the list of all suppression rules.
   * @param param The request object
   */
  public listSecurityMonitoringSuppressions(
    param: SecurityMonitoringApiListSecurityMonitoringSuppressionsRequest = {},
    options?: Configuration,
  ): Promise<SecurityMonitoringPaginatedSuppressionsResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringSuppressions(
        param.query,
        param.sort,
        param.pageSize,
        param.pageNumber,
        options,
      );
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
   * Create a Cloud SIEM detection rule from the `output` of each selected `completed`
   * resource of a batch migration. Completed resources can be published while the rest of
   * the batch migration is still being translated. When `resourceIds` is omitted or empty,
   * every `completed` resource is published. Published rules are created disabled.
   *
   * Every requested resource must be publishable: `completed`, or left in `publishing` for
   * more than one minute after an uncertain result. Otherwise, the request returns
   * `409 Conflict` and nothing is published. Already published resources are not publishable.
   *
   * The response reports the outcome of each resource, and some resources can be published
   * while others fail. A `failed` result that contains a `ruleId` means the rule was created:
   * do not retry that resource. Publishing a rule with a `block_ip` or `block_user` action
   * requires the `appsec_protect_write` permission.
   * @param param The request object
   */
  public publishSecurityMonitoringBatchMigration(
    param: SecurityMonitoringApiPublishSecurityMonitoringBatchMigrationRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringBatchMigrationPublishResponse> {
    const requestContextPromise =
      this.requestFactory.publishSecurityMonitoringBatchMigration(
        param.batchId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.publishSecurityMonitoringBatchMigration(
            responseContext,
          );
        });
    });
  }

  /**
   * Restores a custom detection rule to a previously saved historical version.
   * Only custom rules can be restored. Default and partner rules return 400.
   * The restore creates a new version entry; it does not overwrite history.
   * @param param The request object
   */
  public restoreSecurityMonitoringRule(
    param: SecurityMonitoringApiRestoreSecurityMonitoringRuleRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringRuleResponse> {
    const requestContextPromise =
      this.requestFactory.restoreSecurityMonitoringRule(
        param.ruleId,
        param.version,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.restoreSecurityMonitoringRule(
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
   * Search hist signals.
   * @param param The request object
   */
  public searchSecurityMonitoringHistsignals(
    param: SecurityMonitoringApiSearchSecurityMonitoringHistsignalsRequest = {},
    options?: Configuration,
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const requestContextPromise =
      this.requestFactory.searchSecurityMonitoringHistsignals(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchSecurityMonitoringHistsignals(
            responseContext,
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

      param.body.page.cursor = cursorMetaPageAfter;
    }
  }

  /**
   * Send a notification preview to test that a notification rule's targets are properly configured.
   * @param param The request object
   */
  public sendSecurityMonitoringNotificationPreview(
    param: SecurityMonitoringApiSendSecurityMonitoringNotificationPreviewRequest,
    options?: Configuration,
  ): Promise<NotificationRulePreviewResponse> {
    const requestContextPromise =
      this.requestFactory.sendSecurityMonitoringNotificationPreview(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.sendSecurityMonitoringNotificationPreview(
            responseContext,
          );
        });
    });
  }

  /**
   * Start translating the `pending` resources of a `draft` batch migration into Cloud SIEM
   * detection rules. The batch migration moves to `in_progress`, and its resources are
   * translated asynchronously. Once no resource is `pending` or `in_progress`, the batch
   * migration moves to `completed`. Starting an `in_progress` batch migration again does not
   * queue duplicate work, so the request can be safely retried, including after a timeout or
   * a `5xx` error. Returns `409 Conflict` if the batch migration is `completed` or `canceled`.
   *
   * An organization can translate up to 2000 resources in total across all of its batch
   * migrations. Resources that were already processed count toward this limit even after
   * they are deleted, and `pending` resources of `in_progress` batch migrations reserve
   * capacity. Returns `409 Conflict` if starting the batch migration would exceed this limit.
   * To request a higher limit for your organization, contact
   * [Datadog support](https://docs.datadoghq.com/help/).
   * @param param The request object
   */
  public startSecurityMonitoringBatchMigration(
    param: SecurityMonitoringApiStartSecurityMonitoringBatchMigrationRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.startSecurityMonitoringBatchMigration(
        param.batchId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.startSecurityMonitoringBatchMigration(
            responseContext,
          );
        });
    });
  }

  /**
   * Start generating a proposed Cloud SIEM detection rule from a natural-language
   * description, or from an SPL or KQL rule. The proposal is based on your organization's
   * log sources, log fields, and existing detection rules. When logs from the matching
   * source are available, the proposed query is tested against your recent logs.
   *
   * The proposed rule is generated asynchronously. This endpoint returns a proposal `id`
   * with the status `pending`. To get the proposed rule, pass this `id` to the get-a-rule-proposal
   * endpoint and poll the endpoint until the status is `completed` or `failed`. A proposal
   * usually takes a few minutes, and up to 10 minutes.
   *
   * This endpoint does not create or modify any detection rules in Cloud SIEM. To translate
   * many rules at once, use batch migrations instead.
   * @param param The request object
   */
  public startSecurityMonitoringRuleProposal(
    param: SecurityMonitoringApiStartSecurityMonitoringRuleProposalRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringRuleProposalStartResponse> {
    const requestContextPromise =
      this.requestFactory.startSecurityMonitoringRuleProposal(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.startSecurityMonitoringRuleProposal(
            responseContext,
          );
        });
    });
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
   * Update the name, description, or tags of a batch migration, in any status. At least
   * one of these attributes must be provided. Omitted attributes are left unchanged, and
   * `tags` replaces the full list of tags.
   * @param param The request object
   */
  public updateSecurityMonitoringBatchMigration(
    param: SecurityMonitoringApiUpdateSecurityMonitoringBatchMigrationRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringBatchMigrationResponse> {
    const requestContextPromise =
      this.requestFactory.updateSecurityMonitoringBatchMigration(
        param.batchId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityMonitoringBatchMigration(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a resource of a batch migration. At least one of `name`, `description`,
   * `inputType`, or `input` must be provided. `name` and `description` can be updated at
   * any time. `inputType` and `input` can only be updated while the resource is `pending`;
   * otherwise, the request returns `409 Conflict`. The translated `output` cannot be edited.
   * @param param The request object
   */
  public updateSecurityMonitoringBatchMigrationResource(
    param: SecurityMonitoringApiUpdateSecurityMonitoringBatchMigrationResourceRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringBatchMigrationResourceResponse> {
    const requestContextPromise =
      this.requestFactory.updateSecurityMonitoringBatchMigrationResource(
        param.batchId,
        param.resourceId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityMonitoringBatchMigrationResource(
            responseContext,
          );
        });
    });
  }

  /**
   * Update a specific dynamic severity rule (previously called critical assets).
   * @param param The request object
   */
  public updateSecurityMonitoringCriticalAsset(
    param: SecurityMonitoringApiUpdateSecurityMonitoringCriticalAssetRequest,
    options?: Configuration,
  ): Promise<SecurityMonitoringCriticalAssetResponse> {
    const requestContextPromise =
      this.requestFactory.updateSecurityMonitoringCriticalAsset(
        param.criticalAssetId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityMonitoringCriticalAsset(
            responseContext,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.updateSecurityMonitoringDataset(
        param.datasetId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityMonitoringDataset(
            responseContext,
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
    options?: Configuration,
  ): Promise<SecurityMonitoringIntegrationConfigResponse> {
    const requestContextPromise =
      this.requestFactory.updateSecurityMonitoringIntegrationConfig(
        param.integrationConfigId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityMonitoringIntegrationConfig(
            responseContext,
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
   * Validate the credentials currently stored on an existing entity context sync configuration.
   * Returns a 200 status code if the credentials are still valid against the external entity source.
   * @param param The request object
   */
  public validateSecurityMonitoringIntegrationConfig(
    param: SecurityMonitoringApiValidateSecurityMonitoringIntegrationConfigRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.validateSecurityMonitoringIntegrationConfig(
        param.integrationConfigId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validateSecurityMonitoringIntegrationConfig(
            responseContext,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.validateSecurityMonitoringIntegrationCredentials(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validateSecurityMonitoringIntegrationCredentials(
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

  /**
   * Validate a suppression rule.
   * @param param The request object
   */
  public validateSecurityMonitoringSuppression(
    param: SecurityMonitoringApiValidateSecurityMonitoringSuppressionRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.validateSecurityMonitoringSuppression(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validateSecurityMonitoringSuppression(
            responseContext,
          );
        });
    });
  }
}
