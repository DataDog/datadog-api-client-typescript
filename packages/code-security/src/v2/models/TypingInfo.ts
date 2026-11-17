import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { AiCustomRuleItem } from "./AiCustomRuleItem";
import { AiCustomRuleRequest } from "./AiCustomRuleRequest";
import { AiCustomRuleRequestAttributes } from "./AiCustomRuleRequestAttributes";
import { AiCustomRuleRequestData } from "./AiCustomRuleRequestData";
import { AiCustomRuleResponse } from "./AiCustomRuleResponse";
import { AiCustomRuleResponseData } from "./AiCustomRuleResponseData";
import { AiCustomRuleRevisionRequest } from "./AiCustomRuleRevisionRequest";
import { AiCustomRuleRevisionRequestAttributes } from "./AiCustomRuleRevisionRequestAttributes";
import { AiCustomRuleRevisionRequestData } from "./AiCustomRuleRevisionRequestData";
import { AiCustomRuleRevisionResponse } from "./AiCustomRuleRevisionResponse";
import { AiCustomRuleRevisionResponseAttributes } from "./AiCustomRuleRevisionResponseAttributes";
import { AiCustomRuleRevisionResponseData } from "./AiCustomRuleRevisionResponseData";
import { AiCustomRuleRevisionsResponse } from "./AiCustomRuleRevisionsResponse";
import { AiCustomRulesetRequest } from "./AiCustomRulesetRequest";
import { AiCustomRulesetRequestAttributes } from "./AiCustomRulesetRequestAttributes";
import { AiCustomRulesetRequestData } from "./AiCustomRulesetRequestData";
import { AiCustomRulesetResponse } from "./AiCustomRulesetResponse";
import { AiCustomRulesetResponseAttributes } from "./AiCustomRulesetResponseAttributes";
import { AiCustomRulesetResponseData } from "./AiCustomRulesetResponseData";
import { AiCustomRulesetUpdateAttributes } from "./AiCustomRulesetUpdateAttributes";
import { AiCustomRulesetUpdateData } from "./AiCustomRulesetUpdateData";
import { AiCustomRulesetUpdateRequest } from "./AiCustomRulesetUpdateRequest";
import { AiCustomRulesetsResponse } from "./AiCustomRulesetsResponse";
import { AiMemoryViolationResultRequest } from "./AiMemoryViolationResultRequest";
import { AiMemoryViolationResultRequestAttributes } from "./AiMemoryViolationResultRequestAttributes";
import { AiMemoryViolationResultRequestData } from "./AiMemoryViolationResultRequestData";
import { AiMemoryViolationResultResponseAttributes } from "./AiMemoryViolationResultResponseAttributes";
import { AiMemoryViolationResultResponseData } from "./AiMemoryViolationResultResponseData";
import { AiMemoryViolationResultsResponse } from "./AiMemoryViolationResultsResponse";
import { AiPromptResponseAttributes } from "./AiPromptResponseAttributes";
import { AiPromptResponseData } from "./AiPromptResponseData";
import { AiPromptsResponse } from "./AiPromptsResponse";
import { AnalysisEdit } from "./AnalysisEdit";
import { AnalysisFix } from "./AnalysisFix";
import { AnalysisPosition } from "./AnalysisPosition";
import { AnalysisRequest } from "./AnalysisRequest";
import { AnalysisRequestData } from "./AnalysisRequestData";
import { AnalysisRequestDataAttributes } from "./AnalysisRequestDataAttributes";
import { AnalysisRequestOptions } from "./AnalysisRequestOptions";
import { AnalysisRequestRule } from "./AnalysisRequestRule";
import { AnalysisRequestRuleArgument } from "./AnalysisRequestRuleArgument";
import { AnalysisRequestRuleTest } from "./AnalysisRequestRuleTest";
import { AnalysisResponse } from "./AnalysisResponse";
import { AnalysisResponseData } from "./AnalysisResponseData";
import { AnalysisResponseDataAttributes } from "./AnalysisResponseDataAttributes";
import { AnalysisRuleResponse } from "./AnalysisRuleResponse";
import { AnalysisViolation } from "./AnalysisViolation";
import { Argument } from "./Argument";
import { AstNode } from "./AstNode";
import { CustomRule } from "./CustomRule";
import { CustomRuleAttributes } from "./CustomRuleAttributes";
import { CustomRuleNullableRevisionEmbedded } from "./CustomRuleNullableRevisionEmbedded";
import { CustomRuleRequest } from "./CustomRuleRequest";
import { CustomRuleRequestData } from "./CustomRuleRequestData";
import { CustomRuleRequestDataAttributes } from "./CustomRuleRequestDataAttributes";
import { CustomRuleResponse } from "./CustomRuleResponse";
import { CustomRuleResponseData } from "./CustomRuleResponseData";
import { CustomRuleRevision } from "./CustomRuleRevision";
import { CustomRuleRevisionAttributes } from "./CustomRuleRevisionAttributes";
import { CustomRuleRevisionEmbedded } from "./CustomRuleRevisionEmbedded";
import { CustomRuleRevisionInput } from "./CustomRuleRevisionInput";
import { CustomRuleRevisionInputAttributes } from "./CustomRuleRevisionInputAttributes";
import { CustomRuleRevisionRequest } from "./CustomRuleRevisionRequest";
import { CustomRuleRevisionRequestData } from "./CustomRuleRevisionRequestData";
import { CustomRuleRevisionResponse } from "./CustomRuleRevisionResponse";
import { CustomRuleRevisionTest } from "./CustomRuleRevisionTest";
import { CustomRuleRevisionsResponse } from "./CustomRuleRevisionsResponse";
import { CustomRuleset } from "./CustomRuleset";
import { CustomRulesetAttributes } from "./CustomRulesetAttributes";
import { CustomRulesetListResponse } from "./CustomRulesetListResponse";
import { CustomRulesetRequest } from "./CustomRulesetRequest";
import { CustomRulesetRequestData } from "./CustomRulesetRequestData";
import { CustomRulesetRequestDataAttributes } from "./CustomRulesetRequestDataAttributes";
import { CustomRulesetResponse } from "./CustomRulesetResponse";
import { CustomRulesetRuleEmbedded } from "./CustomRulesetRuleEmbedded";
import { DefaultRulesetsPerLanguageData } from "./DefaultRulesetsPerLanguageData";
import { DefaultRulesetsPerLanguageDataAttributes } from "./DefaultRulesetsPerLanguageDataAttributes";
import { DefaultRulesetsPerLanguageResponse } from "./DefaultRulesetsPerLanguageResponse";
import { GetAstRequest } from "./GetAstRequest";
import { GetAstRequestData } from "./GetAstRequestData";
import { GetAstRequestDataAttributes } from "./GetAstRequestDataAttributes";
import { GetAstResponse } from "./GetAstResponse";
import { GetAstResponseData } from "./GetAstResponseData";
import { GetAstResponseDataAttributes } from "./GetAstResponseDataAttributes";
import { GetMultipleRulesetsRequest } from "./GetMultipleRulesetsRequest";
import { GetMultipleRulesetsRequestData } from "./GetMultipleRulesetsRequestData";
import { GetMultipleRulesetsRequestDataAttributes } from "./GetMultipleRulesetsRequestDataAttributes";
import { GetMultipleRulesetsResponse } from "./GetMultipleRulesetsResponse";
import { GetMultipleRulesetsResponseData } from "./GetMultipleRulesetsResponseData";
import { GetMultipleRulesetsResponseDataAttributes } from "./GetMultipleRulesetsResponseDataAttributes";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItems";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { LicensesListResponse } from "./LicensesListResponse";
import { LicensesListResponseData } from "./LicensesListResponseData";
import { LicensesListResponseDataAttributes } from "./LicensesListResponseDataAttributes";
import { LicensesListResponseDataAttributesLicensesItems } from "./LicensesListResponseDataAttributesLicensesItems";
import { McpScanRequest } from "./McpScanRequest";
import { McpScanRequestData } from "./McpScanRequestData";
import { McpScanRequestDataAttributes } from "./McpScanRequestDataAttributes";
import { McpScanRequestDataAttributesLibrariesItems } from "./McpScanRequestDataAttributesLibrariesItems";
import { McpScanRequestResponse } from "./McpScanRequestResponse";
import { McpScanRequestResponseData } from "./McpScanRequestResponseData";
import { McpScanRequestResponseDataAttributes } from "./McpScanRequestResponseDataAttributes";
import { NodeTypesResponse } from "./NodeTypesResponse";
import { NodeTypesResponseData } from "./NodeTypesResponseData";
import { NodeTypesResponseDataAttributes } from "./NodeTypesResponseDataAttributes";
import { ResolveVulnerableSymbolsRequest } from "./ResolveVulnerableSymbolsRequest";
import { ResolveVulnerableSymbolsRequestData } from "./ResolveVulnerableSymbolsRequestData";
import { ResolveVulnerableSymbolsRequestDataAttributes } from "./ResolveVulnerableSymbolsRequestDataAttributes";
import { ResolveVulnerableSymbolsResponse } from "./ResolveVulnerableSymbolsResponse";
import { ResolveVulnerableSymbolsResponseData } from "./ResolveVulnerableSymbolsResponseData";
import { ResolveVulnerableSymbolsResponseDataAttributes } from "./ResolveVulnerableSymbolsResponseDataAttributes";
import { ResolveVulnerableSymbolsResponseResults } from "./ResolveVulnerableSymbolsResponseResults";
import { ResolveVulnerableSymbolsResponseResultsVulnerableSymbols } from "./ResolveVulnerableSymbolsResponseResultsVulnerableSymbols";
import { ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols } from "./ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols";
import { RevertCustomRuleRevisionRequest } from "./RevertCustomRuleRevisionRequest";
import { RevertCustomRuleRevisionRequestData } from "./RevertCustomRuleRevisionRequestData";
import { RevertCustomRuleRevisionRequestDataAttributes } from "./RevertCustomRuleRevisionRequestDataAttributes";
import { SastRulesetData } from "./SastRulesetData";
import { SastRulesetDataAttributes } from "./SastRulesetDataAttributes";
import { SastRulesetResponse } from "./SastRulesetResponse";
import { SastRulesetsResponse } from "./SastRulesetsResponse";
import { ScaRequest } from "./ScaRequest";
import { ScaRequestData } from "./ScaRequestData";
import { ScaRequestDataAttributes } from "./ScaRequestDataAttributes";
import { ScaRequestDataAttributesCommit } from "./ScaRequestDataAttributesCommit";
import { ScaRequestDataAttributesDependenciesItems } from "./ScaRequestDataAttributesDependenciesItems";
import { ScaRequestDataAttributesDependenciesItemsLocationsItems } from "./ScaRequestDataAttributesDependenciesItemsLocationsItems";
import { ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition } from "./ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition";
import { ScaRequestDataAttributesDependenciesItemsLocationsItemsNullableFilePosition } from "./ScaRequestDataAttributesDependenciesItemsLocationsItemsNullableFilePosition";
import { ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition } from "./ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition";
import { ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems } from "./ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems";
import { ScaRequestDataAttributesFilesItems } from "./ScaRequestDataAttributesFilesItems";
import { ScaRequestDataAttributesRelationsItems } from "./ScaRequestDataAttributesRelationsItems";
import { ScaRequestDataAttributesRepository } from "./ScaRequestDataAttributesRepository";
import { ScaRequestDataAttributesScanStartTimestamp } from "./ScaRequestDataAttributesScanStartTimestamp";
import { ScaRequestDataAttributesTags } from "./ScaRequestDataAttributesTags";
import { ScaRequestDataAttributesTagsTool } from "./ScaRequestDataAttributesTagsTool";
import { ScaRequestDataAttributesTagsToolGenerator } from "./ScaRequestDataAttributesTagsToolGenerator";
import { ScaRequestDataAttributesVulnerabilitiesItems } from "./ScaRequestDataAttributesVulnerabilitiesItems";
import { ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems } from "./ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems";
import { SecretRuleArray } from "./SecretRuleArray";
import { SecretRuleData } from "./SecretRuleData";
import { SecretRuleDataAttributes } from "./SecretRuleDataAttributes";
import { SecretRuleDataAttributesMatchValidation } from "./SecretRuleDataAttributesMatchValidation";
import { SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems } from "./SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems";
import { SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems } from "./SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AiCustomRuleDataType: ["ai_rule"],
    AiCustomRuleRevisionDataType: ["ai_rule_revision"],
    AiCustomRuleRevisionExecutionMode: ["auto", "manual", "always"],
    AiCustomRulesetDataType: ["ai_ruleset"],
    AiMemoryViolationResultDataType: ["ai_memory_violation_result"],
    AiMemoryViolationType: ["TP", "FP"],
    AiPromptDataType: ["ai_prompt"],
    AnalysisEditType: ["ADD", "UPDATE", "REMOVE"],
    AnalysisRequestDataType: ["analysis_request"],
    AnalysisResponseDataType: ["server_request"],
    CustomRuleDataType: ["custom_rule"],
    CustomRuleRevisionAttributesCategory: [
      "SECURITY",
      "BEST_PRACTICES",
      "CODE_STYLE",
      "ERROR_PRONE",
      "PERFORMANCE",
    ],
    CustomRuleRevisionAttributesSeverity: [
      "ERROR",
      "WARNING",
      "NOTICE",
      "NONE",
    ],
    CustomRuleRevisionDataType: ["custom_rule_revision"],
    CustomRulesetDataType: ["custom_ruleset"],
    DefaultRulesetsPerLanguageDataType: ["defaultRulesetsPerLanguage"],
    GetAstRequestDataType: ["get_ast_request"],
    GetAstResponseDataType: ["get_ast_response"],
    GetMultipleRulesetsRequestDataType: ["get_multiple_rulesets_request"],
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsDataType: [
      "rulesets",
    ],
    GetMultipleRulesetsResponseDataType: ["get_multiple_rulesets_response"],
    Language: [
      "PYTHON",
      "JAVASCRIPT",
      "TYPESCRIPT",
      "JAVA",
      "GO",
      "YAML",
      "RUBY",
      "CSHARP",
      "PHP",
      "KOTLIN",
      "SWIFT",
      "DART",
      "DOCKERFILE",
      "ELIXIR",
      "JSON",
      "RUST",
      "TERRAFORM",
      "STARLARK",
      "BASH",
      "MARKDOWN",
      "APEX",
      "R",
      "SQL",
    ],
    LicensesListResponseDataType: ["licenserequest"],
    McpScanRequestDataType: ["mcpscanrequest"],
    McpScanRequestResponseDataType: ["mcpscanrequestresponse"],
    NodeTypesResponseDataType: ["get_node_types_response"],
    ResolveVulnerableSymbolsRequestDataType: [
      "resolve-vulnerable-symbols-request",
    ],
    ResolveVulnerableSymbolsResponseDataType: [
      "resolve-vulnerable-symbols-response",
    ],
    RevertCustomRuleRevisionDataType: ["revert_custom_rule_revision_request"],
    ScaRequestDataType: ["scarequests"],
    SecretRuleDataType: ["secret_rule"],
  },
  oneOfMap: {
    ScanResultResponse: ["{ [key: string]: any; }"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AiCustomRuleItem: AiCustomRuleItem,
    AiCustomRuleRequest: AiCustomRuleRequest,
    AiCustomRuleRequestAttributes: AiCustomRuleRequestAttributes,
    AiCustomRuleRequestData: AiCustomRuleRequestData,
    AiCustomRuleResponse: AiCustomRuleResponse,
    AiCustomRuleResponseData: AiCustomRuleResponseData,
    AiCustomRuleRevisionRequest: AiCustomRuleRevisionRequest,
    AiCustomRuleRevisionRequestAttributes:
      AiCustomRuleRevisionRequestAttributes,
    AiCustomRuleRevisionRequestData: AiCustomRuleRevisionRequestData,
    AiCustomRuleRevisionResponse: AiCustomRuleRevisionResponse,
    AiCustomRuleRevisionResponseAttributes:
      AiCustomRuleRevisionResponseAttributes,
    AiCustomRuleRevisionResponseData: AiCustomRuleRevisionResponseData,
    AiCustomRuleRevisionsResponse: AiCustomRuleRevisionsResponse,
    AiCustomRulesetRequest: AiCustomRulesetRequest,
    AiCustomRulesetRequestAttributes: AiCustomRulesetRequestAttributes,
    AiCustomRulesetRequestData: AiCustomRulesetRequestData,
    AiCustomRulesetResponse: AiCustomRulesetResponse,
    AiCustomRulesetResponseAttributes: AiCustomRulesetResponseAttributes,
    AiCustomRulesetResponseData: AiCustomRulesetResponseData,
    AiCustomRulesetUpdateAttributes: AiCustomRulesetUpdateAttributes,
    AiCustomRulesetUpdateData: AiCustomRulesetUpdateData,
    AiCustomRulesetUpdateRequest: AiCustomRulesetUpdateRequest,
    AiCustomRulesetsResponse: AiCustomRulesetsResponse,
    AiMemoryViolationResultRequest: AiMemoryViolationResultRequest,
    AiMemoryViolationResultRequestAttributes:
      AiMemoryViolationResultRequestAttributes,
    AiMemoryViolationResultRequestData: AiMemoryViolationResultRequestData,
    AiMemoryViolationResultResponseAttributes:
      AiMemoryViolationResultResponseAttributes,
    AiMemoryViolationResultResponseData: AiMemoryViolationResultResponseData,
    AiMemoryViolationResultsResponse: AiMemoryViolationResultsResponse,
    AiPromptResponseAttributes: AiPromptResponseAttributes,
    AiPromptResponseData: AiPromptResponseData,
    AiPromptsResponse: AiPromptsResponse,
    AnalysisEdit: AnalysisEdit,
    AnalysisFix: AnalysisFix,
    AnalysisPosition: AnalysisPosition,
    AnalysisRequest: AnalysisRequest,
    AnalysisRequestData: AnalysisRequestData,
    AnalysisRequestDataAttributes: AnalysisRequestDataAttributes,
    AnalysisRequestOptions: AnalysisRequestOptions,
    AnalysisRequestRule: AnalysisRequestRule,
    AnalysisRequestRuleArgument: AnalysisRequestRuleArgument,
    AnalysisRequestRuleTest: AnalysisRequestRuleTest,
    AnalysisResponse: AnalysisResponse,
    AnalysisResponseData: AnalysisResponseData,
    AnalysisResponseDataAttributes: AnalysisResponseDataAttributes,
    AnalysisRuleResponse: AnalysisRuleResponse,
    AnalysisViolation: AnalysisViolation,
    Argument: Argument,
    AstNode: AstNode,
    CustomRule: CustomRule,
    CustomRuleAttributes: CustomRuleAttributes,
    CustomRuleNullableRevisionEmbedded: CustomRuleNullableRevisionEmbedded,
    CustomRuleRequest: CustomRuleRequest,
    CustomRuleRequestData: CustomRuleRequestData,
    CustomRuleRequestDataAttributes: CustomRuleRequestDataAttributes,
    CustomRuleResponse: CustomRuleResponse,
    CustomRuleResponseData: CustomRuleResponseData,
    CustomRuleRevision: CustomRuleRevision,
    CustomRuleRevisionAttributes: CustomRuleRevisionAttributes,
    CustomRuleRevisionEmbedded: CustomRuleRevisionEmbedded,
    CustomRuleRevisionInput: CustomRuleRevisionInput,
    CustomRuleRevisionInputAttributes: CustomRuleRevisionInputAttributes,
    CustomRuleRevisionRequest: CustomRuleRevisionRequest,
    CustomRuleRevisionRequestData: CustomRuleRevisionRequestData,
    CustomRuleRevisionResponse: CustomRuleRevisionResponse,
    CustomRuleRevisionTest: CustomRuleRevisionTest,
    CustomRuleRevisionsResponse: CustomRuleRevisionsResponse,
    CustomRuleset: CustomRuleset,
    CustomRulesetAttributes: CustomRulesetAttributes,
    CustomRulesetListResponse: CustomRulesetListResponse,
    CustomRulesetRequest: CustomRulesetRequest,
    CustomRulesetRequestData: CustomRulesetRequestData,
    CustomRulesetRequestDataAttributes: CustomRulesetRequestDataAttributes,
    CustomRulesetResponse: CustomRulesetResponse,
    CustomRulesetRuleEmbedded: CustomRulesetRuleEmbedded,
    DefaultRulesetsPerLanguageData: DefaultRulesetsPerLanguageData,
    DefaultRulesetsPerLanguageDataAttributes:
      DefaultRulesetsPerLanguageDataAttributes,
    DefaultRulesetsPerLanguageResponse: DefaultRulesetsPerLanguageResponse,
    GetAstRequest: GetAstRequest,
    GetAstRequestData: GetAstRequestData,
    GetAstRequestDataAttributes: GetAstRequestDataAttributes,
    GetAstResponse: GetAstResponse,
    GetAstResponseData: GetAstResponseData,
    GetAstResponseDataAttributes: GetAstResponseDataAttributes,
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
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems:
      GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems,
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems:
      GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems,
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems:
      GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    LicensesListResponse: LicensesListResponse,
    LicensesListResponseData: LicensesListResponseData,
    LicensesListResponseDataAttributes: LicensesListResponseDataAttributes,
    LicensesListResponseDataAttributesLicensesItems:
      LicensesListResponseDataAttributesLicensesItems,
    McpScanRequest: McpScanRequest,
    McpScanRequestData: McpScanRequestData,
    McpScanRequestDataAttributes: McpScanRequestDataAttributes,
    McpScanRequestDataAttributesLibrariesItems:
      McpScanRequestDataAttributesLibrariesItems,
    McpScanRequestResponse: McpScanRequestResponse,
    McpScanRequestResponseData: McpScanRequestResponseData,
    McpScanRequestResponseDataAttributes: McpScanRequestResponseDataAttributes,
    NodeTypesResponse: NodeTypesResponse,
    NodeTypesResponseData: NodeTypesResponseData,
    NodeTypesResponseDataAttributes: NodeTypesResponseDataAttributes,
    ResolveVulnerableSymbolsRequest: ResolveVulnerableSymbolsRequest,
    ResolveVulnerableSymbolsRequestData: ResolveVulnerableSymbolsRequestData,
    ResolveVulnerableSymbolsRequestDataAttributes:
      ResolveVulnerableSymbolsRequestDataAttributes,
    ResolveVulnerableSymbolsResponse: ResolveVulnerableSymbolsResponse,
    ResolveVulnerableSymbolsResponseData: ResolveVulnerableSymbolsResponseData,
    ResolveVulnerableSymbolsResponseDataAttributes:
      ResolveVulnerableSymbolsResponseDataAttributes,
    ResolveVulnerableSymbolsResponseResults:
      ResolveVulnerableSymbolsResponseResults,
    ResolveVulnerableSymbolsResponseResultsVulnerableSymbols:
      ResolveVulnerableSymbolsResponseResultsVulnerableSymbols,
    ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols:
      ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols,
    RevertCustomRuleRevisionRequest: RevertCustomRuleRevisionRequest,
    RevertCustomRuleRevisionRequestData: RevertCustomRuleRevisionRequestData,
    RevertCustomRuleRevisionRequestDataAttributes:
      RevertCustomRuleRevisionRequestDataAttributes,
    SastRulesetData: SastRulesetData,
    SastRulesetDataAttributes: SastRulesetDataAttributes,
    SastRulesetResponse: SastRulesetResponse,
    SastRulesetsResponse: SastRulesetsResponse,
    ScaRequest: ScaRequest,
    ScaRequestData: ScaRequestData,
    ScaRequestDataAttributes: ScaRequestDataAttributes,
    ScaRequestDataAttributesCommit: ScaRequestDataAttributesCommit,
    ScaRequestDataAttributesDependenciesItems:
      ScaRequestDataAttributesDependenciesItems,
    ScaRequestDataAttributesDependenciesItemsLocationsItems:
      ScaRequestDataAttributesDependenciesItemsLocationsItems,
    ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition:
      ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition,
    ScaRequestDataAttributesDependenciesItemsLocationsItemsNullableFilePosition:
      ScaRequestDataAttributesDependenciesItemsLocationsItemsNullableFilePosition,
    ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition:
      ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition,
    ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems:
      ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems,
    ScaRequestDataAttributesFilesItems: ScaRequestDataAttributesFilesItems,
    ScaRequestDataAttributesRelationsItems:
      ScaRequestDataAttributesRelationsItems,
    ScaRequestDataAttributesRepository: ScaRequestDataAttributesRepository,
    ScaRequestDataAttributesScanStartTimestamp:
      ScaRequestDataAttributesScanStartTimestamp,
    ScaRequestDataAttributesTags: ScaRequestDataAttributesTags,
    ScaRequestDataAttributesTagsTool: ScaRequestDataAttributesTagsTool,
    ScaRequestDataAttributesTagsToolGenerator:
      ScaRequestDataAttributesTagsToolGenerator,
    ScaRequestDataAttributesVulnerabilitiesItems:
      ScaRequestDataAttributesVulnerabilitiesItems,
    ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems:
      ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems,
    SecretRuleArray: SecretRuleArray,
    SecretRuleData: SecretRuleData,
    SecretRuleDataAttributes: SecretRuleDataAttributes,
    SecretRuleDataAttributesMatchValidation:
      SecretRuleDataAttributesMatchValidation,
    SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems:
      SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems,
    SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems:
      SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems,
  },
};
