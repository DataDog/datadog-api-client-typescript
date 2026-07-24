import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Advisory } from "./Advisory";
import { AnalysisEdit } from "./AnalysisEdit";
import { AnalysisFix } from "./AnalysisFix";
import { AnalysisPosition } from "./AnalysisPosition";
import { AnalysisRequest } from "./AnalysisRequest";
import { AnalysisRequestData } from "./AnalysisRequestData";
import { AnalysisRequestDataAttributes } from "./AnalysisRequestDataAttributes";
import { AnalysisRequestRule } from "./AnalysisRequestRule";
import { AnalysisResponse } from "./AnalysisResponse";
import { AnalysisResponseData } from "./AnalysisResponseData";
import { AnalysisResponseDataAttributes } from "./AnalysisResponseDataAttributes";
import { AnalysisRuleResponse } from "./AnalysisRuleResponse";
import { AnalysisViolation } from "./AnalysisViolation";
import { Asset } from "./Asset";
import { AssetAttributes } from "./AssetAttributes";
import { AssetOperatingSystem } from "./AssetOperatingSystem";
import { AssetRisks } from "./AssetRisks";
import { AssetVersion } from "./AssetVersion";
import { AssigneeRequest } from "./AssigneeRequest";
import { AssigneeRequestData } from "./AssigneeRequestData";
import { AssigneeRequestDataAttributes } from "./AssigneeRequestDataAttributes";
import { AssigneeRequestDataRelationships } from "./AssigneeRequestDataRelationships";
import { AssigneeResponse } from "./AssigneeResponse";
import { AssigneeResponseData } from "./AssigneeResponseData";
import { AssigneeResponseDataAttributes } from "./AssigneeResponseDataAttributes";
import { AssigneeResponseMeta } from "./AssigneeResponseMeta";
import { AssignmentResult } from "./AssignmentResult";
import { AttachCaseRequest } from "./AttachCaseRequest";
import { AttachCaseRequestData } from "./AttachCaseRequestData";
import { AttachCaseRequestDataRelationships } from "./AttachCaseRequestDataRelationships";
import { AttachJiraIssueRequest } from "./AttachJiraIssueRequest";
import { AttachJiraIssueRequestData } from "./AttachJiraIssueRequestData";
import { AttachJiraIssueRequestDataAttributes } from "./AttachJiraIssueRequestDataAttributes";
import { AttachJiraIssueRequestDataRelationships } from "./AttachJiraIssueRequestDataRelationships";
import { AttachLinearIssueRequest } from "./AttachLinearIssueRequest";
import { AttachLinearIssueRequestData } from "./AttachLinearIssueRequestData";
import { AttachLinearIssueRequestDataAttributes } from "./AttachLinearIssueRequestDataAttributes";
import { AttachLinearIssueRequestDataRelationships } from "./AttachLinearIssueRequestDataRelationships";
import { AttachServiceNowTicketRequest } from "./AttachServiceNowTicketRequest";
import { AttachServiceNowTicketRequestData } from "./AttachServiceNowTicketRequestData";
import { AttachServiceNowTicketRequestDataAttributes } from "./AttachServiceNowTicketRequestDataAttributes";
import { AttachServiceNowTicketRequestDataRelationships } from "./AttachServiceNowTicketRequestDataRelationships";
import { AutomationRuleCreatedBy } from "./AutomationRuleCreatedBy";
import { AutomationRuleModifiedBy } from "./AutomationRuleModifiedBy";
import { AutomationRuleScope } from "./AutomationRuleScope";
import { CVSS } from "./CVSS";
import { CalculatedField } from "./CalculatedField";
import { CaseInsightsItems } from "./CaseInsightsItems";
import { CaseManagementProject } from "./CaseManagementProject";
import { CaseManagementProjectData } from "./CaseManagementProjectData";
import { CloudConfigurationComplianceRuleOptions } from "./CloudConfigurationComplianceRuleOptions";
import { CloudConfigurationRegoRule } from "./CloudConfigurationRegoRule";
import { CloudConfigurationRuleCaseCreate } from "./CloudConfigurationRuleCaseCreate";
import { CloudConfigurationRuleComplianceSignalOptions } from "./CloudConfigurationRuleComplianceSignalOptions";
import { CloudConfigurationRuleCreatePayload } from "./CloudConfigurationRuleCreatePayload";
import { CloudConfigurationRuleOptions } from "./CloudConfigurationRuleOptions";
import { CloudConfigurationRulePayload } from "./CloudConfigurationRulePayload";
import { CodeLocation } from "./CodeLocation";
import { ConvertJobResultsToSignalsAttributes } from "./ConvertJobResultsToSignalsAttributes";
import { ConvertJobResultsToSignalsData } from "./ConvertJobResultsToSignalsData";
import { ConvertJobResultsToSignalsRequest } from "./ConvertJobResultsToSignalsRequest";
import { CreateCaseRequestArray } from "./CreateCaseRequestArray";
import { CreateCaseRequestData } from "./CreateCaseRequestData";
import { CreateCaseRequestDataAttributes } from "./CreateCaseRequestDataAttributes";
import { CreateCaseRequestDataRelationships } from "./CreateCaseRequestDataRelationships";
import { CreateCustomFrameworkRequest } from "./CreateCustomFrameworkRequest";
import { CreateCustomFrameworkResponse } from "./CreateCustomFrameworkResponse";
import { CreateJiraIssueRequestArray } from "./CreateJiraIssueRequestArray";
import { CreateJiraIssueRequestData } from "./CreateJiraIssueRequestData";
import { CreateJiraIssueRequestDataAttributes } from "./CreateJiraIssueRequestDataAttributes";
import { CreateJiraIssueRequestDataRelationships } from "./CreateJiraIssueRequestDataRelationships";
import { CreateLinearIssueRequestArray } from "./CreateLinearIssueRequestArray";
import { CreateLinearIssueRequestData } from "./CreateLinearIssueRequestData";
import { CreateLinearIssueRequestDataAttributes } from "./CreateLinearIssueRequestDataAttributes";
import { CreateLinearIssueRequestDataRelationships } from "./CreateLinearIssueRequestDataRelationships";
import { CreateNotificationRuleParameters } from "./CreateNotificationRuleParameters";
import { CreateNotificationRuleParametersData } from "./CreateNotificationRuleParametersData";
import { CreateNotificationRuleParametersDataAttributes } from "./CreateNotificationRuleParametersDataAttributes";
import { CreateServiceNowTicketRequestArray } from "./CreateServiceNowTicketRequestArray";
import { CreateServiceNowTicketRequestData } from "./CreateServiceNowTicketRequestData";
import { CreateServiceNowTicketRequestDataAttributes } from "./CreateServiceNowTicketRequestDataAttributes";
import { CreateServiceNowTicketRequestDataRelationships } from "./CreateServiceNowTicketRequestDataRelationships";
import { CustomFrameworkControl } from "./CustomFrameworkControl";
import { CustomFrameworkData } from "./CustomFrameworkData";
import { CustomFrameworkDataAttributes } from "./CustomFrameworkDataAttributes";
import { CustomFrameworkDataHandleAndVersion } from "./CustomFrameworkDataHandleAndVersion";
import { CustomFrameworkMetadata } from "./CustomFrameworkMetadata";
import { CustomFrameworkRequirement } from "./CustomFrameworkRequirement";
import { CustomFrameworkWithoutRequirements } from "./CustomFrameworkWithoutRequirements";
import { CycloneDXBom } from "./CycloneDXBom";
import { CycloneDXComponent } from "./CycloneDXComponent";
import { CycloneDXMetadata } from "./CycloneDXMetadata";
import { CycloneDXMetadataComponent } from "./CycloneDXMetadataComponent";
import { CycloneDXMetadataTools } from "./CycloneDXMetadataTools";
import { CycloneDXToolComponent } from "./CycloneDXToolComponent";
import { CycloneDXVulnerability } from "./CycloneDXVulnerability";
import { CycloneDXVulnerabilityAdvisory } from "./CycloneDXVulnerabilityAdvisory";
import { CycloneDXVulnerabilityAffects } from "./CycloneDXVulnerabilityAffects";
import { CycloneDXVulnerabilityAnalysis } from "./CycloneDXVulnerabilityAnalysis";
import { CycloneDXVulnerabilityRating } from "./CycloneDXVulnerabilityRating";
import { CycloneDXVulnerabilityReference } from "./CycloneDXVulnerabilityReference";
import { CycloneDXVulnerabilityReferenceSource } from "./CycloneDXVulnerabilityReferenceSource";
import { DefaultRulesetsPerLanguageData } from "./DefaultRulesetsPerLanguageData";
import { DefaultRulesetsPerLanguageDataAttributes } from "./DefaultRulesetsPerLanguageDataAttributes";
import { DefaultRulesetsPerLanguageResponse } from "./DefaultRulesetsPerLanguageResponse";
import { DeleteCustomFrameworkResponse } from "./DeleteCustomFrameworkResponse";
import { DependencyLocation } from "./DependencyLocation";
import { DetachCaseRequest } from "./DetachCaseRequest";
import { DetachCaseRequestData } from "./DetachCaseRequestData";
import { DetachCaseRequestDataRelationships } from "./DetachCaseRequestDataRelationships";
import { DetailedFinding } from "./DetailedFinding";
import { DetailedFindingAttributes } from "./DetailedFindingAttributes";
import { DueDatePerSeverityItem } from "./DueDatePerSeverityItem";
import { DueDateRuleAction } from "./DueDateRuleAction";
import { DueDateRuleAttributesCreate } from "./DueDateRuleAttributesCreate";
import { DueDateRuleAttributesResponse } from "./DueDateRuleAttributesResponse";
import { DueDateRuleCreateRequest } from "./DueDateRuleCreateRequest";
import { DueDateRuleDataCreate } from "./DueDateRuleDataCreate";
import { DueDateRuleDataResponse } from "./DueDateRuleDataResponse";
import { DueDateRuleReorderItem } from "./DueDateRuleReorderItem";
import { DueDateRuleReorderRequest } from "./DueDateRuleReorderRequest";
import { DueDateRuleResponse } from "./DueDateRuleResponse";
import { DueDateRuleUpdateRequest } from "./DueDateRuleUpdateRequest";
import { DueDateRulesResponse } from "./DueDateRulesResponse";
import { EPSS } from "./EPSS";
import { EntityContextEntity } from "./EntityContextEntity";
import { EntityContextEntityAttributes } from "./EntityContextEntityAttributes";
import { EntityContextPage } from "./EntityContextPage";
import { EntityContextResponse } from "./EntityContextResponse";
import { EntityContextResponseMeta } from "./EntityContextResponseMeta";
import { EntityContextRevision } from "./EntityContextRevision";
import { Finding } from "./Finding";
import { FindingAttributes } from "./FindingAttributes";
import { FindingCaseResponse } from "./FindingCaseResponse";
import { FindingCaseResponseArray } from "./FindingCaseResponseArray";
import { FindingCaseResponseData } from "./FindingCaseResponseData";
import { FindingCaseResponseDataAttributes } from "./FindingCaseResponseDataAttributes";
import { FindingCaseResponseDataRelationships } from "./FindingCaseResponseDataRelationships";
import { FindingData } from "./FindingData";
import { FindingJiraIssue } from "./FindingJiraIssue";
import { FindingJiraIssueResult } from "./FindingJiraIssueResult";
import { FindingLinearIssue } from "./FindingLinearIssue";
import { FindingLinearIssueResult } from "./FindingLinearIssueResult";
import { FindingMute } from "./FindingMute";
import { FindingRule } from "./FindingRule";
import { FindingServiceNowTicket } from "./FindingServiceNowTicket";
import { FindingServiceNowTicketResult } from "./FindingServiceNowTicketResult";
import { Findings } from "./Findings";
import { FrameworkHandleAndVersionResponseData } from "./FrameworkHandleAndVersionResponseData";
import { FullCustomFrameworkData } from "./FullCustomFrameworkData";
import { FullCustomFrameworkDataAttributes } from "./FullCustomFrameworkDataAttributes";
import { GetAstRequest } from "./GetAstRequest";
import { GetAstRequestData } from "./GetAstRequestData";
import { GetAstRequestDataAttributes } from "./GetAstRequestDataAttributes";
import { GetAstResponse } from "./GetAstResponse";
import { GetAstResponseData } from "./GetAstResponseData";
import { GetAstResponseDataAttributes } from "./GetAstResponseDataAttributes";
import { GetCustomFrameworkResponse } from "./GetCustomFrameworkResponse";
import { GetFindingResponse } from "./GetFindingResponse";
import { GetIoCIndicatorResponse } from "./GetIoCIndicatorResponse";
import { GetIoCIndicatorResponseAttributes } from "./GetIoCIndicatorResponseAttributes";
import { GetIoCIndicatorResponseData } from "./GetIoCIndicatorResponseData";
import { GetMultipleRulesetsRequest } from "./GetMultipleRulesetsRequest";
import { GetMultipleRulesetsRequestData } from "./GetMultipleRulesetsRequestData";
import { GetMultipleRulesetsRequestDataAttributes } from "./GetMultipleRulesetsRequestDataAttributes";
import { GetMultipleRulesetsResponse } from "./GetMultipleRulesetsResponse";
import { GetMultipleRulesetsResponseData } from "./GetMultipleRulesetsResponseData";
import { GetMultipleRulesetsResponseDataAttributes } from "./GetMultipleRulesetsResponseDataAttributes";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItems";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsData } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsData";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems";
import { GetResourceEvaluationFiltersResponse } from "./GetResourceEvaluationFiltersResponse";
import { GetResourceEvaluationFiltersResponseData } from "./GetResourceEvaluationFiltersResponseData";
import { GetRuleVersionHistoryData } from "./GetRuleVersionHistoryData";
import { GetRuleVersionHistoryResponse } from "./GetRuleVersionHistoryResponse";
import { GetSBOMResponse } from "./GetSBOMResponse";
import { GetSuppressionVersionHistoryData } from "./GetSuppressionVersionHistoryData";
import { GetSuppressionVersionHistoryResponse } from "./GetSuppressionVersionHistoryResponse";
import { HistoricalJobListMeta } from "./HistoricalJobListMeta";
import { HistoricalJobOptions } from "./HistoricalJobOptions";
import { HistoricalJobQuery } from "./HistoricalJobQuery";
import { HistoricalJobResponse } from "./HistoricalJobResponse";
import { HistoricalJobResponseAttributes } from "./HistoricalJobResponseAttributes";
import { HistoricalJobResponseData } from "./HistoricalJobResponseData";
import { IoCExplorerListResponse } from "./IoCExplorerListResponse";
import { IoCExplorerListResponseAttributes } from "./IoCExplorerListResponseAttributes";
import { IoCExplorerListResponseData } from "./IoCExplorerListResponseData";
import { IoCExplorerListResponseMetadata } from "./IoCExplorerListResponseMetadata";
import { IoCExplorerListResponsePaging } from "./IoCExplorerListResponsePaging";
import { IoCGeoLocation } from "./IoCGeoLocation";
import { IoCIndicator } from "./IoCIndicator";
import { IoCIndicatorDetailed } from "./IoCIndicatorDetailed";
import { IoCSignalSeverityCount } from "./IoCSignalSeverityCount";
import { IoCSource } from "./IoCSource";
import { IoCTriageEvent } from "./IoCTriageEvent";
import { IoCTriageWriteRequest } from "./IoCTriageWriteRequest";
import { IoCTriageWriteRequestAttributes } from "./IoCTriageWriteRequestAttributes";
import { IoCTriageWriteRequestData } from "./IoCTriageWriteRequestData";
import { IoCTriageWriteResponse } from "./IoCTriageWriteResponse";
import { IoCTriageWriteResponseAttributes } from "./IoCTriageWriteResponseAttributes";
import { IoCTriageWriteResponseData } from "./IoCTriageWriteResponseData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { JobCreateResponse } from "./JobCreateResponse";
import { JobCreateResponseData } from "./JobCreateResponseData";
import { JobDefinition } from "./JobDefinition";
import { JobDefinitionFromRule } from "./JobDefinitionFromRule";
import { Library } from "./Library";
import { Links } from "./Links";
import { ListAssetsSBOMsResponse } from "./ListAssetsSBOMsResponse";
import { ListFindingsMeta } from "./ListFindingsMeta";
import { ListFindingsPage } from "./ListFindingsPage";
import { ListFindingsResponse } from "./ListFindingsResponse";
import { ListHistoricalJobsResponse } from "./ListHistoricalJobsResponse";
import { ListSecurityFindingsResponse } from "./ListSecurityFindingsResponse";
import { ListVulnerabilitiesResponse } from "./ListVulnerabilitiesResponse";
import { ListVulnerableAssetsResponse } from "./ListVulnerableAssetsResponse";
import { Metadata } from "./Metadata";
import { MuteFindingsMuteAttributes } from "./MuteFindingsMuteAttributes";
import { MuteFindingsRequest } from "./MuteFindingsRequest";
import { MuteFindingsRequestData } from "./MuteFindingsRequestData";
import { MuteFindingsRequestDataAttributes } from "./MuteFindingsRequestDataAttributes";
import { MuteFindingsRequestDataRelationships } from "./MuteFindingsRequestDataRelationships";
import { MuteFindingsResponse } from "./MuteFindingsResponse";
import { MuteFindingsResponseData } from "./MuteFindingsResponseData";
import { MuteRuleAction } from "./MuteRuleAction";
import { MuteRuleAttributesCreate } from "./MuteRuleAttributesCreate";
import { MuteRuleAttributesResponse } from "./MuteRuleAttributesResponse";
import { MuteRuleCreateRequest } from "./MuteRuleCreateRequest";
import { MuteRuleDataCreate } from "./MuteRuleDataCreate";
import { MuteRuleDataResponse } from "./MuteRuleDataResponse";
import { MuteRuleReorderItem } from "./MuteRuleReorderItem";
import { MuteRuleReorderRequest } from "./MuteRuleReorderRequest";
import { MuteRuleResponse } from "./MuteRuleResponse";
import { MuteRuleUpdateRequest } from "./MuteRuleUpdateRequest";
import { MuteRulesResponse } from "./MuteRulesResponse";
import { NodeTypesResponse } from "./NodeTypesResponse";
import { NodeTypesResponseData } from "./NodeTypesResponseData";
import { NodeTypesResponseDataAttributes } from "./NodeTypesResponseDataAttributes";
import { NotificationRule } from "./NotificationRule";
import { NotificationRuleAttributes } from "./NotificationRuleAttributes";
import { NotificationRulePreviewResponse } from "./NotificationRulePreviewResponse";
import { NotificationRulePreviewResponseAttributes } from "./NotificationRulePreviewResponseAttributes";
import { NotificationRulePreviewResponseData } from "./NotificationRulePreviewResponseData";
import { NotificationRulePreviewResult } from "./NotificationRulePreviewResult";
import { NotificationRuleResponse } from "./NotificationRuleResponse";
import { NotificationRuleRouting } from "./NotificationRuleRouting";
import { NotificationRulesListResponse } from "./NotificationRulesListResponse";
import { Pagination } from "./Pagination";
import { PatchNotificationRuleParameters } from "./PatchNotificationRuleParameters";
import { PatchNotificationRuleParametersData } from "./PatchNotificationRuleParametersData";
import { PatchNotificationRuleParametersDataAttributes } from "./PatchNotificationRuleParametersDataAttributes";
import { RelationshipToUser } from "./RelationshipToUser";
import { RelationshipToUserData } from "./RelationshipToUserData";
import { Remediation } from "./Remediation";
import { ResourceFilterAttributes } from "./ResourceFilterAttributes";
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { RuleUser } from "./RuleUser";
import { RuleVersionHistory } from "./RuleVersionHistory";
import { RuleVersions } from "./RuleVersions";
import { RunHistoricalJobRequest } from "./RunHistoricalJobRequest";
import { RunHistoricalJobRequestAttributes } from "./RunHistoricalJobRequestAttributes";
import { RunHistoricalJobRequestData } from "./RunHistoricalJobRequestData";
import { SBOM } from "./SBOM";
import { SBOMAttributes } from "./SBOMAttributes";
import { SBOMComponent } from "./SBOMComponent";
import { SBOMComponentDependency } from "./SBOMComponentDependency";
import { SBOMComponentLicense } from "./SBOMComponentLicense";
import { SBOMComponentLicenseLicense } from "./SBOMComponentLicenseLicense";
import { SBOMComponentProperty } from "./SBOMComponentProperty";
import { SBOMComponentSupplier } from "./SBOMComponentSupplier";
import { SBOMMetadata } from "./SBOMMetadata";
import { SBOMMetadataAuthor } from "./SBOMMetadataAuthor";
import { SBOMMetadataComponent } from "./SBOMMetadataComponent";
import { SampleLogGenerationBulkSubscriptionAttributes } from "./SampleLogGenerationBulkSubscriptionAttributes";
import { SampleLogGenerationBulkSubscriptionData } from "./SampleLogGenerationBulkSubscriptionData";
import { SampleLogGenerationBulkSubscriptionItemMeta } from "./SampleLogGenerationBulkSubscriptionItemMeta";
import { SampleLogGenerationBulkSubscriptionRequest } from "./SampleLogGenerationBulkSubscriptionRequest";
import { SampleLogGenerationBulkSubscriptionResponse } from "./SampleLogGenerationBulkSubscriptionResponse";
import { SampleLogGenerationBulkSubscriptionResultItem } from "./SampleLogGenerationBulkSubscriptionResultItem";
import { SampleLogGenerationSubscriptionAttributes } from "./SampleLogGenerationSubscriptionAttributes";
import { SampleLogGenerationSubscriptionCreateAttributes } from "./SampleLogGenerationSubscriptionCreateAttributes";
import { SampleLogGenerationSubscriptionCreateData } from "./SampleLogGenerationSubscriptionCreateData";
import { SampleLogGenerationSubscriptionCreateRequest } from "./SampleLogGenerationSubscriptionCreateRequest";
import { SampleLogGenerationSubscriptionData } from "./SampleLogGenerationSubscriptionData";
import { SampleLogGenerationSubscriptionResponse } from "./SampleLogGenerationSubscriptionResponse";
import { SampleLogGenerationSubscriptionsResponse } from "./SampleLogGenerationSubscriptionsResponse";
import { SampleLogGenerationSubscriptionsResponseMeta } from "./SampleLogGenerationSubscriptionsResponseMeta";
import { SastRulesetData } from "./SastRulesetData";
import { SastRulesetDataAttributes } from "./SastRulesetDataAttributes";
import { SastRulesetResponse } from "./SastRulesetResponse";
import { SastRulesetsResponse } from "./SastRulesetsResponse";
import { ScannedAssetMetadata } from "./ScannedAssetMetadata";
import { ScannedAssetMetadataAsset } from "./ScannedAssetMetadataAsset";
import { ScannedAssetMetadataAttributes } from "./ScannedAssetMetadataAttributes";
import { ScannedAssetMetadataLastSuccess } from "./ScannedAssetMetadataLastSuccess";
import { ScannedAssetsMetadata } from "./ScannedAssetsMetadata";
import { SecretRuleArray } from "./SecretRuleArray";
import { SecretRuleData } from "./SecretRuleData";
import { SecretRuleDataAttributes } from "./SecretRuleDataAttributes";
import { SecretRuleDataAttributesMatchValidation } from "./SecretRuleDataAttributesMatchValidation";
import { SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems } from "./SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems";
import { SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems } from "./SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems";
import { SecurityAutomationRulesLinks } from "./SecurityAutomationRulesLinks";
import { SecurityAutomationRulesMeta } from "./SecurityAutomationRulesMeta";
import { SecurityAutomationRulesPageInfo } from "./SecurityAutomationRulesPageInfo";
import { SecurityFilter } from "./SecurityFilter";
import { SecurityFilterAttributes } from "./SecurityFilterAttributes";
import { SecurityFilterCreateAttributes } from "./SecurityFilterCreateAttributes";
import { SecurityFilterCreateData } from "./SecurityFilterCreateData";
import { SecurityFilterCreateRequest } from "./SecurityFilterCreateRequest";
import { SecurityFilterExclusionFilter } from "./SecurityFilterExclusionFilter";
import { SecurityFilterExclusionFilterResponse } from "./SecurityFilterExclusionFilterResponse";
import { SecurityFilterMeta } from "./SecurityFilterMeta";
import { SecurityFilterResponse } from "./SecurityFilterResponse";
import { SecurityFilterUpdateAttributes } from "./SecurityFilterUpdateAttributes";
import { SecurityFilterUpdateData } from "./SecurityFilterUpdateData";
import { SecurityFilterUpdateRequest } from "./SecurityFilterUpdateRequest";
import { SecurityFilterVersion } from "./SecurityFilterVersion";
import { SecurityFilterVersionAttributes } from "./SecurityFilterVersionAttributes";
import { SecurityFilterVersionEntry } from "./SecurityFilterVersionEntry";
import { SecurityFilterVersionsResponse } from "./SecurityFilterVersionsResponse";
import { SecurityFiltersResponse } from "./SecurityFiltersResponse";
import { SecurityFindingsAttributes } from "./SecurityFindingsAttributes";
import { SecurityFindingsData } from "./SecurityFindingsData";
import { SecurityFindingsLinks } from "./SecurityFindingsLinks";
import { SecurityFindingsMeta } from "./SecurityFindingsMeta";
import { SecurityFindingsPage } from "./SecurityFindingsPage";
import { SecurityFindingsSearchRequest } from "./SecurityFindingsSearchRequest";
import { SecurityFindingsSearchRequestData } from "./SecurityFindingsSearchRequestData";
import { SecurityFindingsSearchRequestDataAttributes } from "./SecurityFindingsSearchRequestDataAttributes";
import { SecurityFindingsSearchRequestPage } from "./SecurityFindingsSearchRequestPage";
import { SecurityMonitoringAzureAppRegistration } from "./SecurityMonitoringAzureAppRegistration";
import { SecurityMonitoringContentPackAppSecDetails } from "./SecurityMonitoringContentPackAppSecDetails";
import { SecurityMonitoringContentPackAuditDetails } from "./SecurityMonitoringContentPackAuditDetails";
import { SecurityMonitoringContentPackEntityDetails } from "./SecurityMonitoringContentPackEntityDetails";
import { SecurityMonitoringContentPackLogsDetails } from "./SecurityMonitoringContentPackLogsDetails";
import { SecurityMonitoringContentPackOnboardingDetails } from "./SecurityMonitoringContentPackOnboardingDetails";
import { SecurityMonitoringContentPackStateAttributes } from "./SecurityMonitoringContentPackStateAttributes";
import { SecurityMonitoringContentPackStateData } from "./SecurityMonitoringContentPackStateData";
import { SecurityMonitoringContentPackStateMeta } from "./SecurityMonitoringContentPackStateMeta";
import { SecurityMonitoringContentPackStatesResponse } from "./SecurityMonitoringContentPackStatesResponse";
import { SecurityMonitoringContentPackThreatIntelDetails } from "./SecurityMonitoringContentPackThreatIntelDetails";
import { SecurityMonitoringContentPackVulnerabilityDetails } from "./SecurityMonitoringContentPackVulnerabilityDetails";
import { SecurityMonitoringCriticalAsset } from "./SecurityMonitoringCriticalAsset";
import { SecurityMonitoringCriticalAssetAttributes } from "./SecurityMonitoringCriticalAssetAttributes";
import { SecurityMonitoringCriticalAssetCreateAttributes } from "./SecurityMonitoringCriticalAssetCreateAttributes";
import { SecurityMonitoringCriticalAssetCreateData } from "./SecurityMonitoringCriticalAssetCreateData";
import { SecurityMonitoringCriticalAssetCreateRequest } from "./SecurityMonitoringCriticalAssetCreateRequest";
import { SecurityMonitoringCriticalAssetResponse } from "./SecurityMonitoringCriticalAssetResponse";
import { SecurityMonitoringCriticalAssetUpdateAttributes } from "./SecurityMonitoringCriticalAssetUpdateAttributes";
import { SecurityMonitoringCriticalAssetUpdateData } from "./SecurityMonitoringCriticalAssetUpdateData";
import { SecurityMonitoringCriticalAssetUpdateRequest } from "./SecurityMonitoringCriticalAssetUpdateRequest";
import { SecurityMonitoringCriticalAssetsResponse } from "./SecurityMonitoringCriticalAssetsResponse";
import { SecurityMonitoringCrowdStrikeIntegrationConfigCreateAttributes } from "./SecurityMonitoringCrowdStrikeIntegrationConfigCreateAttributes";
import { SecurityMonitoringCrowdStrikeIntegrationConfigUpdateAttributes } from "./SecurityMonitoringCrowdStrikeIntegrationConfigUpdateAttributes";
import { SecurityMonitoringCrowdStrikeIntegrationCredentialsValidateAttributes } from "./SecurityMonitoringCrowdStrikeIntegrationCredentialsValidateAttributes";
import { SecurityMonitoringDatasetAttributesRequest } from "./SecurityMonitoringDatasetAttributesRequest";
import { SecurityMonitoringDatasetAttributesResponse } from "./SecurityMonitoringDatasetAttributesResponse";
import { SecurityMonitoringDatasetColumn } from "./SecurityMonitoringDatasetColumn";
import { SecurityMonitoringDatasetCreateData } from "./SecurityMonitoringDatasetCreateData";
import { SecurityMonitoringDatasetCreateRequest } from "./SecurityMonitoringDatasetCreateRequest";
import { SecurityMonitoringDatasetCreateResponse } from "./SecurityMonitoringDatasetCreateResponse";
import { SecurityMonitoringDatasetCreateResponseData } from "./SecurityMonitoringDatasetCreateResponseData";
import { SecurityMonitoringDatasetData } from "./SecurityMonitoringDatasetData";
import { SecurityMonitoringDatasetDefinition } from "./SecurityMonitoringDatasetDefinition";
import { SecurityMonitoringDatasetDependenciesRequest } from "./SecurityMonitoringDatasetDependenciesRequest";
import { SecurityMonitoringDatasetDependenciesRequestAttributes } from "./SecurityMonitoringDatasetDependenciesRequestAttributes";
import { SecurityMonitoringDatasetDependenciesRequestData } from "./SecurityMonitoringDatasetDependenciesRequestData";
import { SecurityMonitoringDatasetDependenciesResponse } from "./SecurityMonitoringDatasetDependenciesResponse";
import { SecurityMonitoringDatasetDependentsAttributes } from "./SecurityMonitoringDatasetDependentsAttributes";
import { SecurityMonitoringDatasetDependentsData } from "./SecurityMonitoringDatasetDependentsData";
import { SecurityMonitoringDatasetResponse } from "./SecurityMonitoringDatasetResponse";
import { SecurityMonitoringDatasetSearch } from "./SecurityMonitoringDatasetSearch";
import { SecurityMonitoringDatasetTimeWindow } from "./SecurityMonitoringDatasetTimeWindow";
import { SecurityMonitoringDatasetUpdateData } from "./SecurityMonitoringDatasetUpdateData";
import { SecurityMonitoringDatasetUpdateRequest } from "./SecurityMonitoringDatasetUpdateRequest";
import { SecurityMonitoringDatasetVersionEntry } from "./SecurityMonitoringDatasetVersionEntry";
import { SecurityMonitoringDatasetVersionFieldChange } from "./SecurityMonitoringDatasetVersionFieldChange";
import { SecurityMonitoringDatasetVersionHistoryAttributes } from "./SecurityMonitoringDatasetVersionHistoryAttributes";
import { SecurityMonitoringDatasetVersionHistoryData } from "./SecurityMonitoringDatasetVersionHistoryData";
import { SecurityMonitoringDatasetVersionHistoryResponse } from "./SecurityMonitoringDatasetVersionHistoryResponse";
import { SecurityMonitoringDatasetsListMeta } from "./SecurityMonitoringDatasetsListMeta";
import { SecurityMonitoringDatasetsListResponse } from "./SecurityMonitoringDatasetsListResponse";
import { SecurityMonitoringEntraIdAzureAppRegistrationsAttributes } from "./SecurityMonitoringEntraIdAzureAppRegistrationsAttributes";
import { SecurityMonitoringEntraIdAzureAppRegistrationsData } from "./SecurityMonitoringEntraIdAzureAppRegistrationsData";
import { SecurityMonitoringEntraIdAzureAppRegistrationsResponse } from "./SecurityMonitoringEntraIdAzureAppRegistrationsResponse";
import { SecurityMonitoringEntraIdIntegrationConfigCreateAttributes } from "./SecurityMonitoringEntraIdIntegrationConfigCreateAttributes";
import { SecurityMonitoringEntraIdIntegrationConfigUpdateAttributes } from "./SecurityMonitoringEntraIdIntegrationConfigUpdateAttributes";
import { SecurityMonitoringEntraIdIntegrationCredentialsValidateAttributes } from "./SecurityMonitoringEntraIdIntegrationCredentialsValidateAttributes";
import { SecurityMonitoringFilter } from "./SecurityMonitoringFilter";
import { SecurityMonitoringGoogleWorkspaceIntegrationConfigCreateAttributes } from "./SecurityMonitoringGoogleWorkspaceIntegrationConfigCreateAttributes";
import { SecurityMonitoringGoogleWorkspaceIntegrationConfigUpdateAttributes } from "./SecurityMonitoringGoogleWorkspaceIntegrationConfigUpdateAttributes";
import { SecurityMonitoringGoogleWorkspaceIntegrationCredentialsValidateAttributes } from "./SecurityMonitoringGoogleWorkspaceIntegrationCredentialsValidateAttributes";
import { SecurityMonitoringIntegrationActivateAttributes } from "./SecurityMonitoringIntegrationActivateAttributes";
import { SecurityMonitoringIntegrationActivateData } from "./SecurityMonitoringIntegrationActivateData";
import { SecurityMonitoringIntegrationActivateRequest } from "./SecurityMonitoringIntegrationActivateRequest";
import { SecurityMonitoringIntegrationConfigAttributes } from "./SecurityMonitoringIntegrationConfigAttributes";
import { SecurityMonitoringIntegrationConfigCreateData } from "./SecurityMonitoringIntegrationConfigCreateData";
import { SecurityMonitoringIntegrationConfigCreateRequest } from "./SecurityMonitoringIntegrationConfigCreateRequest";
import { SecurityMonitoringIntegrationConfigCrowdStrikeSecrets } from "./SecurityMonitoringIntegrationConfigCrowdStrikeSecrets";
import { SecurityMonitoringIntegrationConfigData } from "./SecurityMonitoringIntegrationConfigData";
import { SecurityMonitoringIntegrationConfigGoogleWorkspaceSecrets } from "./SecurityMonitoringIntegrationConfigGoogleWorkspaceSecrets";
import { SecurityMonitoringIntegrationConfigGoogleWorkspaceServiceAccount } from "./SecurityMonitoringIntegrationConfigGoogleWorkspaceServiceAccount";
import { SecurityMonitoringIntegrationConfigOktaSecrets } from "./SecurityMonitoringIntegrationConfigOktaSecrets";
import { SecurityMonitoringIntegrationConfigResponse } from "./SecurityMonitoringIntegrationConfigResponse";
import { SecurityMonitoringIntegrationConfigSentinelOneSecrets } from "./SecurityMonitoringIntegrationConfigSentinelOneSecrets";
import { SecurityMonitoringIntegrationConfigUpdateData } from "./SecurityMonitoringIntegrationConfigUpdateData";
import { SecurityMonitoringIntegrationConfigUpdateRequest } from "./SecurityMonitoringIntegrationConfigUpdateRequest";
import { SecurityMonitoringIntegrationConfigsResponse } from "./SecurityMonitoringIntegrationConfigsResponse";
import { SecurityMonitoringIntegrationCredentialsValidateData } from "./SecurityMonitoringIntegrationCredentialsValidateData";
import { SecurityMonitoringIntegrationCredentialsValidateRequest } from "./SecurityMonitoringIntegrationCredentialsValidateRequest";
import { SecurityMonitoringListRulesResponse } from "./SecurityMonitoringListRulesResponse";
import { SecurityMonitoringOktaIntegrationConfigCreateAttributes } from "./SecurityMonitoringOktaIntegrationConfigCreateAttributes";
import { SecurityMonitoringOktaIntegrationConfigUpdateAttributes } from "./SecurityMonitoringOktaIntegrationConfigUpdateAttributes";
import { SecurityMonitoringOktaIntegrationCredentialsValidateAttributes } from "./SecurityMonitoringOktaIntegrationCredentialsValidateAttributes";
import { SecurityMonitoringPaginatedSuppressionsResponse } from "./SecurityMonitoringPaginatedSuppressionsResponse";
import { SecurityMonitoringReferenceTable } from "./SecurityMonitoringReferenceTable";
import { SecurityMonitoringRuleAnomalyDetectionOptions } from "./SecurityMonitoringRuleAnomalyDetectionOptions";
import { SecurityMonitoringRuleBulkDeleteAttributes } from "./SecurityMonitoringRuleBulkDeleteAttributes";
import { SecurityMonitoringRuleBulkDeleteData } from "./SecurityMonitoringRuleBulkDeleteData";
import { SecurityMonitoringRuleBulkDeletePayload } from "./SecurityMonitoringRuleBulkDeletePayload";
import { SecurityMonitoringRuleBulkDeleteResponse } from "./SecurityMonitoringRuleBulkDeleteResponse";
import { SecurityMonitoringRuleBulkExportAttributes } from "./SecurityMonitoringRuleBulkExportAttributes";
import { SecurityMonitoringRuleBulkExportData } from "./SecurityMonitoringRuleBulkExportData";
import { SecurityMonitoringRuleBulkExportPayload } from "./SecurityMonitoringRuleBulkExportPayload";
import { SecurityMonitoringRuleCase } from "./SecurityMonitoringRuleCase";
import { SecurityMonitoringRuleCaseAction } from "./SecurityMonitoringRuleCaseAction";
import { SecurityMonitoringRuleCaseActionOptions } from "./SecurityMonitoringRuleCaseActionOptions";
import { SecurityMonitoringRuleCaseCreate } from "./SecurityMonitoringRuleCaseCreate";
import { SecurityMonitoringRuleConvertBulkAttributes } from "./SecurityMonitoringRuleConvertBulkAttributes";
import { SecurityMonitoringRuleConvertBulkData } from "./SecurityMonitoringRuleConvertBulkData";
import { SecurityMonitoringRuleConvertBulkPayload } from "./SecurityMonitoringRuleConvertBulkPayload";
import { SecurityMonitoringRuleConvertResponse } from "./SecurityMonitoringRuleConvertResponse";
import { SecurityMonitoringRuleImpossibleTravelOptions } from "./SecurityMonitoringRuleImpossibleTravelOptions";
import { SecurityMonitoringRuleNewValueOptions } from "./SecurityMonitoringRuleNewValueOptions";
import { SecurityMonitoringRuleOptions } from "./SecurityMonitoringRuleOptions";
import { SecurityMonitoringRuleQueryPayload } from "./SecurityMonitoringRuleQueryPayload";
import { SecurityMonitoringRuleQueryPayloadData } from "./SecurityMonitoringRuleQueryPayloadData";
import { SecurityMonitoringRuleSequenceDetectionOptions } from "./SecurityMonitoringRuleSequenceDetectionOptions";
import { SecurityMonitoringRuleSequenceDetectionStep } from "./SecurityMonitoringRuleSequenceDetectionStep";
import { SecurityMonitoringRuleSequenceDetectionStepTransition } from "./SecurityMonitoringRuleSequenceDetectionStepTransition";
import { SecurityMonitoringRuleTestRequest } from "./SecurityMonitoringRuleTestRequest";
import { SecurityMonitoringRuleTestResponse } from "./SecurityMonitoringRuleTestResponse";
import { SecurityMonitoringRuleThirdPartyOptions } from "./SecurityMonitoringRuleThirdPartyOptions";
import { SecurityMonitoringRuleUpdatePayload } from "./SecurityMonitoringRuleUpdatePayload";
import { SecurityMonitoringSchedulingOptions } from "./SecurityMonitoringSchedulingOptions";
import { SecurityMonitoringSentinelOneIntegrationConfigCreateAttributes } from "./SecurityMonitoringSentinelOneIntegrationConfigCreateAttributes";
import { SecurityMonitoringSentinelOneIntegrationConfigUpdateAttributes } from "./SecurityMonitoringSentinelOneIntegrationConfigUpdateAttributes";
import { SecurityMonitoringSentinelOneIntegrationCredentialsValidateAttributes } from "./SecurityMonitoringSentinelOneIntegrationCredentialsValidateAttributes";
import { SecurityMonitoringSignal } from "./SecurityMonitoringSignal";
import { SecurityMonitoringSignalAssigneeUpdateAttributes } from "./SecurityMonitoringSignalAssigneeUpdateAttributes";
import { SecurityMonitoringSignalAssigneeUpdateData } from "./SecurityMonitoringSignalAssigneeUpdateData";
import { SecurityMonitoringSignalAssigneeUpdateRequest } from "./SecurityMonitoringSignalAssigneeUpdateRequest";
import { SecurityMonitoringSignalAttributes } from "./SecurityMonitoringSignalAttributes";
import { SecurityMonitoringSignalIncidentsUpdateAttributes } from "./SecurityMonitoringSignalIncidentsUpdateAttributes";
import { SecurityMonitoringSignalIncidentsUpdateData } from "./SecurityMonitoringSignalIncidentsUpdateData";
import { SecurityMonitoringSignalIncidentsUpdateRequest } from "./SecurityMonitoringSignalIncidentsUpdateRequest";
import { SecurityMonitoringSignalListRequest } from "./SecurityMonitoringSignalListRequest";
import { SecurityMonitoringSignalListRequestFilter } from "./SecurityMonitoringSignalListRequestFilter";
import { SecurityMonitoringSignalListRequestPage } from "./SecurityMonitoringSignalListRequestPage";
import { SecurityMonitoringSignalResponse } from "./SecurityMonitoringSignalResponse";
import { SecurityMonitoringSignalRuleCreatePayload } from "./SecurityMonitoringSignalRuleCreatePayload";
import { SecurityMonitoringSignalRulePayload } from "./SecurityMonitoringSignalRulePayload";
import { SecurityMonitoringSignalRuleQuery } from "./SecurityMonitoringSignalRuleQuery";
import { SecurityMonitoringSignalRuleResponse } from "./SecurityMonitoringSignalRuleResponse";
import { SecurityMonitoringSignalRuleResponseQuery } from "./SecurityMonitoringSignalRuleResponseQuery";
import { SecurityMonitoringSignalStateUpdateAttributes } from "./SecurityMonitoringSignalStateUpdateAttributes";
import { SecurityMonitoringSignalStateUpdateData } from "./SecurityMonitoringSignalStateUpdateData";
import { SecurityMonitoringSignalStateUpdateRequest } from "./SecurityMonitoringSignalStateUpdateRequest";
import { SecurityMonitoringSignalSuggestedAction } from "./SecurityMonitoringSignalSuggestedAction";
import { SecurityMonitoringSignalSuggestedActionAttributes } from "./SecurityMonitoringSignalSuggestedActionAttributes";
import { SecurityMonitoringSignalSuggestedActionsResponse } from "./SecurityMonitoringSignalSuggestedActionsResponse";
import { SecurityMonitoringSignalTriageAttributes } from "./SecurityMonitoringSignalTriageAttributes";
import { SecurityMonitoringSignalTriageUpdateData } from "./SecurityMonitoringSignalTriageUpdateData";
import { SecurityMonitoringSignalTriageUpdateResponse } from "./SecurityMonitoringSignalTriageUpdateResponse";
import { SecurityMonitoringSignalUpdateAttributes } from "./SecurityMonitoringSignalUpdateAttributes";
import { SecurityMonitoringSignalUpdateData } from "./SecurityMonitoringSignalUpdateData";
import { SecurityMonitoringSignalUpdateRequest } from "./SecurityMonitoringSignalUpdateRequest";
import { SecurityMonitoringSignalsBulkAssigneeUpdateAttributes } from "./SecurityMonitoringSignalsBulkAssigneeUpdateAttributes";
import { SecurityMonitoringSignalsBulkAssigneeUpdateData } from "./SecurityMonitoringSignalsBulkAssigneeUpdateData";
import { SecurityMonitoringSignalsBulkAssigneeUpdateRequest } from "./SecurityMonitoringSignalsBulkAssigneeUpdateRequest";
import { SecurityMonitoringSignalsBulkStateUpdateData } from "./SecurityMonitoringSignalsBulkStateUpdateData";
import { SecurityMonitoringSignalsBulkStateUpdateRequest } from "./SecurityMonitoringSignalsBulkStateUpdateRequest";
import { SecurityMonitoringSignalsBulkTriageEvent } from "./SecurityMonitoringSignalsBulkTriageEvent";
import { SecurityMonitoringSignalsBulkTriageEventAttributes } from "./SecurityMonitoringSignalsBulkTriageEventAttributes";
import { SecurityMonitoringSignalsBulkTriageUpdateResponse } from "./SecurityMonitoringSignalsBulkTriageUpdateResponse";
import { SecurityMonitoringSignalsBulkTriageUpdateResult } from "./SecurityMonitoringSignalsBulkTriageUpdateResult";
import { SecurityMonitoringSignalsBulkUpdateData } from "./SecurityMonitoringSignalsBulkUpdateData";
import { SecurityMonitoringSignalsBulkUpdateRequest } from "./SecurityMonitoringSignalsBulkUpdateRequest";
import { SecurityMonitoringSignalsListResponse } from "./SecurityMonitoringSignalsListResponse";
import { SecurityMonitoringSignalsListResponseLinks } from "./SecurityMonitoringSignalsListResponseLinks";
import { SecurityMonitoringSignalsListResponseMeta } from "./SecurityMonitoringSignalsListResponseMeta";
import { SecurityMonitoringSignalsListResponseMetaPage } from "./SecurityMonitoringSignalsListResponseMetaPage";
import { SecurityMonitoringStandardRuleCreatePayload } from "./SecurityMonitoringStandardRuleCreatePayload";
import { SecurityMonitoringStandardRulePayload } from "./SecurityMonitoringStandardRulePayload";
import { SecurityMonitoringStandardRuleQuery } from "./SecurityMonitoringStandardRuleQuery";
import { SecurityMonitoringStandardRuleResponse } from "./SecurityMonitoringStandardRuleResponse";
import { SecurityMonitoringStandardRuleTestPayload } from "./SecurityMonitoringStandardRuleTestPayload";
import { SecurityMonitoringSuppression } from "./SecurityMonitoringSuppression";
import { SecurityMonitoringSuppressionAttributes } from "./SecurityMonitoringSuppressionAttributes";
import { SecurityMonitoringSuppressionCreateAttributes } from "./SecurityMonitoringSuppressionCreateAttributes";
import { SecurityMonitoringSuppressionCreateData } from "./SecurityMonitoringSuppressionCreateData";
import { SecurityMonitoringSuppressionCreateRequest } from "./SecurityMonitoringSuppressionCreateRequest";
import { SecurityMonitoringSuppressionResponse } from "./SecurityMonitoringSuppressionResponse";
import { SecurityMonitoringSuppressionUpdateAttributes } from "./SecurityMonitoringSuppressionUpdateAttributes";
import { SecurityMonitoringSuppressionUpdateData } from "./SecurityMonitoringSuppressionUpdateData";
import { SecurityMonitoringSuppressionUpdateRequest } from "./SecurityMonitoringSuppressionUpdateRequest";
import { SecurityMonitoringSuppressionsMeta } from "./SecurityMonitoringSuppressionsMeta";
import { SecurityMonitoringSuppressionsPageMeta } from "./SecurityMonitoringSuppressionsPageMeta";
import { SecurityMonitoringSuppressionsResponse } from "./SecurityMonitoringSuppressionsResponse";
import { SecurityMonitoringTerraformBulkExportAttributes } from "./SecurityMonitoringTerraformBulkExportAttributes";
import { SecurityMonitoringTerraformBulkExportData } from "./SecurityMonitoringTerraformBulkExportData";
import { SecurityMonitoringTerraformBulkExportRequest } from "./SecurityMonitoringTerraformBulkExportRequest";
import { SecurityMonitoringTerraformConvertAttributes } from "./SecurityMonitoringTerraformConvertAttributes";
import { SecurityMonitoringTerraformConvertData } from "./SecurityMonitoringTerraformConvertData";
import { SecurityMonitoringTerraformConvertRequest } from "./SecurityMonitoringTerraformConvertRequest";
import { SecurityMonitoringTerraformExportAttributes } from "./SecurityMonitoringTerraformExportAttributes";
import { SecurityMonitoringTerraformExportData } from "./SecurityMonitoringTerraformExportData";
import { SecurityMonitoringTerraformExportResponse } from "./SecurityMonitoringTerraformExportResponse";
import { SecurityMonitoringThirdPartyRootQuery } from "./SecurityMonitoringThirdPartyRootQuery";
import { SecurityMonitoringThirdPartyRuleCase } from "./SecurityMonitoringThirdPartyRuleCase";
import { SecurityMonitoringThirdPartyRuleCaseCreate } from "./SecurityMonitoringThirdPartyRuleCaseCreate";
import { SecurityMonitoringTriageUser } from "./SecurityMonitoringTriageUser";
import { SecurityMonitoringUser } from "./SecurityMonitoringUser";
import { Selectors } from "./Selectors";
import { SignalEntitiesAttributes } from "./SignalEntitiesAttributes";
import { SignalEntitiesData } from "./SignalEntitiesData";
import { SignalEntitiesResponse } from "./SignalEntitiesResponse";
import { SingleEntityContextResponse } from "./SingleEntityContextResponse";
import { SuppressionVersionHistory } from "./SuppressionVersionHistory";
import { SuppressionVersions } from "./SuppressionVersions";
import { TicketCreationRuleAction } from "./TicketCreationRuleAction";
import { TicketCreationRuleActionResponse } from "./TicketCreationRuleActionResponse";
import { TicketCreationRuleAttributesCreate } from "./TicketCreationRuleAttributesCreate";
import { TicketCreationRuleAttributesResponse } from "./TicketCreationRuleAttributesResponse";
import { TicketCreationRuleCreateRequest } from "./TicketCreationRuleCreateRequest";
import { TicketCreationRuleDataCreate } from "./TicketCreationRuleDataCreate";
import { TicketCreationRuleDataResponse } from "./TicketCreationRuleDataResponse";
import { TicketCreationRuleReorderItem } from "./TicketCreationRuleReorderItem";
import { TicketCreationRuleReorderRequest } from "./TicketCreationRuleReorderRequest";
import { TicketCreationRuleResponse } from "./TicketCreationRuleResponse";
import { TicketCreationRuleUpdateRequest } from "./TicketCreationRuleUpdateRequest";
import { TicketCreationRulesResponse } from "./TicketCreationRulesResponse";
import { UpdateCustomFrameworkRequest } from "./UpdateCustomFrameworkRequest";
import { UpdateCustomFrameworkResponse } from "./UpdateCustomFrameworkResponse";
import { UpdateResourceEvaluationFiltersRequest } from "./UpdateResourceEvaluationFiltersRequest";
import { UpdateResourceEvaluationFiltersRequestData } from "./UpdateResourceEvaluationFiltersRequestData";
import { UpdateResourceEvaluationFiltersResponse } from "./UpdateResourceEvaluationFiltersResponse";
import { UpdateResourceEvaluationFiltersResponseData } from "./UpdateResourceEvaluationFiltersResponseData";
import { VersionHistoryUpdate } from "./VersionHistoryUpdate";
import { Vulnerability } from "./Vulnerability";
import { VulnerabilityAdvisory } from "./VulnerabilityAdvisory";
import { VulnerabilityAttributes } from "./VulnerabilityAttributes";
import { VulnerabilityCvss } from "./VulnerabilityCvss";
import { VulnerabilityDependencyLocations } from "./VulnerabilityDependencyLocations";
import { VulnerabilityRelationships } from "./VulnerabilityRelationships";
import { VulnerabilityRelationshipsAffects } from "./VulnerabilityRelationshipsAffects";
import { VulnerabilityRelationshipsAffectsData } from "./VulnerabilityRelationshipsAffectsData";
import { VulnerabilityRisks } from "./VulnerabilityRisks";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AnalysisEditType: ["ADD", "UPDATE", "REMOVE"],
    AnalysisRequestDataType: ["analysis_request"],
    AnalysisResponseDataType: ["server_request"],
    AssetEntityType: ["assets"],
    AssetType: [
      "Repository",
      "Service",
      "Host",
      "HostImage",
      "Image",
      "ServerlessFunction",
    ],
    AssigneeDataType: ["assignee"],
    AutomationRuleActorType: ["user", "system"],
    CaseDataType: ["cases"],
    CaseManagementProjectDataType: ["projects"],
    CasePriority: ["NOT_DEFINED", "P1", "P2", "P3", "P4", "P5"],
    CloudAssetType: ["Host", "HostImage", "Image"],
    CloudConfigurationRuleType: ["cloud_configuration"],
    ConvertJobResultsToSignalsDataType: [
      "historicalDetectionsJobResultSignalConversion",
    ],
    CustomFrameworkType: ["custom_framework"],
    CycloneDXComponentType: ["library", "application", "operating-system"],
    DefaultRulesetsPerLanguageDataType: ["defaultRulesetsPerLanguage"],
    DetailedFindingType: ["detailed_finding"],
    DueDateFrom: ["first_seen", "fix_available"],
    DueDateRuleType: ["due_date_rules"],
    DueDateSeverity: [
      "critical",
      "high",
      "medium",
      "low",
      "info",
      "none",
      "unknown",
    ],
    FindingDataType: ["findings"],
    FindingEvaluation: ["pass", "fail"],
    FindingMuteReason: [
      "PENDING_FIX",
      "FALSE_POSITIVE",
      "ACCEPTED_RISK",
      "NO_PENDING_FIX",
      "HUMAN_ERROR",
      "NO_LONGER_ACCEPTED_RISK",
      "OTHER",
    ],
    FindingStatus: ["critical", "high", "medium", "low", "info"],
    FindingType: ["finding"],
    FindingVulnerabilityType: [
      "misconfiguration",
      "attack_path",
      "identity_risk",
      "api_security",
    ],
    GetAstRequestDataType: ["get_ast_request"],
    GetAstResponseDataType: ["get_ast_response"],
    GetMultipleRulesetsRequestDataType: ["get_multiple_rulesets_request"],
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsDataType: [
      "rulesets",
    ],
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsDataType: [
      "rules",
    ],
    GetMultipleRulesetsResponseDataType: ["get_multiple_rulesets_response"],
    GetRuleVersionHistoryDataType: ["GetRuleVersionHistoryResponse"],
    GetSuppressionVersionHistoryDataType: ["suppression_version_history"],
    HistoricalJobDataType: ["historicalDetectionsJob"],
    IoCScoreEffect: ["RAISE_SCORE", "LOWER_SCORE", "NO_EFFECT"],
    IoCTriageState: ["not_reviewed", "reviewed"],
    JiraIssuesDataType: ["jira_issues"],
    LinearIssuesDataType: ["linear_issues"],
    MuteDataType: ["mute"],
    MuteFindingsReason: [
      "PENDING_FIX",
      "FALSE_POSITIVE",
      "OTHER",
      "NO_FIX",
      "DUPLICATE",
      "RISK_ACCEPTED",
      "NO_PENDING_FIX",
      "HUMAN_ERROR",
      "NO_LONGER_ACCEPTED_RISK",
    ],
    MuteReason: [
      "duplicate",
      "false_positive",
      "no_fix",
      "other",
      "pending_fix",
      "risk_accepted",
    ],
    MuteRuleType: ["mute_rules"],
    NodeTypesResponseDataType: ["get_node_types_response"],
    NotificationRulePreviewNotificationStatus: ["SUCCESS", "DEFAULT", "ERROR"],
    NotificationRulePreviewResponseType: ["notification_preview_response"],
    NotificationRuleRoutingMode: ["manual"],
    NotificationRulesType: ["notification_rules"],
    ResourceFilterRequestType: ["csm_resource_filter"],
    RuleSeverity: ["critical", "high", "medium", "low", "unknown", "info"],
    RuleTypesItems: [
      "application_security",
      "log_detection",
      "workload_security",
      "signal_correlation",
      "cloud_configuration",
      "infrastructure_configuration",
      "application_code_vulnerability",
      "application_library_vulnerability",
      "attack_path",
      "container_image_vulnerability",
      "identity_risk",
      "misconfiguration",
      "api_security",
      "host_vulnerability",
      "iac_misconfiguration",
      "sast_vulnerability",
      "secret_vulnerability",
      "workload_activity",
    ],
    RunHistoricalJobRequestDataType: ["historicalDetectionsJobCreate"],
    SBOMComponentLicenseType: [
      "network_strong_copyleft",
      "non_standard_copyleft",
      "other_non_free",
      "other_non_standard",
      "permissive",
      "public_domain",
      "strong_copyleft",
      "weak_copyleft",
    ],
    SBOMComponentType: [
      "application",
      "container",
      "data",
      "device",
      "device-driver",
      "file",
      "firmware",
      "framework",
      "library",
      "machine-learning-model",
      "operating-system",
      "platform",
    ],
    SBOMFormat: ["CycloneDX", "SPDX"],
    SBOMType: ["sboms"],
    SampleLogGenerationBulkSubscriptionRequestType: [
      "bulk_subscription_requests",
    ],
    SampleLogGenerationDuration: ["1h", "1d", "3d", "7d"],
    SampleLogGenerationSubscriptionRequestType: ["subscription_requests"],
    SampleLogGenerationSubscriptionResourceType: ["subscriptions"],
    SampleLogGenerationSubscriptionStatus: [
      "subscribed",
      "renewed",
      "unsubscribed",
      "no_active_subscription",
      "not_available",
      "active",
      "expired",
    ],
    SampleLogGenerationSubscriptionsStatusFilter: ["active", "all"],
    SecretRuleDataType: ["secret_rule"],
    SecurityFilterFilteredDataType: ["logs"],
    SecurityFilterType: ["security_filters"],
    SecurityFilterVersionType: ["security_filters_configuration"],
    SecurityFindingType: [
      "api_security",
      "attack_path",
      "host_and_container_vulnerability",
      "iac_misconfiguration",
      "identity_risk",
      "library_vulnerability",
      "misconfiguration",
      "runtime_code_vulnerability",
      "secret",
      "static_code_vulnerability",
      "workload_activity",
    ],
    SecurityFindingsDataType: ["finding"],
    SecurityFindingsSort: ["@detection_changed_at", "-@detection_changed_at"],
    SecurityFindingsStatus: ["done", "timeout"],
    SecurityMonitoringContentPackActivation: [
      "never_activated",
      "activated",
      "deactivated",
    ],
    SecurityMonitoringContentPackAppSecDetailsType: ["appsec"],
    SecurityMonitoringContentPackAuditDetailsType: ["audit"],
    SecurityMonitoringContentPackEntityDetailsType: ["entity"],
    SecurityMonitoringContentPackIntegrationStatus: [
      "installed",
      "available",
      "partially_installed",
      "detected",
      "error",
    ],
    SecurityMonitoringContentPackOnboardingDetailsType: ["onboarding"],
    SecurityMonitoringContentPackStateType: ["content_pack_state"],
    SecurityMonitoringContentPackStatus: [
      "install",
      "activate",
      "initializing",
      "active",
      "warning",
      "broken",
      "not_configured",
    ],
    SecurityMonitoringContentPackThreatIntelDetailsType: ["threat_intel"],
    SecurityMonitoringContentPackTimestampBucket: [
      "not_seen",
      "within_24_hours",
      "within_24_to_72_hours",
      "over_72h_to_30d",
      "over_30d",
    ],
    SecurityMonitoringContentPackVulnerabilityDetailsType: ["vulnerability"],
    SecurityMonitoringCriticalAssetSeverity: [
      "info",
      "low",
      "medium",
      "high",
      "critical",
      "increase",
      "decrease",
      "no-op",
    ],
    SecurityMonitoringCriticalAssetType: ["critical_assets"],
    SecurityMonitoringDatasetCreateType: ["datasetCreate"],
    SecurityMonitoringDatasetDependentsType: ["datasetDependents"],
    SecurityMonitoringDatasetType: ["dataset"],
    SecurityMonitoringDatasetUpdateType: ["datasetUpdate"],
    SecurityMonitoringDatasetVersionHistoryType: ["dataset_version_history"],
    SecurityMonitoringEntraIdAzureAppRegistrationsResourceType: [
      "entra_id_azure_app_registrations",
    ],
    SecurityMonitoringFilterAction: ["require", "suppress"],
    SecurityMonitoringIntegrationActivateResourceType: [
      "activate_entra_id_request",
    ],
    SecurityMonitoringIntegrationConfigResourceType: ["integration_config"],
    SecurityMonitoringIntegrationConfigState: [
      "valid",
      "invalid",
      "initializing",
    ],
    SecurityMonitoringIntegrationType: [
      "GOOGLE_WORKSPACE",
      "OKTA",
      "ENTRA_ID",
      "CROWDSTRIKE",
      "SENTINELONE",
    ],
    SecurityMonitoringIntegrationTypeCrowdStrike: ["CROWDSTRIKE"],
    SecurityMonitoringIntegrationTypeEntraId: ["ENTRA_ID"],
    SecurityMonitoringIntegrationTypeGoogleWorkspace: ["GOOGLE_WORKSPACE"],
    SecurityMonitoringIntegrationTypeOkta: ["OKTA"],
    SecurityMonitoringIntegrationTypeSentinelOne: ["SENTINELONE"],
    SecurityMonitoringRuleAnomalyDetectionOptionsBucketDuration: [
      300, 600, 900, 1800, 3600, 10800,
    ],
    SecurityMonitoringRuleAnomalyDetectionOptionsDetectionTolerance: [
      1, 2, 3, 4, 5,
    ],
    SecurityMonitoringRuleAnomalyDetectionOptionsLearningDuration: [
      1, 6, 12, 24, 48, 168, 336,
    ],
    SecurityMonitoringRuleBulkDeleteRequestDataType: ["bulk_delete_rules"],
    SecurityMonitoringRuleBulkExportDataType: [
      "security_monitoring_rules_bulk_export",
    ],
    SecurityMonitoringRuleCaseActionOptionsFlaggedIPType: [
      "SUSPICIOUS",
      "FLAGGED",
    ],
    SecurityMonitoringRuleCaseActionType: [
      "block_ip",
      "block_user",
      "user_behavior",
      "flag_ip",
    ],
    SecurityMonitoringRuleConvertBulkDataType: [
      "security_monitoring_rules_convert_bulk",
    ],
    SecurityMonitoringRuleDetectionMethod: [
      "threshold",
      "new_value",
      "anomaly_detection",
      "impossible_travel",
      "hardcoded",
      "third_party",
      "anomaly_threshold",
      "sequence_detection",
    ],
    SecurityMonitoringRuleEvaluationWindow: [
      0, 60, 300, 600, 900, 1800, 3600, 7200, 10800, 21600, 43200, 86400,
    ],
    SecurityMonitoringRuleHardcodedEvaluatorType: ["log4shell"],
    SecurityMonitoringRuleKeepAlive: [
      0, 60, 300, 600, 900, 1800, 3600, 7200, 10800, 21600, 43200, 86400,
    ],
    SecurityMonitoringRuleMaxSignalDuration: [
      0, 60, 300, 600, 900, 1800, 3600, 7200, 10800, 21600, 43200, 86400,
    ],
    SecurityMonitoringRuleNewValueOptionsLearningMethod: [
      "duration",
      "threshold",
    ],
    SecurityMonitoringRuleNewValueOptionsLearningThreshold: [0, 1],
    SecurityMonitoringRuleQueryAggregation: [
      "count",
      "cardinality",
      "sum",
      "max",
      "new_value",
      "geo_data",
      "event_count",
      "none",
    ],
    SecurityMonitoringRuleSeverity: [
      "info",
      "low",
      "medium",
      "high",
      "critical",
    ],
    SecurityMonitoringRuleSort: [
      "name",
      "creation_date",
      "update_date",
      "enabled",
      "type",
      "highest_severity",
      "source",
      "-name",
      "-creation_date",
      "-update_date",
      "-enabled",
      "-type",
      "-highest_severity",
      "-source",
    ],
    SecurityMonitoringRuleTypeCreate: [
      "api_security",
      "application_security",
      "log_detection",
      "workload_activity",
      "workload_security",
    ],
    SecurityMonitoringRuleTypeRead: [
      "log_detection",
      "infrastructure_configuration",
      "workload_security",
      "cloud_configuration",
      "application_security",
      "api_security",
      "workload_activity",
    ],
    SecurityMonitoringRuleTypeTest: ["log_detection"],
    SecurityMonitoringSKU: [
      "per_gb_analyzed",
      "per_event_in_siem_index_2023",
      "add_on_2024",
      "standalone_indexed",
      "unknown",
    ],
    SecurityMonitoringSignalArchiveReason: [
      "none",
      "false_positive",
      "testing_or_maintenance",
      "remediated",
      "investigated_case_opened",
      "true_positive_benign",
      "true_positive_malicious",
      "other",
    ],
    SecurityMonitoringSignalMetadataType: ["signal_metadata"],
    SecurityMonitoringSignalRuleType: ["signal_correlation"],
    SecurityMonitoringSignalState: ["open", "archived", "under_review"],
    SecurityMonitoringSignalSuggestedActionType: [
      "investigation_log_queries",
      "recommended_blog_posts",
    ],
    SecurityMonitoringSignalType: ["signal"],
    SecurityMonitoringSignalsSort: ["timestamp", "-timestamp"],
    SecurityMonitoringStandardDataSource: [
      "logs",
      "audit",
      "app_sec_spans",
      "spans",
      "security_runtime",
      "network",
      "events",
      "security_signals",
    ],
    SecurityMonitoringSuppressionSort: [
      "name",
      "start_date",
      "expiration_date",
      "update_date",
      "enabled",
      "-name",
      "-start_date",
      "-expiration_date",
      "-update_date",
      "-creation_date",
      "-enabled",
    ],
    SecurityMonitoringSuppressionType: ["suppressions"],
    SecurityMonitoringTerraformResourceType: [
      "suppressions",
      "critical_assets",
      "security_filters",
      "rules",
    ],
    ServiceNowTicketsDataType: ["servicenow_tickets"],
    SignalEntitiesType: ["entities"],
    SpecVersion: ["1.0", "1.1", "1.2", "1.3", "1.4", "1.5"],
    TicketCreationRuleType: ["ticket_creation_rules"],
    TicketCreationTarget: ["jira", "case_management"],
    TriggerSource: ["security_findings", "security_signals"],
    UsersType: ["users"],
    VersionHistoryUpdateType: ["create", "update", "delete"],
    VulnerabilitiesType: ["vulnerabilities"],
    VulnerabilityEcosystem: [
      "PyPI",
      "Maven",
      "NuGet",
      "Npm",
      "RubyGems",
      "Go",
      "Packagist",
      "Deb",
      "Rpm",
      "Apk",
      "Windows",
      "Generic",
      "MacOs",
      "Oci",
      "BottleRocket",
      "None",
    ],
    VulnerabilitySeverity: [
      "Unknown",
      "None",
      "Low",
      "Medium",
      "High",
      "Critical",
    ],
    VulnerabilityStatus: [
      "Open",
      "Muted",
      "Remediated",
      "InProgress",
      "AutoClosed",
    ],
    VulnerabilityTool: ["IAST", "SCA", "Infra", "SAST"],
    VulnerabilityType: [
      "AdminConsoleActive",
      "CodeInjection",
      "CommandInjection",
      "ComponentWithKnownVulnerability",
      "DangerousWorkflows",
      "DefaultAppDeployed",
      "DefaultHtmlEscapeInvalid",
      "DirectoryListingLeak",
      "EmailHtmlInjection",
      "EndOfLife",
      "HardcodedPassword",
      "HardcodedSecret",
      "HeaderInjection",
      "HstsHeaderMissing",
      "InsecureAuthProtocol",
      "InsecureCookie",
      "InsecureJspLayout",
      "LdapInjection",
      "MaliciousPackage",
      "MandatoryRemediation",
      "NoHttpOnlyCookie",
      "NoSameSiteCookie",
      "NoSqlMongoDbInjection",
      "PathTraversal",
      "ReflectionInjection",
      "RiskyLicense",
      "SessionRewriting",
      "SessionTimeout",
      "SqlInjection",
      "Ssrf",
      "StackTraceLeak",
      "TrustBoundaryViolation",
      "Unmaintained",
      "UntrustedDeserialization",
      "UnvalidatedRedirect",
      "VerbTampering",
      "WeakCipher",
      "WeakHash",
      "WeakRandomness",
      "XContentTypeHeaderMissing",
      "XPathInjection",
      "Xss",
    ],
  },
  oneOfMap: {
    SecurityMonitoringContentPackStateDetails: [
      "SecurityMonitoringContentPackLogsDetails",
      "SecurityMonitoringContentPackThreatIntelDetails",
      "SecurityMonitoringContentPackEntityDetails",
      "SecurityMonitoringContentPackAuditDetails",
      "SecurityMonitoringContentPackAppSecDetails",
      "SecurityMonitoringContentPackVulnerabilityDetails",
      "SecurityMonitoringContentPackOnboardingDetails",
    ],
    SecurityMonitoringIntegrationConfigCreateAttributes: [
      "SecurityMonitoringGoogleWorkspaceIntegrationConfigCreateAttributes",
      "SecurityMonitoringOktaIntegrationConfigCreateAttributes",
      "SecurityMonitoringEntraIdIntegrationConfigCreateAttributes",
      "SecurityMonitoringCrowdStrikeIntegrationConfigCreateAttributes",
      "SecurityMonitoringSentinelOneIntegrationConfigCreateAttributes",
    ],
    SecurityMonitoringIntegrationConfigUpdateAttributes: [
      "SecurityMonitoringGoogleWorkspaceIntegrationConfigUpdateAttributes",
      "SecurityMonitoringOktaIntegrationConfigUpdateAttributes",
      "SecurityMonitoringEntraIdIntegrationConfigUpdateAttributes",
      "SecurityMonitoringCrowdStrikeIntegrationConfigUpdateAttributes",
      "SecurityMonitoringSentinelOneIntegrationConfigUpdateAttributes",
    ],
    SecurityMonitoringIntegrationCredentialsValidateAttributes: [
      "SecurityMonitoringGoogleWorkspaceIntegrationCredentialsValidateAttributes",
      "SecurityMonitoringOktaIntegrationCredentialsValidateAttributes",
      "SecurityMonitoringEntraIdIntegrationCredentialsValidateAttributes",
      "SecurityMonitoringCrowdStrikeIntegrationCredentialsValidateAttributes",
      "SecurityMonitoringSentinelOneIntegrationCredentialsValidateAttributes",
    ],
    SecurityMonitoringRuleConvertPayload: [
      "SecurityMonitoringStandardRulePayload",
      "SecurityMonitoringSignalRulePayload",
    ],
    SecurityMonitoringRuleCreatePayload: [
      "SecurityMonitoringStandardRuleCreatePayload",
      "SecurityMonitoringSignalRuleCreatePayload",
      "CloudConfigurationRuleCreatePayload",
    ],
    SecurityMonitoringRuleQuery: [
      "SecurityMonitoringStandardRuleQuery",
      "SecurityMonitoringSignalRuleQuery",
    ],
    SecurityMonitoringRuleResponse: [
      "SecurityMonitoringStandardRuleResponse",
      "SecurityMonitoringSignalRuleResponse",
    ],
    SecurityMonitoringRuleTestPayload: [
      "SecurityMonitoringStandardRuleTestPayload",
    ],
    SecurityMonitoringRuleValidatePayload: [
      "SecurityMonitoringStandardRulePayload",
      "SecurityMonitoringSignalRulePayload",
      "CloudConfigurationRulePayload",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Advisory: Advisory,
    AnalysisEdit: AnalysisEdit,
    AnalysisFix: AnalysisFix,
    AnalysisPosition: AnalysisPosition,
    AnalysisRequest: AnalysisRequest,
    AnalysisRequestData: AnalysisRequestData,
    AnalysisRequestDataAttributes: AnalysisRequestDataAttributes,
    AnalysisRequestRule: AnalysisRequestRule,
    AnalysisResponse: AnalysisResponse,
    AnalysisResponseData: AnalysisResponseData,
    AnalysisResponseDataAttributes: AnalysisResponseDataAttributes,
    AnalysisRuleResponse: AnalysisRuleResponse,
    AnalysisViolation: AnalysisViolation,
    Asset: Asset,
    AssetAttributes: AssetAttributes,
    AssetOperatingSystem: AssetOperatingSystem,
    AssetRisks: AssetRisks,
    AssetVersion: AssetVersion,
    AssigneeRequest: AssigneeRequest,
    AssigneeRequestData: AssigneeRequestData,
    AssigneeRequestDataAttributes: AssigneeRequestDataAttributes,
    AssigneeRequestDataRelationships: AssigneeRequestDataRelationships,
    AssigneeResponse: AssigneeResponse,
    AssigneeResponseData: AssigneeResponseData,
    AssigneeResponseDataAttributes: AssigneeResponseDataAttributes,
    AssigneeResponseMeta: AssigneeResponseMeta,
    AssignmentResult: AssignmentResult,
    AttachCaseRequest: AttachCaseRequest,
    AttachCaseRequestData: AttachCaseRequestData,
    AttachCaseRequestDataRelationships: AttachCaseRequestDataRelationships,
    AttachJiraIssueRequest: AttachJiraIssueRequest,
    AttachJiraIssueRequestData: AttachJiraIssueRequestData,
    AttachJiraIssueRequestDataAttributes: AttachJiraIssueRequestDataAttributes,
    AttachJiraIssueRequestDataRelationships:
      AttachJiraIssueRequestDataRelationships,
    AttachLinearIssueRequest: AttachLinearIssueRequest,
    AttachLinearIssueRequestData: AttachLinearIssueRequestData,
    AttachLinearIssueRequestDataAttributes:
      AttachLinearIssueRequestDataAttributes,
    AttachLinearIssueRequestDataRelationships:
      AttachLinearIssueRequestDataRelationships,
    AttachServiceNowTicketRequest: AttachServiceNowTicketRequest,
    AttachServiceNowTicketRequestData: AttachServiceNowTicketRequestData,
    AttachServiceNowTicketRequestDataAttributes:
      AttachServiceNowTicketRequestDataAttributes,
    AttachServiceNowTicketRequestDataRelationships:
      AttachServiceNowTicketRequestDataRelationships,
    AutomationRuleCreatedBy: AutomationRuleCreatedBy,
    AutomationRuleModifiedBy: AutomationRuleModifiedBy,
    AutomationRuleScope: AutomationRuleScope,
    CVSS: CVSS,
    CalculatedField: CalculatedField,
    CaseInsightsItems: CaseInsightsItems,
    CaseManagementProject: CaseManagementProject,
    CaseManagementProjectData: CaseManagementProjectData,
    CloudConfigurationComplianceRuleOptions:
      CloudConfigurationComplianceRuleOptions,
    CloudConfigurationRegoRule: CloudConfigurationRegoRule,
    CloudConfigurationRuleCaseCreate: CloudConfigurationRuleCaseCreate,
    CloudConfigurationRuleComplianceSignalOptions:
      CloudConfigurationRuleComplianceSignalOptions,
    CloudConfigurationRuleCreatePayload: CloudConfigurationRuleCreatePayload,
    CloudConfigurationRuleOptions: CloudConfigurationRuleOptions,
    CloudConfigurationRulePayload: CloudConfigurationRulePayload,
    CodeLocation: CodeLocation,
    ConvertJobResultsToSignalsAttributes: ConvertJobResultsToSignalsAttributes,
    ConvertJobResultsToSignalsData: ConvertJobResultsToSignalsData,
    ConvertJobResultsToSignalsRequest: ConvertJobResultsToSignalsRequest,
    CreateCaseRequestArray: CreateCaseRequestArray,
    CreateCaseRequestData: CreateCaseRequestData,
    CreateCaseRequestDataAttributes: CreateCaseRequestDataAttributes,
    CreateCaseRequestDataRelationships: CreateCaseRequestDataRelationships,
    CreateCustomFrameworkRequest: CreateCustomFrameworkRequest,
    CreateCustomFrameworkResponse: CreateCustomFrameworkResponse,
    CreateJiraIssueRequestArray: CreateJiraIssueRequestArray,
    CreateJiraIssueRequestData: CreateJiraIssueRequestData,
    CreateJiraIssueRequestDataAttributes: CreateJiraIssueRequestDataAttributes,
    CreateJiraIssueRequestDataRelationships:
      CreateJiraIssueRequestDataRelationships,
    CreateLinearIssueRequestArray: CreateLinearIssueRequestArray,
    CreateLinearIssueRequestData: CreateLinearIssueRequestData,
    CreateLinearIssueRequestDataAttributes:
      CreateLinearIssueRequestDataAttributes,
    CreateLinearIssueRequestDataRelationships:
      CreateLinearIssueRequestDataRelationships,
    CreateNotificationRuleParameters: CreateNotificationRuleParameters,
    CreateNotificationRuleParametersData: CreateNotificationRuleParametersData,
    CreateNotificationRuleParametersDataAttributes:
      CreateNotificationRuleParametersDataAttributes,
    CreateServiceNowTicketRequestArray: CreateServiceNowTicketRequestArray,
    CreateServiceNowTicketRequestData: CreateServiceNowTicketRequestData,
    CreateServiceNowTicketRequestDataAttributes:
      CreateServiceNowTicketRequestDataAttributes,
    CreateServiceNowTicketRequestDataRelationships:
      CreateServiceNowTicketRequestDataRelationships,
    CustomFrameworkControl: CustomFrameworkControl,
    CustomFrameworkData: CustomFrameworkData,
    CustomFrameworkDataAttributes: CustomFrameworkDataAttributes,
    CustomFrameworkDataHandleAndVersion: CustomFrameworkDataHandleAndVersion,
    CustomFrameworkMetadata: CustomFrameworkMetadata,
    CustomFrameworkRequirement: CustomFrameworkRequirement,
    CustomFrameworkWithoutRequirements: CustomFrameworkWithoutRequirements,
    CycloneDXBom: CycloneDXBom,
    CycloneDXComponent: CycloneDXComponent,
    CycloneDXMetadata: CycloneDXMetadata,
    CycloneDXMetadataComponent: CycloneDXMetadataComponent,
    CycloneDXMetadataTools: CycloneDXMetadataTools,
    CycloneDXToolComponent: CycloneDXToolComponent,
    CycloneDXVulnerability: CycloneDXVulnerability,
    CycloneDXVulnerabilityAdvisory: CycloneDXVulnerabilityAdvisory,
    CycloneDXVulnerabilityAffects: CycloneDXVulnerabilityAffects,
    CycloneDXVulnerabilityAnalysis: CycloneDXVulnerabilityAnalysis,
    CycloneDXVulnerabilityRating: CycloneDXVulnerabilityRating,
    CycloneDXVulnerabilityReference: CycloneDXVulnerabilityReference,
    CycloneDXVulnerabilityReferenceSource:
      CycloneDXVulnerabilityReferenceSource,
    DefaultRulesetsPerLanguageData: DefaultRulesetsPerLanguageData,
    DefaultRulesetsPerLanguageDataAttributes:
      DefaultRulesetsPerLanguageDataAttributes,
    DefaultRulesetsPerLanguageResponse: DefaultRulesetsPerLanguageResponse,
    DeleteCustomFrameworkResponse: DeleteCustomFrameworkResponse,
    DependencyLocation: DependencyLocation,
    DetachCaseRequest: DetachCaseRequest,
    DetachCaseRequestData: DetachCaseRequestData,
    DetachCaseRequestDataRelationships: DetachCaseRequestDataRelationships,
    DetailedFinding: DetailedFinding,
    DetailedFindingAttributes: DetailedFindingAttributes,
    DueDatePerSeverityItem: DueDatePerSeverityItem,
    DueDateRuleAction: DueDateRuleAction,
    DueDateRuleAttributesCreate: DueDateRuleAttributesCreate,
    DueDateRuleAttributesResponse: DueDateRuleAttributesResponse,
    DueDateRuleCreateRequest: DueDateRuleCreateRequest,
    DueDateRuleDataCreate: DueDateRuleDataCreate,
    DueDateRuleDataResponse: DueDateRuleDataResponse,
    DueDateRuleReorderItem: DueDateRuleReorderItem,
    DueDateRuleReorderRequest: DueDateRuleReorderRequest,
    DueDateRuleResponse: DueDateRuleResponse,
    DueDateRuleUpdateRequest: DueDateRuleUpdateRequest,
    DueDateRulesResponse: DueDateRulesResponse,
    EPSS: EPSS,
    EntityContextEntity: EntityContextEntity,
    EntityContextEntityAttributes: EntityContextEntityAttributes,
    EntityContextPage: EntityContextPage,
    EntityContextResponse: EntityContextResponse,
    EntityContextResponseMeta: EntityContextResponseMeta,
    EntityContextRevision: EntityContextRevision,
    Finding: Finding,
    FindingAttributes: FindingAttributes,
    FindingCaseResponse: FindingCaseResponse,
    FindingCaseResponseArray: FindingCaseResponseArray,
    FindingCaseResponseData: FindingCaseResponseData,
    FindingCaseResponseDataAttributes: FindingCaseResponseDataAttributes,
    FindingCaseResponseDataRelationships: FindingCaseResponseDataRelationships,
    FindingData: FindingData,
    FindingJiraIssue: FindingJiraIssue,
    FindingJiraIssueResult: FindingJiraIssueResult,
    FindingLinearIssue: FindingLinearIssue,
    FindingLinearIssueResult: FindingLinearIssueResult,
    FindingMute: FindingMute,
    FindingRule: FindingRule,
    FindingServiceNowTicket: FindingServiceNowTicket,
    FindingServiceNowTicketResult: FindingServiceNowTicketResult,
    Findings: Findings,
    FrameworkHandleAndVersionResponseData:
      FrameworkHandleAndVersionResponseData,
    FullCustomFrameworkData: FullCustomFrameworkData,
    FullCustomFrameworkDataAttributes: FullCustomFrameworkDataAttributes,
    GetAstRequest: GetAstRequest,
    GetAstRequestData: GetAstRequestData,
    GetAstRequestDataAttributes: GetAstRequestDataAttributes,
    GetAstResponse: GetAstResponse,
    GetAstResponseData: GetAstResponseData,
    GetAstResponseDataAttributes: GetAstResponseDataAttributes,
    GetCustomFrameworkResponse: GetCustomFrameworkResponse,
    GetFindingResponse: GetFindingResponse,
    GetIoCIndicatorResponse: GetIoCIndicatorResponse,
    GetIoCIndicatorResponseAttributes: GetIoCIndicatorResponseAttributes,
    GetIoCIndicatorResponseData: GetIoCIndicatorResponseData,
    GetMultipleRulesetsRequest: GetMultipleRulesetsRequest,
    GetMultipleRulesetsRequestData: GetMultipleRulesetsRequestData,
    GetMultipleRulesetsRequestDataAttributes:
      GetMultipleRulesetsRequestDataAttributes,
    GetMultipleRulesetsResponse: GetMultipleRulesetsResponse,
    GetMultipleRulesetsResponseData: GetMultipleRulesetsResponseData,
    GetMultipleRulesetsResponseDataAttributes:
      GetMultipleRulesetsResponseDataAttributes,
    GetMultipleRulesetsResponseDataAttributesRulesetsItems:
      GetMultipleRulesetsResponseDataAttributesRulesetsItems,
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsData:
      GetMultipleRulesetsResponseDataAttributesRulesetsItemsData,
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems:
      GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems,
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems:
      GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems,
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData:
      GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData,
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems:
      GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems,
    GetResourceEvaluationFiltersResponse: GetResourceEvaluationFiltersResponse,
    GetResourceEvaluationFiltersResponseData:
      GetResourceEvaluationFiltersResponseData,
    GetRuleVersionHistoryData: GetRuleVersionHistoryData,
    GetRuleVersionHistoryResponse: GetRuleVersionHistoryResponse,
    GetSBOMResponse: GetSBOMResponse,
    GetSuppressionVersionHistoryData: GetSuppressionVersionHistoryData,
    GetSuppressionVersionHistoryResponse: GetSuppressionVersionHistoryResponse,
    HistoricalJobListMeta: HistoricalJobListMeta,
    HistoricalJobOptions: HistoricalJobOptions,
    HistoricalJobQuery: HistoricalJobQuery,
    HistoricalJobResponse: HistoricalJobResponse,
    HistoricalJobResponseAttributes: HistoricalJobResponseAttributes,
    HistoricalJobResponseData: HistoricalJobResponseData,
    IoCExplorerListResponse: IoCExplorerListResponse,
    IoCExplorerListResponseAttributes: IoCExplorerListResponseAttributes,
    IoCExplorerListResponseData: IoCExplorerListResponseData,
    IoCExplorerListResponseMetadata: IoCExplorerListResponseMetadata,
    IoCExplorerListResponsePaging: IoCExplorerListResponsePaging,
    IoCGeoLocation: IoCGeoLocation,
    IoCIndicator: IoCIndicator,
    IoCIndicatorDetailed: IoCIndicatorDetailed,
    IoCSignalSeverityCount: IoCSignalSeverityCount,
    IoCSource: IoCSource,
    IoCTriageEvent: IoCTriageEvent,
    IoCTriageWriteRequest: IoCTriageWriteRequest,
    IoCTriageWriteRequestAttributes: IoCTriageWriteRequestAttributes,
    IoCTriageWriteRequestData: IoCTriageWriteRequestData,
    IoCTriageWriteResponse: IoCTriageWriteResponse,
    IoCTriageWriteResponseAttributes: IoCTriageWriteResponseAttributes,
    IoCTriageWriteResponseData: IoCTriageWriteResponseData,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    JobCreateResponse: JobCreateResponse,
    JobCreateResponseData: JobCreateResponseData,
    JobDefinition: JobDefinition,
    JobDefinitionFromRule: JobDefinitionFromRule,
    Library: Library,
    Links: Links,
    ListAssetsSBOMsResponse: ListAssetsSBOMsResponse,
    ListFindingsMeta: ListFindingsMeta,
    ListFindingsPage: ListFindingsPage,
    ListFindingsResponse: ListFindingsResponse,
    ListHistoricalJobsResponse: ListHistoricalJobsResponse,
    ListSecurityFindingsResponse: ListSecurityFindingsResponse,
    ListVulnerabilitiesResponse: ListVulnerabilitiesResponse,
    ListVulnerableAssetsResponse: ListVulnerableAssetsResponse,
    Metadata: Metadata,
    MuteFindingsMuteAttributes: MuteFindingsMuteAttributes,
    MuteFindingsRequest: MuteFindingsRequest,
    MuteFindingsRequestData: MuteFindingsRequestData,
    MuteFindingsRequestDataAttributes: MuteFindingsRequestDataAttributes,
    MuteFindingsRequestDataRelationships: MuteFindingsRequestDataRelationships,
    MuteFindingsResponse: MuteFindingsResponse,
    MuteFindingsResponseData: MuteFindingsResponseData,
    MuteRuleAction: MuteRuleAction,
    MuteRuleAttributesCreate: MuteRuleAttributesCreate,
    MuteRuleAttributesResponse: MuteRuleAttributesResponse,
    MuteRuleCreateRequest: MuteRuleCreateRequest,
    MuteRuleDataCreate: MuteRuleDataCreate,
    MuteRuleDataResponse: MuteRuleDataResponse,
    MuteRuleReorderItem: MuteRuleReorderItem,
    MuteRuleReorderRequest: MuteRuleReorderRequest,
    MuteRuleResponse: MuteRuleResponse,
    MuteRuleUpdateRequest: MuteRuleUpdateRequest,
    MuteRulesResponse: MuteRulesResponse,
    NodeTypesResponse: NodeTypesResponse,
    NodeTypesResponseData: NodeTypesResponseData,
    NodeTypesResponseDataAttributes: NodeTypesResponseDataAttributes,
    NotificationRule: NotificationRule,
    NotificationRuleAttributes: NotificationRuleAttributes,
    NotificationRulePreviewResponse: NotificationRulePreviewResponse,
    NotificationRulePreviewResponseAttributes:
      NotificationRulePreviewResponseAttributes,
    NotificationRulePreviewResponseData: NotificationRulePreviewResponseData,
    NotificationRulePreviewResult: NotificationRulePreviewResult,
    NotificationRuleResponse: NotificationRuleResponse,
    NotificationRuleRouting: NotificationRuleRouting,
    NotificationRulesListResponse: NotificationRulesListResponse,
    Pagination: Pagination,
    PatchNotificationRuleParameters: PatchNotificationRuleParameters,
    PatchNotificationRuleParametersData: PatchNotificationRuleParametersData,
    PatchNotificationRuleParametersDataAttributes:
      PatchNotificationRuleParametersDataAttributes,
    RelationshipToUser: RelationshipToUser,
    RelationshipToUserData: RelationshipToUserData,
    Remediation: Remediation,
    ResourceFilterAttributes: ResourceFilterAttributes,
    ResponseMetaAttributes: ResponseMetaAttributes,
    RuleUser: RuleUser,
    RuleVersionHistory: RuleVersionHistory,
    RuleVersions: RuleVersions,
    RunHistoricalJobRequest: RunHistoricalJobRequest,
    RunHistoricalJobRequestAttributes: RunHistoricalJobRequestAttributes,
    RunHistoricalJobRequestData: RunHistoricalJobRequestData,
    SBOM: SBOM,
    SBOMAttributes: SBOMAttributes,
    SBOMComponent: SBOMComponent,
    SBOMComponentDependency: SBOMComponentDependency,
    SBOMComponentLicense: SBOMComponentLicense,
    SBOMComponentLicenseLicense: SBOMComponentLicenseLicense,
    SBOMComponentProperty: SBOMComponentProperty,
    SBOMComponentSupplier: SBOMComponentSupplier,
    SBOMMetadata: SBOMMetadata,
    SBOMMetadataAuthor: SBOMMetadataAuthor,
    SBOMMetadataComponent: SBOMMetadataComponent,
    SampleLogGenerationBulkSubscriptionAttributes:
      SampleLogGenerationBulkSubscriptionAttributes,
    SampleLogGenerationBulkSubscriptionData:
      SampleLogGenerationBulkSubscriptionData,
    SampleLogGenerationBulkSubscriptionItemMeta:
      SampleLogGenerationBulkSubscriptionItemMeta,
    SampleLogGenerationBulkSubscriptionRequest:
      SampleLogGenerationBulkSubscriptionRequest,
    SampleLogGenerationBulkSubscriptionResponse:
      SampleLogGenerationBulkSubscriptionResponse,
    SampleLogGenerationBulkSubscriptionResultItem:
      SampleLogGenerationBulkSubscriptionResultItem,
    SampleLogGenerationSubscriptionAttributes:
      SampleLogGenerationSubscriptionAttributes,
    SampleLogGenerationSubscriptionCreateAttributes:
      SampleLogGenerationSubscriptionCreateAttributes,
    SampleLogGenerationSubscriptionCreateData:
      SampleLogGenerationSubscriptionCreateData,
    SampleLogGenerationSubscriptionCreateRequest:
      SampleLogGenerationSubscriptionCreateRequest,
    SampleLogGenerationSubscriptionData: SampleLogGenerationSubscriptionData,
    SampleLogGenerationSubscriptionResponse:
      SampleLogGenerationSubscriptionResponse,
    SampleLogGenerationSubscriptionsResponse:
      SampleLogGenerationSubscriptionsResponse,
    SampleLogGenerationSubscriptionsResponseMeta:
      SampleLogGenerationSubscriptionsResponseMeta,
    SastRulesetData: SastRulesetData,
    SastRulesetDataAttributes: SastRulesetDataAttributes,
    SastRulesetResponse: SastRulesetResponse,
    SastRulesetsResponse: SastRulesetsResponse,
    ScannedAssetMetadata: ScannedAssetMetadata,
    ScannedAssetMetadataAsset: ScannedAssetMetadataAsset,
    ScannedAssetMetadataAttributes: ScannedAssetMetadataAttributes,
    ScannedAssetMetadataLastSuccess: ScannedAssetMetadataLastSuccess,
    ScannedAssetsMetadata: ScannedAssetsMetadata,
    SecretRuleArray: SecretRuleArray,
    SecretRuleData: SecretRuleData,
    SecretRuleDataAttributes: SecretRuleDataAttributes,
    SecretRuleDataAttributesMatchValidation:
      SecretRuleDataAttributesMatchValidation,
    SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems:
      SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems,
    SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems:
      SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems,
    SecurityAutomationRulesLinks: SecurityAutomationRulesLinks,
    SecurityAutomationRulesMeta: SecurityAutomationRulesMeta,
    SecurityAutomationRulesPageInfo: SecurityAutomationRulesPageInfo,
    SecurityFilter: SecurityFilter,
    SecurityFilterAttributes: SecurityFilterAttributes,
    SecurityFilterCreateAttributes: SecurityFilterCreateAttributes,
    SecurityFilterCreateData: SecurityFilterCreateData,
    SecurityFilterCreateRequest: SecurityFilterCreateRequest,
    SecurityFilterExclusionFilter: SecurityFilterExclusionFilter,
    SecurityFilterExclusionFilterResponse:
      SecurityFilterExclusionFilterResponse,
    SecurityFilterMeta: SecurityFilterMeta,
    SecurityFilterResponse: SecurityFilterResponse,
    SecurityFilterUpdateAttributes: SecurityFilterUpdateAttributes,
    SecurityFilterUpdateData: SecurityFilterUpdateData,
    SecurityFilterUpdateRequest: SecurityFilterUpdateRequest,
    SecurityFilterVersion: SecurityFilterVersion,
    SecurityFilterVersionAttributes: SecurityFilterVersionAttributes,
    SecurityFilterVersionEntry: SecurityFilterVersionEntry,
    SecurityFilterVersionsResponse: SecurityFilterVersionsResponse,
    SecurityFiltersResponse: SecurityFiltersResponse,
    SecurityFindingsAttributes: SecurityFindingsAttributes,
    SecurityFindingsData: SecurityFindingsData,
    SecurityFindingsLinks: SecurityFindingsLinks,
    SecurityFindingsMeta: SecurityFindingsMeta,
    SecurityFindingsPage: SecurityFindingsPage,
    SecurityFindingsSearchRequest: SecurityFindingsSearchRequest,
    SecurityFindingsSearchRequestData: SecurityFindingsSearchRequestData,
    SecurityFindingsSearchRequestDataAttributes:
      SecurityFindingsSearchRequestDataAttributes,
    SecurityFindingsSearchRequestPage: SecurityFindingsSearchRequestPage,
    SecurityMonitoringAzureAppRegistration:
      SecurityMonitoringAzureAppRegistration,
    SecurityMonitoringContentPackAppSecDetails:
      SecurityMonitoringContentPackAppSecDetails,
    SecurityMonitoringContentPackAuditDetails:
      SecurityMonitoringContentPackAuditDetails,
    SecurityMonitoringContentPackEntityDetails:
      SecurityMonitoringContentPackEntityDetails,
    SecurityMonitoringContentPackLogsDetails:
      SecurityMonitoringContentPackLogsDetails,
    SecurityMonitoringContentPackOnboardingDetails:
      SecurityMonitoringContentPackOnboardingDetails,
    SecurityMonitoringContentPackStateAttributes:
      SecurityMonitoringContentPackStateAttributes,
    SecurityMonitoringContentPackStateData:
      SecurityMonitoringContentPackStateData,
    SecurityMonitoringContentPackStateMeta:
      SecurityMonitoringContentPackStateMeta,
    SecurityMonitoringContentPackStatesResponse:
      SecurityMonitoringContentPackStatesResponse,
    SecurityMonitoringContentPackThreatIntelDetails:
      SecurityMonitoringContentPackThreatIntelDetails,
    SecurityMonitoringContentPackVulnerabilityDetails:
      SecurityMonitoringContentPackVulnerabilityDetails,
    SecurityMonitoringCriticalAsset: SecurityMonitoringCriticalAsset,
    SecurityMonitoringCriticalAssetAttributes:
      SecurityMonitoringCriticalAssetAttributes,
    SecurityMonitoringCriticalAssetCreateAttributes:
      SecurityMonitoringCriticalAssetCreateAttributes,
    SecurityMonitoringCriticalAssetCreateData:
      SecurityMonitoringCriticalAssetCreateData,
    SecurityMonitoringCriticalAssetCreateRequest:
      SecurityMonitoringCriticalAssetCreateRequest,
    SecurityMonitoringCriticalAssetResponse:
      SecurityMonitoringCriticalAssetResponse,
    SecurityMonitoringCriticalAssetUpdateAttributes:
      SecurityMonitoringCriticalAssetUpdateAttributes,
    SecurityMonitoringCriticalAssetUpdateData:
      SecurityMonitoringCriticalAssetUpdateData,
    SecurityMonitoringCriticalAssetUpdateRequest:
      SecurityMonitoringCriticalAssetUpdateRequest,
    SecurityMonitoringCriticalAssetsResponse:
      SecurityMonitoringCriticalAssetsResponse,
    SecurityMonitoringCrowdStrikeIntegrationConfigCreateAttributes:
      SecurityMonitoringCrowdStrikeIntegrationConfigCreateAttributes,
    SecurityMonitoringCrowdStrikeIntegrationConfigUpdateAttributes:
      SecurityMonitoringCrowdStrikeIntegrationConfigUpdateAttributes,
    SecurityMonitoringCrowdStrikeIntegrationCredentialsValidateAttributes:
      SecurityMonitoringCrowdStrikeIntegrationCredentialsValidateAttributes,
    SecurityMonitoringDatasetAttributesRequest:
      SecurityMonitoringDatasetAttributesRequest,
    SecurityMonitoringDatasetAttributesResponse:
      SecurityMonitoringDatasetAttributesResponse,
    SecurityMonitoringDatasetColumn: SecurityMonitoringDatasetColumn,
    SecurityMonitoringDatasetCreateData: SecurityMonitoringDatasetCreateData,
    SecurityMonitoringDatasetCreateRequest:
      SecurityMonitoringDatasetCreateRequest,
    SecurityMonitoringDatasetCreateResponse:
      SecurityMonitoringDatasetCreateResponse,
    SecurityMonitoringDatasetCreateResponseData:
      SecurityMonitoringDatasetCreateResponseData,
    SecurityMonitoringDatasetData: SecurityMonitoringDatasetData,
    SecurityMonitoringDatasetDefinition: SecurityMonitoringDatasetDefinition,
    SecurityMonitoringDatasetDependenciesRequest:
      SecurityMonitoringDatasetDependenciesRequest,
    SecurityMonitoringDatasetDependenciesRequestAttributes:
      SecurityMonitoringDatasetDependenciesRequestAttributes,
    SecurityMonitoringDatasetDependenciesRequestData:
      SecurityMonitoringDatasetDependenciesRequestData,
    SecurityMonitoringDatasetDependenciesResponse:
      SecurityMonitoringDatasetDependenciesResponse,
    SecurityMonitoringDatasetDependentsAttributes:
      SecurityMonitoringDatasetDependentsAttributes,
    SecurityMonitoringDatasetDependentsData:
      SecurityMonitoringDatasetDependentsData,
    SecurityMonitoringDatasetResponse: SecurityMonitoringDatasetResponse,
    SecurityMonitoringDatasetSearch: SecurityMonitoringDatasetSearch,
    SecurityMonitoringDatasetTimeWindow: SecurityMonitoringDatasetTimeWindow,
    SecurityMonitoringDatasetUpdateData: SecurityMonitoringDatasetUpdateData,
    SecurityMonitoringDatasetUpdateRequest:
      SecurityMonitoringDatasetUpdateRequest,
    SecurityMonitoringDatasetVersionEntry:
      SecurityMonitoringDatasetVersionEntry,
    SecurityMonitoringDatasetVersionFieldChange:
      SecurityMonitoringDatasetVersionFieldChange,
    SecurityMonitoringDatasetVersionHistoryAttributes:
      SecurityMonitoringDatasetVersionHistoryAttributes,
    SecurityMonitoringDatasetVersionHistoryData:
      SecurityMonitoringDatasetVersionHistoryData,
    SecurityMonitoringDatasetVersionHistoryResponse:
      SecurityMonitoringDatasetVersionHistoryResponse,
    SecurityMonitoringDatasetsListMeta: SecurityMonitoringDatasetsListMeta,
    SecurityMonitoringDatasetsListResponse:
      SecurityMonitoringDatasetsListResponse,
    SecurityMonitoringEntraIdAzureAppRegistrationsAttributes:
      SecurityMonitoringEntraIdAzureAppRegistrationsAttributes,
    SecurityMonitoringEntraIdAzureAppRegistrationsData:
      SecurityMonitoringEntraIdAzureAppRegistrationsData,
    SecurityMonitoringEntraIdAzureAppRegistrationsResponse:
      SecurityMonitoringEntraIdAzureAppRegistrationsResponse,
    SecurityMonitoringEntraIdIntegrationConfigCreateAttributes:
      SecurityMonitoringEntraIdIntegrationConfigCreateAttributes,
    SecurityMonitoringEntraIdIntegrationConfigUpdateAttributes:
      SecurityMonitoringEntraIdIntegrationConfigUpdateAttributes,
    SecurityMonitoringEntraIdIntegrationCredentialsValidateAttributes:
      SecurityMonitoringEntraIdIntegrationCredentialsValidateAttributes,
    SecurityMonitoringFilter: SecurityMonitoringFilter,
    SecurityMonitoringGoogleWorkspaceIntegrationConfigCreateAttributes:
      SecurityMonitoringGoogleWorkspaceIntegrationConfigCreateAttributes,
    SecurityMonitoringGoogleWorkspaceIntegrationConfigUpdateAttributes:
      SecurityMonitoringGoogleWorkspaceIntegrationConfigUpdateAttributes,
    SecurityMonitoringGoogleWorkspaceIntegrationCredentialsValidateAttributes:
      SecurityMonitoringGoogleWorkspaceIntegrationCredentialsValidateAttributes,
    SecurityMonitoringIntegrationActivateAttributes:
      SecurityMonitoringIntegrationActivateAttributes,
    SecurityMonitoringIntegrationActivateData:
      SecurityMonitoringIntegrationActivateData,
    SecurityMonitoringIntegrationActivateRequest:
      SecurityMonitoringIntegrationActivateRequest,
    SecurityMonitoringIntegrationConfigAttributes:
      SecurityMonitoringIntegrationConfigAttributes,
    SecurityMonitoringIntegrationConfigCreateData:
      SecurityMonitoringIntegrationConfigCreateData,
    SecurityMonitoringIntegrationConfigCreateRequest:
      SecurityMonitoringIntegrationConfigCreateRequest,
    SecurityMonitoringIntegrationConfigCrowdStrikeSecrets:
      SecurityMonitoringIntegrationConfigCrowdStrikeSecrets,
    SecurityMonitoringIntegrationConfigData:
      SecurityMonitoringIntegrationConfigData,
    SecurityMonitoringIntegrationConfigGoogleWorkspaceSecrets:
      SecurityMonitoringIntegrationConfigGoogleWorkspaceSecrets,
    SecurityMonitoringIntegrationConfigGoogleWorkspaceServiceAccount:
      SecurityMonitoringIntegrationConfigGoogleWorkspaceServiceAccount,
    SecurityMonitoringIntegrationConfigOktaSecrets:
      SecurityMonitoringIntegrationConfigOktaSecrets,
    SecurityMonitoringIntegrationConfigResponse:
      SecurityMonitoringIntegrationConfigResponse,
    SecurityMonitoringIntegrationConfigSentinelOneSecrets:
      SecurityMonitoringIntegrationConfigSentinelOneSecrets,
    SecurityMonitoringIntegrationConfigUpdateData:
      SecurityMonitoringIntegrationConfigUpdateData,
    SecurityMonitoringIntegrationConfigUpdateRequest:
      SecurityMonitoringIntegrationConfigUpdateRequest,
    SecurityMonitoringIntegrationConfigsResponse:
      SecurityMonitoringIntegrationConfigsResponse,
    SecurityMonitoringIntegrationCredentialsValidateData:
      SecurityMonitoringIntegrationCredentialsValidateData,
    SecurityMonitoringIntegrationCredentialsValidateRequest:
      SecurityMonitoringIntegrationCredentialsValidateRequest,
    SecurityMonitoringListRulesResponse: SecurityMonitoringListRulesResponse,
    SecurityMonitoringOktaIntegrationConfigCreateAttributes:
      SecurityMonitoringOktaIntegrationConfigCreateAttributes,
    SecurityMonitoringOktaIntegrationConfigUpdateAttributes:
      SecurityMonitoringOktaIntegrationConfigUpdateAttributes,
    SecurityMonitoringOktaIntegrationCredentialsValidateAttributes:
      SecurityMonitoringOktaIntegrationCredentialsValidateAttributes,
    SecurityMonitoringPaginatedSuppressionsResponse:
      SecurityMonitoringPaginatedSuppressionsResponse,
    SecurityMonitoringReferenceTable: SecurityMonitoringReferenceTable,
    SecurityMonitoringRuleAnomalyDetectionOptions:
      SecurityMonitoringRuleAnomalyDetectionOptions,
    SecurityMonitoringRuleBulkDeleteAttributes:
      SecurityMonitoringRuleBulkDeleteAttributes,
    SecurityMonitoringRuleBulkDeleteData: SecurityMonitoringRuleBulkDeleteData,
    SecurityMonitoringRuleBulkDeletePayload:
      SecurityMonitoringRuleBulkDeletePayload,
    SecurityMonitoringRuleBulkDeleteResponse:
      SecurityMonitoringRuleBulkDeleteResponse,
    SecurityMonitoringRuleBulkExportAttributes:
      SecurityMonitoringRuleBulkExportAttributes,
    SecurityMonitoringRuleBulkExportData: SecurityMonitoringRuleBulkExportData,
    SecurityMonitoringRuleBulkExportPayload:
      SecurityMonitoringRuleBulkExportPayload,
    SecurityMonitoringRuleCase: SecurityMonitoringRuleCase,
    SecurityMonitoringRuleCaseAction: SecurityMonitoringRuleCaseAction,
    SecurityMonitoringRuleCaseActionOptions:
      SecurityMonitoringRuleCaseActionOptions,
    SecurityMonitoringRuleCaseCreate: SecurityMonitoringRuleCaseCreate,
    SecurityMonitoringRuleConvertBulkAttributes:
      SecurityMonitoringRuleConvertBulkAttributes,
    SecurityMonitoringRuleConvertBulkData:
      SecurityMonitoringRuleConvertBulkData,
    SecurityMonitoringRuleConvertBulkPayload:
      SecurityMonitoringRuleConvertBulkPayload,
    SecurityMonitoringRuleConvertResponse:
      SecurityMonitoringRuleConvertResponse,
    SecurityMonitoringRuleImpossibleTravelOptions:
      SecurityMonitoringRuleImpossibleTravelOptions,
    SecurityMonitoringRuleNewValueOptions:
      SecurityMonitoringRuleNewValueOptions,
    SecurityMonitoringRuleOptions: SecurityMonitoringRuleOptions,
    SecurityMonitoringRuleQueryPayload: SecurityMonitoringRuleQueryPayload,
    SecurityMonitoringRuleQueryPayloadData:
      SecurityMonitoringRuleQueryPayloadData,
    SecurityMonitoringRuleSequenceDetectionOptions:
      SecurityMonitoringRuleSequenceDetectionOptions,
    SecurityMonitoringRuleSequenceDetectionStep:
      SecurityMonitoringRuleSequenceDetectionStep,
    SecurityMonitoringRuleSequenceDetectionStepTransition:
      SecurityMonitoringRuleSequenceDetectionStepTransition,
    SecurityMonitoringRuleTestRequest: SecurityMonitoringRuleTestRequest,
    SecurityMonitoringRuleTestResponse: SecurityMonitoringRuleTestResponse,
    SecurityMonitoringRuleThirdPartyOptions:
      SecurityMonitoringRuleThirdPartyOptions,
    SecurityMonitoringRuleUpdatePayload: SecurityMonitoringRuleUpdatePayload,
    SecurityMonitoringSchedulingOptions: SecurityMonitoringSchedulingOptions,
    SecurityMonitoringSentinelOneIntegrationConfigCreateAttributes:
      SecurityMonitoringSentinelOneIntegrationConfigCreateAttributes,
    SecurityMonitoringSentinelOneIntegrationConfigUpdateAttributes:
      SecurityMonitoringSentinelOneIntegrationConfigUpdateAttributes,
    SecurityMonitoringSentinelOneIntegrationCredentialsValidateAttributes:
      SecurityMonitoringSentinelOneIntegrationCredentialsValidateAttributes,
    SecurityMonitoringSignal: SecurityMonitoringSignal,
    SecurityMonitoringSignalAssigneeUpdateAttributes:
      SecurityMonitoringSignalAssigneeUpdateAttributes,
    SecurityMonitoringSignalAssigneeUpdateData:
      SecurityMonitoringSignalAssigneeUpdateData,
    SecurityMonitoringSignalAssigneeUpdateRequest:
      SecurityMonitoringSignalAssigneeUpdateRequest,
    SecurityMonitoringSignalAttributes: SecurityMonitoringSignalAttributes,
    SecurityMonitoringSignalIncidentsUpdateAttributes:
      SecurityMonitoringSignalIncidentsUpdateAttributes,
    SecurityMonitoringSignalIncidentsUpdateData:
      SecurityMonitoringSignalIncidentsUpdateData,
    SecurityMonitoringSignalIncidentsUpdateRequest:
      SecurityMonitoringSignalIncidentsUpdateRequest,
    SecurityMonitoringSignalListRequest: SecurityMonitoringSignalListRequest,
    SecurityMonitoringSignalListRequestFilter:
      SecurityMonitoringSignalListRequestFilter,
    SecurityMonitoringSignalListRequestPage:
      SecurityMonitoringSignalListRequestPage,
    SecurityMonitoringSignalResponse: SecurityMonitoringSignalResponse,
    SecurityMonitoringSignalRuleCreatePayload:
      SecurityMonitoringSignalRuleCreatePayload,
    SecurityMonitoringSignalRulePayload: SecurityMonitoringSignalRulePayload,
    SecurityMonitoringSignalRuleQuery: SecurityMonitoringSignalRuleQuery,
    SecurityMonitoringSignalRuleResponse: SecurityMonitoringSignalRuleResponse,
    SecurityMonitoringSignalRuleResponseQuery:
      SecurityMonitoringSignalRuleResponseQuery,
    SecurityMonitoringSignalStateUpdateAttributes:
      SecurityMonitoringSignalStateUpdateAttributes,
    SecurityMonitoringSignalStateUpdateData:
      SecurityMonitoringSignalStateUpdateData,
    SecurityMonitoringSignalStateUpdateRequest:
      SecurityMonitoringSignalStateUpdateRequest,
    SecurityMonitoringSignalSuggestedAction:
      SecurityMonitoringSignalSuggestedAction,
    SecurityMonitoringSignalSuggestedActionAttributes:
      SecurityMonitoringSignalSuggestedActionAttributes,
    SecurityMonitoringSignalSuggestedActionsResponse:
      SecurityMonitoringSignalSuggestedActionsResponse,
    SecurityMonitoringSignalTriageAttributes:
      SecurityMonitoringSignalTriageAttributes,
    SecurityMonitoringSignalTriageUpdateData:
      SecurityMonitoringSignalTriageUpdateData,
    SecurityMonitoringSignalTriageUpdateResponse:
      SecurityMonitoringSignalTriageUpdateResponse,
    SecurityMonitoringSignalUpdateAttributes:
      SecurityMonitoringSignalUpdateAttributes,
    SecurityMonitoringSignalUpdateData: SecurityMonitoringSignalUpdateData,
    SecurityMonitoringSignalUpdateRequest:
      SecurityMonitoringSignalUpdateRequest,
    SecurityMonitoringSignalsBulkAssigneeUpdateAttributes:
      SecurityMonitoringSignalsBulkAssigneeUpdateAttributes,
    SecurityMonitoringSignalsBulkAssigneeUpdateData:
      SecurityMonitoringSignalsBulkAssigneeUpdateData,
    SecurityMonitoringSignalsBulkAssigneeUpdateRequest:
      SecurityMonitoringSignalsBulkAssigneeUpdateRequest,
    SecurityMonitoringSignalsBulkStateUpdateData:
      SecurityMonitoringSignalsBulkStateUpdateData,
    SecurityMonitoringSignalsBulkStateUpdateRequest:
      SecurityMonitoringSignalsBulkStateUpdateRequest,
    SecurityMonitoringSignalsBulkTriageEvent:
      SecurityMonitoringSignalsBulkTriageEvent,
    SecurityMonitoringSignalsBulkTriageEventAttributes:
      SecurityMonitoringSignalsBulkTriageEventAttributes,
    SecurityMonitoringSignalsBulkTriageUpdateResponse:
      SecurityMonitoringSignalsBulkTriageUpdateResponse,
    SecurityMonitoringSignalsBulkTriageUpdateResult:
      SecurityMonitoringSignalsBulkTriageUpdateResult,
    SecurityMonitoringSignalsBulkUpdateData:
      SecurityMonitoringSignalsBulkUpdateData,
    SecurityMonitoringSignalsBulkUpdateRequest:
      SecurityMonitoringSignalsBulkUpdateRequest,
    SecurityMonitoringSignalsListResponse:
      SecurityMonitoringSignalsListResponse,
    SecurityMonitoringSignalsListResponseLinks:
      SecurityMonitoringSignalsListResponseLinks,
    SecurityMonitoringSignalsListResponseMeta:
      SecurityMonitoringSignalsListResponseMeta,
    SecurityMonitoringSignalsListResponseMetaPage:
      SecurityMonitoringSignalsListResponseMetaPage,
    SecurityMonitoringStandardRuleCreatePayload:
      SecurityMonitoringStandardRuleCreatePayload,
    SecurityMonitoringStandardRulePayload:
      SecurityMonitoringStandardRulePayload,
    SecurityMonitoringStandardRuleQuery: SecurityMonitoringStandardRuleQuery,
    SecurityMonitoringStandardRuleResponse:
      SecurityMonitoringStandardRuleResponse,
    SecurityMonitoringStandardRuleTestPayload:
      SecurityMonitoringStandardRuleTestPayload,
    SecurityMonitoringSuppression: SecurityMonitoringSuppression,
    SecurityMonitoringSuppressionAttributes:
      SecurityMonitoringSuppressionAttributes,
    SecurityMonitoringSuppressionCreateAttributes:
      SecurityMonitoringSuppressionCreateAttributes,
    SecurityMonitoringSuppressionCreateData:
      SecurityMonitoringSuppressionCreateData,
    SecurityMonitoringSuppressionCreateRequest:
      SecurityMonitoringSuppressionCreateRequest,
    SecurityMonitoringSuppressionResponse:
      SecurityMonitoringSuppressionResponse,
    SecurityMonitoringSuppressionUpdateAttributes:
      SecurityMonitoringSuppressionUpdateAttributes,
    SecurityMonitoringSuppressionUpdateData:
      SecurityMonitoringSuppressionUpdateData,
    SecurityMonitoringSuppressionUpdateRequest:
      SecurityMonitoringSuppressionUpdateRequest,
    SecurityMonitoringSuppressionsMeta: SecurityMonitoringSuppressionsMeta,
    SecurityMonitoringSuppressionsPageMeta:
      SecurityMonitoringSuppressionsPageMeta,
    SecurityMonitoringSuppressionsResponse:
      SecurityMonitoringSuppressionsResponse,
    SecurityMonitoringTerraformBulkExportAttributes:
      SecurityMonitoringTerraformBulkExportAttributes,
    SecurityMonitoringTerraformBulkExportData:
      SecurityMonitoringTerraformBulkExportData,
    SecurityMonitoringTerraformBulkExportRequest:
      SecurityMonitoringTerraformBulkExportRequest,
    SecurityMonitoringTerraformConvertAttributes:
      SecurityMonitoringTerraformConvertAttributes,
    SecurityMonitoringTerraformConvertData:
      SecurityMonitoringTerraformConvertData,
    SecurityMonitoringTerraformConvertRequest:
      SecurityMonitoringTerraformConvertRequest,
    SecurityMonitoringTerraformExportAttributes:
      SecurityMonitoringTerraformExportAttributes,
    SecurityMonitoringTerraformExportData:
      SecurityMonitoringTerraformExportData,
    SecurityMonitoringTerraformExportResponse:
      SecurityMonitoringTerraformExportResponse,
    SecurityMonitoringThirdPartyRootQuery:
      SecurityMonitoringThirdPartyRootQuery,
    SecurityMonitoringThirdPartyRuleCase: SecurityMonitoringThirdPartyRuleCase,
    SecurityMonitoringThirdPartyRuleCaseCreate:
      SecurityMonitoringThirdPartyRuleCaseCreate,
    SecurityMonitoringTriageUser: SecurityMonitoringTriageUser,
    SecurityMonitoringUser: SecurityMonitoringUser,
    Selectors: Selectors,
    SignalEntitiesAttributes: SignalEntitiesAttributes,
    SignalEntitiesData: SignalEntitiesData,
    SignalEntitiesResponse: SignalEntitiesResponse,
    SingleEntityContextResponse: SingleEntityContextResponse,
    SuppressionVersionHistory: SuppressionVersionHistory,
    SuppressionVersions: SuppressionVersions,
    TicketCreationRuleAction: TicketCreationRuleAction,
    TicketCreationRuleActionResponse: TicketCreationRuleActionResponse,
    TicketCreationRuleAttributesCreate: TicketCreationRuleAttributesCreate,
    TicketCreationRuleAttributesResponse: TicketCreationRuleAttributesResponse,
    TicketCreationRuleCreateRequest: TicketCreationRuleCreateRequest,
    TicketCreationRuleDataCreate: TicketCreationRuleDataCreate,
    TicketCreationRuleDataResponse: TicketCreationRuleDataResponse,
    TicketCreationRuleReorderItem: TicketCreationRuleReorderItem,
    TicketCreationRuleReorderRequest: TicketCreationRuleReorderRequest,
    TicketCreationRuleResponse: TicketCreationRuleResponse,
    TicketCreationRuleUpdateRequest: TicketCreationRuleUpdateRequest,
    TicketCreationRulesResponse: TicketCreationRulesResponse,
    UpdateCustomFrameworkRequest: UpdateCustomFrameworkRequest,
    UpdateCustomFrameworkResponse: UpdateCustomFrameworkResponse,
    UpdateResourceEvaluationFiltersRequest:
      UpdateResourceEvaluationFiltersRequest,
    UpdateResourceEvaluationFiltersRequestData:
      UpdateResourceEvaluationFiltersRequestData,
    UpdateResourceEvaluationFiltersResponse:
      UpdateResourceEvaluationFiltersResponse,
    UpdateResourceEvaluationFiltersResponseData:
      UpdateResourceEvaluationFiltersResponseData,
    VersionHistoryUpdate: VersionHistoryUpdate,
    Vulnerability: Vulnerability,
    VulnerabilityAdvisory: VulnerabilityAdvisory,
    VulnerabilityAttributes: VulnerabilityAttributes,
    VulnerabilityCvss: VulnerabilityCvss,
    VulnerabilityDependencyLocations: VulnerabilityDependencyLocations,
    VulnerabilityRelationships: VulnerabilityRelationships,
    VulnerabilityRelationshipsAffects: VulnerabilityRelationshipsAffects,
    VulnerabilityRelationshipsAffectsData:
      VulnerabilityRelationshipsAffectsData,
    VulnerabilityRisks: VulnerabilityRisks,
  },
};
