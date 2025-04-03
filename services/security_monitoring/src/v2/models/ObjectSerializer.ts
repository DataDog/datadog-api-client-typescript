import {
  dateFromRFC3339String,
  dateToRFC3339String,
  UnparsedObject,
  logger,
} from "@datadog/datadog-api-client";

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
import { CreateNotificationRuleParameters } from "./CreateNotificationRuleParameters";
import { CreateNotificationRuleParametersData } from "./CreateNotificationRuleParametersData";
import { CreateNotificationRuleParametersDataAttributes } from "./CreateNotificationRuleParametersDataAttributes";
import { DependencyLocation } from "./DependencyLocation";
import { DetailedFinding } from "./DetailedFinding";
import { DetailedFindingAttributes } from "./DetailedFindingAttributes";
import { EPSS } from "./EPSS";
import { Finding } from "./Finding";
import { FindingAttributes } from "./FindingAttributes";
import { FindingMute } from "./FindingMute";
import { FindingRule } from "./FindingRule";
import { GetFindingResponse } from "./GetFindingResponse";
import { GetRuleVersionHistoryData } from "./GetRuleVersionHistoryData";
import { GetRuleVersionHistoryResponse } from "./GetRuleVersionHistoryResponse";
import { GetSBOMResponse } from "./GetSBOMResponse";
import { HistoricalJobListMeta } from "./HistoricalJobListMeta";
import { HistoricalJobOptions } from "./HistoricalJobOptions";
import { HistoricalJobQuery } from "./HistoricalJobQuery";
import { HistoricalJobResponse } from "./HistoricalJobResponse";
import { HistoricalJobResponseAttributes } from "./HistoricalJobResponseAttributes";
import { HistoricalJobResponseData } from "./HistoricalJobResponseData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { JobCreateResponse } from "./JobCreateResponse";
import { JobCreateResponseData } from "./JobCreateResponseData";
import { JobDefinition } from "./JobDefinition";
import { JobDefinitionFromRule } from "./JobDefinitionFromRule";
import { Library } from "./Library";
import { Links } from "./Links";
import { ListFindingsMeta } from "./ListFindingsMeta";
import { ListFindingsPage } from "./ListFindingsPage";
import { ListFindingsResponse } from "./ListFindingsResponse";
import { ListHistoricalJobsResponse } from "./ListHistoricalJobsResponse";
import { ListVulnerabilitiesResponse } from "./ListVulnerabilitiesResponse";
import { ListVulnerableAssetsResponse } from "./ListVulnerableAssetsResponse";
import { Metadata } from "./Metadata";
import { NotificationRule } from "./NotificationRule";
import { NotificationRuleAttributes } from "./NotificationRuleAttributes";
import { NotificationRuleResponse } from "./NotificationRuleResponse";
import { Pagination } from "./Pagination";
import { PatchNotificationRuleParameters } from "./PatchNotificationRuleParameters";
import { PatchNotificationRuleParametersData } from "./PatchNotificationRuleParametersData";
import { PatchNotificationRuleParametersDataAttributes } from "./PatchNotificationRuleParametersDataAttributes";
import { Remediation } from "./Remediation";
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { RuleUser } from "./RuleUser";
import { RuleVersionHistory } from "./RuleVersionHistory";
import { RuleVersionUpdate } from "./RuleVersionUpdate";
import { RuleVersions } from "./RuleVersions";
import { RunHistoricalJobRequest } from "./RunHistoricalJobRequest";
import { RunHistoricalJobRequestAttributes } from "./RunHistoricalJobRequestAttributes";
import { RunHistoricalJobRequestData } from "./RunHistoricalJobRequestData";
import { SBOM } from "./SBOM";
import { SBOMAttributes } from "./SBOMAttributes";
import { SBOMComponent } from "./SBOMComponent";
import { SBOMMetadata } from "./SBOMMetadata";
import { SBOMMetadataComponent } from "./SBOMMetadataComponent";
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
import { SecurityMonitoringRuleTestRequest } from "./SecurityMonitoringRuleTestRequest";
import { SecurityMonitoringRuleTestResponse } from "./SecurityMonitoringRuleTestResponse";
import { SecurityMonitoringRuleThirdPartyOptions } from "./SecurityMonitoringRuleThirdPartyOptions";
import { SecurityMonitoringRuleUpdatePayload } from "./SecurityMonitoringRuleUpdatePayload";
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
import { Vulnerability } from "./Vulnerability";
import { VulnerabilityAttributes } from "./VulnerabilityAttributes";
import { VulnerabilityCvss } from "./VulnerabilityCvss";
import { VulnerabilityDependencyLocations } from "./VulnerabilityDependencyLocations";
import { VulnerabilityRelationships } from "./VulnerabilityRelationships";
import { VulnerabilityRelationshipsAffects } from "./VulnerabilityRelationshipsAffects";
import { VulnerabilityRelationshipsAffectsData } from "./VulnerabilityRelationshipsAffectsData";
import { VulnerabilityRisks } from "./VulnerabilityRisks";

