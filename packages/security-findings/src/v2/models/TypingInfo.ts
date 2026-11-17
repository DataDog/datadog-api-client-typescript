import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { Advisory } from "./Advisory";
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
import { CaseInsightsItems } from "./CaseInsightsItems";
import { CaseManagementProject } from "./CaseManagementProject";
import { CaseManagementProjectData } from "./CaseManagementProjectData";
import { CodeLocation } from "./CodeLocation";
import { CreateCaseRequestArray } from "./CreateCaseRequestArray";
import { CreateCaseRequestData } from "./CreateCaseRequestData";
import { CreateCaseRequestDataAttributes } from "./CreateCaseRequestDataAttributes";
import { CreateCaseRequestDataRelationships } from "./CreateCaseRequestDataRelationships";
import { CreateJiraIssueRequestArray } from "./CreateJiraIssueRequestArray";
import { CreateJiraIssueRequestData } from "./CreateJiraIssueRequestData";
import { CreateJiraIssueRequestDataAttributes } from "./CreateJiraIssueRequestDataAttributes";
import { CreateJiraIssueRequestDataRelationships } from "./CreateJiraIssueRequestDataRelationships";
import { CreateLinearIssueRequestArray } from "./CreateLinearIssueRequestArray";
import { CreateLinearIssueRequestData } from "./CreateLinearIssueRequestData";
import { CreateLinearIssueRequestDataAttributes } from "./CreateLinearIssueRequestDataAttributes";
import { CreateLinearIssueRequestDataRelationships } from "./CreateLinearIssueRequestDataRelationships";
import { CreateServiceNowTicketRequestArray } from "./CreateServiceNowTicketRequestArray";
import { CreateServiceNowTicketRequestData } from "./CreateServiceNowTicketRequestData";
import { CreateServiceNowTicketRequestDataAttributes } from "./CreateServiceNowTicketRequestDataAttributes";
import { CreateServiceNowTicketRequestDataRelationships } from "./CreateServiceNowTicketRequestDataRelationships";
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
import { DefaultInboxRuleAttributesResponse } from "./DefaultInboxRuleAttributesResponse";
import { DefaultInboxRuleDataResponse } from "./DefaultInboxRuleDataResponse";
import { DefaultInboxRuleResponse } from "./DefaultInboxRuleResponse";
import { DefaultInboxRulesResponse } from "./DefaultInboxRulesResponse";
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
import { DueDateRuleDataUpdate } from "./DueDateRuleDataUpdate";
import { DueDateRuleReorderItem } from "./DueDateRuleReorderItem";
import { DueDateRuleReorderRequest } from "./DueDateRuleReorderRequest";
import { DueDateRuleReorderResponse } from "./DueDateRuleReorderResponse";
import { DueDateRuleResponse } from "./DueDateRuleResponse";
import { DueDateRuleUpdateRequest } from "./DueDateRuleUpdateRequest";
import { DueDateRulesResponse } from "./DueDateRulesResponse";
import { EPSS } from "./EPSS";
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
import { GetFindingResponse } from "./GetFindingResponse";
import { GetSBOMResponse } from "./GetSBOMResponse";
import { InboxRuleAction } from "./InboxRuleAction";
import { InboxRuleAttributesCreate } from "./InboxRuleAttributesCreate";
import { InboxRuleAttributesResponse } from "./InboxRuleAttributesResponse";
import { InboxRuleCreateRequest } from "./InboxRuleCreateRequest";
import { InboxRuleDataCreate } from "./InboxRuleDataCreate";
import { InboxRuleDataResponse } from "./InboxRuleDataResponse";
import { InboxRuleDataUpdate } from "./InboxRuleDataUpdate";
import { InboxRuleReorderItem } from "./InboxRuleReorderItem";
import { InboxRuleReorderRequest } from "./InboxRuleReorderRequest";
import { InboxRuleReorderResponse } from "./InboxRuleReorderResponse";
import { InboxRuleResponse } from "./InboxRuleResponse";
import { InboxRuleUpdateRequest } from "./InboxRuleUpdateRequest";
import { InboxRulesResponse } from "./InboxRulesResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { Library } from "./Library";
import { Links } from "./Links";
import { ListAssetsSBOMsResponse } from "./ListAssetsSBOMsResponse";
import { ListFindingsMeta } from "./ListFindingsMeta";
import { ListFindingsPage } from "./ListFindingsPage";
import { ListFindingsResponse } from "./ListFindingsResponse";
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
import { MuteRuleDataUpdate } from "./MuteRuleDataUpdate";
import { MuteRuleReorderItem } from "./MuteRuleReorderItem";
import { MuteRuleReorderRequest } from "./MuteRuleReorderRequest";
import { MuteRuleReorderResponse } from "./MuteRuleReorderResponse";
import { MuteRuleResponse } from "./MuteRuleResponse";
import { MuteRuleUpdateRequest } from "./MuteRuleUpdateRequest";
import { MuteRulesResponse } from "./MuteRulesResponse";
import { RelationshipToUser } from "./RelationshipToUser";
import { RelationshipToUserData } from "./RelationshipToUserData";
import { Remediation } from "./Remediation";
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
import { SecurityAutomationRulesLinks } from "./SecurityAutomationRulesLinks";
import { SecurityAutomationRulesMeta } from "./SecurityAutomationRulesMeta";
import { SecurityAutomationRulesPageInfo } from "./SecurityAutomationRulesPageInfo";
import { SecurityFindingsAttributes } from "./SecurityFindingsAttributes";
import { SecurityFindingsData } from "./SecurityFindingsData";
import { SecurityFindingsLinks } from "./SecurityFindingsLinks";
import { SecurityFindingsMeta } from "./SecurityFindingsMeta";
import { SecurityFindingsPage } from "./SecurityFindingsPage";
import { SecurityFindingsSearchRequest } from "./SecurityFindingsSearchRequest";
import { SecurityFindingsSearchRequestData } from "./SecurityFindingsSearchRequestData";
import { SecurityFindingsSearchRequestDataAttributes } from "./SecurityFindingsSearchRequestDataAttributes";
import { SecurityFindingsSearchRequestPage } from "./SecurityFindingsSearchRequestPage";
import { SeverityModifierRuleAttributesCreate } from "./SeverityModifierRuleAttributesCreate";
import { SeverityModifierRuleAttributesResponse } from "./SeverityModifierRuleAttributesResponse";
import { SeverityModifierRuleCreateRequest } from "./SeverityModifierRuleCreateRequest";
import { SeverityModifierRuleDataCreate } from "./SeverityModifierRuleDataCreate";
import { SeverityModifierRuleDataResponse } from "./SeverityModifierRuleDataResponse";
import { SeverityModifierRuleDataUpdate } from "./SeverityModifierRuleDataUpdate";
import { SeverityModifierRuleReorderItem } from "./SeverityModifierRuleReorderItem";
import { SeverityModifierRuleReorderRequest } from "./SeverityModifierRuleReorderRequest";
import { SeverityModifierRuleReorderResponse } from "./SeverityModifierRuleReorderResponse";
import { SeverityModifierRuleResponse } from "./SeverityModifierRuleResponse";
import { SeverityModifierRuleSetAction } from "./SeverityModifierRuleSetAction";
import { SeverityModifierRuleShiftAction } from "./SeverityModifierRuleShiftAction";
import { SeverityModifierRuleUpdateRequest } from "./SeverityModifierRuleUpdateRequest";
import { SeverityModifierRulesResponse } from "./SeverityModifierRulesResponse";
import { SeverityOverrideClear } from "./SeverityOverrideClear";
import { SeverityOverrideRequest } from "./SeverityOverrideRequest";
import { SeverityOverrideRequestData } from "./SeverityOverrideRequestData";
import { SeverityOverrideRequestDataAttributes } from "./SeverityOverrideRequestDataAttributes";
import { SeverityOverrideRequestDataRelationships } from "./SeverityOverrideRequestDataRelationships";
import { SeverityOverrideResponse } from "./SeverityOverrideResponse";
import { SeverityOverrideResponseData } from "./SeverityOverrideResponseData";
import { SeverityOverrideResponseMeta } from "./SeverityOverrideResponseMeta";
import { SeverityOverrideResult } from "./SeverityOverrideResult";
import { SeverityOverrideSet } from "./SeverityOverrideSet";
import { TicketCreationRuleAction } from "./TicketCreationRuleAction";
import { TicketCreationRuleActionResponse } from "./TicketCreationRuleActionResponse";
import { TicketCreationRuleAttributesCreate } from "./TicketCreationRuleAttributesCreate";
import { TicketCreationRuleAttributesResponse } from "./TicketCreationRuleAttributesResponse";
import { TicketCreationRuleCreateRequest } from "./TicketCreationRuleCreateRequest";
import { TicketCreationRuleDataCreate } from "./TicketCreationRuleDataCreate";
import { TicketCreationRuleDataResponse } from "./TicketCreationRuleDataResponse";
import { TicketCreationRuleDataUpdate } from "./TicketCreationRuleDataUpdate";
import { TicketCreationRuleReorderItem } from "./TicketCreationRuleReorderItem";
import { TicketCreationRuleReorderRequest } from "./TicketCreationRuleReorderRequest";
import { TicketCreationRuleReorderResponse } from "./TicketCreationRuleReorderResponse";
import { TicketCreationRuleResponse } from "./TicketCreationRuleResponse";
import { TicketCreationRuleUpdateRequest } from "./TicketCreationRuleUpdateRequest";
import { TicketCreationRulesResponse } from "./TicketCreationRulesResponse";
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
    CycloneDXComponentType: ["library", "application", "operating-system"],
    DefaultInboxRuleType: ["default_inbox_rules"],
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
    InboxRuleType: ["inbox_rules"],
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
    ScannedAssetMetadataType: ["scanned-assets-metadata"],
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
    ServiceNowTicketsDataType: ["servicenow_tickets"],
    SeverityModifierRuleSetActionType: ["set"],
    SeverityModifierRuleShiftActionType: ["shift"],
    SeverityModifierRuleType: ["severity_modifier_rules"],
    SeverityModifierSeverity: [
      "info_none",
      "low",
      "medium",
      "high",
      "critical",
    ],
    SeverityModifierSeverityDelta: ["up_one", "down_one"],
    SeverityOverrideClearActionType: ["clear"],
    SeverityOverrideDataType: ["severity_override"],
    SeverityOverrideSetActionType: ["set"],
    SeverityOverrideValue: ["critical", "high", "medium", "low", "info"],
    SpecVersion: ["1.0", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6"],
    TicketCreationRuleType: ["ticket_creation_rules"],
    TicketCreationTarget: ["jira", "case_management", "linear"],
    UsersType: ["users"],
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
      "SessionRewritting",
      "SessionTimeout",
      "SqlInjection",
      "Ssrf",
      "StackTraceLeak",
      "TemplateInjection",
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
    SeverityModifierRuleAction: [
      "SeverityModifierRuleSetAction",
      "SeverityModifierRuleShiftAction",
    ],
    SeverityOverrideAttributes: [
      "SeverityOverrideSet",
      "SeverityOverrideClear",
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
    CaseInsightsItems: CaseInsightsItems,
    CaseManagementProject: CaseManagementProject,
    CaseManagementProjectData: CaseManagementProjectData,
    CodeLocation: CodeLocation,
    CreateCaseRequestArray: CreateCaseRequestArray,
    CreateCaseRequestData: CreateCaseRequestData,
    CreateCaseRequestDataAttributes: CreateCaseRequestDataAttributes,
    CreateCaseRequestDataRelationships: CreateCaseRequestDataRelationships,
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
    CreateServiceNowTicketRequestArray: CreateServiceNowTicketRequestArray,
    CreateServiceNowTicketRequestData: CreateServiceNowTicketRequestData,
    CreateServiceNowTicketRequestDataAttributes:
      CreateServiceNowTicketRequestDataAttributes,
    CreateServiceNowTicketRequestDataRelationships:
      CreateServiceNowTicketRequestDataRelationships,
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
    DefaultInboxRuleAttributesResponse: DefaultInboxRuleAttributesResponse,
    DefaultInboxRuleDataResponse: DefaultInboxRuleDataResponse,
    DefaultInboxRuleResponse: DefaultInboxRuleResponse,
    DefaultInboxRulesResponse: DefaultInboxRulesResponse,
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
    DueDateRuleDataUpdate: DueDateRuleDataUpdate,
    DueDateRuleReorderItem: DueDateRuleReorderItem,
    DueDateRuleReorderRequest: DueDateRuleReorderRequest,
    DueDateRuleReorderResponse: DueDateRuleReorderResponse,
    DueDateRuleResponse: DueDateRuleResponse,
    DueDateRuleUpdateRequest: DueDateRuleUpdateRequest,
    DueDateRulesResponse: DueDateRulesResponse,
    EPSS: EPSS,
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
    GetFindingResponse: GetFindingResponse,
    GetSBOMResponse: GetSBOMResponse,
    InboxRuleAction: InboxRuleAction,
    InboxRuleAttributesCreate: InboxRuleAttributesCreate,
    InboxRuleAttributesResponse: InboxRuleAttributesResponse,
    InboxRuleCreateRequest: InboxRuleCreateRequest,
    InboxRuleDataCreate: InboxRuleDataCreate,
    InboxRuleDataResponse: InboxRuleDataResponse,
    InboxRuleDataUpdate: InboxRuleDataUpdate,
    InboxRuleReorderItem: InboxRuleReorderItem,
    InboxRuleReorderRequest: InboxRuleReorderRequest,
    InboxRuleReorderResponse: InboxRuleReorderResponse,
    InboxRuleResponse: InboxRuleResponse,
    InboxRuleUpdateRequest: InboxRuleUpdateRequest,
    InboxRulesResponse: InboxRulesResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    Library: Library,
    Links: Links,
    ListAssetsSBOMsResponse: ListAssetsSBOMsResponse,
    ListFindingsMeta: ListFindingsMeta,
    ListFindingsPage: ListFindingsPage,
    ListFindingsResponse: ListFindingsResponse,
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
    MuteRuleDataUpdate: MuteRuleDataUpdate,
    MuteRuleReorderItem: MuteRuleReorderItem,
    MuteRuleReorderRequest: MuteRuleReorderRequest,
    MuteRuleReorderResponse: MuteRuleReorderResponse,
    MuteRuleResponse: MuteRuleResponse,
    MuteRuleUpdateRequest: MuteRuleUpdateRequest,
    MuteRulesResponse: MuteRulesResponse,
    RelationshipToUser: RelationshipToUser,
    RelationshipToUserData: RelationshipToUserData,
    Remediation: Remediation,
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
    SecurityAutomationRulesLinks: SecurityAutomationRulesLinks,
    SecurityAutomationRulesMeta: SecurityAutomationRulesMeta,
    SecurityAutomationRulesPageInfo: SecurityAutomationRulesPageInfo,
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
    SeverityModifierRuleAttributesCreate: SeverityModifierRuleAttributesCreate,
    SeverityModifierRuleAttributesResponse:
      SeverityModifierRuleAttributesResponse,
    SeverityModifierRuleCreateRequest: SeverityModifierRuleCreateRequest,
    SeverityModifierRuleDataCreate: SeverityModifierRuleDataCreate,
    SeverityModifierRuleDataResponse: SeverityModifierRuleDataResponse,
    SeverityModifierRuleDataUpdate: SeverityModifierRuleDataUpdate,
    SeverityModifierRuleReorderItem: SeverityModifierRuleReorderItem,
    SeverityModifierRuleReorderRequest: SeverityModifierRuleReorderRequest,
    SeverityModifierRuleReorderResponse: SeverityModifierRuleReorderResponse,
    SeverityModifierRuleResponse: SeverityModifierRuleResponse,
    SeverityModifierRuleSetAction: SeverityModifierRuleSetAction,
    SeverityModifierRuleShiftAction: SeverityModifierRuleShiftAction,
    SeverityModifierRuleUpdateRequest: SeverityModifierRuleUpdateRequest,
    SeverityModifierRulesResponse: SeverityModifierRulesResponse,
    SeverityOverrideClear: SeverityOverrideClear,
    SeverityOverrideRequest: SeverityOverrideRequest,
    SeverityOverrideRequestData: SeverityOverrideRequestData,
    SeverityOverrideRequestDataAttributes:
      SeverityOverrideRequestDataAttributes,
    SeverityOverrideRequestDataRelationships:
      SeverityOverrideRequestDataRelationships,
    SeverityOverrideResponse: SeverityOverrideResponse,
    SeverityOverrideResponseData: SeverityOverrideResponseData,
    SeverityOverrideResponseMeta: SeverityOverrideResponseMeta,
    SeverityOverrideResult: SeverityOverrideResult,
    SeverityOverrideSet: SeverityOverrideSet,
    TicketCreationRuleAction: TicketCreationRuleAction,
    TicketCreationRuleActionResponse: TicketCreationRuleActionResponse,
    TicketCreationRuleAttributesCreate: TicketCreationRuleAttributesCreate,
    TicketCreationRuleAttributesResponse: TicketCreationRuleAttributesResponse,
    TicketCreationRuleCreateRequest: TicketCreationRuleCreateRequest,
    TicketCreationRuleDataCreate: TicketCreationRuleDataCreate,
    TicketCreationRuleDataResponse: TicketCreationRuleDataResponse,
    TicketCreationRuleDataUpdate: TicketCreationRuleDataUpdate,
    TicketCreationRuleReorderItem: TicketCreationRuleReorderItem,
    TicketCreationRuleReorderRequest: TicketCreationRuleReorderRequest,
    TicketCreationRuleReorderResponse: TicketCreationRuleReorderResponse,
    TicketCreationRuleResponse: TicketCreationRuleResponse,
    TicketCreationRuleUpdateRequest: TicketCreationRuleUpdateRequest,
    TicketCreationRulesResponse: TicketCreationRulesResponse,
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
