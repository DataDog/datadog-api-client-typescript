import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
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
import { CustomRulesetRequest } from "./CustomRulesetRequest";
import { CustomRulesetRequestData } from "./CustomRulesetRequestData";
import { CustomRulesetRequestDataAttributes } from "./CustomRulesetRequestDataAttributes";
import { CustomRulesetResponse } from "./CustomRulesetResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
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
    ResolveVulnerableSymbolsRequestDataType: [
      "resolve-vulnerable-symbols-request",
    ],
    ResolveVulnerableSymbolsResponseDataType: [
      "resolve-vulnerable-symbols-response",
    ],
    RevertCustomRuleRevisionDataType: ["revert_custom_rule_revision_request"],
    ScaRequestDataType: ["scarequests"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
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
    CustomRulesetRequest: CustomRulesetRequest,
    CustomRulesetRequestData: CustomRulesetRequestData,
    CustomRulesetRequestDataAttributes: CustomRulesetRequestDataAttributes,
    CustomRulesetResponse: CustomRulesetResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
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