const primitives = [
  "string",
  "boolean",
  "double",
  "integer",
  "long",
  "float",
  "number",
];

const ARRAY_PREFIX = "Array<";
const MAP_PREFIX = "{ [key: string]: ";
const TUPLE_PREFIX = "[";

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "text/json": 100,
  "application/octet-stream": 0,
};

const enumsMap: { [key: string]: any[] } = {
  AssetEntityType: ["assets"],
  AssetType: ["Repository", "Service", "Host", "HostImage", "Image"],
  CloudConfigurationRuleType: ["cloud_configuration"],
  ConvertJobResultsToSignalsDataType: [
    "historicalDetectionsJobResultSignalConversion",
  ],
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
  GetRuleVersionHistoryDataType: ["GetRuleVersionHistoryResponse"],
  HistoricalJobDataType: ["historicalDetectionsJob"],
  NotificationRulesType: ["notification_rules"],
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
  ],
  RuleVersionUpdateType: ["create", "update", "delete"],
  RunHistoricalJobRequestDataType: ["historicalDetectionsJobCreate"],
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
  SBOMType: ["sboms"],
  SecurityFilterFilteredDataType: ["logs"],
  SecurityFilterType: ["security_filters"],
  SecurityMonitoringFilterAction: ["require", "suppress"],
  SecurityMonitoringRuleCaseActionType: ["block_ip", "block_user"],
  SecurityMonitoringRuleDetectionMethod: [
    "threshold",
    "new_value",
    "anomaly_detection",
    "impossible_travel",
    "hardcoded",
    "third_party",
    "anomaly_threshold",
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
  SecurityMonitoringRuleSeverity: ["info", "low", "medium", "high", "critical"],
  SecurityMonitoringRuleTypeCreate: [
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
  ],
  SecurityMonitoringRuleTypeTest: ["log_detection"],
  SecurityMonitoringSignalArchiveReason: [
    "none",
    "false_positive",
    "testing_or_maintenance",
    "investigated_case_opened",
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
  ],
  SecurityMonitoringSuppressionType: ["suppressions"],
  SpecVersion: ["1.0", "1.1", "1.2", "1.3", "1.4", "1.5"],
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
};

