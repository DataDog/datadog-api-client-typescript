import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { TagPoliciesListResponse } from "./TagPoliciesListResponse";
import { TagPolicyAttributes } from "./TagPolicyAttributes";
import { TagPolicyCreateAttributes } from "./TagPolicyCreateAttributes";
import { TagPolicyCreateData } from "./TagPolicyCreateData";
import { TagPolicyCreateRequest } from "./TagPolicyCreateRequest";
import { TagPolicyData } from "./TagPolicyData";
import { TagPolicyRelationships } from "./TagPolicyRelationships";
import { TagPolicyResponse } from "./TagPolicyResponse";
import { TagPolicyScoreAttributes } from "./TagPolicyScoreAttributes";
import { TagPolicyScoreData } from "./TagPolicyScoreData";
import { TagPolicyScoreRelationship } from "./TagPolicyScoreRelationship";
import { TagPolicyScoreRelationshipData } from "./TagPolicyScoreRelationshipData";
import { TagPolicyScoreResponse } from "./TagPolicyScoreResponse";
import { TagPolicyUpdateAttributes } from "./TagPolicyUpdateAttributes";
import { TagPolicyUpdateData } from "./TagPolicyUpdateData";
import { TagPolicyUpdateRequest } from "./TagPolicyUpdateRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    TagPolicyCreateType: ["surfacing"],
    TagPolicyInclude: ["score"],
    TagPolicyResourceType: ["tag_policy"],
    TagPolicyScoreResourceType: ["tag_policy_score"],
    TagPolicySource: ["logs", "spans", "metrics", "rum", "feed"],
    TagPolicyType: ["blocking", "surfacing"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    TagPoliciesListResponse: TagPoliciesListResponse,
    TagPolicyAttributes: TagPolicyAttributes,
    TagPolicyCreateAttributes: TagPolicyCreateAttributes,
    TagPolicyCreateData: TagPolicyCreateData,
    TagPolicyCreateRequest: TagPolicyCreateRequest,
    TagPolicyData: TagPolicyData,
    TagPolicyRelationships: TagPolicyRelationships,
    TagPolicyResponse: TagPolicyResponse,
    TagPolicyScoreAttributes: TagPolicyScoreAttributes,
    TagPolicyScoreData: TagPolicyScoreData,
    TagPolicyScoreRelationship: TagPolicyScoreRelationship,
    TagPolicyScoreRelationshipData: TagPolicyScoreRelationshipData,
    TagPolicyScoreResponse: TagPolicyScoreResponse,
    TagPolicyUpdateAttributes: TagPolicyUpdateAttributes,
    TagPolicyUpdateData: TagPolicyUpdateData,
    TagPolicyUpdateRequest: TagPolicyUpdateRequest,
  },
};