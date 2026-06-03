import { ModelTypingInfo } from "@datadog/datadog-api-client";

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
import { Argument } from "./Argument";
import { CustomRule } from "./CustomRule";
import { CustomRuleRequest } from "./CustomRuleRequest";
import { CustomRuleRequestData } from "./CustomRuleRequestData";
import { CustomRuleRequestDataAttributes } from "./CustomRuleRequestDataAttributes";
import { CustomRuleResponse } from "./CustomRuleResponse";
import { CustomRuleResponseData } from "./CustomRuleResponseData";
import { CustomRuleRevision } from "./CustomRuleRevision";
import { CustomRuleRevisionAttributes } from "./CustomRuleRevisionAttributes";
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
import { ScaRequest } from "./ScaRequest";
import { ScaRequestData } from "./ScaRequestData";
import { ScaRequestDataAttributes } from "./ScaRequestDataAttributes";
import { ScaRequestDataAttributesCommit } from "./ScaRequestDataAttributesCommit";
import { ScaRequestDataAttributesDependenciesItems } from "./ScaRequestDataAttributesDependenciesItems";
import { ScaRequestDataAttributesDependenciesItemsLocationsItems } from "./ScaRequestDataAttributesDependenciesItemsLocationsItems";
import { ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition } from "./ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition";
import { ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition } from "./ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition";
import { ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems } from "./ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems";
import { ScaRequestDataAttributesFilesItems } from "./ScaRequestDataAttributesFilesItems";
import { ScaRequestDataAttributesRelationsItems } from "./ScaRequestDataAttributesRelationsItems";
import { ScaRequestDataAttributesRepository } from "./ScaRequestDataAttributesRepository";
import { ScaRequestDataAttributesVulnerabilitiesItems } from "./ScaRequestDataAttributesVulnerabilitiesItems";
import { ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems } from "./ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AiCustomRuleDataType: ["ai_rule"],
    AiCustomRuleRevisionDataType: ["ai_rule_revision"],
    AiCustomRuleRevisionExecutionMode: ["auto", "manual", "always"],
    AiCustomRulesetDataType: ["ai_ruleset"],
    AiMemoryViolationResultDataType: ["ai_memory_violation_result"],
    AiMemoryViolationType: ["TP", "FP"],
    AiPromptDataType: ["ai_prompt"],
    CustomRuleDataType: ["custom_rule"],
    CustomRuleRevisionAttributesCategory: [
      "SECURITY",
      "BEST_PRACTICES",
      "CODE_STYLE",
      "ERROR_PRONE",
      "PERFORMANCE",
    ],
    CustomRuleRevisionAttributesSeverity: ["ERROR", "WARNING", "NOTICE"],
    CustomRuleRevisionDataType: ["custom_rule_revision"],
    CustomRulesetDataType: ["custom_ruleset"],
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
    ],
    LicensesListResponseDataType: ["licenserequest"],
    McpScanRequestDataType: ["mcpscanrequest"],
    McpScanRequestResponseDataType: ["mcpscanrequestresponse"],
    ResolveVulnerableSymbolsRequestDataType: [
      "resolve-vulnerable-symbols-request",
    ],
    ResolveVulnerableSymbolsResponseDataType: [
      "resolve-vulnerable-symbols-response",
    ],
    RevertCustomRuleRevisionDataType: ["revert_custom_rule_revision_request"],
    ScaRequestDataType: ["scarequests"],
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
    Argument: Argument,
    CustomRule: CustomRule,
    CustomRuleRequest: CustomRuleRequest,
    CustomRuleRequestData: CustomRuleRequestData,
    CustomRuleRequestDataAttributes: CustomRuleRequestDataAttributes,
    CustomRuleResponse: CustomRuleResponse,
    CustomRuleResponseData: CustomRuleResponseData,
    CustomRuleRevision: CustomRuleRevision,
    CustomRuleRevisionAttributes: CustomRuleRevisionAttributes,
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
    ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition:
      ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition,
    ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems:
      ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems,
    ScaRequestDataAttributesFilesItems: ScaRequestDataAttributesFilesItems,
    ScaRequestDataAttributesRelationsItems:
      ScaRequestDataAttributesRelationsItems,
    ScaRequestDataAttributesRepository: ScaRequestDataAttributesRepository,
    ScaRequestDataAttributesVulnerabilitiesItems:
      ScaRequestDataAttributesVulnerabilitiesItems,
    ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems:
      ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems,
  },
};
