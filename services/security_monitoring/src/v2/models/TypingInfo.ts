import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Advisory } from "./Advisory";
import { Asset } from "./Asset";
import { AssetAttributes } from "./AssetAttributes";
import { AssetOperatingSystem } from "./AssetOperatingSystem";
import { AssetRisks } from "./AssetRisks";
import { AssetVersion } from "./AssetVersion";
import { BulkMuteFindingsRequest } from "./BulkMuteFindingsRequest";
import { BulkMuteFindingsRequestAttributes } from "./BulkMuteFindingsRequestAttributes";
import { BulkMuteFindingsRequestData } from "./BulkMuteFindingsRequestData";
import { BulkMuteFindingsRequestMeta } from "./BulkMuteFindingsRequestMeta";
import { BulkMuteFindingsRequestMetaFindings } from "./BulkMuteFindingsRequestMetaFindings";
import { BulkMuteFindingsRequestProperties } from "./BulkMuteFindingsRequestProperties";
import { BulkMuteFindingsResponse } from "./BulkMuteFindingsResponse";
import { BulkMuteFindingsResponseData } from "./BulkMuteFindingsResponseData";
import { CVSS } from "./CVSS";
import { CalculatedField } from "./CalculatedField";
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
import { CreateCustomFrameworkRequest } from "./CreateCustomFrameworkRequest";
import { CreateCustomFrameworkResponse } from "./CreateCustomFrameworkResponse";
import { CreateNotificationRuleParameters } from "./CreateNotificationRuleParameters";
import { CreateNotificationRuleParametersData } from "./CreateNotificationRuleParametersData";
import { CreateNotificationRuleParametersDataAttributes } from "./CreateNotificationRuleParametersDataAttributes";
import { CustomFrameworkControl } from "./CustomFrameworkControl";
import { CustomFrameworkData } from "./CustomFrameworkData";
import { CustomFrameworkDataAttributes } from "./CustomFrameworkDataAttributes";
import { CustomFrameworkDataHandleAndVersion } from "./CustomFrameworkDataHandleAndVersion";
import { CustomFrameworkMetadata } from "./CustomFrameworkMetadata";
import { CustomFrameworkRequirement } from "./CustomFrameworkRequirement";
import { CustomFrameworkWithoutRequirements } from "./CustomFrameworkWithoutRequirements";
import { DeleteCustomFrameworkResponse } from "./DeleteCustomFrameworkResponse";
import { DependencyLocation } from "./DependencyLocation";
import { DetailedFinding } from "./DetailedFinding";
import { DetailedFindingAttributes } from "./DetailedFindingAttributes";
import { EPSS } from "./EPSS";
import { Finding } from "./Finding";
import { FindingAttributes } from "./FindingAttributes";
import { FindingMute } from "./FindingMute";
import { FindingRule } from "./FindingRule";
import { FrameworkHandleAndVersionResponseData } from "./FrameworkHandleAndVersionResponseData";
import { FullCustomFrameworkData } from "./FullCustomFrameworkData";
import { FullCustomFrameworkDataAttributes } from "./FullCustomFrameworkDataAttributes";
import { GetCustomFrameworkResponse } from "./GetCustomFrameworkResponse";
import { GetFindingResponse } from "./GetFindingResponse";
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
import { ListThreatHuntingJobsResponse } from "./ListThreatHuntingJobsResponse";
import { ListVulnerabilitiesResponse } from "./ListVulnerabilitiesResponse";
import { ListVulnerableAssetsResponse } from "./ListVulnerableAssetsResponse";
import { Metadata } from "./Metadata";
import { NotificationRule } from "./NotificationRule";
import { NotificationRuleAttributes } from "./NotificationRuleAttributes";
import { NotificationRuleResponse } from "./NotificationRuleResponse";
import { NotificationRulesList } from "./NotificationRulesList";
import { Pagination } from "./Pagination";
import { PatchNotificationRuleParameters } from "./PatchNotificationRuleParameters";
import { PatchNotificationRuleParametersData } from "./PatchNotificationRuleParametersData";
import { PatchNotificationRuleParametersDataAttributes } from "./PatchNotificationRuleParametersDataAttributes";
import { Remediation } from "./Remediation";
import { ResourceFilterAttributes } from "./ResourceFilterAttributes";
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { RuleUser } from "./RuleUser";
import { RuleVersionHistory } from "./RuleVersionHistory";
import { RuleVersionUpdate } from "./RuleVersionUpdate";
import { RuleVersions } from "./RuleVersions";
import { RunThreatHuntingJobRequest } from "./RunThreatHuntingJobRequest";
import { RunThreatHuntingJobRequestAttributes } from "./RunThreatHuntingJobRequestAttributes";
import { RunThreatHuntingJobRequestData } from "./RunThreatHuntingJobRequestData";
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
import { SecurityFiltersResponse } from "./SecurityFiltersResponse";
import { SecurityMonitoringFilter } from "./SecurityMonitoringFilter";
import { SecurityMonitoringListRulesResponse } from "./SecurityMonitoringListRulesResponse";
import { SecurityMonitoringReferenceTable } from "./SecurityMonitoringReferenceTable";
import { SecurityMonitoringRuleCase } from "./SecurityMonitoringRuleCase";
import { SecurityMonitoringRuleCaseAction } from "./SecurityMonitoringRuleCaseAction";
import { SecurityMonitoringRuleCaseActionOptions } from "./SecurityMonitoringRuleCaseActionOptions";
import { SecurityMonitoringRuleCaseCreate } from "./SecurityMonitoringRuleCaseCreate";
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
import { SecurityMonitoringSignalTriageAttributes } from "./SecurityMonitoringSignalTriageAttributes";
import { SecurityMonitoringSignalTriageUpdateData } from "./SecurityMonitoringSignalTriageUpdateData";
import { SecurityMonitoringSignalTriageUpdateResponse } from "./SecurityMonitoringSignalTriageUpdateResponse";
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
import { SecurityMonitoringSuppressionsResponse } from "./SecurityMonitoringSuppressionsResponse";
import { SecurityMonitoringThirdPartyRootQuery } from "./SecurityMonitoringThirdPartyRootQuery";
import { SecurityMonitoringThirdPartyRuleCase } from "./SecurityMonitoringThirdPartyRuleCase";
import { SecurityMonitoringThirdPartyRuleCaseCreate } from "./SecurityMonitoringThirdPartyRuleCaseCreate";
import { SecurityMonitoringTriageUser } from "./SecurityMonitoringTriageUser";
import { SecurityMonitoringUser } from "./SecurityMonitoringUser";
import { Selectors } from "./Selectors";
import { ThreatHuntingJobListMeta } from "./ThreatHuntingJobListMeta";
import { ThreatHuntingJobOptions } from "./ThreatHuntingJobOptions";
import { ThreatHuntingJobQuery } from "./ThreatHuntingJobQuery";
import { ThreatHuntingJobResponse } from "./ThreatHuntingJobResponse";
import { ThreatHuntingJobResponseAttributes } from "./ThreatHuntingJobResponseAttributes";
import { ThreatHuntingJobResponseData } from "./ThreatHuntingJobResponseData";
import { UpdateCustomFrameworkRequest } from "./UpdateCustomFrameworkRequest";
import { UpdateCustomFrameworkResponse } from "./UpdateCustomFrameworkResponse";
import { UpdateResourceEvaluationFiltersRequest } from "./UpdateResourceEvaluationFiltersRequest";
import { UpdateResourceEvaluationFiltersRequestData } from "./UpdateResourceEvaluationFiltersRequestData";
import { UpdateResourceEvaluationFiltersResponse } from "./UpdateResourceEvaluationFiltersResponse";
import { UpdateResourceEvaluationFiltersResponseData } from "./UpdateResourceEvaluationFiltersResponseData";
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
    AssetEntityType: ["assets"],
    AssetType: ["Repository", "Service", "Host", "HostImage", "Image"],
    CloudAssetType: ["Host", "HostImage", "Image"],
    CloudConfigurationRuleType: ["cloud_configuration"],
    ConvertJobResultsToSignalsDataType: [
      "historicalDetectionsJobResultSignalConversion",
    ],
    CustomFrameworkType: ["custom_framework"],
    DetailedFindingType: ["detailed_finding"],
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
    GetMultipleRulesetsRequestDataType: ["get_multiple_rulesets_request"],
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsDataType: [
      "rulesets",
    ],
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsDataType: [
      "rules",
    ],
    GetMultipleRulesetsResponseDataType: ["get_multiple_rulesets_response"],
    GetRuleVersionHistoryDataType: ["GetRuleVersionHistoryResponse"],
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
    ],
    RuleVersionUpdateType: ["create", "update", "delete"],
    RunThreatHuntingJobRequestDataType: ["historicalDetectionsJobCreate"],
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
    SecretRuleDataType: ["secret_rule"],
    SecurityFilterFilteredDataType: ["logs"],
    SecurityFilterType: ["security_filters"],
    SecurityMonitoringFilterAction: ["require", "suppress"],
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
    SecurityMonitoringRuleNewValueOptionsForgetAfter: [1, 2, 7, 14, 21, 28],
    SecurityMonitoringRuleNewValueOptionsLearningDuration: [0, 1, 7],
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
    SecurityMonitoringRuleTypeCreate: [
      "api_security",
      "application_security",
      "log_detection",
      "workload_security",
    ],
    SecurityMonitoringRuleTypeRead: [
      "log_detection",
      "infrastructure_configuration",
      "workload_security",
      "cloud_configuration",
      "application_security",
      "api_security",
    ],
    SecurityMonitoringRuleTypeTest: ["log_detection"],
    SecurityMonitoringSignalArchiveReason: [
      "none",
      "false_positive",
      "testing_or_maintenance",
      "investigated_case_opened",
      "true_positive_benign",
      "true_positive_malicious",
      "other",
    ],
    SecurityMonitoringSignalMetadataType: ["signal_metadata"],
    SecurityMonitoringSignalRuleType: ["signal_correlation"],
    SecurityMonitoringSignalState: ["open", "archived", "under_review"],
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
    ],
    SecurityMonitoringSuppressionType: ["suppressions"],
    SpecVersion: ["1.0", "1.1", "1.2", "1.3", "1.4", "1.5"],
    ThreatHuntingJobDataType: ["historicalDetectionsJob"],
    TriggerSource: ["security_findings", "security_signals"],
    VulnerabilitiesType: ["vulnerabilities"],
    VulnerabilityEcosystem: [
      "PyPI",
      "Maven",
      "NuGet",
      "Npm",
      "RubyGems",
      "Go",
      "Packagist",
      "Ddeb",
      "Rpm",
      "Apk",
      "Windows",
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
    VulnerabilityTool: ["IAST", "SCA", "Infra"],
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
    Asset: Asset,
    AssetAttributes: AssetAttributes,
    AssetOperatingSystem: AssetOperatingSystem,
    AssetRisks: AssetRisks,
    AssetVersion: AssetVersion,
    BulkMuteFindingsRequest: BulkMuteFindingsRequest,
    BulkMuteFindingsRequestAttributes: BulkMuteFindingsRequestAttributes,
    BulkMuteFindingsRequestData: BulkMuteFindingsRequestData,
    BulkMuteFindingsRequestMeta: BulkMuteFindingsRequestMeta,
    BulkMuteFindingsRequestMetaFindings: BulkMuteFindingsRequestMetaFindings,
    BulkMuteFindingsRequestProperties: BulkMuteFindingsRequestProperties,
    BulkMuteFindingsResponse: BulkMuteFindingsResponse,
    BulkMuteFindingsResponseData: BulkMuteFindingsResponseData,
    CVSS: CVSS,
    CalculatedField: CalculatedField,
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
    CreateCustomFrameworkRequest: CreateCustomFrameworkRequest,
    CreateCustomFrameworkResponse: CreateCustomFrameworkResponse,
    CreateNotificationRuleParameters: CreateNotificationRuleParameters,
    CreateNotificationRuleParametersData: CreateNotificationRuleParametersData,
    CreateNotificationRuleParametersDataAttributes:
      CreateNotificationRuleParametersDataAttributes,
    CustomFrameworkControl: CustomFrameworkControl,
    CustomFrameworkData: CustomFrameworkData,
    CustomFrameworkDataAttributes: CustomFrameworkDataAttributes,
    CustomFrameworkDataHandleAndVersion: CustomFrameworkDataHandleAndVersion,
    CustomFrameworkMetadata: CustomFrameworkMetadata,
    CustomFrameworkRequirement: CustomFrameworkRequirement,
    CustomFrameworkWithoutRequirements: CustomFrameworkWithoutRequirements,
    DeleteCustomFrameworkResponse: DeleteCustomFrameworkResponse,
    DependencyLocation: DependencyLocation,
    DetailedFinding: DetailedFinding,
    DetailedFindingAttributes: DetailedFindingAttributes,
    EPSS: EPSS,
    Finding: Finding,
    FindingAttributes: FindingAttributes,
    FindingMute: FindingMute,
    FindingRule: FindingRule,
    FrameworkHandleAndVersionResponseData:
      FrameworkHandleAndVersionResponseData,
    FullCustomFrameworkData: FullCustomFrameworkData,
    FullCustomFrameworkDataAttributes: FullCustomFrameworkDataAttributes,
    GetCustomFrameworkResponse: GetCustomFrameworkResponse,
    GetFindingResponse: GetFindingResponse,
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
    ListThreatHuntingJobsResponse: ListThreatHuntingJobsResponse,
    ListVulnerabilitiesResponse: ListVulnerabilitiesResponse,
    ListVulnerableAssetsResponse: ListVulnerableAssetsResponse,
    Metadata: Metadata,
    NotificationRule: NotificationRule,
    NotificationRuleAttributes: NotificationRuleAttributes,
    NotificationRuleResponse: NotificationRuleResponse,
    NotificationRulesList: NotificationRulesList,
    Pagination: Pagination,
    PatchNotificationRuleParameters: PatchNotificationRuleParameters,
    PatchNotificationRuleParametersData: PatchNotificationRuleParametersData,
    PatchNotificationRuleParametersDataAttributes:
      PatchNotificationRuleParametersDataAttributes,
    Remediation: Remediation,
    ResourceFilterAttributes: ResourceFilterAttributes,
    ResponseMetaAttributes: ResponseMetaAttributes,
    RuleUser: RuleUser,
    RuleVersionHistory: RuleVersionHistory,
    RuleVersionUpdate: RuleVersionUpdate,
    RuleVersions: RuleVersions,
    RunThreatHuntingJobRequest: RunThreatHuntingJobRequest,
    RunThreatHuntingJobRequestAttributes: RunThreatHuntingJobRequestAttributes,
    RunThreatHuntingJobRequestData: RunThreatHuntingJobRequestData,
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
    SecurityFiltersResponse: SecurityFiltersResponse,
    SecurityMonitoringFilter: SecurityMonitoringFilter,
    SecurityMonitoringListRulesResponse: SecurityMonitoringListRulesResponse,
    SecurityMonitoringReferenceTable: SecurityMonitoringReferenceTable,
    SecurityMonitoringRuleCase: SecurityMonitoringRuleCase,
    SecurityMonitoringRuleCaseAction: SecurityMonitoringRuleCaseAction,
    SecurityMonitoringRuleCaseActionOptions:
      SecurityMonitoringRuleCaseActionOptions,
    SecurityMonitoringRuleCaseCreate: SecurityMonitoringRuleCaseCreate,
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
    SecurityMonitoringSignalTriageAttributes:
      SecurityMonitoringSignalTriageAttributes,
    SecurityMonitoringSignalTriageUpdateData:
      SecurityMonitoringSignalTriageUpdateData,
    SecurityMonitoringSignalTriageUpdateResponse:
      SecurityMonitoringSignalTriageUpdateResponse,
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
    SecurityMonitoringSuppressionsResponse:
      SecurityMonitoringSuppressionsResponse,
    SecurityMonitoringThirdPartyRootQuery:
      SecurityMonitoringThirdPartyRootQuery,
    SecurityMonitoringThirdPartyRuleCase: SecurityMonitoringThirdPartyRuleCase,
    SecurityMonitoringThirdPartyRuleCaseCreate:
      SecurityMonitoringThirdPartyRuleCaseCreate,
    SecurityMonitoringTriageUser: SecurityMonitoringTriageUser,
    SecurityMonitoringUser: SecurityMonitoringUser,
    Selectors: Selectors,
    ThreatHuntingJobListMeta: ThreatHuntingJobListMeta,
    ThreatHuntingJobOptions: ThreatHuntingJobOptions,
    ThreatHuntingJobQuery: ThreatHuntingJobQuery,
    ThreatHuntingJobResponse: ThreatHuntingJobResponse,
    ThreatHuntingJobResponseAttributes: ThreatHuntingJobResponseAttributes,
    ThreatHuntingJobResponseData: ThreatHuntingJobResponseData,
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
