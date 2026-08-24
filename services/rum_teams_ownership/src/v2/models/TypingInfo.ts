import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { TeamsOwnershipMappingBatchError } from "./TeamsOwnershipMappingBatchError";
import { TeamsOwnershipMappingBatchOperation } from "./TeamsOwnershipMappingBatchOperation";
import { TeamsOwnershipMappingBatchOperationData } from "./TeamsOwnershipMappingBatchOperationData";
import { TeamsOwnershipMappingBatchOperationDataAttributes } from "./TeamsOwnershipMappingBatchOperationDataAttributes";
import { TeamsOwnershipMappingBatchOperationRef } from "./TeamsOwnershipMappingBatchOperationRef";
import { TeamsOwnershipMappingBatchRequest } from "./TeamsOwnershipMappingBatchRequest";
import { TeamsOwnershipMappingBatchResponse } from "./TeamsOwnershipMappingBatchResponse";
import { TeamsOwnershipMappingBatchResult } from "./TeamsOwnershipMappingBatchResult";
import { TeamsOwnershipMappingBatchResultData } from "./TeamsOwnershipMappingBatchResultData";
import { TeamsOwnershipMappingBatchResultDataAttributes } from "./TeamsOwnershipMappingBatchResultDataAttributes";
import { TeamsOwnershipMappingCreateData } from "./TeamsOwnershipMappingCreateData";
import { TeamsOwnershipMappingCreateDataAttributes } from "./TeamsOwnershipMappingCreateDataAttributes";
import { TeamsOwnershipMappingCreateRequest } from "./TeamsOwnershipMappingCreateRequest";
import { TeamsOwnershipMappingResponse } from "./TeamsOwnershipMappingResponse";
import { TeamsOwnershipMappingResponseAttributes } from "./TeamsOwnershipMappingResponseAttributes";
import { TeamsOwnershipMappingResponseData } from "./TeamsOwnershipMappingResponseData";
import { TeamsOwnershipMappingsResponse } from "./TeamsOwnershipMappingsResponse";
import { TeamsOwnershipRuleResponseAttributes } from "./TeamsOwnershipRuleResponseAttributes";
import { TeamsOwnershipRuleResponseData } from "./TeamsOwnershipRuleResponseData";
import { TeamsOwnershipRuleTeamMapping } from "./TeamsOwnershipRuleTeamMapping";
import { TeamsOwnershipRulesResponse } from "./TeamsOwnershipRulesResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    TeamsOwnershipMappingBatchOperationOp: ["add", "remove"],
    TeamsOwnershipMappingType: ["teams_ownership_mappings"],
    TeamsOwnershipMatchType: ["exact", "prefix"],
    TeamsOwnershipRuleType: ["teams_ownership_grouped_mappings"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    TeamsOwnershipMappingBatchError: TeamsOwnershipMappingBatchError,
    TeamsOwnershipMappingBatchOperation: TeamsOwnershipMappingBatchOperation,
    TeamsOwnershipMappingBatchOperationData:
      TeamsOwnershipMappingBatchOperationData,
    TeamsOwnershipMappingBatchOperationDataAttributes:
      TeamsOwnershipMappingBatchOperationDataAttributes,
    TeamsOwnershipMappingBatchOperationRef:
      TeamsOwnershipMappingBatchOperationRef,
    TeamsOwnershipMappingBatchRequest: TeamsOwnershipMappingBatchRequest,
    TeamsOwnershipMappingBatchResponse: TeamsOwnershipMappingBatchResponse,
    TeamsOwnershipMappingBatchResult: TeamsOwnershipMappingBatchResult,
    TeamsOwnershipMappingBatchResultData: TeamsOwnershipMappingBatchResultData,
    TeamsOwnershipMappingBatchResultDataAttributes:
      TeamsOwnershipMappingBatchResultDataAttributes,
    TeamsOwnershipMappingCreateData: TeamsOwnershipMappingCreateData,
    TeamsOwnershipMappingCreateDataAttributes:
      TeamsOwnershipMappingCreateDataAttributes,
    TeamsOwnershipMappingCreateRequest: TeamsOwnershipMappingCreateRequest,
    TeamsOwnershipMappingResponse: TeamsOwnershipMappingResponse,
    TeamsOwnershipMappingResponseAttributes:
      TeamsOwnershipMappingResponseAttributes,
    TeamsOwnershipMappingResponseData: TeamsOwnershipMappingResponseData,
    TeamsOwnershipMappingsResponse: TeamsOwnershipMappingsResponse,
    TeamsOwnershipRuleResponseAttributes: TeamsOwnershipRuleResponseAttributes,
    TeamsOwnershipRuleResponseData: TeamsOwnershipRuleResponseData,
    TeamsOwnershipRuleTeamMapping: TeamsOwnershipRuleTeamMapping,
    TeamsOwnershipRulesResponse: TeamsOwnershipRulesResponse,
  },
};
