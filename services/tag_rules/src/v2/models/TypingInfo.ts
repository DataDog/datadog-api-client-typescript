import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { TagRuleAttributes } from "./TagRuleAttributes";
import { TagRuleCreateAttributes } from "./TagRuleCreateAttributes";
import { TagRuleCreateData } from "./TagRuleCreateData";
import { TagRuleCreateRequest } from "./TagRuleCreateRequest";
import { TagRuleData } from "./TagRuleData";
import { TagRuleRelationships } from "./TagRuleRelationships";
import { TagRuleResponse } from "./TagRuleResponse";
import { TagRuleScoreAttributes } from "./TagRuleScoreAttributes";
import { TagRuleScoreData } from "./TagRuleScoreData";
import { TagRuleScoreRelationship } from "./TagRuleScoreRelationship";
import { TagRuleScoreRelationshipData } from "./TagRuleScoreRelationshipData";
import { TagRuleScoreResponse } from "./TagRuleScoreResponse";
import { TagRuleUpdateAttributes } from "./TagRuleUpdateAttributes";
import { TagRuleUpdateData } from "./TagRuleUpdateData";
import { TagRuleUpdateRequest } from "./TagRuleUpdateRequest";
import { TagRulesListResponse } from "./TagRulesListResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    TagRuleCreateType: ["surfacing"],
    TagRuleInclude: ["score"],
    TagRuleResourceType: ["tag_rule"],
    TagRuleScoreResourceType: ["tag_rule_score"],
    TagRuleSource: ["logs", "spans", "metrics", "rum", "feed"],
    TagRuleType: ["blocking", "surfacing"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    TagRuleAttributes: TagRuleAttributes,
    TagRuleCreateAttributes: TagRuleCreateAttributes,
    TagRuleCreateData: TagRuleCreateData,
    TagRuleCreateRequest: TagRuleCreateRequest,
    TagRuleData: TagRuleData,
    TagRuleRelationships: TagRuleRelationships,
    TagRuleResponse: TagRuleResponse,
    TagRuleScoreAttributes: TagRuleScoreAttributes,
    TagRuleScoreData: TagRuleScoreData,
    TagRuleScoreRelationship: TagRuleScoreRelationship,
    TagRuleScoreRelationshipData: TagRuleScoreRelationshipData,
    TagRuleScoreResponse: TagRuleScoreResponse,
    TagRuleUpdateAttributes: TagRuleUpdateAttributes,
    TagRuleUpdateData: TagRuleUpdateData,
    TagRuleUpdateRequest: TagRuleUpdateRequest,
    TagRulesListResponse: TagRulesListResponse,
  },
};