const typeMap: { [index: string]: any } = {
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
  CreateNotificationRuleParameters: CreateNotificationRuleParameters,
  CreateNotificationRuleParametersData: CreateNotificationRuleParametersData,
  CreateNotificationRuleParametersDataAttributes:
    CreateNotificationRuleParametersDataAttributes,
  DependencyLocation: DependencyLocation,
  DetailedFinding: DetailedFinding,
  DetailedFindingAttributes: DetailedFindingAttributes,
  EPSS: EPSS,
  Finding: Finding,
  FindingAttributes: FindingAttributes,
  FindingMute: FindingMute,
  FindingRule: FindingRule,
  GetFindingResponse: GetFindingResponse,
  GetRuleVersionHistoryData: GetRuleVersionHistoryData,
  GetRuleVersionHistoryResponse: GetRuleVersionHistoryResponse,
  GetSBOMResponse: GetSBOMResponse,
  HistoricalJobListMeta: HistoricalJobListMeta,
  HistoricalJobOptions: HistoricalJobOptions,
  HistoricalJobQuery: HistoricalJobQuery,
  HistoricalJobResponse: HistoricalJobResponse,
  HistoricalJobResponseAttributes: HistoricalJobResponseAttributes,
  HistoricalJobResponseData: HistoricalJobResponseData,
  JSONAPIErrorItem: JSONAPIErrorItem,
  JSONAPIErrorItemSource: JSONAPIErrorItemSource,
  JSONAPIErrorResponse: JSONAPIErrorResponse,
  JobCreateResponse: JobCreateResponse,
  JobCreateResponseData: JobCreateResponseData,
  JobDefinition: JobDefinition,
  JobDefinitionFromRule: JobDefinitionFromRule,
  Library: Library,
  Links: Links,
  ListFindingsMeta: ListFindingsMeta,
  ListFindingsPage: ListFindingsPage,
  ListFindingsResponse: ListFindingsResponse,
  ListHistoricalJobsResponse: ListHistoricalJobsResponse,
  ListVulnerabilitiesResponse: ListVulnerabilitiesResponse,
  ListVulnerableAssetsResponse: ListVulnerableAssetsResponse,
  Metadata: Metadata,
  NotificationRule: NotificationRule,
  NotificationRuleAttributes: NotificationRuleAttributes,
  NotificationRuleResponse: NotificationRuleResponse,
  Pagination: Pagination,
  PatchNotificationRuleParameters: PatchNotificationRuleParameters,
  PatchNotificationRuleParametersData: PatchNotificationRuleParametersData,
  PatchNotificationRuleParametersDataAttributes:
    PatchNotificationRuleParametersDataAttributes,
  Remediation: Remediation,
  ResponseMetaAttributes: ResponseMetaAttributes,
  RuleUser: RuleUser,
  RuleVersionHistory: RuleVersionHistory,
  RuleVersionUpdate: RuleVersionUpdate,
  RuleVersions: RuleVersions,
  RunHistoricalJobRequest: RunHistoricalJobRequest,
  RunHistoricalJobRequestAttributes: RunHistoricalJobRequestAttributes,
  RunHistoricalJobRequestData: RunHistoricalJobRequestData,
  SBOM: SBOM,
  SBOMAttributes: SBOMAttributes,
  SBOMComponent: SBOMComponent,
  SBOMMetadata: SBOMMetadata,
  SBOMMetadataComponent: SBOMMetadataComponent,
  SecurityFilter: SecurityFilter,
  SecurityFilterAttributes: SecurityFilterAttributes,
  SecurityFilterCreateAttributes: SecurityFilterCreateAttributes,
  SecurityFilterCreateData: SecurityFilterCreateData,
  SecurityFilterCreateRequest: SecurityFilterCreateRequest,
  SecurityFilterExclusionFilter: SecurityFilterExclusionFilter,
  SecurityFilterExclusionFilterResponse: SecurityFilterExclusionFilterResponse,
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
  SecurityMonitoringRuleConvertResponse: SecurityMonitoringRuleConvertResponse,
  SecurityMonitoringRuleImpossibleTravelOptions:
    SecurityMonitoringRuleImpossibleTravelOptions,
  SecurityMonitoringRuleNewValueOptions: SecurityMonitoringRuleNewValueOptions,
  SecurityMonitoringRuleOptions: SecurityMonitoringRuleOptions,
  SecurityMonitoringRuleQueryPayload: SecurityMonitoringRuleQueryPayload,
  SecurityMonitoringRuleQueryPayloadData:
    SecurityMonitoringRuleQueryPayloadData,
  SecurityMonitoringRuleTestRequest: SecurityMonitoringRuleTestRequest,
  SecurityMonitoringRuleTestResponse: SecurityMonitoringRuleTestResponse,
  SecurityMonitoringRuleThirdPartyOptions:
    SecurityMonitoringRuleThirdPartyOptions,
  SecurityMonitoringRuleUpdatePayload: SecurityMonitoringRuleUpdatePayload,
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
  SecurityMonitoringSignalsListResponse: SecurityMonitoringSignalsListResponse,
  SecurityMonitoringSignalsListResponseLinks:
    SecurityMonitoringSignalsListResponseLinks,
  SecurityMonitoringSignalsListResponseMeta:
    SecurityMonitoringSignalsListResponseMeta,
  SecurityMonitoringSignalsListResponseMetaPage:
    SecurityMonitoringSignalsListResponseMetaPage,
  SecurityMonitoringStandardRuleCreatePayload:
    SecurityMonitoringStandardRuleCreatePayload,
  SecurityMonitoringStandardRulePayload: SecurityMonitoringStandardRulePayload,
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
  SecurityMonitoringSuppressionResponse: SecurityMonitoringSuppressionResponse,
  SecurityMonitoringSuppressionUpdateAttributes:
    SecurityMonitoringSuppressionUpdateAttributes,
  SecurityMonitoringSuppressionUpdateData:
    SecurityMonitoringSuppressionUpdateData,
  SecurityMonitoringSuppressionUpdateRequest:
    SecurityMonitoringSuppressionUpdateRequest,
  SecurityMonitoringSuppressionsResponse:
    SecurityMonitoringSuppressionsResponse,
  SecurityMonitoringThirdPartyRootQuery: SecurityMonitoringThirdPartyRootQuery,
  SecurityMonitoringThirdPartyRuleCase: SecurityMonitoringThirdPartyRuleCase,
  SecurityMonitoringThirdPartyRuleCaseCreate:
    SecurityMonitoringThirdPartyRuleCaseCreate,
  SecurityMonitoringTriageUser: SecurityMonitoringTriageUser,
  SecurityMonitoringUser: SecurityMonitoringUser,
  Selectors: Selectors,
  Vulnerability: Vulnerability,
  VulnerabilityAttributes: VulnerabilityAttributes,
  VulnerabilityCvss: VulnerabilityCvss,
  VulnerabilityDependencyLocations: VulnerabilityDependencyLocations,
  VulnerabilityRelationships: VulnerabilityRelationships,
  VulnerabilityRelationshipsAffects: VulnerabilityRelationshipsAffects,
  VulnerabilityRelationshipsAffectsData: VulnerabilityRelationshipsAffectsData,
  VulnerabilityRisks: VulnerabilityRisks,
};

