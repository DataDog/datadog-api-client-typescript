import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CreateRuleRequest } from "./CreateRuleRequest";
import { CreateRuleRequestData } from "./CreateRuleRequestData";
import { CreateRuleResponse } from "./CreateRuleResponse";
import { CreateRuleResponseData } from "./CreateRuleResponseData";
import { ListRulesResponse } from "./ListRulesResponse";
import { ListRulesResponseDataItem } from "./ListRulesResponseDataItem";
import { ListRulesResponseLinks } from "./ListRulesResponseLinks";
import { OutcomesBatchAttributes } from "./OutcomesBatchAttributes";
import { OutcomesBatchRequest } from "./OutcomesBatchRequest";
import { OutcomesBatchRequestData } from "./OutcomesBatchRequestData";
import { OutcomesBatchRequestItem } from "./OutcomesBatchRequestItem";
import { OutcomesBatchResponse } from "./OutcomesBatchResponse";
import { OutcomesBatchResponseAttributes } from "./OutcomesBatchResponseAttributes";
import { OutcomesBatchResponseMeta } from "./OutcomesBatchResponseMeta";
import { OutcomesResponse } from "./OutcomesResponse";
import { OutcomesResponseDataItem } from "./OutcomesResponseDataItem";
import { OutcomesResponseIncludedItem } from "./OutcomesResponseIncludedItem";
import { OutcomesResponseIncludedRuleAttributes } from "./OutcomesResponseIncludedRuleAttributes";
import { OutcomesResponseLinks } from "./OutcomesResponseLinks";
import { RelationshipToOutcome } from "./RelationshipToOutcome";
import { RelationshipToOutcomeData } from "./RelationshipToOutcomeData";
import { RelationshipToRule } from "./RelationshipToRule";
import { RelationshipToRuleData } from "./RelationshipToRuleData";
import { RelationshipToRuleDataObject } from "./RelationshipToRuleDataObject";
import { RuleAttributes } from "./RuleAttributes";
import { RuleOutcomeRelationships } from "./RuleOutcomeRelationships";
import { UpdateOutcomesAsyncAttributes } from "./UpdateOutcomesAsyncAttributes";
import { UpdateOutcomesAsyncRequest } from "./UpdateOutcomesAsyncRequest";
import { UpdateOutcomesAsyncRequestData } from "./UpdateOutcomesAsyncRequestData";
import { UpdateOutcomesAsyncRequestItem } from "./UpdateOutcomesAsyncRequestItem";
import { UpdateRuleRequest } from "./UpdateRuleRequest";
import { UpdateRuleRequestData } from "./UpdateRuleRequestData";
import { UpdateRuleResponse } from "./UpdateRuleResponse";
import { UpdateRuleResponseData } from "./UpdateRuleResponseData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    OutcomeType: ["outcome"],
    OutcomesBatchType: ["batched-outcome"],
    RuleType: ["rule"],
    ScorecardType: ["scorecard"],
    State: ["pass", "fail", "skip"],
    UpdateOutcomesAsyncType: ["batched-outcome"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CreateRuleRequest: CreateRuleRequest,
    CreateRuleRequestData: CreateRuleRequestData,
    CreateRuleResponse: CreateRuleResponse,
    CreateRuleResponseData: CreateRuleResponseData,
    ListRulesResponse: ListRulesResponse,
    ListRulesResponseDataItem: ListRulesResponseDataItem,
    ListRulesResponseLinks: ListRulesResponseLinks,
    OutcomesBatchAttributes: OutcomesBatchAttributes,
    OutcomesBatchRequest: OutcomesBatchRequest,
    OutcomesBatchRequestData: OutcomesBatchRequestData,
    OutcomesBatchRequestItem: OutcomesBatchRequestItem,
    OutcomesBatchResponse: OutcomesBatchResponse,
    OutcomesBatchResponseAttributes: OutcomesBatchResponseAttributes,
    OutcomesBatchResponseMeta: OutcomesBatchResponseMeta,
    OutcomesResponse: OutcomesResponse,
    OutcomesResponseDataItem: OutcomesResponseDataItem,
    OutcomesResponseIncludedItem: OutcomesResponseIncludedItem,
    OutcomesResponseIncludedRuleAttributes:
      OutcomesResponseIncludedRuleAttributes,
    OutcomesResponseLinks: OutcomesResponseLinks,
    RelationshipToOutcome: RelationshipToOutcome,
    RelationshipToOutcomeData: RelationshipToOutcomeData,
    RelationshipToRule: RelationshipToRule,
    RelationshipToRuleData: RelationshipToRuleData,
    RelationshipToRuleDataObject: RelationshipToRuleDataObject,
    RuleAttributes: RuleAttributes,
    RuleOutcomeRelationships: RuleOutcomeRelationships,
    UpdateOutcomesAsyncAttributes: UpdateOutcomesAsyncAttributes,
    UpdateOutcomesAsyncRequest: UpdateOutcomesAsyncRequest,
    UpdateOutcomesAsyncRequestData: UpdateOutcomesAsyncRequestData,
    UpdateOutcomesAsyncRequestItem: UpdateOutcomesAsyncRequestItem,
    UpdateRuleRequest: UpdateRuleRequest,
    UpdateRuleRequestData: UpdateRuleRequestData,
    UpdateRuleResponse: UpdateRuleResponse,
    UpdateRuleResponseData: UpdateRuleResponseData,
  },
};
