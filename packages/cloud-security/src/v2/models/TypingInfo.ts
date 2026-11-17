import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { AwsOnDemandAttributes } from "./AwsOnDemandAttributes";
import { AwsOnDemandCreateAttributes } from "./AwsOnDemandCreateAttributes";
import { AwsOnDemandCreateData } from "./AwsOnDemandCreateData";
import { AwsOnDemandCreateRequest } from "./AwsOnDemandCreateRequest";
import { AwsOnDemandData } from "./AwsOnDemandData";
import { AwsOnDemandListResponse } from "./AwsOnDemandListResponse";
import { AwsOnDemandResponse } from "./AwsOnDemandResponse";
import { AwsScanOptionsAttributes } from "./AwsScanOptionsAttributes";
import { AwsScanOptionsCreateAttributes } from "./AwsScanOptionsCreateAttributes";
import { AwsScanOptionsCreateData } from "./AwsScanOptionsCreateData";
import { AwsScanOptionsCreateRequest } from "./AwsScanOptionsCreateRequest";
import { AwsScanOptionsData } from "./AwsScanOptionsData";
import { AwsScanOptionsListResponse } from "./AwsScanOptionsListResponse";
import { AwsScanOptionsResponse } from "./AwsScanOptionsResponse";
import { AwsScanOptionsUpdateAttributes } from "./AwsScanOptionsUpdateAttributes";
import { AwsScanOptionsUpdateData } from "./AwsScanOptionsUpdateData";
import { AwsScanOptionsUpdateRequest } from "./AwsScanOptionsUpdateRequest";
import { AzureScanOptions } from "./AzureScanOptions";
import { AzureScanOptionsArray } from "./AzureScanOptionsArray";
import { AzureScanOptionsData } from "./AzureScanOptionsData";
import { AzureScanOptionsDataAttributes } from "./AzureScanOptionsDataAttributes";
import { AzureScanOptionsInputUpdate } from "./AzureScanOptionsInputUpdate";
import { AzureScanOptionsInputUpdateData } from "./AzureScanOptionsInputUpdateData";
import { AzureScanOptionsInputUpdateDataAttributes } from "./AzureScanOptionsInputUpdateDataAttributes";
import { CSMAgentsMetadata } from "./CSMAgentsMetadata";
import { CreateCustomFrameworkRequest } from "./CreateCustomFrameworkRequest";
import { CreateCustomFrameworkResponse } from "./CreateCustomFrameworkResponse";
import { CsmAgentData } from "./CsmAgentData";
import { CsmAgentlessHostAttributes } from "./CsmAgentlessHostAttributes";
import { CsmAgentlessHostData } from "./CsmAgentlessHostData";
import { CsmAgentlessHostFacetAttributes } from "./CsmAgentlessHostFacetAttributes";
import { CsmAgentlessHostFacetData } from "./CsmAgentlessHostFacetData";
import { CsmAgentlessHostFacetsResponse } from "./CsmAgentlessHostFacetsResponse";
import { CsmAgentlessHostsResponse } from "./CsmAgentlessHostsResponse";
import { CsmAgentsAttributes } from "./CsmAgentsAttributes";
import { CsmAgentsResponse } from "./CsmAgentsResponse";
import { CsmCloudAccountsCoverageAnalysisAttributes } from "./CsmCloudAccountsCoverageAnalysisAttributes";
import { CsmCloudAccountsCoverageAnalysisData } from "./CsmCloudAccountsCoverageAnalysisData";
import { CsmCloudAccountsCoverageAnalysisResponse } from "./CsmCloudAccountsCoverageAnalysisResponse";
import { CsmCoverageAnalysis } from "./CsmCoverageAnalysis";
import { CsmHostFacetInfoAttributes } from "./CsmHostFacetInfoAttributes";
import { CsmHostFacetInfoData } from "./CsmHostFacetInfoData";
import { CsmHostFacetInfoItem } from "./CsmHostFacetInfoItem";
import { CsmHostFacetInfoMeta } from "./CsmHostFacetInfoMeta";
import { CsmHostFacetInfoResponse } from "./CsmHostFacetInfoResponse";
import { CsmHostsAndContainersCoverageAnalysisAttributes } from "./CsmHostsAndContainersCoverageAnalysisAttributes";
import { CsmHostsAndContainersCoverageAnalysisData } from "./CsmHostsAndContainersCoverageAnalysisData";
import { CsmHostsAndContainersCoverageAnalysisResponse } from "./CsmHostsAndContainersCoverageAnalysisResponse";
import { CsmServerlessCoverageAnalysisAttributes } from "./CsmServerlessCoverageAnalysisAttributes";
import { CsmServerlessCoverageAnalysisData } from "./CsmServerlessCoverageAnalysisData";
import { CsmServerlessCoverageAnalysisResponse } from "./CsmServerlessCoverageAnalysisResponse";
import { CsmSettingsMeta } from "./CsmSettingsMeta";
import { CsmUnifiedHostAttributes } from "./CsmUnifiedHostAttributes";
import { CsmUnifiedHostData } from "./CsmUnifiedHostData";
import { CsmUnifiedHostFacetData } from "./CsmUnifiedHostFacetData";
import { CsmUnifiedHostFacetsResponse } from "./CsmUnifiedHostFacetsResponse";
import { CsmUnifiedHostsMeta } from "./CsmUnifiedHostsMeta";
import { CsmUnifiedHostsResponse } from "./CsmUnifiedHostsResponse";
import { CustomFrameworkControl } from "./CustomFrameworkControl";
import { CustomFrameworkData } from "./CustomFrameworkData";
import { CustomFrameworkDataAttributes } from "./CustomFrameworkDataAttributes";
import { CustomFrameworkDataHandleAndVersion } from "./CustomFrameworkDataHandleAndVersion";
import { CustomFrameworkMetadata } from "./CustomFrameworkMetadata";
import { CustomFrameworkRequirement } from "./CustomFrameworkRequirement";
import { CustomFrameworkWithoutRequirements } from "./CustomFrameworkWithoutRequirements";
import { DeleteCustomFrameworkResponse } from "./DeleteCustomFrameworkResponse";
import { FrameworkHandleAndVersionResponseData } from "./FrameworkHandleAndVersionResponseData";
import { FullCustomFrameworkData } from "./FullCustomFrameworkData";
import { FullCustomFrameworkDataAttributes } from "./FullCustomFrameworkDataAttributes";
import { GcpScanOptions } from "./GcpScanOptions";
import { GcpScanOptionsArray } from "./GcpScanOptionsArray";
import { GcpScanOptionsData } from "./GcpScanOptionsData";
import { GcpScanOptionsDataAttributes } from "./GcpScanOptionsDataAttributes";
import { GcpScanOptionsInputUpdate } from "./GcpScanOptionsInputUpdate";
import { GcpScanOptionsInputUpdateData } from "./GcpScanOptionsInputUpdateData";
import { GcpScanOptionsInputUpdateDataAttributes } from "./GcpScanOptionsInputUpdateDataAttributes";
import { GetCustomFrameworkResponse } from "./GetCustomFrameworkResponse";
import { GetResourceEvaluationFiltersResponse } from "./GetResourceEvaluationFiltersResponse";
import { GetResourceEvaluationFiltersResponseData } from "./GetResourceEvaluationFiltersResponseData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { OwnershipEvidenceAttributes } from "./OwnershipEvidenceAttributes";
import { OwnershipEvidenceData } from "./OwnershipEvidenceData";
import { OwnershipEvidenceResponse } from "./OwnershipEvidenceResponse";
import { OwnershipFeedbackRequest } from "./OwnershipFeedbackRequest";
import { OwnershipFeedbackRequestAttributes } from "./OwnershipFeedbackRequestAttributes";
import { OwnershipFeedbackRequestData } from "./OwnershipFeedbackRequestData";
import { OwnershipFeedbackResponse } from "./OwnershipFeedbackResponse";
import { OwnershipFeedbackResultAttributes } from "./OwnershipFeedbackResultAttributes";
import { OwnershipFeedbackResultData } from "./OwnershipFeedbackResultData";
import { OwnershipHistoryAttributes } from "./OwnershipHistoryAttributes";
import { OwnershipHistoryData } from "./OwnershipHistoryData";
import { OwnershipHistoryItem } from "./OwnershipHistoryItem";
import { OwnershipHistoryPagination } from "./OwnershipHistoryPagination";
import { OwnershipHistoryResponse } from "./OwnershipHistoryResponse";
import { OwnershipInferenceAttributes } from "./OwnershipInferenceAttributes";
import { OwnershipInferenceData } from "./OwnershipInferenceData";
import { OwnershipInferenceItem } from "./OwnershipInferenceItem";
import { OwnershipInferenceListAttributes } from "./OwnershipInferenceListAttributes";
import { OwnershipInferenceListData } from "./OwnershipInferenceListData";
import { OwnershipInferenceListResponse } from "./OwnershipInferenceListResponse";
import { OwnershipInferenceResponse } from "./OwnershipInferenceResponse";
import { OwnershipSettingsAttributes } from "./OwnershipSettingsAttributes";
import { OwnershipSettingsData } from "./OwnershipSettingsData";
import { OwnershipSettingsRequest } from "./OwnershipSettingsRequest";
import { OwnershipSettingsRequestAttributes } from "./OwnershipSettingsRequestAttributes";
import { OwnershipSettingsRequestData } from "./OwnershipSettingsRequestData";
import { OwnershipSettingsResponse } from "./OwnershipSettingsResponse";
import { OwnershipUntaggedFindingsAttributes } from "./OwnershipUntaggedFindingsAttributes";
import { OwnershipUntaggedFindingsData } from "./OwnershipUntaggedFindingsData";
import { OwnershipUntaggedFindingsResponse } from "./OwnershipUntaggedFindingsResponse";
import { ResourceFilterAttributes } from "./ResourceFilterAttributes";
import { RuleBasedViewAttributes } from "./RuleBasedViewAttributes";
import { RuleBasedViewComplianceFramework } from "./RuleBasedViewComplianceFramework";
import { RuleBasedViewData } from "./RuleBasedViewData";
import { RuleBasedViewResponse } from "./RuleBasedViewResponse";
import { RuleBasedViewRule } from "./RuleBasedViewRule";
import { RuleBasedViewRuleStats } from "./RuleBasedViewRuleStats";
import { UpdateCustomFrameworkRequest } from "./UpdateCustomFrameworkRequest";
import { UpdateCustomFrameworkResponse } from "./UpdateCustomFrameworkResponse";
import { UpdateResourceEvaluationFiltersRequest } from "./UpdateResourceEvaluationFiltersRequest";
import { UpdateResourceEvaluationFiltersRequestData } from "./UpdateResourceEvaluationFiltersRequestData";
import { UpdateResourceEvaluationFiltersResponse } from "./UpdateResourceEvaluationFiltersResponse";
import { UpdateResourceEvaluationFiltersResponseData } from "./UpdateResourceEvaluationFiltersResponseData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AwsOnDemandType: ["aws_resource"],
    AwsScanOptionsType: ["aws_scan_options"],
    AzureScanOptionsDataType: ["azure_scan_options"],
    AzureScanOptionsInputUpdateDataType: ["azure_scan_options"],
    CSMAgentsType: ["datadog_agent"],
    CsmAgentlessHostFacetType: ["agentless_host_facet"],
    CsmAgentlessHostResourceType: [
      "aws_ec2_instance",
      "azure_virtual_machine_instance",
      "gcp_compute_instance",
      "oci_instance",
    ],
    CsmAgentlessHostType: ["agentless_host"],
    CsmCloudProvider: ["aws", "gcp", "azure", "oci"],
    CsmFacetInfoType: ["facet_info"],
    CsmUnifiedHostFacetType: ["unified_host_facet"],
    CsmUnifiedHostSource: ["agent", "agentless", "both"],
    CsmUnifiedHostType: ["unified_host"],
    CustomFrameworkType: ["custom_framework"],
    GcpScanOptionsDataType: ["gcp_scan_options"],
    GcpScanOptionsInputUpdateDataType: ["gcp_scan_options"],
    OrderDirection: ["asc", "desc"],
    OwnershipConfidenceLevel: ["high", "medium", "low"],
    OwnershipEvidenceType: ["ownership_evidence"],
    OwnershipFeedbackAction: ["confirm", "reject", "correct", "persist"],
    OwnershipFeedbackResultType: ["ownership_feedback_result"],
    OwnershipFeedbackType: ["ownership_feedback"],
    OwnershipHistoryType: ["ownership_history"],
    OwnershipInferenceStatus: [
      "suggested",
      "persisted",
      "overridden",
      "failed",
      "unknown",
    ],
    OwnershipInferenceType: ["ownership_inference"],
    OwnershipInferencesType: ["ownership_inferences"],
    OwnershipOwnerType: ["user", "team", "service", "unknown"],
    OwnershipSettingsType: ["ownership_settings"],
    OwnershipUntaggedFindingsType: ["ownership_untagged_findings"],
    ResourceFilterRequestType: ["csm_resource_filter"],
    RuleBasedViewRuleCategory: [
      "cloud_configuration",
      "infrastructure_configuration",
      "api_security",
    ],
    RuleBasedViewType: ["rule_based_view"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AwsOnDemandAttributes: AwsOnDemandAttributes,
    AwsOnDemandCreateAttributes: AwsOnDemandCreateAttributes,
    AwsOnDemandCreateData: AwsOnDemandCreateData,
    AwsOnDemandCreateRequest: AwsOnDemandCreateRequest,
    AwsOnDemandData: AwsOnDemandData,
    AwsOnDemandListResponse: AwsOnDemandListResponse,
    AwsOnDemandResponse: AwsOnDemandResponse,
    AwsScanOptionsAttributes: AwsScanOptionsAttributes,
    AwsScanOptionsCreateAttributes: AwsScanOptionsCreateAttributes,
    AwsScanOptionsCreateData: AwsScanOptionsCreateData,
    AwsScanOptionsCreateRequest: AwsScanOptionsCreateRequest,
    AwsScanOptionsData: AwsScanOptionsData,
    AwsScanOptionsListResponse: AwsScanOptionsListResponse,
    AwsScanOptionsResponse: AwsScanOptionsResponse,
    AwsScanOptionsUpdateAttributes: AwsScanOptionsUpdateAttributes,
    AwsScanOptionsUpdateData: AwsScanOptionsUpdateData,
    AwsScanOptionsUpdateRequest: AwsScanOptionsUpdateRequest,
    AzureScanOptions: AzureScanOptions,
    AzureScanOptionsArray: AzureScanOptionsArray,
    AzureScanOptionsData: AzureScanOptionsData,
    AzureScanOptionsDataAttributes: AzureScanOptionsDataAttributes,
    AzureScanOptionsInputUpdate: AzureScanOptionsInputUpdate,
    AzureScanOptionsInputUpdateData: AzureScanOptionsInputUpdateData,
    AzureScanOptionsInputUpdateDataAttributes:
      AzureScanOptionsInputUpdateDataAttributes,
    CSMAgentsMetadata: CSMAgentsMetadata,
    CreateCustomFrameworkRequest: CreateCustomFrameworkRequest,
    CreateCustomFrameworkResponse: CreateCustomFrameworkResponse,
    CsmAgentData: CsmAgentData,
    CsmAgentlessHostAttributes: CsmAgentlessHostAttributes,
    CsmAgentlessHostData: CsmAgentlessHostData,
    CsmAgentlessHostFacetAttributes: CsmAgentlessHostFacetAttributes,
    CsmAgentlessHostFacetData: CsmAgentlessHostFacetData,
    CsmAgentlessHostFacetsResponse: CsmAgentlessHostFacetsResponse,
    CsmAgentlessHostsResponse: CsmAgentlessHostsResponse,
    CsmAgentsAttributes: CsmAgentsAttributes,
    CsmAgentsResponse: CsmAgentsResponse,
    CsmCloudAccountsCoverageAnalysisAttributes:
      CsmCloudAccountsCoverageAnalysisAttributes,
    CsmCloudAccountsCoverageAnalysisData: CsmCloudAccountsCoverageAnalysisData,
    CsmCloudAccountsCoverageAnalysisResponse:
      CsmCloudAccountsCoverageAnalysisResponse,
    CsmCoverageAnalysis: CsmCoverageAnalysis,
    CsmHostFacetInfoAttributes: CsmHostFacetInfoAttributes,
    CsmHostFacetInfoData: CsmHostFacetInfoData,
    CsmHostFacetInfoItem: CsmHostFacetInfoItem,
    CsmHostFacetInfoMeta: CsmHostFacetInfoMeta,
    CsmHostFacetInfoResponse: CsmHostFacetInfoResponse,
    CsmHostsAndContainersCoverageAnalysisAttributes:
      CsmHostsAndContainersCoverageAnalysisAttributes,
    CsmHostsAndContainersCoverageAnalysisData:
      CsmHostsAndContainersCoverageAnalysisData,
    CsmHostsAndContainersCoverageAnalysisResponse:
      CsmHostsAndContainersCoverageAnalysisResponse,
    CsmServerlessCoverageAnalysisAttributes:
      CsmServerlessCoverageAnalysisAttributes,
    CsmServerlessCoverageAnalysisData: CsmServerlessCoverageAnalysisData,
    CsmServerlessCoverageAnalysisResponse:
      CsmServerlessCoverageAnalysisResponse,
    CsmSettingsMeta: CsmSettingsMeta,
    CsmUnifiedHostAttributes: CsmUnifiedHostAttributes,
    CsmUnifiedHostData: CsmUnifiedHostData,
    CsmUnifiedHostFacetData: CsmUnifiedHostFacetData,
    CsmUnifiedHostFacetsResponse: CsmUnifiedHostFacetsResponse,
    CsmUnifiedHostsMeta: CsmUnifiedHostsMeta,
    CsmUnifiedHostsResponse: CsmUnifiedHostsResponse,
    CustomFrameworkControl: CustomFrameworkControl,
    CustomFrameworkData: CustomFrameworkData,
    CustomFrameworkDataAttributes: CustomFrameworkDataAttributes,
    CustomFrameworkDataHandleAndVersion: CustomFrameworkDataHandleAndVersion,
    CustomFrameworkMetadata: CustomFrameworkMetadata,
    CustomFrameworkRequirement: CustomFrameworkRequirement,
    CustomFrameworkWithoutRequirements: CustomFrameworkWithoutRequirements,
    DeleteCustomFrameworkResponse: DeleteCustomFrameworkResponse,
    FrameworkHandleAndVersionResponseData:
      FrameworkHandleAndVersionResponseData,
    FullCustomFrameworkData: FullCustomFrameworkData,
    FullCustomFrameworkDataAttributes: FullCustomFrameworkDataAttributes,
    GcpScanOptions: GcpScanOptions,
    GcpScanOptionsArray: GcpScanOptionsArray,
    GcpScanOptionsData: GcpScanOptionsData,
    GcpScanOptionsDataAttributes: GcpScanOptionsDataAttributes,
    GcpScanOptionsInputUpdate: GcpScanOptionsInputUpdate,
    GcpScanOptionsInputUpdateData: GcpScanOptionsInputUpdateData,
    GcpScanOptionsInputUpdateDataAttributes:
      GcpScanOptionsInputUpdateDataAttributes,
    GetCustomFrameworkResponse: GetCustomFrameworkResponse,
    GetResourceEvaluationFiltersResponse: GetResourceEvaluationFiltersResponse,
    GetResourceEvaluationFiltersResponseData:
      GetResourceEvaluationFiltersResponseData,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    OwnershipEvidenceAttributes: OwnershipEvidenceAttributes,
    OwnershipEvidenceData: OwnershipEvidenceData,
    OwnershipEvidenceResponse: OwnershipEvidenceResponse,
    OwnershipFeedbackRequest: OwnershipFeedbackRequest,
    OwnershipFeedbackRequestAttributes: OwnershipFeedbackRequestAttributes,
    OwnershipFeedbackRequestData: OwnershipFeedbackRequestData,
    OwnershipFeedbackResponse: OwnershipFeedbackResponse,
    OwnershipFeedbackResultAttributes: OwnershipFeedbackResultAttributes,
    OwnershipFeedbackResultData: OwnershipFeedbackResultData,
    OwnershipHistoryAttributes: OwnershipHistoryAttributes,
    OwnershipHistoryData: OwnershipHistoryData,
    OwnershipHistoryItem: OwnershipHistoryItem,
    OwnershipHistoryPagination: OwnershipHistoryPagination,
    OwnershipHistoryResponse: OwnershipHistoryResponse,
    OwnershipInferenceAttributes: OwnershipInferenceAttributes,
    OwnershipInferenceData: OwnershipInferenceData,
    OwnershipInferenceItem: OwnershipInferenceItem,
    OwnershipInferenceListAttributes: OwnershipInferenceListAttributes,
    OwnershipInferenceListData: OwnershipInferenceListData,
    OwnershipInferenceListResponse: OwnershipInferenceListResponse,
    OwnershipInferenceResponse: OwnershipInferenceResponse,
    OwnershipSettingsAttributes: OwnershipSettingsAttributes,
    OwnershipSettingsData: OwnershipSettingsData,
    OwnershipSettingsRequest: OwnershipSettingsRequest,
    OwnershipSettingsRequestAttributes: OwnershipSettingsRequestAttributes,
    OwnershipSettingsRequestData: OwnershipSettingsRequestData,
    OwnershipSettingsResponse: OwnershipSettingsResponse,
    OwnershipUntaggedFindingsAttributes: OwnershipUntaggedFindingsAttributes,
    OwnershipUntaggedFindingsData: OwnershipUntaggedFindingsData,
    OwnershipUntaggedFindingsResponse: OwnershipUntaggedFindingsResponse,
    ResourceFilterAttributes: ResourceFilterAttributes,
    RuleBasedViewAttributes: RuleBasedViewAttributes,
    RuleBasedViewComplianceFramework: RuleBasedViewComplianceFramework,
    RuleBasedViewData: RuleBasedViewData,
    RuleBasedViewResponse: RuleBasedViewResponse,
    RuleBasedViewRule: RuleBasedViewRule,
    RuleBasedViewRuleStats: RuleBasedViewRuleStats,
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
  },
};