const oneOfMap: { [index: string]: string[] } = {
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
};

export class ObjectSerializer {
  public static serialize(data: any, type: string, format: string): any {
    if (data == undefined || type == "any") {
      return data;
    } else if (data instanceof UnparsedObject) {
      return data._data;
    } else if (
      primitives.includes(type.toLowerCase()) &&
      typeof data == type.toLowerCase()
    ) {
      return data;
    } else if (type.startsWith(ARRAY_PREFIX)) {
      if (!Array.isArray(data)) {
        throw new TypeError(`mismatch types '${data}' and '${type}'`);
      }
      // Array<Type> => Type
      const subType: string = type.substring(
        ARRAY_PREFIX.length,
        type.length - 1,
      );
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.serialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(TUPLE_PREFIX)) {
      // We only support homegeneus tuples
      const subType: string = type
        .substring(TUPLE_PREFIX.length, type.length - 1)
        .split(", ")[0];
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.serialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(MAP_PREFIX)) {
      // { [key: string]: Type; } => Type
      const subType: string = type.substring(
        MAP_PREFIX.length,
        type.length - 3,
      );
      const transformedData: { [key: string]: any } = {};
      for (const key in data) {
        transformedData[key] = ObjectSerializer.serialize(
          data[key],
          subType,
          format,
        );
      }
      return transformedData;
    } else if (type === "Date") {
      if ("string" == typeof data) {
        return data;
      }
      if (format == "date" || format == "date-time") {
        return dateToRFC3339String(data);
      } else {
        return data.toISOString();
      }
    } else {
      if (enumsMap[type]) {
        if (enumsMap[type].includes(data)) {
          return data;
        }
        throw new TypeError(`unknown enum value '${data}'`);
      }
      if (oneOfMap[type]) {
        const oneOfs: any[] = [];
        for (const oneOf of oneOfMap[type]) {
          try {
            oneOfs.push(ObjectSerializer.serialize(data, oneOf, format));
          } catch (e) {
            logger.debug(`could not serialize ${oneOf} (${e})`);
          }
        }
        if (oneOfs.length > 1) {
          throw new TypeError(
            `${data} matches multiple types from ${oneOfMap[type]} ${oneOfs}`,
          );
        }
        if (oneOfs.length == 0) {
          throw new TypeError(
            `${data} doesn't match any type from ${oneOfMap[type]} ${oneOfs}`,
          );
        }
        return oneOfs[0];
      }

      if (!typeMap[type]) {
        // dont know the type
        throw new TypeError(`unknown type '${type}'`);
      }

      // get the map for the correct type.
      const attributesMap = typeMap[type].getAttributeTypeMap();
      const instance: { [index: string]: any } = {};

      for (const attributeName in data) {
        const attributeObj = attributesMap[attributeName];
        if (
          attributeName === "_unparsed" ||
          attributeName === "additionalProperties"
        ) {
          continue;
        } else if (
          attributeObj === undefined &&
          !("additionalProperties" in attributesMap)
        ) {
          throw new Error(
            "unexpected attribute " + attributeName + " of type " + type,
          );
        } else if (attributeObj) {
          instance[attributeObj.baseName] = ObjectSerializer.serialize(
            data[attributeName],
            attributeObj.type,
            attributeObj.format,
          );
        }
      }

      if (data.additionalProperties) {
        const additionalPropertiesMap = attributesMap["additionalProperties"];
        if (additionalPropertiesMap) {
          for (const key in data.additionalProperties) {
            instance[key] = ObjectSerializer.serialize(
              data.additionalProperties[key],
              additionalPropertiesMap.type,
              additionalPropertiesMap.format,
            );
          }
        } else {
          throw new Error(`additionalProperties found in ${type}`);
        }
      }

      // check for required properties
      for (const attributeName in attributesMap) {
        const attributeObj = attributesMap[attributeName];
        if (
          attributeObj?.required &&
          instance[attributeObj.baseName] === undefined
        ) {
          throw new Error(
            `missing required property '${attributeObj.baseName}'`,
          );
        }
      }

      return instance;
    }
  }

