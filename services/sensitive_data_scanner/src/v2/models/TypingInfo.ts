import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { SensitiveDataScannerConfigRequest } from "./SensitiveDataScannerConfigRequest";
import { SensitiveDataScannerConfiguration } from "./SensitiveDataScannerConfiguration";
import { SensitiveDataScannerConfigurationData } from "./SensitiveDataScannerConfigurationData";
import { SensitiveDataScannerConfigurationRelationships } from "./SensitiveDataScannerConfigurationRelationships";
import { SensitiveDataScannerCreateGroupResponse } from "./SensitiveDataScannerCreateGroupResponse";
import { SensitiveDataScannerCreateRuleResponse } from "./SensitiveDataScannerCreateRuleResponse";
import { SensitiveDataScannerFilter } from "./SensitiveDataScannerFilter";
import { SensitiveDataScannerGetConfigResponse } from "./SensitiveDataScannerGetConfigResponse";
import { SensitiveDataScannerGetConfigResponseData } from "./SensitiveDataScannerGetConfigResponseData";
import { SensitiveDataScannerGroup } from "./SensitiveDataScannerGroup";
import { SensitiveDataScannerGroupAttributes } from "./SensitiveDataScannerGroupAttributes";
import { SensitiveDataScannerGroupCreate } from "./SensitiveDataScannerGroupCreate";
import { SensitiveDataScannerGroupCreateRequest } from "./SensitiveDataScannerGroupCreateRequest";
import { SensitiveDataScannerGroupData } from "./SensitiveDataScannerGroupData";
import { SensitiveDataScannerGroupDeleteRequest } from "./SensitiveDataScannerGroupDeleteRequest";
import { SensitiveDataScannerGroupDeleteResponse } from "./SensitiveDataScannerGroupDeleteResponse";
import { SensitiveDataScannerGroupIncludedItem } from "./SensitiveDataScannerGroupIncludedItem";
import { SensitiveDataScannerGroupItem } from "./SensitiveDataScannerGroupItem";
import { SensitiveDataScannerGroupList } from "./SensitiveDataScannerGroupList";
import { SensitiveDataScannerGroupRelationships } from "./SensitiveDataScannerGroupRelationships";
import { SensitiveDataScannerGroupResponse } from "./SensitiveDataScannerGroupResponse";
import { SensitiveDataScannerGroupUpdate } from "./SensitiveDataScannerGroupUpdate";
import { SensitiveDataScannerGroupUpdateRequest } from "./SensitiveDataScannerGroupUpdateRequest";
import { SensitiveDataScannerGroupUpdateResponse } from "./SensitiveDataScannerGroupUpdateResponse";
import { SensitiveDataScannerIncludedKeywordConfiguration } from "./SensitiveDataScannerIncludedKeywordConfiguration";
import { SensitiveDataScannerMeta } from "./SensitiveDataScannerMeta";
import { SensitiveDataScannerMetaVersionOnly } from "./SensitiveDataScannerMetaVersionOnly";
import { SensitiveDataScannerReorderConfig } from "./SensitiveDataScannerReorderConfig";
import { SensitiveDataScannerReorderGroupsResponse } from "./SensitiveDataScannerReorderGroupsResponse";
import { SensitiveDataScannerRule } from "./SensitiveDataScannerRule";
import { SensitiveDataScannerRuleAttributes } from "./SensitiveDataScannerRuleAttributes";
import { SensitiveDataScannerRuleCreate } from "./SensitiveDataScannerRuleCreate";
import { SensitiveDataScannerRuleCreateRequest } from "./SensitiveDataScannerRuleCreateRequest";
import { SensitiveDataScannerRuleData } from "./SensitiveDataScannerRuleData";
import { SensitiveDataScannerRuleDeleteRequest } from "./SensitiveDataScannerRuleDeleteRequest";
import { SensitiveDataScannerRuleDeleteResponse } from "./SensitiveDataScannerRuleDeleteResponse";
import { SensitiveDataScannerRuleIncludedItem } from "./SensitiveDataScannerRuleIncludedItem";
import { SensitiveDataScannerRuleRelationships } from "./SensitiveDataScannerRuleRelationships";
import { SensitiveDataScannerRuleResponse } from "./SensitiveDataScannerRuleResponse";
import { SensitiveDataScannerRuleUpdate } from "./SensitiveDataScannerRuleUpdate";
import { SensitiveDataScannerRuleUpdateRequest } from "./SensitiveDataScannerRuleUpdateRequest";
import { SensitiveDataScannerRuleUpdateResponse } from "./SensitiveDataScannerRuleUpdateResponse";
import { SensitiveDataScannerSamplings } from "./SensitiveDataScannerSamplings";
import { SensitiveDataScannerStandardPattern } from "./SensitiveDataScannerStandardPattern";
import { SensitiveDataScannerStandardPatternAttributes } from "./SensitiveDataScannerStandardPatternAttributes";
import { SensitiveDataScannerStandardPatternData } from "./SensitiveDataScannerStandardPatternData";
import { SensitiveDataScannerStandardPatternsResponseData } from "./SensitiveDataScannerStandardPatternsResponseData";
import { SensitiveDataScannerStandardPatternsResponseItem } from "./SensitiveDataScannerStandardPatternsResponseItem";
import { SensitiveDataScannerTextReplacement } from "./SensitiveDataScannerTextReplacement";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    SensitiveDataScannerConfigurationType: [
      "sensitive_data_scanner_configuration",
    ],
    SensitiveDataScannerGroupType: ["sensitive_data_scanner_group"],
    SensitiveDataScannerProduct: ["logs", "rum", "events", "apm"],
    SensitiveDataScannerRuleType: ["sensitive_data_scanner_rule"],
    SensitiveDataScannerStandardPatternType: [
      "sensitive_data_scanner_standard_pattern",
    ],
    SensitiveDataScannerTextReplacementType: [
      "none",
      "hash",
      "replacement_string",
      "partial_replacement_from_beginning",
      "partial_replacement_from_end",
    ],
  },
  oneOfMap: {
    SensitiveDataScannerGetConfigIncludedItem: [
      "SensitiveDataScannerRuleIncludedItem",
      "SensitiveDataScannerGroupIncludedItem",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    SensitiveDataScannerConfigRequest: SensitiveDataScannerConfigRequest,
    SensitiveDataScannerConfiguration: SensitiveDataScannerConfiguration,
    SensitiveDataScannerConfigurationData:
      SensitiveDataScannerConfigurationData,
    SensitiveDataScannerConfigurationRelationships:
      SensitiveDataScannerConfigurationRelationships,
    SensitiveDataScannerCreateGroupResponse:
      SensitiveDataScannerCreateGroupResponse,
    SensitiveDataScannerCreateRuleResponse:
      SensitiveDataScannerCreateRuleResponse,
    SensitiveDataScannerFilter: SensitiveDataScannerFilter,
    SensitiveDataScannerGetConfigResponse:
      SensitiveDataScannerGetConfigResponse,
    SensitiveDataScannerGetConfigResponseData:
      SensitiveDataScannerGetConfigResponseData,
    SensitiveDataScannerGroup: SensitiveDataScannerGroup,
    SensitiveDataScannerGroupAttributes: SensitiveDataScannerGroupAttributes,
    SensitiveDataScannerGroupCreate: SensitiveDataScannerGroupCreate,
    SensitiveDataScannerGroupCreateRequest:
      SensitiveDataScannerGroupCreateRequest,
    SensitiveDataScannerGroupData: SensitiveDataScannerGroupData,
    SensitiveDataScannerGroupDeleteRequest:
      SensitiveDataScannerGroupDeleteRequest,
    SensitiveDataScannerGroupDeleteResponse:
      SensitiveDataScannerGroupDeleteResponse,
    SensitiveDataScannerGroupIncludedItem:
      SensitiveDataScannerGroupIncludedItem,
    SensitiveDataScannerGroupItem: SensitiveDataScannerGroupItem,
    SensitiveDataScannerGroupList: SensitiveDataScannerGroupList,
    SensitiveDataScannerGroupRelationships:
      SensitiveDataScannerGroupRelationships,
    SensitiveDataScannerGroupResponse: SensitiveDataScannerGroupResponse,
    SensitiveDataScannerGroupUpdate: SensitiveDataScannerGroupUpdate,
    SensitiveDataScannerGroupUpdateRequest:
      SensitiveDataScannerGroupUpdateRequest,
    SensitiveDataScannerGroupUpdateResponse:
      SensitiveDataScannerGroupUpdateResponse,
    SensitiveDataScannerIncludedKeywordConfiguration:
      SensitiveDataScannerIncludedKeywordConfiguration,
    SensitiveDataScannerMeta: SensitiveDataScannerMeta,
    SensitiveDataScannerMetaVersionOnly: SensitiveDataScannerMetaVersionOnly,
    SensitiveDataScannerReorderConfig: SensitiveDataScannerReorderConfig,
    SensitiveDataScannerReorderGroupsResponse:
      SensitiveDataScannerReorderGroupsResponse,
    SensitiveDataScannerRule: SensitiveDataScannerRule,
    SensitiveDataScannerRuleAttributes: SensitiveDataScannerRuleAttributes,
    SensitiveDataScannerRuleCreate: SensitiveDataScannerRuleCreate,
    SensitiveDataScannerRuleCreateRequest:
      SensitiveDataScannerRuleCreateRequest,
    SensitiveDataScannerRuleData: SensitiveDataScannerRuleData,
    SensitiveDataScannerRuleDeleteRequest:
      SensitiveDataScannerRuleDeleteRequest,
    SensitiveDataScannerRuleDeleteResponse:
      SensitiveDataScannerRuleDeleteResponse,
    SensitiveDataScannerRuleIncludedItem: SensitiveDataScannerRuleIncludedItem,
    SensitiveDataScannerRuleRelationships:
      SensitiveDataScannerRuleRelationships,
    SensitiveDataScannerRuleResponse: SensitiveDataScannerRuleResponse,
    SensitiveDataScannerRuleUpdate: SensitiveDataScannerRuleUpdate,
    SensitiveDataScannerRuleUpdateRequest:
      SensitiveDataScannerRuleUpdateRequest,
    SensitiveDataScannerRuleUpdateResponse:
      SensitiveDataScannerRuleUpdateResponse,
    SensitiveDataScannerSamplings: SensitiveDataScannerSamplings,
    SensitiveDataScannerStandardPattern: SensitiveDataScannerStandardPattern,
    SensitiveDataScannerStandardPatternAttributes:
      SensitiveDataScannerStandardPatternAttributes,
    SensitiveDataScannerStandardPatternData:
      SensitiveDataScannerStandardPatternData,
    SensitiveDataScannerStandardPatternsResponseData:
      SensitiveDataScannerStandardPatternsResponseData,
    SensitiveDataScannerStandardPatternsResponseItem:
      SensitiveDataScannerStandardPatternsResponseItem,
    SensitiveDataScannerTextReplacement: SensitiveDataScannerTextReplacement,
  },
};
