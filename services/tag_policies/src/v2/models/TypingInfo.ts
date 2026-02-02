import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { TagPoliciesResponse } from "./TagPoliciesResponse";
import { TagPolicyAttributesRequest } from "./TagPolicyAttributesRequest";
import { TagPolicyAttributesResponse } from "./TagPolicyAttributesResponse";
import { TagPolicyAttributesUpdateRequest } from "./TagPolicyAttributesUpdateRequest";
import { TagPolicyCreateRequest } from "./TagPolicyCreateRequest";
import { TagPolicyDataRequest } from "./TagPolicyDataRequest";
import { TagPolicyDataResponse } from "./TagPolicyDataResponse";
import { TagPolicyDataUpdateRequest } from "./TagPolicyDataUpdateRequest";
import { TagPolicyResponse } from "./TagPolicyResponse";
import { TagPolicyScoreAttributesResponse } from "./TagPolicyScoreAttributesResponse";
import { TagPolicyScoreDataResponse } from "./TagPolicyScoreDataResponse";
import { TagPolicyScoreResponse } from "./TagPolicyScoreResponse";
import { TagPolicyUpdateRequest } from "./TagPolicyUpdateRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    TagPolicyScoreType: ["tag_policy_score"],
    TagPolicyType: ["tag_policy"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    TagPoliciesResponse: TagPoliciesResponse,
    TagPolicyAttributesRequest: TagPolicyAttributesRequest,
    TagPolicyAttributesResponse: TagPolicyAttributesResponse,
    TagPolicyAttributesUpdateRequest: TagPolicyAttributesUpdateRequest,
    TagPolicyCreateRequest: TagPolicyCreateRequest,
    TagPolicyDataRequest: TagPolicyDataRequest,
    TagPolicyDataResponse: TagPolicyDataResponse,
    TagPolicyDataUpdateRequest: TagPolicyDataUpdateRequest,
    TagPolicyResponse: TagPolicyResponse,
    TagPolicyScoreAttributesResponse: TagPolicyScoreAttributesResponse,
    TagPolicyScoreDataResponse: TagPolicyScoreDataResponse,
    TagPolicyScoreResponse: TagPolicyScoreResponse,
    TagPolicyUpdateRequest: TagPolicyUpdateRequest,
  },
};