  public static deserialize(data: any, type: string, format: string = ""): any {
    if (data == undefined || type == "any") {
      return data;
    } else if (
      primitives.includes(type.toLowerCase()) &&
      typeof data == type.toLowerCase()
    ) {
      return data;
    } else if (type.startsWith(ARRAY_PREFIX)) {
      // Assert the passed data is Array type
      if (!Array.isArray(data)) {
        throw new TypeError(`mismatch types '${data}' and '${type}'`);
      }
      // Array<Type> => Type
      const subType: string = type.substring(
        ARRAY_PREFIX.length,
        type.length - 1,
      );
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.deserialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(TUPLE_PREFIX)) {
      // [Type,...] => Type
      const subType: string = type
        .substring(TUPLE_PREFIX.length, type.length - 1)
        .split(", ")[0];
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.deserialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(MAP_PREFIX)) {
      // { [key: string]: Type; } => Type
      const subType: string = type.substring(
        MAP_PREFIX.length,
        type.length - 3,
      );
      const transformedData: { [key: string]: any } = {};
      for (const key in data) {
        transformedData[key] = ObjectSerializer.deserialize(
          data[key],
          subType,
          format,
        );
      }
      return transformedData;
    } else if (type === "Date") {
      try {
        return dateFromRFC3339String(data);
      } catch {
        return new Date(data);
      }
    } else {
      if (enumsMap[type]) {
        if (enumsMap[type].includes(data)) {
          return data;
        }
        return new UnparsedObject(data);
      }
      if (oneOfMap[type]) {
        const oneOfs: any[] = [];
        for (const oneOf of oneOfMap[type]) {
          try {
            const d = ObjectSerializer.deserialize(data, oneOf, format);
            if (!d?._unparsed) {
              oneOfs.push(d);
            }
          } catch (e) {
            logger.debug(`could not deserialize ${oneOf} (${e})`);
          }
        }
        if (oneOfs.length != 1) {
          return new UnparsedObject(data);
        }
        return oneOfs[0];
      }

      if (!typeMap[type]) {
        // dont know the type
        throw new TypeError(`unknown type '${type}'`);
      }

      const instance = new typeMap[type]();
      const attributesMap = typeMap[type].getAttributeTypeMap();
      const attributesBaseNames = Object.keys(attributesMap).reduce(
        (o, key) => Object.assign(o, { [attributesMap[key].baseName]: "" }),
        {},
      );
      const extraAttributes = Object.keys(data).filter(
        (key) =>
          !Object.prototype.hasOwnProperty.call(attributesBaseNames, key),
      );

      if (extraAttributes.length > 0) {
        if ("additionalProperties" in attributesMap) {
          if (!instance.additionalProperties) {
            instance.additionalProperties = {};
          }

          const attributeObj = attributesMap["additionalProperties"];
          for (const key in extraAttributes) {
            instance.additionalProperties[extraAttributes[key]] =
              ObjectSerializer.deserialize(
                data[extraAttributes[key]],
                attributeObj.type,
                attributeObj.format,
              );
          }
        } else {
          throw new Error(
            `found extra attributes '${extraAttributes}' in ${type}`,
          );
        }
      }

      for (const attributeName in attributesMap) {
        const attributeObj = attributesMap[attributeName];
        if (attributeName === "additionalProperties") {
          continue;
        }

        instance[attributeName] = ObjectSerializer.deserialize(
          data[attributeObj.baseName],
          attributeObj.type,
          attributeObj.format,
        );

        // check for required properties
        if (attributeObj?.required && instance[attributeName] === undefined) {
          throw new Error(`missing required property '${attributeName}'`);
        }

        if (
          instance[attributeName] instanceof UnparsedObject ||
          instance[attributeName]?._unparsed
        ) {
          instance._unparsed = true;
        }

        if (Array.isArray(instance[attributeName])) {
          for (const d of instance[attributeName]) {
            if (d instanceof UnparsedObject || d?._unparsed) {
              instance._unparsed = true;
              break;
            }
          }
        }
      }

      return instance;
    }
  }

  /**
   * Normalize media type
   *
   * We currently do not handle any media types attributes, i.e. anything
   * after a semicolon. All content is assumed to be UTF-8 compatible.
   */
  public static normalizeMediaType(
    mediaType: string | undefined,
  ): string | undefined {
    if (mediaType === undefined) {
      return undefined;
    }
    return mediaType.split(";")[0].trim().toLowerCase();
  }

  /**
   * From a list of possible media types, choose the one we can handle best.
   *
   * The order of the given media types does not have any impact on the choice
   * made.
   */
  public static getPreferredMediaType(mediaTypes: Array<string>): string {
    /** According to OAS 3 we should default to json */
    if (!mediaTypes) {
      return "application/json";
    }

    const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
    let selectedMediaType: string | undefined = undefined;
    let selectedRank: number = -Infinity;
    for (const mediaType of normalMediaTypes) {
      if (mediaType === undefined) {
        continue;
      }
      const supported = supportedMediaTypes[mediaType];
      if (supported !== undefined && supported > selectedRank) {
        selectedMediaType = mediaType;
        selectedRank = supported;
      }
    }

    if (selectedMediaType === undefined) {
      throw new Error(
        "None of the given media types are supported: " + mediaTypes.join(", "),
      );
    }

    return selectedMediaType;
  }

  /**
   * Convert data to a string according the given media type
   */
  public static stringify(data: any, mediaType: string): string {
    if (mediaType === "application/json" || mediaType === "text/json") {
      return JSON.stringify(data);
    }

    throw new Error(
      "The mediaType " +
        mediaType +
        " is not supported by ObjectSerializer.stringify.",
    );
  }

  /**
   * Parse data from a string according to the given media type
   */
  public static parse(rawData: string, mediaType: string | undefined): any {
    try {
      return JSON.parse(rawData);
    } catch (error) {
      logger.debug(`could not parse ${mediaType}: ${error}`);
      return rawData;
    }
  }
}
